import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';

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
    console.log(this.etudiantService.getAllEtudiants())
    this.etudiants=this.etudiantService.getAllEtudiants()
  }
  openModal(){
    this.modal.open(FormComponent)
  }

  deleteEtudiant(id:number){
    this.etudiantService.deleteEtudiant(id)
  }
  updateEtudiant(etudiant:any){
    const ref=this.modal.open(FormComponent)
    ref.componentInstance.etudiantData=etudiant
    ref.componentInstance.action="Modifier"
  }

  openDeleteModal(etudiant:any){
    const ref= this.modal.open(DeletemodalComponent)
    ref.componentInstance.etudiantData=etudiant
    ref.result.then(result=>{
      if (result=='oui'){
        this.deleteEtudiant(etudiant.id)
      }
    })
  }
}
