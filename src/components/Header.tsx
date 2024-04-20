import { useState } from "react"
import { NavLink } from "react-router-dom"

import ComingSessions from '../components/Sessions/ComingSessions.tsx'
import Button from "./Interface/Button.tsx"


export default function Header(){
  const [comingSessionsVisible, setComingSessionsVisible] = useState(false);

  function showComingSessions(){
    setComingSessionsVisible(true);
  }

  function hideComingSessions(){
    setComingSessionsVisible(false);
  }

  return (
    <>
    {comingSessionsVisible && (<ComingSessions onClose={hideComingSessions} />)}

    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Our Mission</NavLink>
          </li>
          <li>
            <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
          </li>
          <li>
            <Button onClick={showComingSessions}>Coming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}