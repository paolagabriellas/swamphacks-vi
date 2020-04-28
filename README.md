# Pixy2Text
Real-time display of the description of image recognized/categorized by Pixy2 camera.

* Built for SwampHacks VI with: Arduino, Node, Express, I2C, Pixy2 and Socket.io.

### What it does
Uses Pixy2's Camera and Color Connected Component algorithm to calibrate certain objects. After so, the object can be recognized by the camera and shares its signature label to a local server that then displays the name of the object on the screen as well as the text-to-speech audio.

### How we built it
First, the Pixy2 was set up to recognize three color-distinctive objects via PixyMon. After the Pixy was connected to Arduino Uno, we wrote the code to use I2C to send Pixy2's data to the Arduino. Once that was set, Node was used to read the serial data from the port and an Express server was created to display in Real Time the label of the object recognized by the Pixy2 with socket.io to the website.

## Devpost: 
https://devpost.com/software/pixy2text
