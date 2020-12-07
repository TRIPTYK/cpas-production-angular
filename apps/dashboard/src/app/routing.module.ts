import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
