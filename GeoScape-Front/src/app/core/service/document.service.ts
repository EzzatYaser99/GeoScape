import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents: any[] = [
    {
      id: 1,
      name: 'GEOSCAPE Profile',
      pdfSrc: 'GEOSCAPE-Profile.pdf',
      imgSrc: 'GEOSCAPE-Profile.webp',
      alt: 'GEOSCAPE Profile document',
    },
    {
      id: 2,
      name: 'ISO certification',
      pdfSrc: 'شهادة-الأيزو.pdf',
      imgSrc: 'شهادة-الأيزو.webp',
      alt: 'ISO certification document',
    },
    {
      id: 3,
      name: 'The Line',
      pdfSrc: 'ذا-لاين.pdf',
      imgSrc: 'ذا-لاين.webp',
      alt: 'The Line document',
    },
    {
      id: 4,
      name: 'Sports Boulevard Foundation',
      pdfSrc: 'مؤسسة-المسار-الرياضي.pdf',
      imgSrc: 'مؤسسة-المسار-الرياضي.webp',
      alt: 'Sports Boulevard Foundation document',
    },
    {
      id: 5,
      name: 'Royal Commission for AlUla',
      pdfSrc: 'Royal-Commission-for-AlUla.pdf',
      imgSrc: 'Royal-Commission-for-AlUla.webp',
      alt: 'Royal Commission for AlUla document',
    },
    {
      id: 6,
      name: 'misk city',
      pdfSrc: 'misk-city.pdf',
      imgSrc: 'misk-city.webp',
      alt: 'misk city document',
    },
    {
      id: 7,
      name: 'WA0025',
      pdfSrc: 'WA0025.pdf',
      imgSrc: 'WA0025.webp',
      alt: 'WA0025 document',
    },
    {
      id: 8,
      name: 'MAT-000057_02',
      pdfSrc: 'MAT-000057.pdf',
      imgSrc: 'MAT-000057.webp',
      alt: 'MAT-000057_02 document',
    },
    {
      id: 9,
      name: 'GR-AUP-PQD-LAN-PLA',
      pdfSrc: 'GR-AUP-PQD-LAN-PLA.pdf',
      imgSrc: 'GR-AUP-PQD-LAN-PLA.webp',
      alt: 'GR-AUP-PQD-LAN-PLA document',
    },
    {
      id: 10,
      name: 'GR-AUP-MAT-LAN',
      pdfSrc: 'GR-AUP-MAT-LAN.pdf',
      imgSrc: 'GR-AUP-MAT-LAN.webp',
      alt: 'GR-AUP-MAT-LAN document',
    },
  ];

  getDocuments() {
    return this.documents;
  }

  getDocumentById(id: number) {
    return this.documents.find((document) => document.id === id);
  }
}
