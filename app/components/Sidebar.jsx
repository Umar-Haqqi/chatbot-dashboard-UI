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
                        <Avatar sx={{ width: 35, height: 35 }} src={profileImg} />
                        <MenuItems>
                            <GlobalButton><Settings /></GlobalButton>
                            <GlobalButton><Message /></GlobalButton>
                            <GlobalButton><HomeIcon /></GlobalButton>
                            <GlobalButton><Friends /></GlobalButton>
                        </MenuItems>
                    </TopBox>
                    <BottomBox>
                        <MenuItems sx={{ gap: '1.0rem' }}>
                            <GlobalButton><Mode sx={{ color: 'yellow' }} /></GlobalButton>
                            <GlobalButton><Logout /></GlobalButton>
                        </MenuItems>
                    </BottomBox>
                </SideBarContainer>
            </Box>
        </>
    )
}