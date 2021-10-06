import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postsType = {
    id: string,
    message: string
}[]

const posts: postsType = [
    {
        id: "1",
        message: `Hi, it's my new account`,
    },
    {
        id: "2",
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at culpa dignissimos
                    doloribus, ducimus eum incidunt iste maxime pariatur possimus reprehenderit, sit unde
                    voluptate. Animi consectetur inventore nesciunt perspiciatis suscipit.`,
    },
    {
        id: "3",
        message: `Is anyone here?`,
    },
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
