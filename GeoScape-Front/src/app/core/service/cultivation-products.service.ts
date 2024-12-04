import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CultivationProductsService {

  private cultivationProduct: any[] = [
    {
      id: 1, name: 'Cultivation – NFT Hydroponic for Leafy Vegetables', description: 'A hydroponic system that employs the' +
        ' Nutrient Film Technique, providing a steady flow' +
        ' of nutrients to the roots. Designed for leafy vegetables, it ensures faster growth and better ' +
        'resource efficiency.', subImages: [
        {id: 1, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-6.webp'},
        {id: 2, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-7.webp'},
        {id: 3, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-8.webp'},
        {id: 4, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-9.webp'},
        {id: 5, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-10.webp'},
        {id: 5, imageSrc: 'Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-11.webp'},

      ]
    },
    {
      id: 2, name: 'Cultivation – Vine Crop Gutter Planting System', description: 'A specialized planting system designed for' +
        ' vine crops like tomatoes and cucumbers. It uses gutters for precise irrigation and drainage, ensuring healthy root ' +
        'systems and higher yields.' , subImages: [
        {id: 1, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-7.webp'},
        {id: 2, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-8.webp'},
        {id: 3, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-9.webp'},
        {id: 4, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-10.webp'},
        {id: 5, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-11.webp'},
        {id: 5, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-12.webp'},
        {id: 5, imageSrc: 'Cultivation-Substrate-growing-system/vine-crop-gutter-planting-13.webp'},
      ]
    },
    {
      id: 3, name: 'Vertical A-Frame System', description: 'An innovative vertical cultivation system with an A-frame' +
        ' design. Perfect for maximizing space in greenhouses, it supports multiple layers of crops while ensuring efficient' +
        ' nutrient delivery',
      subImages: [
        {id: 1, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-8.webp'},
        {id: 2, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-9.webp'},
        {id: 3, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-10.webp'},
        {id: 4, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-11.webp'},
        {id: 5, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-12.webp'},
        {id: 6, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-13.webp'},
        {id: 7, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-14.webp'},
        {id: 8, imageSrc: 'Cultivation-Vertical-A-frame/Vertical-A-frame-15.webp'},
      ]
    }

  ];

  getCultivationProductProducts() {
    return this.cultivationProduct;
  }
}
