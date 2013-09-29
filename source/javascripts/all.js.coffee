# hello

class Gamepads
  constructor: ->

  poll: ->
    @gamepads = navigator.webkitGetGamepads()





angular.module("gamepadApp", [])


.controller 'MainCtrl', ($scope) ->
  $scope.gamepads = new Gamepads

  updateLoop = ->
    $scope.gamepads.poll()
    $scope.$apply() if !$scope.$$phase
    requestAnimationFrame updateLoop

  updateLoop()