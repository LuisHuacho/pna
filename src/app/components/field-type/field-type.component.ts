import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss']
})
export class FieldTypeComponent implements OnInit {

  @Input() typeField:string = 'text';
  @Input() dataType:string = 'static';
  @Input() labelField:string;
  @Input() optionsField:any = [];
  @Input() requiredField:boolean = false;
  @Input() valueField:any = '';
  @Output() valueFieldUpdate = new EventEmitter<any>();

  constructor() {
    
  }
  
  ngOnInit(): void {
    this.setData();
  }

  setData() {
    let _root = this;
    if(_root.typeField == 'select') {
      if(_root.dataType == 'async') {
        setTimeout(() => {
          _root.optionsField = [
            {label: 'Conocimiento Ambiental - async', value: 'Conocimiento Ambiental'},
            {label: 'Perú Limpio - async', value: 'Perú Limpio'},
            {label: 'Perú Natural - async', value: 'Perú Natural'}
          ];
        }, 5000);
      }
    }
  }
  
  updateValue(event) {
    this.valueField = event.target.value;
    this.valueFieldUpdate.emit(this.valueField);
  }
}
