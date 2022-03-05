import { Box, TableCell, TextField } from "@mui/material"
import { useEffect, useState } from "react"

export const EditableCell = ({ name, value: initialValue, onChange: handleChange }) => {

    const [value, setValue] = useState(initialValue);
    const [editing, setEditing] = useState(false);
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        if (value !== initialValue) {
            handleChange(value, name)
        }
        setEditing(false)
    }

    const onCellClick = () => {
        setEditing(true)
    }

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue)
        }
    }, [initialValue])

    return <TableCell style={{ width: 160 }} onClick={onCellClick} >
        {editing ? <TextField name={name} type='number' autoFocus size="small" sx={{ width: '100px' }} onChange={onChange} onBlur={onBlur} value={value} /> : initialValue}
    </TableCell>
}