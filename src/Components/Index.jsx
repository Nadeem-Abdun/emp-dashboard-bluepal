import React, { useState } from 'react'
import { Box, Stack, Avatar, Typography, Chip, Tab, styled } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './TabRouteComp/Dashboard'
import Jobs from './TabRouteComp/Jobs'
import SeaDocs from './TabRouteComp/SeaDocs'
import Connections from './TabRouteComp/Connections'
import DashboardIcon from './IMG/DashboardIcon.png'
import JobsIcon from './IMG/JobsIcon.png'
import SeaDocsIcon from './IMG/SeaDocsIcon.png'
import ConnectionsIcon from './IMG/ConnectionsIcon.png'
import AppBars from './AppBars'


export default function Index() {
    // SideBar Dependency Code-Start
    const [value, setValue] = useState('1')
    const handleTabChange = (event, newValue) => {
        setValue(newValue)
    }
    const tabsArr = [
        <Stack direction='column' display='flex' justifyContent='center' alignItems='center' spacing={0.7}>
            <Box component="img" height='55px' alt="Dashboard Logo" src={DashboardIcon} />
            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#e7ebee' }}>Dashboard</Typography>
        </Stack>,
        <Stack direction='column' display='flex' justifyContent='center' alignItems='center' spacing={0.7}>
            <Box component="img" height='55px' alt="Dashboard Logo" src={JobsIcon} />
            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#e7ebee' }}>Jobs</Typography>
        </Stack>,
        <Stack direction='column' display='flex' justifyContent='center' alignItems='center' spacing={0.7}>
            <Box component="img" height='55px' alt="Dashboard Logo" src={SeaDocsIcon} />
            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#e7ebee' }}>Sea Docs</Typography>
        </Stack>,
        <Stack direction='column' display='flex' justifyContent='center' alignItems='center' spacing={0.7}>
            <Box component="img" height='55px' alt="Dashboard Logo" src={ConnectionsIcon} />
            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#e7ebee' }}>Connections</Typography>
        </Stack>,
    ]
    const routes = ['/', '/jobs', '/seadocs', '/connections'];
    // SideBar Dependency Code-End

    const StyledTabList = styled(TabList)({
        heigth: '25%',
        width: '99%',
        fontcolor: '#23adee',
    })

    return (
        <>
            <Box height='100%' width='100%'>
                <Stack height='100%' width='100%' direction='row'>
                    <Box height='100%' width='18%' bgcolor='#2a58ad'>
                        {/* SideBar-Start */} {/* Because we need to define the routes and route handling tabs we brought the complete sidebar component into one page/file */}
                        <Box height='100%' width='100%'>
                            <Stack height='100%' width='100%' direction='column'>
                                {/* EmptyBox */}
                                <Box height='5%' width='100%' display='flex' justifyContent='center' alignItems='center' ></Box>
                                {/* AvatarBox */}
                                <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                                    <Avatar alt='Devinder Kumar' src='https://material-ui.com/static/images/avatar/2.jpg' sx={{ height: '95%', width: '38%' }} />
                                </Box>
                                {/* NameBox */}
                                <Box height='12%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                                    <Stack height='100%' width='50%' direction='column' justifyContent='center' alignItems='center'>
                                        <Typography component='h3' fontSize='15px' fontWeight='medium' sx={{ color: '#e7ebee' }}>Devinder Kumar</Typography>
                                        <Typography component='h3' fontSize='13px' fontWeight='medium' sx={{ color: '#63b6dd' }}>Cheif Officer</Typography>
                                        <Chip label='Update Profile' sx={{ color: '#e7ebee', fontSize: '12px', marginTop: '5px' }} clickable />
                                    </Stack>
                                </Box>
                                {/* TabsBox */}
                                <Box height='68%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                                    <TabContext value={value}>
                                        <StyledTabList onChange={handleTabChange} orientation='vertical' indicatorColor='secondary'>
                                            <Tab label={tabsArr[0]} value={routes[0] && '1'} component={Link} to={routes[0]} />
                                            <Tab label={tabsArr[1]} value={routes[1] && '2'} component={Link} to={routes[1]} />
                                            <Tab label={tabsArr[2]} value={routes[2] && '3'} component={Link} to={routes[2]} />
                                            <Tab label={tabsArr[3]} value={routes[3] && '4'} component={Link} to={routes[3]} />
                                        </StyledTabList>
                                    </TabContext>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    {/* SideBar-End */}
                    <Box height='100%' width='82%' bgcolor='silver'>
                        {/* Main Content Panel */}
                        <Stack height='100%' width='100%' direction='column'>
                            {/* AppBar */}
                            <Box height='10%' width='100%' bgcolor='#fefefe'>
                                <AppBars />
                            </Box>
                            {/* Content */}
                            <Box height='90%' width='100%' bgcolor='#eaedf2' overflow='auto'>
                                <Box height='100%' width='100%'>
                                    <Routes>
                                        <Route exact path='/' element={<Dashboard />} />
                                        <Route exact path='/jobs' element={<Jobs />} />
                                        <Route exact path='/seadocs' element={<SeaDocs />} />
                                        <Route exact path='/connections' element={<Connections />} />
                                    </Routes>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box >
        </>
    )
}