import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader-widget',
  templateUrl: './preloader-widget.component.html',
  styleUrls: ['./preloader-widget.component.scss']
})
export class PreloaderWidgetComponent implements OnInit {

  @Input() type:string = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
