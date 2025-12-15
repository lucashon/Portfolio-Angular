import { Component, signal } from '@angular/core';

// interface
import { IKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.css',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/perfil.png',
      alt: 'icon',
    },
        {
      src: 'assets/perfil.png',
      alt: 'icon',
    },
        {
      src: 'assets/perfil.png',
      alt: 'icon',
    }
  ])
}
