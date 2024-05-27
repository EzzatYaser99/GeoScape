import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {RippleModule} from "primeng/ripple";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
    RippleModule,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  headerItems: any[] | undefined;

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
        label: 'Contact',
        isActive: false,
        routerLink: 'contacts',
      },
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
