import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissionDetailsComponent } from './components/missiondetails/missiondetails.component'; // Fixed capitalization

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
  { path: '**', redirectTo: '' }
];