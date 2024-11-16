import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, Router } from '@angular/router';
import { EtudiantComponent } from "./etudiant/etudiant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetMaster';

}
