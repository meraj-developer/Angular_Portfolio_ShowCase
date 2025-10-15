import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectListComponent } from './features/project-list/project-list.component';
import { ProjectsComponent } from './features/projects/projects.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'header',component:HeaderComponent},
  {path:'hero',component:HeroComponent},
  {path:'about',component:AboutComponent},
  {path:'projectlist',component:ProjectListComponent},
  {path:'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
