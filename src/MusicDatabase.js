import { database } from "./firebase-config";
import { ref, set } from "firebase/database";

const Songs = [
    {
      id: 0,
      favourite: false,
      songName: "Don't Côi",
      artist: "RPT Orijinn, Ronboogz",
      view: "17.415.546",
      duration: "02:26", 
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F001-Don't%20C%C3%B4i.mp3?alt=media&token=709e8e69-cd1d-462f-a3dd-4795541230ea",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F001-Don't%20C%C3%B4i.jpg?alt=media&token=ed8acb96-93e5-44fe-9e2c-8759c5949b25",
    },
    {
      id: 1,
      favourite: false,
      songName: "Legend Never Die",
      artist: "Against The Current",
      view: "534.807.877",
      duration: "02:59",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F002-Legend%20Never%20Die.mp3?alt=media&token=4af596da-c710-4db6-9072-914b264c7d27",
      imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F002-Legend%20Never%20Die.jpg?alt=media&token=0cd9eb1f-a2f3-4e99-90ce-c6a646ce836b",
    },
    {
      id: 2,
      favourite: true,
      songName: "Bạn Đời",
      artist: "Karik, GDucky",
      view: "5.805.313",
      duration: "05:18",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F003-B%E1%BA%A1n%20%C4%90%E1%BB%9Di.mp3?alt=media&token=496766c3-c373-4a8e-a2db-7fc535e1d65f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F003-B%E1%BA%A1n%20%C4%90%E1%BB%9Di.jpg?alt=media&token=d7a72116-839f-4755-9b85-ee5464ee05a9",
    },
    {
      id: 3,
      favourite: false,
      songName: "Chúng ta không thuộc về nhau",
      artist: "Sơn Tùng M-TP",
      view: "7.895.052",
      duration: "04:02",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F004-CTKTVN.mp3?alt=media&token=133cbc2d-8d7b-4bcb-853c-ca3773673450",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F004-CTKTVN.jpeg?alt=media&token=39a41d5c-eb58-48f4-b0a7-35ec1c41fb9c",
    },
    {
      id: 4,
      favourite: false,
      songName: "Em Là",
      artist: "MONO, Onionn",
      view: "11.851.492",
      duration: "03:20",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F005-Em%20L%C3%A0.mp3?alt=media&token=66a75fdf-fe51-4a6f-9dda-0e741c8dd26b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F005-Em%20L%C3%A0.jpg?alt=media&token=e429bdfc-c5a2-4c9e-b350-6802db0bee6a",
    },
    {
      id: 5,
      songName: "Call of Silence",
      artist: "Hiroyuki Sawano",
      view: "39.728.553",
      duration: "03:02",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F006-Call%20of%20Silence.mp3?alt=media&token=7c4ab6b5-73e5-401a-8f17-fc69ccf9efa7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F006-Call%20Of%20Silence.jpg?alt=media&token=8de770e7-a4d8-48eb-9e62-88aea738fefd",
    },
    {
      id: 6,
      favourite: true,
      songName: "There's No One At All",
      artist: "Sơn Tùng M-TP",
      view: "9.099.692",
      duration: "03:41",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F007-NoOneAtAll.mp3?alt=media&token=2c79c850-9a84-4ec7-b94e-d614d6cf260d",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F007-NoOneAtAll.jpg?alt=media&token=bd4af2f9-007b-439e-b50a-239137ba6b68",
    },
    {
      id: 7,
      favourite: false,
      songName: "Từng Quen",
      artist: "Wren Evans, itsnk",
      view: "8.607.343",
      duration: "02:54",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F008-T%E1%BB%ABng%20Quen.mp3?alt=media&token=4e6c7921-9434-44d0-b4cf-db395d77ad60",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F008-T%E1%BB%ABng%20Quen.jpg?alt=media&token=fad2c31b-af50-43db-99ab-938f39b5f817",
    },
    {
      id: 8,
      favourite: false,
      songName: "Exit Sign",
      artist: "HIEUTHUHAI, marzuz",
      view: "1.766.691",
      duration: "03:21",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F009-Exit%20Sign.mp3?alt=media&token=ca83ae62-103f-47d0-b1e1-0d303d040df0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F009-Exit%20Sign.jpg?alt=media&token=590733c4-096a-4a49-a5ae-3fa11541074c",
    },
    {
      id: 9,
      favourite: true,
      songName: "Từ Chối Hiểu",
      artist: "RHYDER",
      view: "2.443.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F010-T%E1%BB%AB%20Ch%E1%BB%91i%20Hi%E1%BB%83u.mp3?alt=media&token=5c6a8cbd-40ae-4031-a582-45cc4c19abdd",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F010-T%E1%BB%AB%20Ch%E1%BB%91i%20Hi%E1%BB%83u.jpg?alt=media&token=e1704b27-2285-4df8-b4be-c022959adb98",
    },
  ];
  
  //Đẩy dữ liệu bài hát lên realtime database
  set(ref(database, 'SongInformation/'), {Songs} );