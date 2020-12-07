import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@cpas-production-angular/core-data';
import { CoreStateModule } from '@cpas-production-angular/core-state';
import { MaterialModule } from '@cpas-production-angular/material';
import { RoutingModule } from './routing.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SubmissionsListComponent } from './submissions/submissions-list/submissions-list.component';
import { SubmissionsDetailsComponent } from './submissions/submissions-details/submissions-details.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionsComponent,
    SubmissionsListComponent,
    SubmissionsDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
