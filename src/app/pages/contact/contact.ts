import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';
import { timeout } from 'rxjs';
import { BackLink } from '../../shared/components/back-link/back-link';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    Footer,
    BackLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly loading = signal(false);
  readonly feedback = signal('');
  readonly error = signal(false);

  readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly nome = computed(() => this.form.controls.nome);
  readonly email = computed(() => this.form.controls.email);
  readonly mensagem = computed(() => this.form.controls.mensagem);

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.feedback.set('');
    this.error.set(false);

    const { nome, email, mensagem } = this.form.getRawValue();

    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('mensagem', mensagem);

    this.http
      .post('/core/send-php/send.php', formData, { responseType: 'text' })
      .pipe(timeout(8000))
      .subscribe({
        next: (response) => {
          if (response === 'OK') {
            this.feedback.set('Mensagem enviada com sucesso.');

            this.form.reset({
              nome: '',
              email: '',
              mensagem: '',
            });
          } else {
            this.feedback.set(response || 'Erro ao enviar mensagem.');
            this.error.set(true);
          }

          this.loading.set(false);
        },

        error: () => {
          this.feedback.set('Erro ao enviar mensagem.');
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }
}
