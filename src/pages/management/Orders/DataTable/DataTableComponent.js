import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Grid, TableHead } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { setOrders } from '../../../../redux/actions/OrderAction';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
    return { name, calories, fat };
}

export function DataTable({ handleEdit, orders }) {
    console.log('invoiceSubtotal',orders)


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [items, setITems] = React.useState('');

    // React.useMemo(() => {
    //     orders.map((item) => setITems(item))
    // }, [])
    // console.log('dataTable', items)

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //====================total=============================
    // const total = async(items){
        
    // }
    // const [items , setItems]= React.useState('')
    // React.useMemo(()=>{
    //     const order = orders[0].cart.map((item)=>item)
    //     setItems(order)
    // })
    // const item  = item.map((item)=>item)
    // console.log('invoiceSubtotal',items)

    //   function ccyFormat(num) {
    //     return `${num.toFixed(1)}`;
    // }
    // function priceRow(qty, unit) {
    //     return qty * unit;
    // }
    // function createRow(desc, qty, unit) {
    //     const price = priceRow(qty, unit);
    //     return { desc, qty, unit, price };
    // }
    // function subtotal(items) {
    //     return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    // }


    // const rows = items.cart.map((item) => createRow(item.name, item.count, item.price));
    // const TAX_RATE = 0.1;
    // const invoiceSubtotal = subtotal(rows);
    // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    // console.log('invoiceSubtotal',invoiceTotal)


    return (<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} sx={{ m: 5, minWidth: 500 }}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 260 }}>نام کاربر</TableCell>
                        <TableCell style={{ width: 160 }}>مجموع قیمت</TableCell>
                        <TableCell style={{ width: 100 }}>زمان ثبت سفارش</TableCell>
                        <TableCell style={{ width: 100 }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : orders
                    ).map((row) => (
                        <TableRow key={row.id} >
                            <TableCell component="th" style={{ width: 260 }} scope="row">
                                {row.firstName} {row.lastName}
                            </TableCell>
                            <TableCell style={{ width: 160 }} >
                                {row.cart.map((item)=>item.price * item.count)}
                            </TableCell>
                            <TableCell style={{ width: 100 }}>
                                {new Date(row.createdAt).toLocaleDateString('fa')}
                            </TableCell>
                            <TableCell style={{ width: 100 }}>
                                <Button onClick={() => handleEdit(row)}>بررسی سفارش</Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </Grid>
    );
}
