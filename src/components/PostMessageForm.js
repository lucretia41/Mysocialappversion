// import React from "react"
// import Menu from "./menu/Menu"
// import { userIsAuthenticated } from "../redux/HOCs"
// import PostMessageService from "../services/PostMessageService"


// class PostMessage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userPost: "",
//         };

//         this.PostMessageService = new PostMessageService()
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value,
//         });
//     };

//     handleMessagePost = (event) => {
//         event.preventDefault();
//         this.PostMessageService.postMessage(this.state).then((result) => {
//             console.log(result.data);
//         });
//         console.log("Post Button Pressed")
//     };

//     render() {
//         return (
//             <div className="Message">
//                 < Menu />
//                 <h3>Post Message</h3>
//                 <div className="postMessageForm">
//                     <form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
//                         <input
//                             type="text"
//                             name="text"
//                             required
//                             onChange={this.handleChange}
//                         />
//                         <button type="submit">Post Message</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }





// export default userIsAuthenticated(PostMessage);
import React from "react"
import BackEndService from "../services/BackendService"
// import { userIsAuthenticated } from "../../redux/HOCs"

class PostMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userPost: ""
        }
    }

    handlePost = e => {
        e.preventDefault()
        BackEndService.postMessage().then(result => {
            console.log(result)
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="userpost">
                <form id="user-post" onSubmit={this.handlePost}>
                {this.props.createdAt} {this.props.username} posted:
                <br />
                {this.props.text}
                 
                 
                 
                 
                    <label htmlFor="username">User Post</label> 
                    <input
                        type="text"
                        name="user-post"
                        onChange={this.handleChange}
                    /> 
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default PostMessage