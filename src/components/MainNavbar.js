import { AppBar, IconButton, Toolbar } from '@mui/material'
import { Add } from '@mui/icons-material'
import Logo from './Logo'

export default function MainNavbar () {
  return (
    <AppBar>
      <Toolbar
        sx={{
          height: 64,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Logo />

        <IconButton
          variant='contained'
          sx={{
            display: 'none',
            backgroundColor: '#3489b1',

            '&:hover': { backgroundColor: '#707070' },
            '@media (max-width: 514px)': { display: 'flex' }
          }}
        >
          <Add color='primary' />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
