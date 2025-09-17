import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css'
})
export class Landingpage {
  constructor(private _router: Router){}

  onRedirect(path: string){
    this._router.navigate([path])
  }
}
