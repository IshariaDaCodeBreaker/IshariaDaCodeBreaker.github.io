$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

// TODO 1 - Enable the Grid
    //toggleGrid();


  // TODO 2 - Create Platforms
  createPlatform(400, 625, 200, 10, "white")
  createPlatform(800, 500, 200, 10, "white")
  createBadPlatform(1050, 375, 200, 10, "LightGray")
  createPlatform(485, 370, 200, 10, "white")
  createPlatform(175, 255, 200, 10, "white")
  createPlatform(1100, 635, 200, 10, "white")
  createPlatform(25, 610, 200, 10, "white")
  createBadPlatform(1200, 177, 200, 10, "LightGray")
  createPlatform(1200, 175, 200, 10, "white")
  createPlatform(1150, 550, 400, 10, "white", 1150, 1150, 1, 245, 550, 3)
  // TODO 3 - Create Collectables
  createCollectable("steve", 225, 100, 0.67, 0.4)
  createCollectable("steve", 900, 200, 0.76, 0.6)
  createCollectable("steve", 1200, 550, 0.67, 0.9)
  createCollectable("steve", 1225, 120, 0.69, 0.5)
  // TODO 4 - Create Cannons
  createCannon("left", 650, 1)
  createCannon("top", 350, 1200)
  createCannon("right", 420, 2000)
  //I dont know what I did wrong but I think the push command hates me
  


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
