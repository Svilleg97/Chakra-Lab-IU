import { Box, Button, ButtonGroup, Stack  } from "@chakra-ui/react";

export function Header(){
    const basicBoxStyles = {
        display: 'flex',
        marginTop: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width:'60vw',
        height: '35vh',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
          'url(https://medac.es/sites/default/files/styles/img_blog_big_retina/public/blog/destacadas/deporte-y-corazon.jpg?itok=OHOUkq4G) center/cover no-repeat',
    }
    return(
        <div>
            <Box sx={basicBoxStyles}>
                <Stack direction='column' spacing={4} align='center' color= 'white'>
                    <h1>Domina el Terreno</h1>
                    <ButtonGroup gap='4'>
                        <Button colorScheme='blackAlpha' color="white">VER DETALLES</Button>
                        <Button colorScheme='blackAlpha' color="white">VER VIDEO</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </div>
    )
}