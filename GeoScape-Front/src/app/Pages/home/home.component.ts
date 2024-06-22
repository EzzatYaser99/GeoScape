import { Component } from '@angular/core';
import {HeaderComponent} from "../../Shared-Component/header/header.component";
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        AvatarModule,
        FieldsetModule,
        PrimeTemplate
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
