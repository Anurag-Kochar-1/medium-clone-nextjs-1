import {useEffect} from "react"

interface Props {
    dropdownRef: React.MutableRefObject<null>
    settingDropdownStateToFlase: () => void
}

export default function useClickOutside (dropdownRef:React.RefObject<HTMLDivElement> , settingDropdownStateToFlase:()=>void) {
    useEffect(() =>{ 
      
        const listener = (e: any) => {
            // console.log('aalistener is runnning');
            
            if(!dropdownRef.current || dropdownRef.current.contains(e.target)) {
                return
            }
            settingDropdownStateToFlase()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    },[dropdownRef])
  }
