import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './ModalComponent.module.scss';
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
import { Formik, Field, Form } from 'formik';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { addProduct } from '../../../../../../api/SliderApi';



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


const initialValues = { name: "", price: "", count: "", category: "", image: "", thumbnail: "", description: "" }

const HeaderProduct = () => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imgName, setImgName] = React.useState('');
  const [thumb, setThumb] = React.useState('');

  const describeChange = (event, editor) => {
    const describeData = editor.getData();
    setDescription(describeData)
  }

  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value)
  };



  const handleFileUpdate = (e) => {
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

  const handlethumbUpdate = (e) => {
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


  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const newData = description && parse(description).props.children;
    data.image = imgName
    data.thumbnail = thumb
    data.description = newData
    data.category = currency
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
  const onSubmit = React.useCallback((values) => {
    addProduct(values);
  })

  return (

    <div className={styles.root}>
      <div className={styles.title}>

        <h2>مدیریت کالاها</h2>
        <Button onClick={handleOpen}>افزودن کالا</Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography variant="h6" >افزودن کالا  </Typography>
        </DialogTitle>
        <Formik
          initialValues={initialValues}

          onSubmit={onSubmit}>

          <Form sx={{ marginLeft: '30px' }}>
            <DialogContent >

              <Grid container direction='column' spacing={2} sx={{ overflow: 'hidden' }}>
                <Grid container item spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }} >
                  <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Field name='image'>
                      {(fieldProps) => {
                        return <TextField
                          {...fieldProps.field}
                          margin="normal"
                          id="image"
                          label="تصویر کالا"
                          name="image"
                          type="file"
                          value={fieldProps.image}
                        />
                      }}
                    </Field>
                    <DialogActions>
                      <Button type="submit" variant="contained" >
                        آپلود
                      </Button>
                    </DialogActions>
                  </Grid>
                  <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Field name='thumbnail'>
                      {(fieldProps) => {
                        return <TextField
                          {...fieldProps.field}
                          margin="normal"
                          id="thumbnail"
                          label="تصویر کوچک"
                          name="thumbnail"
                          type="file"
                          autoComplete="name"
                        />
                      }}
                    </Field>
                    <DialogActions>
                      <Button type="submit" variant="contained" >
                        آپلود
                      </Button>
                    </DialogActions>
                  </Grid>
                  <Grid item sx={{ width: '500px' }}>
                    <Field name='name'>{(fieldProps) => {
                      console.log('modal', fieldProps)
                      return <TextField
                        {...fieldProps.field}
                        margin="normal"
                        fullWidth
                        label="نام کالا"
                     

                      />
                    }}</Field>
                  </Grid>
                  <Grid item sx={{ width: '250px' }}><Field name='price' >
                    {(fieldProps) => {
                      return <TextField
                        {...fieldProps.field}
                        margin="normal"
                        fullWidth
                        name="price"
                        label="قیمت"
                        type='number'
                      />
                    }}</Field></Grid>
                  <Grid item sx={{ width: '250px' }}><Field name='count' >{(fieldProps) => {
                    return <TextField
                      {...fieldProps.field}
                      margin="normal"
                      fullWidth
                      name="count"
                      label="تعداد"
                      type='number'
                    />
                  }}</Field></Grid>
                  <Grid item ><Field name='category'>
                    {(fieldProps) => {
                      return <TextField
                        {...fieldProps.field}
                        id="outlined-select-currency"
                        select
                        name="category"
                        label=" دسته بندی را انتخاب کنید ..."
                        value={currency.value}
                        onChange={handleChange}
                        // helperText="لطفا دسته بندی را انتخاب کنید"
                        sx={{ width: '235px' }}
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }}
                  </Field>
                  </Grid>
                  <Grid item sx={{ width: '250px' }} >
                    <Field name='description'>
                      {(fieldProps) => {
                        return <CKEditor
                          {...fieldProps.field}
                          editor={ClassicEditor}
                          name="description"
                          config={{ language: 'fa' }}
                          onChange={describeChange}
                        />
                      }}
                    </Field>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions >
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                <Typography variant="h6" sx={{ color: "white" }}>ذخیره</Typography>
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </div >
  );
}

export { HeaderProduct };