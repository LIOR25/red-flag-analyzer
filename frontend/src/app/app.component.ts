import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userText = '';
  level = 'Playful';
  result = '';
  loading = false;

  constructor(private http: HttpClient) { }

  analyzeText() {
    if (!this.userText.trim()) return;

    this.loading = true;
    this.result = '';

    this.http
      .post<{ output: string }>('http://localhost:3000/api/analyze', {
        text: this.userText,
        intensity: this.level,
      })
      .subscribe({
        next: (res) => {
          this.result = res.output;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.result = '⚠️ Something went wrong. Try again!';
          this.loading = false;
        },
      });
  }
}
