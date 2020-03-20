import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { VulgarisationComponent } from './vulgarisation/vulgarisation.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    VulgarisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZXJpYy1hbXBpcmUiLCJhIjoiY2p1eW16bWpoMDA3ZzQ1bzB0ZnFzamYzcSJ9.j6QywD1WVdqhIeir_2kPRg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
