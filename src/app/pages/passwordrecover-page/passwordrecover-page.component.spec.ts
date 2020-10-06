import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecoverPageComponent } from './passwordrecover-page.component';

describe('PasswordrecoverPageComponent', () => {
  let component: PasswordrecoverPageComponent;
  let fixture: ComponentFixture<PasswordrecoverPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordrecoverPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrecoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
