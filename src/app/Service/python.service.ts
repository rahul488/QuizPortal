import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../Common/question';

@Injectable({
  providedIn: 'root'
})
export class PythonService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }

addQuestion(question:any){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.post(`${this.baseUrl}/addpython`,question,{
   headers,
   responseType:'text' as 'json'
 });
}
getQuestions(){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  let questions:Question[]=[];
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.get<Question[]>(`${this.baseUrl}/getpythonQuestion`,{headers});
}
}