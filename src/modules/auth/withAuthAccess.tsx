import { Optional } from '@components/Helpers/Optional';
import { routePath } from '@modules/routes/duck/actions';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { State } from '../../redux/reducer';

import { isAuthLoading, isUserLoggedIn } from './duck/selectors';

const withAuthAccess = (ComponentToRender: React.ComponentType<any>) => {
  type Props = ReturnType<typeof mapStateToProps>;

  const Component: React.FunctionComponent<Props> = ({
    isLoggedIn,
    authLoading,
  }) => {
    return (
      <React.Fragment>
        <Optional
          renderIf={!authLoading && isLoggedIn}
          component={() => <ComponentToRender />}
        />
        <Optional
          renderIf={!authLoading && !isLoggedIn}
          component={() => <Redirect to={routePath.login} />}
        />
      </React.Fragment>
    );
  };

  const mapStateToProps = (state: State) => ({
    isLoggedIn: isUserLoggedIn(state),
    authLoading: isAuthLoading(state),
  });

  return connect(mapStateToProps)(Component);
};

export { withAuthAccess };
