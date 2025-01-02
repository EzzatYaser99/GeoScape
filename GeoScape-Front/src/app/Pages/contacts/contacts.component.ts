import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
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
    MultiSelectModule, DropdownModule, MessagesModule, ReactiveFormsModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers: [MessageService]
})
export class ContactsComponent {
  getTouchForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=(?!0{5,}))(?:\+?\d{1,3}[- ]?)?\d{10,11}$/),
    ]),
    selectedServices: new FormControl(null),
    message: new FormControl(null),
  });
  geoscapeServices: any;
  successMessage: any;
  errorMessage: any;
  showMessage: boolean = false;
  isLoading: boolean = false

  constructor(private _http: HttpClient, private _geoscapeServices: GeoscapeServicesService) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices()

  }


  submitForm() {
    this.isLoading = true
    const selectedServiceNames = this.getTouchForm.controls['selectedServices'].value?.map((item: any) => item.name);
    const data = {
      name: this.getTouchForm.controls['name'].value || '',
      phone: this.getTouchForm.controls['email'].value || '',
      email: this.getTouchForm.controls['phone'].value || '',
      service: selectedServiceNames || '',
      message: this.getTouchForm.controls['message'].value || '',

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

}
