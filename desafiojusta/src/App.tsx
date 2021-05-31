import React from 'react';
import Input from './Components/Input';
import DataProvider from './Provider/Context';
import GlobalStyles from './Styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <DataProvider>
      <GlobalStyles />
      <Input />
    </DataProvider>
  );
}

export default App;