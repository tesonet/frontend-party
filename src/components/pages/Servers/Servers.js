import React from 'react';
import Header from '../../shared/Header';
import Table from '../../shared/Table';
import useFetch from '../../hooks/useFetch';
import styles from './Servers.module.scss';

const Servers = () => {
  const [, isFetching, data] = useFetch('/servers', []);

  function orderData(d) {
    return Object.values(
      d
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((obj, item) => {
          const key = item.name.split('#')[0];

          // eslint-disable-next-line no-param-reassign
          obj[key] = [...(obj[key] || []), item].sort(
            (a, b) => a.distance - b.distance
          );

          return obj;
        }, [])
    ).flat();
  }

  return (
    <div className={styles['servers']}>
      <Header />
      <Table>
        <Table.Row head>
          <Table.Cell>Server</Table.Cell>
          <Table.Cell>Distance</Table.Cell>
        </Table.Row>

        {isFetching && (
          <Table.Row>
            <Table.Cell>Loading...</Table.Cell>
          </Table.Row>
        )}

        {!!data && (
          <Table.Body>
            {orderData(data).map(({ name, distance }) => (
              <Table.Row key={name + distance}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{distance} km</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>
    </div>
  );
};

export default Servers;
