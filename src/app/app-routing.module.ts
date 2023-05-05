import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
const routes: Routes = [
  {path: "classes", component : ClassesComponent},
  {path: "add-classe", component : AddClasseComponent},
  {path: "updateClasse/:id", component: UpdateClasseComponent},
  {path: "enseignant", component : EnseignantComponent},
  {path: "add-enseignant", component : AddEnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
