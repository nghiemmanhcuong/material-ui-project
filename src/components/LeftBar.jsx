import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import {
    Home,
    Person,
    List,
    CameraAlt,
    PlayCircleFilled,
    PhoneIphone,
    Bookmark,
    StorefrontOutlined,
    Settings,
    ExitToApp
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7',
        },
        position:'sticky',
        top:0
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer',
        },
    },
    icon: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px',
        },
    },
    text: {
        fontWeight: 500,
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

const LeftBar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text}>List</Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.icon} />
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleFilled className={classes.icon} />
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <PhoneIphone className={classes.icon} />
                <Typography className={classes.text}>App</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>Collection</Typography>
            </div>
            <div className={classes.item}>
                <StorefrontOutlined className={classes.icon} />
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    );
};

export default LeftBar;
