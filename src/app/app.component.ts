import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialAngular';
  showSpinner = false;
  
  loadData(){
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }
}

