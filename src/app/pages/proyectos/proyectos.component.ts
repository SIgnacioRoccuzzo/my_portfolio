import { Component } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/interfaces.proyectos';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']

})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      nombre: 'Crm Employees',
      imagen: '../../../assets/images/timeHub.png',
      descripcion: 'TimeHub is a robust application that streamlines time management for work hours in a company, offering essential tools for both administrators and employees.     User: seba@timeHub.com Password: timeHub2023',
      url: 'https://timehub-crm.web.app/login',

    },
    {
      nombre: 'Burger restaurant',
      imagen: '../../../assets/images/hamburgueseria.png',
      descripcion: 'A burger joint website featuring an enticing menu and an intuitive user experience.',
      url: 'https://hamburgueseria-rover.web.app',
    },
    {
      nombre: 'Personal Portfolio',
      imagen: '../../../assets/images/portfolio.png',
      descripcion: 'My personal website: Where I share my creativity and my work.',
      url: 'https://sebastian-roccuzzo.web.app',

    },
    {
      nombre: 'To-DO List',
      imagen: '../../../assets/images/to-do.png',
      descripcion: 'An app that helps you jot down daily tasks with various categories based on the urgency chosen by the user: daily, monthly, or urgent.',
      url: 'https://to-do-340f2.web.app',

    },
    {
      nombre: 'Blog-Fashion',
      imagen: '../../../assets/images/blog.png',
      descripcion: 'A blog with a highly attractive interface, where you can create and delete posts at any time.',
      url: 'https://blogmoda-8f168.web.app/posts',

    },

  ];



}
