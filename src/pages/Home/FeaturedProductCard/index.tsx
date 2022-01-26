import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Divider,
   Typography
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import StyledCard from './StyledCard'
import ProductDescription from './ProductDescription'

import { MinerProps } from 'types'

function FeaturedProduct({ id, name, brand, images, price, description }: MinerProps) {
   const navigate = useNavigate()
   const image = typeof images === 'string' ? images : images.main
   const handleOnClick = () => navigate(`/products/${id}`)

   return (
      <StyledCard>
         <CardActionArea
            onClick={handleOnClick}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               height: '100%'
            }}
         >
            <CardMedia component="img" image={image} height={285} />
            {/* <CardMedia component={} /> */}
            <CardContent sx={{ width: '100%' }}>
               <Typography variant="subtitle1" color="gray">
                  {brand}
               </Typography>
               <Typography variant="h4">{name}</Typography>
               <Divider />
               <ProductDescription sx={{ mt: 1 }}>{description}</ProductDescription>
               <Box mt={1} display="flex" justifySelf="flex-end">
                  <Typography variant="h6">
                     ${price.toLocaleString('en-us') + '.00'}
                  </Typography>
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default FeaturedProduct