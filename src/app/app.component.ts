import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first demo';
  obj = {
    id: "1",
    name: "Jacko"
  }

  arr = ["primero", "segundo", "tercero"];

  isTrue = true;
  myName = "Jacobo";

  dat = new Date(1988,8,11);

  nums = [1, 2, 5, 7, 4, 9, 3, 8, 6];
}
