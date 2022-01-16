import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCookiesAddComponent } from './admin-cookies-add.component';

describe('AdminCookiesAddComponent', () => {
  let component: AdminCookiesAddComponent;
  let fixture: ComponentFixture<AdminCookiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCookiesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCookiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
