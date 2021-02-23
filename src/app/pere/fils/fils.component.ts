import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  // @Input : recuperer les valeurs qui exsite dans le pere 
//@Input () ordre:string="";
//@Input () villeNaissance:string="";
@Input () nom:string="";
@Output() message=new EventEmitter<number>();
note:number=0;
buttonStatus: boolean=false;
  constructor() { 

  }

  ngOnInit(): void {
  }
  send(){
    this.message.emit(this.note);
    this.buttonStatus=true;
  }
//ng-content: donner accee au pere pour voir tous
}
