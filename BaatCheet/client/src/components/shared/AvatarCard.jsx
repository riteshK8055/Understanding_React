import React from 'react'
import { Stack , AvatarGroup, Box , Avatar } from '@mui/material'

const AvatarCard = ({avatar = [], max=4}) => {

  return( <Stack direction = {"row"} spacing = {0.5}>

    <AvatarGroup max = {max} > 
      
      <Box width={"5rem"} height={"3rem"}>

        {avatar.map((i,index) => (
            <Avatar 
            
               key={Math.random() * 100}
               src={i}
               alt={`Avatar ${index}`}
               sx={{
                 width: "3rem",
                 height: "3rem",
                 position: "absolute",
                 left:{

                    xs: `${0.5 + index}rem`,
                    sm: `${1 + index}rem`,
                 },
               }}

            />
        ))}

      </Box>

    </AvatarGroup>

  </Stack>
 ) 
}

export default AvatarCard