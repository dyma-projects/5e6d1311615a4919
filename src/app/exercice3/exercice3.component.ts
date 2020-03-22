import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


public statut:boolean =true;
    public couleur="green";  
  public montreCouleur(couleur:string):void{
       this.couleur=couleur;
  }
}
