import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'model',
    loadChildren: () => import('./modules/model/model.module').then((m) => m.ModelModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
