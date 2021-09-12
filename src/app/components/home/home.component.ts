import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
export interface IForm {
  form: string;
  label: string;
  controls: IFormControl[];
}

export interface IFormControl {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  regex?: string;
  items?: Item[];
  category?: string;
}

export interface Item {
  identity: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeSvc: HomeService, private router: Router) {}
  dynamicForm: FormGroup = new FormGroup({
    jsonData: new FormControl('', Validators.required),
  });
  jsonData: any;
  ngOnInit(): void { }
  //set the form data 
  onSubmit() {
    if (this.dynamicForm?.controls?.jsonData?.value) {
      this.homeSvc.setJsonData(this.dynamicForm?.controls?.jsonData?.value);
      this.jsonData = this.homeSvc.getJsonData();
    }
  }
}

