rooms = {

            'Hall' : { 
                  'north' : 'Angela\'s room',
                  'west'  : 'Living room',
                  'look'  : 'You see a window and coat rack.'
                  
                },

            'Living room' : {
                  'north' : 'Dining room',
                  'east'  : 'Hall',
                  'look'  : 'You see a bay window above a couch, a fireplace and a TV.'
                  
                },

            'Dining room' : {
                  'north' : 'Kitchen',
                  'south' : 'Living room',
                  'up'    : 'Parent\'s room',
                  'look'  : 'You see a big Dining room table and a way up.'
                  
                },
            'Kitchen' : {
                  'south' : 'Dining room',
                  'look'  : 'You see a fridge, sink, and table.'
                  
                  
                },
            'Angela\'s room' : {
                  'north' : 'Greg\'s room',
                  'south'  : 'Hall',
                  'look'  : 'You see a small bed and poster of a horse.'
                  
                },
            'Greg\'s room' : {
                  'south' : 'Angela\'s room',
                  'look'  : 'You see a telescope and poster of the solar system. There is an image of a microwave. \'go microwave\' is scribbled below'
                  
                  
                },

            'Parent\'s room' : {
                  'down' : 'Dining room',
                  'north'  : 'Attic',
                  'look'  : 'You see a large bed and nightstand.'
   
                },
            'Attic' : {
                  'south' : 'Parent\'s room',
                  'microwave'  : 'Alien planet',
                  'look'     : 'You see an unfinished attic, lit by naked bulb and a microwave on a chair.'
                  
                },


            'Alien planet' : {
                  'microwave' : 'Attic',
                  'look' : 'You see an ice cave lit by a dark red sun.'
                  
                }    

         }
