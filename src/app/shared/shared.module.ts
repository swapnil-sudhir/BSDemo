import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, TabHeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    TabHeaderComponent
  ]
})
export class SharedModule { }
