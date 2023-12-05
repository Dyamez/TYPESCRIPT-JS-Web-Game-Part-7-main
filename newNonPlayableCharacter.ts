interface NonPlayableCharacter {
  element: HTMLImageElement;
  walkWest(oras: number): Promise<void>;
  walkNorth(oras: number): Promise<void>;
  walkEast(oras: number): Promise<void>;
  walkSouth(oras: number): Promise<void>;
  stop(): void;
}

function newNonPlayableCharacter(x: number, y: number): NonPlayableCharacter {
  const element = new Image();
  element.src = "assets/red-character/static.gif";
  element.style.zIndex = "1";

  let direction: string | null = null;

  function moveCharacter() {
    if (direction === "west") {
      x -= 1;
    }
    if (direction === "north") {
      y += 1;
    }
    if (direction === "east") {
      x += 1;
    }
    if (direction === "south") {
      y -= 1;
    }
    element.style.left = x + "px";
    element.style.bottom = y + "px";
  }

  setInterval(moveCharacter, 1);

  async function walkEast(oras: number): Promise<void> {
    direction = "east";
    element.src = "./assets/red-character/east.gif";
    await tulog(oras);
    stop();
  }

  async function walkNorth(oras: number): Promise<void> {
    direction = "north";
    element.src = "./assets/red-character/north.gif";
    await tulog(oras);
    stop();
  }

  async function walkWest(oras: number): Promise<void> {
    direction = "west";
    element.src = "./assets/red-character/west.gif";
    await tulog(oras);
    stop();
  }

  async function walkSouth(oras: number): Promise<void> {
    direction = "south";
    element.src = "./assets/red-character/south.gif";
    await tulog(oras);
    stop();
  }

  function stop(): void {
    direction = null;
    element.src = "./assets/red-character/static.gif";
  }

  function tulog(oras: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, oras);
    });
  }

  return {
    element,
    walkWest,
    walkNorth,
    walkEast,
    walkSouth,
    stop,
  };
}
