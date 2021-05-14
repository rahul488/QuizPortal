import { Component, OnInit } from '@angular/core';
import { CService } from 'src/app/Service/c.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c-component',
  templateUrl: './c-component.component.html',
  styleUrls: ['./c-component.component.css']
})
export class CComponentComponent implements OnInit {
  question={
    ques:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:''
  }

  constructor(private cService:CService) { }

  ngOnInit(): void {
  }

  saveQuestion(){
    this.cService.addQuestion(this.question).subscribe(
      data => {
          Swal.fire('success',"Qustion saved",'success');
      },
      error=>{
        Swal.fire('error',"Authorization Failed",'error');
      }
    )
  }


}
