var hopfield = require('./architect/Hopfield');
var lstm = require('./architect/LSTM');
var lsm = require('./architect/Liquid');
var perceptron = require('./architect/Perceptron');
exports.LSTM = lstm.LSTM;
exports.Liquid = lsm.Liquid;
exports.Hopfield = hopfield.Hopfield;
exports.Perceptron = perceptron.Perceptron;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcmNoaXRlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxRQUFRLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztBQUNsRCxJQUFPLElBQUksV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFDLElBQU8sR0FBRyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDM0MsSUFBTyxVQUFVLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUUzQyxZQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNqQixjQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNwQixnQkFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDN0Isa0JBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InNyYy9hcmNoaXRlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9wZmllbGQgPSByZXF1aXJlKCcuL2FyY2hpdGVjdC9Ib3BmaWVsZCcpO1xuaW1wb3J0IGxzdG0gPSByZXF1aXJlKCcuL2FyY2hpdGVjdC9MU1RNJyk7XG5pbXBvcnQgbHNtID0gcmVxdWlyZSgnLi9hcmNoaXRlY3QvTGlxdWlkJyk7XG5pbXBvcnQgcGVyY2VwdHJvbiA9IHJlcXVpcmUoJy4vYXJjaGl0ZWN0L1BlcmNlcHRyb24nKTtcblxuZXhwb3J0IHZhciBMU1RNID0gbHN0bS5MU1RNO1xuZXhwb3J0IHZhciBMaXF1aWQgPSBsc20uTGlxdWlkO1xuZXhwb3J0IHZhciBIb3BmaWVsZCA9IGhvcGZpZWxkLkhvcGZpZWxkO1xuZXhwb3J0IHZhciBQZXJjZXB0cm9uID0gcGVyY2VwdHJvbi5QZXJjZXB0cm9uO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9