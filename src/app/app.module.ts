import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { FormsModule } from '@angular/forms';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { HttpClientModule } from '@angular/common/http';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    AddClasseComponent,
    UpdateClasseComponent,
    EnseignantComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
