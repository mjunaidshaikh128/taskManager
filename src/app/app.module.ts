import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
