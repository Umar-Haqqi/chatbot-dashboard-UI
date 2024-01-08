import { styled } from "@mui/material";

const GlobalButton = styled('button')({
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.8rem',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.0rem',
    fontWeight: 'bold',
    padding: '8px 8px 4px 8px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#616161',
        color: '#222',
    },
})

const MainButton = styled('button')({
    backgroundColor: '#454A46',
    color: "#fff",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 0',
    border: '1px solid #111',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    '&:hover': {
        backgroundColor: '#1E211F',
        border: '1px solid #fff',
    },
})

export { GlobalButton, MainButton };