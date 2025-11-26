---
layout: project
title: Face the Music
date: 2019-11-05
categories: [wearables, rehabilitation]
featured: true
image: /assets/images/face_the_music.png
excerpt: The team I was part of that won the CNSE hackathon with our project Face the Music.
gallery:
  - url: /assets/images/face_the_music.png
    alt: Three people hold 3D printed brain trophies and smile after winning a hackathon. 
    caption: From left to right: myself, Dr. Jaycee Holmes and Dr. Tim Brown after winning the CNSE hackathon with our project Face the Music.
---

## Project Overview

This was an open source EMG device that could be used to play music or draw using exercises from facial paralysis therapy. The project was conceived and executed with Dr. Jaycee Holmes and Dr. Tim Brown. Here is a video example of how gestures could be used to play sounds:

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/ZkLZll3FmgA?si=7EaWTueF3YEYCOFj" frameborder="0" allowfullscreen></iframe>
</div>

## Technical Specifications

- **Number of EMG sensors**: 5
- **Language used**: Processing
- **Number of applications**: 4

## Development Process

The development of Face the Music was done in a team of three, with myself and Dr. Nathan Dennler. The components of this project I worked on included:

1. **System design**: This was chosen as a group but we decided to work on facial rehab and use EMG sensors with some sort of artistic program as output
2. **Sensor signal decomposition**: I wrote a custom Processing script that read in data from 5 sensors into one channel, and used algorithms to convert it into feedback scaled to the intensity of the EMG signal
3. **Clinical relevance**: I wrote the algorithms to recognize different facial expressions and play different sounds for each one.

## Challenges and Solutions

The challenge of this was building it in a weekend with a tea who had just met. We were able to work well together and subdivide the work efficiently in order to make a working prototype in 48 hours that was clinically relevant and fun!

## Results

We won first place in the Center for Sensorimotor Neural Engineering Hackathon.

