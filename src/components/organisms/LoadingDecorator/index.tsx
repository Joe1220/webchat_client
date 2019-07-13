import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { ChasingDots } from 'styled-spinkit'

interface Ioption {
  fetchData: Function
}

export default (option: Ioption): any => {
  return Component => {
    @observer
    class LoadingDecorator extends React.Component {
      @observable isFetching: boolean
      constructor(props) {
        super(props)

        this.isFetching = false
      }

      async componentDidMount() {
        await option.fetchData()
        this.isFetching = true
      }

      render() {
        return (
          <React.Fragment>
            {!this.isFetching && <ChasingDots />}
            {this.isFetching && <Component {...this.props} />}
          </React.Fragment>
        )
      }
    }
    return LoadingDecorator
  }
}