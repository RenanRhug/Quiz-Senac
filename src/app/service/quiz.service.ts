import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Definir um tipo para as chaves válidas
type TestType = 'vocational' | 'english' | 'learning';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private jsonUrls: Record<TestType, string> = {
    vocational: 'assets/quiz.json',
    english: 'assets/english.json',
    learning: 'assets/learning.json'
  };

  private apiUrl = 'https://backendquiz-epqi.onrender.com'; // URL do backend
  // private apiUrl = 'http://localhost:3000'
  
  constructor(private http: HttpClient) {}

  getQuestions(typeTest: string): Observable<any> {
    const testType = this.isValidTestType(typeTest) ? typeTest as TestType : 'vocational'; // Use a default value or handle error as needed
    const url = this.jsonUrls[testType];
    
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  saveVocationalResult(userId: number, maxOption: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/test/save-vocational-result`, { user_id: userId, result: maxOption });
  }

  getVocationalResult(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/test/get-vocational-result`, {
      params: { user_id: userId.toString() }
    });
  }
  
  private isValidTestType(type: string): type is TestType {
    return ['vocational', 'english', 'learning'].includes(type);
  }

  private handleError(error: any) {
    // Handle the error here
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
