//
// combine all the resolvers into one root resolver
//

import mutationResolvers from './mutationResolvers'
import queryResolvers from './queryResolvers'
import subscriptionResolvers from './subscriptionResolvers'

import User from '../../mongoose/models/user'

import { merge } from 'lodash'

// combine all the resolvers into one top-level root resolver
// using lodash's merge method
const rootResolvers = merge(mutationResolvers, queryResolvers, subscriptionResolvers)

export default rootResolvers
