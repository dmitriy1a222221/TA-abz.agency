import React from 'react';

import Layout from '00-components/Layout';
import TABlock from '00-components/Home/components/TABlock';
import AcquaintedBlock from '00-components/Home/components/AcquaintedBlock';
import TechBlock from '00-components/Home/components/TechBlock';
import ReqBlock from '00-components/Home/components/ReqBlock';
import UsersBlockContainer from '01-containers/HomeContainer/components/UsersBlockContainer';
import RegisterBlockContainer from '01-containers/HomeContainer/components/RegisterBlockContainer';

class Home extends React.Component {
  render() {
    return (
        <Layout>
            <TABlock />
            <AcquaintedBlock />
            <TechBlock />
            <ReqBlock />
            <UsersBlockContainer />
            <RegisterBlockContainer />
        </Layout>
    )
  }
}

export default Home;
