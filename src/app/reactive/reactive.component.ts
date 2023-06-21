import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl, Form } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
react_form!:FormGroup;
username:FormControl|any;
password:FormControl|any

  ngOnInit(): any {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    
  ])
    this.react_form = new FormGroup({
      username: this.username,
      password:this.password,
      
    });
  }
  onSubmit(form:any){
    console.log(form.value)
  }
}