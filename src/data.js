import tour1Img from "./images/tour-1.jpeg"
import tour2Img from "./images/tour-2.jpeg"
import tour3Img from "./images/tour-3.jpeg"
import tour4Img from "./images/tour-4.jpeg"
import tour5Img from "./images/tour-5.jpeg"
import tour6Img from "./images/tour-6.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" }
]

export const socialLinks = [
  { id: 1, url: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, url: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, url: "https://www.squarespace.com", icon: "fab fa-squarespace" }
]

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    heading: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    heading: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    heading: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  }
]

export const tours = [
  {
    id: 1,
    image: tour1Img,
    date: "august 26th, 2024",
    heading: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "china",
    duration: 6,
    cost: "2100"
  },
  {
    id: 2,
    image: tour2Img,
    date: "october 1st, 2024",
    heading: "indonesia Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "indonesia",
    duration: 4,
    cost: "1400"
  },
  {
    id: 3,
    image: tour3Img,
    date: "august 26th, 2024",
    heading: "asia Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "hong kong",
    duration: 8,
    cost: "1900"
  },
  {
    id: 4,
    image: tour4Img,
    date: "september 15th, 2024",
    heading: "japan Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "japan",
    duration: 7,
    cost: "3100"
  },
  {
    id: 5,
    image: tour5Img,
    date: "november 26th, 2024",
    heading: "canada Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "canada",
    duration: 14,
    cost: "4100"
  },
  {
    id: 6,
    image: tour6Img,
    date: "december 26th, 2024",
    heading: "Turkish Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "turkey",
    duration: 21,
    cost: "5000"
  }
]
