import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {Animated} from "react-animated-css"


const Gallery = () => {
   useEffect(()=> {
       const panels = document.querySelectorAll('.panel')
       panels.forEach(panel => {
           panel.addEventListener('click', () => {
               removeActiveClasses();
               panel.classList.add('active');
           });
       });
       function removeActiveClasses() {
           panels.forEach(panel => {
               panel.classList.remove('active')
           })
       }
   }, [])
    return (
<Layout>
    <div className='container mx-auto text-center'>
        <Animated animationIn="fadeInLeftBig" isVisible={true}>
            <div>
                <h1 className='title__g text-blue-900'>Top 5 Largest Cities in the World <br/> by Population Statistics</h1>
            </div>
        </Animated>
    </div>


    <div className="panel-container mt-16">
        <div className="panel active" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573456526391-4a1ca23009df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1480&q=80')"}}>
            <div>Japan, Tokyo (38 505 000)</div>
        </div>
        <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551594278-0162be5d00c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')"}}>
            <div>India,  New Delhi (28 125 000)</div>
        </div>
        <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
            <div>China, Beijing (2 125 000)</div>
        </div>
        <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1398&q=80')"}}>
            <div>Brazil , Rio de Janeiro (20 935 000)</div>
        </div>
        <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560565106-4b9f171bae5c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1420&q=80')"}}>
            <div>Mexico, Mexico City (20 395 005)</div>
        </div>
    </div>
</Layout>
    );
};

export default Gallery;


// <div className="panel active" style={{backgroundImage: "url('')"}}>
