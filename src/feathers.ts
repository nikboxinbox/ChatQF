// src/feathers.ts
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { iff, discard } from 'feathers-hooks-common'

const socket = io('http://localhost:3030', { transports: ['websocket'] })

// This variable name becomes the alias for this server.
export const api = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))
