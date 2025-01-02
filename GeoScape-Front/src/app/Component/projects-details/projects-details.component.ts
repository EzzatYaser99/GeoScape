import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {ListboxModule} from "primeng/listbox";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ImageModule} from "primeng/image";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {GeoscapeProjectsService} from "../../core/service/geoscape-projects.service";

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [
    GalleriaModule,
    ListboxModule,
    FormsModule,
    ImageModule,
    CardModule,
    ProgressSpinnerModule,
    RouterLink,
    Button
  ],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectsDetailsComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any;
  responsiveOptions: any[] | undefined;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private _geoscapeProjectsServices: GeoscapeProjectsService) {
    this.projects = this._geoscapeProjectsServices.getAllProjects();
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 2
      }
    ];
    this.getProjects();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }


  private getProjects() {
    this.selectedProject = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedProject = this._geoscapeProjectsServices.getProjectsById(Number(id));

  }
}
