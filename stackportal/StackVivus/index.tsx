import { useEffect } from 'react';

interface optionTypes {
  type?: string;
  file: string;
  start?: string;
  duration: string | number;
  delay?: number;
  onReady?: () => void;
  pathTimingFunction?: () => void;
  animTimingFunction?: () => void;
  dashGap?: number;
  forceRender?: boolean;
  reverseStack?: boolean;
  selfDestroy?: boolean;
}

interface callbackTypes {
  play?: (speed: number, callback: () => void) => void;
  stop?: () => void;
  reset?: () => void;
  finish?: () => void;
  destroy?: () => void;
  getStatus?: () => void;
  setFrameProgress?: 0 | 1;
}

export default function MakeVivus(
  make_element: string,
  make_options: optionTypes,
  make_callback?: () => void
): void {
  let Final_Vivus: any;

  /**
   * Class constructor
   *
   * @param {DOM|String} element Dom element of the SVG or id of it
   */

  function Pathformer(element) {
    // Test params
    if (typeof element === 'undefined') {
      throw new Error(
        'Pathformer [constructor]: "element" parameter is required'
      );
    }

    // Set the element
    if (element.constructor === String) {
      element = document.getElementById(element);
      if (!element) {
        throw new Error(
          'Pathformer [constructor]: "element" parameter is not related to an existing ID'
        );
      }
    }

    if (
      element instanceof globalThis.SVGElement ||
      element instanceof globalThis.SVGGElement ||
      /^svg$/i.test(element.nodeName)
    ) {
      this.el = element;
    } else {
      throw new Error(
        'Pathformer [constructor]: "element" parameter must be a string or a SVGelement'
      );
    }

    // Start
    this.scan(element);
  }

  /**
   * @type {Array}
   */

  Pathformer.prototype.TYPES = [
    'line',
    'ellipse',
    'circle',
    'polygon',
    'polyline',
    'rect',
  ];

  /**
   * @type {Array}
   */
  Pathformer.prototype.ATTR_WATCH = [
    'cx',
    'cy',
    'points',
    'r',
    'rx',
    'ry',
    'x',
    'x1',
    'x2',
    'y',
    'y1',
    'y2',
  ];

  /**
   * @param  {object} options Object from the constructor
   */
  Pathformer.prototype.scan = function (svg) {
    let fn,
      element,
      pathData,
      pathDom,
      elements = svg.querySelectorAll(this.TYPES.join(','));

    for (var i = 0; i < elements.length; i++) {
      element = elements[i];
      fn = this[element.tagName.toLowerCase() + 'ToPath'];
      pathData = fn(this.parseAttr(element.attributes));
      pathDom = this.pathMaker(element, pathData);
      element.parentNode.replaceChild(pathDom, element);
    }
  };

  /**
   * @param  {DOMelement} element Line element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.lineToPath = function (element) {
    let newElement = {},
      x1 = element.x1 || 0,
      y1 = element.y1 || 0,
      x2 = element.x2 || 0,
      y2 = element.y2 || 0;

    newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
    return newElement;
  };

  /**
   * @param  {DOMelement} element Rect element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.rectToPath = function (element) {
    let newElement = {},
      x = parseFloat(element.x) || 0,
      y = parseFloat(element.y) || 0,
      width = parseFloat(element.width) || 0,
      height = parseFloat(element.height) || 0;

    if (element.rx || element.ry) {
      let rx = parseInt(element.rx, 10) || -1,
        ry = parseInt(element.ry, 10) || -1;
      rx = Math.min(Math.max(rx < 0 ? ry : rx, 0), width / 2);
      ry = Math.min(Math.max(ry < 0 ? rx : ry, 0), height / 2);

      newElement.d =
        'M ' +
        (x + rx) +
        ',' +
        y +
        ' ' +
        'L ' +
        (x + width - rx) +
        ',' +
        y +
        ' ' +
        'A ' +
        rx +
        ',' +
        ry +
        ',0,0,1,' +
        (x + width) +
        ',' +
        (y + ry) +
        ' ' +
        'L ' +
        (x + width) +
        ',' +
        (y + height - ry) +
        ' ' +
        'A ' +
        rx +
        ',' +
        ry +
        ',0,0,1,' +
        (x + width - rx) +
        ',' +
        (y + height) +
        ' ' +
        'L ' +
        (x + rx) +
        ',' +
        (y + height) +
        ' ' +
        'A ' +
        rx +
        ',' +
        ry +
        ',0,0,1,' +
        x +
        ',' +
        (y + height - ry) +
        ' ' +
        'L ' +
        x +
        ',' +
        (y + ry) +
        ' ' +
        'A ' +
        rx +
        ',' +
        ry +
        ',0,0,1,' +
        (x + rx) +
        ',' +
        y;
    } else {
      newElement.d =
        'M' +
        x +
        ' ' +
        y +
        ' ' +
        'L' +
        (x + width) +
        ' ' +
        y +
        ' ' +
        'L' +
        (x + width) +
        ' ' +
        (y + height) +
        ' ' +
        'L' +
        x +
        ' ' +
        (y + height) +
        ' Z';
    }
    return newElement;
  };

  /**
   * @param  {DOMelement} element Polyline element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.polylineToPath = function (element) {
    let newElement = {},
      points = element.points.trim().split(' '),
      i,
      path;

    // Reformatting if points are defined without commas
    if (element.points.indexOf(',') === -1) {
      let formattedPoints = [];
      for (i = 0; i < points.length; i += 2) {
        formattedPoints.push(points[i] + ',' + points[i + 1]);
      }
      points = formattedPoints;
    }

    // Generate the path.d value
    path = 'M' + points[0];
    for (i = 1; i < points.length; i++) {
      if (points[i].indexOf(',') !== -1) {
        path += 'L' + points[i];
      }
    }
    newElement.d = path;
    return newElement;
  };

  /**
   * @param  {DOMelement} element Polygon element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.polygonToPath = function (element) {
    let newElement = Pathformer.prototype.polylineToPath(element);
    newElement.d += 'Z';
    return newElement;
  };

  /**
   *
   * @param  {DOMelement} element ellipse element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.ellipseToPath = function (element) {
    let newElement = {},
      rx = parseFloat(element.rx) || 0,
      ry = parseFloat(element.ry) || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - rx,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(rx),
      endY = cy;

    newElement.d =
      'M' +
      startX +
      ',' +
      startY +
      'A' +
      rx +
      ',' +
      ry +
      ' 0,1,1 ' +
      endX +
      ',' +
      endY +
      'A' +
      rx +
      ',' +
      ry +
      ' 0,1,1 ' +
      startX +
      ',' +
      endY;
    return newElement;
  };

  /**
   * Read `circle` element to extract and transform
   * data, to make it ready for a `path` object.
   *
   * @param  {DOMelement} element Circle element to transform
   * @return {object}             Data for a `path` element
   */
  Pathformer.prototype.circleToPath = function (element) {
    let newElement = {},
      r = parseFloat(element.r) || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - r,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(r),
      endY = cy;

    newElement.d =
      'M' +
      startX +
      ',' +
      startY +
      'A' +
      r +
      ',' +
      r +
      ' 0,1,1 ' +
      endX +
      ',' +
      endY +
      'A' +
      r +
      ',' +
      r +
      ' 0,1,1 ' +
      startX +
      ',' +
      endY;
    return newElement;
  };

  /**
   * Create `path` elements form original element
   * and prepared objects
   *
   * @param  {DOMelement} element  Original element to transform
   * @param  {object} pathData     Path data (from `toPath` methods)
   * @return {DOMelement}          Path element
   */
  Pathformer.prototype.pathMaker = function (element, pathData) {
    let i,
      attr,
      pathTag = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    for (i = 0; i < element.attributes.length; i++) {
      attr = element.attributes[i];
      if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
        pathTag.setAttribute(attr.name, attr.value);
      }
    }
    for (i in pathData) {
      pathTag.setAttribute(i, pathData[i]);
    }
    return pathTag;
  };

  /**
   * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
   * @return {object}                  Object of attributes
   */
  Pathformer.prototype.parseAttr = function (element) {
    let attr,
      output = {};
    for (var i = 0; i < element.length; i++) {
      attr = element[i];
      // Check if no data attribute contains '%', or the transformation is impossible
      if (
        this.ATTR_WATCH.indexOf(attr.name) !== -1 &&
        attr.value.indexOf('%') !== -1
      ) {
        throw new Error(
          "Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'."
        );
      }
      output[attr.name] = attr.value;
    }
    return output;
  };

  ('use strict');

  let setupEnv, requestAnimFrame, cancelAnimFrame, parsePositiveInt;

  /**
   * @constructor
   * @this {Vivus}
   * @param {DOM|String}   element  Dom element of the SVG or id of it
   * @param {Object}       options  Options about the animation
   * @param {Function}     callback Callback for the end of the animation
   */

  function Vivus(element: string, options: optionTypes, callback?: any) {
    setupEnv();

    // Setup
    this.isReady = false;
    this.setElement(element, options);
    this.setOptions(options);
    this.setCallback(callback);

    if (this.isReady) {
      this.init();
    }
  }

  Vivus.LINEAR = function (x) {
    return x;
  };
  Vivus.EASE = function (x) {
    return -Math.cos(x * Math.PI) / 2 + 0.5;
  };
  Vivus.EASE_OUT = function (x) {
    return 1 - Math.pow(1 - x, 3);
  };
  Vivus.EASE_IN = function (x) {
    return Math.pow(x, 3);
  };
  Vivus.EASE_OUT_BOUNCE = function (x) {
    let base = -Math.cos(x * (0.5 * Math.PI)) + 1,
      rate = Math.pow(base, 1.5),
      rateR = Math.pow(1 - x, 2),
      progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
    return 1 - rateR + progress * rateR;
  };

  /**
   * @param {DOM|String}   element  SVG Dom element or id of it
   */

  Vivus.prototype.setElement = function (element, options) {
    let onLoad, self;

    // Basic check
    if (typeof element === 'undefined') {
      throw new Error('Vivus [constructor]: "element" parameter is required');
    }

    // Set the element
    if (element.constructor === String) {
      element = document.getElementById(element);
      if (!element) {
        throw new Error(
          'Vivus [constructor]: "element" parameter is not related to an existing ID'
        );
      }
    }
    this.parentEl = element;

    // Load the SVG with XMLHttpRequest and extract the SVG
    if (options && options.file) {
      self = this;
      onLoad = function () {
        let domSandbox = document.createElement('div');
        domSandbox.innerHTML = this.responseText;

        let svgTag = domSandbox.querySelector('svg');
        if (!svgTag) {
          throw new Error(
            'Vivus [load]: Cannot find the SVG in the loaded file : ' +
              options.file
          );
        }

        self.el = svgTag;
        self.el.setAttribute('width', '100%');
        self.el.setAttribute('height', '100%');
        self.parentEl.appendChild(self.el);
        self.isReady = true;
        self.init();
        self = null;
      };

      let oReq = new globalThis.XMLHttpRequest();
      oReq.addEventListener('load', onLoad);
      oReq.open('GET', options.file);
      oReq.send();
      return;
    }

    switch (element.constructor) {
      case globalThis.SVGSVGElement:
      case globalThis.SVGElement:
      case globalThis.SVGGElement:
        this.el = element;
        this.isReady = true;
        break;

      case globalThis.HTMLObjectElement:
        self = this;
        onLoad = function (e) {
          if (self.isReady) {
            return;
          }
          self.el =
            element.contentDocument &&
            element.contentDocument.querySelector('svg');
          if (!self.el && e) {
            throw new Error(
              'Vivus [constructor]: object loaded does not contain any SVG'
            );
          } else if (self.el) {
            if (element.getAttribute('built-by-vivus')) {
              self.parentEl.insertBefore(self.el, element);
              self.parentEl.removeChild(element);
              self.el.setAttribute('width', '100%');
              self.el.setAttribute('height', '100%');
            }
            self.isReady = true;
            self.init();
            self = null;
          }
        };

        if (!onLoad()) {
          element.addEventListener('load', onLoad);
        }
        break;

      default:
        throw new Error(
          'Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)'
        );
    }
  };

  /**
   * @param  {object} options Object from the constructor
   */
  Vivus.prototype.setOptions = function (options) {
    let allowedTypes = [
      'delayed',
      'sync',
      'async',
      'nsync',
      'oneByOne',
      'scenario',
      'scenario-sync',
    ];
    let allowedStarts = ['inViewport', 'manual', 'autostart'];

    // Basic check
    if (options !== undefined && options.constructor !== Object) {
      throw new Error(
        'Vivus [constructor]: "options" parameter must be an object'
      );
    } else {
      options = options || {};
    }

    // Set the animation type
    if (options.type && allowedTypes.indexOf(options.type) === -1) {
      throw new Error(
        'Vivus [constructor]: ' +
          options.type +
          ' is not an existing animation `type`'
      );
    } else {
      this.type = options.type || allowedTypes[0];
    }

    // Set the start type
    if (options.start && allowedStarts.indexOf(options.start) === -1) {
      throw new Error(
        'Vivus [constructor]: ' +
          options.start +
          ' is not an existing `start` option'
      );
    } else {
      this.start = options.start || allowedStarts[0];
    }

    this.isIE =
      globalThis.navigator.userAgent.indexOf('MSIE') !== -1 ||
      globalThis.navigator.userAgent.indexOf('Trident/') !== -1 ||
      globalThis.navigator.userAgent.indexOf('Edge/') !== -1;
    this.duration = parsePositiveInt(options.duration, 120);
    this.delay = parsePositiveInt(options.delay, null);
    this.dashGap = parsePositiveInt(options.dashGap, 1);
    this.forceRender = options.hasOwnProperty('forceRender')
      ? !!options.forceRender
      : this.isIE;
    this.reverseStack = !!options.reverseStack;
    this.selfDestroy = !!options.selfDestroy;
    this.onReady = options.onReady;
    this.map = [];
    this.frameLength =
      this.currentFrame =
      this.delayUnit =
      this.speed =
      this.handle =
        null;

    this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible')
      ? !!options.ignoreInvisible
      : false;

    this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
    this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

    if (this.delay >= this.duration) {
      throw new Error(
        'Vivus [constructor]: delay must be shorter than duration'
      );
    }
  };

  /**
   * @param  {Function} callback Callback for the animation end
   */
  Vivus.prototype.setCallback = function (callback) {
    // Basic check
    if (!!callback && callback.constructor !== Function) {
      throw new Error(
        'Vivus [constructor]: "callback" parameter must be a function'
      );
    }
    this.callback = callback || function () {};
  };

  Vivus.prototype.mapping = function () {
    let i,
      paths,
      path,
      pAttrs,
      pathObj,
      totalLength,
      lengthMeter,
      timePoint,
      scale,
      hasNonScale;
    timePoint = totalLength = lengthMeter = 0;
    paths = this.el.querySelectorAll('path');
    hasNonScale = false;

    for (i = 0; i < paths.length; i++) {
      path = paths[i];
      if (this.isInvisible(path)) {
        continue;
      }

      pathObj = {
        el: path,
        length: 0,
        startAt: 0,
        duration: 0,
        isResizeSensitive: false,
      };

      // If vector effect is non-scaling-stroke, the total length won't match the rendered length
      // so we need to calculate the scale and apply it
      if (path.getAttribute('vector-effect') === 'non-scaling-stroke') {
        let rect = path.getBoundingClientRect();
        let box = path.getBBox();
        scale = Math.max(rect.width / box.width, rect.height / box.height);
        pathObj.isResizeSensitive = true;
        hasNonScale = true;
      } else {
        scale = 1;
      }
      pathObj.length = Math.ceil(path.getTotalLength() * scale);

      // Test if the path length is correct
      if (isNaN(pathObj.length)) {
        if (globalThis.console && console.warn) {
          console.warn(
            'Vivus [mapping]: cannot retrieve a path element length',
            path
          );
        }
        continue;
      }
      this.map.push(pathObj);
      path.style.strokeDasharray =
        pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
      path.style.strokeDashoffset = pathObj.length + this.dashGap;
      pathObj.length += this.dashGap;
      totalLength += pathObj.length;

      this.renderPath(i);
    }

    // Show a warning for non-scaling elements
    if (hasNonScale) {
      console.warn(
        'Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info.'
      );
    }

    totalLength = totalLength === 0 ? 1 : totalLength;
    this.delay = this.delay === null ? this.duration / 3 : this.delay;
    this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);

    // Reverse stack if asked
    if (this.reverseStack) {
      this.map.reverse();
    }

    for (i = 0; i < this.map.length; i++) {
      pathObj = this.map[i];

      switch (this.type) {
        case 'delayed':
          pathObj.startAt = this.delayUnit * i;
          pathObj.duration = this.duration - this.delay;
          break;

        case 'oneByOne':
          pathObj.startAt = (lengthMeter / totalLength) * this.duration;
          pathObj.duration = (pathObj.length / totalLength) * this.duration;
          break;

        case 'sync':
        case 'async':
        case 'nsync':
          pathObj.startAt = 0;
          pathObj.duration = this.duration;
          break;

        case 'scenario-sync':
          path = pathObj.el;
          pAttrs = this.parseAttr(path);
          pathObj.startAt =
            timePoint +
            (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
          pathObj.duration = parsePositiveInt(
            pAttrs['data-duration'],
            this.duration
          );
          timePoint =
            pAttrs['data-async'] !== undefined
              ? pathObj.startAt
              : pathObj.startAt + pathObj.duration;
          this.frameLength = Math.max(
            this.frameLength,
            pathObj.startAt + pathObj.duration
          );
          break;

        case 'scenario':
          path = pathObj.el;
          pAttrs = this.parseAttr(path);
          pathObj.startAt =
            parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
          pathObj.duration = parsePositiveInt(
            pAttrs['data-duration'],
            this.duration
          );
          this.frameLength = Math.max(
            this.frameLength,
            pathObj.startAt + pathObj.duration
          );
          break;
      }
      lengthMeter += pathObj.length;
      this.frameLength = this.frameLength || this.duration;
    }
  };

  Vivus.prototype.recalc = function () {
    if (this.mustRecalcScale) {
      return;
    }
    this.mustRecalcScale = requestAnimFrame(
      function () {
        this.performLineRecalc();
      }.bind(this)
    );
  };

  Vivus.prototype.performLineRecalc = function () {
    let pathObj, path, rect, box, scale;
    for (var i = 0; i < this.map.length; i++) {
      pathObj = this.map[i];
      if (pathObj.isResizeSensitive) {
        path = pathObj.el;
        rect = path.getBoundingClientRect();
        box = path.getBBox();
        scale = Math.max(rect.width / box.width, rect.height / box.height);
        pathObj.length = Math.ceil(path.getTotalLength() * scale);
        path.style.strokeDasharray =
          pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
      }
    }
    this.trace();
    this.mustRecalcScale = null;
  };

  Vivus.prototype.draw = function () {
    let self = this;
    this.currentFrame += this.speed;

    if (this.currentFrame <= 0) {
      this.stop();
      this.reset();
    } else if (this.currentFrame >= this.frameLength) {
      this.stop();
      this.currentFrame = this.frameLength;
      this.trace();
      if (this.selfDestroy) {
        this.destroy();
      }
    } else {
      this.trace();
      this.handle = requestAnimFrame(function () {
        self.draw();
      });
      return;
    }

    this.callback(this);
    if (this.instanceCallback) {
      this.instanceCallback(this);
      this.instanceCallback = null;
    }
  };

  Vivus.prototype.trace = function () {
    let i, progress, path, currentFrame;
    currentFrame =
      this.animTimingFunction(this.currentFrame / this.frameLength) *
      this.frameLength;
    for (i = 0; i < this.map.length; i++) {
      path = this.map[i];
      progress = (currentFrame - path.startAt) / path.duration;
      progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
      if (path.progress !== progress) {
        path.progress = progress;
        path.el.style.strokeDashoffset = Math.floor(
          path.length * (1 - progress)
        );
        this.renderPath(i);
      }
    }
  };

  /**
   * @param  {Number} index Path index
   */
  Vivus.prototype.renderPath = function (index) {
    if (this.forceRender && this.map && this.map[index]) {
      let pathObj = this.map[index],
        newPath = pathObj.el.cloneNode(true);
      pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
      pathObj.el = newPath;
    }
  };

  Vivus.prototype.init = function () {
    // Set object variables
    this.frameLength = 0;
    this.currentFrame = 0;
    this.map = [];

    // Start
    new Pathformer(this.el);
    this.mapping();
    this.starter();

    if (this.onReady) {
      this.onReady(this);
    }
  };

  Vivus.prototype.starter = function () {
    switch (this.start) {
      case 'manual':
        return;

      case 'autostart':
        this.play();
        break;

      case 'inViewport':
        let self = this,
          listener = function () {
            if (self.isInViewport(self.parentEl, 1)) {
              self.play();
              globalThis.removeEventListener('scroll', listener);
            }
          };
        globalThis.addEventListener('scroll', listener);
        listener();
        break;
    }
  };

  /**
   * @return {string} Instance status
   */
  Vivus.prototype.getStatus = function () {
    return this.currentFrame === 0
      ? 'start'
      : this.currentFrame === this.frameLength
      ? 'end'
      : 'progress';
  };

  Vivus.prototype.reset = function () {
    return this.setFrameProgress(0);
  };

  Vivus.prototype.finish = function () {
    return this.setFrameProgress(1);
  };

  /**
   * @param {number} progress Level of progress to set
   */
  Vivus.prototype.setFrameProgress = function (progress) {
    progress = Math.min(1, Math.max(0, progress));
    this.currentFrame = Math.round(this.frameLength * progress);
    this.trace();
    return this;
  };

  /**
   * @param  {number} speed Animation speed [optional]
   */
  Vivus.prototype.play = function (speed, callback) {
    this.instanceCallback = null;

    if (speed && typeof speed === 'function') {
      this.instanceCallback = speed; // first parameter is actually the callback function
      speed = null;
    } else if (speed && typeof speed !== 'number') {
      throw new Error('Vivus [play]: invalid speed');
    }
    // if the first parameter wasn't the callback, check if the seconds was
    if (callback && typeof callback === 'function' && !this.instanceCallback) {
      this.instanceCallback = callback;
    }

    this.speed = speed || 1;
    if (!this.handle) {
      this.draw();
    }
    return this;
  };

  Vivus.prototype.stop = function () {
    if (this.handle) {
      cancelAnimFrame(this.handle);
      this.handle = null;
    }
    return this;
  };

  Vivus.prototype.destroy = function () {
    this.stop();
    let i, path;
    for (i = 0; i < this.map.length; i++) {
      path = this.map[i];
      path.el.style.strokeDashoffset = null;
      path.el.style.strokeDasharray = null;
      this.renderPath(i);
    }
  };

  Vivus.prototype.isInvisible = function (el) {
    let rect,
      ignoreAttr = el.getAttribute('data-ignore');

    if (ignoreAttr !== null) {
      return ignoreAttr !== 'false';
    }

    if (this.ignoreInvisible) {
      rect = el.getBoundingClientRect();
      return !rect.width && !rect.height;
    } else {
      return false;
    }
  };

  /**
   * @param  {object} element DOM element to parse
   * @return {object}         Object of attributes
   */
  Vivus.prototype.parseAttr = function (element) {
    let attr,
      output = {};
    if (element && element.attributes) {
      for (var i = 0; i < element.attributes.length; i++) {
        attr = element.attributes[i];
        output[attr.name] = attr.value;
      }
    }
    return output;
  };

  /**
   * @param  {object} el Element to observe
   * @param  {number} h  Percentage of height
   * @return {boolean}
   */
  Vivus.prototype.isInViewport = function (el, h) {
    let scrolled = this.scrollY(),
      viewed = scrolled + this.getViewportH(),
      elBCR = el.getBoundingClientRect(),
      elHeight = elBCR.height,
      elTop = scrolled + elBCR.top,
      elBottom = elTop + elHeight;

    // if 0, the element is considered in the viewport as soon as it enters.
    // if 1, the element is considered in the viewport only when it's fully inside
    // value in percentage (1 >= h >= 0)
    h = h || 0;

    return elTop + elHeight * h <= viewed && elBottom >= scrolled;
  };

  /**
   * @return {integer} Viewport height
   */
  Vivus.prototype.getViewportH = function () {
    let client = this.docElem.clientHeight,
      inner = globalThis.innerHeight;
    if (client < inner) {
      return inner;
    } else {
      return client;
    }
  };

  /**
   * @return {integer} Page Y offset
   */
  Vivus.prototype.scrollY = function () {
    return globalThis.pageYOffset || this.docElem.scrollTop;
  };

  setupEnv = function () {
    if (Vivus.prototype.docElem) {
      return;
    }

    /**
     * Alias for document element
     *
     * @type {DOMelement}
     */
    Vivus.prototype.docElem = globalThis.document.documentElement;

    /**
     * Alias for `requestAnimationFrame` or
     * `setTimeout` function for deprecated browsers.
     *
     */
    requestAnimFrame = (function () {
      return (
        globalThis.requestAnimationFrame ||
        globalThis.webkitRequestAnimationFrame ||
        globalThis.mozRequestAnimationFrame ||
        globalThis.oRequestAnimationFrame ||
        globalThis.msRequestAnimationFrame ||
        function (/* function */ callback) {
          return globalThis.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    /**
     * Alias for `cancelAnimationFrame` or
     * `cancelTimeout` function for deprecated browsers.
     *
     */
    cancelAnimFrame = (function () {
      return (
        globalThis.cancelAnimationFrame ||
        globalThis.webkitCancelAnimationFrame ||
        globalThis.mozCancelAnimationFrame ||
        globalThis.oCancelAnimationFrame ||
        globalThis.msCancelAnimationFrame ||
        function (id) {
          return globalThis.clearTimeout(id);
        }
      );
    })();
  };

  /**
   * @param {string} value String to parse
   * @param {*} defaultValue Value to return if the result parsed is invalid
   * @return {number}     *
   */
  parsePositiveInt = function (value, defaultValue) {
    let output = parseInt(value, 10);
    return output >= 0 ? output : defaultValue;
  };

  Final_Vivus = new Vivus(make_element, make_options, make_callback);

  return Final_Vivus;
}