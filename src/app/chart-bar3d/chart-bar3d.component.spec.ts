import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBar3dComponent } from './chart-bar3d.component';

describe('ChartBar3dComponent', () => {
  let component: ChartBar3dComponent;
  let fixture: ComponentFixture<ChartBar3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBar3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBar3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
