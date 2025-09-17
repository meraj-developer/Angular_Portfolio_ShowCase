import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'header',component:HeaderComponent},
  {path:'hero',component:HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
