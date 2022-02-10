import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import styles from './NavigationComponent.module.scss';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../configs/RoutesConfig';


export const NavigationComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const openMenu = Boolean(anchorEl)

    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget)
    }
 
    const handleClose=()=>{
        setAnchorEl(null)
        console.log('ohhhhh')
    }

    const handleClickPage = ()=>{
        <Navigate replace to={PATHS.LOGIN} />
    }
    return <>
        <Box dir="rtl" className={styles.root} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bold' } }}
                    >
                        Camping&Hiking
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer' }}>کوهنوردی</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer' }}>کمپینگ</Typography>
                        <Typography sx={{ marginRight: '20px', cursor: 'pointer' }}
                            aria-controls='basic-menu'
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                        >لباس</Typography>
                        {/*Dropdown Items */}
                        <Menu id='basic-menu'
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}> 
                            <MenuItem onClick={handleClose}>مرد</MenuItem>
                            <MenuItem onClick={handleClose}>زن</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge
                                // badgeContent={17} 
                                color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        
                        <IconButton
                            color="inherit"
                            onClick={handleClickPage}
                        >
                            <ManageAccountsIcon
                                sx={{ fontSize: 30 }}
                            />
                            
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        
        </Box>
    </>
}