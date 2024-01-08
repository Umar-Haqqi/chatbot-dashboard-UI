"use client"

import { Box, InputBase, Typography } from "@mui/material";
import { HistoryContainer, InputBox, NotificationAlert, NotificationBox, SearchButton, TopBox, BottomBox } from "../mui-components/HistoryStyles";
import { GlobalButton, MainButton } from "../mui-components/Main";
import { Close, MoreHoriz, RateReview, Search } from "@mui/icons-material";


export default function ChatHistory() {
    const alerts = 20;
    return (
        <>
            <Box sx={{ flex: 6 }}>
                <HistoryContainer>
                    <TopBox>
                        <NotificationBox>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Typography variant="p">Chats</Typography>
                                <NotificationAlert>{alerts}</NotificationAlert>
                            </Box>
                            <GlobalButton><MoreHoriz /></GlobalButton>
                        </NotificationBox>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <InputBox>
                                <InputBase
                                    placeholder="Search chats"
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: "white",
                                        paddingLeft: "1.0rem",
                                        "&::placeholder": {
                                            opacity: "0.9",
                                        },
                                    }}
                                />
                                <Search sx={{
                                    fontSize: "20px",
                                    opacity: "0.7",
                                }} />
                            </InputBox>

                            <SearchButton sx={{
                                backgroundColor: "#b9bd93",
                                "&:hover": {
                                    opacity: "0.7",
                                    backgroundColor: "#b9bd93",
                                },
                            }}>
                                <RateReview sx={{
                                    fontSize: "22px",
                                    color: "black",
                                }} />
                            </SearchButton>
                        </Box>
                    </TopBox>


                    <BottomBox>
                        <MainButton>
                            <Typography variant="p">Clear Chat</Typography>
                            <Close sx={{
                                fontSize: "18px",
                                fontWeight: "bold"
                            }} />
                        </MainButton>
                    </BottomBox>


                </HistoryContainer>
            </Box>
        </>
    )
}