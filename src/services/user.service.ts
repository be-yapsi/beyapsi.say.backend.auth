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

    const userDto = await Promise.all(userAbstract.map<Promise<User>>(async user => ({
      id: user.codigo,
      id_user_type: await user.cdgTpoUsuario,
      id_user_status: await user.cdgEstUsuario,
      id_user_level: await user.cdgNvlUsuario,
      id_legal_person: await user.cdgPrsJuridica,
      id_marital_status: user.cdgEstCivil,
      id_matrimonial_regime: await user.cdgRgmMatrimonial,
      id_country: await user.cdgPais,
      id_state: user.cdgEstado,
      id_municipality: user.cdgMunicipio,
      id_city: user.cdgCiudad,
      id_country_birth: user.cdgPisNacimiento,
      id_state_birth: user.cdgEstNacimiento,
      id_municipality_birth: user.cdgMncNacimiento,
      id_city_birth: user.cdgCddNacimiento,
      id_origin: await user.cdgOrigen,
      id_nationality: await user.cdgNacionalidad,
      id_language: user.cdgIdioma,
      id_profession: user.cdgProfesion,
      id_commercial_activity: await user.cdgGiro,
      id_national_ocupation: await user.cdgCdgNcnOcupacion,
      id_education_level: await user.cdgEscolaridad,
      id_professional_title: await user.cdgTtlProfesional,
      id_gender: await user.cdgSexo,
      id_created_by: user.cdgEmpAlta,
      id_updated_by: user.cdgEmpModificacion,
      id_deleted_by: user.cdgEmpBaja,
      id_satatus_provider_banorte: await user.cdgEstPrvBanorte,
      id_satatus_employee_banorte: await user.cdgEstEmpBanorte,
      id_public_office: await user.cdgCrgPublico,
      id_company_size: await user.cdgTmnEmpresa,
      id_resource_origin: await user.cdgOrgRecurso,
      id_resource_destination: await user.cdgDstRecurso,
      id_time_zone: user.idnZnaHoraria,
      personal_message: user.mnsPersonal,
      company_name: user.rznSocial,
      first_name: user.prmNombre,
      second_name: user.sgnNombre,
      first_last_name: user.aplPaterno,
      second_last_name: user.aplMaterno,
      rfc: user.rfc,
      curp: user.curp,
      voter_key: user.clvElector,
      fiel_serial_number: user.nmrSreFiel,
      taxpayer_identification_number: user.nmrIdnFiscal,
      stp_CLABE: user.clbIntStp,
      email: user.usuario,
      password: user.contrasena,
      nip: user.nip,
      wrong_attempt_counter: user.cntIntErrAcceso,
      wrong_security_question_counter: user.cntIntErrPrgSeguridad,
      total_PLD_risk_points: user.ttlPntRsgPld,
      profile_flag: user.prfCompleto,
      user_file_flag: user.expCompleto,
      access: user.acceso,
      confirmed: user.confirmado,
      dtc_pld: user.dtcPld,
      politically_exposed_person_flag: user.prsPltExpuesta,
      has_secret_question: user.prgSgrRespondida,
      signed_contract_flag: user.cntFirmado,
      confirmation_key: user.llvConfirmacion,
      code_contract_sing: user.cdgFrmContrato,
      email_flag: user.cdgVldCrrElectronico,
      alt_email_flag: user.cdgVldCrrElcAlterno,
      avatar_image_url: user.urlImgAvatar,
      monthly_income: user.ingMensuales,
      amount_transactions_per_month: user.mntMxmMnsTransacciones,
      number_transactions_per_month: user.nmrMxmMnsTransacciones,
      registration_latitude: user.lttUbcRegistro,
      registration_longitude: user.lngUbcRegistro,
      last_location_latitude: user.lttUltUbicacion,
      last_location_longitude: user.lngUltUbicacion,
      last_access_date: user.fchUltAcceso,
      constitution_date: user.fchConstitucion,
      created_date: user.fchAlta,
      updated_date: user.fchModificacion,
      deleted_date: user.fchBaja,
      id_economic_activity: user.cdgActEconomica,
      id_employee_validated_documentation: user.cdgEmpVldInfDocumentacion,
      official_identification_number: user.nmrIdnOficial,
      biometric_key: user.cntBiometrica,
      operating_permit_flag: user.prmOperar,
      transactional_profile_flag: user.prfTrnCompleto,
      validated_rfc: user.rfcValido,
      validated_curp: user.crpValido,
      in_blacklist: user.exsLstNegras,
      general_info_flag: user.infGnrCompleta,
      local_address_flag: user.dmcRsdRegistrado,
      correspondance_address_flag: user.dmcCrrRegistrado,
      digital_level_2_info_flag: user.dcmDgtNvl_2Completa,
      digital_level_3_info_flag: user.dcmDgtNvl_3Completa,
      beneficiaries_registered_flag: user.bnfRegistrados,
      intern_control_validated_flag: user.rvsCntInterno,
      terms_conditions_flag: user.acpTrmCondiciones,
      privacy_notice_flag: user.acpAvsPrivacidad,
      exp_arm_aml: user.expArmAml,
      cnt_sqn_registro: user.cntSqnRegistro,
      compliance_officer_reviewed: user.complianceOfficerReviewed,
      black_list_flag: user.blacklistVerified,
      internal_verified_date: user.internalVerifiedDate,
      stp_verified: user.stpVerified,
      has_transactional_nip: user.hasTransactionalNip,
      birthdate: user.fchNacimiento,
      key: user.llave,
      personal_information_flag: user.infPrsCompleta,
      previous_level_validation_flag: user.cntVldNvlAntMntOperar
    })));

    return userDto;
  }
}