import React from 'react';

export function useClickOutside(handler:()=>void){
    const domNode = React.useRef<any>();
    React.useEffect(()=> {
        const mayBeHandler = (event:any) => {
            if(domNode.current && !domNode.current.contains(event.target)){
                handler();
            }
        }
        document.addEventListener('mousedown', mayBeHandler);
        return () => {
            document.removeEventListener('mousedown', mayBeHandler);
        }
    }, [handler]);

    return domNode
}