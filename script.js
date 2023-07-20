const modal = document.querySelector(".modal")
const burguer = document.querySelector(".burguer")

const lineOne = document.querySelector(".line-one")
const lineTwo = document.querySelector(".line-two")
const lineThree = document.querySelector(".line-three")

let isBurguerActive = false

burguer.onclick = () => {
  if (isBurguerActive) {
    modal.classList.remove("active")
    isBurguerActive = false
    document.body.style.overflowY = "scroll"

    lineOne.style.transform = "rotate(0)"
    lineTwo.style.opacity = "1"
    lineThree.style.transform = "rotate(0)"
  } else {
    modal.classList.add("active")
    isBurguerActive = true
    document.body.style.overflowY = "hidden"

    lineOne.style.transform = "rotate(45deg) translate(6px, 7px)"
    lineTwo.style.opacity = "0"
    lineThree.style.transform = "rotate(-45deg) translate(6px, -7px)"
  }
}
