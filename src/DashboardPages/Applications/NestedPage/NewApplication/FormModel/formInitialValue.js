import * as Yup from 'yup';

const model = {
  firstname: {
    name: 'firstname',
    requiredErrorMsg: 'The firstname field is required.',
  },
  lastname: {
    name: 'lastname',
    requiredErrorMsg: 'The last name field is required.',
  },
  email: {
    name: 'email',
    requiredErrorMsg: 'The email field is required.',
  },
  phone: {
    name: 'phone',
    requiredErrorMsg: 'The phone field is required.',
  },
  address: {
    name: 'address',
    requiredErrorMsg: 'The address field is required.',
  },
  country: {
    name: 'country',
    requiredErrorMsg: 'The country field is required.',
  },
  state: {
    name: 'state',
    requiredErrorMsg: 'The state field is required.',
  },
  means_of_identification: {
    name: 'means_of_identification',
    requiredErrorMsg: 'The means of identification field is required.',
  },
  id_number: {
    name: 'id_number',
    requiredErrorMsg: 'The ID number field is required.',
  },
  amount_needed: {
    name: 'amount_needed',
    requiredErrorMsg: 'The amoount needed field is required.',
  },
  application_reason: {
    name: 'application_reason',
    requiredErrorMsg: 'The application reason field is required.',
  },
  application_reason_name: {
    name: 'application_reason_name',
    requiredErrorMsg: 'The application reason name field is required.',
  },
  application_reason_type: {
    name: 'application_reason_type',
    requiredErrorMsg: 'The application reason type field is required.',
  },
  bank_account_number: {
    name: 'bank_account_number',
    requiredErrorMsg: 'The bank account number field is required.',
  },
  bank_name: {
    name: 'bank_name',
    requiredErrorMsg: 'The bank name field is required.',
  },
  previous_business_name: {
    name: 'previous_business_name',
    requiredErrorMsg: 'The previous business name field is required.',
  },
  previous_business_details: {
    name: 'previous_business_details',
    requiredErrorMsg: 'The previous business details field is required.',
  },
  funding_reason: {
    name: 'funding_reason',
    requiredErrorMsg: 'The funding reason field is required.',
  },
  business_plan: {
    name: 'business_plan',
    requiredErrorMsg: 'The business plan field is required.',
  },
  passport: {
    name: 'passport',
    requiredErrorMsg: 'The passport field is required.',
  },
  proof_of_address: {
    name: 'proof_of_address',
    requiredErrorMsg: 'The proof of address field is required.',
  },
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const {
  firstname,
  lastname,
  email,
  phone,
  address,
  country,
  state,
  means_of_identification,
  id_number,
  amount_needed,
  bank_account_number,
  bank_name,
  previous_business_name,
  previous_business_details,
  funding_reason,
  business_plan,
  passport,
  proof_of_address,
} = model;

export const formInitialValues = {
  [firstname.name]: '',
  [lastname.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [address.name]: '',
  [country.name]: '',
  [state.name]: '',
  [means_of_identification.name]: '',
  [id_number.name]: '',
  [amount_needed.name]: '',
  [bank_account_number.name]: '',
  [bank_name.name]: '',
  [previous_business_name.name]: '',
  [previous_business_details.name]: '',
  [funding_reason.name]: '',
  [business_plan.name]: '',
  [passport.name]: '',
  [proof_of_address.name]: '',
  reason: '',
  business_type: '',
  any_previous_business: '',
  acceptTerms: false,
};

export const validationSchema = function (values) {
  return Yup.object().shape({
    [firstname.name]: Yup.string().required('Firstname is required'),
    [lastname.name]: Yup.string().required('Last Name is required'),
    [email.name]: Yup.string().required('Email is required').email('Email is invalid'),
    [phone.name]: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    business_type: Yup.string().required('Business type is required'),
    any_previous_business: Yup.string().required('Field is required'),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [means_of_identification.name]: Yup.string().required(`${means_of_identification.requiredErrorMsg}`),
    [id_number.name]: Yup.string().required(`${id_number.requiredErrorMsg}`),
    [amount_needed.name]: Yup.string().required(`${amount_needed.requiredErrorMsg}`),
    [bank_account_number.name]: Yup.string().required(`${bank_account_number.requiredErrorMsg}`),
    [bank_name.name]: Yup.string().required(`${bank_name.requiredErrorMsg}`),
    [previous_business_name.name]: Yup.string().required(`Business name is required`),
    // [previous_business_details.name]: Yup.string().required(`${previous_business_details.requiredErrorMsg}`),
    [funding_reason.name]: Yup.string().required(`${funding_reason.requiredErrorMsg}`),
    [business_plan.name]: Yup.string().required(`${business_plan.requiredErrorMsg}`),
    [passport.name]: Yup.string().required(`${passport.requiredErrorMsg}`),
    [proof_of_address.name]: Yup.string().required(`${proof_of_address.requiredErrorMsg}`),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
};

export const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

export const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};
