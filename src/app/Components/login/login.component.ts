import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  isLoggedin:boolean=false;
 
  credentials={
    userName:'',
    password:''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  doLogin(){
    if((this.credentials.userName != '' && this.credentials.password != '')
      && (this.credentials.userName != null && this.credentials.password != null)){
        this.userService.login(this.credentials).subscribe(
          (data:any)=>{
            console.log('data is' ,data);
            localStorage.setItem("user",this.credentials.userName)
            this.userService.loginUser(data);
            this.isLoggedin=true;
            window.location.href="/userhome";
          },
          error=>{
            console.log('error is');
            Swal.fire('error','Invalid u/p','error');
          }
        );
      }
  }

}
