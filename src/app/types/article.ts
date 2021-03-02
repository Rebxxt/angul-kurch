import {Account} from './account';

export interface Article {
  id: number;
  title: string;
  content: string;
  authorId: number;
  dateCreated: string;
  rating: number;
  viewers: number;
  comments: number;
  author?: Account;
}
