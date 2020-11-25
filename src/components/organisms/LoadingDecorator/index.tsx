import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import { ChasingDots } from "styled-spinkit"

interface Ioption {
  fetchData: Function
  closeData: Function
}

export default (option: Ioption): any => {
  return (Component) => {
    return observer((props) => {
      const [isFetching, setIsFetching] = useState(false)
      useEffect(() => {
        ;(async function () {
          try {
            option.fetchData()
            setIsFetching(true)
            return async () => {
              await option.closeData()
            }
          } catch (e) {
            console.log("check error: ", e)
            setIsFetching(true)
          }
        })()
      }, [])
      return (
        <React.Fragment>
          {!isFetching && <ChasingDots />}
          {isFetching && <Component {...props} />}
        </React.Fragment>
      )
    })
  }
}
