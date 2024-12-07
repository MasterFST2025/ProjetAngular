import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Etudiant } from './etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  backEndURL="http://localhost:8080/ecole/etudiants"
  etudiants=signal<Etudiant[]>([])
  constructor(private http:HttpClient) {
    this.getAllEtudiants()
   }

  getAllEtudiants():void{
    this.http.get<Etudiant[]>(this.backEndURL).subscribe(data=>{
      this.etudiants.set(data)
    })
  }
  addEtudiant(etudiant:any,photo:File){
    //this.etudiants.push(etudiant)
    const formData=new FormData()
    formData.append('id',etudiant.get('id')?.value)
    formData.append('nom',etudiant.get('nom')?.value)
    formData.append('age',etudiant.get('age')?.value)
    formData.append('photo',photo)
    this.http.post<Etudiant>(this.backEndURL,formData).subscribe(newEtudiant=>{
      this.etudiants.update(state=>[...state,newEtudiant])
    })
  }
  deleteEtudiant(id:number){
    //const index=this.etudiants.findIndex(etudiant=>(etudiant.id==id))
    //this.etudiants.splice(index,1)
    this.http.delete<boolean>(this.backEndURL+"/"+id).subscribe(retour=>{
      if (retour){
        this.etudiants.update(state=>state.filter(e=>(e.id!=id)))
      }
    })
  }

  updateEtudiant(etudiant: any) {
    //const index=this.etudiants.findIndex(currentEtudiant=>(currentEtudiant.id==etudiant.id))
    //this.etudiants[index]=etudiant
    this.http.put<Etudiant>(this.backEndURL,etudiant).subscribe(updatedEtudiant=>{
      this.etudiants.update(state=>state.map(e=>(e.id===etudiant.id)?updatedEtudiant:e))
    })
  }
}
