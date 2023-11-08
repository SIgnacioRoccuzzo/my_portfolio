import { Component, inject } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJs, faHtml5, faCss3, faNodeJs, faGithub, faAngular, faLinux, faGoogle, faReact } from '@fortawesome/free-brands-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  studies = [
    {
      title: 'Full Stack Developer',
      school: 'IDBootcamps',
      year: 2023,
      languages: [
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3 },
        { name: 'JavaScript', icon: faJs },
        { name: 'Angular.js', icon: faAngular },
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Github', icon: faGithub }


      ],
      icon: faCode
    },
    {
      title: 'Google IT Automation with Python',
      school: 'Google',
      year: 2023,
      languages: [
        { name: 'Python', icon: faPython },
        { name: 'Linux', icon: faLinux },
        { name: 'Github', icon: faGithub }
      ],
      icon: faGoogle

    }

  ];

  prepareLanguages(languages: any) {
    if (Array.isArray(languages)) {
      return languages;
    } else {
      return [];
    }
  }
}
