// Type definitions for PIXI 1.5.0
// Project: https://github.com/GoodBoyDigital/pixi.js/
// Definitions by: xperiments <http://github.com/xperiments>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export module PIXI {
  /* CONSTANTS */
  export const WEBGL_RENDERER: number
  export const CANVAS_RENDERER: number
  export const VERSION: string

  export enum blendModes {
    NORMAL,
    ADD,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    HUE,
    SATURATION,
    COLOR,
    LUMINOSITY,
  }

  export var INTERACTION_REQUENCY: number
  export var AUTO_PREVENT_DEFAULT: boolean
  export var RAD_TO_DEG: number
  export var DEG_TO_RAD: number

  export var LEFT_MOUSE_BUTTON: number
  export var MIDDLE_MOUSE_BUTTON: number
  export var RIGHT_MOUSE_BUTTON: number

  export var LONG_CLICK: string
  export var LEFT_CLICK: string
  export var MIDDLE_CLICK: string
  export var RIGHT_CLICK: string
  export var ACTUAL_LEFT_MOUSE_DOWN: string
  export var LEFT_MOUSE_DOWN: string
  export var RIGHT_MOUSE_DOWN: string
  export var MIDDLE_MOUSE_DOWN: string
  export var LEFT_MOUSE_UP: string
  export var RIGHT_MOUSE_UP: string
  export var MIDDLE_MOUSE_UP: string
  export var MOUSE_MOVE: string
  export var MOUSE_ENTER: string
  export var MOUSE_LEAVE: string
  export var TOUCH_START: string
  export var MULTI_TOUCH: string
  export var TOUCH_MOVE: string
  export var TOUCH_END: string

  export var TextureCache: {[key: string]: Texture | undefined}
  export var BaseTextureCache: {[key: string]: BaseTexture | undefined}

  export var dontSayHello: boolean
  export var pixelRatio: number

  export var needRender: boolean

  export var offscreenAvailable: boolean

  /* MODULE FUNCTIONS */
  export function autoDetectRenderer(
    width: number,
    height: number,
    options?: RendererOptions
  ): IPixiRenderer

  export function AjaxRequest(): XMLHttpRequest

  export function objectChanged(displayObject?: DisplayObject): void

  /*INTERFACES*/
  export interface IBasicCallback {
    (): void
  }

  export interface IEventCallback {
    (e?: IEvent): void
  }

  export interface IEvent {
    type: string
    content: any
  }

  export interface IHitDetails {
    hitType?: PIXI.hitTypes
  }

  export interface IInteractionData {
    eventType?: string
    params?: any
  }

  export interface IHitArea {
    contains(x: number, y: number, interactionData?: IInteractionData): boolean
    hitTest?(
      x: number,
      y: number,
      interactionData?: IInteractionData
    ): false | IHitDetails
  }

  export interface IPixiRenderer {
    view: HTMLCanvasElement
    render(stage: Stage): void
  }

  export interface IBitmapTextStyle {
    font?: string
    align?: string
    tint?: string
  }

  export interface ITextStyle {
    font?: string
    stroke?: string
    fill?: string
    align?: string
    strokeThickness?: number
    wordWrap?: boolean
    wordWrapWidth?: number
  }

  export interface IUniform {
    type: string
    value: any
  }

  export interface ILoader {
    constructor(url: string, crossorigin: boolean): void
    load(): void
  }

  export interface ITintMethod {
    (texture: Texture, color: number, canvas: HTMLCanvasElement): void
  }

  export interface IMaskData {
    alpha: number
    worldTransform: number[]
  }

  export interface IRenderSession {
    // unclear; Taken from DisplayObjectContainer:152
    context: CanvasRenderingContext2D
    maskManager: CanvasMaskManager
    scaleMode: scaleModes
    smoothProperty: string
  }

  export interface IShaderAttribute {
    // TODO: Find signature of shader attributes
  }

  export interface IFilterBlock {
    // TODO: Find signature of filterBlock
  }

  export interface RendererOptions {
    /**
     * the width of the renderers view [default=800]
     */
    width?: number

    /**
     * the height of the renderers view [default=600]
     */
    height?: number

    /**
     * the canvas to use as a view, optional
     */
    view?: HTMLCanvasElement

    /**
     * If the render view is transparent, [default=false]
     */
    transparent?: boolean

    /**
     * sets antialias (only applicable in chrome at the moment) [default=false]
     */
    antialias?: boolean

    /**
     * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context [default=false]
     */
    preserveDrawingBuffer?: boolean

    /**
     * The resolution / device pixel ratio of the renderer, retina would be 2 [default=1]
     */
    resolution?: number

    /**
     * prevents selection of WebGL renderer, even if such is present [default=false]
     */
    forceCanvas?: boolean

    /**
     * The background color of the rendered area (shown if not transparent) [default=0x000000]
     */
    backgroundColor?: number

    /**
     * This sets if the renderer will clear the canvas or not before the new render pass. [default=true]
     */
    clearBeforeRender?: boolean

    /**
     * If true Pixi will Math.floor() x/ y values when rendering, stopping pixel interpolation. [default=false]
     */
    roundPixels?: boolean

    /**
     * forces FXAA antialiasing to be used over native FXAA is faster, but may not always look as great ** webgl only** [default=false]
     */
    forceFXAA?: boolean

    /**
     * `true` to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. **webgl only** [default=false]
     */
    legacy?: boolean

    /**
     * Deprecated
     */
    context?: WebGLRenderingContext

    /**
     * Deprecated
     */
    autoResize?: boolean

    /**
     * Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card
     */
    powerPreference?: string
  }

  /* CLASSES */

  export class AbstractFilter {
    passes: AbstractFilter[]
    shaders: PixiShader[]
    dirty: boolean
    padding: number
    uniforms: {[name: string]: IUniform}
    fragmentSrc: any[]
  }

  export class AlphaMaskFilter extends AbstractFilter {
    map: Texture

    constructor(texture: Texture)

    onTextureLoaded(): void
  }

  export class AssetLoader extends EventTarget {
    assetURLs: string[]
    crossorigin: boolean
    loadersByType: {[key: string]: ILoader}

    constructor(assetURLs: string[], crossorigin: boolean)

    load(): void
  }

  export class AtlasLoader extends EventTarget {
    url: string
    baseUrl: string
    crossorigin: boolean
    loaded: boolean

    constructor(url: string, crossorigin: boolean)

    load(): void
  }

  export class BaseTexture extends EventTarget {
    height: number
    width: number
    source: any
    imageUrl: string
    scaleMode: scaleModes
    hasLoaded: boolean

    constructor(source: HTMLImageElement, scaleMode: scaleModes)
    constructor(source: HTMLCanvasElement, scaleMode: scaleModes)

    destroy(): void

    updateSourceImage(newSrc: string): void

    static fromImage(
      imageUrl: string,
      crossorigin: boolean,
      scaleMode?: scaleModes
    ): BaseTexture

    static fromCanvas(
      canvas: HTMLCanvasElement,
      scaleMode: scaleModes
    ): BaseTexture

    static fromHTML(html: string, width: number, height: number): Texture

    onLoad(callback: (texture: BaseTexture) => any): BaseTexture

    onLoadError(callback: (texture: BaseTexture) => void): BaseTexture
  }

  export class BitmapFontLoader extends EventTarget {
    baseUrl: string
    crossorigin: boolean
    texture: Texture
    url: string

    constructor(url: string, crossorigin: boolean)

    load(): void
  }

  export class BitmapText extends DisplayObjectContainer {
    fontName: string
    fontSize: number
    tint: string

    constructor(text: string, style: IBitmapTextStyle)

    setText(text: string): void

    setStyle(style: IBitmapTextStyle): void
  }

  export class BlurFilter extends AbstractFilter {
    blur: number
    blurX: number
    blurY: number
  }

  export class CanvasMaskManager {
    pushMask(maskData: IMaskData, context: CanvasRenderingContext2D): void

    popMask(context: CanvasRenderingContext2D): void
  }

  export class CanvasRenderer implements IPixiRenderer {
    type: number
    clearBeforeRender: boolean
    roundPixels: boolean
    transparent: boolean
    width: number
    height: number
    view: HTMLCanvasElement
    context: CanvasRenderingContext2D
    refresh: boolean
    count: number
    maskManager: CanvasMaskManager
    renderSession: IRenderSession

    constructor(width: number, height: number, options?: RendererOptions)
    constructor(
      width: number,
      height: number,
      view?: HTMLCanvasElement,
      transparent?: boolean
    )

    render(stage: Stage): void

    resize(width: number, height: number): void

    destroy(removeView?: boolean): void
  }

  export class CanvasTinter {
    canvas: HTMLCanvasElement

    getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement

    tintWithMultiply(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement
    ): void

    tintWithOverlay(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement
    ): void

    tintWithPerPixel(
      texture: Texture,
      color: number,
      canvas: HTMLCanvasElement
    ): void

    static cacheStepsPerColorChannel: number
    static convertTintToImage: boolean
    static canUseMultiply: boolean
    static tintMethod: ITintMethod

    static roundColor(color: number): number
  }

  export class Circle implements IHitArea {
    x: number
    y: number
    radius: number

    constructor(x: number, y: number, radius: number)

    clone(): Circle

    contains(x: number, y: number): boolean
  }

  export class ColorMatrixFilter extends AbstractFilter {
    matrix: number[]
  }

  export class ColorStepFilter extends AbstractFilter {
    step: number
  }

  export class DisplacementFilter extends AbstractFilter {
    map: Texture
    offset: Point
    scale: Point

    constructor(texture: Texture)
  }

  export class DisplayObject {
    alpha: number
    buttonMode: boolean
    get cursor(): string
    set cursor(value: string)
    filterArea: Rectangle
    filters: AbstractFilter[]
    hitArea: IHitArea
    interactive: boolean
    parent: DisplayObjectContainer
    pivot: Point
    position: Point
    renderable: boolean
    rotation: number
    scale: any //Point or number
    stage: Stage
    visible: boolean
    worldAlpha: number
    worldTransform: PIXI.Matrix
    worldVisible: boolean
    x: number
    y: number
    canHitTest: boolean
    cacheAsBitmap: boolean

    _autotestId: string

    //Miro
    name: string

    click(e: InteractionData): void

    getBounds(): Rectangle

    getLocalBounds(): Rectangle

    mousedown(e: InteractionData): void

    mouseout(e: InteractionData): void

    mouseover(e: InteractionData): void

    mouseup(e: InteractionData): void

    mouseupoutside(e: InteractionData): void

    setStateReference(stage: Stage): void

    tap(e: InteractionData): void

    touchend(e: InteractionData): void

    touchendoutside(e: InteractionData): void

    touchstart(e: InteractionData): void

    initEventDispatcher(): void

    addEventListener(type: string, handler: any): void

    removeEventListener(type: string, handler: any): void

    setPivot(x: number, y: number): void

    toGlobal(position: PIXI.Point): PIXI.Point

    toLocal(position: PIXI.Point): PIXI.Point

    setMask(
      includeAreas?: PIXI.Graphics[],
      excludeAreas?: PIXI.Graphics[]
    ): void

    protected _renderCanvas(
      renderSession: any,
      needUpdateTransform?: boolean,
      moveDelta?: PIXI.Point
    ): void

    protected updateTransform(): void

    moveFaster(position: PIXI.Point): void
  }

  export class DisplayObjectContainer extends DisplayObject {
    get height(): number
    set height(value: number)
    get width(): number
    set width(value: number)

    children: DisplayObject[]
    ownContentVisible: boolean

    addChild(child: DisplayObject): void

    addChildAt(child: DisplayObject, index: number): void

    getChildAt(index: number): DisplayObject

    removeChild(child: DisplayObject): void

    removeStageReference(): void

    removeChildren(): void

    findObject(
      func: (object: PIXI.DisplayObject) => boolean
    ): PIXI.DisplayObject | undefined
  }

  export class Ellipse implements IHitArea {
    x: number
    y: number
    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number)

    clone(): Ellipse

    contains(x: number, y: number): boolean

    getBounds(): Rectangle
  }

  export class Event {
    target: PIXI.DisplayObject
    type: string
    data: any
    content?: any

    stopPropagation(): void

    stopImmediatePropagation(): void
  }

  export class EventTarget {
    listeners: {[key: string]: IEventCallback[]}

    addEventListener(type: string, listener: IEventCallback): void

    dispatchEvent(event: IEvent): void

    removeAllListeners(type: string): void

    removeEventListener(type: string, listener: IEventCallback): void
  }

  export class FilterTexture {
    fragmentSrc: string[]
    gl: WebGLRenderingContext
    program: WebGLProgram

    constructor(gl: WebGLRenderingContext, width: number, height: number)

    clear(): void

    resize(width: number, height: number): void

    destroy(): void
  }

  export class Graphics extends DisplayObjectContainer implements IHitArea {
    blendMode: blendModes
    get bounds(): Rectangle
    boundsPadding: number
    fillAlpha: number
    isMask: boolean
    lineColor: string
    lineWidth: number
    preserveLineWidth: boolean
    lineDash: Array<number>
    lineCap: string
    lineJoin: string
    tint: number

    contains(x: number, y: number): boolean

    beginFill(color: number, alpha: number): void

    clear(): void

    drawCircle(x: number, y: number, radius: number): void

    drawEllipse(x: number, y: number, width: number, height: number): void

    drawRect(x: number, y: number, width: number, height: number): void

    drawRoundedRect(
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ): void

    drawRoundedRect(
      x: number,
      y: number,
      width: number,
      height: number,
      radiusTopLeft: number,
      radiusTopRight: number,
      radiusBottomRight: number,
      radiusBottomLeft: number
    ): void

    drawPolygon(points: number[]): void

    endFill(): void

    generateTexture(): Texture

    getBounds(): Rectangle

    lineStyle(lineWidth: number, color: number, alpha: number): void

    quadraticCurveTo(
      cpX: number,
      cpY: number,
      toX: number,
      toY: number,
      segments?: number
    ): void

    bezierCurveTo(
      cpX: number,
      cpY: number,
      cpX2: number,
      cpY2: number,
      toX: number,
      toY: number,
      segments?: number
    ): void

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void

    arc(
      cx: number,
      cy: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      anticlockwise: boolean
    ): void

    setLineDash(lineDash: Array<number>): void

    lineTo(x: number, y: number): void

    moveTo(x: number, y: number): void

    updateBounds(): void
  }

  export class GrayFilter extends AbstractFilter {
    gray: number
  }

  export class ImageLoader extends EventTarget {
    texture: Texture

    constructor(url: string, crossorigin?: boolean)

    load(): void

    loadFramedSpriteSheet(
      frameWidth: number,
      frameHeight: number,
      textureName: string
    ): void
  }

  export class InteractionData {
    global: Point
    target: Sprite
    originalEvent: Event

    getLocalPosition(displayObject: DisplayObject): Point
  }

  export class InteractionManager {
    dirty: boolean // Don't use this, this is an internal thing
    interactiveItems: unknown[] // Don't use this, this is an internal thing, exposed here only for clearing

    currentCursorStyle: string
    mouse: InteractionData
    mouseOut: boolean
    mouseoverEnabled: boolean
    pool: InteractionData[]
    stage: Stage
    touchs: {[id: string]: InteractionData}

    raiseMouseOverEvents(x: number, y: number): void

    onMouseEvent(
      type: string,
      x: number,
      y: number,
      touchMode: boolean,
      pointerType: pointerTypes,
      params?: any
    ): void

    hitTest(item: PIXI.DisplayObject, interactionData: any): PIXI.hitTypes

    forEachObjectAt(
      x: number,
      y: number,
      objectFoundCallback: (
        object: PIXI.DisplayObject,
        hitType: PIXI.IHitDetails
      ) => boolean
    ): void

    constructor(stage: Stage)
  }

  export class InvertFilter {
    invert: number
  }

  export class JsonLoader extends EventTarget {
    baseUrl: string
    crossorigin: boolean
    loaded: boolean
    url: string

    constructor(url: string, crossorigin?: boolean)

    load(): void
  }

  export class MovieClip extends Sprite {
    animationSpeed: number
    currentFrame: number
    loop: boolean
    playing: boolean
    textures: Texture[]
    totalFrames: number

    constructor(textures: Texture[])

    onComplete: IBasicCallback

    gotoAndPlay(frameNumber: number): void

    gotoAndStop(frameNumber: number): void

    play(): void

    stop(): void
  }

  export class NormalMapFilter extends AbstractFilter {
    map: Texture
    offset: Point
    scale: Point
  }

  export class PixelateFilter extends AbstractFilter {
    size: number
  }

  export class PixiFastShader {
    gl: WebGLRenderingContext
    fragmentSrc: string[]
    program: WebGLProgram
    textureCount: number
    vertexSrc: string[]

    constructor(gl: WebGLRenderingContext)

    destroy(): void

    init(): void
  }

  export class PixiShader {
    defaultVertexSrc: string
    fragmentSrc: string[]
    gl: WebGLRenderingContext
    program: WebGLProgram
    textureCount: number
    attributes: IShaderAttribute[]

    constructor(gl: WebGLRenderingContext)

    destroy(): void

    init(): void

    initSampler2D(): void

    initUniforms(): void

    syncUniforms(): void
  }

  export class Point {
    x: number
    y: number

    constructor(x?: number, y?: number)

    static fromJson(json: {x: number; y: number}): PIXI.Point

    clone(): Point

    set(x: number, y: number): void

    getJson(): {x: number; y: number}

    length(): number

    multiply(multiplier: number): Point

    invert(): Point

    add(otherPoint: Point): Point

    subtract(otherPoint: Point): Point

    normalize(length?: number): Point

    getPerp(toLeft?: boolean): Point
  }

  export class Matrix {
    constructor(
      a?: number,
      b?: number,
      c?: number,
      d?: number,
      tx?: number,
      ty?: number
    )

    a: number
    b: number
    c: number
    d: number
    tx: number
    ty: number

    translate(x: number, y: number): PIXI.Matrix

    rotate(angle: number): PIXI.Matrix

    scale(x: number, y: number): PIXI.Matrix

    fromArray(array: number[]): PIXI.Matrix
  }

  export class Polygon implements IHitArea {
    points: Point[]

    constructor(points: Point[])
    constructor(points: number[])
    constructor(...points: Point[])
    constructor(...points: number[])

    clone(): Polygon

    contains(x: number, y: number): boolean
  }

  export class Rectangle implements IHitArea {
    x: number
    y: number
    width: number
    height: number

    constructor(x?: number, y?: number, width?: number, height?: number)

    clone(): Rectangle

    contains(x: number, y: number): boolean

    readonly centerX: number
    readonly centerY: number
    left: number
    right: number
    top: number
    bottom: number
    readonly leftTop: Point
    readonly rightTop: Point
    readonly leftBottom: Point
    readonly rightBottom: Point

    intersects(rect: Rectangle): boolean

    containsRect(rect: Rectangle): boolean

    equals(rect: Rectangle): boolean

    toJson(): {x: number; y: number; width: number; height: number}

    static createFromRect(rect: {
      x?: number
      y?: number
      width?: number
      height?: number
    }): Rectangle
  }

  export class Rope {
    points: Point[]
    vertices: Float32Array
    uvs: Float32Array
    colors: Float32Array
    indices: Uint16Array

    constructor(texture: Texture, points: Point[])

    refresh(): void

    setTexture(texture: Texture): void
  }

  export class scaleModes {
    public static DEFAULT: number
    public static LINEAR: number
    public static NEAREST: number
  }

  export class hitTypes {
    public static BORDER: number
    public static TRANSPARENT_FILL: number
    public static OPAQUE_FILL: number
    public static TEXT: number
  }

  export enum pointerTypes {
    MOUSE = 'mouse',
    PEN = 'pen',
    TOUCH = 'touch',
  }

  export class SepiaFilter {
    sepia: number
  }

  export class Spine {
    url: string
    crossorigin: boolean
    loaded: boolean

    constructor(url: string)

    load(): void
  }

  export class Sprite extends DisplayObjectContainer {
    anchor: Point
    blendMode: number
    texture: Texture
    tint: number

    roundPixels: boolean

    constructor(texture?: Texture)

    getBounds(): Rectangle

    setTexture(texture: Texture | RenderTexture): void

    setAnchor(x: number, y: number): void

    static fromFrame(frameId: string): Sprite

    static fromImage(url: string, crossOrigin?: boolean): Sprite
  }

  export class SpriteBatch {
    constructor(texture: Texture)
  }

  /* TODO determine type of frames */
  export class SpriteSheetLoader extends EventTarget {
    url: string
    crossorigin: boolean
    baseUrl: string
    texture: Texture
    frames: Object

    constructor(url: string, crossorigin?: boolean)

    load(): void
  }

  export class Stage extends DisplayObjectContainer {
    interactive: boolean
    interactionManager: InteractionManager

    constructor(backgroundColor: number)

    applyPixelRatio(): void

    getMousePosition(): Point

    setBackgroundColor(backgroundColor: number): void

    setInteractionDelegate(domElement: HTMLElement): void
  }

  export class Strip extends DisplayObjectContainer {
    constructor(texture: Texture, width: number, height: number)
  }

  export class Text extends Sprite {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    constructor(text?: string, style?: ITextStyle)

    destroy(destroyTexture: boolean): void

    setText(text: string): void

    setStyle(style: ITextStyle): void

    static fontPropertiesContext: CanvasRenderingContext2D
  }

  export interface ILiveTextStyle {
    color?: string
    background?: string
    font?: string
    size?: number
    lineHeight?: number
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strike?: boolean
    actualWidth?: number
    direction?: string // 'ltr'/null or 'rtl'
    fontWeight?: string | number
    fontMetrics?: {
      ascent: number
      height: number
      descent: number
    }
  }

  export class LiveText extends Sprite {
    constructor(text?: string, style?: ILiveTextStyle)

    setText(text: string): void

    setStyle(style: ILiveTextStyle): void

    text: string
    fontSize: number
    lineHeight: number
    fontFamily: string
    fontWeight: string | number
    color: string
    background: string
    bold: boolean
    italic: boolean
    underline: boolean
    strike: boolean
    fontMetrics:
      | {
          ascent: number
          height: number
          descent: number
        }
      | false
  }

  export class Texture extends EventTarget {
    baseTexture: BaseTexture
    frame: Rectangle
    trim: Point
    crop: PIXI.Rectangle
    valid: boolean
    width: number
    height: number

    constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle)

    destroy(destroyBase: boolean): void

    setFrame(frame: Rectangle): void

    render(displayObject: DisplayObject, position: Point, clear: boolean): void

    onLoad(callback: (texture: Texture) => any): Texture

    onLoadError(callback: (texture: Texture) => void): Texture

    static fromImage(
      imageUrl: string,
      crossorigin?: boolean,
      scaleMode?: scaleModes
    ): Texture

    static fromImageObject(
      image: HTMLImageElement,
      scaleMode: scaleModes
    ): Texture //todo: my!
    static fromHTML(html: string, width: string, height: string): Texture //todo: my!
    static fromImageWithoutCache(
      imageUrl: string,
      crossorigin: boolean,
      scaleMode?: scaleModes
    ): Texture

    static fromFrame(frameId: string): Texture

    static fromCanvas(canvas: HTMLCanvasElement, scaleMode: scaleModes): Texture

    static addTextureToCache(texture: Texture, id: string): void

    static removeTextureFromCache(id: string): Texture
  }

  export class CanvasBuffer {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
  }

  export class RenderTexture extends EventTarget {
    baseTexture: BaseTexture
    textureBuffer: PIXI.CanvasBuffer
    frame: Rectangle
    crop: PIXI.Rectangle

    setFrame(frame: Rectangle): void

    destroy(destroyBase: boolean): void

    valid: boolean
    width: number
    height: number

    constructor(
      width: number,
      height: number,
      offscreen?: boolean,
      renderer?: IPixiRenderer,
      scaleMode?: scaleModes,
      resolution?: number
    )

    //destroy(destroyBase: boolean): void;
    resize(width: number, height: number, updateBase?: boolean): void

    render(
      displayObject: DisplayObject,
      matrix: PIXI.Matrix | undefined,
      clear: boolean
    ): void

    getBase64(): string
  }

  export class TilingSprite extends DisplayObjectContainer {
    renderable: boolean
    texture: Texture
    tint: number
    tilePosition: Point
    tileScale: Point
    tileScaleOffset: Point
    blendMode: blendModes

    constructor(texture: Texture, width: number, height: number)

    generateTilingTexture(forcePowerOfTwo: boolean): void
  }

  export class TwistFilter extends AbstractFilter {
    size: Point
    angle: number
    radius: number
  }

  export class WebGLFilterManager {
    filterStack: AbstractFilter[]
    transparent: boolean
    offsetX: number
    offsetY: number

    constructor(gl: WebGLRenderingContext, transparent: boolean)

    setContext(gl: WebGLRenderingContext): void

    begin(renderSession: IRenderSession, buffer: ArrayBuffer): void

    pushFilter(filterBlock: IFilterBlock): void

    popFilter(): void

    applyFilterPass(
      filter: AbstractFilter,
      filterArea: Texture,
      width: number,
      height: number
    ): void

    initShaderBuffers(): void

    destroy(): void
  }

  export class WebGLGraphics {}

  export class WebGLMaskManager {
    constructor(gl: WebGLRenderingContext)

    setContext(gl: WebGLRenderingContext): void

    pushMask(maskData: any[], renderSession: IRenderSession): void

    popMask(renderSession: IRenderSession): void

    destroy(): void
  }

  export class WebGLRenderer implements IPixiRenderer {
    contextLost: boolean
    width: number
    height: number
    transparent: boolean
    view: HTMLCanvasElement

    constructor(width: number, height: number, options?: RendererOptions)
    constructor(
      width: number,
      height: number,
      view?: HTMLCanvasElement,
      transparent?: boolean,
      antialias?: boolean
    )

    destroy(): void

    render(stage: Stage): void

    renderDisplayObject(
      displayObject: DisplayObject,
      projection: Point,
      buffer: WebGLBuffer
    ): void

    resize(width: number, height: number): void

    static createWebGLTexture(texture: Texture, gl: WebGLRenderingContext): void
  }

  export class WebGLShaderManager {
    activatePrimitiveShader(): void

    activateShader(shader: PixiShader): void

    deactivatePrimitiveShader(): void

    destroy(): void

    setAttribs(attribs: IShaderAttribute[]): void

    setContext(gl: WebGLRenderingContext, transparent: boolean): void
  }

  export class WebGLSpriteBatch {
    indices: Uint16Array
    size: number
    vertices: Float32Array
    vertSize: number

    constructor(gl: WebGLRenderingContext)

    begin(renderSession: IRenderSession): void

    flush(): void

    end(): void

    destroy(): void

    render(sprite: Sprite): void

    renderTilingSprite(sprite: TilingSprite): void

    setBlendMode(blendMode: blendModes): void

    setContext(gl: WebGLRenderingContext): void

    start(): void

    stop(): void
  }
}
