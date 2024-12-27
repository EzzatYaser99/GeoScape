import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeedlingProductsService {

  seedlingProduct = [
    {
      id: 1,
      name: 'Ebb and Flow Bench',
      description: 'A water-efficient bench system that utilizes bottom-up irrigation for uniform watering and nutrient delivery. Ideal for various plant types, it reduces water usage and enhances growth rates.',
      subImages: [
        {id: 1, imageSrc: 'ebb-and-flow bench/Ebb-and-flow-bench-1.webp', alt: 'Ebb and Flow Bench Image 1'},
        {id: 2, imageSrc: 'ebb-and-flow bench/Ebb-and-flow-bench-2.webp', alt: 'Ebb and Flow Bench Image 2'},
        {id: 3, imageSrc: 'ebb-and-flow bench/Ebb-and-flow-bench-3.webp', alt: 'Ebb and Flow Bench Image 3'},
        {id: 4, imageSrc: 'ebb-and-flow bench/Ebb-and-flow-bench-4.webp', alt: 'Ebb and Flow Bench Image 4'},
        {id: 5, imageSrc: 'ebb-and-flow bench/Ebb-and-flow-bench-5.webp', alt: 'Ebb and Flow Bench Image 5'}
      ]
    },
    {
      id: 2,
      name: 'Multi-Layer Seeding System',
      description: 'A versatile system designed for efficient space utilization in seedling cultivation. With multiple tiers, it maximizes planting capacity while providing uniform watering and light exposure for healthy seedling growth.',
      subImages: [
        {id: 1, imageSrc: 'multilayer Seeding-trolley/Multilayer-Seeding-trolley-2.webp', alt: 'Multi-Layer Seeding System Image 1'},
        {id: 2, imageSrc: 'multilayer Seeding-trolley/Multilayer-Seeding-trolley-3.webp', alt: 'Multi-Layer Seeding System Image 2'},
        {id: 3, imageSrc: 'multilayer Seeding-trolley/Multilayer-Seeding-trolley-4.webp', alt: 'Multi-Layer Seeding System Image 3'},
        {id: 4, imageSrc: 'multilayer Seeding-trolley/Multilayer-Seeding-trolley-5.webp', alt: 'Multi-Layer Seeding System Image 4'},
        {id: 5, imageSrc: 'multilayer Seeding-trolley/Multilayer-Seeding-trolley-6.webp', alt: 'Multi-Layer Seeding System Image 5'}
      ]
    },
    {
      id: 3,
      name: 'T-Rail Bench',
      description: 'A flexible bench system allowing easy tray movement, reducing aisle space, and increasing planting density. Its efficient design improves crop handling and optimizes greenhouse productivity',
      subImages: [
        {id: 1, imageSrc: 't-rail-bench/t-rail-benches-5.webp', alt: 'T-Rail Bench Image 1'},
        {id: 2, imageSrc: 't-rail-bench/t-rail-benches-6.webp', alt: 'T-Rail Bench Image 2'},
        {id: 3, imageSrc: 't-rail-bench/t-rail-benches-7.webp', alt: 'T-Rail Bench Image 3'},
        {id: 4, imageSrc: 't-rail-bench/t-rail-benches-8.webp', alt: 'T-Rail Bench Image 4'},
        {id: 5, imageSrc: 't-rail-bench/t-rail-benches-9.webp', alt: 'T-Rail Bench Image 5'}
      ]
    },
    {
      id: 4,
      name: 'Wire Bottom Seeding Bench',
      description: 'A durable and breathable bench with a wire mesh base that ensures optimal drainage and aeration for seedlings. Its sturdy construction is ideal for both small-scale and commercial greenhouse operations.',
      subImages: [
        {id: 1, imageSrc: 'wire-bottom seedling-bench/Wire-bottom-seedling-bench-5.webp', alt: 'Wire Bottom Seeding Bench Image 1'},
        {id: 2, imageSrc: 'wire-bottom seedling-bench/Wire-bottom-seedling-bench-6.webp', alt: 'Wire Bottom Seeding Bench Image 2'},
        {id: 3, imageSrc: 'wire-bottom seedling-bench/Wire-bottom-seedling-bench-7.webp', alt: 'Wire Bottom Seeding Bench Image 3'},
        {id: 4, imageSrc: 'wire-bottom seedling-bench/Wire-bottom-seedling-bench-8.webp', alt: 'Wire Bottom Seeding Bench Image 4'},
        {id: 5, imageSrc: 'wire-bottom seedling-bench/Wire-bottom-seedling-bench-9.webp', alt: 'Wire Bottom Seeding Bench Image 5'}
      ]
    }
  ];

  getSeedlingProducts() {
    return this.seedlingProduct;
  }
}
