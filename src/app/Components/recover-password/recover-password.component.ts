import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  credentials={
    userName:'',
    password:'',
    
  }
  conformPassword:'';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  changePassword(){

    if(this.credentials.password != this.conformPassword){
      Swal.fire('error',"Re-enter password must be same as above",'error');
    }
    else{
    this.userService.changePassword(this.credentials).subscribe(
      data =>{
        Swal.fire('success',"Password Changed",'success');
        let stopIn=setInterval(()=>{
          window.location.href="/login"
          },2000)
      },
      error=>{
        Swal.fire('error',"Something went wrong",'error');
      }
    )
  }
}


}
