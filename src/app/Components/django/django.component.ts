import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/Service/django.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-django',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.css']
})
export class DjangoComponent implements OnInit {
  question={
    ques:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:''
  }


  constructor(private djangoService:DjangoService) { }

  ngOnInit(): void {
  }
  
  saveQuestion(){
    this.djangoService.addQuestion(this.question).subscribe(
      data => {
          Swal.fire('success',"Qustion saved",'success');
      },
      error=>{
        Swal.fire('error',"Authorization Failed",'error');
      }
    )
  }
}
