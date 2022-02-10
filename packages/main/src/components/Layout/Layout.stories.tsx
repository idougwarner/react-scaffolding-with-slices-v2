import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PublicLayout from './PublicLayout/PublicLayout';
import PrivateLayout from './PrivateLayout/PrivateLayout';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout',
  component: PublicLayout,
} as ComponentMeta<typeof PublicLayout>;

export const PublicAppLayout: ComponentStory<typeof PublicLayout> = () => (
  <PublicLayout>
    {' '}
    <div />
  </PublicLayout>
);

export const PrivateAppLayout: ComponentStory<typeof PrivateLayout> = () => (
  <PrivateLayout email="shahid@primelab.io">
    <div />
  </PrivateLayout>
);
