import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { uploadImg , postData } from 'api/panel.data.api'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { typography } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Paper from '@mui/material/Paper';


// import { ModalComponent } from '../../../../../../components/index';

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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
export const ModalComponent = ({ item, open, onClose }) => {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - item.cart.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSubmit = (values) => {
    console.log('values', values)
    // onSubmit({...values,category:currency,description})
  }


  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        نمایش سفارش
      </BootstrapDialogTitle>
      <Formik

        onSubmit={handleSubmit}>
        <Form sx={{ marginLeft: '30px' }}>
          <DialogContent >
            <Grid container direction='column' spacing={2} sx={{ overflow: 'hidden' }}>
              <Grid container item spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }} >
                <Grid item sx={{ width: '500px' }}>
                  <Typography>
                    نام مشتری : {item.firstName} {item.lastName}
                  </Typography>
                </Grid>
                <Grid item sx={{ width: '500px' }}>
                  <Typography>
                    آدرس : {item.address}
                  </Typography>
                </Grid>
                <Grid item sx={{ width: '500px' }}>
                  <Typography>
                    تلفن : {item.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item sx={{ width: '500px' }}>
                  <Typography>
                    زمان تحویل : {!item.deliveryDate ? '-' : new Date(item.deliveryDate).toString()}
                  </Typography>
                </Grid>
                <Grid item sx={{ width: '500px' }}>
                  <Typography>
                    زمان سفارش : {new Date(item.createdAt).toString()}
                  </Typography>
                </Grid>
                <TableContainer component={Paper} sx={{ m: 5, minWidth: 500 }}>
                  <Table aria-label="custom pagination table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ width: 260 }}>کالا</TableCell>
                        <TableCell style={{ width: 160 }}>قیمت</TableCell>
                        <TableCell style={{ width: 100 }}>تعداد</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? item.cart.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : item.cart
                      ).map((row) => (
                        <TableRow key={row.id} >
                          <TableCell component="th" style={{ width: 260 }} scope="row">
                            {row.name} {row.brand}
                          </TableCell>
                          <TableCell style={{ width: 160 }} >
                            {row.price}
                          </TableCell>
                          <TableCell style={{ width: 100 }}>
                            {row.count}
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
                          count={item.cart.length}
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
            </Grid>
          </DialogContent>
          <DialogActions >
            {!item.delivered ? <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              <Typography variant="h6" sx={{ color: "white" }}>تحویل شد</Typography>
            </Button> : null}
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
}
