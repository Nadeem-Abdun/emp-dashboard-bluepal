import React, { useState } from 'react'
import { Box, Typography, Stack, Chip, IconButton, Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FbCircleIcon from '../IMG/FbCircleIcon.png'
import MercyShipsIcon from '../IMG/MercyShipsIcon.png'
import HudsonIcon from '../IMG/HudsonIcon.png'
import CostaSqrIcon from '../IMG/CostaSqrIcon.png'
import PheoniciansIcon from '../IMG/PheoniciansIcon.png'


export default function SeaDocs() {
    const [value, setValue] = useState('1');
    const handleOnChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
            <Stack height='95%' width='95%' direction='column'>
                {/* 1-Title And Notification Icons */}
                <Box height='10%' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                    {/* Title */}
                    <Box height='100%' width='30%' display='flex' justifyContent='flex-start' alignItems='center'>
                        <Stack direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Master</Typography>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='13px' fontWeight='light' color='#88929c'>Chemical Tanker</Typography>
                        </Stack>
                    </Box>
                    {/* Notification Icons */}
                    <Box height='100%' width='30%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack direction='row' spacing={1} display='flex' justifyContent='flex-end' alignItems='center'>
                            <Chip label='Active' sx={{ bgcolor: '#ffffff' }} icon={<FiberManualRecordIcon sx={{ fill: '#68b731' }} />} clickable />
                            <IconButton sx={{ bgcolor: '#ffffff' }}><RestartAltIcon fontSize='small' sx={{ color: '#2aace7' }}/></IconButton>
                            <IconButton sx={{ bgcolor: '#ffffff' }}><BorderColorIcon fontSize='small' sx={{ color: '#2aace7' }}/></IconButton>
                            <IconButton sx={{ bgcolor: '#ffffff' }}><DeleteOutlinedIcon fontSize='small' sx={{ color: '#2aace7' }}/></IconButton>
                        </Stack>
                    </Box>
                </Box>
                {/* 2-Tabs */}
                <Box height='8.5%' width='100%' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabContext value={value}>
                        <TabList onChange={handleOnChange}>
                            <Tab label='DESCRIPTION' value='1' />
                            <Tab label='INSIGHT' value='2' />
                            <Tab label='APPLICANTS' value='3' />
                            <Tab label='NOTIFICATIONS' value='4' />
                        </TabList>
                    </TabContext>
                </Box>
                {/* 3-Description */}
                <Box height='81.5%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='95%' width='98%' spacing={1.5} direction='row' display='flex' justifyContent='center' alignItems='center'>
                        <Box height='100%' width='70%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='97%' width='95%' direction='column' display='flex' justifyContent='center' alignItems='center' >
                                {/* Title */}
                                <Box height='10%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' >
                                    <Typography component='h2' fontSize='18px' fontWeight='5px'>Job Description</Typography>
                                </Box>
                                {/* Description Rack */}
                                <Box height='90%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' >
                                    <Stack height='100%' width='100%' spacing={1} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                        {/* Row-1 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Rank</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Master</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-2 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Ship type</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Chemical Tanker</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-3 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Min. Experience</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>06 Months</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-4 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>US Visa</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Required</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-5 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Approx Joining</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>20 September 2016</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-6 */}
                                        <Stack height='7%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Salary</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>5000 USD</Typography>
                                            </Box>
                                        </Stack>
                                        {/* Row-7 */}
                                        <Stack height='18%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='flex-start'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Ship Details</Typography>
                                            </Box>
                                            <Stack height='100%' width='60%' direction='column' display='flex' justifyContent='center' alignItems='flex-start' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Chembulk gibrlater</Typography>
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>20000 DWT</Typography>
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>2010 Built</Typography>
                                            </Stack>
                                        </Stack>
                                        {/* Row-8 */}
                                        <Stack height='25%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='flex-start'  >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Description</Typography>
                                            </Box>
                                            <Box height='100%' width='60%' display='flex' justifyContent='flex-start' alignItems='center' >
                                                <Typography component='h6' fontSize='14px' fontWeight='light' color='#727e8c'>Donec egestas vitae mi et feugiat. Quisque urna mi, vestibulum sit amet congue quis, imperdiet quis dui. Pellentesque rhoncus, justo et sollicitudin feugiat ante urna fringilla nisl, eu laoreet leo leo in velit. ante urna fringilla nisl, eu laoreet leo leo in velit.</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                        <Box height='100%' width='30%' display='flex' justifyContent='center' alignItems='center'>
                            <Stack height='100%' width='100%' spacing={1.5} direction='column' display='flex' justifyContent='center' alignItems='center' >
                                {/* fb Share button */}
                                <Box height='20%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                    <Stack height='90%' width='87%' spacing={2.5} direction='row' display='flex' justifyContent='flex-start' alignItems='center'>
                                        <Box component='img' alt='FbLogo' src={FbCircleIcon} height='45px' />
                                        <Typography component='h2' fontSize='15px' fontWeight='12px' color='black'>Share on facebook</Typography>
                                    </Stack>
                                </Box>
                                {/* Other jobs column */}
                                <Box height='80%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                    <Stack height='93%' width='87%' spacing={1} direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <Box height='9%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='18px' fontWeight='5px'>Other Jobs</Typography>
                                        </Box>
                                        {/* Job 1 Box */}
                                        <Box height='22.25%' width='100%' display='flex' justifyContent='center' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Stack height='100%' width='100%' spacing={0.5} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                                <Box height='100%' width='35%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Box component='img' alt='MercyShipsIcon' src={MercyShipsIcon} height='60px' />
                                                </Box>
                                                <Box height='100%' width='65%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Stack height='100%' width='100%' spacing={0.2} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                                        <Typography component='h4' fontSize='15px' fontWeight='bold' color='#2eaaed'>Master</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#a9adb7'>Chemical Tanker</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#d2d5d9'>Posted: 20 Aug 2016</Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        {/* Job 2 Box */}
                                        <Box height='22.25%' width='100%' display='flex' justifyContent='center' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Stack height='100%' width='100%' spacing={0.5} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                                <Box height='100%' width='35%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Box component='img' alt='HudsonIcon' src={HudsonIcon} height='60px' />
                                                </Box>
                                                <Box height='100%' width='65%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Stack height='100%' width='100%' spacing={0.2} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                                        <Typography component='h4' fontSize='15px' fontWeight='bold' color='#2eaaed'>Cheif Officer</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#a9adb7'>Oil Tanker</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#d2d5d9'>Posted: 20 Aug 2016</Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        {/* Job 3 Box */}
                                        <Box height='22.25%' width='100%' display='flex' justifyContent='center' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Stack height='100%' width='100%' spacing={0.5} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                                <Box height='100%' width='35%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Box component='img' alt='CostaSqrIcon' src={CostaSqrIcon} height='60px' />
                                                </Box>
                                                <Box height='100%' width='65%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Stack height='100%' width='100%' spacing={0.2} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                                        <Typography component='h4' fontSize='15px' fontWeight='bold' color='#2eaaed'>Executive Officer</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#a9adb7'>Bulk Carrier</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#d2d5d9'>Posted: 20 Aug 2016</Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        {/* Job 4 Box */}
                                        <Box height='22.25%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                            <Stack height='100%' width='100%' spacing={0.5} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                                <Box height='100%' width='35%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Box component='img' alt='PheoniciansIcon' src={PheoniciansIcon} height='60px' />
                                                </Box>
                                                <Box height='100%' width='65%' display='flex' justifyContent='center' alignItems='center'>
                                                    <Stack height='100%' width='100%' spacing={0.2} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                                        <Typography component='h4' fontSize='15px' fontWeight='bold' color='#2eaaed'>Master</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#a9adb7'>Chemical Tanker</Typography>
                                                        <Typography component='h6' fontSize='11px' fontWeight='medium' color='#d2d5d9'>Posted: 20 Aug 2016</Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box height='2%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                            <MoreHorizOutlinedIcon sx={{ color: '#88929c' }} />
                                        </Box>
                                    </Stack >
                                </Box >
                            </Stack >
                        </Box >
                    </Stack >
                </Box >
            </Stack >
        </Box >
    )
}
