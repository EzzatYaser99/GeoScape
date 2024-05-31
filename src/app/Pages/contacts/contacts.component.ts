import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ChipsModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

    name:any ;
  email: any;
  subject: any;
  message: any;
}
