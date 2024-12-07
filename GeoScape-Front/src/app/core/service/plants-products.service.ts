import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantsProductsService {
  plants = [
    {
      id: 1,
      name: 'Stipagrostis Plumosa',
      imageSrc: 'Stipagrostis-Plumosa.webp',
      description: 'An attractive grass that thrives in arid environments, ideal for xeriscaping.',
      alt: 'Stipagrostis Plumosa'
    },
    {
      id: 2,
      name: 'Pennisetum Setaceum',
      imageSrc: 'Pennisetum-Setaceum.webp',
      description: 'A popular ornamental grass known for its graceful, feathery plumes.',
      alt: 'Pennisetum Setaceum'
    },
    {
      id: 3,
      name: 'Sesuvium Portulacastrum',
      imageSrc: 'Sesuvium-Portulacastrum.webp',
      description: 'A hardy ground cover with succulent leaves, perfect for coastal areas.',
      alt: 'Sesuvium Portulacastrum'
    },
    {
      id: 4,
      name: 'Carissa Macrocarpa',
      imageSrc: 'Carissa-Macrocarpa.webp',
      description: 'A versatile shrub with glossy leaves and fragrant flowers, suitable for hedges and borders.',
      alt: 'Carissa Macrocarpa'
    },
    {
      id: 5,
      name: 'Agave Angustifolia',
      imageSrc: 'Agave-Angustifolia.webp',
      description: 'A striking succulent with narrow leaves, well-suited for desert landscapes.',
      alt: 'Agave Angustifolia'
    },
    {
      id: 6,
      name: 'Agave Sisalana',
      imageSrc: 'Agave-Sisalana.webp',
      description: 'Known for its long, sturdy leaves, commonly used in fiber production and as an ornamental plant.',
      alt: 'Agave Sisalana'
    },
    {
      id: 7,
      name: 'Aloe Arborescensa',
      imageSrc: 'Aloe-Arborescensa.webp',
      description: 'A hardy aloe species with medicinal properties, great for rock gardens and borders.',
      alt: 'Aloe Arborescensa'
    },
    {
      id: 8,
      name: 'Dasylirion Longifolium',
      imageSrc: 'Dasylirion-Longifolium.webp',
      description: 'A dramatic, spiky plant that adds architectural interest to any garden.',
      alt: 'Dasylirion Longifolium'
    }
  ];
  getPlants() {
    return this.plants;
  }
}
