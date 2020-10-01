import { User } from './user.model';

export class Session{
    public token: string;   // Session Token
    public user: User;      // Authenticated User
}
