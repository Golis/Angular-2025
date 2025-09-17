import { Component } from '@angular/core';

@Component({
  selector: 'app-helpcenter',
  standalone: false,
  templateUrl: './helpcenter.component.html',
  styleUrl: './helpcenter.component.css',
})
export class HelpcenterComponent {
  title = 'angular-curso';

  onKeyUpTitle(newTitle: string){
    this.title = newTitle;
  }
}
