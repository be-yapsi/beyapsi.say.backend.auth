import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from 'C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist'
import { Repository } from "typeorm";

@Injectable()
export class UserAbstractService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly userRepository: Repository<Usuarios>
  ){}

  async findAll(): Promise<Usuarios[]> {
    return this.userRepository.find({take: 1});
  }
}