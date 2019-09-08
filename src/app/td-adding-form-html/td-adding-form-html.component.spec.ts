import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAddingFormHtmlComponent } from './td-adding-form-html.component';

describe('TdAddingFormHtmlComponent', () => {
  let component: TdAddingFormHtmlComponent;
  let fixture: ComponentFixture<TdAddingFormHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdAddingFormHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAddingFormHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
