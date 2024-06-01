import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../Shared-Component/header/header.component";
import {FooterComponent} from "../../Shared-Component/footer/footer.component";
import {ScrollComponent} from "../../Shared-Component/scrollTop/scroll.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
}


