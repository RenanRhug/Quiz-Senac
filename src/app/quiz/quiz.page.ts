import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class Quiz implements OnInit {
  typeTest: string = '';

  constructor(private route: ActivatedRoute) {}

  foods = [
    {
      id: 1,
      name: 'Apples',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Cupcakes',
      type: 'dessert',
    },
  ];

  compareWith(o1: any, o2: any) {
    return o1.id === o2.id;
  }

  handleChange(ev: Event) { // Tipo do parâmetro atualizado para Event
    const inputElement = ev.target as HTMLInputElement; // Faz um cast para HTMLInputElement
    console.log('Current value:', inputElement.value); // Agora acessa o valor corretamente
  }

  trackItems(index: number, item: any) {
    return item.id;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.typeTest = params['type'];
      console.log(this.typeTest); // Aqui você pode usar o parâmetro 'type' como necessário
    });
  }
}
