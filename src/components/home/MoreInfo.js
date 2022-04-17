import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

const options = ['Excluir item']

const ITEM_HEIGHT = 48

export default function MoreInfo (props) {
  const { item, data, setRefresh, style } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const handleDelete = () => {
    const index = data.indexOf(item)
    if (index > -1) data.splice(index, 1)
    setRefresh(1)
    handleClose()
  }

  return (
    <>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        sx={style}
        onClick={handleClick}
      >
        <MoreHoriz sx={{ width: style.width, height: style.height }} />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === 'more'}
            onClick={handleDelete}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
