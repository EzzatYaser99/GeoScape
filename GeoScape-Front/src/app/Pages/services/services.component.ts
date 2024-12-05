import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {ButtonDirective} from "primeng/button";
import {ImageModule} from "primeng/image";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {AvatarModule} from "primeng/avatar";
import {Router} from "@angular/router";
import {GeoscapeServicesService} from "../../core/service/geoscape-services.service";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonDirective,
    ImageModule,
    CardModule,
    FieldsetModule,
    AvatarModule,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  responsiveOptions: any;
  geoscapeServices: any;

  constructor(private _router: Router, private _geoscapeServices: GeoscapeServicesService) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices()
  }

  ngOnInit(): void {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }


  navigateToServiceDetails(service: any) {
    this._router.navigate(['main/services/' + service.id]);
  }
}
