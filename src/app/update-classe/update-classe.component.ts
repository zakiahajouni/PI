import { Component, OnInit } from '@angular/core';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
  currentClasse = new classe();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private classeService: ClasseService
  ) {}

  ngOnInit(): void {
   
    this.classeService
      .consulterClasse(this.activatedRoute.snapshot.params["id"])
      .subscribe((moto) => {
        this.currentClasse = moto;
      });
  }

  updateClasse() {
    this.classeService.updateClasse(this.currentClasse).subscribe((moto) => {
      this.router.navigate(["classe"]);
    });
  }
}