import { useState } from 'react'
import './App.css'
import theContacts from './trial'
import Side from './Side'

function App() {
    const [rashad, setRashad] = useState(true)
    const [info, setInfo] = useState("")
    const [pic, setPic] = useState("")
    const [msgInChat, setMsgInChat] = useState("")

    function join() {
        setRashad(!rashad)
    }

    return (
        <main>
            {rashad ?
                <Rashads join={join} /> : 
                <main className="whole-app-container">
                    <Main setInfo={setInfo} setPic={setPic} setMsgInChat={setMsgInChat} />
                    <Chat info={info} pic={pic} msgInChat={msgInChat} 
                        setInfo={setInfo} setPic={setPic} setMsgInChat={setMsgInChat}/>
                </main>
            }
        </main>
    );
}

// #######################################

function Rashads(props){

    return(
    <main>
        <img className="rashads-open" src="Rashad's Logo.jpeg"/>
        <h1 className="introduction">Join Rashad's Social App Community</h1>
        <div className="join-btn-container">
            <button
                onClick={props.join}
                id="join"
                className="inline-block rounded-full bg-neutral-50 px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
                Join Now
            </button>
        </div>
    </main>
    )
}

// #######################################

function Main(props) {
        const [contacts, setContacts] = useState(theContacts)

        function addContactToProfile(name, profilePic, lastMsg){
            props.setInfo(document.getElementById(`${name}`).value)
            props.setPic(document.getElementById(`${profilePic}`).value)
            props.setMsgInChat(document.getElementById(`${lastMsg}`).value)
        }

        const seeAllContacts = contacts.map(({name:name, id:id, lastMsg:lastMsg, profilePic:profilePic, key:key}, index)=>(
            <main onClick={()=>addContactToProfile(name, profilePic, lastMsg)}>
            {lastMsg === "" ? "" :
            <div className="each-contact" id={id} key={key}>
                <input type="image" value={profilePic} src={profilePic} className="the-profile-pic-in-chat" id={profilePic}/>
                <div className="words-of-contact">
                    <input type="button" value={name} id={name} /> <br/>
                    <input type="button" value={lastMsg} id={lastMsg} className="last-msg-sent" />
                </div>
            </div>
            }
            </main>
        ))

    return (
        <div className="contacts-container">
            <div className="profile">
                <img src="my profile pic.jpg" alt="my-profile-pic" className="profile-pics"/>
                <div className="basic-icons">
                    <img src="group-icon.svg" alt="groups-icon" className="icon" />
                    <img src="status-icon.svg" alt="status-icon" className="icon" />
                    <img src="settings-icon.svg" alt="settings-icon" className="icon" />
                </div>
            </div>

            <div className="contacts">
                {seeAllContacts}

                <div>
            <hr className=" my-3 mt-7 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <h1 className="ml-3 mr-3 font-bold">Follow us to add more contacts to your list!</h1>
                <div className="all-Social-Buttons flex justify-evenly mt-4 ml-3 mr-3 mb-3">
                    <a href="https://github.com/ahmed-adel2" target="_blank"><img src="github-icon.svg" className=" w-10" /></a>
                    <a href="https://www.facebook.com/supermody1997/" target="_blank"><img src="facebook-icon.svg" className=" w-10" /></a>
                    <a href="https://www.instagram.com/ahmedrashad_97/" target="_blank"><img src="instagram-icon.svg" className=" w-10" /></a>
                    <a href="https://twitter.com/supermody1997" target="_blank"><img src="twitter-icon.svg" className=" w-10" /></a>
                </div>
                <p className="ml-3">Follow my <a href="https://rashads-web-development-portofolio.vercel.app/" target="_blank" className= " text-green-500 transition duration-150 ease-in-out hover:bg-yellow-900 ; active:text-warning-700">
                    Web development Website </a>through this link.</p>
                </div>
            </div>

        </div>
);
}

// #######################################

function Chat(props) {
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("")
    const [reply, setReply] = useState([])
    const [messi, setMessi] = useState([])
    const [cr7, setCr7] = useState([])

    function sendMsg(){
        if( props.info === "Cristiano Ronaldo" && document.getElementById("the-messs").value != ""){
        return setCr7(prev => [...prev, text])
        } else if( props.info === "Messi" && document.getElementById("the-messs").value != ""){
        return setMessi(prev => [...prev, text])
        }

        setText(document.getElementById("the-messs").value === "")
    }

    const seeCr7Replies = cr7.map((msg)=> {
        return (
            <div className="my-reply-bar">
                <h2 className="my-reply">{msg}</h2>
            </div>
        )
    })
    const seeMessiReplies = messi.map((msg)=> {
    return (
        <div className="my-reply-bar">
            <h2 className="my-reply">{msg}</h2>
        </div>
        )
    })

    return (
        <div className="chat">

            {/* section 1 */}

        { props.info === "" ?
        <div className="chat-identifier">
            <div className="adjust-identifier">
                <Side info={props.info} pic={props.pic} msgInChat={props.msgInChat} 
                    setInfo={props.setInfo} setPic={props.setPic} setMsgInChat={props.setMsgInChat}/>
            </div>

            <div className="talker-additives">
                <img src="search-icon.svg" alt="search-icon" className="icon" />
                <img src="contact-setting.svg" alt="contact-settings-icon" 
                    className="icon" onClick={()=>setCr7([])} />
            </div>
        </div>
        :
        <div className="chat-identifier">
            <div className="adjust-identifier">
                <Side info={props.info} pic={props.pic} msgInChat={props.msgInChat} 
                    setInfo={props.setInfo} setPic={props.setPic} setMsgInChat={props.setMsgInChat} />
                <img src={props.pic} id="profile-in-chat" />
                <div className="the-talker">
                    <h2 className="name-in-chat">{props.info}</h2>
                    <h6 className="online">Online</h6>
                </div>
            </div>
            
            <div className="talker-additives">
                <img src="search-icon.svg" alt="search-icon" className="icon" />
                <img src="contact-setting.svg" alt="contact-settings-icon" className="icon" />
            </div>
        </div>
        }

        {/* section 2 */}

        { props.info === "" ? 
        <div className="start-chatting">
            <h1 className="start-chatting-word">Start Chatting Now with your contacts
            by using Rashad's Social Media Messaging App...</h1>
        </div> 
        :
        <div className="where-chat-goes">
            <div className="bkgrd-of-chat">
            {props.msgInChat}
            </div>

            <div className="my-reply-section">
                { text === "" && reply == [] ? "" :
                    <div>
                    {props.info === "Cristiano Ronaldo" ? seeCr7Replies : seeMessiReplies}
                    </div>
                }
            </div>
        </div>
        }

        {/* section 3 */}

        { props.info === "" ? "" :
        <div className="chat-msg">
            <img src="emotes-icon.svg" id="emotes-icon" className="icon" />
            <img src="file-icon.svg" id="attach-file-icon" className="icon" />
            <input type="text" placeholder='Enter your text' className="the-msg" id="the-messs"
            value={text} onChange={(e)=> setText(e.target.value)}
            />
            <img src="send-icon.svg" id="send-icon" className="icon" 
            onClick={sendMsg}/>
        </div>
        }

        </div>
    )
}

export default App
