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
  // {
  //   id: 4,
  //   icon: <FaMicrophoneAlt />,
  //   name: "Artist",
  // },
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

