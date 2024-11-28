import {Component, OnInit} from '@angular/core';
import {FooterInfo} from "./FooterInfo";
import {SocialMediaInfoComponent} from "../social-media-info/social-media-info.component";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaInfoComponent,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  openDays: Array<FooterInfo> = [];
  contactDetailsInfo: Array<FooterInfo> = [];
  ngOnInit(): void {
  this.openDays = [
    {openDays: 'Sunday to Thursday'},
    {openDays: '9.00 Am - 6.00 Pm (KSA time)'},
  ];

  this.contactDetailsInfo = [
    {id:1 ,Icon: 'pi pi-map-marker', Title: 'location ', href: 'https://maps.app.goo.gl/tAMe31CRJtVjrR717'},
    {id:2 ,Icon: 'pi pi-phone', Title: '+966 54 664 4283', href: 'https://wa.me/966546644283'},
  ];


  }

}
