import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './'

const stories = storiesOf('Components', module);

stories.add(
  'Button',
  () => <Button>test</Button>
);