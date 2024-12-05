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
    },
    {
      id: '2',
      name: 'NEOM',
      image: 'neom.webp',
    },
    {
      id: '3',
      name: 'Nesma & Partners',
      image: 'nesma.webp',
    },
    {
      id: '4',
      name: 'Power China',
      image: 'power-china.webp',
    },
    {
      id: '5',
      name: 'Freyssinet',
      image: 'freyssinet.webp',
    },
    {
      id: '6',
      name: 'Royal commission ',
      image: 'royal-commission.webp',
    },
    {
      id: '7',
      name: 'Sapac ',
      image: 'sapac.webp',
    },
    {
      id: '8',
      name: 'Alyamama ',
      image: 'alyamama.webp',
    },
    {
      id: '9',
      name: 'Zaid Alhussain ',
      image: 'zaid-alhussain.webp',
    },
  ];

  constructor() {
  }

  getGeoscapeClients() {
    return this.geoscapeClients
  }
}
