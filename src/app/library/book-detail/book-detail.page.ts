import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  book: Book;
  constructor(private activatedRoute: ActivatedRoute,
              private libraryService: LibraryService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const bookId = paramMap.get('bookId');
      this.book = this.libraryService.getBook(bookId);
    });
  }

}
