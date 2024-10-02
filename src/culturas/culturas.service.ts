
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Culturas } from './culturas.entity';

@Injectable()
export class CulturasService {
  constructor(
    @Inject('CULTURAS_REPOSITORY')
    private culturasRepository: Repository<Culturas>,
  ) {}

  async findAll(): Promise<Culturas[]> {
    return this.culturasRepository.find();
  }
  async findOne(id: number): Promise<Culturas> {
    return this.culturasRepository.findOne({ where: { id } });
  }
}