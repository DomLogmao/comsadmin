import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { selectRowInterface } from 'src/app/advance-table/advance-table.component';
import { DEVELOPERCOLUMNS } from 'src/app/core/constants/developer.constants';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  columns = DEVELOPERCOLUMNS;
  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data: any[] = [];
  filteredData: any[] = [];
  editForm: UntypedFormGroup;
  addForm!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption!: string;
  reorderable = true;
  public selected: number[] = [];
  @ViewChild(DatatableComponent, { static: false }) table2!: DatatableComponent;
  selection!: SelectionType;
  constructor( private fb: UntypedFormBuilder,
    private modalService: NgbModal){
      this.editForm = this.fb.group({
        id: new UntypedFormControl(),
        name: new UntypedFormControl(),
        address: new UntypedFormControl(),
        phone: new UntypedFormControl(),
        email: new UntypedFormControl(),
        status: new UntypedFormControl(),
        agentCode: new UntypedFormControl()
      });

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
      this.addForm = this.fb.group({
        id: [''],
        img: [''],
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        lastName: [''],
        designation: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
        status: ['', [Validators.required]],
        address: [''],
      });
    }
    fetch(cb: any) {
      const req = new XMLHttpRequest();
      req.open('GET', 'assets/data/developer-data.json');
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
  }
  // add new record
  addRow(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }


  // edit record
  editRow(row: any, rowIndex: number, content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.editForm.setValue({
      id: row.id,
      name: row.name,
      address: row.address,
      phone: row.phone,
      email: row.email,
      status: row.status,
      agentCode: row.agentCode,

    });
    this.selectedRowData = row;
  }

  onSaveForm(event: any){
    console.log("TEST FORM", this.addForm)
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
