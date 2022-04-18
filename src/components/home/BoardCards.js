import { Public } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import MoreInfo from './MoreInfo'

const style = {
  height: 16,
  width: 16,
  borderRadius: 50,
  backgroundColor: '#fff'
}

export default function BoardCards (props) {
  const { item, data, setData, setRefresh } = props

  return (
    <Box
      sx={{
        marginTop: 1,
        padding: 0.5,
        backgroundColor: '#3489b11a'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography marginTop={-0.25} fontSize={13} fontWeight={400} color='secondary'>
          {item.title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton sx={style}>
            <Public sx={style} />
          </IconButton>
          <MoreInfo
            item={item}
            data={data}
            setData={setData}
            setRefresh={setRefresh}
            style={style}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {item.resume_files.map((file, i) => (
          <Avatar
            key={i}
            src={file.file}
            sx={{
              width: 60,
              height: 60,
              borderRadius: 0
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
