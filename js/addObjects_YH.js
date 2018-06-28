//在此处申明为全局变量
var electricalPiano;
var bass1,bass2,bass3;
var paint1;

function addObjects_YH()
{
    // add
    //                           ⬇前三个是触发器大小，中间三个是位置，后三个是旋转（旋转请配合PI食用）
    electricalPiano=new Item(3,1,1,-6.7,1,-27.5,0,0,0);
    //                       ⬇前三个是与盒子的相对位置，最后是label的文字图片，要只有文字背景透明的png格式图片！请参考HCI_Project/images文件夹内的图片
    electricalPiano.setLabel(0,1.2,0,"../images/pianoLabel.png");
    //                        ⬇触发音效，请找一个好听的！如果出现label没有声音请看报错提示，可能是浏览器设置问题
    electricalPiano.setAudio("../music/piano.mp3");


    bass1=new Item(1, 2.4, 0.5,-10,2.35,-27.8,0,0,-0.25*Math.PI);
    bass1.setLabel(0,0,0.5,"../images/bassLabel.png");
    bass1.setAudio("../music/bass1.wav");

    bass2=new Item(1, 2.4, 0.5,-11.5,2.35,-27.8,0,0,-0.25*Math.PI);
    bass2.setLabel(0,0,0.5,"../images/bassLabel.png");
    bass2.setAudio("../music/bass2.wav");

    bass3=new Item(1, 2.4, 0.5,-13,2.35,-27.8,0,0,-0.25*Math.PI);
    bass3.setLabel(0,0,0.5,"../images/bassLabel.png");
    bass3.setAudio("../music/bass3.wav");

    counterPersonBox=new Item(1.5,3,1.5,-15,2,-19,0,0,0);
    counterPersonBox.setLabel(0,0,0.5,"../images/bassLabel.png");
    counterPersonBox.setAudio("../music/bass2.wav");
    console.log(counterPersonBox.box.position.x);

    //画没有rotation
    paint1=new Paint(1,1,0.2,-7.68,3.25,-28.02,"../images/paint1.png");
    //                                                  ⬇size 用css写，取决于图的大小比例
    paint1.setLargeImage("../images/paint1_large.png","width:210px; height:300px;");


    //counterPersonBox=new Item()




}

function  MouseTarget_YH(object) {

    //console.log(object ===  counterPerson.box );
    //                       ⬇box是触发器，下面的语句确定是哪个触发器
    if ( object === electricalPiano.box ) {
        // currentItem是个全局引用
        currentItem=electricalPiano;
    }

    else if ( object === bass1.box)
    {
        currentItem=bass1;
    }
    else if ( object === bass2.box )
    {
        currentItem=bass2;
    }
    else if ( object === bass3.box )
    {
        console.log( bass3.box);
        currentItem=bass3;
    }
    else if ( object === paint1.box )
    {
        currentItem=paint1;
    }

    else if (object.position.x ===  counterPerson.box.position.x&&object.position.y ===  counterPerson.box.position.y )
    {

        currentItem=counterPerson;
        if(counterPerson!==undefined)
            stand();
    }

}

function intersectObjects_YH(object) {
    if ( object === electricalPiano.box ) {
        //从新页面打开
        window.open( 'https://detail.tmall.com/item.htm?spm=a230r.1.14.107.c7c74884zKZ5k2&id=43855471200&ns=1&abbucket=8' );
    }

    else if(object === bass1.box||object === bass2.box||object === bass3.box)
    {
        window.open( 'https://detail.tmall.com/item.htm?spm=a230r.1.14.76.b1a92653WRj9f7&id=564261153323&ns=1&abbucket=8');
    }
    else if (object.position.x ===  counterPerson.box.position.x&&object.position.z ===  counterPerson.box.position.z )
    {
        console.log("?");
        if(counterPerson!==undefined)
            welcome();
        waiting()
    }


    if ( object === paint1.box ) {
       paint1.show();
    }
}