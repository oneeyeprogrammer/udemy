const img = document.querySelector("#divLogo img")
img.setAttribute('id', 'logo')
img.setAttribute('src','./images/images.png')
img.setAttribute('alt','logos')

const allAttr = img.attributes
for (const attr of allAttr) {
    console.log(attr)
}   