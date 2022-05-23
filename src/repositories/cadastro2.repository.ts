import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DadosDataSource} from '../datasources';
import {Cadastro2, Cadastro2Relations} from '../models';

export class Cadastro2Repository extends DefaultCrudRepository<
  Cadastro2,
  typeof Cadastro2.prototype.id,
  Cadastro2Relations
> {
  constructor(
    @inject('datasources.dados') dataSource: DadosDataSource,
  ) {
    super(Cadastro2, dataSource);
  }
}
