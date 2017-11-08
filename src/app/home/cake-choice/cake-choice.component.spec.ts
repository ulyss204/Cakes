import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeChoiceComponent } from './cake-choice.component';

describe('CakeChoiceComponent', () => {
  let component: CakeChoiceComponent;
  let fixture: ComponentFixture<CakeChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
