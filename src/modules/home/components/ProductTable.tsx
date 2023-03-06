import { Box, IconButton, useTheme } from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Menu as MenuIcon, GridViewOutlined, ViewListOutlined } from '@mui/icons-material';

import productListMock from '@/data/products-data.json';
import { tokens } from '@/theme';

const ProductTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = productListMock.products;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'productType',
      headerName: 'Type',
      type: 'string',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      flex: 1,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      flex: 1,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
    },
  ];

  return (
    <Box m='20px'>
      <Box
        m='40px 0 0 0'
        height='75vh'
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={productListMock.products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductTable;
