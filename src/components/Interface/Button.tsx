import { Link, type LinkProps } from "react-router-dom";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CoreProps = {
  children: ReactNode;
  textOnly?: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & CoreProps & {
  to?: never;
}


type LinkButtonProps = LinkProps & CoreProps & {
  to:string;
}


function isLinkProps(props: ButtonProps | LinkButtonProps): props is LinkButtonProps{
  return 'to' in props;
}

export default function Button(props: ButtonProps | LinkButtonProps){
  if(isLinkProps(props)){
    const {children, textOnly, ...otherProps} = props;
    return <Link className={`button ${textOnly ? 'button--text-only' : '' }`} {...otherProps}>{children}</Link>
  }

  const {children, textOnly, ...otherProps} = props;
  return (
    <button className={`button ${textOnly ? 'button--text-only' : '' }`} {...otherProps}>
      {children}
    </button>
  )
}