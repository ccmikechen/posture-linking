import Action from '../Action';
import OAuthAuthorizer from '../authorizers/OAuthAuthorizer';

class SheetMusicTurnerAction extends Action {
  constructor(props) {
    super(props);

    this._isAvailable = false;
  }

  createAuthorizer() {
    if (this.authorizer == undefined) {
      this.authorizer = new OAuthAuthorizer(this, 'sheet_music_turner');
    }
    return this.authorizer;
  }
}

export default SheetMusicTurnerAction;
