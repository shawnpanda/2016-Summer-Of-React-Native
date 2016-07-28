import { combineReducers} from 'redux'
import { ADD_NOTE, EDIT_NOTE} from '../actions/actions'

const initialState = [
  {
    id : 7,
    date: "06/30/2016",
    note: "Vivamus est purus, euismod a leo ut, placerat ornare nisl. Duis in tristique neque. Etiam mattis commodo arcu et ornare. Sed tempor ligula orci, non ullamcorper dui tincidunt ac. In enim elit, iaculis et laoreet vel, interdum sed ipsum. Nam est ex, pharetra ut bibendum et, efficitur a lacus. Donec non interdum lorem, lobortis molestie mi. Ut dapibus magna at massa mollis, sed ullamcorper nunc aliquam."
  },
  {
    id : 6,
    date: "06/29/2016",
    note: "Quisque a fringilla ipsum, vel commodo erat. Proin et vehicula nulla, vel condimentum massa. Curabitur vel urna pulvinar, mollis nisl ac, semper orci. Cras aliquet laoreet consequat. Aliquam sodales orci in augue hendrerit, eu pulvinar sem accumsan. Sed ornare tempus rutrum. Vivamus quis efficitur eros. Fusce orci orci, gravida eu bibendum eu, dapibus ut neque. Nam volutpat, odio vitae tristique bibendum, dui dolor congue orci, sed dignissim nulla nulla nec eros."
  },
  {
    id : 5,
    date: "06/28/2016",
    note: "Donec imperdiet nulla urna, id tristique nisl accumsan et. Vestibulum metus metus, bibendum ut luctus in, ultrices quis leo. Integer diam ipsum, pretium et purus non, egestas mattis massa. Nulla at rhoncus augue, vel pellentesque leo. Phasellus nunc eros, maximus a ornare vitae, vulputate quis nisi. Mauris ut ullamcorper libero, et tincidunt dolor. Morbi sodales purus a lectus vehicula, sit amet vestibulum mi pulvinar. Nulla in ex felis. In feugiat, odio at efficitur pulvinar, sem velit imperdiet odio, eleifend fringilla augue leo sed tellus. Quisque tristique dui eu sem interdum porta. Morbi venenatis, mauris nec elementum dictum, leo nunc pretium purus, id dictum mi dolor eu metus."
  },
  {
    id : 4,
    date: "06/27/2016",
    note: "Duis sed placerat ligula, quis luctus dui. Proin eget sagittis velit. Phasellus sodales eget erat vitae consectetur. Phasellus at odio dui. Proin sed pellentesque nunc, vel gravida massa. Etiam eu metus dignissim, pellentesque arcu pharetra, tempor justo. Etiam rutrum pharetra ultricies. Vivamus finibus iaculis quam quis consequat. Nunc sit amet sem ipsum. Ut imperdiet ante et nisi condimentum, vitae consectetur elit fermentum. Nulla at elit blandit, imperdiet enim in, tempor lacus. Donec gravida elit ac magna commodo tincidunt. Praesent blandit scelerisque vehicula. Phasellus tristique, mi at dignissim dictum, tortor est semper sapien, ac blandit dui velit sed nisi. Sed bibendum congue sem, eget facilisis ligula luctus vel. Phasellus sagittis aliquet mi."
  },
  {
    id : 3,
    date: "06/25/2016",
    note: "Mauris sit amet risus non massa blandit interdum. Suspendisse eget luctus orci, sit amet porta orci. Phasellus felis nisl, hendrerit et molestie vel, commodo quis odio. Nunc vel accumsan elit. Aliquam vitae vehicula eros. Curabitur interdum interdum consectetur. Maecenas mattis vehicula condimentum. Pellentesque placerat, tortor luctus eleifend placerat, mauris magna faucibus nibh, at tincidunt nunc neque et eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    id : 2,
    date: "06/24/2016",
    note: "Sed accumsan euismod vestibulum. Cras dapibus cursus sapien ac vestibulum. Quisque gravida sapien a ex consequat euismod. Morbi in placerat est. Maecenas interdum leo at iaculis rutrum. Aenean bibendum eu sem ut pellentesque. Nullam in lorem turpis. Nulla maximus sagittis odio, in efficitur felis posuere in. In tellus massa, commodo sit amet accumsan eget, tincidunt hendrerit neque. Nullam eget commodo nisl. Nam maximus cursus ante, vel dictum orci interdum at."
  },
  {
    id : 1,
    date: "06/23/2016",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc et est ornare malesuada non nec tellus. Nullam eu ex eget sem ultricies ornare non eget dolor. Fusce odio ligula, dictum congue nisl pulvinar, rutrum vulputate massa. Vivamus id felis imperdiet, venenatis risus sit amet, suscipit lacus. Suspendisse placerat nibh non purus venenatis malesuada. Quisque cursus metus in diam imperdiet convallis. Nam fringilla porta neque sit amet ullamcorper."
  }
]

function note(state, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        id: action.id,
        note: action.text,
        date: action.date
      }
    case EDIT_NOTE:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        note: action.text
      })
    default:
      return state
  }
}

function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        note(undefined, action)]
    case EDIT_NOTE:
      return state.map(t =>
        note(t, action)
        )
    default:
      return state
  }
}

const notesApp = combineReducers({notes: notes})

export default notesApp