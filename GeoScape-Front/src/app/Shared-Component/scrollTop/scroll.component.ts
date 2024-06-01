import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  scrollTotop($event: MouseEvent) {
    $event.preventDefault();
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 500)
  }
}
