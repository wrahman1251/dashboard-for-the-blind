
(function(){
$('.idiv').mouseenter(function() {
             console.log();
             var utterance = new SpeechSynthesisUtterance($(this).find(".atxt").html());
             window.speechSynthesis.speak(utterance);
        })
})();
