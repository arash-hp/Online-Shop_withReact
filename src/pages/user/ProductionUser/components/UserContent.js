import { Grid, Typography, Button, TextField } from "@mui/material";

const cardStyles ={
    // width:'900px',
    // bgcolor:'red',
    display: 'flex',
    justifyContent: 'center',
    mt:5
    
}

export function UserContent() {
    return (
        <Grid container sx={{...cardStyles}}>
            <Grid ml={5}><img src={'http://localhost:3003/files/234bfb4188cc0675fa26864c9b27e786'} />
            </Grid>
            <Grid item> 
                <Typography variant="h2" mb={2} >نام کالا</Typography>
                <Typography variant="h5" mb={2} >نام گروه</Typography>
                <Typography variant="h5" mb={2} >قیمت : 87654</Typography>
                <Typography sx={{width:'400px',mb:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt, ipsa praesentium laboriosam fugiat iste corporis dolores dicta rerum iusto.</Typography>
                <Grid container alignItems='center'>
                    <Grid><Button variant="contained"  >افزودن  به سبد خرید
                    </Button></Grid>
                    <Grid mr={2}><TextField type="number"  label="تعداد" size="small" sx={{ width: '60px'}} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
