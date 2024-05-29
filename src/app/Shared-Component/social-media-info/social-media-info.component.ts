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
      herf: 'https://www.facebook.com/ntgclaritynetworks',

    },
    {
      title: 'whatsapp',
      iconClass: 'pi pi-whatsapp whatsapp',
      herf: 'https://twitter.com/NTGClarityStage',

    },

    {
      title: 'linkedin',
      iconClass: 'pi pi-linkedin linkedin',
      herf: 'https://www.linkedin.com/company/ntg-clarity/mycompany/verification/',

    },
    {
      title: 'instagram',
      iconClass: 'pi pi-instagram instagram',
      herf: 'https://www.instagram.com/explore/locations/1017721966/ntg-clarity-networks-inc/',
    },


  ];
}
}
