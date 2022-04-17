import { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import Helmet from 'react-helmet'
import FilterCards from '../components/home/FilterCards'
import HomeCards from '../components/home/HomeCards'
import BoardCards from '../components/home/BoardCards'
import filterType from '../utils/filterType'
import getData from '../__mocks__/data.json'
import management from '../__mocks__/management.json'
import layoutPages from '../theme/layoutPages'

const data = getData.data
const boards = management.data[0].boards

export default function Home () {
  const theme = layoutPages()
  const [research, setResearch] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    if (refresh !== 0) setRefresh(0)
  }, [refresh])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box className={theme.boxContainer}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  display='flex'
                  justifyContent='space-between'
                  gap={2}
                  sx={{
                    '@media (max-width: 514px)': {
                      flexDirection: 'column',
                      alignItems: 'center'
                    }
                  }}
                >
                  <Typography fontSize={35} color='secondary'>
                    Endomarketing
                  </Typography>

                  <Box
                    sx={{
                      width: '60%',
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <FilterCards
                      data={data}
                      research={research}
                      setResearch={setResearch}
                    />

                    <Button
                      variant='contained'
                      color='ternary'
                      endIcon={<Add sx={{ ml: 4 }} />}
                      sx={{
                        ml: 1,
                        fontWeight: 'bold',

                        '@media (max-width: 514px)': { display: 'none' }
                      }}
                    >
                      criar
                    </Button>
                  </Box>
                </Grid>

                {data.map(item => {
                  if (research.length < 1) {
                    return (
                      <HomeCards
                        key={item.id}
                        item={item}
                        data={data}
                        setRefresh={setRefresh}
                      />
                    )
                  } else if (filterType(research, item.type)) {
                    return (
                      <HomeCards
                        key={item.id}
                        item={item}
                        data={data}
                        setRefresh={setRefresh}
                      />
                    )
                  }
                })}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                '@media (max-width: 1023px)': {
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'flex-start'
                },

                '@media (max-width: 644px)': {
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}
            >
              <Box
                sx={{
                  maxWidth: 278,
                  boxSizing: 'border-box',
                  padding: '28px 22px',
                  backgroundColor: '#fff2de',
                  border: '1px solid #dcd1c0'
                }}
              >
                <Typography
                  textAlign='justify'
                  color='secondary'
                  fontWeight='bold'
                  fontSize={16}
                >
                  Endormarketing
                </Typography>

                <Typography
                  mt={1.5}
                  mb={3.25}
                  textAlign='justify'
                  color='secondary'
                  fontWeight='light'
                  fontSize={14}
                  lineHeight={1.32}
                >
                  Endomarketing está relacionado às ações de treinamento ou
                  qualificação dos colaboradores da empresa visando um melhor
                  serviço para o cliente. Marketing interno, devido ao nome, é
                  usualmente confundido com Endomarketing mesmo sendo conceitos
                  diferentes.
                </Typography>

                <Button
                  variant='outlined'
                  color='secondary'
                  sx={{ fontWeight: 'bold', letterSpacing: 0 }}
                >
                  dispensar
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 1.5,
                  maxWidth: 278,
                  borderRadius: 2,
                  boxSizing: 'border-box',
                  padding: 1,
                  boxShadow: '2px 2px 5px #ccc',
                  backgroundColor: '#fdfdfd',

                  '@media (max-width: 1023px)': { mt: 0 },
                  '@media (max-width: 644px)': { mt: 2 }
                }}
              >
                <Typography
                  textAlign='justify'
                  color='secondary'
                  fontWeight='bold'
                  fontSize={16}
                >
                  Quadros de Gestão à Vista
                </Typography>

                {boards.map((board, i) => (
                  <BoardCards
                    key={i}
                    item={board}
                    data={boards}
                    setRefresh={setRefresh}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
