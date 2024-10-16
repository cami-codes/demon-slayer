import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { ProfileIconsComponent } from './shared/components/profile-icons/profile-icons.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CharactersComponent, ProfileIconsComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
