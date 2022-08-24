import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}));

const Feed = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Post
                img='https://cdn.pixabay.com/photo/2022/02/09/20/52/labrador-retriever-7004193_1280.jpg'
                title='This is an article about a loyal dog'
            />
            <Post
                img='https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                title='This is an article about a loyal dog'
            />
            <Post
                img='https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                title='This is an article about a loyal dog'
            />
            <Post
                img='https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                title='This is an article about a loyal dog'
            />
            <Post
                img='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                title='This is an article about a loyal dog'
            />
        </Container>
    );
};

export default Feed;
