import {
  Box,
  Card,
  CircularProgress,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  useTheme,
} from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Menu as MenuIcon, GridViewOutlined, ViewListOutlined } from '@mui/icons-material';

import { tokens } from '@/theme';
import { Category } from '@/types/models/Category';
import CustomIcon from '@/common/icons/CustomIcon';
import { orderBy } from 'firebase/firestore';
import Scrollbar from '@/common/Scrollbar';
import useMuiTable from '@/hooks/useMuiTable';
import CategoryRow from './CategoryRow';
import TableHeader from '@/common/table/TableHeader';
import { useState } from 'react';
import TablePagination from '@/common/table/TablePagination';
import { useAppSelector } from '@/store/hooks';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CategoriesTable = ({ categories }: { categories: Category[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isLoading } = useAppSelector((state) => state.categories);

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: categories,
    defaultSort: 'purchaseDate',
    defaultOrder: 'desc',
  });

  const tableHeading = [
    {
      id: 'name',
      label: 'Name',
      align: 'left',
    },
    {
      id: 'image',
      label: 'Image',
      align: 'left',
    },
  ];

  return (
    <Card>
      <Scrollbar>
        <TableContainer
          sx={{
            minWidth: 900,
          }}
        >
          <Table>
            <TableHeader
              order={order}
              hideSelectBtn
              orderBy={orderBy}
              heading={tableHeading}
              rowCount={categories.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {filteredList.map((category, index) => (
                // TODO: isUserAdmin = false for now, wait for role by user feature
                <CategoryRow category={category} isUserAdmin={false} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {isLoading ? (
          <Stack alignItems='center' my={4}>
            <CircularProgress />
          </Stack>
        ) : (
          <></>
        )}
      </Scrollbar>

      <Stack alignItems='center' my={4}>
        <TablePagination
          onChange={handleChangePage}
          count={Math.ceil(categories.length / rowsPerPage)}
        />
      </Stack>
    </Card>
  );
};

export default CategoriesTable;
