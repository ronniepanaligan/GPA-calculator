angular.module('myGPA').controller('mainController', function(){
    var a = this;
    a.classes = [];
    a.GPA = 0;
    a.grade = 0;
    a.units = 0;
    a.totalunits = 0;
    a.totalgrade = 0;
    a.GPAtotal = 0;
    a.total = 0;
    a.new = {};

    a.addClass = function(){
      a.classes.push(a.new);
      a.new = {};
    };

    a.A = function(){
      a.grade = 4;
      a.new.grade = 'A';
    };

    a.Am = function(){
      a.grade = 3.7;
      a.new.grade = 'A-';
    };

    a.Bp = function(){
      a.grade = 3.3;
      a.new.grade = 'B+';
    };

    a.B = function(){
      a.grade = 3;
      a.new.grade = 'B';
    };

    a.Bm = function(){
      a.grade = 2.7;
      a.new.grade = 'B-';
    };

    a.Cp = function(){
      a.grade = 2.3;
      a.new.grade = 'C+';
    };

    a.C = function(){
      a.grade = 2;
      a.new.grade = 'C';
    };

    a.Cm = function(){
      a.grade = 1.7;
      a.new.grade = 'C-';
    };

    a.Dp = function(){
      a.grade = 1.3;
      a.new.grade = 'D+';
    };

    a.D = function(){
      a.grade = 1;
      a.new.grade = 'D';
    };

    a.Dm = function(){
      a.grade = 0.7;
      a.new.grade = 'D-';
    };

    a.F = function(){
      a.grade = 0;
      a.new.grade = 'F';
    };

    a.calculate = function(){
      a.grade = a.new.units * a.grade;
      a.totalgrade = a.totalgrade + a.grade;
      a.totalunits += a.new.units;
      a.GPA = a.totalgrade/a.totalunits;
      a.addClass();
    };
});
