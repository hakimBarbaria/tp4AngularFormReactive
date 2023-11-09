import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnages-formates',
  templateUrl: './personnages-formates.component.html',
  styleUrls: ['./personnages-formates.component.css']
})
export class PersonnagesFormatesComponent implements OnInit {

  tabPersonnages = [
    {nom:'blink', icon: "fa-ghost", nb: 44, majeur:true},
    {nom:'angry', icon:'fa-solid fa-face-angry', nb: 16, majeur:true},
    {nom:'Laugh', icon:'fa-face-grin-squint-tears', nb: 12, majeur:false}
    ];  
    abonner(index: number) {
      this.tabPersonnages[index].nb++;
    }
    nbMajor() {
      let i;
      let major = 0;
      for (i = 0; i < this.tabPersonnages.length; i++) {
        if (this.tabPersonnages[i].majeur == true) {
          major ++;
        }
      }
      return "le nombre des Majeurs est : " + major;
    }

  constructor() { }

  ngOnInit(): void {    
  }

}
