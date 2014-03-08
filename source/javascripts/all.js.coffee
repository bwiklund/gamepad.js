# hello

class Gamepads
  constructor: ->

  poll: ->
    @gamepads = navigator.getGamepads?() || navigator.webkitGetGamepads?() || []





angular.module("gamepadApp", [])


.controller 'MainCtrl', ['$scope', ($scope) ->
  $scope.gamepads = new Gamepads

  $scope.axisStyle = (n) -> opacity: Math.abs(n)+0.3
  $scope.buttonStyle = (n) ->
    opacity: Math.abs($scope.buttonValue(n))+0.3
    border: if $scope.buttonPressed(n) then '1px solid #888' else '1px solid transparent'

  $scope.buttonValue = (b) -> if typeof(b) == 'number' then b else b.value
  $scope.buttonPressed = (b) -> if typeof(b) == 'number' then b > 0.1 else b.pressed
  $scope.mappingString = (m) -> if m then m else '[none]'

  updateLoop = ->
    $scope.gamepads.poll()
    $scope.$apply() if !$scope.$$phase
    requestAnimationFrame updateLoop

  updateLoop()
]
