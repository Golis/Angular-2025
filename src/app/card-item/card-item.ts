import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItem {
  @Input() childEmployee: any;
  @Output() employeeSelected = new EventEmitter<void>();

  onEmployeeSelected(){
    this.employeeSelected.emit(this.childEmployee);
  }

  onCheckRank(rank: string){
      if(rank === 'junior'){
        return { 'text-decoration': 'underline', 'color': 'blue' };
      } else{
        return null;
      }
  }
}
