import { HolaluzModule } from './holaluz.module';

describe('HolaluzModule', () => {
  let holaluzModule: HolaluzModule;

  beforeEach(() => {
    holaluzModule = new HolaluzModule();
  });

  it('should create an instance', () => {
    expect(holaluzModule).toBeTruthy();
  });
});
