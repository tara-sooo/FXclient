let debugContext = null;

export function reportError(e, message) {
    console.error("FX Client error:", e, message);
}

export function debugWithContext(callback, context) {
    try {
        return callback();
    } catch (error) {
        debugContext = context;
        setTimeout(() => {
            if (debugContext !== null) debugContext = null;
        });
        throw error;
    }
}