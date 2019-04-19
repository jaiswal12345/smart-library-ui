import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class BookService {
    constructor(private httpClient: HttpClient) {
    }
    get() {
        return this.httpClient.get("https://smartlibraraynode.herokuapp.com/api/books");
    }
    post(data: any) {
        return this.httpClient.post("https://smartlibraraynode.herokuapp.com/api/books", data);
    }
    put(_id: any, data: any) {
        return this.httpClient.put("https://smartlibraraynode.herokuapp.com/api/books/"+_id,data);
    }
    delete(id: any) {
        return this.httpClient.delete("https://smartlibraraynode.herokuapp.com/api/books/" + id);
    }
}