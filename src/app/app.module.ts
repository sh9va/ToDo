import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSnackBar } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { RestService } from './services/rest.service';
import { ToDoPipe } from './pipes/to-do.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToDoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [RestService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
