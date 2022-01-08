import React,{ useState, useEffect } from 'react'
import TimeAgo from 'timeago-react';
import axios from 'axios';
import Pusher from 'pusher-js';
import { Container, Row, Col, Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import './Chat.css'

// Pusher Realtime Technology
var pusher = new Pusher('a73b7d1b6fcba563eede', {
    cluster: 'ap2'
  });

function Chat() {
    const [usernameinput, setusernameInput] = useState('');
    const [username, setUsername] = useState('');
    const [popup, setpopup] = useState(true);
    const [messages,setmessage] = useState([]);
    const [input,setInput] = useState('');

    const handalusername = (e)=>{
        e.preventDefault();
        setUsername(usernameinput);
        setpopup(false);
    }

    const sendMessage = async (e)=>{
        e.preventDefault();
        try{
            axios.post('https://lifestylediseases.herokuapp.com/chat',{
                name: username,
                message:input,
                timestamp: Date.now()
            })
            setInput('');
        }catch(e){
            console.log(e.message);
        }
    }
    // ==========get chat data from backend created api=======
    const getmessage = async ()=>{
        try{
           const res = await axios.get('https://lifestylediseases.herokuapp.com/chat');
           setmessage(res.data);
        }catch(e){
            console.log(e.message);
        }
    }
    useEffect(()=>{
       getmessage();
    },[]);

    // Channel Set for Pusher Realtime event Listner
    useEffect(() => {
        const channel = pusher.subscribe('messages-channel');
        channel.bind('newMessage', function(data) {
            getmessage();
        });
    }, [username]);
    
    if(popup){
        return (
            <Modal show={popup}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Your Name"
                        className="mb-3"
                        >
                            <Form.Control type="text" value={usernameinput} onChange={(e)=>{
                                setusernameInput(e.target.value);
                            }} placeholder="name" />
                        </FloatingLabel>
                    </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!usernameinput} variant="primary" onClick={handalusername}>
                        Submit
                    </Button>
                </Modal.Footer>
           </Modal>
        )
    }
    return (
        <Container  fluid className="chat_roome mt-4">
            <Row id="chat_roome_headding">
                <h3>Comman Chat</h3>
                <p>Chat With Other Pepoles Know</p>
            </Row>
            <Row className="chat_roome_window mb-5">
                {
                  messages.map(message=>(
                        <Col key={message._id} xl={12} className={message.name === username ? "chat_messages" : "chat_messages" }>
                            {message.name === username ?
                                ''
                                :
                                <p>{message.name}</p>
                            }
                            {
                                message.name === username ?
                                <p style={{textAlign:'right'}}><span> <TimeAgo
                                datetime={message.timestamp ? new Date(message.timestamp) : new Date()}
                            /></span></p>
                                :
                                <p><span> <TimeAgo
                                datetime={message.timestamp ? new Date(message.timestamp) : new Date()}
                            /></span></p>
                            }
                            <div className="d-flex">
                                <h6 className={message.name === username ? "message_user" : "message_other" }>{message.message}</h6>
                            </div>
                        </Col> 
                  ))
                }
            </Row>
            <Row>
               <Col xl={12} className="send_row_message">
                    <input className="chat_inputFiled" value={input} type="text" placeholder="Type a message..." onChange={e=>setInput(e.target.value)}/>
                    <div className="message_end">
                        <i className="fas fa-microphone-slash"></i>
                        <button className="send_button" onClick={sendMessage}><i className="fas fa-paper-plane"></i></button>
                    </div>
               </Col>
            </Row>
        </Container>
    )
}

export default Chat
