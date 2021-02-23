import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title='my-app';
imgUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
/*imgUrl="assets/n.jpg"*/

onClick($event:any){
  console.log("ok is clicked", $event)
}

name:string="";
}
