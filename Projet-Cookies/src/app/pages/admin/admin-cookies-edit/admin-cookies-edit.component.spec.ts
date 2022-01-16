import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCookiesEditComponent } from './admin-cookies-edit.component';

describe('AdminCookiesEditComponent', () => {
  let component: AdminCookiesEditComponent;
  let fixture: ComponentFixture<AdminCookiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCookiesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCookiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
