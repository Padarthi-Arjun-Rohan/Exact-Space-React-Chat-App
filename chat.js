import './chat.css'
import {FaPaperPlane} from 'react-icons/fa';
import {FaSmile} from 'react-icons/fa';
import Random from './random';
function Chat(){
    return(
        <>
            <div className='chat-box'>
              <div className="title col-sg-6">
                <h1 className="heading">
                  Exact <span className="spec">Space</span>   
                </h1>
                <p className="sub-title">Chat App</p>
                <hr/>
              </div>

              <div id="chat-section">
                <div class="user-id">
                  *
                </div>
                <div class="user-info">
                  <div class="user-name">
                    <Random/>
                  </div>
                  <h1 class="user-msg">
                    hello guys, how are you
                  </h1>
                </div>
            </div>
            <div className='input-section col-sg-6'>
                <input class="user-input" id="userInput" />
                <button class="send-msg-btn" id="sendMsgBtn">
                    <FaPaperPlane/>
                </button>
                <button class="emoji-msg-btn">
                    <FaSmile/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Chat