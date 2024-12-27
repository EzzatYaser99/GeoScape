import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  private greenhouseProduct: any[] = [
    {
      id: 1,
      name: 'ES Multi-Span Film Greenhouse',
      description: 'An economical and durable multi-span greenhouse designed with a focus on cost-effectiveness. Its sturdy film material provides excellent crop protection, making it ideal for budget-conscious commercial growers',
      subImages: [
        {id: 1, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-1.webp', alt: 'ES-multispan-film-greenhouse-1'},
        {id: 2, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-2.webp', alt: 'ES-multispan-film-greenhouse-2'},
        {id: 3, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-3.webp', alt: 'ES-multispan-film-greenhouse-3'},
        {id: 4, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-4.webp', alt: 'ES-multispan-film-greenhouse-4'},
        {id: 5, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-5.webp', alt: 'ES-multispan-film-greenhouse-5'},
        {id: 6, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-6.webp', alt: 'ES-multispan-film-greenhouse-6'},
        {id: 7, imageSrc: 'ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-7.webp', alt: 'ES-multispan-film-greenhouse-7'},
      ]
    },
    {
      id: 2,
      name: 'EU Multi-Span Film Greenhouse',
      description: 'A high-quality, European-standard multi-span greenhouse with film covering, offering superior crop protection and energy efficiency. Perfect for large-scale farming in varying climates.',
      subImages: [
        {id: 1, imageSrc: 'EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-5.webp', alt: 'EU-multispan-film-greenhouse-5'},
        {id: 2, imageSrc: 'EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-6.webp', alt: 'EU-multispan-film-greenhouse-6'},
        {id: 3, imageSrc: 'EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-7.webp', alt: 'EU-multispan-film-greenhouse-7'},
        {id: 4, imageSrc: 'EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-8.webp', alt: 'EU-multispan-film-greenhouse-8'},
        {id: 5, imageSrc: 'EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-9.webp', alt: 'EU-multispan-film-greenhouse-9'},
      ]
    },
    {
      id: 3,
      name: 'Glass-Greenhouse',
      description: 'A premium greenhouse solution featuring tempered glass panels for maximum light transmission and excellent insulation. Designed for long-term durability, it is perfect for high-value crops and year-round cultivation.',
      subImages: [
        {id: 1, imageSrc: 'Glass-Greenhouse/Glass-Greenhouse-5.webp', alt: 'Glass Greenhouse'},
        {id: 2, imageSrc: 'Glass-Greenhouse/Glass-Greenhouse-6.webp', alt: 'Glass Greenhouse'},
        {id: 3, imageSrc: 'Glass-Greenhouse/Glass-Greenhouse-7.webp', alt: 'Glass Greenhouse'},
        {id: 4, imageSrc: 'Glass-Greenhouse/Glass-Greenhouse-8.webp', alt: 'Glass Greenhouse'},
        {id: 5, imageSrc: 'Glass-Greenhouse/Glass-Greenhouse-9.webp', alt: 'Glass Greenhouse'},
      ]
    },
    {
      id: 4,
      name: 'Polycarbonate Greenhouse',
      description: 'Engineered for durability and insulation, this greenhouse features polycarbonate panels that ensure excellent light diffusion and UV protection. Ideal for creating optimal growing conditions for a wide range of crops.',
      subImages: [
        {id: 1, imageSrc: 'Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-6.webp', alt: 'Polycarbonate-Greenhouse-6'},
        {id: 2, imageSrc: 'Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-7.webp', alt: 'Polycarbonate-Greenhouse-7'},
        {id: 3, imageSrc: 'Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-8.webp', alt: 'Polycarbonate-Greenhouse-8'},
        {id: 4, imageSrc: 'Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-9.webp', alt: 'Polycarbonate-Greenhouse-9'},
        {id: 5, imageSrc: 'Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-10.webp', alt: 'Polycarbonate-Greenhouse-10'},
      ]
    },
    {
      id: 5,
      name: 'Shade House',
      description: 'High-quality shade netting designed to protect plants from excessive sunlight, ideal for temperature-sensitive crops or areas with intense sunlight exposure.',
      subImages: [
        {id: 1, imageSrc: 'Shade-Net-House/Shade-Net-House-5.webp', alt: 'Shade-Net-House-5'},
        {id: 2, imageSrc: 'Shade-Net-House/Shade-Net-House-6.webp', alt: 'Shade-Net-House-6'},
        {id: 3, imageSrc: 'Shade-Net-House/Shade-Net-House-7.webp', alt: 'Shade-Net-House-7'},
        {id: 4, imageSrc: 'Shade-Net-House/Shade-Net-House-8.webp', alt: 'Shade-Net-House-8'},
        {id: 5, imageSrc: 'Shade-Net-House/Shade-Net-House-9.webp', alt: 'Shade-Net-House-9'},
      ]
    }
  ];

  getGreenhouseProducts() {
    return this.greenhouseProduct;
  }
}
