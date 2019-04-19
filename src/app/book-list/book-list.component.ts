import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";
import { BookService } from "src/app/shared/book.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html'
   
    
})
export class BookListComponent {
    @Input()
    book: any;
    @Output()
    notify: EventEmitter<any>;
    @Output()
    updateNotify: EventEmitter<any>;

    constructor(private bookService: BookService) {
        this.notify = new EventEmitter<any>();
        this.updateNotify = new EventEmitter<any>();
    }

    onDelete(id) {
        this.bookService.delete(id)
            .subscribe(
            response => this.notify.emit(),
            err => console.log(err)
            );
    }

    onUpdate(data) {
        this.updateNotify.emit(data);
    }


}
