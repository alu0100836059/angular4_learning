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
}
