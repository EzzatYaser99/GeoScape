import { Component } from '@angular/core';
import {FooterInfo} from "../footer/FooterInfo";

@Component({
  selector: 'app-social-media-info',
  standalone: true,
  imports: [],
  templateUrl: './social-media-info.component.html',
  styleUrl: './social-media-info.component.scss'
})
export class SocialMediaInfoComponent {
  socialMediaInfo: Array<FooterInfo> = [];
constructor() {

  this.socialMediaInfo= [
    {
      title: 'facebook',
      iconClass: ' pi pi-facebook facebook',
      herf: '',

    },
    {
      title: 'whatsapp',
      iconClass: 'pi pi-whatsapp whatsapp',
      herf: 'https://wa.me/966546644283',

    },

    {
      title: 'linkedin',
      iconClass: 'pi pi-linkedin linkedin',
      herf: 'https://www.linkedin.com/company/geoscape-landscape/about/',

    },
    {
      title: 'instagram',
      iconClass: 'pi pi-instagram instagram',
      herf: '',
    },


  ];
}
}
