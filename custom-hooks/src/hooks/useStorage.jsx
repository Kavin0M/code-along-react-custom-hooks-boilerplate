import {useEffect} from 'react'

function useStorage(text) {
  useEffect(() => {
    if(text){
        localStorage.setItem("Text",text)
    }
  },[text])
}

export default useStorage