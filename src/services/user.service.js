import { getfeesAmount } from 'utils/getFeesAmount';
import tredjkAuthApi from './api.instance';

const getAllApplication = async () => {
  const response = await tredjkAuthApi.get('application');
  return response.data;
};
const getDraftFormApplication = async () => {
  const response = await tredjkAuthApi.get('application/draft');
  console.log(response.data);
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
  second_means_of_identification,
  application_reason,
) => {
  let form = new FormData();
  form.append('firstname', firstname);
  form.append('lastname', lastname);
  form.append('email', email);
  form.append('phone', phone);
  form.append('address', address);
  form.append('country', country);
  form.append('state', state);
  form.append('means_of_identification', means_of_identification);
  form.append('id_number', id_number);
  form.append('amount_needed', amount_needed);
  form.append('application_reason[reason]', application_reason.reason);
  form.append('application_reason[name]', application_reason.name);
  form.append('application_reason[type]', application_reason.type);
  form.append('bank_account_number', bank_account_number);
  form.append('bank_name', bank_name);
  form.append('previous_business_name', previous_business_name);
  form.append('previous_business_details', previous_business_details);
  form.append('funding_reason', funding_reason);
  form.append('business_plan', business_plan);
  form.append('passport', passport);
  form.append('second_means_of_identification', second_means_of_identification);
  form.append('proof_of_address', proof_of_address);
  form.append('application_fees', application_fees);
  form.append('guardian_fullname', guardian_fullname);
  form.append('guardian_email', guardian_email);
  form.append('guardian_phone', guardian_phone);
  form.append('guardian_address', guardian_address);

  const response = await tredjkAuthApi.post(`application/create`, form);
  console.log(response);
  return response.data;
};
const saveApplicationFormDraft = async (DraftFieldData) => {
  console.log(DraftFieldData);

  let formData = new FormData();
  formData.append('application_fees', getfeesAmount(DraftFieldData.amount_needed));
  formData.append('address', DraftFieldData.address);
  formData.append('amount_needed', DraftFieldData.amount_needed);
  formData.append('bank_account_number', DraftFieldData.bank_account_number);
  // formData.append('business_plan', DraftFieldData.business_plan);
  formData.append('bank_name', DraftFieldData.bank_name);
  formData.append('country', DraftFieldData.country);
  formData.append('email', DraftFieldData.email);
  formData.append('firstname', DraftFieldData.firstname);
  formData.append('funding_reason', DraftFieldData.funding_reason);
  formData.append('id_number', DraftFieldData.id_number);
  formData.append('lastname', DraftFieldData.lastname);
  formData.append('guardian_fullname', DraftFieldData.guardian_fullname);
  formData.append('guardian_email', DraftFieldData.guardian_email);
  formData.append('phone', DraftFieldData.phone);
  formData.append('guardian_phone', DraftFieldData.guardian_phone);
  formData.append('guardian_address', DraftFieldData.guardian_address);
  formData.append('previous_business_details', DraftFieldData.previous_business_details);
  formData.append('previous_business_name', DraftFieldData.previous_business_name);
  formData.append('state', DraftFieldData.state);
  formData.append('application_reason', DraftFieldData.reason);
  formData.append('application_reason[reason]', DraftFieldData.reason);
  formData.append('application_reason[name]', DraftFieldData.previous_business_name);
  formData.append('application_reason[type]', DraftFieldData.appResonType);
  formData.append('means_of_identification', DraftFieldData.means_of_identification);
  formData.append('business_plan', DraftFieldData.business_plan);
  formData.append('passport', DraftFieldData.passport);
  formData.append('second_means_of_identification', DraftFieldData.second_means_of_identification);
  formData.append('proof_of_address', DraftFieldData.proof_of_address);

  const response = await tredjkAuthApi.post(`application/save/draft`, formData);
  console.log(response);
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
  saveApplicationFormDraft,
  getDraftFormApplication,
};

export default applicationService;
