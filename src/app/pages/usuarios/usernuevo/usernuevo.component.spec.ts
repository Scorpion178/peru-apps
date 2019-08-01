import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernuevoComponent } from './usernuevo.component';

describe('UsernuevoComponent', () => {
  let component: UsernuevoComponent;
  let fixture: ComponentFixture<UsernuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
