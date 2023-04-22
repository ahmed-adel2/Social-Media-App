import theContacts from "./trial"
import { useState } from "react"

function Side(props) {
    const [bar, setBar] = useState(true)
    const [sideContacts, setSideContacts]= useState(theContacts)

    function addContactFromProfile(name, profilePic, lastMsg){
        props.setInfo(document.getElementById(`${name}`).value)
        props.setPic(document.getElementById(`${profilePic}`).value)
        props.setMsgInChat(document.getElementById(`${lastMsg}`).value)
    }

    const theSideContacts = sideContacts.map(({name:name, lastMsg:lastMsg, profilePic:profilePic},index)=>(
        <div className="div-nav cursor-pointer" onClick={()=>addContactFromProfile(name, profilePic, lastMsg)}>
            <input type="image" value={profilePic} src={profilePic} className="the-profile-pic-in-chat" id={profilePic}/>
                <div className="side-contact-words">
                    <input type="button" value={name} id={name} /> <br/>
                    <input type="button" value={lastMsg} id={lastMsg} className="last-msg-sent" />
                </div>
        </div>
    )

    )

    return (
        <main>
            <nav
                id="sidenav-7"
                className="fixed flex flex-col right-0 top-0 z-[1035] h-screen w-72 translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800"
                data-te-sidenav-init
                data-te-sidenav-hidden={bar}
                data-te-sidenav-right="true">
                
                <div>
                    <h3 className="font-bold side-intro text-lg ml-3 mt-4 mb-7 underline underline-offset-4 text-lime-400">
                        My Profile</h3>

                    <div className="div-nav flex mb-5">
                        <img src="my profile pic.jpg" alt="my-profile-pic" className="profile-pics h-16"/>
                        <div>
                            <h2>~Ahmed Rashad~</h2>
                            <h3 className=" text-m text-gray-600">Alive or just Breathin'</h3>
                        </div>
                    </div>

<hr className=" my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                    <h3 className=" font-bold side-intro text-lg ml-3 mt-0 underline underline-offset-4 text-lime-400">
                        My Chats ({sideContacts.length})</h3>
                    {theSideContacts}
                </div>

<hr className=" my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                <h1 className="ml-3 font-bold">Follow us to add more contacts to your list!</h1>
                <div className="all-Social-Buttons flex justify-evenly mt-4 ml-3 mr-3 mb-3">
                    <a href="https://github.com/ahmed-adel2" target="_blank"><img src="github-icon.svg" className=" w-10" /></a>
                    <a href="https://www.facebook.com/supermody1997/" target="_blank"><img src="facebook-icon.svg" className=" w-10" /></a>
                    <a href="https://www.instagram.com/ahmedrashad_97/" target="_blank"><img src="instagram-icon.svg" className=" w-10" /></a>
                    <a href="https://twitter.com/supermody1997" target="_blank"><img src="twitter-icon.svg" className=" w-10" /></a>
                </div>
                <p className="ml-3">Follow my <a href="https://rashads-web-dev-portofolio.netlify.app/" target="_blank" className= " text-green-500 transition duration-150 ease-in-out hover:bg-yellow-900 ; active:text-warning-700">
                    Web development Website </a>through this link.</p>
            </nav>

            <button
            id="task-bar-icon"
                onClick={()=>setBar(!bar)}
                className="mt-4 ml-3 inline-block rounded bg-green-600 px-3 py-2.5 text-s font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                data-te-sidenav-toggle-ref
                data-te-target="#sidenav-7"
                aria-controls="#sidenav-7"
                aria-haspopup="true">
                <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd" />
                    </svg>
                </span>
            </button>
        </main>
    )
}
export default Side