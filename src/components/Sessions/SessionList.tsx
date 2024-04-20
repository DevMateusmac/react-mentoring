import SessionItem from "./SessionItem.tsx";


type SessionsListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  } [];
}

export default function SessionList({sessions}: SessionsListProps){
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem id={session.id} image={session.image} summary={session.summary} title={session.title}/>
        </li>
      ))}
    </ul>
  )
}