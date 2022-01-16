import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCookiesComponent } from './admin-cookies.component';

describe('AdminCookiesComponent', () => {
  let component: AdminCookiesComponent;
  let fixture: ComponentFixture<AdminCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
