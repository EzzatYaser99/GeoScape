import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {EmailService} from "../../Services/email.service";

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
    HttpClientModule
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


  constructor(private emailService: EmailService) {
    this.isSubmitting = false;
    this.isSuccess = false;
    this.isError = false;
  }

  submitForm() {
    this.emailService.sendEmail(this.name, this.email, this.message,this.subject).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }





  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }


}
