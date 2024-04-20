import { useEffect, useRef } from 'react';

import Modal, {type ModalHandleProp} from '../Interface/Modal.tsx'
import ComingSession from './ComingSession.tsx';
import { useSessionsContext } from '../../store/sessionContext.tsx';
import Button from '../Interface/Button.tsx';


type ComingSessionsProps = {
  onClose: () => void;
}


export default function ComingSessions({onClose}: ComingSessionsProps){
  const modal = useRef<ModalHandleProp>(null);
  const {cancelSession, sessionsComing} = useSessionsContext();

  useEffect(() => {
    if(modal.current){
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string){
    cancelSession(sessionId);
  }

  const thereIsSessions = sessionsComing.length > 0;

  return(
    <Modal ref={modal} onClose={onClose}>
      <h2>Coming Sessions</h2>
      {thereIsSessions && (
        <ul>
          {sessionsComing.map((session) => (
            <li key={session.id}>
              <ComingSession session={session} onCancel={() => handleCancelSession(session.id)}/>
            </li>
          ))}
        </ul>
      )}
      {!thereIsSessions && <p>There is no sessions coming</p>}
      <p className='actions'>
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  )
}