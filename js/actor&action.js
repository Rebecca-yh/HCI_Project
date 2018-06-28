var mixers = [];
var ActThank,ActHappy,ActBow, ActPoint,ActStand;

var countDown=0;
var free=true;
var currentAct;
var initAct=false;
function actionInit() {
    var manager = new THREE.LoadingManager();

    var loader = new THREE.FBXLoader(manager);
    loader.load("../model/Happy.fbx", function (mesh) {
        counterPerson=mesh;
        mesh.scale.set(0.017,0.017,0.017);
        mesh.position.set(-15,0,-19);
        mesh.rotation.y=Math.PI;
        mesh.mixer = new THREE.AnimationMixer( mesh );
        mixers.push(mesh.mixer);


        ActHappy = mesh.mixer.clipAction(mesh.animations[ 0 ] );

        //action.play();
        scene.add(mesh);
        loader.load("../model/Thankful.fbx", function (mesh) {
            ActThank =counterPerson.mixer.clipAction(mesh.animations[ 0 ] );


        },undefined, function ( e ) {
            console.error( e );

        } );

        loader.load("../model/FormalBow.fbx", function (mesh) {
            ActBow =counterPerson.mixer.clipAction(mesh.animations[ 0 ] );

        },undefined, function ( e ) {
            console.error( e );


        } );

        loader.load("../model/PointingForward.fbx", function (mesh) {
            ActPoint =counterPerson.mixer.clipAction(mesh.animations[ 0 ] );

        },undefined, function ( e ) {
            console.error( e );


        } );
        loader.load("../model/StandingIdle.fbx", function (mesh) {
            ActStand =counterPerson.mixer.clipAction(mesh.animations[ 0 ] );

        },undefined, function ( e ) {
            console.error( e );



        } );

        var geometry = new THREE.BoxGeometry( 1.5,3,1.5);
        counterPerson.box = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 0 ,transparent: true,wireframe:true} ) );
        counterPerson.box.position.x = -15;
        counterPerson.box.position.y = 2;
        counterPerson.box.position.z = -19;


        scene.add( counterPerson.box );
        objects.push( counterPerson.box );
        initAct=true;
    },undefined, function ( e ) {

        console.error( e );

    } );

}

function actionUpdate(current) {

    if (countDown===0)
    {

        ActHappy.play();
        if (currentAct!==undefined&&currentAct!==ActHappy)
            currentAct.stop();
        if(ActHappy!==undefined)

            free = true;
        countDown=300;
        currentAct=ActHappy

    }

    if ( mixers.length > 0 ) {

        for (var i = 0; i < mixers.length; i++) {

            mixers[i].update(current);

        }
    }
    countDown--;
}


function welcome()
{
    DO(ActBow,82)
}

function bye() {
    DO(ActThank,90)
}

function find() {
    DO(ActPoint,141)
}

function stand() {
    console.log("stand");
    if(currentAct==ActStand)return;
    if(free===false) return;
    if (ActStand!==undefined)
        ActStand.play();
    if (currentAct!==undefined)
        currentAct.stop();

    countDown=180;
    free=true;
    currentAct=ActStand;

}

function DO(Act,time) {
    if(free===false) return;
    if (Act!==undefined)
        Act.play();
    if (currentAct!==undefined)
        currentAct.stop();

    countDown=time;
    free=false;
    currentAct=Act;

}