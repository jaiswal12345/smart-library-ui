import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from "src/app/shared/book.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from "@angular/forms";
@Component({
    selector: 'app-book',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit, OnDestroy {
    books;
    book: any = {};
    frm: FormGroup;
    obs;
    buttonName: String = "Add";
    save: any;
    filter= {};
    constructor(private bookService: BookService, private fb: FormBuilder) { }

    ngOnInit() {
        this.frm = this.fb.group({
            name: ["", [Validators.required]],
            author: ["", [Validators.required]],
            desc: ["", [Validators.required]],
            count: ["", [Validators.required]],
            _id: [''],
            bookname: [],
            authorname: [],
            countavailable: []
        });
        this.get();
    }

    get() {
        this.obs = this.bookService.get(this.filter)
            .subscribe(
            response => {
                this.books = response["book"];
                this.frm.reset();
            },
            (err) => console.log(err)
            );    
    }

    onFilter() {
        this.filter = {
            name : this.frm.value.bookname,
            author:this.frm.value.authorname,
            count:this.frm.value.countavailable
        };
         this.bookService.get(this.filter)
        .subscribe(
            (res) => {
                console.log(res);
                this.books = res["book"];
                 this.filter = {};
            },
            (err) => console.log(err)
        );
    }
     onReset() {
       this.get();
    }


onSave() {
    if (this.frm.valid) {
        if (this.frm.value._id) {
            this.save = this.bookService.put(this.frm.value._id, this.frm.value);
        } else {
            delete this.frm.value._id;
            this.save = this.bookService.post(this.frm.value);
        }
        this.save.subscribe(
            (res) => {
                console.log(res);
                this.filter = {};
                this.get();
            },
            (err) => console.log(err)
        );
    } else {
        console.log("invalid data");
    }
}

onNotify() {
    console.log("notified from child");
    this.get();
}
onUpdateNotify(data) {
    this.buttonName = "Update";
    console.log(data);
    this.frm.setValue({
        name: data.name,
        author: data.author,
        desc: data.desc,
        count: data.count,
        _id: data._id,
        bookname:'',
        authorname:'',
        countavailable:''
    });
}
ngOnDestroy() {
    this.obs.unsubscribe();
}
}
