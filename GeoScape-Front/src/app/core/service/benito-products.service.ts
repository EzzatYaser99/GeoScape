import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenitoProductsService {
  benitoProducts = [
    {
      id: 1, name: 'Urban Furniture',  description: 'Elegant and durable furniture solutions for both public and private' +
        ' settings.', subImages: [
        {id: 1, imageSrc: 'Urban-Furniture/Urban-Furniture-1.webp', alt: 'Urban Furniture '},
        {id: 2, imageSrc: 'Urban-Furniture/Urban-Furniture-2.webp', alt: 'Urban Furniture '},
        {id: 3, imageSrc: 'Urban-Furniture/Urban-Furniture-3.webp', alt: 'Urban Furniture '},
        {id: 4, imageSrc: 'Urban-Furniture/Urban-Furniture-4.webp', alt: 'Urban Furniture '},
      ]
    },
    {
      id: 2,
      name: 'Play Equipment',

      description: 'Safe and captivating play structures suitable for children of all ages.',
      subImages: [
        {id: 1, imageSrc: 'Play-Equipment/Play-Equipment-1.webp', alt: 'Play Equipment'},
        {id: 2, imageSrc: 'Play-Equipment/Play-Equipment-2.webp', alt: 'Play Equipment'},
        {id: 3, imageSrc: 'Play-Equipment/Play-Equipment-3.webp', alt: 'Play Equipment'},
        {id: 4, imageSrc: 'Play-Equipment/Play-Equipment-4.webp', alt: 'Play Equipment'},
      ]
    },
    {
      id: 3, name: 'Sports and Fitness Equipment',  description: 'Premium quality gear designed to encourage physical' +
        ' activity and well-being.', subImages: [
        {id: 1, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-1.webp', alt: 'Sports and Fitness Equipment'},
        {id: 2, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp', alt: 'Sports and Fitness Equipment'},
        {id: 3, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp', alt: 'Sports and Fitness Equipment'},
        {id: 4, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-3.webp', alt: 'Sports and Fitness Equipment'},
      ]
    },
    {
      id: 4, name: 'Wood Plastic Composites',  description: 'Eco-friendly and versatile materials ideal for numerous' +
        ' applications.', subImages: [
        {id: 1, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-1.webp', alt: 'Wood Plastic Composites'},
        {id: 2, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-2.webp', alt: 'Wood Plastic Composites'},
        {id: 3, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-3.webp', alt: 'Wood Plastic Composites'},
        {id: 4, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-4.webp', alt: 'Wood Plastic Composites'},
      ]
    },
    {
      id: 5, name: 'Street Lighting',  description: 'Innovative and efficient street lighting solutions for safer and' +
        ' brighter public spaces.', subImages: [
        {id: 1, imageSrc: 'Street-Lighting/Street-Lighting-1.webp', alt: 'Street Lighting'},
        {id: 2, imageSrc: 'Street-Lighting/Street-Lighting-2.webp', alt: 'Street Lighting'},
        {id: 3, imageSrc: 'Street-Lighting/Street-Lighting-3.webp', alt: 'Street Lighting'},
        {id: 4, imageSrc: 'Street-Lighting/Street-Lighting-4.webp', alt: 'Street Lighting'},
      ]
    },
    {
      id: 6, name: 'Street Furniture',  description: 'Durable and stylish street furniture to improve the comfort and' +
        ' functionality of outdoor areas.', subImages: [
        {id: 1, imageSrc: 'Street-Furniture/Street-Furniture-1.webp', alt: 'Street Furniture'},
        {id: 2, imageSrc: 'Street-Furniture/Street-Furniture-2.webp', alt: 'Street Furniture'},
        {id: 3, imageSrc: 'Street-Furniture/Street-Furniture-3.webp', alt: 'Street Furniture'},
        {id: 4, imageSrc: 'Street-Furniture/Street-Furniture-4.webp', alt: 'Street Furniture'},
      ]
    },
    {
      id: 7, name: 'Mobility',  description: 'Solutions designed to facilitate urban mobility and accessibility.',
      subImages: [
        {id: 1, imageSrc: 'Mobility/Mobility-1.webp', alt: 'Mobility'},
        {id: 2, imageSrc: 'Mobility/Mobility-2.webp', alt: 'Mobility'},
        {id: 3, imageSrc: 'Mobility/Mobility-3.webp', alt: 'Mobility'},
        {id: 4, imageSrc: 'Mobility/Mobility-4.webp', alt: 'Mobility'},
      ]
    },
    {
      id: 8, name: 'Playground Sports Equipment',  description: 'Safe and engaging equipment for playgrounds and sports' +
        ' areas, suitable for all ages.',
      subImages: [
        {id: 1, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-1.webp', alt: 'Playground Sports Equipment'},
        {id: 2, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-2.webp', alt: 'Playground Sports Equipment'},
        {id: 3, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-3.webp', alt: 'Playground Sports Equipment'},
        {id: 4, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-4.webp', alt: 'Playground Sports Equipment'},
      ]
    },
    {
      id: 9, name: 'Sports Equipment',  description: 'High-quality sports equipment to promote physical activity and' +
        ' well-being.',
      subImages: [
        {id: 1, imageSrc: 'Sports-Equipment/Sports-Equipment-1.webp', alt: 'Sports Equipment'},
        {id: 2, imageSrc: 'Sports-Equipment/Sports-Equipment-2.webp', alt: 'Sports Equipment'},
        {id: 3, imageSrc: 'Sports-Equipment/Sports-Equipment-3.webp', alt: 'Sports Equipment'},
        {id: 4, imageSrc: 'Sports-Equipment/Sports-Equipment-4.webp', alt: 'Sports Equipment'},
      ]
    },
    {
      id: 10, name: 'Covers and Grates',  description: 'Robust and reliable covers and grates for various urban infrastructure' +
        ' needs.',
      subImages: [
        {id: 1, imageSrc: 'Covers-and-Grates/Covers-and-Grates-1.webp', alt: 'Covers and Grates'},
        {id: 2, imageSrc: 'Covers-and-Grates/Covers-and-Grates-2.webp', alt: 'Covers and Grates'},
        {id: 3, imageSrc: 'Covers-and-Grates/Covers-and-Grates-3.webp', alt: 'Covers and Grates'},
        {id: 4, imageSrc: 'Covers-and-Grates/Covers-and-Grates-4.webp', alt: 'Covers and Grates'},
      ]
    },
    {
      id: 11, name: 'Riga',  description: 'Innovative solutions for urban development and beautification.',
      subImages: [
        {id: 1, imageSrc: 'Riga/Riga-1.webp', alt: 'Riga'},
        {id: 2, imageSrc: 'Riga/Riga-2.webp', alt: 'Riga'},
        {id: 3, imageSrc: 'Riga/Riga-3.webp', alt: 'Riga'},
        {id: 4, imageSrc: 'Riga/Riga-4.webp', alt: 'Riga'},
      ]
    },
    {
      id: 12, name: 'Arko',  description: 'Durable and stylish urban furniture and accessories.',
      subImages: [
        {id: 1, imageSrc: 'Arko/Arko-1.webp', alt: 'Arko'},
        {id: 2, imageSrc: 'Arko/Arko-2.webp', alt: 'Arko'},
        {id: 3, imageSrc: 'Arko/Arko-3.webp', alt: 'Arko'},
        {id: 4, imageSrc: 'Arko/Arko-4.webp', alt: 'Arko'},
      ]
    },
    {
      id: 13, name: 'Arka',  description: 'High-quality, modern street furniture for public spaces.',
      subImages: [
        {id: 1, imageSrc: 'Arka/Arka-1.webp', alt: 'Arka'},
        {id: 2, imageSrc: 'Arka/Arka-2.webp', alt: 'Arka'},
        {id: 3, imageSrc: 'Arka/Arka-3.webp', alt: 'Arka'},
        {id: 4, imageSrc: 'Arka/Arka-4.webp', alt: 'Arka'},
      ]
    },
    {
      id: 14, name: 'Arne',  description: 'Functional and aesthetically pleasing urban design elements.',
      subImages: [
        {id: 1, imageSrc: 'Arne/Arne-1.webp', alt: 'Arne'},
      ]
    },
    {
      id: 15, name: 'Arte',  description: 'Creative and artistic urban design solutions.',
      subImages: [
        {id: 1, imageSrc: 'Arte/Arte-1.webp', alt: 'Arte'},
        {id: 2, imageSrc: 'Arte/Arte-2.webp', alt: 'Arte'},
        {id: 3, imageSrc: 'Arte/Arte-3.webp', alt: 'Arte'},
        {id: 4, imageSrc: 'Arte/Arte-4.webp', alt: 'Arte'},
      ]
    },
    {
      id: 16, name: 'Citizen',  description: 'Stylish and functional urban furniture for public areas.',
      subImages: [
        {id: 1, imageSrc: 'Citizen/Citizen-1.webp', alt: 'Citizen'},
        {id: 2, imageSrc: 'Citizen/Citizen-2.webp', alt: 'Citizen'},
        {id: 3, imageSrc: 'Citizen/Citizen-3.webp', alt: 'Citizen'},
        {id: 4, imageSrc: 'Citizen/Citizen-4.webp', alt: 'Citizen'},
      ]
    },
    {
      id: 17, name: 'Coro',  description: 'Elegant and durable urban furniture solutions.',
      subImages: [
        {id: 1, imageSrc: 'Coro/Coro-1.webp', alt: 'Coro'},
        {id: 2, imageSrc: 'Coro/Coro-2.webp', alt: 'Coro'},
        {id: 3, imageSrc: 'Coro/Coro-3.webp', alt: 'Coro'},
        {id: 4, imageSrc: 'Coro/Coro-4.webp', alt: 'Coro'},
      ]
    },
    {
      id: 18, name: 'Minsk',  description: 'High-quality urban design products for public spaces.',
      subImages: [
        {id: 1, imageSrc: 'Minsk/Minsk-1.webp', alt: 'Minsk'},
        {id: 2, imageSrc: 'Minsk/Minsk-2.webp', alt: 'Minsk'},
        {id: 3, imageSrc: 'Minsk/Minsk-3.webp', alt: 'Minsk'},
        {id: 4, imageSrc: 'Minsk/Minsk-4.webp', alt: 'Minsk'},
      ]
    },
    {
      id: 19, name: 'Piro',  description: 'Functional and stylish urban furniture.',
      subImages: [
        {id: 1, imageSrc: 'Piro/Piro-1.webp', alt: 'Piro'},
        {id: 2, imageSrc: 'Piro/Piro-2.webp', alt: 'Piro'},
        {id: 3, imageSrc: 'Piro/Piro-3.webp', alt: 'Piro'},
        {id: 4, imageSrc: 'Piro/Piro-4.webp', alt: 'Piro'},
      ]
    },
    {
      id: 20, name: 'Ares',  description: 'Durable and modern urban design elements.',
      subImages: [
        {id: 1, imageSrc: 'Ares/Ares-1.webp', alt: 'Ares'},
      ]
    },
    {
      id: 21, name: 'Arq',  description: 'Architecturally designed urban furniture for enhancing public spaces.',
      subImages: [
        {id: 1, imageSrc: 'Arq/Arq-1.webp', alt: 'Arq'},
        {id: 2, imageSrc: 'Arq/Arq-2.webp', alt: 'Arq'},
      ]
    },
    {
      id: 22, name: 'Parkour',  description: 'Parkour equipment designed to enhance physical movement and agility.',
      subImages: [
        {id: 1, imageSrc: 'Parkour/Parkour-1.webp', alt: 'Parkour'},
        {id: 2, imageSrc: 'Parkour/Parkour-2.webp', alt: 'Parkour'},
        {id: 3, imageSrc: 'Parkour/Parkour-3.webp', alt: 'Parkour'},
        {id: 4, imageSrc: 'Parkour/Parkour-4.webp', alt: 'Parkour'},
      ]
    },
    {
      id: 23, name: 'Street Furniture',  description: 'Functional and stylish street furniture for urban spaces.',
      subImages: [
        {id: 1, imageSrc: 'Street-Furniture/Street-Furniture-1.webp', alt: 'Street Furniture'},
        {id: 2, imageSrc: 'Street-Furniture/Street-Furniture-2.webp', alt: 'Street Furniture'},
        {id: 3, imageSrc: 'Street-Furniture/Street-Furniture-3.webp', alt: 'Street Furniture'},
        {id: 4, imageSrc: 'Street-Furniture/Street-Furniture-4.webp', alt: 'Street Furniture'},
      ]
    },
    {
      id: 24, name: 'Benches',  description: 'Comfortable and durable benches for parks, streets, and public spaces.',
      subImages: [
        {id: 1, imageSrc: 'Benches/Benches-1.webp', alt: 'Benches'},
        {id: 2, imageSrc: 'Benches/Benches-2.webp', alt: 'Benches'},
        {id: 3, imageSrc: 'Benches/Benches-3.webp', alt: 'Benches'},
        {id: 4, imageSrc: 'Benches/Benches-4.webp', alt: 'Benches'},
      ]
    },
    {
      id: 25, name: 'Litter Bins',  description: 'Litter bins designed for public spaces to maintain cleanliness.',
      subImages: [
        {id: 1, imageSrc: 'Litter-Bins/Litter-Bins-1.webp', alt: 'Litter Bins'},
        {id: 2, imageSrc: 'Litter-Bins/Litter-Bins-2.webp', alt: 'Litter Bins'},
        {id: 3, imageSrc: 'Litter-Bins/Litter-Bins-3.webp', alt: 'Litter Bins'},
        {id: 4, imageSrc: 'Litter-Bins/Litter-Bins-4.webp', alt: 'Litter Bins'},
      ]
    },
    {
      id: 26, name: 'Bike Racks',  description: 'Secure and practical bike racks for urban environments.',
      subImages: [
        {id: 1, imageSrc: 'Bike-Racks/Bike-Racks-1.webp', alt: 'Bike Racks'},
        {id: 2, imageSrc: 'Bike-Racks/Bike-Racks-2.webp', alt: 'Bike Racks'},
        {id: 3, imageSrc: 'Bike-Racks/Bike-Racks-3.webp', alt: 'Bike Racks'},
        {id: 4, imageSrc: 'Bike-Racks/Bike-Racks-4.webp', alt: 'Bike Racks'},
      ]
    },
    {
      id: 27, name: 'Planters',  description: 'Elegant and durable planters for beautifying urban spaces.',
      subImages: [
        {id: 1, imageSrc: 'Planters/Planters-1.webp', alt: 'Planters'},
        {id: 2, imageSrc: 'Planters/Planters-2.webp', alt: 'Planters'},
        {id: 3, imageSrc: 'Planters/Planters-3.webp', alt: 'Planters'},
        {id: 4, imageSrc: 'Planters/Planters-4.webp', alt: 'Planters'},
      ]
    },
    {
      id: 28, name: 'Fences',  description: 'Durable and stylish fences for public spaces and private properties.',
      subImages: [
        {id: 1, imageSrc: 'Fences/Fences-1.webp', alt: 'Fences'},
        {id: 2, imageSrc: 'Fences/Fences-2.webp', alt: 'Fences'},
        {id: 3, imageSrc: 'Fences/Fences-3.webp', alt: 'Fences'},
        {id: 4, imageSrc: 'Fences/Fences-4.webp', alt: 'Fences'},
      ]
    },
    {
      id: 29, name: 'Public Lighting',  description: 'Effective and stylish public lighting solutions for safety and ambiance.',
      subImages: [
        {id: 1, imageSrc: 'Public-Lighting/Public-Lighting-1.webp', alt: 'Public Lighting'},
        {id: 2, imageSrc: 'Public-Lighting/Public-Lighting-2.webp', alt: 'Public Lighting'},
        {id: 3, imageSrc: 'Public-Lighting/Public-Lighting-3.webp', alt: 'Public Lighting'},
        {id: 4, imageSrc: 'Public-Lighting/Public-Lighting-4.webp', alt: 'Public Lighting'},
      ]
    }


    ]
  getBenitoProducts() {
    return this.benitoProducts;
  }
}
