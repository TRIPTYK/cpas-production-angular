export interface BaseEntity {
  id: string | null;
}

export interface Submission extends BaseEntity {
  name: string;
  message: string;
}
