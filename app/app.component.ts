import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isSearch: boolean;
  isProduct: boolean;

  constructor() {
    this.isSearch = false;
    this.isProduct = false;
  }

  disableOtherComp(name: string){
    if (name == "home1") {
      this.isSearch = true;
      this.isProduct = false;
    }
    if (name == "home2") {
      this.isProduct = true;
      this.isSearch = false;
    }
    if (name == "home3") {
      this.isProduct = false;
      this.isSearch = false;
    }
  };


}

