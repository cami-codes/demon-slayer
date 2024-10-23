import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { RengokuComponent } from './modules/characters/components/rengoku/rengoku.component';
import { TokitoComponent } from './modules/characters/components/tokito/tokito.component';
import { UzuiComponent } from './modules/characters/components/uzui/uzui.component';
import { CharacterSelectComponent } from './modules/profiles/character-select/character-select.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CharacterSelectComponent,
    RengokuComponent,
    TokitoComponent,
    UzuiComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
