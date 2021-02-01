import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import projects from '../../assets/projects.json';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public projectList: any = projects;
  public currentProject;

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log('queryParams : ', queryParams);

      if (queryParams.proj){
        projects.forEach(project => {
          if (project.id == queryParams.proj){
            this.currentProject = project;
          }
        });
      }

      console.log('currentProject : ', this.currentProject);
    })
  }

}
