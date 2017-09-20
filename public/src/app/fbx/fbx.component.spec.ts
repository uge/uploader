import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbxComponent } from './fbx.component';

describe('FbxComponent', () => {
  let component: FbxComponent;
  let fixture: ComponentFixture<FbxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
