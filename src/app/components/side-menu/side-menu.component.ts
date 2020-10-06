import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  _win:any = window;

  constructor() { }

  ngOnInit(): void {
  }

  logout(e) {
    e.preventDefault();

    let _root = this;
    
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_login');
    localStorage.removeItem('user_profile');
    localStorage.removeItem('postulacion');
    window.location.href = `${_root._win.relativePath }/login`;
  }

}
