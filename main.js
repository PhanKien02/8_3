import * as THREE from 'three';
import { gsap } from 'gsap';
import { Text } from 'troika-three-text';

// -----------------------------------------------------------
// 1. SCENE SETUP
// -----------------------------------------------------------
const canvas = document.querySelector('#three-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#FFF5F7');

// Fog for depth
scene.fog = new THREE.FogExp2('#FFF5F7', 0.05);

const size = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(0, 2, 8);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// -----------------------------------------------------------
// 2. LIGHTING
// -----------------------------------------------------------
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8); // Brighter
directionalLight.position.set(5, 12, 8);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(2048, 2048);
scene.add(directionalLight);

// Studio light for punch
const pointLight1 = new THREE.PointLight(0xFFB6C1, 3.5); // Boosted
pointLight1.position.set(-5, 5, 2);
scene.add(pointLight1);

// Rim light for luxury depth
const pointLight2 = new THREE.PointLight(0xFFFFFF, 2.5, 20); // Boosted
pointLight2.position.set(5, -2, 5);
scene.add(pointLight2);

// -----------------------------------------------------------
// 3. 3D TEXT SETUP
// -----------------------------------------------------------
const text8 = new Text();
const text3 = new Text();
scene.add(text8, text3);

text8.text = '8';
text3.text = '3';

[text8, text3].forEach(t => {
    t.color = 0xD63031; // Deep vibrant red
    t.anchorX = 'center';
    t.anchorY = 'middle';
    t.outlineWidth = 0.05;
    t.outlineColor = 0xffffff;
    t.sync();
});

text8.fontSize = 5.5;
text3.fontSize = 5.5;

text8.position.set(0, 0, 0);
text3.position.set(0, 0, 0);

text8.scale.set(0.1, 0.1, 0.1);
text3.scale.set(0.1, 0.1, 0.1);

text8.visible = false;
text3.visible = false;

// -----------------------------------------------------------
// ENVELOPE (Pulled by balloons)
// -----------------------------------------------------------
const envelopeGroup = new THREE.Group();
envelopeGroup.visible = false;
scene.add(envelopeGroup);

// --- FLOWER TEXTURE FOR ENVELOPE ---
const floralCanvas = document.createElement('canvas');
floralCanvas.width = 512; floralCanvas.height = 512;
const fCtx = floralCanvas.getContext('2d');
fCtx.fillStyle = '#FFFFFF';
fCtx.fillRect(0, 0, 512, 512);

// Draw random flowers and leaves
for (let i = 0; i < 70; i++) {
    const isFlower = Math.random() > 0.4;
    let cx = Math.random() * 512;
    let cy = Math.random() * 512;

    if (isFlower) {
        fCtx.fillStyle = ['#FFB7B2', '#FF9AA2', '#FFDAC1'][Math.floor(Math.random() * 3)];
        fCtx.beginPath();
        for (let p = 0; p < 5; p++) {
            fCtx.ellipse(cx + Math.cos(p * Math.PI * 2 / 5) * 15, cy + Math.sin(p * Math.PI * 2 / 5) * 15, 12, 12, 0, 0, 2 * Math.PI);
        }
        fCtx.fill();
        fCtx.fillStyle = '#E2F0CB';
        fCtx.beginPath();
        fCtx.arc(cx, cy, 6, 0, 2 * Math.PI);
        fCtx.fill();
    } else {
        fCtx.fillStyle = '#A8D5BA'; // leaf color
        fCtx.beginPath();
        fCtx.ellipse(cx, cy, 18 + Math.random() * 12, 8 + Math.random() * 4, Math.random() * Math.PI, 0, 2 * Math.PI);
        fCtx.fill();
    }
}
const floralTexture = new THREE.CanvasTexture(floralCanvas);
floralTexture.wrapS = floralTexture.wrapT = THREE.RepeatWrapping;
floralTexture.repeat.set(1.5, 1.5);

const envelopeWidth = 5.5;
const envelopeHeight = 3.5;
const envMatBack = new THREE.MeshPhysicalMaterial({
    map: floralTexture,
    color: 0xFFFFFF, // Base white
    roughness: 0.6,
    metalness: 0.1,
    clearcoat: 0.2, // Subtle premium sheen
    side: THREE.DoubleSide
});

const envBackGeo = new THREE.PlaneGeometry(envelopeWidth, envelopeHeight);
const envBack = new THREE.Mesh(envBackGeo, envMatBack);
envBack.position.z = -0.05;
envBack.receiveShadow = true;
envelopeGroup.add(envBack);

const frontShape = new THREE.Shape();
frontShape.moveTo(-envelopeWidth / 2, -envelopeHeight / 2);
frontShape.lineTo(envelopeWidth / 2, -envelopeHeight / 2);
frontShape.lineTo(envelopeWidth / 2, envelopeHeight / 2);
frontShape.lineTo(0, 0); // V-cut
frontShape.lineTo(-envelopeWidth / 2, envelopeHeight / 2);
frontShape.lineTo(-envelopeWidth / 2, -envelopeHeight / 2);
const frontGeo = new THREE.ShapeGeometry(frontShape);
const envFront = new THREE.Mesh(frontGeo, envMatBack);
envFront.position.z = 0.05;
envFront.receiveShadow = true;
envelopeGroup.add(envFront);

const topFlapShape = new THREE.Shape();
topFlapShape.moveTo(-envelopeWidth / 2, 0);
topFlapShape.lineTo(envelopeWidth / 2, 0);
topFlapShape.lineTo(0, -envelopeHeight / 2);
topFlapShape.lineTo(-envelopeWidth / 2, 0);
const topFlapGeo = new THREE.ShapeGeometry(topFlapShape);
const envTopFlap = new THREE.Mesh(topFlapGeo, envMatBack);
envTopFlap.position.set(0, envelopeHeight / 2, 0.06);
envelopeGroup.add(envTopFlap);

const sealShape = new THREE.Shape();
sealShape.moveTo(0, 0.3);
sealShape.bezierCurveTo(0, 0.4, -0.2, 0.65, -0.5, 0.65);
sealShape.bezierCurveTo(-0.9, 0.65, -0.9, 0.1, -0.9, 0.1);
sealShape.bezierCurveTo(-0.9, -0.3, -0.5, -0.7, 0, -1.0);
sealShape.bezierCurveTo(0.5, -0.7, 0.9, -0.3, 0.9, 0.1);
sealShape.bezierCurveTo(0.9, 0.1, 0.9, 0.65, 0.5, 0.65);
sealShape.bezierCurveTo(0.2, 0.65, 0, 0.4, 0, 0.3);

const sealGeo = new THREE.ExtrudeGeometry(sealShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 });
const sealMat = new THREE.MeshStandardMaterial({
    color: 0xD63031, // Red wax heart (hoặc bạn có thể dùng màu tuỳ thích)
    roughness: 0.3,
    metalness: 0.2
});
const waxSeal = new THREE.Mesh(sealGeo, sealMat);
waxSeal.scale.set(0.3, 0.3, 0.3);
waxSeal.position.set(0, -envelopeHeight / 2 + 0.3, 0.02);
envTopFlap.add(waxSeal);

const paperGeo = new THREE.PlaneGeometry(envelopeWidth - 0.4, envelopeHeight - 0.4);
const paperMat = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, roughness: 1.0, side: THREE.DoubleSide });
const letterPaper = new THREE.Mesh(paperGeo, paperMat);
letterPaper.position.set(0, 0, 0);
envelopeGroup.add(letterPaper);

// -----------------------------------------------------------
// 4. BEAUTIFUL GIFT BOX
// -----------------------------------------------------------
const giftBoxGroup = new THREE.Group();
giftBoxGroup.scale.set(1.5, 1.5, 1.5);
scene.add(giftBoxGroup);

// --- 4.1. PROCEDURAL TEXTURE ---
const canvasTex = document.createElement('canvas');
canvasTex.width = 512; canvasTex.height = 512;
const ctx = canvasTex.getContext('2d');
ctx.fillStyle = '#FF91A4';
ctx.fillRect(0, 0, 512, 512);
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 512, Math.random() * 512, 5 + Math.random() * 10, 0, Math.PI * 2);
    ctx.fill();
}
const boxTexture = new THREE.CanvasTexture(canvasTex);
boxTexture.wrapS = boxTexture.wrapT = THREE.RepeatWrapping;
boxTexture.repeat.set(2, 2);

// --- 4.2. MATERIALS ---
const boxMaterial = new THREE.MeshPhysicalMaterial({
    map: boxTexture, color: 0xFF91A4, roughness: 0.1, metalness: 0.1,
    clearcoat: 1.0, clearcoatRoughness: 0.02,
    sheen: 1, sheenRoughness: 0.5, sheenColor: 0xffffff
});
const ribbonMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xD63031, roughness: 0.1, metalness: 0.2, // Silk Red
    clearcoat: 1.0, clearcoatRoughness: 0.05,
    sheen: 1, sheenRoughness: 0.5, sheenColor: 0xffffff
});

const base = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), boxMaterial);
base.castShadow = true; base.receiveShadow = true;
giftBoxGroup.add(base);

const vRibbon1 = new THREE.Mesh(new THREE.BoxGeometry(4.05, 4.05, 0.5), ribbonMaterial);
const vRibbon2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 4.05, 4.05), ribbonMaterial);
giftBoxGroup.add(vRibbon1, vRibbon2);

const lid = new THREE.Group();
lid.position.y = 2.1;
const lidOriginalPos = { y: 2.1 }; // Added missing reference
giftBoxGroup.add(lid);

const lidMain = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.8, 4.4), boxMaterial);
lidMain.castShadow = true;
lid.add(lidMain);

const lRibbon1 = new THREE.Mesh(new THREE.BoxGeometry(4.42, 0.82, 0.52), ribbonMaterial);
const lRibbon2 = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.82, 4.42), ribbonMaterial);
lid.add(lRibbon1, lRibbon2);

const bowGroup = new THREE.Group();
bowGroup.position.y = 0.5;
lid.add(bowGroup);

for (let i = 0; i < 8; i++) {
    const loopGeo = new THREE.TorusGeometry(0.6, 0.12, 12, 24);
    const loop = new THREE.Mesh(loopGeo, ribbonMaterial);
    loop.rotation.y = (i / 8) * Math.PI * 2;
    loop.rotation.x = Math.PI / 4;
    bowGroup.add(loop);
}
bowGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), ribbonMaterial));

// --- 4.5. PREMIUM TAG DESIGN ---
const tagGroup = new THREE.Group();
tagGroup.position.set(0, 0.75, 2.0); // Lifted higher to clear the lid and ribbons
tagGroup.rotation.set(-0.15, 0, 0); // Slight tilt for readability
lid.add(tagGroup);

// Tag Plate (Bright Gold)
const tagPlateGeo = new THREE.BoxGeometry(3.2, 1.2, 0.1); // Larger plate for large text
const tagPlateMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.1,
    metalness: 0.8,
    emissive: 0x443300 // Brighter glow
});
const tagPlate = new THREE.Mesh(tagPlateGeo, tagPlateMat);
tagPlate.castShadow = true;
tagGroup.add(tagPlate);

// Tag Text (Bold & Vibrant - Clear and Centered)
const tagText = new Text();
tagText.text = 'HAPPY 8/3';
tagText.fontSize = 0.5; // Bigger and clearer
tagText.color = 0xFFFFFF; // White contrast
tagText.fontWeight = '900';
tagText.anchorX = 'center';
tagText.anchorY = 'middle';
tagText.position.z = 0.1;
tagText.outlineWidth = 0.04;
tagText.outlineColor = 0xD63031; // Bold red outline
tagText.sync();
tagGroup.add(tagText);

// Decorative String (Connecting tag to bow)
const stringGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.0);
const stringMat = new THREE.MeshPhysicalMaterial({ color: 0xD4AF37, metalness: 1, roughness: 0.1 });
const tagString = new THREE.Mesh(stringGeo, stringMat);
tagString.position.set(0, 0.5, -0.6); // Centered and connecting upwards
tagString.rotation.set(Math.PI / 3, 0, 0);
tagGroup.add(tagString);

// -----------------------------------------------------------
// 5. PARTICLES & DECORATIONS
// -----------------------------------------------------------
const confettiElements = [];
const particleColors = [0xFF6B81, 0xFF91A4, 0xFF4757, 0x70A1FF, 0x27AE60, 0xF1C40F, 0xFF8C00];

const decorations = [];
function createDecorations() {
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0);
    heartShape.bezierCurveTo(0, 0.1, -0.2, 0.35, -0.45, 0.35);
    heartShape.bezierCurveTo(-0.8, 0.35, -0.8, -0.15, -0.8, -0.15);
    heartShape.bezierCurveTo(-0.8, -0.5, -0.6, -0.8, 0, -1.2);
    heartShape.bezierCurveTo(0.6, -0.8, 0.8, -0.5, 0.8, -0.15);
    heartShape.bezierCurveTo(0.8, -0.15, 0.8, 0.35, 0.45, 0.35);
    heartShape.bezierCurveTo(0.2, 0.35, 0, 0.1, 0, 0);

    const heartGeo = new THREE.ExtrudeGeometry(heartShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05 });
    const decMat = new THREE.MeshPhysicalMaterial({ color: 0xFF91A4, transparent: true, opacity: 0.3, roughness: 0, clearcoat: 1 });

    for (let i = 0; i < 50; i++) {
        const mesh = new THREE.Mesh(heartGeo, decMat);
        const radius = 10 + Math.random() * 20;
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20 - 10);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        const s = 0.5 + Math.random(); mesh.scale.set(s, s, s);
        decorations.push({ mesh, rotSpeed: (Math.random() - 0.5) * 0.01, floatSpeed: 0.005 + Math.random() * 0.01, offset: Math.random() * Math.PI * 2 });
        scene.add(mesh);
    }
}

createDecorations();

// -----------------------------------------------------------
// 6. ANIMATION & INTERACTION
// -----------------------------------------------------------
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let isOpened = false;
let isLetterReading = false;

let targetRotationX = 0, targetRotationY = 0;
let mouseX = 0, mouseY = 0, isDragging = false, startMouseX = 0, startMouseY = 0;

window.addEventListener('mousedown', (e) => { isDragging = true; startMouseX = mouseX = e.clientX; startMouseY = mouseY = e.clientY; });

// Touch support
window.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    startMouseX = mouseX = touchX;
    startMouseY = mouseY = touchY;

    // Update raycaster mouse coords early for potential clicks
    mouse.x = (touchX / window.innerWidth) * 2 - 1;
    mouse.y = -(touchY / window.innerHeight) * 2 + 1;
}, { passive: false });

window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    if (isDragging && !isOpened) {
        targetRotationY += (e.clientX - mouseX) * 0.01;
        targetRotationX += (e.clientY - mouseY) * 0.01;
        mouseX = e.clientX; mouseY = e.clientY;
    }
});

window.addEventListener('touchmove', (e) => {
    if (isDragging) {
        if (e.cancelable) e.preventDefault(); // Prevent scrolling

        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        if (!isOpened) {
            targetRotationY += (touchX - mouseX) * 0.01;
            targetRotationX += (touchY - mouseY) * 0.01;
        }

        mouseX = touchX;
        mouseY = touchY;
    }
}, { passive: false });

window.addEventListener('mouseup', (e) => {
    isDragging = false;
    if (Math.abs(e.clientX - startMouseX) < 5 && Math.abs(e.clientY - startMouseY) < 5) checkRaycast(e);
});

window.addEventListener('touchend', (e) => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    // Increased threshold to 40 for mobile fingers (more forgiving tap)
    if (Math.abs(endX - startMouseX) < 40 && Math.abs(endY - startMouseY) < 40) {
        mouse.x = (endX / window.innerWidth) * 2 - 1;
        mouse.y = -(endY / window.innerHeight) * 2 + 1;
        checkRaycast(e);
    }
});

function checkRaycast(e) {
    if (isLetterReading) return; // Prevent clicks while reading

    if (isOpened) {
        raycaster.setFromCamera(mouse, camera);
        const intersectsEnvelope = raycaster.intersectObjects([envelopeGroup], true);
        if (intersectsEnvelope.length > 0) {
            openLetter();
        } else {
            toggleBox();
        }
        return;
    }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([giftBoxGroup], true);
    if (intersects.length > 0) {
        toggleBox();
    }
}

function openLetter() {
    if (isLetterReading) return;
    isLetterReading = true;

    // Animate flap open and push it slightly behind the paper to prevent overlapping (Z-fighting / clipping)
    gsap.to(envTopFlap.rotation, { x: Math.PI, duration: 1.0, ease: "power2.inOut" });
    gsap.to(envTopFlap.position, { z: -0.08, duration: 1.0, ease: "power2.inOut" });

    // Scale down the whole envelope entirely out of view smoothly while showing the HTML
    gsap.to(envelopeGroup.scale, {
        x: 0, y: 0, z: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.in"
    });

    gsap.to(letterPaper.position, {
        y: 2.2, duration: 1.0, delay: 0.6, ease: "power2.out", onComplete: () => {
            document.getElementById('letter-overlay').classList.add('active');
            document.getElementById('three-canvas').classList.add('blur-bg');
            envelopeGroup.visible = false; // complete hide when faded
        }
    });
}

function closeLetter() {
    isLetterReading = false;
    document.getElementById('letter-overlay').classList.remove('active');
    document.getElementById('three-canvas').classList.remove('blur-bg');

    envelopeGroup.visible = true; // bring it back

    const aspect = window.innerWidth / window.innerHeight;
    const isMobile = aspect < 1;
    const envAppearingScale = isMobile ? 0.8 : 0.6; // Nho hon tren desktop, to hon tren mobile

    gsap.to(envelopeGroup.scale, { x: envAppearingScale, y: envAppearingScale, z: envAppearingScale, duration: 0.8, ease: "power2.out" });
    gsap.to(letterPaper.position, { y: 0, duration: 1.0, delay: 0.4, ease: "power2.in" });
    gsap.to(envTopFlap.rotation, { x: 0, duration: 1.0, delay: 0.8, ease: "power2.inOut" });
    gsap.to(envTopFlap.position, {
        z: 0.06, duration: 1.0, delay: 0.8, ease: "power2.inOut", onComplete: () => {
            if (isOpened) toggleBox(); // Auto close the gift box afterward
        }
    });
}

document.getElementById('close-letter').addEventListener('click', closeLetter);

function toggleBox() {
    if (gsap.isTweening(lid.position)) return;
    const aspect = window.innerWidth / window.innerHeight;
    const isMobile = aspect < 1;

    if (!isOpened) {
        isOpened = true;
        const targetScale = isMobile ? 0.7 : 0.42; // 0.7 of baseScale

        gsap.to(giftBoxGroup.scale, { x: targetScale, y: targetScale, z: targetScale, duration: 2.5, ease: "power2.inOut" });
        gsap.to(lid.position, { x: 10, y: 40, z: -20, duration: 2.5, ease: "back.in(1.2)", onComplete: () => { if (isOpened) lid.visible = false; } });
        gsap.to(lid.rotation, { x: Math.PI * 3, y: Math.PI, duration: 3 });

        envelopeGroup.visible = true; envelopeGroup.position.set(0, 2, 0); envelopeGroup.scale.set(0.1, 0.1, 0.1);
        const envAppearingScale = isMobile ? 0.8 : 0.6;
        gsap.to(envelopeGroup.scale, { x: envAppearingScale, y: envAppearingScale, z: envAppearingScale, duration: 3, ease: "back.out(1.2)" });

        // Auto open the letter after a short delay
        setTimeout(() => {
            if (isOpened && !isLetterReading) {
                openLetter();
            }
        }, 1800); // Trigger while it's still settling in

        const baselineY = 0; // Numbers now level with the box on all devices

        text8.visible = text3.visible = true;
        const spreadX = isMobile ? 6 : 5; // Wider spread for mobile box
        gsap.to(text8.position, { x: -spreadX, y: baselineY, duration: 2.5 });
        gsap.to(text3.position, { x: spreadX, y: baselineY, duration: 2.5 });
        gsap.to([text8.scale, text3.scale], { x: 1, y: 1, z: 1, duration: 2.5, ease: "back.out(1.2)" });
        createConfetti();
    } else {
        isOpened = false;
        const targetScale = isMobile ? 1 : 0.6; // Reduced for Tablet/Desktop

        gsap.to(giftBoxGroup.scale, { x: targetScale, y: targetScale, z: targetScale, duration: 2 });
        gsap.to(envelopeGroup.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 1.5, ease: "power2.in", onComplete: () => { if (!isOpened) envelopeGroup.visible = false; } });
        gsap.to(envelopeGroup.position, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.in" });
        gsap.to(envelopeGroup.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power2.in" });
        gsap.to(text8.position, { x: 0, duration: 2 });
        gsap.to(text3.position, { x: 0, duration: 2 });
        gsap.to([text8.scale, text3.scale], { x: 0.1, y: 0.1, z: 0.1, duration: 2, onComplete: () => { if (!isOpened) text8.visible = text3.visible = false; } });
        lid.visible = true;
        gsap.to(lid.position, { x: 0, y: lidOriginalPos.y, z: 0, delay: 1.0, duration: 2, ease: "bounce.out" });
        gsap.to(lid.rotation, { x: 0, y: 0, z: 0, delay: 1.0, duration: 2, ease: "power2.out" });
    }
}

function createConfetti() {
    const geo = new THREE.PlaneGeometry(0.1, 0.1);
    for (let i = 0; i < 80; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: particleColors[Math.floor(Math.random() * particleColors.length)], side: THREE.DoubleSide, transparent: true });
        const mesh = new THREE.Mesh(geo, mat); mesh.position.set(0, 1, 0);
        const velocity = new THREE.Vector3((Math.random() - 0.5) * 0.4, Math.random() * 0.5 + 0.2, (Math.random() - 0.5) * 0.4);
        confettiElements.push({ mesh, velocity }); scene.add(mesh);
    }
}

// -----------------------------------------------------------
// 7. MAIN LOOP
// -----------------------------------------------------------
const clock = new THREE.Clock();
function animate() {
    const elapsedTime = clock.getElapsedTime();
    const baseFloat = Math.sin(elapsedTime * 2) * 0.2;
    giftBoxGroup.position.y = baseFloat;

    if (!isOpened) {
        giftBoxGroup.rotation.x += (targetRotationX - giftBoxGroup.rotation.x) * 0.1;
        giftBoxGroup.rotation.y += (targetRotationY - giftBoxGroup.rotation.y) * 0.1;
    } else {
        giftBoxGroup.rotation.x *= 0.9; giftBoxGroup.rotation.y *= 0.9;
        targetRotationX = targetRotationY = 0;

        // Numbers level with box (Y=0) + floating animation
        text8.position.y = text3.position.y = baseFloat;

        const isMobile = window.innerWidth / window.innerHeight < 1;
        const targetYOffset = isMobile ? 5.5 : 4.5; // Hiện lên phía trên hộp quà
        const targetZOffset = 0.5; // Ngay trên hộp

        envelopeGroup.position.x += (0 - envelopeGroup.position.x) * 0.05;
        envelopeGroup.position.y += ((targetYOffset + baseFloat * 2) - envelopeGroup.position.y) * 0.05;
        envelopeGroup.position.z += (targetZOffset - envelopeGroup.position.z) * 0.05;

        if (!isLetterReading) {
            envelopeGroup.rotation.z = Math.sin(elapsedTime) * 0.03;
            envelopeGroup.rotation.y = Math.cos(elapsedTime * 0.5) * 0.05;
        } else {
            envelopeGroup.rotation.z += (0 - envelopeGroup.rotation.z) * 0.05;
            envelopeGroup.rotation.y += (0 - envelopeGroup.rotation.y) * 0.05;
        }

        // Add subtle sway to the tag when floating
        tagGroup.rotation.z = 0.1 + Math.sin(elapsedTime * 2) * 0.05;
    }

    decorations.forEach(d => { d.mesh.rotation.x += d.rotSpeed; d.mesh.position.y += Math.sin(elapsedTime * d.floatSpeed + d.offset) * 0.01; });

    for (let i = confettiElements.length - 1; i >= 0; i--) {
        const c = confettiElements[i]; c.mesh.position.add(c.velocity); c.velocity.y -= 0.005;
        c.mesh.material.opacity -= 0.005; if (c.mesh.material.opacity <= 0) { scene.remove(c.mesh); confettiElements.splice(i, 1); }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

// Resize handling & Mobile Optimization
function updateMobileView() {
    const aspect = window.innerWidth / window.innerHeight;
    const isMobile = aspect < 1;

    // Adjust camera distance - Added more padding for wider mobile spread
    camera.position.z = isMobile ? Math.max(14, 11 / aspect) : 6.5;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Adjust dynamic spacing
    const spreadX = isMobile ? 6 : 5;
    const fontScale = isMobile ? 1.0 : 1;

    // Adjust box scale for tablet/desktop
    const baseScale = isMobile ? 1 : 0.6;
    const currentScale = isOpened ? baseScale * 0.7 : baseScale;
    giftBoxGroup.scale.set(currentScale, currentScale, currentScale);

    if (isOpened) {
        text8.position.x = -spreadX;
        text3.position.x = spreadX;
        text8.position.y = text3.position.y = 0; // Always level with box
    }

    text8.fontSize = 5.5 * fontScale;
    text3.fontSize = 5.5 * fontScale;

    [text8, text3].forEach(t => t.sync());
}

window.addEventListener('resize', updateMobileView);
updateMobileView(); // Initial call
