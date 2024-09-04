import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users'; // Chave para armazenar os usuários no localStorage

  constructor() {}

  // Método para criar um usuário
  createUser(user: { id: string; password: string }): Observable<any> {
    const users = this.getUsersFromStorage();
    users.push(user);
    this.saveUsersToStorage(users);
    return of(user); // Simula a resposta da API
  }

  // Método para obter a lista de usuários
  getUsers(): Observable<any[]> {
    return of(this.getUsersFromStorage());
  }

  private getUsersFromStorage(): { id: string; password: string }[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  private saveUsersToStorage(users: { id: string; password: string }[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
