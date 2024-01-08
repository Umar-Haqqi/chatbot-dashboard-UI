const { Box, styled, Avatar } = require("@mui/material");

const SideBarContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: '2.0rem 0.5rem',
    backgroundColor: '#0f0f0f',
})


const TopBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10.0rem',
})

const BottomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.0rem',
})

const MenuItems = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.0rem',
})

export { SideBarContainer, TopBox, MenuItems, BottomBox }