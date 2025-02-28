
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, LinearProgress, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/components/MenuItemLink';
import { useStore } from '../../lib/hooks/useStore';
import { Observer } from 'mobx-react-lite';

// type Props = {
//     openForm: () => void
// }


export default function NavBar() {

    const { uiStore } = useStore();



    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)', position: 'relative' }}>

                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize='large' />
                                <Typography variant='h4' fontWeight='bold'>Events Social Network</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <MenuItemLink to='/activities' >
                                Activites
                            </MenuItemLink>
                            <MenuItemLink to='/createActivity' >
                                Create Activity
                            </MenuItemLink>
                            <MenuItemLink to='/counter' >
                                Counter
                            </MenuItemLink>

                            {/* This was how it was done with out the custom component */}
                            {/* <MenuItem component={NavLink} to='/createActivity' sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Create Activity
                            </MenuItem> */}
                        </Box>
                        <MenuItem>
                            User Menu
                        </MenuItem>
                    </Toolbar>

                </Container>

                <Observer>
                    {() => uiStore.isLoading ? (
                        <LinearProgress color='secondary' sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 4
                        }} />
                    )
                        :
                        null
                    }
                </Observer>

            </AppBar>
        </Box>
    )
}



