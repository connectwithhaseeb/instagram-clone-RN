import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
import styles from './styles';

const posts =  [
    {
        user: {
            image:"https://pxbar.com/wp-content/uploads/2023/09/boys-dp-stylish-2.jpg",
            name: "Lukas",
        },
        imageUri:'https://e0.pxfuel.com/wallpapers/61/978/desktop-wallpaper-cute-baby-cat-cute-cat-kitten.jpg',
        postedAt:'6 minutes ago',
        caption: 'Such a beautiful place #instagram',
        likesCount: 6588,
      },
      {
        user: {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WBdx-uQMHa20z-QZrfMDtYAoGD1PMkRvCR-CavY518hDoMaVSayL4iOu5R3eKQEiHe0&usqp=CAU",
            name: "Jubin Shah",
        },
        imageUri:'https://images.unsplash.com/photo-1656792213776-a900d686f2de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95cyUyMGRwfGVufDB8fDB8fHww',
        postedAt:'6 minutes ago',
        caption: 'Such a beautiful place #instagram',
        likesCount: 24,
      },
      {
        user: {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn8USmxghHRZLSSBDHtIWpZNZWFJV841fwJuYCOAerg&s",
            name: "John",
        },
        imageUri:'https://www.fooditravellers.com/wp-content/uploads/2022/02/340953814_b162ae8b0e_o_1200x628.jpg',
        postedAt:'6 minutes ago',
        caption: 'Such a beautiful place #instagram',
        likesCount: 12,
      },
      {
        user: {
            image:"https://pxbar.com/wp-content/uploads/2023/09/boys-dp-stylish-2.jpg",
            name: "Lukas",
        },
        imageUri:'https://img.freepik.com/premium-photo/international-cat-day-illustration-cat-picture_781502-256.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais',
        postedAt:'6 minutes ago',
        caption: 'Such a beautiful place #instagram',
        likesCount: 4084,
      }
];

const Feed = ()=>(  
        <FlatList 
        style={styles.container}
         data={posts}
         renderItem={({item})=><Post post={item}/>}
         ListHeaderComponent={Stories} 
        />
);

export default Feed;