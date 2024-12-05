import {Component, HostListener} from '@angular/core';
import {DockModule} from "primeng/dock";

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    DockModule
  ],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  showScrollButton: boolean = false;
  lastScrollTop: number = 0;

  scrollToTop($event: MouseEvent) {
    $event.preventDefault();
    document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 500);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollButton = st > this.lastScrollTop && st > window.innerHeight;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

}
