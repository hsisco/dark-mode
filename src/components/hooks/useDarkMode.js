  
import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode');

    useEffect(() => {
        setDarkMode(darkMode);
        if (darkMode === true) {
            document.querySelector('body').classList.add("dark-mode")
        } else {
            document.querySelector('body').classList.remove("dark-mode")
        }
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;