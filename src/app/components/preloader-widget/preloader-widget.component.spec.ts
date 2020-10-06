import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderWidgetComponent } from './preloader-widget.component';

describe('PreloaderWidgetComponent', () => {
  let component: PreloaderWidgetComponent;
  let fixture: ComponentFixture<PreloaderWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloaderWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
