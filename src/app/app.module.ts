import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './components/skill/skill.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
    NavbarComponent,
    CategoryComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    TimeLineComponent,
    SkillComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
