import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulacion-download',
  templateUrl: './postulacion-download.component.html',
  styleUrls: ['./postulacion-download.component.scss']
})
export class PostulacionDownloadComponent implements OnInit {

  @Input() printData:any = {};

  constructor() { }

  ngOnInit(): void {
    console.log( this.printData );
  }

}
