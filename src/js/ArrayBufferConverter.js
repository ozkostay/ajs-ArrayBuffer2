export default class ArrayBufferConverter {
  constructor() {
    this.temp = '';
  }

  load(buffer) {
    this.temp = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.temp);
    return bufferView.reduce((sum, item) => sum + String.fromCharCode(item), '');
  }
}
