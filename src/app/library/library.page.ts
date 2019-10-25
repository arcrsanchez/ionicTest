import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  books: Book[];
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.books = this.libraryService.getAllBooks();
  }

}
