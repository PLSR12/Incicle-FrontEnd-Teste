import { Avatar, Box, Divider, Grid, Typography } from '@mui/material'
import ModalLink from './ModalLink'
import MoreInfo from './MoreInfo'

export default function HomeCards ({ item, data, setRefresh }) {
  return (
    <Grid key={item.id} item xs={12}>
      <Box
        sx={{
          position: 'relative',
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
            alignItems: 'center',

            '@media (max-width: 425px)': { alignItems: 'flex-start' }
          }}
        >
          <Avatar
            src={item.file.url}
            sx={{
              mr: 2,
              width: 73,
              height: 73,
              borderRadius: 0,

              '@media (max-width: 425px)': { width: 50, height: 50 },
              '@media (max-width: 315px)': { display: 'none' }
            }}
          />
          <Box sx={{ mt: -0.5 }}>
            <Typography
              fontSize={16}
              fontWeight='bold'
              color='secondary'
              sx={{
                '@media (max-width: 425px)': { width: 250 },
                '@media (max-width: 399px)': { width: 160 }
              }}
            >
              {item.title}
            </Typography>

            <Box
              sx={{
                mt: 0.5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                '@media (max-width: 414px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 0.5
                }
              }}
            >
              <Typography
                fontSize={6}
                fontWeight='bold'
                color='primary'
                sx={{
                  padding: 0.25,
                  backgroundColor:
                    item.type === 'event'
                      ? '#ee8686'
                      : item.type === 'publication'
                      ? '#707070'
                      : '#3489b1'
                }}
              >
                {item.type === 'event'
                  ? 'EVENTO'
                  : item.type === 'publication'
                  ? 'PUBLICAÇÃO'
                  : 'COMUNICADO'}
              </Typography>

              {item.type !== 'event' ? null : (
                <>
                  <Typography
                    ml={0.5}
                    fontSize={9}
                    fontWeight='light'
                    color='secondary'
                    sx={{
                      '@media (max-width: 425px)': { ml: 0 }
                    }}
                  >
                    {`${item.info.place.toUpperCase()}`}
                  </Typography>

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
                </>
              )}

              <Typography
                // ml={.5}
                fontSize={9}
                fontWeight='light'
                color='ternary'
              >
                {`${item.info.date}`}
              </Typography>

              {item.type !== 'event' ? null : (
                <ModalLink key={item.id} item={item.invited_people} />
              )}
            </Box>

            <Typography
              mt={0.5}
              fontSize={13}
              fontWeight='light'
              color='secondary'
              sx={{
                '@media (max-width: 399px)': { textAlign: 'justify' }
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>

        <MoreInfo
          key={item.id}
          item={item}
          data={data}
          setRefresh={setRefresh}
          style={{
            width: 24,
            height: 24,
            borderRadius: 50,
            backgroundColor: '#dbdbdb',

            '@media (max-width: 425px)': {
              position: 'absolute',
              top: '5%',
              right: '3%'
            }
          }}
        />
      </Box>
    </Grid>
  )
}
