import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../cors/project.service';
import { IProject } from '../../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {

  projects: IProject[] = []

  constructor(private projectServiceData: ProjectService, private _router: Router) {

  }

  ngOnInit() {
    this.projects = this.projectServiceData.getProject()
  }

  showData() {
    this._router.navigate(['/projects'])
  }

}
