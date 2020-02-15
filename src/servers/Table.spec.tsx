import React from 'react';
import Table, { SortDirection } from './Table';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Table', () => {
  it('should render table rows and columns from passed props', () => {
    const data = [
      {
        id: '1',
        testProperty1: 'value1',
        testProperty2: 'value2',
      },
      {
        id: '2',
        testProperty1: 'value3',
        testProperty2: 'value4',
      },
    ];

    const columns = [
      {
        header: 'Test Header 1',
        accessor: 'testProperty1' as const,
      },
      {
        header: 'Test Header 2',
        accessor: 'testProperty2' as const,
      },
    ];

    const sortInfo = {
      column: 'testProperty1' as const,
      direction: SortDirection.ASC,
    };

    const onSortChange = jest.fn();

    render(<Table data={data} columns={columns} idProperty="id" sortInfo={sortInfo} onSortChange={onSortChange} />);

    expect(screen.queryByText('Test Header 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Header 2')).toBeInTheDocument();
    expect(screen.queryByText('value1')).toBeInTheDocument();
    expect(screen.queryByText('value2')).toBeInTheDocument();
    expect(screen.queryByText('value3')).toBeInTheDocument();
    expect(screen.queryByText('value4')).toBeInTheDocument();
  });

  it('should allow to sort column by clicking on column header', () => {
    const data = [
      {
        id: '1',
        testProperty1: 'value1',
        testProperty2: 'value2',
      },
    ];

    const columns = [
      {
        header: 'Test Header 1',
        accessor: 'testProperty1' as const,
      },
      {
        header: 'Test Header 2',
        accessor: 'testProperty2' as const,
      },
    ];

    const sortInfo = {
      column: 'testProperty1' as const,
      direction: SortDirection.ASC,
    };

    const onSortChange = jest.fn();

    render(<Table data={data} columns={columns} idProperty="id" sortInfo={sortInfo} onSortChange={onSortChange} />);

    fireEvent.click(screen.getByText('Test Header 2'));

    expect(onSortChange).toHaveBeenCalledWith({ column: 'testProperty2', direction: 'asc' });
  });
});
