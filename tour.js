var tour = new Tour({
  //by default local storage 
  storage: false
});
var name = '';
tour.addSteps(
  [
  {
    element: '#col-1',
    placement: 'bottom',
    title: 'Live classes',
    content: 'Classes are interactive and happen in real time <br> <input type = "text" id = "name"/> ',
    onNext:function(){
      name = $('#name').val();
      console.log('next button pressed');
    }
  },
  {
    element: '#col-2',
    placement: 'bottom',
    title: 'Flexible schedule',
    content: function(){
    return name + ',you can transfer batches in between';}
  },
  {
    element: '#col-3',
    placement: 'bottom',
    title: 'Round the clock support',
    content: 'Round-the-clock support'
  },
  {
    orphan: true,
    title: 'Thank you',
    backdrop: true,
    placement: 'top',
    content: 'Thank you for visiting the site'
  }
]
);

$(document).ready(function($event){
  tour.init();
  tour.start();
  $event.preventDefault();
});
// })