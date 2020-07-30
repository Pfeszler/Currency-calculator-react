import React, { useState, useEffect } from 'react';
import Container from "./Container"
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock"
import Form from "./Form";
import Table from "./Table";
import Footer from "./Footer";
import { currencies } from './currencies.js'
 



function App() {

const [date, setDate] = useState(new Date())

useEffect(() => {
  const intervalId=  setInterval(() => {setDate(date => new Date())},  1000);
  return  () => {
    clearInterval(intervalId)
  }
}, []);

  return (
    <Container>
      <Header />
      <Main>
        <Clock date={date}/>
        <Form currencies={currencies} />
        <Table currencies={currencies} />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
