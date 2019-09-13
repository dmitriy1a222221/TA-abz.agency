import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import * as routerConstants from 'constansts/router/index';
import history from 'router/history';
import { authorization } from 'utils/auth';
import { scrolling } from 'utils/scrolling';
import { stickyBlock } from 'utils/stickyBlock';
import { activeLink } from 'utils/activeLink';

import HomeContainer from '01-containers/HomeContainer';

export default () => {
    useEffect(() => {
        authorization();
        scrolling('nav-link');
        stickyBlock('header');
        activeLink();
    });

    return(
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={routerConstants.ROUTER_PATH}
                    component={HomeContainer}
                />
            </Switch>
        </Router>
    )
};
