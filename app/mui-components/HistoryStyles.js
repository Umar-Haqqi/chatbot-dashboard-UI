const { styled, Box } = require("@mui/material");

const HistoryContainer = styled('div')({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1.0rem',
    backgroundColor: '#292828',
})

const TopBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.0rem',
})

const NotificationBox = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
})

const NotificationAlert = styled('div')({
    width: '2.4rem',
    height: '2.5rem',
    fontSize: '1.2rem',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#222',
    fontWeight: 'bold',
    borderRadius: '50%',
    backgroundColor: 'yellow',
})

const InputBox = styled("div")({
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#454a46",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    gap: "4.0rem",
});

export const SearchButton = styled('button')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    border: 'none',
    height: '3.5rem',
    width: '4.5rem',
    backgroundColor: 'transparent',
    color: 'white',
    transition: '0.3s ease-in-out',
    '&:hover': {
        backgroundColor: 'blue',
        opacity: '0.8'
    },
    margin: '0.5rem'
})

const BottomBox = styled(Box)({
    width: "100%",
    marginBottom: "1.0rem",
})





export { HistoryContainer, TopBox, NotificationBox, NotificationAlert, InputBox, BottomBox };