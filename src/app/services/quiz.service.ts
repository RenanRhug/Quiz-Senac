import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// Definir um tipo para as chaves válidas
type TestType = 'vocational' | 'english' | 'learning';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private jsonUrls: Record<TestType, string> = {
    vocational: 'assets/quiz.json',
    english: 'assets/english.json',
    learning: 'assets/learning.json',
  };

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestions(typeTest: string): Observable<any> {
    const testType = this.isValidTestType(typeTest) ? typeTest as TestType : 'vocational'; 
    const url = this.jsonUrls[testType];

    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  saveAnswers(answers: any[]): Promise<any> {
    return this.http.post(this.apiUrl, { answers }).toPromise();
  }

  saveVocationalResult(userId: number, maxOption: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/test/save-vocational-result`, {
      user_id: userId,
      result: maxOption,
    });
  }

  getTestTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/test/test-types`);
  }

  getVocationalResult(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/test/get-vocational-result`, {
      params: { user_id: userId.toString() },
    });
  }

  saveEnglishResult(userId: number, maxOption: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/test/save-english-result`, {
      user_id: userId,
      result: maxOption,
    });
  }

  getEnglishResult(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/test/get-english-result`, {
      params: { user_id: userId.toString() },
    });
  }

  saveLearningResult(userId: number, maxOption: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/test/save-learning-result`, {
      user_id: userId,
      result: maxOption,
    });
  }

  getLearningResult(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/test/get-learning-result`, {
      params: { user_id: userId.toString() },
    });
  }

  private isValidTestType(type: string): type is TestType {
    return ['vocational', 'english', 'learning'].includes(type);
  }

  private handleError(error: any) {
    // Handle the error here
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
