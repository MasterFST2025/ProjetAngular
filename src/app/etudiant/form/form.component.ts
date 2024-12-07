import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  formEtudiant=this.fb.group({
    id:['',Validators.required],
    nom:['',Validators.required],
    age:['',Validators.required]
  })
  photo!:File
  etudiantData:any
  action:string="Ajouter"
  constructor(private fb:FormBuilder,private etudiantService:EtudiantService,public activeModal:NgbActiveModal){}
  actionEtudiant(){
    if (this.action=="Ajouter"){
      this.addEtudiant()
    }
    else{
      this.updateEtudiant(this.formEtudiant.value)
    }
    this.activeModal.close()
  }
  addEtudiant(){
    this.etudiantService.addEtudiant(this.formEtudiant,this.photo)

  }
  updateEtudiant(etudiant:any){
    this.etudiantService.updateEtudiant(etudiant)
  }
  closeModal() {
    this.activeModal.close()
    }
    ngOnInit() {
      if (this.action=="Modifier")
      this.formEtudiant.setValue(this.etudiantData)
    }

    fileSelected(event:any){
      const file=event.target.files[0]
      if (file)this.photo=file
    }
}
