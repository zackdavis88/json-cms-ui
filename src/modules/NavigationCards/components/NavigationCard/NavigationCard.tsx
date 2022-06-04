import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CardHeader, CardIcon, CardButton, CardDescription } from './components';

interface NavigationCardProps {
  href: string;
  name: string;
  icon: IconDefinition;
  description: string;
}

const NavigationCard = ({ href, icon, name, description }: NavigationCardProps) => {
  return (
    <CardButton href={href}>
      <CardHeader name={name} />
      <CardIcon icon={icon} />
      <CardDescription description={description} />
    </CardButton>
  );
};

export default NavigationCard;
