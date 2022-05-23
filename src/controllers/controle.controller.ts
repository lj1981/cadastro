import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cadastro2} from '../models';
import {Cadastro2Repository} from '../repositories';

export class ControleController {
  constructor(
    @repository(Cadastro2Repository)
    public cadastro2Repository : Cadastro2Repository,
  ) {}

  @post('/cadastro2s')
  @response(200, {
    description: 'Cadastro2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cadastro2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro2, {
            title: 'NewCadastro2',
            exclude: ['id'],
          }),
        },
      },
    })
    cadastro2: Omit<Cadastro2, 'id'>,
  ): Promise<Cadastro2> {
    return this.cadastro2Repository.create(cadastro2);
  }

  @get('/cadastro2s/count')
  @response(200, {
    description: 'Cadastro2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cadastro2) where?: Where<Cadastro2>,
  ): Promise<Count> {
    return this.cadastro2Repository.count(where);
  }

  @get('/cadastro2s')
  @response(200, {
    description: 'Array of Cadastro2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cadastro2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cadastro2) filter?: Filter<Cadastro2>,
  ): Promise<Cadastro2[]> {
    return this.cadastro2Repository.find(filter);
  }

  @patch('/cadastro2s')
  @response(200, {
    description: 'Cadastro2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro2, {partial: true}),
        },
      },
    })
    cadastro2: Cadastro2,
    @param.where(Cadastro2) where?: Where<Cadastro2>,
  ): Promise<Count> {
    return this.cadastro2Repository.updateAll(cadastro2, where);
  }

  @get('/cadastro2s/{id}')
  @response(200, {
    description: 'Cadastro2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cadastro2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cadastro2, {exclude: 'where'}) filter?: FilterExcludingWhere<Cadastro2>
  ): Promise<Cadastro2> {
    return this.cadastro2Repository.findById(id, filter);
  }

  @patch('/cadastro2s/{id}')
  @response(204, {
    description: 'Cadastro2 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro2, {partial: true}),
        },
      },
    })
    cadastro2: Cadastro2,
  ): Promise<void> {
    await this.cadastro2Repository.updateById(id, cadastro2);
  }

  @put('/cadastro2s/{id}')
  @response(204, {
    description: 'Cadastro2 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cadastro2: Cadastro2,
  ): Promise<void> {
    await this.cadastro2Repository.replaceById(id, cadastro2);
  }

  @del('/cadastro2s/{id}')
  @response(204, {
    description: 'Cadastro2 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cadastro2Repository.deleteById(id);
  }
}
