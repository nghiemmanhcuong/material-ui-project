import {AppBar, Toolbar, Typography, InputBase, Badge, Avatar} from '@material-ui/core';
import {Mail, Search, Notifications, Cancel} from '@material-ui/icons';
import {makeStyles, alpha} from '@material-ui/core/styles';
import avatar from '../assets/image/avatar.jpeg';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    logoPc: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block',
        },
    },
    logoMb: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        padding: '0 5px',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
        },
    },
    searchIcon: {
        cursor: 'pointer',
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
        width: '100%',
    },
    icons: {
        alignItems: 'center',
        display: (props) => (props.open ? 'none' : 'flex'),
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    searchButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        marginRight: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open});

    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoPc}>
                    CuongDev
                </Typography>
                <Typography variant='h6' className={classes.logoMb}>
                    CUONG
                </Typography>
                <div className={classes.search}>
                    <Search className={classes.searchIcon} />
                    <InputBase placeholder='Search...' className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Badge badgeContent={4} color='secondary' className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='secondary' className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar src={avatar} alt='avatar' />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
