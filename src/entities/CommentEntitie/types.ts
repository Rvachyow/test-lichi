export interface IComment {
  createdAt: string
  text: string
  id: string
  blogId: string
}

export interface IDataComment {
    data: IComment[],
}
