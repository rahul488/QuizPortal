import { Component, OnInit } from '@angular/core';
import { AngularService } from 'src/app/Service/angular.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  question={
    ques:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:''
  }

  constructor(private angularService:AngularService) { }

  ngOnInit(): void {
  }

  saveQuestion(){
    this.angularService.addQuestion(this.question).subscribe(
      data => {
          Swal.fire('success',"Qustion saved",'success');
      },
      error=>{
        Swal.fire('error',"Authorization Failed",'error');
      }
    )
  }

}
