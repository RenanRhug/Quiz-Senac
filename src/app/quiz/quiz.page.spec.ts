import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quiz } from './quiz.page';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quiz],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
