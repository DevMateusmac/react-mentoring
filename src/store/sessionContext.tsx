import { type ReactNode, createContext, useReducer, useContext} from "react";

export type SessionProp ={
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionStateProp = {
  sessionsComing: SessionProp[];
};

type SessionContextProp = SessionStateProp & {
  bookSession: (session: SessionProp) => void;
  cancelSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionContextProp | null>(null);



export function useSessionsContext(){
  const context = useContext(SessionsContext);
  if(!context){
    throw new Error('useSessionsContext must be used within a SessionsContextProvider');
  }
  return context
}

type BookSessionActionProp = {
  type:'BOOK_SESSION';
  session: SessionProp;
};


type CancelSessionActionProp = {
  type: 'CANCEL_SESSION';
  sessionId: string;
};


type SessionsActionProps = BookSessionActionProp | CancelSessionActionProp;


function sessionsReducer(state: SessionStateProp, action: SessionsActionProps){
  if(action.type === 'BOOK_SESSION'){
    if(state.sessionsComing.some((session) => session.id === action.session.id)){
      return state;
    }
    return {
      sessionsComing: state.sessionsComing.concat(action.session)
    };
  }


  if(action.type === 'CANCEL_SESSION'){
    return{
      sessionsComing: state.sessionsComing.filter((session) => session.id !== action.sessionId)
    }
  }
  return state;
}


export default function SessionsContextProvider({children}: {children: ReactNode}){
  const [sessionsState, dispatch] = useReducer(sessionsReducer,{
    sessionsComing: []
  });

  function bookSession(session: SessionProp){
    dispatch({type: 'BOOK_SESSION', session});
  }

  function cancelSession(sessionId: string){
    dispatch({type:"CANCEL_SESSION", sessionId});
  }

  const ctxValue = {
    sessionsComing: sessionsState.sessionsComing,
    bookSession,
    cancelSession
  };
  return (
    <SessionsContext.Provider value={ctxValue}>{children}</SessionsContext.Provider>
  )
}
