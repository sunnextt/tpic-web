import tredjkAuthApi from './api.instance';

const getAllApplication = async () => {
  const response = await tredjkAuthApi.get('application');
  return response.data;
};

const getApplicationById = async (id) => {
  const response = await tredjkAuthApi.get(`application/${id}`);
  return response.data;
};
const submitApplicationForm = async (
  application_fees,
  any_previous_business,
  address,
  amount_needed,
  bank_account_number,
  bank_name,
  business_plan,
  country,
  email,
  firstname,
  funding_reason,
  id_number,
  lastname,
  means_of_identification,
  passport,
  phone,
  previous_business_details,
  previous_business_name,
  proof_of_address,
  state,
  guardian_fullname,
  guardian_email,
  guardian_phone,
  guardian_address,
  application_reason,
) => {
  let formData = new FormData();
  formData.append('application_fees', application_fees);
  formData.append('address', address);
  formData.append('amount_needed', amount_needed);
  formData.append('bank_account_number', bank_account_number);
  formData.append('business_plan', business_plan);
  formData.append('bank_name', bank_name);
  formData.append('country', country);
  formData.append('email', email);
  formData.append('firstname', firstname);
  formData.append('funding_reason', funding_reason);
  formData.append('id_number', id_number);
  formData.append('lastname', lastname);
  formData.append('guardian_fullname', guardian_fullname);
  formData.append('guardian_email', guardian_email);
  formData.append('phone', phone);
  formData.append('guardian_phone', guardian_phone);
  formData.append('guardian_address', guardian_address);
  formData.append('previous_business_details', previous_business_details);
  formData.append('previous_business_name', previous_business_name);
  formData.append('state', state);
  formData.append('application_reason', application_reason);
  formData.append('application_reason[reason]', application_reason.reason);
  formData.append('application_reason[name]', application_reason.name);
  formData.append('application_reason[type]', application_reason.type);
  formData.append('means_of_identification', means_of_identification, means_of_identification.name);
  formData.append('business_plan', business_plan, means_of_identification.name);
  formData.append('passport', passport, means_of_identification.name);
  formData.append('proof_of_address', proof_of_address, means_of_identification.name);

  const response = await tredjkAuthApi.post(`application/create`, formData);
  return response.data;
};

const getOneApplicationDocumentById = async (id) => {
  const response = await tredjkAuthApi.get(`application/document/${id}`);
  return response.data;
};

const getUserProfile = async () => {
  const response = await tredjkAuthApi.get(`profile`);
  return response.data;
};
const updateUserProfile = async (first_name, last_name, email, phone_number, password, password_confirmation) => {
  const response = await tredjkAuthApi.post(`profile/update`, {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    password_confirmation,
  });
  return response.data;
};

const applicationService = {
  getAllApplication,
  getApplicationById,
  submitApplicationForm,
  getOneApplicationDocumentById,
  updateUserProfile,
  getUserProfile,
};

export default applicationService;
