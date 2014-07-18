angular.module 'gamepadApp', []


.factory 'Gamepads', ->
  class Gamepads
    poll: ->
      @gamepads = navigator.getGamepads?() || navigator.webkitGetGamepads?() || []


# note that in a large app, running a digest 60 times a second would not be great.
.factory '$requestAnimationFrame', ['$rootScope', ($rootScope) ->
  (cb) ->
    requestAnimationFrame ->
      $rootScope.$apply cb
]


.controller 'MainCtrl', ['$scope', '$requestAnimationFrame', 'Gamepads', ($scope,    $requestAnimationFrame, Gamepads) ->

  $scope.gamepads = new Gamepads

  $scope.axisStyle = (n) ->
    opacity: Math.abs(n) + 0.3

  $scope.buttonStyle = (n) ->
    val = $scope.buttonValue(n)
    opacity: Math.abs(val) + 0.3
    border: if $scope.buttonPressed(n) then '1px solid #888' else '1px solid transparent'

  $scope.buttonValue = (b) ->
    if typeof(b) == 'number' then b else b.value

  $scope.buttonPressed = (b) ->
    if typeof(b) == 'number' then b > 0.1 else b.pressed

  $scope.mappingString = (m) ->
    if m then m else '[none]'

  # note that requestAnimationFrame if used instead of plain $timeout.
  # Gamepad#poll() had a tendency to lock up when called with setInterval / $interval.
  updateLoop = ->
    $scope.gamepads.poll()
    $requestAnimationFrame updateLoop

  updateLoop()
]
