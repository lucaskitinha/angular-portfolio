import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: '',
      alt:'',
      title:'',
      width:'',
      height:'',
      description:'',
      links: [
        {
          name: '',
          href: ''
        }
      ]
    }
  ]) 
}
