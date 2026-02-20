import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskCardsComponent } from './components/task-cards/task-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DeleteTaskDialogueComponent } from './components/delete-task-dialogue/delete-task-dialogue.component';
import { EditTaskDialogueComponent } from './components/edit-task-dialogue/edit-task-dialogue.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutDialogueComponent } from './components/about-dialogue/about-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskFormComponent,
    TaskCardsComponent,
    DeleteTaskDialogueComponent,
    EditTaskDialogueComponent,
    AboutDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatToolbarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
