import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useSelector } from 'react-redux';
import { Button, Grid, TableHead, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../../../configs/RoutesConfig';
import { useDispatch } from 'react-redux';
import { deleteOrderAction } from '../../../../../redux/actions/OrderAction';
import { toast } from 'react-toastify';
import { removerFromCartAction } from '../../../../../redux/actions/ShoppingCart';

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


export function DataTable({ open }) {
    const { cart, products } = useSelector((state) => ({ cart: state.shoppingCart, products: state.product.products }))
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const items = React.useMemo(() => {
        return cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    }, [cart, products])

    //===================================Delete Item======================
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(removerFromCartAction(id))
    }


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cart.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //================================ Total rows =================================

    function ccyFormat(num) {
        return `${num.toFixed(1)}`;
    }
    function priceRow(qty, unit) {
        return qty * unit;
    }
    function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }
    function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }
 
    const rows = items.map((item) => createRow(item.product.name, item.count, item.product.price));
    const TAX_RATE = 0.1;
    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;


    return (<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} sx={{ m: 5, minWidth: 500 }}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 260 }}>نام کالا</TableCell>
                        <TableCell style={{ width: 160 }}>قیمت</TableCell>
                        <TableCell style={{ width: 100 }}>تعداد</TableCell>
                        <TableCell style={{ width: 100 }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : items
                    ).map((row) => (
                        <TableRow key={row.id} >
                            <TableCell component="th" style={{ width: 260 }} scope="row">
                                {row.product.name} {row.product.brand}
                            </TableCell>
                            <TableCell style={{ width: 160 }} >
                                {row.product.price}
                            </TableCell>
                            <TableCell style={{ width: 100 }}>
                                {row.count}
                            </TableCell>
                            <TableCell style={{ width: 100 }}>
                                <Button onClick={() => handleDelete(row.id)}>حذف</Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter >
                    <TableRow>
                        <TableCell colSpan={1}>جمع</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}>مالیات</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}>تخیف</TableCell>
                        <TableCell align="right">0.0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}>جمع کل</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ background: '#93d093', textAlign: 'center' }}>
                            <Link to={PATHS.FINALIZE}><Button sx={{ width: '100% !important' }}>نهایی  کردن خرید</Button></Link>
                        </TableCell>
                        <TableCell sx={{ background: '#dbdbdb', textAlign: 'center' }}>
                            <Link to={PATHS.HOME}><Button sx={{ width: '100% !important' }}>بازگشت به صفحه اصلی</Button></Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={cart.length}
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
