import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dados',
  connector: 'mysql',
  url: '',
  host: 'mysql.docker',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dev_cursoaws'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DadosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dados';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dados', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
