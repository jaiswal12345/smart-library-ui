import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {
    }
    post(data: any) {
        return this.httpClient.post("https://smartlibraraynode.herokuapp.com/api/users/login", data);
    }
      saveToken(token){
    localStorage.setItem('token',token);
  }
}