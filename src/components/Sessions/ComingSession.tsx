import Button from "../Interface/Button.tsx";

type ComingSessionProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    date: string;
  };
  onCancel: () => void;
};

export default function ComingSession({session, onCancel}: ComingSessionProps){
  return (
    <article className="upcoming-session">
      <section>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toDateString()}>
          {new Date(session.date).toLocaleDateString('pt-BR', {
            day:'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </section>
      <p className="actions">
        <Button textOnly onClick={onCancel}>Cancel</Button>
      </p>
    </article>
  )
}