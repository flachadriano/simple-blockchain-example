import SHA256 from "crypto-js/sha256";

export class Block {
  private hash = '';

  constructor(
    private sequence = '1', 
    private previousHash = '0000000000000000000000000000000000000000000000000000000000000000',
    private nonce = '1', 
    private data = 'Type data',
  ) {
    this.mine();
  }

  setSequence(newSequence: string) {
    this.sequence = newSequence;
  }

  getSequence() {
    return this.sequence;
  }

  setNonce(newNonce: string) {
    this.nonce = newNonce;
  }
  
  getNone() {
    return this.nonce;
  }
  
  setData(newData: string) {
    this.data = newData;
  }

  getData() {
    return this.data;
  }

  setPreviousHash(newPreviousHash: string) {
    this.previousHash = newPreviousHash
  }
  
  getPreviousHash() {
    return this.previousHash;
  }

  mine() {
    this.hash = this.generateHash();
  }
  
  getHash() {
    return this.hash;
  }
  
  generateHash() {
    return SHA256(`${this.sequence}${this.nonce}${this.data}${this.previousHash}`).toString();
  }
  
  isHashValid() {
    return this.hash == this.generateHash();
  }
}
