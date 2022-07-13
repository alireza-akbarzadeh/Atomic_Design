import React from 'react';
import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent) => void
const useClickAnyWhere = (handler: Handler) => {
    useEventListener("click", event => {
        handler(event)
    })
};

export default useClickAnyWhere;
