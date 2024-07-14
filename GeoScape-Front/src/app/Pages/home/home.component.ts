import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../Shared-Component/header/header.component";
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  documents: any;

  ngOnInit(): void {

    this.documents = [
      {
        id: 1, name: 'GEOSCAPE Profile', pdfSrc: 'GEOSCAPE-Profile.pdf',imgSrc: 'GEOSCAPE-Profile.png',
      },

      {
        id: 2, name: 'شهادة الأيزو', pdfSrc: 'شهادة-الأيزو.pdf',imgSrc: 'شهادة-الأيزو.png'
      },

      {
        id: 3, name: 'ذا لاين', pdfSrc: 'ذا-لاين.pdf',imgSrc: 'ذا-لاين.png'
      },
      {
        id: 4, name: 'مؤسسة المسار الرياضي', pdfSrc: 'مؤسسة-المسار-الرياضي.pdf',imgSrc: 'مؤسسة-المسار-الرياضي.jpeg'
      },
      {
        id: 5, name: 'Royal Commission for AlUla', pdfSrc: 'Royal-Commission-for-AlUla.pdf',imgSrc: 'Royal-Commission-for-AlUla.png'
      },
      {
        id: 6, name: 'misk city ', pdfSrc: 'misk-city.pdf',imgSrc: 'misk-city.png'
      },

    ];
  }



}
