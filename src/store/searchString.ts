import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchStringState {
  searchString: string;
}

const initialState: ISearchStringState = {
  searchString: '',
};

const searchSlice = createSlice({
  name: 'searchString',
  initialState,
  reducers: {
    setSearchString: (
      state: ISearchStringState,
      action: PayloadAction<string>
    ) => {
      const searchString = action.payload;
      return { ...state, searchString };
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
