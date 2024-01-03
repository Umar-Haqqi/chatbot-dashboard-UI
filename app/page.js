import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ChatHistory from "./components/ChatHistory";
import LastSection from "./components/LastSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Box>
        <Stack direction="row" spacing={0}>
          <Sidebar />
          <ChatHistory />
          <Hero />
          <LastSection />
        </Stack>
      </Box>
    </>
  )
}
