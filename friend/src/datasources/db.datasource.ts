import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: 'postgresql://db_ioso_user:8uHBr9E5FwwXliXzNux5Kc5NafZI60M9@dpg-d30mh656ubrc73f6uncg-a.frankfurt-postgres.render.com/db_ioso?ssl=true',
  host: 'dpg-d30mh656ubrc73f6uncg-a.frankfurt-postgres.render.com',
  port: 5432,
  user: 'db_ioso_user',
  password: '8uHBr9E5FwwXliXzNux5Kc5NafZI60M9',
  database: 'db_ioso'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
