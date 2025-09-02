import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  counter = signal(0);
  
  increment() {
	  this.counter.set(this.counter() + 1);
  }
  
  decrement() {
	  this.counter.set(this.counter() - 1);
  }
}
