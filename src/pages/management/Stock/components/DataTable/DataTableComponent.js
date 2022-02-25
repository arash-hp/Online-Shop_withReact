import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'fullName', headerName: 'نام کالا', description: 'This column has a value getter and is not sortable.', sortable: false, width: 230,
        valueGetter: (params) =>
            `${params.row.name || ''} ${params.row.brand || ''}`
    },
    // { field: 'name', headerName: 'First name', width: 130 },
    // { field: 'brand', headerName: 'Last name', width: 130 },
    // { field: 'price', headerName: 'Price', type: 'number', width: 130 },
    { field: 'category' , headerName: 'دسته بندی', sortable: false, width: 230 ,
    renderCell: (params) => (
        <div>
            <Typography variant="subtitle2">
                {params.value.name}
            </Typography>
        </div>
    )
},
    
];

export function DataTable() {
    const data = useSelector((state) => state.product.products)
    console.log('data',data)

    return (
        <div style={{height: 400, width: '80%' ,margin:'32px auto',}}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                pl={40}
            />
        </div>
    );
}
