import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{routes} from './app.router';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ScientistComponent } from './scientist/scientist.component';

import { PresidencyComponent } from './presidency/presidency.component';
import { PostpresidencyComponent } from './postpresidency/postpresidency.component';

import { AwardsComponent } from './awards/awards.component';
import { WritingsComponent } from './writings/writings.component';
import { DeathComponent } from './death/death.component';
import { FamousComponent } from './famous/famous.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ScientistComponent,
   
    PresidencyComponent,
    PostpresidencyComponent,
    
    AwardsComponent,
    WritingsComponent,
    DeathComponent,
    FamousComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
