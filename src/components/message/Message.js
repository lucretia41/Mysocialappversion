// import React from "react";

// class Message extends React.Component {
//   render() {
//     return (
//       <li className="Message">
//         At {new Date(this.props.createdAt).toDateString()},
//         {this.props.username} posted:
//         <div className="message-text">{this.props.text}</div>
//         <div className="likes">Likes: {this.props.likes.length}</div>
//       </li>
//     )
//   }
// }


// export default Message
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Message.css"

class Message extends React.Component {
  render() {
    return (
      <div className="card" >
        <Card bg="secondary" style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Header> {this.props.username} </Card.Header>
            <Card.Title> {this.props.text} </Card.Title>
            <Card.Text>
              At {new Date(this.props.createdAt).toDateString()}
            </Card.Text>
            <Card.Text>Likes: {this.props.likes.length} </Card.Text>
            <Button className="like-button" variant="primary">
              Like
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Message;