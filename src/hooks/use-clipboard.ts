import clipboard from "clipboardy";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsCopied(false), 1200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await clipboard.write(window.location.href);
      setIsCopied(true);
      toast.success("Copied URL to clipboard");
    } catch (error) {
      // Handle this better
      setIsCopied(false);
    }
  };

  return {
    isCopied,
    copyUrl: handleCopy,
  };
}
