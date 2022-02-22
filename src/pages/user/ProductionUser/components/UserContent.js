import { Grid, Typography, Button, TextField } from "@mui/material";

const cardStyles ={
    width:'80%',
    margin:'0 auto',
    padding:'16px 0',
    display: 'flex',
    justifyContent: 'center',
    mt:5,
    boxShadow: 3,
    borderRadius: 4,
}

export function UserContent({item}) {
    return (
        <Grid container sx={{...cardStyles}}>
            <Grid ml={5}><img src={'http://localhost:3003/files/234bfb4188cc0675fa26864c9b27e786'} />
            </Grid>
            <Grid item> 
                <Typography variant="h2" mb={2} >{item.name}</Typography>
                <Typography variant="h5" mb={2} >گروه : {item.category.name}</Typography>
                <Typography variant="h5" mb={2} >قیمت : {item.price}</Typography>
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
