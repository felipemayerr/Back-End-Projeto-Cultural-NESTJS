
import { DataSource } from 'typeorm';
import { Culturas } from './culturas.entity';

export const CulturasProviders = [
  {
    provide: 'CULTURAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Culturas),
    inject: ['DATA_SOURCE'],
  },
];