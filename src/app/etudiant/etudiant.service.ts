import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiants=[
    {id:1,nom:"Mohammed",age:23},
    {id:2,nom:"Hamza",age:23},
    {id:3,nom:"Omar",age:23},
  ]
  constructor() { }

  getAllEtudiants():any{
    return this.etudiants
  }
  addEtudiant(etudiant:any){
    this.etudiants.push(etudiant)
  }
  deleteEtudiant(id:number){
    const index=this.etudiants.findIndex(etudiant=>(etudiant.id==id))
    this.etudiants.splice(index,1)
  }

  updateEtudiant(etudiant: any) {
    const index=this.etudiants.findIndex(currentEtudiant=>(currentEtudiant.id==etudiant.id))
    this.etudiants[index]=etudiant
  }
}
