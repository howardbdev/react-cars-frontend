// In Redux, action creators are functions that create actions.
// In Redux, actions are plain JS objects with at least a 'type' property and often a payload as well.
// Therefore, an action creator is a function that returns a plain JS object with a type property.
// When our actions carry a payload, which is just the data that is needed to make a change in the store,
// the action creator receives the payload as an argument in order to build the correct action.

// synchronous (regular) action creators...

// here is what the long-hand version might look like
// export function loadCars(cars) {
//   return {
//     type: "ADD_CARS",
//     cars: cars
//   }
// }
import { BASE_URL } from "./api.js"
// with ES6, we can clean action creators like loadCars() up into one line:
export const loadCars = cars => ({ type: "LOAD_CARS", cars })

export const addCar = car => ({ type: "ADD_CAR", car })

export const updateCarSuccess = car => ({ type: "UPDATE_CAR_SUCCESS", car })

// async action creators

export const fetchCars = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/cars`)
      .then(resp => resp.json())
      .then(carsJSON => {
        if (carsJSON.error) {
          alert(carsJSON.error)
        } else {
          dispatch(loadCars(carsJSON))
        }
      })
  }
}

export const createCar = (car) => {
  return dispatch => {
    const body = {
      car
    }
    return fetch(`${BASE_URL}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCar => {
        if (newCar.error) {
          alert(newCar.error)
        } else {
          dispatch(addCar(newCar))
        }
        return newCar
      })
  }
}

export const updateCar = (car) => {
  return dispatch => {
    const body = {
      car
    }
    return fetch(`${BASE_URL}/cars/${car.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCar => {
        if (newCar.error) {
          alert(newCar.error)
        } else {
          dispatch(updateCarSuccess(newCar))
        }
        return newCar
      })
  }
}
