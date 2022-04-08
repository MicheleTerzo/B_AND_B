import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PlaceHistoryComponent } from './components/history/place-history.component';
import { PlaceDescriptionComponent } from './components/place-description/place-description.component';
import { LocationComponent } from './components/location/location.component';
import { ContactsComponent } from './components/contacts/contacts-component/contacts.component';
import { ContactsFormComponent } from './components/contacts/contacts-form/contacts-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageSliderComponent,
    JumbotronComponent,
    PlaceHistoryComponent,
    PlaceDescriptionComponent,
    LocationComponent,
    ContactsComponent,
    ContactsFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
