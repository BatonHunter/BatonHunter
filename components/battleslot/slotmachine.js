/**
 *  Baton Slot Machine
 *
 *  Dependencies:
 *    jQuery Slot Machine: https://github.com/josex2r/jQuery-SlotMachine
 */

/**
 * @type constructor
 * @name SlotMachine
 * @param {Object} params Constructor parameters.
 *   Properties:
 *     - `trigger` - `{string}` - jQuery selector for slot machine trigger.
 *     - `slots` - `{Array}` - Slot configurations. Please refer to 
 *       [jQuery Slot Machine](https://github.com/josex2r/jQuery-SlotMachine)
 *       for details.
 *     - `defaultRepeat` - `{int}` - Default repeat times of spin.
 * @returns {Object} Self.
 * @description Constructor for Slot Machine.
 */
function SlotMachine(params) {
  var self = this;
  self.isRandom = false;
  self.slotValue = null;
  self.params  = params;
  self.slots   = [];
  self.trigger = null;
  self.defaultRepeat = params.defaultRepeat;
  return self.init();
};

/**
 * @type method
 * @name SlotMachine#init
 * @returns {Object} Self.
 * @description Initialize machine with given params.
 */
SlotMachine.prototype.init = function () {
  var self   = this;
  var params = self.params;

  params.trigger && self.initTrigger();
  params.slots && params.slots.length && self.initSlots();
  return self;
};

/**
 * @type method
 * @name SlotMachine#initTrigger
 * @returns {Object} Self.
 * @description Initialize trigger in machine with given params.
 */
SlotMachine.prototype.initTrigger = function () {
  var self     = this;
  var params   = self.params;
  var selector = params.trigger;

  var trigger = self.trigger = $(selector).click(function () {
    self.shuffle(params.onCompleted);
    trigger.addClass('clicked');
    setTimeout(function() {
      trigger.removeClass('clicked');
    }, 500);
  });
  return self;
};

/**
 * @type method
 * @name SlotMachine#initSlots
 * @returns {Object} Self.
 * @description Initialize slots in machine with given params.
 */
SlotMachine.prototype.initSlots = function () {
  var self   = this;
  var params = self.params;

  params.slots.forEach(function (config, index) {
    var slot = self.createSlot(config);
    self.addSlot(slot);
  });
  return self;
};

/**
 * @type method
 * @name SlotMachine#createSlot
 * @param {Object} config jQuery Slot Machine configuration.
 * @returns {Object} jQuery Slot Machine.
 * @description Create a slot.
 */
SlotMachine.prototype.createSlot = function (config) {
  var self = this;
  var selector = config.selector;
  return $(selector).slotMachine(config);
};
  
/**
 * @type method
 * @name SlotMachine#addSlot
 * @param {Object} slot jQuery Slot Machine Object.
 * @returns {Object} Self.
 * @description Add a slot to machine.
 */
SlotMachine.prototype.addSlot = function (slot) {
  var self = this;
  self.slots.push(slot);
  slot.setRandomize(function () {
    return self.isRandom ? slot.getRandom() : self.slotValue;
  });
  return self;
};

/**
 * @type method
 * @name SlotMachine#getSlot
 * @param {int} index Index of slot in machine.
 * @returns {Object} jQuery Slot Machine.
 * @description Get a specific slot.
 */
SlotMachine.prototype.getSlot = function (index) {
  var self = this;
  return self.slots[index];
};

/**
 * @type method
 * @name SlotMachine#shuffle
 * @param {init|function} repeat If repeat is function, used as callback,
 *   or spin repeat times.
 * @param {function} callback Used as callback is repeat is not a function.
 * @returns {Object} Self.
 * @description Shuffle all slots.
 */
SlotMachine.prototype.shuffle = function (repeat, callback) {
  var self   = this;
  var slots  = self.slots;
  var params = self.params;
  var slotsLength  = slots.length;
  var shuffleCount = 0;
  var result = [];
  var isFunction = SlotMachine.isFunction;
  var noop = SlotMachine.noop;

  if (isFunction(repeat)) {
    callback = repeat;
    repeat   = undefined;
  }

  self.judgeRandom(1, 2);

  callback = callback || params.onCompleted || noop;
  slots.forEach(function (slot, index) {
    self.shuffleSlot(index, repeat, function (active) {
      result[index] = active;
      ++shuffleCount === slotsLength && callback(result);
    });
  });
  return self;
};

/**
 * @type method
 * @name SlotMachine#judgeRandom
 * @returns {Object} Self.
 * @description Calculate the slots result to random or not.
 */
SlotMachine.prototype.judgeRandom = function (bigNum, boxNum) {
  var self = this;
  //Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  var randomNum = Math.floor(Math.random() * (27 - 1 + 1)) + 1;
  boxNum += bigNum;
  self.isRandom = false;
  if (randomNum <= bigNum) {
    self.slotValue = 0;
  } else if (randomNum > bigNum && randomNum <= boxNum) {
    self.slotValue = 1;
  } else {
    self.isRandom = true;
  }
  return self;
};

/**
 * @type method
 * @name SlotMachine#shuffleSlot
 * @param {int} index Index of slot in machine to shuffle.
 * @param {init|function} repeat If repeat is function, used as callback,
 *   or spin repeat times.
 * @param {function} callback Used as callback is repeat is not a function.
 * @returns {Object} Self.
 * @description Shuffle a specific slot.
 */
SlotMachine.prototype.shuffleSlot = function (index, repeat, callback) {
  var self = this;
  var params = self.params;
  var slot = self.getSlot(index);
  var slotConfigs  = params.slots;
  var isFunction = SlotMachine.isFunction;
  var noop = SlotMachine.noop;

  if (isFunction(repeat)) {
    callback = repeat;
    repeat   = undefined;
  }

  repeat = repeat || slotConfigs[index].repeat || self.defaultRepeat;
  callback = callback || slotConfigs[index].onCompleted || noop;
  slot.shuffle(repeat, callback);
  return self;
};

/**
 * @type method
 * @name SlotMachine#stop
 * @param {int} index Index of slot in machine to stop. If not defined, all
 *   slots will stop.
 * @returns {Object} Self.
 * @description Stop a specific slot or all slots.
 */
SlotMachine.prototype.stop = function (index) {
  var self  = this;
  var slots = self.slots;
  var slot  = slots[index];
  slot && slot.stop() || slots.forEach(function (slot) {
    slot.stop();
  });
  return self;
};

/**
 * @type class method
 * @name SlotMachine#isFunction
 * @param {Object} obj Object to varify whether is function or not.
 * @returns {boolean} True if `obj` is a `Function`.
 * @description Determines if obj is a `Function`.
 */
SlotMachine.isFunction = function (obj) {
  return typeof obj === 'function';
};

/**
 * @type class method
 * @name SlotMachine#noop
 * @description A function performs nothing.
 */
SlotMachine.noop = function () {};
