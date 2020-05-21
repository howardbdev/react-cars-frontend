const initialState = [{"id":1,"make":"Lincoln","model":"Navigator","year":1994,"miles":114368,"price":25603.0,"used":true,"created_at":"2020-05-07T00:57:41.908Z","updated_at":"2020-05-07T00:57:41.908Z"},{"id":2,"make":"Ford","model":"Fiesta","year":1952,"miles":43449,"price":42231.0,"used":true,"created_at":"2020-05-07T00:57:42.019Z","updated_at":"2020-05-07T00:57:42.019Z"},{"id":3,"make":"Chevy","model":"Malibu","year":2002,"miles":38312,"price":50000.0,"used":true,"created_at":"2020-05-07T00:57:42.066Z","updated_at":"2020-05-07T00:57:42.066Z"}]

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOAD_CARS":
      return action.cars
    case "ADD_CAR":
      return state.concat(action.car)
    case "UPDATE_CAR_SUCCESS":
      return state.map(car => {
        // what am I doing?
        if (car.id === action.car.id) {
          return action.car
        } else {
          return car
        }
      })
    default:
      return state
  }
}
