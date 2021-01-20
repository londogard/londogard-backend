(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'fritz2-core', 'fritz2-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('fritz2-core'), require('fritz2-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NEW'.");
    }if (typeof this['fritz2-core'] === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'fritz2-core' was not found. Please, check whether 'fritz2-core' is loaded prior to 'NEW'.");
    }if (typeof this['fritz2-components'] === 'undefined') {
      throw new Error("Error loading module 'NEW'. Its dependency 'fritz2-components' was not found. Please, check whether 'fritz2-components' is loaded prior to 'NEW'.");
    }root.NEW = factory(typeof NEW === 'undefined' ? {} : NEW, kotlin, this['fritz2-core'], this['fritz2-components']);
  }
}(this, function (_, Kotlin, $module$fritz2_core, $module$fritz2_components) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var router = $module$fritz2_core.dev.fritz2.routing.router_61zpoe$;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$fritz2_core.dev.fritz2.dom.html.render_d5pqs4$;
  var mount = $module$fritz2_core.dev.fritz2.dom.mount_39wbll$;
  var storeOf = $module$fritz2_core.dev.fritz2.binding.storeOf_le71cu$;
  var box = $module$fritz2_components.dev.fritz2.components.box_ytyz2t$;
  var stackUp = $module$fritz2_components.dev.fritz2.components.stackUp_er9jfz$;
  var showOpenFilePicker = global.showOpenFilePicker;
  var clickButton = $module$fritz2_components.dev.fritz2.components.clickButton_mjymsj$;
  var Tag = $module$fritz2_core.dev.fritz2.dom.Tag;
  var WithText = $module$fritz2_core.dev.fritz2.dom.WithText;
  var states = $module$fritz2_core.dev.fritz2.dom.states_8uplq$;
  var checkbox = $module$fritz2_components.dev.fritz2.components.checkbox_2p3a06$;
  var inputField = $module$fritz2_components.dev.fritz2.components.inputField_efagcm$;
  var flexBox = $module$fritz2_components.dev.fritz2.components.flexBox_ytyz2t$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  ImgCompare.prototype = Object.create(Tag.prototype);
  var Routing$Todo_instance;
  function main$lambda$lambda($receiver) {
    $receiver.type_61zpoe$('module');
    $receiver.src_61zpoe$('https://unpkg.com/img-comparison-slider@3/dist/component/component.esm.js');
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.attr_puj7f4$('nomodule', '');
    $receiver.src_61zpoe$('https://unpkg.com/img-comparison-slider@3/dist/component/component.js');
    return Unit;
  }
  function main$lambda$lambda_1($receiver) {
    $receiver.attr_puj7f4$('rel', 'stylesheet');
    $receiver.attr_puj7f4$('href', 'https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css');
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Header');
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda_2($receiver) {
    $receiver.p_4bejqm$(void 0, void 0, main$lambda$lambda$lambda);
    $receiver.hr_4qegrg$(void 0, void 0, main$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda$lambda_1($receiver, site) {
    switch (site) {
      case 'todo':
        mainContent($receiver);
        break;
      case 'time':
        timeContent($receiver);
        break;
      default:mainContent($receiver);
        break;
    }
    return Unit;
  }
  function main$lambda$lambda_3(closure$router) {
    return function ($receiver) {
      $receiver.render_3mkwiv$(closure$router.data, main$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Footer');
    return Unit;
  }
  function main$lambda$lambda_4($receiver) {
    $receiver.hr_4qegrg$(void 0, void 0, main$lambda$lambda$lambda_2);
    $receiver.p_4bejqm$(void 0, void 0, main$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda(closure$router) {
    return function ($receiver) {
      $receiver.script_q7kt3v$(void 0, void 0, main$lambda$lambda);
      $receiver.script_q7kt3v$(void 0, void 0, main$lambda$lambda_0);
      $receiver.custom_rwdb8o$('link', main$lambda$lambda_1);
      $receiver.div_hhcm6n$('header', void 0, main$lambda$lambda_2);
      $receiver.div_hhcm6n$('content', void 0, main$lambda$lambda_3(closure$router));
      $receiver.div_hhcm6n$('footer', void 0, main$lambda$lambda_4);
      return Unit;
    };
  }
  function main() {
    var router_0 = router('todo');
    mount(render(void 0, main$lambda(router_0)), 'target');
  }
  function timeContent$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('My App');
    return Unit;
  }
  function timeContent$lambda$lambda$lambda($receiver) {
    (new TodoItem(storeOf(false))).render_1s6vjs$($receiver);
    return Unit;
  }
  function timeContent$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('2');
    return Unit;
  }
  function timeContent$lambda$lambda$lambda_0($receiver) {
    $receiver.p_4bejqm$(void 0, void 0, timeContent$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function timeContent$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('3');
    return Unit;
  }
  function timeContent$lambda$lambda$lambda_1($receiver) {
    $receiver.p_4bejqm$(void 0, void 0, timeContent$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function timeContent$lambda$lambda($receiver) {
    box($receiver, void 0, void 0, void 0, void 0, timeContent$lambda$lambda$lambda);
    box($receiver, void 0, void 0, void 0, void 0, timeContent$lambda$lambda$lambda_0);
    box($receiver, void 0, void 0, void 0, void 0, timeContent$lambda$lambda$lambda_1);
    return Unit;
  }
  function timeContent$lambda_0($receiver) {
    $receiver.items_9c978p$(timeContent$lambda$lambda);
    return Unit;
  }
  function timeContent($receiver) {
    $receiver.h1_hya6au$(void 0, void 0, timeContent$lambda);
    stackUp($receiver, void 0, void 0, void 0, void 0, timeContent$lambda_0);
  }
  function mainContent$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('My App');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('a');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_0($receiver) {
    showOpenFilePicker();
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_1($receiver) {
    (new TodoItem(storeOf(false))).render_1s6vjs$($receiver);
    return Unit;
  }
  function mainContent$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('2');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_2($receiver) {
    $receiver.p_4bejqm$(void 0, void 0, mainContent$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function mainContent$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('3');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_3($receiver) {
    $receiver.p_4bejqm$(void 0, void 0, mainContent$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function mainContent$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attr_puj7f4$('slot', 'before');
    $receiver.attr_puj7f4$('width', '100%');
    $receiver.src_61zpoe$('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1cEFvJ.img?h=630&w=1119&m=6&q=60&o=f&l=f');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.attr_puj7f4$('slot', 'after');
    $receiver.attr_puj7f4$('width', '100%');
    $receiver.src_61zpoe$('https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/375px-Donald_Trump_official_portrait.jpg');
    return Unit;
  }
  function mainContent$lambda$lambda$lambda_4($receiver) {
    $receiver.img_5r8d8h$(void 0, void 0, mainContent$lambda$lambda$lambda$lambda_1);
    $receiver.img_5r8d8h$(void 0, void 0, mainContent$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function mainContent$lambda$lambda($receiver) {
    clickButton($receiver.button_jk96ic$(void 0, void 0, mainContent$lambda$lambda$lambda), void 0, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_0);
    box($receiver, void 0, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_1);
    box($receiver, void 0, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_2);
    box($receiver, void 0, void 0, void 0, void 0, mainContent$lambda$lambda$lambda_3);
    $receiver.custom_rwdb8o$('img-comparison-slider', mainContent$lambda$lambda$lambda_4);
    return Unit;
  }
  function mainContent$lambda_0($receiver) {
    $receiver.items_9c978p$(mainContent$lambda$lambda);
    return Unit;
  }
  function mainContent($receiver) {
    $receiver.h1_hya6au$(void 0, void 0, mainContent$lambda);
    stackUp($receiver, void 0, void 0, void 0, void 0, mainContent$lambda_0);
  }
  function ImgCompare(job) {
    Tag.call(this, 'img-comparison-slider', void 0, void 0, job);
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
  TodoItem.$metadata$ = {kind: Kind_CLASS, simpleName: 'TodoItem', interfaces: []};
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
  Todo.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Todo', interfaces: []};
  var Todo_instance = null;
  function Todo_getInstance() {
    if (Todo_instance === null) {
      new Todo();
    }return Todo_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$londogard = package$com.londogard || (package$com.londogard = {});
  var package$timetracker = package$londogard.timetracker || (package$londogard.timetracker = {});
  package$timetracker.main = main;
  package$timetracker.timeContent_fr6vzb$ = timeContent;
  package$timetracker.mainContent_fr6vzb$ = mainContent;
  var package$components = package$timetracker.components || (package$timetracker.components = {});
  package$components.ImgCompare = ImgCompare;
  package$components.TodoItem = TodoItem;
  var package$styles = package$timetracker.styles || (package$timetracker.styles = {});
  Object.defineProperty(package$styles, 'Todo', {get: Todo_getInstance});
  ImgCompare.prototype.asText_x2ftfk$ = WithText.prototype.asText_x2ftfk$;
  ImgCompare.prototype.asText_lg9ri$ = WithText.prototype.asText_lg9ri$;
  ImgCompare.prototype.unaryPlus_pdl1vz$ = WithText.prototype.unaryPlus_pdl1vz$;
  main();
  return _;
}));

//# sourceMappingURL=NEW.js.map
