import { async, TestBed } from '@angular/core/testing';
import { TimepickerModule } from './timepicker.module';

describe('TimepickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TimepickerModule]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TimepickerModule).toBeDefined();
  });
});
