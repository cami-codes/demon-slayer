import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { RouterModule } from '@angular/router';
import { RengokuComponent } from './modules/characters/components/rengoku/rengoku.component';
import { CharacterSelectComponent } from './modules/profiles/character-select/character-select.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RengokuComponent,
    CharacterSelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
