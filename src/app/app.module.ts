import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { DataService } from './services/data-db.service';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { WorksComponent } from './components/works/works.component';
import { Work1Component } from './pages/work1/work1.component';


import { HomeComponent } from './pages/home/home.component';

// rutas
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    TeamSectionComponent,
    ServicesSectionComponent,
    WorksComponent,
    Work1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
