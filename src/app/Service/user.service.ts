import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Topic } from '../Common/topic';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:8080';
  userUrl='http://localhost:8080/user';
  adminUrl='http://localhost:8080/admin';

  userRegister(user:any){
    return this.http.post(`${this.baseUrl}/register`,user,{
      responseType:'text' as 'json'
    });
  }
  login(user:any){
    return this.http.post(`${this.baseUrl}/authenticate`,user,{
      responseType:'text' as 'json'
    });
  }
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  //user is logged in or not
  isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token == undefined || token == ' '|| token ==null){
      return false;
    }
    else{
      return true;
    }
  }
  //for logout
  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    return true;
  }
  getToken(){
    return localStorage.getItem("token");
  }
  
  getRole(userName:string){
    return this.http.get(`${this.baseUrl}/getRole/${userName}`,{
      responseType:'text' as 'json'
    });
  }
  saveTopics(topics: any) {
    let token='Bearer '+this.getToken();
    const headers=new HttpHeaders().set("Authorization",token);
    return this.http.post(`${this.baseUrl}/savetopic`,topics,{
      headers,
      responseType:'text' as 'json'
    })
  }
  getTopics():Observable<Topic[]>{
    let token='Bearer '+this.getToken();
    const headers=new HttpHeaders().set("Authorization",token);
    return this.http.get<Topic[]>(`${this.baseUrl}/gettopic`,{
      headers,
    })
  }
  ctreateOtp(email:string){
    return this.http.get(`${this.baseUrl}/sendotp/${email}`);
  }
  changePassword(request:any){
    
    return this.http.post(`${this.baseUrl}/change`,request,{
      responseType:'text' as 'json'
    });
  }
  
}