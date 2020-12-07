import { Component } from '@angular/core';

@Component({
  selector: 'cpas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/submissions', icon: 'view_list', title: 'submissions' },
  ];
}
