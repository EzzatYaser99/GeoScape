import {Component, OnInit} from '@angular/core';
import {FooterInfo} from "./FooterInfo";
import {SocialMediaInfoComponent} from "../social-media-info/social-media-info.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaInfoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  openDays: Array<FooterInfo> = [];
  contactDetailsInformation: Array<FooterInfo> = [];
  ngOnInit(): void {
  this.openDays = [
    {openDays: 'Sunday to Thursday'},
    {openDays: '9.00 Am - 6.00 Pm'},
  ];

  this.contactDetailsInformation = [
    {Icon: 'pi pi-map-marker', Title: 'location ', herf: 'https://maps.app.goo.gl/tAMe31CRJtVjrR717'},
    {Icon: 'pi pi-phone', Title: '+966 54 664 4283', herf: '#'},
    {
      Icon: 'pi pi-globe',
      Title: 'https://geoscape.net/',
      herf: ''
    },
    {
      Icon: 'pi pi-inbox',
      Title: 'info@geoscape.net',
      herf: 'https://accounts.google.com/v3/signin/identifier?dsh=S-569605920%3A1679139941662845&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=ar&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession'
    },
  ];


  }

}
