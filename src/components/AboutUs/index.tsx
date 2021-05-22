import React from 'react';
import styled from 'styled-components';
import { AboutUsMember } from '@limbus-mini-apps';

import { COLORS } from '../../utils/constants';

import { AboutUsMembers } from './AboutUsMembers';

const Container = styled.section``;

const AboutUsHead = styled.div`
  text-align: center;
`;

const AboutUsHeader = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${COLORS.black};
`;

const AboutUsBody = styled.div``;

export const AboutUs: React.FC = () => {
  return (
    <Container>
      <AboutUsHead>
        <AboutUsHeader>Limbus</AboutUsHeader>
      </AboutUsHead>

      <AboutUsBody>
        <AboutUsMembers items={MEMBERS} />
      </AboutUsBody>
    </Container>
  );
};

const MEMBERS: AboutUsMember[] = [
  {
    name: 'Юрий Пысин',
    position: 'Капитан команды, Backend-разработчик',
    description: 'Лютый',
    imageUri: 'https://dota2.ru/img/heroes/pudge/portrait.jpg',
  },
  {
    name: 'Максим Чербаджи',
    position: 'Backend-разработчик',
    description: 'Лютый',
    imageUri: 'https://dota2.ru/img/heroes/pudge/portrait.jpg',
  },
  {
    name: 'Артем Балтынков',
    position: 'Frontend-разработчик',
    description: 'Лютый',
    imageUri: 'https://dota2.ru/img/heroes/pudge/portrait.jpg',
  },
  {
    name: 'Эвита Воронкова',
    position: 'Дизайнер',
    description: 'Женщина',
    imageUri: 'https://dota2.ru/img/heroes/pudge/portrait.jpg',
  },
];
