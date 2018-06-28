function Speech_YH() {
    artyom.addCommands([
        {
            indexes: ["我想买钢琴", "piano", "钢琴", "我想买电钢琴", "electric piano", "电钢琴"],
            action: function (i) {
                artyom.say("it's right there! ");
                artyom.say("our electric piano is in good tune! ");
                find();//Action

                electricalPiano.find();

            }
        },
        {
            indexes: ["bass","贝斯","base"],
            action: function(i){
                artyom.say("it's right there!");
                find();
                bass1.find();
            }
        }]);
}