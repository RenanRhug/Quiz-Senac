import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class Quiz implements OnInit {
  typeTest: string = '';
  typeTestName: string = '';
  questions: any[] = [];
  selectedAnswers: string[] = []; 
  result: string = ''; 
  detailsResult: any[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  compareWith(o1: any, o2: any) {
    return o1.id === o2.id;
  }

  handleChange(ev: CustomEvent, questionIndex: number) {
    const selectedValue = ev.detail.value;
    this.selectedAnswers[questionIndex] = selectedValue;
    console.log('Selected answers:', this.selectedAnswers);

    if (questionIndex === this.questions.length - 1) {
      this.calculateResult();
    }
  }

  trackItems(index: number, item: any) {
    return item.id;
  }

  getOptions(options: any) {
    return Object.keys(options).map(key => ({
      value: key,
      label: options[key],
    }));
  }

  calculateResult() {
    const counts: { [key: string]: number } = this.selectedAnswers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  
    const maxOption = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
  
    switch (maxOption) {
      case 'a':
        this.result = '<strong>Maior pontuação em: a)</strong><br><br>A principal característica dos relacionados com a opção a), é o movimento; gostam de novidade. Apresentam destreza física e boa expressão corporal. Se forem mais propensos ao raciocínio lógico, terão mais êxito em profissões que requeiram precisão e acuidade. Se forem mais inclinados ao sentimento e à emoção, as profissões relacionadas ao trato com pessoas são as mais indicadas. Pessoas assim, não gostam de rotina e veem o trabalho como uma grande fonte de prazer.';
        this.detailsResult = [
          'Esportista',
          'Anestesista',
          'Artista Plástico',
          'Ator',
          'Chef de Cozinha',
          'Cineasta',
          'Cirurgião',
          'Coreógrafo',
          'Dançarino',
          'Dermatologista',
          'Estilista',
          'Fotógrafo',
          'Guia de Turismo',
          'Instrumentador Cirúrgico',
          'Instrutor de Vôo',
          'Jornalista',
          'Médico Clínico',
          'Músico',
          'Paisagista',
          'Personal Trainner',
          'Personal Stylistic',
          'Piloto',
          'Publicitário',
          'Relações Públicas',
          'Roteirista'
        ];        
        break;
      case 'b':
        this.result = '<strong>Maior pontuação em: b)</strong><br><br>Comando e responsabilidade são duas palavras que definem as pessoas desta opção. Elas gostam de lidar com fatos, quantidades, análises, organização e planejamento. Trabalham duro e preferem profissões que lhes proporcionem status e possibilidade de crescimento. São as mais presentes no mundo corporativo.';
        this.detailsResult = [
          'Administrador de Empresas',
          'Advogado',
          'Assistente Social',
          'Bibliotecário',
          'Delegado',
          'Engenheiro Mecânico/Químico',
          'Juiz de Direito',
          'Pastor, Padre, Rabino',
          'Policial',
          'Promotor Público'
        ];        
        break;
      case 'c':
        this.result = '<strong>Maior pontuação em: c)</strong><br><br>Facilmente reconhecíveis por seu entusiasmo e interesse nas relações humanas, as pessoas desta opção têm na intuição o seu ponto forte. Muitas  endereçam seu esforço e talento para o desenvolvimento intelectual de alunos e discípulos e o conforto psicológicos de pacientes e colegas de trabalho. No grupo desta opção, estão as personalidades mais contempladas com o Nobel da Paz e de literatura.';
        this.detailsResult = [
          'Artista plástico',
          'Dramaturgo',
          'Educador',
          'Escritor',
          'Filósofo',
          'Jornalista',
          'Pedagogo',
          'Professor',
          'Psicólogo',
          'Psiquiatra',
          'Sociólogo',
          'Terapeuta ocupacional',
          'Tradutor'
        ];
        break;
      case 'd':
        this.result = '<strong>Maior pontuação em: d)</strong><br><br>São intuitivos como os da opção anterior, mas, em vez de se preocupar com pessoas, costumam focar seus interesses em grandes áreas do conhecimento, como ciência e tecnologia. Apresentam notável capacidade para identificar problemas concretos e resolvê-los, bem como para o raciocínio abstrato.';
        this.detailsResult = [
          'Analista de Sistemas',
          'Antropólogo',
          'Arquiteto',
          'Astrônomo',
          'Criador de Software',
          'Designer Industrial',
          'Economista',
          'Engenheiro',
          'Físico',
          'Líder de uma Corporação',
          'Matemático',
          'Militar',
          'Músico (Regente)',
          'Oceanógrafo',
          'Pesquisador',
          'Químico',
          'Urbanista',
          'Zoólogo'
        ];        
        break;
      default:
        this.result = 'Não foi possível determinar a pontuação.';
    }
  
    console.log(this.result);
  }
  

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.typeTest = params['type'];

      if (this.typeTest == 'vocational') {
        this.typeTestName = "Teste Vocacional"
      } else if (this.typeTest == 'learning') {
        this.typeTestName = "Teste de Conhecimento"
      } else if (this.typeTest == 'english') {
        this.typeTestName = "Teste de Inglês"
      } 
        
    });

    this.quizService.getQuestions(this.typeTest).subscribe(data => {
      this.questions = data.questions;
      this.selectedAnswers = new Array(this.questions.length).fill(null); 
    });
  }
}
