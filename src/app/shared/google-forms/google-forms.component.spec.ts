import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFormsComponent } from './google-forms.component';

describe('GoogleFormsComponent', () => {
  let component: GoogleFormsComponent;
  let fixture: ComponentFixture<GoogleFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleFormsComponent]
    });
    fixture = TestBed.createComponent(GoogleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
