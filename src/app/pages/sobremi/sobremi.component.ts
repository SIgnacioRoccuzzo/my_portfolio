import { Component } from '@angular/core';
import { faHeadphones, faPlane, faDumbbell, faFilm, faUtensils, faCamera, faTree, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faApple as faAppleBrands } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  phoneNumber = '(34) 663 83 93 53';
  email = 'sebarocu@hotmail.com';
  faDownload = faDownload


  interests = [
    { icon: faHeadphones, name: 'MUSIC' },
    { icon: faPlane, name: 'TRAVEL' },
    { icon: faAppleBrands, name: 'MAC OS' },
    { icon: faDumbbell, name: 'FITNESS' },
    { icon: faFilm, name: 'MOVIE' },
    { icon: faUtensils, name: 'FOOD' },
    { icon: faCamera, name: 'PHOTO' },
    { icon: faTree, name: 'NATURE' }
  ];

  cvDownloadLink = '../../../assets/pdf/CV Sebastian I Roccuzzo 2023.pdf';

}

