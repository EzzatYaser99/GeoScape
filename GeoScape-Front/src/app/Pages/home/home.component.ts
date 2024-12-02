import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {RouterLink} from "@angular/router";
import {ImageModule} from "primeng/image";
import {DocumentService} from "../../core/service/document.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    RouterLink,
    ImageModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  documents: any;
constructor(private documentService: DocumentService) {

}
  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();

  }



}
