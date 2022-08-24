import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography} from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0,
    },
    title: {
        fontSize: '22px',
        marginBottom: theme.spacing(1),
        fontWeight: 500,
    },
    link: {
        marginRight: theme.spacing(2),
        fontSize:'18px'
    },
}));

const RightBar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online Friends</Typography>
            <AvatarGroup max={6} style={{marginBottom: '15px'}}>
                <Avatar
                    alt='Remy Sharp'
                    src='https://images.pexels.com/photos/11136467/pexels-photo-11136467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar
                    alt='Travis Howard'
                    src='https://images.pexels.com/photos/11074365/pexels-photo-11074365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar alt='Cindy Baker' src='' />
                <Avatar
                    alt='Agnes Walker'
                    src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar
                    alt='Trevor Henderson'
                    src='https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar
                    alt='Trevor Henderson'
                    src='https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar
                    alt='Trevor Henderson'
                    src='https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
                <Avatar
                    alt='Trevor Henderson'
                    src='https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                />
            </AvatarGroup>
            <Typography className={classes.title}>Gallery</Typography>
            <ImageList
                rowHeight={100}
                cols={2}
                className={classes.ImageList}
                style={{marginBottom: '15px'}}
            >
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src='https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt=''
                    />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title}>Categories</Typography>
            <Link href='#!' className={classes.link} variant='body2'>
                Sport
            </Link>
            <Link href='#!' className={classes.link} variant='body2'>
                Food
            </Link>
            <Link href='#!' className={classes.link} variant='body2'>
                Music
            </Link>
            <Divider flexItem style={{marginBottom:'5px'}}/>
            <Link href='#!' className={classes.link} variant='body2'>
                Movies
            </Link>
            <Link href='#!' className={classes.link} variant='body2'>
                Science
            </Link>
            <Link href='#!' className={classes.link} variant='body2'>
                Travel
            </Link>
        </Container>
    );
};

export default RightBar;
