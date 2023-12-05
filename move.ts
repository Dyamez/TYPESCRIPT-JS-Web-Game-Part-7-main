interface MoveController {
  to(left: number, bottom: number): void;
  withArrowKeys(
    left: number,
    bottom: number,
    callback: (direction: string | null) => void
  ): void;
}

function move(element: HTMLElement): MoveController {
  element.style.position = "fixed";

  function moveToCoordinates(left: number, bottom: number): void {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(
    left: number,
    bottom: number,
    callback: (direction: string | null) => void
  ): void {
    let direction: string | null = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";

    function moveCharacter(): void {
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

    document.addEventListener("keydown", function (e: KeyboardEvent): void {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        direction = "west";
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      callback(direction);
    });

    document.addEventListener("keyup", function (e: KeyboardEvent): void {
      direction = null;
      callback(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
