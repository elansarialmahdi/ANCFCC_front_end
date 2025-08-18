import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent {
  cin: string = '';
  areaCode: string = '+21';
  phoneNumber: string = '';
  verificationCode: string[] = ['', '', '', '', ''];
  codeInputs = Array(5);
  showVerification: boolean = false;


  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.router.navigate(['/user-dashboard']);
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

  @ViewChildren('codeInput') codeInputRefs!: QueryList<ElementRef>;

  sendVerificationCode() {
    this.showVerification = true;
    setTimeout(() => {
      this.codeInputRefs.first?.nativeElement.focus();
    }, 0);
  }

  focusNext(index: number, event: any) {
    const value = event.target.value;
    if (value.length === 1 && index < this.codeInputs.length - 1) {
      this.codeInputRefs.toArray()[index + 1].nativeElement.focus();
    }
    if (value.length === 0 && event.inputType === 'deleteContentBackward' && index > 0) {
      this.codeInputRefs.toArray()[index - 1].nativeElement.focus();
    }
  }

    goToSignup(event: Event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }

  private isFormValid(): boolean {
    return !!(
      this.cin &&
      this.areaCode &&
      this.phoneNumber &&
      this.verificationCode.every(code => code !== '')
    );
  }

  
}
