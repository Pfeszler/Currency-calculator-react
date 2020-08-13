import React from 'react';
import Container from "./Container"
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock"
import Form from "./Form";
import Table from "./Table";
import Footer from "./Footer";
import { currencies } from './currencies.js'


function App() {

  return (
    <Container>
      <Header />
      <Main>
        <Clock />
        <Form
          currencies={currencies}
        />
        <Table
          currencies={currencies}
        />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
