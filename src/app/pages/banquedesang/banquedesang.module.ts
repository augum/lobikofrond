import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BanquedesangPage } from './banquedesang.page';

const routes: Routes = [
  {
    path: '',
    component: BanquedesangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BanquedesangPage]
})
export class BanquedesangPageModule {}
