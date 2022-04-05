import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewTaskComponent } from './view-new-task.component';

describe('ViewNewTaskComponent', () => {
  let component: ViewNewTaskComponent;
  let fixture: ComponentFixture<ViewNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
