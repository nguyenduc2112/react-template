import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userSlice from './slices/user'

const customizedMiddleware: any = getDefaultMiddleware({
  serializableCheck: false
})

const persistConfig: any = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer: any = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice
  })
)

export default configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware
})
