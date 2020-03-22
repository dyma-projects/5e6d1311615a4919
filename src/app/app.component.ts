import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inputType ="date";

  public couleur="blue";
  public changeColor(couleur:string):void{
           this.couleur=couleur;
  }

  public content ="";
  
  
}
