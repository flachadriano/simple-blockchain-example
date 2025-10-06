import { Block } from "./block";

export class Blockchain {

  private nextIndex = 3;
  private blocks: Block[] = [];

  constructor() {
    this.blocks.push(new Block('1'));
    this.blocks.push(new Block('2', this.blocks[0].generateHash()));
  }

  addBlock() {
    this.blocks.push(new Block(this.nextIndex.toString()));
    this.nextIndex++;
  }
  
  getBlocks() {
    return this.blocks;
  }

  refresh() {
    for (let i = 1; i < this.blocks.length; i++) {
      this.blocks[i].setPreviousHash(this.blocks[i-1].getHash());
    }
  }
}
