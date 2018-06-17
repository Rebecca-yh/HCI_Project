class Item
{
    constructor(sizeX,sizeY,sizeZ,positionX,positionY,positionZ,rotationX,rotationY,rotationZ){
        var geometry = new THREE.BoxGeometry( sizeX,sizeY,sizeZ);
        this.box = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 1 ,transparent: true,wireframe:true} ) );
        this.box.position.x = positionX;
        this.box.position.y = positionY;
        this.box.position.z = positionZ;
        this.box.rotation.x=rotationX;
        this.box.rotation.y=rotationY;
        this.box.rotation.z=rotationZ;

        scene.add( this.box );
        objects.push( this.box );

    }
    setAudio(filename)
    {
        this.audio = new Audio(filename);
    }
    setLabel(dx,dy,dz,image)
    {

        var spriteMap1 = new THREE.TextureLoader().load( "../images/label.png" );
        var spriteMaterial1 = new THREE.SpriteMaterial( { map: spriteMap1, color: 0xffffff ,opacity: 0.5 ,transparent: true} );

        this.label = new THREE.Sprite( spriteMaterial1 );

        this.label.position.x = this.box.position.x+dx;
        this.label.position.y =  this.box.position.y+dy;
        this.label.position.z = this.box.position.z+dz;
        this.label.scale.set(2,1,1);
        this.label.visible=false;
        scene.add(this.label);

        var spriteMap = new THREE.TextureLoader().load( image );
        var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff ,opacity: 1 ,transparent: true} );

        this.labelText = new THREE.Sprite( spriteMaterial );
        this.labelText.position.x = this.box.position.x+dx;
        this.labelText.position.y =  this.box.position.y+dy;
        this.labelText.position.z = this.box.position.z+dz;
        this.labelText.scale.set(2,1,1);
        this.labelText.visible=false;
        scene.add( this.labelText );
    }
    setLabelVisible(option)
    {
        this.label.visible=option;
        this.labelText.visible=option;

        if(this.audio!==undefined) {
            if (option === true)
                this.audio.play();
            else
                this.audio.pause();
        }
    }

}