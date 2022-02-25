import { TextField } from '@mui/material';
import { useField } from 'formik';
import { uploadImg } from '../api/ProductApi';

export const FileUploader = ({ name, ...rest }) => {
    const [,,{setValue}] = useField(name)


    const onChange = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('image', e.target.files[0])

        uploadImg(data)
            .then(res => {
                setValue(res.filename)
            })
    }

    return <TextField
        {...rest}
        onChange={onChange}
        type="file"


    />
}