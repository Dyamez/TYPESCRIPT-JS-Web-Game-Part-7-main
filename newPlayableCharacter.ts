interface PlayableCharacter {
  element: HTMLImageElement;
}

function newPlayableCharacter(x: number, y: number): PlayableCharacter {
  const element = new Image();
  element.src = "assets/green-character/static.gif";
  element.style.zIndex = "1";

  function handleDirectionChange(direction: string | null): void {
    if (direction === null) {
      element.src = "assets/green-character/static.gif";
    }
    if (direction === "west") {
      element.src = "assets/green-character/west.gif";
    }
    if (direction === "north") {
      element.src = "assets/green-character/north.gif";
    }
    if (direction === "east") {
      element.src = "assets/green-character/east.gif";
    }
    if (direction === "south") {
      element.src = "assets/green-character/south.gif";
    }
  }

  move(element).withArrowKeys(x, y, handleDirectionChange);

  return {
    element,
  };
}
