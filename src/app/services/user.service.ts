import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  createUser(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user).pipe(
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

  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('authToken'); 
    if (!token) {
      return null;
    }
  
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.id; 
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
