import React from 'react';
import styles from './Table.module.scss';

interface IColumnProps {
	key: string;
	title: string;
	dataIndex: string;
}

export interface ITableProps {
	columns: Array<IColumnProps>
	data: Array<Record<string, any> & {key: string}>;
	tableStyles?: string;
}

export function Table({columns, data, ...rest}: ITableProps) {
	return (
		<table className={[
			styles['table'],
			rest.tableStyles,
		].filter(Boolean).join(' ')}>
			<thead className={styles['table__thead']}>
				<tr className={styles['table__row']}>
					{
						columns.map(({key, title}) => (
							<th key={key} className={styles['table__header']}>
								{title}
							</th>
						))
					}
				</tr>
			</thead>
			<tbody className={styles['table__tbody']}>
				{
					data.map(row => (
						<tr key={row.key} className={styles['table__row']}>
							{
								columns.map(({key, dataIndex}) => (
									<td key={key} className={styles['table__cell']}>
										{row[dataIndex]}
									</td>
								))
							}
						</tr>
					))
				}
			</tbody>
		</table>
	);
}