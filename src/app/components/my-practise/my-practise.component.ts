import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-practise',
  templateUrl: './my-practise.component.html',
  styleUrls: ['./my-practise.component.css'],
})
export class MyPractiseComponent {
  todo: string[] = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];

  inprogress: string[] = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  done: string[] = ['completed'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTodo(todoToAdd: string) {
    if (todoToAdd != '') {
      this.todo.push(todoToAdd);
    }
  }

  toggleModal = false;
  editString = '';
  editIndex!: number;
  changeArray!: string;
  openModel(item: string, index: number, array: string) {
    console.log(item, index);
    this.changeArray = array;
    this.editIndex = Number(index);
    document.getElementById('my-modal-3')?.click();
    this.editString = item;
    this.toggleModal = true;
  }
  editTodo(todoToedit: string, index: number) {
    console.log(todoToedit, index);

    if (todoToedit != '') {
      if (this.changeArray == 'done') {
        this.done[index] = todoToedit;
      } else if (this.changeArray == 'todo') {
        this.todo[index] = todoToedit;
      } else if (this.changeArray == 'inprogress') {
        this.inprogress[index] = todoToedit;
      }
    }
  }

  deleteTodo(index: number) {
    if (index !== undefined) {
      if (this.changeArray == 'done') {
        this.done = this.done.filter((a) => this.done.indexOf(a) != index);
      } else if (this.changeArray == 'todo') {
        this.todo = this.todo.filter((a) => this.todo.indexOf(a) != index);
      } else if (this.changeArray == 'inprogress') {
        this.inprogress = this.inprogress.filter(
          (a) => this.inprogress.indexOf(a) != index
        );
      }
    }
  }
}
