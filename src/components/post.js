import React , {Component} from 'react';
import axios from 'axios';

class post extends Component {
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.id)
    }
    state = {
        id : null
    }
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
        .then(res => {
            this.setState({
                post: res.data
            })
            console.log(res)
        })
        this.setState({ id : id })

    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h1 className="center">{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <button className="btn grey" onClick = {this.handleClick}>GETID</button>

            </div>

        ) 
        :
        (
            <div className="center">Loading post...</div>
        )



        return (
            <div className="container">
                {post}          
            </div>
        )
    }
}

export default post;