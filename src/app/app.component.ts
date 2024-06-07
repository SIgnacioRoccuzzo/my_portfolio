import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sebastian Roccuzzo';
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  isSectionVisible: any;
  constructor(private router: Router) { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
