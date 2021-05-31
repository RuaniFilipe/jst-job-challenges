import React from 'react';
import Home from './Pages/Home';
import DataProvider from './Provider/Context';
import GlobalStyles from './Styles/GlobalStyles';


const App: React.FC = () => {
  return (
    <DataProvider>
      <GlobalStyles />
      <Home />
    </DataProvider>
  );
}

export default App;