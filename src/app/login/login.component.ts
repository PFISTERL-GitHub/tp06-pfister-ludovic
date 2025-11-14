import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthConnexion } from '../../shared/actions/auth-action';
import { Store } from '@ngxs/store';
import { AuthState } from '../../shared/states/auth-state';
import { CnxAuth } from './cnxAuth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})


export class LoginComponent {

  private store = inject(Store);

  connexion: Signal<Boolean> = toSignal(
    this.store.select(AuthState.isConnected),
    {
      initialValue: false,
    }
  );

  login(){
    let auth = new CnxAuth(true);

    this.store.dispatch(new AuthConnexion(auth));
  }
}
