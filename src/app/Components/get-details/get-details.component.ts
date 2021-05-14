import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/Common/answer';
import { Question } from 'src/app/Common/question';
import { AngularService } from 'src/app/Service/angular.service';
import { CService } from 'src/app/Service/c.service';
import { DjangoService } from 'src/app/Service/django.service';
import { JavaService } from 'src/app/Service/java.service';
import { PythonService } from 'src/app/Service/python.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  questions:Question[]=[];
  ans:string;
  id:number;
  keyword:string;
  totalMark:number;
  answer:Answer[]=[];
 dataSource:any
 isVisited=''

  constructor(private javaService:JavaService,
              private cService:CService,
              private djangoService:DjangoService,
              private pythonService:PythonService,
              private angularService:AngularService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isVisited='true';
    localStorage.setItem("isVisited",this.isVisited);
    this.totalMark=+localStorage.getItem('mark');
    this.answer=JSON.parse(localStorage.getItem('result'));
    //console.log(this.answer)
    this.dataSource = this.answer;
    console.log(this.dataSource)
    
  }
  displayedColumns: string[] = ['Id','CorrectAns', 'UserAns','Status'];
 
 


}
