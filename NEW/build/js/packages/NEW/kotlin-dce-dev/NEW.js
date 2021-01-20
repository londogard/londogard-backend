(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'fritz2-core', 'kotlinx-coroutines-core', 'fritz2-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('fritz2-core'), require('kotlinx-coroutines-core'), require('fritz2-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NEW'.");
    }if (typeof this['fritz2-core'] === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'fritz2-core' was not found. Please, check whether 'fritz2-core' is loaded prior to 'NEW'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'NEW'.");
    }if (typeof this['fritz2-components'] === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'fritz2-components' was not found. Please, check whether 'fritz2-components' is loaded prior to 'NEW'.");
    }root.NEW = factory(typeof NEW === 'undefined' ? {} : NEW, kotlin, this['fritz2-core'], this['kotlinx-coroutines-core'], this['fritz2-components']);
  }
}(this, function (_, Kotlin, $module$fritz2_core, $module$kotlinx_coroutines_core, $module$fritz2_components) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var router = $module$fritz2_core.dev.fritz2.routing.router_61zpoe$;
  var equals = Kotlin.equals;
  var render = $module$fritz2_core.dev.fritz2.dom.html.render_d5pqs4$;
  var mount = $module$fritz2_core.dev.fritz2.dom.mount_39wbll$;
  var storeOf = $module$fritz2_core.dev.fritz2.binding.storeOf_le71cu$;
  var RootStore = $module$fritz2_core.dev.fritz2.binding.RootStore;
  var tracker = $module$fritz2_core.dev.fritz2.tracking.tracker_4wgjuj$;
  var L3000 = Kotlin.Long.fromInt(3000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var modal = $module$fritz2_components.dev.fritz2.components.modal_awwolb$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var files = $module$fritz2_core.dev.fritz2.dom.files_8uplq$;
  var onEach = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.onEach_706ovd$;
  var watch = $module$fritz2_core.dev.fritz2.binding.watch_wegvf8$;
  var inputField = $module$fritz2_components.dev.fritz2.components.inputField_efagcm$;
  var clickButton = $module$fritz2_components.dev.fritz2.components.clickButton_mjymsj$;
  var flexBox = $module$fritz2_components.dev.fritz2.components.flexBox_ytyz2t$;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var Tag = $module$fritz2_core.dev.fritz2.dom.Tag;
  var WithText = $module$fritz2_core.dev.fritz2.dom.WithText;
  var states = $module$fritz2_core.dev.fritz2.dom.states_8uplq$;
  var checkbox = $module$fritz2_components.dev.fritz2.components.checkbox_2p3a06$;
  Routing.prototype = Object.create(Enum.prototype);
  Routing.prototype.constructor = Routing;
  mainContent$ObjectLiteral.prototype = Object.create(RootStore.prototype);
  mainContent$ObjectLiteral.prototype.constructor = mainContent$ObjectLiteral;
  ImgCompare.prototype = Object.create(Tag.prototype);
  ImgCompare.prototype.constructor = ImgCompare;
  function Routing(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Routing_initFields() {
    Routing_initFields = function () {
    };
    Routing$Todo_instance = new Routing('Todo', 0);
  }
  var Routing$Todo_instance;
  function Routing$Todo_getInstance() {
    Routing_initFields();
    return Routing$Todo_instance;
  }
  Routing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Routing',
    interfaces: [Enum]
  };
  function Routing$values() {
    return [Routing$Todo_getInstance()];
  }
  Routing.values = Routing$values;
  function Routing$valueOf(name) {
    switch (name) {
      case 'Todo':
        return Routing$Todo_getInstance();
      default:throwISE('No enum constant com.londogard.timetracker.Routing.' + name);
    }
  }
  Routing.valueOf_61zpoe$ = Routing$valueOf;
  function ThirdPartyScripts() {
    ThirdPartyScripts_instance = this;
  }
  function ThirdPartyScripts$imageComparison$lambda($receiver) {
    $receiver.type_61zpoe$('module');
    $receiver.src_61zpoe$('https://unpkg.com/img-comparison-slider@3/dist/component/component.esm.js');
    return Unit;
  }
  function ThirdPartyScripts$imageComparison$lambda_0($receiver) {
    $receiver.attr_puj7f4$('nomodule', '');
    $receiver.src_61zpoe$('https://unpkg.com/img-comparison-slider@3/dist/component/component.js');
    return Unit;
  }
  function ThirdPartyScripts$imageComparison$lambda_1($receiver) {
    $receiver.attr_puj7f4$('rel', 'stylesheet');
    $receiver.attr_puj7f4$('href', 'https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css');
    return Unit;
  }
  ThirdPartyScripts.prototype.imageComparison_fr6vzb$ = function ($receiver) {
    $receiver.script_q7kt3v$(void 0, void 0, ThirdPartyScripts$imageComparison$lambda);
    $receiver.script_q7kt3v$(void 0, void 0, ThirdPartyScripts$imageComparison$lambda_0);
    $receiver.custom_rwdb8o$('link', ThirdPartyScripts$imageComparison$lambda_1);
  };
  ThirdPartyScripts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ThirdPartyScripts',
    interfaces: []
  };
  var ThirdPartyScripts_instance = null;
  function ThirdPartyScripts_getInstance() {
    if (ThirdPartyScripts_instance === null) {
      new ThirdPartyScripts();
    }return ThirdPartyScripts_instance;
  }
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
  Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$mapNotNull$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$mapNotNull$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$mapNotNull$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapNotNull$lambda.prototype.constructor = Coroutine$mapNotNull$lambda;
  Coroutine$mapNotNull$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var transformed = this.local$tmp$;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.emit_11rb$(transformed, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mapNotNull$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$mapNotNull$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function unsafeFlow$ObjectLiteral_0(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_0($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_0.prototype.constructor = Coroutine$collect_42ocv1$_0;
  Coroutine$collect_42ocv1$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral_0.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_0(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_0;
  Coroutine$unsafeTransform$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_0(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_0 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$this$unsafeTransform = this$unsafeTransform_0;
      this.local$$receiver = $receiver_0;
    }
    Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
    Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_0(this.local$closure$transform, this.local$$receiver)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$transform_0, this$unsafeTransform_0) {
      return function ($receiver_0, continuation_0, suspended) {
        var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
  Coroutine$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function map$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda($receiver, site) {
    if (equals(site, 'todo'))
      mainContent($receiver);
    else
      mainContent($receiver);
    return Unit;
  }
  function main$lambda$lambda(closure$router) {
    return function ($receiver) {
      $receiver.render_3mkwiv$(closure$router.data, main$lambda$lambda$lambda);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Footer');
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.hr_4qegrg$(void 0, void 0, main$lambda$lambda$lambda_0);
    $receiver.p_4bejqm$(void 0, void 0, main$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda(closure$router) {
    return function ($receiver) {
      ThirdPartyScripts_getInstance().imageComparison_fr6vzb$($receiver);
      $receiver.div_hhcm6n$('content', void 0, main$lambda$lambda(closure$router));
      $receiver.div_hhcm6n$('footer', void 0, main$lambda$lambda_0);
      return Unit;
    };
  }
  function main() {
    var router_0 = router('');
    mount(render(void 0, main$lambda(router_0)), 'target');
  }
  function mainContent$ObjectLiteral(initialData, id) {
    RootStore.call(this, initialData, id);
    this.loading = tracker();
    this.showMsg = this.handle_7ib3lp$(void 0, mainContent$ObjectLiteral$showMsg$lambda(this));
  }
  function mainContent$ObjectLiteral$showMsg$lambda$lambda$lambda($receiver, it) {
    return Unit;
  }
  function Coroutine$mainContent$ObjectLiteral$showMsg$lambda(this$_0, model_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$this = void 0;
    this.local$model = model_0;
  }
  Coroutine$mainContent$ObjectLiteral$showMsg$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainContent$ObjectLiteral$showMsg$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainContent$ObjectLiteral$showMsg$lambda.prototype.constructor = Coroutine$mainContent$ObjectLiteral$showMsg$lambda;
  Coroutine$mainContent$ObjectLiteral$showMsg$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            console.log('HELLO WORLDS');
            this.local$$this = this.local$this$.loading;
            var transaction = 'running...';
            this.local$$this.state.value = transaction;
            this.state_0 = 2;
            this.result_0 = delay(L3000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = modal(void 0, void 0, void 0, void 0, mainContent$ObjectLiteral$showMsg$lambda$lambda$lambda);
            this.local$$this.state.value = null;
            return this.local$model;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainContent$ObjectLiteral$showMsg$lambda(this$_0) {
    return function (model_0, continuation_0, suspended) {
      var instance = new Coroutine$mainContent$ObjectLiteral$showMsg$lambda(this$_0, model_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  mainContent$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RootStore]
  };
  function mainContent$lambda$lambda($receiver) {
    return $receiver.full;
  }
  function mainContent$lambda$lambda_0($receiver) {
    return $receiver.center;
  }
  function mainContent$lambda$lambda_1($receiver) {
    return $receiver.column;
  }
  function mainContent$lambda$lambda_2($receiver) {
    return $receiver.center;
  }
  function mainContent$lambda($receiver) {
    $receiver.width_wpghq5$(mainContent$lambda$lambda);
    $receiver.alignItems_tsd917$(mainContent$lambda$lambda_0);
    $receiver.direction_la6ffj$(mainContent$lambda$lambda_1);
    $receiver.justifyContent_vlnw1j$(mainContent$lambda$lambda_2);
    return Unit;
  }
  function mainContent$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('ColorKidz');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda($receiver) {
    return '25%';
  }
  function mainContent$lambda$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function mainContent$lambda$lambda_4($receiver) {
    $receiver.width_wpghq5$(mainContent$lambda$lambda$lambda);
    $receiver.margin_bcpvvc$(mainContent$lambda$lambda$lambda_0);
    return Unit;
  }
  function Coroutine$mainContent$lambda$lambda$lambda$lambda(value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$value = value_0;
  }
  Coroutine$mainContent$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainContent$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainContent$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$mainContent$lambda$lambda$lambda$lambda;
  Coroutine$mainContent$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$value != null ? this.local$value[0] : null;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainContent$lambda$lambda$lambda$lambda(value_0, continuation_0, suspended) {
    var instance = new Coroutine$mainContent$lambda$lambda$lambda$lambda(value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$mainContent$lambda$lambda$lambda$lambda_0(file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$file = file_0;
  }
  Coroutine$mainContent$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainContent$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainContent$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$mainContent$lambda$lambda$lambda$lambda_0;
  Coroutine$mainContent$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return URL.createObjectURL(this.local$file);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainContent$lambda$lambda$lambda$lambda_0(file_0, continuation_0, suspended) {
    var instance = new Coroutine$mainContent$lambda$lambda$lambda$lambda_0(file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$mainContent$lambda$lambda$lambda$lambda_1(closure$lhsStore_0, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$lhsStore = closure$lhsStore_0;
    this.local$file = file_0;
  }
  Coroutine$mainContent$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainContent$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainContent$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$mainContent$lambda$lambda$lambda$lambda_1;
  Coroutine$mainContent$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$lhsStore.update.invoke_11rb$(this.local$file), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainContent$lambda$lambda$lambda$lambda_1(closure$lhsStore_0) {
    return function (file_0, continuation_0, suspended) {
      var instance = new Coroutine$mainContent$lambda$lambda$lambda$lambda_1(closure$lhsStore_0, file_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mainContent$lambda$lambda$lambda_1(closure$lhsStore) {
    return function ($receiver) {
      $receiver.type_61zpoe$('file');
      $receiver.accept_61zpoe$('image/*');
      var $receiver_0 = files($receiver.changes);
      var $receiver_1 = new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(mapNotNull$lambda(mainContent$lambda$lambda$lambda$lambda), $receiver_0));
      watch(onEach(new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda(mainContent$lambda$lambda$lambda$lambda_0), $receiver_1)), mainContent$lambda$lambda$lambda$lambda_1(closure$lhsStore)));
      return Unit;
    };
  }
  function mainContent$lambda$lambda_5(closure$lhsStore) {
    return function ($receiver) {
      $receiver.base_rs40ko$(mainContent$lambda$lambda$lambda_1(closure$lhsStore));
      return Unit;
    };
  }
  function mainContent$lambda$lambda$lambda_2($receiver) {
    return $receiver.center;
  }
  function mainContent$lambda$lambda_6($receiver) {
    $receiver.justifyContent_vlnw1j$(mainContent$lambda$lambda$lambda_2);
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_3(closure$buttonStore) {
    return function ($receiver) {
      $receiver.loading_433wua$(closure$buttonStore.loading);
      $receiver.loadingText_61zpoe$('Converting...');
      $receiver.text_61zpoe$('Convert Image');
      return Unit;
    };
  }
  function mainContent$lambda$lambda$lambda_4($receiver) {
    $receiver.loadingText_61zpoe$('playing');
    $receiver.text_61zpoe$('Save Image');
    return Unit;
  }
  function mainContent$lambda$lambda_7(closure$buttonStore) {
    return function ($receiver) {
      $receiver.handledBy_qxix7b$(clickButton($receiver, StyledItems_getInstance().buttonStyle, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_3(closure$buttonStore)), closure$buttonStore.showMsg);
      $receiver.handledBy_qxix7b$(clickButton($receiver, StyledItems_getInstance().buttonStyle, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_4), closure$buttonStore.showMsg);
      return Unit;
    };
  }
  function mainContent$lambda$lambda$lambda_5(closure$rhsStore) {
    return function ($receiver) {
      $receiver.attr_puj7f4$('slot', 'before');
      $receiver.src_p81yox$(closure$rhsStore.data);
      return Unit;
    };
  }
  function mainContent$lambda$lambda$lambda_6(closure$lhsStore) {
    return function ($receiver) {
      $receiver.attr_puj7f4$('slot', 'after');
      $receiver.attr_puj7f4$('width', '100%');
      $receiver.src_p81yox$(closure$lhsStore.data);
      return Unit;
    };
  }
  function mainContent$lambda$lambda_8(closure$rhsStore, closure$lhsStore) {
    return function ($receiver) {
      $receiver.img_5r8d8h$(void 0, void 0, mainContent$lambda$lambda$lambda_5(closure$rhsStore));
      $receiver.img_5r8d8h$(void 0, void 0, mainContent$lambda$lambda$lambda_6(closure$lhsStore));
      return Unit;
    };
  }
  function mainContent$lambda_0(closure$lhsStore, closure$buttonStore, closure$rhsStore) {
    return function ($receiver) {
      $receiver.h1_hya6au$(void 0, void 0, mainContent$lambda$lambda_3);
      inputField($receiver, mainContent$lambda$lambda_4, void 0, void 0, void 0, void 0, mainContent$lambda$lambda_5(closure$lhsStore));
      flexBox($receiver, mainContent$lambda$lambda_6, void 0, void 0, void 0, mainContent$lambda$lambda_7(closure$buttonStore));
      $receiver.custom_rwdb8o$('img-comparison-slider', mainContent$lambda$lambda_8(closure$rhsStore, closure$lhsStore));
      return Unit;
    };
  }
  function mainContent($receiver) {
    var rhsStore = storeOf('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/64_365_Color_Macro_%285498808099%29.jpg/1024px-64_365_Color_Macro_%285498808099%29.jpg');
    var lhsStore = storeOf('https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/375px-Donald_Trump_official_portrait.jpg');
    var buttonStore = new mainContent$ObjectLiteral(0);
    flexBox($receiver, mainContent$lambda, void 0, void 0, void 0, mainContent$lambda_0(lhsStore, buttonStore, rhsStore));
  }
  function ImgCompare(job) {
    Tag.call(this, 'img-comparison-slider', void 0, void 0, job);
  }
  ImgCompare.prototype.before_vq553v$ = function (value) {
    this.attr_i7f8q9$('before', this.asString_x2ftfk$(value));
  };
  ImgCompare.prototype.after_f5my4u$ = function (value) {
    this.attr_i7f8q9$('after', this.asString_x2ftfk$(value));
  };
  ImgCompare.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgCompare',
    interfaces: [WithText, Tag]
  };
  function imageCompare($receiver, content) {
    return $receiver.register_x3phfy$(new ImgCompare($receiver.job), content);
  }
  function StyledItems() {
    StyledItems_instance = this;
    this.buttonStyle = StyledItems$buttonStyle$lambda;
    this.veryImportant = StyledItems$veryImportant$lambda;
  }
  function StyledItems$buttonStyle$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function StyledItems$buttonStyle$lambda($receiver) {
    $receiver.margin_bcpvvc$(StyledItems$buttonStyle$lambda$lambda);
    return Unit;
  }
  function StyledItems$veryImportant$lambda$lambda($receiver) {
    return $receiver.raised;
  }
  function StyledItems$veryImportant$lambda$lambda$lambda($receiver) {
    return $receiver.danger;
  }
  function StyledItems$veryImportant$lambda$lambda_0($receiver) {
    $receiver.color_jl9ed9$(StyledItems$veryImportant$lambda$lambda$lambda);
    return Unit;
  }
  function StyledItems$veryImportant$lambda$lambda_1($receiver) {
    return $receiver.light;
  }
  function StyledItems$veryImportant$lambda$lambda_2($receiver) {
    return '1.5rem';
  }
  function StyledItems$veryImportant$lambda($receiver) {
    $receiver.boxShadow_ihm9h8$(StyledItems$veryImportant$lambda$lambda);
    $receiver.background_f5fcq6$(StyledItems$veryImportant$lambda$lambda_0);
    $receiver.color_jl9ed9$(StyledItems$veryImportant$lambda$lambda_1);
    $receiver.radius_bcpvvc$(StyledItems$veryImportant$lambda$lambda_2);
    return Unit;
  }
  StyledItems.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StyledItems',
    interfaces: []
  };
  var StyledItems_instance = null;
  function StyledItems_getInstance() {
    if (StyledItems_instance === null) {
      new StyledItems();
    }return StyledItems_instance;
  }
  function TodoItem(completed, text) {
    if (text === void 0)
      text = null;
    this.completed = completed;
    this.text = text;
  }
  function TodoItem$render$lambda$lambda$lambda(this$TodoItem) {
    return function () {
      return this$TodoItem.completed.data;
    };
  }
  function TodoItem$render$lambda$lambda$lambda_0(this$TodoItem, this$) {
    return function ($receiver) {
      this$.handledBy_ytah3h$(states($receiver.changes), this$TodoItem.completed.update);
      return Unit;
    };
  }
  function TodoItem$render$lambda$lambda(this$TodoItem, this$) {
    return function ($receiver) {
      $receiver.checked_czwcei$(TodoItem$render$lambda$lambda$lambda(this$TodoItem));
      $receiver.events_gknsc3$(TodoItem$render$lambda$lambda$lambda_0(this$TodoItem, this$));
      return Unit;
    };
  }
  function TodoItem$render$lambda$lambda$lambda_1(this$TodoItem) {
    return function ($receiver) {
      if (this$TodoItem.text != null)
        $receiver.value_61zpoe$(this$TodoItem.text);
      else
        $receiver.placeholder_61zpoe$('Fix the garden');
      return Unit;
    };
  }
  function TodoItem$render$lambda$lambda_0(this$TodoItem) {
    return function ($receiver) {
      $receiver.base_rs40ko$(TodoItem$render$lambda$lambda$lambda_1(this$TodoItem));
      return Unit;
    };
  }
  function TodoItem$render$lambda(this$TodoItem) {
    return function ($receiver) {
      checkbox($receiver, void 0, void 0, void 0, void 0, TodoItem$render$lambda$lambda(this$TodoItem, $receiver));
      inputField($receiver, Todo_getInstance().todoInput, void 0, void 0, void 0, void 0, TodoItem$render$lambda$lambda_0(this$TodoItem));
      return Unit;
    };
  }
  TodoItem.prototype.render_1s6vjs$ = function (context) {
    return flexBox(context, void 0, void 0, void 0, void 0, TodoItem$render$lambda(this));
  };
  TodoItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoItem',
    interfaces: []
  };
  TodoItem.prototype.component1 = function () {
    return this.completed;
  };
  TodoItem.prototype.component2 = function () {
    return this.text;
  };
  TodoItem.prototype.copy_kd8xbo$ = function (completed, text) {
    return new TodoItem(completed === void 0 ? this.completed : completed, text === void 0 ? this.text : text);
  };
  TodoItem.prototype.toString = function () {
    return 'TodoItem(completed=' + Kotlin.toString(this.completed) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  TodoItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.completed) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  TodoItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.completed, other.completed) && Kotlin.equals(this.text, other.text)))));
  };
  function Todo() {
    Todo_instance = this;
    this.todoInput = Todo$todoInput$lambda;
  }
  function Todo$todoInput$lambda$lambda$lambda($receiver) {
    return $receiver.none;
  }
  function Todo$todoInput$lambda$lambda($receiver) {
    $receiver.style_hw5xj$(Todo$todoInput$lambda$lambda$lambda);
    return Unit;
  }
  function Todo$todoInput$lambda($receiver) {
    $receiver.border_4a22k0$(Todo$todoInput$lambda$lambda);
    return Unit;
  }
  Todo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Todo',
    interfaces: []
  };
  var Todo_instance = null;
  function Todo_getInstance() {
    if (Todo_instance === null) {
      new Todo();
    }return Todo_instance;
  }
  Object.defineProperty(Routing, 'Todo', {
    get: Routing$Todo_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$londogard = package$com.londogard || (package$com.londogard = {});
  var package$timetracker = package$londogard.timetracker || (package$londogard.timetracker = {});
  package$timetracker.Routing = Routing;
  Object.defineProperty(package$timetracker, 'ThirdPartyScripts', {
    get: ThirdPartyScripts_getInstance
  });
  package$timetracker.main = main;
  $$importsForInline$$['fritz2-core'] = $module$fritz2_core;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$timetracker.mainContent_fr6vzb$ = mainContent;
  var package$components = package$timetracker.components || (package$timetracker.components = {});
  package$components.ImgCompare = ImgCompare;
  package$components.imageCompare_ipd4qi$ = imageCompare;
  Object.defineProperty(package$components, 'StyledItems', {
    get: StyledItems_getInstance
  });
  package$components.TodoItem = TodoItem;
  var package$styles = package$timetracker.styles || (package$timetracker.styles = {});
  Object.defineProperty(package$styles, 'Todo', {
    get: Todo_getInstance
  });
  ImgCompare.prototype.asText_x2ftfk$ = WithText.prototype.asText_x2ftfk$;
  ImgCompare.prototype.asText_lg9ri$ = WithText.prototype.asText_lg9ri$;
  ImgCompare.prototype.unaryPlus_pdl1vz$ = WithText.prototype.unaryPlus_pdl1vz$;
  main();
  Kotlin.defineModule('NEW', _);
  return _;
}));

//# sourceMappingURL=NEW.js.map
