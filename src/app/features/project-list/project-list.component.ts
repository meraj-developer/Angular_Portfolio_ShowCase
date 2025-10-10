import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../cors/project.service';
import { IProject } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {

  projects:IProject[] = []

  constructor(private projectServiceData:ProjectService)
  {

  }

  ngOnInit()
  {
    this.projects = this.projectServiceData.getProject()
  }

  showData()
  {
    
  }

}
