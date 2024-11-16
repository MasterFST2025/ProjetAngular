import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  etudiants:any
  constructor(private etudiantService:EtudiantService,private modal:NgbModal){}
  ngOnInit() {
    this.etudiants=this.etudiantService.getAllEtudiants()
  }
  openModal(){
    this.modal.open(FormComponent)
  }
}
