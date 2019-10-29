import { AttributeServiceService } from './services/attribute-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './dashboard-layout/components/components.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    UserServiceService,
    AttributeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
