import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItem {
  @Input() employee: any;
  @Output() employeeSelected = new EventEmitter<void>();

  onEmployeeSelected(){
    this.employeeSelected.emit(this.employee);
  }
}
