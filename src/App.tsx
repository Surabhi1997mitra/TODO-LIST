import React from 'react';
import TodoList from './components/TodoList';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" style={{ padding: '1rem 0' }}>What's the Plan for Today!</Typography>
      <TodoList />
    </Container>
  );
};

export default App;
