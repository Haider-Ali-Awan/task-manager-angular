import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskDialogueComponent } from './delete-task-dialogue.component';

describe('DeleteTaskDialogueComponent', () => {
  let component: DeleteTaskDialogueComponent;
  let fixture: ComponentFixture<DeleteTaskDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTaskDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTaskDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
