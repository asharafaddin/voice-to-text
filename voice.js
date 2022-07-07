// powered by asharafaddin    

////////// declare variables and link them to control html objects //////////
    var speak = document.getElementById('click');
    var textarea = document.getElementById('voice_reslut');
    var ar = document.getElementById('arabic');
    var eng = document.getElementById('english');
    
    ///////////////////////////////////////////////////////////////

   /////////// some useful variables  /////////////////
   var text = "";
    var arabic = false;
    //////////////////////////////////

    ////////// declare speechRecognetion object //////////////////
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const Recognition = new SpeechRecognition();
    ////////////////////////////////////////////////////////////

    //////////// create an even ehrn click to speak /////////////////////
    speak.addEventListener('click',function(){
        speak.style.backgroundColor = "gray";

        Recognition.start();

        Recognition.onresult = function(e) {

        const transcript = e.results[0][0].transcript;
        text = textarea.value + " " + transcript;
            textarea.value = text

         speak.style.backgroundColor = 'rgb(101, 86, 215)';
        }
    
    })
    //////////////////////////////////////////////////////////////


   
    //////// function for change language /////////////
    function changeLanguage(){

        if(arabic){
            ar.style.backgroundColor = "gray";
            eng.style.backgroundColor = 'rgb(101, 86, 215)';
            Recognition.lang = 'ar';
        } 
        else{
            ar.style.backgroundColor = 'rgb(101, 86, 215)';
            eng.style.backgroundColor = 'gray';
            Recognition.lang = 'en';
    }

     
    }
    //////////////////////////////////////////////////

   
     ar.addEventListener('click',function(){
        arabic = true;
        changeLanguage();
       
    })

    eng.addEventListener('click',function(){
        arabic = false;
        changeLanguage();
        
    })
    changeLanguage();
