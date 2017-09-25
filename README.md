# Week-3 Ping Pong Web Application

#### _Personal project for INTRO track at Epicodus, 9.23.17_

#### By _**Valia Dempsey**_

### Description
_The goal of this web page is to create an application, that converts certain numbers (see **logic section** of README) to words "ping," "pong," "ping-pong" and outputs number/ping-pong list or "Rythm" as I call it.
To see the page, go here: vdempsey.github.io/Ping-Pong._

### Logic to create Number/Ping-Pong Rythm.

The user is given directions to enter a number greater than 0. After submission, the result will be a return of a range of numbers with some numbers replaced with words following the logic below:

| CONDITION | USER NUMBER | OUTPUT FOR THE NUMBER |
|-----------|------------|-------------------|
| If the number is divisible by 3 | 3 | "ping" |
| If the number is divisible by 5 | 10 | "pong" |
| If the number is divisible by 15 | 30 | "ping-pong" |
| If the number isn't divisible by 3 or 5, but greater than 0 | 7 | 7 |
| If the number is non-integer, or <= 0 | 3.14 | alert (_Enter an enteger greater than 0!_) |

|EXAMPLE OF THE FINAL OUTCOME IF THE USER ENTERED "16"|
|----------------------------------------------------- |
|                   _1_               |
|                   _2_               |
|                   _ping_            |
|                   _4_               |
|                   _pong_            |
|                   _ping_            |
|                   _7_               |
|                   _8_               |
|                   _ping_            |
|                   _pong_            |
|                   _11_              |
|                   _ping_            |
|                   _13_              |
|                   _14_              |
|                   _ping-pong_       |
|                   _16_              |

### Setup/Installation Requirements

* _Clone this project to your local machine using this url: https://github.com/vdempsey/Ping-Pong_
* _Open project folder using UI panel or type **cd Ping-Pong** in the Terminal (if using Mac) or a Console (if using Windows) to move to the project folder_
* _Drag index.html to the browser of your choice to preview the page_
* _See **Logic** section for logic details of the output_
* _If you desire to make edits to the page, open index.html in Atom or any alternative software_

#### Technologies Used

* HTML
* CSS
* JavaScript
* jQuery (ver 3.2.1)
* Bootstrap (ver 3.3.7)

#### Resources Used

* https://www.epicodus.com
* https://www.codecademy.com


Copyright (c) 2017 **_Valia Dempsey_**
