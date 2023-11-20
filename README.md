# p5js 공부하면서 작성한 코드 모음
## sound
- sound-basic, sound-amplitude, sound-frequency
### Fast Fourier Transform (FFT) in p5js
  - FFT.analyze()
    - returns an array of 1,024 values between 0 and 255
    - Each value represents the amplitude (loudness) of a small frequency range (pitch of the sound)
  - FFT.waveform()
    - returns an array of 1,024 values between –1 and 1
    - Each value represents the amplitude of the sound for a tiny portion of time
  - FFT.energy(freq1, [freq2])
    - returns the volume of the sound at a frequency range specified by the freq1 and freq2 parameter
    - You can specify freq1 as a number, or p5.js provides strings for common values such as “bass” and “treble”, and leave freq2 empty

## oop-cow
<img width="1152" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/4165b080-9c03-46f5-97b7-99ec7f33d49a">

## fn-chocolateBars
<img width="742" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/b246bfa8-fdf1-4593-a530-82f3bc5e2e4e">

## ref-animations
애니메이션 함수 참고 자료

## draw-robot1
<img width="415" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/4be71651-c1dc-435b-9970-47e1c939831d">

## draw-robot2
<img width="812" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/06e8d888-9d99-47c5-83bb-e4228d6da291">

## draw-mondrian
<img width="651" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/f86e5df9-87fb-4fde-b077-fdc3b84dde8c">

## draw-kandinsky
<img width="506" alt="image" src="https://github.com/urbanscratcher/study-p5js/assets/17016494/50921bc2-32a8-4b0d-a47b-7d057b8bf5d6">
