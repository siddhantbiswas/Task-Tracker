import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t._id !== task._id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe(resp => console.log(resp));
  }

  addTask(task: Task) {
    // this.taskService.addTask(task).subscribe((newtask) => this.tasks.push(newtask));
    this.taskService.addTask(task).subscribe((resp) => {
      const newtask = resp;
      this.tasks.push(newtask)
    });
  }

  copyTask(task: Task) {
      // this.taskService.addTask(task).subscribe((newtask) => this.tasks.push(newtask));
      const copyTask = task;
      copyTask.text = task.text + "copy";
      // delete task._id;
      // delete task.__v;
      console.log(copyTask);
      this.taskService.addTask(copyTask).subscribe((resp) => {
        const newtask = resp;
        this.tasks.push(newtask)
      }); 

  }
}
