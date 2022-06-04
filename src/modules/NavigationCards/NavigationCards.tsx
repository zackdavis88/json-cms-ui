import React from 'react';
import { ROUTES } from 'src/constants';
import { NavigationContainer, NavigationCard, NavigationHeader } from './components';
import {
  faCube,
  faMap,
  faCubesStacked,
  faCircleNodes,
} from '@fortawesome/free-solid-svg-icons';

const NavigationCards = () => {
  return (
    <>
      <NavigationHeader />
      <NavigationContainer>
        <NavigationCard
          href={ROUTES.BLUEPRINTS}
          name="Blueprints"
          icon={faMap}
          description="Blueprints define the structure and typings for a Component."
        />
        <NavigationCard
          href={ROUTES.COMPONENTS}
          name="Components"
          icon={faCube}
          description="Components contain the content that will be rendered on a page."
        />
        <NavigationCard
          href={ROUTES.LAYOUTS}
          name="Layouts"
          icon={faCubesStacked}
          description="Layouts contain an ordered list of Components."
        />
        <NavigationCard
          href={ROUTES.FRAGMENTS}
          name="Fragments"
          icon={faCircleNodes}
          description="Fragments contain content that has no predefined structure."
        />
      </NavigationContainer>
    </>
  );
};

export default NavigationCards;
