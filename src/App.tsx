import React from 'react';
import TodoList from './components/TodoList';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '2rem',
    textAlign: 'center',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4">Todo List</Typography>
      <TodoList />
    </Container>
  );
};

export default App;
