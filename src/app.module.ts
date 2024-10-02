import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CulturasModule } from './culturas/culturas.module';

@Module({
  imports: [
    CulturasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
