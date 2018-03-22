import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public item = {} ;

  public itemsList = [
    {"name":"Mark", "position":"CEO"},
    {"name":"David", "position":"Developer"},
    {"name":"Mark", "position":"CEO"},
    {"name":"Mark", "position":"CEO"}
  ];

  title = 'app';
}
