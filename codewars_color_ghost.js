/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
  constructor() {
    const colorMaker = () => {
      let colors = ['white', 'yellow', 'purple', 'red'];
      let index;
      const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }
      index = getRandomArbitrary(0, 3);
    
      return colors[index];
    };
    this.color = colorMaker();
  }
}
