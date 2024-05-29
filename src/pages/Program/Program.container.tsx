import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAllPrograms, selectProgram } from '../../store';
import { selectLoading, selectError, selectSelectedProgram, selectPrograms } from '../../store/selectors';

import { useAppDispatch, useAppSelector } from '../../definitions/hooks';

import { ProgramPageView } from './Program.view';

export const ProgramPageContainer = () => {
  const dispatch = useAppDispatch();
  const { programId } = useParams<{ programId: string }>();

  const isLoadingPrograms = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const selectedProgram = useAppSelector(selectSelectedProgram);
  const programs = useAppSelector(selectPrograms);

  useEffect(() => {
    if (!programs.length) {
      dispatch(fetchAllPrograms());
    }
  }, [dispatch]);

  useEffect(() => {
    if ((programId && !selectedProgram) || (programId && selectedProgram?.id.toString() !== programId)) {
      dispatch(selectProgram(parseInt(programId)));
    }
  }, [dispatch, programId]);

  return <ProgramPageView
    error={error}
    isLoadingPrograms={isLoadingPrograms}
    program={selectedProgram}
  />;
};
