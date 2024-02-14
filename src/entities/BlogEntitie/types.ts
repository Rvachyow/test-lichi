export interface IBlog {
  createdAt: string;
  comments: [];
  description: string;
  fullText: string;
  title: string;
  id: string;
}

export interface Comments {}

type status = 'loading' | 'loaded' | 'success';
export interface IDataState {
  data: IBlog[];
  blog: IBlog;
  filtred: IBlog[];
  status: status;
}
