import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {
    public arrayExperiences = signal([
      {
        summer: {
          strong:'Estágiario em Desenvolvimento',
          p:'SENAI ',
        },
        text: 'Desenvolvimento de aplicações web',
      }
    ])
}
