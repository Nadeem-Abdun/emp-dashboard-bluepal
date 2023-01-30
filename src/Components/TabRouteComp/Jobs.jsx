import React, { useState } from 'react'
import { Box, Stack, Typography, Chip, Avatar, AvatarGroup, Menu, MenuItem, Button } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


export default function Jobs() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
            <Stack height='95%' width='95%' direction='column'>
                {/* Title and Button Box */}
                <Box height='10%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='95%' width='97%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='23px' fontWeight='5px'>Jobs</Typography>
                        <Chip label='Add new job' sx={{ bgcolor: '#67b730' }} clickable />
                    </Stack>
                </Box>
                {/* Table Box */}
                <Box height='90%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='95%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                        {/* Table Header */}
                        <Box height='9%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#d9e2e7' >
                            <Stack height='100%' width='100%' direction='row' >
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='15px' fontWeight='medium' color='#7e8c96' marginLeft={2}>JOB TITLE</Typography>
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='15px' fontWeight='medium' color='#7e8c96' marginLeft={1}>STATUS</Typography>
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='15px' fontWeight='medium' color='#7e8c96'>POSTED</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='15px' fontWeight='medium' color='#7e8c96'>APPLICANTS</Typography>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography display='flex' justifyContent='center' alignItems='center' component='h2' fontSize='15px' fontWeight='medium' color='#7e8c96' marginLeft={2}>OPTIONS</Typography>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 1 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Master</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Chemical Tanker</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Active' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#68b731' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>22 july 2016</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <AvatarGroup total={27}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                    </AvatarGroup>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 2 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Cheif Officer</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Oil Tanker</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Draft' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#ff7174' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>---</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>---</Typography>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 3 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Cheif Officer</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Bulk Carrier</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Active' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#68b731' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>17 july 2016</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <AvatarGroup total={9}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
                                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/6.jpg" />
                                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
                                    </AvatarGroup>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 4 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Master</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Chemical Tanker</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Active' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#68b731' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>22 july 2016</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <AvatarGroup total={27}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                    </AvatarGroup>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 5 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Cheif Officer</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Oil Tanker</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Draft' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#ff7174' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>---</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>---</Typography>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                        {/* Table Content Row - 6 */}
                        <Box height='15%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                            <Stack height='100%' width='100%' direction='row' >
                                <Stack height='100%' width='27.5%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h4' fontSize='16px' fontWeight='bold' color='#2eaaed' marginLeft={2}>Cheif Officer</Typography>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7' marginLeft={2}>Bulk Carrier</Typography>
                                </Stack>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Chip label='Active' sx={{ bgcolor: '#f7f7f7' }} icon={<FiberManualRecordIcon sx={{ fill: '#68b731' }} />} clickable />
                                </Box>
                                <Box height='100%' width='17.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h6' fontSize='13px' fontWeight='medium' color='#a9adb7'>17 july 2016</Typography>
                                </Box>
                                <Box height='100%' width='27.5%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <AvatarGroup total={9}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
                                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/5.jpg" />
                                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/6.jpg" />
                                    </AvatarGroup>
                                </Box>
                                <Box height='100%' width='10%' display='flex' justifyContent='center' alignItems='center'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreHorizOutlinedIcon sx={{ color: '#88929c' }} /></Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                <MenuItem onClick={handleClose}><BorderColorIcon fontSize='5px' sx={{ color: '#3da3d5' }} /><span>&nbsp;&nbsp;</span>Edit</MenuItem>
                <MenuItem onClick={handleClose}><RestartAltIcon fontSize='5px' sx={{ color: '#3da3d5' }} /><span>&nbsp;&nbsp;</span>Re-Post</MenuItem>
                <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon fontSize='5px' sx={{ color: '#3da3d5' }} /><span>&nbsp;&nbsp;</span>Delete</MenuItem>
                <MenuItem onClick={handleClose}><VisibilityOffOutlinedIcon fontSize='5px' sx={{ color: '#3da3d5' }} /><span>&nbsp;&nbsp;</span>Hide</MenuItem>
            </Menu>
        </Box>
    )
}
