import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  mode: boolean = true;
  /* true => Light && false => dark */
  constructor() { }
}
