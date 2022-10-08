//https://egghead.io/lessons/javascript-dynamically-initialize-class-properties-using-typescript-decorators

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Get(url: string) {
    return function(target: any, name: string) {
        const hiddenInstanceKey = "_$$" + name + "$$_";
        const init = () => {
          return fetch(url)
            .then(response => response.json()); 
        };
    
        Object.defineProperty(target, name, {
          get: function() {
            return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
          }
        });
      }
    }
    function First() {
        return function(target: any, name: string) {
            const hiddenInstanceKey = "_$$" + name + "$$_";
            const prevInit = Object.getOwnPropertyDescriptor(target, name).get;
            const init = () => {
              return prevInit()
                .then(response => response[0]); 
            };
        
            Object.defineProperty(target, name, {
              get: function() {
                return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
              },
              configurable: true
            });
          }
        }
    class TodoService {
        @First()
        @Get('https://jsonplaceholder.typicode.com/todos')
        todos: Promise<ITodo[]>;
      }

      // type predicate
      interface Cat {
        numberOfLives: number;
      }
      interface Dog {
        isAGoodBoy: boolean;
      }
      // usage of type predicate
      function isCat(animal: Cat | Dog): animal is Cat {
        return typeof (animal as Cat).numberOfLives === 'number';
      }
