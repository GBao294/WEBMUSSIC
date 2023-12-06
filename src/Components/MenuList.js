import { BsFillHouseFill, BsPersonExclamation } from "react-icons/bs";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    link: "#"
  },
  // {
  //   id: 2,
  //   icon: <BiPulse />,
  //   name: "Discover",
  // },
  {
    id: 2,
    icon: <BsPersonExclamation />,
    name: "AboutUs",
    link: "/AboutUs"

  },

  {
    id: 4,
    icon: <BsPersonExclamation />,
    name: "Donate",
    link: "https://test-payment.momo.vn/v2/gateway/pay?t=TU9NT3xNT01PMTcwMTg4MTA4NjkyNQ&s=d2e3f9d570ec617786157a3f96fc6aa99b8ccc3dbab2abee40635a99f480df5c"
  },
  // {
  //   id: 5,
  //   icon: <BsJournalAlbum />,
  //   name: "Albums",
  // },
  // {
  //   id: 6,
  //   icon: <FaPodcast />,
  //   name: "Podcasts",
  // },
];


export { MenuList };

