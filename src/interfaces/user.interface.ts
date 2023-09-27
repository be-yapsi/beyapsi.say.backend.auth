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
  taxpayer_identification_number: string
  official_identification_number: string
  personal_message: string
  gender_id: number
  gender_name: string
  economic_activity_id: number
  economic_activity_name: string
  public_position_id: number
  public_position_name: string
  marital_status_id: number
  marital_status_name: string
  marital_regime_id: number
  marital_regime_name: string
  occupation_id: number
  occupation_name: string
  education_level_id: number
  education_level_name: string
  professional_title_id: number
  professional_title_name: string
  birthdate: string
  establishment_date: string
  last_access_date: string
  registration_date: string
  modification_date: string
  discharge_date: string
  picture: string
  account_number: string
  active_payroll_module: boolean
  active_stamp_payroll_module: boolean
  active_api_keys: boolean
  permission_to_operate: boolean
  blacklist_verified: boolean
  compliance_officer_reviewed: boolean
  transactional_profile_completed: boolean
  personal_information_completed: boolean
  general_information_completed: boolean
  home_address_registered: boolean
  foreign_address_registered: boolean
  digital_documentation_level_2_completed: boolean
  digital_documentation_level_3_completed: boolean
  beneficiaries_registered: boolean
  internal_control_review: boolean
  signed_contract: boolean
  terms_conditions_accepted: boolean
  privacy_policy_accepted: boolean
  registration_sequence_control: number
  email: string
  alternate_email: string
  politically_exposed_person: boolean
  stp_verified: boolean
  has_secret_question: boolean
  has_transactional_nip: boolean
  user_level: number
}