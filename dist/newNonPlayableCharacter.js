"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif');
    element.style.zIndex = 1;
    let direction = null;
    function moveCharacter() {
        if (direction === 'west') {
            x -= 1;
        }
        if (direction === 'north') {
            y += 1;
        }
        if (direction === 'east') {
            x += 1;
        }
        if (direction === 'south') {
            y -= 1;
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    }
    setInterval(moveCharacter, 1);
    function walkEast(oras) {
        return __awaiter(this, void 0, void 0, function* () {
            direction = 'east';
            element.src = `./assets/red-character/east.gif`;
            yield tulog(oras);
            stop();
        });
    }
    function walkNorth(oras) {
        return __awaiter(this, void 0, void 0, function* () {
            direction = 'north';
            element.src = `./assets/red-character/north.gif`;
            yield tulog(oras);
            stop();
        });
    }
    function walkWest(oras) {
        return __awaiter(this, void 0, void 0, function* () {
            direction = 'west';
            element.src = `./assets/red-character/west.gif`;
            yield tulog(oras);
            stop();
        });
    }
    function walkSouth(oras) {
        return __awaiter(this, void 0, void 0, function* () {
            direction = 'south';
            element.src = `./assets/red-character/south.gif`;
            yield tulog(oras);
            stop();
        });
    }
    function stop() {
        direction = null;
        element.src = `./assets/red-character/static.gif`;
    }
    function tulog(oras) {
        return new Promise(resolve => {
            setTimeout(resolve, oras);
        });
    }
    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    };
}
//played with naming convention of some callbacks and functions just to learn from it. 
