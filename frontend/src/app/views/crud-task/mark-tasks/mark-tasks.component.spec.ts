import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTasksComponent } from './mark-tasks.component';

describe('MarkTasksComponent', () => {
  let component: MarkTasksComponent;
  let fixture: ComponentFixture<MarkTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
