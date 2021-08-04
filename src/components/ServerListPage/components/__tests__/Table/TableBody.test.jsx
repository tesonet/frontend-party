import React from 'react';
import { render, screen } from '@testing-library/react';

import TableBody from '../../Table/TableBody';
import { DISTANCE, NAME } from '../../../config/constants';

import servers from '../../../__mocks__/servers';

describe('TableBody', () => {
  it('should render servers', () => {
    render(<TableBody servers={servers} />);

    servers.forEach((server) => {
      expect(screen.getByText(server[NAME])).toBeInTheDocument();
      expect(screen.getByText(server[DISTANCE])).toBeInTheDocument();
    });
  });
});
