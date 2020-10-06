import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionDownloadComponent } from './postulacion-download.component';

describe('PostulacionDownloadComponent', () => {
  let component: PostulacionDownloadComponent;
  let fixture: ComponentFixture<PostulacionDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
