import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    ButtonDirective,
    CardModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent  implements OnInit{
  plants: any;
  benitoProducts: any;

  ngOnInit(): void {
    this.plants = [
      {
        id: 1, name: 'Stipagrostis Plumosa', imageSrc: 'Stipagrostis-Plumosa.jpeg',
        description: 'An attractive grass that thrives in arid environments, ideal for xeriscaping.'
      },
      {
        id: 2, name: 'Pennisetum Setaceum', imageSrc: 'Pennisetum-Setaceum.jpg',
        description: 'A popular ornamental grass known for its graceful, feathery plumes.'
      },
      {
        id: 3, name: 'Sesuvium Portulacastrum', imageSrc: 'Sesuvium-Portulacastrum.JPG',
        description: ' A hardy ground cover with succulent leaves, perfect for coastal areas.'
      },
      {
        id: 4, name: 'Carissa Macrocarpa', imageSrc: 'Carissa-Macrocarpa.jpg',
        description: 'A versatile shrub with glossy leaves and fragrant flowers, suitable for hedges and borders.'
      },
      {
        id: 5, name: 'Agave Angustifolia', imageSrc: 'Agave-Angustifolia.jpg',
        description: 'A striking succulent with narrow leaves, well-suited for desert landscapes.'
      },
      {
        id: 6, name: 'Agave Sisalana', imageSrc: 'Agave-Sisalana.jpg',
        description: 'Known for its long, sturdy leaves, commonly used in fiber production and as an ornamental plant.\n'
      },
      {
        id: 7, name: 'Aloe Arborescensa', imageSrc: 'Aloe-Arborescensa.jpeg',
        description: 'A hardy aloe species with medicinal properties, great for rock gardens and borders.'
      },
      {
        id: 8, name: 'Dasylirion Longifolium', imageSrc: 'Dasylirion-Longifolium.jpg',
        description: 'A dramatic, spiky plant that adds architectural interest to any garden.'
      },

    ]

    this.benitoProducts = [
      {id: 1, name: 'Urban Furniture', imageSrc: '', description: 'Elegant and durable furniture solutions for both public and private settings.'},
      {id: 2, name: 'Play Equipment', imageSrc: '', description: 'Safe and captivating play structures suitable for children of all ages.'},
      {id: 3, name: 'Sports and Fitness Equipment', imageSrc: '', description: 'Premium quality gear designed to encourage physical' +
          ' activity and well-being.'},
      {id: 4, name: 'Wood Plastic Composites', imageSrc: '', description: 'Eco-friendly and versatile materials ideal for numerous' +
          ' applications.'},
      {id: 5, name: 'Street Lighting', imageSrc: '', description: 'Innovative and efficient street lighting solutions for safer and' +
          ' brighter public spaces.'},
      {id: 6, name: 'Street Furniture', imageSrc: '', description: 'Durable and stylish street furniture to improve the comfort and' +
          ' functionality of outdoor areas.'},
      {id: 7, name: 'Mobility', imageSrc: '', description: 'Solutions designed to facilitate urban mobility and accessibility.'},
      {id: 8, name: 'Playground & Sports Equipment', imageSrc: '', description: 'Safe and engaging equipment for playgrounds and sports' +
          ' areas, suitable for all ages.'},
      {id: 9, name: 'Sports Equipment', imageSrc: '', description: 'High-quality sports equipment to promote physical activity and' +
          ' well-being.'},
      {id: 10, name: 'Covers and Grates', imageSrc: '', description: 'Robust and reliable covers and grates for various urban infrastructure' +
          ' needs.'},
      {id: 11, name: 'Riga', imageSrc: '', description: 'Innovative solutions for urban development and beautification.'},
      {id: 12, name: 'Arko', imageSrc: '', description: 'Durable and stylish urban furniture and accessories.'},
      {id: 13, name: 'Arka', imageSrc: '', description: 'High-quality, modern street furniture for public spaces.'},
      {id: 14, name: 'Arne', imageSrc: '', description: 'Functional and aesthetically pleasing urban design elements.'},
      {id: 15, name: 'Arte', imageSrc: '', description: 'Creative and artistic urban design solutions.'},
      {id: 16, name: 'Citizen', imageSrc: '', description: 'Stylish and functional urban furniture for public areas.'},
      {id: 17, name: 'Coro', imageSrc: '', description: 'Elegant and durable urban furniture solutions.'},
      {id: 18, name: 'Minsk', imageSrc: '', description: 'High-quality urban design products for public spaces.'},
      {id: 19, name: 'Piro', imageSrc: '', description: 'Functional and stylish urban furniture.'},
      {id: 20, name: 'Ares', imageSrc: '', description: 'Durable and modern urban design elements.'},
      {id: 21, name: 'Quatro', imageSrc: '', description: 'Innovative urban furniture solutions for public spaces.'},
      {id: 22, name: 'Leman', imageSrc: '', description: 'Elegant and durable urban furniture for various applications.'},
      {id: 23, name: 'Polka', imageSrc: '', description: 'Stylish and functional urban design products.'},
      {id: 24, name: 'Gavarras', imageSrc: '', description: 'Creative and artistic urban furniture solutions.'},
      {id: 25, name: 'Petrus', imageSrc: '', description: 'High-quality, durable urban design elements.'},
      {id: 26, name: 'Okto', imageSrc: '', description: 'Modern and stylish urban furniture for public areas.'},
      {id: 27, name: 'Flo', imageSrc: '', description: 'Elegant and functional urban design products.'},
      {id: 28, name: 'Mielek', imageSrc: '', description: 'Durable and stylish urban furniture solutions.'},
      {id: 29, name: 'Trax', imageSrc: '', description: 'Innovative and modern urban design elements.\n'},
    ]
  }


}
