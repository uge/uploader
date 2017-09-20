interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QnjTIWCMc53hTrGutSod1z0iyg5CQS87',
  domain: 'mechlin.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
