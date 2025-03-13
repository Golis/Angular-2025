import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: false,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  name:string = 'Hack A BOSS';
  imageUrl: string = 'url de la imagen'

  onButtonClick(){
    this.name="Angular Students";
  }


}
