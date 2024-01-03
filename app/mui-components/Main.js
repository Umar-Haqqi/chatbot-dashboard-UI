import { styled } from "@mui/material";

const GlobalButton = styled('button')({
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '8px 8px 4px 8px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#616161',
        color: '#222',
    },
})

export { GlobalButton };