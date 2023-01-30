import React from 'react'
import { Avatar, Box, Chip, IconButton, Stack, Typography, Divider } from '@mui/material'
import CircularProgress from '../IMG/CircularProgress.png'
import ViewCount from '../IMG/ViewCount.png'
import ViewsBars from '../IMG/ViewsBars.png'
import JobOffers from '../IMG/JobOffers.png'
import Connections from '../IMG/Connections.png'
import QandA from '../IMG/QandA.png'
import CostaIcon from '../IMG/Costa-Icon.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Dashboard() {
    return (
        <>
            <Box height='160%' width='100%'>
                <Stack height='100%' width='100%' spacing={3} direction='column' justifyContent='center' alignItems='center' marginY={3}>
                    {/* Row-1 */}
                    <Stack height='33%' width='95%' spacing={0.3} direction='column' display='flex' justifyContent='center' alignItems='center'>
                        <Box height='10%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' marginLeft={6} marginBottom={1}>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Profile Strength</Typography>
                        </Box>
                        <Box height='90%' width='100%'>
                            {/* Row-1 Cards */}
                            <Stack height='100%' width='100%' spacing={5} direction='row' justifyContent='center' alignItems='center'>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="CircularProgress" src={CircularProgress} />
                                    </Box>
                                </Box>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="ViewCount" src={ViewCount} />
                                    </Box>
                                </Box>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="ViewsBars" src={ViewsBars} />
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    {/* Row-2 */}
                    <Stack height='33%' width='95%' display='flex' justifyContent='center' alignItems='center'>
                        <Box height='10%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' marginLeft={6} marginTop={2} marginBottom={1}>
                            <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Engagement score</Typography>
                        </Box>
                        <Box height='90%' width='100%'>
                            {/* Row-1 Cards */}
                            <Stack height='100%' width='100%' spacing={5} direction='row' justifyContent='center' alignItems='center'>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="JobOffers" src={JobOffers} />
                                    </Box>
                                </Box>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="Connections" src={Connections} />
                                    </Box>
                                </Box>
                                {/* Row-1, Card-2 */}
                                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                                    <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                        <Box component="img" height='265px' width='275px' alt="QandA" src={QandA} />
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    {/* Row-3 */}
                    <Box height='33%' width='91%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' spacing={0.3} direction='column' justifyContent='center' alignItems='center'>
                            <Box height='10%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' marginTop={2} marginBottom={1}>
                                <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Feed</Typography>                                
                            </Box>
                            {/* Row-1 */}
                            <Box height='30%' width='100%' display='flex' bgcolor='#ffffff' justifyContent='center' alignItems='center'>
                                <Box height='100%' display='flex' flex={0.2} justifyContent='center' alignItems='center'>
                                    {/* Empty Box */}
                                </Box>
                                <Box height='100%' display='flex' flex={1} justifyContent='center' alignItems='center'>
                                    <Avatar alt="Sanjay Sharma" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
                                </Box>
                                <Box height='100%' display='flex' flex={8} justifyContent='flex-start' alignItems='center'>
                                    <Typography component='body2' fontSize='16px' color='#8a9197'><Box component='a' href='/' sx={{ color: '#24acea', textDecoration: 'none' }}>Sanjay Sharma</Box> is now following you</Typography>
                                </Box>
                                <Box height='100%' display='flex' flex={2} justifyContent='center' alignItems='center'>
                                    <Stack height='100%' width='100%' spacing={0.1} direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                        <Chip clickable label='follow' sx={{ fontSize: '15px', bgcolor: '#24acea', color: '#ffffff', paddingX: '5px' }} />
                                        <IconButton><MoreHorizIcon fontSize='large' sx={{ color: '#888f94' }} /></IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                            {/* Row-2 */}
                            <Box height='30%' width='100%' display='flex' bgcolor='#ffffff' justifyContent='center' alignItems='center'>
                                <Box height='100%' display='flex' flex={0.2} justifyContent='center' alignItems='center'>
                                    {/* Empty Box */}
                                </Box>
                                <Box height='100%' display='flex' flex={1} justifyContent='center' alignItems='center'>
                                    <Avatar alt="Amritraz" src="https://material-ui.com/static/images/avatar/5.jpg" sx={{ width: 50, height: 50 }} />
                                </Box>
                                <Box height='100%' display='flex' flex={8} justifyContent='flex-start' alignItems='center'>
                                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                        <Typography component='body2' fontSize='16px' color='#8a9197'><Box component='a' href='/' sx={{ color: '#24acea', textDecoration: 'none' }}>Amritraz</Box> posted a new blog</Typography>
                                        <Typography component='body2' fontSize='15px' color='black'>"what is abort point and how you can use...</Typography>
                                    </Stack>
                                </Box>
                                <Box height='100%' display='flex' flex={2} justifyContent='center' alignItems='center'>
                                    <Stack height='100%' width='100%' spacing={0.1} direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                        <Chip clickable label='follow' sx={{ fontSize: '15px', bgcolor: '#24acea', color: '#ffffff', paddingX: '5px' }} />
                                        <IconButton><MoreHorizIcon fontSize='large' sx={{ color: '#888f94' }} /></IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                            {/* Row-3 */}
                            <Box height='30%' width='100%' display='flex' bgcolor='#ffffff' justifyContent='center' alignItems='center'>
                                <Box height='100%' display='flex' flex={0.2} justifyContent='center' alignItems='center'>
                                    {/* Empty Box */}
                                </Box>
                                <Box height='100%' display='flex' flex={1} justifyContent='center' alignItems='center'>
                                    <Avatar alt="Costa Icon" src={CostaIcon} sx={{ width: 50, height: 50 }} />
                                </Box>
                                <Box height='100%' display='flex' flex={8} justifyContent='flex-start' alignItems='center'>
                                    <Typography component='body2' fontSize='16px' color='#8a9197'><Box component='a' href='/' sx={{ color: '#24acea', textDecoration: 'none' }}>Costa</Box> offer a new job for you</Typography>
                                </Box>
                                <Box height='100%' display='flex' flex={2} justifyContent='center' alignItems='center'>
                                    <Stack height='100%' width='100%' spacing={0.1} direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                        <Chip clickable label='follow' sx={{ fontSize: '15px', bgcolor: '#24acea', color: '#ffffff', paddingX: '5px' }} />
                                        <IconButton><MoreHorizIcon fontSize='large' sx={{ color: '#888f94' }} /></IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    <Divider/>
                </Stack>
            </Box >
        </>
    )
}
