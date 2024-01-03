"use client"

import { Box } from "@mui/material";
import { HistoryContainer } from "../mui-components/HistoryStyles";

export default function ChatHistory() {
    return (
        <>
            <Box sx={{ flex: 6, backgroundColor: 'green' }}>
                <HistoryContainer>

                </HistoryContainer>
            </Box>
        </>
    )
}