import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import applicationService from 'services/user.service';

export const getApplicationById = createAsyncThunk('users/application', async ({ id }, { rejectWithValue }) => {
  try {
    const response = await applicationService.getApplicationById({ id });
    return response;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
// eslint-disable-next-line no-empty-pattern
export const getAllApplication = createAsyncThunk('users/allApplication', async ({ id }, { rejectWithValue }) => {
  try {
    const response = await applicationService.getAllApplication();
    return response;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
export const createApplication = createAsyncThunk(
  'users/createApplication',
  async (
    {
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
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await applicationService.submitApplicationForm(
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
      return response;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  application: null,
  userapplication: {},
  userAllapplication: {},
  createapp: {},
  error: null,
};

const createApplicationSlice = createSlice({
  name: 'Application',
  initialState: initialState,
  reducers: {
    createApplication: (state, action) => {
      state.application = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createApplication.fulfilled, (state, { payload }) => {
      state.createapp = payload;
    });
    builder.addCase(createApplication.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getApplicationById.fulfilled, (state, { payload }) => {
      state.userapplication = payload;
    });
    builder.addCase(getApplicationById.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getAllApplication.fulfilled, (state, { payload }) => {
      state.userAllapplication = payload;
    });
    builder.addCase(getAllApplication.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

const { reducer } = createApplicationSlice;

export default reducer;