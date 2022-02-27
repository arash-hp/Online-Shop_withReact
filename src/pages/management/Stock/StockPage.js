import { Button, Toolbar, Typography } from "@mui/material";
import React, { useCallback } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { ModalComponent } from "../../../components";
import { createProductAction } from "../../../redux/actions/ProductAction";
import { DataTable } from "./components/DataTable/DataTableComponent";

export const StockPage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = useCallback(() => setOpen(false), [setOpen]);

    const dispatch = useDispatch();
    const onSubmit = React.useCallback((values) => {
        dispatch(createProductAction(values))
        handleClose();
    }, [dispatch, handleClose])

    return <>
        <Helmet>
            <title>
                Page | Stock
            </title>
        </Helmet>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography>مدیریت کالاها</Typography>
            <Button onClick={handleOpen}>افزودن کالا</Button>
        </Toolbar>

        <DataTable />
        <ModalComponent open={open} onClose={handleClose} onSubmit={onSubmit} />

    </>
}