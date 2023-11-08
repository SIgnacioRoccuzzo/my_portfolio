import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import Typed from 'typed.js';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  @ViewChild('maquina', { static: true }) maquina!: ElementRef;

  private instanciaTyped: Typed | null = null;


  ngOnInit() {
    this.instanciaTyped = new Typed(this.maquina.nativeElement, {
      strings: ['Sebastian Roccuzzo', 'FullStack Developer.'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    });
  }

  ngOnDestroy() {
    if (this.instanciaTyped) {
      this.instanciaTyped.destroy();
    }
  }
}

