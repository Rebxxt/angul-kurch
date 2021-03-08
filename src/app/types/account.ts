import { Roles } from '../modules/accounts/infrastructure/types/roles';

export class Account {
  firstname: string;
  lastname: string;
  login: string;
  id: number;
  rating?: number;
  companyId: string;
  token?: string;
  roles?: string[];
}
