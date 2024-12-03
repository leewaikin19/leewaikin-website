import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Experience(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <T.Content>
            <div className="pt-4 w-full text-5xl">
                My Work Experience
            </div>
            <div className="p-4"> 
                In Progress
            </div>
        </T.Content>
        
    );
}

export default Experience;