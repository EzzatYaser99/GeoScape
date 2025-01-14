import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {RippleModule} from "primeng/ripple";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FooterInfo} from "../footer/FooterInfo";
import {SwitchLangButtonComponent} from "../switch-lang-button/switch-lang-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
    RippleModule,
    NgClass,
    NgOptimizedImage,
    SwitchLangButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerItems: any[] | undefined;
  socialMediaInfo: Array<FooterInfo> = [];

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.headerItems = [
      {
        label: 'Home',
        isActive: false,
        routerLink: 'home',
      },
      {
        label: 'Products',
        isActive: false,
        routerLink: 'products',
      },
      {
        label: 'Services',
        isActive: false,
        routerLink: 'services',
      },
      {
        label: 'Projects ',
        isActive: false,
        routerLink: 'projects',
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
    this.getActivePage()

    this.socialMediaInfo = [
      {
        iconClass: ' pi pi-facebook',
        href: 'https://www.facebook.com/ntgclaritynetworks',
        title: 'facebook'
      },
      {
        iconClass: 'pi pi-google',
        href: 'https://ntgclarity.com/',
        title: 'google'
      },
      {
        iconClass: 'pi pi-linkedin',
        href: 'https://www.linkedin.com/company/ntg-clarity/mycompany/verification/',
        title: 'linkedin'
      },
      {
        iconClass: 'pi pi-twitter',
        href: 'https://twitter.com/NTGClarityStage',
        title: 'twitter'
      },
      {
        iconClass: 'pi pi-instagram',
        href: 'https://www.instagram.com/explore/locations/1017721966/ntg-clarity-networks-inc/',
        title: 'instagram'
      }
    ];
  }


  handleItemClick(item: any) {
    // Reset isActive property for all items
    this.headerItems?.forEach((obj: any) => (obj.isActive = false));

    // Toggle isActive property
    item.isActive = !item.isActive;

  }

  private getActivePage() {
    const url = this._router.url;
    const urlParts = url.split('/');
    const word = urlParts[urlParts.length - 1];
    this.headerItems?.forEach((obj: any) => {
      if (obj.routerLink == word) {
        obj.isActive = true;
      }
    });
  }
}
