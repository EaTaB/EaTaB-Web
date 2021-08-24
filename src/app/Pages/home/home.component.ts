import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    window.onscroll = function() {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop){
        document.getElementById("navbar").style.padding = "30px 10px";

        let logo = document.getElementById("logo").style;
        logo.width = "100px";
        //logo.display = "initial";
        //logo.float = "left";
        //logo.marginLeft = "initial";
      }
      else{
        document.getElementById("navbar").style.padding = "80px 10px";

        let logo = document.getElementById("logo").style;
        logo.width = "50%";
        // logo.marginLeft = "auto";
        // logo.marginRight = "auto";
      }  
    };
  }

  ngOnInit(): void {
  }

  public redirectTo(social: string){
    switch(social){
      case 'linkedin':
        window.open("https://linkedin.com/in/matteo-fantin-3a8185164/","_blank");
        break;

      case 'github':
        window.open("https://github.com/EaTaB/","_blank");
        break;

      case 'material':
        window.open("https://material.angular.io/","_blank");
        break;
    }
  }
}
