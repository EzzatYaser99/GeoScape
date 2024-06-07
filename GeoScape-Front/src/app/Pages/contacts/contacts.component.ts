import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgFor, NgIf} from "@angular/common";
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
    NgFor,
    MultiSelectModule,DropdownModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  phone: string | undefined;
  selectedServices: any | undefined;

  isSubmitting: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  Services: any;


  constructor(private _http: HttpClient) {
  }
  ngOnInit(): void {
    this.Services = [
      {id: 1 , name: 'Maintenance' ,image:'Landscape-Maintenance.jpg'},
      {id: 2 , name: 'Landscape Design' ,image:'Landscape-Design.jpg'},
      {id: 3 , name: 'Nursery' ,image:'Nursery.jpg'},
      {id: 4 , name: 'Irrigation' ,image:'Irrigation.jpeg'},
      {id: 5 , name: 'Water Features' ,image:'Water-Features.jpg'},
      {id: 6 , name: 'Water & Drainage Systems' ,image:'Water-Systems.jpg'},
      {id: 7 , name: 'HardScape' ,image:'Hard-Landscape.jpg'},
      {id: 8 , name: 'SoftScape' ,image:'Soft-Landscape.jpg'},

    ];
  }


  submitForm() {

    const data = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      service:this.selectedServices,
      message:this.message,

    };

    if (this.name && this.phone && this.email && this.message && this.selectedServices ) {
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
    this.message = '';

  }


  onChangeServicesType(event:any) {

  }
  onChangeProduct(event:any) {

  }


  validateDisable() {
    return !(this.name && this.phone && this.email && this.message && this.selectedServices );

  }



}
