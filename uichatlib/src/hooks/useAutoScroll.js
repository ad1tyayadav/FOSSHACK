import { useEffect, useRef } from 'react';

export default function useAutoScroll(dependencies = []) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, dependencies);

    return messagesEndRef;
}