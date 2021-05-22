import React from 'react';
import styled from 'styled-components';
import { AboutUsMember } from '@limbus-mini-apps';

import { BREAKPOINTS } from '../../utils/constants';

import { AboutUsMembersItem } from './AboutUsMembersItem';

const Container = styled.div``;

const MembersList = styled.ul`
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style: none;
  display: grid;
  row-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    column-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: ${BREAKPOINTS.laptop}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  } ;
`;

type AboutUsMembersProps = {
  items: AboutUsMember[];
};

export const AboutUsMembers: React.FC<AboutUsMembersProps> = ({ items }) => {
  return (
    <Container>
      <MembersList>
        {items.map((el) => (
          <AboutUsMembersItem key={el.name} item={el} />
        ))}
      </MembersList>
    </Container>
  );
};
