/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

type ISectionProps = {
  display?:string;
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  className?:string;
  flex?:string;
  color?:string;
  
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-7xl mx-auto  ${props.yPadding ? props.yPadding : 'py-5'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        
        {props.description && (
          <div className=" font-mono mt-4 text-xl md:px-20">{props.description}</div>
        )}

{props.title && (
          <h2 className="text-2xl text-gray-800 font-bold">{props.title}</h2>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
