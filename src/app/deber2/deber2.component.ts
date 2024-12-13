import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deber2',
  standalone: true,
  imports: [],
  templateUrl: './deber2.component.html',
  styleUrl: './deber2.component.scss'
})
export class Deber2Component {
      constructor(private router: Router){}
  
      redirigir(){
        this.router.navigate([''])
      }
}
