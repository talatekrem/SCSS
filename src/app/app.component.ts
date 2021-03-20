import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SCSS-PRACTICE';
  team = 'BESIKTAS';
  team2: string;
  items: string;

  method() {
    let items: string;
    items = 'test';
    this.team2 = 'FENERBAHCE';
  }
  function() {
    alert('merhaba dunya');
    this.function2();
  }

  function2(){
    alert('black eagle');
    this.function3();
  }
  function3(){
    alert('hello there');
  }
}
