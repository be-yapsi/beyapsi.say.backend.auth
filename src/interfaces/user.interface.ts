export interface User {
  id: string //Revisado
  id_user_type: number //Revisado
  user_type_name: string //Campo relacionado
  id_user_status: number //Revisado
  user_status_name: string //Campo relacionado
  id_legal_person: number //Revisado
  legal_personality_name: string //Campo relacionado
  id_country: number //Revisado
  country_name: string //Campo relacionado
  id_state: number //Revisado
  state_name: string //Campo relacionado
  id_municipality: number //Revisado
  municipality_name: string //Campo relacionado
  id_city: number //Revisado
  city_name: string //Campo relacionado
  id_country_birth: number //Revisado
  birth_country_name: string //Campo relacionado
  id_city_birth: number //Revisado
  city_birth_name: string //Campo relacionado
  id_origin: number //Revisado
  origin_name: string //Campo relacionado
  id_nationality: number //Revisado
  nationality_name: string //Campo relcionado
  id_profession: number //Revisado
  profession_name: string //Campo relacionado
  company_name: string //Revisado
  first_name: string //Revisado
  second_name: string //Revisado
  first_last_name: string //Revisado
  second_last_name: string //Revisado
  rfc: string //Revisado
  curp: string //Revisado
  voter_key: string //Revisado
  id_gender: number //Revisado
  gender_name: string // Campo relacion
  id_economic_activity: number //Revisado
  economic_activity_name: string //Campo relacionado
  id_marital_status: number //Revisado
  marital_status_name: string //Campo relacionado
  id_national_ocupation: number //Revisado
  occupation_name: string //Campor relacionado
  education_level_id: number //id_study_level
  education_level_name: string //Campo relacionado
  id_professional_title: number //Revisado
  professional_title_name: string //Campo relacionado
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