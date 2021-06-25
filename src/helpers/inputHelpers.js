// randomized input placeholder
export const inputPlaceholder = () => {
  const placeholderItems = [
    "Clean the dishes",
    "Buy groceries",
    "Conquer the world",
    "Build an app",
    "Dinner @ 7pm"
  ]

  const randomNumber = maxNum => {
    return Math.floor(Math.random() * maxNum)
  }

  return placeholderItems[randomNumber(placeholderItems.length)] + "..."
}