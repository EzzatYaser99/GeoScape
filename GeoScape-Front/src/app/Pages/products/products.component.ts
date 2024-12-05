import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {CardModule} from "primeng/card";
import {ListboxChangeEvent, ListboxModule} from "primeng/listbox";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgOptimizedImage} from "@angular/common";
import {PrasadaProductsComponent} from "../../Component/prasada-products/prasada-products.component";
import {Button} from "primeng/button";
import {PlantsProductsService} from "../../core/service/plants-products.service";
import {TreesProductsService} from "../../core/service/trees-products.service";
import {BenitoProductsService} from "../../core/service/benito-products.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    CardModule,
    ListboxModule,
    GalleriaModule,
    ImageModule,
    FormsModule,
    TabViewModule,
    ProgressSpinnerModule,
    NgOptimizedImage,
    PrasadaProductsComponent,
    Button
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  geoscapePlants: any;
  benitoProducts: any;
  geoscapeTrees: any;
  selectedBenitoProduct: any;
  responsiveOptions: any[] | undefined;
  isLoading: boolean = true;
  showSelectedProduct: boolean = false;
  activeIndex: number = 0;

  constructor(private _plantsServices: PlantsProductsService,
              private _treesServices: TreesProductsService,
              private _benitoServices: BenitoProductsService) {
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


    this.geoscapePlants = this._plantsServices.getPlants();
    this.geoscapeTrees = this._treesServices.getTrees();
    this.benitoProducts = this._benitoServices.getBenitoProducts()
  }

  ngOnInit(): void {
    this.selectedBenitoProduct = this.benitoProducts[1];
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


  onChangeProduct(event: ListboxChangeEvent) {
    if (event.value) {
      this.showSelectedProduct = false
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.selectedBenitoProduct = event.value;

    } else {
      this.showSelectedProduct = true;
      this.selectedBenitoProduct = []
    }

  }

}
