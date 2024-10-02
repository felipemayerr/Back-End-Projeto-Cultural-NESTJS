import { Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { Culturas } from './culturas.entity';

@Controller('culturas')
export class CulturasController {
  constructor(private readonly culturasService: CulturasService) {}
  
  @Get()
  async FindAll(): Promise<Culturas[]>{
    return this.culturasService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Culturas> {
    return this.culturasService.findOne(id);
 }

 @Get(':id')
async getCulturaImagem(@Param('id') id: number) {
  const cultura = await this.culturasService.findOne(id); // Método que busca a cultura no banco de dados
  if (!cultura || !cultura.cultura_imagem) {
    throw new NotFoundException('Imagem não encontrada');
  }
  return { imagemUrl: cultura.cultura_imagem }; // Retorna a URL da imagem como string
}
}