import React from 'react';
import { Header } from './Layout/header';
import { Footer } from './Layout/footer';
import { Main } from './Layout/main';

function App() {
  return (
    <React.Fragment>
      < Header />
      < Main />
      < Footer />
    </React.Fragment>
  );
}

export default App;
