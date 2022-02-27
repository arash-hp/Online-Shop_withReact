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
import { addProduct, uploadImg } from '../../../../../../api/ProductApi';
import { useDispatch } from 'react-redux'
import { createProductAction } from '../../../../../../redux/actions/ProductAction';
import { ControlCameraSharp } from '@mui/icons-material';
// import { ModalComponent } from '../../../../../../components/index';
import { FileUploader } from '../../../../../../components/FileUploade';



const currencies = [
  {
    value:
    {
      "id": 1,
      "name": "کفش",
      "icon": "65ddd8b1bbce4d8396b62611147fa1d6"
    },
    label: 'کفش',
  },
  {
    value:
    {
      "id": 2,
      "name": "کوله",
      "icon": "65ddd8b1bbce4d8396b62611147fa1d6"
    },
    label: 'کوله',
  },
  {
    value:
    {
      "id": 3,
      "name": "کاپشن",
      "icon": null
    },
    label: 'کاپشن',
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

const initialValues = { name: "", price: "", count: "", category: "", image: "", thumbnail: "", description: "" };

export const ModalComponent = ({ open, onClose, onSubmit,item }) => {
  // const handleOpen = () => { setOpen(true) };
  // const handleClose = () => setOpen(false);
  // const [open, setOpen] = React.useState(false);
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
  };

  const isAdd = !item;

  // const handleFileUpdate = (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   data.append('image', e.target.files[0])

  //   try {
  //     uploadImg(data)
  //       .then(res => {
  //         // imgName ? setImgName([...imgName, res.filename])
  //         //   : setImgName([res.filename])
  //         setImgName(res.filename)
  //         console.log('image', res.filename);
  //       })
  //   } catch (e) {
  //     return Promise.reject(e)
  //   }
  // }

  const handlethumbUpdate = (e) => {
    e.preventDefault();
    // data.append('image', e.target.thumbnail.files[0])
  }


  const handleSubmit = (values) => {
    console.log('values',values)
    onSubmit({...values,category:currency,description})
  }



  const dispatch = useDispatch();
  // const onSubmit = React.useCallback((values) => {
  //   console.log('values', values);
  //   const data = values;
  //   data.image = imgName;
  //   data.category = currency;
  //   console.log('modal', data);
  //   dispatch(createProductAction(data))
  //   // addProduct(values);
  // })

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        افزودن کالا
      </DialogTitle>
      {/* <form component="form"  noValidate sx={{ display: 'flex', justifyContent: 'space-between' }}> */}


      {/* </form> */}
      <Formik
        initialValues={item || initialValues}

        onSubmit={handleSubmit}>

        <Form sx={{ marginLeft: '30px' }}>
          <DialogContent >

            <Grid container direction='column' spacing={2} sx={{ overflow: 'hidden' }}>
              <Grid container item spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }} >
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <FileUploader
                    // inputRef={fileRef}
                    margin="normal"
                    label="تصویر اصلی کالا"
                    name="image"
                    sx={{
                      mb: 2,
                    }}
                  />
                </Grid>
                {/* <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  </Grid> */}
                <Grid item sx={{ width: '500px' }}>
                  <Field name='name'>{(fieldProps) => {
                    // console.log('modal', fieldProps)
                    return <TextField
                      {...fieldProps.field}
                      margin="normal"
                      fullWidth
                      label="نام کالا"


                    />
                  }}</Field>
                </Grid>
                <Grid item sx={{ width: '500px' }}>
                  <Field name='brand'>{(fieldProps) => {
                    // console.log('modal', fieldProps)
                    return <TextField
                      {...fieldProps.field}
                      margin="normal"
                      fullWidth
                      label="نام برند"


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
  );
}
