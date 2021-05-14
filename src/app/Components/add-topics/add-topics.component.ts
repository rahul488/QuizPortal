import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit {

  topic={
    name:'',
    specification:''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getRoleofUser(localStorage.getItem('user'));
  }
  getRoleofUser(name: string) {
   
    this.userService.getRole(name).subscribe(
      data=>{
          if(data == 'USER'){
            Swal.fire('error',"You are not authorized",'error');
            let stopIn=setInterval(()=>{
               window.location.href="/userhome";
            },2000)
          }
      } 
    )

  }
  addTopic(){
 
    this.userService.saveTopics(this.topic).subscribe(
      data =>{
        Swal.fire('success',"Topic Saved",'success');
      },
      error=>{
        Swal.fire('error',"Failed",'error');
      }
    )
  }

}
