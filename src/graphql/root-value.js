//
// define the GraphQL root value
//

import fakeDatabase from './fakeDatabase'

const rootValue = {
  user: function ({id}) {
    return fakeDatabase[id]
  }
}

export default rootValue
