import { Card, CardContent, CardHeader } from '@material-ui/core';

export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" data-testid="header" />
    <CardContent data-testid="content">
      Lorem ipsum dolor sit amet...
    </CardContent>
  </Card>
);
