import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import projects from '../../../assets/projects.json';
import skills from '../../../assets/skills.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projectList:any = projects;
  public skillList:any = skills;

  constructor(private markdownService: MarkdownService) {
   }

  ngOnInit(): void {
  }

}
