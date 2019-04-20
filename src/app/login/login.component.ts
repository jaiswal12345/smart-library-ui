import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private route:Router) {
    this.user = {};
  }

  ngOnInit() {
  }
  onLogin() {
    this.userService.post(this.user)
      .subscribe(
      (res) => {
        this.userService.saveToken(res['token']);
        this.route.navigate(["/books"]);
      },
      (err) => console.log(err)
      );
  }



}
