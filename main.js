//teachablemachine.withgoogle.com/models/aZmLAK_P1/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aZmLAK_P1/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResult);
}