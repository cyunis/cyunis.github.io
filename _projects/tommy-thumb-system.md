---
layout: project
title: Tommy Thumb
date: 2019-12-22
categories: [assistive, wearable]
featured: true
image: /assets/images/Setup.png
excerpt: An experiment designed for children with cerebral palsy to play a guessing game with a robot while wearing an orthosis.
gallery:
  - url: /assets/images/Setup.png
    alt: Drawing of the experimental setup showing a participant wearing an orthosis and a socially assistive robot they play with.
    caption: The experimental setup with a participant wearing an orthosis and a socially assistive robot they play with.
  - url: /assets/images/orthosis_no_background.png
    alt: Arm making a thumbs up with the help of a wrist orthosis with pneumatic muscles.
    caption: Wrist orthosis for reducing impedance during wrist rotation for gestures like a thumbs up.
---

## Project Overview

This was an experiment designed in collaboration with two labs, Sanger lab and Interaction lab, for children with cerebral palsy to play a guessing game with a socially assistive robot. We tested whether a wrist orthosis would improve communication intent in the form of making a thumbs up or thumbs down while interacting with the socially assistive robot. We also tested if embodiment improved the engagement and motivation of participants during the game.

## Technical Specifications

- **Socially Assistive Robot**: QTRobot from LuxAI
  - Dynamic facial display
  - Arms and head movement
  - Voice and sound generation
- **Orthosis**: Wrist worn pneumatic actuated muscle orthosis
  - 2 pneumatic Gibbons muscles
  - Accelerometer and IMU
  - Adjustable size wrist and forearm sheath 
- **Other Systems**: Depth camera, computer
  - Computer vision
  - Code for game, connected to monitor when QTRobot not in use
- **System Connectivity**: Bluetooth and ROS

## Development Process

The development process included:

1. **Experimental Design**: Designed the experimental settings that would be tested with the robots and participants.
2. **Game Design**: Designed a guessing game that used thumbs up and down gestures.
3. **Computer Vision**: Implemented computer vision with separate camera to recognize thumbs up and down gestures and provide input to socially assistive robot behavior.
4. **Systems Design**: Created a network using Python and ROS and tested systems with pilot participants.
5. **Human-Robot Interaction**: Created a script and varied web of physical response movements for socially assistive robot based on perceived participant effort.
6. **Testing and Refinement**: Extensive user testing with the target demographic.

## Challenges and Solutions

This was a pretty complex system so having students work in parallel was crucial. We coordinated as a team of 2 undergraduates, 2 PhD students, 1 post doc and 2 professors, in addition to the staff coordinating participants, to create this system. As a PhD student I contributed to the game design, experimental design and to weaving together all the systems and testing them. I also collected and analyzed data. 

## Results

We learned that embodiment resulted in improvements in engagement for participants playing this game. This work is published:

- Dennler, N., Yunis, C., Realmuto, J., Sanger, T., Nikolaidis, S., & Matarić, M. (2021, August). Personalizing user engagement dynamics in a non-verbal communication game for cerebral palsy. In2021 30th IEEE International Conference on Robot & Human Interactive Communication (RO-MAN)(pp. 873-879). IEEE.
