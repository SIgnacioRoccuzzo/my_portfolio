import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuSections = [
    { label: 'Home', route: 'inicio' },
    { label: 'About me', route: 'sobremi' },
    { label: 'Skills', route: 'skills' },
    { label: 'Projects', route: 'proyectos' },
    { label: 'Education', route: 'educacion' },
    { label: 'Contact', route: 'contacto' }
  ];
  menuVisible: boolean = false;
  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlFragment = event.urlAfterRedirects.split('#')[1];
        const urlPath = event.urlAfterRedirects.split('/')[1];
        this.activeRoute = urlFragment || urlPath || 'inicio';
      }
    });
  }

  ngOnInit(): void {
    const urlFragment = this.router.url.split('#')[1];
    const urlPath = this.router.url.split('/')[1];
    this.activeRoute = urlFragment || urlPath || 'inicio';
  }

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

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
