import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
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
