// helper functions
const PI2 = Math.PI * 2;
const random = (min, max) => (Math.random() * (max - min + 1) + min) | 0;
const timestamp = (_) => new Date().getTime();

// container
class Birthday {
 constructor() {
  this.resize();

  // create a lovely place to store the firework
  this.fireworks = [];
  this.counter = 0;
 }

 resize() {
  this.width = canvas.width = window.innerWidth;
  let center = (this.width / 2) | 0;
  this.spawnA = (center - center / 4) | 0;
  this.spawnB = (center + center / 4) | 0;

  this.height = canvas.height = window.innerHeight;
  this.spawnC = this.height * 0.1;
  this.spawnD = this.height * 0.5;
 }

 onClick(evt) {
  let x = evt.clientX || (evt.touches && evt.touches[0].pageX);
  let y = evt.clientY || (evt.touches && evt.touches[0].pageY);

  let count = random(3, 5);
  for (let i = 0; i < count; i++)
   this.fireworks.push(
    new Firework(
     random(this.spawnA, this.spawnB),
     this.height,
     x,
     y,
     random(0, 260),
     random(30, 110)
    )
   );

  this.counter = -1;
 }

 update(delta) {
  ctx.globalCompositeOperation = "hard-light";


  ctx.fillStyle = `rgba(20,20,120,${7 * delta})`;
  ctx.fillRect(0, 0, this.width, this.height);

  ctx.globalCompositeOperation = "lighter";
  for (let firework of this.fireworks) firework.update(delta);

  // if enough time passed... create new new firework
  this.counter += delta * 3; // each second
  if (this.counter >= 1) {
   this.fireworks.push(
    new Firework(
     random(this.spawnA, this.spawnB),
     this.height,
     random(0, this.width),
     random(this.spawnC, this.spawnD),
     random(0, 360),
     random(30, 110)
    )
   );
   this.counter = 0;
  }

  // remove the dead fireworks
  if (this.fireworks.length > 1000)
   this.fireworks = this.fireworks.filter((firework) => !firework.dead);
 }
}

class Firework {
 constructor(x, y, targetX, targetY, shade, offsprings) {
  this.dead = false;
  this.offsprings = offsprings;

  this.x = x;
  this.y = y;
  this.targetX = targetX;
  this.targetY = targetY;

  this.shade = shade;
  this.history = [];
 }
 update(delta) {
  if (this.dead) return;

  let xDiff = this.targetX - this.x;
  let yDiff = this.targetY - this.y;
  if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
   // is still moving
   this.x += xDiff * 2 * delta;
   this.y += yDiff * 2 * delta;

   this.history.push({
    x: this.x,
    y: this.y
   });

   if (this.history.length > 20) this.history.shift();
  } else {
   if (this.offsprings && !this.madeChilds) {
    let babies = this.offsprings / 2;
    for (let i = 0; i < babies; i++) {
     let targetX =
      (this.x + this.offsprings * Math.cos((PI2 * i) / babies)) | 0;
     let targetY =
      (this.y + this.offsprings * Math.sin((PI2 * i) / babies)) | 0;

     birthday.fireworks.push(
      new Firework(this.x, this.y, targetX, targetY, this.shade, 0)
     );
    }
   }
   this.madeChilds = true;
   this.history.shift();
  }

  if (this.history.length === 0) this.dead = true;
  else if (this.offsprings) {
   for (let i = 0; this.history.length > i; i++) {
    let point = this.history[i];
    ctx.beginPath();
    ctx.fillStyle = "hsl(" + this.shade + ",100%," + i + "%)";
    ctx.arc(point.x, point.y, 1, 0, PI2, false);
    ctx.fill();
   }
  } else {
   ctx.beginPath();
   ctx.fillStyle = "hsl(" + this.shade + ",100%,50%)";
   ctx.arc(this.x, this.y, 1, 0, PI2, false);
   ctx.fill();
  }
 }
}

let canvas = document.getElementById("birthday");
let ctx = canvas.getContext("2d");

let then = timestamp();

let birthday = new Birthday();
window.onresize = () => birthday.resize();
document.onclick = (evt) => birthday.onClick(evt);
document.ontouchstart = (evt) => birthday.onClick(evt);
(function loop() {
 requestAnimationFrame(loop);

 let now = timestamp();
 let delta = now - then;

 then = now;
 birthday.update(delta / 1000);
})();

document.addEventListener('DOMContentLoaded', async (event) => {
    // Hide the page initially
    document.querySelectorAll('.page').forEach((page) => {
        page.style.transform = 'translateY(-100%)';
        page.style.transition = 'transform 1s, opacity 1s';
        page.style.opacity = 0;
        page.style.display = "none";
    });

    // Show the page with a slide-in animation after 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.querySelectorAll('.page').forEach((page) => {
        page.style.transform = 'translateY(0)';
        page.style.opacity = 1;
        page.style.display = "block";
    });

    // Slide out and remove the page when the submit button is clicked
    document.querySelectorAll('#submit').forEach((submitButton) => {
        submitButton.addEventListener('click', async (e) => {
            // Form validation
            let name = document.getElementById('name').value;
            if (!name) {
                alert('Please enter your name');
                e.preventDefault(); // Prevent the form from submitting
                return;
            }

            // Store form data in local storage with timestamp
            let gender = document.getElementById('gender').value;
            let theme = document.getElementById('theme').value;
            let now = new Date().getTime();
            let data = {name: name, lastName: lastName, gender: gender, theme: theme, timestamp: now};
            localStorage.setItem('formData', JSON.stringify(data));

            // Check if the name is saved in local storage
            let savedData = JSON.parse(localStorage.getItem('formData'));
            if (!savedData || !savedData.name) {
                console.error('Failed to save name in local storage');
                return;
            }

            // Wait for 1.4 seconds before closing the form
            await new Promise(resolve => setTimeout(resolve, 1400));

            let parentDiv = submitButton.closest('.page');
            parentDiv.style.transform = 'translateY(-100%)';
            parentDiv.style.opacity = 0;
            await new Promise(resolve => setTimeout(resolve, 1000));
            parentDiv.remove();
        }); 
    });
});

// Check local storage data every second
setInterval(() => {
    let data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
        let now = new Date().getTime();
        // If more than 5 minutes have passed, remove the data
        if (now - data.timestamp > 25 * 60 * 1000) {
            localStorage.removeItem('formData');
        }
    }
}, 1000);
