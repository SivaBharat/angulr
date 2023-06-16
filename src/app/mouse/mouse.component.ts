import { Component } from '@angular/core';
import * as data from 'src/assets/json/product.json';
import * as batch from 'src/assets/json/batch.json';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
  msg = '';
  click() {
    this.msg = "you clicked me";
    return this.msg;
  }
  mouseover() {
    this.msg = "Over me!";
    return this.msg;
  }
  dblclick() {
    this.msg = "Double clicked me";
    return this.msg;
  }
  mouseenter() {
    this.msg = "mouse entered me";
    return this.msg;
  }
  mousedown() {
    this.msg = "mouse down";
    return this.msg;
  }
  mouseup() {
    this.msg = "mouse up";
    return this.msg;
  }
  mouseleave() {
    this.msg = "mouse leaves me";
    return this.msg;
  }
  drag() {
    this.msg = "mouse drags me";
    return this.msg;
  }

  //Display product details
product:any=(data as any).default 

//Display trainee details accordingly gender
batch:any=(batch as any).default

//user details with toggle effect
user = {
  name: 'siva',
  email: 'siva@gmail.com',
  age: 21
};
showDetails = false;

toggleDetails() {
  this.showDetails = !this.showDetails;
}
}
