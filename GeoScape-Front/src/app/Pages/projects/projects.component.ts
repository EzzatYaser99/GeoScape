import {Component} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {Router} from "@angular/router";
import {TabViewModule} from "primeng/tabview";
import {GeoscapeProjectsService} from "../../core/service/geoscape-projects.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    ButtonDirective,
    CardModule,
    TabViewModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  neomProjects: any;
  riyadhProjects: any;

  constructor(private _router: Router,
              private _geoscapeProjectsServices: GeoscapeProjectsService) {
    this.neomProjects = this._geoscapeProjectsServices.getNeomProjects();
    this.riyadhProjects = this._geoscapeProjectsServices.getRiyadhProjects();
  }


  navigateToProjectDetails(project: any) {
    this._router.navigate(['main/projects/' + project.id]);

  }
}
