import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {NearMe,DoubleArrow,Favorite} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom:theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height:150
        }
    },
    cardText: { 
        fontWeight:500,
        marginBottom: theme.spacing(2)
    },
    cardDesc: {
        lineHeight:'1.6',
        letterSpacing:'0.2px'
    },
    btnMore: {
        backgroundColor:'green',
        '&:hover': {
            backgroundColor:'#1b5e20',
        }
    }
}));

const Post = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title='post image'
                />
                <CardContent>
                    <Typography variant='h5' className={classes.cardText}>{props.title}</Typography>
                    <Typography variant='body2' className={classes.cardDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet,
                        corporis cum nulla placeat cupiditate recusandae quis laudantium inventore
                        ipsam exercitationem labore? Magni quasi voluptatibus ducimus, corporis quas
                        perspiciatis esse.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet,
                        corporis cum nulla placeat cupiditate recusandae quis laudantium inventore
                        ipsam exercitationem labore? Magni quasi voluptatibus ducimus, corporis quas
                        perspiciatis esse.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        size='small' 
                        endIcon={<NearMe />}
                    >
                        Share
                    </Button>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        size='small' 
                        endIcon={<Favorite />}
                    >
                        Like
                    </Button>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        size='small' 
                        endIcon={<DoubleArrow />}
                        className={classes.btnMore}
                    >
                        Learn more
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default Post;
