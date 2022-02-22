import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import applicationService from 'services/user.service';

export const getApplicationById = createAsyncThunk('users/application', async ({ id }, { rejectWithValue }) => {
  try {
    const response = await applicationService.getApplicationById(id);
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

export const getOneApplicationDocumentById = createAsyncThunk(
  'users/applicationDocument',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await applicationService.getOneApplicationDocumentById(id);
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
export const getUserProfile = createAsyncThunk('users/UserProfile', async ({ id }, { rejectWithValue }) => {
  try {
    const response = await applicationService.getUserProfile();
    return response;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
export const updateUserProfile = createAsyncThunk(
  'users/updateUserProfile',
  async ({ first_name, last_name, email, phone_number, password, password_confirmation }, { rejectWithValue }) => {
    try {
      const response = await applicationService.updateUserProfile(
        first_name,
        last_name,
        email,
        phone_number,
        password,
        password_confirmation,
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

export const createApplication = createAsyncThunk(
  'users/createApplication',
  async (
    {
      application_fees,
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
      any_previous_business,
      application_reason,
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await applicationService.submitApplicationForm(
        application_fees,
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
        any_previous_business,
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
  SingleApplication: {},
  userAllapplication: {},
  createapp: {},
  userDocument: {},
  updateInfo: {},
  userProfile: {},
  error: null,
};

const createApplicationSlice = createSlice({
  name: 'Application',
  initialState: initialState,
  reducers: {},
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
      state.SingleApplication = payload;
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
    builder.addCase(getOneApplicationDocumentById.fulfilled, (state, { payload }) => {
      state.userDocument = payload;
    });
    builder.addCase(getOneApplicationDocumentById.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.userProfile = payload;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
      state.updateInfo = payload;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
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
