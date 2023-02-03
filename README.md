# MMM-QuoteOfDay
Module shows fetched quote of day from [RapidAPI](https://rapidapi.com/martin.svoboda/api/quotes15/) in supported language. New quote is fetched every midnight.

![module MMM-QuoteOfDay](screenshots/screenshot_quoteofday.png)

## Installation
Register on [RapidAPI](https://rapidapi.com/martin.svoboda/api/quotes15/) and copy your X-RapidAPI-Key.

![module MMM-QuoteOfDay](screenshots/screenshot_rapidapi.png)

Navigate into MagicMirror's Module folder using terminal:
```
cd ~/MagicMirror/modules
```
Clone this repository using following command: 
```
git clone https://github.com/Th0be/MMM-QuoteOfDay.git
```
Add the following text to ```MagicMirror/config/config.js``` to activate the module.
```
{
    module: "QuoteOfDay",
    position: "bottom_bar", // You can change this to your desired position, but I recommend bottom bar.
    config: {
        api_key: // Insert here your X-RapidAPI-Key. Required.
        // Here you can insert options listed below.
    }
},
```

## Configuration options
| **Option** | **Type**  | **Default** | **Description** |
| ---------- | --------- | ----------- | --------------- |
| api_key | ```string```  | ``` ``` | ```REQUIRED``` Your X-RapidAPI-Key from [RapidAPI](https://rapidapi.com/martin.svoboda/api/quotes15/). |
| language | ```string```  | ```en``` |  Supported languages for quotes are ```en``` ```es``` ```pt``` ```it``` ```de``` ```fr``` ```cs``` ```sk```. |
| showTitle | ```boolean```  | ```true``` | Show title of module. |
| showAuthor | ```boolean``` | ```true``` | Show author's name. |
| animationSpeed | ```number```  | ```2.5 * 1000``` | Animation speed of quote changing in milliseconds. |

## Issues
If you find any issues with this module, feel free to open a GitHub issue in this repository or you can fix it and make pull request.