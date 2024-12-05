import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {NgOptimizedImage} from "@angular/common";
import {GeoscapeClientsService} from "../../core/service/geoscape-clients.service";
import {Client} from "../../core/types/client.type";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    CarouselModule,
    TagModule,
    AvatarModule,
    FieldsetModule,
    NgOptimizedImage,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  clients: Client[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private _geoscapeClients: GeoscapeClientsService) {
    this.clients = this._geoscapeClients.getGeoscapeClients();
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

/* ProductService */
