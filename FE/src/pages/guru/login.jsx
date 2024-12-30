import { Box, Typography, Container } from "@mui/material"

export default function Login() {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh', bgcolor: '#FCF7FE', padding: '50px'
    }}>
      <Box
        sx={{
          bgcolor: 'white',
          width: '100%',
          height: '100%',
          borderRadius: '4px',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1.5fr' },
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          01
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Container
            sx={{
              bgcolor: '#9F5BC2',
              width: '100%',
              height: '100%',
              borderRadius: '0 4px 4px 0',
              display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center'
            }}
          >
            <img
              src="img/auth-img.png"
              alt="Contoh Gambar"
              style={{
                objectFit: 'contain',
                width: '70%',
              }}
            />
          </Container>
        </Box>
      </Box>

    </Box>
  )
}