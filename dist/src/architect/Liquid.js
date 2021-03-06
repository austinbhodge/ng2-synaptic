var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var network = require('../network');
var trainer = require('../trainer');
var layer = require('../layer');
var Liquid = (function (_super) {
    __extends(Liquid, _super);
    function Liquid(inputs, hidden, outputs, connections, gates) {
        // create layers
        var inputLayer = new layer.Layer(inputs);
        var hiddenLayer = new layer.Layer(hidden);
        var outputLayer = new layer.Layer(outputs);
        // make connections and gates randomly among the neurons
        var neurons = hiddenLayer.neurons();
        var connectionList = [];
        for (var i = 0; i < connections; i++) {
            // connect two random neurons
            var from = Math.random() * neurons.length | 0;
            var to = Math.random() * neurons.length | 0;
            var connection = neurons[from].project(neurons[to]);
            connectionList.push(connection);
        }
        for (var j = 0; j < gates; j++) {
            // pick a random gater neuron
            var gater = Math.random() * neurons.length | 0;
            // pick a random connection to gate
            var connectionNumber = Math.random() * connectionList.length | 0;
            // let the gater gate the connection
            neurons[gater].gate(connectionList[connectionNumber]);
        }
        // connect the layers
        inputLayer.project(hiddenLayer);
        hiddenLayer.project(outputLayer);
        // set the layers of the network
        _super.call(this, {
            input: inputLayer,
            hidden: [hiddenLayer],
            output: outputLayer
        });
        // trainer
        this.trainer = new trainer.Trainer(this);
    }
    return Liquid;
})(network.Network);
exports.Liquid = Liquid;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcmNoaXRlY3QvTGlxdWlkLnRzIl0sIm5hbWVzIjpbIkxpcXVpZCIsIkxpcXVpZC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTyxPQUFPLFdBQVksWUFBWSxDQUFDLENBQUM7QUFDeEMsSUFBTyxPQUFPLFdBQVksWUFBWSxDQUFDLENBQUM7QUFDeEMsSUFBTyxLQUFLLFdBQVksVUFBVSxDQUFDLENBQUM7QUFHcEMsSUFBYSxNQUFNO0lBQVNBLFVBQWZBLE1BQU1BLFVBQXdCQTtJQUd6Q0EsU0FIV0EsTUFBTUEsQ0FHTEEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsV0FBV0EsRUFBRUEsS0FBS0E7UUFFckRDLEFBQ0FBLGdCQURnQkE7WUFDWkEsVUFBVUEsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUUzQ0EsQUFDQUEsd0RBRHdEQTtZQUNwREEsT0FBT0EsR0FBR0EsV0FBV0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDcENBLElBQUlBLGNBQWNBLEdBQStCQSxFQUFFQSxDQUFDQTtRQUVwREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsV0FBV0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDckNBLEFBQ0FBLDZCQUQ2QkE7Z0JBQ3pCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDNUNBLElBQUlBLFVBQVVBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7UUFFREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDL0JBLEFBQ0FBLDZCQUQ2QkE7Z0JBQ3pCQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUMvQ0EsQUFDQUEsbUNBRG1DQTtnQkFDL0JBLGdCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsY0FBY0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakVBLEFBQ0FBLG9DQURvQ0E7WUFDcENBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeERBLENBQUNBO1FBRURBLEFBQ0FBLHFCQURxQkE7UUFDckJBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBQ2hDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUVqQ0EsQUFDQUEsZ0NBRGdDQTtRQUNoQ0Esa0JBQU1BO1lBQ0pBLEtBQUtBLEVBQUVBLFVBQVVBO1lBQ2pCQSxNQUFNQSxFQUFFQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNyQkEsTUFBTUEsRUFBRUEsV0FBV0E7U0FDcEJBLENBQUNBLENBQUNBO1FBRUhBLEFBQ0FBLFVBRFVBO1FBQ1ZBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzNDQSxDQUFDQTtJQUNIRCxhQUFDQTtBQUFEQSxDQTdDQSxBQTZDQ0EsRUE3QzJCLE9BQU8sQ0FBQyxPQUFPLEVBNkMxQztBQTdDWSxjQUFNLEdBQU4sTUE2Q1osQ0FBQSIsImZpbGUiOiJzcmMvYXJjaGl0ZWN0L0xpcXVpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXR3b3JrICA9IHJlcXVpcmUoJy4uL25ldHdvcmsnKTtcbmltcG9ydCB0cmFpbmVyICA9IHJlcXVpcmUoJy4uL3RyYWluZXInKTtcbmltcG9ydCBsYXllciAgPSByZXF1aXJlKCcuLi9sYXllcicpO1xuaW1wb3J0IG5ldXJvbiA9IHJlcXVpcmUoJy4uL25ldXJvbicpO1xuXG5leHBvcnQgY2xhc3MgTGlxdWlkIGV4dGVuZHMgbmV0d29yay5OZXR3b3JrIHtcbiAgdHJhaW5lcjogdHJhaW5lci5UcmFpbmVyO1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0cywgaGlkZGVuLCBvdXRwdXRzLCBjb25uZWN0aW9ucywgZ2F0ZXMpIHtcblxuICAgIC8vIGNyZWF0ZSBsYXllcnNcbiAgICB2YXIgaW5wdXRMYXllciA9IG5ldyBsYXllci5MYXllcihpbnB1dHMpO1xuICAgIHZhciBoaWRkZW5MYXllciA9IG5ldyBsYXllci5MYXllcihoaWRkZW4pO1xuICAgIHZhciBvdXRwdXRMYXllciA9IG5ldyBsYXllci5MYXllcihvdXRwdXRzKTtcblxuICAgIC8vIG1ha2UgY29ubmVjdGlvbnMgYW5kIGdhdGVzIHJhbmRvbWx5IGFtb25nIHRoZSBuZXVyb25zXG4gICAgdmFyIG5ldXJvbnMgPSBoaWRkZW5MYXllci5uZXVyb25zKCk7XG4gICAgdmFyIGNvbm5lY3Rpb25MaXN0OiBuZXVyb24uTmV1cm9uLkNvbm5lY3Rpb25bXSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uczsgaSsrKSB7XG4gICAgICAvLyBjb25uZWN0IHR3byByYW5kb20gbmV1cm9uc1xuICAgICAgdmFyIGZyb20gPSBNYXRoLnJhbmRvbSgpICogbmV1cm9ucy5sZW5ndGggfCAwO1xuICAgICAgdmFyIHRvID0gTWF0aC5yYW5kb20oKSAqIG5ldXJvbnMubGVuZ3RoIHwgMDtcbiAgICAgIHZhciBjb25uZWN0aW9uID0gbmV1cm9uc1tmcm9tXS5wcm9qZWN0KG5ldXJvbnNbdG9dKTtcbiAgICAgIGNvbm5lY3Rpb25MaXN0LnB1c2goY29ubmVjdGlvbik7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBnYXRlczsgaisrKSB7XG4gICAgICAvLyBwaWNrIGEgcmFuZG9tIGdhdGVyIG5ldXJvblxuICAgICAgdmFyIGdhdGVyID0gTWF0aC5yYW5kb20oKSAqIG5ldXJvbnMubGVuZ3RoIHwgMDtcbiAgICAgIC8vIHBpY2sgYSByYW5kb20gY29ubmVjdGlvbiB0byBnYXRlXG4gICAgICB2YXIgY29ubmVjdGlvbk51bWJlciA9IE1hdGgucmFuZG9tKCkgKiBjb25uZWN0aW9uTGlzdC5sZW5ndGggfCAwO1xuICAgICAgLy8gbGV0IHRoZSBnYXRlciBnYXRlIHRoZSBjb25uZWN0aW9uXG4gICAgICBuZXVyb25zW2dhdGVyXS5nYXRlKGNvbm5lY3Rpb25MaXN0W2Nvbm5lY3Rpb25OdW1iZXJdKTtcbiAgICB9XG5cbiAgICAvLyBjb25uZWN0IHRoZSBsYXllcnNcbiAgICBpbnB1dExheWVyLnByb2plY3QoaGlkZGVuTGF5ZXIpO1xuICAgIGhpZGRlbkxheWVyLnByb2plY3Qob3V0cHV0TGF5ZXIpO1xuXG4gICAgLy8gc2V0IHRoZSBsYXllcnMgb2YgdGhlIG5ldHdvcmtcbiAgICBzdXBlcih7XG4gICAgICBpbnB1dDogaW5wdXRMYXllcixcbiAgICAgIGhpZGRlbjogW2hpZGRlbkxheWVyXSxcbiAgICAgIG91dHB1dDogb3V0cHV0TGF5ZXJcbiAgICB9KTtcblxuICAgIC8vIHRyYWluZXJcbiAgICB0aGlzLnRyYWluZXIgPSBuZXcgdHJhaW5lci5UcmFpbmVyKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=