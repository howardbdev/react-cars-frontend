const initialState = [{"id":1,"rating":2,"content":"A little more than kin, and less than kind.","created_at":"2020-05-07T00:57:42.172Z","updated_at":"2020-05-07T00:57:42.172Z"},{"id":2,"rating":4,"content":"To be, or not to be: that is the question.","created_at":"2020-05-07T00:57:42.178Z","updated_at":"2020-05-07T00:57:42.178Z"},{"id":3,"rating":1,"content":"This above all: to thine own self be true.","created_at":"2020-05-07T00:57:42.183Z","updated_at":"2020-05-07T00:57:42.183Z"},{"id":4,"rating":1,"content":"I will speak daggers to her, but use none.","created_at":"2020-05-07T00:57:42.188Z","updated_at":"2020-05-07T00:57:42.188Z"}]

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOAD_REVIEWS":
      return action.reviews
    case "ADD_REVIEW":
      return state.concat(action.review)
    default:
      return state
  }
}
