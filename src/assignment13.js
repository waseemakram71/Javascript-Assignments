// const link = (document.getElementById("link").onclick = () => {
//   alert("kysy hain ap or kya chal rha hai");
// });

// const img = (document.getElementById("click").onclick = () => {
//   alert("this is your mobile");
// });

document.getElementById("over").onmouseover = () => {
  console.log("1");

  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://thumbs.dreamstime.com/b/giraffe-drinking-kenya-4829294.jpg"
    );
};

document.getElementById("over").onmouseout = () => {
console.log("an");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://thumbs.dreamstime.com/b/mother-masai-giraffe-protecting-baby-newly-born-calf-its-nairobi-national-park-kenya-skyline-nairobi-seen-83752030.jpg"
    ); 
 };
document.getElementById("over").onmousemove = () => {
  console.log("av");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670__340.jpg"
    );
};

document.getElementById("over").onmouseleave = () => {
  console.log("avsas");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://a-z-animals.com/media/animals/images/original/lion3.jpg"
    );
};



document.getElementById("over").onmousedown = () => {
  console.log("wa");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3s2IPJcE1fe2y0Ty4PZn0lQbc07XEmor4XfYrAHLWE6ZYhXrUhcK9lYSV-Yd62_pAAI&usqp=CAU"
    );
};

document.getElementById("over").onmousedown = () => {
  console.log("waaa");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://i.pinimg.com/564x/2e/32/49/2e3249639acb72c70fe39429f0744b21--roaring-lion-exotic-cats.jpg"
    );
};


document.getElementById("over").onmouseup = () => {
  console.log("waaab");
  document
    .getElementById("over")
    .setAttribute(
      "src",
      "https://e1.pxfuel.com/desktop-wallpaper/871/10/desktop-wallpaper-lion-face-clip-art-clip-art-on-lion-head-roaring-thumbnail.jpg"
    );
};

