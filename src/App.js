import React from 'react';

import Router from "./router";
import Global from "./global";
import HeaderBar from "./Components/header";

function App() {
  return (
   <>
        <Global />
        <HeaderBar /> 
        <Router/>
     </>
  );
}

export default App;
