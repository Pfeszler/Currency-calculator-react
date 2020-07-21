import React, { useState } from 'react';
import Header from "./Header"
import Container from "./Container"
import Form from "./Form"
import Table from "./Table"
import Footer from "./Footer"

const currencies = [
  { id: 0, name: "dolar amerykański", symbol: "USD", buyprice: 3.9384, sellprice: 4.0180 },
  { id: 1, name: "euro", symbol: "EUR", buyprice: 4.4189, sellprice: 4.5081 },
  { id: 2, name: "funt brytyjski", symbol: "GPB", buyprice: 4.9386, sellprice: 5.0384 },
  { id: 3, name: "frank szwajcarski", symbol: "CHF", buyprice: 4.1437, sellprice: 4.2275 },
  { id: 4, name: "korona norweska", symbol: "NOK", buyprice: 0.4113, sellprice: 0.4197 },
  { id: 5, name: "korona czeska", symbol: "CZK", buyprice: 0.1660, sellprice: 0.1694 },
]



function App() {
 const [buy, setBuy] = useState(true)
  return (
    <React.Fragment>
      <Header />
      <Container>
       <Form currencies={currencies} buy={buy} setBuy={setBuy} />
        <Table currencies= {currencies} />
      </Container>
     <Footer />
    </React.Fragment>
  );
}

export default App;
