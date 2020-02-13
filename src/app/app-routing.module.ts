import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'hopital', loadChildren: './pages/hopital/hopital.module#HopitalPageModule' },
  { path: 'pharmacie', loadChildren: './pages/pharmacie/pharmacie.module#PharmaciePageModule' },
  { path: 'detail-medecin', loadChildren: './pages/detail-medecin/detail-medecin.module#DetailMedecinPageModule' },
  { path: 'detail-hopital', loadChildren: './pages/detail-hopital/detail-hopital.module#DetailHopitalPageModule' },
  { path: 'detail-pharmacie', loadChildren: './pages/detail-pharmacie/detail-pharmacie.module#DetailPharmaciePageModule' },
  { path: 'ambulance', loadChildren: './pages/ambulance/ambulance.module#AmbulancePageModule' },
  { path: 'banquedesang', loadChildren: './pages/banquedesang/banquedesang.module#BanquedesangPageModule' },
  { path: 'tchat', loadChildren: './pages/mi/tchat/tchat.module#TchatPageModule' },
  { path: 'apropos', loadChildren: './pages/apropos/apropos.module#AproposPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
