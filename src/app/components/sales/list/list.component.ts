import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { selectRowInterface } from 'src/app/advance-table/advance-table.component';
import { SALESCOLUMN } from 'src/app/core/constants/sales.constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  SelectionType = SelectionType;
  columns = SALESCOLUMN;
  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data: any[] = [];
  filteredData: any[] = [];
  addSales!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption!: string;
  reorderable = true;
  public selected: number[] = [];
  @ViewChild(DatatableComponent, { static: false }) table2!: DatatableComponent;
  selection!: SelectionType;
  constructor( private fb: UntypedFormBuilder,
    private modalService: NgbModal, private router: Router){
      window.onresize = () => {
        this.scrollBarHorizontal = window.innerWidth < 1200;
      };
      this.selection = SelectionType.checkbox;
    }
    onEditSave(event: any){
       console.log(event)
    }

    ngOnInit() {
      this.fetch((data: any) => {
        this.data = data;
        this.filteredData = data;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      });
      this.addSales = this.fb.group({
        id: [''],
        agent: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        project: ['',[Validators.required]],
        developer: ['', [Validators.required]],
        salesDate: ['', [Validators.required]],
        value: ['', [Validators.required]],
      });
    }
    fetch(cb: any) {
      const req = new XMLHttpRequest();
      req.open('GET', 'assets/data/sales-data.json');
      req.onload = () => {
        const data = JSON.parse(req.response);
        cb(data);
      };
      req.send();
    }
  // select record using check box
  onSelect({ selected }: { selected: any }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }

    this.router.navigateByUrl('sales/sales-view')
  }
  // add new record
  addRow(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }


  onSaveForm(event: any){
    console.log("TEST FORM", this.addSales)
  }

  filterDatatable(event: any) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable

    this.data = this.filteredData.filter((item) => {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
      return false;
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
