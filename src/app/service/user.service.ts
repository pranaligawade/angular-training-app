import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

 fetchUserData(){
   return this.http.get('https://reqres.in/api/users?page=2',{});
 }
//  getUser(){
//    return this.http.get(`_${environment.baseUrl}/user`,{
//      headers:{
//        'app-id':environment.appId
//      }
//    });
//  }

}
