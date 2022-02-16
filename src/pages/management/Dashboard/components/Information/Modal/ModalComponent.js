import * as React from 'react';
import Button from '@mui/material/Button';
import  styles from './Title.module.scss';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import { uploadImg , postData } from 'api/panel.data.api'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";



const currencies = [
    {
      value: 
      {
        "id": 1001,
        "name": "فیلم",
        "icon": "65ddd8b1bbce4d8396b62611147fa1d6"
      },
      label: 'فیلم',
    },
    {
      value: 
      {
        "id": 1002,
        "name": "موسیقی",
        "icon": null
      },
      label: 'موسیقی',
    },
    {
      value: 
      {
        "id": 1003,
        "name": "عکس",
        "icon": null
      },
      label: 'عکس',
    },
    {
      value: 
      {
        "id": 1004,
        "name": "فونت",
        "icon": null
      }
      ,
      label: 'فونت',
    },
    {
      value: 
      {
        "id": 1005,
        "name": "گرافیک",
        "icon": null
      }
      ,
      label: 'گرافیک',
    },
    {
      value: 
      {
        "id": 1006,
        "name": "افکت صوتی",
        "icon": null
      },
      label: 'افکت صوتی',
    },
    {
      value: 
      {
        "id": 1007,
        "name": "قالب آماده",
        "icon": null
      },
      label: 'قالب آماده',
    },
    {
      value: 
      {
        "id": 1008,
        "name": "قالب سایت",
        "icon": null
      },
      label: 'قالب سایت',
    },
    {
      value: 
      {
        "id": 1009,
        "name": "پلاگین",
        "icon": null
      },
      label: 'پلاگین',
    },
  ];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 1,
  p: 4,
};


const ModalProduct = () => {
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);
    const [currency, setCurrency] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [imgName , setImgName] = React.useState('');
    const [thumb , setThumb] = React.useState('');
    
    const describeChange =( event, editor ) => {
      const describeData = editor.getData();
      setDescription(describeData)
    }

    const handleChange = (event) => {
        setCurrency(event.target.value);
        console.log(event.target.value)
    };



    const handleFileUpdate =(e) => {
      e.preventDefault();
      let data = new FormData();
      data.append('image', e.target.image.files[0])

    //   try {  
    //     uploadImg( data )
    //       .then(res => {
    //         imgName ? setImgName([...imgName, res.filename])
    //         : setImgName([res.filename])
    //       })
    //     } catch (e) {
    //       return Promise.reject(e)
    //     }
    }

    const handlethumbUpdate =(e) => {
      e.preventDefault();
      let data = new FormData();
      data.append('image', e.target.thumbnail.files[0])
    //   try {  
    //     uploadImg( data )
    //       .then(res => {
    //         setThumb(res.filename)
    //       })
    //     } catch (e) {
    //       return Promise.reject(e)
    //     }
    }
 

    const handleSubmit =  (e) => {
        e.preventDefault();
        handleClose()
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const newData = description && parse(description).props.children ;
        data.image= imgName
        data.thumbnail = thumb
        data.description = newData
        data.category= currency
        console.log(data);
        // try {  
        //     postData( data )
        //     .then(res => {
        //         console.log(res);
        //     })
        //   } catch (e) {
        //     return Promise.reject(e)
        //   }
      }

      
    return ( 
        <div className={styles.title}> 
            <h2>مدیریت کالاها</h2>
            <Button 
                variant="outlined" 
                size='large' 
                color="secondary" 
                startIcon={<AddIcon />} 
                onClick={handleOpen}
            >افزودن کالا
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography  variant="h6"  sx={{mb: 2,}}>افزودن/ویرایش کالا  </Typography>   
                <Box component="form" onSubmit={handleFileUpdate} noValidate  sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                      margin="normal"
                      required
                      id="image"
                      label="تصویر اصلی کالا"
                      name="image"
                      type="file"
                      autoComplete="name"
                      autoFocus
                      focused
                      sx={{
                          mb: 2,
                      }}
                  />
                  <Button type="submit" variant="contained" sx={{  m: 2 , mr:0 , height: '54px' ,width : '30%', boxShadow: 0 }}>
                    <Typography  variant="h8"   sx={{ color:"white" }}>بارگذاری </Typography>
                  </Button>
                </Box>
                <Box component="form" onSubmit={handlethumbUpdate} noValidate  sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                      margin="normal"
                      required
                      id="thumbnail"
                      label="تصویر کوچک"
                      name="thumbnail"
                      type="file"
                      autoComplete="name"
                      autoFocus
                      focused
                      sx={{
                          mb: 2,
                      }}
                  />
                  <Button type="submit" variant="contained" sx={{  m: 2 , mr:0 , height: '54px' ,width : '30%', boxShadow: 0 }}>
                    <Typography  variant="h8"   sx={{ color:"white" }}>بارگذاری </Typography>
                  </Button>
                </Box>
                <Box component="form" onSubmit={handleSubmit} noValidate >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="نام کالا"
                        id="name"
                        focused 
                        sx={{
                            mb: 2,
                        }}                   
                    />
                    <Box  sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            label="قیمت"
                            id="price"
                            type= 'number'
                            focused 
                            sx={{
                                mb: 2,
                                mr:3,
                            }}                   
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="count"
                            label="تعداد"
                            id="count"
                            type= 'number'
                            focused 
                            sx={{
                                mb:3,
                            }}                   
                        />
                    </Box>
                     <TextField
                        id="outlined-select-currency"
                        select
                        // name="category"
                        label="دسته بندی"
                        value={currency.value}
                        onChange={handleChange}
                        helperText="لطفا دسته بندی را انتخاب کنید"
                        sx={{
                            mb: 3,
                        }} 
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <CKEditor
                        editor={ ClassicEditor }
                        name="description"
                        config={{ language : 'fa' }}
                        onChange={ describeChange }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , height: '50px'}}
                    >
                    <Typography  variant="h6"   sx={{ color:"white" }}>ذخیره</Typography>
                   </Button>
                </Box>
            </Box>


            </Modal>
        </div>
     );
}
 
export  {ModalProduct as Title};