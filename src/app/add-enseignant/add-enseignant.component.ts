import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { enseignant } from '../model/enseignant.model';
import { EnseignantsService } from '../services/enseignants.service';



@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent  implements OnInit {
  newEnseignant = new enseignant();
  constructor(
    private activatedRoute: ActivatedRoute,
    private enseignantService: EnseignantsService,private router: Router) {}
 

  ngOnInit(): void {
    
  }
  addEnseignant() {
    this.enseignantService.ajouterEnseignants(this.newEnseignant).subscribe((moto) => {
      console.log(moto);
      this.router.navigate(["enseignant"]);
    });
  }
}