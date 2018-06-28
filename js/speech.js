var artyom;

function initArtyom() {
    artyom=new Artyom();
    artyom.initialize({
        lang:"en-GB",
        continuous:false,
        debug:true, // Show what recognizes in the Console
        listen:false, // Start listening after this
        speed:0.9, // Talk a little bit slow
        mode:"normal" // This parameter is not required as it will be normal by default
    });
    artyom.say("welcome to music store!");

    artyom.addCommands([
        {
            indexes: ["你好","hello"],
            action: function(i){
                artyom.say("may i help you?");
            }
        },
        {
            indexes: ["再见","bye bye","goodbye"],
            action: function(i){
                artyom.say("thanks for your coming");
                bye()//action
            }
        }
    ]);

    Speech_YH();
    Speech_YY();
    Speech_LXY();
}




function waiting() {


    artyom.initialize({
        lang:"en-GB",
        continuous:false,
        debug:true, // Show what recognizes in the Console
        listen:true, // Start listening after this
        speed:0.9, // Talk a little bit slow
        mode:"normal" // This parameter is not required as it will be normal by default
    });





}
