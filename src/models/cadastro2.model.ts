import {Entity, model, property} from '@loopback/repository';

@model()
export class Cadastro2 extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'number',
    required: true,
  })
  idade: number;

  @property({
    type: 'boolean',
    required: true,
  })
  renda: boolean;


  constructor(data?: Partial<Cadastro2>) {
    super(data);
  }
}

export interface Cadastro2Relations {
  // describe navigational properties here
}

export type Cadastro2WithRelations = Cadastro2 & Cadastro2Relations;
