import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height ="100vh"
            projectID="eac609c7-ac19-4e59-8df0-f9efad2c3c6e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';
// import './App.css';
// export function App() {
// 	return (
// 		<ChatEngine
// 			height='100vh'
// 			userName='jeevanBastola'
// 			userSecret='jb123'
// 			projectID='eac609c7-ac19-4e59-8df0-f9efad2c3c6e'
// 		/>
// 	);
// }
