import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaEquirectangularComponent } from './panorama-equirectangular.component';

describe('PanoramaEquirectangularComponent', () => {
  let component: PanoramaEquirectangularComponent;
  let fixture: ComponentFixture<PanoramaEquirectangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaEquirectangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaEquirectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
