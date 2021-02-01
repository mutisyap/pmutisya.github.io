import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';

import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(
      {
        loader: HttpClient,
        markedOptions: {
          provide: MarkedOptions,
          useValue: {
            gfm: true,
            breaks: false,
            pedantic: false,
            smartLists: true,
            smartypants: false,
          }
        },
        sanitize: SecurityContext.NONE,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
