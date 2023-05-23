import { Component } from '@angular/core';

const HEROES =[
  
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
home:string = 'Salut sunt in componenta Home';
colorP:string ='red';
}
