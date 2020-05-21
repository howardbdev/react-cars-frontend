import { BASE_URL } from "./api.js"

// synchronous action creators
export const loadReviews = reviews => ({ type: "LOAD_REVIEWS", reviews })

export const addReview = review => ({ type: "ADD_REVIEW", review })

// async action creators

export const fetchDealerReviews = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/dealer_reviews`)
      .then(resp => resp.json())
      .then(reviews => {
        if (reviews.error) {
          console.log(reviews)
        } else {
          dispatch(loadReviews(reviews))
        }
      })
      .catch(console.log)
  }

}

export const createReview = reviewData => {
  return dispatch => {
    const body = {
      dealer_review: reviewData
    }
    return fetch(`${BASE_URL}/dealer_reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newReview => {
        if (newReview.error) {
          console.log(newReview.error)
        } else {
          dispatch(addReview(newReview))
        }
        return newReview
      })
  }

}
