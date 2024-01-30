import React from "react";
import { FlatList, View } from 'react-native';
import Story from "../Story";

const users = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WBdx-uQMHa20z-QZrfMDtYAoGD1PMkRvCR-CavY518hDoMaVSayL4iOu5R3eKQEiHe0&usqp=CAU",
    name: "Jubin Shah",
  }, {
    image: "https://pxbar.com/wp-content/uploads/2023/09/boys-dp-stylish-2.jpg",
    name: "Lukas",
  }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn8USmxghHRZLSSBDHtIWpZNZWFJV841fwJuYCOAerg&s",
    name: "John",
  }, {
    image: "https://i.pinimg.com/736x/03/8b/c6/038bc6fc9972fc77caeb4f9cb8aee638.jpg",
    name: "Butt sb",
  }, {
    image: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Free-D-Whatsap-Love-DP-Images-for-Boys-821x1024.jpg",
    name: "Emile",
  },
  {
    image: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Free-D-Whatsap-Love-DP-Images-for-Boys-821x1024.jpg",
    name: "Naeem sb",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WBdx-uQMHa20z-QZrfMDtYAoGD1PMkRvCR-CavY518hDoMaVSayL4iOu5R3eKQEiHe0&usqp=CAU",
    name: "Jubinyy Shah",
  }, {
    image: "https://pxbar.com/wp-content/uploads/2023/09/boys-dp-stylish-2.jpg",
    name: "Lukasss",
  }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn8USmxghHRZLSSBDHtIWpZNZWFJV841fwJuYCOAerg&s",
    name: "Johnyy",
  }, {
    image: "https://i.pinimg.com/736x/03/8b/c6/038bc6fc9972fc77caeb4f9cb8aee638.jpg",
    name: "Butasdt sb",
  }, {
    image: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Free-D-Whatsap-Love-DP-Images-for-Boys-821x1024.jpg",
    name: "Emilaae",
  },
  {
    image: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Free-D-Whatsap-Love-DP-Images-for-Boys-821x1024.jpg",
    name: "Naeemss sb",
  },
];

const Stories = () => (
  <FlatList
    data={users}
    keyExtractor={({ name }) => name}
    renderItem={({ item }) => <Story uri={item.image} name={item.name} />}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

export default Stories;