import { useState } from 'react'
import {
  Avatar,
  Backdrop,
  Box,
  Divider,
  Fade,
  Modal,
  Typography
} from '@mui/material'
import { Close } from '@mui/icons-material'
import layoutPages from '../../theme/layoutPages'

export default function ModalLink ({ item }) {
  const theme = layoutPages()
  const [open, setOpen] = useState(false)

  function handleOpen () {
    setOpen(true)
  }
  function handleClose () {
    setOpen(false)
  }

  return (
    <>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        color='#707070'
        sx={{
          height: 11,
          margin: '0 4px',
          opacity: 0.75,

          '@media (max-width: 414px)': { display: 'none' }
        }}
      />

      <Typography
        fontSize={9}
        fontWeight='light'
        color='#3489b1'
        textTransform='uppercase'
        onClick={handleOpen}
        sx={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        {`${item.length} confirmados de 15`}
      </Typography>

      <Modal
        className={theme.modal}
        closeAfterTransition
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade
          in={open}
          sx={{
            padding: '21px 16px',
            backgroundColor: theme => theme.palette.background.default,
            maxWidth: 570,
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: theme => theme.zIndex.drawer + 1
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                marginBottom: 1,
                display: 'flex'
              }}
            >
              <Typography fontSize={20} color='secondary'>
                Convidados
              </Typography>

              <Close
                onClick={handleClose}
                sx={{
                  color: '#707070',
                  cursor: 'pointer',
                  position: 'relative',
                  left: '50%',

                  '@media (max-width: 280px)': { left: '46%' }
                }}
              />
            </Box>

            {item.map((confirmation, i) => (
              <Box
                key={i}
                sx={{
                  marginBottom: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '11px 11px 9px',
                  backgroundColor: '#fff',
                  boxShadow: '2px 2px 5px #ccc'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Avatar
                    src={confirmation.avatar}
                    sx={{
                      marginRight: 2,
                      width: 73,
                      height: 73,
                      borderRadius: 0
                    }}
                  />

                  <Box>
                    <Typography
                      fontSize={16}
                      fontWeight='bold'
                      color='secondary'
                    >
                      {confirmation.name}
                    </Typography>

                    <Typography
                      fontSize={12}
                      color='secondary'
                      sx={{ padding: 0.25 }}
                    >
                      USERNAME: {confirmation.username}
                    </Typography>

                    <Typography
                      fontSize={12}
                      textAlign='center'
                      padding={0.5}
                      color='primary'
                      sx={{
                        textTransform: 'uppercase',
                        backgroundColor: confirmation.confirmed_presence
                          ? 'limegreen'
                          : 'red'
                      }}
                    >
                      {confirmation.confirmed_presence
                        ? 'confirmado'
                        : 'não confirmado'}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
