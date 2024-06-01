import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ChipsModule,
    ButtonModule,
    RippleModule,
    NgIf
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  name:any ;
  email: any;
  subject: any;
  message: any;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;


  constructor(private emailService: EmailService ,private  _http:HttpClient ) {
    this.isSubmitting = false;
    this.isSuccess = false;
    this.isError = false;
  }

  submitForm() {
    this.sendEmail(this.name, this.email, this.message,this.subject).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }

  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL
  sendEmail(name: any, email: any, message: any, subject: any) {
    const data = {
      name: name,
      email: email,
      message: message,
      subject: subject
    };
    return this._http.post(this.emailUrl, data);
  }


  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }


}
