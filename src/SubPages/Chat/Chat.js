import React,{ useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Chat.css'
function Chat() {
   const [messages,setmessage] = useState([
        {
            name: 'Ellen',
            message: 'Whats Up'
        },
        {
            name: 'Ellen',
            message: 'Hows it going'
        },
        {
            message: 'Hows it going'
        }
    ])
    const [input,setInput] = useState('');
    const sendMessage = (e)=>{
        e.preventDefault();
        setmessage([...messages,{message:input}]);
        setInput('');
    }
    return (
        <Container fluid className="chat_roome mt-4">
            <Row id="chat_roome_headding">
                <h3>Comman Chat</h3>
                <p>Chat With Other Pepoles Know</p>
            </Row>
            <Row className="chat_roome_window mb-5">
                {
                  messages.map(message=>(
                      message.name ?
                        <Col xl={12} className="chat_messages">
                            <p>{message.name}</p>
                            <p><span>2 Nov 2021</span></p>
                            <div className="d-flex">
                                <h6 className="message_other">{message.message}</h6>
                            </div>
                        </Col> :
                        <Col xl={12} className="chat_messages">
                            <p style={{textAlign: 'right'}}><span>2 Nov 2021</span></p>
                            <div className="d-flex">
                                <h6 className="message_user">{message.message}</h6>
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
