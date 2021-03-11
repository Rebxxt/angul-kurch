import {Account} from '../../../types/account';

export interface ArticleComment {
  id: number;
  author_id: number;
  article_id: number;
  text: string;
  rating: number;
  date_created: string;
  author?: Account;
  comment_id?: number;
  displayComm?: boolean;
  subCommentsCount?: number;
  sendComm?: boolean;
}

export interface SubCommentTree {
  id: number;
  author_id: number;
  article_id: number;
  text: string;
  rating: number;
  date_created: string;
  author?: Account;
  comment_id?: number;
  displayComm?: boolean;
  subComments?: SubCommentTree[];
  subCommentsCount: number;
  sendComm?: boolean;
}
