import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@cpas/core-data';
import { CoreStateModule } from '@cpas/core-state';
import { MaterialModule } from '@cpas/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { SubmissionsDetailsComponent } from './submissions/submissions-details/submissions-details.component';
import { SubmissionsListComponent } from './submissions/submissions-list/submissions-list.component';
import { SubmissionsComponent } from './submissions/submissions.component';

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
    CommonModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
