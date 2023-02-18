import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartable';

  headers = ["ID","Name","Age","Gender","Place","Image"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Akhil",
      "Age" : "25",
      "Gender" : "Male",
      "Place" : "Thrissur",
      "Image" : "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg"
    },
    {
      "ID" : "2",
      "Name" : "Arun",
      "Age" : "28",
      "Gender" : "Male",
      "Place" : "Palakkad",
      "Image" : "https://cdn.wallpapersafari.com/91/29/CEH2se.jpg"
    },
    {
      "ID" : "3",
      "Name" : "Lekha",
      "Age" : "58",
      "Gender" : "Female",
      "Place" : "Ernakulam",
      "Image" : "https://c4.wallpaperflare.com/wallpaper/803/675/618/background-nature-image-1920x1200-wallpaper-preview.jpg"
    },
    {
      "ID" : "4",
      "Name" : "Madhu",
      "Age" : "63",
      "Gender" : "Male",
      "Place" : "Shornur",
      "Image" : "https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000"
    }
  ]

}
