import { Component } from '@angular/core';
import { LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  title = 'tp06-pollution';
}
