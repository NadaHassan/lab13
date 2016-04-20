var app = angular.module('dir',[]);

app.directive('hi', function(){
  return{
    restrict: 'EA',
    template: "<h1>what's up</h1>",
    replace: true
  };
  console.log('directive is working')
});
