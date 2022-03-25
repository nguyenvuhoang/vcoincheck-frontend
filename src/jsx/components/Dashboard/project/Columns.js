import { ColumnFilter } from '../../../components/table/FilteringTable/ColumnFilter';
export const COLUMNSFILTER = [
	{
		Header : 'No',
		Footer : 'No',
		accessor: 'proid',
		Filter: ColumnFilter,
	},
	{
		Header : 'Name',
		Footer : 'Name',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header : 'Ecosystem',
		Footer : 'Ecosystem',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header : 'Categories',
		Footer : 'Categories',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header : 'Status',
		Footer : 'Status',
		accessor: 'prosts',
		Filter: ColumnFilter,
	},
	{
		Header : 'No of viewed',
		Footer : 'No of viewed',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
]

export const COLUMNS = [
	"",
    "No",
    "Name",
    "Ecosystem",
    "Categories",
    "Status",
    "No of viewed",
]
