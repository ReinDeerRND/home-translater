import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextsComponent } from './components/texts/texts.component';
import { LoadComponent } from './components/load/load.component';
import { DictComponent } from './components/dict/dict.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './services/db.service';
import { CommonModule } from '@angular/common';
import { SearchWordPipe } from './search-word.pipe';
import { ModalNewWordComponent } from './components/modal-new-word/modal-new-word.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalEditWordComponent } from './components/modal-edit-word/modal-edit-word.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TextsComponent,
    LoadComponent,
    DictComponent,
    SearchWordPipe,
    ModalNewWordComponent,
    ModalEditWordComponent,
    ModalInfoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
