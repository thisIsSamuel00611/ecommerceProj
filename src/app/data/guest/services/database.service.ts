import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  men = this.http.get('http://localhost:3000/men')
  women = this.http.get('http://localhost:3000/women')
  children = this.http.get('http://localhost:3000/children')
}
