import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddTaskComponent } from './view-add-task.component';

describe('ViewAddTaskComponent', () => {
  let component: ViewAddTaskComponent;
  let fixture: ComponentFixture<ViewAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
