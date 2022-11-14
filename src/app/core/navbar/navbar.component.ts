import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items:MenuItem[] = []
  
  ngOnInit() {
    this.items = [
      {label: 'Домой', icon: 'pi pi-home', routerLink: ['/']},
      {label: 'Задачи', icon: 'pi pi-briefcase', routerLink: ['/tasks']},
      {label: 'Пользователи', icon: 'pi pi-id-card', routerLink: ['/users']},
    ]
  }
}
