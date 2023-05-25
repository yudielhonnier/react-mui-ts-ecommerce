import { Delete, RemoveRedEye } from '@mui/icons-material';
import { StyledIconButton, StyledTableCell, StyledTableRow } from './StyledComponents';
import { useNavigate } from 'react-router-dom';
import { NumberLiteralType } from 'typescript';
import { Category } from '@/types/models/Category';
import { useTheme } from '@mui/material';
import { tokens } from '@/theme';

export interface CategoryRowProps {
  category: Category;
  isUserAdmin?: boolean;
}

// TODO:isUserAdmin is a mock, wait for role by user feature
const CategoryRow = ({ category, isUserAdmin }: CategoryRowProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();

  const name = category['name'];

  return (
    <StyledTableRow tabIndex={-1} role='checkbox'>
      <StyledTableCell
        align='left'
        sx={{
          fontWeight: 400,
        }}
      >
        {name}
      </StyledTableCell>

      <StyledTableCell
        align='left'
        sx={{
          fontWeight: 400,
        }}
      >
        <img src='#' alt={`${name}`} />
      </StyledTableCell>

      <StyledTableCell align='center'>
        <StyledIconButton onClick={() => navigate(`/admin/category/${name}`)}>
          <RemoveRedEye />
        </StyledIconButton>
        (
        <StyledIconButton>
          <Delete />
        </StyledIconButton>
        )
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CategoryRow;
