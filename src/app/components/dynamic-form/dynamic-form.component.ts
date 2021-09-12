import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  constructor(private homeSvc: HomeService) {}
  jsonFormData: any;
  jsonForm: FormGroup = new FormGroup({
  });
  ngOnInit(): void {
    // this.setFormControllers();
    if (this.homeSvc.getJsonData() == undefined) {
      this.jsonFormData = this.homeSvc.getJsonData();
      //for testing , its harcoded
      this.jsonFormData = [
        {
          form: 'user_enquiry',
          label: 'User Enquiry Form',
          controls: [
            {
              type: 'textfield',
              name: 'full_name',
              placeholder: 'Fullname',
              required: true,
              regex: null,
            },
            {
              type: 'textarea',
              name: 'street_address',
              placeholder: 'Street Address',
              required: false,
              regex: null,
            },
            {
              type: 'textfield',
              name: 'email',
              placeholder: 'Email',
              required: true,
              regex: null,
            },
            {
              type: 'textfield',
              name: 'phone_number',
              placeholder: 'Phone number',
              required: true,
              regex:
                '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$',
            },
            {
              type: 'number',
              name: 'age',
              placeholder: 'Age',
              required: true,
              regex: null,
            },
            {
              type: 'date',
              name: 'dob',
              placeholder: 'Date of birth',
              required: true,
              regex: null,
            },
            {
              type: 'select',
              name: 'state',
              items: [
                {
                  identity: '1001',
                  value: 'Gujarat',
                },
                {
                  identity: '1002',
                  value: 'Rajasthan',
                },
                {
                  identity: '1003',
                  value: 'Maharashtra',
                },
                {
                  identity: '1004',
                  value: 'Madhya Pradesh',
                },
              ],
              placeholder: 'Select State',
              required: true,
              regex: null,
            },
          ],
        },
        {
          form: 'product_enquiry',
          label: 'Product Enquiry Form',
          controls: [
            {
              type: 'file',
              category: 'image|video|file',
              name: 'product_image',
              placeholder: 'Product Image',
              required: true,
              regex: null,
            },
            {
              type: 'textfield',
              name: 'product_name',
              placeholder: 'Product name',
              required: true,
              regex: null,
            },
            {
              type: 'number',
              name: 'product_sku',
              placeholder: 'Product SKU',
              required: true,
              regex: null,
            },
            {
              type: 'textarea',
              name: 'feedback',
              placeholder: 'Feedback',
              required: false,
              regex: null,
            },
            {
              type: 'date',
              name: 'dos',
              placeholder: 'Date of submission',
              required: true,
              regex: null,
            },
          ],
        },
      ];
    }
  }
  onSubmit() {
    console.log('data');
    //call dailog component
  }
  //set the formcontrol
  // setFormControllers(){
  //   this.jsonFormData.foreach((data: { controls: any[]; }) => {
  //     let formControl:any;
  //     data?.controls.forEach(element => {
  //       formControl.push(element.name);
  //     });
  //   })
  // }
}
