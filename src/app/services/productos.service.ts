import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Productos} from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiProducts;
  }

getAllProducts(): Observable<Productos[]> {
  return this.http.get<Productos[]>(this.apiUrl);
}

getProduct(id: string): Observable<Productos> {
  return this.http.get<Productos>(`${this.apiUrl}/${id}`);
}

createProduct(product: Productos): Observable<Productos> {
  return this.http.post<Productos>(this.apiUrl, product);
}
updateProduct(id: string, product: Productos): Observable<Productos> {
  return this.http.put<Productos>(`${this.apiUrl}/${id}`, product);
}

deleteProduct(id: string): Observable<Productos> {
  return this.http.delete<Productos>(`${this.apiUrl}/${id}`);
}

}