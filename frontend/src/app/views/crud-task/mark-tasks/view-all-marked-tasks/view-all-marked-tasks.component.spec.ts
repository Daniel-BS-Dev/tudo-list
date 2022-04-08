import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMarkedTasksComponent } from './view-all-marked-tasks.component';

describe('ViewAllMarkedTasksComponent', () => {
  let component: ViewAllMarkedTasksComponent;
  let fixture: ComponentFixture<ViewAllMarkedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMarkedTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMarkedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
