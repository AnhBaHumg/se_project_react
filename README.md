# The project: WTWR (What to Wear?)

## Intro

- React App: It was developed by Facebook, the creators of React, and we can use it to quickly get a project up and running by generating it from a standard pre-built template. 
- React Hooks: There are two main hooks to know about: useState() and useEffect(). These give our functional components the power of class components, which are internal state and side effects.

## Overview

In this project, I’ll create and style the components that make up the front end of the "WTWR" app. I will also begin to build the functionality of the app. Here is an overview of the features I will implement by the end of this project iteration:

+ A set of clothing cards generated from a hard-coded array of data. This data can be found in Section 5 below.
+ A call to the weather API when a user visits the site. The response will be parsed, and the current temperature and location name will be saved as a React state. Information on how to interact with the weather API can be found in Section 4 below.
+ The current location, shown in the header. This location will be based on the coordinates that I choose in Section 4.
+ The current temperature (in Fahrenheit for now), set in the weather card.
+ This temperature will be used to filter the cards that are shown to the user.
+ The new garment modal can be opened and closed.
+ The image modal will appear when a card is clicked.

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

My eventual goal will be to create a full-stack web application called “WTWR”. This application will read weather data from a Weather API and then recommend suitable clothing to the user based on that data. In this project, my objective is to create a front end for the application using the fundamental principles of React.

## Pics

![FrontPage](https://github.com/AnhBaHumg/se_project_react/assets/139722552/fe16324f-09e9-4bea-b58a-ab3d305588a0)
![image](https://github.com/AnhBaHumg/se_project_react/assets/139722552/20b82db6-9e6f-451e-893b-f74b3eecc0b1)
![AddNewClothes](https://github.com/AnhBaHumg/se_project_react/assets/139722552/5ddbc3fe-69e5-4677-939c-50cd34b564f3)

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)
- [Link to my project](https://anhbahumg.github.io/se_project_react/)
- [Link to se_project_express](https://github.com/AnhBaHumg/se_project_express)
- Other: https://anhbahumg.github.io/se_project_express/