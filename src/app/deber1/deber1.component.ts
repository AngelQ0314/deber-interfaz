import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-deber1',
  standalone: true,
  imports: [CommonModule,CardModule],
  templateUrl: './deber1.component.html',
  styleUrl: './deber1.component.scss'
})
export class Deber1Component {
    matriz3x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    matriz4x4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    matriz5x5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    matriz6x6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];


    constructor(private router: Router){}

    redirigir(){
      this.router.navigate([''])
    }
}
