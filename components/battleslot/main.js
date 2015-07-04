$(document).ready(function() {
  $('.slot img').css('height', $('.slots').css('height'))
    .css('width', '90%');
  window.machine = new SlotMachine({
    trigger: '#slotArm',
    defaultRepeat: 10,
    probs: {
      base: 27,
      treasure: 1,
      monster1: 1,
      monster2: 1
    },
    slots: [{
      selector: '#slots-1',
      active: 0,
      //repeat: 5,
      randomize: function () {
        // control slot result
        return 4;
      }
    }, {
      selector: '#slots-2',
      active: 1,
    }, {
      selector: '#slots-3',
      active: 2,
    }],
    onCompleted: function (res) {
      // index start from 0
      $('#myModal').modal('show');
      console.log(res);
    }
  });
});
