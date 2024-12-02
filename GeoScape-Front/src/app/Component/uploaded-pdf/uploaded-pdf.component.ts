import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgIf} from "@angular/common";
import {DocumentService} from "../../core/service/document.service";

@Component({
  selector: 'app-uploaded-pdf',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    NgIf
  ],
  templateUrl: './uploaded-pdf.component.html',
  styleUrl: './uploaded-pdf.component.scss'
})
export class UploadedPdfComponent implements OnInit {
  selectedDocument: any;
  url: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute ,private _sanitizer :DomSanitizer ,
              private documentService: DocumentService // Inject the service
  ) {

  }

  ngOnInit(): void {
    this.getDocument();
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  private getDocument() {

    this.selectedDocument = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedDocument = this.documentService.getDocumentById(Number(id));
    this.url = 'assets/document-approvals/'+ this.selectedDocument.pdfSrc;
   this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

}
