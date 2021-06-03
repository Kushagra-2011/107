Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VdW9prF3w/.json',modelLoaded);