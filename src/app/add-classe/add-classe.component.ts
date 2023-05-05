import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {
  newClasse = new classe();
  constructor(private classeService: ClasseService,private router:Router) {}
  ngOnInit(): void {
  
  }

  addClasse(){
    this.classeService.ajouterClasse(this.newClasse)
    .subscribe(clas => {
    console.log(clas);
    this.router.navigate(['classes']);
    });
    }




}
