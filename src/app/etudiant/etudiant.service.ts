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
}
