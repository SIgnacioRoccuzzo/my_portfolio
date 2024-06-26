import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Proyecto } from 'src/app/interfaces/interfaces.proyectos';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']

})
export class ProyectosComponent {
  icon = faGithub
  proyectos: Proyecto[] = [
    {
      nombre: 'Épica Network',
      imagen: '../../../assets/images/Captura de pantalla 2024-05-27 a las 23.31.32.png',
      descripcion: 'Developed an intuitive and modern website for a new entrant in the Mobile Telephony, Fiber Optics, and TV market, optimizing user experience and highlighting their innovative market proposition.',
      url: 'http://epicanetwork.es',
      icon: 'faGithub',

    },
    {
      nombre: 'Crm Employees',
      imagen: '../../../assets/images/timeHub.png',
      descripcion: 'TimeHub is a robust application that streamlines time management for work hours in a company, offering essential tools for both administrators and employees.     User: seba@timeHub.com Password: timeHub2023',
      url: 'https://timehub-crm.web.app/login',
      icon: 'faGithub'

    },
    {
      nombre: 'Burger restaurant',
      imagen: '../../../assets/images/hamburgueseria.png',
      descripcion: 'A burger joint website featuring an enticing menu and an intuitive user experience.',
      url: 'https://hamburgueseria-rover.web.app',
      icon: 'faGithub'
    },
    {
      nombre: 'To-DO List',
      imagen: '../../../assets/images/todoNuevoo.png',
      descripcion: 'An app that helps you jot down daily tasks with various categories based on the urgency chosen by the user: daily, monthly, or urgent.',
      url: 'https://to-do-340f2.web.app',
      icon: 'faGithub'

    },
    {
      nombre: 'Blog-Fashion',
      imagen: '../../../assets/images/blog.png',
      descripcion: 'A blog with a highly attractive interface, where you can create and delete posts at any time.',
      url: 'https://blogmoda-8f168.web.app/posts',
      icon: 'faGithub'

    },
    {
      nombre: 'Trivial',
      imagen: '../../../assets/images/trivial.png',
      descripcion: 'A classic trivia game in a small demo where random questions appear, and points for correct answers accumulate on a scoreboard.',
      url: 'https://trivial-8a678.web.app',
      icon: 'faGithub'

    },

  ];



}
