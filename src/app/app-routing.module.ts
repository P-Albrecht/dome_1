import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviromentComponent } from "./enviroment/enviroment.component";
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { HeroSearchComponent } from 'src/app/hero-search/hero-search.component';

const routes: Routes = [
    { path: 'HeroDetailComponent'
      + '/:id'
      , component: EnviromentComponent },
    { path: 'HeroSearchComponent'
      , component: EnviromentComponent },
    { path: 'enviroment', component: EnviromentComponent },
    { path: '', redirectTo: '/enviroment', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
