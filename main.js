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

// Wish Text (The one being pulled by balloons)
const wishText = new Text();
scene.add(wishText);
wishText.text = "8/3 này không cần quà xa xỉ, vì 'Quà' đây chỉ muốn\nđược 'tặng' trọn con tim cho em!";
wishText.fontSize = 0.55;
wishText.lineHeight = 1.2;
wishText.maxWidth = 7;
wishText.textAlign = 'center';
wishText.anchorX = 'center';
wishText.anchorY = 'middle';
wishText.position.set(0, 0, 0);
wishText.color = 0xD63031;
wishText.outlineWidth = 0.04;
wishText.outlineColor = 0xffffff;
wishText.visible = false;
wishText.sync();

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
const particles = [];
const confettiElements = [];
const particleColors = [0xFF6B81, 0xFF91A4, 0xFF4757, 0x70A1FF, 0x27AE60, 0xF1C40F, 0xFF8C00];

function createParticles() {
    const isMobile = window.innerWidth / window.innerHeight < 1;
    for (let i = 0; i < 120; i++) {
        // High-end translucent balloons
        const size = Math.random() * 0.15 + 0.15;
        const balloonGeo = new THREE.SphereGeometry(size, 24, 24); // Smoother
        balloonGeo.scale(1, 1.2, 1);
        const balloonMat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
            metalness: 0.1, roughness: 0.1, transmission: 0.6, thickness: 1.0,
            transparent: true, opacity: 0.95, clearcoat: 1.0
        });
        const mesh = new THREE.Mesh(balloonGeo, balloonMat);
        mesh.visible = false;
        // Scale up only for mobile
        if (isMobile) mesh.scale.set(1.9, 1.9, 1.9);
        scene.add(mesh);
        particles.push({ mesh, active: false, velocity: new THREE.Vector3(), factor: Math.random() });
    }
}

const leaders = [];
function setupLeaders() {
    for (let i = 0; i < 15; i++) leaders.push(particles[i]);
}

const strings = [];
const stringMaterial = new THREE.LineBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0 });
for (let i = 0; i < 15; i++) {
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), stringMaterial);
    scene.add(line);
    strings.push(line);
}

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

createParticles();
setupLeaders();
createDecorations();

// -----------------------------------------------------------
// 6. ANIMATION & INTERACTION
// -----------------------------------------------------------
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let isOpened = false;

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
    if (isOpened) {
        // Simple logic: If opened, any valid click/tap on canvas closes it
        toggleBox();
        return;
    }

    // If closed, use raycaster to see if we hit the box
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([giftBoxGroup], true);
    if (intersects.length > 0) {
        toggleBox();
    }
}

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

        wishText.visible = true; wishText.position.set(0, 0, 0); wishText.scale.set(0.1, 0.1, 0.1);
        gsap.to(wishText.scale, { x: 1, y: 1, z: 1, duration: 3, ease: "back.out(1.2)" });
        gsap.to(stringMaterial, { opacity: 0.6, duration: 3 });

        const balloonY = isMobile ? 12 : 5.5;
        const spreadR = isMobile ? 3.5 : 2.5;
        const baselineY = 0; // Numbers now level with the box on all devices

        particles.forEach(p => {
            p.mesh.visible = true; p.active = true; p.mesh.scale.set(0.1, 0.1, 0.1);
            const a = Math.random() * Math.PI * 2, r = Math.random() * spreadR;
            gsap.to(p.mesh.position, { x: Math.cos(a) * r, y: balloonY + Math.random() * 6, z: Math.sin(a) * r * 0.5, duration: 3.5, ease: "power3.out" });
            const s = isMobile ? 1.9 : 1;
            gsap.to(p.mesh.scale, { x: s, y: s, z: s, duration: 3, ease: "back.out(1.5)" });
        });

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
        gsap.to(stringMaterial, { opacity: 0, duration: 1 });
        particles.forEach(p => {
            gsap.to(p.mesh.position, { x: 0, y: 0, z: 0, duration: 2, onComplete: () => { if (!isOpened) p.mesh.visible = false; } });
            gsap.to(p.mesh.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 2 });
        });
        gsap.to(wishText.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 2, onComplete: () => { if (!isOpened) wishText.visible = false; } });
        gsap.to(text8.position, { x: 0, duration: 2 });
        gsap.to(text3.position, { x: 0, duration: 2 });
        gsap.to([text8.scale, text3.scale], { x: 0.1, y: 0.1, z: 0.1, duration: 2, onComplete: () => { if (!isOpened) text8.visible = text3.visible = false; } });
        lid.visible = true;
        gsap.to(lid.position, { x: 0, y: lidOriginalPos.y, z: 0, delay: 1.5, duration: 2 });
        gsap.to(lid.rotation, { x: 0, y: 0, z: 0, delay: 1.5, duration: 2 });
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

        let avgX = 0, avgY = 0, avgZ = 0;
        leaders.forEach(l => { avgX += l.mesh.position.x; avgY += l.mesh.position.y; avgZ += l.mesh.position.z; });
        const isMobile = window.innerWidth / window.innerHeight < 1;
        // Lift text much higher on mobile to avoid obscuring
        const textOffset = isMobile ? 2.5 : 3.5;
        wishText.position.x += (avgX / 15 - wishText.position.x) * 0.05;
        wishText.position.y += (avgY / 15 - textOffset - wishText.position.y) * 0.05;
        wishText.position.z += (avgZ / 15 - wishText.position.z) * 0.05;
        wishText.rotation.z = Math.sin(elapsedTime) * 0.03;
        wishText.rotation.y = Math.cos(elapsedTime * 0.5) * 0.05;

        // Add subtle sway to the tag when floating
        tagGroup.rotation.z = 0.1 + Math.sin(elapsedTime * 2) * 0.05;
    }

    if (stringMaterial.opacity > 0) {
        strings.forEach((s, i) => {
            // Widen the attachment points for a bigger bunch feel
            const spreadWidth = window.innerWidth / window.innerHeight < 1 ? 7.5 : 5.5;
            const staticOffsetX = ((i / 15) - 0.5) * spreadWidth;
            s.geometry.setFromPoints([new THREE.Vector3(wishText.position.x + staticOffsetX, wishText.position.y + 0.2, wishText.position.z), leaders[i].mesh.position]);
        });
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

    // Scale particles based on device
    particles.forEach(p => {
        const s = isMobile ? 1.8 : 1;
        p.mesh.scale.set(s, s, s);
    });

    text8.fontSize = 5.5 * fontScale;
    text3.fontSize = 5.5 * fontScale;

    // Force 2 lines on mobile
    wishText.maxWidth = isMobile ? 20 : 10; // Large enough to prevent auto-wrap
    wishText.fontSize = isMobile ? 0.5 : 0.55;

    [text8, text3, wishText].forEach(t => t.sync());
}

window.addEventListener('resize', updateMobileView);
updateMobileView(); // Initial call
