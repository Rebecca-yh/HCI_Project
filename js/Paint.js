class Paint
{
    constructor(sizeX,sizeY,sizeZ,positionX,positionY,positionZ,texture)
    {

        var mapTexture = THREE.ImageUtils.loadTexture(texture);
        var material = new THREE.MeshBasicMaterial({map: mapTexture});

        var geometry = new THREE.BoxGeometry( sizeX,sizeY,sizeZ);
        this.box = new THREE.Mesh( geometry, material);
        this.box.position.x = positionX;
        this.box.position.y = positionY;
        this.box.position.z = positionZ;
        scene.add(this.box);
        objects.push(this.box);
        this.hex = this.box.material.color.getHex();
    }
    setLargeImage(image,size)
    {
        this.image=image;
        this.size=size;
    }

    setLabelVisible(option)
    {
        if(option===true)
            this.box.material.color.setHex( 0xffff00 );
        else
            this.box.material.color.setHex(this.hex)
    }
    show()
    {
        if(this.image===undefined) return;
        console.log("show");
        document.getElementById('popup').innerHTML = '<img src="'+this.image+'" style="position: absolute;top:0;bottom: 0;left: 0;right: 0; margin: auto;'+this.size+'" />';
        $('.overlay').show();
        controls.enabled=false;

    }
}