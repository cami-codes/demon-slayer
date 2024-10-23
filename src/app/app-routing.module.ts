import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { RengokuComponent } from './modules/characters/components/rengoku/rengoku.component';
import { TokitoComponent } from './modules/characters/components/tokito/tokito.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
