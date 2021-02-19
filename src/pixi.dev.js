/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The [pixi.js](http://www.pixijs.com/) module/namespace.
 *
 * @module PIXI
 */

/**
 * Namespace-class for [pixi.js](http://www.pixijs.com/).
 *
 * Contains assorted static properties and enumerations.
 *
 * @class PIXI
 * @static
 */
export var PIXI = {}

/**
 * @property {Number} CANVAS_RENDERER
 * @protected
 * @static
 */
PIXI.CANVAS_RENDERER = 1

/**
 * Version of pixi that is loaded.
 * @property {String} VERSION
 * @static
 */
PIXI.VERSION = 'v2.2.0'

/**
 * Various blend modes supported by pixi. IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * @property {Object} blendModes
 * @property {Number} blendModes.NORMAL
 * @property {Number} blendModes.ADD
 * @property {Number} blendModes.MULTIPLY
 * @property {Number} blendModes.SCREEN
 * @property {Number} blendModes.OVERLAY
 * @property {Number} blendModes.DARKEN
 * @property {Number} blendModes.LIGHTEN
 * @property {Number} blendModes.COLOR_DODGE
 * @property {Number} blendModes.COLOR_BURN
 * @property {Number} blendModes.HARD_LIGHT
 * @property {Number} blendModes.SOFT_LIGHT
 * @property {Number} blendModes.DIFFERENCE
 * @property {Number} blendModes.EXCLUSION
 * @property {Number} blendModes.HUE
 * @property {Number} blendModes.SATURATION
 * @property {Number} blendModes.COLOR
 * @property {Number} blendModes.LUMINOSITY
 * @static
 */
PIXI.blendModes = {
  NORMAL: 0,
  ADD: 1,
  MULTIPLY: 2,
  SCREEN: 3,
  OVERLAY: 4,
  DARKEN: 5,
  LIGHTEN: 6,
  COLOR_DODGE: 7,
  COLOR_BURN: 8,
  HARD_LIGHT: 9,
  SOFT_LIGHT: 10,
  DIFFERENCE: 11,
  EXCLUSION: 12,
  HUE: 13,
  SATURATION: 14,
  COLOR: 15,
  LUMINOSITY: 16,
}

/**
 * The scale modes that are supported by pixi.
 *
 * The DEFAULT scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @property {Object} scaleModes
 * @property {Number} scaleModes.DEFAULT=LINEAR
 * @property {Number} scaleModes.LINEAR Smooth scaling
 * @property {Number} scaleModes.NEAREST Pixelating scaling
 * @static
 */
PIXI.scaleModes = {
  DEFAULT: 0,
  LINEAR: 0,
  NEAREST: 1,
}

PIXI.hitTypes = {
  BORDER: 1,
  TRANSPARENT_FILL: 2,
  OPAQUE_FILL: 3,
  TEXT: 4,
}

// many consequent calls (hundreds) of 'drawImage' can become very (exponentially) slow. to break this sequence we can make fake graphic calls
// need count consequent calls; reset it if Graphics render is called; and make fake draw if number exceeded
PIXI.MAX_SERIAL_DRAW_IMAGE = 20
PIXI._drawImageCount = 0

// used to create uids for various pixi objects..
PIXI._UID = 0

if (typeof Float32Array != 'undefined') {
  PIXI.Float32Array = Float32Array
  PIXI.Uint16Array = Uint16Array
} else {
  PIXI.Float32Array = Array
  PIXI.Uint16Array = Array
}

// interaction frequency
PIXI.INTERACTION_FREQUENCY = 30
PIXI.AUTO_PREVENT_DEFAULT = true

/**
 * @property {Number} PI_2
 * @static
 */
PIXI.PI_2 = Math.PI * 2

/**
 * @property {Number} RAD_TO_DEG
 * @static
 */
PIXI.RAD_TO_DEG = 180 / Math.PI

/**
 * @property {Number} DEG_TO_RAD
 * @static
 */
PIXI.DEG_TO_RAD = Math.PI / 180

/**
 * @property {String} RETINA_PREFIX
 * @protected
 * @static
 */
PIXI.RETINA_PREFIX = '@2x'
//PIXI.SCALE_PREFIX "@x%%";

/**
 * The default render options if none are supplied to
 * {{#crossLink "WebGLRenderer"}}{{/crossLink}} or {{#crossLink "CanvasRenderer"}}{{/crossLink}}.
 *
 * @property {Object} defaultRenderOptions
 * @property {Object} defaultRenderOptions.view=null
 * @property {Boolean} defaultRenderOptions.transparent=false
 * @property {Boolean} defaultRenderOptions.antialias=false
 * @property {Boolean} defaultRenderOptions.preserveDrawingBuffer=false
 * @property {Number} defaultRenderOptions.resolution=1
 * @property {Boolean} defaultRenderOptions.clearBeforeRender=true
 * @property {Boolean} defaultRenderOptions.autoResize=false
 * @static
 */
PIXI.defaultRenderOptions = {
  view: null,
  transparent: false,
  antialias: false,
  preserveDrawingBuffer: false,
  resolution: 1,
  clearBeforeRender: true,
  autoResize: false,
}

PIXI.LEFT_MOUSE_BUTTON = 0
PIXI.MIDDLE_MOUSE_BUTTON = 1
PIXI.RIGHT_MOUSE_BUTTON = 2
PIXI.LONG_CLICK = 'long_click'
PIXI.LEFT_CLICK = 'l_click'
PIXI.MIDDLE_CLICK = 'm_click'
PIXI.RIGHT_CLICK = 'r_click'
PIXI.ACTUAL_LEFT_MOUSE_DOWN = 'actual_l_mousedown'
PIXI.LEFT_MOUSE_DOWN = 'l_mousedown'
PIXI.MIDDLE_MOUSE_DOWN = 'm_mousedown'
PIXI.RIGHT_MOUSE_DOWN = 'r_mousedown'
PIXI.LEFT_MOUSE_UP = 'l_mouseup'
PIXI.MIDDLE_MOUSE_UP = 'm_mouseup'
PIXI.RIGHT_MOUSE_UP = 'r_mouseup'
PIXI.MOUSE_MOVE = 'mousemove'
PIXI.MOUSE_ENTER = 'mouseenter'
PIXI.MOUSE_LEAVE = 'mouseleave'
PIXI.pointerTypes = {
  MOUSE: 'mouse',
  PEN: 'pen',
  TOUCH: 'touch',
}

PIXI.LRM = '' // String.fromCharCode(0x200E)
PIXI.RLM = String.fromCharCode(0x200f)

PIXI.BaseTextureCache = {}

PIXI.BaseTextureCacheIdGenerator = 0

PIXI.pixelRatio = 1

PIXI.offscreenAvailable = false
try {
  let can = new OffscreenCanvas(1, 1) // safari falls here
  let ctx = can.getContext('2d') // firefox falls here
  PIXI.offscreenAvailable = true
} catch (e) {}

//останавливать рендеринг, когда нет изменений
PIXI.needRender = true
PIXI.lastChangeTime = 0

PIXI.objectChanged = function (displayObject) {
  if (!displayObject || displayObject.stage) {
    PIXI.needRender = true
    PIXI.lastChangeTime = Date.now()
  }
}

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *
 * @class Point
 * @constructor
 * @param x {Number} position of the point on the x axis
 * @param y {Number} position of the point on the y axis
 */
PIXI.Point = function (x, y) {
  /**
   * @property x
   * @type Number
   * @default 0
   */
  this.x = x || 0

  /**
   * @property y
   * @type Number
   * @default 0
   */
  this.y = y || 0
}

PIXI.Point.fromJson = function (json) {
  return new PIXI.Point(json.x || 0, json.y || 0)
}

/**
 * Creates a clone of this point
 *
 * @method clone
 * @return {Point} a copy of the point
 */
PIXI.Point.prototype.clone = function () {
  return new PIXI.Point(this.x, this.y)
}

/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @method set
 * @param [x=0] {Number} position of the point on the x axis
 * @param [y=0] {Number} position of the point on the y axis
 */
PIXI.Point.prototype.set = function (x, y) {
  this.x = x || 0
  this.y = y || (y !== 0 ? this.x : 0)
}

PIXI.Point.prototype.getJson = function () {
  return {x: this.x, y: this.y}
}

PIXI.Point.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

PIXI.Point.prototype.multiply = function (multiplier) {
  this.x *= multiplier
  this.y *= multiplier
  return this
}

PIXI.Point.prototype.invert = function () {
  this.x = -this.x
  this.y = -this.y
  return this
}

PIXI.Point.prototype.add = function (otherPoint) {
  this.x += otherPoint.x
  this.y += otherPoint.y
  return this
}

PIXI.Point.prototype.subtract = function (otherPoint) {
  this.x -= otherPoint.x
  this.y -= otherPoint.y
  return this
}

PIXI.Point.prototype.normalize = function (length) {
  if (this.x || this.y) {
    length = length || 1
    var mult = length / this.length()
    this.x *= mult
    this.y *= mult
  }
  return this
}

PIXI.Point.prototype.getPerp = function (toLeft) {
  var vec = new PIXI.Point(this.y, this.x)
  if (toLeft) {
    vec.y = -vec.y
  } else {
    vec.x = -vec.x
  }
  return vec
}

// constructor
PIXI.Point.prototype.constructor = PIXI.Point

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class Rectangle
 * @constructor
 * @param x {Number} The X coordinate of the upper-left corner of the rectangle
 * @param y {Number} The Y coordinate of the upper-left corner of the rectangle
 * @param width {Number} The overall width of this rectangle
 * @param height {Number} The overall height of this rectangle
 */
PIXI.Rectangle = function (x, y, width, height) {
  /**
   * @property x
   * @type Number
   * @default 0
   */
  this.x = x || 0

  /**
   * @property y
   * @type Number
   * @default 0
   */
  this.y = y || 0

  /**
   * @property width
   * @type Number
   * @default 0
   */
  this.width = width || 0

  /**
   * @property height
   * @type Number
   * @default 0
   */
  this.height = height || 0
}

/**
 * Creates a clone of this Rectangle
 *
 * @method clone
 * @return {Rectangle} a copy of the rectangle
 */
PIXI.Rectangle.prototype.clone = function () {
  return new PIXI.Rectangle(this.x, this.y, this.width, this.height)
}

/**
 * Checks whether the x and y coordinates given are contained within this Rectangle
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this Rectangle
 */
PIXI.Rectangle.prototype.contains = function (x, y) {
  if (this.width <= 0 || this.height <= 0) return false

  var x1 = this.x
  if (x >= x1 && x <= x1 + this.width) {
    var y1 = this.y

    if (y >= y1 && y <= y1 + this.height) {
      return true
    }
  }

  return false
}

PIXI.Rectangle.prototype.intersects = function (rect) {
  return (
    this.left < rect.right &&
    this.right > rect.left &&
    this.top < rect.bottom &&
    this.bottom > rect.top
  )
}

PIXI.Rectangle.prototype.containsRect = function (rect) {
  return (
    this.left <= rect.left &&
    this.right >= rect.right &&
    this.top <= rect.top &&
    this.bottom >= rect.bottom
  )
}

PIXI.Rectangle.prototype.equals = function (rect) {
  return (
    this.x === rect.x &&
    this.y === rect.y &&
    this.width === rect.width &&
    this.height === rect.height
  )
}

PIXI.Rectangle.createFromRect = function (rect) {
  return new PIXI.Rectangle(rect.x, rect.y, rect.width, rect.height)
}

PIXI.Rectangle.prototype.toJson = function () {
  return {x: this.x, y: this.y, width: this.width, height: this.height}
}

Object.defineProperty(PIXI.Rectangle.prototype, 'centerX', {
  get: function () {
    return this.x + this.width / 2
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'centerY', {
  get: function () {
    return this.y + this.height / 2
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'left', {
  get: function () {
    return this.x
  },
  set: function (value) {
    this.width += this.x - value
    this.x = value
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'right', {
  get: function () {
    return this.x + this.width
  },
  set: function (value) {
    this.width = value - this.x
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'top', {
  get: function () {
    return this.y
  },
  set: function (value) {
    this.height += this.y - value
    this.y = value
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'bottom', {
  get: function () {
    return this.y + this.height
  },
  set: function (value) {
    this.height = value - this.y
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'leftTop', {
  get: function () {
    return new PIXI.Point(this.left, this.top)
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'rightTop', {
  get: function () {
    return new PIXI.Point(this.right, this.top)
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'leftBottom', {
  get: function () {
    return new PIXI.Point(this.left, this.bottom)
  },
})

Object.defineProperty(PIXI.Rectangle.prototype, 'rightBottom', {
  get: function () {
    return new PIXI.Point(this.right, this.bottom)
  },
})

// constructor
PIXI.Rectangle.prototype.constructor = PIXI.Rectangle

PIXI.EmptyRectangle = new PIXI.Rectangle(0, 0, 0, 0)
/**
 * @author Adrien Brault <adrien.brault@gmail.com>
 */

/**
 * @class Polygon
 * @constructor
 * @param points* {Array(Point)|Array(Number)|Point...|Number...} This can be an array of Points that form the polygon,
 *      a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments passed can be
 *      all the points of the polygon e.g. `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the
 *      arguments passed can be flat x,y values e.g. `new PIXI.Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are
 *      Numbers.
 */
PIXI.Polygon = function (points) {
  //if points isn't an array, use arguments as the array
  if (!(points instanceof Array)) points = Array.prototype.slice.call(arguments)

  //if this is a flat array of numbers, convert it to points
  if (points[0] instanceof PIXI.Point) {
    var p = []
    for (var i = 0, il = points.length; i < il; i++) {
      p.push(points[i].x, points[i].y)
    }

    points = p
  }

  this.closed = true
  this.points = points
}

/**
 * Creates a clone of this polygon
 *
 * @method clone
 * @return {Polygon} a copy of the polygon
 */
PIXI.Polygon.prototype.clone = function () {
  var points = this.points.slice()
  return new PIXI.Polygon(points)
}

/**
 * Checks whether the x and y coordinates passed to this function are contained within this polygon
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this polygon
 */
PIXI.Polygon.prototype.contains = function (x, y) {
  var inside = false

  // use some raycasting to test hits
  // https://github.com/substack/point-in-polygon/blob/master/index.js
  var length = this.points.length / 2

  for (var i = 0, j = length - 1; i < length; j = i++) {
    var xi = this.points[i * 2],
      yi = this.points[i * 2 + 1],
      xj = this.points[j * 2],
      yj = this.points[j * 2 + 1],
      intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi

    if (intersect) inside = !inside
  }

  return inside
}

// constructor
PIXI.Polygon.prototype.constructor = PIXI.Polygon

/**
 * @author Chad Engler <chad@pantherdev.com>
 */

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class Circle
 * @constructor
 * @param x {Number} The X coordinate of the center of this circle
 * @param y {Number} The Y coordinate of the center of this circle
 * @param radius {Number} The radius of the circle
 */
PIXI.Circle = function (x, y, radius) {
  /**
   * @property x
   * @type Number
   * @default 0
   */
  this.x = x || 0

  /**
   * @property y
   * @type Number
   * @default 0
   */
  this.y = y || 0

  /**
   * @property radius
   * @type Number
   * @default 0
   */
  this.radius = radius || 0
}

/**
 * Creates a clone of this Circle instance
 *
 * @method clone
 * @return {Circle} a copy of the Circle
 */
PIXI.Circle.prototype.clone = function () {
  return new PIXI.Circle(this.x, this.y, this.radius)
}

/**
 * Checks whether the x and y coordinates given are contained within this circle
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this Circle
 */
PIXI.Circle.prototype.contains = function (x, y) {
  if (this.radius <= 0) return false

  var dx = this.x - x,
    dy = this.y - y,
    r2 = this.radius * this.radius

  dx *= dx
  dy *= dy

  return dx + dy <= r2
}

/**
 * Returns the framing rectangle of the circle as a PIXI.Rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the framing rectangle
 */
PIXI.Circle.prototype.getBounds = function () {
  return new PIXI.Rectangle(
    this.x - this.radius,
    this.y - this.radius,
    this.radius * 2,
    this.radius * 2
  )
}

// constructor
PIXI.Circle.prototype.constructor = PIXI.Circle

/**
 * @author Chad Engler <chad@pantherdev.com>
 */

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class Ellipse
 * @constructor
 * @param x {Number} The X coordinate of the center of the ellipse
 * @param y {Number} The Y coordinate of the center of the ellipse
 * @param width {Number} The half width of this ellipse
 * @param height {Number} The half height of this ellipse
 */
PIXI.Ellipse = function (x, y, width, height) {
  /**
   * @property x
   * @type Number
   * @default 0
   */
  this.x = x || 0

  /**
   * @property y
   * @type Number
   * @default 0
   */
  this.y = y || 0

  /**
   * @property width
   * @type Number
   * @default 0
   */
  this.width = width || 0

  /**
   * @property height
   * @type Number
   * @default 0
   */
  this.height = height || 0
}

/**
 * Creates a clone of this Ellipse instance
 *
 * @method clone
 * @return {Ellipse} a copy of the ellipse
 */
PIXI.Ellipse.prototype.clone = function () {
  return new PIXI.Ellipse(this.x, this.y, this.width, this.height)
}

/**
 * Checks whether the x and y coordinates given are contained within this ellipse
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coords are within this ellipse
 */
PIXI.Ellipse.prototype.contains = function (x, y) {
  if (this.width <= 0 || this.height <= 0) return false

  //normalize the coords to an ellipse with center 0,0
  var normx = (x - this.x) / this.width,
    normy = (y - this.y) / this.height

  normx *= normx
  normy *= normy

  return normx + normy <= 1
}

/**
 * Returns the framing rectangle of the ellipse as a PIXI.Rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the framing rectangle
 */
PIXI.Ellipse.prototype.getBounds = function () {
  return new PIXI.Rectangle(
    this.x - this.width,
    this.y - this.height,
    this.width,
    this.height
  )
}

// constructor
PIXI.Ellipse.prototype.constructor = PIXI.Ellipse

/**
 * @author Mat Groves http://matgroves.com/
 */

/**
 * The Rounded Rectangle object is an area defined by its position and has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class RoundedRectangle
 * @constructor
 * @param x {Number} The X coordinate of the upper-left corner of the rounded rectangle
 * @param y {Number} The Y coordinate of the upper-left corner of the rounded rectangle
 * @param width {Number} The overall width of this rounded rectangle
 * @param height {Number} The overall height of this rounded rectangle
 * @param radius {Number} The overall radius of this corners of this rounded rectangle
 */
PIXI.RoundedRectangle = function (
  x,
  y,
  width,
  height,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomRight,
  radiusBottomLeft
) {
  /**
   * @property x
   * @type Number
   * @default 0
   */
  this.x = x || 0

  /**
   * @property y
   * @type Number
   * @default 0
   */
  this.y = y || 0

  /**
   * @property width
   * @type Number
   * @default 0
   */
  this.width = width || 0

  /**
   * @property height
   * @type Number
   * @default 0
   */
  this.height = height || 0

  /**
   * @property Top left radius
   * @type Number
   * @default 20
   */
  this.radius = (radiusTopLeft == undefined && 20) || radiusTopLeft

  /**
   * @property Top right radius
   * @type Number
   * @default Equals to top left radius
   */
  this.radiusTopRight =
    (radiusTopRight == undefined && this.radius) || radiusTopRight

  /**
   * @property Bottom right radius
   * @type Number
   * @default Equals to top left radius
   */
  this.radiusBottomRight =
    (radiusBottomRight == undefined && this.radius) || radiusBottomRight

  /**
   * @property Bottom left radius
   * @type Number
   * @default Equals to top left radius
   */
  this.radiusBottomLeft =
    (radiusBottomLeft == undefined && this.radius) || radiusBottomLeft
}

/**
 * Creates a clone of this Rounded Rectangle
 *
 * @method clone
 * @return {RoundedRectangle} a copy of the rounded rectangle
 */
PIXI.RoundedRectangle.prototype.clone = function () {
  return new PIXI.RoundedRectangle(
    this.x,
    this.y,
    this.width,
    this.height,
    this.radius,
    this.radiusTopRight,
    this.radiusBottomRight,
    this.radiusBottomLeft
  )
}

/**
 * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
 *
 * @method contains
 * @param x {Number} The X coordinate of the point to test
 * @param y {Number} The Y coordinate of the point to test
 * @return {Boolean} Whether the x/y coordinates are within this Rounded Rectangle
 */
PIXI.RoundedRectangle.prototype.contains = function (x, y) {
  if (this.width <= 0 || this.height <= 0) return false

  var x1 = this.x
  if (x >= x1 && x <= x1 + this.width) {
    var y1 = this.y

    if (y >= y1 && y <= y1 + this.height) {
      return true
    }
  }

  return false
}

// constructor
PIXI.RoundedRectangle.prototype.constructor = PIXI.RoundedRectangle

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Matrix class is now an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class Matrix
 * @constructor
 */
PIXI.Matrix = function (a, b, c, d, tx, ty) {
  /**
   * @property a
   * @type Number
   * @default 1
   */
  this.a = (a == undefined && 1) || a

  /**
   * @property b
   * @type Number
   * @default 0
   */
  this.b = b || 0

  /**
   * @property c
   * @type Number
   * @default 0
   */
  this.c = c || 0

  /**
   * @property d
   * @type Number
   * @default 1
   */
  this.d = (d == undefined && 1) || d

  /**
   * @property tx
   * @type Number
   * @default 0
   */
  this.tx = tx || 0

  /**
   * @property ty
   * @type Number
   * @default 0
   */
  this.ty = ty || 0
}

/**
 * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
 *
 * a = array[0]
 * b = array[1]
 * c = array[3]
 * d = array[4]
 * tx = array[2]
 * ty = array[5]
 *
 * @method fromArray
 * @param array {Array} The array that the matrix will be populated from.
 */
PIXI.Matrix.prototype.fromArray = function (array) {
  this.a = array[0]
  this.b = array[1]
  this.c = array[3]
  this.d = array[4]
  this.tx = array[2]
  this.ty = array[5]
}

/**
 * Creates an array from the current Matrix object.
 *
 * @method toArray
 * @param transpose {Boolean} Whether we need to transpose the matrix or not
 * @return {Array} the newly created array which contains the matrix
 */
PIXI.Matrix.prototype.toArray = function (transpose) {
  if (!this.array) this.array = new PIXI.Float32Array(9)
  var array = this.array

  if (transpose) {
    array[0] = this.a
    array[1] = this.b
    array[2] = 0
    array[3] = this.c
    array[4] = this.d
    array[5] = 0
    array[6] = this.tx
    array[7] = this.ty
    array[8] = 1
  } else {
    array[0] = this.a
    array[1] = this.c
    array[2] = this.tx
    array[3] = this.b
    array[4] = this.d
    array[5] = this.ty
    array[6] = 0
    array[7] = 0
    array[8] = 1
  }

  return array
}

/**
 * Get a new position with the current transformation applied.
 * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
 *
 * @method apply
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, transformed through this matrix
 */
PIXI.Matrix.prototype.apply = function (pos, newPos) {
  newPos = newPos || new PIXI.Point()

  newPos.x = this.a * pos.x + this.c * pos.y + this.tx
  newPos.y = this.b * pos.x + this.d * pos.y + this.ty

  return newPos
}

/**
 * Get a new position with the inverse of the current transformation applied.
 * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
 *
 * @method applyInverse
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, inverse-transformed through this matrix
 */
PIXI.Matrix.prototype.applyInverse = function (pos, newPos) {
  newPos = newPos || new PIXI.Point()

  var id = 1 / (this.a * this.d + this.c * -this.b)

  newPos.x =
    this.d * id * pos.x +
    -this.c * id * pos.y +
    (this.ty * this.c - this.tx * this.d) * id
  newPos.y =
    this.a * id * pos.y +
    -this.b * id * pos.x +
    (-this.ty * this.a + this.tx * this.b) * id

  return newPos
}

/**
 * Translates the matrix on the x and y.
 *
 * @method translate
 * @param {Number} x
 * @param {Number} y
 * @return {Matrix} This matrix. Good for chaining method calls.
 **/
PIXI.Matrix.prototype.translate = function (x, y) {
  this.tx += x
  this.ty += y

  return this
}

/**
 * Applies a scale transformation to the matrix.
 *
 * @method scale
 * @param {Number} x The amount to scale horizontally
 * @param {Number} y The amount to scale vertically
 * @return {Matrix} This matrix. Good for chaining method calls.
 **/
PIXI.Matrix.prototype.scale = function (x, y) {
  this.a *= x
  this.d *= y
  this.c *= x
  this.b *= y
  this.tx *= x
  this.ty *= y

  return this
}

/**
 * Applies a rotation transformation to the matrix.
 * @method rotate
 * @param {Number} angle The angle in radians.
 * @return {Matrix} This matrix. Good for chaining method calls.
 **/
PIXI.Matrix.prototype.rotate = function (angle) {
  var cos = Math.cos(angle)
  var sin = Math.sin(angle)

  var a1 = this.a
  var c1 = this.c
  var tx1 = this.tx

  this.a = a1 * cos - this.b * sin
  this.b = a1 * sin + this.b * cos
  this.c = c1 * cos - this.d * sin
  this.d = c1 * sin + this.d * cos
  this.tx = tx1 * cos - this.ty * sin
  this.ty = tx1 * sin + this.ty * cos

  return this
}

/**
 * Appends the given Matrix to this Matrix.
 *
 * @method append
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
PIXI.Matrix.prototype.append = function (matrix) {
  var a1 = this.a
  var b1 = this.b
  var c1 = this.c
  var d1 = this.d

  this.a = matrix.a * a1 + matrix.b * c1
  this.b = matrix.a * b1 + matrix.b * d1
  this.c = matrix.c * a1 + matrix.d * c1
  this.d = matrix.c * b1 + matrix.d * d1

  this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx
  this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty

  return this
}

/**
 * Resets this Matix to an identity (default) matrix.
 *
 * @method identity
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
PIXI.Matrix.prototype.identity = function () {
  this.a = 1
  this.b = 0
  this.c = 0
  this.d = 1
  this.tx = 0
  this.ty = 0

  return this
}

PIXI.identityMatrix = new PIXI.Matrix()

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class DisplayObject
 * @constructor
 */
PIXI.DisplayObject = function () {
  /**
   * The coordinate of the object relative to the local coordinates of the parent.
   *
   * @property position
   * @type Point
   */
  this.position = new PIXI.Point()

  /**
   * The scale factor of the object.
   *
   * @property scale
   * @type Point
   */
  this._scale = new PIXI.Point(1, 1)

  /**
   * The pivot point of the displayObject that it rotates around
   *
   * @property pivot
   * @type Point
   */
  this.pivot = new PIXI.Point(0, 0)

  /**
   * The rotation of the object in radians.
   *
   * @property rotation
   * @type Number
   */
  this._rotation = 0

  /**
   * The opacity of the object.
   *
   * @property alpha
   * @type Number
   */
  this._alpha = 1

  /**
   * The visibility of the object.
   *
   * @property visible
   * @type Boolean
   */
  this._visible = true

  /**
   * This is the defined area that will pick up mouse / touch events. It is null by default.
   * Setting it is a neat way of optimising the hitTest function that the interactionManager will use (as it will not need to hit test all the children)
   *
   * @property hitArea
   * @type Rectangle|Circle|Ellipse|Polygon
   */
  this.hitArea = null

  /**
   * This is used to indicate if the displayObject should display a mouse hand cursor on rollover
   *
   * @property buttonMode
   * @type Boolean
   */
  this.buttonMode = false

  /**
   * Can this object be rendered
   *
   * @property renderable
   * @type Boolean
   */
  this.renderable = false

  /**
   * [read-only] The display object container that contains this display object.
   *
   * @property parent
   * @type DisplayObjectContainer
   * @readOnly
   */
  this.parent = null

  /**
   * [read-only] The stage the display object is connected to, or undefined if it is not connected to the stage.
   *
   * @property stage
   * @type Stage
   * @readOnly
   */
  this.stage = null

  /**
   * [read-only] The multiplied alpha of the displayObject
   *
   * @property worldAlpha
   * @type Number
   * @readOnly
   */
  this.worldAlpha = 1

  /**
   * [read-only] Whether or not the object is interactive, do not toggle directly! use the `interactive` property
   *
   * @property _interactive
   * @type Boolean
   * @readOnly
   * @private
   */
  this._interactive = false

  /**
   * This is the cursor that will be used when the mouse is over this object. To enable this the element must have interaction = true and buttonMode = true
   *
   * @property defaultCursor
   * @type String
   *
   */
  this.defaultCursor = 'pointer'

  /**
   * [read-only] Current transform of the object based on world (parent) factors
   *
   * @property worldTransform
   * @type Matrix
   * @readOnly
   * @private
   */
  this.worldTransform = new PIXI.Matrix()

  /**
   * cached sin rotation and cos rotation
   *
   * @property _sr
   * @type Number
   * @private
   */
  this._sr = 0

  /**
   * cached sin rotation and cos rotation
   *
   * @property _cr
   * @type Number
   * @private
   */
  this._cr = 1

  this._worldScale = 1 //todo: my!

  /**
   * The original, cached bounds of the object
   *
   * @property _bounds
   * @type Rectangle
   * @private
   */
  this._bounds = new PIXI.Rectangle(0, 0, 1, 1)

  /**
   * The most up-to-date bounds of the object
   *
   * @property _currentBounds
   * @type Rectangle
   * @private
   */
  this._currentBounds = null

  /**
   * The original, cached mask of the object
   *
   * @property _currentBounds
   * @type Rectangle
   * @private
   */
  this._mask = null

  /**
   * Cached internal flag.
   *
   * @property _cacheAsBitmap
   * @type Boolean
   * @private
   */
  this._cacheAsBitmap = false

  /**
   * Cached internal flag.
   *
   * @property _cacheIsDirty
   * @type Boolean
   * @private
   */
  this._cacheIsDirty = false

  //Miro
  this.name = ''

  this.blendMode = PIXI.blendModes.NORMAL

  /**
   * Geometry was changed, need call 'updateTransform' to actualize transform matrix
   * @type {boolean}
   */
  this.dirtyGeom = true

  /**
   * Hack to move canvas w/o recalculating all matrices. Adds this delta to matrix of all its children recursively
   * Ignored if 'dirtyGeom' is set
   * @type {PIXI.Point}
   */
  this.movedBy = undefined

  this._autotestId = ''
}

// constructor
PIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject

/**
 * Indicates if the sprite will have touch and mouse interactivity. It is false by default
 *
 * @property interactive
 * @type Boolean
 * @default false
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'interactive', {
  get: function () {
    return this._interactive
  },
  set: function (value) {
    this._interactive = value

    // TODO more to be done here..
    // need to sort out a re-crawl!
    if (this.stage) this.stage.dirty = true
  },
})

/**
 * [read-only] Indicates if the sprite is globally visible.
 *
 * @property worldVisible
 * @type Boolean
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'worldVisible', {
  get: function () {
    var item = this

    do {
      if (!item.visible) return false
      item = item.parent
    } while (item)

    return true
  },
})

/**
 * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
 * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
 * To remove a mask, set this property to null.
 *
 * @property mask
 * @type Graphics
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'mask', {
  get: function () {
    return this._mask
  },
  set: function (value) {
    if (this._mask) this._mask.isMask = false
    this._mask = value
    if (this._mask) this._mask.isMask = true
  },
})

/**
 * Set if this display object is cached as a bitmap.
 * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects.
 * To remove simply set this property to 'null'
 * @property cacheAsBitmap
 * @type Boolean
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'cacheAsBitmap', {
  get: function () {
    return this._cacheAsBitmap
  },

  set: function (value) {
    if (this._cacheAsBitmap === value) return

    if (value) {
      this._generateCachedSprite()
    } else {
      this._destroyCachedSprite()
    }

    this._cacheAsBitmap = value
  },
})

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.DisplayObject.prototype.updateTransform = function () {
  // create some matrix refs for easy access
  var pt = this.parent.worldTransform
  var wt = this.worldTransform

  // temporary matrix variables
  var a, b, c, d, tx, ty

  // so if rotation is between 0 then we can simplify the multiplication process..
  if (this.rotation % PIXI.PI_2) {
    // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
    if (this.rotation !== this.rotationCache) {
      this.rotationCache = this.rotation
      this._sr = Math.sin(this.rotation)
      this._cr = Math.cos(this.rotation)
    }

    // get the matrix values of the displayobject based on its transform properties..
    a = this._cr * this.scale.x
    b = this._sr * this.scale.x
    c = -this._sr * this.scale.y
    d = this._cr * this.scale.y
    tx = this.position.x
    ty = this.position.y

    // check for pivot.. not often used so geared towards that fact!
    if (this.pivot.x || this.pivot.y) {
      tx -= this.pivot.x * a + this.pivot.y * c
      ty -= this.pivot.x * b + this.pivot.y * d
    }

    // concat the parent matrix with the objects transform.
    wt.a = a * pt.a + b * pt.c
    wt.b = a * pt.b + b * pt.d
    wt.c = c * pt.a + d * pt.c
    wt.d = c * pt.b + d * pt.d
    wt.tx = tx * pt.a + ty * pt.c + pt.tx
    wt.ty = tx * pt.b + ty * pt.d + pt.ty
  } else {
    // lets do the fast version as we know there is no rotation..
    a = this.scale.x
    d = this.scale.y

    tx = this.position.x - this.pivot.x * a
    ty = this.position.y - this.pivot.y * d

    wt.a = a * pt.a
    wt.b = a * pt.b
    wt.c = d * pt.c
    wt.d = d * pt.d
    wt.tx = tx * pt.a + ty * pt.c + pt.tx
    wt.ty = tx * pt.b + ty * pt.d + pt.ty
  }

  this._worldScale = this.parent._worldScale * this.scale.x

  // multiply the alphas..
  this.worldAlpha = this.alpha * this.parent.worldAlpha
}

// performance increase to avoid using call.. (10x faster)
PIXI.DisplayObject.prototype.displayObjectUpdateTransform =
  PIXI.DisplayObject.prototype.updateTransform

/**
 * Hack to move stage faster w/o updating all object matrices
 * @param position {Point}
 */
PIXI.DisplayObject.prototype.moveFaster = function (position) {
  PIXI.objectChanged(this)
  if (!this.dirtyGeom) {
    this.movedBy = new PIXI.Point(
      position.x * this.parent._worldScale - this.worldTransform.tx, //todo: can consider rotation (not used here)
      position.y * this.parent._worldScale - this.worldTransform.ty
    )
  }
  this.position = position
}

/**
 * Retrieves the bounds of the displayObject as a rectangle object
 *
 * @method getBounds
 * @param matrix {Matrix}
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.DisplayObject.prototype.getBounds = function (matrix) {
  matrix = matrix //just to get passed js hinting (and preserve inheritance)
  return PIXI.EmptyRectangle
}

/**
 * Retrieves the local bounds of the displayObject as a rectangle object
 *
 * @method getLocalBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.DisplayObject.prototype.getLocalBounds = function () {
  return this.getBounds(PIXI.identityMatrix) ///PIXI.EmptyRectangle();
}

/**
 * Sets the object's stage reference, the stage this object is connected to
 *
 * @method setStageReference
 * @param stage {Stage} the stage that the object will have as its current stage reference
 */
PIXI.DisplayObject.prototype.setStageReference = function (stage) {
  this.stage = stage
  if (this._interactive) this.stage.dirty = true
}

/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @method generateTexture
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @return {Texture} a texture of the graphics object
 */
PIXI.DisplayObject.prototype.generateTexture = function (
  resolution,
  scaleMode,
  renderer
) {
  var bounds = this.getLocalBounds()

  var renderTexture = new PIXI.RenderTexture(
    bounds.width | 0,
    bounds.height | 0,
    false,
    renderer,
    scaleMode,
    resolution
  )

  PIXI.DisplayObject._tempMatrix.identity()
  PIXI.DisplayObject._tempMatrix.tx = -bounds.x
  PIXI.DisplayObject._tempMatrix.ty = -bounds.y

  renderTexture.render(this, PIXI.DisplayObject._tempMatrix)

  return renderTexture
}

/**
 * Generates and updates the cached sprite for this object.
 *
 * @method updateCache
 */
PIXI.DisplayObject.prototype.updateCache = function () {
  this._generateCachedSprite()
}

/**
 * Calculates the global position of the display object
 *
 * @method toGlobal
 * @param position {Point} The world origin to calculate from
 * @return {Point} A point object representing the position of this object
 */
PIXI.DisplayObject.prototype.toGlobal = function (position) {
  this.displayObjectUpdateTransform()
  var position = this.worldTransform.apply(position)
  position.x /= PIXI.pixelRatio
  position.y /= PIXI.pixelRatio
  return position
}

/**
 * Calculates the local position of the display object relative to another point
 *
 * @method toLocal
 * @param position {Point} The world origin to calculate from
 * @param [from] {DisplayObject} The DisplayObject to calculate the global position from
 * @return {Point} A point object representing the position of this object
 */
PIXI.DisplayObject.prototype.toLocal = function (position, from) {
  //
  if (from) {
    position = from.toGlobal(position)
  }

  // don't need to u[date the lot
  this.displayObjectUpdateTransform()
  return this.worldTransform.applyInverse(position)
}

/**
 * Internal method.
 *
 * @method _renderCachedSprite
 * @param renderSession {Object} The render session
 * @private
 */
PIXI.DisplayObject.prototype._renderCachedSprite = function (renderSession) {
  this._cachedSprite.worldAlpha = this.worldAlpha

  var ratio = PIXI.pixelRatio
  var thisTf = this.worldTransform
  var spriteTf = this._cachedSprite.worldTransform
  spriteTf.a = thisTf.a / ratio
  spriteTf.b = thisTf.b / ratio
  spriteTf.c = thisTf.c / ratio
  spriteTf.d = thisTf.d / ratio
  spriteTf.tx = thisTf.tx
  spriteTf.ty = thisTf.ty

  PIXI.Sprite.prototype._renderContent.call(this._cachedSprite, renderSession)
}

/**
 * Internal method.
 *
 * @method _generateCachedSprite
 * @private
 */
PIXI.DisplayObject.prototype._generateCachedSprite = function () {
  this._cacheAsBitmap = false
  var bounds = this.getLocalBounds()
  var ratio = PIXI.pixelRatio
  var wt = (bounds.width * ratio) | 0
  var ht = (bounds.height * ratio) | 0

  if (!this._cachedSprite) {
    var renderTexture = new PIXI.RenderTexture(wt, ht) //, renderSession.renderer);

    this._cachedSprite = new PIXI.Sprite(renderTexture)
  } else {
    this._cachedSprite.texture.resize(wt, ht)
  }

  PIXI.DisplayObject._tempMatrix.identity()
  PIXI.DisplayObject._tempMatrix.translate(-bounds.x, -bounds.y)
  PIXI.DisplayObject._tempMatrix.scale(ratio, ratio)

  this._cachedSprite.texture.render(this, PIXI.DisplayObject._tempMatrix, true)

  this._cachedSprite.anchor.x = -(bounds.x / bounds.width)
  this._cachedSprite.anchor.y = -(bounds.y / bounds.height)

  this._cacheAsBitmap = true
}

/**
 * Destroys the cached sprite.
 *
 * @method _destroyCachedSprite
 * @private
 */
PIXI.DisplayObject.prototype._destroyCachedSprite = function () {
  if (!this._cachedSprite) return

  this._cachedSprite.texture.destroy(true)

  // TODO could be object pooled!
  this._cachedSprite = null
}

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @param renderSession {RenderSession}
 * @private
 */
PIXI.DisplayObject.prototype._renderCanvas = function (renderSession) {
  // OVERWRITE;
}

PIXI.DisplayObject.prototype._renderContent = function (renderSession) {
  // OVERWRITE;
}

PIXI.DisplayObject.prototype.setMask = function (includeAreas, excludeAreas) {
  PIXI.objectChanged(this)
  this.dirtyGeom = true

  if (this._mask) {
    PIXI.CanvasMaskManager.setMaskFlag(this._mask.all, undefined)
  }

  this._mask = null

  var hasIncludeAreas = includeAreas && includeAreas.length
  var hasExcludeAreas = excludeAreas && excludeAreas.length
  if (hasIncludeAreas || hasExcludeAreas) {
    this._mask = {all: []}

    if (hasIncludeAreas) {
      this._mask.all = this._mask.all.concat(includeAreas)
      this._mask.include = includeAreas
    }
    if (hasExcludeAreas) {
      this._mask.all = this._mask.all.concat(excludeAreas)
      this._mask.exclude = excludeAreas
    }

    PIXI.CanvasMaskManager.setMaskFlag(this._mask.all, this)
  }
}

PIXI.DisplayObject._tempMatrix = new PIXI.Matrix()

PIXI.DisplayObject.prototype.initEventDispatcher = function () {
  PIXI.EventTarget.call(this)
  this.interactive = true
  this.isEventTarget = true
}

PIXI.DisplayObject.prototype.setPivot = function (x, y) {
  PIXI.objectChanged(this)
  this.pivot.x = x
  this.pivot.y = y
  this.dirtyGeom = true
}

Object.defineProperty(PIXI.DisplayObject.prototype, 'scale', {
  get: function () {
    return this._scale
  },
  set: function (value) {
    PIXI.objectChanged(this)
    if (value.hasOwnProperty('x')) {
      this._scale.x = value.x
      this._scale.y = value.y
    } else {
      this._scale.x = this._scale.y = value
    }
    this.dirtyGeom = true
  },
})

Object.defineProperty(PIXI.DisplayObject.prototype, 'rotation', {
  get: function () {
    return this._rotation
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this._rotation = value
    this.dirtyGeom = true
  },
})

Object.defineProperty(PIXI.DisplayObject.prototype, 'alpha', {
  get: function () {
    return this._alpha
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this._alpha = value
    this.dirtyGeom = true
  },
})

Object.defineProperty(PIXI.DisplayObject.prototype, 'visible', {
  get: function () {
    return this._visible
  },
  set: function (value) {
    if (value == this._visible) {
      return
    }

    if (this.parent) {
      let ind = this.parent.children.indexOf(this)
      this.parent._visibleChildren[ind] = value ? this : undefined
    }

    this.dirtyGeom = true

    PIXI.objectChanged(this)
    this._visible = value
  },
})

/**
 * The position of the displayObject on the x axis relative to the local coordinates of the parent.
 *
 * @property x
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'x', {
  get: function () {
    return this.position.x
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.position.x = value
    this.dirtyGeom = true
  },
})

/**
 * The position of the displayObject on the y axis relative to the local coordinates of the parent.
 *
 * @property y
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObject.prototype, 'y', {
  get: function () {
    return this.position.y
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.position.y = value
    this.dirtyGeom = true
  },
})

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A DisplayObjectContainer represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 * @class DisplayObjectContainer
 * @extends DisplayObject
 * @constructor
 */
PIXI.DisplayObjectContainer = function () {
  PIXI.DisplayObject.call(this)

  /**
   * [read-only] The array of children of this container.
   *
   * @property children
   * @type Array(DisplayObject)
   * @readOnly
   */
  this.children = []

  /**
   * Array of [Child if visible | undefined if hidden] for faster iteration
   * A workaround for bug when accessing children's props (.visible) is slow in large trees
   */
  this._visibleChildren = []

  // fast access to update transform..

  //render own content, does not affect children
  this.ownContentVisible = true
}

// constructor
PIXI.DisplayObjectContainer.prototype = Object.create(
  PIXI.DisplayObject.prototype
)
PIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer

/**
 * The width of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObjectContainer.prototype, 'width', {
  get: function () {
    return this.scale.x * this.getLocalBounds().width
  },
  set: function (value) {
    var width = this.getLocalBounds().width

    if (width !== 0) {
      this.scale.x = value / width
    } else {
      this.scale.x = 1
    }

    this._width = value
  },
})

/**
 * The height of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.DisplayObjectContainer.prototype, 'height', {
  get: function () {
    return this.scale.y * this.getLocalBounds().height
  },
  set: function (value) {
    var height = this.getLocalBounds().height

    if (height !== 0) {
      this.scale.y = value / height
    } else {
      this.scale.y = 1
    }

    this._height = value
  },
})

/**
 * Adds a child to the container.
 *
 * @method addChild
 * @param child {DisplayObject} The DisplayObject to add to the container
 * @return {DisplayObject} The child that was added.
 */
PIXI.DisplayObjectContainer.prototype.addChild = function (child) {
  if (!this.children.includes(child)) {
    this.addChildAt(child, this.children.length)
  }
}

/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @method addChildAt
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
PIXI.DisplayObjectContainer.prototype.addChildAt = function (child, index) {
  if (index >= 0 && index <= this.children.length) {
    PIXI.objectChanged(this)

    if (child.parent) {
      child.parent.removeChild(child)
    }

    child.parent = this

    child.dirtyGeom = true

    this._visibleChildren.splice(index, 0, child._visible ? child : undefined)
    this.children.splice(index, 0, child)

    if (this.stage) child.setStageReference(this.stage)

    return child
  } else {
    throw new Error(
      child +
        'addChildAt: The index ' +
        index +
        ' supplied is out of bounds ' +
        this.children.length
    )
  }
}

/**
 * Swaps the position of 2 Display Objects within this container.
 *
 * @method swapChildren
 * @param child {DisplayObject}
 * @param child2 {DisplayObject}
 */
PIXI.DisplayObjectContainer.prototype.swapChildren = function (child, child2) {
  if (child === child2) {
    return
  }
  PIXI.objectChanged(this)
  var index1 = this.getChildIndex(child)
  var index2 = this.getChildIndex(child2)

  if (index1 < 0 || index2 < 0) {
    throw new Error(
      'swapChildren: Both the supplied DisplayObjects must be a child of the caller.'
    )
  }

  this.children[index1] = child2
  this.children[index2] = child
}

/**
 * Returns the index position of a child DisplayObject instance
 *
 * @method getChildIndex
 * @param child {DisplayObject} The DisplayObject instance to identify
 * @return {Number} The index position of the child display object to identify
 */
PIXI.DisplayObjectContainer.prototype.getChildIndex = function (child) {
  var index = this.children.indexOf(child)
  if (index === -1) {
    throw new Error('The supplied DisplayObject must be a child of the caller')
  }
  return index
}

/**
 * Changes the position of an existing child in the display object container
 *
 * @method setChildIndex
 * @param child {DisplayObject} The child DisplayObject instance for which you want to change the index number
 * @param index {Number} The resulting index number for the child display object
 */
PIXI.DisplayObjectContainer.prototype.setChildIndex = function (child, index) {
  if (index < 0 || index >= this.children.length) {
    throw new Error('The supplied index is out of bounds')
  }
  PIXI.objectChanged(this)
  var currentIndex = this.getChildIndex(child)
  this.children.splice(currentIndex, 1) //remove from old position
  this.children.splice(index, 0, child) //add at new position
}

/**
 * Returns the child at the specified index
 *
 * @method getChildAt
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child at the given index, if any.
 */
PIXI.DisplayObjectContainer.prototype.getChildAt = function (index) {
  if (index < 0 || index >= this.children.length) {
    throw new Error(
      'getChildAt: Supplied index ' +
        index +
        ' does not exist in the child list, or the supplied DisplayObject must be a child of the caller'
    )
  }
  return this.children[index]
}

/**
 * Removes a child from the container.
 *
 * @method removeChild
 * @param child {DisplayObject} The DisplayObject to remove
 * @return {DisplayObject} The child that was removed.
 */
PIXI.DisplayObjectContainer.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child)
  if (index === -1) return

  return this.removeChildAt(index)
}

/**
 * Removes a child from the specified index position.
 *
 * @method removeChildAt
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
PIXI.DisplayObjectContainer.prototype.removeChildAt = function (index) {
  PIXI.objectChanged(this)
  var child = this.getChildAt(index)
  if (this.stage) child.removeStageReference()

  child.parent = undefined
  this._visibleChildren.splice(index, 1)
  this.children.splice(index, 1)
  return child
}

/**
 * Removes all children from this container that are within the begin and end indexes.
 *
 * @method removeChildren
 * @param beginIndex {Number} The beginning position. Default value is 0.
 * @param endIndex {Number} The ending position. Default value is size of the container.
 */
PIXI.DisplayObjectContainer.prototype.removeChildren = function (
  beginIndex,
  endIndex
) {
  var begin = beginIndex || 0
  var end = typeof endIndex === 'number' ? endIndex : this.children.length
  var range = end - begin

  if (range > 0 && range <= end) {
    PIXI.objectChanged(this)

    this._visibleChildren.splice(begin, range)
    var removed = this.children.splice(begin, range)
    for (var i = 0; i < removed.length; i++) {
      var child = removed[i]
      if (this.stage) child.removeStageReference()
      child.parent = undefined
    }
    return removed
  } else if (range === 0 && this.children.length === 0) {
    return []
  } else {
    throw new Error(
      'removeChildren: Range Error, numeric values are outside the acceptable range'
    )
  }
}

/*
 * Updates the transform on all children of this container for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.DisplayObjectContainer.prototype.updateTransform = function () {
  if (!this.visible) return

  this.displayObjectUpdateTransform()

  if (this._mask) {
    PIXI.CanvasMaskManager.updateMaskTransform(this)
  }

  if (this._cacheAsBitmap) return

  for (var i = 0, j = this._visibleChildren.length; i < j; i++) {
    let child = this._visibleChildren[i]
    if (child) {
      child.updateTransform()
    }
  }
}

// performance increase to avoid using call.. (10x faster)
PIXI.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform =
  PIXI.DisplayObjectContainer.prototype.updateTransform

PIXI.DisplayObjectContainer.prototype.findObject = function (func) {
  for (let i = 0, len = this._visibleChildren.length; i < len; i++) {
    const child = this._visibleChildren[i]
    if (child) {
      if (func(child)) {
        return child
      }

      const found = child.findObject(func)
      if (found) {
        return found
      }
    }
  }
  return undefined
}

PIXI.DisplayObjectContainer.prototype.displayObjectContainerFindObject =
  PIXI.DisplayObjectContainer.prototype.findObject

/**
 * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.
 *
 * @method getBounds
 * @return {Rectangle} The rectangular bounding area
 */
PIXI.DisplayObjectContainer.prototype.getBounds = function () {
  if (this.children.length === 0) return PIXI.EmptyRectangle

  // TODO the bounds have already been calculated this render session so return what we have

  var minX = Infinity
  var minY = Infinity

  var maxX = -Infinity
  var maxY = -Infinity

  var childBounds
  var childMaxX
  var childMaxY

  var childVisible = false

  for (var i = 0, j = this.children.length; i < j; i++) {
    var child = this.children[i]

    if (!child.visible) continue

    childVisible = true

    childBounds = this.children[i].getBounds()

    minX = minX < childBounds.x ? minX : childBounds.x
    minY = minY < childBounds.y ? minY : childBounds.y

    childMaxX = childBounds.width + childBounds.x
    childMaxY = childBounds.height + childBounds.y

    maxX = maxX > childMaxX ? maxX : childMaxX
    maxY = maxY > childMaxY ? maxY : childMaxY
  }

  if (!childVisible) return PIXI.EmptyRectangle

  var bounds = this._bounds

  bounds.x = minX
  bounds.y = minY
  bounds.width = maxX - minX
  bounds.height = maxY - minY

  // TODO: store a reference so that if this function gets called again in the render cycle we do not have to recalculate
  //this._currentBounds = bounds;

  return bounds
}

/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
 *
 * @method getLocalBounds
 * @return {Rectangle} The rectangular bounding area
 */
PIXI.DisplayObjectContainer.prototype.getLocalBounds = function () {
  var matrixCache = this.worldTransform

  this.worldTransform = PIXI.identityMatrix

  for (var i = 0, j = this.children.length; i < j; i++) {
    this.children[i].updateTransform()
  }

  var bounds = this.getBounds()

  this.worldTransform = matrixCache
  this.dirtyGeom = true

  return bounds
}

/**
 * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.
 *
 * @method setStageReference
 * @param stage {Stage} the stage that the container will have as its current stage reference
 */
PIXI.DisplayObjectContainer.prototype.setStageReference = function (stage) {
  this.stage = stage
  if (this._interactive) this.stage.dirty = true

  for (var i = 0, j = this.children.length; i < j; i++) {
    var child = this.children[i]
    child.setStageReference(stage)
  }
}

/**
 * Removes the current stage reference from the container and all of its children.
 *
 * @method removeStageReference
 */
PIXI.DisplayObjectContainer.prototype.removeStageReference = function () {
  for (var i = 0, j = this.children.length; i < j; i++) {
    var child = this.children[i]
    child.removeStageReference()
  }

  if (this._interactive) this.stage.dirty = true

  this.stage = null
}

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @param renderSession {RenderSession}
 * @private
 */
PIXI.DisplayObjectContainer.prototype._renderCanvas = function (
  renderSession,
  needUpdateTransform,
  moveDelta
) {
  needUpdateTransform = needUpdateTransform || this.dirtyGeom
  moveDelta = moveDelta || this.movedBy // if support multi-level moves, need append to previous, not reassign
  this.movedBy = undefined
  this.dirtyGeom = false

  if (needUpdateTransform) {
    this.displayObjectUpdateTransform()
  } else if (moveDelta) {
    this.worldTransform.tx += moveDelta.x
    this.worldTransform.ty += moveDelta.y
  }

  if (this._cacheAsBitmap) {
    if (this.dirty || this.cachedSpriteDirty) {
      // only for graphics. or not?
      this._generateCachedSprite()
      this.updateCachedSpriteTexture()
      this.cachedSpriteDirty = false
      this.dirty = false
    }

    this._renderCachedSprite(renderSession)
    return
  }

  if (this.blendMode !== renderSession.currentBlendMode) {
    renderSession.currentBlendMode = this.blendMode
    renderSession.context.globalCompositeOperation =
      PIXI.blendModesCanvas[renderSession.currentBlendMode]
  }

  if (this._mask) {
    if (needUpdateTransform) {
      PIXI.CanvasMaskManager.updateMaskTransform(this)
    } else if (moveDelta) {
      PIXI.CanvasMaskManager.appendDisplacement(this, moveDelta.x, moveDelta.y)
    }

    renderSession.maskManager.pushMask(this._mask, renderSession)
  }

  if (this.ownContentVisible) {
    this._renderContent(renderSession)
  }

  for (var i = 0, j = this._visibleChildren.length; i < j; i++) {
    let child = this._visibleChildren[i]
    if (child) {
      child._renderCanvas(renderSession, needUpdateTransform, moveDelta)
    }
  }

  if (this._mask) {
    renderSession.maskManager.popMask(renderSession)
  }
}

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * @class Sprite
 * @extends DisplayObjectContainer
 * @constructor
 * @param texture {Texture} The texture for this sprite
 *
 * A sprite can be created directly from an image like this :
 * var sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * yourStage.addChild(sprite);
 * then obviously don't forget to add it to the stage you have already created
 */
PIXI.Sprite = function (texture) {
  PIXI.DisplayObjectContainer.call(this)

  /**
   * The anchor sets the origin point of the texture.
   * The default is 0,0 this means the texture's origin is the top left
   * Setting than anchor to 0.5,0.5 means the textures origin is centered
   * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner
   *
   * @property anchor
   * @type Point
   */
  this.anchor = new PIXI.Point()

  /**
   * The texture that the sprite is using
   *
   * @property texture
   * @type Texture
   */
  this.texture = PIXI.Texture.emptyTexture

  /**
   * The width of the sprite (this is initially set by the texture)
   *
   * @property _width
   * @type Number
   * @private
   */
  this._width = 0

  /**
   * The height of the sprite (this is initially set by the texture)
   *
   * @property _height
   * @type Number
   * @private
   */
  this._height = 0

  this.onTextureUpdateWrapper = this.onTextureUpdate.bind(this)
  if (texture) {
    this.setTexture(texture)
  }

  this.renderable = true

  this.roundPixels = false
}

// constructor
PIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype)
PIXI.Sprite.prototype.constructor = PIXI.Sprite

/**
 * The width of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.Sprite.prototype, 'width', {
  get: function () {
    return this.scale.x * this.texture.frame.width
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.scale.x = value / this.texture.frame.width
    this._width = value
    this.dirtyGeom = true
  },
})

/**
 * The height of the sprite, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.Sprite.prototype, 'height', {
  get: function () {
    return this.scale.y * this.texture.frame.height
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.scale.y = value / this.texture.frame.height
    this._height = value
    this.dirtyGeom = true
  },
})

PIXI.Sprite.prototype.setAnchor = function (x, y) {
  PIXI.objectChanged(this)
  this.anchor.x = x
  this.anchor.y = y
}

/**
 * Sets the texture of the sprite
 *
 * @method setTexture
 * @param texture {Texture} The PIXI texture that is displayed by the sprite
 */
PIXI.Sprite.prototype.setTexture = function (texture) {
  PIXI.objectChanged(this)
  this.texture = texture

  if (this.texture.baseTexture.hasLoaded) {
    this.onTextureUpdate()
  } else if (this.texture !== PIXI.Texture.emptyTexture) {
    this.texture.addEventListener('update', this.onTextureUpdateWrapper)
  }
}

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @method onTextureUpdate
 * @param event
 * @private
 */
PIXI.Sprite.prototype.onTextureUpdate = function () {
  this.texture.removeEventListener('update', this.onTextureUpdateWrapper)

  PIXI.objectChanged(this)
  // so if _width is 0 then width was not set..
  if (this._width) this.scale.x = this._width / this.texture.frame.width
  if (this._height) this.scale.y = this._height / this.texture.frame.height
  this.dirtyGeom = true

  //this.updateFrame = true;
}

/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @method getBounds
 * @param matrix {Matrix} the transformation matrix of the sprite
 * @return {Rectangle} the framing rectangle
 */
PIXI.Sprite.prototype.getBounds = function (matrix) {
  var width = this.texture.frame.width
  var height = this.texture.frame.height

  var w0 = width * (1 - this.anchor.x)
  var w1 = width * -this.anchor.x

  var h0 = height * (1 - this.anchor.y)
  var h1 = height * -this.anchor.y

  var worldTransform = matrix || this.worldTransform

  var a = worldTransform.a
  var b = worldTransform.b
  var c = worldTransform.c
  var d = worldTransform.d
  var tx = worldTransform.tx
  var ty = worldTransform.ty

  var maxX = -Infinity
  var maxY = -Infinity

  var minX = Infinity
  var minY = Infinity

  if (b === 0 && c === 0) {
    // scale may be negative!
    if (a < 0) a *= -1
    if (d < 0) d *= -1

    // this means there is no rotation going on right? RIGHT?
    // if thats the case then we can avoid checking the bound values! yay
    minX = a * w1 + tx
    maxX = a * w0 + tx
    minY = d * h1 + ty
    maxY = d * h0 + ty
  } else {
    var x1 = a * w1 + c * h1 + tx
    var y1 = d * h1 + b * w1 + ty

    var x2 = a * w0 + c * h1 + tx
    var y2 = d * h1 + b * w0 + ty

    var x3 = a * w0 + c * h0 + tx
    var y3 = d * h0 + b * w0 + ty

    var x4 = a * w1 + c * h0 + tx
    var y4 = d * h0 + b * w1 + ty

    minX = x1 < minX ? x1 : minX
    minX = x2 < minX ? x2 : minX
    minX = x3 < minX ? x3 : minX
    minX = x4 < minX ? x4 : minX

    minY = y1 < minY ? y1 : minY
    minY = y2 < minY ? y2 : minY
    minY = y3 < minY ? y3 : minY
    minY = y4 < minY ? y4 : minY

    maxX = x1 > maxX ? x1 : maxX
    maxX = x2 > maxX ? x2 : maxX
    maxX = x3 > maxX ? x3 : maxX
    maxX = x4 > maxX ? x4 : maxX

    maxY = y1 > maxY ? y1 : maxY
    maxY = y2 > maxY ? y2 : maxY
    maxY = y3 > maxY ? y3 : maxY
    maxY = y4 > maxY ? y4 : maxY
  }

  var bounds = this._bounds

  bounds.x = minX
  bounds.width = maxX - minX

  bounds.y = minY
  bounds.height = maxY - minY

  // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
  this._currentBounds = bounds

  return bounds
}

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @param renderSession {RenderSession}
 * @private
 */
PIXI.Sprite.prototype._renderContent = function (renderSession) {
  //  Ignore null sources
  if (!this.texture.valid) {
    return
  }

  renderSession.context.globalAlpha = this.worldAlpha

  //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
  if (
    renderSession.smoothProperty &&
    renderSession.scaleMode !== this.texture.baseTexture.scaleMode
  ) {
    renderSession.scaleMode = this.texture.baseTexture.scaleMode
    renderSession.context[renderSession.smoothProperty] =
      renderSession.scaleMode === PIXI.scaleModes.LINEAR
  }

  //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
  var dx = this.texture.trim
    ? this.texture.trim.x - this.anchor.x * this.texture.trim.width
    : this.anchor.x * -this.texture.frame.width
  var dy = this.texture.trim
    ? this.texture.trim.y - this.anchor.y * this.texture.trim.height
    : this.anchor.y * -this.texture.frame.height

  var tx = this.worldTransform.tx
  var ty = this.worldTransform.ty
  if (renderSession.roundPixels || this.roundPixels) {
    //  Allow for pixel rounding
    tx |= 0
    ty |= 0
    dx |= 0
    dy |= 0
  }

  renderSession.context.setTransform(
    this.worldTransform.a,
    this.worldTransform.b,
    this.worldTransform.c,
    this.worldTransform.d,
    tx,
    ty
  )

  let crop = this.texture.crop

  renderSession.context.drawImage(
    this.texture.baseTexture.source,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    dx,
    dy,
    crop.width,
    crop.height
  )

  PIXI._drawImageCount++
  if (PIXI._drawImageCount >= PIXI.MAX_SERIAL_DRAW_IMAGE) {
    PIXI._drawImageCount = 0

    renderSession.context.fillRect(0, 0, 0.01, 0.01)
  }
}

// some helper functions..

/**
 *
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @method fromFrame
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
 */
PIXI.Sprite.fromFrame = function (frameId) {
  var texture = PIXI.TextureCache[frameId]
  if (!texture)
    throw new Error(
      'The frameId "' + frameId + '" does not exist in the texture cache' + this
    )
  return new PIXI.Sprite(texture)
}

/**
 *
 * Helper function that creates a sprite that will contain a texture based on an image url
 * If the image is not in the texture cache it will be loaded
 *
 * @method fromImage
 * @static
 * @param imageId {String} The image url of the texture
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id
 */
PIXI.Sprite.fromImage = function (imageId, crossorigin, scaleMode) {
  var texture = PIXI.Texture.fromImage(imageId, crossorigin, scaleMode)
  return new PIXI.Sprite(texture)
}

/**
 * A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string,
 * or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *
 * @class Text
 * @extends Sprite
 * @constructor
 * @param text {String} The copy that you would like the text to display
 * @param [style] {Object} The style parameters
 * @param [style.font] {String} default 'bold 20px Arial' The style and size of the font
 * @param [style.fill='black'] {String|Number} A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke] {String|Number} A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {Number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {Number} The width at which text will wrap, it needs wordWrap to be set to true
 * @param [style.dropShadow=false] {Boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {String} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {Number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {Number} Set a distance of the drop shadow
 */
PIXI.Text = function (text, style) {
  /**
   * The canvas element that everything is drawn to
   *
   * @property canvas
   * @type HTMLCanvasElement
   */
  this.canvas = document.createElement('canvas')

  /**
   * The canvas 2d context that everything is drawn with
   * @property context
   * @type HTMLCanvasElement
   */
  this.context = this.canvas.getContext('2d')

  /**
   * The resolution of the canvas.
   * @property resolution
   * @type Number
   */
  this.resolution = 1

  PIXI.Sprite.call(this, PIXI.Texture.fromCanvas(this.canvas))

  this.setText(text)
  this.setStyle(style)
}

// constructor
PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype)
PIXI.Text.prototype.constructor = PIXI.Text

/**
 * The width of the Text, setting this will actually modify the scale to achieve the value set
 *
 * @property width
 * @type Number
 */
Object.defineProperty(PIXI.Text.prototype, 'width', {
  get: function () {
    if (this.dirty) {
      this.updateText()
      this.dirty = false
    }

    return this.scale.x * this.texture.frame.width
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.scale.x = value / this.texture.frame.width
    this._width = value
  },
})

/**
 * The height of the Text, setting this will actually modify the scale to achieve the value set
 *
 * @property height
 * @type Number
 */
Object.defineProperty(PIXI.Text.prototype, 'height', {
  get: function () {
    if (this.dirty) {
      this.updateText()
      this.dirty = false
    }

    return this.scale.y * this.texture.frame.height
  },
  set: function (value) {
    PIXI.objectChanged(this)
    this.scale.y = value / this.texture.frame.height
    this._height = value
  },
})

/**
 * Set the style of the text
 *
 * @method setStyle
 * @param [style] {Object} The style parameters
 * @param [style.font='bold 20pt Arial'] {String} The style and size of the font
 * @param [style.fill='black'] {Object} A canvas fillstyle that will be used on the text eg 'red', '#00FF00'
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke='black'] {String} A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {Number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {Number} The width at which text will wrap
 * @param [style.dropShadow=false] {Boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {String} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {Number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {Number} Set a distance of the drop shadow
 */
PIXI.Text.prototype.setStyle = function (style) {
  PIXI.objectChanged(this)
  style = style || {}
  style.font = style.font || 'bold 20pt Arial'
  style.fill = style.fill || 'black'
  style.align = style.align || 'left'
  style.stroke = style.stroke || 'black' //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
  style.strokeThickness = style.strokeThickness || 0
  style.wordWrap = style.wordWrap || false
  style.wordWrapWidth = style.wordWrapWidth || 100

  style.dropShadow = style.dropShadow || false
  style.dropShadowAngle = style.dropShadowAngle || Math.PI / 6
  style.dropShadowDistance = style.dropShadowDistance || 4
  style.dropShadowColor = style.dropShadowColor || 'black'

  this.style = style
  this.dirty = true
}

/**
 * Set the copy for the text object. To split a line you can use '\n'.
 *
 * @method setText
 * @param text {String} The copy that you would like the text to display
 */
PIXI.Text.prototype.setText = function (text) {
  PIXI.objectChanged(this)
  this.text = text.toString() || ' '
  this.dirty = true
}

/**
 * Renders text and updates it when needed
 *
 * @method updateText
 * @private
 */
PIXI.Text.prototype.updateText = function () {
  this.texture.baseTexture.resolution = this.resolution

  this.context.font = this.style.font

  var outputText = this.text

  // word wrap
  // preserve original text
  if (this.style.wordWrap) outputText = this.wordWrap(this.text)

  //split text into lines
  var lines = outputText.split(/(?:\r\n|\r|\n)/)

  //calculate text width
  var lineWidths = []
  var maxLineWidth = 0
  var fontProperties = this.determineFontProperties(this.style.font)
  for (var i = 0; i < lines.length; i++) {
    var lineWidth = this.context.measureText(lines[i]).width
    lineWidths[i] = lineWidth
    maxLineWidth = Math.max(maxLineWidth, lineWidth)
  }

  var width = maxLineWidth + this.style.strokeThickness
  if (this.style.dropShadow) width += this.style.dropShadowDistance

  this.canvas.width = (width + this.context.lineWidth) * this.resolution

  //calculate text height
  var lineHeight = fontProperties.fontSize + this.style.strokeThickness

  var height = lineHeight * lines.length
  if (this.style.dropShadow) height += this.style.dropShadowDistance

  this.canvas.height = height * this.resolution

  this.context.scale(this.resolution, this.resolution)

  if (navigator.isCocoonJS)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

  // used for debugging..
  //this.context.fillStyle ="#FF0000"
  //this.context.fillRect(0, 0, this.canvas.width,this.canvas.height);

  this.context.font = this.style.font
  this.context.strokeStyle = this.style.stroke
  this.context.lineWidth = this.style.strokeThickness
  this.context.textBaseline = 'alphabetic'
  //this.context.lineJoin = 'round';

  var linePositionX
  var linePositionY

  if (this.style.dropShadow) {
    this.context.fillStyle = this.style.dropShadowColor

    var xShadowOffset =
      Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance
    var yShadowOffset =
      Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance

    for (i = 0; i < lines.length; i++) {
      linePositionX = this.style.strokeThickness / 2
      linePositionY =
        this.style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent

      if (this.style.align === 'right') {
        linePositionX += maxLineWidth - lineWidths[i]
      } else if (this.style.align === 'center') {
        linePositionX += (maxLineWidth - lineWidths[i]) / 2
      }

      if (this.style.fill) {
        this.context.fillText(
          lines[i],
          linePositionX + xShadowOffset,
          linePositionY + yShadowOffset
        )
      }

      //  if(dropShadow)
    }
  }

  //set canvas text styles
  this.context.fillStyle = this.style.fill

  //draw lines line by line
  for (i = 0; i < lines.length; i++) {
    linePositionX = this.style.strokeThickness / 2
    linePositionY =
      this.style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent

    if (this.style.align === 'right') {
      linePositionX += maxLineWidth - lineWidths[i]
    } else if (this.style.align === 'center') {
      linePositionX += (maxLineWidth - lineWidths[i]) / 2
    }

    if (this.style.stroke && this.style.strokeThickness) {
      this.context.strokeText(lines[i], linePositionX, linePositionY)
    }

    if (this.style.fill) {
      this.context.fillText(lines[i], linePositionX, linePositionY)
    }

    //  if(dropShadow)
  }

  this.updateTexture()
}

/**
 * Updates texture size based on canvas size
 *
 * @method updateTexture
 * @private
 */
PIXI.Text.prototype.updateTexture = function () {
  this.texture.baseTexture.width = this.canvas.width
  this.texture.baseTexture.height = this.canvas.height
  this.texture.crop.width = this.texture.frame.width = this.canvas.width
  this.texture.crop.height = this.texture.frame.height = this.canvas.height

  this._width = this.canvas.width
  this._height = this.canvas.height
}

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @param renderSession {RenderSession}
 * @private
 */
PIXI.Text.prototype._renderContent = function (renderSession) {
  if (this.dirty) {
    this.resolution = renderSession.resolution

    this.updateText()
    this.dirty = false
  }

  PIXI.Sprite.prototype._renderContent.call(this, renderSession)
}

/**
 * Calculates the ascent, descent and fontSize of a given fontStyle
 *
 * @method determineFontProperties
 * @param fontStyle {Object}
 * @private
 */
PIXI.Text.prototype.determineFontProperties = function (fontStyle) {
  var properties = PIXI.Text.fontPropertiesCache[fontStyle]

  if (!properties) {
    properties = {}

    var canvas = PIXI.Text.fontPropertiesCanvas
    var context = PIXI.Text.fontPropertiesContext

    context.font = fontStyle

    var width = Math.ceil(context.measureText('|Mq').width)
    var baseline = Math.ceil(context.measureText('M').width)
    var height = 2 * baseline

    baseline = (baseline * 1.4) | 0

    canvas.width = width
    canvas.height = height

    context.fillStyle = '#f00'
    context.fillRect(0, 0, width, height)

    context.font = fontStyle

    context.textBaseline = 'alphabetic'
    context.fillStyle = '#000'
    context.fillText('|MÉq', 0, baseline)

    var imagedata = context.getImageData(0, 0, width, height).data
    var pixels = imagedata.length
    var line = width * 4

    var i, j

    var idx = 0
    var stop = false

    // ascent. scan from top to bottom until we find a non red pixel
    for (i = 0; i < baseline; i++) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true
          break
        }
      }
      if (!stop) {
        idx += line
      } else {
        break
      }
    }

    properties.ascent = baseline - i

    idx = pixels - line
    stop = false

    // descent. scan from bottom to top until we find a non red pixel
    for (i = height; i > baseline; i--) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true
          break
        }
      }
      if (!stop) {
        idx -= line
      } else {
        break
      }
    }

    properties.descent = i - baseline
    //TODO might need a tweak. kind of a temp fix!
    properties.descent += 6
    properties.fontSize = properties.ascent + properties.descent

    PIXI.Text.fontPropertiesCache[fontStyle] = properties
  }

  return properties
}

/**
 * Applies newlines to a string to have it optimally fit into the horizontal
 * bounds set by the Text object's wordWrapWidth property.
 *
 * @method wordWrap
 * @param text {String}
 * @private
 */
PIXI.Text.prototype.wordWrap = function (text) {
  // Greedy wrapping algorithm that will wrap words as the line grows longer
  // than its horizontal bounds.
  var result = ''
  var lines = text.split('\n')
  for (var i = 0; i < lines.length; i++) {
    var spaceLeft = this.style.wordWrapWidth
    var words = lines[i].split(' ')
    for (var j = 0; j < words.length; j++) {
      var wordWidth = this.context.measureText(words[j]).width
      var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width
      if (j === 0 || wordWidthWithSpace > spaceLeft) {
        // Skip printing the newline if it's the first word of the line that is
        // greater than the word wrap width.
        if (j > 0) {
          result += '\n'
        }
        result += words[j]
        spaceLeft = this.style.wordWrapWidth - wordWidth
      } else {
        spaceLeft -= wordWidthWithSpace
        result += ' ' + words[j]
      }
    }

    if (i < lines.length - 1) {
      result += '\n'
    }
  }
  return result
}

/**
 * Returns the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @method getBounds
 * @param matrix {Matrix} the transformation matrix of the Text
 * @return {Rectangle} the framing rectangle
 */
PIXI.Text.prototype.getBounds = function (matrix) {
  if (this.dirty) {
    this.updateText()
    this.dirty = false
  }

  return PIXI.Sprite.prototype.getBounds.call(this, matrix)
}

/**
 * Destroys this text object.
 *
 * @method destroy
 * @param destroyBaseTexture {Boolean} whether to destroy the base texture as well
 */
PIXI.Text.prototype.destroy = function (destroyBaseTexture) {
  // make sure to reset the the context and canvas.. dont want this hanging around in memory!
  this.context = null
  this.canvas = null

  this.texture.destroy(
    destroyBaseTexture === undefined ? true : destroyBaseTexture
  )
}

PIXI.Text.fontPropertiesCache = {}
PIXI.Text.fontPropertiesCanvas = document.createElement('canvas')
PIXI.Text.fontPropertiesContext = PIXI.Text.fontPropertiesCanvas.getContext(
  '2d'
)

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * Holds all information related to an Interaction event
 *
 * @class InteractionData
 * @constructor
 */
PIXI.InteractionData = function () {
  /**
   * This point stores the global coords of where the touch/mouse event happened
   *
   * @property global
   * @type Point
   */
  this.global = new PIXI.Point()

  /**
   * The target Sprite that was interacted with
   *
   * @property target
   * @type Sprite
   */
  this.target = null

  /**
   * When passed to an event handler, this will be the original DOM Event that was captured
   *
   * @property originalEvent
   * @type Event
   */
  this.originalEvent = null
}

// constructor
PIXI.InteractionData.prototype.constructor = PIXI.InteractionData

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The interaction manager deals with mouse and touch events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * @class InteractionManager
 * @constructor
 * @param stage {Stage} The stage to handle interactions
 */
PIXI.InteractionManager = function (stage) {
  /**
   * A reference to the stage
   *
   * @property stage
   * @type Stage
   */
  this.stage = stage

  /**
   * The mouse data
   *
   * @property mouse
   * @type InteractionData
   */
  this.mouse = new PIXI.InteractionData()

  /**
   * An object that stores current touches (InteractionData) by id reference
   *
   * @property touches
   * @type Object
   */
  this.touches = {}

  /**
   * @property tempPoint
   * @type Point
   * @private
   */
  this.tempPoint = new PIXI.Point()

  /**
   * @property mouseoverEnabled
   * @type Boolean
   * @default
   */
  this.mouseoverEnabled = true

  /**
   * Tiny little interactiveData pool !
   *
   * @property pool
   * @type Array
   */
  this.pool = []

  /**
   * An array containing all the iterative items from the our interactive tree
   * @property interactiveItems
   * @type Array
   * @private
   */
  this.interactiveItems = []

  /**
   * Our canvas
   * @property interactionDOMElement
   * @type HTMLCanvasElement
   * @private
   */
  this.interactionDOMElement = null

  //this will make it so that you don't have to call bind all the time

  /**
   * @property last
   * @type Number
   */
  this.last = 0

  /**
   * The css style of the cursor that is being used
   * @property currentCursorStyle
   * @type String
   */
  this.currentCursorStyle = 'inherit'

  /**
   * Is set to true when the mouse is moved out of the canvas
   * @property mouseOut
   * @type Boolean
   */
  this.mouseOut = false

  /**
   * @property resolution
   * @type Number
   */
  this.resolution = 1

  // used for hit testing
  this._tempPoint = new PIXI.Point()
}

// constructor
PIXI.InteractionManager.prototype.constructor = PIXI.InteractionManager

/**
 * Collects an interactive sprite recursively to have their interactions managed
 *
 * @method collectInteractiveSprite
 * @param displayObject {DisplayObject} the displayObject to collect
 * @param iParent {DisplayObject} the display object's parent
 * @private
 */
PIXI.InteractionManager.prototype.collectInteractiveSprite = function (
  displayObject,
  iParent
) {
  var children = displayObject.children
  var length = children.length

  // make an interaction tree... {item.__interactiveParent}
  for (var i = 0, l = length; i < l; i++) {
    var child = children[i]

    // push all interactive bits
    if (child._interactive) {
      iParent.interactiveChildren = true
      child.__iParent = iParent
      this.interactiveItems.push(child)

      if (child.children.length > 0) {
        this.collectInteractiveSprite(child, child)
      }
    } else {
      child.__iParent = null

      if (child.children.length > 0) {
        this.collectInteractiveSprite(child, iParent)
      }
    }
  }
}

/**
 * Sets the target for event delegation
 *
 * @method setTarget
 * @param target {WebGLRenderer|CanvasRenderer} the renderer to bind events to
 * @private
 */
PIXI.InteractionManager.prototype.setTarget = function (target) {
  this.target = target
  this.resolution = target.resolution

  // Check if the dom element has been set. If it has don't do anything.
  if (this.interactionDOMElement !== null) return

  this.setTargetDomElement(target.view)
}

/**
 * Sets the DOM element which will receive mouse/touch events. This is useful for when you have other DOM
 * elements on top of the renderers Canvas element. With this you'll be able to delegate another DOM element
 * to receive those events
 *
 * @method setTargetDomElement
 * @param domElement {DOMElement} the DOM element which will receive mouse and touch events
 * @private
 */
PIXI.InteractionManager.prototype.setTargetDomElement = function (domElement) {
  if (window.navigator.msPointerEnabled) {
    domElement.style['-ms-content-zooming'] = 'none'
    domElement.style['-ms-touch-action'] = 'none'
  }
  this.interactionDOMElement = domElement
}

/**
 * @method rebuildInteractiveGraph
 * @private
 */
PIXI.InteractionManager.prototype.rebuildInteractiveGraph = function () {
  this.dirty = false

  var len = this.interactiveItems.length

  for (var i = 0; i < len; i++) {
    this.interactiveItems[i].interactiveChildren = false
  }

  this.interactiveItems = []

  if (this.stage.interactive) {
    this.interactiveItems.push(this.stage)
  }

  // Go through and collect all the objects that are interactive..
  this.collectInteractiveSprite(this.stage, this.stage)
}

/**
 * Tests if the current mouse coordinates hit a sprite
 *
 * @method hitTest
 * @param item {DisplayObject} The displayObject to test for a hit
 * @param interactionData {InteractionData} The interactionData object to update in the case there is a hit
 * @private
 */
PIXI.InteractionManager.prototype.hitTest = function (item, interactionData) {
  var global = interactionData.global

  if (!item.worldVisible) {
    return false
  }

  // map the global point to local space.
  item.worldTransform.applyInverse(global, this._tempPoint)

  var x = this._tempPoint.x,
    y = this._tempPoint.y,
    i

  interactionData.target = item

  //a sprite or display object with a hit area defined
  if (item.hitArea && item.hitArea.hitTest) {
    return item.hitArea.hitTest(x, y, interactionData)
  }
  if (item.hitArea && item.hitArea.contains) {
    return item.hitArea.contains(x, y, interactionData) ? {} : false
  }
  // a sprite with no hitarea defined
  else if (item instanceof PIXI.Sprite) {
    var width = item.texture.frame.width
    var height = item.texture.frame.height
    var x1 = -width * item.anchor.x
    var y1

    if (x > x1 && x < x1 + width) {
      y1 = -height * item.anchor.y

      if (y > y1 && y < y1 + height) {
        // set the target property if a hit is true!
        return {}
      }
    }
  }

  var length = item.children.length
  for (i = 0; i < length; i++) {
    var tempItem = item.children[i]
    var hitTestResult = this.hitTest(tempItem, interactionData)
    if (hitTestResult) {
      interactionData.target = item
      return hitTestResult
    }
  }
  return false
}

PIXI.InteractionManager.prototype.onMouseEvent = function (
  type,
  x,
  y,
  touchMode,
  pointerType,
  params
) {
  if (PIXI.needRender) {
    this.stage.updateTransform() //if the stage was changed between prev. frame and this event, need to update matrices
  }

  if (this.dirty) {
    this.rebuildInteractiveGraph()
  }

  var interactionData = {
    global: {x: x * PIXI.pixelRatio, y: y * PIXI.pixelRatio},
    original: {x: x, y: y},
    touchMode: touchMode,
    pointerType: pointerType,
    params: params,
    eventType: type,
  }

  var items = this.getHitTestedItems(interactionData)
  if (items.length) {
    this.bubbleEvent(items, type, interactionData)
  }
}

PIXI.InteractionManager.prototype.mouseOveredItems = []

PIXI.InteractionManager.prototype.raiseMouseOverEvents = function (x, y) {
  if (PIXI.needRender) {
    this.stage.updateTransform() //if the stage was changed between prev. frame and this event, need to update matrices
  }

  if (this.dirty) {
    this.rebuildInteractiveGraph()
  }

  x *= PIXI.pixelRatio
  y *= PIXI.pixelRatio
  var interactionData = {
    global: {x: x, y: y},
    touchMode: false,
    pointerType: PIXI.pointerTypes.MOUSE,
    params: null,
    eventType: PIXI.MOUSE_MOVE,
  }

  var newItems = this.getHitTestedItems(interactionData)
  var deltaNewItems = []
  var cursor = null

  for (var i = 0, length = newItems.length; i < length; i++) {
    var item = newItems[i]

    if (!cursor) {
      cursor = item.cursor
    }

    var prevInd = this.mouseOveredItems.indexOf(item)
    if (prevInd > -1) {
      this.mouseOveredItems[prevInd] = null //remove items which are still overed
    } else {
      deltaNewItems.push(item)
    }
  }

  this.bubbleEvent(this.mouseOveredItems, PIXI.MOUSE_LEAVE, interactionData)
  this.bubbleEvent(deltaNewItems, PIXI.MOUSE_ENTER, interactionData)

  this.currentCursorStyle = cursor
  this.mouseOveredItems = newItems
}

PIXI.InteractionManager.prototype.getHitTestedItems = function (
  interactionData
) {
  var items = []
  for (var length = this.interactiveItems.length, i = length - 1; i >= 0; i--) {
    var item = this.interactiveItems[i]
    if (this.hitTest(item, interactionData)) {
      while (item) {
        items.push(item)
        item = item.__iParent
      }
      break
    }
  }
  return items
}

PIXI.InteractionManager.prototype.bubbleEvent = function (
  items,
  type,
  interactionData
) {
  var length = items && items.length
  if (length) {
    interactionData.type = type
    for (var i = 0; i < length; i++) {
      var item = items[i]
      if (item && item.isEventTarget) {
        var event = new PIXI.Event(item, type, interactionData)
        item.dispatchEvent(event)
        if (event.stopped || event.stoppedImmediate) {
          break
        }
      }
    }
  }
}

PIXI.InteractionManager.prototype.forEachObjectAt = function (
  x,
  y,
  objectFoundCallback
) {
  if (PIXI.needRender) {
    this.stage.updateTransform() //if the stage was changed between prev. frame and this event, need to update matrices
  }

  if (this.dirty) {
    this.rebuildInteractiveGraph()
  }

  var interactionData = {
    global: {x: x * PIXI.pixelRatio, y: y * PIXI.pixelRatio},
  }
  var length = this.interactiveItems.length
  for (var i = length - 1; i >= 0; i--) {
    var item = this.interactiveItems[i]
    if (item.canHitTest) {
      var hitTestResult = this.hitTest(item, interactionData)
      if (!!hitTestResult && objectFoundCallback(item, hitTestResult)) {
        break
      }
    }
  }
}

/**
 * A Stage represents the root of the display tree. Everything connected to the stage is rendered
 *
 * @class Stage
 * @extends DisplayObjectContainer
 * @constructor
 * @param backgroundColor {Number} the background color of the stage, you have to pass this in is in hex format
 *      like: 0xFFFFFF for white
 *
 * Creating a stage is a mandatory process when you use Pixi, which is as simple as this :
 * var stage = new PIXI.Stage(0xFFFFFF);
 * where the parameter given is the background colour of the stage, in hex
 * you will use this stage instance to add your sprites to it and therefore to the renderer
 * Here is how to add a sprite to the stage :
 * stage.addChild(sprite);
 */
PIXI.Stage = function (backgroundColor) {
  PIXI.DisplayObjectContainer.call(this)

  /**
   * [read-only] Current transform of the object based on world (parent) factors
   *
   * @property worldTransform
   * @type Matrix
   * @readOnly
   * @private
   */
  this.worldTransform = new PIXI.Matrix()

  /**
   * Whether or not the stage is interactive
   *
   * @property interactive
   * @type Boolean
   */
  this.interactive = true

  /**
   * The interaction manage for this stage, manages all interactive activity on the stage
   *
   * @property interactionManager
   * @type InteractionManager
   */
  this.interactionManager = new PIXI.InteractionManager(this)

  /**
   * Whether the stage is dirty and needs to have interactions updated
   *
   * @property dirty
   * @type Boolean
   * @private
   */
  this.dirty = true

  //the stage is its own stage
  this.stage = this

  //optimize hit detection a bit
  this.stage.hitArea = new PIXI.Rectangle(0, 0, 100000, 100000)

  this.setBackgroundColor(backgroundColor)
}

// constructor
PIXI.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype)
PIXI.Stage.prototype.constructor = PIXI.Stage

PIXI.Stage.prototype.applyPixelRatio = function () {
  this.worldTransform.a = this.worldTransform.d = PIXI.pixelRatio
}

/*
 * Updates the object transform for rendering
 *
 * @method updateTransform
 * @private
 */
PIXI.Stage.prototype.updateTransform = function () {
  this.dirtyGeom = false
}

PIXI.Stage.prototype.findObject = function (func) {
  if (PIXI.needRender) {
    this.stage.updateTransform() //if the stage was changed between prev. frame and this event, need to update matrices
  }
  if (this.dirty) {
    this.rebuildInteractiveGraph()
  }

  return this.displayObjectContainerFindObject(func)
}

PIXI.Stage.prototype._renderCanvas = function (renderSession) {
  this.worldAlpha = 1
  this._worldScale = PIXI.pixelRatio
  if (this.dirty) {
    this.dirty = false
    this.interactionManager.dirty = true
  }

  for (var i = 0, j = this._visibleChildren.length; i < j; i++) {
    let child = this._visibleChildren[i]
    if (child) {
      child._renderCanvas(renderSession, false, undefined)
    }
  }
}

/**
 * Sets the background color for the stage
 *
 * @method setBackgroundColor
 * @param backgroundColor {Number} the color of the background, easiest way to pass this in is in hex format
 *      like: 0xFFFFFF for white
 */
PIXI.Stage.prototype.setBackgroundColor = function (backgroundColor) {
  this.backgroundColor = backgroundColor || 0x000000
  this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor)
  var hex = this.backgroundColor.toString(16)
  hex = '000000'.substr(0, 6 - hex.length) + hex
  this.backgroundColorString = '#' + hex
}

/**
 * This will return the point containing global coordinates of the mouse.
 *
 * @method getMousePosition
 * @return {Point} A point containing the coordinates of the global InteractionData position.
 */
PIXI.Stage.prototype.getMousePosition = function () {
  return this.interactionManager.mouse.global
}

/**
 * Converts a hex color number to an [R, G, B] array
 *
 * @method hex2rgb
 * @param hex {Number}
 */
PIXI.hex2rgb = function (hex) {
  return [
    ((hex >> 16) & 0xff) / 255,
    ((hex >> 8) & 0xff) / 255,
    (hex & 0xff) / 255,
  ]
}

/**
 * Converts a color as an [R, G, B] array to a hex number
 *
 * @method rgb2hex
 * @param rgb {Array}
 */
PIXI.rgb2hex = function (rgb) {
  return ((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + rgb[2] * 255
}

/**
 * A polyfill for Function.prototype.bind
 *
 * @method bind
 */
if (typeof Function.prototype.bind !== 'function') {
  Function.prototype.bind = (function () {
    return function (thisArg) {
      var target = this,
        i = arguments.length - 1,
        boundArgs = []
      if (i > 0) {
        boundArgs.length = i
        while (i--) boundArgs[i] = arguments[i + 1]
      }

      if (typeof target !== 'function') throw new TypeError()

      function bound() {
        var i = arguments.length,
          args = new Array(i)
        while (i--) args[i] = arguments[i]
        args = boundArgs.concat(args)
        return target.apply(this instanceof bound ? this : thisArg, args)
      }

      bound.prototype = (function F(proto) {
        if (proto) F.prototype = proto
        if (!(this instanceof F)) return new F()
      })(target.prototype)

      return bound
    }
  })()
}

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @method canUseNewCanvasBlendModes
 * @return {Boolean} whether they are supported
 */
PIXI.canUseNewCanvasBlendModes = function () {
  if (typeof document === 'undefined') return false
  var canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  var context = canvas.getContext('2d')
  context.fillStyle = '#000'
  context.fillRect(0, 0, 1, 1)
  context.globalCompositeOperation = 'multiply'
  context.fillStyle = '#fff'
  context.fillRect(0, 0, 1, 1)
  return context.getImageData(0, 0, 1, 1).data[0] === 0
}

/**
 * Mixins event emitter functionality to a class
 *
 * @class EventTarget
 * @example
 *      function MyEmitter() {}
 *
 *      PIXI.EventTarget.mixin(MyEmitter.prototype);
 *
 *      var em = new MyEmitter();
 *      em.emit('eventName', 'some data', 'some more data', {}, null, ...);
 */
PIXI.EventTarget = {
  /**
   * Backward compat from when this used to be a function
   */
  call: function callCompat(obj) {
    if (obj) {
      obj = obj.prototype || obj
      PIXI.EventTarget.mixin(obj)
    }
  },

  /**
   * Mixes in the properties of the EventTarget prototype onto another object
   *
   * @method mixin
   * @param object {Object} The obj to mix into
   */
  mixin: function mixin(obj) {
    /**
     * Return a list of assigned event listeners.
     *
     * @method listeners
     * @param eventName {String} The events that should be listed.
     * @return {Array} An array of listener functions
     */
    obj.listenremoveEventListener = function listeners(eventName) {
      this._listeners = this._listeners || {}

      return this._listeners[eventName]
        ? this._listeners[eventName].slice()
        : []
    }

    /**
     * Emit an event to all registered event listeners.
     *
     * @method emit
     * @alias dispatchEvent
     * @param eventName {String} The name of the event.
     * @return {Boolean} Indication if we've emitted an event.
     */
    obj.emit = obj.dispatchEvent = function emit(eventName, data) {
      this._listeners = this._listeners || {}

      //backwards compat with old method ".emit({ type: 'something' })"
      if (typeof eventName === 'object') {
        data = eventName
        eventName = eventName.type
      }

      //ensure we are using a real pixi event
      if (!data || data.__isEventObject !== true) {
        data = new PIXI.Event(this, eventName, data)
      }

      //iterate the listeners
      if (this._listeners && this._listeners[eventName]) {
        var listeners = this._listeners[eventName].slice(0),
          length = listeners.length,
          fn = listeners[0],
          i

        for (i = 0; i < length; fn = listeners[++i]) {
          //call the event listener
          fn.call(this, data)

          //if "stopImmediatePropagation" is called, stop calling sibling events
          if (data.stoppedImmediate) {
            return this
          }
        }

        //if "stopPropagation" is called then don't bubble the event
        if (data.stopped) {
          return this
        }
      }

      //bubble this event up the scene graph
      //закоментили, т.к. это пересекается со всплытием Вячеслава, оставили его вариант.
      /*if(this.parent && this.parent.emit) {
                 this.parent.emit.call(this.parent, eventName, data);
                 }*/

      return this
    }

    /**
     * Register a new EventListener for the given event.
     *
     * @method on
     * @alias addEventListener
     * @param eventName {String} Name of the event.
     * @param callback {Functon} fn Callback function.
     */
    obj.addEventListener = function addEventListener(eventName, fn) {
      this._listeners = this._listeners || {}
      ;(this._listeners[eventName] = this._listeners[eventName] || []).push(fn)

      return this
    }

    /**
     * Remove event listeners.
     *
     * @method off
     * @alias removeEventListener
     * @param eventName {String} The event we want to remove.
     * @param callback {Function} The listener that we need to find.
     */
    obj.removeEventListener = function removeEventListener(eventName, fn) {
      this._listeners = this._listeners || {}

      if (!this._listeners[eventName]) return this

      var list = this._listeners[eventName],
        i = fn ? list.length : 0

      while (i-- > 0) {
        if (list[i] === fn || list[i]._originalHandler === fn) {
          list.splice(i, 1)
        }
      }

      if (list.length === 0) {
        delete this._listeners[eventName]
      }

      return this
    }

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @method removeAllListeners
     * @param eventName {String} The event you want to remove all listeners for.
     */
    obj.removeAllListeners = function removeAllListeners(eventName) {
      this._listeners = this._listeners || {}

      if (!this._listeners[eventName]) return this

      delete this._listeners[eventName]

      return this
    }
  },
}

/**
 * Creates an homogenous object for tracking events so users can know what to expect.
 *
 * @class Event
 * @extends Object
 * @constructor
 * @param target {Object} The target object that the event is called on
 * @param name {String} The string name of the event that was triggered
 * @param data {Object} Arbitrary event data to pass along
 */
PIXI.Event = function (target, name, data) {
  //for duck typing in the ".on()" function
  this.__isEventObject = true

  /**
   * Tracks the state of bubbling propagation. Do not
   * set this directly, instead use `event.stopPropagation()`
   *
   * @property stopped
   * @type Boolean
   * @private
   * @readOnly
   */
  this.stopped = false

  /**
   * Tracks the state of sibling listener propagation. Do not
   * set this directly, instead use `event.stopImmediatePropagation()`
   *
   * @property stoppedImmediate
   * @type Boolean
   * @private
   * @readOnly
   */
  this.stoppedImmediate = false

  /**
   * The original target the event triggered on.
   *
   * @property target
   * @type Object
   * @readOnly
   */
  this.target = target

  /**
   * The string name of the event that this represents.
   *
   * @property type
   * @type String
   * @readOnly
   */
  this.type = name

  /**
   * The data that was passed in with this event.
   *
   * @property data
   * @type Object
   * @readOnly
   */
  this.data = data

  //backwards compat with older version of events
  this.content = data

  /**
   * The timestamp when the event occurred.
   *
   * @property timeStamp
   * @type Number
   * @readOnly
   */
  this.timeStamp = Date.now()
}

/**
 * Stops the propagation of events up the scene graph (prevents bubbling).
 *
 * @method stopPropagation
 */
PIXI.Event.prototype.stopPropagation = function stopPropagation() {
  this.stopped = true
}

/**
 * Stops the propagation of events to sibling listeners (no longer calls any listeners).
 *
 * @method stopImmediatePropagation
 */
PIXI.Event.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
  this.stoppedImmediate = true
}

/**
 * Creates a Canvas element of the given size.
 *
 * @class CanvasBuffer
 * @constructor
 * @param width {Number} the width for the newly created canvas
 * @param height {Number} the height for the newly created canvas
 * @param offscreen {boolean} use OffscreenCanvas or not
 */
PIXI.CanvasBuffer = function (width, height, offscreen) {
  /**
   * The width of the Canvas in pixels.
   *
   * @property width
   * @type Number
   */
  this.width = width

  /**
   * The height of the Canvas in pixels.
   *
   * @property height
   * @type Number
   */
  this.height = height

  /**
   * The Canvas object that belongs to this CanvasBuffer.
   *
   * @property canvas
   * @type HTMLCanvasElement
   */
  this.canvas =
    PIXI.offscreenAvailable && offscreen
      ? new OffscreenCanvas(width, height)
      : document.createElement('canvas')

  /**
   * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
   *
   * @property context
   * @type CanvasRenderingContext2D
   */
  this.context = this.canvas.getContext('2d')

  this.canvas.width = width
  this.canvas.height = height
}

PIXI.CanvasBuffer.prototype.constructor = PIXI.CanvasBuffer

/**
 * Clears the canvas that was created by the CanvasBuffer class.
 *
 * @method clear
 * @private
 */
PIXI.CanvasBuffer.prototype.clear = function () {
  this.context.setTransform(1, 0, 0, 1, 0, 0)
  this.context.clearRect(0, 0, this.width, this.height)
}

/**
 * Resizes the canvas to the specified width and height.
 *
 * @method resize
 * @param width {Number} the new width of the canvas
 * @param height {Number} the new height of the canvas
 */
PIXI.CanvasBuffer.prototype.resize = function (width, height) {
  this.width = this.canvas.width = width
  this.height = this.canvas.height = height
}

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A set of functions used to handle masking.
 *
 * @class CanvasMaskManager
 * @constructor
 */
PIXI.CanvasMaskManager = function () {}

PIXI.CanvasMaskManager.prototype.constructor = PIXI.CanvasMaskManager

/**
 * This method adds it to the current stack of masks.
 *
 * @method pushMask
 * @param maskData {Object} the maskData that will be pushed
 * @param renderSession {Object} The renderSession whose context will be used for this mask manager.
 */
PIXI.CanvasMaskManager.prototype.pushMask = function (maskData, renderSession) {
  var context = renderSession.context
  context.save()

  if (maskData.include) {
    context.beginPath()
    maskData.include.forEach(function (item) {
      PIXI.CanvasMaskManager.renderMaskToContext(item, context)
    })
    context.clip()
  }

  if (maskData.exclude) {
    maskData.exclude.forEach(function (item) {
      context.beginPath()
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.rect(0, 0, 20000, 20000)
      PIXI.CanvasMaskManager.renderMaskToContext(item, context)
      context.clip('evenodd')
    })
  }
}

/**
 * Restores the current drawing context to the state it was before the mask was applied.
 *
 * @method popMask
 * @param renderSession {Object} The renderSession whose context will be used for this mask manager.
 */
PIXI.CanvasMaskManager.prototype.popMask = function (renderSession) {
  renderSession.context.restore()
}

PIXI.CanvasMaskManager.updateMaskTransform = function (displayObject) {
  const masks = displayObject._mask.all
  for (let i = 0, l = masks.length; i < l; i++) {
    masks[i].displayObjectUpdateTransform()
  }
}

PIXI.CanvasMaskManager.appendDisplacement = function (displayObject, dx, dy) {
  const masks = displayObject._mask.all
  const len = masks.length
  for (let i = 0; i < len; i++) {
    const wt = masks[i].worldTransform
    wt.tx += dx
    wt.ty += dy
  }
}

PIXI.CanvasMaskManager.setMaskFlag = function (maskArray, displayObject) {
  maskArray.forEach(function (item) {
    item.isMask = !!displayObject
    item.parent = displayObject
  })
}

PIXI.CanvasMaskManager.renderMaskToContext = function (graphics, context) {
  var tf = graphics.worldTransform
  context.setTransform(tf.a, tf.b, tf.c, tf.d, tf.tx, tf.ty)
  PIXI.CanvasGraphics.renderGraphicsMask(graphics, context)
}

/**
 * The CanvasRenderer draws the Stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class CanvasRenderer
 * @constructor
 * @param [width=800] {Number} the width of the canvas view
 * @param [height=600] {Number} the height of the canvas view
 * @param [options] {Object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {Boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {Boolean} If the render view is automatically resized, default false
 * @param [options.resolution=1] {Number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {Boolean} This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
 */
PIXI.CanvasRenderer = function (width, height, options) {
  if (options) {
    for (var i in PIXI.defaultRenderOptions) {
      if (typeof options[i] === 'undefined')
        options[i] = PIXI.defaultRenderOptions[i]
    }
  } else {
    options = PIXI.defaultRenderOptions
  }

  if (!PIXI.defaultRenderer) {
    PIXI.defaultRenderer = this
  }

  /**
   * The renderer type.
   *
   * @property type
   * @type Number
   */
  this.type = PIXI.CANVAS_RENDERER

  /**
   * The resolution of the canvas.
   *
   * @property resolution
   * @type Number
   */
  this.resolution = options.resolution

  /**
   * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
   * If the Stage is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
   * If the Stage is transparent Pixi will use clearRect to clear the canvas every frame.
   * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
   *
   * @property clearBeforeRender
   * @type Boolean
   * @default
   */
  this.clearBeforeRender = options.clearBeforeRender

  /**
   * Whether the render view is transparent
   *
   * @property transparent
   * @type Boolean
   */
  this.transparent = options.transparent

  /**
   * Whether the render view should be resized automatically
   *
   * @property autoResize
   * @type Boolean
   */
  this.autoResize = options.autoResize || false

  /**
   * The width of the canvas view
   *
   * @property width
   * @type Number
   * @default 800
   */
  this.width = width || 800

  /**
   * The height of the canvas view
   *
   * @property height
   * @type Number
   * @default 600
   */
  this.height = height || 600

  this.width *= this.resolution
  this.height *= this.resolution

  /**
   * The canvas element that everything is drawn to.
   *
   * @property view
   * @type HTMLCanvasElement
   */
  this.view = options.view || document.createElement('canvas')

  /**
   * The canvas 2d context that everything is drawn with
   * @property context
   * @type CanvasRenderingContext2D
   */
  this.context = this.view.getContext('2d', {alpha: this.transparent})

  /**
   * Boolean flag controlling canvas refresh.
   *
   * @property refresh
   * @type Boolean
   */
  this.refresh = true

  this.view.width = this.width * this.resolution
  this.view.height = this.height * this.resolution

  /**
   * Internal var.
   *
   * @property count
   * @type Number
   */
  this.count = 0

  /**
   * Instance of a PIXI.CanvasMaskManager, handles masking when using the canvas renderer
   * @property CanvasMaskManager
   * @type CanvasMaskManager
   */
  this.maskManager = new PIXI.CanvasMaskManager()

  /**
   * The render session is just a bunch of parameter used for rendering
   * @property renderSession
   * @type Object
   */
  this.renderSession = {
    context: this.context,
    maskManager: this.maskManager,
    scaleMode: null,
    smoothProperty: null,
    /**
     * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     */
    roundPixels: false,
  }

  this.mapBlendModes()

  this.resize(width, height)

  if ('imageSmoothingEnabled' in this.context)
    this.renderSession.smoothProperty = 'imageSmoothingEnabled'
  else if ('webkitImageSmoothingEnabled' in this.context)
    this.renderSession.smoothProperty = 'webkitImageSmoothingEnabled'
  else if ('mozImageSmoothingEnabled' in this.context)
    this.renderSession.smoothProperty = 'mozImageSmoothingEnabled'
  else if ('oImageSmoothingEnabled' in this.context)
    this.renderSession.smoothProperty = 'oImageSmoothingEnabled'
  else if ('msImageSmoothingEnabled' in this.context)
    this.renderSession.smoothProperty = 'msImageSmoothingEnabled'
}

// constructor
PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer

/**
 * Renders the Stage to this canvas view
 *
 * @method render
 * @param stage {Stage} the Stage element to be rendered
 */
PIXI.CanvasRenderer.prototype.render = function (stage) {
  if (!PIXI.needRender) {
    return
  }
  PIXI.needRender = false

  this.context.setTransform(1, 0, 0, 1, 0, 0)
  this.context.globalAlpha = 1
  this.renderSession.currentBlendMode = PIXI.blendModes.NORMAL
  this.context.globalCompositeOperation =
    PIXI.blendModesCanvas[PIXI.blendModes.NORMAL]

  if (this.clearBeforeRender) {
    if (this.transparent) {
      this.context.clearRect(0, 0, this.width, this.height)
    } else {
      this.context.fillStyle = stage.backgroundColorString
      this.context.fillRect(0, 0, this.width, this.height)
    }
  }

  this.renderDisplayObject(stage)

  // run interaction!
  if (stage.interactive) {
    //need to add some events!
    if (!stage._interactiveEventsAdded) {
      stage._interactiveEventsAdded = true
      stage.interactionManager.setTarget(this)
    }
  }
}

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @method destroy
 * @param [removeView=true] {boolean} Removes the Canvas element from the DOM.
 */
PIXI.CanvasRenderer.prototype.destroy = function (removeView) {
  if (typeof removeView === 'undefined') {
    removeView = true
  }

  if (removeView && this.view.parent) {
    this.view.parent.removeChild(this.view)
  }

  this.view = null
  this.context = null
  this.maskManager = null
  this.renderSession = null
}

/**
 * Resizes the canvas view to the specified width and height
 *
 * @method resize
 * @param width {Number} the new width of the canvas view
 * @param height {Number} the new height of the canvas view
 */
PIXI.CanvasRenderer.prototype.resize = function (width, height) {
  this.view.style.width = width + 'px'
  this.view.style.height = height + 'px'

  this.width = width * PIXI.pixelRatio
  this.height = height * PIXI.pixelRatio

  this.view.width = this.width
  this.view.height = this.height
}

/**
 * Renders a display object
 *
 * @method renderDisplayObject
 * @param displayObject {DisplayObject} The displayObject to render
 * @param context {CanvasRenderingContext2D} the context 2d method of the canvas
 * @private
 */
PIXI.CanvasRenderer.prototype.renderDisplayObject = function (
  displayObject,
  context
) {
  this.renderSession.context = context || this.context
  this.renderSession.resolution = this.resolution
  displayObject._renderCanvas(this.renderSession, false, undefined)
}

/**
 * Maps Pixi blend modes to canvas blend modes.
 *
 * @method mapBlendModes
 * @private
 */
PIXI.CanvasRenderer.prototype.mapBlendModes = function () {
  if (!PIXI.blendModesCanvas) {
    PIXI.blendModesCanvas = []

    if (PIXI.canUseNewCanvasBlendModes()) {
      PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.ADD] = 'lighter' //IS THIS OK???
      PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = 'multiply'
      PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = 'screen'
      PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY] = 'overlay'
      PIXI.blendModesCanvas[PIXI.blendModes.DARKEN] = 'darken'
      PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN] = 'lighten'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = 'color-dodge'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = 'color-burn'
      PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = 'hard-light'
      PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = 'soft-light'
      PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = 'difference'
      PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = 'exclusion'
      PIXI.blendModesCanvas[PIXI.blendModes.HUE] = 'hue'
      PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = 'saturation'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR] = 'color'
      PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = 'luminosity'
    } else {
      // this means that the browser does not support the cool new blend modes in canvas "cough" ie "cough"
      PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.ADD] = 'lighter' //IS THIS OK???
      PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.OVERLAY] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.DARKEN] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.LIGHTEN] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR_DODGE] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR_BURN] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.HARD_LIGHT] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.SOFT_LIGHT] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.DIFFERENCE] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.EXCLUSION] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.HUE] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.SATURATION] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.COLOR] = 'source-over'
      PIXI.blendModesCanvas[PIXI.blendModes.LUMINOSITY] = 'source-over'
    }
  }
}

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A set of functions used by the canvas renderer to draw the primitive graphics data.
 *
 * @class CanvasGraphics
 * @static
 */
PIXI.CanvasGraphics = function () {}

/*
 * Renders a PIXI.Graphics object to a canvas.
 *
 * @method renderGraphics
 * @static
 * @param graphics {Graphics} the actual graphics object to render
 * @param context {CanvasRenderingContext2D} the 2d drawing method of the canvas
 */
PIXI.CanvasGraphics.renderGraphics = function (graphics, context) {
  var worldAlpha = graphics.worldAlpha

  for (var i = 0; i < graphics.graphicsData.length; i++) {
    var data = graphics.graphicsData[i]
    var shape = data.shape

    var fillColorStr = data._fillColorStr
    var lineColorStr = data._lineColorStr
    var alphaMult = 1
    var lineWidth = data.lineWidth

    if (data.lineWidth) {
      var screenThick = data.lineWidth * graphics._worldScale
      var lineDash = data.lineDash || []
      var lineCap = data.lineCap
      var dashOffset = 0

      if (graphics.preserveLineWidth) {
        if (screenThick < 1) {
          alphaMult = 0.3 + 0.7 * screenThick
          lineWidth = 1 / graphics._worldScale
        }
      }

      if (lineDash.length) {
        if (screenThick < 0.3) {
          // make solid if too narrow

          alphaMult /= 2
          lineDash = []
        } else if (screenThick <= 1 && lineCap != 'butt') {
          // anti-Chrome. it removes line caps if thickness < 1

          var d = data.lineWidth
          dashOffset = d / 2
          lineCap = 'butt'
          lineDash = lineDash.map(function (item) {
            d = -d
            return item - d
          })
        }
      }

      context.lineDashOffset = dashOffset

      if (context.setLineDash) {
        context.setLineDash(lineDash)
      } else {
        context.lineDash = lineDash
      }

      if (context.setLineCap) {
        context.setLineCap(lineCap)
      } else {
        context.lineCap = lineCap
      }

      if (context.setLineJoin) {
        context.setLineJoin(data.lineJoin)
      } else {
        context.lineJoin = data.lineJoin
      }
    }

    context.lineWidth = lineWidth

    if (data.type === PIXI.Graphics.POLY) {
      context.beginPath()

      var points = shape.points

      context.moveTo(points[0], points[1])

      for (var j = 1; j < points.length / 2; j++) {
        context.lineTo(points[j * 2], points[j * 2 + 1])
      }

      if (shape.closed) {
        context.lineTo(points[0], points[1])
      }

      // if the first and last point are the same close the path - much neater :)
      if (
        points[0] === points[points.length - 2] &&
        points[1] === points[points.length - 1]
      ) {
        context.closePath()
      }

      if (data.fill) {
        context.globalAlpha = data.fillAlpha * worldAlpha
        context.fillStyle = fillColorStr
        context.fill()
      }
      if (data.lineWidth) {
        context.globalAlpha = data.lineAlpha * worldAlpha * alphaMult
        context.strokeStyle = lineColorStr
        context.stroke()
      }
    } else if (data.type === PIXI.Graphics.RECT) {
      if (data.fillColor || data.fillColor === 0) {
        context.globalAlpha = data.fillAlpha * worldAlpha
        context.fillStyle = fillColorStr
        context.fillRect(shape.x, shape.y, shape.width, shape.height)
      }
      if (data.lineWidth) {
        context.globalAlpha = data.lineAlpha * worldAlpha * alphaMult
        context.strokeStyle = lineColorStr
        context.strokeRect(shape.x, shape.y, shape.width, shape.height)
      }
    } else if (data.type === PIXI.Graphics.CIRC) {
      // TODO - need to be Undefined!
      context.beginPath()
      context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI)
      context.closePath()

      if (data.fill) {
        context.globalAlpha = data.fillAlpha * worldAlpha
        context.fillStyle = fillColorStr
        context.fill()
      }
      if (data.lineWidth) {
        context.globalAlpha = data.lineAlpha * worldAlpha * alphaMult
        context.strokeStyle = lineColorStr
        context.stroke()
      }
    } else if (data.type === PIXI.Graphics.ELIP) {
      // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

      var w = shape.width * 2
      var h = shape.height * 2

      var x = shape.x - w / 2
      var y = shape.y - h / 2

      context.beginPath()

      var kappa = 0.5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w, // x-end
        ye = y + h, // y-end
        xm = x + w / 2, // x-middle
        ym = y + h / 2 // y-middle

      context.moveTo(x, ym)
      context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y)
      context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym)
      context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
      context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)

      context.closePath()

      if (data.fill) {
        context.globalAlpha = data.fillAlpha * worldAlpha
        context.fillStyle = fillColorStr
        context.fill()
      }
      if (data.lineWidth) {
        context.globalAlpha = data.lineAlpha * worldAlpha * alphaMult
        context.strokeStyle = lineColorStr
        context.stroke()
      }
    } else if (data.type === PIXI.Graphics.RREC) {
      var rx = shape.x
      var ry = shape.y
      var width = shape.width
      var height = shape.height
      var radiusTopLeft = shape.radius
      var radiusTopRight = shape.radiusTopRight
      var radiusBottomRight = shape.radiusBottomRight
      var radiusBottomLeft = shape.radiusBottomLeft

      var maxRadius = (Math.min(width, height) / 2) | 0

      radiusTopLeft = (radiusTopLeft > maxRadius && maxRadius) || radiusTopLeft
      radiusTopRight =
        (radiusTopRight > maxRadius && maxRadius) || radiusTopRight
      radiusBottomRight =
        (radiusBottomRight > maxRadius && maxRadius) || radiusBottomRight
      radiusBottomLeft =
        (radiusBottomLeft > maxRadius && maxRadius) || radiusBottomLeft

      context.beginPath()

      context.moveTo(rx + width - radiusTopRight, ry)
      context.arcTo(
        rx + width,
        ry,
        rx + width,
        ry + radiusTopRight,
        radiusTopRight
      )
      context.lineTo(rx + width, ry + height - radiusBottomRight)
      context.arcTo(
        rx + width,
        ry + height,
        rx + width - radiusBottomRight,
        ry + height,
        radiusBottomRight
      )
      context.lineTo(rx + radiusBottomLeft, ry + height)
      context.arcTo(
        rx,
        ry + height,
        rx,
        ry + height - radiusBottomLeft,
        radiusBottomLeft
      )
      context.lineTo(rx, ry + radiusTopLeft)
      context.arcTo(rx, ry, rx + radiusTopLeft, ry, radiusTopLeft)

      context.closePath()

      if (data.fillColor || data.fillColor === 0) {
        context.globalAlpha = data.fillAlpha * worldAlpha
        context.fillStyle = fillColorStr
        context.fill()
      }
      if (data.lineWidth) {
        context.globalAlpha = data.lineAlpha * worldAlpha * alphaMult
        context.strokeStyle = lineColorStr
        context.stroke()
      }
    }
  }
}

/*
 * Renders a graphics mask
 *
 * @static
 * @private
 * @method renderGraphicsMask
 * @param graphics {Graphics} the graphics which will be used as a mask
 * @param context {CanvasRenderingContext2D} the context 2d method of the canvas
 */
PIXI.CanvasGraphics.renderGraphicsMask = function (graphics, context) {
  for (var i = 0, len = graphics.graphicsData.length; i < len; i++) {
    var data = graphics.graphicsData[i]
    var shape = data.shape

    if (data.type === PIXI.Graphics.POLY) {
      var points = shape.points

      context.moveTo(points[0], points[1])

      for (var j = 1; j < points.length / 2; j++) {
        context.lineTo(points[j * 2], points[j * 2 + 1])
      }
    } else if (data.type === PIXI.Graphics.RECT) {
      context.rect(shape.x, shape.y, shape.width, shape.height)
    } else if (data.type === PIXI.Graphics.CIRC) {
      context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI)
    } else if (data.type === PIXI.Graphics.ELIP) {
      var w = shape.width * 2
      var h = shape.height * 2
      var x = shape.x - w / 2
      var y = shape.y - h / 2

      var kappa = 0.5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w, // x-end
        ye = y + h, // y-end
        xm = x + w / 2, // x-middle
        ym = y + h / 2 // y-middle

      context.moveTo(x, ym)
      context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y)
      context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym)
      context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
      context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)
    } else if (data.type === PIXI.Graphics.RREC) {
      var rx = shape.x
      var ry = shape.y
      var width = shape.width
      var height = shape.height
      var radius = shape.radius
      var maxRadius = (Math.min(width, height) / 2) | 0
      radius = Math.min(maxRadius, radius)

      context.moveTo(rx + radius, ry)
      context.lineTo(rx + width - radius, ry)
      context.arc(rx + width - radius, ry + radius, radius, -Math.PI / 2, 0)
      context.lineTo(rx + width, ry + height - radius)
      context.arc(
        rx + width - radius,
        ry + height - radius,
        radius,
        0,
        Math.PI / 2
      )
      context.lineTo(rx + radius, ry + height)
      context.arc(
        rx + radius,
        ry + height - radius,
        radius,
        Math.PI / 2,
        Math.PI
      )
      context.lineTo(rx, ry + radius)
      context.arc(rx + radius, ry + radius, radius, -Math.PI, -Math.PI / 2)
    }
  }
}

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and color and fill them.
 *
 * @class Graphics
 * @extends DisplayObjectContainer
 * @constructor
 */
PIXI.Graphics = function () {
  PIXI.DisplayObjectContainer.call(this)

  this.renderable = true

  /**
   * The alpha value used when filling the Graphics object.
   *
   * @property fillAlpha
   * @type Number
   */
  this.fillAlpha = 1

  /**
   * The width (thickness) of any lines drawn.
   *
   * @property lineWidth
   * @type Number
   */
  this.lineWidth = 0

  /**
   * The color of any lines drawn.
   *
   * @property lineColor
   * @type String
   * @default 0
   */
  this.lineColor = 0

  this.preserveLineWidth = false //todo: my!

  /*
   * The line dash array
   *
   * @property lineDash
   * @type Array of number
   */
  this.lineDash = [] //todo: my!

  /*
   * The line cap type
   *
   * @property lineCap
   * @type string
   */
  this.lineCap = 'butt' //todo: my!

  /*
   * The line join type
   *
   * @property lineJoin
   * @type string
   */
  this.lineJoin = 'miter' //todo: my!

  /**
   * Graphics data
   *
   * @property graphicsData
   * @type Array
   * @private
   */
  this.graphicsData = []

  /**
   * Current path
   *
   * @property currentPath
   * @type Object
   * @private
   */
  this.currentPath = null

  /**
   * Whether this shape is being used as a mask.
   *
   * @property isMask
   * @type Boolean
   */
  this.isMask = false

  /**
   * The bounds' padding used for bounds calculation.
   *
   * @property boundsPadding
   * @type Number
   */
  this.boundsPadding = 0

  this._localBounds = new PIXI.Rectangle(0, 0, 1, 1)

  /**
   * Used to detect if the graphics object has changed. If this is set to true then the graphics object will be recalculated.
   *
   * @property dirty
   * @type Boolean
   * @private
   */
  this.dirty = true

  /**
   * Used to detect if the cached sprite object needs to be updated.
   *
   * @property cachedSpriteDirty
   * @type Boolean
   * @private
   */
  this.cachedSpriteDirty = false
}

// constructor
PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype)
PIXI.Graphics.prototype.constructor = PIXI.Graphics

/**
 * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
 * This is useful if your graphics element does not change often, as it will speed up the rendering of the object in exchange for taking up texture memory.
 * It is also useful if you need the graphics object to be anti-aliased, because it will be rendered using canvas.
 * This is not recommended if you are constantly redrawing the graphics element.
 *
 * @property cacheAsBitmap
 * @type Boolean
 * @default false
 * @private
 */
Object.defineProperty(PIXI.Graphics.prototype, 'cacheAsBitmap', {
  get: function () {
    return this._cacheAsBitmap
  },
  set: function (value) {
    this._cacheAsBitmap = value

    if (this._cacheAsBitmap) {
      this._generateCachedSprite()
    } else {
      this.destroyCachedSprite()
      this.dirty = true
    }
  },
})

/**
 * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
 *
 * @method lineStyle
 * @param lineWidth {Number} width of the line to draw, will update the objects stored style
 * @param color {Number} color of the line to draw, will update the objects stored style
 * @param alpha {Number} alpha of the line to draw, will update the objects stored style
 * @return {Graphics}
 */
PIXI.Graphics.prototype.lineStyle = function (lineWidth, color, alpha) {
  this.lineWidth = lineWidth || 0
  this.lineColor = color || 0
  this.lineAlpha = arguments.length < 3 ? 1 : alpha

  if (this.currentPath) {
    if (this.currentPath.shape.points.length) {
      // halfway through a line? start a new one!
      this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2)))
      return this
    }

    // otherwise its empty so lets just set the line properties
    this.currentPath.lineWidth = this.lineWidth
    this.currentPath.lineColor = this.lineColor
    this.currentPath.lineAlpha = this.lineAlpha
  }

  return this
}

PIXI.Graphics.prototype.setLineDash = function (lineDash) {
  this.lineDash = lineDash ? lineDash : []

  if (this.currentPath) {
    if (this.currentPath.shape.points.length) {
      // halfway through a line? start a new one!
      this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2)))
      return this
    }

    // otherwise its empty so lets just set the line properties
    this.currentPath.lineDash = this.lineDash
  }

  return this
}

PIXI.Graphics.prototype.setLineCap = function (lineCap) {
  this.lineCap = lineCap ? lineCap : 'butt'

  if (this.currentPath) {
    if (this.currentPath.shape.points.length) {
      // halfway through a line? start a new one!
      this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2)))
      return this
    }

    // otherwise its empty so lets just set the line properties
    this.currentPath.lineCap = this.lineCap
  }

  return this
}

PIXI.Graphics.prototype.setLineJoin = function (lineJoin) {
  this.lineJoin = lineJoin ? lineJoin : 'miter'

  if (this.currentPath) {
    if (this.currentPath.shape.points.length) {
      // halfway through a line? start a new one!
      this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2)))
      return this
    }

    // otherwise its empty so lets just set the line properties
    this.currentPath.lineJoin = this.lineJoin
  }

  return this
}

/**
 * Moves the current drawing position to x, y.
 *
 * @method moveTo
 * @param x {Number} the X coordinate to move to
 * @param y {Number} the Y coordinate to move to
 * @return {Graphics}
 */
PIXI.Graphics.prototype.moveTo = function (x, y) {
  this.drawShape(new PIXI.Polygon([x, y]))

  return this
}

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * The current drawing position is then set to (x, y).
 *
 * @method lineTo
 * @param x {Number} the X coordinate to draw to
 * @param y {Number} the Y coordinate to draw to
 * @return {Graphics}
 */
PIXI.Graphics.prototype.lineTo = function (x, y) {
  PIXI.objectChanged(this)
  this.currentPath.shape.points.push(x, y)
  this.dirty = true

  return this
}

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @method quadraticCurveTo
 * @param cpX {Number} Control point x
 * @param cpY {Number} Control point y
 * @param toX {Number} Destination point x
 * @param toY {Number} Destination point y
 * @return {Graphics}
 */
PIXI.Graphics.prototype.quadraticCurveTo = function (
  cpX,
  cpY,
  toX,
  toY,
  segments
) {
  PIXI.objectChanged(this)

  if (this.currentPath) {
    if (this.currentPath.shape.points.length === 0) {
      this.currentPath.shape.points = [0, 0]
    }
  } else {
    this.moveTo(0, 0)
  }

  var xa,
    ya,
    points = this.currentPath.shape.points
  if (points.length === 0) {
    this.moveTo(0, 0)
  }

  var fromX = points[points.length - 2]
  var fromY = points[points.length - 1]

  if (!segments) {
    segments = PIXI.getCurveSegmentsCount(fromX, fromY, toX, toY)
  }

  var j = 0

  for (var i = 1; i <= segments; i++) {
    j = i / segments

    xa = fromX + (cpX - fromX) * j
    ya = fromY + (cpY - fromY) * j

    points.push(
      xa + (cpX + (toX - cpX) * j - xa) * j,
      ya + (cpY + (toY - cpY) * j - ya) * j
    )
  }

  this.dirty = true

  return this
}

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * @method bezierCurveTo
 * @param cpX {Number} Control point x
 * @param cpY {Number} Control point y
 * @param cpX2 {Number} Second Control point x
 * @param cpY2 {Number} Second Control point y
 * @param toX {Number} Destination point x
 * @param toY {Number} Destination point y
 * @return {Graphics}
 */
PIXI.Graphics.prototype.bezierCurveTo = function (
  cpX,
  cpY,
  cpX2,
  cpY2,
  toX,
  toY,
  segments
) {
  PIXI.objectChanged(this)

  if (this.currentPath) {
    if (this.currentPath.shape.points.length === 0) {
      this.currentPath.shape.points = [0, 0]
    }
  } else {
    this.moveTo(0, 0)
  }

  var dt,
    dt2,
    dt3,
    t2,
    t3,
    points = this.currentPath.shape.points

  var fromX = points[points.length - 2]
  var fromY = points[points.length - 1]

  if (!segments) {
    segments = PIXI.getCurveSegmentsCount(fromX, fromY, toX, toY)
  }

  var j = 0

  for (var i = 1; i <= segments; i++) {
    j = i / segments

    dt = 1 - j
    dt2 = dt * dt
    dt3 = dt2 * dt

    t2 = j * j
    t3 = t2 * j

    points.push(
      dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
      dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY
    )
  }

  this.dirty = true

  return this
}

PIXI.getCurveSegmentsCount = function (p0x, p0y, p1x, p1y) {
  var lenX = p1x - p0x
  var lenY = p1y - p0y
  var len = Math.sqrt(lenX * lenX + lenY * lenY)
  return Math.min(Math.max(5, Math.round(len / 5)), 80)
}

/*
 * The arcTo() method creates an arc/curve between two tangents on the canvas.
 *
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @method arcTo
 * @param x1 {Number} The x-coordinate of the beginning of the arc
 * @param y1 {Number} The y-coordinate of the beginning of the arc
 * @param x2 {Number} The x-coordinate of the end of the arc
 * @param y2 {Number} The y-coordinate of the end of the arc
 * @param radius {Number} The radius of the arc
 * @return {Graphics}
 */
PIXI.Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {
  PIXI.objectChanged(this)

  if (this.currentPath) {
    if (this.currentPath.shape.points.length === 0) {
      this.currentPath.shape.points.push(x1, y1)
    }
  } else {
    this.moveTo(x1, y1)
  }

  var points = this.currentPath.shape.points
  var fromX = points[points.length - 2]
  var fromY = points[points.length - 1]
  var a1 = fromY - y1
  var b1 = fromX - x1
  var a2 = y2 - y1
  var b2 = x2 - x1
  var mm = Math.abs(a1 * b2 - b1 * a2)

  if (mm < 1.0e-8 || radius === 0) {
    if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
      //console.log(">>")
      points.push(x1, y1)
    }
  } else {
    var dd = a1 * a1 + b1 * b1
    var cc = a2 * a2 + b2 * b2
    var tt = a1 * a2 + b1 * b2
    var k1 = (radius * Math.sqrt(dd)) / mm
    var k2 = (radius * Math.sqrt(cc)) / mm
    var j1 = (k1 * tt) / dd
    var j2 = (k2 * tt) / cc
    var cx = k1 * b2 + k2 * b1
    var cy = k1 * a2 + k2 * a1
    var px = b1 * (k2 + j1)
    var py = a1 * (k2 + j1)
    var qx = b2 * (k1 + j2)
    var qy = a2 * (k1 + j2)
    var startAngle = Math.atan2(py - cy, px - cx)
    var endAngle = Math.atan2(qy - cy, qx - cx)

    this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1)
  }

  this.dirty = true

  return this
}

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @method arc
 * @param cx {Number} The x-coordinate of the center of the circle
 * @param cy {Number} The y-coordinate of the center of the circle
 * @param radius {Number} The radius of the circle
 * @param startAngle {Number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {Number} The ending angle, in radians
 * @param anticlockwise {Boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {Graphics}
 */
PIXI.Graphics.prototype.arc = function (
  cx,
  cy,
  radius,
  startAngle,
  endAngle,
  anticlockwise
) {
  PIXI.objectChanged(this)

  var startX = cx + Math.cos(startAngle) * radius
  var startY = cy + Math.sin(startAngle) * radius
  var points

  this.moveTo(startX, startY)
  if (this.currentPath) {
    points = this.currentPath.shape.points

    if (points.length === 0) {
      points.push(startX, startY)
    } else if (
      points[points.length - 2] !== startX ||
      points[points.length - 1] !== startY
    ) {
      points.push(startX, startY)
    }
  } else {
    points = this.currentPath.shape.points
  }

  if (startAngle === endAngle) return this

  if (!anticlockwise && endAngle <= startAngle) {
    endAngle += Math.PI * 2
  } else if (anticlockwise && startAngle <= endAngle) {
    startAngle += Math.PI * 2
  }

  var sweep = anticlockwise
    ? (startAngle - endAngle) * -1
    : endAngle - startAngle
  var segs = (Math.abs(sweep) / (Math.PI * 2)) * 90

  if (sweep === 0) return this

  var theta = sweep / (segs * 2)
  var theta2 = theta * 2

  var cTheta = Math.cos(theta)
  var sTheta = Math.sin(theta)

  var segMinus = segs - 1

  var remainder = (segMinus % 1) / segMinus

  for (var i = 0; i <= segMinus; i++) {
    var real = i + remainder * i

    var angle = theta + startAngle + theta2 * real

    var c = Math.cos(angle)
    var s = -Math.sin(angle)

    points.push(
      (cTheta * c + sTheta * s) * radius + cx,
      (cTheta * -s + sTheta * c) * radius + cy
    )
  }

  this.dirty = true

  return this
}

/**
 * Specifies a simple one-color fill that subsequent calls to other Graphics methods
 * (such as lineTo() or drawCircle()) use when drawing.
 *
 * @method beginFill
 * @param color {Number} the color of the fill
 * @param alpha {Number} the alpha of the fill
 * @return {Graphics}
 */
PIXI.Graphics.prototype.beginFill = function (color, alpha) {
  this.filling = true
  this.fillColor = color || 0
  this.fillAlpha = alpha === undefined ? 1 : alpha

  if (this.currentPath) {
    if (this.currentPath.shape.points.length <= 2) {
      this.currentPath.fill = this.filling
      this.currentPath.fillColor = this.fillColor
      this.currentPath.fillAlpha = this.fillAlpha
    }
  }
  return this
}

/**
 * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 *
 * @method endFill
 * @return {Graphics}
 */
PIXI.Graphics.prototype.endFill = function () {
  this.filling = false
  this.fillColor = null
  this.fillAlpha = 1

  return this
}

/**
 * @method drawRect
 *
 * @param x {Number} The X coord of the top-left of the rectangle
 * @param y {Number} The Y coord of the top-left of the rectangle
 * @param width {Number} The width of the rectangle
 * @param height {Number} The height of the rectangle
 * @return {Graphics}
 */
PIXI.Graphics.prototype.drawRect = function (x, y, width, height) {
  this.drawShape(new PIXI.Rectangle(x, y, width, height))

  return this
}

/**
 * @method drawRoundedRect
 *
 * @param x {Number} The X coord of the top-left of the rectangle
 * @param y {Number} The Y coord of the top-left of the rectangle
 * @param width {Number} The width of the rectangle
 * @param height {Number} The height of the rectangle
 * @param radius {Number} Radius of the rectangle corners
 */
PIXI.Graphics.prototype.drawRoundedRect = function (
  x,
  y,
  width,
  height,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomRight,
  radiusBottomLeft
) {
  if (
    radiusTopLeft < 0 ||
    radiusTopRight < 0 ||
    radiusBottomRight < 0 ||
    radiusBottomLeft < 0
  ) {
    if (window.ErrorsTracker) {
      window.ErrorsTracker.error(new Error('Negative radius in rounded rect'), {
        x: x,
        y: y,
        width: width,
        height: height,
        radiusTopLeft: radiusTopLeft,
        radiusTopRight: radiusTopRight,
        radiusBottomRight: radiusBottomRight,
        radiusBottomLeft: radiusBottomLeft,
      })
    }
    //radius = 0;
    return this
  }

  this.drawShape(
    new PIXI.RoundedRectangle(
      x,
      y,
      width,
      height,
      radiusTopLeft,
      radiusTopRight,
      radiusBottomRight,
      radiusBottomLeft
    )
  )

  return this
}

/**
 * Draws a circle.
 *
 * @method drawCircle
 * @param x {Number} The X coordinate of the center of the circle
 * @param y {Number} The Y coordinate of the center of the circle
 * @param radius {Number} The radius of the circle
 * @return {Graphics}
 */
PIXI.Graphics.prototype.drawCircle = function (x, y, radius) {
  if (radius < 0) {
    if (window.ErrorsTracker) {
      window.ErrorsTracker.error(new Error('Negative radius in circle'), {
        x: x,
        y: y,
        radius: radius,
      })
    }
    //radius = 0;
    return this
  }

  this.drawShape(new PIXI.Circle(x, y, radius))

  return this
}

/**
 * Draws an ellipse.
 *
 * @method drawEllipse
 * @param x {Number} The X coordinate of the center of the ellipse
 * @param y {Number} The Y coordinate of the center of the ellipse
 * @param width {Number} The half width of the ellipse
 * @param height {Number} The half height of the ellipse
 * @return {Graphics}
 */
PIXI.Graphics.prototype.drawEllipse = function (x, y, width, height) {
  this.drawShape(new PIXI.Ellipse(x, y, width, height))

  return this
}

/**
 * Draws a polygon using the given path.
 *
 * @method drawPolygon
 * @param path {Array} The path data used to construct the polygon.
 * @return {Graphics}
 */
PIXI.Graphics.prototype.drawPolygon = function (path) {
  if (!(path instanceof Array)) path = Array.prototype.slice.call(arguments)
  this.drawShape(new PIXI.Polygon(path))
  return this
}

/**
 * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
 *
 * @method clear
 * @return {Graphics}
 */
PIXI.Graphics.prototype.clear = function () {
  PIXI.objectChanged(this)

  this.lineWidth = 0
  this.filling = false

  this.dirty = true
  this.clearDirty = true
  this.graphicsData = []

  return this
}

/**
 * Useful function that returns a texture of the graphics object that can then be used to create sprites
 * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
 *
 * @method generateTexture
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return {Texture} a texture of the graphics object
 */
PIXI.Graphics.prototype.generateTexture = function (resolution, scaleMode) {
  resolution = resolution || 1

  var bounds = this.getBounds()

  var canvasBuffer = new PIXI.CanvasBuffer(
    bounds.width * resolution,
    bounds.height * resolution
  )

  var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas, scaleMode)
  texture.baseTexture.resolution = resolution

  canvasBuffer.context.scale(resolution, resolution)

  canvasBuffer.context.translate(-bounds.x, -bounds.y)

  PIXI.CanvasGraphics.renderGraphics(this, canvasBuffer.context)

  return texture
}

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @param renderSession {RenderSession}
 * @private
 */
PIXI.Graphics.prototype._renderContent = function (renderSession) {
  var context = renderSession.context

  var transform = this.worldTransform
  context.setTransform(
    transform.a,
    transform.b,
    transform.c,
    transform.d,
    transform.tx,
    transform.ty
  )

  PIXI.CanvasGraphics.renderGraphics(this, context)

  if (this.graphicsData.length) {
    PIXI._drawImageCount = 0
  }
}

/**
 * Retrieves the bounds of the graphic shape as a rectangle object
 *
 * @method getBounds
 * @return {Rectangle} the rectangular bounding area
 */
PIXI.Graphics.prototype.getBounds = function (matrix) {
  // return an empty object if the item is a mask!
  if (this.isMask) return PIXI.EmptyRectangle

  if (this.dirty) {
    this.updateLocalBounds()
    this.cachedSpriteDirty = true
    this.dirty = false
  }

  var bounds = this._localBounds

  var w0 = bounds.x
  var w1 = bounds.width + bounds.x

  var h0 = bounds.y
  var h1 = bounds.height + bounds.y

  var worldTransform = matrix || this.worldTransform

  var a = worldTransform.a
  var b = worldTransform.b
  var c = worldTransform.c
  var d = worldTransform.d
  var tx = worldTransform.tx
  var ty = worldTransform.ty

  var x1 = a * w1 + c * h1 + tx
  var y1 = d * h1 + b * w1 + ty

  var x2 = a * w0 + c * h1 + tx
  var y2 = d * h1 + b * w0 + ty

  var x3 = a * w0 + c * h0 + tx
  var y3 = d * h0 + b * w0 + ty

  var x4 = a * w1 + c * h0 + tx
  var y4 = d * h0 + b * w1 + ty

  var maxX = x1
  var maxY = y1

  var minX = x1
  var minY = y1

  minX = x2 < minX ? x2 : minX
  minX = x3 < minX ? x3 : minX
  minX = x4 < minX ? x4 : minX

  minY = y2 < minY ? y2 : minY
  minY = y3 < minY ? y3 : minY
  minY = y4 < minY ? y4 : minY

  maxX = x2 > maxX ? x2 : maxX
  maxX = x3 > maxX ? x3 : maxX
  maxX = x4 > maxX ? x4 : maxX

  maxY = y2 > maxY ? y2 : maxY
  maxY = y3 > maxY ? y3 : maxY
  maxY = y4 > maxY ? y4 : maxY

  this._bounds.x = minX
  this._bounds.width = maxX - minX

  this._bounds.y = minY
  this._bounds.height = maxY - minY

  return this._bounds
}

/**
 * Update the bounds of the object
 *
 * @method updateLocalBounds
 */
PIXI.Graphics.prototype.updateLocalBounds = function () {
  var minX = Infinity
  var maxX = -Infinity

  var minY = Infinity
  var maxY = -Infinity

  if (this.graphicsData.length) {
    var shape, points, x, y, w, h

    for (var i = 0; i < this.graphicsData.length; i++) {
      var data = this.graphicsData[i]
      var type = data.type
      var lineWidth = data.lineWidth
      shape = data.shape

      if (type === PIXI.Graphics.RECT || type === PIXI.Graphics.RREC) {
        x = shape.x - lineWidth / 2
        y = shape.y - lineWidth / 2
        w = shape.width + lineWidth
        h = shape.height + lineWidth

        minX = x < minX ? x : minX
        maxX = x + w > maxX ? x + w : maxX

        minY = y < minY ? y : minY
        maxY = y + h > maxY ? y + h : maxY
      } else if (type === PIXI.Graphics.CIRC) {
        x = shape.x
        y = shape.y
        w = shape.radius + lineWidth / 2
        h = shape.radius + lineWidth / 2

        minX = x - w < minX ? x - w : minX
        maxX = x + w > maxX ? x + w : maxX

        minY = y - h < minY ? y - h : minY
        maxY = y + h > maxY ? y + h : maxY
      } else if (type === PIXI.Graphics.ELIP) {
        x = shape.x
        y = shape.y
        w = shape.width + lineWidth / 2
        h = shape.height + lineWidth / 2

        minX = x - w < minX ? x - w : minX
        maxX = x + w > maxX ? x + w : maxX

        minY = y - h < minY ? y - h : minY
        maxY = y + h > maxY ? y + h : maxY
      } else {
        // POLY
        points = shape.points

        for (var j = 0; j < points.length; j += 2) {
          x = points[j]
          y = points[j + 1]
          minX = x - lineWidth < minX ? x - lineWidth : minX
          maxX = x + lineWidth > maxX ? x + lineWidth : maxX

          minY = y - lineWidth < minY ? y - lineWidth : minY
          maxY = y + lineWidth > maxY ? y + lineWidth : maxY
        }
      }
    }
  } else {
    minX = 0
    maxX = 0
    minY = 0
    maxY = 0
  }

  var padding = this.boundsPadding

  this._localBounds.x = minX - padding
  this._localBounds.width = maxX - minX + padding * 2

  this._localBounds.y = minY - padding
  this._localBounds.height = maxY - minY + padding * 2
}

/**
 * Generates the cached sprite when the sprite has cacheAsBitmap = true
 *
 * @method _generateCachedSprite
 * @private
 */
PIXI.Graphics.prototype._generateCachedSprite = function () {
  var bounds = this.getLocalBounds()

  if (!this._cachedSprite) {
    var canvasBuffer = new PIXI.CanvasBuffer(bounds.width, bounds.height)
    var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas)

    this._cachedSprite = new PIXI.Sprite(texture)
    this._cachedSprite.buffer = canvasBuffer

    this._cachedSprite.worldTransform = this.worldTransform
  } else {
    this._cachedSprite.buffer.resize(bounds.width, bounds.height)
  }

  // leverage the anchor to account for the offset of the element
  this._cachedSprite.anchor.x = -(bounds.x / bounds.width)
  this._cachedSprite.anchor.y = -(bounds.y / bounds.height)

  // this._cachedSprite.buffer.context.save();
  this._cachedSprite.buffer.context.translate(-bounds.x, -bounds.y)

  // make sure we set the alpha of the graphics to 1 for the render..
  this.worldAlpha = 1

  // now render the graphic..
  PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context)
  this._cachedSprite.alpha = this.alpha
}

/**
 * Updates texture size based on canvas size
 *
 * @method updateCachedSpriteTexture
 * @private
 */
PIXI.Graphics.prototype.updateCachedSpriteTexture = function () {
  var cachedSprite = this._cachedSprite
  var texture = cachedSprite.texture
  var canvas = cachedSprite.buffer.canvas

  texture.baseTexture.width = canvas.width
  texture.baseTexture.height = canvas.height
  texture.crop.width = texture.frame.width = canvas.width
  texture.crop.height = texture.frame.height = canvas.height

  cachedSprite._width = canvas.width
  cachedSprite._height = canvas.height
}

/**
 * Destroys a previous cached sprite.
 *
 * @method destroyCachedSprite
 */
PIXI.Graphics.prototype.destroyCachedSprite = function () {
  this._cachedSprite.texture.destroy(true)

  // let the gc collect the unused sprite
  // TODO could be object pooled!
  this._cachedSprite = null
}

/**
 * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
 *
 * @method drawShape
 * @param {Circle|Rectangle|Ellipse|Line|Polygon} shape The Shape object to draw.
 * @return {GraphicsData} The generated GraphicsData object.
 */
PIXI.Graphics.prototype.drawShape = function (shape) {
  PIXI.objectChanged(this)

  if (this.currentPath) {
    // check current path!
    if (this.currentPath.shape.points.length <= 2) {
      this.graphicsData.pop()
    }
  }

  this.currentPath = null

  var data = new PIXI.GraphicsData(
    this.lineWidth,
    this.lineColor,
    this.lineAlpha,
    this.lineDash,
    this.lineCap,
    this.lineJoin,
    this.fillColor,
    this.fillAlpha,
    this.filling,
    shape
  )

  this.graphicsData.push(data)

  if (data.type === PIXI.Graphics.POLY) {
    data.shape.closed = this.filling
    this.currentPath = data
  }

  this.dirty = true

  return data
}

/**
 * A GraphicsData object.
 *
 * @class GraphicsData
 * @constructor
 */
PIXI.GraphicsData = function (
  lineWidth,
  lineColor,
  lineAlpha,
  lineDash,
  lineCap,
  lineJoin,
  fillColor,
  fillAlpha,
  fill,
  shape
) {
  this.lineWidth = lineWidth
  this.lineColor = lineColor
  this.lineAlpha = lineAlpha

  this.lineDash = lineDash
  this.lineCap = lineCap
  this.lineJoin = lineJoin

  this.fillColor = fillColor
  this.fillAlpha = fillAlpha
  this.fill = fill

  this._fillColorStr = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6)
  this._lineColorStr = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6)

  this.shape = shape
  this.type = shape.type
}

// SOME TYPES:
PIXI.Graphics.POLY = 0
PIXI.Graphics.RECT = 1
PIXI.Graphics.CIRC = 2
PIXI.Graphics.ELIP = 3
PIXI.Graphics.RREC = 4

PIXI.Polygon.prototype.type = PIXI.Graphics.POLY
PIXI.Rectangle.prototype.type = PIXI.Graphics.RECT
PIXI.Circle.prototype.type = PIXI.Graphics.CIRC
PIXI.Ellipse.prototype.type = PIXI.Graphics.ELIP
PIXI.RoundedRectangle.prototype.type = PIXI.Graphics.RREC

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class BaseTexture
 * @uses EventTarget
 * @constructor
 * @param source {String} the source object (image or canvas)
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 */
PIXI.BaseTexture = function (source, scaleMode) {
  /**
   * The Resolution of the texture.
   *
   * @property resolution
   * @type Number
   */
  this.resolution = 1

  /**
   * [read-only] The width of the base texture set when the image has loaded
   *
   * @property width
   * @type Number
   * @readOnly
   */
  this.width = 100

  /**
   * [read-only] The height of the base texture set when the image has loaded
   *
   * @property height
   * @type Number
   * @readOnly
   */
  this.height = 100

  /**
   * The scale mode to apply when scaling this texture
   *
   * @property scaleMode
   * @type {Number}
   * @default PIXI.scaleModes.LINEAR
   */
  this.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT

  /**
   * [read-only] Set to true once the base texture has loaded
   *
   * @property hasLoaded
   * @type Boolean
   * @readOnly
   */
  this.hasLoaded = false

  /**
   * [read-only] Set tu true once the base texture failed to load
   * @property loadFailed
   * @type Boolean
   * @readOnly
   */
  this.loadFailed = false

  /**
   * The image source that is used to create the texture.
   *
   * @property source
   * @type Image
   */
  this.source = source

  this._UID = PIXI._UID++

  if (!source) return

  if (
    (this.source.complete || this.source.getContext) &&
    this.source.width &&
    this.source.height
  ) {
    this.hasLoaded = true
    this.width = this.source.naturalWidth || this.source.width
    this.height = this.source.naturalHeight || this.source.height
  } else {
    var scope = this

    this.source.onload = function () {
      if (scope.source) {
        scope.hasLoaded = true
        scope.width = scope.source.naturalWidth || scope.source.width
        scope.height = scope.source.naturalHeight || scope.source.height

        // add it to somewhere...
        scope.dispatchEvent({type: 'loaded', content: scope})
      }
    }

    this.source.onerror = function () {
      scope.loadFailed = true
      scope.dispatchEvent({type: 'error', content: scope})
    }
  }

  /**
   * @property imageUrl
   * @type String
   */
  this.imageUrl = null
}

PIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture

PIXI.EventTarget.mixin(PIXI.BaseTexture.prototype)

/**
 * Destroys this base texture
 *
 * @method destroy
 */
PIXI.BaseTexture.prototype.destroy = function () {
  if (this.imageUrl) {
    delete PIXI.BaseTextureCache[this.imageUrl]
    delete PIXI.TextureCache[this.imageUrl]
    this.imageUrl = null
    if (!navigator.isCocoonJS) this.source.src = ''
  } else if (this.source && this.source._pixiId) {
    delete PIXI.BaseTextureCache[this.source._pixiId]
  }
  this.source = null
}

/**
 * Changes the source image of the texture
 *
 * @method updateSourceImage
 * @param newSrc {String} the path of the image
 */
PIXI.BaseTexture.prototype.updateSourceImage = function (newSrc) {
  this.hasLoaded = false
  this.source.src = null
  this.source.src = newSrc
}

PIXI.BaseTexture.prototype.onLoad = function (callback) {
  var _this = this
  var handler = function () {
    _this.removeAllListeners('error')
    _this.removeEventListener('loaded', handler)
    callback(_this)
  }

  if (_this.hasLoaded) {
    window.__rafRequestOriginal(function () {
      callback(_this)
    })
  } else {
    _this.addEventListener('loaded', handler)
  }

  return _this
}

PIXI.BaseTexture.prototype.onLoadError = function (callback) {
  var _this = this
  var handler = function () {
    _this.removeAllListeners('loaded')
    _this.removeEventListener('error', handler)
    callback(_this)
  }
  if (_this.loadFailed) {
    window.__rafRequestOriginal(function () {
      callback(_this)
    })
  } else {
    _this.addEventListener('error', handler)
  }

  return _this
}

/**
 * Helper function that creates a base texture from the given image url.
 * If the image is not in the base texture cache it will be created and loaded.
 *
 * @static
 * @method fromImage
 * @param imageUrl {String} The image url of the texture
 * @param crossorigin {Boolean}
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @return BaseTexture
 */
PIXI.BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {
  var baseTexture = PIXI.BaseTextureCache[imageUrl]

  if (!baseTexture) {
    // new Image() breaks tex loading in some versions of Chrome.
    // See https://code.google.com/p/chromium/issues/detail?id=238071
    var image = new Image()
    var requestUrl = imageUrl

    if (crossorigin) {
      image.setAttribute('crossOrigin', 'anonymous')
    }

    image.src = requestUrl
    baseTexture = new PIXI.BaseTexture(image, scaleMode)
    baseTexture.imageUrl = imageUrl
    PIXI.BaseTextureCache[imageUrl] = baseTexture
  }

  return baseTexture
}

PIXI.BaseTexture.fromImageObject = function (image, scaleMode) {
  var baseTexture = PIXI.BaseTextureCache[image.src]

  if (!baseTexture) {
    baseTexture = new PIXI.BaseTexture(image, scaleMode)
    baseTexture.imageUrl = image.src
    PIXI.BaseTextureCache[image.src] = baseTexture
  }

  return baseTexture
}

/**
 * Helper function that creates a base texture from the given canvas element.
 *
 * @static
 * @method fromCanvas
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @return BaseTexture
 */
PIXI.BaseTexture.fromCanvas = function (canvas, scaleMode) {
  if (!canvas._pixiId) {
    canvas._pixiId = 'canvas_' + PIXI.TextureCacheIdGenerator++
  }

  var baseTexture = PIXI.BaseTextureCache[canvas._pixiId]

  if (!baseTexture) {
    baseTexture = new PIXI.BaseTexture(canvas, scaleMode)
    PIXI.BaseTextureCache[canvas._pixiId] = baseTexture
  }

  return baseTexture
}

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

PIXI.TextureCache = {}
PIXI.FrameCache = {}

PIXI.TextureCacheIdGenerator = 0

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.
 *
 * @class Texture
 * @uses EventTarget
 * @constructor
 * @param baseTexture {BaseTexture} The base texture source to create the texture from
 * @param frame {Rectangle} The rectangle frame of the texture to show
 * @param [crop] {Rectangle} The area of original texture
 * @param [trim] {Rectangle} Trimmed texture rectangle
 */
PIXI.Texture = function (baseTexture, frame, crop, trim) {
  /**
   * Does this Texture have any frame data assigned to it?
   *
   * @property noFrame
   * @type Boolean
   */
  this.noFrame = false

  if (!frame) {
    this.noFrame = true
    frame = new PIXI.Rectangle(0, 0, 1, 1)
  }

  if (baseTexture instanceof PIXI.Texture) {
    baseTexture = baseTexture.baseTexture
  }

  /**
   * The base texture that this texture uses.
   *
   * @property baseTexture
   * @type BaseTexture
   */
  this.baseTexture = baseTexture

  /**
   * The frame specifies the region of the base texture that this texture uses
   *
   * @property frame
   * @type Rectangle
   */
  this.frame = frame

  /**
   * The texture trim data.
   *
   * @property trim
   * @type Rectangle
   */
  this.trim = trim

  /**
   * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
   *
   * @property valid
   * @type Boolean
   */
  this.valid = false

  /**
   * The width of the Texture in pixels.
   *
   * @property width
   * @type Number
   */
  this.width = 0

  /**
   * The height of the Texture in pixels.
   *
   * @property height
   * @type Number
   */
  this.height = 0

  /**
   * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
   * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
   *
   * @property crop
   * @type Rectangle
   */
  this.crop = crop || new PIXI.Rectangle(0, 0, 1, 1)

  this.onBaseTextureLoadedWrapper = this.onBaseTextureLoaded.bind(this)

  if (baseTexture.hasLoaded) {
    if (this.noFrame)
      frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height)
    this.setFrame(frame)
  } else {
    baseTexture.addEventListener('loaded', this.onBaseTextureLoadedWrapper)
  }
}

PIXI.Texture.prototype.constructor = PIXI.Texture
PIXI.EventTarget.mixin(PIXI.Texture.prototype)

/**
 * Called when the base texture is loaded
 *
 * @method onBaseTextureLoaded
 * @private
 */
PIXI.Texture.prototype.onBaseTextureLoaded = function () {
  var baseTexture = this.baseTexture
  baseTexture.removeEventListener('loaded', this.onBaseTextureLoadedWrapper)

  if (this.noFrame)
    this.frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height)

  this.setFrame(this.frame)

  this.dispatchEvent({type: 'update', content: this})
}

/**
 * Destroys this texture
 *
 * @method destroy
 * @param destroyBase {Boolean} Whether to destroy the base texture as well
 */
PIXI.Texture.prototype.destroy = function (destroyBase) {
  if (destroyBase) this.baseTexture.destroy()

  this.valid = false
}

/**
 * Specifies the region of the baseTexture that this texture will use.
 *
 * @method setFrame
 * @param frame {Rectangle} The frame of the texture to set it to
 */
PIXI.Texture.prototype.setFrame = function (frame) {
  PIXI.objectChanged(null)

  this.noFrame = false

  this.frame = frame
  this.width = frame.width
  this.height = frame.height

  this.crop.x = frame.x
  this.crop.y = frame.y
  this.crop.width = frame.width
  this.crop.height = frame.height

  this.valid =
    frame &&
    frame.width &&
    frame.height &&
    this.baseTexture.source &&
    this.baseTexture.hasLoaded

  if (this.trim) {
    this.width = this.trim.width
    this.height = this.trim.height
    this.frame.width = this.trim.width
    this.frame.height = this.trim.height
  }
}

/**
 * Helper function that creates a Texture object from the given image url.
 * If the image is not in the texture cache it will be  created and loaded.
 *
 * @static
 * @method fromImage
 * @param imageUrl {String} The image url of the texture
 * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @return Texture
 */
PIXI.Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {
  var texture = PIXI.TextureCache[imageUrl]

  if (!texture) {
    texture = new PIXI.Texture(
      PIXI.BaseTexture.fromImage(imageUrl, crossorigin, scaleMode)
    )
    PIXI.TextureCache[imageUrl] = texture
  }

  return texture
}

/**
 * Helper function that returns a Texture objected based on the given frame id.
 * If the frame id is not in the texture cache an error will be thrown.
 *
 * @static
 * @method fromFrame
 * @param frameId {String} The frame id of the texture
 * @return Texture
 */
PIXI.Texture.fromFrame = function (frameId) {
  var texture = PIXI.TextureCache[frameId]
  if (!texture)
    throw new Error(
      'The frameId "' + frameId + '" does not exist in the texture cache '
    )
  return texture
}

/**
 * Helper function that creates a new a Texture based on the given canvas element.
 *
 * @static
 * @method fromCanvas
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @return Texture
 */
PIXI.Texture.fromCanvas = function (canvas, scaleMode) {
  var baseTexture = PIXI.BaseTexture.fromCanvas(canvas, scaleMode)

  return new PIXI.Texture(baseTexture)
}

/**
 * Helper function that returns a texture based on an image url
 * If the image is not in the texture cache it will be  created and loaded
 *
 * @static
 * @method fromImageObject
 * @param image {Image} The image of the texture
 * @param scaleMode {Number} Should be one of the PIXI.scaleMode consts
 * @return Texture
 */
PIXI.Texture.fromImageObject = function (image, scaleMode) {
  var texture = PIXI.TextureCache[image.src]

  if (!texture) {
    texture = new PIXI.Texture(
      PIXI.BaseTexture.fromImageObject(image, scaleMode)
    )
    PIXI.TextureCache[image.src] = texture
  }

  return texture
}

PIXI.Texture.fromImageWithoutCache = function (
  imageUrl,
  crossorigin,
  scaleMode
) {
  return new PIXI.Texture(
    PIXI.BaseTexture.fromImage(imageUrl, crossorigin, scaleMode)
  )
}

PIXI.Texture.prototype.onLoad = function (callback) {
  var _this = this
  var handler = function () {
    _this.baseTexture.removeAllListeners('error')
    _this.baseTexture.removeEventListener('loaded', handler)

    callback(_this)
  }

  if (_this.baseTexture.hasLoaded) {
    window.__rafRequestOriginal(function () {
      callback(_this)
    })
  } else {
    _this.baseTexture.addEventListener('loaded', handler)
  }

  return _this
}

PIXI.Texture.prototype.onLoadError = function (callback) {
  var _this = this
  var handler = function () {
    _this.baseTexture.removeAllListeners('loaded')
    _this.baseTexture.removeEventListener('error', handler)
    callback(_this)
  }
  if (_this.baseTexture.loadFailed) {
    window.__rafRequestOriginal(function () {
      callback(_this)
    })
  } else {
    _this.baseTexture.addEventListener('error', handler)
  }

  return _this
}

/**
 * Adds a texture to the global PIXI.TextureCache. This cache is shared across the whole PIXI object.
 *
 * @static
 * @method addTextureToCache
 * @param texture {Texture} The Texture to add to the cache.
 * @param id {String} The id that the texture will be stored against.
 */
PIXI.Texture.addTextureToCache = function (texture, id) {
  PIXI.TextureCache[id] = texture
}

/**
 * Remove a texture from the global PIXI.TextureCache.
 *
 * @static
 * @method removeTextureFromCache
 * @param id {String} The id of the texture to be removed
 * @return {Texture} The texture that was removed
 */
PIXI.Texture.removeTextureFromCache = function (id) {
  var texture = PIXI.TextureCache[id]
  delete PIXI.TextureCache[id]
  delete PIXI.BaseTextureCache[id]
  return texture
}

PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture())

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. The position and rotation of the given Display Objects is ignored. For example:
 *
 *    var renderTexture = new PIXI.RenderTexture(800, 600);
 *    var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *    sprite.position.x = 800/2;
 *    sprite.position.y = 600/2;
 *    sprite.anchor.x = 0.5;
 *    sprite.anchor.y = 0.5;
 *    renderTexture.render(sprite);
 *
 * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual position a DisplayObjectContainer should be used:
 *
 *    var doc = new PIXI.DisplayObjectContainer();
 *    doc.addChild(sprite);
 *    renderTexture.render(doc);  // Renders to center of renderTexture
 *
 * @class RenderTexture
 * @extends Texture
 * @constructor
 * @param width {Number} The width of the render texture
 * @param height {Number} The height of the render texture
 * @param offscreen {boolean} use OffscreenCanvas instead dom-canvas or not
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used for this RenderTexture
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @param resolution {Number} The resolution of the texture being generated
 */
PIXI.RenderTexture = function (
  width,
  height,
  offscreen,
  renderer,
  scaleMode,
  resolution
) {
  /**
   * The with of the render texture
   *
   * @property width
   * @type Number
   */
  this.width = width || 100

  /**
   * The height of the render texture
   *
   * @property height
   * @type Number
   */
  this.height = height || 100

  /**
   * The Resolution of the texture.
   *
   * @property resolution
   * @type Number
   */
  this.resolution = resolution || 1

  /**
   * The framing rectangle of the render texture
   *
   * @property frame
   * @type Rectangle
   */
  this.frame = new PIXI.Rectangle(
    0,
    0,
    this.width * this.resolution,
    this.height * this.resolution
  )

  /**
   * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
   * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
   *
   * @property crop
   * @type Rectangle
   */
  this.crop = new PIXI.Rectangle(
    0,
    0,
    this.width * this.resolution,
    this.height * this.resolution
  )

  /**
   * The base texture object that this texture uses
   *
   * @property baseTexture
   * @type BaseTexture
   */
  this.baseTexture = new PIXI.BaseTexture()
  this.baseTexture.width = this.width * this.resolution
  this.baseTexture.height = this.height * this.resolution
  this.baseTexture._glTextures = []
  this.baseTexture.resolution = this.resolution

  this.baseTexture.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT

  this.baseTexture.hasLoaded = true

  PIXI.Texture.call(
    this,
    this.baseTexture,
    new PIXI.Rectangle(0, 0, this.width, this.height)
  )

  /**
   * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.
   *
   * @property renderer
   * @type CanvasRenderer|WebGLRenderer
   */
  this.renderer = renderer || PIXI.defaultRenderer

  this.render = this.renderCanvas
  this.textureBuffer = new PIXI.CanvasBuffer(
    this.width * this.resolution,
    this.height * this.resolution,
    offscreen
  )
  this.baseTexture.source = this.textureBuffer.canvas

  /**
   * @property valid
   * @type Boolean
   */
  this.valid = true
}

PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype)
PIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture

/**
 * Resizes the RenderTexture.
 *
 * @method resize
 * @param width {Number} The width to resize to.
 * @param height {Number} The height to resize to.
 * @param updateBase {Boolean} Should the baseTexture.width and height values be resized as well?
 */
PIXI.RenderTexture.prototype.resize = function (width, height, updateBase) {
  if (width === this.width && height === this.height) {
    this.textureBuffer.clear()
    return
  }

  this.valid = width > 0 && height > 0

  this.width = this.frame.width = this.crop.width = width
  this.height = this.frame.height = this.crop.height = height

  if (updateBase) {
    this.baseTexture.width = this.width
    this.baseTexture.height = this.height
  }

  if (!this.valid) return

  this.textureBuffer.resize(
    this.width * this.resolution,
    this.height * this.resolution
  )
}

/**
 * Clears the RenderTexture.
 *
 * @method clear
 */
PIXI.RenderTexture.prototype.clear = function () {
  if (!this.valid) return

  this.textureBuffer.clear()
}

/**
 * Destroys the RenderTexture completely.
 *
 * @method destroy
 */
PIXI.RenderTexture.prototype.destroy = function () {
  this.clear()
  this.valid = false
}

/**
 * This function will draw the display object to the texture.
 *
 * @method renderCanvas
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear] {Boolean} If true the texture will be cleared before the displayObject is drawn
 * @private
 */
PIXI.RenderTexture.prototype.renderCanvas = function (
  displayObject,
  matrix,
  clear
) {
  if (!this.valid) return

  var wt = displayObject.worldTransform
  wt.identity()
  if (matrix) wt.append(matrix)

  displayObject._worldScale = Math.sqrt(wt.a * wt.a + wt.b * wt.b)

  // setWorld Alpha to ensure that the object is renderer at full opacity
  displayObject.worldAlpha = 1

  if (displayObject._mask) {
    PIXI.CanvasMaskManager.updateMaskTransform(displayObject)
  }

  // Time to update all the children of the displayObject with the new matrix..
  var children = displayObject.children

  for (var i = 0, j = children.length; i < j; i++) {
    children[i].dirtyGeom = true
  }

  if (clear) this.textureBuffer.clear()

  var context = this.textureBuffer.context

  displayObject.dirtyGeom = false

  this.renderer.renderDisplayObject(displayObject, context)

  displayObject.dirtyGeom = true
}

/**
 * Will return a HTML Image of the texture
 *
 * @method getImage
 * @return {Image}
 */
PIXI.RenderTexture.prototype.getImage = function () {
  var image = new Image()
  image.src = this.getBase64()
  return image
}

/**
 * Will return a a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.
 *
 * @method getBase64
 * @return {String} A base64 encoded string of the texture.
 */
PIXI.RenderTexture.prototype.getBase64 = function () {
  return this.getCanvas().toDataURL()
}

/**
 * Creates a Canvas element, renders this RenderTexture to it and then returns it.
 *
 * @method getCanvas
 * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
 */
PIXI.RenderTexture.prototype.getCanvas = function () {
  return this.textureBuffer.canvas
}

PIXI.RenderTexture.tempMatrix = new PIXI.Matrix()

/*
 * @class LiveText
 * @extends Sprite
 * @constructor
 * @param text {String} right html-text
 * @param style {Object} style object
 */

PIXI.LiveText = function (text, style) {
  PIXI.Sprite.call(this, null)

  this.resolution = 1
  this._fontString = ''
  this._directedText = ''

  this.setText(text)

  this.fontSize = 10
  this.lineHeight = 11
  this.fontFamily = 'Arial'
  this.fontWeight = undefined
  this.color = 'black'
  this.bold = false
  this.italic = false
  this.underline = false
  this.background = false
  this.strike = false
  this.fontMetrics = false

  this.setStyle(style)
}

PIXI.LiveText.prototype = Object.create(PIXI.Sprite.prototype)
PIXI.LiveText.prototype.constructor = PIXI.LiveText

Object.defineProperty(PIXI.LiveText.prototype, 'width', {
  get: function () {
    this.recalcWidth()
    return this.__width
  },
})

PIXI.LiveText.prototype.setText = function (text) {
  this.text = text ? '' + text : ''
  this.__width = 0
  this.dirty = true
}

PIXI.LiveText.prototype.setStyle = function (style) {
  if (!style) {
    return
  }

  if (style.color !== undefined) {
    this.color = style.color
  }

  if (style.fontWeight !== undefined) {
    this.fontWeight = style.fontWeight
    this.dirty = true
  }

  if (style.bold !== undefined) {
    this.bold = style.bold
    this.dirty = true
  }
  if (style.italic !== undefined) {
    this.italic = style.italic
    this.dirty = true
  }
  if (style.underline !== undefined) {
    this.underline = style.underline
  }

  if (style.strike !== undefined) {
    this.strike = style.strike
  }

  if (style.background !== undefined) {
    this.background = style.background
  }

  if (style.font) {
    this.fontFamily = style.font
    this.dirty = true
  }

  if (style.size) {
    this.fontSize = style.size
    if (!style.lineHeight) {
      this.lineHeight = Math.ceil(this.fontSize * 1.1)
    }
    this.dirty = true
  }

  if (style.lineHeight) {
    this.lineHeight = style.lineHeight
  }

  if (style.direction != undefined) {
    this.direction = style.direction
    this.dirty = true
  }

  if (this.dirty) {
    this.__width = 0
  }
  if (style.actualWidth) {
    this.__width = style.actualWidth
  }

  if (style.fontMetrics) {
    this.fontMetrics = style.fontMetrics
  }
}

PIXI.LiveText.prototype.recalcWidth = function () {
  if (this.dirty) {
    this.dirty = false

    this._fontString = this.getFontString()
    if (!this.__width && this.text.length) {
      //ширина нулевая, а текст нет
      PIXI.Text.fontPropertiesContext.font = this._fontString
      this.__width = PIXI.Text.fontPropertiesContext.measureText(
        this.text
      ).width
    }

    var mark = this.direction == 'rtl' ? PIXI.RLM : PIXI.LRM
    this._directedText = mark + this.text + mark
  }
}

PIXI.LiveText.prototype.getFontString = function () {
  var str = ''
  if (this.fontWeight) {
    str += this.fontWeight + ' '
  } else if (this.bold) {
    str += 'bold '
  }
  if (this.italic) {
    str += 'italic '
  }
  str += this.fontSize + 'px ' + this.fontFamily
  return str
}

PIXI.LiveText.prototype._renderContent = function (renderSession) {
  renderSession.context.globalAlpha = this.worldAlpha

  var mtx = this.worldTransform

  var tx = mtx.tx * renderSession.resolution
  var ty = mtx.ty * renderSession.resolution
  if (renderSession.roundPixels || this.roundPixels) {
    tx |= 0
    ty |= 0
  }

  renderSession.context.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty)

  this.recalcWidth()

  var ctx = renderSession.context

  //todo: used for debugging..
  // ctx.fillStyle = "transparent";
  // ctx.strokeStyle = "#AAAAFF";
  // ctx.lineWidth = 1;
  // ctx.strokeRect(0, 0, this.__width , this.lineHeight);
  // ctx.strokeStyle = "transparent";
  //   var testLine = function(ctx, x, y, len, style) {
  //       ctx.strokeStyle = style;
  //       ctx.beginPath();
  //       ctx.moveTo(x, y);
  //       ctx.lineTo(x + len, y);
  //       ctx.closePath();
  //       ctx.stroke();
  //   }

  if (this.background && this._directedText.length > 0) {
    ctx.fillStyle = this.background
    ctx.lineWidth = 1
    ctx.fillRect(0, 0, this.__width, this.lineHeight)
    ctx.fillStyle = 'transparent'
  }

  ctx.font = this._fontString
  ctx.textBaseline = 'middle'
  ctx.fillStyle = this.color

  var offset = (this.lineHeight || this.fontSize) / 2
  var thick = Math.floor(this.fontSize * 0.1)
  var thickMax = Math.ceil(this.fontSize * 0.1)
  var underlineY = offset + this.fontSize / 2 - thickMax / 2
  var strikeY = offset

  if (this.fontMetrics) {
    offset = this.fontMetrics.ascent
    underlineY = offset + thickMax / 2
    strikeY = (this.lineHeight || this.fontSize) / 2
    ctx.textBaseline = 'alphabetic'

    // debug
    // var w = this.__width
    // var h = this.fontMetrics
    // testLine(ctx, 0, 0, w, 'red');
    // testLine(ctx, 0, h.ascent, w, 'green');
    // testLine(ctx, 0, h.height, w, 'blue');
  }

  ctx.fillText(this._directedText, 0, offset)

  if (this.underline) {
    ctx.fillRect(0, underlineY, this.__width, thick)
  }

  if (this.strike) {
    ctx.fillRect(0, strikeY, this.__width, thick)
  }
}
