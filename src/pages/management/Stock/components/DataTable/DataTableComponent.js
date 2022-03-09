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
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TableHead, TextField } from '@mui/material';
import { updateProductAction } from '../../../../../redux/actions/ProductAction';
import { EditableCell } from './EditableCell/EditableCell';
import { editStockAction, updateStockAction } from '../../../../../redux/actions/StockAction';
import { toast } from 'react-toastify';

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

export function DataTable() {
    const data = useSelector((state) => state.product.products)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => { setOpen(true) };
    // const handleClose = React.useCallback(() => { setOpen(false) }, [setOpen]);


    //=============================To show TextField for Edit =========================================

    // const onChange = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     setNewValues(prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value,
    //         }
    //     });
    //     const product = data.filter((item) => { return item.id === id });
    //     setNewItem(prev => [...prev, product]);
    // }
    const [changes, setChanges] = React.useState({});


    const changeHandlerFor = (item) => {
        return (value, name) => {
            setChanges((prev) => ({
                ...prev,
                [item.id]: { ...item, [name]: value }
            }))
        }
    }


    // function checkItem(item) {
    //     const productId = Object.keys(newValues);
    //     const items = productId.map((id) => { return (item.id === parseInt(id)) });

    //     console.log('checkItem', items);
    //     return items
    // }

    //=============================================================================
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const dispatch = useDispatch();
    const onUpdate = ()=>{
        dispatch(updateStockAction(changes))
        toast.success('عملیات موفق انجام شد.')
    }

    const rows = React.useMemo(() => {
        const items = rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data;
        return items.map((item) => changes[item.id] || item)
        // return items 
    },[changes, data, page, rowsPerPage])
    return (<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={onUpdate} disabled={!Object.keys(changes).length} variant="contained" sx={{ marginTop: '16px' }}>ذخیره</Button>
        <TableContainer component={Paper} sx={{ m: 5, minWidth: 500 }}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 60 }}>تصویر</TableCell>
                        <TableCell style={{ width: 260 }}>نام کالا</TableCell>
                        <TableCell style={{ width: 160 }}>قیمت (ریال)</TableCell>
                        <TableCell style={{ width: 100 }}>تعداد</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} >
                            <TableCell component="th" scope="row" style={{ width: 60 }}>
                                {/* <Box sx={{ width: 100,height:100}}> */}
                                <img src={`http://localhost:3003/files/${row.image}`} style={{ width: 30, height: 30, }} />
                                {/* </Box> */}
                            </TableCell>
                            <TableCell component="th" style={{ width: 260 }} scope="row">
                                {row.name} {row.brand}
                            </TableCell>
                            {/* <TableCell style={{ width: 160 }} onClick={() => handleChangeInput(row.id)}>
                                    {(id === row.id) ? <TextField name={row.id.toString()} type='number' size="small" sx={{ width: '100px' }} onChange={onChange} defaultValue={row.price} /> : <Box>{row.price}</Box>}
                                </TableCell> */}
                            <EditableCell name='price' value={row.price} onChange={changeHandlerFor(row)} />

                            <EditableCell name='count' value={row.count} onChange={changeHandlerFor(row)} />
                            {/* <TableCell style={{ width: 100 }}>
                                {row.count}
                            </TableCell> */}
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
                            count={data.length}
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
