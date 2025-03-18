import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Back-end pleno',
        p: 'Claro | Nov 2024 - Presente',
      },
      text: '<p>Atuação no marketplace</p>',
    }
  ])
}
