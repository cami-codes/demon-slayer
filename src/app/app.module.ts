import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { GyomeiComponent } from './modules/characters/components/gyomei/gyomei.component';
import { MitsuriComponent } from './modules/characters/components/mitsuri/mitsuri.component';
import { ObanaiComponent } from './modules/characters/components/obanai/obanai.component';
import { RengokuComponent } from './modules/characters/components/rengoku/rengoku.component';
import { SanemiComponent } from './modules/characters/components/sanemi/sanemi.component';
import { ShinobuComponent } from './modules/characters/components/shinobu/shinobu.component';
import { TokitoComponent } from './modules/characters/components/tokito/tokito.component';
import { TomiokaComponent } from './modules/characters/components/tomioka/tomioka.component';
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
    SanemiComponent,
    MitsuriComponent,
    ShinobuComponent,
    GyomeiComponent,
    TomiokaComponent,
    ObanaiComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
