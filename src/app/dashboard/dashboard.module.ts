import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import { adfadf } from '@ngx-translate/'


@NgModule({
  declarations: [CampaignManagerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatTabsModule
  ],
  exports:[
    CampaignManagerComponent
  ]
})


export class DashboardModule { }
