import { FunctionComponent } from 'react';

import { Program } from '../../definitions/types';

import Layout from '../../components/Layout';
import Empty from '../../components/Empty';
import Error from '../../components/Error';
import Item from '../../components/ImageItem';

import * as Styled from './Program.styles';

type ProgramPageProps = {
  error: string | null;
  isLoadingPrograms: boolean;
  program?: Program;
};

export const ProgramPageView: FunctionComponent<ProgramPageProps> = ({
  error,
  program,
  isLoadingPrograms,
}) => {

  const getEmptyContent = () => {
    if (error) {
      return (
        <Error>{error}</Error>
      )
    }

    return <Empty>Oops! It looks like we can't find a program you're looking for.</Empty>
  }

  return (
    <Layout>
      {(!program && !isLoadingPrograms) ? (
        <Layout.Section isFluid>
          {getEmptyContent()}
        </Layout.Section>
      ) : (
        <Layout.Section isFluid>
          <Styled.Container>
            {!program ? (
              <Item.LoadingItem />
            ) : (
              <Styled.Wrapper>
                <Item id={program.id.toString()} altText={program.title} imgSrc={program.image} />
                <Styled.Meta>
                  <Layout.Heading>
                    {program.title}
                  </Layout.Heading>
                  <Layout.Subheading>
                    {`${program.rating} | ${program.year} | ${program.genre} | ${program.language}`}
                  </Layout.Subheading>
                  <Layout.Paragraph>{program.description}</Layout.Paragraph>
                </Styled.Meta>
              </Styled.Wrapper>
            )}
          </Styled.Container>
        </Layout.Section>
      )
      }
    </Layout >
  );
};


