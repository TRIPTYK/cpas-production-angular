export interface BaseEntity {
  id: string | null
}

export interface submission extends BaseEntity {
  name:string;
  message:string
}
