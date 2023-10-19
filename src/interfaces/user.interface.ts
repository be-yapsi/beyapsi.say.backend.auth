export interface User {
  id: number //Revisado
  id_user_type: any //Revisado
  id_user_status: any //Revisado
  id_legal_person: any //Revisado
  id_matrimonial_regime: any
  id_country: any //Revisado
  id_state: number //Revisado
  id_user_level: any
  id_municipality: number //Revisado
  id_city: number //Revisado
  id_country_birth: number //Revisado
  id_state_birth: number
  id_municipality_birth:number
  id_city_birth: number //Revisado
  id_origin: any //Revisado
  id_nationality: any //Revisado
  id_profession: number //Revisado
  id_commercial_activity:any
  company_name: string //Revisado
  first_name: string //Revisado
  second_name: string //Revisado
  first_last_name: string //Revisado
  second_last_name: string //Revisado
  rfc: string //Revisado
  curp: string //Revisado
  voter_key: string //Revisado
  id_gender: any //Revisado
  id_economic_activity: number //Revisado
  id_marital_status: number //Revisado
  id_national_ocupation: any //Revisado
  id_education_level: any //id_study_level
  id_professional_title: any //Revisado
  birthdate: Date //Revisado
  constitution_date: Date //Revisado
  last_access_date: Date //Revisado
  created_date: Date //Revisado
  updated_date: Date //Revisado
  deleted_date: Date //Revisado
  id_created_by: number //Revisado
  id_updated_by: number //Revisado
  id_deleted_by: number //Revisado
  id_satatus_provider_banorte: any
  id_satatus_employee_banorte: any
  id_public_office: any
  id_company_size: any
  id_resource_origin: any
  id_resource_destination: any
  id_time_zone: string
  personal_message: string
  fiel_serial_number: string
  taxpayer_identification_number: string
  stp_CLABE: string
  email: string
  password: Buffer
  nip: Buffer
  wrong_attempt_counter: number
  wrong_security_question_counter:number
  total_PLD_risk_points:number
  profile_flag: boolean
  user_file_flag: boolean
  access: boolean
  confirmed: boolean
  dtc_pld: boolean
  confirmation_key: string
  code_contract_sing: string
  avatar_image_url: string
  monthly_income: number
  amount_transactions_per_month: number
  number_transactions_per_month: number
  registration_latitude: number
  registration_longitude: number
  last_location_latitude: number
  last_location_longitude: number
  key: string
  id_employee_validated_documentation: number
  official_identification_number: string
  biometric_key: Buffer
  validated_rfc: boolean
  validated_curp: boolean
  in_blacklist: boolean
  exp_arm_aml: boolean,
  cnt_sqn_registro: number
  internal_verified_date: Date
  operating_permit_flag: boolean //Revisado
  black_list_flag: boolean //Revisado
  compliance_officer_reviewed: boolean //Revisado
  transactional_profile_flag: boolean //Revisado
  personal_information_flag: boolean //Revisado
  general_info_flag: boolean //Revisado
  local_address_flag: boolean //Revisado
  correspondance_address_flag: boolean //Revisado
  digital_level_2_info_flag: boolean //Revisado
  digital_level_3_info_flag: boolean //Revisado
  beneficiaries_registered_flag: boolean //Revisado
  intern_control_validated_flag: boolean //Revisado
  signed_contract_flag: boolean //Revisado
  terms_conditions_flag: boolean //Revisado
  privacy_notice_flag: boolean //Revisado
  previous_level_validation_flag: boolean //Revisado
  email_flag: string //Revisado
  alt_email_flag: string //Revisado
  politically_exposed_person_flag: boolean //Revisado
  stp_verified: boolean //Revisado
  has_secret_question: boolean //Revisado
  has_transactional_nip: boolean //Revisado
}