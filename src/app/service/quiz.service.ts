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

  constructor(private http: HttpClient) {}

  getQuestions(typeTest: string): Observable<any> {
    const testType = this.isValidTestType(typeTest) ? typeTest as TestType : 'vocational'; // Use a default value or handle error as needed
    const url = this.jsonUrls[testType];
    
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
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
