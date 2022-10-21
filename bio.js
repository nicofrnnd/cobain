const cards = document.querySelectorAll('.card');
   cards.forEach(function(el){
   		el.addEventListener('mouseenter', function(e){
   			e.target.style.backgroundColor = 'lavender';
   			e.target.style.color = 'black';
   		});

   		el.addEventListener('mouseleave', function(e){
   			e.target.style.backgroundColor = 'white';
   			e.target.style.color = 'black';
   		});
   });