/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react'
import {useGLTF, useTexture, useVideoTexture} from '@react-three/drei'
import {sRGBEncoding} from "@react-three/drei/helpers/deprecated.js";

const Room = ({ onComputerClick, ...props}) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/offce14.gltf')
    const legoTexture = useTexture('textures/lego.jpg')
    legoTexture.wrapS = THREE.RepeatWrapping;
    legoTexture.wrapT = THREE.RepeatWrapping;
    legoTexture.offset.set(9, .3)


    const legoMaterial = new THREE.MeshStandardMaterial({
        map: legoTexture,
       // side: THREE.DoubleSide
    })
    const monitorTexture = useTexture('textures/os.png')
    monitorTexture.encoding = THREE.sRGBEncoding;
    /*const tvTexture = useVideoTexture('textures/screen.mp4', {
        loop: true,   // Set loop
        muted: true,  // Mute by default
        start: true,
        playsInline: true,// Auto-start the video when loaded
        crossOrigin: "anonymous"


    }); */

    const tvTexture = useVideoTexture('textures/screen.mp4')
    tvTexture.wrapS = THREE.RepeatWrapping;
    tvTexture.wrapT = THREE.RepeatWrapping;
    tvTexture.repeat.set(4, 4)
    tvTexture.offset.set(0.5, 0.5)
    // Rotate the texture by 180 degrees (π radians)
    tvTexture.rotation = Math.PI * .5  ; // This is 180 degrees in radians

// Set the pivot point to the center of the texture
    tvTexture.center.set(0.5, 0.5);

   //tvTexture.flipX = false

    const tvMaterial = new THREE.MeshStandardMaterial({
        map: tvTexture,
       // side: THREE.DoubleSide
    })



    const weddingTexture = useTexture('textures/IMG_1806.jpg')
    weddingTexture.encoding = THREE.sRGBEncoding;
    weddingTexture.repeat.set(0.75, 0.75);  // Scale down to 50% in both directions
    weddingTexture.offset.set(0.25, 0.25); // Center the texture

// Make sure the texture wraps in both directions
    weddingTexture.wrapS = THREE.RepeatWrapping;
    weddingTexture.wrapT = THREE.RepeatWrapping;
    const roomTexture = useTexture('textures/finalbake.jpg')
    roomTexture.encoding = THREE.sRGBEncoding;
    const roughnessMap = useTexture('textures/Bakingrough.jpg');
    roughnessMap.encoding = THREE.LinearEncoding;
    roughnessMap.flipY = true; // Adjust if needed
    roughnessMap.minFilter = THREE.LinearMipMapLinearFilter;
    roughnessMap.magFilter = THREE.LinearFilter;
    roughnessMap.generateMipmaps = true;

    const normalMap = useTexture('textures/Bakingsnormal.jpg');
    normalMap.encoding = THREE.LinearEncoding; // Normal map uses linear encoding
    normalMap.flipY = false
    //const floorMaterial = new THREE.MeshBasicMaterial({ color: 'blue'});
    //const videoRef = useRef(null)
    monitorTexture.flipY = false;

    tvTexture.encoding = sRGBEncoding
    roomTexture.flipY = false;
    const plantMaterial = new THREE.MeshStandardMaterial({color: 'green'})

const weddingMaterial = new THREE.MeshBasicMaterial({
    map: weddingTexture,
    side: THREE.DoubleSide
})

 const textureMaterial = new THREE.MeshStandardMaterial({
     map: roomTexture,
     roughnessMap: roughnessMap,
     normalMap: normalMap,
     normalScale: new THREE.Vector2(1, 1),



     side: THREE.DoubleSide,


 })


    console.log(nodes.Floor.geometry.attributes.uv);
    console.log(nodes.Floor.geometry.attributes.uv2); // If applicable, for checking multiple UV sets

   // console.log(nodes.Floor.scale)
   // const videoAspectRatio = 16 / 9; // Example for 1920x1080 video
   useEffect(() => {
// Access the UV array
        // Assume this is the geometry you're working with


        const screenGeometry = nodes.TVScreen.geometry;

        if (screenGeometry) {
            const uvs = screenGeometry.attributes.uv.array;
            for (let i = 0; i < uvs.length; i += 2) {
                uvs[i] *= 2;   // Scale the U coordinate by 2
                uvs[i + 1] *= 2; // Scale the V coordinate by 2
            }
            // Modify UVs to fit the entire screen (assumes rectangular UV layout)
            // Adjust the scaling of the UV coordinates to cover the screen properly.

            screenGeometry.attributes.uv.needsUpdate = true;  // Mark UVs as updated
        }

        // Apply video texture
        if (nodes.TVScreen) {

            nodes.TVScreen.material = tvMaterial;
            nodes.TVScreen.material.needsUpdate = true;  // Force material update
        }
    }, [nodes, tvTexture, tvTexture]);




    return (
        <group  ref={group}{...props} dispose={null}>
            <mesh
                name="Floor"
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={textureMaterial}
                position={[3.745, 1.788, 0]} />
            <mesh
                name="Wall1"
                castShadow
                receiveShadow
                geometry={nodes.Wall1.geometry}
                material={textureMaterial}
                position={[0, 1.788, 0]}
            />
            <mesh
                name="Wall2"
                castShadow
                receiveShadow
                geometry={nodes.Wall2.geometry}
                material={textureMaterial}
                position={[3.389, 1.788, 0]}
            />
            <group
                name="Black_Leather_Couch_"
                position={[-0.511, 4.028, -3.744]}
                rotation={[0, 1.531, 0]}>
                <group name="Object_9" position={[0.066, 0, 1.659]} rotation={[0, 0.054, 0]}>
                    <mesh
                        name="Object_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_5.geometry}
                        material={textureMaterial}
                    />
                    <mesh
                        name="Object_5_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_5_1.geometry}
                        material={textureMaterial}
                    />
                </group>
            </group>
            <mesh
                name="White_shelf"
                castShadow
                receiveShadow
                geometry={nodes.White_shelf.geometry}
                material={textureMaterial}
                position={[0, 1.788, 0]}
            />
            <mesh
                name="Gold_Frame"
                castShadow
                receiveShadow
                geometry={nodes.Gold_Frame.geometry}
                material={weddingMaterial}
                position={[0, 1.65, 0]} />

            <group name="TV" position={[2.55, 1.092, -0.022]}>
                <mesh
                    name="TV_49Zoll_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.TV_49Zoll_Black_0.geometry}
                    material={textureMaterial}
                    position={[0, 0, 0.374]}
                />
                <mesh
                    name="TV_49Zoll_RedLight_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.TV_49Zoll_RedLight_0.geometry}
                    material={textureMaterial}
                    position={[0, 0, 0.374]}
                />
                <mesh
                    name="TVScreen"
                    castShadow
                    receiveShadow
                    geometry={nodes.TVScreen.geometry}

                    material={tvMaterial}

                    position={[0, 0, 0.374]} />



            </group>
            <group
                name="Playstation_5_Digital_Edition"
                position={[16.586, 12.919, -15.1]}
                rotation={[1.571, -1.557, -1.561]}>
                <mesh
                    name="PS5_PS5_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS5_PS5_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="PS5_PSLOGO_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS5_PSLOGO_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Cube001_PS_Fan_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_PS_Fan_0.geometry}
                    material={textureMaterial}
                    position={[0.002, 0.214, 2.521]}
                    rotation={[-3.11, 0, 0.02]}
                />
                <mesh
                    name="PS_Back_PS_Body_"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS_Back_PS_Body_.geometry}
                    material={textureMaterial}
                    position={[0.002, 0.214, 2.521]}
                    rotation={[-3.11, 0, 0.02]}
                />
                <mesh
                    name="PS_Bottom_PS_Body_"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS_Bottom_PS_Body_.geometry}
                    material={textureMaterial}
                    position={[0.002, 0.214, 2.521]}
                    rotation={[-3.11, 0, 0.02]}
                />
                <mesh
                    name="PS5BODY_PS_Body_"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS5BODY_PS_Body_.geometry}
                    material={textureMaterial}
                    position={[0.002, 0.214, 2.521]}
                    rotation={[-3.11, 0, 0.02]}
                />
                <mesh
                    name="PS5BODY_PS_Light_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.PS5BODY_PS_Light_0.geometry}
                    material={textureMaterial}
                    position={[0.002, 0.214, 2.521]}
                    rotation={[-3.11, 0, 0.02]}
                />
            </group>
            <group
                name="Playstation_5_Dualsense"
                position={[15.011, 10.866, -14.932]}
                rotation={[0, -0.041, 0]}>
                <mesh
                    name="defaultMaterial"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="defaultMaterial001"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial001.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="defaultMaterial002"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial002.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="defaultMaterial003"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial003.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="defaultMaterial004"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial004.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="defaultMaterial005"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial005.geometry}
                    material={textureMaterial}
                />
            </group>
            <group name="Nano_Leaf" position={[0, 1.788, 0]}>
                <mesh
                    name="Nano_leaf_light_blue_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_blue_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Nano_leaf_light_grey_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_grey_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Nano_leaf_light_red_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_red_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Nano_leaf_light_violet_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_violet_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Nano_leaf_light_white_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_white_0.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Nano_leaf_light_yellow_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nano_leaf_light_yellow_0.geometry}
                    material={textureMaterial}
                />
            </group>
            <group name="wood_frame" position={[0, 1.634, 0]}>
                <mesh
                    name="Cube002_Alum001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_Alum001_0.geometry}
                    material={textureMaterial}
                    position={[0, -0.055, 0]}
                />
                <mesh
                    name="Cube002_Image001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_Image001_0.geometry}
                    material={legoMaterial}
                    position={[0, -0.055, 0]}
                />
                <mesh
                    name="Cube002_Wood001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_Wood001_0.geometry}
                    material={textureMaterial}
                    position={[0, -0.055, 0]}
                />
            </group>
            <group name="Plant" position={[-12.398, 10.417, 14.256]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    name="Object_10001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10001.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_11001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11001.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_2002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2002.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_3003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3003.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_4005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4005.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_5004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5004.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_6003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6003.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_7001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7001.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_8001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8001.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
                <mesh
                    name="Object_9002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9002.geometry}
                    material={textureMaterial}
                    position={[0, -0.222, 0]}
                />
            </group>
            <group name="wood_frame_2" position={[0, 1.788, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <group name="ef2ee544f1e44d7890cf6f0f74da2c34fbx001" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Cube003" position={[-0.064, -0.036, 0.728]} rotation={[-1.847, 0, 0]}>
                        <mesh
                            name="Cube002_Alum001_0001"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002_Alum001_0001.geometry}
                            material={textureMaterial}
                        />
                        <mesh
                            name="Cube002_Image001_0001"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002_Image001_0001.geometry}
                            material={weddingMaterial}
                        />
                        <mesh
                            name="Cube002_Wood001_0001"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002_Wood001_0001.geometry}
                            material={textureMaterial}
                        />
                    </group>
                </group>
            </group>
            <mesh
                name="Indoor_potted_plant"
                castShadow
                receiveShadow
                geometry={nodes.Indoor_potted_plant.geometry}
                material={textureMaterial}
                position={[0, 1.788, 0]}>
                <mesh
                    name="twig_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig_1.geometry}
                    material={plantMaterial}
                />
                <mesh
                    name="twig_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig_2.geometry}
                    material={plantMaterial}
                />
                <mesh
                    name="twig001_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig001_1.geometry}
                    material={plantMaterial}
                />
                <mesh
                    name="twig001_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig001_2.geometry}
                    material={plantMaterial}
                />
                <mesh
                    name="twig002_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig002_1.geometry}
                    material={plantMaterial}
                />
                <mesh
                    name="twig002_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.twig002_2.geometry}
                    material={plantMaterial}
                />
            </mesh>
            <mesh
                name="pot001"
                castShadow
                receiveShadow
                geometry={nodes.pot001.geometry}
                material={textureMaterial}
                position={[-9.487, 1.4, -10.434]}
            />
            <mesh
                name="plant001"
                castShadow
                receiveShadow
                geometry={nodes.plant001.geometry}
                material={textureMaterial}
                position={[-9.487, 1.4, -10.434]}
            />
            <mesh
                name="ground001"
                castShadow
                receiveShadow
                geometry={nodes.ground001.geometry}
                material={textureMaterial}
                position={[-9.487, 1.4, -10.434]}
            />
            <group
                name="(CS)_Ascend_-_Sit-stand,_Workstation,_Black"
                position={[-9.773, 1.944, 8.018]}
                rotation={[-Math.PI / 2, 0, 1.568]}>
                <mesh
                    name="Object_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.room24}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_5001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5001.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
                <mesh
                    name="Object_9001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9001.geometry}
                    material={textureMaterial}
                    position={[0, 0, -0.16]}
                />
            </group>
            <group
                name="Gaming_PC_with_Curved_Monitor"
                position={[0, 8.468, 0]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    name="Object_5002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5002.geometry}
                    material={textureMaterial}
                    position={[0, 0, 0.013]}
                />
                <mesh
                    name="Screen"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen.geometry}
                    material={textureMaterial}
                    position={[0, 0, 0.013]}
                    onClick={(e) => onComputerClick(e)}>
                    <meshStandardMaterial map={monitorTexture} />
                </mesh>
            </group>
            <group name="Keyboard" position={[0, 4.716, 0]}>
                <mesh
                    name="Case_Case_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Case_Case_0.geometry}
                    material={textureMaterial}
                    position={[0, -2.929, 0]}
                />
                <mesh
                    name="Keycaps_Keycaps_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Keycaps_Keycaps_0.geometry}
                    material={textureMaterial}
                    position={[0, -2.929, 0]}
                />
            </group>
            <group
                name="Logitech_MX_master_2S_(@danish_blends)"
                position={[0, 7.935, 0]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    name="Object_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Object_3001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3001.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Object_4003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4003.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Object_6002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6002.geometry}
                    material={textureMaterial}
                />
            </group>
            <group name="Speaker" position={[-11.928, 7.1, 6.67]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    name="Object_2001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2001.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name="Object_3002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3002.geometry}
                    material={textureMaterial}
                />
            </group>
            <group name="Simple_Gaming_Chair" position={[1.013, 2.056, 5.956]}>
                <group name="Chair_Base" position={[0, 0.09, 0]}>
                    <mesh
                        name="Chair_Base_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair_Base_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <group name="Chair_Pedestal" position={[-1.013, -0.269, -5.956]}>
                        <mesh
                            name="Chair_Pedestal_Aluminium_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Chair_Pedestal_Aluminium_0.geometry}
                            material={textureMaterial}
                        />
                        <mesh
                            name="Chair_Height_Adjustable_Plastic_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Chair_Height_Adjustable_Plastic_0.geometry}
                            material={textureMaterial}
                        />
                    </group>
                    <mesh
                        name="Chair_suspension_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair_suspension_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <mesh
                        name="Wheel_1_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wheel_1_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <mesh
                        name="Wheel_2_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wheel_2_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <mesh
                        name="Wheel_3_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wheel_3_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <mesh
                        name="Wheel_4_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wheel_4_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                    <mesh
                        name="Wheel_5_Aluminium_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wheel_5_Aluminium_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                </group>
                <mesh
                    name="Chair_Seat_Cloth_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_Seat_Cloth_0.geometry}
                    material={textureMaterial}
                    position={[0, 0.09, 0]}
                />
                <group name="Chair_Seat_Hinge1" position={[0, 0.09, 0]}>
                    <mesh
                        name="Chair_Seat_Hinge1_Plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair_Seat_Hinge1_Plastic_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                </group>
                <group name="Left_Hand_Rest" position={[0, 0.09, 0]}>
                    <mesh
                        name="Left_Hand_Rest_Plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Left_Hand_Rest_Plastic_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                </group>
                <group name="Right_Hand_Rest" position={[0, 0.09, 0]}>
                    <mesh
                        name="Right_Hand_Rest_Plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Right_Hand_Rest_Plastic_0.geometry}
                        material={textureMaterial}
                        position={[-1.013, -0.269, -5.956]}
                    />
                </group>
                <mesh
                    name="Chair_BackRest_Cloth_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_BackRest_Cloth_0.geometry}
                    material={textureMaterial}
                    position={[0, 0.09, 0]}
                />
                <mesh
                    name="Chair_Back_Hinge_Plastic_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_Back_Hinge_Plastic_0.geometry}
                    material={textureMaterial}
                    position={[0, 0.09, 0]}
                />
            </group>
            <group
                name="Cup_of_coffee"
                position={[-11.261, 4.724, -5.06]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <group name="cup_1" position={[-0.96, 2.543, -0.309]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        name="Maillage001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Maillage001.geometry}
                        material={textureMaterial}
                    />
                    <mesh
                        name="Maillage001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Maillage001_1.geometry}
                        material={textureMaterial}
                    />
                </group>
                <mesh
                    name="plate"
                    castShadow
                    receiveShadow
                    geometry={nodes.plate.geometry}
                    material={textureMaterial}
                    position={[-1.099, 2.905, -0.309]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/offce14.gltf')

export default Room
