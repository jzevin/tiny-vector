
/*!
 * Random JavaScript Library v1.0.0
 * Jeremy Zevin
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 7/8/16
 *
 */

class TinyVector {
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
  mul(tv:TinyVector){
    this.x *= tv.x;
    this.y *= tv.y;
    return this;
  }
  div(tv:TinyVector){
    this.x /= tv.x;
    this.y /= tv.y;
    return this;
  }
  limit( max:number = 1 ){
    if (this.x > max) {
        this.x = max;
    }
    if (this.y > max) {
        this.y = max;
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
export = TinyVector;
