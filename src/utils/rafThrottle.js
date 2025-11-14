export const rafThrottle = (fn) => {
    let queued = false;
    const wrapper = (...args) => {
        if (queued)
            return;
        queued = true;
        requestAnimationFrame(() => {
            fn(...args);
            queued = false;
        });
    };
    return wrapper;
};
