import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/layouts/home/home.component'
import { BlogComponent } from '../app/blog/blog.component'
import { SkillComponent } from '../app/skill/skill.component'
import { ProjectComponent } from '../app/project/project.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blogs',
    component: BlogComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
