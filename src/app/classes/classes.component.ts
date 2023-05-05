import { Component, OnInit } from '@angular/core';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes!:classe[];
  classe!:classe;
  idClasse!:number;

  constructor(private classeService: ClasseService) {
   }    
   ngOnInit(): void {
    this.classeService.listeClasse().subscribe(clas => {
    console.log(clas);
    this.classes = clas;
    });
    }
    chargerClasse(){
      this.classeService.listeClasse().subscribe(clas => {
      console.log(clas);
      this.classes = clas;
      });
      }
      
    
    supprimerClasse(c: classe)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.classeService.supprimerClasse(c.idClasse!).subscribe(() => {
console.log("classe supprimé");
this.chargerClasse();
});

}}
