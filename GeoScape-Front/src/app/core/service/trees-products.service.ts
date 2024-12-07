import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreesProductsService {
   trees = [
    {
      id: 1,
      category: 'Trees',
      name: 'CERATONIA SILIQUA (Carob Tree)',
      imageSrc: 'trees/CERATONIA-SILIQUA.webp',
      alt: 'Carob Tree Image',
      description: 'CERATONIA SILIQUA, commonly known as the Carob Tree, is suitable for transplantation with proper timing. It is a robust tree ideal for various landscape projects.'
    },
    {
      id: 2,
      category: 'Trees',
      name: 'Pithecellobium dulce (Madras Thorn)',
      imageSrc: 'trees/Pithecellobium-dulce.webp',
      alt: 'Madras Thorn Image',
      description: 'Pithecellobium dulce, also known as Madras Thorn, serves as an alternative to the Carob Tree. It is available for transplantation in October.'
    },
    {
      id: 3,
      category: 'Trees',
      name: 'Melia Azedarach (Chinaberry Tree)',
      imageSrc: 'trees/Melia-Azedarach.webp',
      alt: 'Chinaberry Tree Image',
      description: 'Melia Azedarach, or Chinaberry Tree, is another alternative to the Carob Tree. It is suitable for transplantation in October.'
    },
    {
      id: 4,
      category: 'Shrubs',
      name: 'General Shrubs',
      imageSrc: 'trees/General-Shrubs.webp',
      alt: 'General Shrubs Image',
      description: 'Various shrubs that should be placed against walls to avoid strong winds. These shrubs are ideal for creating sheltered garden spaces.'
    },
    {
      id: 5,
      category: 'Herbaceous',
      name: 'SALVIA AEGYPTIACA (Egyptian Sage)',
      imageSrc: 'trees/SALVIA-AEGYPTIACA.webp',
      alt: 'Egyptian Sage Image',
      description: 'SALVIA AEGYPTIACA, or Egyptian Sage, is available for transplantation in October. It is a versatile herbaceous plant perfect for adding texture to gardens.'
    },
    {
      id: 6,
      category: 'Herbaceous',
      name: 'SALVIA OFFICINALIS (Common Sage)',
      imageSrc: 'trees/SALVIA-OFFICINALIS.webp',
      alt: 'Common Sage Image',
      description: 'SALVIA OFFICINALIS, also known as Common Sage, serves as an alternative to Egyptian Sage. It is known for its aromatic leaves and medicinal properties.'
    },
    {
      id: 7,
      category: 'Herbaceous',
      name: 'Mentha longifolia (Wild Mint)',
      imageSrc: 'trees/Mentha-longifolia.webp',
      alt: 'Wild Mint Image',
      description: 'Mentha longifolia, or Wild Mint, is another alternative to Egyptian Sage. It is characterized by its fragrant foliage and is suitable for various garden settings.'
    },
    {
      id: 10,
      category: 'Succulents',
      name: 'General Succulents',
      imageSrc: 'trees/General-Succulents.webp',
      alt: 'General Succulents Image',
      description: 'A variety of succulents suitable for the landscape, known for their drought resistance and unique forms. They are perfect for low-maintenance gardens.'
    },
    {
      id: 11,
      category: 'Climbers',
      name: 'General Climbers',
      imageSrc: 'trees/General-Climbers.webp',
      alt: 'General Climbers Image',
      description: 'Climbing plants ideal for vertical gardens, adding green coverage to walls and trellises. They are excellent for creating living walls and enhancing vertical spaces.'
    },
    {
      id: 12,
      category: 'Grass (Lawn)',
      name: 'Dasylirion Longifolium',
      imageSrc: 'trees/Dasylirion-Longifolium.webp',
      alt: 'Dasylirion Longifolium Image',
      description: 'Suitable grass species for lawn areas, providing lush green coverage that is ideal for recreational and aesthetic purposes.'
    }
  ];

  constructor() {
  }

  getTrees() {
    return this.trees;
  }
}
