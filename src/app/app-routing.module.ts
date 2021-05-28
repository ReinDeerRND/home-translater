import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DictComponent } from './components/dict/dict.component';
import { LoadComponent } from './components/load/load.component';
import { TextsComponent } from './components/texts/texts.component';

const routes: Routes = [
  {
    path:'', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
