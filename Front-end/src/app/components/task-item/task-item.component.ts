import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onCopyTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCopy = faCopy;


  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }

  onCopy(task) {
    // console.log("copy", task);
    const copyTask: Task = {
      text : task.text,
      day : task.day,
      reminder : task.reminder

    }
    
    
    console.log("taskItem", copyTask);
    //console.log("deleteidItem", task);
    // this.onCopyTask.emit(task);
    this.onCopyTask.emit(copyTask);
  }
}
