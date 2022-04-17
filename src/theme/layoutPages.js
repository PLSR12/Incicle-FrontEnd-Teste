import { makeStyles } from '@mui/styles'

const layoutPages = makeStyles(theme => ({
  root: { flexGrow: 1 },

  boxContainer: {
    margin: 0,
    padding: 0,
    display: 'flex',
    minHeight: 'calc(100vh - 65px)',
    justifyContent: 'center'
  },

  //ModalLink
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.ternary
  }
}))

export default layoutPages
