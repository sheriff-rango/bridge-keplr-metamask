import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BridgeDirectionType } from "../constant/types";

type InputType = {
  asset: any;
  amount: any;
  fee: any;
  direction: BridgeDirectionType | null;
};

const initialState: InputType = {
  asset: null,
  amount: null,
  fee: null,
  direction: null,
};

export const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<InputType>) => {
      const { asset, amount, fee, direction } = action.payload;
      state.asset = asset;
      state.amount = amount;
      state.fee = fee;
      state.direction = direction;
    },
    clearInputs: (state) => {
      state.asset = null;
      state.amount = null;
      state.fee = null;
      state.direction = null;
    },
  },
});

export const { setInput, clearInputs } = inputSlice.actions;

export default inputSlice.reducer;
