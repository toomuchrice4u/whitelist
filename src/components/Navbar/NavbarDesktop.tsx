import { AppBar, Box, Container, Toolbar, IconButton, Badge } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { open, selectNumItems } from 'app/cart/cartSlice'
import NavButton from './NavButton'
import logo from 'assets/img/logo/desktop-logo-fill.svg'
import type { NavbarProps } from './index'

function NavbarDesktop({ routes, ...rest }: NavbarProps) {
   const theme = useTheme()
   const navigate = useNavigate()
   const numItems = useAppSelector(selectNumItems)
   const dispatch = useAppDispatch()
   const handleCartOpen = () => dispatch(open())

   return (
      <AppBar
         position="absolute"
         sx={{
            display: {
               xs: 'none',
               lg: 'block'
            },
            boxShadow: 'none',
            background: 'transparent'
         }}
         {...rest}
      >
         <Container>
            <Toolbar disableGutters sx={{ height: 80 }}>
               <Box display="flex" width="100%" flexDirection="row" alignItems="center">
                  <Box
                     display="flex"
                     aria-label="Whitelist"
                     onClick={() => navigate('')}
                     sx={{
                        '&:hover': {
                           cursor: 'pointer'
                        }
                     }}
                  >
                     <img
                        style={{
                           height: 50,
                           width: 'auto',
                           filter: `brightness(${
                              theme.palette.mode === 'dark' ? 100 : 0
                           })`
                        }}
                        src={logo}
                        alt="Whitelist"
                     />
                  </Box>

                  <Box component="nav" ml="auto">
                     {routes.map(
                        (route, i) =>
                           route.nav.match(/desktop|both/) && (
                              <NavButton
                                 key={i}
                                 name={route.name}
                                 path={route.path}
                                 aria-label={route.name}
                              />
                           )
                     )}
                     <IconButton
                        aria-label="cart"
                        onClick={handleCartOpen}
                        sx={{
                           '&:hover': {
                              background:
                                 'linear-gradient(0deg, rgba(67, 40, 183, 0.6), rgb(0 180 230 / 50%));'
                           }
                        }}
                     >
                        <Badge badgeContent={numItems} color="error">
                           <ShoppingCartIcon
                              sx={{
                                 fill: '#5cfff3'
                              }}
                           />
                        </Badge>
                     </IconButton>
                  </Box>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavbarDesktop
