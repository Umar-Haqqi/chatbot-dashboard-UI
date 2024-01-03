"use client"

import { Avatar, Box } from "@mui/material";
import { BottomBox, MenuItems, SideBarContainer, TopBox } from "../mui-components/SidebarStyles";

import { Settings, Group as Friends, Home as HomeIcon, Message, Logout, WbSunny as Mode } from '@mui/icons-material';
import { GlobalButton } from "../mui-components/Main";

export default function Sidebar() {
    const profileImg = "https://mui.com/static/images/avatar/1.jpg";

    return (
        <>
            <Box sx={{ flex: 1, backgroundColor: 'red', height: '100vh' }}>
                <SideBarContainer>
                    <TopBox>
                        <Avatar sx={{ width: 30, height: 30 }} src={profileImg} />
                        <MenuItems>
                            <GlobalButton><Settings /></GlobalButton>
                            <GlobalButton><Message /></GlobalButton>
                            <GlobalButton><HomeIcon /></GlobalButton>
                            <GlobalButton><Friends /></GlobalButton>
                        </MenuItems>
                    </TopBox>
                    <BottomBox>
                        <MenuItems sx={{ gap: '10px' }}>
                            <GlobalButton><Mode sx={{ color: 'yellow' }} /></GlobalButton>
                            <GlobalButton><Logout /></GlobalButton>
                        </MenuItems>
                    </BottomBox>
                </SideBarContainer>
            </Box>
        </>
    )
}