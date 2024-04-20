import { useParams } from "react-router-dom"
import { useState } from "react"
import { SESSIONS } from "../dummy-sessions"
import Button from "../components/Interface/Button"
import BookSession from "../components/Sessions/BookSession.tsx"


export default function Session(){
  const params = useParams<{id: string}>();
  const [isBookingSession, setIsBookingSession] = useState(false);

  const sessionId = params.id;
  const foundSession = SESSIONS.find((session) => session.id === sessionId);

  if(!foundSession){
    return (
      <section id="session-page">
        <p>We could not find any session!</p>
      </section>
    )
  }

  function handleShowBooking(){
    setIsBookingSession(true);
  }

  function handleHideBooking(){
    setIsBookingSession(false);
  }

  return (
    <main id="session-page">
      {isBookingSession && (
        <BookSession session={foundSession} onDone={handleHideBooking}/>
      )};

      <article>
        <header>
          <img src={foundSession.image} alt={foundSession.title} />
        </header>
        <section>
          <h2>{foundSession.title}</h2>
          <time dateTime={new Date(foundSession.date).toISOString()}>
            {new Date(foundSession.date).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </time>
          <p>
            <Button onClick={handleShowBooking}>Book This Session</Button>
          </p>
        </section>
        <p id="content">{foundSession.description}</p>
      </article>

    </main>
  )
}
// resolver problema para monstrar modal que marca a sessao
