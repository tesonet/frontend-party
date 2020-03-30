import {TAlignAttr} from '../../components/organisms/Table/Table';

export const serversListColumns = [
	{
		key: 'serverName',
		align: 'left' as TAlignAttr,
		title: 'Server',
		dataIndex: 'name',
	},
	{
		key: 'serverDistance',
		align: 'right' as TAlignAttr,
		title: 'Distance',
		dataIndex: 'distance',
	}
];