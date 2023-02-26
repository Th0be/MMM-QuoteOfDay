# MMM-QuoteOfDay
Module shows fetched quote of day from [Quotes API](https://rapidapi.com/martin.svoboda/api/quotes15/) in supported language. New quote is fetched every midnight.

![Quote Of Day module screenshot](screenshots/screenshot_quoteofday.png)

## Installation
Register on [RapidAPI](https://rapidapi.com/hub) and copy your X-RapidAPI-Key (You can find it [here](https://rapidapi.com/martin.svoboda/api/quotes15/)).
Navigate into MagicMirror's modules folder using terminal:
```
cd ~/MagicMirror/modules
```
Clone this repository using following command: 
```
git clone https://github.com/Th0be/MMM-QuoteOfDay.git
```
Navigate into module folder and install dependencies using:
```
cd MMM-QuoteOfDay
npm install
```
Add the following text to ```MagicMirror/config/config.js``` to activate the module:
```
{
    module: "MMM-QuoteOfDay",
    position: "bottom_bar", // You can change this to your desired position, but I recommend bottom bar.
    config: {
        apiKey: ""// Insert here your X-RapidAPI-Key. Required!
        // Here you can insert options listed below.
    }
},
```

## Configuration options
| **Option** | **Type**  | **Default** | **Description** |
| ---------- | --------- | ----------- | --------------- |
| apiKey | ```string```  | ``` ``` | ```REQUIRED``` Your X-RapidAPI-Key from RapidAPI (You can find it [here](https://rapidapi.com/martin.svoboda/api/quotes15/). |
| language | ```string```  | ```en``` |  Supported languages for quotes are ```en``` ```es``` ```pt``` ```it``` ```de``` ```fr``` ```cs``` ```sk```. |
| showTitle | ```boolean```  | ```true``` | Show title of module. |
| showAuthor | ```boolean``` | ```true``` | Show author's name. |
| animationSpeed | ```number```  | ```2.5 * 1000``` | Animation speed of quote change in milliseconds. |

## To do list
+ Add localization for supported languages by quotes

## Issues and pull request
If you find any issues with this module, feel free to open a issue or to fix it and make a pull request in this repository.