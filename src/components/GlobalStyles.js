import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    global: {
      '*': {
        boxSizeing: 'border-box',
        margin: 0,
        padding: 0
      },

      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },

      body: {
        height: '100%',
        width: '100%'
      },

      a: { textDecoration: 'none' },

      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
)

export default function GlobalStyles () {
  useStyles()
  return null
}
