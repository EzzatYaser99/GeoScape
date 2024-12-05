import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenitoProductsService {
  benitoProducts = [
    {
      id: 1, name: 'Urban Furniture', imageSrc: '', description: 'Elegant and durable furniture solutions for both public and private' +
        ' settings.', subImages: [
        {id: 1, imageSrc: 'Urban-Furniture/Urban-Furniture-1.webp'},
        {id: 2, imageSrc: 'Urban-Furniture/Urban-Furniture-2.webp'},
        {id: 3, imageSrc: 'Urban-Furniture/Urban-Furniture-3.webp'},
        {id: 4, imageSrc: 'Urban-Furniture/Urban-Furniture-4.webp'},
      ]
    },
    {
      id: 2,
      name: 'Play Equipment',
      imageSrc: '',
      description: 'Safe and captivating play structures suitable for children of all ages.',
      subImages: [
        {id: 1, imageSrc: 'Play-Equipment/Play-Equipment-1.webp'},
        {id: 2, imageSrc: 'Play-Equipment/Play-Equipment-2.webp'},
        {id: 3, imageSrc: 'Play-Equipment/Play-Equipment-3.webp'},
        {id: 4, imageSrc: 'Play-Equipment/Play-Equipment-4.webp'},
      ]
    },
    {
      id: 3, name: 'Sports and Fitness Equipment', imageSrc: '', description: 'Premium quality gear designed to encourage physical' +
        ' activity and well-being.', subImages: [
        {id: 1, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-1.webp'},
        {id: 2, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp'},
        {id: 3, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp'},
        {id: 4, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-3.webp'},
      ]
    },
    {
      id: 4, name: 'Wood Plastic Composites', imageSrc: '', description: 'Eco-friendly and versatile materials ideal for numerous' +
        ' applications.', subImages: [
        {id: 1, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-1.webp'},
        {id: 2, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-2.webp'},
        {id: 3, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-3.webp'},
        {id: 4, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-4.webp'},
      ]
    },
    {
      id: 5, name: 'Street Lighting', imageSrc: '', description: 'Innovative and efficient street lighting solutions for safer and' +
        ' brighter public spaces.', subImages: [
        {id: 1, imageSrc: 'Street-Lighting/Street-Lighting-1.webp'},
        {id: 2, imageSrc: 'Street-Lighting/Street-Lighting-2.webp'},
        {id: 3, imageSrc: 'Street-Lighting/Street-Lighting-3.webp'},
        {id: 4, imageSrc: 'Street-Lighting/Street-Lighting-4.webp'},
      ]
    },
    {
      id: 6, name: 'Street Furniture', imageSrc: '', description: 'Durable and stylish street furniture to improve the comfort and' +
        ' functionality of outdoor areas.', subImages: [
        {id: 1, imageSrc: 'Street-Furniture/Street-Furniture-1.webp'},
        {id: 2, imageSrc: 'Street-Furniture/Street-Furniture-2.webp'},
        {id: 3, imageSrc: 'Street-Furniture/Street-Furniture-3.webp'},
        {id: 4, imageSrc: 'Street-Furniture/Street-Furniture-4.webp'},
      ]
    },
    {
      id: 7,
      name: 'Mobility',
      imageSrc: '',
      description: 'Solutions designed to facilitate urban mobility and accessibility.',
      subImages: [
        {id: 1, imageSrc: 'Mobility/Mobility-1.webp'},
        {id: 2, imageSrc: 'Mobility/Mobility-2.webp'},
        {id: 3, imageSrc: 'Mobility/Mobility-3.webp'},
        {id: 4, imageSrc: 'Mobility/Mobility-4.webp'},
      ]
    },
    {
      id: 8, name: 'Playground Sports Equipment', imageSrc: '', description: 'Safe and engaging equipment for playgrounds and sports' +
        ' areas, suitable for all ages.', subImages: [
        {id: 1, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-1.webp'},
        {id: 2, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-2.webp'},
        {id: 3, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-3.webp'},
        {id: 4, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-4.webp'},
      ]
    },
    {
      id: 9, name: 'Sports Equipment', imageSrc: '', description: 'High-quality sports equipment to promote physical activity and' +
        ' well-being.', subImages: [
        {id: 1, imageSrc: 'Sports-Equipment/Sports-Equipment-1.webp'},
        {id: 2, imageSrc: 'Sports-Equipment/Sports-Equipment-2.webp'},
        {id: 3, imageSrc: 'Sports-Equipment/Sports-Equipment-3.webp'},
        {id: 4, imageSrc: 'Sports-Equipment/Sports-Equipment-4.webp'},
      ]
    },
    {
      id: 10,
      name: 'Covers and Grates',
      imageSrc: '',
      description: 'Robust and reliable covers and grates for various urban infrastructure' +
        ' needs.',
      subImages: [
        {id: 1, imageSrc: 'Covers-and-Grates/Covers-and-Grates-1.webp'},
        {id: 2, imageSrc: 'Covers-and-Grates/Covers-and-Grates-2.webp'},
        {id: 3, imageSrc: 'Covers-and-Grates/Covers-and-Grates-3.webp'},
        {id: 4, imageSrc: 'Covers-and-Grates/Covers-and-Grates-4.webp'},
      ]
    },
    {
      id: 1, name: 'Riga', imageSrc: '', description: 'Innovative solutions for urban development and beautification.', subImages: [
        {id: 4, imageSrc: 'Riga/Riga-1.webp'},
        {id: 2, imageSrc: 'Riga/Riga-2.webp'},
        {id: 3, imageSrc: 'Riga/Riga-3.webp'},
        {id: 4, imageSrc: 'Riga/Riga-4.webp'},
      ]
    },
    {
      id: 12, name: 'Arko', imageSrc: '', description: 'Durable and stylish urban furniture and accessories.', subImages: [
        {id: 1, imageSrc: 'Arko/Arko-1.webp'},
        {id: 2, imageSrc: 'Arko/Arko-2.webp'},
        {id: 3, imageSrc: 'Arko/Arko-3.webp'},
        {id: 4, imageSrc: 'Arko/Arko-4.webp'},
      ]
    },
    {
      id: 13, name: 'Arka', imageSrc: '', description: 'High-quality, modern street furniture for public spaces.', subImages: [
        {id: 1, imageSrc: 'Arka/Arka-1.webp'},
        {id: 2, imageSrc: 'Arka/Arka-2.webp'},
        {id: 3, imageSrc: 'Arka/Arka-3.webp'},
        {id: 4, imageSrc: 'Arka/Arka-4.webp'},
      ]
    },
    {
      id: 14, name: 'Arne', imageSrc: '', description: 'Functional and aesthetically pleasing urban design elements.', subImages: [
        {id: 1, imageSrc: 'Arne/Arne-1.webp'},

      ]
    },
    {
      id: 15, name: 'Arte', imageSrc: '', description: 'Creative and artistic urban design solutions.', subImages: [
        {id: 1, imageSrc: 'Arte/Arte-1.webp'},
        {id: 2, imageSrc: 'Arte/Arte-2.webp'},
        {id: 3, imageSrc: 'Arte/Arte-3.webp'},
        {id: 4, imageSrc: 'Arte/Arte-4.webp'},
      ]
    },
    {
      id: 16, name: 'Citizen', imageSrc: '', description: 'Stylish and functional urban furniture for public areas.', subImages: [
        {id: 1, imageSrc: 'Citizen/Citizen-1.webp'},
        {id: 2, imageSrc: 'Citizen/Citizen-2.webp'},
        {id: 3, imageSrc: 'Citizen/Citizen-3.webp'},
        {id: 4, imageSrc: 'Citizen/Citizen-4.webp'},
      ]
    },
    {
      id: 17, name: 'Coro', imageSrc: '', description: 'Elegant and durable urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Coro/Coro-1.webp'},
        {id: 2, imageSrc: 'Coro/Coro-2.webp'},
        {id: 3, imageSrc: 'Coro/Coro-3.webp'},
        {id: 4, imageSrc: 'Coro/Coro-4.webp'},
      ]
    },
    {
      id: 18, name: 'Minsk', imageSrc: '', description: 'High-quality urban design products for public spaces.', subImages: [
        {id: 1, imageSrc: 'Minsk/Minsk-1.webp'},
        {id: 2, imageSrc: 'Minsk/Minsk-2.webp'},
        {id: 3, imageSrc: 'Minsk/Minsk-3.webp'},
        {id: 4, imageSrc: 'Minsk/Minsk-4.webp'},
      ]
    },
    {
      id: 19, name: 'Piro', imageSrc: '', description: 'Functional and stylish urban furniture.', subImages: [
        {id: 1, imageSrc: 'Piro/Piro-1.webp'},
        {id: 2, imageSrc: 'Piro/Piro-2.webp'},
        {id: 3, imageSrc: 'Piro/Piro-3.webp'},
        {id: 4, imageSrc: 'Piro/Piro-4.webp'},
      ]
    },
    {
      id: 20, name: 'Ares', imageSrc: '', description: 'Durable and modern urban design elements.', subImages: [
        {id: 1, imageSrc: 'Ares/Ares-1.webp'},
      ]
    },
    {
      id: 2, name: 'Quatro', imageSrc: '', description: 'Innovative urban furniture solutions for public spaces.', subImages: [
        {id: 1, imageSrc: 'Quatro/Quatro-1.webp'},
        {id: 2, imageSrc: 'Quatro/Quatro-2.webp'},
      ]
    },
    {
      id: 22, name: 'Leman', imageSrc: '', description: 'Elegant and durable urban furniture for various applications.', subImages: [
        {id: 1, imageSrc: 'Leman/Leman-1.webp'},
        {id: 2, imageSrc: 'Leman/Leman-2.webp'},
        {id: 3, imageSrc: 'Leman/Leman-3.webp'},
        {id: 4, imageSrc: 'Leman/Leman-4.webp'},
      ]
    },
    {
      id: 23, name: 'Polka', imageSrc: '', description: 'Stylish and functional urban design products.', subImages: [
        {id: 1, imageSrc: 'Polka/Polka-1.webp'},
        {id: 2, imageSrc: 'Polka/Polka-2.webp'},
      ]
    },
    {
      id: 24, name: 'Gavarras', imageSrc: '', description: 'Creative and artistic urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Gavarras/Gavarras-1.webp'},
        {id: 2, imageSrc: 'Gavarras/Gavarras-2.webp'},
        {id: 3, imageSrc: 'Gavarras/Gavarras-3.webp'},
        {id: 4, imageSrc: 'Gavarras/Gavarras-4.webp'},
      ]
    },
    {
      id: 25, name: 'Petrus', imageSrc: '', description: 'High-quality, durable urban design elements.', subImages: [
        {id: 1, imageSrc: 'Petrus/Petrus-1.webp'},
        {id: 2, imageSrc: 'Petrus/Petrus-2.webp'},
        {id: 3, imageSrc: 'Petrus/Petrus-3.webp'},
        {id: 4, imageSrc: 'Petrus/Petrus-4.webp'},
      ]
    },
    {
      id: 26, name: 'Okto', imageSrc: '', description: 'Modern and stylish urban furniture for public areas.', subImages: [
        {id: 1, imageSrc: 'Okto/Okto-1.webp'},
        {id: 2, imageSrc: 'Okto/Okto-2.webp'},
        {id: 3, imageSrc: 'Okto/Okto-3.webp'},
        {id: 4, imageSrc: 'Okto/Okto-4.webp'},
      ]
    },
    {
      id: 27, name: 'Flo', imageSrc: '', description: 'Elegant and functional urban design products.', subImages: [
        {id: 1, imageSrc: 'Flo/Flo-1.webp'},
        {id: 2, imageSrc: 'Flo/Flo-2.webp'},
        {id: 3, imageSrc: 'Flo/Flo-3.webp'},
        {id: 4, imageSrc: 'Flo/Flo-4.webp'},
      ]
    },
    {
      id: 28, name: 'Mielek', imageSrc: '', description: 'Durable and stylish urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Mielek/Mielek-1.webp'},
        {id: 2, imageSrc: 'Mielek/Mielek-2.webp'},
        {id: 3, imageSrc: 'Mielek/Mielek-3.webp'},
        {id: 4, imageSrc: 'Mielek/Mielek-4.webp'},
      ]
    },
    {
      id: 29, name: 'Trax', imageSrc: '', description: 'Innovative and modern urban design elements.\n', subImages: [
        {id: 1, imageSrc: 'Trax/Trax-1.webp'},
        {id: 2, imageSrc: 'Trax/Trax-2.webp'},
        {id: 3, imageSrc: 'Trax/Trax-3.webp'},
        {id: 4, imageSrc: 'Trax/Trax-4.webp'},
      ]
    },
  ]

  getBenitoProducts() {
    return this.benitoProducts;
  }
}
