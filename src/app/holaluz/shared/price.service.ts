import { retry, tap, finalize, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) {
  }

  getPrices(): Observable<any> {
    return this.http.get('./assets/prices.json').pipe(
      tap(res => console.table(res)),
      map(result => {
        return this.parseDate(result);
      })
    )
  }

  private parseDate(result) {
    let data = [];
    
    for (let name in result) {
      if (result.hasOwnProperty(name)) {
        const serie = {
          name: name,
          series: []
        };
        result[name].forEach(element => {
          let hours: any = Object.keys(element);
          hours.forEach(range => {
            let hour = range.split('-');
            hour = hour.map(number => { return parseInt(number,10)})
            let price = element[range];
            for (let index = hour[0]; index <= hour[1]; index++) {
              serie.series.push({ 'name': index.toString(), 'value': price });
            }
          });

        });
        data.push(serie);
      }
    }
    return data;
  }
}
