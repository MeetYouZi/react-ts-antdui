import React, { useState, useEffect} from "react";

// deps: any[] = [] 默认空数组
const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

      setData([1,2,3])
      setLoading(false)
    }, )
  }, deps)
  return [data, loading]
}

export default useURLLoader
