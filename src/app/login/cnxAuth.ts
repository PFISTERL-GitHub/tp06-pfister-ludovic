import { Auth } from '../../shared/models/auth';

export class CnxAuth implements Auth {
  connexion: Boolean;
  constructor (connexion: Boolean)
  {
    this.connexion = connexion;
  }
}
