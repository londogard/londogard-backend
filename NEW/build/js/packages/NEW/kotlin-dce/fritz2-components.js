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
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var distinctUntilChanged = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.distinctUntilChanged_x2ftfk$;
  var states = $module$fritz2_core.dev.fritz2.dom.states_8uplq$;
  var wrapFunction = Kotlin.wrapFunction;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var Pair = Kotlin.kotlin.Pair;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
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
  var storeOf = $module$fritz2_core.dev.fritz2.binding.storeOf_le71cu$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var renderElement = $module$fritz2_core.dev.fritz2.dom.html.renderElement_8c4pnr$;
  var Flow_1 = $module$fritz2_core.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.flow.Flow;
  var equals = Kotlin.equals;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var emptyFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.emptyFlow_287e2$;
  Svg.prototype = Object.create(Tag.prototype);
  Svg.prototype.constructor = Svg;
  StackUpComponent.prototype = Object.create(StackComponent.prototype);
  StackUpComponent.prototype.constructor = StackUpComponent;
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
  PushButtonComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
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
  PushButtonComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'PushButtonComponent', interfaces: []};
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
  CheckboxComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
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
  CheckboxComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'CheckboxComponent', interfaces: []};
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
  var CheckboxGroupComponent$Companion$CheckboxGroupLayouts_instance = null;
  var CheckboxGroupComponent$Companion_instance = null;
  var FormControlComponent$Companion$ControlNames_instance = null;
  var FormControlComponent$Companion_instance = null;
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
  Object.defineProperty(Svg.prototype, 'domNode', {get: function () {
    return this.domNode_6fom5q$_0;
  }});
  Svg.$metadata$ = {kind: Kind_CLASS, simpleName: 'Svg', interfaces: [Tag]};
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
  IconComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var IconComponent$Companion_instance = null;
  function IconComponent$Companion_getInstance() {
    if (IconComponent$Companion_instance === null) {
      new IconComponent$Companion();
    }return IconComponent$Companion_instance;
  }
  IconComponent.prototype.fromTheme_q0wvou$ = function (value) {
    this.def = value(Theme.Companion.invoke().icons);
  };
  IconComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'IconComponent', interfaces: []};
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
  InputFieldComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
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
  InputFieldComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'InputFieldComponent', interfaces: []};
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
  var OverlayMethod$CoveringTopMost_instance;
  var OverlayMethod$CoveringEach_instance;
  var ModalComponent$Companion_instance = null;
  var NavbarComponent$Companion_instance = null;
  var PopoverComponent$Companion_instance = null;
  var RadioComponent$Companion_instance = null;
  var RadioGroupComponent$Companion$RadioGroupLayouts_instance = null;
  var RadioGroupComponent$Companion_instance = null;
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
  SpinnerComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
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
  SpinnerComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'SpinnerComponent', interfaces: []};
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
  StackComponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
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
  StackComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'StackComponent', interfaces: []};
  function StackUpComponent() {
    StackComponent.call(this);
    this.stackStyles_s6uagi$_0 = StackUpComponent$stackStyles$lambda(this);
  }
  Object.defineProperty(StackUpComponent.prototype, 'stackStyles', {configurable: true, get: function () {
    return this.stackStyles_s6uagi$_0;
  }});
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
  StackUpComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'StackUpComponent', interfaces: [StackComponent]};
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
  var SwitchComponent$Companion_instance = null;
  var TextAreaComponent$Companion_instance = null;
  var package$dev = _.dev || (_.dev = {});
  var package$fritz2 = package$dev.fritz2 || (package$dev.fritz2 = {});
  var package$components = package$fritz2.components || (package$fritz2.components = {});
  package$components.box_ytyz2t$ = box;
  package$components.flexBox_ytyz2t$ = flexBox;
  Object.defineProperty(PushButtonComponent, 'Companion', {get: PushButtonComponent$Companion_getInstance});
  $$importsForInline$$['fritz2-styling'] = $module$fritz2_styling;
  package$components.PushButtonComponent = PushButtonComponent;
  package$components.pushButton_mjymsj$ = pushButton;
  package$components.clickButton_mjymsj$ = clickButton;
  Object.defineProperty(CheckboxComponent, 'Companion', {get: CheckboxComponent$Companion_getInstance});
  package$components.CheckboxComponent = CheckboxComponent;
  package$components.checkbox_2p3a06$ = checkbox;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$components.createIconSvgElement_pdl1vj$ = createIconSvgElement;
  package$components.Svg = Svg;
  package$components.svg_o0dm1m$ = svg;
  Object.defineProperty(IconComponent, 'Companion', {get: IconComponent$Companion_getInstance});
  package$components.IconComponent = IconComponent;
  package$components.icon_4ymi34$ = icon;
  Object.defineProperty(InputFieldComponent, 'Companion', {get: InputFieldComponent$Companion_getInstance});
  package$components.InputFieldComponent = InputFieldComponent;
  package$components.inputField_efagcm$ = inputField;
  $$importsForInline$$['fritz2-core'] = $module$fritz2_core;
  Object.defineProperty(SpinnerComponent, 'Companion', {get: SpinnerComponent$Companion_getInstance});
  package$components.SpinnerComponent = SpinnerComponent;
  package$components.spinner_tqpmxc$ = spinner;
  Object.defineProperty(StackComponent, 'Companion', {get: StackComponent$Companion_getInstance});
  package$components.StackComponent = StackComponent;
  package$components.StackUpComponent = StackUpComponent;
  package$components.stackUp_er9jfz$ = stackUp;
  xmlns = 'http://www.w3.org/2000/svg';
  return _;
}));

//# sourceMappingURL=fritz2-components.js.map
