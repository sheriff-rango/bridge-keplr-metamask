import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AccountsType = {
  keplr: any | null;
  metamask: any | null;
};

const initialState: AccountsType = {
  keplr: null,
  metamask: null,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<["keplr" | "metamask", any]>) => {
      const [key, data] = action.payload;
      state[key] = data;
    },
    clearAccounts: (state) => {
      state = initialState;
    },
  },
});

export const { setAccount, clearAccounts } = accountsSlice.actions;

export default accountsSlice.reducer;
