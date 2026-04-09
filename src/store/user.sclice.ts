import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  currentUser: string | null;
}

const initialState: UserState = {
  currentUser: (() => {
    try {
      const raw = localStorage.getItem('currentUser');
      return raw ? (JSON.parse(raw)) : null;
    } catch {
      return null;
    }
  })(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string | null>) => {
      state.currentUser = action.payload;
      // keep localStorage in sync
      if (action.payload) {
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      } else {
        localStorage.removeItem('currentUser');
      }
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
