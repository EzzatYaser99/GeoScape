import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {RippleModule} from "primeng/ripple";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FooterInfo} from "../footer/FooterInfo";
import {SocialMediaInfoComponent} from "../social-media-info/social-media-info.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
    RippleModule,
    NgClass,
    NgOptimizedImage,
    SocialMediaInfoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  headerItems: any[] | undefined;
  socialMediaInfo: Array<FooterInfo> = [];
  ngOnInit() {
    this.headerItems = [
      {
        label: 'Home',
        isActive: false,
        routerLink: 'home',
      },

      {
        label: 'Projects',
        isActive: false,
        routerLink: 'projects',
      },
      {
        label: 'Services',
        isActive: false,
        routerLink: 'services',
      },
      {
        label: 'Partners',
        isActive: false,
        routerLink: 'partners',
      },
      {
        label: 'About ',
        isActive: false,
        routerLink: 'about',
      },
      {
        label: 'Contacts',
        isActive: false,
        routerLink: 'contacts',
      },
    ];

    this.socialMediaInfo= [
      {
        iconClass: ' pi pi-facebook',
        herf: 'https://www.facebook.com/ntgclaritynetworks',
        title: 'facebook'
      },
      {
        iconClass: 'pi pi-google',
        herf: 'https://ntgclarity.com/',
        title: 'google'
      },
      {
        iconClass: 'pi pi-linkedin',
        herf: 'https://www.linkedin.com/company/ntg-clarity/mycompany/verification/',
        title: 'linkedin'
      },
      {
        iconClass: 'pi pi-twitter',
        herf: 'https://twitter.com/NTGClarityStage',
        title: 'twitter'
      },
      {
        iconClass: 'pi pi-instagram',
        herf: 'https://www.instagram.com/explore/locations/1017721966/ntg-clarity-networks-inc/',
        title: 'instagram'
      }
    ];
  }

  doSearch(value: string) {}

  handleItemClick(item: any) {
    // Reset isActive property for all items
    this.headerItems?.forEach((obj: any) => (obj.isActive = false));

    // Toggle isActive property
    item.isActive = !item.isActive;

  }
}
