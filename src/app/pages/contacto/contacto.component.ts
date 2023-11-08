import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faEnvelope, faMobileScreen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  router = inject(Router)


  faEnvelope = faEnvelope;
  faMobileScreen = faMobileScreen;
  faPaperPlane = faPaperPlane;



  onSubmitForm() {
    this.router.navigate(['inicio']);
  }
}
