import { styled } from '@components/theme';
import * as React from 'react';
import { DispatchProp, connect } from 'react-redux';

import { ToasterItem } from './ToasterItem';
import { toasterManagerActions } from './duck/actions';
import { State } from './duck/model';
import { getAllToasters } from './duck/selectors';

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps & DispatchProp;

const Container = styled.div`
  top: 16px;
  position: fixed;
  z-index: ${p => p.theme.zIndex.toaster};
  left: calc(50% - 250px);

  ${p => p.theme.media.xs.andDown} {
    left: 0;
    right: 0;
  }
`;

const Component: React.FunctionComponent<Props> = ({ dispatch, toasters }) => {
  const close = (id: string) => {
    dispatch(toasterManagerActions.close(id));
  };

  return (
    <Container>
      {toasters.map(toaster => (
        <ToasterItem
          key={toaster.id}
          onClose={() => close(toaster.id)}
          {...toaster}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state: State) => ({
  toasters: getAllToasters(state),
});

export const ToasterManager = connect(mapStateToProps)(Component);
