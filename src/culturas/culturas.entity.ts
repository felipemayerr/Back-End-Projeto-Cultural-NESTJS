import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Culturas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  cultura_titulo: string;

  @Column('text')
  cultura_descricao: string;

  @Column('text')
  cultura_mapaCultural: string;

  @Column('text')
  cultura_imagem: string;

  @Column('text')
  cultura_fonteConfiavel: string;

  @Column('text')
  cultura_religiao: string;

  @Column('text')
  cultura_crenca: string;

  @Column('text')
  cultura_idioma: string;

  @Column({length: 300})
  cultura_pais: string;

}