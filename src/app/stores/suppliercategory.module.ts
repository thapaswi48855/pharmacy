import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliercategoryComponent } from './suppliercategory.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:SuppliercategoryComponent}
]

@NgModule({
  declarations: [
    SuppliercategoryComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SuppliercategoryModule { }
