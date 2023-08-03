import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { selectRowInterface } from 'src/app/advance-table/advance-table.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() columns = [];
  @Input() data:  any[] = [];

  @Output() selectEmitter = new EventEmitter();

  selection!: SelectionType;
  filteredData: any[] = [];

  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';

  loadingIndicator = true;
  isRowSelected = false;
  selectedOption!: string;
  reorderable = true;
  public selected: number[] = [];
  constructor(){
  console.log("THIS IS CONSTRUCTOR");
  }

  onSelect(event: any){
    console.log("test", event);
    this.selectEmitter.emit(event)
  }
}
