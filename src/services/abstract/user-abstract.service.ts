import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from 'C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist'
import { Repository } from "typeorm";

@Injectable()
export class UserAbstractService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ){}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
}