// define top level Subscription type that represents all possible subscriptions
const rootSubscriptions = [`
  # Root Subscription: Allow clients to be notified and "subscribe" to an event in the API
  type RootSubscription {
    # subscribe to whenever a new question was asked to the imam
    newImamQuestion: ImamQuestion!
  }
`]

export default rootSubscriptions
