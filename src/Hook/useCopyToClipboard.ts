import React, {useState} from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>

const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
    const [copiedText, setCopiedText] = useState<CopiedValue>(null);
    const copy: CopyFn = async text => {
        if (!navigator?.clipboard) {
            console.warn("Clipboard Not Supported")
            return false
        }
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true
        } catch (error) {
            setCopiedText(null)
            return false
        }
    }
    // Try to save to clipboard then save it in the state if worked
    return [copiedText, copy]
}
export default useCopyToClipboard;
