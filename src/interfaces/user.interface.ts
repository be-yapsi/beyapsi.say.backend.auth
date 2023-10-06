export interface User {
  id: number //Revisado
  id_user_type: number //Revisado
  id_user_status: number //Revisado
  id_legal_person: number //Revisado
  id_matrimonial_regime: number
  id_country: number //Revisado
  id_state: number //Revisado
  id_user_level: number
  id_municipality: number //Revisado
  id_city: number //Revisado
  id_country_birth: number //Revisado
  id_state_birth: number
  id_municipality_birth:number
  id_city_birth: number //Revisado
  id_origin: number //Revisado
  id_nationality: number //Revisado
  id_languaje:number
  id_profession: number //Revisado
  company_name: string //Revisado
  first_name: string //Revisado
  second_name: string //Revisado
  first_last_name: string //Revisado
  second_last_name: string //Revisado
  rfc: string //Revisado
  curp: string //Revisado
  voter_key: string //Revisado
  id_gender: number //Revisado
  // gender_name: string // Campo relacion
  id_economic_activity: number //Revisado
  // economic_activity_name: string //Campo relacionado
  id_marital_status: number //Revisado
  // marital_status_name: string //Campo relacionado
  id_national_ocupation: number //Revisado
  // occupation_name: string //Campor relacionado
  education_level_id: number //id_study_level
  // education_level_name: string //Campo relacionado
  id_professional_title: number //Revisado
  // professional_title_name: string //Campo relacionado
  birthdate: Date //Revisado
  constitution_date: Date //Revisado
  last_access_date: Date //Revisado
  created_date: Date //Revisado
  updated_date: Date //Revisado
  deleted_date: Date //Revisado
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
  previous_level_validation_flag: number //Revisado
  email_flag: string //Revisado
  alt_email_flag: string //Revisado
  politically_exposed_person_flag: boolean //Revisado
  stp_verified: boolean //Revisado
  has_secret_question: boolean //Revisado
  has_transactional_nip: boolean //Revisado
}