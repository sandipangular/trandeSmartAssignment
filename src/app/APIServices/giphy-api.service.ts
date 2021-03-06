import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable({
  providedIn: 'root'
})

export class GiphyAPIService {

  constructor(private http:HttpClient) { }
 
  APIurl="http://api.giphy.com/v1/gifs/search?q=";
  // getDataBysearch(){   
  //   return this.http.get(this.APIurl);
  // }
  res: any;
  err: any;
  getDataBysearch() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept','application/json');
    headers = headers.set('Content-Type',  'application/json');
    headers = headers.set('Access-Control-Allow-Origin',  'http://localhost:4200/');

    headers = headers.set('Access-Control-Allow-Credentials' , 'true');
    headers = headers.set( 'Access-Control-Allow-Origin', '*');
    headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

     return this.http.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", { headers })
  }
  searchData(parameter:string){
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept','application/json');
    headers = headers.set('Content-Type',  'application/json');
    headers = headers.set('Access-Control-Allow-Origin',  'http://localhost:4200/');

    headers = headers.set('Access-Control-Allow-Credentials' , 'true');
    headers = headers.set( 'Access-Control-Allow-Origin', '*');
    headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    debugger;
     return this.http.get(this.APIurl+"'+parameter+'"+"&api_key=dc6zaTOxFJmzC", { headers })
  }

}
