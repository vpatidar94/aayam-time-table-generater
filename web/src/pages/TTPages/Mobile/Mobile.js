import React, { useEffect, useRef, useState } from 'react';

const Mobile = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
    const draggableElement = useRef(null);

    useEffect(() => {
        const element = draggableElement.current;

        // Drag events
        const dragStart = (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        };
        const dragOver = (event) => {
            event.preventDefault();
        };
        const drop = (event) => {
            event.preventDefault();
            const id = event.dataTransfer.getData('text');
            const draggableElement = document.getElementById(id);
            event.target.appendChild(draggableElement);
        };
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragover', dragOver);
        element.addEventListener('drop', drop);

        // Touch events
        const touchStart = (event) => {
            setInitialPos({
                x: event.touches[0].clientX - position.x,
                y: event.touches[0].clientY - position.y,
            });
        };
        const touchMove = (event) => {
            event.preventDefault();
            setPosition({
                x: event.touches[0].clientX - initialPos.x,
                y: event.touches[0].clientY - initialPos.y,
            });
        };
        const touchEnd = () => {
            setInitialPos(position);
        };
        element.addEventListener('touchstart', touchStart);
        element.addEventListener('touchmove', touchMove);
        element.addEventListener('touchend', touchEnd);

        // Clean up event listeners on component unmount
        return () => {
            element.removeEventListener('dragstart', dragStart);
            element.removeEventListener('dragover', dragOver);
            element.removeEventListener('drop', drop);
            element.removeEventListener('touchstart', touchStart);
            element.removeEventListener('touchmove', touchMove);
            element.removeEventListener('touchend', touchEnd);
        };
    }, [initialPos, position]);

    return (
        <>
            <div
                id='draggable'
                ref={draggableElement}
                draggable
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    touchAction: 'none',
                }}
            >
                Drag Me
            </div>
            <div>
                <p>HEY</p>
            </div> 
            
            
        
        </>
    );
};

export default Mobile;
