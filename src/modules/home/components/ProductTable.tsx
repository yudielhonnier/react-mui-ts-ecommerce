import { Box, IconButton, useTheme } from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Menu as MenuIcon, GridViewOutlined, ViewListOutlined } from '@mui/icons-material';

import productListMock from '@/data/products-data.json';
import { tokens } from '@/theme';
import Product from '../models/Product';

const ProductTable = ({ products }: { products: Product[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.4 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },

    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      flex: 0.4,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      flex: 0.4,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      flex: 0.4,
    },
    {
      field: 'decription',
      headerName: 'Description',
      type: 'string',
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
      type: 'string',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
  ];

  return (
    <Box
      m='0'
      height='70vh'
      sx={{
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .name-column--cell': {
          color: colors.greenAccent[300],
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: `${
            theme.palette.mode === 'dark' ? colors.primary[500] : colors.redAccent[900]
          }`,
          borderBottom: 'none',
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: colors.primary[400],
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          backgroundColor: `${
            theme.palette.mode === 'dark' ? colors.primary[500] : colors.redAccent[900]
          }`,
        },
        '& .MuiCheckbox-root': {
          color: `${colors.greenAccent[200]} !important`,
        },
        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid rows={products} columns={columns} components={{ Toolbar: GridToolbar }} />
    </Box>
  );
};

export default ProductTable;
