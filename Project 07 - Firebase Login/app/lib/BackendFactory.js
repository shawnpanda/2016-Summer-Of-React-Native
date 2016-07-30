'use strict'

import Firebase from './Firebase'

export default function BackendFactory(token = null) {
  return new Firebase(token);
}