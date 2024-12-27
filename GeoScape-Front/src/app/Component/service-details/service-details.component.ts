import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {ListboxChangeEvent, ListboxModule} from "primeng/listbox";
import {FormsModule} from "@angular/forms";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgOptimizedImage} from "@angular/common";
import {GeoscapeServicesService} from "../../core/service/geoscape-services.service";
import {CarouselModule, CarouselResponsiveOptions} from "primeng/carousel";

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [
    CardModule,
    PrimeTemplate,
    ListboxModule,
    FormsModule,
    GalleriaModule,
    ImageModule,
    ProgressSpinnerModule,
    NgOptimizedImage,
    CarouselModule
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  geoscapeServices: any[] = [];
  selectedServices: any;
  responsiveOptions: any[] | undefined;
  isLoading: boolean = true;
  showSelectedProduct: boolean = false;
  carouselResponsiveOptions: CarouselResponsiveOptions[] | undefined;

  constructor(private route: ActivatedRoute, private _geoscapeServices: GeoscapeServicesService) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices()
  }

  ngOnInit(): void {
    this.getServices();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 2
      }
    ];
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  onChangeServices(event: ListboxChangeEvent) {

    if (event.value) {
      this.showSelectedProduct = false
      this.selectedServices = event.value;
    } else {
      this.showSelectedProduct = true;
      this.selectedServices = []
    }
  }

  private getServices() {
    this.selectedServices = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedServices = this._geoscapeServices.getGeoscapeServicesById(Number(id));
  }
}
