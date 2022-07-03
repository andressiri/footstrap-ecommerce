import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';

// Get state from localStorage
const user = JSON.parse(localStorage.getItem('user')) ||
  JSON.parse(sessionStorage.getItem('user'));
const remember = JSON.parse(localStorage.getItem('remember')) ||
  JSON.parse(sessionStorage.getItem('remember'));
if (user) {
  localStorage.setItem('user', JSON.stringify(user));
  sessionStorage.setItem('user', JSON.stringify(user));
};
if (remember) {
  localStorage.setItem('remember', true);
  sessionStorage.setItem('remember', true);
};

const initialState = {
  user: user || null,
  remember: remember || null,
  usersData: '',
  userData: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  temporaryToken: null,
  userVerificationRequired: false,
  passwordChangeRequired: false,
  accountDeleteRequired: false,
  codeSent: false
};

const getErrorMessage = (error) => {
  const message =
    (error.response && error.response.data && error.response.data.message) ||
     error.message ||
     error.toString();
  return message;
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await axiosInstance('/users/register', user, 'POST');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      return await axiosInstance('/users/login', user, 'POST');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// User logout
export const logout = createAsyncThunk(
  'auth/logout',
  async (thunkAPI) => {
    await axiosInstance('/users/logout', {}, 'DELETE'); ;
  }
);

// Send verification code
export const sendCode = createAsyncThunk('auth/sendCode',
  async (obj, thunkAPI) => {
    try {
      let endpoint = 'verification';
      if (!obj.user) endpoint = 'forgot-password';
      return await axiosInstance(`/users/${endpoint}`, obj.values, 'POST');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    };
  }
);

// Check verification code
export const checkCode = createAsyncThunk('auth/checkCode',
  async (values, thunkAPI) => {
    try {
      return await axiosInstance(`/users/verification/${values.code}`, {}, 'PUT');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    };
  }
);

// Change user password
export const changePassword = createAsyncThunk('auth/changePassword',
  async (values, thunkAPI) => {
    try {
      return await axiosInstance('/users/password', values, 'PUT');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    };
  }
);

// Change user name
export const changeName = createAsyncThunk('auth/changeName',
  async (values, thunkAPI) => {
    try {
      return await axiosInstance(`/users/name/${values.name}`, {}, 'PUT');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    };
  }
);

// Delete Account
export const deleteAccount = createAsyncThunk('auth/deleteAccount',
  async (obj, thunkAPI) => {
    try {
      const data = await axiosInstance(`/users/delete/${obj.user.id}`, { password: obj.password }, 'DELETE'); ;
      return thunkAPI.fulfillWithValue(data.message);
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    };
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
    resetAuthReq: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    setRemember: (state) => {
      state.remember = true;
      localStorage.setItem('remember', true);
      sessionStorage.setItem('remember', true);
    },
    resetToken: (state) => {
      state.temporaryToken = null;
      sessionStorage.removeItem('temporaryToken');
    },
    requireVerification: (state) => {
      state.passwordChangeRequired = false;
      state.accountDeleteRequired = false;
      state.userVerificationRequired = true;
    },
    changeVerificationStatus: (state) => {
      state.user = {
        ...user,
        verified: true
      };
    },
    requirePasswordChange: (state) => {
      state.userVerificationRequired = false;
      state.accountDeleteRequired = false;
      state.passwordChangeRequired = true;
    },
    requireAccountDelete: (state) => {
      state.userVerificationRequired = false;
      state.passwordChangeRequired = false;
      state.accountDeleteRequired = true;
    }
  },
  extraReducers: (builder) => {
    builder
    // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
        localStorage.setItem('user', JSON.stringify(action.payload.userData));
        sessionStorage.setItem('user', JSON.stringify(action.payload.userData));
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
        localStorage.setItem('user', JSON.stringify(action.payload.userData));
        sessionStorage.setItem('user', JSON.stringify(action.payload.userData));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.remember = false;
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        localStorage.removeItem('remember');
        sessionStorage.removeItem('remember');
        sessionStorage.removeItem('temporaryToken');
      })
      // Send verification code
      .addCase(sendCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.codeSent = true;
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Check verification code
      .addCase(checkCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.temporaryToken = action.payload.token;
        sessionStorage.setItem('temporaryToken', JSON.stringify(action.payload.token));
        if (state.user) state.user = { ...state.user, verified: true };
        state.isSuccess = true;
        state.codeSent = false;
      })
      .addCase(checkCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Change password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Change Name
      .addCase(changeName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
        localStorage.setItem('user', JSON.stringify(action.payload.userData));
        sessionStorage.setItem('user', JSON.stringify(action.payload.userData));
        state.message = action.payload.message;
      })
      .addCase(changeName.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Delete account
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const {
  resetAuth,
  resetAuthReq,
  setRemember,
  resetToken,
  requireVerification,
  changeVerificationStatus,
  requirePasswordChange,
  requireAccountDelete
} = authSlice.actions;
export default authSlice.reducer;
