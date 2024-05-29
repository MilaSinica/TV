import { RootState } from '.';
import { Program } from '../definitions/types';

export const selectLoading = (state: RootState) => state.programs.loading;
export const selectError = (state: RootState) => state.programs.error;
export const selectPrograms = (state: RootState) => state.programs.programs;
export const selectSelectedProgram = (state: RootState) =>
    state.programs.programs.find((program: Program) => program.id === state.programs.selectedProgramId);