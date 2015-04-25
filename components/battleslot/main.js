$(document).ready(function() {
  window.machine = new SlotMachine({
    trigger: '#slotArm',
    slots: [{
      selector: '#slots-1',
      active: 0,
      repeat: 5,
      randomize: function () {
        // control slot result
        return 4;
      }
    }, {
      selector: '#slots-2',
      active: 1,
      repeat: 5
    }, {
      selector: '#slots-3',
      active: 2,
      repeat: 5
    }],
    onCompleted: function (res) {
      console.log(res);
    }
  });
});
