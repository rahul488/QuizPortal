import { Component } from '@angular/core';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizPortal';

  constructor(private userService:UserService){}

  loggedIn:boolean=false;
  username:string;
  
  ngOnInit(): void {

    this.loggedIn=this.userService.isLoggedIn();
    this.username=localStorage.getItem("user");
  }
  logoutUser(){
    this.userService.logout();
    location.reload();
  }
}
