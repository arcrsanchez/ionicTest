import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  books: Book[] = [
    {
      id : 'b1',
      title : 'El clan del oso cavernario',
      subtitle : 'Los hijos de la Tierra',
      author : 'Jean Marie Auell',
      summary : 'Summary',
      image : '../../assets/img/cavernario.jpeg'
    },
    {
      id : 'b1',
      title : 'El valle de los caballos',
      subtitle : 'Los hijos de la Tierra',
      author : 'Jean Marie Auell',
      summary : 'Summary',
      image : '../../assets/img/valle.jpeg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
