import { FunctionComponent } from 'react';
import { useRouteError } from "react-router-dom";

import { getError } from '../../definitions/utils';

import Layout from '../../components/Layout';
import Error from '../../components/Error';

const Header = () => (
  <Layout.Header>
    <Layout.Heading>Sorry, the page you were looking for could not be found!</Layout.Heading>
  </Layout.Header>
);

export const ErrorPageView: FunctionComponent = ({
}) => {
  const error = useRouteError();
  console.log(error);
  return (
    <Layout header={Header}>
      <Layout.Section>
        <Error>{getError(error)}</Error>
      </Layout.Section>
    </Layout >
  );
};
