import {
    Fab,
    Modal,
    Tooltip,
    Container,
    TextField,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Button,
    Snackbar,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Add as AddIcon} from '@material-ui/icons';
import {Alert} from '@material-ui/lab';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        inset: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width:'100vw',
            height:'100vh',
        }
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));

const Add = () => {
    const classes = useStyles();
    const [openModel, setOpenModel] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Tooltip title='Add' aria-label='add' onClick={() => setOpenModel(true)}>
                <Fab color='secondary' className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={openModel}>
                <Container className={classes.container}>
                    <form className={classes.form}>
                        <div className={classes.item}>
                            <TextField
                                id='outlined-basic'
                                label='Title'
                                variant='outlined'
                                size='small'
                                style={{width: '100%'}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id='outlined-multiline-static'
                                label='Description'
                                multiline
                                rows={4}
                                placeholder='Tell your story...'
                                variant='outlined'
                                size='small'
                                style={{width: '100%'}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label='Visibility' value='public'>
                                <MenuItem value='public'>Public</MenuItem>
                                <MenuItem value='Private'>Private</MenuItem>
                                <MenuItem value='Unlisted'>Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component='legend'>Who can comments?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel
                                    value='Everybody'
                                    control={<Radio size='small' />}
                                    label='Everybody'
                                />
                                <FormControlLabel
                                    value='My friends'
                                    control={<Radio size='small' />}
                                    label='My friends'
                                />
                                <FormControlLabel
                                    value='NoBody'
                                    control={<Radio size='small' />}
                                    label='NoBody'
                                />
                                <FormControlLabel
                                    value='Custom'
                                    disabled
                                    control={<Radio size='small' />}
                                    label='Custom(Premium)'
                                />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button
                                variant='contained'
                                color='primary'
                                style={{marginRight: '10px'}}
                                onClick={() => setOpen(true)}
                            >
                                Create
                            </Button>
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={() => setOpenModel(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleClose} severity='success'>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Add;
