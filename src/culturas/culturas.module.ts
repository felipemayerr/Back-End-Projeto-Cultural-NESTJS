import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CulturasProviders } from './culturas.providers';
import { CulturasService } from './culturas.service';
import { CulturasController } from './culturas.controller';
import { Culturas } from './culturas.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [CulturasController],
  providers: [
    ...CulturasProviders,
    CulturasService,
  ],
})
export class CulturasModule {};