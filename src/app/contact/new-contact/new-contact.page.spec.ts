import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewContactPage } from './new-contact.page';

describe('NewContactPage', () => {
  let component: NewContactPage;
  let fixture: ComponentFixture<NewContactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
