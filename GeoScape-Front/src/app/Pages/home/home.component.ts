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
        id: 2, name: 'شهادة العلامة التجارية', pdfSrc: 'شهادة-العلامة-التجارية.pdf',imgSrc: 'شهادة-العلامة-التجارية.png'
      },
      {
        id: 3, name: 'شهادة التوطين', pdfSrc: 'شهادة-التوطين.pdf',imgSrc: 'شهادة-التوطين.png'
      },
      {
        id: 4, name: 'رخصة بلدية التوهج الدائم', pdfSrc: 'رخصة-بلدية-التوهج-الدائم.pdf',imgSrc: 'رخصة-بلدية-التوهج-الدائم.png'
      },
      {
        id: 5, name: 'شهادة التامينات', pdfSrc: 'شهادة-التامينات.pdf',imgSrc: 'شهادة-التامينات.png'
      },
      {
        id: 6, name: 'شهادة اشتراك الغرفة التوهج الدائم', pdfSrc: 'شهادة-اشتراك-الغرفة-التوهج-الدائم.pdf',imgSrc: 'شهادة-اشتراك-الغرفة-التوهج-الدائم.png'
      },
      {
        id: 7, name: 'سجل التوهج للمقاولات', pdfSrc: 'سجل-التوهج-للمقاولات.pdf',imgSrc: 'سجل-التوهج-للمقاولات.png'
      },
      {
        id: 8, name: 'العنوان الوطني العليا التوهج الدائم', pdfSrc: 'العنوان-الوطني-العليا-التوهج-الدائم.pdf',imgSrc: 'العنوان-الوطني-العليا-التوهج-الدائم.png'
      },
      {
        id: 9, name: 'سجل جندلة الرئيسي', pdfSrc: 'سجل-جندلة-الرئيسي.pdf',imgSrc: 'سجل-جندلة-الرئيسي.png'
      },
      {
        id: 10, name: 'شهادة الأيزو', pdfSrc: 'شهادة-الأيزو.pdf',imgSrc: 'شهادة-الأيزو.png'
      },

      {
        id: 11, name: 'ذا لاين', pdfSrc: 'ذا-لاين.pdf',imgSrc: 'ذا-لاين.png'
      },
      {
        id: 12, name: 'مؤسسة المسار الرياضي', pdfSrc: 'مؤسسة-المسار-الرياضي.pdf',imgSrc: 'مؤسسة-المسار-الرياضي.jpeg'
      },
      {
        id: 13, name: 'Royal Commission for AlUla', pdfSrc: 'Royal-Commission-for-AlUla.pdf',imgSrc: 'Royal-Commission-for-AlUla.png'
      },
      {
        id: 14, name: 'misk city ', pdfSrc: 'misk-city.pdf',imgSrc: 'misk-city.png'
      },

    ];
  }



}
