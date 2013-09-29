# hello

class Gamepad
  constructor: ->

  poll: ->
    gamepads = navigator.webkitGetGamepads()
    @data = gamepads[1]





angular.module("gamepadApp", [])


.controller 'MainCtrl', ($scope) ->
  $scope.gamepad = new Gamepad

  updateLoop = ->
    $scope.gamepad.poll()
    $scope.$apply() if !$scope.$$phase
    requestAnimationFrame updateLoop

  updateLoop()