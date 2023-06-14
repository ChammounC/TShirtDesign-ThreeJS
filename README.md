
## **<h2 align="center"><img src="https://global.discourse-cdn.com/standard17/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_744x750.png" alt="ThreeJS" width="35"/>  ThreeJS with OpenAI's DALL·E <img src="https://dwglogo.com/wp-content/uploads/2019/03/OpenAI_logo-1024x705.png" alt="ThreeJS" height="40"/></h2>**


<br>
<p align="center">
  <a href="#computer-demonstration-of-the-application">Demonstration of the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#star-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies-used">Technologies used</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-application-installation">Application installation</a>
</p>

<br>
<h2 align="center"> 
	Application status : Developed ✔️
</h2>
<br>

# :computer: Demonstration of the application

## 1. Overview

![overview-min](https://github.com/ChammounC/TShirtDesign-ThreeJS/assets/43007452/b8b5d16d-9dae-41b4-b3a2-49a34a80b1db)
<br>
<br>
<br>
## 2. Pick any color palette

![color_picker-min](https://github.com/ChammounC/TShirtDesign-ThreeJS/assets/43007452/fbd2099c-19d6-4ed8-82be-19484d3f2729)
<br>
<br>
<br>
## 3. Upload your desired image

![image_upload-min](https://github.com/ChammounC/TShirtDesign-ThreeJS/assets/43007452/43911d5b-532b-476b-9a46-09863717498f)
<br>
<br>
<br>
## 4. Apply the image for either the logo, the whole shirt or both

![image_toggle-min](https://github.com/ChammounC/TShirtDesign-ThreeJS/assets/43007452/904ef329-c51e-401f-93b7-b861efb7223b)
<br>
<br>
<br>
## 5. Generate image using OpenAI's DALLE 2 
![ai_upload](https://github.com/ChammounC/TShirtDesign-ThreeJS/assets/43007452/5920ee93-f1a4-4059-8562-e6ee7ffb061e)

<br>




## 📓 About
A responsive t-shirt designing website with an interactive 3D Model using:
- ReactJS - a popular front-end library that has gradually become the go-to framework for modern web development
- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- Tailwind CSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring your React website to life with animations
- Dalle·E 2 - OpenAI's ai system to create realistic images and art from a description in natural language

## :star: Features
- [x] Color Picker.
- [x] Image Upload for both logo and full canvas.
- [x] Image Generation using OpenAI's DALL·E 2.
- [ ] Design Download
- [ ] PWA

<br>
 <h2>:key: Take a look </h2>  <a href='https://dalle-ai-threejs.netlify.app/'>https://dalle-ai-threejs.netlify.app/</a>
<br>
<br>


## :rocket: Technologies used:
<p align="center">
	<a href="https://react.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactjs" title="React" width="70" height="70"/></a>&nbsp;
	<a href="https://threejs.org/"><img src="https://global.discourse-cdn.com/standard17/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_744x750.png" alt="threejs" title="ThreeJS" width="70" height="70"/></a>&nbsp;
	<a href="https://vitejs.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="vite" title="Vite"  width="70" height="70"/></a>&nbsp;
	<a href="https://openai.com/product/dall-e-2"><img src="https://static.vecteezy.com/system/resources/previews/021/495/993/original/chatgpt-openai-logo-icon-free-png.png" alt="openai-dalle" title="OpenAI-DALLE" width="60" height="70"/></a>&nbsp;
  <a href="https://www.framer.com/motion/"><img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="framer" title="Framer Motion"  width="70" height="70"/></a>&nbsp;
<a href="https://tailwindcss.com/"><img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="tailwind" title="TailWindCSS"  width="70" height="70"/></a>

</p>

<br>

## :information_source: Application installation
- git clone `https://github.com/ChammounC/TShirtDesign-ThreeJS.git` to clone the repository
### server-side
- `cd server` and run `npm install`
- Visit <a href="https://platform.openai.com/account/api-keys">https://platform.openai.com/account/api-keys</a> and generate an `API_KEY`
- create a `.env` file in the root of `server` folder and add variables: 
```
OPENAI_API_KEY = <GENERATED_API_KEY_FROM_ABOVE_STEP>
ALLOWED_ORIGIN = <CLIENT_URL> // eg.http://localhost:3000/
 ```
- run `npm start`

### client-side
- `cd client` and run `npm install`
- create a `.env` file in the root of `client` folder and add variable:
```
VITE_URL = http://localhost:8080/api/v1/dalle
```
- run `npm run dev`
<br>
