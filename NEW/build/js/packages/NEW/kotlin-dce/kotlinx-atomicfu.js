(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var wrapFunction = Kotlin.wrapFunction;
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.lock', function () {
  });
  ReentrantLock.prototype.tryLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.tryLock', function () {
    return true;
  });
  ReentrantLock.prototype.unlock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.unlock', function () {
  });
  ReentrantLock.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReentrantLock', interfaces: []};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$atomicfu = package$kotlinx.atomicfu || (package$kotlinx.atomicfu = {});
  var package$locks = package$atomicfu.locks || (package$atomicfu.locks = {});
  package$locks.ReentrantLock = ReentrantLock;
  Lock = new ReentrantLock();
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
