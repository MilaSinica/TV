import { useEffect, useState } from 'react';
import { generatePath, useLocation } from 'react-router-dom';

import { fetchAllPrograms, selectProgram } from '../../store';
import { selectLoading, selectError, selectPrograms } from '../../store/selectors';

import { CarouselItem, ProgramType, Program } from '../../definitions/types';
import { ROUTES } from '../../definitions/constants';
import { useAppDispatch, useAppSelector } from '../../definitions/hooks';

import { HomePageView } from './Home.view';

const getCarouselItems = (programs: Program[], filter?: ProgramType): CarouselItem[] => {
  const filteredPrograms = filter ? programs.filter(program => program.type === filter) : programs;
  return filteredPrograms.map((program, index): CarouselItem => (
    {
      title: program.title,
      imageUrl: program.image,
      link: `${generatePath(ROUTES.program.path, {
        programId: program.id,
      })}`,
      id: index
    }
  ));
};

export const HomePageContainer = ({ programFilter }: { programFilter?: ProgramType }) => {
  const [programList, setProgramList] = useState<CarouselItem[]>([]);

  const dispatch = useAppDispatch();
  const location = useLocation();

  const isLoadingPrograms = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const programs = useAppSelector(selectPrograms);

  useEffect(() => {
    if (!programs.length) {
      dispatch(fetchAllPrograms());
    }
  }, [dispatch]);

  const handleSelectProgram = (id: number) => {
    dispatch(selectProgram(id));
  };

  useEffect(() => {
    setProgramList(getCarouselItems(programs, programFilter));
  }, [programFilter, programs])

  return <HomePageView
    error={error}
    programList={programList}
    path={location.pathname}
    isLoadingPrograms={isLoadingPrograms}
    hasFilter={Boolean(programFilter)}
    onSelectProgram={handleSelectProgram}
  />;
};
