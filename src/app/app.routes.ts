import { Routes } from '@angular/router';
import{ HomeClass} from './home/home'
import { MonumentsClass } from './monuments/monuments';
import { HotelsClass } from './hotels/hotels';
import { ParadisClass } from './paradis/paradis';
import { New7Class } from './new7/new7';
import { Old7Class } from './old7/old7';
import { ChateauxClass } from './chateaux/chateaux';

export const routes: Routes = [
  { path: '', component: HomeClass },
  { path: 'monuments', component: MonumentsClass },
  { path: 'hotels', component: HotelsClass },
  { path: 'paradis', component: ParadisClass },
  { path: 'new7', component: New7Class },
  { path: 'old7', component: Old7Class },
  { path: 'chateaux', component: ChateauxClass },
  { path: '**', redirectTo: '' },
];
