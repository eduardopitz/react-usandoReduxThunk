import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    
    renderList() {
        if (this.props.posts) {
            return this.props.posts.map(( post ) => {
                return (
                    <div className="input-container" key={post.id}>
                        <div className="item">
                            <h4> # {post.id} - {post.title} </h4> {post.body}
                            <UserHeader userId={post.userId}/>
                        </div>                        
                    </div>
                );
            })
        }
    }

    render() {
        return <div className="content">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);