import React from 'react';
import { bool, shape, string } from 'prop-types';

import { BodyText } from 'components/Typography';
import * as Icons from 'components/Icons';

const propTypes = {
  item: shape({
    name: string
  }),
  isSortedBy: bool,
  isDescending: bool
};

const defaultProps = {
  item: {}
};

const HeaderLabel = ({ item, isSortedBy, isDescending }) => (
  <React.Fragment>
    <BodyText color='darkGrey'>{item.name}</BodyText>
    {isSortedBy ? (
      isDescending ? (
        <Icons.TriangleUp ml={12} color='darkGrey' />
      ) : (
        <Icons.TriangleDown ml={12} color='darkGrey' />
      )
    ) : (
      undefined
    )}
  </React.Fragment>
);

HeaderLabel.propTypes = propTypes;
HeaderLabel.defaultProps = defaultProps;

export default HeaderLabel;
