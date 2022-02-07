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
  application_reason,
) => {
  console.log(
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
    application_reason,
  );
  const response = await tredjkAuthApi.post(`application/create`, {
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
    application_reason,
  });
  return response.data;
};

const applicationService = {
  getAllApplication,
  getApplicationById,
  submitApplicationForm,
};

export default applicationService;
