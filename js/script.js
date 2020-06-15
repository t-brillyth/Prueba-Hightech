$(document).ready(function() {
      //$(".dial").knob();
      $('.dial').knob({
        'min':0,
        'max':50,
        'width':50,
        'height':50,
        'displayInput':true,
        'fgColor':"#54D1ED",
        'format': function(v){ return v + '%';},
        'readOnly':false
      });
    });