import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserAbstractService } from './abstract/user-abstract.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userAbstractService: UserAbstractService
  ){}

  async findAll() {
    const userAbstract = await this.userAbstractService.findAll();

    const userDto = userAbstract.map<User>(user => ({
      id: user.codigo,
      id_user_status: user.cdg_est_usuario,
      id_user_level: user.cdg_nvl_usuario,
      id_user_type: user.cdg_tpo_usuario,
      id_legal_person: user.cdg_prs_juridica,
      id_marital_status: user.cdg_est_civil,
      id_matrimonial_regime: user.cdg_rgm_matrimonial,
      id_country: user.cdg_pais,
      id_state: user.cdg_estado,
      id_municipality: user.cdg_municipio,
      id_city: user.cdg_ciudad,
      id_country_birth: user.cdg_pis_nacimiento,
      id_state_birth: user.cdg_est_nacimiento,
      id_municipality_birth: user.cdg_mnc_nacimiento,
      id_city_birth: user.cdg_cdd_nacimiento,
      id_origin: user.cdg_origen,
      id_nationality: user.cdg_nacionalidad,
      id_language: user.cdg_idioma,
      id_profession: user.cdg_profesion
    }));

    return userDto;
  }
}