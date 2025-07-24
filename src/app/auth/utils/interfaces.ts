export interface FormAuthInputs {
  email?: string;
  password?: string;
  password_confirmation?: string;
  otp?: string;
  name?: string;
  phone?: string;
  role?: string;
  company?: string;
  linkedin_profile?: string;
  profile_image?: File | string;
  passport_file?: File;
  current_password?: string;
  new_password?: string;
  new_password_confirmation?: string;
  new_email?: string;
}
