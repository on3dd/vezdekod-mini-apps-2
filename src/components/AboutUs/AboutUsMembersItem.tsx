import React from 'react';
import styled from 'styled-components';
import { AboutUsMember } from '@limbus-mini-apps';

import { COLORS } from '../../utils/constants';

const Container = styled.div`
  display: grid;
  padding: 1rem;
  column-gap: 1rem;
  grid-auto-flow: row;
  grid-template-columns: 48px 1fr;
  border-radius: 8px;
  background-color: ${COLORS.cloud};
`;

const MemberAvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: auto 0;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`;

const MemberAvatar = styled.img`
  top: 50%;
  left: 50%;
  width: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const MemberInfoContainer = styled.div`
  display: grid;
  row-gap: 0.25rem;
`;

const MemverName = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${COLORS.grayDarken};
`;

const MemberPosition = styled.h6`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${COLORS.gray};
`;

const MemberDescription = styled.span`
  color: ${COLORS.grayLighten};
`;

type AboutUsMembersItemProps = {
  item: AboutUsMember;
};

export const AboutUsMembersItem: React.FC<AboutUsMembersItemProps> = ({ item }) => {
  return (
    <Container>
      <MemberAvatarContainer>
        <MemberAvatar src={item.imageUri} />
      </MemberAvatarContainer>

      <MemberInfoContainer>
        <MemverName>{item.name}</MemverName>

        <MemberPosition>{item.position}</MemberPosition>

        <MemberDescription>{item.description}</MemberDescription>
      </MemberInfoContainer>
    </Container>
  );
};
