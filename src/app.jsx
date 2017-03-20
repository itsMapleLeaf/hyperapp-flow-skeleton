// @flow
import {h} from 'hyperapp'

type Actions = {
  updateMessage(message: string): void,
}

export const model = {
  message: 'Hello, world',
}

export const actions = {
  updateMessage (model: typeof model, message: string) {
    return { message }
  },
}

export function view (model: typeof model, actions: Actions) {
  return (
    <div>
      <input type='text' value={model.message} oninput={e => actions.updateMessage(e.target.value)} />
      <h1>{model.message}</h1>
    </div>
  )
}
