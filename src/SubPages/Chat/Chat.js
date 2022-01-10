import React,{ useState, useEffect } from 'react'
import Moment from 'react-moment';
import axios from 'axios';
import Pusher from 'pusher-js';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Chat.css'
import { useProfile } from '../../Pages/Account/Context.Provider';
import { useHistory } from 'react-router-dom';

// Pusher Realtime Technology
var pusher = new Pusher('a73b7d1b6fcba563eede', {
    cluster: 'ap2'
  });

function Chat() {
    const {profile} = useProfile();
    const [popup, setpopup] = useState(profile ? false : true);
    const [messages,setmessage] = useState([]);
    const [input,setInput] = useState('');

    const History = useHistory();

    const handalusername = (e)=>{
        e.preventDefault();
        setpopup(false);
        History.push('/');
    }

    const sendMessage = async (e)=>{
        e.preventDefault();
        try{
            axios.post('https://lifestylediseases.herokuapp.com/chat',{
                name: profile.name,
                message:input,
                timestamp: new Date()
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
    }, []);
    
    if(popup){
        return (
            <Modal show={popup}>
                <Modal.Header closeButton onClick={handalusername}>
                    <Modal.Title >Warning</Modal.Title>
                </Modal.Header>
                    <Modal.Body  style={{fontWeight: 'bold'}}>
                       You Can Not Access Comman Chat Application, Because You Are Not Signup Please Sign Up ! 
                    </Modal.Body>
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
                        <Col key={message._id} xl={12} className={message.name === profile.name ? "chat_messages" : "chat_messages" }>
                            {message.name === profile.name ?
                                ''
                                :
                                <p>{message.name}</p>
                            }
                            {
                                message.name === profile.name ?
                                <p style={{textAlign:'right'}}><span> <Moment fromNow date={message.timestamp}/> </span></p>
                                :
                                <p><span> <Moment fromNow date={message.timestamp}/> </span></p>
                            }
                            <div className="d-flex">
                                <h6 className={message.name === profile.name ? "message_user" : "message_other" }>{message.message}</h6>
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
