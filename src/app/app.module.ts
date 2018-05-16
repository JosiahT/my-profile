import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CaptureComponent } from './capture/capture.component';
import { HomeComponent } from './home/home.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PaintingComponent } from './painting/painting.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CaptureComponent,
    HomeComponent,
    MenuNavComponent,
    SideNavComponent,
    PaintingComponent,
    ProjectsComponent,
    MusicComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'capture', component: CaptureComponent },
      { path: 'paintings', component: PaintingComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'music', component: MusicComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
