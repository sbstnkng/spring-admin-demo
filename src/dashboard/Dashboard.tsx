import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Welcome } from './welcome/Welcome';

export const Dashboard: FC = () => (
  <>
    <Welcome />
    <Card>
      <CardHeader title="Welcome to the administration" data-testid="header" />
      <CardContent data-testid="content">
        Lorem ipsum dolor sit amet...
      </CardContent>
    </Card>
  </>
);
