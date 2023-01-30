import React from 'react'
import { Box, Stack, Avatar, Typography, Chip } from '@mui/material'

export default function CardTemplate(props) {
    const { avatar, name, rank, lable1, lable2, lable3, lable4 } = props
    return (
        <>
            <Box height='100%' width='25%' bgcolor='#ffffff' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' spacing={1} direction='column'>
                    <Box height='5%' width='100%'>
                        {/* Empty Box */}
                    </Box>
                    <Box height='35%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Avatar alt='Devinder Kumar' src={avatar} sx={{ height: '95%', width: '28%' }} />
                    </Box>
                    <Box height='25%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' direction='column' spacing={0} justifyContent='center' alignItems='center'>
                            <Typography component='h4' fontSize='16px' color='#22aaed' fontWeight='9px'>{name}</Typography>
                            <Typography component='h4' fontSize='13px'>{rank}</Typography>
                        </Stack>
                    </Box>
                    <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' direction='row' spacing={0.5} justifyContent='center' alignItems='center'>
                            {lable1 && <Box component="img" height='25px' alt="lables" src={lable1} />}
                            {lable2 && <Box component="img" height='25px' alt="lables" src={lable2} />}
                            {lable3 && <Box component="img" height='25px' alt="lables" src={lable3} />}
                            {lable4 && <Box component="img" height='25px' alt="lables" src={lable4} />}                            
                        </Stack>
                    </Box>
                    <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' direction='row' justifyContent='space-evenly' alignItems='center'>
                            <Chip clickable label='message' sx={{ fontSize: '13px', bgcolor: '#67b730', color: '#ffffff', paddingX: '5px' }} />
                            <Chip clickable label='unfriend' sx={{ fontSize: '13px', bgcolor: '#24acea', color: '#ffffff', paddingX: '5px' }} />
                        </Stack>
                    </Box>
                    <Box height='5%' width='100%'>
                        {/* Empty Box */}
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
