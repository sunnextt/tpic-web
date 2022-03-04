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

export const formInitialValues = function (values) {
  const formInitialValues = {
    [firstname.name]: values !== null && values.firstname !== null ? values.firstname : '',
    [lastname.name]: values !== null && values.lastname !== null ? values.lastname : '',
    [email.name]: values !== null && values.email !== null ? values.email : '',
    [phone.name]: values !== null && values.phone !== null ? values.phone : '',
    [address.name]: values !== null && values.address !== null ? values.address : '',
    [country.name]: values !== null && values.country !== null ? values.country : '',
    [state.name]: values !== null && values.state !== null ? values.state : '',
    [means_of_identification.name]: '',
    [id_number.name]: values !== null && values.id_number !== null ? values.id_number : '',
    [amount_needed.name]: values !== null && values.amount_needed !== null ? values.amount_needed : '',
    [bank_account_number.name]:
      values !== null && values.bank_account_number !== null ? values.bank_account_number : '',
    [bank_name.name]: values !== null && values.bank_name !== null ? values.bank_name : '',
    [previous_business_name.name]:
      values !== null && values.previous_business_name !== null ? values.previous_business_name : '',
    [previous_business_details.name]:
      values !== null && values.previous_business_details !== null ? values.previous_business_details : '',
    [funding_reason.name]: values !== null && values.funding_reason !== null ? values.funding_reason : '',
    [business_plan.name]: '',
    [passport.name]: '',
    second_means_of_identification:
      values !== null && values.second_means_of_identification !== null ? values.second_means_of_identification : '',
    [proof_of_address.name]: '',
    reason: values !== null && values.reason !== null ? values.reason : '',
    appResonType: values !== null && values.appResonType !== null ? values.appResonType : '',
    is_previous_business: values !== null && values.is_previous_business !== null ? values.is_previous_business : '',
    guardian_fullname: values !== null && values.guardian_fullname !== null ? values.guardian_fullname : '',
    guardian_email: values !== null && values.guardian_email !== null ? values.guardian_email : '',
    guardian_phone: values !== null && values.guardian_phone !== null ? values.guardian_phone : '',
    guardian_address: values !== null && values.guardian_address !== null ? values.guardian_address : '',
    application_fees: values !== null && values.application_fees !== null ? values.application_fees : '',
    acceptTerms: false,
  };
  return formInitialValues;
};

export const validationSchema = function () {
  return Yup.object().shape({
    [firstname.name]: Yup.string().required('Firstname is required').nullable(),
    [lastname.name]: Yup.string().required('Last Name is required').nullable(),
    [email.name]: Yup.string().required('Email is required').email('Email is invalid').nullable(),
    [phone.name]: Yup.string().matches(phoneRegExp, 'Phone number is not valid').nullable(),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`).nullable(),
    appResonType: Yup.string().required('Application reason type is required').nullable(),
    is_previous_business: Yup.string().required('Field is required').nullable(),
    reason: Yup.string().required('Field is required').nullable(),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`).nullable(),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`).nullable(),
    [means_of_identification.name]: Yup.string().required(`${means_of_identification.requiredErrorMsg}`).nullable(),
    [id_number.name]: Yup.string().required(`${id_number.requiredErrorMsg}`).nullable(),
    [amount_needed.name]: Yup.string().required(`${amount_needed.requiredErrorMsg}`).nullable(),
    [bank_account_number.name]: Yup.string().required(`${bank_account_number.requiredErrorMsg}`).nullable(),
    [bank_name.name]: Yup.string().required(`${bank_name.requiredErrorMsg}`).nullable(),
    [previous_business_name.name]: Yup.string().required(`Business name is required`).nullable(),
    [funding_reason.name]: Yup.string().required(`${funding_reason.requiredErrorMsg}`).nullable(),
    [business_plan.name]: Yup.string().required(`${business_plan.requiredErrorMsg}`).nullable(),
    [passport.name]: Yup.string().required(`${passport.requiredErrorMsg}`).nullable(),
    [proof_of_address.name]: Yup.string().required(`${proof_of_address.requiredErrorMsg}`).nullable(),
    second_means_of_identification: Yup.string().required('Means of identification is required').nullable(),
    guardian_fullname: Yup.string().required('Field is required').nullable(),
    guardian_email: Yup.string().required('Email is required').email('Email is invalid').nullable(),
    guardian_phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').nullable(),
    guardian_address: Yup.string().required('Field is required').nullable(),
    // previous_business_details: Yup.string().required('Field is required').nullable(),
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
