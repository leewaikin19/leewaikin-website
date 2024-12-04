import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Home(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <T.Content>
            <div className="pt-10 w-full text-5xl h-full">
                Lee Wai Kin
            </div>
        </T.Content>
    );
}

export default Home;