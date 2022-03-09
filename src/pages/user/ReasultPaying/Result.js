import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrderAction } from "../../../redux/actions/OrderAction";

export const Result = () => {
    // const { userName } = useSearchParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const [message, setMessage] = useState('')
    const currentParams = Object.fromEntries([...searchParams]);
    //     const order = JSON.parse(localStorage.getItem('finalize') || '[]')
    //     const dispatch= useDispatch()
    // useEffect(()=>{
    //     dispatch(createOrderAction(order))
    // },[])
   toast.success('با موفقیت انجام گردید')
    console.log('param', currentParams.result)
    return <>
        <Helmet>
            <title>
                Page | ResultPaying
            </title>
        </Helmet>
        <Grid container justifyContent={'center'}>{currentParams.result === 'success' ? <Typography>پرداخت با موفقیت آنجام  شد.</Typography> :  null}</Grid>
    </>
}