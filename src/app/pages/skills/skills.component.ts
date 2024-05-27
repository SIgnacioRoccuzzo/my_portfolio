
import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsElement', { static: false }) skillsElement: ElementRef | undefined;


  technicalSkills: any[] = [
    { name: 'Javascript', imageSrc: '../../../assets/images/js.png' },
    { name: 'HTML', imageSrc: '../../../assets/images/html.png' },
    { name: 'CSS', imageSrc: '../../../assets/images/css.jpeg' },
    { name: 'Angular', imageSrc: '../../../assets/images/angular-icon-logo.png' },
    { name: 'React', imageSrc: '../../../assets/images/React.png' },
    { name: 'NodeJs', imageSrc: '../../../assets/images/nodeJs.png' },
    { name: 'TypeScript', imageSrc: '../../../assets/images/type.png' },
    { name: 'MongoDb', imageSrc: '../../../assets/images/mongoDb.png' },
    { name: 'MySQL', imageSrc: '../../../assets/images/mysql-logo-png-transparent.png' },

  ];
  professionalSkills: any[] = [
    { name: 'Comunication', emojis: '🗣️' },
    { name: 'Teamwork', emojis: '👥' },
    { name: 'Creativity', emojis: '🎨✨' },
    { name: 'Flexibility', emojis: '🔄' },
    { name: 'Emotional Intelligence', emojis: '❤️🧠' },
    { name: 'Constant learning', emojis: ' 🧑‍💻' },
    { name: 'Problem-Solving Skills', emojis: '💡' },
    { name: 'Decision-making', emojis: '👍👎' },
    { name: 'Attention to Detail', emojis: '👁️🔍' },

  ];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.addScrollListener();
  }

  addScrollListener() {
    window.addEventListener('scroll', () => {
      this.efectoHabilidades();
    });
  }

  efectoHabilidades() {
    const skillsElement = this.skillsElement?.nativeElement;

    if (skillsElement) {
      const distancia_skills = window.innerHeight - skillsElement.getBoundingClientRect().top;

      if (distancia_skills >= 300) {
        const habilidades = skillsElement.querySelectorAll('.skill .progreso');
        const habilidadesNombres = ["javascript", "htmlcss", "angular", "nodejs", "mongodb", "mysql", "comunicacion", "trabajo", "creatividad", "aprendizaje", "mentalidad", "decisiones"];

        habilidades.forEach((habilidad: HTMLElement, index: number) => {

          this.renderer.addClass(habilidad, habilidadesNombres[index]);


          const span = habilidad.querySelector('span');
          if (span) {
            span.style.right = '0';
          }
        });
      }
    }
  }


}
