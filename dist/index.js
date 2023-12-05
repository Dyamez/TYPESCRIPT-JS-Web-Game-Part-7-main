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
// Create the playable character
const pc = newPlayableCharacter(100, 110);
// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);
// have the NPC start walking east immediately
function moveNPC() {
    return __awaiter(this, void 0, void 0, function* () {
        yield npc.walkNorth(1400);
        yield npc.walkEast(1200);
        yield npc.walkSouth(300);
        yield npc.walkEast(1500);
        yield npc.walkSouth(1500);
        yield npc.walkWest(2700);
        yield npc.walkNorth(400);
        moveNPC();
    });
}
moveNPC();
// Create the inventory
const inventory = newInventory();
move(inventory).to(0, 0);
// Create everything else
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);
