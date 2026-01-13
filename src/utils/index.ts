const useDebounce = ( value: any, delay = 0) => {
    const timer = setTimeout(() => value, delay);
    return () => clearTimeout(timer);
};

export default useDebounce;
