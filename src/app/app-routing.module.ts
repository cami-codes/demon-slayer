import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { GyomeiComponent } from './modules/characters/components/gyomei/gyomei.component';
import { MitsuriComponent } from './modules/characters/components/mitsuri/mitsuri.component';
import { RengokuComponent } from './modules/characters/components/rengoku/rengoku.component';
import { SanemiComponent } from './modules/characters/components/sanemi/sanemi.component';
import { ShinobuComponent } from './modules/characters/components/shinobu/shinobu.component';
import { TokitoComponent } from './modules/characters/components/tokito/tokito.component';
import { TomiokaComponent } from './modules/characters/components/tomioka/tomioka.component';
import { UzuiComponent } from './modules/characters/components/uzui/uzui.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters/rengoku', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharactersComponent,
    children: [
      {
        path: 'rengoku',
        component: RengokuComponent,
        data: { animation: 'RengokuPage' },
      },
      {
        path: 'tokito',
        component: TokitoComponent,
        data: { animation: 'TokitoPage' },
      },
      {
        path: 'uzui',
        component: UzuiComponent,
        data: { animation: 'UzuiPage' },
      },
      {
        path: 'sanemi',
        component: SanemiComponent,
        data: { animation: 'SanemiPage' },
      },
      {
        path: 'mitsuri',
        component: MitsuriComponent,
        data: { animation: 'MitsuriPage' },
      },
      {
        path: 'shinobu',
        component: ShinobuComponent,
        data: { animation: 'ShinobuPage' },
      },
      {
        path: 'gyomei',
        component: GyomeiComponent,
        data: { animation: 'GyomeiPage' },
      },
      {
        path: 'tomioka',
        component: TomiokaComponent,
        data: { animation: 'TomiokaPage' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
