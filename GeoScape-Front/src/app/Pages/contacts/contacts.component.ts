import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ChipsModule,
    ButtonModule,
    RippleModule,
    NgIf,
    MultiSelectModule,DropdownModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent  {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  phone: string | undefined;
  selectedServices: any | undefined;
  selectedProduct: any | undefined;

  isSubmitting: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  Services: any;
  Products: any


  constructor(private _http: HttpClient) {
    // this.Services=[
    //   {name:"hello" ,value:1},
    //   {name:"world",value:2},
    //
    // ];
  }
  ngOnInit(): void {
    this.Services = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }


  submitForm() {

    const data = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      service:this.selectedServices,
      product:this.selectedProduct,
      message:this.message,

    };

    if (this.name && this.phone && this.email && this.message && this.selectedServices && this.selectedProduct ) {
      this.sendEmail(data).subscribe(
        response => {
          console.log('Email sent successfully!');
        },
        error => {
          console.log('Error sending email:', error);
        }
      );
    } else {
      alert('please complete mandatory data')
    }
  }


  sendEmail(data:any) {
  let emailUrl = 'http://localhost:3000/send-email';

    return this._http.post(emailUrl, data);
  }


  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.selectedServices = '';
    this.selectedProduct = '';
    this.message = '';

  }


  onChangeServicesType(event:any) {

  }
  onChangeProduct(event:any) {

  }




}
