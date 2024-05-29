import { configureStore, createAsyncThunk, createSlice, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit';
import { Program } from '../definitions/types';
import { getError } from '../definitions/utils';
import { ProgramService } from '../services/ProgramService';

// Define the initial state
interface ProgramsState {
  programs: Program[];
  loading: boolean;
  error: string | null;
  selectedProgramId: number | null;
}

const initialState: ProgramsState = {
  programs: [],
  loading: false,
  error: null,
  selectedProgramId: null
};

export const fetchAllPrograms = createAsyncThunk('programs/fetchAll', async () => {
  const service = new ProgramService();
  const response: Program[] = await service.fetchPrograms();
  return response;
});

const programsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {
    selectProgram: (state, action: PayloadAction<number>) => {
      state.selectedProgramId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPrograms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPrograms.fulfilled, (state, action: PayloadAction<Program[]>) => {
        state.programs = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = getError(action.error) || 'Failed to fetch programs';
      });
  }
});

export const { selectProgram } = programsSlice.actions;

export const store = configureStore({
  reducer: {
    programs: programsSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
