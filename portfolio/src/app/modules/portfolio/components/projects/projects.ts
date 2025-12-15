import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  public arrayProjects = signal([
    {
      src: 'assets/perfil.png',
      alt: 'projeto X',
      title: 'Pensador',
      width: '100px',
      height: '100px',
      description: 'descrição',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://linkdoprojeto.com',
        }
      ]

    }
  ])
}
