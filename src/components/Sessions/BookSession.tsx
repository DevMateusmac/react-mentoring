import { FormEvent, useEffect, useRef } from "react";

import Modal, {ModalHandleProp} from '../Interface/Modal.tsx';
import Input from "../Interface/Input";
import Button from "../Interface/Button.tsx";

import {SessionProp, useSessionsContext} from '../../store/sessionContext.tsx';

type BookSessionProps = {
  session: SessionProp;
  onDone: () => void;
};

export default function BookSession({session, onDone}: BookSessionProps){
  const modal = useRef<ModalHandleProp>(null);
  const {bookSession} = useSessionsContext();

  useEffect(()=>{
    if(modal.current){
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data)
    bookSession(session)
    onDone();
  }
  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text"/>
        <Input label="Your email" id="email" name="email" type="email"/>
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
//parei exatamente aqui 