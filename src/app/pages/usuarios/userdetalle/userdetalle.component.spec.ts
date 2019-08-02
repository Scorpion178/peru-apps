import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetalleComponent } from './userdetalle.component';

describe('UserdetalleComponent', () => {
  let component: UserdetalleComponent;
  let fixture: ComponentFixture<UserdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
