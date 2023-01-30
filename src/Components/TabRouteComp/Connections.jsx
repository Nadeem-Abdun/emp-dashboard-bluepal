import React, { useState } from 'react'
import { Box, Stack, Typography, Tab, styled } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import CardTemplate from '../CardTemplate'
import IdIcon from '../IMG/IdIcon.png'
import AnchorIcon from '../IMG/AnchorIcon.png'
import CertifiedIcon from '../IMG/CertifiedIcon.png'
import SailorIcon from '../IMG/SailorIcon.png'


export default function Connections() {
    const [value, setValue] = useState('1')
    const handleOnChange = (event, newValue) => {
        setValue(newValue)
    }
    const StyledTab = styled(Tab)({
        paddingX: '0px',
        height: '13px',
        fontSize: '13px',
        fontWeight: 'bold',
        fontcolor: '#23adee',
    })
    const usrDataArr = [
        {
            "id": 1,
            "avatar": "https://material-ui.com/static/images/avatar/1.jpg",
            "name": "Capt.Prakash Negi",
            "rank": "Captain",
            "lables": {
                "1": IdIcon,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 2,
            "avatar": "https://material-ui.com/static/images/avatar/3.jpg",
            "name": "Srivalsan D.Naidu",
            "rank": "First officer",
            "lables": {
                "1": IdIcon,
                "2": false,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 3,
            "avatar": "https://material-ui.com/static/images/avatar/4.jpg",
            "name": "Master Chemical tanker",
            "rank": "Cadet",
            "lables": {
                "1": IdIcon,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 4,
            "avatar": "https://material-ui.com/static/images/avatar/5.jpg",
            "name": "Capt.Prakash Negi",
            "rank": "Captain",
            "lables": {
                "1": IdIcon,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": false
            }
        },
        {
            "id": 5,
            "avatar": "https://material-ui.com/static/images/avatar/6.jpg",
            "name": "Capt.Prakash Negi",
            "rank": "Captain",
            "lables": {
                "1": false,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 6,
            "avatar": "https://material-ui.com/static/images/avatar/7.jpg",
            "name": "Srivalsan D.Naidu",
            "rank": "First officer",
            "lables": {
                "1": false,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 7,
            "avatar": "https://material-ui.com/static/images/avatar/1.jpg",
            "name": "Master Chemical tanker",
            "rank": "Cadet",
            "lables": {
                "1": IdIcon,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
        {
            "id": 8,
            "avatar": "https://material-ui.com/static/images/avatar/2.jpg",
            "name": "Capt.Prakash Negi",
            "rank": "Captain",
            "lables": {
                "1": IdIcon,
                "2": AnchorIcon,
                "3": CertifiedIcon,
                "4": SailorIcon
            }
        },
    ]
    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
            <Box height='95%' width='95%'>
                <Stack height='100%' width='100%' direction='column' spacing={2} display='flex' justifyContent='center' alignItems='center'>
                    <Box height='12%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Connections</Typography>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='13px' fontWeight='light' color='#a5acb1'>Meet your colleagues, make new connections</Typography>
                        </Stack>
                    </Box>
                    <Box height='8%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabContext value={value}>
                            <TabList onChange={handleOnChange}>
                                <StyledTab component='div' label='CONNECTION' value='1' />
                                <StyledTab component='div' label='FIND NEW CONNECTION' value='2' />
                            </TabList>
                        </TabContext>
                    </Box>
                    <Box height='80%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='95%' width='97%' spacing={2} direction='column' display='flex' justifyContent='center' alignItems='center'>
                            <Stack height='50%' width='100%' spacing={2} direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                <CardTemplate avatar={usrDataArr[0].avatar} name={usrDataArr[0].name} rank={usrDataArr[0].rank} lable1={usrDataArr[0].lables[1]} lable2={usrDataArr[0].lables[2]} lable3={usrDataArr[0].lables[3]} lable4={usrDataArr[0].lables[4]} />
                                <CardTemplate avatar={usrDataArr[1].avatar} name={usrDataArr[1].name} rank={usrDataArr[1].rank} lable1={usrDataArr[1].lables[1]} lable2={usrDataArr[1].lables[2]} lable3={usrDataArr[1].lables[3]} lable4={usrDataArr[1].lables[4]} />
                                <CardTemplate avatar={usrDataArr[2].avatar} name={usrDataArr[2].name} rank={usrDataArr[2].rank} lable1={usrDataArr[2].lables[1]} lable2={usrDataArr[2].lables[2]} lable3={usrDataArr[2].lables[3]} lable4={usrDataArr[2].lables[4]} />
                                <CardTemplate avatar={usrDataArr[3].avatar} name={usrDataArr[3].name} rank={usrDataArr[3].rank} lable1={usrDataArr[3].lables[1]} lable2={usrDataArr[3].lables[2]} lable3={usrDataArr[3].lables[3]} lable4={usrDataArr[3].lables[4]} />
                            </Stack>
                            <Stack height='50%' width='100%' spacing={2} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                <CardTemplate avatar={usrDataArr[4].avatar} name={usrDataArr[4].name} rank={usrDataArr[4].rank} lable1={usrDataArr[4].lables[1]} lable2={usrDataArr[4].lables[2]} lable3={usrDataArr[4].lables[3]} lable4={usrDataArr[4].lables[4]} />
                                <CardTemplate avatar={usrDataArr[5].avatar} name={usrDataArr[5].name} rank={usrDataArr[5].rank} lable1={usrDataArr[5].lables[1]} lable2={usrDataArr[5].lables[2]} lable3={usrDataArr[5].lables[3]} lable4={usrDataArr[5].lables[4]} />
                                <CardTemplate avatar={usrDataArr[6].avatar} name={usrDataArr[6].name} rank={usrDataArr[6].rank} lable1={usrDataArr[6].lables[1]} lable2={usrDataArr[6].lables[2]} lable3={usrDataArr[6].lables[3]} lable4={usrDataArr[6].lables[4]} />
                                <CardTemplate avatar={usrDataArr[7].avatar} name={usrDataArr[7].name} rank={usrDataArr[7].rank} lable1={usrDataArr[7].lables[1]} lable2={usrDataArr[7].lables[2]} lable3={usrDataArr[7].lables[3]} lable4={usrDataArr[7].lables[4]} />
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
