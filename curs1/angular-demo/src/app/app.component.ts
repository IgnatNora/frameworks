// import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { reduce } from 'rxjs';
import { AlertaService } from './alerta.service';
import { User } from './model/user';


const HEROES = [
  {id: 1, name: 'Supermen'},
  {id: 2, name:'Spiderman'},
  {id: 3, name: 'Batman'},
  {id: 4, name: 'Wonderwomen'},
  {id: 5, name: 'Flash'}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-demo';
  descriere: string = 'O scurta descriere a aplicatiei';
  culoare: string = 'red';
  imgSrc:string = 'https://s26162.pcdn.co/wp-content/uploads/2023/02/superman-1240x692.jpeg'
  nr:number = 0;
  valoare:string = 'Valoare input';
  afiseaza: boolean = false;
  eroi = HEROES;
  constructor(private alertaService: AlertaService){
  }
  persoana:User = {
    id:1,
    nume: 'Popescu',
    prenume: 'Ion'
  }

  showImg(){
    // alert(11);
    this.imgSrc='';
  }
  showImg2(){
    // alert(11);
    this.afiseaza =!this.afiseaza;
  }
  inputCount(){
    if(this.valoare.length>20){
      this.alertaService.afiseazaMesaj('Input cu lungime prea mare')
    }
  }
}
