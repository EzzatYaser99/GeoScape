import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgFor, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {GeoscapeServicesService} from "../../core/service/geoscape-services.service";

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
    MultiSelectModule, DropdownModule, MessagesModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers: [MessageService]
})
export class ContactsComponent {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  phone: string | undefined;
  selectedServices: any | undefined;
  geoscapeServices: any;
  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidPhoneNumber: boolean = false;
  successMessage: any;
  errorMessage: any;
  showMessage: boolean = false;
  isLoading: boolean = false

  constructor(private _http: HttpClient, private _geoscapeServices: GeoscapeServicesService) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices()


  }


  onChangeName(event: any) {
    this.name = event.target.value;
    this.invalidName = !(this.name != '' && this.name);
  }

  onChangeEmail(event: any) {
    this.email = event.target.value;
    this.invalidEmail = this.email?.match('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$') == null;
  }

  onChangePhoneNumber(event: any) {
    this.phone = event.target.value;
    this.invalidPhoneNumber = !(this.phone?.match(/^((\+?)\d{1,3}[- ]?)?\d{10,11}$/) && !(this.phone?.match(/0{5,}/)));
  }


  submitForm() {
    this.isLoading = true
    this.invalidName = !(this.name != '' && this.name);
    const selectedServiceNames = this.selectedServices.map((item: any) => item.name);
    const data = {
      name: this.name || '',
      phone: this.phone || '',
      email: this.email || '',
      service: selectedServiceNames || '',
      message: this.message || '',

    };

    this.sendEmail(data).subscribe(
      () => {
        this.showMessage = true;
        this.successMessage = [
          {severity: 'success', summary: 'Email sent successfully!'},
        ];
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);

        setTimeout(() => {
          this.isLoading = false;
        }, 4000);
      },
      () => {
        this.showMessage = true;
        this.errorMessage = [
          {severity: 'error', detail: 'Error sending email'},
        ];
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
        setTimeout(() => {
          this.isLoading = false;
        }, 4000);
      }
    );

  }


  sendEmail(data: any) {
    // let emailUrl = 'http://localhost:3000/send-email';
    let emailUrl = 'https://backend.bassamabassy.me/bundle.js';

    return this._http.post(emailUrl, data);
  }


  validateDisable() {
    return !(this.name && this.phone && this.email && !this.isLoading);

  }


}
