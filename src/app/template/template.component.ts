import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  model = new User();
  
  onSubmit(form: any) {
    console.log(form.value);
  }
  ngOnInit(): void {}
}
export class User {
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public email!: string;
}