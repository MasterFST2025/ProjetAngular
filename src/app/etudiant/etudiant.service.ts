import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  backEndURL="http://localhost:8080/ecole/etudiants"
  etudiants:any=[]
  constructor(private http:HttpClient) { }

  getAllEtudiants():any{
    //return this.etudiants
    this.http.get(this.backEndURL).subscribe(data=>{
      this.etudiants=data
    })
    return this.etudiants
  }
  addEtudiant(etudiant:any){
    //this.etudiants.push(etudiant)
    this.http.post(this.backEndURL,etudiant).subscribe()
  }
  deleteEtudiant(id:number){
    //const index=this.etudiants.findIndex(etudiant=>(etudiant.id==id))
    //this.etudiants.splice(index,1)
  }

  updateEtudiant(etudiant: any) {
    //const index=this.etudiants.findIndex(currentEtudiant=>(currentEtudiant.id==etudiant.id))
    //this.etudiants[index]=etudiant
  }
}
