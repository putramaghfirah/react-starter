import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header>Hello Worlds</Header>
    </React.Fragment>
  );
}

const Header = styled.h1``;
