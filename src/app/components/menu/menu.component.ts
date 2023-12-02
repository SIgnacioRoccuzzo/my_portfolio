import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuSections = [
    { label: 'Home', route: 'inicio' },
    { label: 'About me', route: 'sobremi' },
    { label: 'Skills', route: 'skills' },
    { label: 'Projects', route: 'proyectos' },
    { label: 'Education', route: 'educacion' },
    { label: 'Contact', route: 'contacto' }
  ];
  menuVisible: boolean = false;

  constructor(private router: Router) { }


  toggleWebMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });


      this.router.navigate([], { fragment: sectionId });
    }
  }
}


