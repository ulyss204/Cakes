import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDetailsComponent } from './cake-details.component';

describe('CakeDetailsComponent', () => {
  let component: CakeDetailsComponent;
  let fixture: ComponentFixture<CakeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
