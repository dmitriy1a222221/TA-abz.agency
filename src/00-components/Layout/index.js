import React from 'react';

import Header from '01-containers/HeaderContainer';
import Footer from '00-components/Layout/components/Footer';

export default ({children}) => (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
)