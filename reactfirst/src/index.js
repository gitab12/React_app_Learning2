import React from 'react'
import ReactDOM from "react-dom/client"
import "./style.css";
import Head from  "./Headerpage";
import Footer  from './FooterPage';

import MainContain from './MainContaintPage';

function App()
{
return(

<div className='back-des'>

  <Head/>
 <MainContain/>
  <Footer/>
</div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);








