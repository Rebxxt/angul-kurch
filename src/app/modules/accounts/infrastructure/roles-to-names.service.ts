import {Injectable} from '@angular/core';
import {Roles} from './types/roles';

const displayNames = {
  admin: 'Администратор',
  moderator: 'Модератор',
};

@Injectable({
  providedIn: 'root'
})
export class RolesToNamesService {
  public toDisplayName(role: string): string {
    return displayNames[role];
  }
}
