import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {Button} from "primeng/button";
import {GalleriaModule, GalleriaResponsiveOptions} from "primeng/galleria";
import {GreenhouseService} from "../../core/service/greenhouse.service";
import {SeedlingProductsService} from "../../core/service/seedling-products.service";
import {CardModule} from "primeng/card";
import {CultivationProductsService} from "../../core/service/cultivation-products.service";
import {CarouselModule, CarouselResponsiveOptions} from "primeng/carousel";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-prasada-products',
  standalone: true,
  imports: [
    TabViewModule,
    GalleriaModule,
    CardModule,
    CarouselModule,
    Button,
    NgOptimizedImage
  ],
  templateUrl: './prasada-products.component.html',
  styleUrl: './prasada-products.component.scss'
})
export class PrasadaProductsComponent {

  greenhouseProducts: any[] | undefined;
  responsiveOptions: GalleriaResponsiveOptions[] | undefined;
  carouselResponsiveOptions: CarouselResponsiveOptions[] | undefined;
  images: any[] | undefined;
  seedlingProducts: any[] | undefined;
  cultivationProducts: any[] | undefined;
  activeIndex: number = 0;

  constructor(private _greenhouseService: GreenhouseService,
              private _seedlingService: SeedlingProductsService,
              private _cultivationService: CultivationProductsService,
  ) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
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

    this.greenhouseProducts = this._greenhouseService.getGreenhouseProducts();
    this.seedlingProducts = this._seedlingService.getSeedlingProducts();
    this.cultivationProducts = this._cultivationService.getCultivationProductProducts();
  }


}
