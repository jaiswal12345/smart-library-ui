import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class BookService {
    constructor(private httpClient: HttpClient) {
    }
    url:string ; 
    get(data) { 
        this.url= "https://smartlibraraynode.herokuapp.com/api/books/?";
        if (data.name){
            this.url = this.url+"name="+data.name;
        }
          if (data.author){
            this.url = this.url+"author="+data.author;
        }
           if (data.count){
            this.url = this.url+"count="+data.count;
        }
        return this.httpClient.get(this.url);
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