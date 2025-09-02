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
  
  incrementBy1() {
	  this.counter.set(this.counter() + 1);
  }
  
  incrementBy10() {
	  this.counter.set(this.counter() + 10);
  }
  
  decrementBy1() {
	  this.counter.set(this.counter() - 1);
  }
  
  decrementBy10() {
	  this.counter.set(this.counter() - 10);
  }
}
