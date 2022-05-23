import React from 'react';
function Head()
{ 
 return(
<header className="head1">
  <nav className="nav" >
  <img src={require("../src/image/picture.png")} alt="Logo"  className="image-logo" />
<h1 className="Headername">React Course-Project-1</h1>
</nav>
</header>

  )
}

export default Head

