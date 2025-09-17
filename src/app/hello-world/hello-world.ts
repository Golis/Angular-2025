import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: false,
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld {
  name: string = 'Hack A BOSS';
  imageUrl: string='https://angular.io/assets/images/logos/angular/angular.png';

  onButtonClick(){
    this.name = 'Curso Angular';    
  }

}
