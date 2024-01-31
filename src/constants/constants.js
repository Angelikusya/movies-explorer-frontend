const initialCards = [
  {
    name: '33 слова о дизайне',
    image: 'https://2.downloader.disk.yandex.ru/preview/0e460269e429c33bf5cc9e42535c135165346620d1c80cb6cdc05a0d78ab99c0/inf/MIW2e4rGtdW6cd4VHixgU2PfbLfGg9EqtowuOODKa5y0u97JIFtpGEc5puqmbtXFaqOhop9-w7R3MSU53d6HeA%3D%3D?uid=1092255713&filename=grid-15.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    image: 'https://3.downloader.disk.yandex.ru/preview/381f71af917cb742acacee7da10ef04cb8c56462389f1c686d1a64e7c1c68cfc/inf/BkMw-jxRtO3BAMOTeUJawwvRE_lIJv-gRMHnB8E5C_DcUlucgvfam63pUYyGRhK5P6AoFFwVdTj2SdxbojPRxg%3D%3D?uid=1092255713&filename=grid-8.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'В погоне за Бенкси',
    image: 'https://2.downloader.disk.yandex.ru/preview/824ff6aa80ac28b54458c9890a3f039a63fc09be46c79c60043725a5712353a3/inf/4zCxkc6Nc0wQOHpD5CYDY9XKIsou5jmIXOFZvB7iJo7JQYOYP2weoDo2CQGxCQhoheLotbGRsJJmtdkQuC1YVg%3D%3D?uid=1092255713&filename=grid-4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Баския: Взрыв реальности',
    image: 'https://1.downloader.disk.yandex.ru/preview/73df04ca150d9364682237c3ad7efac86ddccae31a3280fa2c9e51b3d48856f9/inf/OZRNJv9zRs3NmHEaP4mr9rV-zisjv7DyQnqa7QGLYbPs3StlmdpDq5yLSWH_BeFd7F5h2iUUUyyBcWT-U72EfQ%3D%3D?uid=1092255713&filename=grid-12.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Бег это свобода',
    image: 'https://1.downloader.disk.yandex.ru/preview/a4d94afc4ec650018a82cf1e60cbfbb0a3700b3e0854755d884ece5223ebc797/inf/T73PU66hCwTTRhTVDj27J3oO-i9A4Ql5J0w1mkmAtjuMTKH3RE9lfiIxI0cvJcyoDlrcTqPaNO1hHfmJwFAe8g%3D%3D?uid=1092255713&filename=grid-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Книготорговцы',
    image: 'https://3.downloader.disk.yandex.ru/preview/1b9e2137cabd6982a12b4df6bec93d6ba639a485d26f26b60be12f0b34b8ef0f/inf/5btYa2yeJuKCEQK0JmnfNrV-zisjv7DyQnqa7QGLYbNwxaMd7lYilBJW46zwSyF0sBZ2SL0xQHZ3gr9jUwVOcA%3D%3D?uid=1092255713&filename=grid-10.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Когда я думаю о Германии ночью',
    image: 'https://2.downloader.disk.yandex.ru/preview/15277c75baeda47892e9e4a779930519ef6594360799b21894b6defcf34ad3cc/inf/90DxZyDmwrflVguD7o7bG-fhj1TxSQZju0YB-sAG8DN_BiYnbdulhu5E02Bw4XGid_-wYQKykbycac6uLUaDYQ%3D%3D?uid=1092255713&filename=grid-6.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Gimme Danger: История Игги и The Stooges',
    image: 'https://2.downloader.disk.yandex.ru/preview/808f89abbf17cfa896934e8f58cc84e306e26aa340a74622d565a5cf74017b4f/inf/IYwRmqlbnfAmeaxiYWKK3kpRF7Xq9XrAH5mISz_LU61zi-IUZOkbdCt7srI47oXw47yZhKUfmYD-qCfId4BiIw%3D%3D?uid=1092255713&filename=grid-14.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Дженис: Маленькая девочка грустит',
    image: 'https://4.downloader.disk.yandex.ru/preview/34d485b9b402dd16ddf815467277445ee5c414028c3dd81d9b3207fe9fd9bfb3/inf/exBbrOcqTOGMHsWzwgEdmgvRE_lIJv-gRMHnB8E5C_DgDko_hcGhDEXopYY_gcbeWBLAX6jfb16BSsQv8eayAw%3D%3D?uid=1092255713&filename=grid-1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Соберись перед прыжком',
    image: 'https://2.downloader.disk.yandex.ru/preview/ad6d1e7d84643c9402e1eab9a96ae0349ca61e2ca8e058fb8ca633e378ad80e6/inf/BRA78ZX4ShOVEo08yu9HT2PfbLfGg9EqtowuOODKa5wb44XFAfpeP3333tuL2V81ZNXOzakg_Lv5mCo4Mbo6Tw%3D%3D?uid=1092255713&filename=grid-9.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Пи Джей Харви: A dog called money',
    image: 'https://1.downloader.disk.yandex.ru/preview/d98cb64eef56e6ae62fbc833f174d3334bcf747223f26505bb3ab1031434b22b/inf/s2x2i4i0ILstiBQHmTsKa92ScQ4RSXUF2p1Y8mv3e8zK0be2pkSEcgIEtTQ1KUAx_ttbi1uKwArZmmBPbGq2oQ%3D%3D?uid=1092255713&filename=grid-5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'По волнам: Искусство звука в кино',
    image: 'https://2.downloader.disk.yandex.ru/preview/3f12bb0ae2e2fd3d08f5bdb01358aac6a6d3389c30dde05d3118a754ea6f2594/inf/WjB2hTwOTLbJiIImnaRKzWPfbLfGg9EqtowuOODKa5wpqucY0JdGj-fqZgq12GOAGq6znmtglqJsXt0AHM4FnQ%3D%3D?uid=1092255713&filename=grid-13.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Рудбой',
    image: 'https://1.downloader.disk.yandex.ru/preview/5955a3e7c5a324abb4e848b2f11e8d3be7522e66aec49047dabf7696e49ca837/inf/yCNNviAI3-cPaED_uev38QvRE_lIJv-gRMHnB8E5C_Dhp-luXEAgUyvrnlJgzWzWfSavYQT17kmpuF0gj7Xs3A%3D%3D?uid=1092255713&filename=grid-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Скейт — кухня',
    image: 'https://2.downloader.disk.yandex.ru/preview/928fc727af63f6aeb5ae69e6f558e9b62670d9bd823a5588432af9c758cc8468/inf/dWOh-YN8qxyh9wQWKgCCHOQ7_azhoG3_hJBqZZFwnehtOMBipRJeI7w-gdg3nf7s6WNSffWhvHdGsgxkKoqqwA%3D%3D?uid=1092255713&filename=grid-11.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Война искусств',
    image: 'https://3.downloader.disk.yandex.ru/preview/f530d2da475ddc44cc4b738bb055d0997fa010ec715a33e25ef727a14d38d766/inf/AlV2Qes0QCFAiRB3RtC6hqrN9f-eae2xUlPB8e_3-qdLc0FU1cbB_V3wHNkFJeYa6_0FLl_scu7xoFgHFCAtoA%3D%3D?uid=1092255713&filename=grid-7.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
  {
    name: 'Зона',
    image: 'https://3.downloader.disk.yandex.ru/preview/161aeb5f463c6c643a49a12e67d38d2dfe283511342b2ab662d3abfd56db47a0/inf/jAmDT5FSfqGiijC1VnBBwLdbr_xjaymoI2KhI85oJIxg-HDPt1LZ83r7I7ouAeWpZ3G-HtyeglLbpjaugD-cDQ%3D%3D?uid=1092255713&filename=1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1092255713&tknv=v2&size=2880x1398',
    duration: '1ч 42м', 
    link: 'https://www.kinopoisk.ru/',
  },
];

export default initialCards;


