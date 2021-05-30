import React from 'react';
import Input from './Components/Input';
import CardDetails from './Components/CardDetails';
import DataProvider from './Provider/Context';
import GlobalStyles from './Styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <DataProvider>
      <GlobalStyles />
      <Input />
      <CardDetails />
    </DataProvider>
  );
}

export default App;
