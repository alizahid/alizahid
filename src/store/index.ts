import { createStore, createTypedHooks } from 'easy-peasy'

import model, { StoreModel } from './models'

const { useStoreActions, useDispatch, useStoreState } = createTypedHooks<
  StoreModel
>()

const store = createStore(model)

export { store, useStoreActions, useDispatch, useStoreState }
