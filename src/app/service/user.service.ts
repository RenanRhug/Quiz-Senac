import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://backendquiz-epqi.onrender.com/users'; // URL do backend

  constructor(private http: HttpClient) { }

  createUser(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      tap(() => console.log('Usuário criado')),
      catchError(this.handleError<any>('createUser'))
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(() => console.log('Usuários carregados')),
      catchError(this.handleError<any>('getUsers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
