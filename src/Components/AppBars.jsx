import React, { useState } from 'react'
import { Box, Stack, Tab, Typography, Badge, IconButton } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';


export default function AppBars() {
    const [value, setValue] = useState('1')
    const handleOnChange = (event, newValue) => {
        setValue(newValue)
    }
    const tabsArray = [
        <Typography component='h2' fontSize='18px' fontWeight='25px' textTransform='capitalize'>Blog</Typography>,
        <Typography component='h2' fontSize='18px' fontWeight='25px' textTransform='capitalize'>Questions</Typography>,
        <Typography component='h2' fontSize='18px' fontWeight='25px' textTransform='capitalize'>Companies</Typography>,
        <Typography component='h2' fontSize='18px' fontWeight='25px' textTransform='capitalize'>Contact</Typography>,
    ]
    return (
        <>
            <Box height='100%' width='100%' display='flex'>
                <Box height='100%' flex={3.1} display='flex' alignItems='center' marginTop={1} marginLeft='35px'>
                    <IconButton><SearchIcon fontSize='medium' sx={{ color: '#858e96' }} /></IconButton>
                </Box>
                <Box height='100%' flex={5} display='flex' alignItems='flex-end'>
                    <TabContext value={value}>
                        <TabList onChange={handleOnChange} indicatorColor='primary'>
                            <Tab label={tabsArray[0]} value='1' />
                            <Tab label={tabsArray[1]} value='2' />
                            <Tab label={tabsArray[2]} value='3' />
                            <Tab label={tabsArray[3]} value='4' />
                        </TabList>
                    </TabContext>
                </Box>
                <Box height='100%' flex={3.9} display='flex' justifyContent='center' alignItems='center' marginTop={1}>
                    <Stack direction='row' height='50%' width='80%' justifyContent='flex-end' alignItems='center'>
                        <IconButton><SettingsOutlinedIcon fontSize='medium' sx={{ color: '#858e96' }} /></IconButton>
                        <IconButton><Badge badgeContent={4} color="primary">
                            <DraftsOutlinedIcon fontSize='medium' sx={{ color: '#858e96' }} />
                        </Badge></IconButton>
                        <IconButton><LogoutOutlinedIcon fontSize='medium' sx={{ color: '#858e96' }} /></IconButton>

                    </Stack>
                </Box>
            </Box>
        </>
    )
}
