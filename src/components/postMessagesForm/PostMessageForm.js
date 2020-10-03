// import React from "react";
// import { userIsAuthenricated } from "../../redux/HOCs"
// import PostMessageService from "../../services/PostMessagesService"

// class PostMessageForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
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
//         new PostMessageService().postMessage(this.state.text).then((result) => {
//             console.log(result.data);
//         });
//         console.log("Post Button Pressed")
//     };

//     render() {
//         return (
//             <div className="postMessageForm">
//                 <form className="postMessageFormForm" onSubmit={this.handleMessagePost}>
//                     <input
//                         type="text"
//                         name="text"
//                         required
//                         onChange={this.handleChange}
//                     />
//                     <button type="submit">Post Message!</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default PostMessageForm;
import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import { Container, Form, Button } from "react-bootstrap"

class PostMessage extends React.Component {
    render() {
        return (
            <div className="Message">
                <Container>
                    <Form id="postMessageForm" onSubmit={this.props.handleMessagePost}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="text"
                                placeholder="What's On Your Mind?"
                                required
                                onChange={this.props.handleChange}
                                value={this.props.text}
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Post Message
            </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default userIsAuthenticated(PostMessage);