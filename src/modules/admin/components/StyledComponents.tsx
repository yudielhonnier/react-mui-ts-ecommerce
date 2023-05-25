import { tokens } from '@/theme';
import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  IconButton,
  styled,
  TableCell,
  TableRow,
  Theme,
  useTheme,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
  paddingTop: 10,
  fontWeight: 600,
  paddingBottom: 10,
  color: theme.palette.grey[900],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

export interface IDetailsProperties extends GridProps {
  align: string;
}

const StyleDetailsProperty = styled(Grid)(({ align }: IDetailsProperties) => ({
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: align === 'start' ? 'flex-start' : 'flex-end',
}));

const StyleDetailsPropertyImage = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CategoryWrapper = styled(Box)(({ theme }) => ({
  fontSize: 13,
  padding: '3px 12px',
  borderRadius: '16px',
  display: 'inline-block',
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.grey[200],
}));
const TextPrimaryColorWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));
const PaginationContainer = styled(Box)(({ theme }) => ({
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

const StyledTableRow = styled(TableRow)(() => ({
  ':last-child .MuiTableCell-root': {
    border: 0,
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[600],
  '& .MuiSvgIcon-root': {
    fontSize: 19,
  },
  ':hover': {
    color: theme.palette.info.main,
  },
}));

export interface IStatusWrapper extends BoxProps {
  status: string;
}
//todo: fix the correct colors
const StatusWrapper = styled(Box)(({ status }: IStatusWrapper) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let color = theme.palette.secondary.main;
  let backgroundColor = colors.secondary[100];

  if (status === 'Accepted' || status === 'Delivered' || status === 'Normal') {
    color = theme.palette.success.dark;
    backgroundColor = colors.greenAccent[100];
  }

  if (status === 'Rejected' || status === 'Pending' || status === 'Urgent') {
    color = theme.palette.error.main;
    backgroundColor = colors.redAccent[100];
  }

  if (status === 'Processing') {
    color = theme.palette.warning.main;
    backgroundColor = colors.redAccent[400];
  }

  return {
    color,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor,
    borderRadius: '8px',
    padding: '3px 12px',
    display: 'inline-flex',
  };
}); // eslint-disable-next-line import/no-anonymous-default-export

export {
  CategoryWrapper,
  StyledIconButton,
  StyledTableRow,
  StyledTableCell,
  StatusWrapper,
  PaginationContainer,
  TextPrimaryColorWrapper,
  StyleDetailsProperty,
  StyleDetailsPropertyImage,
};
