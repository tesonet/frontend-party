import React from 'react';
import styles from './Table.module.scss';

export type TAlignAttr = 'left' | 'center' | 'right' | 'justify' | 'char';

export interface IColumnProps {
	key: string;
	align?: TAlignAttr;
	title: string;
	dataIndex: string;
}

export interface ITableProps {
	columns: Array<IColumnProps>
	data: Array<Record<string, any> & { key: string }>;
	tableStyles?: string;
}

export function Table({columns, data, tableStyles}: ITableProps) {
	return (
		<table className={[styles['table'], tableStyles].filter(Boolean).join(' ')}>
			<thead className={styles['table__thead']}>
				<tr className={styles['table__row']}>
				{
					columns.map(({key, align, title}) => (
						<th
							key={key}
							align={align}
							className={styles['table__header']}
						>
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
							columns.map(({key, align, dataIndex}) => (
								<td
									key={key}
									align={align}
									className={styles['table__cell']}
								>
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