import { FunctionComponent } from 'react';

import { CarouselItem } from '../../definitions/types';
import { ROUTES } from '../../definitions/constants';

import Layout from '../../components/Layout';
import Empty from '../../components/Empty';
import Error from '../../components/Error';
import Carousel from '../../components/Carousel';
import AnimatedCarousel from '../../components/AnimatedCarousel';

type HomePageProps = {
  error: string | null;
  isLoadingPrograms: boolean;
  programList: CarouselItem[];
  path: string;
  hasFilter: boolean;
  onSelectProgram: (programId: number) => void;
};

export const HomePageView: FunctionComponent<HomePageProps> = ({
  error,
  programList,
  isLoadingPrograms,
  hasFilter,
  path,
  onSelectProgram,
}) => {

  const getEmptyContent = () => {
    if (error) {
      return (
        <Error>{error}</Error>
      )
    }

    if (hasFilter) {
      return <Empty>Oops! It looks like there are no programs available at the moment. Try checking other program categories.</Empty>;
    }

    return <Empty>Oops! It looks like there are no programs available at the moment.</Empty>
  }

  return (
    <Layout>
      {path === ROUTES.animatedCarousel.path ? (
        <Layout.Section isFluid>
          <AnimatedCarousel items={programList} />
        </Layout.Section>
      ) : (!programList.length && !isLoadingPrograms) ? (
        <Layout.Section isFluid>
          {getEmptyContent()}
        </Layout.Section>
      ) : (
        <Layout.Section isFluid>
          <Carousel items={programList} isLoading={isLoadingPrograms} onSelectItem={onSelectProgram} />
        </Layout.Section>
      )
      }
    </Layout >
  );
};
