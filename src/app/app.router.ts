import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{AppComponent} from './app.component';
import{AwardsComponent} from './awards/awards.component';
import{DeathComponent} from './death/death.component';
import{EducationComponent} from './education/education.component';
import{FamousComponent} from './famous/famous.component';
import{PostpresidencyComponent} from './postpresidency/postpresidency.component';

import{ScientistComponent} from './scientist/scientist.component';

import{WritingsComponent} from './writings/writings.component';
import {PresidencyComponent} from './presidency/presidency.component';

 export const router : Routes = [
     {
         path:'', redirectTo: 'famous', pathMatch:'full'
     },
     {
        path:'awards', component:AwardsComponent
    },

    {
        path:'death', component:DeathComponent
    },
    {
        path:'edu', component:EducationComponent
    },
    {
        path:'famous', component:FamousComponent
    },
    {
        path:'post', component:PostpresidencyComponent
    },
   
    {
        path:'scientist', component:ScientistComponent
    },
    
    {
        path:'writings', component:WritingsComponent
    },
    {
        path:'prs', component:PresidencyComponent
    }
 ];

 export const routes:ModuleWithProviders=RouterModule.forRoot(router);