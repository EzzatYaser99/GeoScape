import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-uploaded-pdf',
  standalone: true,
  imports: [],
  templateUrl: './uploaded-pdf.component.html',
  styleUrl: './uploaded-pdf.component.scss'
})
export class UploadedPdfComponent implements OnInit {
  documents: any;
  selectedDocument: any;
  url: any;

  constructor(private route: ActivatedRoute ,private _sanitizer :DomSanitizer ) {
  }

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
    this.getDocument();

  }

  private getDocument() {

    this.selectedDocument = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedDocument = this.documents.find((value:any) => value.id == Number(id))
    this.url = 'assets/document/'+ this.selectedDocument.pdfSrc;
   this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

}