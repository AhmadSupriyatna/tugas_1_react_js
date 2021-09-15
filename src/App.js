import React from 'react'
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';

function Header() {
  return (
    <div>
        <h3>Ini Halaman untuk Header</h3>
    </div>
  )
}
function Footer() {
  return (
    <div>
        <h3>Ini Halaman untuk Footer</h3>
    </div>
  )
}


function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      

      <Footer />
    </div>
  );
}

export default App;
