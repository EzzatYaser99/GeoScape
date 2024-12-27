import {Injectable} from '@angular/core';
import {Client} from "../types/client.type";

@Injectable({
  providedIn: 'root'
})

export class GeoscapeClientsService {
  geoscapeClients: Client[] = [
    {
      id: '1',
      name: 'Sports Boulevard',
      image: 'sports-boulevard.webp',
      alt: 'Sports Boulevard image',
    },
    {
      id: '2',
      name: 'NEOM',
      image: 'neom.webp',
      alt: 'NEOM image',
    },
    {
      id: '3',
      name: 'Nesma & Partners',
      image: 'nesma.webp',
      alt: 'Nesma & Partners image',
    },
    {
      id: '4',
      name: 'Power China',
      image: 'power-china.webp',
      alt: 'Power China image',
    },
    {
      id: '5',
      name: 'Freyssinet',
      image: 'freyssinet.webp',
      alt: 'Freyssinet image',
    },
    {
      id: '6',
      name: 'Royal commission',
      image: 'royal-commission.webp',
      alt: 'Royal commission image',
    },
    {
      id: '7',
      name: 'Sapac',
      image: 'sapac.webp',
      alt: 'Sapac image',
    },
    {
      id: '8',
      name: 'Alyamama',
      image: 'alyamama.webp',
      alt: 'Alyamama image',
    },
    {
      id: '9',
      name: 'Zaid Alhussain',
      image: 'zaid-alhussain.webp',
      alt: 'Zaid Alhussain image',
    },
  ];

  constructor() {
  }

  getGeoscapeClients() {
    return this.geoscapeClients
  }
}
