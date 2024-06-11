import { Component } from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple,
    Button
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showProfilePdf: boolean = false;

}
