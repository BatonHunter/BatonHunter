/*
 *	Slot Machine
 */
function SlotMachine(params) {
  var self = this;
  self.params = params;
  self.slots  = [];
  self.result = [];
  return self.init();
};

SlotMachine.prototype.init = function () {
  var self = this;
  self.params.trigger && self.initTrigger();
  self.params.slots && self.params.slots.length && self.initSlots();
  return self;
};

SlotMachine.prototype.initTrigger = function () {
  var self = this;
  $(self.params.trigger).click(function () {
    self.start();
  });
  return self;
};

SlotMachine.prototype.initSlots = function () {
  var self = this;
  var params = self.params;
  for (var i = 0, l = params.slots.length; i < l; i++)
    self.addSlot(params.slots[i]);
  return self;
};
  
SlotMachine.prototype.addSlot = function (configs) {
  var self = this;
  var selector = configs.selector;
  self.slots.push($(selector).slotMachine(configs));
  return self;
};

SlotMachine.prototype.start = function () {
  var self = this;
  self.result = [];
  for (var i = 0, l = self.slots.length; i < l; i++ ) {
    var slot   = self.slots[i];
    var repeat = self.params.slots[i].repeat;
    self.shuffle(slot, i, repeat);
  }
  return self;
};

SlotMachine.prototype.shuffle = function (slot, index, repeat) {
  var self = this;
  slot.shuffle(repeat, function (active) {
    self.onSlotCompleted(index, active);
  });
  return self;
};

SlotMachine.prototype.onSlotCompleted = function (index, active) {
  var self = this;
  self.result[index] = active;
  
  if (self.result.length === self.params.slots.length)
    self.params.onCompleted(self.result);
  return self;
};

