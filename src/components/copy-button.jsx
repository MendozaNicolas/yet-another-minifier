import React, { useState } from 'react';
import { Clipboard, Check } from "@/components/icons";
function CopyButton(props) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(props.inputValue);
            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        } finally {
            setTimeout(() => setIsCopied(false), 1000); // Reset copied state after 1 second
        }
    };
    return (
        <button className={props.className} onClick={handleCopy}>{isCopied ? 'Copied!' : <Clipboard />}</button>
    );
}

export default CopyButton;