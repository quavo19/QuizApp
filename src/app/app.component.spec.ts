import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { QuestionsContainerComponent } from './questions-container/questions-container.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        StartMenuComponent,
        QuestionsContainerComponent,
        ScorePageComponent,
        CommonModule,
        HttpClientModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "quiz-application"', () => {
    expect(component.title).toBe('quiz-application');
  });

  it('should have an empty subjectSelected initially', () => {
    expect(component.subjectSelected).toBe('');
  });

  it('should update the subjectSelected when onSubjectSelected is called', () => {
    component.onSubjectSelected('HTML');
    expect(component.subjectSelected).toBe('HTML');
  });

  it('should display the subject selected in the HTML', () => {
    component.subjectSelected = 'HTML';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'quiz-application'
    );
    expect(compiled.querySelector('.subject-selected')?.textContent).toContain(
      'HTML'
    );
  });
});
