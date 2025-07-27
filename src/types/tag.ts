export interface Tag {
  id: string;
  name: string;
  transactions: number;
}

export interface CreateTagData {
  name: string;
}

export interface UpdateTagData {
  name: string;
}

export interface MergeTagData {
  tagId: string;
}