import React, { Suspense } from 'react'
import { Header } from './components/header';
import { Container } from './components/container';
import PhoneForm from './components/phone-form';
import PhoneList from './components/phone-list';

function App() {
  return (
      <Suspense fallback={<h1>Bekleyin</h1>}>
        <Header Title="React Phone Book"/>
        <Container Title="Phone Book">
          <PhoneForm />
          <PhoneList />
        </Container>
      </Suspense>
  );
}

export default App;