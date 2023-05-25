import { FormEventHandler, useState } from 'react';

export function descComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (b[orderBy] > a[orderBy]) return 1;
  if (b[orderBy] < a[orderBy]) return -1;
  return 0;
}

export function getComparator<T>(order: 'asc' | 'desc', orderBy: keyof T): (a: T, b: T) => number {
  return order !== 'desc'
    ? (a, b) => -descComparator(a, b, orderBy)
    : (a, b) => descComparator(a, b, orderBy);
}

export function sort(arr: any[], comparator: (arg0: any, arg1: any) => any) {
  const stabilizedThis = arr.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: number[], b: number[]) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any[]) => el[0]);
}

const useMuiTable = (props: {
  listData?: any[] | undefined;
  defaultSort?: string | undefined;
  defaultOrder?: 'asc' | 'desc' | undefined;
  itemPerPage?: number | undefined;
}) => {
  const { listData = [], defaultSort = 'name', defaultOrder = 'asc', itemPerPage = 20 } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(itemPerPage);
  const [orderBy, setOrderBy] = useState(defaultSort);
  const [selected, setSelected] = useState<any[]>([]);
  const [order, setOrder] = useState(defaultOrder);

  const handleRequestSort = (property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (checked: any, defaultSelect: string | number) => {
    if (checked) {
      const newSelecteds = listData.map((n: { [x: string]: any }) => n[defaultSelect]);
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  const handleRowClick = (name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: any[] | ((prevState: []) => []) = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_: any, newPage: number) => setPage(newPage - 1);

  const filteredList = sort(listData, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleRowClick,
    handleChangePage,
    handleRequestSort,
    handleSelectAllClick,
  };
};

export default useMuiTable;
