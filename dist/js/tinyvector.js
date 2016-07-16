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
"use strict";
var TinyVector = (function () {
    function TinyVector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    TinyVector.prototype.add = function (tv) {
        this.x += tv.x;
        this.y += tv.y;
        return this;
    };
    TinyVector.prototype.sub = function (tv) {
        this.x -= tv.x;
        this.y -= tv.y;
        return this;
    };
    TinyVector.prototype.mul = function (tv) {
        this.x *= tv.x;
        this.y *= tv.y;
        return this;
    };
    TinyVector.prototype.div = function (tv) {
        this.x /= tv.x;
        this.y /= tv.y;
        return this;
    };
    TinyVector.prototype.limit = function (max) {
        if (max === void 0) { max = 1; }
        if (this.x > max) {
            this.x = max;
        }
        if (this.y > max) {
            this.y = max;
        }
        return this;
    };
    TinyVector.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
        return this;
    };
    TinyVector.prototype.clone = function () {
        return new TinyVector(this.x, this.y);
    };
    TinyVector.prototype.rotate = function (angle) {
        var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        this.x = nx;
        this.y = ny;
        return this;
    };
    TinyVector.prototype.rotateDeg = function (angle) {
        return this.rotate(this._degrees2radian(angle));
    };
    TinyVector.prototype._radian2degrees = function (rad) {
        return rad * (180 / Math.PI);
    };
    TinyVector.prototype._degrees2radian = function (deg) {
        return deg / (180 / Math.PI);
    };
    return TinyVector;
}());
module.exports = TinyVector;
