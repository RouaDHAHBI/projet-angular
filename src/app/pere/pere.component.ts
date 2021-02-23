import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

moyenne=0;
somme=0;
nbr=0;
enfants=['Roua', 'Nada', 'Wick'];



//tab: Array<string> =['premier', 'deuxième', 'trosième'];
//tab2: Array<number> =[0, 1]
//nord='Lille';
//sud='Marseille';
//capitale='Paris';


  constructor() { }

  ngOnInit(): void {
  }
  computeAvg(note:number){
    this.somme+=note;
    this.nbr++;
    this.moyenne=this.somme/this.nbr;
  }

}
