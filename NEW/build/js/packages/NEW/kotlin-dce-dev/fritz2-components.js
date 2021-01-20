(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'fritz2-styling', 'kotlinx-coroutines-core', 'fritz2-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('fritz2-styling'), require('kotlinx-coroutines-core'), require('fritz2-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fritz2-components'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fritz2-components'.");
    }if (typeof this['fritz2-styling'] === 'undefined') {
      throw new Error("Error loading module 'fritz2-components'. Its dependency 'fritz2-styling' was not found. Please, check whether 'fritz2-styling' is loaded prior to 'fritz2-components'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'fritz2-components'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'fritz2-components'.");
    }if (typeof this['fritz2-core'] === 'undefined') {
      throw new Error("Error loading module 'fritz2-components'. Its dependency 'fritz2-core' was not found. Please, check whether 'fritz2-core' is loaded prior to 'fritz2-components'.");
    }root['fritz2-components'] = factory(typeof this['fritz2-components'] === 'undefined' ? {} : this['fritz2-components'], kotlin, this['fritz2-styling'], this['kotlinx-coroutines-core'], this['fritz2-core']);
  }
}(this, function (_, Kotlin, $module$fritz2_styling, $module$kotlinx_coroutines_core, $module$fritz2_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var styled = $module$fritz2_styling.dev.fritz2.styling.params.styled_xca2rv$;
  var staticStyle = $module$fritz2_styling.dev.fritz2.styling.staticStyle_puj7f4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Theme = $module$fritz2_styling.dev.fritz2.styling.theme.Theme;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var StyleClass = $module$fritz2_styling.dev.fritz2.styling.StyleClass;
  var flowOf = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.flowOf_mh5how$;
  var styled_0 = $module$fritz2_styling.dev.fritz2.styling.params.styled_eqce3n$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toString = Kotlin.toString;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var uniqueId = $module$fritz2_core.dev.fritz2.identification.uniqueId;
  var distinctUntilChanged = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.distinctUntilChanged_x2ftfk$;
  var states = $module$fritz2_core.dev.fritz2.dom.states_8uplq$;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var Annotation = Kotlin.kotlin.Annotation;
  var Pair = Kotlin.kotlin.Pair;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var whenever = $module$fritz2_styling.dev.fritz2.styling.whenever_lyupls$;
  var className = $module$fritz2_styling.dev.fritz2.styling.className_gh3917$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Flow_0 = $module$fritz2_styling.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.Flow;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var Tag = $module$fritz2_core.dev.fritz2.dom.Tag;
  var values = $module$fritz2_core.dev.fritz2.dom.values_8uplq$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var RootStore = $module$fritz2_core.dev.fritz2.binding.RootStore;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var storeOf = $module$fritz2_core.dev.fritz2.binding.storeOf_le71cu$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var renderElement = $module$fritz2_core.dev.fritz2.dom.html.renderElement_8c4pnr$;
  var appendToBody = $module$fritz2_core.dev.fritz2.dom.appendToBody_1j7d8t$;
  var Flow_1 = $module$fritz2_core.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.Flow;
  var equals = Kotlin.equals;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var emptyFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.emptyFlow_287e2$;
  var values_0 = $module$fritz2_core.dev.fritz2.dom.values_37fu44$;
  Svg.prototype = Object.create(Tag.prototype);
  Svg.prototype.constructor = Svg;
  OverlayMethod.prototype = Object.create(Enum.prototype);
  OverlayMethod.prototype.constructor = OverlayMethod;
  ModalComponent$ModalsStack.prototype = Object.create(RootStore.prototype);
  ModalComponent$ModalsStack.prototype.constructor = ModalComponent$ModalsStack;
  popover$ObjectLiteral.prototype = Object.create(RootStore.prototype);
  popover$ObjectLiteral.prototype.constructor = popover$ObjectLiteral;
  StackUpComponent.prototype = Object.create(StackComponent.prototype);
  StackUpComponent.prototype.constructor = StackUpComponent;
  LineUpComponent.prototype = Object.create(StackComponent.prototype);
  LineUpComponent.prototype.constructor = LineUpComponent;
  function box$lambda($receiver) {
    return Unit;
  }
  function box$lambda_0($receiver) {
    return Unit;
  }
  function box($receiver, styling, baseClass, id, prefix, init) {
    if (styling === void 0)
      styling = box$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'box';
    return styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), styling, baseClass, id, prefix, box$lambda_0)($receiver, init);
  }
  function flexBox$lambda($receiver) {
    return Unit;
  }
  function flexBox$lambda_0($receiver) {
    $receiver.css_61zpoe$('display: flex;');
    return Unit;
  }
  function flexBox($receiver, styling, baseClass, id, prefix, init) {
    if (styling === void 0)
      styling = flexBox$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'flex-box';
    return styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), styling, baseClass, id, prefix, flexBox$lambda_0)($receiver, init);
  }
  function gridBox$lambda($receiver) {
    return Unit;
  }
  function gridBox$lambda_0($receiver) {
    $receiver.css_61zpoe$('display: grid;');
    return Unit;
  }
  function gridBox($receiver, styling, baseClass, id, prefix, init) {
    if (styling === void 0)
      styling = gridBox$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'grid-box';
    return styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), styling, baseClass, id, prefix, gridBox$lambda_0)($receiver, init);
  }
  function plus$lambda(this$plus, closure$other) {
    return function ($receiver) {
      this$plus($receiver);
      closure$other($receiver);
      return Unit;
    };
  }
  function PushButtonComponent() {
    PushButtonComponent$Companion_getInstance();
    this.iconSize_iolxhr$_0 = '1.15em';
    this.marginToText_k0emvf$_0 = '0.35rem';
    this.marginToBorder_ry2g6i$_0 = '-0.2rem';
    this.centerIconStyle = PushButtonComponent$centerIconStyle$lambda;
    this.centerSpinnerStyle = PushButtonComponent$centerSpinnerStyle$lambda(this);
    this.leftSpinnerStyle = PushButtonComponent$leftSpinnerStyle$lambda(this);
    this.rightSpinnerStyle = PushButtonComponent$rightSpinnerStyle$lambda(this);
    this.leftIconStyle = PushButtonComponent$leftIconStyle$lambda(this);
    this.rightIconStyle = PushButtonComponent$rightIconStyle$lambda(this);
    this.events = null;
    this.color = this.buildColor_cs4xwo$_0(Theme.Companion.invoke().colors.primary);
    this.variant = PushButtonComponent$variant$lambda;
    this.size = PushButtonComponent$size$lambda;
    this.label = null;
    this.loadingText = null;
    this.loading = null;
    this.icon = null;
    this.isIconRight = false;
  }
  function PushButtonComponent$Companion() {
    PushButtonComponent$Companion_instance = this;
    this.staticCss = staticStyle('button', '\n                appearance: none;\n                display: inline-flex;\n                align-items : center;\n                justify-content: center;\n                transition: all 250ms;\n                user-select: none;\n                position: relative;\n                white-space: nowrap;\n                vertical-align: middle;\n                outline: none;\n                text-overflow: ellipsis;\n                \n                &:disabled {\n                    opacity: 0.4;\n                    cursor: not-allowed;\n                    boxShadow: none;\n                }\n            ');
    this.hidden_8be2vx$ = staticStyle('hidden', 'visibility: hidden;');
  }
  PushButtonComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PushButtonComponent$Companion_instance = null;
  function PushButtonComponent$Companion_getInstance() {
    if (PushButtonComponent$Companion_instance === null) {
      new PushButtonComponent$Companion();
    }return PushButtonComponent$Companion_instance;
  }
  PushButtonComponent.prototype.events_7z55sl$ = function (value) {
    this.events = value;
  };
  function PushButtonComponent$buildColor$lambda(closure$value) {
    return function ($receiver) {
      $receiver.css_61zpoe$('--main-color: ' + closure$value + ';');
      return Unit;
    };
  }
  PushButtonComponent.prototype.buildColor_cs4xwo$_0 = function (value) {
    return PushButtonComponent$buildColor$lambda(value);
  };
  PushButtonComponent.prototype.color_jl9ed9$ = function (value) {
    this.color = this.buildColor_cs4xwo$_0(value(Theme.Companion.invoke().colors));
  };
  PushButtonComponent.prototype.variant_gps3do$ = function (value) {
    this.variant = value;
  };
  PushButtonComponent.prototype.size_46jwtw$ = function (value) {
    this.size = value;
  };
  function PushButtonComponent$text$lambda$lambda(closure$value) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$value);
      return Unit;
    };
  }
  function PushButtonComponent$text$lambda(closure$value) {
    return function ($receiver, hide) {
      $receiver.span_wes3oc$(hide ? PushButtonComponent$Companion_getInstance().hidden_8be2vx$.name : null, void 0, PushButtonComponent$text$lambda$lambda(closure$value));
      return Unit;
    };
  }
  PushButtonComponent.prototype.text_61zpoe$ = function (value) {
    this.label = PushButtonComponent$text$lambda(value);
  };
  function PushButtonComponent$text$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  function PushButtonComponent$text$lambda_0(closure$value) {
    return function ($receiver, hide) {
      $receiver.span_wes3oc$(hide ? PushButtonComponent$Companion_getInstance().hidden_8be2vx$.name : null, void 0, PushButtonComponent$text$lambda$lambda_0(closure$value));
      return Unit;
    };
  }
  PushButtonComponent.prototype.text_p81yox$ = function (value) {
    this.label = PushButtonComponent$text$lambda_0(value);
  };
  function PushButtonComponent$loadingText$lambda$lambda(closure$value) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$value);
      return Unit;
    };
  }
  function PushButtonComponent$loadingText$lambda(closure$value) {
    return function ($receiver) {
      $receiver.span_wes3oc$(void 0, void 0, PushButtonComponent$loadingText$lambda$lambda(closure$value));
      return Unit;
    };
  }
  PushButtonComponent.prototype.loadingText_61zpoe$ = function (value) {
    this.loadingText = PushButtonComponent$loadingText$lambda(value);
  };
  function PushButtonComponent$loadingText$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  function PushButtonComponent$loadingText$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.span_wes3oc$(void 0, void 0, PushButtonComponent$loadingText$lambda$lambda_0(closure$value));
      return Unit;
    };
  }
  PushButtonComponent.prototype.loadingText_p81yox$ = function (value) {
    this.loadingText = PushButtonComponent$loadingText$lambda_0(value);
  };
  PushButtonComponent.prototype.loading_433wua$ = function (value) {
    this.loading = value;
  };
  function PushButtonComponent$icon$lambda($receiver) {
    return Unit;
  }
  function PushButtonComponent$icon$lambda_0($receiver) {
    return Unit;
  }
  function PushButtonComponent$icon$lambda_1(closure$styling, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function (context, iconStyle) {
      icon(context, plus$lambda(closure$styling, iconStyle), closure$baseClass, closure$id, closure$prefix, closure$build);
      return Unit;
    };
  }
  PushButtonComponent.prototype.icon_1s1pfb$ = function (styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = PushButtonComponent$icon$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = IconComponent$Companion_getInstance().prefix;
    if (build === void 0)
      build = PushButtonComponent$icon$lambda_0;
    this.icon = PushButtonComponent$icon$lambda_1(styling, baseClass, id, prefix, build);
  };
  PushButtonComponent.prototype.iconRight = function () {
    this.isIconRight = true;
  };
  function PushButtonComponent$renderIcon$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function PushButtonComponent$renderIcon$lambda$lambda(closure$spinnerStyle, this$PushButtonComponent, closure$iconStyle) {
    return function ($receiver, running) {
      var tmp$;
      if (running) {
        spinner($receiver, closure$spinnerStyle, void 0, void 0, void 0, PushButtonComponent$renderIcon$lambda$lambda$lambda);
      } else {
        (tmp$ = this$PushButtonComponent.icon) != null ? tmp$($receiver, closure$iconStyle) : null;
      }
      return Unit;
    };
  }
  PushButtonComponent.prototype.renderIcon_ior68j$ = function (renderContext, iconStyle, spinnerStyle) {
    var tmp$;
    if (this.loading == null) {
      (tmp$ = this.icon) != null ? tmp$(renderContext, iconStyle) : null;
    } else {
      var tmp$_0;
      (tmp$_0 = this.loading) != null ? (renderContext.render_3mkwiv$(tmp$_0, PushButtonComponent$renderIcon$lambda$lambda(spinnerStyle, this, iconStyle)), Unit) : null;
    }
  };
  function PushButtonComponent$renderLabel$lambda$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      if (this$PushButtonComponent.loadingText == null) {
        $receiver.css_61zpoe$('position: absolute;');
        $receiver.invoke_qkhqzy$(this$PushButtonComponent.centerSpinnerStyle);
      } else
        $receiver.invoke_qkhqzy$(this$PushButtonComponent.leftSpinnerStyle);
      return Unit;
    };
  }
  function PushButtonComponent$renderLabel$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function PushButtonComponent$renderLabel$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver, running) {
      var tmp$, tmp$_0;
      if (running) {
        spinner($receiver, PushButtonComponent$renderLabel$lambda$lambda$lambda(this$PushButtonComponent), void 0, void 0, void 0, PushButtonComponent$renderLabel$lambda$lambda$lambda_0);
        if (this$PushButtonComponent.loadingText != null) {
          ensureNotNull(this$PushButtonComponent.loadingText)($receiver);
        } else {
          (tmp$ = this$PushButtonComponent.label) != null ? tmp$($receiver, true) : null;
        }
      } else {
        (tmp$_0 = this$PushButtonComponent.label) != null ? tmp$_0($receiver, false) : null;
      }
      return Unit;
    };
  }
  PushButtonComponent.prototype.renderLabel_db90fx$ = function (renderContext) {
    var tmp$;
    if (this.loading == null || this.icon != null) {
      (tmp$ = this.label) != null ? tmp$(renderContext, false) : null;
    } else {
      var tmp$_0;
      (tmp$_0 = this.loading) != null ? (renderContext.render_3mkwiv$(tmp$_0, PushButtonComponent$renderLabel$lambda$lambda(this)), Unit) : null;
    }
  };
  function PushButtonComponent$centerIconStyle$lambda$lambda($receiver) {
    return '1.5em';
  }
  function PushButtonComponent$centerIconStyle$lambda$lambda_0($receiver) {
    return '1.5em';
  }
  function PushButtonComponent$centerIconStyle$lambda($receiver) {
    $receiver.width_wpghq5$(PushButtonComponent$centerIconStyle$lambda$lambda);
    $receiver.height_wpghq5$(PushButtonComponent$centerIconStyle$lambda$lambda_0);
    return Unit;
  }
  function PushButtonComponent$centerSpinnerStyle$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$centerSpinnerStyle$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$centerSpinnerStyle$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.width_wpghq5$(PushButtonComponent$centerSpinnerStyle$lambda$lambda(this$PushButtonComponent));
      $receiver.height_wpghq5$(PushButtonComponent$centerSpinnerStyle$lambda$lambda_0(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$leftSpinnerStyle$lambda$lambda($receiver) {
    return '1.0em';
  }
  function PushButtonComponent$leftSpinnerStyle$lambda$lambda_0($receiver) {
    return '1.0em';
  }
  function PushButtonComponent$leftSpinnerStyle$lambda$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToBorder_ry2g6i$_0;
    };
  }
  function PushButtonComponent$leftSpinnerStyle$lambda$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToText_k0emvf$_0;
    };
  }
  function PushButtonComponent$leftSpinnerStyle$lambda$lambda_1(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.left_bcpvvc$(PushButtonComponent$leftSpinnerStyle$lambda$lambda$lambda(this$PushButtonComponent));
      $receiver.right_bcpvvc$(PushButtonComponent$leftSpinnerStyle$lambda$lambda$lambda_0(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$leftSpinnerStyle$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.width_wpghq5$(PushButtonComponent$leftSpinnerStyle$lambda$lambda);
      $receiver.height_wpghq5$(PushButtonComponent$leftSpinnerStyle$lambda$lambda_0);
      $receiver.margins_ptb4s1$(PushButtonComponent$leftSpinnerStyle$lambda$lambda_1(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$rightSpinnerStyle$lambda$lambda($receiver) {
    return '1.0em';
  }
  function PushButtonComponent$rightSpinnerStyle$lambda$lambda_0($receiver) {
    return '1.0em';
  }
  function PushButtonComponent$rightSpinnerStyle$lambda$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToText_k0emvf$_0;
    };
  }
  function PushButtonComponent$rightSpinnerStyle$lambda$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToBorder_ry2g6i$_0;
    };
  }
  function PushButtonComponent$rightSpinnerStyle$lambda$lambda_1(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.left_bcpvvc$(PushButtonComponent$rightSpinnerStyle$lambda$lambda$lambda(this$PushButtonComponent));
      $receiver.right_bcpvvc$(PushButtonComponent$rightSpinnerStyle$lambda$lambda$lambda_0(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$rightSpinnerStyle$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.width_wpghq5$(PushButtonComponent$rightSpinnerStyle$lambda$lambda);
      $receiver.height_wpghq5$(PushButtonComponent$rightSpinnerStyle$lambda$lambda_0);
      $receiver.margins_ptb4s1$(PushButtonComponent$rightSpinnerStyle$lambda$lambda_1(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToBorder_ry2g6i$_0;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToText_k0emvf$_0;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda$lambda_1(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.left_bcpvvc$(PushButtonComponent$leftIconStyle$lambda$lambda$lambda(this$PushButtonComponent));
      $receiver.right_bcpvvc$(PushButtonComponent$leftIconStyle$lambda$lambda$lambda_0(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$leftIconStyle$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.width_wpghq5$(PushButtonComponent$leftIconStyle$lambda$lambda(this$PushButtonComponent));
      $receiver.height_wpghq5$(PushButtonComponent$leftIconStyle$lambda$lambda_0(this$PushButtonComponent));
      $receiver.margins_ptb4s1$(PushButtonComponent$leftIconStyle$lambda$lambda_1(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.iconSize_iolxhr$_0;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda$lambda$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToBorder_ry2g6i$_0;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda$lambda$lambda_0(this$PushButtonComponent) {
    return function ($receiver) {
      return this$PushButtonComponent.marginToText_k0emvf$_0;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda$lambda_1(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.right_bcpvvc$(PushButtonComponent$rightIconStyle$lambda$lambda$lambda(this$PushButtonComponent));
      $receiver.left_bcpvvc$(PushButtonComponent$rightIconStyle$lambda$lambda$lambda_0(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$rightIconStyle$lambda(this$PushButtonComponent) {
    return function ($receiver) {
      $receiver.width_wpghq5$(PushButtonComponent$rightIconStyle$lambda$lambda(this$PushButtonComponent));
      $receiver.height_wpghq5$(PushButtonComponent$rightIconStyle$lambda$lambda_0(this$PushButtonComponent));
      $receiver.margins_ptb4s1$(PushButtonComponent$rightIconStyle$lambda$lambda_1(this$PushButtonComponent));
      return Unit;
    };
  }
  function PushButtonComponent$variant$lambda($receiver) {
    return Theme.Companion.invoke().button.variants.solid;
  }
  function PushButtonComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().button.sizes.normal;
  }
  PushButtonComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PushButtonComponent',
    interfaces: []
  };
  function pushButton$lambda($receiver) {
    return Unit;
  }
  function pushButton$lambda_0($receiver) {
    return Unit;
  }
  function pushButton$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.color);
      $receiver.invoke_qkhqzy$(closure$component.variant(Theme.Companion.invoke().button.variants));
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().button.sizes));
      return Unit;
    };
  }
  function pushButton$lambda_2(closure$component) {
    return function ($receiver) {
      var tmp$;
      if (closure$component.label == null) {
        closure$component.renderIcon_ior68j$($receiver, closure$component.centerIconStyle, closure$component.centerSpinnerStyle);
      } else {
        if (closure$component.icon != null && !closure$component.isIconRight) {
          closure$component.renderIcon_ior68j$($receiver, closure$component.leftIconStyle, closure$component.leftSpinnerStyle);
        }closure$component.renderLabel_db90fx$($receiver);
        if (closure$component.icon != null && closure$component.isIconRight) {
          closure$component.renderIcon_ior68j$($receiver, closure$component.rightIconStyle, closure$component.rightSpinnerStyle);
        }}
      (tmp$ = closure$component.events) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function pushButton($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = pushButton$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'push-button';
    if (build === void 0)
      build = pushButton$lambda_0;
    var $receiver_0 = new PushButtonComponent();
    build($receiver_0);
    var component = $receiver_0;
    styled(getCallableRef('button', function ($receiver, p1, p2, p3) {
      return $receiver.button_jk96ic$(p1, p2, p3);
    }.bind(null, $receiver)), styling, StyleClass.Companion.plus_ilq45s$(baseClass, PushButtonComponent$Companion_getInstance().staticCss), id, prefix, pushButton$lambda_1(component))($receiver, pushButton$lambda_2(component));
  }
  function clickButton$lambda($receiver) {
    return Unit;
  }
  function clickButton$lambda_0($receiver) {
    return Unit;
  }
  function clickButton$lambda$lambda(closure$clickEvents) {
    return function ($receiver) {
      closure$clickEvents.v = $receiver.clicks;
      return Unit;
    };
  }
  function clickButton$lambda_1(closure$build, closure$clickEvents) {
    return function ($receiver) {
      closure$build($receiver);
      $receiver.events_7z55sl$(clickButton$lambda$lambda(closure$clickEvents));
      return Unit;
    };
  }
  function clickButton($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = clickButton$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'push-button';
    if (build === void 0)
      build = clickButton$lambda_0;
    var clickEvents = {v: null};
    pushButton($receiver, styling, baseClass, id, prefix, clickButton$lambda_1(build, clickEvents));
    return ensureNotNull(clickEvents.v);
  }
  function CheckboxComponent() {
    CheckboxComponent$Companion_getInstance();
    this.size = CheckboxComponent$size$lambda;
    this.icon = Theme.Companion.invoke().icons.check;
    this.label = null;
    this.labelStyle = CheckboxComponent$labelStyle$lambda;
    this.checkedStyle = CheckboxComponent$checkedStyle$lambda;
    this.events = null;
    this.checked = flowOf(false);
    this.disabled = flowOf(false);
  }
  function CheckboxComponent$Companion() {
    CheckboxComponent$Companion_instance = this;
    this.checkboxInputStaticCss = staticStyle('checkbox', '\n            position: absolute;\n            height: 1px;                \n            width: 1px;                \n            overflow: hidden;\n            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n            clip: rect(1px, 1px, 1px, 1px);\n            outline: none;           \n            &:focus{\n                outline: none;\n            }           \n            ');
  }
  CheckboxComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CheckboxComponent$Companion_instance = null;
  function CheckboxComponent$Companion_getInstance() {
    if (CheckboxComponent$Companion_instance === null) {
      new CheckboxComponent$Companion();
    }return CheckboxComponent$Companion_instance;
  }
  CheckboxComponent.prototype.size_7dzldp$ = function (value) {
    this.size = value;
  };
  CheckboxComponent.prototype.icon_e5jlz5$ = function (value) {
    this.icon = value();
  };
  function CheckboxComponent$label$lambda(closure$value) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$value);
      return Unit;
    };
  }
  CheckboxComponent.prototype.label_61zpoe$ = function (value) {
    this.label = CheckboxComponent$label$lambda(value);
  };
  function CheckboxComponent$label$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  CheckboxComponent.prototype.label_p81yox$ = function (value) {
    this.label = CheckboxComponent$label$lambda_0(value);
  };
  CheckboxComponent.prototype.label_wqyjv5$ = function (value) {
    this.label = value;
  };
  CheckboxComponent.prototype.labelStyle_iitghj$ = function (value) {
    this.labelStyle = value();
  };
  CheckboxComponent.prototype.checkedStyle_iitghj$ = function (value) {
    this.checkedStyle = value();
  };
  CheckboxComponent.prototype.events_gknsc3$ = function (value) {
    this.events = value;
  };
  CheckboxComponent.prototype.checked_czwcei$ = function (value) {
    this.checked = value();
  };
  CheckboxComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  function CheckboxComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().checkbox.sizes.normal;
  }
  function CheckboxComponent$labelStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.label);
    return Unit;
  }
  function CheckboxComponent$checkedStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.checked);
    return Unit;
  }
  CheckboxComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckboxComponent',
    interfaces: []
  };
  function checkbox$lambda($receiver) {
    return Unit;
  }
  function checkbox$lambda_0($receiver) {
    return Unit;
  }
  function checkbox$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().checkbox.sizes));
      return Unit;
    };
  }
  function checkbox$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.checkedStyle);
      return Unit;
    };
  }
  function checkbox$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.input);
      $receiver.children_qlrppv$('&[checked] + div', checkbox$lambda$lambda$lambda(closure$component));
      return Unit;
    };
  }
  function checkbox$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      var tmp$;
      $receiver.type_61zpoe$('checkbox');
      $receiver.checked_f1igrw$(closure$component.checked);
      $receiver.disabled_f1igrw$(closure$component.disabled);
      (tmp$ = closure$component.events) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function checkbox$lambda$lambda_1(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.default);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function checkbox$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.icon);
    return Unit;
  }
  function checkbox$lambda$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      return closure$component.icon;
    };
  }
  function checkbox$lambda$lambda$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.fromTheme_q0wvou$(checkbox$lambda$lambda$lambda$lambda(closure$component));
      return Unit;
    };
  }
  function checkbox$lambda$lambda_2(closure$component) {
    return function ($receiver) {
      icon($receiver, checkbox$lambda$lambda$lambda_0, void 0, void 0, void 0, checkbox$lambda$lambda$lambda_1(closure$component));
      return Unit;
    };
  }
  function checkbox$lambda$lambda$lambda_2(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.labelStyle);
      return Unit;
    };
  }
  function checkbox$lambda$lambda$lambda_3(closure$it) {
    return function ($receiver) {
      closure$it($receiver);
      return Unit;
    };
  }
  function checkbox$lambda_2(closure$inputId, closure$prefix, closure$component, closure$styling) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (closure$inputId != null) {
        $receiver.for_61zpoe$(closure$inputId);
      }tmp$_1 = getCallableRef('input', function ($receiver, p1, p2, p3) {
        return $receiver.input_1ect6g$(p1, p2, p3);
      }.bind(null, $receiver));
      tmp$ = CheckboxComponent$Companion_getInstance().checkboxInputStaticCss;
      tmp$_0 = checkbox$lambda$lambda(closure$component);
      styled_0(tmp$_1, tmp$, closure$inputId, closure$prefix, tmp$_0)($receiver, checkbox$lambda$lambda_0(closure$component));
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, void 0, checkbox$lambda$lambda_1(closure$styling))($receiver, checkbox$lambda$lambda_2(closure$component));
      if ((tmp$_2 = closure$component.label) != null) {
        var closure$component_0 = closure$component;
        styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
          return $receiver.div_hhcm6n$(p1, p2, p3);
        }.bind(null, $receiver)), void 0, void 0, void 0, checkbox$lambda$lambda$lambda_2(closure$component_0))($receiver, checkbox$lambda$lambda$lambda_3(tmp$_2));
      }return Unit;
    };
  }
  function checkbox($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = checkbox$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'checkboxComponent';
    if (build === void 0)
      build = checkbox$lambda_0;
    var $receiver_0 = new CheckboxComponent();
    build($receiver_0);
    var component = $receiver_0;
    var inputId = id != null ? id + '-input' : null;
    return styled_0(getCallableRef('label', function ($receiver, p1, p2, p3) {
      return $receiver.label_6gkvle$(p1, p2, p3);
    }.bind(null, $receiver)), baseClass, id, prefix, checkbox$lambda_1(component))($receiver, checkbox$lambda_2(inputId, prefix, component, styling));
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
  function CheckboxGroupComponent() {
    CheckboxGroupComponent$Companion_getInstance();
    this.items = flowOf(emptyList());
    this.icon = Theme.Companion.invoke().icons.check;
    this.label = CheckboxGroupComponent$label$lambda;
    this.disabled = flowOf(false);
    this.direction = CheckboxGroupComponent$Companion$CheckboxGroupLayouts_getInstance().column;
    this.size = CheckboxGroupComponent$size$lambda;
    this.itemStyle = CheckboxGroupComponent$itemStyle$lambda;
    this.labelStyle = CheckboxGroupComponent$labelStyle$lambda;
    this.checkedStyle = CheckboxGroupComponent$checkedStyle$lambda;
  }
  function CheckboxGroupComponent$Companion() {
    CheckboxGroupComponent$Companion_instance = this;
  }
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts() {
    CheckboxGroupComponent$Companion$CheckboxGroupLayouts_instance = this;
    this.column = CheckboxGroupComponent$Companion$CheckboxGroupLayouts$column$lambda;
    this.row = CheckboxGroupComponent$Companion$CheckboxGroupLayouts$row$lambda;
  }
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts$column$lambda$lambda($receiver) {
    return $receiver.inlineGrid;
  }
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts$column$lambda($receiver) {
    $receiver.display_1gh9wc$(CheckboxGroupComponent$Companion$CheckboxGroupLayouts$column$lambda$lambda);
    return Unit;
  }
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts$row$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts$row$lambda($receiver) {
    $receiver.display_1gh9wc$(CheckboxGroupComponent$Companion$CheckboxGroupLayouts$row$lambda$lambda);
    return Unit;
  }
  CheckboxGroupComponent$Companion$CheckboxGroupLayouts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CheckboxGroupLayouts',
    interfaces: []
  };
  var CheckboxGroupComponent$Companion$CheckboxGroupLayouts_instance = null;
  function CheckboxGroupComponent$Companion$CheckboxGroupLayouts_getInstance() {
    if (CheckboxGroupComponent$Companion$CheckboxGroupLayouts_instance === null) {
      new CheckboxGroupComponent$Companion$CheckboxGroupLayouts();
    }return CheckboxGroupComponent$Companion$CheckboxGroupLayouts_instance;
  }
  CheckboxGroupComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CheckboxGroupComponent$Companion_instance = null;
  function CheckboxGroupComponent$Companion_getInstance() {
    if (CheckboxGroupComponent$Companion_instance === null) {
      new CheckboxGroupComponent$Companion();
    }return CheckboxGroupComponent$Companion_instance;
  }
  CheckboxGroupComponent.prototype.items_4ezy5m$ = function (value) {
    this.items = flowOf(value);
  };
  CheckboxGroupComponent.prototype.items_cwwwb5$ = function (value) {
    this.items = value();
  };
  CheckboxGroupComponent.prototype.icon_e5jlz5$ = function (value) {
    this.icon = value();
  };
  CheckboxGroupComponent.prototype.label_h4pl6f$ = function (value) {
    this.label = value;
  };
  CheckboxGroupComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  CheckboxGroupComponent.prototype.disabled_6taknv$ = function (value) {
    this.disabled = flowOf(value);
  };
  CheckboxGroupComponent.prototype.direction_lcpgbb$ = function (value) {
    this.direction = value(CheckboxGroupComponent$Companion$CheckboxGroupLayouts_getInstance());
  };
  CheckboxGroupComponent.prototype.size_7dzldp$ = function (value) {
    this.size = value;
  };
  CheckboxGroupComponent.prototype.itemStyle_iitghj$ = function (value) {
    this.itemStyle = value();
  };
  CheckboxGroupComponent.prototype.labelStyle_iitghj$ = function (value) {
    this.labelStyle = value();
  };
  CheckboxGroupComponent.prototype.checkedStyle_iitghj$ = function (value) {
    this.checkedStyle = value();
  };
  function CheckboxGroupComponent$label$lambda(it) {
    return toString(it);
  }
  function CheckboxGroupComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().checkbox.sizes.normal;
  }
  function CheckboxGroupComponent$itemStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.default);
    return Unit;
  }
  function CheckboxGroupComponent$labelStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.label);
    return Unit;
  }
  function CheckboxGroupComponent$checkedStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().checkbox.checked);
    return Unit;
  }
  CheckboxGroupComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckboxGroupComponent',
    interfaces: []
  };
  function checkboxGroup$lambda($receiver) {
    return Unit;
  }
  function checkboxGroup$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$checkboxGroup$lambda(list_0, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$list = list_0;
    this.local$item = item_0;
  }
  Coroutine$checkboxGroup$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkboxGroup$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkboxGroup$lambda.prototype.constructor = Coroutine$checkboxGroup$lambda;
  Coroutine$checkboxGroup$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$list.contains_11rb$(this.local$item)) {
              return minus(this.local$list, this.local$item);
            } else {
              return plus(this.local$list, this.local$item);
            }

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
  function checkboxGroup$lambda_1(list_0, item_0, continuation_0, suspended) {
    var instance = new Coroutine$checkboxGroup$lambda(list_0, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function checkboxGroup$lambda_2(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.direction);
      return Unit;
    };
  }
  function Coroutine$checkboxGroup$lambda$lambda$lambda(closure$item_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$it = it_0;
  }
  Coroutine$checkboxGroup$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkboxGroup$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkboxGroup$lambda$lambda$lambda.prototype.constructor = Coroutine$checkboxGroup$lambda$lambda$lambda;
  Coroutine$checkboxGroup$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it.contains_11rb$(this.local$closure$item);
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
  function checkboxGroup$lambda$lambda$lambda(closure$item_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$checkboxGroup$lambda$lambda$lambda(closure$item_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      return closure$component.size(Theme.Companion.invoke().checkbox.sizes);
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_0(closure$component) {
    return function () {
      return closure$component.icon;
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_1(closure$component) {
    return function () {
      return closure$component.labelStyle;
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_2(closure$component) {
    return function () {
      return closure$component.checkedStyle;
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_3(closure$checkedFlow) {
    return function () {
      return closure$checkedFlow;
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_4(closure$component) {
    return function () {
      return closure$component.disabled;
    };
  }
  function Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
  }
  Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda;
  Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$item;
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
  function checkboxGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$checkboxGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function checkboxGroup$lambda$lambda$lambda$lambda_5(closure$item, closure$toggle, this$) {
    return function ($receiver) {
      var tmp$ = this$;
      var $receiver_0 = states($receiver.changes);
      tmp$.handledBy_ytah3h$(new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(checkboxGroup$lambda$lambda$lambda$lambda$lambda(closure$item)), $receiver_0)), closure$toggle);
      return Unit;
    };
  }
  function checkboxGroup$lambda$lambda$lambda_0(closure$component, closure$item, closure$checkedFlow, closure$toggle, this$) {
    return function ($receiver) {
      $receiver.size_7dzldp$(checkboxGroup$lambda$lambda$lambda$lambda(closure$component));
      $receiver.icon_e5jlz5$(checkboxGroup$lambda$lambda$lambda$lambda_0(closure$component));
      $receiver.labelStyle_iitghj$(checkboxGroup$lambda$lambda$lambda$lambda_1(closure$component));
      $receiver.checkedStyle_iitghj$(checkboxGroup$lambda$lambda$lambda$lambda_2(closure$component));
      $receiver.label_61zpoe$(closure$component.label(closure$item));
      $receiver.checked_czwcei$(checkboxGroup$lambda$lambda$lambda$lambda_3(closure$checkedFlow));
      $receiver.disabled_czwcei$(checkboxGroup$lambda$lambda$lambda$lambda_4(closure$component));
      $receiver.events_gknsc3$(checkboxGroup$lambda$lambda$lambda$lambda_5(closure$item, closure$toggle, this$));
      return Unit;
    };
  }
  function checkboxGroup$lambda$lambda(closure$store, closure$component, closure$grpId, closure$toggle) {
    return function ($receiver, item) {
      var $receiver_0 = closure$store.data;
      var checkedFlow = distinctUntilChanged(new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(checkboxGroup$lambda$lambda$lambda(item)), $receiver_0)));
      return checkbox($receiver, closure$component.itemStyle, void 0, closure$grpId + '-grp-item-' + uniqueId(), void 0, checkboxGroup$lambda$lambda$lambda_0(closure$component, item, checkedFlow, closure$toggle, $receiver));
    };
  }
  function checkboxGroup$lambda_3(closure$component, closure$store, closure$grpId, closure$toggle) {
    return function ($receiver) {
      $receiver.renderEach_am7osu$(closure$component.items, checkboxGroup$lambda$lambda(closure$store, closure$component, closure$grpId, closure$toggle));
      return Unit;
    };
  }
  function checkboxGroup($receiver, styling, store, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = checkboxGroup$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'checkboxGroupComponent';
    if (build === void 0)
      build = checkboxGroup$lambda_0;
    var $receiver_0 = new CheckboxGroupComponent();
    build($receiver_0);
    var component = $receiver_0;
    var toggle = store.handle_ajdi87$(void 0, checkboxGroup$lambda_1);
    var grpId = id != null ? id : uniqueId();
    styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), styling, baseClass, id, prefix, checkboxGroup$lambda_2(component))($receiver, checkboxGroup$lambda_3(component, store, grpId, toggle));
  }
  function ComponentMarker() {
  }
  ComponentMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComponentMarker',
    interfaces: [Annotation]
  };
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
  function Coroutine$map$lambda_0(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_0.prototype.constructor = Coroutine$map$lambda_0;
  Coroutine$map$lambda_0.prototype.doResume = function () {
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
  function map$lambda_0(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_0(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function unsafeFlow$ObjectLiteral_1(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_1($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_1.prototype.constructor = Coroutine$collect_42ocv1$_1;
  Coroutine$collect_42ocv1$_1.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_1.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_1(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow_0]};
  function Coroutine$unsafeTransform$lambda$lambda_1(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_1.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_1;
  Coroutine$unsafeTransform$lambda$lambda_1.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_1(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_1(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_1 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$fritz2_styling.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.FlowCollector;
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_1(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_1(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_1.prototype.constructor = Coroutine$map$lambda_1;
  Coroutine$map$lambda_1.prototype.doResume = function () {
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
  function map$lambda_1(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_1(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$whenever$lambda(closure$mapper_0, this$whenever_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$mapper = closure$mapper_0;
    this.local$this$whenever = this$whenever_0;
    this.local$value = value_0;
  }
  Coroutine$whenever$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$whenever$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$whenever$lambda.prototype.constructor = Coroutine$whenever$lambda;
  Coroutine$whenever$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$mapper(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0 ? this.local$this$whenever : StyleClass.Companion.None;
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
  function whenever$lambda(closure$mapper_0, this$whenever_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$whenever$lambda(closure$mapper_0, this$whenever_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FormControlComponent() {
    FormControlComponent$Companion_getInstance();
    this.renderStrategies = LinkedHashMap_init();
    this.control = new FormControlComponent$Control();
    this.label = '';
    this.disabled = flowOf(false);
    this.required = false;
    this.helperText = null;
    this.errorMessage = flowOf('');
    var $receiver = this.renderStrategies;
    var key = FormControlComponent$Companion$ControlNames_getInstance().inputField;
    var value = new SingleControlRenderer(this);
    $receiver.put_xwzc9p$(key, value);
    var $receiver_0 = this.renderStrategies;
    var key_0 = FormControlComponent$Companion$ControlNames_getInstance().checkbox;
    var value_0 = new SingleControlRenderer(this);
    $receiver_0.put_xwzc9p$(key_0, value_0);
    var $receiver_1 = this.renderStrategies;
    var key_1 = FormControlComponent$Companion$ControlNames_getInstance().checkboxGroup;
    var value_1 = new ControlGroupRenderer(this);
    $receiver_1.put_xwzc9p$(key_1, value_1);
    var $receiver_2 = this.renderStrategies;
    var key_2 = FormControlComponent$Companion$ControlNames_getInstance().radioGroup;
    var value_2 = new ControlGroupRenderer(this);
    $receiver_2.put_xwzc9p$(key_2, value_2);
    this.requiredMarker = FormControlComponent$requiredMarker$lambda(this);
  }
  function FormControlComponent$Companion() {
    FormControlComponent$Companion_instance = this;
    this.staticCss = staticStyle('formControl', '\n                display: inline-flex;\n                position: relative;\n                vertical-align: middle;\n                height: 2.5rem;\n                appearance: none;\n                align-items : center;\n                justify-content: center;\n                transition: all 250ms;\n                white-space: nowrap;\n                outline: none;\n                width: 100%;\n            ');
    this.invalidClassName = 'invalid';
    this.invalidCss = FormControlComponent$Companion$invalidCss$lambda;
  }
  function FormControlComponent$Companion$ControlNames() {
    FormControlComponent$Companion$ControlNames_instance = this;
    this.inputField = 'inputField';
    this.radioGroup = 'radioGroup';
    this.checkbox = 'checkbox';
    this.checkboxGroup = 'checkboxGroup';
  }
  FormControlComponent$Companion$ControlNames.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ControlNames',
    interfaces: []
  };
  var FormControlComponent$Companion$ControlNames_instance = null;
  function FormControlComponent$Companion$ControlNames_getInstance() {
    if (FormControlComponent$Companion$ControlNames_instance === null) {
      new FormControlComponent$Companion$ControlNames();
    }return FormControlComponent$Companion$ControlNames_instance;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda($receiver) {
    return $receiver.thin;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_1($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda_0($receiver) {
    $receiver.width_qwzhsr$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda);
    $receiver.style_hw5xj$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_1);
    return Unit;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_2($receiver) {
    $receiver.color_jl9ed9$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda_1($receiver) {
    $receiver.border_4a22k0$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_2);
    return Unit;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_3($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$Companion$invalidCss$lambda$lambda_2($receiver) {
    $receiver.boxShadow_ihm9h8$(FormControlComponent$Companion$invalidCss$lambda$lambda$lambda_3);
    return Unit;
  }
  function FormControlComponent$Companion$invalidCss$lambda($receiver) {
    $receiver.boxShadow_ihm9h8$(FormControlComponent$Companion$invalidCss$lambda$lambda);
    $receiver.border_4a22k0$(FormControlComponent$Companion$invalidCss$lambda$lambda_0);
    $receiver.hover_xighi7$(FormControlComponent$Companion$invalidCss$lambda$lambda_1);
    $receiver.focus_xighi7$(FormControlComponent$Companion$invalidCss$lambda$lambda_2);
    return Unit;
  }
  FormControlComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FormControlComponent$Companion_instance = null;
  function FormControlComponent$Companion_getInstance() {
    if (FormControlComponent$Companion_instance === null) {
      new FormControlComponent$Companion();
    }return FormControlComponent$Companion_instance;
  }
  function FormControlComponent$Control() {
    this.overflows_0 = ArrayList_init();
    this.assignee = null;
  }
  FormControlComponent$Control.prototype.set_p7onrr$ = function (controlName, component) {
    if (this.assignee == null) {
      this.assignee = new Pair(controlName, component);
    } else {
      this.overflows_0.add_11rb$(controlName);
    }
  };
  FormControlComponent$Control.prototype.assert = function () {
    var tmp$, tmp$_0;
    if (!this.overflows_0.isEmpty()) {
      tmp$_0 = UnsupportedOperationException_init('Only one control within a formControl is allowed! Accepted control: ' + toString((tmp$ = this.assignee) != null ? tmp$.first : null) + ' The following controls are not applied and overflow this form: ' + joinToString(this.overflows_0, ', ') + ' Please remove those!');
      console.error(tmp$_0);
    }};
  FormControlComponent$Control.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Control',
    interfaces: []
  };
  FormControlComponent.prototype.label_h4ejuu$ = function (value) {
    this.label = value();
  };
  FormControlComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  FormControlComponent.prototype.required_u332lz$ = function (value) {
    this.required = value();
  };
  FormControlComponent.prototype.helperText_h4ejuu$ = function (value) {
    this.helperText = value();
  };
  FormControlComponent.prototype.errorMessage_678k1p$ = function (value) {
    this.errorMessage = value();
  };
  function Coroutine$FormControlComponent$inputField$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$FormControlComponent$inputField$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FormControlComponent$inputField$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FormControlComponent$inputField$lambda.prototype.constructor = Coroutine$FormControlComponent$inputField$lambda;
  Coroutine$FormControlComponent$inputField$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it.length > 0;
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
  function FormControlComponent$inputField$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$FormControlComponent$inputField$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function FormControlComponent$inputField$lambda$lambda$lambda(closure$msg, closure$init) {
    return function ($receiver) {
      className($receiver, whenever(new StyleClass(FormControlComponent$Companion_getInstance().invalidClassName), closure$msg));
      closure$init($receiver);
      return Unit;
    };
  }
  function FormControlComponent$inputField$lambda$lambda(closure$msg, closure$init) {
    return function ($receiver) {
      $receiver.base_rs40ko$(FormControlComponent$inputField$lambda$lambda$lambda(closure$msg, closure$init));
      return Unit;
    };
  }
  function FormControlComponent$inputField$lambda_0(closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, closure$msg, closure$init) {
    return function ($receiver) {
      inputField($receiver, closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, FormControlComponent$inputField$lambda$lambda(closure$msg, closure$init));
      return Unit;
    };
  }
  FormControlComponent.prototype.inputField_rwivvn$$default = function (styling, store, baseClass, id, prefix, init) {
    var $receiver = this.errorMessage;
    var msg = new unsafeFlow$ObjectLiteral_0(unsafeTransform$lambda_0(map$lambda_0(FormControlComponent$inputField$lambda), $receiver));
    this.control.set_p7onrr$(FormControlComponent$Companion$ControlNames_getInstance().inputField, FormControlComponent$inputField$lambda_0(styling, store, baseClass, id, prefix, msg, init));
  };
  function FormControlComponent$inputField$lambda_1($receiver) {
    return Unit;
  }
  FormControlComponent.prototype.inputField_rwivvn$ = function (styling, store, baseClass, id, prefix, init, callback$default) {
    if (styling === void 0)
      styling = FormControlComponent$inputField$lambda_1;
    if (store === void 0)
      store = null;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = FormControlComponent$Companion$ControlNames_getInstance().inputField;
    callback$default ? callback$default(styling, store, baseClass, id, prefix, init) : this.inputField_rwivvn$$default(styling, store, baseClass, id, prefix, init);
  };
  function Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda.prototype.constructor = Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda;
  Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it;
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
  function FormControlComponent$checkbox$lambda$lambda$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$FormControlComponent$checkbox$lambda$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function FormControlComponent$checkbox$lambda$lambda(closure$styling, closure$msg) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$styling);
      var $receiver_0 = new StyleClass(FormControlComponent$Companion_getInstance().invalidClassName);
      var upstream = closure$msg;
      new unsafeFlow$ObjectLiteral_1(unsafeTransform$lambda_1(map$lambda_1(whenever$lambda(FormControlComponent$checkbox$lambda$lambda$lambda, $receiver_0)), upstream));
      return Unit;
    };
  }
  function FormControlComponent$checkbox$lambda$lambda_0(closure$build) {
    return function ($receiver) {
      closure$build($receiver);
      return Unit;
    };
  }
  function FormControlComponent$checkbox$lambda(closure$styling, closure$msg, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function ($receiver) {
      checkbox($receiver, FormControlComponent$checkbox$lambda$lambda(closure$styling, closure$msg), closure$baseClass, closure$id, closure$prefix, FormControlComponent$checkbox$lambda$lambda_0(closure$build));
      return Unit;
    };
  }
  FormControlComponent.prototype.checkbox_59rgfh$$default = function (styling, baseClass, id, prefix, build) {
    var msg = flowOf(true);
    this.control.set_p7onrr$(FormControlComponent$Companion$ControlNames_getInstance().checkbox, FormControlComponent$checkbox$lambda(styling, msg, baseClass, id, prefix, build));
  };
  function FormControlComponent$checkbox$lambda_0($receiver) {
    return Unit;
  }
  FormControlComponent.prototype.checkbox_59rgfh$ = function (styling, baseClass, id, prefix, build, callback$default) {
    if (styling === void 0)
      styling = FormControlComponent$checkbox$lambda_0;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = FormControlComponent$Companion$ControlNames_getInstance().checkbox;
    callback$default ? callback$default(styling, baseClass, id, prefix, build) : this.checkbox_59rgfh$$default(styling, baseClass, id, prefix, build);
  };
  function FormControlComponent$checkboxGroup$lambda$lambda(closure$build) {
    return function ($receiver) {
      closure$build($receiver);
      return Unit;
    };
  }
  function FormControlComponent$checkboxGroup$lambda(closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function ($receiver) {
      checkboxGroup($receiver, closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, FormControlComponent$checkboxGroup$lambda$lambda(closure$build));
      return Unit;
    };
  }
  FormControlComponent.prototype.checkboxGroup_ofphz$$default = function (styling, store, baseClass, id, prefix, build) {
    this.control.set_p7onrr$(FormControlComponent$Companion$ControlNames_getInstance().checkboxGroup, FormControlComponent$checkboxGroup$lambda(styling, store, baseClass, id, prefix, build));
  };
  function FormControlComponent$checkboxGroup$lambda_0($receiver) {
    return Unit;
  }
  FormControlComponent.prototype.checkboxGroup_ofphz$ = function (styling, store, baseClass, id, prefix, build, callback$default) {
    if (styling === void 0)
      styling = FormControlComponent$checkboxGroup$lambda_0;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = FormControlComponent$Companion$ControlNames_getInstance().checkboxGroup;
    callback$default ? callback$default(styling, store, baseClass, id, prefix, build) : this.checkboxGroup_ofphz$$default(styling, store, baseClass, id, prefix, build);
  };
  function FormControlComponent$radioGroup$lambda$lambda(closure$build) {
    return function ($receiver) {
      closure$build($receiver);
      return Unit;
    };
  }
  function FormControlComponent$radioGroup$lambda(closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function ($receiver) {
      radioGroup($receiver, closure$styling, closure$store, closure$baseClass, closure$id, closure$prefix, FormControlComponent$radioGroup$lambda$lambda(closure$build));
      return Unit;
    };
  }
  FormControlComponent.prototype.radioGroup_bvrxsa$$default = function (styling, store, baseClass, id, prefix, build) {
    this.control.set_p7onrr$(FormControlComponent$Companion$ControlNames_getInstance().radioGroup, FormControlComponent$radioGroup$lambda(styling, store, baseClass, id, prefix, build));
  };
  function FormControlComponent$radioGroup$lambda_0($receiver) {
    return Unit;
  }
  FormControlComponent.prototype.radioGroup_bvrxsa$ = function (styling, store, baseClass, id, prefix, build, callback$default) {
    if (styling === void 0)
      styling = FormControlComponent$radioGroup$lambda_0;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = FormControlComponent$Companion$ControlNames_getInstance().radioGroup;
    callback$default ? callback$default(styling, store, baseClass, id, prefix, build) : this.radioGroup_bvrxsa$$default(styling, store, baseClass, id, prefix, build);
  };
  function FormControlComponent$render$lambda($receiver) {
    return Unit;
  }
  function FormControlComponent$render$lambda$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.children_qlrppv$('.invalid', FormControlComponent$Companion_getInstance().invalidCss);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  FormControlComponent.prototype.render_j9u6hu$ = function (styling, baseClass, id, prefix, renderContext) {
    if (styling === void 0)
      styling = FormControlComponent$render$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'formControl';
    var tmp$, tmp$_0;
    if ((tmp$_0 = (tmp$ = this.control.assignee) != null ? tmp$.second : null) != null) {
      var tmp$_1, tmp$_2, tmp$_3;
      tmp$_2 = this.renderStrategies;
      var key = (tmp$_1 = this.control.assignee) != null ? tmp$_1.first : null;
      var tmp$_4;
      (tmp$_3 = (Kotlin.isType(tmp$_4 = tmp$_2, Map) ? tmp$_4 : throwCCE()).get_11rb$(key)) != null && (tmp$_3.render_kfyn3r$(FormControlComponent$render$lambda$lambda(styling), baseClass, id, prefix, renderContext, tmp$_0), Unit);
    }this.control.assert();
  };
  function FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.dark;
  }
  function FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function FormControlComponent$renderHelperText$lambda$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda);
    $receiver.fontSize_bcpvvc$(FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda_0);
    $receiver.lineHeight_bcpvvc$(FormControlComponent$renderHelperText$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function FormControlComponent$renderHelperText$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function FormControlComponent$renderHelperText$lambda(this$FormControlComponent) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = this$FormControlComponent.helperText) != null) {
        styled_0(getCallableRef('p', function ($receiver, p1, p2, p3) {
          return $receiver.p_4bejqm$(p1, p2, p3);
        }.bind(null, $receiver)), void 0, void 0, void 0, FormControlComponent$renderHelperText$lambda$lambda$lambda)($receiver, FormControlComponent$renderHelperText$lambda$lambda$lambda_0(tmp$));
      }return Unit;
    };
  }
  FormControlComponent.prototype.renderHelperText_1s6vjs$ = function (renderContext) {
    renderContext.div_hhcm6n$(void 0, void 0, FormControlComponent$renderHelperText$lambda(this));
  };
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda);
    $receiver.fontSize_bcpvvc$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_0);
    $receiver.lineHeight_bcpvvc$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_2($receiver) {
    return $receiver.tiny;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.warning;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.fromTheme_q0wvou$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_3(closure$it) {
    return function ($receiver) {
      icon($receiver, void 0, void 0, void 0, void 0, FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda);
      $receiver.p_4bejqm$(void 0, void 0, FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.spacing_bcpvvc$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_2);
      $receiver.items_9c978p$(FormControlComponent$renderErrorMessage$lambda$lambda$lambda$lambda_3(closure$it));
      return Unit;
    };
  }
  function FormControlComponent$renderErrorMessage$lambda$lambda($receiver, it) {
    if (it.length > 0) {
      lineUp($receiver, FormControlComponent$renderErrorMessage$lambda$lambda$lambda, void 0, void 0, void 0, FormControlComponent$renderErrorMessage$lambda$lambda$lambda_0(it));
    }return Unit;
  }
  function FormControlComponent$renderErrorMessage$lambda(this$FormControlComponent) {
    return function ($receiver) {
      $receiver.render_3mkwiv$(this$FormControlComponent.errorMessage, FormControlComponent$renderErrorMessage$lambda$lambda);
      return Unit;
    };
  }
  FormControlComponent.prototype.renderErrorMessage_1s6vjs$ = function (renderContext) {
    renderContext.div_hhcm6n$(void 0, void 0, FormControlComponent$renderErrorMessage$lambda(this));
  };
  function FormControlComponent$requiredMarker$lambda$lambda$lambda($receiver) {
    return $receiver.danger;
  }
  function FormControlComponent$requiredMarker$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function FormControlComponent$requiredMarker$lambda$lambda$lambda_0($receiver) {
    $receiver.left_bcpvvc$(FormControlComponent$requiredMarker$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function FormControlComponent$requiredMarker$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(FormControlComponent$requiredMarker$lambda$lambda$lambda);
    $receiver.margins_ptb4s1$(FormControlComponent$requiredMarker$lambda$lambda$lambda_0);
    return Unit;
  }
  function FormControlComponent$requiredMarker$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('*');
    return Unit;
  }
  function FormControlComponent$requiredMarker$lambda(this$FormControlComponent) {
    return function ($receiver) {
      if (this$FormControlComponent.required) {
        styled_0(getCallableRef('span', function ($receiver, p1, p2, p3) {
          return $receiver.span_wes3oc$(p1, p2, p3);
        }.bind(null, $receiver)), void 0, void 0, void 0, FormControlComponent$requiredMarker$lambda$lambda)($receiver, FormControlComponent$requiredMarker$lambda$lambda_0);
      }return Unit;
    };
  }
  FormControlComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormControlComponent',
    interfaces: []
  };
  function ControlRenderer() {
  }
  function ControlRenderer$render$lambda($receiver) {
    return Unit;
  }
  ControlRenderer.prototype.render_kfyn3r$ = function (styling, baseClass, id, prefix, renderContext, control, callback$default) {
    if (styling === void 0)
      styling = ControlRenderer$render$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'formControl';
    callback$default ? callback$default(styling, baseClass, id, prefix, renderContext, control) : this.render_kfyn3r$$default(styling, baseClass, id, prefix, renderContext, control);
  };
  ControlRenderer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ControlRenderer',
    interfaces: []
  };
  function SingleControlRenderer(component) {
    this.component_0 = component;
  }
  function SingleControlRenderer$render$lambda$lambda($receiver) {
    return $receiver.start;
  }
  function SingleControlRenderer$render$lambda$lambda_0($receiver) {
    return $receiver.full;
  }
  function SingleControlRenderer$render$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.alignItems_tsd917$(SingleControlRenderer$render$lambda$lambda);
      $receiver.width_wpghq5$(SingleControlRenderer$render$lambda$lambda_0);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function SingleControlRenderer$render$lambda$lambda_1($receiver) {
    return $receiver.tiny;
  }
  function SingleControlRenderer$render$lambda$lambda$lambda(this$SingleControlRenderer) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$SingleControlRenderer.component_0.label);
      this$SingleControlRenderer.component_0.requiredMarker($receiver);
      return Unit;
    };
  }
  function SingleControlRenderer$render$lambda$lambda_2(this$SingleControlRenderer, closure$control) {
    return function ($receiver) {
      $receiver.label_6gkvle$(void 0, void 0, SingleControlRenderer$render$lambda$lambda$lambda(this$SingleControlRenderer));
      closure$control($receiver);
      this$SingleControlRenderer.component_0.renderHelperText_1s6vjs$($receiver);
      this$SingleControlRenderer.component_0.renderErrorMessage_1s6vjs$($receiver);
      return Unit;
    };
  }
  function SingleControlRenderer$render$lambda_0(this$SingleControlRenderer, closure$control) {
    return function ($receiver) {
      $receiver.spacing_bcpvvc$(SingleControlRenderer$render$lambda$lambda_1);
      $receiver.items_9c978p$(SingleControlRenderer$render$lambda$lambda_2(this$SingleControlRenderer, closure$control));
      return Unit;
    };
  }
  SingleControlRenderer.prototype.render_kfyn3r$$default = function (styling, baseClass, id, prefix, renderContext, control) {
    stackUp(renderContext, SingleControlRenderer$render$lambda(styling), baseClass, id, prefix, SingleControlRenderer$render$lambda_0(this, control));
  };
  SingleControlRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleControlRenderer',
    interfaces: [ControlRenderer]
  };
  function ControlGroupRenderer(component) {
    this.component_0 = component;
  }
  function ControlGroupRenderer$render$lambda$lambda($receiver) {
    return $receiver.full;
  }
  function ControlGroupRenderer$render$lambda($receiver) {
    $receiver.width_wpghq5$(ControlGroupRenderer$render$lambda$lambda);
    return Unit;
  }
  function ControlGroupRenderer$render$lambda$lambda_0(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function ControlGroupRenderer$render$lambda$lambda$lambda(this$ControlGroupRenderer) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$ControlGroupRenderer.component_0.label);
      return Unit;
    };
  }
  function ControlGroupRenderer$render$lambda$lambda_1(this$ControlGroupRenderer, closure$control) {
    return function ($receiver) {
      $receiver.legend_cutgnt$(void 0, void 0, ControlGroupRenderer$render$lambda$lambda$lambda(this$ControlGroupRenderer));
      closure$control($receiver);
      this$ControlGroupRenderer.component_0.renderHelperText_1s6vjs$($receiver);
      this$ControlGroupRenderer.component_0.renderErrorMessage_1s6vjs$($receiver);
      return Unit;
    };
  }
  function ControlGroupRenderer$render$lambda_0(closure$baseClass, closure$id, closure$prefix, closure$styling, this$ControlGroupRenderer, closure$control) {
    return function ($receiver) {
      styled_0(getCallableRef('fieldset', function ($receiver, p1, p2, p3) {
        return $receiver.fieldset_kcy17m$(p1, p2, p3);
      }.bind(null, $receiver)), closure$baseClass, closure$id, closure$prefix, ControlGroupRenderer$render$lambda$lambda_0(closure$styling))($receiver, ControlGroupRenderer$render$lambda$lambda_1(this$ControlGroupRenderer, closure$control));
      return Unit;
    };
  }
  ControlGroupRenderer.prototype.render_kfyn3r$$default = function (styling, baseClass, id, prefix, renderContext, control) {
    box(renderContext, ControlGroupRenderer$render$lambda, void 0, void 0, void 0, ControlGroupRenderer$render$lambda_0(baseClass, id, prefix, styling, this, control));
  };
  ControlGroupRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ControlGroupRenderer',
    interfaces: [ControlRenderer]
  };
  function formControl$lambda($receiver) {
    return Unit;
  }
  function formControl$lambda_0($receiver) {
    return Unit;
  }
  function formControl($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = formControl$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'formControl';
    if (build === void 0)
      build = formControl$lambda_0;
    var $receiver_0 = new FormControlComponent();
    build($receiver_0);
    var component = $receiver_0;
    component.render_j9u6hu$(styling, baseClass, id, prefix, $receiver);
  }
  var xmlns;
  function createIconSvgElement(baseClass) {
    var elem = document.createElementNS(xmlns, 'svg');
    if (baseClass != null) {
      elem.setAttributeNS(null, 'class', baseClass);
    }return elem;
  }
  function Svg(id, baseClass, domNode, job) {
    if (id === void 0)
      id = null;
    if (baseClass === void 0)
      baseClass = null;
    if (domNode === void 0)
      domNode = createIconSvgElement(baseClass);
    Tag.call(this, '', id, void 0, job, domNode);
    this.domNode_6fom5q$_0 = domNode;
  }
  Object.defineProperty(Svg.prototype, 'domNode', {
    get: function () {
      return this.domNode_6fom5q$_0;
    }
  });
  Svg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Svg',
    interfaces: [Tag]
  };
  function svg($receiver, baseClass, id, init) {
    return $receiver.register_x3phfy$(new Svg(id, baseClass, void 0, $receiver.job), init);
  }
  function IconComponent() {
    IconComponent$Companion_getInstance();
    this.def = null;
  }
  function IconComponent$Companion() {
    IconComponent$Companion_instance = this;
    this.prefix = 'icon';
    this.staticCss = staticStyle(this.prefix, '\n                width: 1.25rem;\n                height: 1.25rem;\n                color: currentColor;\n                display: inline-block;\n                vertical-align: middle;\n                flex-shrink: 0;\n                backface-visibility: hidden;\n            ');
  }
  IconComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IconComponent$Companion_instance = null;
  function IconComponent$Companion_getInstance() {
    if (IconComponent$Companion_instance === null) {
      new IconComponent$Companion();
    }return IconComponent$Companion_instance;
  }
  IconComponent.prototype.fromTheme_q0wvou$ = function (value) {
    this.def = value(Theme.Companion.invoke().icons);
  };
  IconComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IconComponent',
    interfaces: []
  };
  function icon$lambda($receiver) {
    return Unit;
  }
  function icon$lambda_0($receiver) {
    return Unit;
  }
  function icon$lambda$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function icon$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.domNode.setAttributeNS(null, 'viewBox', closure$it.viewBox);
      $receiver.domNode.setAttributeNS(null, 'focusable', 'false');
      $receiver.domNode.setAttributeNS(null, 'role', 'presentation');
      $receiver.domNode.innerHTML = closure$it.svg;
      return Unit;
    };
  }
  function icon($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = icon$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = IconComponent$Companion_getInstance().prefix;
    if (build === void 0)
      build = icon$lambda_0;
    var tmp$;
    var $receiver_0 = new IconComponent();
    build($receiver_0);
    var component = $receiver_0;
    if ((tmp$ = component.def) != null) {
      styled_0(getCallableRef('svg', function ($receiver, p1, p2, p3) {
        return svg($receiver, p1, p2, p3);
      }.bind(null, $receiver)), StyleClass.Companion.plus_ilq45s$(baseClass, IconComponent$Companion_getInstance().staticCss), id, prefix, icon$lambda$lambda(styling))($receiver, icon$lambda$lambda_0(tmp$));
    }}
  function InputFieldComponent() {
    InputFieldComponent$Companion_getInstance();
    this.variant = InputFieldComponent$variant$lambda;
    this.size = InputFieldComponent$size$lambda;
    this.base = null;
  }
  function InputFieldComponent$Companion() {
    InputFieldComponent$Companion_instance = this;
    this.staticCss = staticStyle('inputBox', '\n                display: inline-flex;\n                position: relative;\n                vertical-align: middle;\n                height: 2.5rem;\n                appearance: none;\n                align-items : center;\n                justify-content: center;\n                transition: all 250ms;\n                white-space: nowrap;\n                outline: none;\n                width: 100%\n            ');
    this.basicInputStyles = InputFieldComponent$Companion$basicInputStyles$lambda;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_0($receiver) {
    return $receiver.thin;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_1($receiver) {
    return $receiver.solid;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_2($receiver) {
    return $receiver.light;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_3($receiver) {
    $receiver.width_qwzhsr$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_0);
    $receiver.style_hw5xj$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_1);
    $receiver.color_jl9ed9$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_2);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.dark;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_3($receiver) {
    $receiver.color_jl9ed9$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_4($receiver) {
    $receiver.border_4a22k0$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_3);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.disabled;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_4($receiver) {
    $receiver.color_jl9ed9$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_5($receiver) {
    $receiver.background_f5fcq6$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_4);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.disabled;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_5($receiver) {
    $receiver.color_jl9ed9$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_6($receiver) {
    $receiver.background_f5fcq6$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_5);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_2($receiver) {
    return $receiver.primary;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_6($receiver) {
    $receiver.color_jl9ed9$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_7($receiver) {
    return $receiver.outline;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda$lambda_7($receiver) {
    $receiver.border_4a22k0$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_6);
    $receiver.boxShadow_ihm9h8$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda$lambda_7);
    return Unit;
  }
  function InputFieldComponent$Companion$basicInputStyles$lambda($receiver) {
    $receiver.lineHeight_bcpvvc$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda);
    $receiver.radius_bcpvvc$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_0);
    $receiver.fontWeight_wyjwgc$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_2);
    $receiver.border_4a22k0$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_3);
    $receiver.hover_xighi7$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_4);
    $receiver.readOnly_xighi7$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_5);
    $receiver.disabled_xighi7$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_6);
    $receiver.focus_xighi7$(InputFieldComponent$Companion$basicInputStyles$lambda$lambda_7);
    return Unit;
  }
  InputFieldComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InputFieldComponent$Companion_instance = null;
  function InputFieldComponent$Companion_getInstance() {
    if (InputFieldComponent$Companion_instance === null) {
      new InputFieldComponent$Companion();
    }return InputFieldComponent$Companion_instance;
  }
  InputFieldComponent.prototype.variant_4rxayg$ = function (value) {
    this.variant = value;
  };
  InputFieldComponent.prototype.size_4dlte8$ = function (value) {
    this.size = value;
  };
  InputFieldComponent.prototype.base_rs40ko$ = function (value) {
    this.base = value;
  };
  function InputFieldComponent$variant$lambda($receiver) {
    return Theme.Companion.invoke().input.variants.outline;
  }
  function InputFieldComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().input.sizes.normal;
  }
  InputFieldComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputFieldComponent',
    interfaces: []
  };
  function inputField$lambda($receiver) {
    return Unit;
  }
  function inputField$lambda_0($receiver) {
    return Unit;
  }
  function inputField$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().input.sizes));
      $receiver.invoke_qkhqzy$(closure$component.variant(Theme.Companion.invoke().input.variants));
      $receiver.invoke_qkhqzy$(InputFieldComponent$Companion_getInstance().basicInputStyles);
      return Unit;
    };
  }
  function inputField$lambda_2(closure$component, closure$store) {
    return function ($receiver) {
      var tmp$;
      (tmp$ = closure$component.base) != null ? tmp$($receiver) : null;
      if (closure$store != null) {
        var it = closure$store;
        $receiver.value_p81yox$(it.data);
        $receiver.handledBy_ytah3h$(values($receiver.changes), it.update);
      }return Unit;
    };
  }
  function inputField($receiver, styling, store, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = inputField$lambda;
    if (store === void 0)
      store = null;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'inputField';
    if (build === void 0)
      build = inputField$lambda_0;
    var $receiver_0 = new InputFieldComponent();
    build($receiver_0);
    var component = $receiver_0;
    styled(getCallableRef('input', function ($receiver, p1, p2, p3) {
      return $receiver.input_1ect6g$(p1, p2, p3);
    }.bind(null, $receiver)), styling, StyleClass.Companion.plus_ilq45s$(baseClass, InputFieldComponent$Companion_getInstance().staticCss), id, prefix, inputField$lambda_1(component))($receiver, inputField$lambda_2(component, store));
  }
  function unsafeFlow$ObjectLiteral_2(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_2($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_2.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_2.prototype.constructor = Coroutine$collect_42ocv1$_2;
  Coroutine$collect_42ocv1$_2.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_2.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_2(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_2(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_2.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_2.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_2;
  Coroutine$unsafeTransform$lambda$lambda_2.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_2(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_2(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_2 = wrapFunction(function () {
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_2(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_2(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_2.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_2.prototype.constructor = Coroutine$map$lambda_2;
  Coroutine$map$lambda_2.prototype.doResume = function () {
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
  function map$lambda_2(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_2(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function unsafeFlow$ObjectLiteral_3(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_3($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_3.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_3.prototype.constructor = Coroutine$collect_42ocv1$_3;
  Coroutine$collect_42ocv1$_3.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_3.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_3(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow_1]};
  function Coroutine$unsafeTransform$lambda$lambda_3(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_3.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_3.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_3;
  Coroutine$unsafeTransform$lambda$lambda_3.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_3(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_3(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_3 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$fritz2_core.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.FlowCollector;
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_3(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_3(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_3.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_3.prototype.constructor = Coroutine$map$lambda_3;
  Coroutine$map$lambda_3.prototype.doResume = function () {
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
  function map$lambda_3(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_3(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function OverlayMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OverlayMethod_initFields() {
    OverlayMethod_initFields = function () {
    };
    OverlayMethod$CoveringTopMost_instance = new OverlayMethod('CoveringTopMost', 0);
    OverlayMethod$CoveringEach_instance = new OverlayMethod('CoveringEach', 1);
  }
  var OverlayMethod$CoveringTopMost_instance;
  function OverlayMethod$CoveringTopMost_getInstance() {
    OverlayMethod_initFields();
    return OverlayMethod$CoveringTopMost_instance;
  }
  var OverlayMethod$CoveringEach_instance;
  function OverlayMethod$CoveringEach_getInstance() {
    OverlayMethod_initFields();
    return OverlayMethod$CoveringEach_instance;
  }
  OverlayMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OverlayMethod',
    interfaces: [Enum]
  };
  function OverlayMethod$values() {
    return [OverlayMethod$CoveringTopMost_getInstance(), OverlayMethod$CoveringEach_getInstance()];
  }
  OverlayMethod.values = OverlayMethod$values;
  function OverlayMethod$valueOf(name) {
    switch (name) {
      case 'CoveringTopMost':
        return OverlayMethod$CoveringTopMost_getInstance();
      case 'CoveringEach':
        return OverlayMethod$CoveringEach_getInstance();
      default:throwISE('No enum constant dev.fritz2.components.OverlayMethod.' + name);
    }
  }
  OverlayMethod.valueOf_61zpoe$ = OverlayMethod$valueOf;
  function Overlay() {
  }
  Overlay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Overlay',
    interfaces: []
  };
  function DefaultOverlay(method, styling) {
    if (method === void 0)
      method = OverlayMethod$CoveringTopMost_getInstance();
    if (styling === void 0)
      styling = Theme.Companion.invoke().modal.overlay;
    this.method_pnlkok$_0 = method;
    this.styling_qe4bdl$_0 = styling;
  }
  Object.defineProperty(DefaultOverlay.prototype, 'method', {
    get: function () {
      return this.method_pnlkok$_0;
    }
  });
  Object.defineProperty(DefaultOverlay.prototype, 'styling', {
    get: function () {
      return this.styling_qe4bdl$_0;
    }
  });
  function DefaultOverlay$render$lambda$lambda(closure$level) {
    return function ($receiver) {
      return $receiver.modal_vux9f0$(closure$level, -1);
    };
  }
  function DefaultOverlay$render$lambda(closure$level, this$DefaultOverlay) {
    return function ($receiver) {
      $receiver.zIndex_yiflju$(DefaultOverlay$render$lambda$lambda(closure$level));
      $receiver.invoke_qkhqzy$(this$DefaultOverlay.styling);
      return Unit;
    };
  }
  function DefaultOverlay$render$lambda_0($receiver) {
    return Unit;
  }
  DefaultOverlay.prototype.render_6x5jgm$ = function (renderContext, level) {
    box(renderContext, DefaultOverlay$render$lambda(level, this), void 0, void 0, 'modal-overlay', DefaultOverlay$render$lambda_0);
  };
  DefaultOverlay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultOverlay',
    interfaces: [Overlay]
  };
  function ModalComponent() {
    ModalComponent$Companion_getInstance();
    this.content = null;
    this.size = ModalComponent$size$lambda;
    this.variant = ModalComponent$variant$lambda;
    this.hasCloseButton = true;
    this.closeButton = null;
  }
  function ModalComponent$ModalsStack() {
    RootStore.call(this, emptyList());
    this.pop = this.handle_7ib3lp$(void 0, ModalComponent$ModalsStack$pop$lambda);
  }
  function Coroutine$ModalComponent$ModalsStack$push$lambda(closure$dialog_0, stack_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$dialog = closure$dialog_0;
    this.local$stack = stack_0;
  }
  Coroutine$ModalComponent$ModalsStack$push$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ModalComponent$ModalsStack$push$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ModalComponent$ModalsStack$push$lambda.prototype.constructor = Coroutine$ModalComponent$ModalsStack$push$lambda;
  Coroutine$ModalComponent$ModalsStack$push$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return plus(this.local$stack, this.local$closure$dialog);
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
  function ModalComponent$ModalsStack$push$lambda(closure$dialog_0) {
    return function (stack_0, continuation_0, suspended) {
      var instance = new Coroutine$ModalComponent$ModalsStack$push$lambda(closure$dialog_0, stack_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ModalComponent$ModalsStack.prototype.push_m4fcom$ = function (dialog) {
    return this.handle_7ib3lp$(void 0, ModalComponent$ModalsStack$push$lambda(dialog));
  };
  function Coroutine$ModalComponent$ModalsStack$pop$lambda(stack_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$stack = stack_0;
  }
  Coroutine$ModalComponent$ModalsStack$pop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ModalComponent$ModalsStack$pop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ModalComponent$ModalsStack$pop$lambda.prototype.constructor = Coroutine$ModalComponent$ModalsStack$pop$lambda;
  Coroutine$ModalComponent$ModalsStack$pop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return dropLast(this.local$stack, 1);
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
  function ModalComponent$ModalsStack$pop$lambda(stack_0, continuation_0, suspended) {
    var instance = new Coroutine$ModalComponent$ModalsStack$pop$lambda(stack_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  ModalComponent$ModalsStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModalsStack',
    interfaces: [RootStore]
  };
  function ModalComponent$Companion() {
    ModalComponent$Companion_instance = this;
    this.stack = new ModalComponent$ModalsStack();
    this.overlay = storeOf(new DefaultOverlay());
    appendToBody([renderElement(void 0, ModalComponent$ModalComponent$Companion_init$lambda(this))]);
  }
  ModalComponent$Companion.prototype.setOverlayHandler_hynfmm$ = function (overlay) {
    ModalComponent$Companion_getInstance().overlay.update.invoke_11rb$(overlay);
  };
  function ModalComponent$Companion$show$lambda($receiver) {
    return Unit;
  }
  function ModalComponent$Companion$show$lambda$lambda$lambda(closure$level) {
    return function ($receiver) {
      return $receiver.modal_za3lpa$(closure$level);
    };
  }
  function ModalComponent$Companion$show$lambda$lambda(closure$level, closure$component, closure$styling) {
    return function ($receiver) {
      $receiver.css_61zpoe$('--main-level: ' + closure$level + 'rem;');
      $receiver.zIndex_yiflju$(ModalComponent$Companion$show$lambda$lambda$lambda(closure$level));
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().modal.sizes));
      $receiver.invoke_qkhqzy$(closure$component.variant(Theme.Companion.invoke().modal.variants));
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function ModalComponent$Companion$show$lambda$lambda_0(closure$component, closure$close) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      if (closure$component.hasCloseButton) {
        if (closure$component.closeButton == null) {
          closure$component.closeButton_yth1cs$();
        }if ((tmp$ = closure$component.closeButton) != null) {
          tmp$($receiver, closure$close);
        }}if ((tmp$_0 = closure$component.content) != null) {
        tmp$_0($receiver);
      }return Unit;
    };
  }
  function ModalComponent$Companion$show$lambda_0(closure$component, closure$styling, closure$baseClass, closure$id, closure$prefix, closure$close) {
    return function ($receiver, level) {
      return box($receiver, ModalComponent$Companion$show$lambda$lambda(level, closure$component, closure$styling), closure$baseClass, closure$id, closure$prefix, ModalComponent$Companion$show$lambda$lambda_0(closure$component, closure$close));
    };
  }
  ModalComponent$Companion.prototype.show_awwolb$ = function (styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = ModalComponent$Companion$show$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'modal';
    var close = this.stack.pop;
    var $receiver = new ModalComponent();
    build($receiver, close);
    var component = $receiver;
    var modal = ModalComponent$Companion$show$lambda_0(component, styling, baseClass, id, prefix, close);
    return this.stack.push_m4fcom$(modal);
  };
  function Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda.prototype.constructor = Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda;
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it.size;
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
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0(this$ModalComponent$) {
    return function ($receiver, size) {
      var currentOverlay = this$ModalComponent$.overlay.current;
      if (currentOverlay.method === OverlayMethod$CoveringTopMost_getInstance() && size > 0) {
        currentOverlay.render_6x5jgm$($receiver, size);
      }return Unit;
    };
  }
  function Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0;
  Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return toList(withIndex(this.local$it));
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
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda$lambda(closure$currentOverlay, closure$index, closure$modal) {
    return function ($receiver) {
      closure$currentOverlay.render_6x5jgm$($receiver, closure$index + 1 | 0);
      closure$modal($receiver, closure$index + 1 | 0);
      return Unit;
    };
  }
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_2(this$ModalComponent$) {
    return function ($receiver, f) {
      var index = f.component1()
      , modal = f.component2();
      var currentOverlay = this$ModalComponent$.overlay.current;
      if (currentOverlay.method === OverlayMethod$CoveringEach_getInstance()) {
        return $receiver.div_hhcm6n$(void 0, void 0, ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda$lambda(currentOverlay, index, modal));
      } else {
        return modal($receiver, index + 1 | 0);
      }
    };
  }
  function ModalComponent$ModalComponent$Companion_init$lambda$lambda(this$ModalComponent$) {
    return function ($receiver) {
      var $receiver_0 = this$ModalComponent$.stack.data;
      $receiver.render_3mkwiv$(new unsafeFlow$ObjectLiteral_2(unsafeTransform$lambda_2(map$lambda_2(ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda), $receiver_0)), ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_0(this$ModalComponent$));
      var $receiver_1 = this$ModalComponent$.stack.data;
      $receiver.renderEach_am7osu$(new unsafeFlow$ObjectLiteral_2(unsafeTransform$lambda_2(map$lambda_2(ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_1), $receiver_1)), ModalComponent$ModalComponent$Companion_init$lambda$lambda$lambda_2(this$ModalComponent$));
      return Unit;
    };
  }
  function ModalComponent$ModalComponent$Companion_init$lambda(this$ModalComponent$) {
    return function ($receiver) {
      return $receiver.div_hhcm6n$(void 0, 'modals', ModalComponent$ModalComponent$Companion_init$lambda$lambda(this$ModalComponent$));
    };
  }
  ModalComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModalComponent$Companion_instance = null;
  function ModalComponent$Companion_getInstance() {
    if (ModalComponent$Companion_instance === null) {
      new ModalComponent$Companion();
    }return ModalComponent$Companion_instance;
  }
  ModalComponent.prototype.content_9c978p$ = function (value) {
    this.content = value;
  };
  ModalComponent.prototype.size_ck9sfj$ = function (value) {
    this.size = value;
  };
  ModalComponent.prototype.variant_9n36t3$ = function (value) {
    this.variant = value;
  };
  ModalComponent.prototype.hasCloseButton_6taknv$ = function (value) {
    this.hasCloseButton = value;
  };
  function ModalComponent$closeButton$lambda($receiver) {
    return Unit;
  }
  function ModalComponent$closeButton$lambda_0($receiver) {
    return Unit;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.none;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.none;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda$lambda($receiver) {
    $receiver.right_bcpvvc$(ModalComponent$closeButton$lambda$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(ModalComponent$closeButton$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(ModalComponent$closeButton$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function ModalComponent$closeButton$lambda$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.position_wp9r2r$(ModalComponent$closeButton$lambda$lambda$lambda);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function ModalComponent$closeButton$lambda$lambda$lambda_0($receiver) {
    return $receiver.ghost;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.close;
  }
  function ModalComponent$closeButton$lambda$lambda$lambda_1($receiver) {
    $receiver.fromTheme_q0wvou$(ModalComponent$closeButton$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function ModalComponent$closeButton$lambda$lambda_0(closure$build) {
    return function ($receiver) {
      $receiver.variant_gps3do$(ModalComponent$closeButton$lambda$lambda$lambda_0);
      $receiver.icon_1s1pfb$(void 0, void 0, void 0, void 0, ModalComponent$closeButton$lambda$lambda$lambda_1);
      closure$build($receiver);
      return Unit;
    };
  }
  function Coroutine$ModalComponent$closeButton$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$ModalComponent$closeButton$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ModalComponent$closeButton$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ModalComponent$closeButton$lambda$lambda.prototype.constructor = Coroutine$ModalComponent$closeButton$lambda$lambda;
  Coroutine$ModalComponent$closeButton$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
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
  function ModalComponent$closeButton$lambda$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ModalComponent$closeButton$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ModalComponent$closeButton$lambda_1(closure$styling, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function ($receiver, closeHandle) {
      var $receiver_0 = clickButton($receiver, ModalComponent$closeButton$lambda$lambda(closure$styling), closure$baseClass, closure$id, closure$prefix, ModalComponent$closeButton$lambda$lambda_0(closure$build)).events;
      $receiver.handledBy_ytah3h$(new unsafeFlow$ObjectLiteral_3(unsafeTransform$lambda_3(map$lambda_3(ModalComponent$closeButton$lambda$lambda_1), $receiver_0)), closeHandle);
      return Unit;
    };
  }
  ModalComponent.prototype.closeButton_yth1cs$ = function (styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = ModalComponent$closeButton$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'modal-close-button';
    if (build === void 0)
      build = ModalComponent$closeButton$lambda_0;
    this.closeButton = ModalComponent$closeButton$lambda_1(styling, baseClass, id, prefix, build);
  };
  function ModalComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().modal.sizes.normal;
  }
  function ModalComponent$variant$lambda($receiver) {
    return Theme.Companion.invoke().modal.variants.auto;
  }
  ModalComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModalComponent',
    interfaces: []
  };
  function modal$lambda($receiver) {
    return Unit;
  }
  function modal(styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = modal$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'modal';
    return ModalComponent$Companion_getInstance().show_awwolb$(styling, baseClass, id, prefix, build);
  }
  function NavbarComponent() {
    NavbarComponent$Companion_getInstance();
    this.brand = NavbarComponent$brand$lambda;
    this.actions = NavbarComponent$actions$lambda;
  }
  function NavbarComponent$Companion() {
    NavbarComponent$Companion_instance = this;
    this.staticHeaderCss = staticStyle('navbar-header', '\n                transition: box-shadow 0.2s;\n                position: fixed;\n                top: 0;\n                z-index: 199;\n                background: #FFFFFF;\n                left: 0;\n                right: 0;\n                width: 100%;\n            ');
    this.staticContentCss = staticStyle('navbar-content', '\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                height: 4.5rem;\n                width: 100%;\n                padding-left: 1.5rem;\n                padding-right: 1.5rem;\n            ');
    this.staticBrandCss = staticStyle('navbar-brand', '\n                display: flex;\n                align-items: center;\n            ');
    this.staticActionsCss = staticStyle('navbar-actions', '\n                display: flex;\n                align-items: center;\n            ');
  }
  NavbarComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NavbarComponent$Companion_instance = null;
  function NavbarComponent$Companion_getInstance() {
    if (NavbarComponent$Companion_instance === null) {
      new NavbarComponent$Companion();
    }return NavbarComponent$Companion_instance;
  }
  NavbarComponent.prototype.brand_wqyjv5$ = function (value) {
    this.brand = value;
  };
  NavbarComponent.prototype.actions_wqyjv5$ = function (value) {
    this.actions = value;
  };
  function NavbarComponent$brand$lambda($receiver) {
    return Unit;
  }
  function NavbarComponent$actions$lambda($receiver) {
    return Unit;
  }
  NavbarComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavbarComponent',
    interfaces: []
  };
  function navBar$lambda($receiver) {
    return Unit;
  }
  function navBar$lambda_0($receiver) {
    return Unit;
  }
  function navBar$lambda$lambda$lambda$lambda$lambda($receiver) {
    return '6px';
  }
  function navBar$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function navBar$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.primary;
  }
  function navBar$lambda$lambda$lambda$lambda($receiver) {
    $receiver.width_qwzhsr$(navBar$lambda$lambda$lambda$lambda$lambda);
    $receiver.style_hw5xj$(navBar$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(navBar$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function navBar$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return '2px';
  }
  function navBar$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return $receiver.solid;
  }
  function navBar$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    return $receiver.light;
  }
  function navBar$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.width_qwzhsr$(navBar$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.style_hw5xj$(navBar$lambda$lambda$lambda$lambda$lambda_3);
    $receiver.color_jl9ed9$(navBar$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function navBar$lambda$lambda$lambda($receiver) {
    $receiver.top_4a22k0$(navBar$lambda$lambda$lambda$lambda);
    $receiver.bottom_4a22k0$(navBar$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function navBar$lambda$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.borders_9iuei5$(navBar$lambda$lambda$lambda);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function navBar$lambda$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      closure$component.brand($receiver);
      return Unit;
    };
  }
  function navBar$lambda$lambda$lambda_1(closure$component) {
    return function ($receiver) {
      closure$component.actions($receiver);
      return Unit;
    };
  }
  function navBar$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      $receiver.div_hhcm6n$(NavbarComponent$Companion_getInstance().staticBrandCss.name, void 0, navBar$lambda$lambda$lambda_0(closure$component));
      $receiver.div_hhcm6n$(NavbarComponent$Companion_getInstance().staticActionsCss.name, void 0, navBar$lambda$lambda$lambda_1(closure$component));
      return Unit;
    };
  }
  function navBar$lambda_1(closure$styling, closure$component) {
    return function ($receiver) {
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), NavbarComponent$Companion_getInstance().staticContentCss, void 0, void 0, navBar$lambda$lambda(closure$styling))($receiver, navBar$lambda$lambda_0(closure$component));
      return Unit;
    };
  }
  function navBar($receiver, styling, store, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = navBar$lambda;
    if (store === void 0)
      store = null;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'navBar';
    if (build === void 0)
      build = navBar$lambda_0;
    var $receiver_0 = new NavbarComponent();
    build($receiver_0);
    var component = $receiver_0;
    $receiver.nav_viepbn$(NavbarComponent$Companion_getInstance().staticHeaderCss.plus_ar5zv2$(baseClass).name, void 0, navBar$lambda_1(styling, component));
  }
  function unsafeFlow$ObjectLiteral_4(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_4($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_4.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_4.prototype.constructor = Coroutine$collect_42ocv1$_4;
  Coroutine$collect_42ocv1$_4.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_4.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_4(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow_1]};
  function Coroutine$unsafeTransform$lambda$lambda_4(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_4.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_4.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_4;
  Coroutine$unsafeTransform$lambda$lambda_4.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_4(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_4(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_4 = wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = $module$fritz2_core.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.FlowCollector;
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_4(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_4(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_4.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_4.prototype.constructor = Coroutine$map$lambda_4;
  Coroutine$map$lambda_4.prototype.doResume = function () {
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
  function map$lambda_4(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_4(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function unsafeFlow$ObjectLiteral_5(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_5($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_5.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_5.prototype.constructor = Coroutine$collect_42ocv1$_5;
  Coroutine$collect_42ocv1$_5.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_5.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_5(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_5(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_5.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_5.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_5;
  Coroutine$unsafeTransform$lambda$lambda_5.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_5(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_5(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_5 = wrapFunction(function () {
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_5(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_5(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_5.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_5.prototype.constructor = Coroutine$map$lambda_5;
  Coroutine$map$lambda_5.prototype.doResume = function () {
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
  function map$lambda_5(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_5(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function PopoverComponent() {
    PopoverComponent$Companion_getInstance();
    this.hasCloseButton = true;
    this.closeButton = null;
    this.size = PopoverComponent$size$lambda;
    this.positionStyle = PopoverComponent$positionStyle$lambda;
    this.hasArrow = true;
    this.arrowPlacement = PopoverComponent$arrowPlacement$lambda;
    this.trigger = null;
    this.header = null;
    this.footer = null;
    this.content = null;
  }
  function PopoverComponent$Companion() {
    PopoverComponent$Companion_instance = this;
    this.staticCss = staticStyle('popover', '\n                  display: inline-block;\n                  position: relative;  \n            ');
  }
  PopoverComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PopoverComponent$Companion_instance = null;
  function PopoverComponent$Companion_getInstance() {
    if (PopoverComponent$Companion_instance === null) {
      new PopoverComponent$Companion();
    }return PopoverComponent$Companion_instance;
  }
  PopoverComponent.prototype.hasCloseButton_6taknv$ = function (value) {
    this.hasCloseButton = value;
  };
  function PopoverComponent$closeButton$lambda($receiver) {
    return Unit;
  }
  function PopoverComponent$closeButton$lambda_0($receiver) {
    return Unit;
  }
  function PopoverComponent$closeButton$lambda$lambda(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.closeButton);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function PopoverComponent$closeButton$lambda$lambda$lambda($receiver) {
    return $receiver.ghost;
  }
  function PopoverComponent$closeButton$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.close;
  }
  function PopoverComponent$closeButton$lambda$lambda$lambda_0($receiver) {
    $receiver.fromTheme_q0wvou$(PopoverComponent$closeButton$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function PopoverComponent$closeButton$lambda$lambda_0(closure$build) {
    return function ($receiver) {
      $receiver.variant_gps3do$(PopoverComponent$closeButton$lambda$lambda$lambda);
      $receiver.icon_1s1pfb$(void 0, void 0, void 0, void 0, PopoverComponent$closeButton$lambda$lambda$lambda_0);
      closure$build($receiver);
      return Unit;
    };
  }
  function Coroutine$PopoverComponent$closeButton$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$PopoverComponent$closeButton$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PopoverComponent$closeButton$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PopoverComponent$closeButton$lambda$lambda.prototype.constructor = Coroutine$PopoverComponent$closeButton$lambda$lambda;
  Coroutine$PopoverComponent$closeButton$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
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
  function PopoverComponent$closeButton$lambda$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$PopoverComponent$closeButton$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function PopoverComponent$closeButton$lambda_1(closure$styling, closure$baseClass, closure$id, closure$prefix, closure$build) {
    return function ($receiver, closeHandle) {
      var $receiver_0 = clickButton($receiver, PopoverComponent$closeButton$lambda$lambda(closure$styling), closure$baseClass, closure$id, closure$prefix, PopoverComponent$closeButton$lambda$lambda_0(closure$build)).events;
      $receiver.handledBy_ytah3h$(new unsafeFlow$ObjectLiteral_4(unsafeTransform$lambda_4(map$lambda_4(PopoverComponent$closeButton$lambda$lambda_1), $receiver_0)), closeHandle);
      return Unit;
    };
  }
  PopoverComponent.prototype.closeButton_yth1cs$ = function (styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = PopoverComponent$closeButton$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'popover-close-button';
    if (build === void 0)
      build = PopoverComponent$closeButton$lambda_0;
    this.closeButton = PopoverComponent$closeButton$lambda_1(styling, baseClass, id, prefix, build);
  };
  PopoverComponent.prototype.size_12sxu1$ = function (value) {
    this.size = value;
  };
  function PopoverComponent$placement$lambda($receiver) {
    return $receiver.bottom;
  }
  function PopoverComponent$placement$lambda_0($receiver) {
    return $receiver.left;
  }
  function PopoverComponent$placement$lambda_1($receiver) {
    return $receiver.top;
  }
  function PopoverComponent$placement$lambda_2($receiver) {
    return $receiver.right;
  }
  PopoverComponent.prototype.placement_aes0rj$ = function (value) {
    var tmp$;
    tmp$ = value(Theme.Companion.invoke().popover.placement);
    if (equals(tmp$, Theme.Companion.invoke().popover.placement.top))
      this.arrowPlacement_9guuis$(PopoverComponent$placement$lambda);
    else if (equals(tmp$, Theme.Companion.invoke().popover.placement.right))
      this.arrowPlacement_9guuis$(PopoverComponent$placement$lambda_0);
    else if (equals(tmp$, Theme.Companion.invoke().popover.placement.bottom))
      this.arrowPlacement_9guuis$(PopoverComponent$placement$lambda_1);
    else if (equals(tmp$, Theme.Companion.invoke().popover.placement.left))
      this.arrowPlacement_9guuis$(PopoverComponent$placement$lambda_2);
    this.positionStyle = value;
  };
  PopoverComponent.prototype.hasArrow_6taknv$ = function (value) {
    this.hasArrow = value;
  };
  PopoverComponent.prototype.arrowPlacement_9guuis$ = function (value) {
    this.arrowPlacement = value;
  };
  PopoverComponent.prototype.trigger_9c978p$ = function (value) {
    this.trigger = value;
  };
  function PopoverComponent$header$lambda$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.header);
    return Unit;
  }
  function PopoverComponent$header$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      closure$value($receiver);
      return Unit;
    };
  }
  function PopoverComponent$header$lambda(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('header', function ($receiver, p1, p2, p3) {
        return $receiver.header_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-header', PopoverComponent$header$lambda$lambda)($receiver, PopoverComponent$header$lambda$lambda_0(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.header_9c978p$ = function (value) {
    this.header = PopoverComponent$header$lambda(value);
  };
  PopoverComponent.prototype.header_61zpoe$ = function (value) {
    this.header_p81yox$(flowOf(value));
  };
  function PopoverComponent$header$lambda$lambda_1($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.header);
    return Unit;
  }
  function PopoverComponent$header$lambda$lambda_2(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  function PopoverComponent$header$lambda_0(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('header', function ($receiver, p1, p2, p3) {
        return $receiver.header_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-header', PopoverComponent$header$lambda$lambda_1)($receiver, PopoverComponent$header$lambda$lambda_2(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.header_p81yox$ = function (value) {
    this.header = PopoverComponent$header$lambda_0(value);
  };
  function PopoverComponent$footer$lambda$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.footer);
    return Unit;
  }
  function PopoverComponent$footer$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      closure$value($receiver);
      return Unit;
    };
  }
  function PopoverComponent$footer$lambda(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('footer', function ($receiver, p1, p2, p3) {
        return $receiver.footer_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-footer', PopoverComponent$footer$lambda$lambda)($receiver, PopoverComponent$footer$lambda$lambda_0(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.footer_9c978p$ = function (value) {
    this.footer = PopoverComponent$footer$lambda(value);
  };
  PopoverComponent.prototype.footer_61zpoe$ = function (value) {
    this.footer_p81yox$(flowOf(value));
  };
  function PopoverComponent$footer$lambda$lambda_1($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.footer);
    return Unit;
  }
  function PopoverComponent$footer$lambda$lambda_2(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  function PopoverComponent$footer$lambda_0(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('footer', function ($receiver, p1, p2, p3) {
        return $receiver.footer_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-footer', PopoverComponent$footer$lambda$lambda_1)($receiver, PopoverComponent$footer$lambda$lambda_2(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.footer_p81yox$ = function (value) {
    this.footer = PopoverComponent$footer$lambda_0(value);
  };
  function PopoverComponent$content$lambda$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.section);
    return Unit;
  }
  function PopoverComponent$content$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      closure$value($receiver);
      return Unit;
    };
  }
  function PopoverComponent$content$lambda(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('section', function ($receiver, p1, p2, p3) {
        return $receiver.section_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-content', PopoverComponent$content$lambda$lambda)($receiver, PopoverComponent$content$lambda$lambda_0(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.content_9c978p$ = function (value) {
    this.content = PopoverComponent$content$lambda(value);
  };
  PopoverComponent.prototype.content_61zpoe$ = function (value) {
    this.content_p81yox$(flowOf(value));
  };
  function PopoverComponent$content$lambda$lambda_1($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.section);
    return Unit;
  }
  function PopoverComponent$content$lambda$lambda_2(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  function PopoverComponent$content$lambda_0(closure$value) {
    return function ($receiver) {
      styled_0(getCallableRef('section', function ($receiver, p1, p2, p3) {
        return $receiver.section_viepbn$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-content', PopoverComponent$content$lambda$lambda_1)($receiver, PopoverComponent$content$lambda$lambda_2(closure$value));
      return Unit;
    };
  }
  PopoverComponent.prototype.content_p81yox$ = function (value) {
    this.content = PopoverComponent$content$lambda_0(value);
  };
  function PopoverComponent$renderArrow$lambda$lambda(this$PopoverComponent) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$PopoverComponent.arrowPlacement(Theme.Companion.invoke().popover.arrowPlacement));
      return Unit;
    };
  }
  function PopoverComponent$renderArrow$lambda$lambda_0($receiver) {
    return Unit;
  }
  PopoverComponent.prototype.renderArrow_0 = function (renderContext) {
    styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, renderContext)), void 0, void 0, 'popover-arrow', PopoverComponent$renderArrow$lambda$lambda(this))(renderContext, PopoverComponent$renderArrow$lambda$lambda_0);
  };
  function PopoverComponent$renderPopover$lambda($receiver) {
    return Unit;
  }
  function PopoverComponent$renderPopover$lambda$lambda(this$PopoverComponent) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$PopoverComponent.positionStyle(Theme.Companion.invoke().popover.placement));
      $receiver.invoke_qkhqzy$(this$PopoverComponent.size(Theme.Companion.invoke().popover.size));
      return Unit;
    };
  }
  function PopoverComponent$renderPopover$lambda$lambda_0(this$PopoverComponent, closure$closeHandler) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (this$PopoverComponent.hasArrow) {
        this$PopoverComponent.renderArrow_0($receiver);
      }if (this$PopoverComponent.hasCloseButton) {
        if (this$PopoverComponent.closeButton == null) {
          this$PopoverComponent.closeButton_yth1cs$();
        }(tmp$ = this$PopoverComponent.closeButton) != null ? tmp$($receiver, closure$closeHandler) : null;
      }(tmp$_0 = this$PopoverComponent.header) != null ? tmp$_0($receiver) : null;
      (tmp$_1 = this$PopoverComponent.content) != null ? tmp$_1($receiver) : null;
      (tmp$_2 = this$PopoverComponent.footer) != null ? tmp$_2($receiver) : null;
      return Unit;
    };
  }
  PopoverComponent.prototype.renderPopover_qb8kr6$ = function (styling, baseClass, id, prefix, renderContext, closeHandler) {
    if (styling === void 0)
      styling = PopoverComponent$renderPopover$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'popover';
    styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, renderContext)), styling, baseClass, id, prefix, PopoverComponent$renderPopover$lambda$lambda(this))(renderContext, PopoverComponent$renderPopover$lambda$lambda_0(this, closeHandler));
  };
  function PopoverComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().popover.size.normal;
  }
  function PopoverComponent$positionStyle$lambda($receiver) {
    return Theme.Companion.invoke().popover.placement.top;
  }
  function PopoverComponent$arrowPlacement$lambda($receiver) {
    return Theme.Companion.invoke().popover.arrowPlacement.bottom;
  }
  PopoverComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PopoverComponent',
    interfaces: []
  };
  function popover$lambda($receiver) {
    return Unit;
  }
  function popover$lambda_0($receiver) {
    return Unit;
  }
  function popover$ObjectLiteral(initialData, id) {
    RootStore.call(this, initialData, id);
    this.toggle = this.handle_7ib3lp$(void 0, popover$ObjectLiteral$toggle$lambda);
  }
  function Coroutine$popover$ObjectLiteral$toggle$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$popover$ObjectLiteral$toggle$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$popover$ObjectLiteral$toggle$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$popover$ObjectLiteral$toggle$lambda.prototype.constructor = Coroutine$popover$ObjectLiteral$toggle$lambda;
  Coroutine$popover$ObjectLiteral$toggle$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return !this.local$it;
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
  function popover$ObjectLiteral$toggle$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$popover$ObjectLiteral$toggle$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  popover$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RootStore]
  };
  function popover$lambda_1($receiver) {
    return Unit;
  }
  function popover$lambda_2($receiver) {
    return Unit;
  }
  function popover$lambda$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().popover.trigger);
    return Unit;
  }
  function Coroutine$popover$lambda$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$popover$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$popover$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$popover$lambda$lambda$lambda.prototype.constructor = Coroutine$popover$lambda$lambda$lambda;
  Coroutine$popover$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
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
  function popover$lambda$lambda$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$popover$lambda$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function popover$lambda$lambda_0(closure$clickStore, closure$component) {
    return function ($receiver) {
      var tmp$;
      var $receiver_0 = $receiver.clicks.events;
      $receiver.handledBy_ytah3h$(new unsafeFlow$ObjectLiteral_5(unsafeTransform$lambda_5(map$lambda_5(popover$lambda$lambda$lambda), $receiver_0)), closure$clickStore.toggle);
      (tmp$ = closure$component.trigger) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function popover$lambda$lambda_1(closure$component, closure$styling, closure$baseClass, closure$id, closure$prefix, closure$clickStore) {
    return function ($receiver, it) {
      if (it) {
        closure$component.renderPopover_qb8kr6$(closure$styling, closure$baseClass, closure$id, closure$prefix, $receiver, closure$clickStore.toggle);
      }return Unit;
    };
  }
  function popover$lambda_3(closure$clickStore, closure$component, closure$styling, closure$baseClass, closure$id, closure$prefix) {
    return function ($receiver) {
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, 'popover-trigger', popover$lambda$lambda)($receiver, popover$lambda$lambda_0(closure$clickStore, closure$component));
      $receiver.render_3mkwiv$(closure$clickStore.data, popover$lambda$lambda_1(closure$component, closure$styling, closure$baseClass, closure$id, closure$prefix, closure$clickStore));
      return Unit;
    };
  }
  function popover($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = popover$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'popover';
    if (build === void 0)
      build = popover$lambda_0;
    var $receiver_0 = new PopoverComponent();
    build($receiver_0);
    var component = $receiver_0;
    var clickStore = new popover$ObjectLiteral(false);
    styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), popover$lambda_1, PopoverComponent$Companion_getInstance().staticCss, null, prefix, popover$lambda_2)($receiver, popover$lambda_3(clickStore, component, styling, baseClass, id, prefix));
  }
  function unsafeFlow$ObjectLiteral_6(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_6($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_6.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_6.prototype.constructor = Coroutine$collect_42ocv1$_6;
  Coroutine$collect_42ocv1$_6.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_6.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_6(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_6(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_6.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_6.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_6;
  Coroutine$unsafeTransform$lambda$lambda_6.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_6(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_6(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_6 = wrapFunction(function () {
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_6(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_6(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_6.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_6.prototype.constructor = Coroutine$map$lambda_6;
  Coroutine$map$lambda_6.prototype.doResume = function () {
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
  function map$lambda_6(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_6(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function RadioComponent() {
    RadioComponent$Companion_getInstance();
    this.size = RadioComponent$size$lambda;
    this.icon = null;
    this.label = null;
    this.labelStyle = RadioComponent$labelStyle$lambda;
    this.selectedStyle = RadioComponent$selectedStyle$lambda;
    this.events = null;
    this.selected = flowOf(false);
    this.disabled = flowOf(false);
    this.groupName = flowOf('');
  }
  function RadioComponent$Companion() {
    RadioComponent$Companion_instance = this;
    this.radioInputStaticCss = staticStyle('radioInput', '\n' + '            position: absolute;' + '\n' + '            height: 1px; ' + '\n' + '            width: 1px;' + '\n' + '            overflow: hidden;' + '\n' + '            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */' + '\n' + '            clip: rect(1px, 1px, 1px, 1px);' + '\n' + '            outline: none;' + '\n' + '            &:focus{' + '\n' + '                outline: none;' + '\n' + '            }' + '\n' + '            &:focus + label::before {' + '\n' + '                box-shadow: 0 0 1px ' + Theme.Companion.invoke().colors.dark + ';' + '\n' + '            }' + '\n' + '            &:disabled + label {' + '\n' + '                color: ' + Theme.Companion.invoke().colors.disabled + ';' + '\n' + '                cursor: not-allowed;' + '\n' + '            }' + '\n' + '            &:disabled + label::before {' + '\n' + '                opacity: 0.3;' + '\n' + '                cursor: not-allowed;' + '\n' + '                boxShadow: none;' + '\n' + '                color: ' + Theme.Companion.invoke().colors.disabled + ';' + '\n' + '            }' + '\n' + '            ');
    this.radioLabelStaticCss = staticStyle('radiolabel', '\n' + '            display: block;' + '\n' + '            position: relative;' + '\n' + '            &::before {' + '\n' + "                content: '';" + '\n' + '                outline: none;' + '\n' + '                position: relative;' + '\n' + '                display: inline-block;' + '\n' + '                vertical-align: middle;' + '\n' + '                box-shadow: 0 0 1px ' + Theme.Companion.invoke().colors.dark + ' inset;' + '\n' + '            }' + '\n' + '            ');
  }
  RadioComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RadioComponent$Companion_instance = null;
  function RadioComponent$Companion_getInstance() {
    if (RadioComponent$Companion_instance === null) {
      new RadioComponent$Companion();
    }return RadioComponent$Companion_instance;
  }
  RadioComponent.prototype.size_nf2201$ = function (value) {
    this.size = value;
  };
  RadioComponent.prototype.icon_e5jlz5$ = function (value) {
    this.icon = value();
  };
  function RadioComponent$label$lambda(closure$value) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$value);
      return Unit;
    };
  }
  RadioComponent.prototype.label_61zpoe$ = function (value) {
    this.label = RadioComponent$label$lambda(value);
  };
  function RadioComponent$label$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  RadioComponent.prototype.label_p81yox$ = function (value) {
    this.label = RadioComponent$label$lambda_0(value);
  };
  RadioComponent.prototype.label_wqyjv5$ = function (value) {
    this.label = value;
  };
  RadioComponent.prototype.labelStyle_iitghj$ = function (value) {
    this.labelStyle = value();
  };
  RadioComponent.prototype.selectedStyle_iitghj$ = function (value) {
    this.selectedStyle = value();
  };
  RadioComponent.prototype.events_gknsc3$ = function (value) {
    this.events = value;
  };
  RadioComponent.prototype.selected_czwcei$ = function (value) {
    this.selected = value();
  };
  RadioComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  RadioComponent.prototype.groupName_h4ejuu$ = function (value) {
    this.groupName = flowOf(value());
  };
  RadioComponent.prototype.groupName_678k1p$ = function (value) {
    this.groupName = value();
  };
  function RadioComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().radio.sizes.normal;
  }
  function RadioComponent$labelStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.label);
    return Unit;
  }
  function RadioComponent$selectedStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.selected);
    return Unit;
  }
  RadioComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioComponent',
    interfaces: []
  };
  function radio$lambda($receiver) {
    return Unit;
  }
  function radio$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$radio$lambda(closure$alternativeGroupname_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$alternativeGroupname = closure$alternativeGroupname_0;
    this.local$it = it_0;
  }
  Coroutine$radio$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$radio$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$radio$lambda.prototype.constructor = Coroutine$radio$lambda;
  Coroutine$radio$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.length === 0) {
              return this.local$closure$alternativeGroupname != null ? this.local$closure$alternativeGroupname : '';
            } else {
              return this.local$it;
            }

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
  function radio$lambda_1(closure$alternativeGroupname_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$radio$lambda(closure$alternativeGroupname_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function radio$lambda_2(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().radio.sizes));
      return Unit;
    };
  }
  function radio$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.selectedStyle);
      return Unit;
    };
  }
  function radio$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.input);
      $receiver.children_qlrppv$('&[checked] + div', radio$lambda$lambda$lambda(closure$component));
      return Unit;
    };
  }
  function radio$lambda$lambda_0(closure$inputName, closure$component) {
    return function ($receiver) {
      var tmp$;
      $receiver.type_61zpoe$('radio');
      $receiver.name_p81yox$(closure$inputName);
      $receiver.checked_f1igrw$(closure$component.selected);
      $receiver.disabled_f1igrw$(closure$component.disabled);
      $receiver.value_61zpoe$('X');
      (tmp$ = closure$component.events) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function radio$lambda$lambda_1(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.default);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function radio$lambda$lambda_2($receiver) {
    return Unit;
  }
  function radio$lambda$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.labelStyle);
      return Unit;
    };
  }
  function radio$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      closure$it($receiver);
      return Unit;
    };
  }
  function radio$lambda_3(closure$inputId, closure$prefix, closure$component, closure$inputName, closure$styling) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (closure$inputId != null) {
        $receiver.for_61zpoe$(closure$inputId);
      }tmp$_1 = getCallableRef('input', function ($receiver, p1, p2, p3) {
        return $receiver.input_1ect6g$(p1, p2, p3);
      }.bind(null, $receiver));
      tmp$ = RadioComponent$Companion_getInstance().radioInputStaticCss;
      tmp$_0 = radio$lambda$lambda(closure$component);
      styled_0(tmp$_1, tmp$, closure$inputId, closure$prefix, tmp$_0)($receiver, radio$lambda$lambda_0(closure$inputName, closure$component));
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, void 0, radio$lambda$lambda_1(closure$styling))($receiver, radio$lambda$lambda_2);
      if ((tmp$_2 = closure$component.label) != null) {
        var closure$component_0 = closure$component;
        styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
          return $receiver.div_hhcm6n$(p1, p2, p3);
        }.bind(null, $receiver)), void 0, void 0, void 0, radio$lambda$lambda$lambda_0(closure$component_0))($receiver, radio$lambda$lambda$lambda_1(tmp$_2));
      }return Unit;
    };
  }
  function radio($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = radio$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'radioComponent';
    if (build === void 0)
      build = radio$lambda_0;
    var $receiver_0 = new RadioComponent();
    build($receiver_0);
    var component = $receiver_0;
    var inputId = id != null ? id + '-input' : null;
    var alternativeGroupname = id != null ? id + '-groupName' : null;
    var $receiver_1 = component.groupName;
    var inputName = new unsafeFlow$ObjectLiteral_6(unsafeTransform$lambda_6(map$lambda_6(radio$lambda_1(alternativeGroupname)), $receiver_1));
    return styled_0(getCallableRef('label', function ($receiver, p1, p2, p3) {
      return $receiver.label_6gkvle$(p1, p2, p3);
    }.bind(null, $receiver)), baseClass, id, prefix, radio$lambda_2(component))($receiver, radio$lambda_3(inputId, prefix, component, inputName, styling));
  }
  function unsafeFlow$ObjectLiteral_7(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$_7($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$_7.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$_7.prototype.constructor = Coroutine$collect_42ocv1$_7;
  Coroutine$collect_42ocv1$_7.prototype.doResume = function () {
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
  unsafeFlow$ObjectLiteral_7.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$_7(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda_7(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda_7.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda_7.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda_7;
  Coroutine$unsafeTransform$lambda$lambda_7.prototype.doResume = function () {
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
  function unsafeTransform$lambda$lambda_7(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda_7(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var unsafeTransform$lambda_7 = wrapFunction(function () {
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
              this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new collect$ObjectLiteral(unsafeTransform$lambda$lambda_7(this.local$closure$transform, this.local$$receiver)), this);
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
  function Coroutine$map$lambda_7(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda_7.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda_7.prototype.constructor = Coroutine$map$lambda_7;
  Coroutine$map$lambda_7.prototype.doResume = function () {
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
  function map$lambda_7(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda_7(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function RadioGroupComponent() {
    RadioGroupComponent$Companion_getInstance();
    this.items = flowOf(emptyList());
    this.icon = Theme.Companion.invoke().icons.check;
    this.label = RadioGroupComponent$label$lambda;
    this.disabled = flowOf(false);
    this.direction = RadioGroupComponent$Companion$RadioGroupLayouts_getInstance().column;
    this.size = RadioGroupComponent$size$lambda;
    this.itemStyle = RadioGroupComponent$itemStyle$lambda;
    this.labelStyle = RadioGroupComponent$labelStyle$lambda;
    this.selectedStyle = RadioGroupComponent$selectedStyle$lambda;
  }
  function RadioGroupComponent$Companion() {
    RadioGroupComponent$Companion_instance = this;
  }
  function RadioGroupComponent$Companion$RadioGroupLayouts() {
    RadioGroupComponent$Companion$RadioGroupLayouts_instance = this;
    this.column = RadioGroupComponent$Companion$RadioGroupLayouts$column$lambda;
    this.row = RadioGroupComponent$Companion$RadioGroupLayouts$row$lambda;
  }
  function RadioGroupComponent$Companion$RadioGroupLayouts$column$lambda$lambda($receiver) {
    return $receiver.inlineGrid;
  }
  function RadioGroupComponent$Companion$RadioGroupLayouts$column$lambda($receiver) {
    $receiver.display_1gh9wc$(RadioGroupComponent$Companion$RadioGroupLayouts$column$lambda$lambda);
    return Unit;
  }
  function RadioGroupComponent$Companion$RadioGroupLayouts$row$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function RadioGroupComponent$Companion$RadioGroupLayouts$row$lambda($receiver) {
    $receiver.display_1gh9wc$(RadioGroupComponent$Companion$RadioGroupLayouts$row$lambda$lambda);
    return Unit;
  }
  RadioGroupComponent$Companion$RadioGroupLayouts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RadioGroupLayouts',
    interfaces: []
  };
  var RadioGroupComponent$Companion$RadioGroupLayouts_instance = null;
  function RadioGroupComponent$Companion$RadioGroupLayouts_getInstance() {
    if (RadioGroupComponent$Companion$RadioGroupLayouts_instance === null) {
      new RadioGroupComponent$Companion$RadioGroupLayouts();
    }return RadioGroupComponent$Companion$RadioGroupLayouts_instance;
  }
  RadioGroupComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RadioGroupComponent$Companion_instance = null;
  function RadioGroupComponent$Companion_getInstance() {
    if (RadioGroupComponent$Companion_instance === null) {
      new RadioGroupComponent$Companion();
    }return RadioGroupComponent$Companion_instance;
  }
  RadioGroupComponent.prototype.items_4ezy5m$ = function (value) {
    this.items = flowOf(value);
  };
  RadioGroupComponent.prototype.items_cwwwb5$ = function (value) {
    this.items = value();
  };
  RadioGroupComponent.prototype.icon_e5jlz5$ = function (value) {
    this.icon = value();
  };
  RadioGroupComponent.prototype.label_h4pl6f$ = function (value) {
    this.label = value;
  };
  RadioGroupComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  RadioGroupComponent.prototype.disabled_6taknv$ = function (value) {
    this.disabled = flowOf(value);
  };
  RadioGroupComponent.prototype.direction_kdwvq3$ = function (value) {
    this.direction = value(RadioGroupComponent$Companion$RadioGroupLayouts_getInstance());
  };
  RadioGroupComponent.prototype.size_nf2201$ = function (value) {
    this.size = value;
  };
  RadioGroupComponent.prototype.itemStyle_iitghj$ = function (value) {
    this.itemStyle = value();
  };
  RadioGroupComponent.prototype.labelStyle_iitghj$ = function (value) {
    this.labelStyle = value();
  };
  RadioGroupComponent.prototype.selectedStyle_iitghj$ = function (value) {
    this.selectedStyle = value();
  };
  function RadioGroupComponent$label$lambda(it) {
    return toString(it);
  }
  function RadioGroupComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().radio.sizes.normal;
  }
  function RadioGroupComponent$itemStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.default);
    return Unit;
  }
  function RadioGroupComponent$labelStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.label);
    return Unit;
  }
  function RadioGroupComponent$selectedStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().radio.selected);
    return Unit;
  }
  RadioGroupComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioGroupComponent',
    interfaces: []
  };
  function radioGroup$lambda($receiver) {
    return Unit;
  }
  function radioGroup$lambda_0($receiver) {
    return Unit;
  }
  function radioGroup$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.direction);
      return Unit;
    };
  }
  function Coroutine$radioGroup$lambda$lambda$lambda(closure$item_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$it = it_0;
  }
  Coroutine$radioGroup$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$radioGroup$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$radioGroup$lambda$lambda$lambda.prototype.constructor = Coroutine$radioGroup$lambda$lambda$lambda;
  Coroutine$radioGroup$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return equals(this.local$it, this.local$closure$item);
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
  function radioGroup$lambda$lambda$lambda(closure$item_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$radioGroup$lambda$lambda$lambda(closure$item_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      return closure$component.size(Theme.Companion.invoke().radio.sizes);
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda_0(closure$component) {
    return function () {
      return closure$component.labelStyle;
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda_1(closure$component) {
    return function () {
      return closure$component.selectedStyle;
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda_2(closure$checkedFlow) {
    return function () {
      return closure$checkedFlow;
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda_3(closure$component) {
    return function () {
      return closure$component.disabled;
    };
  }
  function Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
  }
  Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda;
  Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$item;
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
  function radioGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$radioGroup$lambda$lambda$lambda$lambda$lambda(closure$item_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function radioGroup$lambda$lambda$lambda$lambda_4(closure$item, closure$store, this$) {
    return function ($receiver) {
      var tmp$ = this$;
      var $receiver_0 = states($receiver.changes);
      tmp$.handledBy_ytah3h$(new unsafeFlow$ObjectLiteral_7(unsafeTransform$lambda_7(map$lambda_7(radioGroup$lambda$lambda$lambda$lambda$lambda(closure$item)), $receiver_0)), closure$store.update);
      return Unit;
    };
  }
  function radioGroup$lambda$lambda$lambda_0(closure$component, closure$item, closure$checkedFlow, closure$store, this$) {
    return function ($receiver) {
      $receiver.size_nf2201$(radioGroup$lambda$lambda$lambda$lambda(closure$component));
      $receiver.labelStyle_iitghj$(radioGroup$lambda$lambda$lambda$lambda_0(closure$component));
      $receiver.selectedStyle_iitghj$(radioGroup$lambda$lambda$lambda$lambda_1(closure$component));
      $receiver.label_61zpoe$(closure$component.label(closure$item));
      $receiver.selected_czwcei$(radioGroup$lambda$lambda$lambda$lambda_2(closure$checkedFlow));
      $receiver.disabled_czwcei$(radioGroup$lambda$lambda$lambda$lambda_3(closure$component));
      $receiver.events_gknsc3$(radioGroup$lambda$lambda$lambda$lambda_4(closure$item, closure$store, this$));
      return Unit;
    };
  }
  function radioGroup$lambda$lambda(closure$store, closure$component, closure$grpId) {
    return function ($receiver, item) {
      var $receiver_0 = closure$store.data;
      var checkedFlow = distinctUntilChanged(new unsafeFlow$ObjectLiteral_7(unsafeTransform$lambda_7(map$lambda_7(radioGroup$lambda$lambda$lambda(item)), $receiver_0)));
      return radio($receiver, closure$component.itemStyle, void 0, closure$grpId + '-grp-item-' + uniqueId(), void 0, radioGroup$lambda$lambda$lambda_0(closure$component, item, checkedFlow, closure$store, $receiver));
    };
  }
  function radioGroup$lambda_2(closure$component, closure$store, closure$grpId) {
    return function ($receiver) {
      $receiver.renderEach_am7osu$(closure$component.items, radioGroup$lambda$lambda(closure$store, closure$component, closure$grpId));
      return Unit;
    };
  }
  function radioGroup($receiver, styling, store, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = radioGroup$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'radioGroupComponent';
    if (build === void 0)
      build = radioGroup$lambda_0;
    var $receiver_0 = new RadioGroupComponent();
    build($receiver_0);
    var component = $receiver_0;
    var grpId = id != null ? id : uniqueId();
    styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
      return $receiver.div_hhcm6n$(p1, p2, p3);
    }.bind(null, $receiver)), styling, baseClass, id, prefix, radioGroup$lambda_1(component))($receiver, radioGroup$lambda_2(component, store, grpId));
  }
  function SpinnerComponent() {
    SpinnerComponent$Companion_getInstance();
    this.icon = null;
    this.speed = '0.6s';
    this.size = Theme.Companion.invoke().borderWidths.normal;
  }
  function SpinnerComponent$Companion() {
    SpinnerComponent$Companion_instance = this;
    this.staticCss = staticStyle('spinner', ' \n            display: inline-block;\n            border-color: currentColor;\n            border-style: solid;\n            border-radius: 99999px;\n            border-bottom-color: transparent;\n            border-left-color: transparent;\n            color: currentColor;\n            \n            @keyframes loading {\n              to {transform: rotate(360deg);}\n            }            \n        ');
  }
  SpinnerComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpinnerComponent$Companion_instance = null;
  function SpinnerComponent$Companion_getInstance() {
    if (SpinnerComponent$Companion_instance === null) {
      new SpinnerComponent$Companion();
    }return SpinnerComponent$Companion_instance;
  }
  SpinnerComponent.prototype.icon_q0wvou$ = function (value) {
    this.icon = value(Theme.Companion.invoke().icons);
  };
  SpinnerComponent.prototype.speed_h4ejuu$ = function (value) {
    this.speed = value();
  };
  SpinnerComponent.prototype.size_qwzhsr$ = function (value) {
    this.size = value(Theme.Companion.invoke().borderWidths);
  };
  SpinnerComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpinnerComponent',
    interfaces: []
  };
  function spinner$lambda($receiver) {
    return Unit;
  }
  function spinner$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      return closure$component.size;
    };
  }
  function spinner$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.width_qwzhsr$(spinner$lambda$lambda$lambda(closure$component));
      return Unit;
    };
  }
  function spinner$lambda$lambda_0($receiver) {
    return '1rem';
  }
  function spinner$lambda$lambda_1($receiver) {
    return '1rem';
  }
  function spinner$lambda_0(closure$component) {
    return function ($receiver) {
      $receiver.css_61zpoe$('animation: loading ' + closure$component.speed + ' linear infinite;');
      $receiver.border_4a22k0$(spinner$lambda$lambda(closure$component));
      $receiver.width_wpghq5$(spinner$lambda$lambda_0);
      $receiver.height_wpghq5$(spinner$lambda$lambda_1);
      return Unit;
    };
  }
  function spinner$lambda_1($receiver) {
    return Unit;
  }
  function spinner$lambda_2(closure$component, closure$styling) {
    return function ($receiver) {
      $receiver.css_61zpoe$(trimIndent('\n' + '                @keyframes spinner {' + '\n' + '                  to {transform: rotate(360deg);}' + '\n' + '                }    ' + '\n' + '                animation: spinner ' + closure$component.speed + ' linear infinite;' + '\n' + '            '));
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function spinner$lambda_3(closure$component) {
    return function ($receiver) {
      $receiver.def = closure$component.icon;
      return Unit;
    };
  }
  function spinner($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = spinner$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'spinner';
    var $receiver_0 = new SpinnerComponent();
    build($receiver_0);
    var component = $receiver_0;
    if (component.icon == null) {
      styled(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), styling, StyleClass.Companion.plus_ilq45s$(baseClass, SpinnerComponent$Companion_getInstance().staticCss), id, prefix, spinner$lambda_0(component))($receiver, spinner$lambda_1);
    } else {
      icon($receiver, spinner$lambda_2(component, styling), baseClass, id, prefix, spinner$lambda_3(component));
    }
  }
  function StackComponent() {
    StackComponent$Companion_getInstance();
    this.reverse = false;
    this.spacing = StackComponent$spacing$lambda;
    this.items = null;
  }
  function StackComponent$Companion() {
    StackComponent$Companion_instance = this;
    this.staticCss = staticStyle('stack', 'align-items: flex-start;');
  }
  StackComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StackComponent$Companion_instance = null;
  function StackComponent$Companion_getInstance() {
    if (StackComponent$Companion_instance === null) {
      new StackComponent$Companion();
    }return StackComponent$Companion_instance;
  }
  StackComponent.prototype.reverse_u332lz$ = function (value) {
    this.reverse = value();
  };
  StackComponent.prototype.spacing_bcpvvc$ = function (value) {
    this.spacing = value;
  };
  StackComponent.prototype.items_9c978p$ = function (value) {
    this.items = value;
  };
  function StackComponent$spacing$lambda($receiver) {
    return $receiver.normal;
  }
  StackComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackComponent',
    interfaces: []
  };
  function StackUpComponent() {
    StackComponent.call(this);
    this.stackStyles_s6uagi$_0 = StackUpComponent$stackStyles$lambda(this);
  }
  Object.defineProperty(StackUpComponent.prototype, 'stackStyles', {
    configurable: true,
    get: function () {
      return this.stackStyles_s6uagi$_0;
    }
  });
  function StackUpComponent$stackStyles$lambda$lambda($receiver) {
    return $receiver.columnReverse;
  }
  function StackUpComponent$stackStyles$lambda$lambda$lambda(this$StackUpComponent) {
    return function ($receiver) {
      $receiver.bottom_bcpvvc$(this$StackUpComponent.spacing);
      return Unit;
    };
  }
  function StackUpComponent$stackStyles$lambda$lambda_0(this$StackUpComponent) {
    return function ($receiver) {
      $receiver.margins_ptb4s1$(StackUpComponent$stackStyles$lambda$lambda$lambda(this$StackUpComponent));
      return Unit;
    };
  }
  function StackUpComponent$stackStyles$lambda$lambda_1($receiver) {
    return $receiver.column;
  }
  function StackUpComponent$stackStyles$lambda$lambda$lambda_0(this$StackUpComponent) {
    return function ($receiver) {
      $receiver.top_bcpvvc$(this$StackUpComponent.spacing);
      return Unit;
    };
  }
  function StackUpComponent$stackStyles$lambda$lambda_2(this$StackUpComponent) {
    return function ($receiver) {
      $receiver.margins_ptb4s1$(StackUpComponent$stackStyles$lambda$lambda$lambda_0(this$StackUpComponent));
      return Unit;
    };
  }
  function StackUpComponent$stackStyles$lambda(this$StackUpComponent) {
    return function ($receiver) {
      if (this$StackUpComponent.reverse) {
        $receiver.direction_la6ffj$(StackUpComponent$stackStyles$lambda$lambda);
        $receiver.children_qlrppv$(' > :not(:first-child)', StackUpComponent$stackStyles$lambda$lambda_0(this$StackUpComponent));
      } else {
        $receiver.direction_la6ffj$(StackUpComponent$stackStyles$lambda$lambda_1);
        $receiver.children_qlrppv$(' > :not(:first-child)', StackUpComponent$stackStyles$lambda$lambda_2(this$StackUpComponent));
      }
      return Unit;
    };
  }
  StackUpComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackUpComponent',
    interfaces: [StackComponent]
  };
  function stackUp$lambda($receiver) {
    return Unit;
  }
  function stackUp$lambda_0($receiver) {
    return Unit;
  }
  function stackUp$lambda_1(closure$component, closure$styling) {
    return function ($receiver) {
      $receiver.invoke_5yoziz$(closure$component.stackStyles);
      $receiver.invoke_5yoziz$(closure$styling);
      return Unit;
    };
  }
  function stackUp$lambda_2(closure$component) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$component.items) != null) {
        tmp$($receiver);
      }return Unit;
    };
  }
  function stackUp($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = stackUp$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'stack-up';
    if (build === void 0)
      build = stackUp$lambda_0;
    var $receiver_0 = new StackUpComponent();
    build($receiver_0);
    var component = $receiver_0;
    return flexBox($receiver, stackUp$lambda_1(component, styling), StyleClass.Companion.plus_ilq45s$(baseClass, StackComponent$Companion_getInstance().staticCss), id, prefix, stackUp$lambda_2(component));
  }
  function LineUpComponent() {
    StackComponent.call(this);
    this.stackStyles_chw0zi$_0 = LineUpComponent$stackStyles$lambda(this);
  }
  Object.defineProperty(LineUpComponent.prototype, 'stackStyles', {
    configurable: true,
    get: function () {
      return this.stackStyles_chw0zi$_0;
    }
  });
  function LineUpComponent$stackStyles$lambda$lambda($receiver) {
    return $receiver.rowReverse;
  }
  function LineUpComponent$stackStyles$lambda$lambda$lambda(this$LineUpComponent) {
    return function ($receiver) {
      $receiver.right_bcpvvc$(this$LineUpComponent.spacing);
      return Unit;
    };
  }
  function LineUpComponent$stackStyles$lambda$lambda_0(this$LineUpComponent) {
    return function ($receiver) {
      $receiver.margins_ptb4s1$(LineUpComponent$stackStyles$lambda$lambda$lambda(this$LineUpComponent));
      return Unit;
    };
  }
  function LineUpComponent$stackStyles$lambda$lambda_1($receiver) {
    return $receiver.row;
  }
  function LineUpComponent$stackStyles$lambda$lambda$lambda_0(this$LineUpComponent) {
    return function ($receiver) {
      $receiver.left_bcpvvc$(this$LineUpComponent.spacing);
      return Unit;
    };
  }
  function LineUpComponent$stackStyles$lambda$lambda_2(this$LineUpComponent) {
    return function ($receiver) {
      $receiver.margins_ptb4s1$(LineUpComponent$stackStyles$lambda$lambda$lambda_0(this$LineUpComponent));
      return Unit;
    };
  }
  function LineUpComponent$stackStyles$lambda(this$LineUpComponent) {
    return function ($receiver) {
      if (this$LineUpComponent.reverse) {
        $receiver.direction_la6ffj$(LineUpComponent$stackStyles$lambda$lambda);
        $receiver.children_qlrppv$(' > :not(:first-child)', LineUpComponent$stackStyles$lambda$lambda_0(this$LineUpComponent));
      } else {
        $receiver.direction_la6ffj$(LineUpComponent$stackStyles$lambda$lambda_1);
        $receiver.children_qlrppv$(' > :not(:first-child)', LineUpComponent$stackStyles$lambda$lambda_2(this$LineUpComponent));
      }
      return Unit;
    };
  }
  LineUpComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineUpComponent',
    interfaces: [StackComponent]
  };
  function lineUp$lambda($receiver) {
    return Unit;
  }
  function lineUp$lambda_0($receiver) {
    return Unit;
  }
  function lineUp$lambda_1(closure$component, closure$styling) {
    return function ($receiver) {
      $receiver.invoke_5yoziz$(closure$component.stackStyles);
      $receiver.invoke_5yoziz$(closure$styling);
      return Unit;
    };
  }
  function lineUp$lambda_2(closure$component) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$component.items) != null) {
        tmp$($receiver);
      }return Unit;
    };
  }
  function lineUp($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = lineUp$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'line-up';
    if (build === void 0)
      build = lineUp$lambda_0;
    var $receiver_0 = new LineUpComponent();
    build($receiver_0);
    var component = $receiver_0;
    return flexBox($receiver, lineUp$lambda_1(component, styling), StyleClass.Companion.plus_ilq45s$(baseClass, StackComponent$Companion_getInstance().staticCss), id, prefix, lineUp$lambda_2(component));
  }
  function SwitchComponent() {
    SwitchComponent$Companion_getInstance();
    this.size = SwitchComponent$size$lambda;
    this.label = null;
    this.labelStyle = SwitchComponent$labelStyle$lambda;
    this.dotStyle = SwitchComponent$dotStyle$lambda;
    this.checkedStyle = SwitchComponent$checkedStyle$lambda;
    this.events = null;
    this.checked = flowOf(false);
    this.disabled = flowOf(false);
  }
  function SwitchComponent$Companion() {
    SwitchComponent$Companion_instance = this;
    this.switchInputStaticCss = staticStyle('switch', '\n            position: absolute;\n            height: 1px;                \n            width: 1px;                \n            overflow: hidden;\n            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n            clip: rect(1px, 1px, 1px, 1px);\n            outline: none;           \n            &:focus{\n                outline: none;\n            }           \n            ');
  }
  SwitchComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwitchComponent$Companion_instance = null;
  function SwitchComponent$Companion_getInstance() {
    if (SwitchComponent$Companion_instance === null) {
      new SwitchComponent$Companion();
    }return SwitchComponent$Companion_instance;
  }
  SwitchComponent.prototype.size_yweyqc$ = function (value) {
    this.size = value;
  };
  function SwitchComponent$label$lambda(closure$value) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$value);
      return Unit;
    };
  }
  SwitchComponent.prototype.label_61zpoe$ = function (value) {
    this.label = SwitchComponent$label$lambda(value);
  };
  function SwitchComponent$label$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.asText_lg9ri$(closure$value);
      return Unit;
    };
  }
  SwitchComponent.prototype.label_p81yox$ = function (value) {
    this.label = SwitchComponent$label$lambda_0(value);
  };
  SwitchComponent.prototype.label_wqyjv5$ = function (value) {
    this.label = value;
  };
  SwitchComponent.prototype.labelStyle_iitghj$ = function (value) {
    this.labelStyle = value();
  };
  SwitchComponent.prototype.dotStyle_iitghj$ = function (value) {
    this.dotStyle = value();
  };
  SwitchComponent.prototype.checkedStyle_iitghj$ = function (value) {
    this.checkedStyle = value();
  };
  SwitchComponent.prototype.events_gknsc3$ = function (value) {
    this.events = value;
  };
  SwitchComponent.prototype.checked_czwcei$ = function (value) {
    this.checked = value();
  };
  SwitchComponent.prototype.disabled_czwcei$ = function (value) {
    this.disabled = value();
  };
  function SwitchComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().switch.sizes.normal;
  }
  function SwitchComponent$labelStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().switch.label);
    return Unit;
  }
  function SwitchComponent$dotStyle$lambda($receiver) {
    return Unit;
  }
  function SwitchComponent$checkedStyle$lambda($receiver) {
    $receiver.invoke_qkhqzy$(Theme.Companion.invoke().switch.checked);
    return Unit;
  }
  SwitchComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwitchComponent',
    interfaces: []
  };
  function switch$lambda($receiver) {
    return Unit;
  }
  function switch$lambda_0($receiver) {
    return Unit;
  }
  function switch$lambda_1(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().switch.sizes));
      return Unit;
    };
  }
  function switch$lambda$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.checkedStyle);
      return Unit;
    };
  }
  function switch$lambda$lambda(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().switch.input);
      $receiver.children_qlrppv$('&[checked] + div', switch$lambda$lambda$lambda(closure$component));
      return Unit;
    };
  }
  function switch$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      var tmp$;
      $receiver.type_61zpoe$('checkbox');
      $receiver.checked_f1igrw$(closure$component.checked);
      $receiver.disabled_f1igrw$(closure$component.disabled);
      (tmp$ = closure$component.events) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function switch$lambda$lambda_1(closure$styling) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().switch.default);
      $receiver.invoke_qkhqzy$(closure$styling);
      return Unit;
    };
  }
  function switch$lambda$lambda$lambda_0(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(Theme.Companion.invoke().switch.dot);
      $receiver.invoke_qkhqzy$(closure$component.dotStyle);
      return Unit;
    };
  }
  function switch$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function switch$lambda$lambda_2(closure$component) {
    return function ($receiver) {
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, void 0, switch$lambda$lambda$lambda_0(closure$component))($receiver, switch$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function switch$lambda$lambda$lambda_2(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.labelStyle);
      return Unit;
    };
  }
  function switch$lambda$lambda$lambda_3(closure$it) {
    return function ($receiver) {
      closure$it($receiver);
      return Unit;
    };
  }
  function switch$lambda_2(closure$inputId, closure$prefix, closure$component, closure$styling) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      $receiver.for_61zpoe$(closure$inputId);
      tmp$_1 = getCallableRef('input', function ($receiver, p1, p2, p3) {
        return $receiver.input_1ect6g$(p1, p2, p3);
      }.bind(null, $receiver));
      tmp$ = SwitchComponent$Companion_getInstance().switchInputStaticCss;
      tmp$_0 = switch$lambda$lambda(closure$component);
      styled_0(tmp$_1, tmp$, closure$inputId, closure$prefix, tmp$_0)($receiver, switch$lambda$lambda_0(closure$component));
      styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
        return $receiver.div_hhcm6n$(p1, p2, p3);
      }.bind(null, $receiver)), void 0, void 0, void 0, switch$lambda$lambda_1(closure$styling))($receiver, switch$lambda$lambda_2(closure$component));
      if ((tmp$_2 = closure$component.label) != null) {
        var closure$component_0 = closure$component;
        styled_0(getCallableRef('div', function ($receiver, p1, p2, p3) {
          return $receiver.div_hhcm6n$(p1, p2, p3);
        }.bind(null, $receiver)), void 0, void 0, void 0, switch$lambda$lambda$lambda_2(closure$component_0))($receiver, switch$lambda$lambda$lambda_3(tmp$_2));
      }return Unit;
    };
  }
  function switch_0($receiver, styling, baseClass, id, prefix, build) {
    if (styling === void 0)
      styling = switch$lambda;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'switchComponent';
    if (build === void 0)
      build = switch$lambda_0;
    var $receiver_0 = new SwitchComponent();
    build($receiver_0);
    var component = $receiver_0;
    var inputId = (id != null ? id : uniqueId()) + '-input';
    return styled_0(getCallableRef('label', function ($receiver, p1, p2, p3) {
      return $receiver.label_6gkvle$(p1, p2, p3);
    }.bind(null, $receiver)), baseClass, id, prefix, switch$lambda_1(component))($receiver, switch$lambda_2(inputId, prefix, component, styling));
  }
  function switch$lambda_3($receiver) {
    return Unit;
  }
  function switch$lambda_4($receiver) {
    return Unit;
  }
  function switch$lambda$lambda_3(closure$store) {
    return function () {
      return closure$store.data;
    };
  }
  function switch$lambda$lambda_4(this$, closure$store, this$switch) {
    return function ($receiver) {
      this$switch.handledBy_ytah3h$(this$.checked, closure$store.update);
      return Unit;
    };
  }
  function switch$lambda_5(closure$store, this$switch, closure$build) {
    return function ($receiver) {
      $receiver.checked_czwcei$(switch$lambda$lambda_3(closure$store));
      $receiver.events_gknsc3$(switch$lambda$lambda_4($receiver, closure$store, this$switch));
      closure$build($receiver);
      return Unit;
    };
  }
  function switch_1($receiver, styling, store, baseClass, prefix, build) {
    if (styling === void 0)
      styling = switch$lambda_3;
    if (baseClass === void 0)
      baseClass = null;
    if (prefix === void 0)
      prefix = 'switchComponent';
    if (build === void 0)
      build = switch$lambda_4;
    switch_0($receiver, styling, baseClass, store.id, prefix, switch$lambda_5(store, $receiver, build));
  }
  function TextAreaComponent() {
    TextAreaComponent$Companion_getInstance();
    this.basicInputStyles = TextAreaComponent$basicInputStyles$lambda;
    this.value = null;
    this.placeholder = null;
    this.disable = flowOf(false);
    this.size = TextAreaComponent$size$lambda;
    this.resizeBehavior = TextAreaComponent$resizeBehavior$lambda;
    this.base = null;
  }
  function TextAreaComponent$Companion() {
    TextAreaComponent$Companion_instance = this;
    this.staticCss = staticStyle('textAreaContainer', '\n                \n                outline: 0px;\n                position: relative;\n                appearance: none;\n                transition: all 0.2s ease 0s;\n                min-height: 80px;\n                \n                ');
  }
  TextAreaComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextAreaComponent$Companion_instance = null;
  function TextAreaComponent$Companion_getInstance() {
    if (TextAreaComponent$Companion_instance === null) {
      new TextAreaComponent$Companion();
    }return TextAreaComponent$Companion_instance;
  }
  TextAreaComponent.prototype.value_678k1p$ = function (value) {
    this.value = value();
  };
  TextAreaComponent.prototype.placeholder_61zpoe$ = function (value) {
    this.placeholder = flowOf(value);
  };
  TextAreaComponent.prototype.placeholder_p81yox$ = function (value) {
    this.placeholder = value;
  };
  TextAreaComponent.prototype.placeholder_678k1p$ = function (value) {
    this.placeholder = value();
  };
  TextAreaComponent.prototype.disable_6taknv$ = function (value) {
    this.disable = flowOf(value);
  };
  TextAreaComponent.prototype.disable_433wua$ = function (value) {
    this.disable = value;
  };
  TextAreaComponent.prototype.disable_czwcei$ = function (value) {
    this.disable = value();
  };
  TextAreaComponent.prototype.size_gbtol7$ = function (value) {
    this.size = value;
  };
  TextAreaComponent.prototype.resizeBehavior_t0o0lk$ = function (value) {
    this.resizeBehavior = value;
  };
  TextAreaComponent.prototype.base_z8vjkk$ = function (value) {
    this.base = value;
  };
  function TextAreaComponent$basicInputStyles$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda($receiver) {
    return $receiver.thin;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_1($receiver) {
    return $receiver.light;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda_1($receiver) {
    $receiver.width_qwzhsr$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda);
    $receiver.style_hw5xj$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_1);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_2($receiver) {
    return 'white';
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda_2($receiver) {
    $receiver.color_jl9ed9$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_2);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.disabled;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_3($receiver) {
    $receiver.color_jl9ed9$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda_3($receiver) {
    $receiver.background_f5fcq6$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_3);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda$lambda_0($receiver) {
    return '#3182ce';
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_4($receiver) {
    $receiver.color_jl9ed9$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda$lambda_5($receiver) {
    return $receiver.outline;
  }
  function TextAreaComponent$basicInputStyles$lambda$lambda_4($receiver) {
    $receiver.border_4a22k0$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_4);
    $receiver.boxShadow_ihm9h8$(TextAreaComponent$basicInputStyles$lambda$lambda$lambda_5);
    return Unit;
  }
  function TextAreaComponent$basicInputStyles$lambda($receiver) {
    $receiver.radius_bcpvvc$(TextAreaComponent$basicInputStyles$lambda$lambda);
    $receiver.fontWeight_wyjwgc$(TextAreaComponent$basicInputStyles$lambda$lambda_0);
    $receiver.border_4a22k0$(TextAreaComponent$basicInputStyles$lambda$lambda_1);
    $receiver.background_f5fcq6$(TextAreaComponent$basicInputStyles$lambda$lambda_2);
    $receiver.disabled_xighi7$(TextAreaComponent$basicInputStyles$lambda$lambda_3);
    $receiver.focus_xighi7$(TextAreaComponent$basicInputStyles$lambda$lambda_4);
    return Unit;
  }
  function TextAreaComponent$size$lambda($receiver) {
    return Theme.Companion.invoke().textarea.size.normal;
  }
  function TextAreaComponent$resizeBehavior$lambda($receiver) {
    return Theme.Companion.invoke().textarea.resize.vertical;
  }
  TextAreaComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextAreaComponent',
    interfaces: []
  };
  function textArea$lambda($receiver) {
    return Unit;
  }
  function textArea$lambda_0(closure$component) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(closure$component.resizeBehavior(Theme.Companion.invoke().textarea.resize));
      $receiver.invoke_qkhqzy$(closure$component.size(Theme.Companion.invoke().textarea.size));
      $receiver.invoke_qkhqzy$(closure$component.basicInputStyles);
      return Unit;
    };
  }
  function textArea$lambda_1(closure$component, closure$store) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      $receiver.placeholder_p81yox$((tmp$ = closure$component.placeholder) != null ? tmp$ : emptyFlow());
      $receiver.disabled_f1igrw$(closure$component.disable);
      $receiver.value_p81yox$((tmp$_0 = closure$component.value) != null ? tmp$_0 : emptyFlow());
      (tmp$_1 = closure$component.base) != null ? tmp$_1($receiver) : null;
      if (closure$store != null) {
        var it = closure$store;
        $receiver.value_p81yox$(it.data);
        $receiver.handledBy_ytah3h$(values_0($receiver.changes), it.update);
      }return Unit;
    };
  }
  function textArea($receiver, styling, store, baseClass, id, prefix, init) {
    if (styling === void 0)
      styling = textArea$lambda;
    if (store === void 0)
      store = null;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'textArea';
    var $receiver_0 = new TextAreaComponent();
    init($receiver_0);
    var component = $receiver_0;
    styled(getCallableRef('textarea', function ($receiver, p1, p2, p3) {
      return $receiver.textarea_kixj78$(p1, p2, p3);
    }.bind(null, $receiver)), styling, StyleClass.Companion.plus_ilq45s$(baseClass, TextAreaComponent$Companion_getInstance().staticCss), id, prefix, textArea$lambda_0(component))($receiver, textArea$lambda_1(component, store));
  }
  function tooltip($receiver, text) {
    return Theme.Companion.invoke().tooltip.write_vqirvp$(text.slice());
  }
  function tooltip_0($receiver, text, tooltipPlacement) {
    return Theme.Companion.invoke().tooltip.write_39nqze$(text.slice(), tooltipPlacement);
  }
  var package$dev = _.dev || (_.dev = {});
  var package$fritz2 = package$dev.fritz2 || (package$dev.fritz2 = {});
  var package$components = package$fritz2.components || (package$fritz2.components = {});
  package$components.box_ytyz2t$ = box;
  package$components.flexBox_ytyz2t$ = flexBox;
  package$components.gridBox_q3g1i6$ = gridBox;
  Object.defineProperty(PushButtonComponent, 'Companion', {
    get: PushButtonComponent$Companion_getInstance
  });
  $$importsForInline$$['fritz2-styling'] = $module$fritz2_styling;
  package$components.PushButtonComponent = PushButtonComponent;
  package$components.pushButton_mjymsj$ = pushButton;
  package$components.clickButton_mjymsj$ = clickButton;
  Object.defineProperty(CheckboxComponent, 'Companion', {
    get: CheckboxComponent$Companion_getInstance
  });
  package$components.CheckboxComponent = CheckboxComponent;
  package$components.checkbox_2p3a06$ = checkbox;
  Object.defineProperty(CheckboxGroupComponent$Companion.prototype, 'CheckboxGroupLayouts', {
    get: CheckboxGroupComponent$Companion$CheckboxGroupLayouts_getInstance
  });
  Object.defineProperty(CheckboxGroupComponent, 'Companion', {
    get: CheckboxGroupComponent$Companion_getInstance
  });
  package$components.CheckboxGroupComponent = CheckboxGroupComponent;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$components.checkboxGroup_ptgddy$ = checkboxGroup;
  package$components.ComponentMarker = ComponentMarker;
  Object.defineProperty(FormControlComponent$Companion.prototype, 'ControlNames', {
    get: FormControlComponent$Companion$ControlNames_getInstance
  });
  Object.defineProperty(FormControlComponent, 'Companion', {
    get: FormControlComponent$Companion_getInstance
  });
  FormControlComponent.Control = FormControlComponent$Control;
  package$components.FormControlComponent = FormControlComponent;
  package$components.ControlRenderer = ControlRenderer;
  package$components.SingleControlRenderer = SingleControlRenderer;
  package$components.ControlGroupRenderer = ControlGroupRenderer;
  package$components.formControl_upshgw$ = formControl;
  Object.defineProperty(package$components, 'xmlns', {
    get: function () {
      return xmlns;
    }
  });
  package$components.createIconSvgElement_pdl1vj$ = createIconSvgElement;
  package$components.Svg = Svg;
  package$components.svg_o0dm1m$ = svg;
  Object.defineProperty(IconComponent, 'Companion', {
    get: IconComponent$Companion_getInstance
  });
  package$components.IconComponent = IconComponent;
  package$components.icon_4ymi34$ = icon;
  Object.defineProperty(InputFieldComponent, 'Companion', {
    get: InputFieldComponent$Companion_getInstance
  });
  package$components.InputFieldComponent = InputFieldComponent;
  package$components.inputField_efagcm$ = inputField;
  Object.defineProperty(OverlayMethod, 'CoveringTopMost', {
    get: OverlayMethod$CoveringTopMost_getInstance
  });
  Object.defineProperty(OverlayMethod, 'CoveringEach', {
    get: OverlayMethod$CoveringEach_getInstance
  });
  package$components.OverlayMethod = OverlayMethod;
  package$components.Overlay = Overlay;
  package$components.DefaultOverlay = DefaultOverlay;
  ModalComponent.ModalsStack = ModalComponent$ModalsStack;
  Object.defineProperty(ModalComponent, 'Companion', {
    get: ModalComponent$Companion_getInstance
  });
  $$importsForInline$$['fritz2-core'] = $module$fritz2_core;
  package$components.ModalComponent = ModalComponent;
  package$components.modal_awwolb$ = modal;
  Object.defineProperty(NavbarComponent, 'Companion', {
    get: NavbarComponent$Companion_getInstance
  });
  package$components.NavbarComponent = NavbarComponent;
  package$components.navBar_ocafpi$ = navBar;
  Object.defineProperty(PopoverComponent, 'Companion', {
    get: PopoverComponent$Companion_getInstance
  });
  package$components.PopoverComponent = PopoverComponent;
  package$components.popover_88gu2s$ = popover;
  Object.defineProperty(RadioComponent, 'Companion', {
    get: RadioComponent$Companion_getInstance
  });
  package$components.RadioComponent = RadioComponent;
  package$components.radio_3bojwy$ = radio;
  Object.defineProperty(RadioGroupComponent$Companion.prototype, 'RadioGroupLayouts', {
    get: RadioGroupComponent$Companion$RadioGroupLayouts_getInstance
  });
  Object.defineProperty(RadioGroupComponent, 'Companion', {
    get: RadioGroupComponent$Companion_getInstance
  });
  package$components.RadioGroupComponent = RadioGroupComponent;
  package$components.radioGroup_yrylid$ = radioGroup;
  Object.defineProperty(SpinnerComponent, 'Companion', {
    get: SpinnerComponent$Companion_getInstance
  });
  package$components.SpinnerComponent = SpinnerComponent;
  package$components.spinner_tqpmxc$ = spinner;
  Object.defineProperty(StackComponent, 'Companion', {
    get: StackComponent$Companion_getInstance
  });
  package$components.StackComponent = StackComponent;
  package$components.StackUpComponent = StackUpComponent;
  package$components.stackUp_er9jfz$ = stackUp;
  package$components.LineUpComponent = LineUpComponent;
  package$components.lineUp_8vedbj$ = lineUp;
  Object.defineProperty(SwitchComponent, 'Companion', {
    get: SwitchComponent$Companion_getInstance
  });
  package$components.SwitchComponent = SwitchComponent;
  package$components.switch_jt8mad$ = switch_0;
  package$components.switch_s2e6f3$ = switch_1;
  Object.defineProperty(TextAreaComponent, 'Companion', {
    get: TextAreaComponent$Companion_getInstance
  });
  package$components.TextAreaComponent = TextAreaComponent;
  package$components.textArea_nxdkxo$ = textArea;
  package$components.tooltip_jd85ez$ = tooltip;
  package$components.tooltip_h7un4w$ = tooltip_0;
  SingleControlRenderer.prototype.render_kfyn3r$ = ControlRenderer.prototype.render_kfyn3r$;
  ControlGroupRenderer.prototype.render_kfyn3r$ = ControlRenderer.prototype.render_kfyn3r$;
  xmlns = 'http://www.w3.org/2000/svg';
  Kotlin.defineModule('fritz2-components', _);
  return _;
}));

//# sourceMappingURL=fritz2-components.js.map
