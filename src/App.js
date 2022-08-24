import {Grid} from '@material-ui/core';
import Navbar from './components/Navbar.jsx';
import LeftBar from './components/LeftBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import {makeStyles} from '@material-ui/core/styles';
import Add from './components/Add'

const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className='App'>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed />
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <RightBar />
                </Grid>
            </Grid>
            <Add />
        </div>
    );
}

export default App;
