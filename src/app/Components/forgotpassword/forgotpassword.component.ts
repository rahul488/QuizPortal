import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  sendOtp:boolean=true;
  checkOtp:boolean=false;
  email:string='';
  otp:any;
  userOtp:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  forgotPw(){
    this.userService.ctreateOtp(this.email).subscribe(
      data =>{
          this.otp=data;
          localStorage.setItem('otp',this.otp);
          this.checkOtp=true;
          this.sendOtp=false;
          
      },
      error=>{
        Swal.fire('error',"ENter valid email",'error');
      }
    )
  }
  checEnteredOtp(){
    if(localStorage.getItem('otp') == this.userOtp){
      localStorage.removeItem('otp');
      window.location.href="/changepassword";
    }else{
      Swal.fire('error',"Otp doesn't match",'error');
    }
  }
}
