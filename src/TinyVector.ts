
/*!
 * tinyvector 2D JavaScript Lib
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 11/18/18
 *
 */

export class TinyVector {
  x: number;
  y: number;
  constructor( x:number = 0, y:number = 0 ){
    this.x = x;
    this.y = y;
  }
  add(tv:TinyVector){
    this.x += tv.x;
    this.y += tv.y;
    return this;
  }
  sub(tv:TinyVector){
    this.x -= tv.x;
    this.y -= tv.y;
    return this;
  }
  mult(n){
    this.x *= n;
    this.y *= n;
    return this;
  }
  div(n){
    this.x /= n;
    this.y /= n;
    return this;
  }
  mag(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
  normalize(){
    const m = this.mag();
    if (m !== 0) {
      this.div(m);
    }
    return this;
  }
  limit(h, l) {
    const high = h || null,
        low = l || null;
    if (high && this.mag() > high) {
      this.normalize();
      this.mult(high);
    }
    if (low && this.mag() < low) {
      this.normalize();
      this.mult(low);
    }
    return this;
  }
  zero(){
    this.x = 0;
    this.y = 0;
    return this;
  }
  clone(){
    return new TinyVector(this.x,this.y);
  }
  rotate(angle:number){
    const nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    this.x = nx;
    this.y = ny;
    return this;
  }
  rotateDeg(angle:number){
    return this.rotate(this._degrees2radian(angle));
  }

  private _radian2degrees (rad:number) {
      return rad * (180 / Math.PI);
  }
  private _degrees2radian(deg:number) {
      return deg / (180 / Math.PI);
  }
}
