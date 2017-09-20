import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRecordsComponent } from './img-records.component';

describe('ImgRecordsComponent', () => {
  let component: ImgRecordsComponent;
  let fixture: ComponentFixture<ImgRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
