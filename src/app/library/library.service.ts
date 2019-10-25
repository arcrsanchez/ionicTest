import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books: Book[] = [
    {
      id: 'b1',
      title: 'El clan del oso cavernario',
      subtitle: 'Los hijos de la Tierra',
      author: 'Jean Marie Auell',
      summary: 'Summary',
      image: '../../assets/img/cavernario.jpeg'
    },
    {
      id: 'b1',
      title: 'El valle de los caballos',
      subtitle: 'Los hijos de la Tierra',
      author: 'Jean Marie Auell',
      summary: 'Summary',
      image: '../../assets/img/valle.jpeg'
    },
  ];
  constructor() { }

  public getAllBooks() {
    return [...this.books];
  }

  public getBook(bookId: string) {
    return {
      ...this.books.find(book => {
        return book.id === bookId;
      })
    };
  }
}
