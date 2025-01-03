import {Component} from '@angular/core';
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

    this.socialMediaInfo = [
      {
        title: 'facebook',
        iconClass: ' pi pi-facebook facebook',
        href: 'https://www.facebook.com/profile.php?id=61560500246911',

      },
      {
        title: 'whatsapp',
        iconClass: 'pi pi-whatsapp whatsapp',
        href: 'https://wa.me/966546644283',

      },

      {
        title: 'linkedin',
        iconClass: 'pi pi-linkedin linkedin',
        href: 'https://www.linkedin.com/company/geoscape-landscape/about/',

      },
      {
        title: 'twitter',
        iconClass: 'pi pi-twitter twitter',
        href: 'https://x.com/infogeoscape0',
      },
      {
        title: 'instagram',
        iconClass: 'pi pi-instagram instagram',
        href: 'https://www.instagram.com/geoscapelandscape?igsh=MWZndjRjZDExZ2Fxaw%3D%3D&utm_source=qr',
      },


    ];
  }
}
