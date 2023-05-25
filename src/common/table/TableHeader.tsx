import {
  Checkbox,
  styled,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  useTheme,
} from '@mui/material';
import UpDown from '../icons/UpDown';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { IHeadCell } from '@/types';
import { tokens } from '@/theme';
// styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: '16px 20px',
  color: theme.palette.grey[900],
}));

export interface TableHeaderProps {
  order: any;
  heading: any;
  orderBy: any;
  rowCount: any;
  numSelected: any;
  onRequestSort: any;
  onSelectAllClick?: any;
  hideSelectBtn?: boolean | undefined;
}

const TableHeader = (props: TableHeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const {
    order,
    heading,
    orderBy,
    rowCount,
    numSelected,
    onRequestSort,
    //todo: modify this function
    onSelectAllClick = () => {},
    hideSelectBtn = false,
  } = props;
  return (
    <TableHead
      sx={{
        backgroundColor: `${
          theme.palette.mode === 'dark' ? colors.primary[500] : colors.redAccent[900]
        }`,
      }}
    >
      <TableRow
       
      >
        {!hideSelectBtn && (
          <StyledTableCell align='left'>
            <Checkbox
              color='info'
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event) => onSelectAllClick(event.target.checked, 'product')}
            />
          </StyledTableCell>
        )}

        {heading.map((headCell: IHeadCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={() => onRequestSort(headCell.id)}
              direction={orderBy === headCell.id ? order : 'asc'}
              sx={{
                '& .MuiTableSortLabel-icon': {
                  opacity: 1,
                },
              }}
              IconComponent={() => (
                <UpDown
                  sx={{
                    fontSize: 14,
                    ml: 1,
                    color: 'grey.600',
                  }}
                />
              )}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
