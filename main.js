function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JSDCx-5sM/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img1 = document.getElementById('cat');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('cow');

        if (results[0] == "Cat Meowing") {
            img1.src = "a.gif";
            img2.src = "download.jpg";
            img3.src = "download(1).jpg";

        } else if (results[0] == "Dog Barking") {
            img1.src = "a.jpg";
            img2.src = "download.gif";
            img3.src = "download(1).jpg";
        } else if (results[0] == "Cow mooing") {
            img1.src = "a.jpg";
            img2.src = "download.jpg";
            img3.src = "download(1).gif";
        } else {
            img1.src = "a.jpg";
            img2.src = "download.jpg";
            img3.src = "download(1).jpg";
        }
    }
}