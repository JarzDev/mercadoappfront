import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.page.html',
  styleUrls: ['./outro.page.scss'],
})
export class OutroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 2000);
  }
  

}
