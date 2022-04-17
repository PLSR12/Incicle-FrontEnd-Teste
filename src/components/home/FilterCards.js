import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 4
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 94
    }
  }
}

export default function FilterCards ({ data, research, setResearch }) {
  const handleChange = event => {
    const {
      target: { value }
    } = event
    setResearch(typeof value === 'string' ? value.split(',') : value)
  }

  const options = () => {
    const types = []

    data.forEach(item => {
      if (types.indexOf(item.type) === -1) {
        types.push(item.type)
      }
    })

    return types
  }
  return (
    <>
      <FormControl
        sx={{
          minWidth: 94,

          '& label': { top: -7 },
          '@media (max-width: 514px)': { width: '100%' }
        }}
      >
        <InputLabel id='types' color='secondary'>
          TIPO
        </InputLabel>
        <Select
          labelId='types'
          id='multiple-checkbox'
          multiple
          color='secondary'
          value={research}
          variant='outlined'
          onChange={handleChange}
          input={
            <OutlinedInput
              label='TIPO'
              sx={{
                height: 39,
                backgroundColor: '#fff'
              }}
            />
          }
          renderValue={selected => {
            const newValue = []

            selected.forEach(el => {
              el === 'event'
                ? newValue.push('evento')
                : el === 'release'
                ? newValue.push('comunicado')
                : newValue.push('publicação')
            })

            return newValue.join(', ')
          }}
          MenuProps={MenuProps}
        >
          {options().map(option => (
            <MenuItem key={option} value={option}>
              <Checkbox
                checked={research.indexOf(option) > -1}
                color='secondary'
              />
              <ListItemText
                primary={
                  option === 'event'
                    ? 'evento'
                    : option === 'release'
                    ? 'comunicado'
                    : 'publicação'
                }
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
