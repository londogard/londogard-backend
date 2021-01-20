(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'stylis', 'kotlinx-coroutines-core', 'murmurhash', 'fritz2-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('stylis'), require('kotlinx-coroutines-core'), require('murmurhash'), require('fritz2-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fritz2-styling'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fritz2-styling'.");
    }if (typeof stylis === 'undefined') {
      throw new Error("Error loading module 'fritz2-styling'. Its dependency 'stylis' was not found. Please, check whether 'stylis' is loaded prior to 'fritz2-styling'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'fritz2-styling'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'fritz2-styling'.");
    }if (typeof murmurhash === 'undefined') {
      throw new Error("Error loading module 'fritz2-styling'. Its dependency 'murmurhash' was not found. Please, check whether 'murmurhash' is loaded prior to 'fritz2-styling'.");
    }if (typeof this['fritz2-core'] === 'undefined') {
      throw new Error("Error loading module 'fritz2-styling'. Its dependency 'fritz2-core' was not found. Please, check whether 'fritz2-core' is loaded prior to 'fritz2-styling'.");
    }root['fritz2-styling'] = factory(typeof this['fritz2-styling'] === 'undefined' ? {} : this['fritz2-styling'], kotlin, stylis, this['kotlinx-coroutines-core'], murmurhash, this['fritz2-core']);
  }
}(this, function (_, Kotlin, $module$stylis, $module$kotlinx_coroutines_core, $module$murmurhash, $module$fritz2_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var append = Kotlin.kotlin.text.append_4v9nlb$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var append_0 = Kotlin.kotlin.text.append_s3yiwm$;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var stringify = $module$stylis.stringify;
  var getCallableRef = Kotlin.getCallableRef;
  var middleware = $module$stylis.middleware;
  var compile = $module$stylis.compile;
  var serialize = $module$stylis.serialize;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var v3 = $module$murmurhash.v3;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var MutableStateFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.MutableStateFlow_mh5how$;
  var toChar = Kotlin.toChar;
  OverflowValues.prototype = Object.create(OverflowBaseValues.prototype);
  OverflowValues.prototype.constructor = OverflowValues;
  OverflowXValues.prototype = Object.create(OverflowBaseValues.prototype);
  OverflowXValues.prototype.constructor = OverflowXValues;
  OverflowYValues.prototype = Object.create(OverflowBaseValues.prototype);
  OverflowYValues.prototype.constructor = OverflowYValues;
  Sizes.prototype = Object.create(ScaledValue.prototype);
  Sizes.prototype.constructor = Sizes;
  function JustifyContentValues() {
    JustifyContentValues_instance = this;
    this.key_stj9h8$_0 = 'justify-content: ';
    this.start = 'start';
    this.end = 'end';
    this.flexStart = 'flex-start';
    this.flexEnd = 'flex-end';
    this.center = 'center';
    this.spaceBetween = 'space-between';
    this.spaceAround = 'space-around';
    this.spaceEvenly = 'space-evenly';
  }
  Object.defineProperty(JustifyContentValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_stj9h8$_0;
  }});
  JustifyContentValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JustifyContentValues', interfaces: [PropertyValues]};
  var JustifyContentValues_instance = null;
  function JustifyContentValues_getInstance() {
    if (JustifyContentValues_instance === null) {
      new JustifyContentValues();
    }return JustifyContentValues_instance;
  }
  function AlignItemsValues() {
    AlignItemsValues_instance = this;
    this.key_3dbv62$_0 = 'align-items: ';
    this.start = 'start';
    this.end = 'end';
    this.flexStart = 'flex-start';
    this.flexEnd = 'flex-end';
    this.selfStart = 'self-start';
    this.selfEnd = 'self-end';
    this.center = 'center';
    this.stretch = 'stretch';
    this.baseline = 'baseline';
  }
  Object.defineProperty(AlignItemsValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_3dbv62$_0;
  }});
  AlignItemsValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'AlignItemsValues', interfaces: [PropertyValues]};
  var AlignItemsValues_instance = null;
  function AlignItemsValues_getInstance() {
    if (AlignItemsValues_instance === null) {
      new AlignItemsValues();
    }return AlignItemsValues_instance;
  }
  function AlignContentValues() {
    AlignContentValues_instance = this;
    this.key_g3laj3$_0 = 'align-content: ';
    this.start = 'start';
    this.end = 'end';
    this.flexStart = 'flex-start';
    this.flexEnd = 'flex-end';
    this.center = 'center';
    this.spaceBetween = 'space-between';
    this.spaceAround = 'space-around';
    this.spaceEvenly = 'space-evenly';
  }
  Object.defineProperty(AlignContentValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_g3laj3$_0;
  }});
  AlignContentValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'AlignContentValues', interfaces: [PropertyValues]};
  var AlignContentValues_instance = null;
  function AlignContentValues_getInstance() {
    if (AlignContentValues_instance === null) {
      new AlignContentValues();
    }return AlignContentValues_instance;
  }
  function Alignment() {
  }
  Alignment.prototype.justifyContent_vlnw1j$ = function (value) {
    property(this, JustifyContentValues_getInstance().key, value(JustifyContentValues_getInstance()), this.smProperties);
  };
  Alignment.prototype.justifyContent_azy89g$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, JustifyContentValues_getInstance().key, sm(JustifyContentValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, JustifyContentValues_getInstance().key, md(JustifyContentValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, JustifyContentValues_getInstance().key, lg(JustifyContentValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, JustifyContentValues_getInstance().key, xl(JustifyContentValues_getInstance()), this.xlProperties);
  };
  Alignment.prototype.justifyContent_azy89g$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.justifyContent_azy89g$$default(sm, md, lg, xl);
  };
  Alignment.prototype.alignItems_tsd917$ = function (value) {
    property(this, AlignItemsValues_getInstance().key, value(AlignItemsValues_getInstance()), this.smProperties);
  };
  Alignment.prototype.alignItems_sx4pdg$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, AlignItemsValues_getInstance().key, sm(AlignItemsValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, AlignItemsValues_getInstance().key, md(AlignItemsValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, AlignItemsValues_getInstance().key, lg(AlignItemsValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, AlignItemsValues_getInstance().key, xl(AlignItemsValues_getInstance()), this.xlProperties);
  };
  Alignment.prototype.alignItems_sx4pdg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.alignItems_sx4pdg$$default(sm, md, lg, xl);
  };
  Alignment.prototype.alignContent_69dv8$ = function (value) {
    property(this, AlignContentValues_getInstance().key, value(AlignContentValues_getInstance()), this.smProperties);
  };
  Alignment.prototype.alignContent_ihjoig$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, AlignContentValues_getInstance().key, sm(AlignContentValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, AlignContentValues_getInstance().key, md(AlignContentValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, AlignContentValues_getInstance().key, lg(AlignContentValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, AlignContentValues_getInstance().key, xl(AlignContentValues_getInstance()), this.xlProperties);
  };
  Alignment.prototype.alignContent_ihjoig$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.alignContent_ihjoig$$default(sm, md, lg, xl);
  };
  Alignment.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Alignment', interfaces: [StyleParams]};
  function SelfAlignItemsValues() {
    SelfAlignItemsValues_instance = this;
    this.key_kf9ify$_0 = 'align-self: ';
    this.start = 'start';
    this.end = 'end';
    this.flexStart = 'flex-start';
    this.flexEnd = 'flex-end';
    this.center = 'center';
    this.stretch = 'stretch';
    this.baseline = 'baseline';
  }
  Object.defineProperty(SelfAlignItemsValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_kf9ify$_0;
  }});
  SelfAlignItemsValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SelfAlignItemsValues', interfaces: [PropertyValues]};
  var SelfAlignItemsValues_instance = null;
  function SelfAlignItemsValues_getInstance() {
    if (SelfAlignItemsValues_instance === null) {
      new SelfAlignItemsValues();
    }return SelfAlignItemsValues_instance;
  }
  function SelfAlignment() {
  }
  SelfAlignment.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelfAlignment', interfaces: []};
  function SelfAlignmentImpl(styleParam, target) {
    this.target_0 = target;
    this.$delegate_8ufg1h$_0 = styleParam;
  }
  SelfAlignmentImpl.prototype.alignSelf_9x0dt3$ = function (value) {
    property(this, SelfAlignItemsValues_getInstance().key, value(SelfAlignItemsValues_getInstance()), this.target_0);
  };
  Object.defineProperty(SelfAlignmentImpl.prototype, 'lgProperties', {get: function () {
    return this.$delegate_8ufg1h$_0.lgProperties;
  }});
  Object.defineProperty(SelfAlignmentImpl.prototype, 'mdProperties', {get: function () {
    return this.$delegate_8ufg1h$_0.mdProperties;
  }});
  Object.defineProperty(SelfAlignmentImpl.prototype, 'smProperties', {get: function () {
    return this.$delegate_8ufg1h$_0.smProperties;
  }});
  Object.defineProperty(SelfAlignmentImpl.prototype, 'xlProperties', {get: function () {
    return this.$delegate_8ufg1h$_0.xlProperties;
  }});
  SelfAlignmentImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelfAlignmentImpl', interfaces: [StyleParams, SelfAlignment]};
  function BackgroundRepeats() {
    BackgroundRepeats_instance = this;
    this.repeat = 'repeat';
    this.repeatX = 'repeat-x';
    this.repeatY = 'repeat-y';
    this.noRepeat = 'no-repeat';
    this.space = 'space';
    this.round = 'round';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  BackgroundRepeats.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundRepeats', interfaces: []};
  var BackgroundRepeats_instance = null;
  function BackgroundRepeats_getInstance() {
    if (BackgroundRepeats_instance === null) {
      new BackgroundRepeats();
    }return BackgroundRepeats_instance;
  }
  function BackgroundBlendModes() {
    BackgroundBlendModes_instance = this;
    this.normal = 'normal';
    this.multiply = 'multiply';
    this.screen = 'screen';
    this.overlay = 'overlay';
    this.darken = 'darken';
    this.lighten = 'lighten';
    this.colorDodge = 'color-dodge';
    this.colorBurn = 'color-burn';
    this.hardLight = 'hard-light ';
    this.softLight = 'soft-light';
    this.difference = 'difference';
    this.exclusion = 'exclusion';
    this.hue = 'hue';
    this.saturation = 'saturation';
    this.color = 'color';
    this.luminosity = 'luminosity';
  }
  BackgroundBlendModes.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundBlendModes', interfaces: []};
  var BackgroundBlendModes_instance = null;
  function BackgroundBlendModes_getInstance() {
    if (BackgroundBlendModes_instance === null) {
      new BackgroundBlendModes();
    }return BackgroundBlendModes_instance;
  }
  function BackgroundPositions() {
    BackgroundPositions_instance = this;
    this.left = 'left';
    this.center = 'center';
    this.right = 'right';
    this.top = 'top';
    this.bottom = 'bottom';
  }
  BackgroundPositions.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundPositions', interfaces: []};
  var BackgroundPositions_instance = null;
  function BackgroundPositions_getInstance() {
    if (BackgroundPositions_instance === null) {
      new BackgroundPositions();
    }return BackgroundPositions_instance;
  }
  function BackgroundPositionContext(values) {
    this.values_0 = values;
  }
  BackgroundPositionContext.prototype.horizontal_dre75w$ = function (value) {
    return this.values_0.add_11rb$(value(BackgroundPositions_getInstance()));
  };
  BackgroundPositionContext.prototype.vertical_dre75w$ = function (value) {
    return this.values_0.add_11rb$(value(BackgroundPositions_getInstance()));
  };
  BackgroundPositionContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'BackgroundPositionContext', interfaces: []};
  function BackgroundSizes() {
    BackgroundSizes_instance = this;
    this.auto = 'auto';
    this.cover = 'cover';
    this.contain = 'contain';
  }
  BackgroundSizes.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundSizes', interfaces: []};
  var BackgroundSizes_instance = null;
  function BackgroundSizes_getInstance() {
    if (BackgroundSizes_instance === null) {
      new BackgroundSizes();
    }return BackgroundSizes_instance;
  }
  function BackgroundSizeContext(values) {
    this.values_0 = values;
  }
  BackgroundSizeContext.prototype.horizontal_sqo7bw$ = function (value) {
    return this.values_0.add_11rb$(value(BackgroundSizes_getInstance()));
  };
  BackgroundSizeContext.prototype.vertical_sqo7bw$ = function (value) {
    return this.values_0.add_11rb$(value(BackgroundSizes_getInstance()));
  };
  BackgroundSizeContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'BackgroundSizeContext', interfaces: []};
  function BackgroundBoxValues() {
    BackgroundBoxValues_instance = this;
    this.paddingBox = 'padding-box';
    this.borderBox = 'border-box';
    this.contentBox = 'content-box';
  }
  BackgroundBoxValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundBoxValues', interfaces: []};
  var BackgroundBoxValues_instance = null;
  function BackgroundBoxValues_getInstance() {
    if (BackgroundBoxValues_instance === null) {
      new BackgroundBoxValues();
    }return BackgroundBoxValues_instance;
  }
  function BackgroundAttachments() {
    BackgroundAttachments_instance = this;
    this.scroll = 'scroll';
    this.fixed = 'fixed';
    this.local = 'local';
    this.inherit = 'inherit';
  }
  BackgroundAttachments.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BackgroundAttachments', interfaces: []};
  var BackgroundAttachments_instance = null;
  function BackgroundAttachments_getInstance() {
    if (BackgroundAttachments_instance === null) {
      new BackgroundAttachments();
    }return BackgroundAttachments_instance;
  }
  var backgroundBlendModeKey;
  var backgroundImageKey;
  var backgroundPositionKey;
  var backgroundSizeKey;
  var backgroundRepeatKey;
  var backgroundOriginKey;
  var backgroundClipKey;
  var backgroundAttachmentKey;
  var backgroundColorKey;
  function BackgroundContext(styleParams, target) {
    this.target_0 = target;
    this.$delegate_ia3qhr$_0 = styleParams;
  }
  BackgroundContext.prototype.blendMode_z26f4l$ = function (value) {
    property(this, backgroundBlendModeKey, value(BackgroundBlendModes_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.image_h4ejuu$ = function (value) {
    property(this, backgroundImageKey, 'url(' + value() + ')', this.target_0);
  };
  BackgroundContext.prototype.noImage = function () {
    property(this, backgroundImageKey, 'none', this.target_0);
  };
  BackgroundContext.prototype.position_dre75w$ = function (value) {
    property(this, backgroundPositionKey, value(BackgroundPositions_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.positions_ml8uij$ = function (value) {
    var properties = ArrayList_init();
    value(new BackgroundPositionContext(properties));
    var tmp$ = backgroundPositionKey;
    var $receiver = joinToString(properties, ' ');
    var tmp$_0;
    property(this, tmp$, trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString(), this.target_0);
  };
  BackgroundContext.prototype.size_sqo7bw$ = function (value) {
    property(this, backgroundSizeKey, value(BackgroundSizes_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.sizes_l1sab1$ = function (value) {
    var properties = ArrayList_init();
    value(new BackgroundSizeContext(properties));
    var tmp$ = backgroundSizeKey;
    var $receiver = joinToString(properties, ' ');
    var tmp$_0;
    property(this, tmp$, trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString(), this.target_0);
  };
  BackgroundContext.prototype.repeat_qj4vna$ = function (value) {
    property(this, backgroundRepeatKey, value(BackgroundRepeats_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.origin_j32iqp$ = function (value) {
    property(this, backgroundOriginKey, value(BackgroundBoxValues_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.clip_j32iqp$ = function (value) {
    property(this, backgroundClipKey, value(BackgroundBoxValues_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.attachment_hkrflu$ = function (value) {
    property(this, backgroundAttachmentKey, value(BackgroundAttachments_getInstance()), this.target_0);
  };
  BackgroundContext.prototype.color_jl9ed9$ = function (value) {
    var key = backgroundColorKey;
    var base = Theme$Companion_getInstance().invoke().colors;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Object.defineProperty(BackgroundContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_ia3qhr$_0.lgProperties;
  }});
  Object.defineProperty(BackgroundContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_ia3qhr$_0.mdProperties;
  }});
  Object.defineProperty(BackgroundContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_ia3qhr$_0.smProperties;
  }});
  Object.defineProperty(BackgroundContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_ia3qhr$_0.xlProperties;
  }});
  BackgroundContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'BackgroundContext', interfaces: [StyleParams]};
  function Background() {
  }
  Background.prototype.background_f5fcq6$ = function (value) {
    value(new BackgroundContext(this, this.smProperties));
  };
  Background.prototype.background_1bxu5o$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new BackgroundContext(this, this.smProperties));
    if (md != null)
      md(new BackgroundContext(this, this.mdProperties));
    if (lg != null)
      lg(new BackgroundContext(this, this.lgProperties));
    if (xl != null)
      xl(new BackgroundContext(this, this.xlProperties));
  };
  Background.prototype.background_1bxu5o$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.background_1bxu5o$$default(sm, md, lg, xl);
  };
  Background.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Background', interfaces: [StyleParams]};
  function BorderStyleValues() {
    BorderStyleValues_instance = this;
    this.key_xgocrg$_0 = 'border-style: ';
    this.none = 'none';
    this.hidden = 'hidden';
    this.dotted = 'dotted';
    this.dashed = 'dashed';
    this.solid = 'solid';
    this.double = 'double';
    this.groove = 'groove';
    this.ridge = 'ridge';
    this.inset = 'inset';
    this.outset = 'outset';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Object.defineProperty(BorderStyleValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_xgocrg$_0;
  }});
  BorderStyleValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BorderStyleValues', interfaces: [PropertyValues]};
  var BorderStyleValues_instance = null;
  function BorderStyleValues_getInstance() {
    if (BorderStyleValues_instance === null) {
      new BorderStyleValues();
    }return BorderStyleValues_instance;
  }
  var borderWidthKey;
  var borderStyleKey;
  var borderColorKey;
  var borderTopWidthKey;
  var borderTopStyleKey;
  var borderTopColorKey;
  var borderRightWidthKey;
  var borderRightStyleKey;
  var borderRightColorKey;
  var borderBottomWidthKey;
  var borderBottomStyleKey;
  var borderBottomColorKey;
  var borderLeftWidthKey;
  var borderLeftStyleKey;
  var borderLeftColorKey;
  var borderRadiusKey;
  var borderTopLeftRadiusKey;
  var borderTopRightRadiusKey;
  var borderBottomRightRadiusKey;
  var borderBottomLeftRadiusKey;
  function BorderContext(widthKey, styleKey, colorKey, styleParams, target) {
    this.widthKey_0 = widthKey;
    this.styleKey_0 = styleKey;
    this.colorKey_0 = colorKey;
    this.styleParams = styleParams;
    this.target_0 = target;
  }
  BorderContext.prototype.width_qwzhsr$ = function (value) {
    var key = this.widthKey_0;
    var base = Theme$Companion_getInstance().invoke().borderWidths;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  BorderContext.prototype.style_hw5xj$ = function (value) {
    property(this, this.styleKey_0, value(BorderStyleValues_getInstance()), this.smProperties);
  };
  BorderContext.prototype.color_jl9ed9$ = function (value) {
    var key = this.colorKey_0;
    var base = Theme$Companion_getInstance().invoke().colors;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  Object.defineProperty(BorderContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(BorderContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(BorderContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(BorderContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  BorderContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'BorderContext', interfaces: [StyleParams]};
  function BordersContext(styleParams, target) {
    this.styleParams = styleParams;
    this.target_0 = target;
  }
  BordersContext.prototype.top_4a22k0$ = function (value) {
    value(new BorderContext(borderTopWidthKey, borderTopStyleKey, borderTopColorKey, this, this.target_0));
  };
  BordersContext.prototype.right_4a22k0$ = function (value) {
    value(new BorderContext(borderRightWidthKey, borderRightStyleKey, borderRightColorKey, this, this.target_0));
  };
  BordersContext.prototype.bottom_4a22k0$ = function (value) {
    value(new BorderContext(borderBottomWidthKey, borderBottomStyleKey, borderBottomColorKey, this, this.target_0));
  };
  BordersContext.prototype.left_4a22k0$ = function (value) {
    value(new BorderContext(borderLeftWidthKey, borderLeftStyleKey, borderLeftColorKey, this, this.target_0));
  };
  BordersContext.prototype.horizontal_4a22k0$ = function (value) {
    this.right_4a22k0$(value);
    this.left_4a22k0$(value);
  };
  BordersContext.prototype.vertical_4a22k0$ = function (value) {
    this.top_4a22k0$(value);
    this.bottom_4a22k0$(value);
  };
  Object.defineProperty(BordersContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(BordersContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(BordersContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(BordersContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  BordersContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'BordersContext', interfaces: [StyleParams]};
  function RadiiContext(styleParams, target) {
    this.styleParams = styleParams;
    this.target_0 = target;
  }
  RadiiContext.prototype.topLeft_bcpvvc$ = function (value) {
    var key = borderTopLeftRadiusKey;
    var base = Theme$Companion_getInstance().invoke().radii;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  RadiiContext.prototype.topRight_bcpvvc$ = function (value) {
    var key = borderTopRightRadiusKey;
    var base = Theme$Companion_getInstance().invoke().radii;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  RadiiContext.prototype.bottomRight_bcpvvc$ = function (value) {
    var key = borderBottomRightRadiusKey;
    var base = Theme$Companion_getInstance().invoke().radii;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  RadiiContext.prototype.bottomLeft_bcpvvc$ = function (value) {
    var key = borderBottomLeftRadiusKey;
    var base = Theme$Companion_getInstance().invoke().radii;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  RadiiContext.prototype.top_bcpvvc$ = function (value) {
    this.topRight_bcpvvc$(value);
    this.topLeft_bcpvvc$(value);
  };
  RadiiContext.prototype.bottom_bcpvvc$ = function (value) {
    this.bottomLeft_bcpvvc$(value);
    this.bottomRight_bcpvvc$(value);
  };
  RadiiContext.prototype.right_bcpvvc$ = function (value) {
    this.topRight_bcpvvc$(value);
    this.bottomRight_bcpvvc$(value);
  };
  RadiiContext.prototype.left_bcpvvc$ = function (value) {
    this.topLeft_bcpvvc$(value);
    this.bottomLeft_bcpvvc$(value);
  };
  Object.defineProperty(RadiiContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(RadiiContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(RadiiContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(RadiiContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  RadiiContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'RadiiContext', interfaces: [StyleParams]};
  function Border() {
  }
  Border.prototype.border_4a22k0$ = function (value) {
    value(new BorderContext(borderWidthKey, borderStyleKey, borderColorKey, this, this.smProperties));
  };
  Border.prototype.border_sj06fo$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new BorderContext(borderWidthKey, borderStyleKey, borderColorKey, this, this.smProperties));
    if (md != null)
      md(new BorderContext(borderWidthKey, borderStyleKey, borderColorKey, this, this.mdProperties));
    if (lg != null)
      lg(new BorderContext(borderWidthKey, borderStyleKey, borderColorKey, this, this.lgProperties));
    if (xl != null)
      xl(new BorderContext(borderWidthKey, borderStyleKey, borderColorKey, this, this.xlProperties));
  };
  Border.prototype.border_sj06fo$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.border_sj06fo$$default(sm, md, lg, xl);
  };
  Border.prototype.borders_9iuei5$ = function (value) {
    value(new BordersContext(this, this.smProperties));
  };
  Border.prototype.borders_1m9jjg$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new BordersContext(this, this.smProperties));
    if (md != null)
      md(new BordersContext(this, this.mdProperties));
    if (lg != null)
      lg(new BordersContext(this, this.lgProperties));
    if (xl != null)
      xl(new BordersContext(this, this.xlProperties));
  };
  Border.prototype.borders_1m9jjg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.borders_1m9jjg$$default(sm, md, lg, xl);
  };
  Border.prototype.radius_bcpvvc$ = function (value) {
    var key = borderRadiusKey;
    var base = Theme$Companion_getInstance().invoke().radii;
    var target = this.smProperties;
    property(this, key, value(base), target);
  };
  Border.prototype.radius_bhtwo8$$default = function (sm, md, lg, xl) {
    if (sm != null) {
      var key = borderRadiusKey;
      var base = Theme$Companion_getInstance().invoke().radii;
      var target = this.smProperties;
      property(this, key, sm(base), target);
    }if (md != null) {
      var key_0 = borderRadiusKey;
      var base_0 = Theme$Companion_getInstance().invoke().radii;
      var target_0 = this.mdProperties;
      property(this, key_0, md(base_0), target_0);
    }if (lg != null) {
      var key_1 = borderRadiusKey;
      var base_1 = Theme$Companion_getInstance().invoke().radii;
      var target_1 = this.lgProperties;
      property(this, key_1, lg(base_1), target_1);
    }if (xl != null) {
      var key_2 = borderRadiusKey;
      var base_2 = Theme$Companion_getInstance().invoke().radii;
      var target_2 = this.xlProperties;
      property(this, key_2, xl(base_2), target_2);
    }};
  Border.prototype.radius_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.radius_bhtwo8$$default(sm, md, lg, xl);
  };
  Border.prototype.radii_2h0nmj$ = function (value) {
    value(new RadiiContext(this, this.smProperties));
  };
  Border.prototype.radii_a257h8$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new RadiiContext(this, this.smProperties));
    if (md != null)
      md(new RadiiContext(this, this.mdProperties));
    if (lg != null)
      lg(new RadiiContext(this, this.lgProperties));
    if (xl != null)
      xl(new RadiiContext(this, this.xlProperties));
  };
  Border.prototype.radii_a257h8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.radii_a257h8$$default(sm, md, lg, xl);
  };
  Border.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Border', interfaces: [StyleParams]};
  var colorKey;
  var opacityKey;
  function rgba(r, g, b, a) {
    return 'rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  function Color() {
  }
  Color.prototype.color_jl9ed9$ = function (value) {
    var key = colorKey;
    var base = Theme$Companion_getInstance().invoke().colors;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Color.prototype.color_isjh78$$default = function (sm, md, lg, xl) {
    property_2(this, colorKey, Theme$Companion_getInstance().invoke().colors, sm, md, lg, xl);
  };
  Color.prototype.color_isjh78$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.color_isjh78$$default(sm, md, lg, xl);
  };
  Color.prototype.opacity_y3j6id$ = function (value) {
    var key = opacityKey;
    var base = Theme$Companion_getInstance().invoke().opacities;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Color.prototype.opacity_rh8n64$$default = function (sm, md, lg, xl) {
    property_2(this, opacityKey, Theme$Companion_getInstance().invoke().opacities, sm, md, lg, xl);
  };
  Color.prototype.opacity_rh8n64$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.opacity_rh8n64$$default(sm, md, lg, xl);
  };
  Color.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Color', interfaces: [StyleParams]};
  function DirectionValues() {
    DirectionValues_instance = this;
    this.key_eh9tyu$_0 = 'flex-direction: ';
    this.row = 'row';
    this.column = 'column';
    this.rowReverse = 'row-reverse';
    this.columnReverse = 'column-reverse';
  }
  Object.defineProperty(DirectionValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_eh9tyu$_0;
  }});
  DirectionValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DirectionValues', interfaces: [PropertyValues]};
  var DirectionValues_instance = null;
  function DirectionValues_getInstance() {
    if (DirectionValues_instance === null) {
      new DirectionValues();
    }return DirectionValues_instance;
  }
  function WrapValues() {
    WrapValues_instance = this;
    this.key_bohjol$_0 = 'flex-wrap: ';
    this.wrap = 'wrap';
    this.nowrap = 'nowrap';
    this.wrapReverse = 'wrap-reverse';
  }
  Object.defineProperty(WrapValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_bohjol$_0;
  }});
  WrapValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WrapValues', interfaces: [PropertyValues]};
  var WrapValues_instance = null;
  function WrapValues_getInstance() {
    if (WrapValues_instance === null) {
      new WrapValues();
    }return WrapValues_instance;
  }
  function Flexbox() {
  }
  Flexbox.prototype.direction_la6ffj$ = function (value) {
    property(this, DirectionValues_getInstance().key, value(DirectionValues_getInstance()), this.smProperties);
  };
  Flexbox.prototype.direction_rkqy8k$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, DirectionValues_getInstance().key, sm(DirectionValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, DirectionValues_getInstance().key, md(DirectionValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, DirectionValues_getInstance().key, lg(DirectionValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, DirectionValues_getInstance().key, xl(DirectionValues_getInstance()), this.xlProperties);
  };
  Flexbox.prototype.direction_rkqy8k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.direction_rkqy8k$$default(sm, md, lg, xl);
  };
  Flexbox.prototype.wrap_plz3p2$ = function (value) {
    property(this, WrapValues_getInstance().key, value(WrapValues_getInstance()), this.smProperties);
  };
  Flexbox.prototype.wrap_jfmmz4$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, WrapValues_getInstance().key, sm(WrapValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, WrapValues_getInstance().key, md(WrapValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, WrapValues_getInstance().key, lg(WrapValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, WrapValues_getInstance().key, xl(WrapValues_getInstance()), this.xlProperties);
  };
  Flexbox.prototype.wrap_jfmmz4$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.wrap_jfmmz4$$default(sm, md, lg, xl);
  };
  Flexbox.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Flexbox', interfaces: [Alignment, StyleParams]};
  function AutoFlowValues() {
    AutoFlowValues_instance = this;
    this.key_u3fqbs$_0 = 'grid-auto-flow: ';
    this.column = 'column';
    this.row = 'row';
    this.dense = 'dense';
    this.columnDense = 'column dense';
    this.rowDense = 'row dense';
    this.inherit = 'inherit';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  Object.defineProperty(AutoFlowValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_u3fqbs$_0;
  }});
  AutoFlowValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'AutoFlowValues', interfaces: [PropertyValues]};
  var AutoFlowValues_instance = null;
  function AutoFlowValues_getInstance() {
    if (AutoFlowValues_instance === null) {
      new AutoFlowValues();
    }return AutoFlowValues_instance;
  }
  function GridTemplateContext(styleParams, target) {
    this.target_0 = target;
    this.$delegate_ofx1t9$_0 = styleParams;
    this.autoFit = 'auto-fit';
    this.autoFill = 'auto-fill';
    this.minContent = 'min-content';
    this.maxContent = 'max-content';
    this.auto = 'auto';
  }
  GridTemplateContext.prototype.repeat_w1eymd$ = function (count, value) {
    return 'repeat(' + count + ', ' + value(this) + ')';
  };
  GridTemplateContext.prototype.repeat_wibopr$ = function (count, value) {
    return 'repeat(' + count + ', ' + value(this) + ')';
  };
  GridTemplateContext.prototype.minmax_puj7f4$ = function (min, max) {
    return 'minmax(' + min + ', ' + max + ')';
  };
  Object.defineProperty(GridTemplateContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_ofx1t9$_0.lgProperties;
  }});
  Object.defineProperty(GridTemplateContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_ofx1t9$_0.mdProperties;
  }});
  Object.defineProperty(GridTemplateContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_ofx1t9$_0.smProperties;
  }});
  Object.defineProperty(GridTemplateContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_ofx1t9$_0.xlProperties;
  }});
  GridTemplateContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridTemplateContext', interfaces: [StyleParams]};
  function GridAreaContext(styleParams, target) {
    this.target = target;
    this.$delegate_7z5796$_0 = styleParams;
  }
  GridAreaContext.prototype.row_vqirvp$ = function (values) {
    return this.target.append_pdl1vj$('"' + joinToString(toList(values), ' ') + '"' + '\n');
  };
  Object.defineProperty(GridAreaContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_7z5796$_0.lgProperties;
  }});
  Object.defineProperty(GridAreaContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_7z5796$_0.mdProperties;
  }});
  Object.defineProperty(GridAreaContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_7z5796$_0.smProperties;
  }});
  Object.defineProperty(GridAreaContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_7z5796$_0.xlProperties;
  }});
  GridAreaContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridAreaContext', interfaces: [StyleParams]};
  var gridTemplateColumnsKey;
  var gridTemplateRowsKey;
  var gridTemplateAutoRowsKey;
  var gridTemplateAutoColumnsKey;
  var gridTemplateAreasKey;
  var rowGapKey;
  var columnGapKey;
  function GridLayout() {
  }
  GridLayout.prototype.columns_quywoh$ = function (value) {
    property(this, gridTemplateColumnsKey, value(new GridTemplateContext(this, this.smProperties)), this.smProperties);
  };
  GridLayout.prototype.columns_ti9a38$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, gridTemplateColumnsKey, sm(new GridTemplateContext(this, this.smProperties)), this.smProperties);
    if (md != null)
      property(this, gridTemplateColumnsKey, md(new GridTemplateContext(this, this.mdProperties)), this.mdProperties);
    if (lg != null)
      property(this, gridTemplateColumnsKey, lg(new GridTemplateContext(this, this.lgProperties)), this.lgProperties);
    if (xl != null)
      property(this, gridTemplateColumnsKey, xl(new GridTemplateContext(this, this.xlProperties)), this.xlProperties);
  };
  GridLayout.prototype.columns_ti9a38$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.columns_ti9a38$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.rows_quywoh$ = function (value) {
    property(this, gridTemplateRowsKey, value(new GridTemplateContext(this, this.smProperties)), this.smProperties);
  };
  GridLayout.prototype.rows_ti9a38$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, gridTemplateRowsKey, sm(new GridTemplateContext(this, this.smProperties)), this.smProperties);
    if (md != null)
      property(this, gridTemplateRowsKey, md(new GridTemplateContext(this, this.mdProperties)), this.mdProperties);
    if (lg != null)
      property(this, gridTemplateRowsKey, lg(new GridTemplateContext(this, this.lgProperties)), this.lgProperties);
    if (xl != null)
      property(this, gridTemplateRowsKey, xl(new GridTemplateContext(this, this.xlProperties)), this.xlProperties);
  };
  GridLayout.prototype.rows_ti9a38$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.rows_ti9a38$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.autoRows_quywoh$ = function (value) {
    property(this, gridTemplateAutoRowsKey, value(new GridTemplateContext(this, this.smProperties)), this.smProperties);
  };
  GridLayout.prototype.autoRows_ti9a38$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, gridTemplateAutoRowsKey, sm(new GridTemplateContext(this, this.smProperties)), this.smProperties);
    if (md != null)
      property(this, gridTemplateAutoRowsKey, md(new GridTemplateContext(this, this.mdProperties)), this.mdProperties);
    if (lg != null)
      property(this, gridTemplateAutoRowsKey, lg(new GridTemplateContext(this, this.lgProperties)), this.lgProperties);
    if (xl != null)
      property(this, gridTemplateAutoRowsKey, xl(new GridTemplateContext(this, this.xlProperties)), this.xlProperties);
  };
  GridLayout.prototype.autoRows_ti9a38$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.autoRows_ti9a38$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.autoColumns_quywoh$ = function (value) {
    property(this, gridTemplateAutoColumnsKey, value(new GridTemplateContext(this, this.smProperties)), this.smProperties);
  };
  GridLayout.prototype.autoColumns_ti9a38$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, gridTemplateAutoColumnsKey, sm(new GridTemplateContext(this, this.smProperties)), this.smProperties);
    if (md != null)
      property(this, gridTemplateAutoColumnsKey, md(new GridTemplateContext(this, this.mdProperties)), this.mdProperties);
    if (lg != null)
      property(this, gridTemplateAutoColumnsKey, lg(new GridTemplateContext(this, this.lgProperties)), this.lgProperties);
    if (xl != null)
      property(this, gridTemplateAutoColumnsKey, xl(new GridTemplateContext(this, this.xlProperties)), this.xlProperties);
  };
  GridLayout.prototype.autoColumns_ti9a38$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.autoColumns_ti9a38$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.autoFlow_bi2803$ = function (value) {
    property(this, AutoFlowValues_getInstance().key, value(AutoFlowValues_getInstance()), this.smProperties);
  };
  GridLayout.prototype.autoFlow_9l1thg$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property(this, AutoFlowValues_getInstance().key, sm(AutoFlowValues_getInstance()), this.smProperties);
    if (md != null)
      property(this, AutoFlowValues_getInstance().key, md(AutoFlowValues_getInstance()), this.mdProperties);
    if (lg != null)
      property(this, AutoFlowValues_getInstance().key, lg(AutoFlowValues_getInstance()), this.lgProperties);
    if (xl != null)
      property(this, AutoFlowValues_getInstance().key, xl(AutoFlowValues_getInstance()), this.xlProperties);
  };
  GridLayout.prototype.autoFlow_9l1thg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.autoFlow_9l1thg$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.areas_owx8eh$ = function (value) {
    var target = StringBuilder_init();
    value(new GridAreaContext(this, target));
    property(this, gridTemplateAreasKey, '\n' + target, this.smProperties);
  };
  GridLayout.prototype.areas_lft61g$$default = function (sm, md, lg, xl) {
    if (sm != null) {
      var target = StringBuilder_init();
      sm(new GridAreaContext(this, target));
      property(this, gridTemplateAreasKey, '\n' + target, this.smProperties);
    }if (md != null) {
      var target_0 = StringBuilder_init();
      md(new GridAreaContext(this, target_0));
      property(this, gridTemplateAreasKey, '\n' + target_0, this.mdProperties);
    }if (lg != null) {
      var target_1 = StringBuilder_init();
      lg(new GridAreaContext(this, target_1));
      property(this, gridTemplateAreasKey, '\n' + target_1, this.lgProperties);
    }if (xl != null) {
      var target_2 = StringBuilder_init();
      xl(new GridAreaContext(this, target_2));
      property(this, gridTemplateAreasKey, '\n' + target_2, this.xlProperties);
    }};
  GridLayout.prototype.areas_lft61g$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.areas_lft61g$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.columnGap_bcpvvc$ = function (value) {
    var key = columnGapKey;
    var base = Theme$Companion_getInstance().invoke().gaps;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  GridLayout.prototype.columnGap_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, columnGapKey, Theme$Companion_getInstance().invoke().gaps, sm, md, lg, xl);
  };
  GridLayout.prototype.columnGap_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.columnGap_bhtwo8$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.rowGap_bcpvvc$ = function (value) {
    var key = rowGapKey;
    var base = Theme$Companion_getInstance().invoke().gaps;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  GridLayout.prototype.rowGap_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, rowGapKey, Theme$Companion_getInstance().invoke().gaps, sm, md, lg, xl);
  };
  GridLayout.prototype.rowGap_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.rowGap_bhtwo8$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.gap_bcpvvc$ = function (value) {
    this.columnGap_bcpvvc$(value);
    this.rowGap_bcpvvc$(value);
  };
  GridLayout.prototype.gap_bhtwo8$$default = function (sm, md, lg, xl) {
    this.columnGap_bhtwo8$(sm, md, lg, xl);
    this.rowGap_bhtwo8$(sm, md, lg, xl);
  };
  GridLayout.prototype.gap_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.gap_bhtwo8$$default(sm, md, lg, xl);
  };
  GridLayout.prototype.fitContent_61zpoe$ = function (value) {
    return 'fit-content(' + value + ')';
  };
  GridLayout.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'GridLayout', interfaces: [Alignment, StyleParams]};
  var widthKey;
  var heightKey;
  var minWidthKey;
  var maxWidthKey;
  var minHeightKey;
  var maxHeightKey;
  function DisplayValues() {
    DisplayValues_instance = this;
    this.key_e7ryhz$_0 = 'display: ';
    this.none = 'none';
    this.inline = 'inline';
    this.block = 'block';
    this.contents = 'contents';
    this.listItem = 'list-item';
    this.inlineBlock = 'inline-block';
    this.inlineTable = 'inline-table';
    this.table = 'table';
    this.tableCell = 'table-cell';
    this.tableColumn = 'table-column';
    this.tableColumnGroup = 'table-column-group';
    this.tableFooterGroup = 'table-footer-group';
    this.tableHeaderGroup = 'table-header-group';
    this.tableRow = 'table-row';
    this.tableRowGroup = 'table-row-group';
    this.flex = 'flex';
    this.inlineFlex = 'inline-flex';
    this.grid = 'grid';
    this.inlineGrid = 'inline-grid';
    this.ruby = 'ruby';
    this.rubyBase = 'ruby-base';
    this.rubyText = 'ruby-text';
    this.rubyBaseContainer = 'ruby-base-container';
    this.rubyTextContainer = 'ruby-text-container';
    this.runIn = 'run-in';
    this.inherit = 'inherit';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  Object.defineProperty(DisplayValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_e7ryhz$_0;
  }});
  DisplayValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DisplayValues', interfaces: [PropertyValues]};
  var DisplayValues_instance = null;
  function DisplayValues_getInstance() {
    if (DisplayValues_instance === null) {
      new DisplayValues();
    }return DisplayValues_instance;
  }
  function OverflowBaseValues(key) {
    this.key_374tgu$_0 = key;
    this.visible = 'visible';
    this.hidden = 'hidden';
    this.scroll = 'scroll';
    this.auto = 'auto';
    this.inherit = 'inherit';
  }
  Object.defineProperty(OverflowBaseValues.prototype, 'key', {get: function () {
    return this.key_374tgu$_0;
  }});
  OverflowBaseValues.$metadata$ = {kind: Kind_CLASS, simpleName: 'OverflowBaseValues', interfaces: [PropertyValues]};
  function OverflowValues() {
    OverflowValues_instance = this;
    OverflowBaseValues.call(this, 'overflow: ');
  }
  OverflowValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OverflowValues', interfaces: [OverflowBaseValues]};
  var OverflowValues_instance = null;
  function OverflowValues_getInstance() {
    if (OverflowValues_instance === null) {
      new OverflowValues();
    }return OverflowValues_instance;
  }
  function OverflowXValues() {
    OverflowXValues_instance = this;
    OverflowBaseValues.call(this, 'overflow-x: ');
    this.clip = 'clip';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  OverflowXValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OverflowXValues', interfaces: [OverflowBaseValues]};
  var OverflowXValues_instance = null;
  function OverflowXValues_getInstance() {
    if (OverflowXValues_instance === null) {
      new OverflowXValues();
    }return OverflowXValues_instance;
  }
  function OverflowYValues() {
    OverflowYValues_instance = this;
    OverflowBaseValues.call(this, 'overflow-y: ');
    this.clip = 'clip';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  OverflowYValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OverflowYValues', interfaces: [OverflowBaseValues]};
  var OverflowYValues_instance = null;
  function OverflowYValues_getInstance() {
    if (OverflowYValues_instance === null) {
      new OverflowYValues();
    }return OverflowYValues_instance;
  }
  function VerticalAlignValues() {
    VerticalAlignValues_instance = this;
    this.key_vqspju$_0 = 'vertical-align: ';
    this.baseline = 'baseline';
    this.sub = 'sub';
    this.super = 'super';
    this.textTop = 'textTop';
    this.textBottom = 'textBottom';
    this.middle = 'middle';
    this.top = 'top';
    this.bottom = 'bottom';
    this.inherit = 'inherit';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  Object.defineProperty(VerticalAlignValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_vqspju$_0;
  }});
  VerticalAlignValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'VerticalAlignValues', interfaces: [PropertyValues]};
  var VerticalAlignValues_instance = null;
  function VerticalAlignValues_getInstance() {
    if (VerticalAlignValues_instance === null) {
      new VerticalAlignValues();
    }return VerticalAlignValues_instance;
  }
  function GridContext(styleParams, selfAlignment, target) {
    this.target_0 = target;
    this.$delegate_nt5b2f$_0 = styleParams;
    this.$delegate_nt5b2f$_1 = selfAlignment;
  }
  GridContext.prototype.area_h4ejuu$ = function (value) {
    property(this, 'grid-area: ', value(), this.target_0);
  };
  GridContext.prototype.column_op5c9c$ = function (value) {
    value(new GridRowColumnContext('column', this, this.target_0));
  };
  GridContext.prototype.row_op5c9c$ = function (value) {
    value(new GridRowColumnContext('row', this, this.target_0));
  };
  Object.defineProperty(GridContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_nt5b2f$_0.lgProperties;
  }});
  Object.defineProperty(GridContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_nt5b2f$_0.mdProperties;
  }});
  Object.defineProperty(GridContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_nt5b2f$_0.smProperties;
  }});
  Object.defineProperty(GridContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_nt5b2f$_0.xlProperties;
  }});
  GridContext.prototype.alignSelf_9x0dt3$ = function (value) {
    return this.$delegate_nt5b2f$_1.alignSelf_9x0dt3$(value);
  };
  GridContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridContext', interfaces: [SelfAlignment, StyleParams]};
  function GridRowColumnContext(keyFragment, styleParams, target) {
    this.keyFragment_0 = keyFragment;
    this.target_0 = target;
    this.$delegate_hsihnd$_0 = styleParams;
  }
  GridRowColumnContext.prototype.start_h4ejuu$ = function (value) {
    property(this, 'grid-' + this.keyFragment_0 + '-start: ', value(), this.target_0);
  };
  GridRowColumnContext.prototype.end_h4ejuu$ = function (value) {
    property(this, 'grid-' + this.keyFragment_0 + '-end: ', value(), this.target_0);
  };
  GridRowColumnContext.prototype.span_za3lpa$ = function (value) {
    return 'span ' + value;
  };
  GridRowColumnContext.prototype.span_61zpoe$ = function (value) {
    return 'span ' + value;
  };
  Object.defineProperty(GridRowColumnContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_hsihnd$_0.lgProperties;
  }});
  Object.defineProperty(GridRowColumnContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_hsihnd$_0.mdProperties;
  }});
  Object.defineProperty(GridRowColumnContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_hsihnd$_0.smProperties;
  }});
  Object.defineProperty(GridRowColumnContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_hsihnd$_0.xlProperties;
  }});
  GridRowColumnContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridRowColumnContext', interfaces: [StyleParams]};
  function FlexBasisValues() {
    FlexBasisValues_instance = this;
    this.key_ociwho$_0 = 'flex-basis: ';
    this.auto = 'auto';
    this.fill = 'fill';
    this.maxContent = 'max-content';
    this.minContent = 'min-content';
    this.fitContent = 'fit-content';
    this.content = 'content';
    this.inherit = 'inherit';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  Object.defineProperty(FlexBasisValues.prototype, 'key', {configurable: true, get: function () {
    return this.key_ociwho$_0;
  }});
  FlexBasisValues.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FlexBasisValues', interfaces: [PropertyValues]};
  var FlexBasisValues_instance = null;
  function FlexBasisValues_getInstance() {
    if (FlexBasisValues_instance === null) {
      new FlexBasisValues();
    }return FlexBasisValues_instance;
  }
  function FlexItemContext(styleParams, selfAlignment, target) {
    this.target_0 = target;
    this.$delegate_g5cuzj$_0 = styleParams;
    this.$delegate_g5cuzj$_1 = selfAlignment;
  }
  FlexItemContext.prototype.order_h4ejuu$ = function (value) {
    property(this, 'order: ', value(), this.target_0);
  };
  FlexItemContext.prototype.grow_h4ejuu$ = function (value) {
    property(this, 'flex-grow: ', value(), this.target_0);
  };
  FlexItemContext.prototype.shrink_h4ejuu$ = function (value) {
    property(this, 'flex-shrink: ', value(), this.target_0);
  };
  FlexItemContext.prototype.basis_c95srd$ = function (value) {
    property(this, FlexBasisValues_getInstance().key, value(FlexBasisValues_getInstance()), this.target_0);
  };
  Object.defineProperty(FlexItemContext.prototype, 'lgProperties', {get: function () {
    return this.$delegate_g5cuzj$_0.lgProperties;
  }});
  Object.defineProperty(FlexItemContext.prototype, 'mdProperties', {get: function () {
    return this.$delegate_g5cuzj$_0.mdProperties;
  }});
  Object.defineProperty(FlexItemContext.prototype, 'smProperties', {get: function () {
    return this.$delegate_g5cuzj$_0.smProperties;
  }});
  Object.defineProperty(FlexItemContext.prototype, 'xlProperties', {get: function () {
    return this.$delegate_g5cuzj$_0.xlProperties;
  }});
  FlexItemContext.prototype.alignSelf_9x0dt3$ = function (value) {
    return this.$delegate_g5cuzj$_1.alignSelf_9x0dt3$(value);
  };
  FlexItemContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'FlexItemContext', interfaces: [SelfAlignment, StyleParams]};
  function Layout() {
  }
  Layout.prototype.css_61zpoe$ = function (value) {
    return this.smProperties.append_pdl1vj$(endsWith(value, ';') ? value : value + ';');
  };
  Layout.prototype.css_d8n4vg$$default = function (sm, md, lg, xl) {
    if (sm != null) {
      this.smProperties.append_pdl1vj$(endsWith(sm, ';') ? sm : sm + ';');
    }if (md != null) {
      this.mdProperties.append_pdl1vj$(endsWith(md, ';') ? md : md + ';');
    }if (lg != null) {
      this.lgProperties.append_pdl1vj$(endsWith(lg, ';') ? lg : lg + ';');
    }if (xl != null) {
      this.xlProperties.append_pdl1vj$(endsWith(xl, ';') ? xl : xl + ';');
    }};
  Layout.prototype.css_d8n4vg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.css_d8n4vg$$default(sm, md, lg, xl);
  };
  Layout.prototype.size_wpghq5$ = function (value) {
    this.width_wpghq5$(value);
    this.height_wpghq5$(value);
  };
  Layout.prototype.size_5la74k$$default = function (sm, md, lg, xl) {
    this.width_5la74k$(sm, md, lg, xl);
    this.height_5la74k$(sm, md, lg, xl);
  };
  Layout.prototype.size_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.size_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.width_wpghq5$ = function (value) {
    var key = widthKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.width_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, widthKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.width_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.width_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.height_wpghq5$ = function (value) {
    var key = heightKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.height_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, heightKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.height_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.height_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.minWidth_wpghq5$ = function (value) {
    var key = minWidthKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.minWidth_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, minWidthKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.minWidth_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.minWidth_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.maxWidth_wpghq5$ = function (value) {
    var key = maxWidthKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.maxWidth_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, maxWidthKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.maxWidth_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.maxWidth_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.minHeight_wpghq5$ = function (value) {
    var key = minHeightKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.minHeight_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, minHeightKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.minHeight_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.minHeight_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.maxHeight_wpghq5$ = function (value) {
    var key = maxHeightKey;
    var base = Theme$Companion_getInstance().invoke().sizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Layout.prototype.maxHeight_5la74k$$default = function (sm, md, lg, xl) {
    property_2(this, maxHeightKey, Theme$Companion_getInstance().invoke().sizes, sm, md, lg, xl);
  };
  Layout.prototype.maxHeight_5la74k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.maxHeight_5la74k$$default(sm, md, lg, xl);
  };
  Layout.prototype.display_1gh9wc$ = function (value) {
    var base = DisplayValues_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Layout.prototype.display_76osno$$default = function (sm, md, lg, xl) {
    property_4(this, DisplayValues_getInstance(), sm, md, lg, xl);
  };
  Layout.prototype.display_76osno$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.display_76osno$$default(sm, md, lg, xl);
  };
  Layout.prototype.verticalAlign_qe4rxr$ = function (value) {
    var base = VerticalAlignValues_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Layout.prototype.verticalAlign_l3swd0$$default = function (sm, md, lg, xl) {
    property_4(this, VerticalAlignValues_getInstance(), sm, md, lg, xl);
  };
  Layout.prototype.verticalAlign_l3swd0$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.verticalAlign_l3swd0$$default(sm, md, lg, xl);
  };
  Layout.prototype.overflow_c5t1z2$ = function (value) {
    var base = OverflowValues_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Layout.prototype.overflow_fdwaog$$default = function (sm, md, lg, xl) {
    property_4(this, OverflowValues_getInstance(), sm, md, lg, xl);
  };
  Layout.prototype.overflow_fdwaog$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.overflow_fdwaog$$default(sm, md, lg, xl);
  };
  Layout.prototype.overflowX_1qx2a0$ = function (value) {
    var base = OverflowXValues_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Layout.prototype.overflowX_kajdkc$$default = function (sm, md, lg, xl) {
    property_4(this, OverflowXValues_getInstance(), sm, md, lg, xl);
  };
  Layout.prototype.overflowX_kajdkc$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.overflowX_kajdkc$$default(sm, md, lg, xl);
  };
  Layout.prototype.overflowY_iu6k55$ = function (value) {
    var base = OverflowYValues_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Layout.prototype.overflowY_9but3o$$default = function (sm, md, lg, xl) {
    property_4(this, OverflowYValues_getInstance(), sm, md, lg, xl);
  };
  Layout.prototype.overflowY_9but3o$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.overflowY_9but3o$$default(sm, md, lg, xl);
  };
  Layout.prototype.grid_5hf0eu$ = function (value) {
    value(new GridContext(this, new SelfAlignmentImpl(this, this.smProperties), this.smProperties));
  };
  Layout.prototype.grid_jhf0yc$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new GridContext(this, new SelfAlignmentImpl(this, this.smProperties), this.smProperties));
    if (md != null)
      md(new GridContext(this, new SelfAlignmentImpl(this, this.mdProperties), this.mdProperties));
    if (lg != null)
      lg(new GridContext(this, new SelfAlignmentImpl(this, this.lgProperties), this.lgProperties));
    if (xl != null)
      xl(new GridContext(this, new SelfAlignmentImpl(this, this.xlProperties), this.xlProperties));
  };
  Layout.prototype.grid_jhf0yc$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.grid_jhf0yc$$default(sm, md, lg, xl);
  };
  Layout.prototype.flex_e69mls$ = function (value) {
    value(new FlexItemContext(this, new SelfAlignmentImpl(this, this.smProperties), this.smProperties));
  };
  Layout.prototype.flex_6xqo6k$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new FlexItemContext(this, new SelfAlignmentImpl(this, this.smProperties), this.smProperties));
    if (md != null)
      md(new FlexItemContext(this, new SelfAlignmentImpl(this, this.mdProperties), this.mdProperties));
    if (lg != null)
      lg(new FlexItemContext(this, new SelfAlignmentImpl(this, this.lgProperties), this.lgProperties));
    if (xl != null)
      xl(new FlexItemContext(this, new SelfAlignmentImpl(this, this.xlProperties), this.xlProperties));
  };
  Layout.prototype.flex_6xqo6k$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.flex_6xqo6k$$default(sm, md, lg, xl);
  };
  Layout.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Layout', interfaces: [StyleParams]};
  function PropertyValues() {
  }
  PropertyValues.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PropertyValues', interfaces: []};
  function StyleParams() {
  }
  StyleParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyleParams', interfaces: []};
  var cssDelimiter;
  function property($receiver, key, value, target) {
    if (target === void 0)
      target = $receiver.smProperties;
    append(target, [key, value, cssDelimiter]);
  }
  function property_0($receiver, key, sm, md, lg, xl) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    if (sm != null)
      property($receiver, key, sm, $receiver.smProperties);
    if (md != null)
      property($receiver, key, md, $receiver.mdProperties);
    if (lg != null)
      property($receiver, key, lg, $receiver.lgProperties);
    if (xl != null)
      property($receiver, key, xl, $receiver.xlProperties);
  }
  function property_2($receiver, key, base, sm, md, lg, xl) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    property_0($receiver, key, sm != null ? sm(base) : null, md != null ? md(base) : null, lg != null ? lg(base) : null, xl != null ? xl(base) : null);
  }
  function property_4($receiver, base, sm, md, lg, xl) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    property_0($receiver, base.key, sm != null ? sm(base) : null, md != null ? md(base) : null, lg != null ? lg(base) : null, xl != null ? xl(base) : null);
  }
  function StyleParamsImpl() {
    this.smProperties_r1p190$_0 = StringBuilder_init();
    this.mdProperties_y2zd8p$_0 = StringBuilder_init();
    this.lgProperties_mtqnfx$_0 = StringBuilder_init();
    this.xlProperties_nf4ca$_0 = StringBuilder_init();
  }
  Object.defineProperty(StyleParamsImpl.prototype, 'smProperties', {configurable: true, get: function () {
    return this.smProperties_r1p190$_0;
  }});
  Object.defineProperty(StyleParamsImpl.prototype, 'mdProperties', {configurable: true, get: function () {
    return this.mdProperties_y2zd8p$_0;
  }});
  Object.defineProperty(StyleParamsImpl.prototype, 'lgProperties', {configurable: true, get: function () {
    return this.lgProperties_mtqnfx$_0;
  }});
  Object.defineProperty(StyleParamsImpl.prototype, 'xlProperties', {configurable: true, get: function () {
    return this.xlProperties_nf4ca$_0;
  }});
  StyleParamsImpl.prototype.toCss = function () {
    if (this.mdProperties.length > 0)
      append_0(this.smProperties, [Theme$Companion_getInstance().invoke().mediaQueryMd, '{', this.mdProperties, '}']);
    if (this.lgProperties.length > 0)
      append_0(this.smProperties, [Theme$Companion_getInstance().invoke().mediaQueryLg, '{', this.lgProperties, '}']);
    if (this.xlProperties.length > 0)
      append_0(this.smProperties, [Theme$Companion_getInstance().invoke().mediaQueryXl, '{', this.xlProperties, '}']);
    return this.smProperties.toString();
  };
  StyleParamsImpl.prototype.cssClasses_61zpoe$ = function (prefix) {
    var it = this.toCss();
    return it.length > 0 ? style(it, prefix) : StyleClass$Companion_getInstance().None;
  };
  StyleParamsImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleParamsImpl', interfaces: [BoxParams]};
  function BasicParams() {
  }
  BasicParams.prototype.invoke_qkhqzy$ = function ($receiver) {
    $receiver(this);
  };
  BasicParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BasicParams', interfaces: [PseudoElements, PseudoClasses, Layout, Shadow, Position, Background, Typo, Border, Color, Space]};
  function FlexParams() {
  }
  FlexParams.prototype.invoke_qkhqzy$ = function ($receiver) {
    $receiver(this);
  };
  FlexParams.prototype.invoke_5yoziz$ = function ($receiver) {
    $receiver(this);
  };
  FlexParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'FlexParams', interfaces: [Flexbox, BasicParams]};
  function GridParams() {
  }
  GridParams.prototype.invoke_qkhqzy$ = function ($receiver) {
    $receiver(this);
  };
  GridParams.prototype.invoke_tdl3c$ = function ($receiver) {
    $receiver(this);
  };
  GridParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'GridParams', interfaces: [GridLayout, BasicParams]};
  function BoxParams() {
  }
  BoxParams.prototype.invoke_qkhqzy$ = function ($receiver) {
    $receiver(this);
  };
  BoxParams.prototype.invoke_4my6up$ = function ($receiver) {
    $receiver(this);
  };
  BoxParams.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BoxParams', interfaces: [GridParams, FlexParams]};
  var positionKey;
  function PositioningContext(styleParams, target) {
    this.styleParams = styleParams;
    this.target_0 = target;
  }
  PositioningContext.prototype.top_bcpvvc$ = function (value) {
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, 'top: ', value(base), target);
  };
  PositioningContext.prototype.left_bcpvvc$ = function (value) {
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, 'left: ', value(base), target);
  };
  PositioningContext.prototype.bottom_bcpvvc$ = function (value) {
    var key = 'bottom: ';
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  PositioningContext.prototype.right_bcpvvc$ = function (value) {
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, 'right: ', value(base), target);
  };
  PositioningContext.prototype.vertical_bcpvvc$ = function (value) {
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, 'top: ', value(base), target);
    var key = 'bottom: ';
    var base_0 = Theme$Companion_getInstance().invoke().space;
    var target_0 = this.target_0;
    property(this, key, value(base_0), target_0);
  };
  PositioningContext.prototype.horizontal_bcpvvc$ = function (value) {
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, 'left: ', value(base), target);
    var base_0 = Theme$Companion_getInstance().invoke().space;
    var target_0 = this.target_0;
    property(this, 'right: ', value(base_0), target_0);
  };
  Object.defineProperty(PositioningContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(PositioningContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(PositioningContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(PositioningContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  PositioningContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'PositioningContext', interfaces: [StyleParams]};
  function PositionContext(styleParams, target) {
    this.styleParams = styleParams;
    this.target_0 = target;
    this.static = property(this, positionKey, 'static', this.target_0);
  }
  PositionContext.prototype.relative_dkjn9d$ = function (value) {
    this.positioning_0(value, 'relative');
  };
  PositionContext.prototype.absolute_dkjn9d$ = function (value) {
    this.positioning_0(value, 'absolute');
  };
  PositionContext.prototype.sticky_dkjn9d$ = function (value) {
    this.positioning_0(value, 'sticky');
  };
  PositionContext.prototype.fixed_dkjn9d$ = function (value) {
    this.positioning_0(value, 'fixed');
  };
  PositionContext.prototype.positioning_0 = function (value, positionValue) {
    var tempCss = StringBuilder_init();
    value(new PositioningContext(this, tempCss));
    property(this, positionKey, positionValue + cssDelimiter + tempCss, this.target_0);
  };
  Object.defineProperty(PositionContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(PositionContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(PositionContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(PositionContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  PositionContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'PositionContext', interfaces: [StyleParams]};
  function Position() {
  }
  Position.prototype.zIndex_yiflju$ = function (value) {
    var key = ZIndices$Companion_getInstance().key;
    var base = Theme$Companion_getInstance().invoke().zIndices;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Position.prototype.zIndex_r75jho$$default = function (sm, md, lg, xl) {
    property_2(this, ZIndices$Companion_getInstance().key, Theme$Companion_getInstance().invoke().zIndices, sm, md, lg, xl);
  };
  Position.prototype.zIndex_r75jho$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.zIndex_r75jho$$default(sm, md, lg, xl);
  };
  Position.prototype.position_wp9r2r$ = function (value) {
    property_2(this, positionKey, (value(new PositionContext(this, this.smProperties)), Unit));
  };
  Position.prototype.position_vgpajw$$default = function (sm, md, lg, xl) {
    if (sm != null)
      property_2(this, positionKey, (sm(new PositionContext(this, this.smProperties)), Unit));
    if (md != null)
      property_2(this, positionKey, (md(new PositionContext(this, this.mdProperties)), Unit));
    if (lg != null)
      property_2(this, positionKey, (lg(new PositionContext(this, this.lgProperties)), Unit));
    if (xl != null)
      property_2(this, positionKey, (xl(new PositionContext(this, this.xlProperties)), Unit));
  };
  Position.prototype.position_vgpajw$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.position_vgpajw$$default(sm, md, lg, xl);
  };
  Position.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Position', interfaces: [StyleParams]};
  function PseudoElements() {
  }
  PseudoElements.prototype.pseudoElement_iaoh6o$_0 = function (key, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.pseudoElement_qsy49e$_0 = function (key, content, parameter) {
    if (parameter === void 0)
      parameter = '';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '(' + parameter + ')', '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.after_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', 'after', '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.before_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', 'before', '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.firstLetter_xighi7$ = function (content) {
    var key = 'first-letter';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.firstLine_xighi7$ = function (content) {
    var key = 'first-line';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.grammarError_xighi7$ = function (content) {
    var key = 'grammar-error';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.marker_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', 'marker', '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.selection_xighi7$ = function (content) {
    var key = 'selection';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.prototype.spellingError_xighi7$ = function (content) {
    var key = 'spelling-error';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &::', key, '{', base.toCss(), '} ']);
  };
  PseudoElements.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PseudoElements', interfaces: [StyleParams]};
  function PseudoClasses() {
  }
  PseudoClasses.prototype.pseudoClass_dvv9uz$_0 = function (key, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.pseudoClass_3667b1$_0 = function (key, content, parameter) {
    if (parameter === void 0)
      parameter = '';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '(' + parameter + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.active_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'active', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.anyLink_xighi7$ = function (content) {
    var key = 'any-link';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.blank_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'blank', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.checked_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'checked', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.current_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'current', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.default_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'default', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.disabled_xighi7$ = function (content) {
    var key = 'disabled';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.empty_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'empty', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.enabled_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'enabled', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.first_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'first', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.firstChild_xighi7$ = function (content) {
    var key = 'first-child';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.firstOfType_xighi7$ = function (content) {
    var key = 'first-of-type';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.fullscreen_xighi7$ = function (content) {
    var key = 'fullscreen';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.focus_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'focus', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.focusVisible_xighi7$ = function (content) {
    var key = 'focus-visible';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.focusWithin_xighi7$ = function (content) {
    var key = 'focus-within';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.future_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'future', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.hover_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'hover', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.indeterminate_xighi7$ = function (content) {
    var key = 'indeterminate';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.inRange_xighi7$ = function (content) {
    var key = 'in-range';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.invalid_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'invalid', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.lastChild_xighi7$ = function (content) {
    var key = 'last-child';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.lastOfType_xighi7$ = function (content) {
    var key = 'last-of-type';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.left_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'left', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.link_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'link', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.localLink_xighi7$ = function (content) {
    var key = 'local-link';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.onlyChild_xighi7$ = function (content) {
    var key = 'only-child';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.onlyOfType_xighi7$ = function (content) {
    var key = 'only-of-type';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.optional_xighi7$ = function (content) {
    var key = 'optional';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.outOfRange_xighi7$ = function (content) {
    var key = 'out-of-range';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.readOnly_xighi7$ = function (content) {
    var key = 'read-only';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.readWrite_xighi7$ = function (content) {
    var key = 'read-write';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.required_xighi7$ = function (content) {
    var key = 'required';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.right_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'right', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.root_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'root', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.scope_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'scope', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.target_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'target', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.valid_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'valid', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.visited_xighi7$ = function (content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'visited', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.dir_qlrppv$ = function (param, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'dir', '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.lang_qlrppv$ = function (param, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'lang', '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.not_qlrppv$ = function (param, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', 'not', '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.nthChild_qlrppv$ = function (param, content) {
    var key = 'nth-child';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.nthLastChild_qlrppv$ = function (param, content) {
    var key = 'nth-last-child';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.nthLastOfType_qlrppv$ = function (param, content) {
    var key = 'nth-last-of-type';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.nthOfType_qlrppv$ = function (param, content) {
    var key = 'nth-of-type';
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [' &:', key, '(' + param + ')', '{', base.toCss(), '} ']);
  };
  PseudoClasses.prototype.children_qlrppv$ = function (selector, content) {
    var base = new StyleParamsImpl();
    content(base);
    append(this.smProperties, [selector, '{', base.toCss(), '} ']);
  };
  PseudoClasses.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PseudoClasses', interfaces: [StyleParams]};
  var textShadowKey;
  var boxShadowKey;
  function shadow(offsetHorizontal, offsetVertical, blur, spread, color, inset) {
    if (offsetVertical === void 0)
      offsetVertical = offsetHorizontal;
    if (blur === void 0)
      blur = null;
    if (spread === void 0)
      spread = null;
    if (color === void 0)
      color = null;
    if (inset === void 0)
      inset = false;
    var $receiver = StringBuilder_init();
    append($receiver, [offsetHorizontal, ' ', offsetVertical]);
    if (blur != null)
      append($receiver, [' ', blur]);
    if (spread != null)
      append($receiver, [' ', spread]);
    if (color != null)
      append($receiver, [' ', color]);
    if (inset)
      $receiver.append_pdl1vj$(' inset');
    return $receiver.toString();
  }
  function and($receiver, other) {
    return $receiver + ', ' + other;
  }
  function Shadow() {
  }
  Shadow.prototype.textShadow_ihm9h8$ = function (value) {
    var key = textShadowKey;
    var base = Theme$Companion_getInstance().invoke().shadows;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Shadow.prototype.textShadow_h2dnmw$$default = function (sm, md, lg, xl) {
    property_2(this, textShadowKey, Theme$Companion_getInstance().invoke().shadows, sm, md, lg, xl);
  };
  Shadow.prototype.textShadow_h2dnmw$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.textShadow_h2dnmw$$default(sm, md, lg, xl);
  };
  Shadow.prototype.boxShadow_ihm9h8$ = function (value) {
    var key = boxShadowKey;
    var base = Theme$Companion_getInstance().invoke().shadows;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Shadow.prototype.boxShadow_h2dnmw$$default = function (sm, md, lg, xl) {
    property_2(this, boxShadowKey, Theme$Companion_getInstance().invoke().shadows, sm, md, lg, xl);
  };
  Shadow.prototype.boxShadow_h2dnmw$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.boxShadow_h2dnmw$$default(sm, md, lg, xl);
  };
  Shadow.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Shadow', interfaces: [StyleParams]};
  var marginKey;
  var marginTopKey;
  var marginRightKey;
  var marginBottomKey;
  var marginLeftKey;
  var paddingKey;
  var paddingTopKey;
  var paddingRightKey;
  var paddingBottomKey;
  var paddingLeftKey;
  function SpacesContext(topKey, leftKey, bottomKey, rightKey, styleParams, target) {
    this.topKey_0 = topKey;
    this.leftKey_0 = leftKey;
    this.bottomKey_0 = bottomKey;
    this.rightKey_0 = rightKey;
    this.styleParams = styleParams;
    this.target_0 = target;
  }
  SpacesContext.prototype.top_bcpvvc$ = function (value) {
    var key = this.topKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  SpacesContext.prototype.left_bcpvvc$ = function (value) {
    var key = this.leftKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  SpacesContext.prototype.bottom_bcpvvc$ = function (value) {
    var key = this.bottomKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  SpacesContext.prototype.right_bcpvvc$ = function (value) {
    var key = this.rightKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
  };
  SpacesContext.prototype.vertical_bcpvvc$ = function (value) {
    var key = this.topKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
    var key_0 = this.bottomKey_0;
    var base_0 = Theme$Companion_getInstance().invoke().space;
    var target_0 = this.target_0;
    property(this, key_0, value(base_0), target_0);
  };
  SpacesContext.prototype.horizontal_bcpvvc$ = function (value) {
    var key = this.leftKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
    var key_0 = this.rightKey_0;
    var base_0 = Theme$Companion_getInstance().invoke().space;
    var target_0 = this.target_0;
    property(this, key_0, value(base_0), target_0);
  };
  SpacesContext.prototype.all_bcpvvc$ = function (value) {
    var key = this.leftKey_0;
    var base = Theme$Companion_getInstance().invoke().space;
    var target = this.target_0;
    property(this, key, value(base), target);
    var key_0 = this.rightKey_0;
    var base_0 = Theme$Companion_getInstance().invoke().space;
    var target_0 = this.target_0;
    property(this, key_0, value(base_0), target_0);
    var key_1 = this.topKey_0;
    var base_1 = Theme$Companion_getInstance().invoke().space;
    var target_1 = this.target_0;
    property(this, key_1, value(base_1), target_1);
    var key_2 = this.bottomKey_0;
    var base_2 = Theme$Companion_getInstance().invoke().space;
    var target_2 = this.target_0;
    property(this, key_2, value(base_2), target_2);
  };
  Object.defineProperty(SpacesContext.prototype, 'lgProperties', {get: function () {
    return this.styleParams.lgProperties;
  }});
  Object.defineProperty(SpacesContext.prototype, 'mdProperties', {get: function () {
    return this.styleParams.mdProperties;
  }});
  Object.defineProperty(SpacesContext.prototype, 'smProperties', {get: function () {
    return this.styleParams.smProperties;
  }});
  Object.defineProperty(SpacesContext.prototype, 'xlProperties', {get: function () {
    return this.styleParams.xlProperties;
  }});
  SpacesContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'SpacesContext', interfaces: [StyleParams]};
  function Space() {
  }
  Space.prototype.margin_bcpvvc$ = function (value) {
    var key = marginKey;
    var base = Theme$Companion_getInstance().invoke().space;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Space.prototype.margin_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, marginKey, Theme$Companion_getInstance().invoke().space, sm, md, lg, xl);
  };
  Space.prototype.margin_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.margin_bhtwo8$$default(sm, md, lg, xl);
  };
  Space.prototype.margins_ptb4s1$ = function (value) {
    value(new SpacesContext(marginTopKey, marginLeftKey, marginBottomKey, marginRightKey, this, this.smProperties));
  };
  Space.prototype.margins_k1pnzg$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new SpacesContext(marginTopKey, marginLeftKey, marginBottomKey, marginRightKey, this, this.smProperties));
    if (md != null)
      md(new SpacesContext(marginTopKey, marginLeftKey, marginBottomKey, marginRightKey, this, this.mdProperties));
    if (lg != null)
      lg(new SpacesContext(marginTopKey, marginLeftKey, marginBottomKey, marginRightKey, this, this.lgProperties));
    if (xl != null)
      xl(new SpacesContext(marginTopKey, marginLeftKey, marginBottomKey, marginRightKey, this, this.xlProperties));
  };
  Space.prototype.margins_k1pnzg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.margins_k1pnzg$$default(sm, md, lg, xl);
  };
  Space.prototype.padding_bcpvvc$ = function (value) {
    var key = paddingKey;
    var base = Theme$Companion_getInstance().invoke().space;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Space.prototype.padding_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, paddingKey, Theme$Companion_getInstance().invoke().space, sm, md, lg, xl);
  };
  Space.prototype.padding_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.padding_bhtwo8$$default(sm, md, lg, xl);
  };
  Space.prototype.paddings_ptb4s1$ = function (value) {
    value(new SpacesContext(paddingTopKey, paddingLeftKey, paddingBottomKey, paddingRightKey, this, this.smProperties));
  };
  Space.prototype.paddings_k1pnzg$$default = function (sm, md, lg, xl) {
    if (sm != null)
      sm(new SpacesContext(paddingTopKey, paddingLeftKey, paddingBottomKey, paddingRightKey, this, this.smProperties));
    if (md != null)
      md(new SpacesContext(paddingTopKey, paddingLeftKey, paddingBottomKey, paddingRightKey, this, this.mdProperties));
    if (lg != null)
      lg(new SpacesContext(paddingTopKey, paddingLeftKey, paddingBottomKey, paddingRightKey, this, this.lgProperties));
    if (xl != null)
      xl(new SpacesContext(paddingTopKey, paddingLeftKey, paddingBottomKey, paddingRightKey, this, this.xlProperties));
  };
  Space.prototype.paddings_k1pnzg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.paddings_k1pnzg$$default(sm, md, lg, xl);
  };
  Space.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Space', interfaces: [StyleParams]};
  function styled$lambda(this$styled, closure$baseClass, closure$additionalClass, closure$id) {
    return function ($receiver, init) {
      var tmp$ = this$styled;
      var $receiver_0 = closure$baseClass != null ? closure$baseClass.name : null;
      var $receiver_1 = closure$additionalClass != null ? closure$additionalClass.name : null;
      return tmp$(($receiver_0 != null ? $receiver_0 : '') + ' ' + ($receiver_1 != null ? $receiver_1 : ''), closure$id, init);
    };
  }
  function styled($receiver, baseClass, id, prefix, styling) {
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'css';
    var $receiver_0 = new StyleParamsImpl();
    styling($receiver_0);
    var additionalClass = $receiver_0.cssClasses_61zpoe$(prefix);
    return styled$lambda($receiver, baseClass, additionalClass, id);
  }
  function styled$lambda_0($receiver) {
    return Unit;
  }
  function styled$lambda_1(this$styled, closure$baseClass, closure$additionalClass, closure$id) {
    return function ($receiver, init) {
      return this$styled(StyleClass$Companion_getInstance().plus_8gl57z$(closure$baseClass, closure$additionalClass).name, closure$id, init);
    };
  }
  function styled_0($receiver, parentStyling, baseClass, id, prefix, styling) {
    if (parentStyling === void 0)
      parentStyling = styled$lambda_0;
    if (baseClass === void 0)
      baseClass = null;
    if (id === void 0)
      id = null;
    if (prefix === void 0)
      prefix = 'css';
    var $receiver_0 = new StyleParamsImpl();
    $receiver_0.invoke_4my6up$(styling);
    $receiver_0.invoke_4my6up$(parentStyling);
    var additionalClass = $receiver_0.cssClasses_61zpoe$(prefix);
    return styled$lambda_1($receiver, baseClass, additionalClass, id);
  }
  function TextTransforms() {
    TextTransforms_instance = this;
    this.key_g3iijx$_0 = 'text-transform: ';
    this.none = 'none';
    this.capitalize = 'capitalize';
    this.uppercase = 'uppercase';
    this.lowercase = 'lowercase';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Object.defineProperty(TextTransforms.prototype, 'key', {configurable: true, get: function () {
    return this.key_g3iijx$_0;
  }});
  TextTransforms.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TextTransforms', interfaces: [PropertyValues]};
  var TextTransforms_instance = null;
  function TextTransforms_getInstance() {
    if (TextTransforms_instance === null) {
      new TextTransforms();
    }return TextTransforms_instance;
  }
  function FontStyles() {
    FontStyles_instance = this;
    this.key_k4922y$_0 = 'font-style: ';
    this.normal = 'normal';
    this.italic = 'italic';
    this.oblique = 'oblique';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Object.defineProperty(FontStyles.prototype, 'key', {configurable: true, get: function () {
    return this.key_k4922y$_0;
  }});
  FontStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FontStyles', interfaces: [PropertyValues]};
  var FontStyles_instance = null;
  function FontStyles_getInstance() {
    if (FontStyles_instance === null) {
      new FontStyles();
    }return FontStyles_instance;
  }
  function TextAligns() {
    TextAligns_instance = this;
    this.key_tewd1w$_0 = 'text-align: ';
    this.left = 'left';
    this.right = 'right';
    this.center = 'center';
    this.justify = 'justify';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Object.defineProperty(TextAligns.prototype, 'key', {configurable: true, get: function () {
    return this.key_tewd1w$_0;
  }});
  TextAligns.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TextAligns', interfaces: [PropertyValues]};
  var TextAligns_instance = null;
  function TextAligns_getInstance() {
    if (TextAligns_instance === null) {
      new TextAligns();
    }return TextAligns_instance;
  }
  function FontWeights() {
    FontWeights_instance = this;
    this.key_mxqmrj$_0 = 'font-weight: ';
    this.normal = 'normal';
    this.bold = 'bold';
    this.medium = '500';
    this.semiBold = '600';
    this.bolder = 'bolder';
    this.lighter = 'lighter';
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Object.defineProperty(FontWeights.prototype, 'key', {configurable: true, get: function () {
    return this.key_mxqmrj$_0;
  }});
  FontWeights.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FontWeights', interfaces: [PropertyValues]};
  var FontWeights_instance = null;
  function FontWeights_getInstance() {
    if (FontWeights_instance === null) {
      new FontWeights();
    }return FontWeights_instance;
  }
  function TextDecorations() {
    TextDecorations_instance = this;
    this.key_a9p297$_0 = 'text-decoration: ';
    this.none = 'none';
    this.underline = 'underline';
    this.inherit = 'inherit';
    this.initial = 'initial';
    this.unset = 'unset';
  }
  Object.defineProperty(TextDecorations.prototype, 'key', {configurable: true, get: function () {
    return this.key_a9p297$_0;
  }});
  TextDecorations.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TextDecorations', interfaces: [PropertyValues]};
  var TextDecorations_instance = null;
  function TextDecorations_getInstance() {
    if (TextDecorations_instance === null) {
      new TextDecorations();
    }return TextDecorations_instance;
  }
  var fontSizeKey;
  var letterSpacingKey;
  var lineHeightKey;
  function Typo() {
  }
  Typo.prototype.fontFamily_emhhv9$ = function (value) {
    var key = fontSizeKey;
    var base = Theme$Companion_getInstance().invoke().fonts;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Typo.prototype.fontFamily_nw47z0$$default = function (sm, md, lg, xl) {
    property_2(this, fontSizeKey, Theme$Companion_getInstance().invoke().fonts, sm, md, lg, xl);
  };
  Typo.prototype.fontFamily_nw47z0$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.fontFamily_nw47z0$$default(sm, md, lg, xl);
  };
  Typo.prototype.fontSize_bcpvvc$ = function (value) {
    var key = fontSizeKey;
    var base = Theme$Companion_getInstance().invoke().fontSizes;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Typo.prototype.fontSize_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, fontSizeKey, Theme$Companion_getInstance().invoke().fontSizes, sm, md, lg, xl);
  };
  Typo.prototype.fontSize_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.fontSize_bhtwo8$$default(sm, md, lg, xl);
  };
  Typo.prototype.fontWeight_wyjwgc$ = function (value) {
    var base = FontWeights_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Typo.prototype.fontWeight_fwmnos$$default = function (sm, md, lg, xl) {
    property_4(this, FontWeights_getInstance(), sm, md, lg, xl);
  };
  Typo.prototype.fontWeight_fwmnos$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.fontWeight_fwmnos$$default(sm, md, lg, xl);
  };
  Typo.prototype.textDecoration_jcyvho$$default = function (sm, md, lg, xl) {
    property_4(this, TextDecorations_getInstance(), sm, md, lg, xl);
  };
  Typo.prototype.textDecoration_jcyvho$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.textDecoration_jcyvho$$default(sm, md, lg, xl);
  };
  Typo.prototype.textDecoration_cogaie$ = function (value) {
    var base = TextDecorations_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Typo.prototype.lineHeight_bcpvvc$ = function (value) {
    var key = lineHeightKey;
    var base = Theme$Companion_getInstance().invoke().lineHeights;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Typo.prototype.lineHeight_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, lineHeightKey, Theme$Companion_getInstance().invoke().lineHeights, sm, md, lg, xl);
  };
  Typo.prototype.lineHeight_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.lineHeight_bhtwo8$$default(sm, md, lg, xl);
  };
  Typo.prototype.letterSpacing_bcpvvc$ = function (value) {
    var key = letterSpacingKey;
    var base = Theme$Companion_getInstance().invoke().letterSpacings;
    var target;
    target = this.smProperties;
    property(this, key, value(base), target);
  };
  Typo.prototype.letterSpacing_bhtwo8$$default = function (sm, md, lg, xl) {
    property_2(this, letterSpacingKey, Theme$Companion_getInstance().invoke().letterSpacings, sm, md, lg, xl);
  };
  Typo.prototype.letterSpacing_bhtwo8$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.letterSpacing_bhtwo8$$default(sm, md, lg, xl);
  };
  Typo.prototype.textAlign_beucyh$ = function (value) {
    var base = TextAligns_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Typo.prototype.textAlign_xttfdg$$default = function (sm, md, lg, xl) {
    property_4(this, TextAligns_getInstance(), sm, md, lg, xl);
  };
  Typo.prototype.textAlign_xttfdg$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.textAlign_xttfdg$$default(sm, md, lg, xl);
  };
  Typo.prototype.textTransform_4zs19q$ = function (value) {
    var base = TextTransforms_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Typo.prototype.textTransform_buri34$$default = function (sm, md, lg, xl) {
    property_4(this, TextTransforms_getInstance(), sm, md, lg, xl);
  };
  Typo.prototype.textTransform_buri34$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.textTransform_buri34$$default(sm, md, lg, xl);
  };
  Typo.prototype.fontStyle_d5s4tt$ = function (value) {
    var base = FontStyles_getInstance();
    property(this, base.key, value(base), this.smProperties);
  };
  Typo.prototype.fontStyle_tz3ah0$$default = function (sm, md, lg, xl) {
    property_4(this, FontStyles_getInstance(), sm, md, lg, xl);
  };
  Typo.prototype.fontStyle_tz3ah0$ = function (sm, md, lg, xl, callback$default) {
    if (sm === void 0)
      sm = null;
    if (md === void 0)
      md = null;
    if (lg === void 0)
      lg = null;
    if (xl === void 0)
      xl = null;
    callback$default ? callback$default(sm, md, lg, xl) : this.fontStyle_tz3ah0$$default(sm, md, lg, xl);
  };
  Typo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Typo', interfaces: [StyleParams]};
  function Styling() {
    Styling_instance = this;
    this.dynamicStyleSheetId_0 = 'fritz2Dynamic';
    this.staticStyleSheetId_0 = 'fritz2Static';
    this.rules_0 = LinkedHashSet_init();
    this.staticSheet_0 = new Styling$Sheet(this.staticStyleSheetId_0);
    this.dynamicSheet_0 = new Styling$Sheet(this.dynamicStyleSheetId_0);
  }
  function Styling$Sheet(id) {
    this.id = id;
    this.counter = 0;
    this.styleSheet = this.create_0();
    this.middleware = middleware([getCallableRef('stringify', function (p1, p2, p3, p4) {
      return stringify(p1, p2, p3, p4);
    }), this.addRuleMiddleware_0()]);
  }
  function Styling$Sheet$addRuleMiddleware$lambda$lambda(this$Sheet) {
    return function ($receiver) {
      var tmp$;
      var tmp$_0 = $receiver != null;
      if (tmp$_0) {
        tmp$_0 = !isBlank($receiver);
      }if (tmp$_0) {
        this$Sheet.styleSheet.insertRule($receiver, (tmp$ = this$Sheet.counter, this$Sheet.counter = tmp$ + 1 | 0, tmp$));
      }return Unit;
    };
  }
  function Styling$Sheet$addRuleMiddleware$lambda(this$Sheet) {
    return function (value) {
      var tmp$, tmp$_0, tmp$_1;
      try {
        if (value.root == null) {
          tmp$_0 = (tmp$ = value['return']) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
          Styling$Sheet$addRuleMiddleware$lambda$lambda(this$Sheet)(tmp$_0);
        }} catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.error('unable to insert rule in stylesheet: ' + toString(e.message), e);
          tmp$_1 = this$Sheet.counter;
          this$Sheet.counter = tmp$_1 - 1 | 0;
        } else
          throw e;
      }
      return undefined;
    };
  }
  Styling$Sheet.prototype.addRuleMiddleware_0 = function () {
    return Styling$Sheet$addRuleMiddleware$lambda(this);
  };
  Styling$Sheet.prototype.create_0 = function () {
    var tmp$, tmp$_0;
    var style = Kotlin.isType(tmp$ = document.createElement('style'), HTMLStyleElement) ? tmp$ : throwCCE();
    style.setAttribute('id', this.id);
    style.appendChild(document.createTextNode(''));
    ensureNotNull(document.head).appendChild(style);
    return Kotlin.isType(tmp$_0 = ensureNotNull(style.sheet), CSSStyleSheet) ? tmp$_0 : throwCCE();
  };
  Styling$Sheet.prototype.remove = function () {
    var tmp$;
    this.styleSheet.disabled = true;
    if ((tmp$ = document.getElementById(this.id)) != null) {
      var tmp$_0;
      (tmp$_0 = tmp$.parentNode) != null && tmp$_0.removeChild(tmp$);
    }};
  Styling$Sheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'Sheet', interfaces: []};
  Styling.prototype.resetCss_61zpoe$ = function (css) {
    this.dynamicSheet_0.remove();
    this.rules_0.clear();
    this.dynamicSheet_0 = new Styling$Sheet(this.dynamicStyleSheetId_0);
    this.addDynamicCss_puj7f4$('reset', css);
  };
  Styling.prototype.addStaticCss_61zpoe$ = function (css) {
    serialize(compile(css), this.staticSheet_0.middleware);
  };
  Styling.prototype.addDynamicCss_puj7f4$ = function (key, css) {
    if (!this.rules_0.contains_11rb$(key)) {
      serialize(compile(css), this.dynamicSheet_0.middleware);
      this.rules_0.add_11rb$(key);
    }};
  Styling.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styling', interfaces: []};
  var Styling_instance = null;
  function Styling_getInstance() {
    if (Styling_instance === null) {
      new Styling();
    }return Styling_instance;
  }
  function resetCss(css) {
    Styling_getInstance().resetCss_61zpoe$(css);
  }
  function StyleClass(name) {
    StyleClass$Companion_getInstance();
    this.name = name;
  }
  function StyleClass$Companion() {
    StyleClass$Companion_instance = this;
    this.None = new StyleClass('');
  }
  StyleClass$Companion.prototype.plus_ilq45s$ = function ($receiver, other) {
    var $receiver_0 = $receiver != null ? $receiver.name : null;
    return new StyleClass(($receiver_0 != null ? $receiver_0 : '') + ' ' + other.name);
  };
  StyleClass$Companion.prototype.plus_8gl57z$ = function ($receiver, other) {
    var $receiver_0 = $receiver != null ? $receiver.name : null;
    var $receiver_1 = other != null ? other.name : null;
    return new StyleClass(($receiver_0 != null ? $receiver_0 : '') + ' ' + ($receiver_1 != null ? $receiver_1 : ''));
  };
  StyleClass$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StyleClass$Companion_instance = null;
  function StyleClass$Companion_getInstance() {
    if (StyleClass$Companion_instance === null) {
      new StyleClass$Companion();
    }return StyleClass$Companion_instance;
  }
  StyleClass.prototype.plus_fox8kt$ = function (other) {
    return new StyleClass(this.name + ' ' + other.name);
  };
  StyleClass.prototype.plus_ar5zv2$ = function (other) {
    var $receiver = other != null ? other.name : null;
    return new StyleClass(this.name + ' ' + ($receiver != null ? $receiver : ''));
  };
  StyleClass.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleClass', interfaces: []};
  StyleClass.prototype.unbox = function () {
    return this.name;
  };
  StyleClass.prototype.toString = function () {
    return 'StyleClass(name=' + Kotlin.toString(this.name) + ')';
  };
  StyleClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  StyleClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function staticStyle_0(name, css) {
    Styling_getInstance().addStaticCss_61zpoe$('.' + name + ' { ' + css + ' }');
    return new StyleClass(name);
  }
  function style(css, prefix) {
    if (prefix === void 0)
      prefix = 's';
    var hash = v3(css);
    var $receiver = new StyleClass(prefix + '-' + generateAlphabeticName(hash));
    Styling_getInstance().addDynamicCss_puj7f4$($receiver.name, '.' + $receiver.name + ' { ' + css + ' }');
    return $receiver;
  }
  function DefaultTheme() {
    this.name_sferpw$_0 = 'default';
    this.breakPoints_hqkast$_0 = new ResponsiveValue('30em', '48em', '62em', '80em');
    this.mediaQueryMd_7oiak$_0 = '@media screen and (min-width: ' + this.breakPoints.md + ')';
    this.mediaQueryLg_7oiyo$_0 = '@media screen and (min-width: ' + this.breakPoints.lg + ')';
    this.mediaQueryXl_7o9y1$_0 = '@media screen and (min-width: ' + this.breakPoints.xl + ')';
    this.space_vhmk7j$_0 = new ScaledValue('1rem', '0.75rem', '0.5rem', '0.25rem', '1.25rem', '1.5rem', '2rem', '3rem', '0', '4rem');
    this.position_olpmdm$_0 = this.space;
    this.gaps_sbka4i$_0 = this.space;
    this.fontSizes_i5zyby$_0 = new ScaledValue('1rem', '0.875rem', '0.75rem', void 0, '1.25rem', '1.5rem', '1.875rem', '3rem', void 0, '4rem');
    this.colors_uq6e6n$_0 = new DefaultTheme$colors$ObjectLiteral();
    this.fonts_pbqc9d$_0 = new DefaultTheme$fonts$ObjectLiteral();
    this.lineHeights_cxudoj$_0 = new ScaledValue('normal', '1.3', '1.25', '1.2', '1.5', '1.7', '2', '2.25', void 0, '3');
    this.letterSpacings_4m4zfb$_0 = new ScaledValue('0', '-0.025em', '-0.05em', void 0, '0.025em', '0.05em', '0.1em');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.sizes_ve80jn$_0 = new Sizes('1rem', '0.75rem', '0.5rem', '0.25rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '100%', new ScaledValue('auto', '13rem', '8rem', '5rem', '21rem', '34rem', '55rem', '89rem'));
    this.borderWidths_3e3m3e$_0 = new Thickness('0px', '2px', '1px', '4px', '0.1px');
    this.radii_use2f4$_0 = new ScaledValue('0.375rem', '0.225rem', '0.125rem', void 0, '0.5rem', '12px', void 0, void 0, '0', '9999px');
    tmp$ = and(shadow('0', '1px', '3px', void 0, rgba(0, 0, 0, 0.12)), shadow('0', '1px', '2px', rgba(0, 0, 0, 0.24)));
    tmp$_0 = and(shadow('0', '14px', '28px', rgba(0, 0, 0, 0.25)), shadow(' 0', '10px', '10px', rgba(0, 0, 0, 0.22)));
    tmp$_1 = and(shadow('0', '14px', '28px', rgba(0, 0, 0, 0.25)), shadow('0', '10px', '10px', rgba(0, 0, 0, 0.22)));
    tmp$_2 = and(shadow('0', '19px', '38px', rgba(0, 0, 0, 0.3)), shadow('0', '15px', '12px', rgba(0, 0, 0, 0.22)));
    tmp$_3 = shadow('0', '2px', '4px', void 0, rgba(0, 0, 0, 0.06), true);
    tmp$_4 = shadow('0', '0', '2px', void 0, rgba(0, 0, 255, 0.5));
    this.shadows_r13g4i$_0 = new Shadows(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, void 0, shadow('0', '0', '0', '3px', this.colors.secondary), tmp$_4, shadow('0', '0', '0', '1px', this.colors.danger));
    this.zIndices_32jzxq$_0 = new ZIndices(1, 100, 2, 200, 300, 2, 400, 2);
    this.opacities_jcwgcs$_0 = new WeightedValue('0.5');
    this.icons_qka6uz$_0 = new DefaultTheme$icons$ObjectLiteral();
    this.input_qqcpl7$_0 = new DefaultTheme$input$ObjectLiteral();
    this.checkbox_osl2xo$_0 = new DefaultTheme$checkbox$ObjectLiteral(this);
    this.radio_use2ka$_0 = new DefaultTheme$radio$ObjectLiteral();
    this.switch_et4t85$_0 = new DefaultTheme$switch$ObjectLiteral();
    this.button_j0jbnx$_0 = new DefaultTheme$button$ObjectLiteral();
    this.modal_smuww8$_0 = new DefaultTheme$modal$ObjectLiteral();
    this.popover_kg9vhs$_0 = new DefaultTheme$popover$ObjectLiteral();
    this.tooltip_nadrjm$_0 = new DefaultTheme$tooltip$ObjectLiteral();
    this.reset_uuuqw6$_0 = lazy(DefaultTheme$reset$lambda(this));
    this.textarea_12cj2d$_0 = new DefaultTheme$textarea$ObjectLiteral();
  }
  Object.defineProperty(DefaultTheme.prototype, 'name', {configurable: true, get: function () {
    return this.name_sferpw$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'breakPoints', {configurable: true, get: function () {
    return this.breakPoints_hqkast$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'mediaQueryMd', {configurable: true, get: function () {
    return this.mediaQueryMd_7oiak$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'mediaQueryLg', {configurable: true, get: function () {
    return this.mediaQueryLg_7oiyo$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'mediaQueryXl', {configurable: true, get: function () {
    return this.mediaQueryXl_7o9y1$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'space', {configurable: true, get: function () {
    return this.space_vhmk7j$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'position', {configurable: true, get: function () {
    return this.position_olpmdm$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'gaps', {configurable: true, get: function () {
    return this.gaps_sbka4i$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'fontSizes', {configurable: true, get: function () {
    return this.fontSizes_i5zyby$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'colors', {configurable: true, get: function () {
    return this.colors_uq6e6n$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'fonts', {configurable: true, get: function () {
    return this.fonts_pbqc9d$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'lineHeights', {configurable: true, get: function () {
    return this.lineHeights_cxudoj$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'letterSpacings', {configurable: true, get: function () {
    return this.letterSpacings_4m4zfb$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_ve80jn$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'borderWidths', {configurable: true, get: function () {
    return this.borderWidths_3e3m3e$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'radii', {configurable: true, get: function () {
    return this.radii_use2f4$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'shadows', {configurable: true, get: function () {
    return this.shadows_r13g4i$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'zIndices', {configurable: true, get: function () {
    return this.zIndices_32jzxq$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'opacities', {configurable: true, get: function () {
    return this.opacities_jcwgcs$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'icons', {configurable: true, get: function () {
    return this.icons_qka6uz$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'input', {configurable: true, get: function () {
    return this.input_qqcpl7$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'checkbox', {configurable: true, get: function () {
    return this.checkbox_osl2xo$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'radio', {configurable: true, get: function () {
    return this.radio_use2ka$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'switch', {configurable: true, get: function () {
    return this.switch_et4t85$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'button', {configurable: true, get: function () {
    return this.button_j0jbnx$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'modal', {configurable: true, get: function () {
    return this.modal_smuww8$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'popover', {configurable: true, get: function () {
    return this.popover_kg9vhs$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'tooltip', {configurable: true, get: function () {
    return this.tooltip_nadrjm$_0;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'reset', {configurable: true, get: function () {
    return this.reset_uuuqw6$_0.value;
  }});
  Object.defineProperty(DefaultTheme.prototype, 'textarea', {configurable: true, get: function () {
    return this.textarea_12cj2d$_0;
  }});
  function DefaultTheme$colors$ObjectLiteral() {
    this.secondary_zi6mt4$_0 = '#b2f5ea';
    this.tertiary_q99ska$_0 = '#718096';
    this.primary_nn7epy$_0 = '#319795';
    this.success_wu1peh$_0 = '#28a745';
    this.danger_t26uiz$_0 = '#dc3545';
    this.warning_3wmjj4$_0 = '#ffc107';
    this.info_rfyoja$_0 = '#3182ce';
    this.light_2yvyjq$_0 = '#e2e8f0';
    this.dark_rixpj2$_0 = '#2d3748';
    this.base_rk1a49$_0 = '#ffffff';
    this.primary_hover_glvnj7$_0 = 'rgb(49,151,149, 0.3)';
    this.light_hover_2egctz$_0 = 'rgb(226,232,240, 0.5)';
    this.disabled_4mznss$_0 = this.light;
    this.focus_7upes$_0 = '#3182ce';
  }
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'secondary', {configurable: true, get: function () {
    return this.secondary_zi6mt4$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'tertiary', {configurable: true, get: function () {
    return this.tertiary_q99ska$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'primary', {configurable: true, get: function () {
    return this.primary_nn7epy$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'success', {configurable: true, get: function () {
    return this.success_wu1peh$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'danger', {configurable: true, get: function () {
    return this.danger_t26uiz$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'warning', {configurable: true, get: function () {
    return this.warning_3wmjj4$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'info', {configurable: true, get: function () {
    return this.info_rfyoja$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'light', {configurable: true, get: function () {
    return this.light_2yvyjq$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'dark', {configurable: true, get: function () {
    return this.dark_rixpj2$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'base', {configurable: true, get: function () {
    return this.base_rk1a49$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'primary_hover', {configurable: true, get: function () {
    return this.primary_hover_glvnj7$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'light_hover', {configurable: true, get: function () {
    return this.light_hover_2egctz$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'disabled', {configurable: true, get: function () {
    return this.disabled_4mznss$_0;
  }});
  Object.defineProperty(DefaultTheme$colors$ObjectLiteral.prototype, 'focus', {configurable: true, get: function () {
    return this.focus_7upes$_0;
  }});
  DefaultTheme$colors$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Colors]};
  function DefaultTheme$fonts$ObjectLiteral() {
    this.body_lx1f54$_0 = 'system-ui, sans-serif';
    this.heading_bj98lk$_0 = 'system-ui, sans-serif';
    this.mono_lqzhft$_0 = 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace';
  }
  Object.defineProperty(DefaultTheme$fonts$ObjectLiteral.prototype, 'body', {configurable: true, get: function () {
    return this.body_lx1f54$_0;
  }});
  Object.defineProperty(DefaultTheme$fonts$ObjectLiteral.prototype, 'heading', {configurable: true, get: function () {
    return this.heading_bj98lk$_0;
  }});
  Object.defineProperty(DefaultTheme$fonts$ObjectLiteral.prototype, 'mono', {configurable: true, get: function () {
    return this.mono_lqzhft$_0;
  }});
  DefaultTheme$fonts$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Fonts]};
  function DefaultTheme$icons$ObjectLiteral() {
    this.add_61rzox$_0 = new IconDefinition('add', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="currentColor"/>\n            '));
    this.archive_acc7le$_0 = new IconDefinition('archive', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V7C22 7.74708 21.5904 8.39848 20.9835 8.74188C20.9944 8.82638 21 8.91253 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9C3 8.91253 3.00561 8.82638 3.0165 8.74188C2.40961 8.39848 2 7.74707 2 7V5ZM20 7V5H4V7H20ZM5 9V19H19V9H5ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z" fill="currentColor"/>\n            '));
    this.arrowDown_mclo4b$_0 = new IconDefinition('arrowDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z" fill="currentColor"/>\n            '));
    this.arrowLeftDown_7nfd7m$_0 = new IconDefinition('arrowLeftDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16L15 16C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18L7 18C6.44772 18 6 17.5523 6 17L6 9C6 8.44771 6.44772 8 7 8C7.55228 8 8 8.44771 8 9L8 14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z" fill="currentColor"/>\n            '));
    this.arrowLeftUp_ebxo1x$_0 = new IconDefinition('arrowLeftUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.41421L8 15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15L6 7C6 6.44772 6.44772 6 7 6L15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8L9.41421 8L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421Z" fill="currentColor"/>\n            '));
    this.arrowLeft_m8e1pc$_0 = new IconDefinition('arrowLeft', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z" fill="currentColor"/>\n            '));
    this.arrowRightDown_49mzrl$_0 = new IconDefinition('arrowRightDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858L16 9C16 8.44772 16.4477 8 17 8C17.5523 8 18 8.44772 18 9L18 17C18 17.5523 17.5523 18 17 18H9C8.44771 18 8 17.5523 8 17C8 16.4477 8.44771 16 9 16H14.5858L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" fill="currentColor"/>\n            '));
    this.arrowRightUp_y2thnu$_0 = new IconDefinition('arrowRightUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" fill="currentColor"/>\n            '));
    this.arrowRight_nzif75$_0 = new IconDefinition('arrowRight', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z" fill="currentColor"/>\n            '));
    this.arrowUp_34l1x0$_0 = new IconDefinition('arrowUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z" fill="currentColor"/>\n            '));
    this.attachment_il3lzz$_0 = new IconDefinition('attachment', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4628 5.57572C18.7755 4.82596 17.5344 4.77976 16.7071 5.60711L8.60706 13.7071C8.39758 13.9166 8.39758 14.1834 8.60706 14.3929C8.81653 14.6024 9.08337 14.6024 9.29284 14.3929L15.9928 7.69289C16.3834 7.30237 17.0165 7.30237 17.4071 7.69289C17.7976 8.08342 17.7976 8.71658 17.4071 9.10711L10.7071 15.8071C9.71653 16.7976 8.18337 16.7976 7.19284 15.8071C6.20232 14.8166 6.20232 13.2834 7.19284 12.2929L15.2928 4.19289C16.8604 2.62536 19.4077 2.57435 20.9223 4.2082C22.4746 5.77661 22.5203 8.31156 20.8928 9.82132L11.4071 19.3071C9.21653 21.4976 5.78337 21.4976 3.59284 19.3071C1.40232 17.1166 1.40232 13.6834 3.59284 11.4929L11.6928 3.39289C12.0834 3.00237 12.7165 3.00237 13.1071 3.39289C13.4976 3.78342 13.4976 4.41658 13.1071 4.80711L5.00706 12.9071C3.59758 14.3166 3.59758 16.4834 5.00706 17.8929C6.41653 19.3024 8.58337 19.3024 9.99284 17.8929L19.4928 8.39289C19.5031 8.38265 19.5135 8.37263 19.5242 8.36284C20.274 7.67556 20.3202 6.43445 19.4928 5.60711C19.4826 5.59686 19.4726 5.5864 19.4628 5.57572Z" fill="currentColor"/>\n            '));
    this.ban_61reov$_0 = new IconDefinition('ban', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.551 19.3729 16.9056 18.3199L5.68014 7.09436ZM7.09436 5.68014L18.3199 16.9056C19.3729 15.551 20 13.8487 20 12C20 7.58172 16.4183 4 12 4C10.1513 4 8.44904 4.62708 7.09436 5.68014ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>\n            '));
    this.barChartAlt_eeyche$_0 = new IconDefinition('barChartAlt', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4ZM17 8C17.5523 8 18 8.44772 18 9V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V9C16 8.44772 16.4477 8 17 8ZM7 12C7.55228 12 8 12.4477 8 13V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V13C6 12.4477 6.44772 12 7 12Z" fill="currentColor"/>\n            '));
    this.barChart_1e581l$_0 = new IconDefinition('barChart', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM19 5H5V19H19V5ZM12 7C12.5523 7 13 7.44772 13 8V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V8C11 7.44772 11.4477 7 12 7ZM16 9C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V10C15 9.44772 15.4477 9 16 9ZM8 11C8.55228 11 9 11.4477 9 12V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V12C7 11.4477 7.44772 11 8 11Z" fill="currentColor"/>\n            '));
    this.board_bq3dre$_0 = new IconDefinition('board', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5ZM8 5H4V19H8V5ZM10 5V19H14V5H10ZM16 5V19H20V5H16Z" fill="currentColor"/>\n            '));
    this.book_pkziaj$_0 = new IconDefinition('book', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.6335V17.5129C4.85122 17.2485 6.03984 17 7.5 17C8.96016 17 10.1488 17.2485 11 17.5129V6.6335C10.8601 6.57696 10.692 6.51452 10.4971 6.45153C9.80787 6.22874 8.78699 6 7.5 6C6.21301 6 5.19213 6.22874 4.50288 6.45153C4.308 6.51452 4.13986 6.57696 4 6.6335ZM11.4914 6.86097L11.4924 6.86157L11.4939 6.86248L11.4952 6.86326C11.4953 6.86332 11.4944 6.86268 11.4914 6.86097ZM12 4.88528C11.7743 4.78519 11.4765 4.66622 11.1123 4.54847C10.2546 4.27126 9.02551 4 7.5 4C5.97449 4 4.74537 4.27126 3.88775 4.54847C3.45896 4.68707 3.12235 4.82736 2.88689 4.93656C2.76911 4.99119 2.67645 5.03812 2.61002 5.07329C2.5768 5.09089 2.55011 5.10555 2.5301 5.11679L2.5051 5.131L2.49638 5.13607L2.49297 5.13807L2.49151 5.13893C2.49119 5.13912 2.4902 5.13971 3 6L2.4902 5.13971C2.18633 5.31978 2 5.64679 2 6V19C2 19.3593 2.19275 19.691 2.50493 19.8689C2.8169 20.0466 3.20021 20.0435 3.50921 19.8606C3.50648 19.8622 3.50498 19.8631 3.50477 19.8632L3.50609 19.8625L3.50765 19.8616L3.50921 19.8606C3.51529 19.8572 3.52757 19.8505 3.54599 19.8408C3.58283 19.8213 3.64398 19.7901 3.72834 19.7509C3.89718 19.6726 4.15822 19.5629 4.50288 19.4515C5.19213 19.2287 6.21301 19 7.5 19C8.78699 19 9.80787 19.2287 10.4971 19.4515C10.8418 19.5629 11.1028 19.6726 11.2717 19.7509C11.356 19.7901 11.4172 19.8213 11.454 19.8408C11.4724 19.8505 11.4847 19.8573 11.4908 19.8608C11.4936 19.8623 11.495 19.8631 11.4952 19.8632M11.4952 19.8632L11.4939 19.8625L11.4924 19.8616L11.4908 19.8608C11.4908 19.8607 11.4909 19.8608 11.4908 19.8608C11.8048 20.0462 12.1954 20.0463 12.5092 19.8606C12.5076 19.8615 12.5064 19.8623 12.5057 19.8627L12.5076 19.8616L12.5092 19.8606C12.5153 19.8572 12.5276 19.8505 12.546 19.8408C12.5828 19.8213 12.644 19.7901 12.7283 19.7509C12.8972 19.6726 13.1582 19.5629 13.5029 19.4515C14.1921 19.2287 15.213 19 16.5 19C17.787 19 18.8079 19.2287 19.4971 19.4515C19.8418 19.5629 20.1028 19.6726 20.2717 19.7509C20.356 19.7901 20.4172 19.8213 20.454 19.8408C20.4724 19.8505 20.4847 19.8573 20.4908 19.8608L20.4919 19.8613C20.8007 20.0435 21.1835 20.0464 21.4951 19.8689C21.8072 19.691 22 19.3593 22 19V6C22 5.64679 21.8137 5.31978 21.5098 5.13971L21 6C21.5098 5.13971 21.5101 5.1399 21.5098 5.13971L21.5085 5.13893L21.507 5.13807L21.5036 5.13607L21.4949 5.131L21.4699 5.11679C21.4499 5.10555 21.4232 5.09089 21.39 5.07329C21.3236 5.03812 21.2309 4.99119 21.1131 4.93656C20.8776 4.82736 20.541 4.68707 20.1123 4.54847C19.2546 4.27126 18.0255 4 16.5 4C14.9745 4 13.7454 4.27126 12.8877 4.54847C12.5235 4.66622 12.2257 4.78519 12 4.88528M20 6.6335C19.8601 6.57696 19.692 6.51452 19.4971 6.45153C18.8079 6.22874 17.787 6 16.5 6C15.213 6 14.1921 6.22874 13.5029 6.45153C13.308 6.51452 13.1399 6.57696 13 6.6335V17.5129C13.8512 17.2485 15.0398 17 16.5 17C17.9602 17 19.1488 17.2485 20 17.5129V6.6335ZM12.5092 6.86075C12.5061 6.86246 12.5047 6.86332 12.5048 6.86326L12.5061 6.86248L12.5076 6.86157L12.5092 6.86075ZM20.4908 6.86075C20.4935 6.86228 20.495 6.86313 20.4952 6.86325L20.4939 6.86248L20.4908 6.86075ZM20.4908 19.8608C20.4923 19.8616 20.4934 19.8622 20.4941 19.8626L20.4919 19.8613" fill="currentColor"/>\n            '));
    this.bookmark_oqokvi$_0 = new IconDefinition('bookmark', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21C20 21.3746 19.7907 21.7178 19.4576 21.8892C19.1245 22.0606 18.7236 22.0315 18.4188 21.8137L12 17.2289L5.58124 21.8137C5.27642 22.0315 4.87549 22.0606 4.54242 21.8892C4.20935 21.7178 4 21.3746 4 21V4ZM18 4L6 4V19.0568L11.4188 15.1863C11.7665 14.9379 12.2335 14.9379 12.5812 15.1863L18 19.0568V4Z" fill="#0D0D0D"/>\n            '));
    this.calendar_tccyu2$_0 = new IconDefinition('calendar', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C9.55228 2 10 2.44772 10 3V4H14V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H8V3C8 2.44772 8.44772 2 9 2ZM8 6H5V9H19V6H16V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6H10V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM19 11H5V19H19V11Z" fill="currentColor"/>\n            '));
    this.call_plaava$_0 = new IconDefinition('call', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83302 4C3.52772 6.1111 3.2268 11.8126 7.7071 16.2929C12.1874 20.7732 17.8889 20.4723 20 20.167V15.8471L15.5641 15.1078L14.8944 16.4472C14.725 16.786 14.3788 17 14 17V16C14 17 13.9995 17 13.999 17L13.9979 17L13.9957 17L13.9907 17L13.9783 16.9998C13.9691 16.9997 13.9579 16.9994 13.9448 16.999C13.9186 16.9981 13.8847 16.9966 13.8436 16.9939C13.7615 16.9884 13.6506 16.9781 13.5148 16.9587C13.2435 16.9199 12.8719 16.8447 12.4338 16.6987C11.5541 16.4054 10.4151 15.8293 9.29289 14.7071C8.17073 13.5849 7.59455 12.4459 7.30131 11.5662C7.15527 11.1281 7.08005 10.7565 7.0413 10.4852C7.02191 10.3494 7.01159 10.2385 7.00612 10.1564C7.00338 10.1153 7.00185 10.0814 7.00101 10.0552C7.00058 10.0421 7.00033 10.0309 7.00018 10.0217L7.00004 10.0093L7.00001 10.0043L7 10.002L7 10.001C7 10.0005 7 10 8 10H7C7 9.66565 7.1671 9.35342 7.4453 9.16795L9.77018 7.61803L8.32296 4H3.83302ZM9.07364 10.4861L10.8796 9.28213C11.6665 8.75751 11.9784 7.75338 11.6271 6.87525L10.1799 3.25722C9.87619 2.4979 9.14077 2 8.32296 2H3.78077C2.87226 2 2.01708 2.63116 1.86794 3.6169C1.52863 5.8595 1.06678 12.481 6.29289 17.7071C11.519 22.9332 18.1405 22.4714 20.3831 22.1321C21.3688 21.9829 22 21.1277 22 20.2192V15.8471C22 14.8694 21.2932 14.0351 20.3288 13.8743L15.8929 13.135C15.0269 12.9907 14.1679 13.4281 13.7753 14.2134L13.4288 14.9064C13.3199 14.8796 13.1983 14.8453 13.0662 14.8013C12.4459 14.5946 11.5849 14.1707 10.7071 13.2929C9.82927 12.4151 9.40545 11.5541 9.19868 10.9338C9.14281 10.7662 9.10259 10.6154 9.07364 10.4861Z" fill="currentColor"/>\n            '));
    this.camera_gjhp27$_0 = new IconDefinition('camera', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289L17.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8C2 6.89543 2.89543 6 4 6H6.58579L8.29289 4.29289ZM9.41421 6L7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8L4 8V18H20V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711L14.5858 6H9.41421ZM12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5ZM8 12.5C8 10.2909 9.79086 8.5 12 8.5C14.2091 8.5 16 10.2909 16 12.5C16 14.7091 14.2091 16.5 12 16.5C9.79086 16.5 8 14.7091 8 12.5Z" fill="currentColor"/>\n            '));
    this.caretDown_o1d7kl$_0 = new IconDefinition('caretDown', void 0, trimIndent('\n                <path d="M17 10L12 16L7 10H17Z" fill="currentColor"/>\n            '));
    this.caretLeft_nx5l5m$_0 = new IconDefinition('caretLeft', void 0, trimIndent('\n                <path d="M14 17L8 12L14 7L14 17Z" fill="currentColor"/>\n            '));
    this.caretRight_sc7bth$_0 = new IconDefinition('caretRight', void 0, trimIndent('\n                <path d="M10 7L16 12L10 17L10 7Z" fill="currentColor"/>\n            '));
    this.caretUp_hxpdg2$_0 = new IconDefinition('caretUp', void 0, trimIndent('\n                <path d="M7 14L12 8L17 14L7 14Z" fill="currentColor"/>\n            '));
    this.check_c3cozs$_0 = new IconDefinition('check', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6644 5.25259C21.0772 5.61951 21.1143 6.25158 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33564C19.6195 4.92286 20.2516 4.88568 20.6644 5.25259Z" fill="currentColor"/>\n            '));
    this.chevronDoubleDown_wh4z1a$_0 = new IconDefinition('chevronDoubleDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L12 11.5858L17.2929 6.2929C17.6834 5.90237 18.3166 5.90237 18.7071 6.2929C19.0976 6.68342 19.0976 7.31658 18.7071 7.70711L12.7071 13.7071C12.3166 14.0976 11.6834 14.0976 11.2929 13.7071L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289ZM5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L12 17.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929Z" fill="currentColor"/>\n            '));
    this.chevronDoubleLeft_wcxcmb$_0 = new IconDefinition('chevronDoubleLeft', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.4142 12L17.7071 17.2929C18.0976 17.6834 18.0976 18.3166 17.7071 18.7071C17.3166 19.0976 16.6834 19.0976 16.2929 18.7071L10.2929 12.7071C9.90237 12.3166 9.90237 11.6834 10.2929 11.2929L16.2929 5.29289C16.6834 4.90237 17.3166 4.90237 17.7071 5.29289ZM11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L6.41421 12L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z" fill="currentColor"/>\n            '));
    this.chevronDoubleRight_5snrak$_0 = new IconDefinition('chevronDoubleRight', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L17.5858 12L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289ZM6.29289 5.29289C6.68342 4.90237 7.31658 4.90237 7.70711 5.29289L13.7071 11.2929C13.8946 11.4804 14 11.7348 14 12C14 12.2652 13.8946 12.5196 13.7071 12.7071L7.70711 18.7071C7.31658 19.0976 6.68342 19.0976 6.29289 18.7071C5.90237 18.3166 5.90237 17.6834 6.29289 17.2929L11.5858 12L6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289Z" fill="currentColor"/>\n            '));
    this.chevronDoubleUp_6rciif$_0 = new IconDefinition('chevronDoubleUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L12 6.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289ZM12 12.4142L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071C4.90237 17.3166 4.90237 16.6834 5.29289 16.2929L11.2929 10.2929C11.6834 9.90237 12.3166 9.90237 12.7071 10.2929L18.7071 16.2929C19.0976 16.6834 19.0976 17.3166 18.7071 17.7071C18.3166 18.0976 17.6834 18.0976 17.2929 17.7071L12 12.4142Z" fill="currentColor"/>\n            '));
    this.chevronDown_ox1s8j$_0 = new IconDefinition('chevronDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="currentColor"/>\n            '));
    this.chevronLeft_p19eni$_0 = new IconDefinition('chevronLeft', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z" fill="currentColor"/>\n            '));
    this.chevronRight_2cnn8d$_0 = new IconDefinition('chevronRight', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor"/>\n            '));
    this.chevronUp_3lfuna$_0 = new IconDefinition('chevronUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L11.2929 7.29289Z" fill="currentColor"/>\n            '));
    this.circleAdd_bpn9q9$_0 = new IconDefinition('circleAdd', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z" fill="currentColor"/>\n            '));
    this.circleArrowDown_blceej$_0 = new IconDefinition('circleArrowDown', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C12.5523 6 13 6.44772 13 7V14.5858L15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929C17.0976 12.6834 17.0976 13.3166 16.7071 13.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929L11 14.5858V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor"/>\n            '));
    this.circleArrowLeft_bh4rzk$_0 = new IconDefinition('circleArrowLeft', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711L9.41421 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H9.41421L11.7071 15.2929C12.0976 15.6834 12.0976 16.3166 11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289Z" fill="currentColor"/>\n            '));
    this.circleArrowRight_2axiip$_0 = new IconDefinition('circleArrowRight', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L13.7071 16.7071C13.3166 17.0976 12.6834 17.0976 12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929L14.5858 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H14.5858L12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289Z" fill="currentColor"/>\n            '));
    this.circleArrowUp_a447lo$_0 = new IconDefinition('circleArrowUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 9.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.41421V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V9.41421Z" fill="currentColor"/>\n            '));
    this.circleCheck_vq22h4$_0 = new IconDefinition('circleCheck', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.6644 8.75259C17.0771 9.11951 17.1143 9.75158 16.7474 10.1644L11.4141 16.1644C11.2243 16.3779 10.9523 16.5 10.6667 16.5C10.381 16.5 10.109 16.3779 9.91926 16.1644L7.25259 13.1644C6.88567 12.7516 6.92285 12.1195 7.33564 11.7526C7.74842 11.3857 8.38049 11.4229 8.74741 11.8356L10.6667 13.9948L15.2526 8.83564C15.6195 8.42285 16.2516 8.38567 16.6644 8.75259Z" fill="currentColor"/>\n            '));
    this.circleError_um8buw$_0 = new IconDefinition('circleError', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.79289 7.79289C8.18342 7.40237 8.81658 7.40237 9.20711 7.79289L12 10.5858L14.7929 7.79289C15.1834 7.40237 15.8166 7.40237 16.2071 7.79289C16.5976 8.18342 16.5976 8.81658 16.2071 9.20711L13.4142 12L16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L12 13.4142L9.20711 16.2071C8.81658 16.5976 8.18342 16.5976 7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929L10.5858 12L7.79289 9.20711C7.40237 8.81658 7.40237 8.18342 7.79289 7.79289Z" fill="currentColor"/>\n            '));
    this.circleHelp_7tlpbh$_0 = new IconDefinition('circleHelp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C11.4477 14 11 13.5523 11 13V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V13C13 13.5523 12.5523 14 12 14Z" fill="currentColor"/>\n                <path d="M10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3899 7.81137C11.4329 7.7658 10.6304 8.3004 10.4864 9.1644C10.3956 9.70917 9.88037 10.0772 9.3356 9.9864C8.79083 9.8956 8.42281 9.38037 8.51361 8.8356C8.86961 6.69961 10.8171 5.73421 12.4851 5.81363C13.3395 5.85432 14.2176 6.16099 14.8937 6.79278C15.5866 7.44027 16 8.36777 16 9.5C16 10.7913 15.4919 11.7489 14.6172 12.3321C13.8141 12.8675 12.8295 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.6705 11 13.1859 10.8825 13.5078 10.668C13.7581 10.5011 14 10.2087 14 9.5C14 8.88224 13.7884 8.49723 13.5282 8.2541C13.2512 7.99526 12.848 7.83318 12.3899 7.81137Z" fill="currentColor"/>\n            '));
    this.circleInformation_29ahbg$_0 = new IconDefinition('circleInformation', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z" fill="currentColor"/>\n                <path d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z" fill="currentColor"/>\n            '));
    this.circleRemove_grw4z4$_0 = new IconDefinition('circleRemove', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z" fill="currentColor"/>\n            '));
    this.circleWarning_vicqsc$_0 = new IconDefinition('circleWarning', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C11.4477 14 11 13.5523 11 13L11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7L13 13C13 13.5523 12.5523 14 12 14Z" fill="currentColor"/>\n                <path d="M10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5Z" fill="currentColor"/>\n            '));
    this.clipboardCheck_9qaj82$_0 = new IconDefinition('clipboardCheck', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3H18C19.1046 3 20 3.89543 20 5V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V5C4 3.89543 4.89543 3 6 3H8ZM8 5H6V20H18V5H16V6C16 6.55228 15.5523 7 15 7H9C8.44772 7 8 6.55228 8 6V5ZM14 4H10V5H14V4ZM15.7071 10.7929C16.0976 11.1834 16.0976 11.8166 15.7071 12.2071L11.7071 16.2071C11.3166 16.5976 10.6834 16.5976 10.2929 16.2071L8.29289 14.2071C7.90237 13.8166 7.90237 13.1834 8.29289 12.7929C8.68342 12.4024 9.31658 12.4024 9.70711 12.7929L11 14.0858L14.2929 10.7929C14.6834 10.4024 15.3166 10.4024 15.7071 10.7929Z" fill="currentColor"/>\n            '));
    this.clipboardList_pnmxfg$_0 = new IconDefinition('clipboardList', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 16.5C11 15.9477 11.4477 15.5 12 15.5H15C15.5523 15.5 16 15.9477 16 16.5C16 17.0523 15.5523 17.5 15 17.5H12C11.4477 17.5 11 17.0523 11 16.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.5C11 12.9477 11.4477 12.5 12 12.5H15C15.5523 12.5 16 12.9477 16 13.5C16 14.0523 15.5523 14.5 15 14.5H12C11.4477 14.5 11 14.0523 11 13.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.5C11 9.94772 11.4477 9.5 12 9.5H15C15.5523 9.5 16 9.94772 16 10.5C16 11.0523 15.5523 11.5 15 11.5H12C11.4477 11.5 11 11.0523 11 10.5Z" fill="currentColor"/>\n                <path d="M10 10.5C10 11.0523 9.55228 11.5 9 11.5C8.44772 11.5 8 11.0523 8 10.5C8 9.94772 8.44772 9.5 9 9.5C9.55228 9.5 10 9.94772 10 10.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H6V20H18V5H15C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H18C19.1046 3 20 3.89543 20 5V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V5Z" fill="currentColor"/>\n                <path d="M10 13.5C10 14.0523 9.55228 14.5 9 14.5C8.44772 14.5 8 14.0523 8 13.5C8 12.9477 8.44772 12.5 9 12.5C9.55228 12.5 10 12.9477 10 13.5Z" fill="currentColor"/>\n                <path d="M10 16.5C10 17.0523 9.55228 17.5 9 17.5C8.44772 17.5 8 17.0523 8 16.5C8 15.9477 8.44772 15.5 9 15.5C9.55228 15.5 10 15.9477 10 16.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V6C16 6.55228 15.5523 7 15 7H9C8.44772 7 8 6.55228 8 6V3ZM10 4V5H14V4H10Z" fill="currentColor"/>\n            '));
    this.clipboard_whlcue$_0 = new IconDefinition('clipboard', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3H18C19.1046 3 20 3.89543 20 5V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V5C4 3.89543 4.89543 3 6 3H8ZM8 5H6V20H18V5H16V6C16 6.55228 15.5523 7 15 7H9C8.44772 7 8 6.55228 8 6V5ZM14 4H10V5H14V4Z" fill="currentColor"/>\n            '));
    this.clock_c5q98i$_0 = new IconDefinition('clock', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor"/>\n            '));
    this.close_c5qkyg$_0 = new IconDefinition('close', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"/>\n            '));
    this.cloudDownload_h5jfwz$_0 = new IconDefinition('cloudDownload', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C8.79082 4 7 5.79085 7 8C7 8.03242 7.00047 8.06627 7.00131 8.10224C7.01219 8.56727 6.70099 8.97839 6.25047 9.09416C4.95577 9.42685 4 10.6031 4 12C4 13.6569 5.34317 15 7 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H7C4.23861 17 2 14.7614 2 12C2 9.93746 3.2482 8.16845 5.02926 7.40373C5.32856 4.36995 7.88746 2 11 2C13.2236 2 15.1629 3.20934 16.199 5.00324C19.4207 5.10823 22 7.75289 22 11C22 14.3137 19.3138 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C18.2092 15 20 13.2091 20 11C20 8.79085 18.2092 7 16 7C15.8893 7 15.78 7.00447 15.6718 7.01322C15.2449 7.04776 14.8434 6.8066 14.6734 6.4135C14.0584 4.99174 12.6439 4 11 4ZM12 10C12.5523 10 13 10.4477 13 11L13 18.5858L13.2929 18.2929C13.6834 17.9024 14.3166 17.9024 14.7071 18.2929C15.0976 18.6834 15.0976 19.3166 14.7071 19.7071L12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071L9.29289 19.7071C8.90237 19.3166 8.90237 18.6834 9.29289 18.2929C9.68342 17.9024 10.3166 17.9024 10.7071 18.2929L11 18.5858L11 11C11 10.4477 11.4477 10 12 10Z" fill="currentColor"/>\n            '));
    this.cloudUpload_rrwa12$_0 = new IconDefinition('cloudUpload', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C8.79082 4 7 5.79085 7 8C7 8.03242 7.00047 8.06627 7.00131 8.10224C7.01219 8.56727 6.70099 8.97839 6.25047 9.09416C4.95577 9.42685 4 10.6031 4 12C4 13.6569 5.34317 15 7 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H7C4.23861 17 2 14.7614 2 12C2 9.93746 3.2482 8.16845 5.02926 7.40373C5.32856 4.36995 7.88746 2 11 2C13.2236 2 15.1629 3.20934 16.199 5.00324C19.4207 5.10823 22 7.75289 22 11C22 14.3137 19.3138 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C18.2092 15 20 13.2091 20 11C20 8.79085 18.2092 7 16 7C15.8893 7 15.78 7.00447 15.6718 7.01322C15.2449 7.04776 14.8434 6.8066 14.6734 6.4135C14.0584 4.99174 12.6439 4 11 4ZM11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L13 12.4142V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V12.4142L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L11.2929 9.29289Z" fill="currentColor"/>\n            '));
    this.cloud_c5qmez$_0 = new IconDefinition('cloud', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 6.68629 7.68629 4 11 4C13.627 4 15.858 5.68745 16.6713 8.03713C19.669 8.37085 22 10.9132 22 14C22 17.3137 19.3137 20 16 20H7C4.23858 20 2 17.7614 2 15C2 12.9436 3.24073 11.1787 5.01385 10.4103C5.00466 10.2746 5 10.1378 5 10ZM11 6C8.79086 6 7 7.79086 7 10C7 10.3029 7.03348 10.5967 7.09656 10.8785C7.21716 11.4173 6.8783 11.9519 6.33958 12.0727C5.00015 12.3732 4 13.571 4 15C4 16.6569 5.34315 18 7 18H16C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10C15.9732 10 15.9465 10.0003 15.9198 10.0008C15.4368 10.0102 15.0161 9.67312 14.9201 9.19971C14.5499 7.37395 12.9343 6 11 6Z" fill="currentColor"/>\n            '));
    this.computer_w09od3$_0 = new IconDefinition('computer', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V16C22 17.1046 21.1046 18 20 18H13V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V18H4C2.89543 18 2 17.1046 2 16V5ZM20 16V5H4V16H20Z" fill="currentColor"/>\n            '));
    this.copy_pljbyn$_0 = new IconDefinition('copy', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H14C15.1046 2 16 2.89543 16 4V8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H10C8.89543 22 8 21.1046 8 20V16H4C2.89543 16 2 15.1046 2 14V4ZM10 16V20H20V10H16V14C16 15.1046 15.1046 16 14 16H10ZM14 14H4V4L14 4V14Z" fill="currentColor"/>\n            '));
    this.creditCard_bteuhx$_0 = new IconDefinition('creditCard', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM20 8V6L4 6L4 8H20ZM4 11L4 18L20 18V11H4Z" fill="#0D0D0D"/>\n            '));
    this.delete_x3ipuh$_0 = new IconDefinition('delete', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="currentColor"/>\n            '));
    this.documentAdd_8kuf92$_0 = new IconDefinition('documentAdd', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4ZM12 12C12.5523 12 13 12.4477 13 13V14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16H10C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14H11V13C11 12.4477 11.4477 12 12 12Z" fill="currentColor"/>\n            '));
    this.documentCheck_3uqsfx$_0 = new IconDefinition('documentCheck', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L11 15.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z" fill="currentColor"/>\n            '));
    this.documentDownload_dkqczj$_0 = new IconDefinition('documentDownload', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4ZM12 11.5C12.5523 11.5 13 11.9477 13 12.5V15.0858L13.2929 14.7929C13.6834 14.4024 14.3166 14.4024 14.7071 14.7929C15.0976 15.1834 15.0976 15.8166 14.7071 16.2071L12.7071 18.2071C12.3166 18.5976 11.6834 18.5976 11.2929 18.2071L9.29289 16.2071C8.90237 15.8166 8.90237 15.1834 9.29289 14.7929C9.68342 14.4024 10.3166 14.4024 10.7071 14.7929L11 15.0858L11 12.5C11 11.9477 11.4477 11.5 12 11.5Z" fill="currentColor"/>\n            '));
    this.documentEmpty_2tp6w2$_0 = new IconDefinition('documentEmpty', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4Z" fill="currentColor"/>\n            '));
    this.documentRemove_sd94at$_0 = new IconDefinition('documentRemove', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4ZM9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15Z" fill="currentColor"/>\n            '));
    this.document_6njzop$_0 = new IconDefinition('document', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8H14V4.41421L17.5858 8ZM12 4V9C12 9.55228 12.4477 10 13 10H18V20H6V4L12 4ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z" fill="currentColor"/>\n            '));
    this.download_crceqk$_0 = new IconDefinition('download', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V13.5858L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858V3C11 2.44772 11.4477 2 12 2ZM5 17C5.55228 17 6 17.4477 6 18V20H18V18C18 17.4477 18.4477 17 19 17C19.5523 17 20 17.4477 20 18V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V18C4 17.4477 4.44772 17 5 17Z" fill="currentColor"/>\n            '));
    this.drag_pm4pyo$_0 = new IconDefinition('drag', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H5C4.44772 15 4 14.5523 4 14ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor"/>\n            '));
    this.editAlt_qi4pjj$_0 = new IconDefinition('editAlt', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 3.29289C16.6834 2.90237 17.3166 2.90237 17.7071 3.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L11.7071 16.7071C11.5196 16.8946 11.2652 17 11 17H8C7.44772 17 7 16.5523 7 16V13C7 12.7348 7.10536 12.4804 7.29289 12.2929L16.2929 3.29289ZM9 13.4142V15H10.5858L18.5858 7L17 5.41421L9 13.4142ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z" fill="currentColor"/>\n            '));
    this.edit_pmfqze$_0 = new IconDefinition('edit', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L15.4142 6L17 4.41421L19.5858 7L18 8.58579Z" fill="currentColor"/>\n            '));
    this.email_d44h9w$_0 = new IconDefinition('email', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z" fill="currentColor"/>\n            '));
    this.expand_e77qgm$_0 = new IconDefinition('expand', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.41421V9C6 9.55229 5.55228 10 5 10C4.44772 10 4 9.55229 4 9L4 5C4 4.44772 4.44772 4 5 4L9 4C9.55229 4 10 4.44772 10 5C10 5.55228 9.55229 6 9 6H7.41421L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L6 7.41421ZM15 6C14.4477 6 14 5.55229 14 5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9.00001C20 9.55229 19.5523 10 19 10C18.4477 10 18 9.55229 18 9.00001V7.41421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L16.5858 6H15ZM5 14C5.55228 14 6 14.4477 6 15L6 16.5858L8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071L7.41421 18H9C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19L4 15C4 14.4477 4.44772 14 5 14ZM14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L18 16.5858V15C18 14.4477 18.4477 14 19 14C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H16.5858L14.2929 15.7071Z" fill="currentColor"/>\n            '));
    this.export_e6ypao$_0 = new IconDefinition('export', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM5 17C5.55228 17 6 17.4477 6 18V20H18V18C18 17.4477 18.4477 17 19 17C19.5523 17 20 17.4477 20 18V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V18C4 17.4477 4.44772 17 5 17Z" fill="currentColor"/>\n            '));
    this.externalLink_7xw7fl$_0 = new IconDefinition('externalLink', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z" fill="currentColor"/>\n            '));
    this.eyeOff_dwji8q$_0 = new IconDefinition('eyeOff', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L5.71706 7.13127C4.28639 8.20737 3.03925 9.68543 2.10557 11.5528C1.96481 11.8343 1.96481 12.1657 2.10557 12.4472C4.26379 16.7637 8.09687 19 12 19C13.5552 19 15.0992 18.645 16.5306 17.9448L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L4.70711 3.29289ZM15.0138 16.428L13.2934 14.7076C12.9018 14.8951 12.4631 15 12 15C10.3431 15 9 13.6569 9 12C9 11.5369 9.10495 11.0982 9.29237 10.7066L7.14838 8.56259C5.98778 9.3794 4.94721 10.5214 4.12966 12C5.99806 15.3792 9.03121 17 12 17C13.0134 17 14.0343 16.8112 15.0138 16.428Z" fill="#0D0D0D"/>\n                <path d="M18.5523 13.8955C19.0353 13.3402 19.4784 12.7088 19.8703 12C18.0019 8.62078 14.9687 7 12 7C11.888 7 11.7759 7.00231 11.6637 7.00693L9.87939 5.22258C10.5774 5.07451 11.2875 5 12 5C15.9031 5 19.7362 7.23635 21.8944 11.5528C22.0352 11.8343 22.0352 12.1657 21.8944 12.4472C21.3504 13.5352 20.7 14.491 19.9689 15.3121L18.5523 13.8955Z" fill="#0D0D0D"/>\n            '));
    this.eye_61p05d$_0 = new IconDefinition('eye', void 0, trimIndent('\n                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8944 11.5528C19.7362 7.23635 15.9031 5 12 5C8.09687 5 4.26379 7.23635 2.10557 11.5528C1.96481 11.8343 1.96481 12.1657 2.10557 12.4472C4.26379 16.7637 8.09687 19 12 19C15.9031 19 19.7362 16.7637 21.8944 12.4472C22.0352 12.1657 22.0352 11.8343 21.8944 11.5528ZM12 17C9.03121 17 5.99806 15.3792 4.12966 12C5.99806 8.62078 9.03121 7 12 7C14.9688 7 18.0019 8.62078 19.8703 12C18.0019 15.3792 14.9688 17 12 17Z" fill="currentColor"/>\n            '));
    this.favorite_wk0s20$_0 = new IconDefinition('favorite', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C12.3788 2.5 12.725 2.714 12.8944 3.05279L15.4733 8.2106L21.1439 9.03541C21.5206 9.0902 21.8335 9.35402 21.9511 9.71599C22.0687 10.078 21.9706 10.4753 21.6981 10.741L17.571 14.7649L18.4994 20.4385C18.5607 20.8135 18.4043 21.1908 18.0956 21.4124C17.787 21.6339 17.3794 21.6614 17.0438 21.4834L12 18.8071L6.95621 21.4834C6.62059 21.6614 6.21303 21.6339 5.90437 21.4124C5.5957 21.1908 5.43927 20.8135 5.50062 20.4385L6.42903 14.7649L2.3019 10.741C2.02939 10.4753 1.93133 10.078 2.04894 9.71599C2.16655 9.35402 2.47943 9.0902 2.85606 9.03541L8.52667 8.2106L11.1056 3.05279C11.275 2.714 11.6212 2.5 12 2.5ZM12 5.73607L10.0819 9.57221C9.93558 9.86491 9.65528 10.0675 9.33144 10.1146L5.14839 10.723L8.1981 13.6965C8.43179 13.9243 8.53958 14.2519 8.48687 14.574L7.80001 18.7715L11.5313 16.7917C11.8244 16.6361 12.1756 16.6361 12.4687 16.7917L16.2 18.7715L15.5131 14.574C15.4604 14.2519 15.5682 13.9243 15.8019 13.6965L18.8516 10.723L14.6686 10.1146C14.3447 10.0675 14.0644 9.86491 13.9181 9.57221L12 5.73607Z" fill="currentColor"/>\n            '));
    this.filterAlt_j0x3dt$_0 = new IconDefinition('filterAlt', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z" fill="currentColor"/>\n            '));
    this.filter_6od044$_0 = new IconDefinition('filter', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="currentColor"/>\n            '));
    this.folderAdd_719m5f$_0 = new IconDefinition('folderAdd', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289L11.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM8.58579 6L4 6V18H20V8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711L8.58579 6ZM12 10C12.5523 10 13 10.4477 13 11V12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V14H10C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12H11V11C11 10.4477 11.4477 10 12 10Z" fill="currentColor"/>\n            '));
    this.folderCheck_bvn3sa$_0 = new IconDefinition('folderCheck', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289L11.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM8.58579 6L4 6V18H20V8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711L8.58579 6ZM15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L11.7071 15.7071C11.5196 15.8946 11.2652 16 11 16C10.7348 16 10.4804 15.8946 10.2929 15.7071L8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929L11 13.5858L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z" fill="currentColor"/>\n            '));
    this.folderDownload_5mrdqm$_0 = new IconDefinition('folderDownload', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.00002C2 4.89545 2.89543 4.00002 4 4.00002H9C9.26522 4.00002 9.51957 4.10537 9.70711 4.29291L11.4142 6.00002H20C21.1046 6.00002 22 6.89545 22 8.00002V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6.00002ZM8.58579 6.00002L4 6.00002V18H20V8.00002H11C10.7348 8.00002 10.4804 7.89466 10.2929 7.70712L8.58579 6.00002ZM12 9.50002C12.5523 9.50002 13 9.94773 13 10.5V13.0858L13.2929 12.7929C13.6834 12.4024 14.3166 12.4024 14.7071 12.7929C15.0976 13.1834 15.0976 13.8166 14.7071 14.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L9.29289 14.2071C8.90237 13.8166 8.90237 13.1834 9.29289 12.7929C9.68342 12.4024 10.3166 12.4024 10.7071 12.7929L11 13.0858V10.5C11 9.94773 11.4477 9.50002 12 9.50002Z" fill="currentColor"/>\n            '));
    this.folderRemove_7b8hf2$_0 = new IconDefinition('folderRemove', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289L11.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM8.58579 6L4 6V18H20V8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711L8.58579 6ZM9 13C9 12.4477 9.44772 12 10 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H10C9.44772 14 9 13.5523 9 13Z" fill="currentColor"/>\n            '));
    this.folder_3udhje$_0 = new IconDefinition('folder', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289L11.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM8.58579 6L4 6V18H20V8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711L8.58579 6Z" fill="currentColor"/>\n            '));
    this.grid_pns9lq$_0 = new IconDefinition('grid', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5ZM13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5ZM3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15ZM13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z" fill="currentColor"/>\n            '));
    this.heart_eev6kq$_0 = new IconDefinition('heart', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157C9.26633 4.60948 6.73367 4.60948 5.17157 6.17157C3.60948 7.73367 3.60948 10.2663 5.17157 11.8284L12 18.6569L18.8284 11.8284C20.3905 10.2663 20.3905 7.73367 18.8284 6.17157C17.2663 4.60948 14.7337 4.60948 13.1716 6.17157L12.7071 6.63604C12.3166 7.02656 11.6834 7.02656 11.2929 6.63604L10.8284 6.17157Z" fill="currentColor"/>\n            '));
    this.home_poa885$_0 = new IconDefinition('home', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.0772 10.6195 22.1143 11.2516 21.7474 11.6644C21.3805 12.0771 20.7484 12.1143 20.3356 11.7474L20 11.4491V19C20 20.1046 19.1046 21 18 21H6.00001C4.89544 21 4.00001 20.1046 4.00001 19V11.4491L3.66437 11.7474C3.25159 12.1143 2.61952 12.0771 2.2526 11.6644C1.88568 11.2516 1.92286 10.6195 2.33565 10.2526L11.3356 2.25259ZM6.00001 9.67129V19H9.00001V14C9.00001 13.4477 9.44773 13 10 13H14C14.5523 13 15 13.4477 15 14V19H18V9.67129L12 4.33795L6.00001 9.67129ZM13 19V15H11V19H13Z" fill="currentColor"/>\n            '));
    this.image_f0ax79$_0 = new IconDefinition('image', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99998 5C2.99998 3.89543 3.89541 3 4.99998 3H19C20.1045 3 21 3.89543 21 5V19C21 20.1046 20.1045 21 19 21H4.99998C3.89541 21 2.99998 20.1046 2.99998 19V5ZM19 5H4.99998V19H19V5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37528 10.2191C8.7405 9.92696 9.25945 9.92696 9.62467 10.2191L13.9258 13.66L15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929L20.7071 16.2929C21.0976 16.6834 21.0976 17.3166 20.7071 17.7071C20.3166 18.0976 19.6834 18.0976 19.2929 17.7071L16 14.4142L14.7071 15.7071C14.3468 16.0674 13.7732 16.0992 13.3753 15.7809L8.99998 12.2806L4.62467 15.7809C4.19341 16.1259 3.56412 16.056 3.21911 15.6247C2.8741 15.1934 2.94402 14.5641 3.37528 14.2191L8.37528 10.2191Z" fill="currentColor"/>\n                <path d="M17 8.5C17 9.32843 16.3284 10 15.5 10C14.6715 10 14 9.32843 14 8.5C14 7.67157 14.6715 7 15.5 7C16.3284 7 17 7.67157 17 8.5Z" fill="currentColor"/>\n            '));
    this.inbox_f0vj62$_0 = new IconDefinition('inbox', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 14V19H19V14H16.7208L15.9487 16.3162C15.8126 16.7246 15.4304 17 15 17H9C8.56957 17 8.18743 16.7246 8.05132 16.3162L7.27924 14H5ZM19 12V5H5V12H7.27924C8.1401 12 8.90438 12.5509 9.17661 13.3675L9.72076 15H14.2792L14.8234 13.3675C15.0956 12.5509 15.8599 12 16.7208 12H19Z" fill="currentColor"/>\n            '));
    this.laptop_6mr1u2$_0 = new IconDefinition('laptop', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V5ZM20 5H4V16H20V5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19L21 19C21.5523 19 22 19.4477 22 20Z" fill="currentColor"/>\n            '));
    this.linkAlt_x8y89r$_0 = new IconDefinition('linkAlt', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 6C16.2 5.44772 16.6477 5 17.2 5C17.8367 5 18.4624 5.12794 19.0714 5.37152C19.7341 5.63661 20.2442 6.03001 20.7071 6.49289C21.17 6.95578 21.5634 7.4659 21.8285 8.12861C22.0721 8.73756 22.2 9.36326 22.2 10C22.2 10.6367 22.0721 11.2624 21.8285 11.8714C21.5667 12.5258 21.1798 13.0314 20.7245 13.4897L19.7399 14.5727C19.7293 14.5844 19.7183 14.5959 19.7071 14.6071L16.5071 17.8071C16.0442 18.27 15.5341 18.6634 14.8714 18.9285C14.2624 19.1721 13.6367 19.3 13 19.3C12.3633 19.3 11.7376 19.1721 11.1286 18.9285C10.4659 18.6634 9.95578 18.27 9.49289 17.8071C9.03 17.3442 8.63661 16.8341 8.37152 16.1714C8.12326 15.5507 8 14.9244 8 14.2C8 13.5633 8.12794 12.9376 8.37152 12.3286C8.63661 11.6659 9.03 11.1558 9.49289 10.6929L10.5929 9.59289C10.9834 9.20237 11.6166 9.20237 12.0071 9.59289C12.3976 9.98342 12.3976 10.6166 12.0071 11.0071L10.9071 12.1071C10.57 12.4442 10.3634 12.7341 10.2285 13.0714C10.0721 13.4624 10 13.8367 10 14.2C10 14.6756 10.0767 15.0493 10.2285 15.4286C10.3634 15.7659 10.57 16.0558 10.9071 16.3929C11.2442 16.73 11.5341 16.9366 11.8714 17.0715C12.2624 17.2279 12.6367 17.3 13 17.3C13.3633 17.3 13.7376 17.2279 14.1286 17.0715C14.4659 16.9366 14.7558 16.73 15.0929 16.3929L18.2761 13.2097L19.2601 12.1273C19.2707 12.1156 19.2817 12.1041 19.2929 12.0929C19.63 11.7558 19.8366 11.4659 19.9715 11.1286C20.1279 10.7376 20.2 10.3633 20.2 10C20.2 9.63674 20.1279 9.26244 19.9715 8.87139C19.8366 8.5341 19.63 8.24422 19.2929 7.90711C18.9558 7.56999 18.6659 7.36339 18.3286 7.22848C17.9376 7.07206 17.5633 7 17.2 7C16.6477 7 16.2 6.55228 16.2 6ZM11.3 7.5C10.9367 7.5 10.5624 7.57206 10.1714 7.72848C9.8341 7.86339 9.54422 8.07 9.20711 8.40711L5.92393 11.6903L4.93994 12.7727C4.92927 12.7844 4.91832 12.7959 4.90711 12.8071C4.56999 13.1442 4.36339 13.4341 4.22848 13.7714C4.07206 14.1624 4 14.5367 4 14.9C4 15.2633 4.07206 15.6376 4.22848 16.0286C4.36339 16.3659 4.57 16.6558 4.90711 16.9929C5.24422 17.33 5.5341 17.5366 5.87139 17.6715C6.26244 17.8279 6.63674 17.9 7 17.9C7.55228 17.9 8 18.3477 8 18.9C8 19.4523 7.55228 19.9 7 19.9C6.36326 19.9 5.73756 19.7721 5.12861 19.5285C4.4659 19.2634 3.95578 18.87 3.49289 18.4071C3.03 17.9442 2.63661 17.4341 2.37152 16.7714C2.12794 16.1624 2 15.5367 2 14.9C2 14.2633 2.12794 13.6376 2.37152 13.0286C2.63328 12.3742 3.02016 11.8686 3.47551 11.4103L4.46006 10.3273C4.47073 10.3156 4.48168 10.3041 4.49289 10.2929L7.79289 6.99289C8.25578 6.53 8.7659 6.13661 9.42861 5.87152C10.0376 5.62794 10.6633 5.5 11.3 5.5C11.9367 5.5 12.5624 5.62794 13.1714 5.87152C13.8341 6.13661 14.3442 6.53 14.8071 6.99289C15.27 7.45578 15.6634 7.9659 15.9285 8.62861C16.1721 9.23756 16.3 9.86326 16.3 10.5C16.3 11.1367 16.1721 11.7624 15.9285 12.3714C15.6664 13.0265 15.279 13.5325 14.823 13.9912L13.7372 15.1757C13.364 15.5828 12.7314 15.6103 12.3243 15.2372C11.9172 14.864 11.8897 14.2314 12.2628 13.8243L13.3628 12.6243C13.3726 12.6136 13.3827 12.6031 13.3929 12.5929C13.73 12.2558 13.9366 11.9659 14.0715 11.6286C14.2279 11.2376 14.3 10.8633 14.3 10.5C14.3 10.1367 14.2279 9.76244 14.0715 9.37139C13.9366 9.0341 13.73 8.74422 13.3929 8.40711C13.0558 8.07 12.7659 7.86339 12.4286 7.72848C12.0376 7.57206 11.6633 7.5 11.3 7.5Z" fill="currentColor"/>\n            '));
    this.link_pqdlka$_0 = new IconDefinition('link', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C5.75228 8 4 9.75228 4 12C4 14.2477 5.75228 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C4.64772 18 2 15.3523 2 12C2 8.64772 4.64772 6 8 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8H8ZM13 7C13 6.44772 13.4477 6 14 6H16C19.3523 6 22 8.64772 22 12C22 15.3523 19.3523 18 16 18H14C13.4477 18 13 17.5523 13 17C13 16.4477 13.4477 16 14 16H16C18.2477 16 20 14.2477 20 12C20 9.75228 18.2477 8 16 8H14C13.4477 8 13 7.55228 13 7ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z" fill="currentColor"/>\n            '));
    this.list_pqdphi$_0 = new IconDefinition('list', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.44772 4.44772 6 5 6H6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8H5C4.44772 8 4 7.55228 4 7ZM9 7C9 6.44772 9.44772 6 10 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H10C9.44772 8 9 7.55228 9 7ZM4 12C4 11.4477 4.44772 11 5 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H5C4.44772 13 4 12.5523 4 12ZM9 12C9 11.4477 9.44772 11 10 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12ZM4 17C4 16.4477 4.44772 16 5 16H6C6.55228 16 7 16.4477 7 17C7 17.5523 6.55228 18 6 18H5C4.44772 18 4 17.5523 4 17ZM9 17C9 16.4477 9.44772 16 10 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H10C9.44772 18 9 17.5523 9 17Z" fill="currentColor"/>\n            '));
    this.location_sqzbw1$_0 = new IconDefinition('location', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C8.68629 4 6 6.68629 6 10C6 11.0279 6.36394 12.1768 6.9815 13.3678C7.59457 14.5501 8.4236 15.7092 9.27193 16.7393C10.1178 17.7664 10.9665 18.6457 11.6048 19.2688C11.7483 19.4089 11.8809 19.5357 12 19.6481C12.1191 19.5357 12.2517 19.4089 12.3952 19.2688C13.0335 18.6457 13.8822 17.7664 14.7281 16.7393C15.5764 15.7092 16.4054 14.5501 17.0185 13.3678C17.6361 12.1768 18 11.0279 18 10C18 6.68629 15.3137 4 12 4ZM12 21C11.3492 21.7593 11.349 21.7591 11.3488 21.7589L11.3467 21.7571L11.3417 21.7528L11.3241 21.7376C11.3092 21.7246 11.2878 21.7059 11.2604 21.6818C11.2055 21.6334 11.1266 21.5632 11.0269 21.4727C10.8277 21.2918 10.5454 21.0296 10.2077 20.6999C9.5335 20.0418 8.63218 19.1086 7.72807 18.0107C6.8264 16.9158 5.90543 15.6374 5.206 14.2884C4.51106 12.9482 4 11.4721 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.4721 19.4889 12.9482 18.794 14.2884C18.0946 15.6374 17.1736 16.9158 16.2719 18.0107C15.3678 19.1086 14.4665 20.0418 13.7923 20.6999C13.4546 21.0296 13.1723 21.2918 12.9731 21.4727C12.8734 21.5632 12.7945 21.6334 12.7396 21.6818C12.7122 21.7059 12.6908 21.7246 12.6759 21.7376L12.6583 21.7528L12.6533 21.7571L12.6517 21.7585C12.6515 21.7586 12.6508 21.7593 12 21ZM12 21L11.3488 21.7589C11.7233 22.0799 12.2763 22.0802 12.6508 21.7593L12 21ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z" fill="currentColor"/>\n            '));
    this.lock_pqh7bt$_0 = new IconDefinition('lock', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3523 4 9 5.35228 9 7V10H15V7C15 5.35228 13.6477 4 12 4ZM17 10V7C17 4.24772 14.7523 2 12 2C9.24771 2 7 4.24772 7 7V10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H17ZM6 12V20H18V12H6Z" fill="currentColor"/>\n            '));
    this.logOut_d3s41m$_0 = new IconDefinition('logOut', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4L13 4C14.1046 4 15 4.89543 15 6L15 8C15 8.55229 14.5523 9 14 9C13.4477 9 13 8.55228 13 8L13 6L4 6L4 18H13V16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V18C15 19.1046 14.1046 20 13 20H4C2.89543 20 2 19.1046 2 18L2 6ZM17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071C16.9024 15.3166 16.9024 14.6834 17.2929 14.2929L18.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11L18.5858 11L17.2929 9.70711C16.9024 9.31658 16.9024 8.68342 17.2929 8.29289Z" fill="currentColor"/>\n            '));
    this.map_61kdsc$_0 = new IconDefinition('map', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68377 3.05132C8.88904 2.98289 9.11096 2.98289 9.31623 3.05132L15 4.94591L19.3675 3.49006C20.6626 3.05837 22 4.02231 22 5.38743V17.2792C22 18.1401 21.4491 18.9044 20.6325 19.1766L15.3162 20.9487C15.111 21.0171 14.889 21.0171 14.6838 20.9487L9 19.0541L4.63246 20.5099C3.33739 20.9416 2 19.9777 2 18.6126V6.72076C2 5.8599 2.55086 5.09562 3.36754 4.82339L8.68377 3.05132ZM10 17.2792L14 18.6126V6.72076L10 5.38743V17.2792ZM8 5.38743V17.2792L4 18.6126V6.72076L8 5.38743ZM16 6.72076V18.6126L20 17.2792V5.38743L16 6.72076Z" fill="currentColor"/>\n            '));
    this.megaphone_f191hw$_0 = new IconDefinition('megaphone', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5019 2.13509C17.8102 2.31401 18 2.64353 18 3V7C19.1848 7 20.2502 7.51635 20.9812 8.33309C21.614 9.0401 22 9.97617 22 11C22 12.0238 21.614 12.9599 20.9812 13.6669C20.2502 14.4836 19.1848 15 18 15V19C18 19.3565 17.8102 19.686 17.5019 19.8649C17.1936 20.0438 16.8134 20.0451 16.5039 19.8682L10 16.1518V21C10 21.5523 9.55228 22 9 22H5C4.44772 22 4 21.5523 4 21V16C2.89543 16 2 15.1046 2 14V8C2 6.89543 2.89543 6 4 6H9.73444L16.5039 2.13176C16.8134 1.9549 17.1936 1.95617 17.5019 2.13509ZM10 14C10.174 14 10.345 14.0454 10.4961 14.1318L16 17.2768V4.72318L10.4961 7.86824C10.345 7.95458 10.174 8 10 8H4V14H10ZM6 16V20H8V16H6ZM18 13V9C18.5922 9 19.1233 9.25615 19.491 9.66691C19.8083 10.0214 20 10.4871 20 11C20 11.5129 19.8083 11.9786 19.491 12.3331C19.1233 12.7438 18.5922 13 18 13Z" fill="#0D0D0D"/>\n            '));
    this.menu_pquug5$_0 = new IconDefinition('menu', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="currentColor"/>\n            '));
    this.messageAlt_kta5a6$_0 = new IconDefinition('messageAlt', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V17C22 18.1046 21.1046 19 20 19H15.4142L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.58579 19H4C2.89543 19 2 18.1046 2 17V6ZM20 6H4V17H9C9.26522 17 9.51957 17.1054 9.70711 17.2929L12 19.5858L14.2929 17.2929C14.4804 17.1054 14.7348 17 15 17H20V6Z" fill="currentColor"/>\n                <path d="M13.5 11.5C13.5 12.3284 12.8284 13 12 13C11.1716 13 10.5 12.3284 10.5 11.5C10.5 10.6716 11.1716 10 12 10C12.8284 10 13.5 10.6716 13.5 11.5Z" fill="currentColor"/>\n                <path d="M17.5 11.5C17.5 12.3284 16.8284 13 16 13C15.1716 13 14.5 12.3284 14.5 11.5C14.5 10.6716 15.1716 10 16 10C16.8284 10 17.5 10.6716 17.5 11.5Z" fill="currentColor"/>\n                <path d="M9.5 11.5C9.5 12.3284 8.82843 13 8 13C7.17157 13 6.5 12.3284 6.5 11.5C6.5 10.6716 7.17157 10 8 10C8.82843 10 9.5 10.6716 9.5 11.5Z" fill="currentColor"/>\n            '));
    this.message_aedy3t$_0 = new IconDefinition('message', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V17C22 18.1046 21.1046 19 20 19H15.4142L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.58579 19H4C2.89543 19 2 18.1046 2 17V6ZM20 6H4V17H9C9.26522 17 9.51957 17.1054 9.70711 17.2929L12 19.5858L14.2929 17.2929C14.4804 17.1054 14.7348 17 15 17H20V6ZM6 9.5C6 8.94772 6.44772 8.5 7 8.5H17C17.5523 8.5 18 8.94772 18 9.5C18 10.0523 17.5523 10.5 17 10.5H7C6.44772 10.5 6 10.0523 6 9.5ZM6 13.5C6 12.9477 6.44772 12.5 7 12.5H13C13.5523 12.5 14 12.9477 14 13.5C14 14.0523 13.5523 14.5 13 14.5H7C6.44772 14.5 6 14.0523 6 13.5Z" fill="currentColor"/>\n            '));
    this.mobile_rpvtxe$_0 = new IconDefinition('mobile', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5ZM16 5H8V19H16V5Z" fill="currentColor"/>\n                <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="currentColor"/>\n            '));
    this.moon_pr18w3$_0 = new IconDefinition('moon', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36077 3.29291C9.6659 3.59803 9.74089 4.06445 9.54678 4.44984C9.04068 5.4547 8.75521 6.59035 8.75521 7.79557C8.75521 11.9097 12.0903 15.2448 16.2044 15.2448C17.4097 15.2448 18.5453 14.9593 19.5502 14.4532C19.9356 14.2591 20.402 14.3341 20.7071 14.6392C21.0122 14.9444 21.0872 15.4108 20.8931 15.7962C19.3396 18.8806 16.1428 21 12.4492 21C7.23056 21 3 16.7695 3 11.5508C3 7.85719 5.11941 4.6604 8.20384 3.1069C8.58923 2.91279 9.05565 2.98778 9.36077 3.29291ZM6.8217 6.6696C5.68637 7.97742 5 9.68431 5 11.5508C5 15.6649 8.33513 19 12.4492 19C14.3157 19 16.0226 18.3136 17.3304 17.1783C16.9611 17.2222 16.5853 17.2448 16.2044 17.2448C10.9858 17.2448 6.75521 13.0142 6.75521 7.79557C6.75521 7.41472 6.77779 7.03896 6.8217 6.6696Z" fill="currentColor"/>\n            '));
    this.notificationOff_ilf3m4$_0 = new IconDefinition('notificationOff', void 0, trimIndent('\n                <path d="M19 10C19 6.77579 16.8202 4.06072 13.8539 3.24812C13.5567 2.51616 12.8386 2 12 2C11.1614 2 10.4433 2.51616 10.1461 3.24812C9.58605 3.40155 9.054 3.62281 8.55937 3.90252L10.051 5.39411C10.6499 5.14035 11.3086 5 12 5C14.7614 5 17 7.23858 17 10V12.3431L19 14.3431V10Z" fill="#0D0D0D"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1753 17.4343L5 14.6972V9.99999C5 8.94987 5.23124 7.95375 5.64557 7.05978L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L17.5858 19H15.4646C15.2219 20.6961 13.7632 22 12 22C10.2368 22 8.77806 20.6961 8.53544 19H4.01296C3.91555 19.0014 3.81743 18.9885 3.72186 18.9608C3.59602 18.9244 3.48038 18.864 3.38026 18.7849C3.16669 18.616 3.02368 18.3618 3.00268 18.0738C2.9935 17.9509 3.0069 17.8258 3.04421 17.7051C3.07424 17.6076 3.11878 17.5165 3.1753 17.4343ZM5.86851 17H15.5858L7.19575 8.60997C7.0683 9.05126 7 9.51765 7 9.99999V15C7 15.1974 6.94156 15.3904 6.83205 15.5547L5.86851 17ZM10.5854 19C10.7913 19.5826 11.3469 20 12 20C12.6531 20 13.2087 19.5826 13.4146 19H10.5854Z" fill="#0D0D0D"/>\n            '));
    this.notification_dgk7mh$_0 = new IconDefinition('notification', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1461 3.24812C10.4433 2.51616 11.1614 2 12 2C12.8386 2 13.5567 2.51616 13.8539 3.24812C16.8202 4.06072 19 6.77579 19 10V14.6972L20.8321 17.4453C21.0366 17.7522 21.0557 18.1467 20.8817 18.4719C20.7077 18.797 20.3688 19 20 19H15.4646C15.2219 20.6961 13.7632 22 12 22C10.2368 22 8.77806 20.6961 8.53545 19H4C3.63121 19 3.29235 18.797 3.11833 18.4719C2.94431 18.1467 2.96338 17.7522 3.16795 17.4453L5 14.6972V10C5 6.77579 7.17983 4.06072 10.1461 3.24812ZM10.5854 19C10.7913 19.5826 11.3469 20 12 20C12.6531 20 13.2087 19.5826 13.4146 19H10.5854ZM12 5C9.23858 5 7 7.23858 7 10V15C7 15.1974 6.94156 15.3904 6.83205 15.5547L5.86852 17H18.1315L17.168 15.5547C17.0584 15.3904 17 15.1974 17 15V10C17 7.23858 14.7614 5 12 5Z" fill="currentColor"/>\n            '));
    this.optionsHorizontal_701ggi$_0 = new IconDefinition('optionsHorizontal', void 0, trimIndent('\n                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>\n                <path d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z" fill="currentColor"/>\n                <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="currentColor"/>\n            '));
    this.optionsVertical_qmwhng$_0 = new IconDefinition('optionsVertical', void 0, trimIndent('\n                <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" fill="currentColor"/>\n                <path d="M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z" fill="currentColor"/>\n                <path d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z" fill="currentColor"/>\n            '));
    this.pause_i5drh6$_0 = new IconDefinition('pause', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C9.55228 6 10 6.44772 10 7V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V7C8 6.44772 8.44772 6 9 6ZM15 6C15.5523 6 16 6.44772 16 7V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V7C14 6.44772 14.4477 6 15 6Z" fill="currentColor"/>\n            '));
    this.percentage_i8rosq$_0 = new IconDefinition('percentage', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="currentColor"/>\n                <path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" fill="currentColor"/>\n                <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill="currentColor"/>\n            '));
    this.pin_61iaxx$_0 = new IconDefinition('pin', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5994V4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4V10.5994C18.9318 11.6201 19.4321 12.6341 19.6987 13.4338C19.8447 13.8719 19.9199 14.2435 19.9587 14.5148C19.9781 14.6506 19.9884 14.7615 19.9939 14.8436C19.9966 14.8847 19.9981 14.9186 19.999 14.9448L19.9996 14.9682L19.9998 14.9783L20 14.9907L20 14.9957L20 14.9979L20 14.999C20 14.999 19.9954 14.8677 20 15C20 15.5523 19.5523 16 19 16H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V16H5C4.44772 16 4 15.5523 4 15C4 14.5 4 14.999 4 14.999L4 14.9979L4.00001 14.9957L4.00004 14.9907L4.00019 14.9783C4.00033 14.9691 4.00059 14.9579 4.00101 14.9448C4.00185 14.9186 4.00338 14.8847 4.00612 14.8436C4.01159 14.7615 4.02191 14.6506 4.0413 14.5148C4.08006 14.2435 4.15528 13.8719 4.30132 13.4338C4.56788 12.6341 5.06824 11.6201 6 10.5994ZM16 4H8V11C8 11.2652 7.89464 11.5196 7.70711 11.7071C6.86009 12.5541 6.43577 13.3854 6.22128 14H17.7787C17.5642 13.3854 17.1399 12.5541 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11V4Z" fill="#0D0D0D"/>\n            '));
    this.play_psmflc$_0 = new IconDefinition('play', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6.74105C6 5.19747 7.67443 4.23573 9.00774 5.01349L18.0231 10.2725C19.3461 11.0442 19.3461 12.9558 18.0231 13.7276L9.00774 18.9865C7.67443 19.7643 6 18.8026 6 17.259V6.74105ZM17.0154 12L8 6.74105V17.259L17.0154 12Z" fill="currentColor"/>\n            '));
    this.refresh_6a84np$_0 = new IconDefinition('refresh', void 0, trimIndent('\n                <path d="M12.7929 2.29289C13.1834 1.90237 13.8166 1.90237 14.2071 2.29289L17.2071 5.29289C17.5976 5.68342 17.5976 6.31658 17.2071 6.70711L14.2071 9.70711C13.8166 10.0976 13.1834 10.0976 12.7929 9.70711C12.4024 9.31658 12.4024 8.68342 12.7929 8.29289L14.0858 7H12.5C8.95228 7 6 9.95228 6 13.5C6 17.0477 8.95228 20 12.5 20C16.0477 20 19 17.0477 19 13.5C19 12.9477 19.4477 12.5 20 12.5C20.5523 12.5 21 12.9477 21 13.5C21 18.1523 17.1523 22 12.5 22C7.84772 22 4 18.1523 4 13.5C4 8.84772 7.84772 5 12.5 5H14.0858L12.7929 3.70711C12.4024 3.31658 12.4024 2.68342 12.7929 2.29289Z" fill="currentColor"/>\n            '));
    this.remove_pigqzk$_0 = new IconDefinition('remove', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor"/>\n            '));
    this.search_v0t0xw$_0 = new IconDefinition('search', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor"/>\n            '));
    this.select_uuzkyg$_0 = new IconDefinition('select', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L12 6.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4ZM7.29289 14.2929C7.68342 13.9024 8.31658 13.9024 8.70711 14.2929L12 17.5858L15.2929 14.2929C15.6834 13.9024 16.3166 13.9024 16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929Z" fill="currentColor"/>\n            '));
    this.send_pu5llo$_0 = new IconDefinition('send', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.3788 2 12.725 2.214 12.8944 2.55279L21.8944 20.5528C22.067 20.8978 22.0256 21.3113 21.7882 21.6154C21.5508 21.9195 21.1597 22.0599 20.7831 21.9762L12 20.0244L3.21694 21.9762C2.84035 22.0599 2.44921 21.9195 2.2118 21.6154C1.97439 21.3113 1.93306 20.8978 2.10558 20.5528L11.1056 2.55279C11.275 2.214 11.6212 2 12 2ZM13 18.1978L19.166 19.568L13 7.23607V18.1978ZM11 7.23607V18.1978L4.83402 19.568L11 7.23607Z" fill="currentColor"/>\n            '));
    this.settings_g92xr5$_0 = new IconDefinition('settings', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C11.4477 4 11 4.44772 11 5C11 6.69226 8.95399 7.53974 7.75738 6.34314C7.36686 5.95261 6.73369 5.95261 6.34317 6.34314C5.95265 6.73366 5.95265 7.36683 6.34317 7.75735C7.53982 8.954 6.69223 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C6.69236 13 7.53964 15.0461 6.34311 16.2426C5.95258 16.6332 5.95258 17.2663 6.34311 17.6569C6.73363 18.0474 7.3668 18.0474 7.75732 17.6569C8.9539 16.4603 11 17.3077 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 17.3077 15.046 16.4602 16.2427 17.6568C16.6332 18.0474 17.2664 18.0474 17.6569 17.6568C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426C16.4603 15.0461 17.3077 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C17.3078 11 16.4601 8.95405 17.6568 7.75737C18.0473 7.36684 18.0473 6.73368 17.6568 6.34315C17.2663 5.95263 16.6331 5.95263 16.2426 6.34315C15.046 7.53979 13 6.69219 13 5C13 4.44772 12.5523 4 12 4ZM9.00816 4.77703C9.12224 3.2243 10.4181 2 12 2C13.5819 2 14.8778 3.2243 14.9918 4.77703C16.1704 3.75977 17.9525 3.8104 19.071 4.92894C20.1896 6.04748 20.2402 7.82955 19.2229 9.00816C20.7757 9.12221 22 10.4181 22 12C22 13.5819 20.7757 14.8778 19.223 14.9918C20.2403 16.1704 20.1896 17.9525 19.0711 19.0711C17.9525 20.1896 16.1705 20.2402 14.9918 19.2229C14.8778 20.7757 13.5819 22 12 22C10.4181 22 9.12221 20.7757 9.00816 19.2229C7.82955 20.2402 6.04745 20.1896 4.92889 19.0711C3.81034 17.9525 3.75972 16.1704 4.77702 14.9918C3.2243 14.8778 2 13.5819 2 12C2 10.4181 3.22433 9.12221 4.77709 9.00816C3.75978 7.82955 3.81041 6.04747 4.92896 4.92892C6.0475 3.81038 7.82955 3.75975 9.00816 4.77703Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157Z" fill="currentColor"/>\n            '));
    this.share_jo0ec1$_0 = new IconDefinition('share', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711C15.3166 7.09763 14.6834 7.09763 14.2929 6.70711L13 5.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V5.41421L9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289L11.2929 2.29289ZM4 11C4 9.89543 4.89543 9 6 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H6V20H18V11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H18C19.1046 9 20 9.89543 20 11V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V11Z" fill="currentColor"/>\n            '));
    this.shoppingCartAdd_5j8ok7$_0 = new IconDefinition('shoppingCartAdd', void 0, trimIndent('\n                <path d="M6.00913 16.1357L4.1421 4H3C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2H4.9847C5.0806 1.99841 5.17434 2.01066 5.26367 2.03513C5.40561 2.07382 5.53497 2.143 5.64429 2.23519C5.76213 2.33437 5.85751 2.4609 5.91981 2.60698C5.95413 2.6872 5.97826 2.77281 5.99058 2.86219L6.31948 5H14V7H6.62717L7.85794 15H17.256L18.756 10H20.844L18.9578 16.2873C18.8309 16.7103 18.4416 17 18 17H7.01578C6.92133 17.0016 6.82899 16.9898 6.74088 16.9661C6.59074 16.9259 6.45453 16.8517 6.34104 16.7522C6.2371 16.6612 6.15157 16.5485 6.0921 16.4198C6.05113 16.3313 6.02271 16.2358 6.00913 16.1357Z" fill="#0D0D0D"/>\n                <path d="M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z" fill="#0D0D0D"/>\n                <path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="#0D0D0D"/>\n                <path d="M19 2C19.5523 2 20 2.44772 20 3V4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H20V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V6H17C16.4477 6 16 5.55228 16 5C16 4.44772 16.4477 4 17 4H18V3C18 2.44772 18.4477 2 19 2Z" fill="#0D0D0D"/>\n            '));
    this.shoppingCart_za3eys$_0 = new IconDefinition('shoppingCart', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.15291 4L6.01064 15.1464C6.02538 15.2469 6.05505 15.3425 6.09733 15.4309C6.15592 15.5538 6.23834 15.6615 6.33774 15.7493C6.45342 15.8516 6.59297 15.9276 6.74698 15.9677C6.83358 15.9904 6.92416 16.0017 7.01669 16H18C18.4304 16 18.8126 15.7246 18.9487 15.3162L21.9487 6.31623C22.0503 6.01128 21.9992 5.67606 21.8112 5.41529C21.6233 5.15452 21.3214 5 21 5H6.34716L5.98881 2.84987C5.97616 2.76586 5.95306 2.68527 5.92087 2.60947C5.85636 2.45701 5.75593 2.32588 5.63168 2.22473C5.45299 2.07926 5.22503 1.99578 4.98379 2H3C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H4.15291ZM7.84716 14L6.68049 7H19.6126L17.2792 14H7.84716Z" fill="#0D0D0D"/>\n                <path d="M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z" fill="#0D0D0D"/>\n                <path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="#0D0D0D"/>\n            '));
    this.sort_puc2ti$_0 = new IconDefinition('sort', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L11.7071 8.29289C12.0976 8.68342 12.0976 9.31658 11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711L8 7.41421V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V7.41421L3.70711 9.70711C3.31658 10.0976 2.68342 10.0976 2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289L6.29289 4.29289ZM16 16.5858V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V16.5858L20.2929 14.2929C20.6834 13.9024 21.3166 13.9024 21.7071 14.2929C22.0976 14.6834 22.0976 15.3166 21.7071 15.7071L17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071L12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929C12.6834 13.9024 13.3166 13.9024 13.7071 14.2929L16 16.5858Z" fill="currentColor"/>\n            '));
    this.speakers_x4z32o$_0 = new IconDefinition('speakers', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM18 4L6 4V20H18V4Z" fill="#0D0D0D"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z" fill="#0D0D0D"/>\n                <path d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z" fill="#0D0D0D"/>\n            '));
    this.stop_puf7fm$_0 = new IconDefinition('stop', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7ZM17 7L7 7V17H17V7Z" fill="currentColor"/>\n            '));
    this.sun_61g530$_0 = new IconDefinition('sun', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM19.0711 4.92893C19.4616 5.31945 19.4616 5.95261 19.0711 6.34314L18.364 7.05025C17.9735 7.44077 17.3403 7.44077 16.9498 7.05025C16.5593 6.65972 16.5593 6.02656 16.9498 5.63603L17.6569 4.92893C18.0474 4.5384 18.6806 4.5384 19.0711 4.92893ZM4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34314 4.92893L7.05025 5.63603C7.44077 6.02656 7.44077 6.65972 7.05025 7.05025C6.65972 7.44077 6.02656 7.44077 5.63603 7.05025L4.92893 6.34314C4.5384 5.95262 4.5384 5.31945 4.92893 4.92893ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM5.63603 16.9497C6.02656 16.5592 6.65972 16.5592 7.05025 16.9497C7.44077 17.3403 7.44077 17.9734 7.05025 18.364L6.34314 19.0711C5.95262 19.4616 5.31945 19.4616 4.92893 19.0711C4.5384 18.6805 4.5384 18.0474 4.92893 17.6568L5.63603 16.9497ZM16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9497C17.3403 16.5592 17.9735 16.5592 18.364 16.9497L19.0711 17.6568C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z" fill="currentColor"/>\n            '));
    this.switch_mdk74g$_0 = new IconDefinition('switch', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 2.29289C14.6834 1.90237 15.3166 1.90237 15.7071 2.29289L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L16.5858 8L5 8C4.44772 8 4 7.55228 4 7C4 6.44771 4.44772 6 5 6L16.5858 6L14.2929 3.70711C13.9024 3.31658 13.9024 2.68342 14.2929 2.29289ZM9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L7.41421 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7.41421L9.70711 20.2929C10.0976 20.6834 10.0976 21.3166 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071L4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z" fill="currentColor"/>\n            '));
    this.table_k17z42$_0 = new IconDefinition('table', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.5C2 4.39543 2.89543 3.5 4 3.5H20C21.1046 3.5 22 4.39543 22 5.5V18.5C22 19.6046 21.1046 20.5 20 20.5H4C2.89543 20.5 2 19.6046 2 18.5V5.5ZM11 5.5H4V8.5H11V5.5ZM13 5.5V8.5H20V5.5H13ZM20 10.5H13V13.5H20V10.5ZM20 15.5H13V18.5H20V15.5ZM11 18.5V15.5H4V18.5H11ZM4 13.5H11V10.5H4V13.5Z" fill="currentColor"/>\n            '));
    this.tablet_i857uq$_0 = new IconDefinition('tablet', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM18 4L6 4V20H18V4Z" fill="currentColor"/>\n                <path d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z" fill="currentColor"/>\n            '));
    this.tag_61fx3e$_0 = new IconDefinition('tag', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071L2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3ZM4 4V10.5858L13 19.5858L19.5858 13L10.5858 4H4Z" fill="#0D0D0D"/>\n                <path d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z" fill="#0D0D0D"/>\n            '));
    this.undo_pveqio$_0 = new IconDefinition('undo', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2071 2.29289C12.5976 2.68342 12.5976 3.31658 12.2071 3.70711L10.9142 5H12.5C17.1523 5 21 8.84772 21 13.5C21 18.1523 17.1523 22 12.5 22C7.84772 22 4 18.1523 4 13.5C4 12.9477 4.44772 12.5 5 12.5C5.55228 12.5 6 12.9477 6 13.5C6 17.0477 8.95228 20 12.5 20C16.0477 20 19 17.0477 19 13.5C19 9.95228 16.0477 7 12.5 7H10.9142L12.2071 8.29289C12.5976 8.68342 12.5976 9.31658 12.2071 9.70711C11.8166 10.0976 11.1834 10.0976 10.7929 9.70711L7.79289 6.70711C7.40237 6.31658 7.40237 5.68342 7.79289 5.29289L10.7929 2.29289C11.1834 1.90237 11.8166 1.90237 12.2071 2.29289Z" fill="currentColor"/>\n            '));
    this.unlock_2rdyow$_0 = new IconDefinition('unlock', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3523 4 9 5.35228 9 7V10H18C19.1046 10 20 10.8954 20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12C4 10.8954 4.89543 10 6 10H7V7C7 4.24772 9.24771 2 12 2C14.7523 2 17 4.24772 17 7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7C15 5.35228 13.6477 4 12 4ZM6 12V20H18V12H6Z" fill="currentColor"/>\n            '));
    this.userAdd_dmidx6$_0 = new IconDefinition('userAdd', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM19 11C19.5523 11 20 11.4477 20 12V13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H20V16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16V15H17C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13H18V12C18 11.4477 18.4477 11 19 11ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z" fill="currentColor"/>\n            '));
    this.userCheck_p8fi2b$_0 = new IconDefinition('userCheck', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM21.6644 11.2526C22.0771 11.6195 22.1143 12.2516 21.7474 12.6644L19.0807 15.6644C18.891 15.8779 18.619 16 18.3333 16C18.0477 16 17.7757 15.8779 17.5859 15.6644L16.2526 14.1644C15.8857 13.7516 15.9229 13.1195 16.3356 12.7526C16.7484 12.3857 17.3805 12.4229 17.7474 12.8356L18.3333 13.4948L20.2526 11.3356C20.6195 10.9229 21.2516 10.8857 21.6644 11.2526ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z" fill="currentColor"/>\n            '));
    this.userRemove_6p7gb9$_0 = new IconDefinition('userRemove', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM16 14C16 13.4477 16.4477 13 17 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H17C16.4477 15 16 14.5523 16 14ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z" fill="currentColor"/>\n            '));
    this.user_pvhy9l$_0 = new IconDefinition('user', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="currentColor"/>\n            '));
    this.users_ks7xxk$_0 = new IconDefinition('users', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM16.8284 3.75736C17.219 3.36683 17.8521 3.36683 18.2426 3.75736C20.5858 6.1005 20.5858 9.8995 18.2426 12.2426C17.8521 12.6332 17.219 12.6332 16.8284 12.2426C16.4379 11.8521 16.4379 11.219 16.8284 10.8284C18.3905 9.26633 18.3905 6.73367 16.8284 5.17157C16.4379 4.78105 16.4379 4.14788 16.8284 3.75736ZM17.5299 16.7575C17.6638 16.2217 18.2067 15.8959 18.7425 16.0299C20.0705 16.3618 20.911 17.2109 21.3944 18.1778C21.8622 19.1133 22 20.1571 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 20.3429 19.8878 19.6367 19.6056 19.0722C19.339 18.5391 18.9295 18.1382 18.2575 17.9701C17.7217 17.8362 17.3959 17.2933 17.5299 16.7575ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z" fill="currentColor"/>\n            '));
    this.volumeOff_j0ds5h$_0 = new IconDefinition('volumeOff', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4179 2.0915C13.7727 2.25469 14 2.60948 14 3.00001V21C14 21.3905 13.7727 21.7453 13.4179 21.9085C13.0631 22.0717 12.6457 22.0134 12.3492 21.7593L5.63008 16H3C2.44772 16 2 15.5523 2 15V9.00001C2 8.44773 2.44772 8.00001 3 8.00001H5.63008L12.3492 2.24076C12.6457 1.9866 13.0631 1.92832 13.4179 2.0915ZM12 5.17423L6.65079 9.75927C6.46955 9.91462 6.23871 10 6 10H4V14H6C6.23871 14 6.46955 14.0854 6.65079 14.2408L12 18.8258V5.17423ZM16.2929 9.29291C16.6834 8.90238 17.3166 8.90238 17.7071 9.29291L19 10.5858L20.2929 9.29291C20.6834 8.90238 21.3166 8.90238 21.7071 9.29291C22.0976 9.68343 22.0976 10.3166 21.7071 10.7071L20.4142 12L21.7071 13.2929C22.0976 13.6834 22.0976 14.3166 21.7071 14.7071C21.3166 15.0976 20.6834 15.0976 20.2929 14.7071L19 13.4142L17.7071 14.7071C17.3166 15.0976 16.6834 15.0976 16.2929 14.7071C15.9024 14.3166 15.9024 13.6834 16.2929 13.2929L17.5858 12L16.2929 10.7071C15.9024 10.3166 15.9024 9.68343 16.2929 9.29291Z" fill="currentColor"/>\n            '));
    this.volumeUp_qvrypb$_0 = new IconDefinition('volumeUp', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4179 2.0915C13.7727 2.25469 14 2.60948 14 3.00001V21C14 21.3905 13.7727 21.7453 13.4179 21.9085C13.0631 22.0717 12.6457 22.0134 12.3492 21.7593L5.63008 16H3C2.44772 16 2 15.5523 2 15V9.00001C2 8.44773 2.44772 8.00001 3 8.00001H5.63008L12.3492 2.24076C12.6457 1.9866 13.0631 1.92832 13.4179 2.0915ZM12 5.17423L6.65079 9.75927C6.46955 9.91462 6.23871 10 6 10H4V14H6C6.23871 14 6.46955 14.0854 6.65079 14.2408L12 18.8258V5.17423ZM17.2929 5.29291C17.6834 4.90238 18.3166 4.90238 18.7071 5.29291L18.7078 5.29362L18.7086 5.29438L18.7102 5.29605L18.7141 5.29996L18.724 5.31008C18.7315 5.31784 18.7409 5.32765 18.752 5.33951C18.7742 5.36322 18.8034 5.39513 18.8385 5.43526C18.9087 5.51549 19.0028 5.62871 19.1125 5.77501C19.3318 6.06748 19.6147 6.49329 19.8944 7.0528C20.4556 8.17509 21 9.82725 21 12C21 14.1728 20.4556 15.8249 19.8944 16.9472C19.6147 17.5067 19.3318 17.9326 19.1125 18.225C19.0028 18.3713 18.9087 18.4845 18.8385 18.5648C18.8034 18.6049 18.7742 18.6368 18.752 18.6605C18.7409 18.6724 18.7315 18.6822 18.724 18.69L18.7141 18.7001L18.7102 18.704L18.7086 18.7056L18.7078 18.7064L18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071C16.904 18.3183 16.9024 17.6889 17.2879 17.2979L17.2929 17.2926C17.3 17.2851 17.3138 17.2701 17.3334 17.2478C17.3725 17.203 17.4347 17.1287 17.5125 17.025C17.6682 16.8175 17.8853 16.4933 18.1056 16.0528C18.5444 15.1751 19 13.8272 19 12C19 10.1728 18.5444 8.82494 18.1056 7.94723C17.8853 7.50674 17.6682 7.18255 17.5125 6.97501C17.4347 6.87131 17.3725 6.79704 17.3334 6.75227C17.3138 6.72989 17.3 6.71493 17.2929 6.70739L17.2879 6.70208C16.9024 6.31117 16.904 5.68176 17.2929 5.29291ZM15.2929 8.29291C15.6834 7.90238 16.3166 7.90238 16.7071 8.29291L16.7085 8.29434L16.7101 8.29587L16.7134 8.29923L16.7211 8.30715L16.7408 8.32779C16.7557 8.34369 16.7741 8.36388 16.7955 8.38838C16.8384 8.43736 16.8934 8.50371 16.9563 8.58751C17.0818 8.75498 17.2397 8.99329 17.3944 9.3028C17.7056 9.92509 18 10.8272 18 12C18 13.1728 17.7056 14.0749 17.3944 14.6972C17.2397 15.0067 17.0818 15.2451 16.9563 15.4125C16.8934 15.4963 16.8384 15.5627 16.7955 15.6116C16.7741 15.6361 16.7557 15.6563 16.7408 15.6722L16.7211 15.6929L16.7134 15.7008L16.7101 15.7042L16.7085 15.7057L16.7078 15.7064C16.3173 16.0969 15.6834 16.0976 15.2929 15.7071C14.9057 15.32 14.9024 14.6943 15.2829 14.303C15.2843 14.3015 15.2868 14.2987 15.2904 14.2946C15.3022 14.2811 15.3253 14.2537 15.3562 14.2125C15.4182 14.13 15.5103 13.9933 15.6056 13.8028C15.7944 13.4251 16 12.8272 16 12C16 11.1728 15.7944 10.5749 15.6056 10.1972C15.5103 10.0067 15.4182 9.87005 15.3562 9.78751C15.3253 9.74631 15.3022 9.71892 15.2904 9.70539C15.2868 9.70132 15.2843 9.69852 15.2829 9.69701C14.9024 9.30574 14.9057 8.68008 15.2929 8.29291Z" fill="currentColor"/>\n            '));
    this.warning_qa21o4$_0 = new IconDefinition('warning', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C11.4477 14 11 13.5523 11 13V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V13C13 13.5523 12.5523 14 12 14Z" fill="currentColor"/>\n                <path d="M10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5Z" fill="currentColor"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2301 3.2156C10.98 1.79093 13.02 1.79092 13.7698 3.2156L22.1135 19.0685C22.8144 20.4003 21.8486 22 20.3436 22H3.65635C2.15133 22 1.18556 20.4003 1.88651 19.0685L10.2301 3.2156ZM20.3436 20L12 4.1471L3.65635 20L20.3436 20Z" fill="currentColor"/>\n            '));
    this.zoomIn_5mwito$_0 = new IconDefinition('zoomIn', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10ZM10 7C10.5523 7 11 7.44772 11 8V9H12C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11H11V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V11H8C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9H9V8C9 7.44772 9.44772 7 10 7Z" fill="currentColor"/>\n            '));
    this.zoomOut_wnw451$_0 = new IconDefinition('zoomOut', void 0, trimIndent('\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10ZM7 10C7 9.44772 7.44772 9 8 9H12C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11H8C7.44772 11 7 10.5523 7 10Z" fill="currentColor"/>\n            '));
    this.fritz2_2gleaz$_0 = new IconDefinition('fritz2', '0 0 152 152', trimIndent('\n                <path fill="currentColor" d="M 75.63569,1.4806133e-5 A 75.731422,74.018906 0 0 0 7.5696619e-8,74.019268 75.731422,74.018906 0 0 0 75.731808,148.038 75.731422,74.018906 0 0 0 151.4631,74.019268 75.731422,74.018906 0 0 0 75.731808,1.4806133e-5 a 75.731422,74.018906 0 0 0 -0.09612,0 z M 111.16014,18.428347 c 3.52601,0.01826 6.37281,2.879733 6.35465,6.387206 l -0.13126,25.416536 c -0.0181,3.50747 -2.89477,6.338845 -6.4208,6.320544 -3.52602,-0.01826 -6.37285,-2.87922 -6.35465,-6.38669 l -12.775445,-0.06615 c -3.52603,-0.01826 -6.402596,2.813592 -6.420797,6.321062 l -0.03204,6.221842 h 5.896279 a 6.3606494,6.4906672 0 0 1 0.446484,-0.01601 6.3606494,6.4906672 0 0 1 6.360853,6.490557 6.3606494,6.4906672 0 0 1 -6.360853,6.490563 6.3606494,6.4906672 0 0 1 -0.516763,-0.0217 H 53.850976 v -0.02119 a 6.3606494,6.4732442 0 0 1 -0.301792,0.0078 6.3606494,6.4732442 0 0 1 -6.360853,-6.473505 6.3606494,6.4732442 0 0 1 6.360853,-6.472991 6.3606494,6.4732442 0 0 1 0.454237,0.01654 h 5.82445 l 0.06615,-12.708268 c 0.07267,-14.03637 11.57207,-25.357293 25.68267,-25.284244 l 19.163169,0.09922 c 0.0182,-3.507473 2.89426,-6.339322 6.42028,-6.32106 z m -51.430972,60.447988 25.551413,0.132292 -0.0987,19.062403 c -0.07268,14.03613 -11.57207,25.35724 -25.68267,25.28424 l -12.775445,-0.0661 c -0.01815,3.50747 -2.894788,6.33936 -6.420798,6.32106 -3.52603,-0.0183 -6.372852,-2.87974 -6.354651,-6.38721 L 34.08009,97.806447 c 0.01815,-3.50747 2.894258,-6.339361 6.420278,-6.321063 3.52601,0.01826 6.373368,2.879728 6.355168,6.387209 l 6.387724,0.03307 c 3.52602,0.01826 6.40208,-2.813582 6.420281,-6.321063 z"                  />\n               '));
  }
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'add', {configurable: true, get: function () {
    return this.add_61rzox$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'archive', {configurable: true, get: function () {
    return this.archive_acc7le$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowDown', {configurable: true, get: function () {
    return this.arrowDown_mclo4b$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowLeftDown', {configurable: true, get: function () {
    return this.arrowLeftDown_7nfd7m$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowLeftUp', {configurable: true, get: function () {
    return this.arrowLeftUp_ebxo1x$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowLeft', {configurable: true, get: function () {
    return this.arrowLeft_m8e1pc$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowRightDown', {configurable: true, get: function () {
    return this.arrowRightDown_49mzrl$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowRightUp', {configurable: true, get: function () {
    return this.arrowRightUp_y2thnu$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowRight', {configurable: true, get: function () {
    return this.arrowRight_nzif75$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'arrowUp', {configurable: true, get: function () {
    return this.arrowUp_34l1x0$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'attachment', {configurable: true, get: function () {
    return this.attachment_il3lzz$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'ban', {configurable: true, get: function () {
    return this.ban_61reov$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'barChartAlt', {configurable: true, get: function () {
    return this.barChartAlt_eeyche$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'barChart', {configurable: true, get: function () {
    return this.barChart_1e581l$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'board', {configurable: true, get: function () {
    return this.board_bq3dre$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'book', {configurable: true, get: function () {
    return this.book_pkziaj$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'bookmark', {configurable: true, get: function () {
    return this.bookmark_oqokvi$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'calendar', {configurable: true, get: function () {
    return this.calendar_tccyu2$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'call', {configurable: true, get: function () {
    return this.call_plaava$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'camera', {configurable: true, get: function () {
    return this.camera_gjhp27$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'caretDown', {configurable: true, get: function () {
    return this.caretDown_o1d7kl$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'caretLeft', {configurable: true, get: function () {
    return this.caretLeft_nx5l5m$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'caretRight', {configurable: true, get: function () {
    return this.caretRight_sc7bth$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'caretUp', {configurable: true, get: function () {
    return this.caretUp_hxpdg2$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'check', {configurable: true, get: function () {
    return this.check_c3cozs$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronDoubleDown', {configurable: true, get: function () {
    return this.chevronDoubleDown_wh4z1a$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronDoubleLeft', {configurable: true, get: function () {
    return this.chevronDoubleLeft_wcxcmb$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronDoubleRight', {configurable: true, get: function () {
    return this.chevronDoubleRight_5snrak$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronDoubleUp', {configurable: true, get: function () {
    return this.chevronDoubleUp_6rciif$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronDown', {configurable: true, get: function () {
    return this.chevronDown_ox1s8j$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronLeft', {configurable: true, get: function () {
    return this.chevronLeft_p19eni$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronRight', {configurable: true, get: function () {
    return this.chevronRight_2cnn8d$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'chevronUp', {configurable: true, get: function () {
    return this.chevronUp_3lfuna$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleAdd', {configurable: true, get: function () {
    return this.circleAdd_bpn9q9$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleArrowDown', {configurable: true, get: function () {
    return this.circleArrowDown_blceej$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleArrowLeft', {configurable: true, get: function () {
    return this.circleArrowLeft_bh4rzk$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleArrowRight', {configurable: true, get: function () {
    return this.circleArrowRight_2axiip$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleArrowUp', {configurable: true, get: function () {
    return this.circleArrowUp_a447lo$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleCheck', {configurable: true, get: function () {
    return this.circleCheck_vq22h4$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleError', {configurable: true, get: function () {
    return this.circleError_um8buw$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleHelp', {configurable: true, get: function () {
    return this.circleHelp_7tlpbh$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleInformation', {configurable: true, get: function () {
    return this.circleInformation_29ahbg$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleRemove', {configurable: true, get: function () {
    return this.circleRemove_grw4z4$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'circleWarning', {configurable: true, get: function () {
    return this.circleWarning_vicqsc$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'clipboardCheck', {configurable: true, get: function () {
    return this.clipboardCheck_9qaj82$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'clipboardList', {configurable: true, get: function () {
    return this.clipboardList_pnmxfg$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'clipboard', {configurable: true, get: function () {
    return this.clipboard_whlcue$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'clock', {configurable: true, get: function () {
    return this.clock_c5q98i$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'close', {configurable: true, get: function () {
    return this.close_c5qkyg$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'cloudDownload', {configurable: true, get: function () {
    return this.cloudDownload_h5jfwz$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'cloudUpload', {configurable: true, get: function () {
    return this.cloudUpload_rrwa12$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'cloud', {configurable: true, get: function () {
    return this.cloud_c5qmez$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'computer', {configurable: true, get: function () {
    return this.computer_w09od3$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'copy', {configurable: true, get: function () {
    return this.copy_pljbyn$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'creditCard', {configurable: true, get: function () {
    return this.creditCard_bteuhx$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'delete', {configurable: true, get: function () {
    return this.delete_x3ipuh$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'documentAdd', {configurable: true, get: function () {
    return this.documentAdd_8kuf92$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'documentCheck', {configurable: true, get: function () {
    return this.documentCheck_3uqsfx$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'documentDownload', {configurable: true, get: function () {
    return this.documentDownload_dkqczj$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'documentEmpty', {configurable: true, get: function () {
    return this.documentEmpty_2tp6w2$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'documentRemove', {configurable: true, get: function () {
    return this.documentRemove_sd94at$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'document', {configurable: true, get: function () {
    return this.document_6njzop$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'download', {configurable: true, get: function () {
    return this.download_crceqk$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'drag', {configurable: true, get: function () {
    return this.drag_pm4pyo$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'editAlt', {configurable: true, get: function () {
    return this.editAlt_qi4pjj$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'edit', {configurable: true, get: function () {
    return this.edit_pmfqze$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'email', {configurable: true, get: function () {
    return this.email_d44h9w$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'expand', {configurable: true, get: function () {
    return this.expand_e77qgm$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'export', {configurable: true, get: function () {
    return this.export_e6ypao$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'externalLink', {configurable: true, get: function () {
    return this.externalLink_7xw7fl$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'eyeOff', {configurable: true, get: function () {
    return this.eyeOff_dwji8q$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'eye', {configurable: true, get: function () {
    return this.eye_61p05d$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'favorite', {configurable: true, get: function () {
    return this.favorite_wk0s20$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'filterAlt', {configurable: true, get: function () {
    return this.filterAlt_j0x3dt$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'filter', {configurable: true, get: function () {
    return this.filter_6od044$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'folderAdd', {configurable: true, get: function () {
    return this.folderAdd_719m5f$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'folderCheck', {configurable: true, get: function () {
    return this.folderCheck_bvn3sa$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'folderDownload', {configurable: true, get: function () {
    return this.folderDownload_5mrdqm$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'folderRemove', {configurable: true, get: function () {
    return this.folderRemove_7b8hf2$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'folder', {configurable: true, get: function () {
    return this.folder_3udhje$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'grid', {configurable: true, get: function () {
    return this.grid_pns9lq$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'heart', {configurable: true, get: function () {
    return this.heart_eev6kq$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'home', {configurable: true, get: function () {
    return this.home_poa885$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'image', {configurable: true, get: function () {
    return this.image_f0ax79$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'inbox', {configurable: true, get: function () {
    return this.inbox_f0vj62$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'laptop', {configurable: true, get: function () {
    return this.laptop_6mr1u2$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'linkAlt', {configurable: true, get: function () {
    return this.linkAlt_x8y89r$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'link', {configurable: true, get: function () {
    return this.link_pqdlka$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'list', {configurable: true, get: function () {
    return this.list_pqdphi$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'location', {configurable: true, get: function () {
    return this.location_sqzbw1$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'lock', {configurable: true, get: function () {
    return this.lock_pqh7bt$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'logOut', {configurable: true, get: function () {
    return this.logOut_d3s41m$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'map', {configurable: true, get: function () {
    return this.map_61kdsc$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'megaphone', {configurable: true, get: function () {
    return this.megaphone_f191hw$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'menu', {configurable: true, get: function () {
    return this.menu_pquug5$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'messageAlt', {configurable: true, get: function () {
    return this.messageAlt_kta5a6$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'message', {configurable: true, get: function () {
    return this.message_aedy3t$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'mobile', {configurable: true, get: function () {
    return this.mobile_rpvtxe$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'moon', {configurable: true, get: function () {
    return this.moon_pr18w3$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'notificationOff', {configurable: true, get: function () {
    return this.notificationOff_ilf3m4$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'notification', {configurable: true, get: function () {
    return this.notification_dgk7mh$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'optionsHorizontal', {configurable: true, get: function () {
    return this.optionsHorizontal_701ggi$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'optionsVertical', {configurable: true, get: function () {
    return this.optionsVertical_qmwhng$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'pause', {configurable: true, get: function () {
    return this.pause_i5drh6$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'percentage', {configurable: true, get: function () {
    return this.percentage_i8rosq$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'pin', {configurable: true, get: function () {
    return this.pin_61iaxx$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'play', {configurable: true, get: function () {
    return this.play_psmflc$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'refresh', {configurable: true, get: function () {
    return this.refresh_6a84np$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'remove', {configurable: true, get: function () {
    return this.remove_pigqzk$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'search', {configurable: true, get: function () {
    return this.search_v0t0xw$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'select', {configurable: true, get: function () {
    return this.select_uuzkyg$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'send', {configurable: true, get: function () {
    return this.send_pu5llo$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'settings', {configurable: true, get: function () {
    return this.settings_g92xr5$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'share', {configurable: true, get: function () {
    return this.share_jo0ec1$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'shoppingCartAdd', {configurable: true, get: function () {
    return this.shoppingCartAdd_5j8ok7$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'shoppingCart', {configurable: true, get: function () {
    return this.shoppingCart_za3eys$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'sort', {configurable: true, get: function () {
    return this.sort_puc2ti$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'speakers', {configurable: true, get: function () {
    return this.speakers_x4z32o$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'stop', {configurable: true, get: function () {
    return this.stop_puf7fm$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'sun', {configurable: true, get: function () {
    return this.sun_61g530$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'switch', {configurable: true, get: function () {
    return this.switch_mdk74g$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'table', {configurable: true, get: function () {
    return this.table_k17z42$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'tablet', {configurable: true, get: function () {
    return this.tablet_i857uq$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'tag', {configurable: true, get: function () {
    return this.tag_61fx3e$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'undo', {configurable: true, get: function () {
    return this.undo_pveqio$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'unlock', {configurable: true, get: function () {
    return this.unlock_2rdyow$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'userAdd', {configurable: true, get: function () {
    return this.userAdd_dmidx6$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'userCheck', {configurable: true, get: function () {
    return this.userCheck_p8fi2b$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'userRemove', {configurable: true, get: function () {
    return this.userRemove_6p7gb9$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'user', {configurable: true, get: function () {
    return this.user_pvhy9l$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'users', {configurable: true, get: function () {
    return this.users_ks7xxk$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'volumeOff', {configurable: true, get: function () {
    return this.volumeOff_j0ds5h$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'volumeUp', {configurable: true, get: function () {
    return this.volumeUp_qvrypb$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'warning', {configurable: true, get: function () {
    return this.warning_qa21o4$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'zoomIn', {configurable: true, get: function () {
    return this.zoomIn_5mwito$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'zoomOut', {configurable: true, get: function () {
    return this.zoomOut_wnw451$_0;
  }});
  Object.defineProperty(DefaultTheme$icons$ObjectLiteral.prototype, 'fritz2', {configurable: true, get: function () {
    return this.fritz2_2gleaz$_0;
  }});
  DefaultTheme$icons$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Icons]};
  function DefaultTheme$input$ObjectLiteral() {
    this.sizes_jmmyni$_0 = new DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral();
    this.variants_q6eiee$_0 = new DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral();
  }
  Object.defineProperty(DefaultTheme$input$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_jmmyni$_0;
  }});
  Object.defineProperty(DefaultTheme$input$ObjectLiteral.prototype, 'variants', {configurable: true, get: function () {
    return this.variants_q6eiee$_0;
  }});
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral() {
    this.small_y4iz2u$_0 = DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda;
    this.normal_8prsds$_0 = DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda;
    this.large_umwu3m$_0 = DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda;
  }
  Object.defineProperty(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_y4iz2u$_0;
  }});
  Object.defineProperty(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_8prsds$_0;
  }});
  Object.defineProperty(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_umwu3m$_0;
  }});
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    return '2rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    return '3rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1($receiver) {
    return $receiver.large;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_2);
    return Unit;
  }
  DefaultTheme$input$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [InputFieldSizes]};
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral() {
    this.outline_w2dvn$_0 = DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$outline$lambda;
    this.filled_te3xnx$_0 = DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda;
  }
  Object.defineProperty(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral.prototype, 'outline', {configurable: true, get: function () {
    return this.outline_w2dvn$_0;
  }});
  Object.defineProperty(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral.prototype, 'filled', {configurable: true, get: function () {
    return this.filled_te3xnx$_0;
  }});
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$outline$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda($receiver) {
    return $receiver.light;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('filter: brightness(90%);');
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda_0($receiver) {
    return '1';
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda$lambda($receiver) {
    return 'transparent';
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda_1($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda_1($receiver) {
    $receiver.zIndex_yiflju$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda_0);
    $receiver.background_f5fcq6$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda);
    $receiver.hover_xighi7$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda_0);
    $receiver.focus_xighi7$(DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral$filled$lambda$lambda_1);
    return Unit;
  }
  DefaultTheme$input$ObjectLiteral$variants$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [InputFieldVariants]};
  DefaultTheme$input$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [InputFieldStyles]};
  function DefaultTheme$checkbox$ObjectLiteral(this$DefaultTheme) {
    this.sizes_od15rx$_0 = new DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral(this$DefaultTheme);
    this.input_jp5uth$_0 = DefaultTheme$checkbox$ObjectLiteral$input$lambda;
    this.icon_yzzquk$_0 = DefaultTheme$checkbox$ObjectLiteral$icon$lambda;
    this.label_kww4ez$_0 = DefaultTheme$checkbox$ObjectLiteral$label$lambda;
    this.default_voe102$_0 = DefaultTheme$checkbox$ObjectLiteral$default$lambda;
    this.checked_gwy81k$_0 = DefaultTheme$checkbox$ObjectLiteral$checked$lambda;
  }
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_od15rx$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'input', {configurable: true, get: function () {
    return this.input_jp5uth$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'icon', {configurable: true, get: function () {
    return this.icon_yzzquk$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'label', {configurable: true, get: function () {
    return this.label_kww4ez$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'default', {configurable: true, get: function () {
    return this.default_voe102$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral.prototype, 'checked', {configurable: true, get: function () {
    return this.checked_gwy81k$_0;
  }});
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral(this$DefaultTheme) {
    this.basic_0 = DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$basic$lambda;
    this.small_m8tjmh$_0 = DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this, this$DefaultTheme);
    this.normal_jk9h7j$_0 = DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this, this$DefaultTheme);
    this.large_pqfolp$_0 = DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this, this$DefaultTheme);
  }
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_m8tjmh$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_jk9h7j$_0;
  }});
  Object.defineProperty(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_pqfolp$_0;
  }});
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$basic$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda);
    $receiver.css_61zpoe$('align-items: center;');
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this$, this$DefaultTheme) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--cb-size: .75rem');
      $receiver.css_61zpoe$('--cb-svg-size: .50rem');
      $receiver.css_61zpoe$('--cb-radius:  ' + this$DefaultTheme.radii.smaller);
      $receiver.fontSize_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this$, this$DefaultTheme) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--cb-size: 1.0rem');
      $receiver.css_61zpoe$('--cb-svg-size: .75rem');
      $receiver.css_61zpoe$('--cb-radius:  ' + this$DefaultTheme.radii.small);
      $receiver.fontSize_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this$, this$DefaultTheme) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--cb-size: 1.5rem');
      $receiver.css_61zpoe$('--cb-svg-size: 1.25rem');
      $receiver.css_61zpoe$('--cb-radius:  ' + this$DefaultTheme.radii.normal);
      $receiver.fontSize_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1);
      return Unit;
    };
  }
  DefaultTheme$checkbox$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CheckboxSizes]};
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.focus;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_0($receiver) {
    return $receiver.outline;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda($receiver) {
    $receiver.border_4a22k0$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda);
    $receiver.boxShadow_ihm9h8$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.disabled;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_1($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_0($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_2($receiver) {
    return '.5';
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_1($receiver) {
    $receiver.opacity_y3j6id$(DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_2($receiver) {
    $receiver.css_61zpoe$('visibility:hidden;');
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$input$lambda($receiver) {
    $receiver.children_qlrppv$('&:focus + div', DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda);
    $receiver.children_qlrppv$('&[disabled] + div', DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_0);
    $receiver.children_qlrppv$('&[disabled] ~ div', DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_1);
    $receiver.children_qlrppv$('&:not([checked]) + div > *', DefaultTheme$checkbox$ObjectLiteral$input$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda($receiver) {
    return 'var(--cb-svg-size)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_0($receiver) {
    return 'var(--cb-svg-size)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_1($receiver) {
    return 'var(--cb-svg-size)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda$lambda($receiver) {
    return '.0625rem';
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda$lambda_0($receiver) {
    return '.0625rem';
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_2($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda$lambda);
    $receiver.left_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$icon$lambda($receiver) {
    $receiver.width_wpghq5$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_0);
    $receiver.lineHeight_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_1);
    $receiver.margins_ptb4s1$(DefaultTheme$checkbox$ObjectLiteral$icon$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda_0($receiver) {
    return $receiver.block;
  }
  function DefaultTheme$checkbox$ObjectLiteral$label$lambda($receiver) {
    $receiver.margins_ptb4s1$(DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda);
    $receiver.display_1gh9wc$(DefaultTheme$checkbox$ObjectLiteral$label$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda() {
    return '0';
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_0($receiver) {
    $receiver.shrink_h4ejuu$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_1($receiver) {
    return 'var(--cb-size)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_2($receiver) {
    return 'var(--cb-size)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_0($receiver) {
    return $receiver.base;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_3($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_1($receiver) {
    return '1px';
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_2($receiver) {
    return $receiver.solid;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_3($receiver) {
    return $receiver.light;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_4($receiver) {
    $receiver.width_qwzhsr$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_1);
    $receiver.style_hw5xj$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_2);
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda$lambda_3);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_5($receiver) {
    return 'var(--cb-radius)';
  }
  function DefaultTheme$checkbox$ObjectLiteral$default$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda);
    $receiver.flex_e69mls$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_0);
    $receiver.width_wpghq5$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_1);
    $receiver.height_wpghq5$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_2);
    $receiver.background_f5fcq6$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_3);
    $receiver.border_4a22k0$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_4);
    $receiver.radius_bcpvvc$(DefaultTheme$checkbox$ObjectLiteral$default$lambda$lambda_5);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda$lambda($receiver) {
    return $receiver.info;
  }
  function DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda_0($receiver) {
    return $receiver.base;
  }
  function DefaultTheme$checkbox$ObjectLiteral$checked$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda);
    $receiver.color_jl9ed9$(DefaultTheme$checkbox$ObjectLiteral$checked$lambda$lambda_0);
    return Unit;
  }
  DefaultTheme$checkbox$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CheckboxStyles]};
  function DefaultTheme$radio$ObjectLiteral() {
    this.sizes_q2m6g1$_0 = new DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral();
    this.input_uqhheh$_0 = DefaultTheme$radio$ObjectLiteral$input$lambda;
    this.label_tir7sz$_0 = DefaultTheme$radio$ObjectLiteral$label$lambda;
    this.default_epi828$_0 = DefaultTheme$radio$ObjectLiteral$default$lambda;
    this.selected_q8pa5k$_0 = DefaultTheme$radio$ObjectLiteral$selected$lambda;
  }
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_q2m6g1$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral.prototype, 'input', {configurable: true, get: function () {
    return this.input_uqhheh$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral.prototype, 'label', {configurable: true, get: function () {
    return this.label_tir7sz$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral.prototype, 'default', {configurable: true, get: function () {
    return this.default_epi828$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral.prototype, 'selected', {configurable: true, get: function () {
    return this.selected_q8pa5k$_0;
  }});
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral() {
    this.basic_0 = DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$basic$lambda;
    this.small_mdlxh7$_0 = DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this);
    this.normal_fftjr5$_0 = DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this);
    this.large_pv82gf$_0 = DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this);
  }
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_mdlxh7$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_fftjr5$_0;
  }});
  Object.defineProperty(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_pv82gf$_0;
  }});
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$basic$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda);
    $receiver.css_61zpoe$('align-items: center;');
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--rb-size: .75rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--rb-size: 1.0rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--rb-size: 1.5rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1);
      return Unit;
    };
  }
  DefaultTheme$radio$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [RadioSizes]};
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.focus;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_0($receiver) {
    return $receiver.outline;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda($receiver) {
    $receiver.border_4a22k0$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda);
    $receiver.boxShadow_ihm9h8$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.disabled;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_1($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda_0($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_2($receiver) {
    return '.5';
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda$lambda_1($receiver) {
    $receiver.opacity_y3j6id$(DefaultTheme$radio$ObjectLiteral$input$lambda$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$input$lambda($receiver) {
    $receiver.children_qlrppv$('&:focus + div', DefaultTheme$radio$ObjectLiteral$input$lambda$lambda);
    $receiver.children_qlrppv$('&[disabled] + div', DefaultTheme$radio$ObjectLiteral$input$lambda$lambda_0);
    $receiver.children_qlrppv$('&[disabled] ~ div', DefaultTheme$radio$ObjectLiteral$input$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$label$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$radio$ObjectLiteral$label$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$radio$ObjectLiteral$label$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$label$lambda$lambda_0($receiver) {
    return $receiver.block;
  }
  function DefaultTheme$radio$ObjectLiteral$label$lambda($receiver) {
    $receiver.margins_ptb4s1$(DefaultTheme$radio$ObjectLiteral$label$lambda$lambda);
    $receiver.display_1gh9wc$(DefaultTheme$radio$ObjectLiteral$label$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda() {
    return '0';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_0($receiver) {
    $receiver.shrink_h4ejuu$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_1($receiver) {
    return 'var(--rb-size)';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_2($receiver) {
    return 'var(--rb-size)';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_0($receiver) {
    return 'white';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_3($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_1($receiver) {
    return '2px';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_2($receiver) {
    return $receiver.solid;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_3($receiver) {
    return BackgroundAttachments_getInstance().inherit;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_4($receiver) {
    $receiver.width_qwzhsr$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_1);
    $receiver.style_hw5xj$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_2);
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda$lambda_3);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_5($receiver) {
    return '9999px';
  }
  function DefaultTheme$radio$ObjectLiteral$default$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda);
    $receiver.flex_e69mls$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_0);
    $receiver.css_61zpoe$('align-items:center;');
    $receiver.css_61zpoe$('justify-content:center;');
    $receiver.width_wpghq5$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_1);
    $receiver.height_wpghq5$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_2);
    $receiver.background_f5fcq6$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_3);
    $receiver.border_4a22k0$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_4);
    $receiver.radius_bcpvvc$(DefaultTheme$radio$ObjectLiteral$default$lambda$lambda_5);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda($receiver) {
    return $receiver.info;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda_0($receiver) {
    return $receiver.light;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_0($receiver) {
    return $receiver.inlineBlock;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_1($receiver) {
    $receiver.relative_dkjn9d$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_2($receiver) {
    return '50%';
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_3($receiver) {
    return '50%';
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_4($receiver) {
    return '50%';
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda$lambda_0($receiver) {
    return 'currentColor';
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_5($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('content:"";');
    $receiver.display_1gh9wc$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_0);
    $receiver.position_wp9r2r$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_1);
    $receiver.width_wpghq5$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_2);
    $receiver.height_wpghq5$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_3);
    $receiver.radius_bcpvvc$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_4);
    $receiver.background_f5fcq6$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda$lambda_5);
    return Unit;
  }
  function DefaultTheme$radio$ObjectLiteral$selected$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda);
    $receiver.color_jl9ed9$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda_0);
    $receiver.before_xighi7$(DefaultTheme$radio$ObjectLiteral$selected$lambda$lambda_1);
    return Unit;
  }
  DefaultTheme$radio$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [RadioStyles]};
  function DefaultTheme$switch$ObjectLiteral() {
    this.sizes_y2d9im$_0 = new DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral();
    this.input_tehyk6$_0 = DefaultTheme$switch$ObjectLiteral$input$lambda;
    this.dot_3y1gd3$_0 = DefaultTheme$switch$ObjectLiteral$dot$lambda;
    this.label_um885o$_0 = DefaultTheme$switch$ObjectLiteral$label$lambda;
    this.default_be1c69$_0 = DefaultTheme$switch$ObjectLiteral$default$lambda;
    this.checked_3degs9$_0 = DefaultTheme$switch$ObjectLiteral$checked$lambda;
  }
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_y2d9im$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'input', {configurable: true, get: function () {
    return this.input_tehyk6$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'dot', {configurable: true, get: function () {
    return this.dot_3y1gd3$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'label', {configurable: true, get: function () {
    return this.label_um885o$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'default', {configurable: true, get: function () {
    return this.default_be1c69$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral.prototype, 'checked', {configurable: true, get: function () {
    return this.checked_3degs9$_0;
  }});
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral() {
    this.basic_0 = DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$basic$lambda;
    this.small_x0s8eu$_0 = DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this);
    this.normal_s3baxc$_0 = DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this);
    this.large_tj63fm$_0 = DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this);
  }
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_x0s8eu$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_s3baxc$_0;
  }});
  Object.defineProperty(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_tj63fm$_0;
  }});
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$basic$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda);
    $receiver.css_61zpoe$('align-items: center;');
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--sw-width: 1.35rem');
      $receiver.css_61zpoe$('--sw-height: .75rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--sw-width: 1.85rem');
      $receiver.css_61zpoe$('--sw-height: 1rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('--sw-width: 2.875rem');
      $receiver.css_61zpoe$('--sw-height: 1.5rem');
      $receiver.fontSize_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
      $receiver.margins_ptb4s1$(DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1);
      return Unit;
    };
  }
  DefaultTheme$switch$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SwitchSizes]};
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.focus;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_0($receiver) {
    return $receiver.outline;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda($receiver) {
    $receiver.border_4a22k0$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda);
    $receiver.boxShadow_ihm9h8$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('transform:translateX(calc(var(--sw-width) - var(--sw-height)));');
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.disabled;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_1($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_1($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_2($receiver) {
    return '.5';
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_2($receiver) {
    $receiver.opacity_y3j6id$(DefaultTheme$switch$ObjectLiteral$input$lambda$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$input$lambda($receiver) {
    $receiver.children_qlrppv$('&:focus + div', DefaultTheme$switch$ObjectLiteral$input$lambda$lambda);
    $receiver.children_qlrppv$('&[checked] + div div', DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_0);
    $receiver.children_qlrppv$('&[disabled] + div', DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_1);
    $receiver.children_qlrppv$('&[disabled] ~ div', DefaultTheme$switch$ObjectLiteral$input$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda($receiver) {
    return 'var(--sw-height)';
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_0($receiver) {
    return 'var(--sw-height)';
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_1($receiver) {
    return '9999px';
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda$lambda($receiver) {
    return 'white';
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_2($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$dot$lambda($receiver) {
    $receiver.width_wpghq5$(DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_0);
    $receiver.radius_bcpvvc$(DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_1);
    $receiver.background_f5fcq6$(DefaultTheme$switch$ObjectLiteral$dot$lambda$lambda_2);
    $receiver.css_61zpoe$('transition: transform 250ms ease 0s;');
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$label$lambda$lambda$lambda($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$switch$ObjectLiteral$label$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$switch$ObjectLiteral$label$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$label$lambda$lambda_0($receiver) {
    return $receiver.block;
  }
  function DefaultTheme$switch$ObjectLiteral$label$lambda($receiver) {
    $receiver.margins_ptb4s1$(DefaultTheme$switch$ObjectLiteral$label$lambda$lambda);
    $receiver.display_1gh9wc$(DefaultTheme$switch$ObjectLiteral$label$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda($receiver) {
    return $receiver.inlineFlex;
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda$lambda() {
    return '0';
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_0($receiver) {
    $receiver.shrink_h4ejuu$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_1($receiver) {
    return '2px';
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_2($receiver) {
    return 'var(--sw-width)';
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_3($receiver) {
    return 'var(--sw-height)';
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda$lambda_0($receiver) {
    return $receiver.light;
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_4($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_5($receiver) {
    return '9999px';
  }
  function DefaultTheme$switch$ObjectLiteral$default$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda);
    $receiver.flex_e69mls$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_0);
    $receiver.padding_bcpvvc$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_1);
    $receiver.width_wpghq5$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_2);
    $receiver.height_wpghq5$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_3);
    $receiver.background_f5fcq6$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_4);
    $receiver.radius_bcpvvc$(DefaultTheme$switch$ObjectLiteral$default$lambda$lambda_5);
    $receiver.css_61zpoe$('justify-content: flex-start;');
    $receiver.css_61zpoe$('box-sizing: content-box;');
    $receiver.css_61zpoe$('align-items: center;');
    $receiver.css_61zpoe$('transition: all 120ms ease 0s;');
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$checked$lambda$lambda$lambda($receiver) {
    return $receiver.success;
  }
  function DefaultTheme$switch$ObjectLiteral$checked$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$switch$ObjectLiteral$checked$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$switch$ObjectLiteral$checked$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$switch$ObjectLiteral$checked$lambda$lambda);
    return Unit;
  }
  DefaultTheme$switch$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SwitchStyles]};
  function DefaultTheme$button$ObjectLiteral() {
    this.variants_wdfyso$_0 = new DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral();
    this.sizes_4r3qxg$_0 = new DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral();
  }
  Object.defineProperty(DefaultTheme$button$ObjectLiteral.prototype, 'variants', {configurable: true, get: function () {
    return this.variants_wdfyso$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_4r3qxg$_0;
  }});
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral() {
    this.basic_0 = DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda;
    this.solid_u8u4eg$_0 = DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda(this);
    this.outline_xe3i9t$_0 = DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda(this);
    this.ghost_yzy1g4$_0 = DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$ghost$lambda(this);
    this.link_uveyg9$_0 = DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda(this);
  }
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral.prototype, 'solid', {configurable: true, get: function () {
    return this.solid_u8u4eg$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral.prototype, 'outline', {configurable: true, get: function () {
    return this.outline_xe3i9t$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral.prototype, 'ghost', {configurable: true, get: function () {
    return this.ghost_yzy1g4$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral.prototype, 'link', {configurable: true, get: function () {
    return this.link_uveyg9$_0;
  }});
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_1($receiver) {
    return $receiver.semiBold;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda$lambda($receiver) {
    return $receiver.outline;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_2($receiver) {
    $receiver.boxShadow_ihm9h8$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda($receiver) {
    $receiver.lineHeight_bcpvvc$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda);
    $receiver.radius_bcpvvc$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_0);
    $receiver.fontWeight_wyjwgc$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_1);
    $receiver.focus_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$basic$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda$lambda($receiver) {
    return 'var(--main-color)';
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_0($receiver) {
    return $receiver.base;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('filter: brightness(80%);');
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_2($receiver) {
    $receiver.css_61zpoe$('filter: brightness(80%);');
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.background_f5fcq6$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda);
      $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_0);
      $receiver.hover_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_1);
      $receiver.active_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$solid$lambda$lambda_2);
      return Unit;
    };
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda($receiver) {
    return 'var(--main-color)';
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda($receiver) {
    return $receiver.thin;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_1($receiver) {
    return 'var(--main-color)';
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda_0($receiver) {
    $receiver.width_qwzhsr$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda);
    $receiver.style_hw5xj$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.primary_hover;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_2($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('background-opacity: 0.2;');
    $receiver.background_f5fcq6$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda);
      $receiver.border_4a22k0$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda_0);
      $receiver.hover_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$outline$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$ghost$lambda$lambda($receiver) {
    return 'var(--main-color)';
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$ghost$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$ghost$lambda$lambda);
      return Unit;
    };
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda($receiver) {
    return $receiver.none;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda($receiver) {
    $receiver.all_bcpvvc$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_0($receiver) {
    return $receiver.auto;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_2($receiver) {
    return 'var(--main-color)';
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda_0($receiver) {
    return $receiver.underline;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_3($receiver) {
    $receiver.textDecoration_cogaie$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda_1($receiver) {
    return $receiver.secondary;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_4($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.paddings_ptb4s1$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda);
      $receiver.height_wpghq5$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_0);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_1);
      $receiver.color_jl9ed9$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_2);
      $receiver.hover_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_3);
      $receiver.active_xighi7$(DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral$link$lambda$lambda_4);
      return Unit;
    };
  }
  DefaultTheme$button$ObjectLiteral$variants$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PushButtonVariants]};
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral() {
    this.normal_nehe6m$_0 = DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda;
    this.small_ukume0$_0 = DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda;
    this.large_r38hes$_0 = DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda;
  }
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_nehe6m$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_ukume0$_0;
  }});
  Object.defineProperty(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_r38hes$_0;
  }});
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    return '2rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return '2rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    return '3rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return '3rem';
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1($receiver) {
    return $receiver.large;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return $receiver.larger;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_2($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda($receiver) {
    $receiver.height_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
    $receiver.minWidth_wpghq5$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
    $receiver.fontSize_bcpvvc$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_2);
    return Unit;
  }
  DefaultTheme$button$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PushButtonSizes]};
  DefaultTheme$button$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PushButtonStyles]};
  function DefaultTheme$modal$ObjectLiteral() {
    this.overlay_ns89il$_0 = DefaultTheme$modal$ObjectLiteral$overlay$lambda;
    this.sizes_4ka49d$_0 = new DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral();
    this.variants_fuxnx9$_0 = new DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral();
  }
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral.prototype, 'overlay', {configurable: true, get: function () {
    return this.overlay_ns89il$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral.prototype, 'sizes', {configurable: true, get: function () {
    return this.sizes_4ka49d$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral.prototype, 'variants', {configurable: true, get: function () {
    return this.variants_fuxnx9$_0;
  }});
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.none;
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.none;
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda($receiver) {
    $receiver.vertical_bcpvvc$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda$lambda);
    $receiver.horizontal_bcpvvc$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda_0($receiver) {
    return rgba(0, 0, 0, 0.4);
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda_0($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$overlay$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda);
    $receiver.background_f5fcq6$(DefaultTheme$modal$ObjectLiteral$overlay$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral() {
    this.basic_0 = DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda;
    this.full_8wjiob$_0 = DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda(this);
    this.large_5k9j6p$_0 = DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this);
    this.normal_5ljncj$_0 = DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this);
    this.small_22ne7h$_0 = DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this);
  }
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral.prototype, 'full', {configurable: true, get: function () {
    return this.full_8wjiob$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_5k9j6p$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_5ljncj$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_22ne7h$_0;
  }});
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda$lambda($receiver) {
    return 'white';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_0($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_1($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_2($receiver) {
    return $receiver.raisedFurther;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda);
    $receiver.padding_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_0);
    $receiver.radius_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_1);
    $receiver.boxShadow_ihm9h8$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$basic$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda($receiver) {
    return '100%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda_0($receiver) {
    return '100%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda$lambda($receiver) {
    return '0';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda$lambda_0($receiver) {
    return '0';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda($receiver) {
    $receiver.horizontal_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda$lambda);
    $receiver.vertical_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda_1($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.width_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda);
      $receiver.height_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda_0);
      $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$full$lambda$lambda_1);
      return Unit;
    };
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda($receiver) {
    return 'var(--main-level)';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda_0($receiver) {
    return 'var(--main-level)';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda_0);
    $receiver.right_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return $receiver.wide.smaller;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda);
      $receiver.minHeight_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$large$lambda$lambda_0);
      return Unit;
    };
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda$lambda($receiver) {
    return 'var(--main-level)';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda$lambda_0($receiver) {
    return '50%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda$lambda);
    $receiver.left_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return $receiver.wide.smaller;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    return '50%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda);
      $receiver.minHeight_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_0);
      $receiver.minWidth_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$normal$lambda$lambda_1);
      $receiver.css_61zpoe$('transform: translateX(-50%);');
      return Unit;
    };
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda($receiver) {
    return 'var(--main-level)';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda_0($receiver) {
    return '65%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda);
    $receiver.left_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda_0);
    $receiver.bottom_bcpvvc$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return $receiver.wide.smaller;
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1($receiver) {
    return '35%';
  }
  function DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda);
      $receiver.minHeight_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_0);
      $receiver.minWidth_wpghq5$(DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral$small$lambda$lambda_1);
      $receiver.css_61zpoe$('transform: translateX(-90%);');
      return Unit;
    };
  }
  DefaultTheme$modal$ObjectLiteral$sizes$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ModalSizes]};
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral() {
    this.auto_epekoz$_0 = DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda;
    this.verticalFilled_ud7n9w$_0 = DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda;
    this.centered_dc7x60$_0 = DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda;
  }
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral.prototype, 'auto', {configurable: true, get: function () {
    return this.auto_epekoz$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral.prototype, 'verticalFilled', {configurable: true, get: function () {
    return this.verticalFilled_ud7n9w$_0;
  }});
  Object.defineProperty(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral.prototype, 'centered', {configurable: true, get: function () {
    return this.centered_dc7x60$_0;
  }});
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.auto;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$auto$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$verticalFilled$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda($receiver) {
    $receiver.fixed_dkjn9d$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral$centered$lambda$lambda);
    $receiver.css_61zpoe$('transform: translatey(-50%);');
    return Unit;
  }
  DefaultTheme$modal$ObjectLiteral$variants$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ModalVariants]};
  DefaultTheme$modal$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ModalStyles]};
  function DefaultTheme$popover$ObjectLiteral() {
    this.size_e82ic8$_0 = new DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral();
    this.trigger_7m72sd$_0 = DefaultTheme$popover$ObjectLiteral$trigger$lambda;
    this.header_9tazrg$_0 = DefaultTheme$popover$ObjectLiteral$header$lambda;
    this.section_gsq06i$_0 = DefaultTheme$popover$ObjectLiteral$section$lambda;
    this.footer_el20n6$_0 = DefaultTheme$popover$ObjectLiteral$footer$lambda;
    this.placement_u30omi$_0 = new DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral();
    this.arrowPlacement_nk0efx$_0 = new DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral();
    this.closeButton_vimq8h$_0 = DefaultTheme$popover$ObjectLiteral$closeButton$lambda;
  }
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'size', {configurable: true, get: function () {
    return this.size_e82ic8$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'trigger', {configurable: true, get: function () {
    return this.trigger_7m72sd$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'header', {configurable: true, get: function () {
    return this.header_9tazrg$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'section', {configurable: true, get: function () {
    return this.section_gsq06i$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'footer', {configurable: true, get: function () {
    return this.footer_el20n6$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'placement', {configurable: true, get: function () {
    return this.placement_u30omi$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'arrowPlacement', {configurable: true, get: function () {
    return this.arrowPlacement_nk0efx$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral.prototype, 'closeButton', {configurable: true, get: function () {
    return this.closeButton_vimq8h$_0;
  }});
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral() {
    this.basic_0 = DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda;
    this.auto_7hvi42$_0 = DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$auto$lambda(this);
    this.normal_4w0rqy$_0 = DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$normal$lambda(this);
  }
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral.prototype, 'auto', {configurable: true, get: function () {
    return this.auto_7hvi42$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_4w0rqy$_0;
  }});
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda($receiver) {
    return 'white';
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_0($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_1($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_2($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_3($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_0($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_0);
    $receiver.bottom_bcpvvc$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_1);
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_2);
    $receiver.right_bcpvvc$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda$lambda_3);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_2($receiver) {
    return $receiver.flat;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_3($receiver) {
    return '20';
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda($receiver) {
    $receiver.background_f5fcq6$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda);
    $receiver.paddings_ptb4s1$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_0);
    $receiver.radius_bcpvvc$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_1);
    $receiver.boxShadow_ihm9h8$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_2);
    $receiver.zIndex_yiflju$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$basic$lambda$lambda_3);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$auto$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      return Unit;
    };
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda($receiver) {
    return '250px';
  }
  function DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$normal$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.width_wpghq5$(DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda);
      return Unit;
    };
  }
  DefaultTheme$popover$ObjectLiteral$size$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PopoverSizes]};
  function DefaultTheme$popover$ObjectLiteral$trigger$lambda$lambda($receiver) {
    return 'inline-block';
  }
  function DefaultTheme$popover$ObjectLiteral$trigger$lambda($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$popover$ObjectLiteral$trigger$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda($receiver) {
    return $receiver.semiBold;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.thin;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda_1($receiver) {
    return BackgroundAttachments_getInstance().inherit;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda($receiver) {
    $receiver.width_qwzhsr$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda);
    $receiver.style_hw5xj$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda$lambda_0($receiver) {
    $receiver.bottom_4a22k0$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$header$lambda($receiver) {
    $receiver.fontWeight_wyjwgc$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda);
    $receiver.borders_9iuei5$(DefaultTheme$popover$ObjectLiteral$header$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$section$lambda$lambda$lambda($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$popover$ObjectLiteral$section$lambda$lambda$lambda_0($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$popover$ObjectLiteral$section$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$section$lambda$lambda$lambda);
    $receiver.bottom_bcpvvc$(DefaultTheme$popover$ObjectLiteral$section$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$section$lambda($receiver) {
    $receiver.paddings_ptb4s1$(DefaultTheme$popover$ObjectLiteral$section$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.thin;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.solid;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda_1($receiver) {
    return BackgroundAttachments_getInstance().inherit;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda($receiver) {
    $receiver.width_qwzhsr$(DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda);
    $receiver.style_hw5xj$(DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda_0);
    $receiver.color_jl9ed9$(DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda($receiver) {
    $receiver.top_4a22k0$(DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$footer$lambda($receiver) {
    $receiver.borders_9iuei5$(DefaultTheme$popover$ObjectLiteral$footer$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral() {
    this.basic_0 = DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$basic$lambda;
    this.top_fjr21s$_0 = DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda(this);
    this.right_qt4wxz$_0 = DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda;
    this.bottom_2kqkac$_0 = DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda;
    this.left_f2wpp4$_0 = DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda;
  }
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral.prototype, 'top', {configurable: true, get: function () {
    return this.top_fjr21s$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral.prototype, 'right', {configurable: true, get: function () {
    return this.right_qt4wxz$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral.prototype, 'bottom', {configurable: true, get: function () {
    return this.bottom_2kqkac$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral.prototype, 'left', {configurable: true, get: function () {
    return this.left_f2wpp4$_0;
  }});
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$basic$lambda$lambda($receiver) {
    return '50';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$basic$lambda($receiver) {
    $receiver.css_61zpoe$('transition: transform .2s;');
    $receiver.zIndex_yiflju$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$basic$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda$lambda_0($receiver) {
    return '-1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda);
      $receiver.css_61zpoe$('transform: translate(-50%, -100%) scale(1);');
      return Unit;
    };
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda($receiver) {
    return 'calc(100% + 1rem)';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda_0($receiver) {
    return '50%';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_0($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_0($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda($receiver) {
    $receiver.margins_ptb4s1$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda);
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_0);
    $receiver.css_61zpoe$('transform: translate(0, -50%) scale(1);');
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda_0($receiver) {
    return 'calc(100% + 1rem)';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda);
    $receiver.css_61zpoe$('transform: translate(-50%, 0) scale(1);');
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda($receiver) {
    return '-1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda_0($receiver) {
    return '50%';
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_0($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_0($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda($receiver) {
    $receiver.margins_ptb4s1$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda);
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_0);
    $receiver.css_61zpoe$('transform: translate(-100%, -50%) scale(1);');
    return Unit;
  }
  DefaultTheme$popover$ObjectLiteral$placement$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PopoverPlacements]};
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral() {
    this.basic_0 = DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda;
    this.top_afo153$_0 = DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda(this);
    this.right_dx5gha$_0 = DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda(this);
    this.bottom_o2el6t$_0 = DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda(this);
    this.left_vjadwf$_0 = DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda(this);
  }
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral.prototype, 'top', {configurable: true, get: function () {
    return this.top_afo153$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral.prototype, 'right', {configurable: true, get: function () {
    return this.right_dx5gha$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral.prototype, 'bottom', {configurable: true, get: function () {
    return this.bottom_o2el6t$_0;
  }});
  Object.defineProperty(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral.prototype, 'left', {configurable: true, get: function () {
    return this.left_vjadwf$_0;
  }});
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_0($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_1($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_0($receiver) {
    return BackgroundAttachments_getInstance().inherit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_2($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_1($receiver) {
    return '-1';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_2($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_3($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_4($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_3($receiver) {
    $receiver.zIndex_yiflju$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_1);
    $receiver.css_61zpoe$('content:"";');
    $receiver.width_wpghq5$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_2);
    $receiver.height_wpghq5$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_3);
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda$lambda_4);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda($receiver) {
    $receiver.css_61zpoe$('transform: rotate(45deg);');
    $receiver.width_wpghq5$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_0);
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_1);
    $receiver.background_f5fcq6$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_2);
    $receiver.before_xighi7$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$basic$lambda$lambda_3);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda$lambda($receiver) {
    return '-0.5rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda($receiver) {
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda_0($receiver) {
    return 'rgba(0, 0, 0, 0.1) -1px -1px 1px 0px';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda_0($receiver) {
    $receiver.boxShadow_ihm9h8$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('left:calc(50% - 0.5rem);');
      $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda);
      $receiver.before_xighi7$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$top$lambda$lambda_0);
      return Unit;
    };
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda$lambda_0($receiver) {
    return 'rgba(0, 0, 0, 0.1) -1px 1px 1px 0px inset';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda_0($receiver) {
    $receiver.boxShadow_ihm9h8$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('top: calc(50% - 1.5rem);');
      $receiver.css_61zpoe$('right: calc(-0.5rem - 0.5px);');
      $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda);
      $receiver.before_xighi7$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$right$lambda$lambda_0);
      return Unit;
    };
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda($receiver) {
    return '-0.5rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda_0($receiver) {
    return 'rgba(0, 0, 0, 0.1) -1px -1px 1px 0px inset';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda_0($receiver) {
    $receiver.boxShadow_ihm9h8$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('left:calc(50% - 0.5rem);');
      $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda);
      $receiver.before_xighi7$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$bottom$lambda$lambda_0);
      return Unit;
    };
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda$lambda($receiver) {
    return '-0.5rem';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda_0($receiver) {
    return 'rgba(0, 0, 0, 0.1) -1px 1px 1px 0px';
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda_0($receiver) {
    $receiver.boxShadow_ihm9h8$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda(this$) {
    return function ($receiver) {
      $receiver.invoke_qkhqzy$(this$.basic_0);
      $receiver.css_61zpoe$('top:calc(50% - 1.5rem);');
      $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda);
      $receiver.before_xighi7$(DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral$left$lambda$lambda_0);
      return Unit;
    };
  }
  DefaultTheme$popover$ObjectLiteral$arrowPlacement$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PopoverArrowPlacements]};
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda$lambda($receiver) {
    return '0.5rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda$lambda_0($receiver) {
    return '0.5rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda($receiver) {
    $receiver.right_bcpvvc$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_0($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_1($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_2($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_3($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_4($receiver) {
    return $receiver.semiBold;
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_5($receiver) {
    return '1rem';
  }
  function DefaultTheme$popover$ObjectLiteral$closeButton$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda);
    $receiver.padding_bcpvvc$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_0);
    $receiver.width_wpghq5$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_1);
    $receiver.height_wpghq5$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_2);
    $receiver.minWidth_wpghq5$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_3);
    $receiver.fontWeight_wyjwgc$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_4);
    $receiver.lineHeight_bcpvvc$(DefaultTheme$popover$ObjectLiteral$closeButton$lambda$lambda_5);
    return Unit;
  }
  DefaultTheme$popover$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [PopoverStyles]};
  function DefaultTheme$tooltip$ObjectLiteral() {
    this.placement_hyz93g$_0 = new DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral();
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda($receiver) {
    return $receiver.top;
  }
  DefaultTheme$tooltip$ObjectLiteral.prototype.write_vqirvp$ = function (value) {
    return this.write_39nqze$(value.slice(), DefaultTheme$tooltip$ObjectLiteral$write$lambda);
  };
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda($receiver) {
    $receiver.relative_dkjn9d$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.dark;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_0($receiver) {
    $receiver.color_jl9ed9$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_1($receiver) {
    return $receiver.small;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_2($receiver) {
    return $receiver.light;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_3($receiver) {
    return $receiver.none;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_4($receiver) {
    return $receiver.hidden;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_5($receiver) {
    return '0';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_6($receiver) {
    return '20';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return '100%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.left_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda$lambda);
    $receiver.bottom_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_7($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_8($receiver) {
    return $receiver.tiny;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_9($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_10($receiver) {
    return $receiver.smaller;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_0(closure$value) {
    return function ($receiver) {
      $receiver.css_61zpoe$('content:' + '"' + joinToString(asList(closure$value), '\\A') + '"' + ';');
      $receiver.background_f5fcq6$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_0);
      $receiver.radius_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_1);
      $receiver.color_jl9ed9$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_2);
      $receiver.display_1gh9wc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_3);
      $receiver.overflow_c5t1z2$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_4);
      $receiver.opacity_y3j6id$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_5);
      $receiver.zIndex_yiflju$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_6);
      $receiver.position_wp9r2r$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_7);
      $receiver.padding_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_8);
      $receiver.fontSize_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_9);
      $receiver.lineHeight_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_10);
      $receiver.css_61zpoe$('text-overflow: ellipsis;');
      $receiver.css_61zpoe$('transition: opacity .2s, transform .2s;');
      $receiver.css_61zpoe$('white-space: pre;');
      return Unit;
    };
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_1($receiver) {
    return $receiver.block;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_2($receiver) {
    return '1';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_11($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_1);
    $receiver.opacity_y3j6id$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_1($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_11);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_3($receiver) {
    return $receiver.block;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_4($receiver) {
    return '1';
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_12($receiver) {
    $receiver.display_1gh9wc$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_3);
    $receiver.opacity_y3j6id$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_2($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda$lambda_12);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$write$lambda_0(closure$value, closure$tooltipPlacement, this$) {
    return function ($receiver) {
      $receiver.position_wp9r2r$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda);
      $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_0(closure$value));
      $receiver.focus_xighi7$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_1);
      $receiver.hover_xighi7$(DefaultTheme$tooltip$ObjectLiteral$write$lambda$lambda_2);
      $receiver.invoke_qkhqzy$(closure$tooltipPlacement(this$.placement));
      return Unit;
    };
  }
  DefaultTheme$tooltip$ObjectLiteral.prototype.write_39nqze$ = function (value, tooltipPlacement) {
    return DefaultTheme$tooltip$ObjectLiteral$write$lambda_0(value, tooltipPlacement, this);
  };
  Object.defineProperty(DefaultTheme$tooltip$ObjectLiteral.prototype, 'placement', {configurable: true, get: function () {
    return this.placement_hyz93g$_0;
  }});
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral() {
    this.top_mhgyf6$_0 = DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda;
    this.right_dxvg2j$_0 = DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda;
    this.bottom_cpz7u6$_0 = DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda;
    this.left_de3tai$_0 = DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda;
  }
  Object.defineProperty(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral.prototype, 'top', {configurable: true, get: function () {
    return this.top_mhgyf6$_0;
  }});
  Object.defineProperty(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral.prototype, 'right', {configurable: true, get: function () {
    return this.right_dxvg2j$_0;
  }});
  Object.defineProperty(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral.prototype, 'bottom', {configurable: true, get: function () {
    return this.bottom_cpz7u6$_0;
  }});
  Object.defineProperty(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral.prototype, 'left', {configurable: true, get: function () {
    return this.left_de3tai$_0;
  }});
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda($receiver) {
    $receiver.css_61zpoe$('transform: translate(-50%, 0.5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda($receiver) {
    $receiver.css_61zpoe$('transform: translate(-50%, -.5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda_0($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('transform: translate(-50%, -.5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda_1($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda);
    $receiver.focus_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda_0);
    $receiver.hover_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$top$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return '100%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda$lambda);
    $receiver.left_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda);
    $receiver.css_61zpoe$('transform: translate(-0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('transform: translate(0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_0($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('transform: translate(0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_1($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda);
    $receiver.focus_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_0);
    $receiver.hover_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$right$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda$lambda($receiver) {
    return $receiver.auto;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return '100%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda$lambda);
    $receiver.top_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda);
    $receiver.css_61zpoe$('transform: translate(-50%, -.5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('transform: translate(-50%, .5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda_0($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('transform: translate(-50%, .5rem);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda_1($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda);
    $receiver.focus_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda_0);
    $receiver.hover_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$bottom$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda($receiver) {
    return '50%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return $receiver.auto;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return '100%';
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda($receiver) {
    $receiver.bottom_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda);
    $receiver.left_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.right_bcpvvc$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda($receiver) {
    $receiver.absolute_dkjn9d$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda($receiver) {
    $receiver.position_wp9r2r$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda);
    $receiver.css_61zpoe$('transform: translate(0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_0($receiver) {
    $receiver.css_61zpoe$('transform: translate(-0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_0($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_1($receiver) {
    $receiver.css_61zpoe$('transform: translate(-0.5rem, 50%);');
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_1($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda$lambda_1);
    return Unit;
  }
  function DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda($receiver) {
    $receiver.after_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda);
    $receiver.focus_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_0);
    $receiver.hover_xighi7$(DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral$left$lambda$lambda_1);
    return Unit;
  }
  DefaultTheme$tooltip$ObjectLiteral$placement$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TooltipPlacements]};
  DefaultTheme$tooltip$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Tooltip]};
  function DefaultTheme$reset$lambda(this$DefaultTheme) {
    return function () {
      return '\n            *,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,system-ui,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}\n        ' + trimIndent('     ' + '\n' + '                               ' + '\n' + '            html {' + '\n' + '                line-height: 1.5;' + '\n' + '                text-size-adjust: 100%;' + '\n' + '                font-family: system-ui, sans-serif;' + '\n' + '                font-family: ' + this$DefaultTheme.fonts.body + ';' + '\n' + '                -webkit-font-smoothing: antialiased;' + '\n' + '                text-rendering: optimizelegibility;' + '\n' + '                color: ' + this$DefaultTheme.colors.dark + ';' + '\n' + '            }' + '\n' + '            body {' + '\n' + '              margin: 0;' + '\n' + '              line-height: ' + this$DefaultTheme.lineHeights.large + ';' + '\n' + '//              ' + '\n' + '              font-feature-settings: ' + '"' + 'kern' + '"' + ';' + '\n' + '              background-color: rgb(255, 255, 255);' + '\n' + '            }' + '\n' + '            textarea {' + '\n' + '              line-height: ' + this$DefaultTheme.lineHeights.tiny + '; /* 1 */' + '\n' + '            }' + '\n' + '            a {' + '\n' + '              font-weight: 600;' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.small + '\n' + '            }' + '\n' + '            p {' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.normal + ';' + '\n' + '              line-height: ' + this$DefaultTheme.lineHeights.larger + ';' + '\n' + '            }' + '\n' + '            *::after {' + '\n' + '              border-sizing: border-box;' + '\n' + '              overflow-wrap: break-word;' + '\n' + '            }' + '\n' + '            h1 {' + '\n' + '              line-height: ' + this$DefaultTheme.lineHeights.tiny + ';' + '\n' + '              font-weight: 700;' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.huge + ';' + '\n' + '              letter-spacing: ' + this$DefaultTheme.letterSpacings.small + ';' + '\n' + '              outline: 0;' + '\n' + '            }' + '\n' + '            h2 {' + '\n' + '              line-height: ' + this$DefaultTheme.lineHeights.small + ';' + '\n' + '              font-weight: 600;' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.larger + ';' + '\n' + '              letter-spacing: ' + this$DefaultTheme.letterSpacings.small + ';' + '\n' + '            }' + '\n' + '            h3 {' + '\n' + '              line-height: smaller;' + '\n' + '              font-weight: 600;' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.large + ';' + '\n' + '              letter-spacing: ' + this$DefaultTheme.letterSpacings.small + ';' + '\n' + '            }' + '\n' + '            h4 {' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.normal + ';' + '\n' + '              font-weight: bold;' + '\n' + '            }' + '\n' + '            h5 {' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.small + ';' + '\n' + '              font-weight: bold;' + '\n' + '            }' + '\n' + '            h6 {' + '\n' + '              font-size: ' + this$DefaultTheme.fontSizes.smaller + ';' + '\n' + '              font-weight: bold;' + '\n' + '            }' + '\n' + '            li {' + '\n' + '                display: list-item;' + '\n' + '                text-align: -webkit-match-parent;' + '\n' + '            }' + '\n' + '            ul {' + '\n' + '                display: block;' + '\n' + '                list-style-type: disc;' + '\n' + '                margin-block-start: 1em;' + '\n' + '                margin-block-end: 1em;' + '\n' + '                margin-inline-start: 0px;' + '\n' + '                margin-inline-end: 0px;' + '\n' + '                padding-inline-start: 1.5em;            ' + '\n' + '            }' + '\n' + '        ');
    };
  }
  function DefaultTheme$textarea$ObjectLiteral() {
    this.resize_97lsqu$_0 = new DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral();
    this.size_872u7n$_0 = new DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral();
  }
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral.prototype, 'resize', {configurable: true, get: function () {
    return this.resize_97lsqu$_0;
  }});
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral.prototype, 'size', {configurable: true, get: function () {
    return this.size_872u7n$_0;
  }});
  function DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral() {
    this.none_2fummt$_0 = DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$none$lambda;
    this.vertical_y85moj$_0 = DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$vertical$lambda;
    this.horizontal_xd63lr$_0 = DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$horizontal$lambda;
  }
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral.prototype, 'none', {configurable: true, get: function () {
    return this.none_2fummt$_0;
  }});
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral.prototype, 'vertical', {configurable: true, get: function () {
    return this.vertical_y85moj$_0;
  }});
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral.prototype, 'horizontal', {configurable: true, get: function () {
    return this.horizontal_xd63lr$_0;
  }});
  function DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$none$lambda($receiver) {
    $receiver.css_61zpoe$('resize:none');
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$vertical$lambda($receiver) {
    $receiver.css_61zpoe$('resize:vertical');
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral$horizontal$lambda($receiver) {
    $receiver.css_61zpoe$('resize:horizontal');
    return Unit;
  }
  DefaultTheme$textarea$ObjectLiteral$resize$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TextAreaResize]};
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral() {
    this.small_dkohg7$_0 = DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda;
    this.normal_6j0h3l$_0 = DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda;
    this.large_a32cgz$_0 = DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda;
  }
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral.prototype, 'small', {configurable: true, get: function () {
    return this.small_dkohg7$_0;
  }});
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral.prototype, 'normal', {configurable: true, get: function () {
    return this.normal_6j0h3l$_0;
  }});
  Object.defineProperty(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral.prototype, 'large', {configurable: true, get: function () {
    return this.large_a32cgz$_0;
  }});
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_0($receiver) {
    return '1rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_1($receiver) {
    return '25%';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda$lambda($receiver) {
    return '4px';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda$lambda_0($receiver) {
    return '0.5rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_2($receiver) {
    $receiver.vertical_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda$lambda);
    $receiver.horizontal_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda($receiver) {
    $receiver.lineHeight_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_0);
    $receiver.width_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$small$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_0($receiver) {
    return '2rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_1($receiver) {
    return '50%';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda$lambda($receiver) {
    return '8px';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda$lambda_0($receiver) {
    return '0.75rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_2($receiver) {
    $receiver.vertical_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda$lambda);
    $receiver.horizontal_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda($receiver) {
    $receiver.lineHeight_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_0);
    $receiver.width_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$normal$lambda$lambda_2);
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda($receiver) {
    return $receiver.normal;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_0($receiver) {
    return '2.5rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_1($receiver) {
    return '100%';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda$lambda($receiver) {
    return '8px';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda$lambda_0($receiver) {
    return '0.75rem';
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_2($receiver) {
    $receiver.vertical_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda$lambda);
    $receiver.horizontal_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda$lambda_0);
    return Unit;
  }
  function DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda($receiver) {
    $receiver.lineHeight_bcpvvc$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda);
    $receiver.height_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_0);
    $receiver.width_wpghq5$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_1);
    $receiver.paddings_ptb4s1$(DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral$large$lambda$lambda_2);
    return Unit;
  }
  DefaultTheme$textarea$ObjectLiteral$size$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TextAreaSize]};
  DefaultTheme$textarea$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TextAreaStyles]};
  DefaultTheme.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultTheme', interfaces: [Theme]};
  function ResponsiveValue(sm, md, lg, xl) {
    if (md === void 0)
      md = sm;
    if (lg === void 0)
      lg = md;
    if (xl === void 0)
      xl = lg;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
  }
  ResponsiveValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'ResponsiveValue', interfaces: []};
  function ScaledValue(normal, small, smaller, tiny, large, larger, huge, giant, none, full) {
    if (small === void 0)
      small = normal;
    if (smaller === void 0)
      smaller = small;
    if (tiny === void 0)
      tiny = smaller;
    if (large === void 0)
      large = normal;
    if (larger === void 0)
      larger = large;
    if (huge === void 0)
      huge = larger;
    if (giant === void 0)
      giant = huge;
    if (none === void 0)
      none = tiny;
    if (full === void 0)
      full = giant;
    this.normal = normal;
    this.small = small;
    this.smaller = smaller;
    this.tiny = tiny;
    this.large = large;
    this.larger = larger;
    this.huge = huge;
    this.giant = giant;
    this.none_d4shz4$_0 = none;
    this.full = full;
    this.initial = 'initial';
    this.inherit = 'inherit';
    this.auto = 'auto';
  }
  Object.defineProperty(ScaledValue.prototype, 'none', {get: function () {
    return this.none_d4shz4$_0;
  }});
  ScaledValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'ScaledValue', interfaces: []};
  function WeightedValue(normal, light, lighter, strong, stronger, none, full) {
    if (light === void 0)
      light = normal;
    if (lighter === void 0)
      lighter = light;
    if (strong === void 0)
      strong = normal;
    if (stronger === void 0)
      stronger = strong;
    if (none === void 0)
      none = lighter;
    if (full === void 0)
      full = strong;
    this.normal = normal;
    this.light = light;
    this.lighter = lighter;
    this.strong = strong;
    this.stronger = stronger;
    this.none = none;
    this.full = full;
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  WeightedValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'WeightedValue', interfaces: []};
  function Thickness(none, normal, thin, fat, hair) {
    if (thin === void 0)
      thin = normal;
    if (fat === void 0)
      fat = normal;
    if (hair === void 0)
      hair = thin;
    this.none = none;
    this.normal = normal;
    this.thin = thin;
    this.fat = fat;
    this.hair = hair;
    this.initial = 'initial';
    this.inherit = 'inherit';
  }
  Thickness.$metadata$ = {kind: Kind_CLASS, simpleName: 'Thickness', interfaces: []};
  function Sizes(normal, small, smaller, tiny, large, larger, huge, giant, full, wide) {
    if (small === void 0)
      small = normal;
    if (smaller === void 0)
      smaller = small;
    if (tiny === void 0)
      tiny = smaller;
    if (large === void 0)
      large = normal;
    if (larger === void 0)
      larger = large;
    if (huge === void 0)
      huge = larger;
    if (giant === void 0)
      giant = huge;
    if (full === void 0)
      full = giant;
    ScaledValue.call(this, normal, small, smaller, tiny, large, larger, huge, giant, void 0, full);
    this.wide = wide;
    this.borderBox = 'border-box';
    this.contentBox = 'content-box';
    this.maxContent = 'max-content';
    this.minContent = 'min-content';
    this.available = 'available';
    this.unset = 'unset';
  }
  Sizes.prototype.fitContent_61zpoe$ = function (value) {
    return 'fit-content(' + value + ')';
  };
  Sizes.$metadata$ = {kind: Kind_CLASS, simpleName: 'Sizes', interfaces: [ScaledValue]};
  function ZIndices(baseValue, layer, layerStep, overlayValue, toast, toastStep, modal, modalStep) {
    ZIndices$Companion_getInstance();
    this.baseValue_0 = baseValue;
    this.layer_0 = layer;
    this.layerStep_0 = layerStep;
    this.overlayValue_0 = overlayValue;
    this.toast_0 = toast;
    this.toastStep_0 = toastStep;
    this.modal_0 = modal;
    this.modalStep_0 = modalStep;
    this.base = this.baseValue_0.toString();
    this.overlay = this.overlayValue_0.toString();
  }
  function ZIndices$Companion() {
    ZIndices$Companion_instance = this;
    this.key = 'z-index: ';
  }
  ZIndices$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ZIndices$Companion_instance = null;
  function ZIndices$Companion_getInstance() {
    if (ZIndices$Companion_instance === null) {
      new ZIndices$Companion();
    }return ZIndices$Companion_instance;
  }
  ZIndices.prototype.layer_za3lpa$ = function (value) {
    return this.zIndexFrom_0(this.layer_0, this.layerStep_0, value, 0);
  };
  ZIndices.prototype.toast_za3lpa$ = function (value) {
    return this.zIndexFrom_0(this.toast_0, this.toastStep_0, value, 0);
  };
  ZIndices.prototype.modal_za3lpa$ = function (value) {
    return this.zIndexFrom_0(this.modal_0, this.modalStep_0, value, 0);
  };
  ZIndices.prototype.modal_vux9f0$ = function (value, offset) {
    return this.zIndexFrom_0(this.modal_0, this.modalStep_0, value, offset);
  };
  ZIndices.prototype.zIndexFrom_0 = function (level, step, value, offset) {
    return (level + Kotlin.imul(step, value - 1 | 0) + offset | 0).toString();
  };
  ZIndices.$metadata$ = {kind: Kind_CLASS, simpleName: 'ZIndices', interfaces: []};
  function Fonts() {
  }
  Fonts.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Fonts', interfaces: []};
  function Colors() {
  }
  Colors.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Colors', interfaces: []};
  function Shadows(flat, raised, raisedFurther, top, lowered, bottom, outline, glowing, danger, none) {
    if (raisedFurther === void 0)
      raisedFurther = raised;
    if (top === void 0)
      top = raisedFurther;
    if (bottom === void 0)
      bottom = lowered;
    if (glowing === void 0)
      glowing = outline;
    if (none === void 0)
      none = 'none';
    this.flat = flat;
    this.raised = raised;
    this.raisedFurther = raisedFurther;
    this.top = top;
    this.lowered = lowered;
    this.bottom = bottom;
    this.outline = outline;
    this.glowing = glowing;
    this.danger = danger;
    this.none = none;
  }
  Shadows.$metadata$ = {kind: Kind_CLASS, simpleName: 'Shadows', interfaces: []};
  function IconDefinition(displayName, viewBox, svg) {
    if (viewBox === void 0)
      viewBox = '0 0 24 24';
    this.displayName = displayName;
    this.viewBox = viewBox;
    this.svg = svg;
  }
  IconDefinition.$metadata$ = {kind: Kind_CLASS, simpleName: 'IconDefinition', interfaces: []};
  function Icons() {
  }
  Icons.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Icons', interfaces: []};
  function CheckboxStyles() {
  }
  CheckboxStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CheckboxStyles', interfaces: []};
  function CheckboxSizes() {
  }
  CheckboxSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CheckboxSizes', interfaces: []};
  function RadioStyles() {
  }
  RadioStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RadioStyles', interfaces: []};
  function RadioSizes() {
  }
  RadioSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RadioSizes', interfaces: []};
  function SwitchStyles() {
  }
  SwitchStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SwitchStyles', interfaces: []};
  function SwitchSizes() {
  }
  SwitchSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SwitchSizes', interfaces: []};
  function InputFieldStyles() {
  }
  InputFieldStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'InputFieldStyles', interfaces: []};
  function InputFieldSizes() {
  }
  InputFieldSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'InputFieldSizes', interfaces: []};
  function InputFieldVariants() {
  }
  InputFieldVariants.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'InputFieldVariants', interfaces: []};
  function PushButtonStyles() {
  }
  PushButtonStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PushButtonStyles', interfaces: []};
  function PushButtonVariants() {
  }
  PushButtonVariants.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PushButtonVariants', interfaces: []};
  function PushButtonSizes() {
  }
  PushButtonSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PushButtonSizes', interfaces: []};
  function ModalStyles() {
  }
  ModalStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ModalStyles', interfaces: []};
  function ModalVariants() {
  }
  ModalVariants.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ModalVariants', interfaces: []};
  function ModalSizes() {
  }
  ModalSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ModalSizes', interfaces: []};
  function PopoverStyles() {
  }
  PopoverStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PopoverStyles', interfaces: []};
  function PopoverPlacements() {
  }
  PopoverPlacements.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PopoverPlacements', interfaces: []};
  function PopoverArrowPlacements() {
  }
  PopoverArrowPlacements.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PopoverArrowPlacements', interfaces: []};
  function PopoverSizes() {
  }
  PopoverSizes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PopoverSizes', interfaces: []};
  function Tooltip() {
  }
  Tooltip.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Tooltip', interfaces: []};
  function TooltipPlacements() {
  }
  TooltipPlacements.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TooltipPlacements', interfaces: []};
  function TextAreaStyles() {
  }
  TextAreaStyles.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TextAreaStyles', interfaces: []};
  function TextAreaResize() {
  }
  TextAreaResize.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TextAreaResize', interfaces: []};
  function TextAreaSize() {
  }
  TextAreaSize.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TextAreaSize', interfaces: []};
  function Theme() {
    Theme$Companion_getInstance();
  }
  function Theme$Companion() {
    Theme$Companion_instance = this;
    this.currentTheme_0 = MutableStateFlow(new DefaultTheme());
    this.data = this.currentTheme_0;
    resetCss(this.currentTheme_0.value.reset);
  }
  Theme$Companion.prototype.invoke = function () {
    return this.currentTheme_0.value;
  };
  Theme$Companion.prototype.use_j1w0ce$ = function (theme) {
    resetCss(theme.reset);
    this.currentTheme_0.value = theme;
  };
  Theme$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Theme$Companion_instance = null;
  function Theme$Companion_getInstance() {
    if (Theme$Companion_instance === null) {
      new Theme$Companion();
    }return Theme$Companion_instance;
  }
  Theme.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Theme', interfaces: []};
  var charsLength;
  function getAlphabeticChar(code) {
    return toChar(code + (code > 25 ? 39 : 97) | 0);
  }
  function generateAlphabeticName(code) {
    var name = StringBuilder_init();
    var x = code;
    while (x > 52) {
      x = x / 52 | 0;
      name.append_s8itvh$(getAlphabeticChar(x % 52));
    }
    return name.toString();
  }
  var package$dev = _.dev || (_.dev = {});
  var package$fritz2 = package$dev.fritz2 || (package$dev.fritz2 = {});
  var package$styling = package$fritz2.styling || (package$fritz2.styling = {});
  var package$params = package$styling.params || (package$styling.params = {});
  Object.defineProperty(package$params, 'JustifyContentValues', {get: JustifyContentValues_getInstance});
  Object.defineProperty(package$params, 'AlignItemsValues', {get: AlignItemsValues_getInstance});
  Object.defineProperty(package$params, 'AlignContentValues', {get: AlignContentValues_getInstance});
  package$params.Alignment = Alignment;
  Object.defineProperty(package$params, 'SelfAlignItemsValues', {get: SelfAlignItemsValues_getInstance});
  package$params.SelfAlignment = SelfAlignment;
  package$params.SelfAlignmentImpl = SelfAlignmentImpl;
  Object.defineProperty(package$params, 'BackgroundRepeats', {get: BackgroundRepeats_getInstance});
  Object.defineProperty(package$params, 'BackgroundBlendModes', {get: BackgroundBlendModes_getInstance});
  Object.defineProperty(package$params, 'BackgroundPositions', {get: BackgroundPositions_getInstance});
  package$params.BackgroundPositionContext = BackgroundPositionContext;
  Object.defineProperty(package$params, 'BackgroundSizes', {get: BackgroundSizes_getInstance});
  package$params.BackgroundSizeContext = BackgroundSizeContext;
  Object.defineProperty(package$params, 'BackgroundBoxValues', {get: BackgroundBoxValues_getInstance});
  Object.defineProperty(package$params, 'BackgroundAttachments', {get: BackgroundAttachments_getInstance});
  package$params.BackgroundContext = BackgroundContext;
  package$params.Background = Background;
  Object.defineProperty(package$params, 'BorderStyleValues', {get: BorderStyleValues_getInstance});
  package$params.BorderContext = BorderContext;
  package$params.BordersContext = BordersContext;
  package$params.RadiiContext = RadiiContext;
  package$params.Border = Border;
  package$params.rgba_gb4hak$ = rgba;
  package$params.Color = Color;
  Object.defineProperty(package$params, 'DirectionValues', {get: DirectionValues_getInstance});
  Object.defineProperty(package$params, 'WrapValues', {get: WrapValues_getInstance});
  package$params.Flexbox = Flexbox;
  Object.defineProperty(package$params, 'AutoFlowValues', {get: AutoFlowValues_getInstance});
  package$params.GridTemplateContext = GridTemplateContext;
  package$params.GridAreaContext = GridAreaContext;
  package$params.GridLayout = GridLayout;
  Object.defineProperty(package$params, 'DisplayValues', {get: DisplayValues_getInstance});
  package$params.OverflowBaseValues = OverflowBaseValues;
  Object.defineProperty(package$params, 'OverflowValues', {get: OverflowValues_getInstance});
  Object.defineProperty(package$params, 'OverflowXValues', {get: OverflowXValues_getInstance});
  Object.defineProperty(package$params, 'OverflowYValues', {get: OverflowYValues_getInstance});
  Object.defineProperty(package$params, 'VerticalAlignValues', {get: VerticalAlignValues_getInstance});
  package$params.GridContext = GridContext;
  package$params.GridRowColumnContext = GridRowColumnContext;
  Object.defineProperty(package$params, 'FlexBasisValues', {get: FlexBasisValues_getInstance});
  package$params.FlexItemContext = FlexItemContext;
  package$params.Layout = Layout;
  package$params.PropertyValues = PropertyValues;
  package$params.StyleParams = StyleParams;
  package$params.property_wifvz4$ = property;
  package$params.property_1vetoc$ = property_0;
  package$params.property_u1vbhk$ = property_2;
  package$params.property_s6cqp9$ = property_4;
  package$params.StyleParamsImpl = StyleParamsImpl;
  package$params.BasicParams = BasicParams;
  package$params.FlexParams = FlexParams;
  package$params.GridParams = GridParams;
  package$params.BoxParams = BoxParams;
  package$params.PositioningContext = PositioningContext;
  package$params.PositionContext = PositionContext;
  package$params.Position = Position;
  package$params.PseudoElements = PseudoElements;
  package$params.PseudoClasses = PseudoClasses;
  package$params.shadow_98yeay$ = shadow;
  package$params.and_rjktp$ = and;
  package$params.Shadow = Shadow;
  package$params.SpacesContext = SpacesContext;
  package$params.Space = Space;
  package$params.styled_eqce3n$ = styled;
  package$params.styled_xca2rv$ = styled_0;
  Object.defineProperty(package$params, 'TextTransforms', {get: TextTransforms_getInstance});
  Object.defineProperty(package$params, 'FontStyles', {get: FontStyles_getInstance});
  Object.defineProperty(package$params, 'TextAligns', {get: TextAligns_getInstance});
  Object.defineProperty(package$params, 'FontWeights', {get: FontWeights_getInstance});
  Object.defineProperty(package$params, 'TextDecorations', {get: TextDecorations_getInstance});
  package$params.Typo = Typo;
  Styling.prototype.Sheet = Styling$Sheet;
  Object.defineProperty(package$styling, 'Styling', {get: Styling_getInstance});
  package$styling.resetCss_61zpoe$ = resetCss;
  Object.defineProperty(StyleClass, 'Companion', {get: StyleClass$Companion_getInstance});
  package$styling.StyleClass = StyleClass;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$styling.staticStyle_puj7f4$ = staticStyle_0;
  package$styling.style_puj7f4$ = style;
  var package$theme = package$styling.theme || (package$styling.theme = {});
  package$theme.DefaultTheme = DefaultTheme;
  package$theme.ResponsiveValue = ResponsiveValue;
  package$theme.ScaledValue = ScaledValue;
  package$theme.WeightedValue = WeightedValue;
  package$theme.Thickness = Thickness;
  package$theme.Sizes = Sizes;
  Object.defineProperty(ZIndices, 'Companion', {get: ZIndices$Companion_getInstance});
  package$theme.ZIndices = ZIndices;
  package$theme.Fonts = Fonts;
  package$theme.Colors = Colors;
  package$theme.Shadows = Shadows;
  package$theme.IconDefinition = IconDefinition;
  package$theme.Icons = Icons;
  package$theme.CheckboxStyles = CheckboxStyles;
  package$theme.CheckboxSizes = CheckboxSizes;
  package$theme.RadioStyles = RadioStyles;
  package$theme.RadioSizes = RadioSizes;
  package$theme.SwitchStyles = SwitchStyles;
  package$theme.SwitchSizes = SwitchSizes;
  package$theme.InputFieldStyles = InputFieldStyles;
  package$theme.InputFieldSizes = InputFieldSizes;
  package$theme.InputFieldVariants = InputFieldVariants;
  package$theme.PushButtonStyles = PushButtonStyles;
  package$theme.PushButtonVariants = PushButtonVariants;
  package$theme.PushButtonSizes = PushButtonSizes;
  package$theme.ModalStyles = ModalStyles;
  package$theme.ModalVariants = ModalVariants;
  package$theme.ModalSizes = ModalSizes;
  package$theme.PopoverStyles = PopoverStyles;
  package$theme.PopoverPlacements = PopoverPlacements;
  package$theme.PopoverArrowPlacements = PopoverArrowPlacements;
  package$theme.PopoverSizes = PopoverSizes;
  package$theme.Tooltip = Tooltip;
  package$theme.TooltipPlacements = TooltipPlacements;
  package$theme.TextAreaStyles = TextAreaStyles;
  package$theme.TextAreaResize = TextAreaResize;
  package$theme.TextAreaSize = TextAreaSize;
  Object.defineProperty(Theme, 'Companion', {get: Theme$Companion_getInstance});
  package$theme.Theme = Theme;
  $$importsForInline$$['fritz2-core'] = $module$fritz2_core;
  package$styling.getAlphabeticChar_kcn2v3$ = getAlphabeticChar;
  package$styling.generateAlphabeticName_kcn2v3$ = generateAlphabeticName;
  Flexbox.prototype.justifyContent_vlnw1j$ = Alignment.prototype.justifyContent_vlnw1j$;
  Flexbox.prototype.justifyContent_azy89g$$default = Alignment.prototype.justifyContent_azy89g$$default;
  Flexbox.prototype.alignItems_tsd917$ = Alignment.prototype.alignItems_tsd917$;
  Flexbox.prototype.alignItems_sx4pdg$$default = Alignment.prototype.alignItems_sx4pdg$$default;
  Flexbox.prototype.alignContent_69dv8$ = Alignment.prototype.alignContent_69dv8$;
  Flexbox.prototype.alignContent_ihjoig$$default = Alignment.prototype.alignContent_ihjoig$$default;
  Flexbox.prototype.justifyContent_azy89g$ = Alignment.prototype.justifyContent_azy89g$;
  Flexbox.prototype.alignItems_sx4pdg$ = Alignment.prototype.alignItems_sx4pdg$;
  Flexbox.prototype.alignContent_ihjoig$ = Alignment.prototype.alignContent_ihjoig$;
  GridLayout.prototype.justifyContent_vlnw1j$ = Alignment.prototype.justifyContent_vlnw1j$;
  GridLayout.prototype.justifyContent_azy89g$$default = Alignment.prototype.justifyContent_azy89g$$default;
  GridLayout.prototype.alignItems_tsd917$ = Alignment.prototype.alignItems_tsd917$;
  GridLayout.prototype.alignItems_sx4pdg$$default = Alignment.prototype.alignItems_sx4pdg$$default;
  GridLayout.prototype.alignContent_69dv8$ = Alignment.prototype.alignContent_69dv8$;
  GridLayout.prototype.alignContent_ihjoig$$default = Alignment.prototype.alignContent_ihjoig$$default;
  GridLayout.prototype.justifyContent_azy89g$ = Alignment.prototype.justifyContent_azy89g$;
  GridLayout.prototype.alignItems_sx4pdg$ = Alignment.prototype.alignItems_sx4pdg$;
  GridLayout.prototype.alignContent_ihjoig$ = Alignment.prototype.alignContent_ihjoig$;
  BasicParams.prototype.margin_bcpvvc$ = Space.prototype.margin_bcpvvc$;
  BasicParams.prototype.margin_bhtwo8$$default = Space.prototype.margin_bhtwo8$$default;
  BasicParams.prototype.margins_ptb4s1$ = Space.prototype.margins_ptb4s1$;
  BasicParams.prototype.margins_k1pnzg$$default = Space.prototype.margins_k1pnzg$$default;
  BasicParams.prototype.padding_bcpvvc$ = Space.prototype.padding_bcpvvc$;
  BasicParams.prototype.padding_bhtwo8$$default = Space.prototype.padding_bhtwo8$$default;
  BasicParams.prototype.paddings_ptb4s1$ = Space.prototype.paddings_ptb4s1$;
  BasicParams.prototype.paddings_k1pnzg$$default = Space.prototype.paddings_k1pnzg$$default;
  BasicParams.prototype.color_jl9ed9$ = Color.prototype.color_jl9ed9$;
  BasicParams.prototype.color_isjh78$$default = Color.prototype.color_isjh78$$default;
  BasicParams.prototype.opacity_y3j6id$ = Color.prototype.opacity_y3j6id$;
  BasicParams.prototype.opacity_rh8n64$$default = Color.prototype.opacity_rh8n64$$default;
  BasicParams.prototype.border_4a22k0$ = Border.prototype.border_4a22k0$;
  BasicParams.prototype.border_sj06fo$$default = Border.prototype.border_sj06fo$$default;
  BasicParams.prototype.borders_9iuei5$ = Border.prototype.borders_9iuei5$;
  BasicParams.prototype.borders_1m9jjg$$default = Border.prototype.borders_1m9jjg$$default;
  BasicParams.prototype.radius_bcpvvc$ = Border.prototype.radius_bcpvvc$;
  BasicParams.prototype.radius_bhtwo8$$default = Border.prototype.radius_bhtwo8$$default;
  BasicParams.prototype.radii_2h0nmj$ = Border.prototype.radii_2h0nmj$;
  BasicParams.prototype.radii_a257h8$$default = Border.prototype.radii_a257h8$$default;
  BasicParams.prototype.fontFamily_emhhv9$ = Typo.prototype.fontFamily_emhhv9$;
  BasicParams.prototype.fontFamily_nw47z0$$default = Typo.prototype.fontFamily_nw47z0$$default;
  BasicParams.prototype.fontSize_bcpvvc$ = Typo.prototype.fontSize_bcpvvc$;
  BasicParams.prototype.fontSize_bhtwo8$$default = Typo.prototype.fontSize_bhtwo8$$default;
  BasicParams.prototype.fontWeight_wyjwgc$ = Typo.prototype.fontWeight_wyjwgc$;
  BasicParams.prototype.fontWeight_fwmnos$$default = Typo.prototype.fontWeight_fwmnos$$default;
  BasicParams.prototype.textDecoration_jcyvho$$default = Typo.prototype.textDecoration_jcyvho$$default;
  BasicParams.prototype.textDecoration_cogaie$ = Typo.prototype.textDecoration_cogaie$;
  BasicParams.prototype.lineHeight_bcpvvc$ = Typo.prototype.lineHeight_bcpvvc$;
  BasicParams.prototype.lineHeight_bhtwo8$$default = Typo.prototype.lineHeight_bhtwo8$$default;
  BasicParams.prototype.letterSpacing_bcpvvc$ = Typo.prototype.letterSpacing_bcpvvc$;
  BasicParams.prototype.letterSpacing_bhtwo8$$default = Typo.prototype.letterSpacing_bhtwo8$$default;
  BasicParams.prototype.textAlign_beucyh$ = Typo.prototype.textAlign_beucyh$;
  BasicParams.prototype.textAlign_xttfdg$$default = Typo.prototype.textAlign_xttfdg$$default;
  BasicParams.prototype.textTransform_4zs19q$ = Typo.prototype.textTransform_4zs19q$;
  BasicParams.prototype.textTransform_buri34$$default = Typo.prototype.textTransform_buri34$$default;
  BasicParams.prototype.fontStyle_d5s4tt$ = Typo.prototype.fontStyle_d5s4tt$;
  BasicParams.prototype.fontStyle_tz3ah0$$default = Typo.prototype.fontStyle_tz3ah0$$default;
  BasicParams.prototype.background_f5fcq6$ = Background.prototype.background_f5fcq6$;
  BasicParams.prototype.background_1bxu5o$$default = Background.prototype.background_1bxu5o$$default;
  BasicParams.prototype.zIndex_yiflju$ = Position.prototype.zIndex_yiflju$;
  BasicParams.prototype.zIndex_r75jho$$default = Position.prototype.zIndex_r75jho$$default;
  BasicParams.prototype.position_wp9r2r$ = Position.prototype.position_wp9r2r$;
  BasicParams.prototype.position_vgpajw$$default = Position.prototype.position_vgpajw$$default;
  BasicParams.prototype.textShadow_ihm9h8$ = Shadow.prototype.textShadow_ihm9h8$;
  BasicParams.prototype.textShadow_h2dnmw$$default = Shadow.prototype.textShadow_h2dnmw$$default;
  BasicParams.prototype.boxShadow_ihm9h8$ = Shadow.prototype.boxShadow_ihm9h8$;
  BasicParams.prototype.boxShadow_h2dnmw$$default = Shadow.prototype.boxShadow_h2dnmw$$default;
  BasicParams.prototype.css_61zpoe$ = Layout.prototype.css_61zpoe$;
  BasicParams.prototype.css_d8n4vg$$default = Layout.prototype.css_d8n4vg$$default;
  BasicParams.prototype.size_wpghq5$ = Layout.prototype.size_wpghq5$;
  BasicParams.prototype.size_5la74k$$default = Layout.prototype.size_5la74k$$default;
  BasicParams.prototype.width_wpghq5$ = Layout.prototype.width_wpghq5$;
  BasicParams.prototype.width_5la74k$$default = Layout.prototype.width_5la74k$$default;
  BasicParams.prototype.height_wpghq5$ = Layout.prototype.height_wpghq5$;
  BasicParams.prototype.height_5la74k$$default = Layout.prototype.height_5la74k$$default;
  BasicParams.prototype.minWidth_wpghq5$ = Layout.prototype.minWidth_wpghq5$;
  BasicParams.prototype.minWidth_5la74k$$default = Layout.prototype.minWidth_5la74k$$default;
  BasicParams.prototype.maxWidth_wpghq5$ = Layout.prototype.maxWidth_wpghq5$;
  BasicParams.prototype.maxWidth_5la74k$$default = Layout.prototype.maxWidth_5la74k$$default;
  BasicParams.prototype.minHeight_wpghq5$ = Layout.prototype.minHeight_wpghq5$;
  BasicParams.prototype.minHeight_5la74k$$default = Layout.prototype.minHeight_5la74k$$default;
  BasicParams.prototype.maxHeight_wpghq5$ = Layout.prototype.maxHeight_wpghq5$;
  BasicParams.prototype.maxHeight_5la74k$$default = Layout.prototype.maxHeight_5la74k$$default;
  BasicParams.prototype.display_1gh9wc$ = Layout.prototype.display_1gh9wc$;
  BasicParams.prototype.display_76osno$$default = Layout.prototype.display_76osno$$default;
  BasicParams.prototype.verticalAlign_qe4rxr$ = Layout.prototype.verticalAlign_qe4rxr$;
  BasicParams.prototype.verticalAlign_l3swd0$$default = Layout.prototype.verticalAlign_l3swd0$$default;
  BasicParams.prototype.overflow_c5t1z2$ = Layout.prototype.overflow_c5t1z2$;
  BasicParams.prototype.overflow_fdwaog$$default = Layout.prototype.overflow_fdwaog$$default;
  BasicParams.prototype.overflowX_1qx2a0$ = Layout.prototype.overflowX_1qx2a0$;
  BasicParams.prototype.overflowX_kajdkc$$default = Layout.prototype.overflowX_kajdkc$$default;
  BasicParams.prototype.overflowY_iu6k55$ = Layout.prototype.overflowY_iu6k55$;
  BasicParams.prototype.overflowY_9but3o$$default = Layout.prototype.overflowY_9but3o$$default;
  BasicParams.prototype.grid_5hf0eu$ = Layout.prototype.grid_5hf0eu$;
  BasicParams.prototype.grid_jhf0yc$$default = Layout.prototype.grid_jhf0yc$$default;
  BasicParams.prototype.flex_e69mls$ = Layout.prototype.flex_e69mls$;
  BasicParams.prototype.flex_6xqo6k$$default = Layout.prototype.flex_6xqo6k$$default;
  BasicParams.prototype.pseudoClass_dvv9uz$_0 = PseudoClasses.prototype.pseudoClass_dvv9uz$_0;
  BasicParams.prototype.pseudoClass_3667b1$_0 = PseudoClasses.prototype.pseudoClass_3667b1$_0;
  BasicParams.prototype.active_xighi7$ = PseudoClasses.prototype.active_xighi7$;
  BasicParams.prototype.anyLink_xighi7$ = PseudoClasses.prototype.anyLink_xighi7$;
  BasicParams.prototype.blank_xighi7$ = PseudoClasses.prototype.blank_xighi7$;
  BasicParams.prototype.checked_xighi7$ = PseudoClasses.prototype.checked_xighi7$;
  BasicParams.prototype.current_xighi7$ = PseudoClasses.prototype.current_xighi7$;
  BasicParams.prototype.default_xighi7$ = PseudoClasses.prototype.default_xighi7$;
  BasicParams.prototype.disabled_xighi7$ = PseudoClasses.prototype.disabled_xighi7$;
  BasicParams.prototype.empty_xighi7$ = PseudoClasses.prototype.empty_xighi7$;
  BasicParams.prototype.enabled_xighi7$ = PseudoClasses.prototype.enabled_xighi7$;
  BasicParams.prototype.first_xighi7$ = PseudoClasses.prototype.first_xighi7$;
  BasicParams.prototype.firstChild_xighi7$ = PseudoClasses.prototype.firstChild_xighi7$;
  BasicParams.prototype.firstOfType_xighi7$ = PseudoClasses.prototype.firstOfType_xighi7$;
  BasicParams.prototype.fullscreen_xighi7$ = PseudoClasses.prototype.fullscreen_xighi7$;
  BasicParams.prototype.focus_xighi7$ = PseudoClasses.prototype.focus_xighi7$;
  BasicParams.prototype.focusVisible_xighi7$ = PseudoClasses.prototype.focusVisible_xighi7$;
  BasicParams.prototype.focusWithin_xighi7$ = PseudoClasses.prototype.focusWithin_xighi7$;
  BasicParams.prototype.future_xighi7$ = PseudoClasses.prototype.future_xighi7$;
  BasicParams.prototype.hover_xighi7$ = PseudoClasses.prototype.hover_xighi7$;
  BasicParams.prototype.indeterminate_xighi7$ = PseudoClasses.prototype.indeterminate_xighi7$;
  BasicParams.prototype.inRange_xighi7$ = PseudoClasses.prototype.inRange_xighi7$;
  BasicParams.prototype.invalid_xighi7$ = PseudoClasses.prototype.invalid_xighi7$;
  BasicParams.prototype.lastChild_xighi7$ = PseudoClasses.prototype.lastChild_xighi7$;
  BasicParams.prototype.lastOfType_xighi7$ = PseudoClasses.prototype.lastOfType_xighi7$;
  BasicParams.prototype.left_xighi7$ = PseudoClasses.prototype.left_xighi7$;
  BasicParams.prototype.link_xighi7$ = PseudoClasses.prototype.link_xighi7$;
  BasicParams.prototype.localLink_xighi7$ = PseudoClasses.prototype.localLink_xighi7$;
  BasicParams.prototype.onlyChild_xighi7$ = PseudoClasses.prototype.onlyChild_xighi7$;
  BasicParams.prototype.onlyOfType_xighi7$ = PseudoClasses.prototype.onlyOfType_xighi7$;
  BasicParams.prototype.optional_xighi7$ = PseudoClasses.prototype.optional_xighi7$;
  BasicParams.prototype.outOfRange_xighi7$ = PseudoClasses.prototype.outOfRange_xighi7$;
  BasicParams.prototype.readOnly_xighi7$ = PseudoClasses.prototype.readOnly_xighi7$;
  BasicParams.prototype.readWrite_xighi7$ = PseudoClasses.prototype.readWrite_xighi7$;
  BasicParams.prototype.required_xighi7$ = PseudoClasses.prototype.required_xighi7$;
  BasicParams.prototype.right_xighi7$ = PseudoClasses.prototype.right_xighi7$;
  BasicParams.prototype.root_xighi7$ = PseudoClasses.prototype.root_xighi7$;
  BasicParams.prototype.scope_xighi7$ = PseudoClasses.prototype.scope_xighi7$;
  BasicParams.prototype.target_xighi7$ = PseudoClasses.prototype.target_xighi7$;
  BasicParams.prototype.valid_xighi7$ = PseudoClasses.prototype.valid_xighi7$;
  BasicParams.prototype.visited_xighi7$ = PseudoClasses.prototype.visited_xighi7$;
  BasicParams.prototype.dir_qlrppv$ = PseudoClasses.prototype.dir_qlrppv$;
  BasicParams.prototype.lang_qlrppv$ = PseudoClasses.prototype.lang_qlrppv$;
  BasicParams.prototype.not_qlrppv$ = PseudoClasses.prototype.not_qlrppv$;
  BasicParams.prototype.nthChild_qlrppv$ = PseudoClasses.prototype.nthChild_qlrppv$;
  BasicParams.prototype.nthLastChild_qlrppv$ = PseudoClasses.prototype.nthLastChild_qlrppv$;
  BasicParams.prototype.nthLastOfType_qlrppv$ = PseudoClasses.prototype.nthLastOfType_qlrppv$;
  BasicParams.prototype.nthOfType_qlrppv$ = PseudoClasses.prototype.nthOfType_qlrppv$;
  BasicParams.prototype.children_qlrppv$ = PseudoClasses.prototype.children_qlrppv$;
  BasicParams.prototype.pseudoElement_iaoh6o$_0 = PseudoElements.prototype.pseudoElement_iaoh6o$_0;
  BasicParams.prototype.pseudoElement_qsy49e$_0 = PseudoElements.prototype.pseudoElement_qsy49e$_0;
  BasicParams.prototype.after_xighi7$ = PseudoElements.prototype.after_xighi7$;
  BasicParams.prototype.before_xighi7$ = PseudoElements.prototype.before_xighi7$;
  BasicParams.prototype.firstLetter_xighi7$ = PseudoElements.prototype.firstLetter_xighi7$;
  BasicParams.prototype.firstLine_xighi7$ = PseudoElements.prototype.firstLine_xighi7$;
  BasicParams.prototype.grammarError_xighi7$ = PseudoElements.prototype.grammarError_xighi7$;
  BasicParams.prototype.marker_xighi7$ = PseudoElements.prototype.marker_xighi7$;
  BasicParams.prototype.selection_xighi7$ = PseudoElements.prototype.selection_xighi7$;
  BasicParams.prototype.spellingError_xighi7$ = PseudoElements.prototype.spellingError_xighi7$;
  BasicParams.prototype.margin_bhtwo8$ = Space.prototype.margin_bhtwo8$;
  BasicParams.prototype.margins_k1pnzg$ = Space.prototype.margins_k1pnzg$;
  BasicParams.prototype.padding_bhtwo8$ = Space.prototype.padding_bhtwo8$;
  BasicParams.prototype.paddings_k1pnzg$ = Space.prototype.paddings_k1pnzg$;
  BasicParams.prototype.color_isjh78$ = Color.prototype.color_isjh78$;
  BasicParams.prototype.opacity_rh8n64$ = Color.prototype.opacity_rh8n64$;
  BasicParams.prototype.border_sj06fo$ = Border.prototype.border_sj06fo$;
  BasicParams.prototype.borders_1m9jjg$ = Border.prototype.borders_1m9jjg$;
  BasicParams.prototype.radius_bhtwo8$ = Border.prototype.radius_bhtwo8$;
  BasicParams.prototype.radii_a257h8$ = Border.prototype.radii_a257h8$;
  BasicParams.prototype.fontFamily_nw47z0$ = Typo.prototype.fontFamily_nw47z0$;
  BasicParams.prototype.fontSize_bhtwo8$ = Typo.prototype.fontSize_bhtwo8$;
  BasicParams.prototype.fontWeight_fwmnos$ = Typo.prototype.fontWeight_fwmnos$;
  BasicParams.prototype.textDecoration_jcyvho$ = Typo.prototype.textDecoration_jcyvho$;
  BasicParams.prototype.lineHeight_bhtwo8$ = Typo.prototype.lineHeight_bhtwo8$;
  BasicParams.prototype.letterSpacing_bhtwo8$ = Typo.prototype.letterSpacing_bhtwo8$;
  BasicParams.prototype.textAlign_xttfdg$ = Typo.prototype.textAlign_xttfdg$;
  BasicParams.prototype.textTransform_buri34$ = Typo.prototype.textTransform_buri34$;
  BasicParams.prototype.fontStyle_tz3ah0$ = Typo.prototype.fontStyle_tz3ah0$;
  BasicParams.prototype.background_1bxu5o$ = Background.prototype.background_1bxu5o$;
  BasicParams.prototype.zIndex_r75jho$ = Position.prototype.zIndex_r75jho$;
  BasicParams.prototype.position_vgpajw$ = Position.prototype.position_vgpajw$;
  BasicParams.prototype.textShadow_h2dnmw$ = Shadow.prototype.textShadow_h2dnmw$;
  BasicParams.prototype.boxShadow_h2dnmw$ = Shadow.prototype.boxShadow_h2dnmw$;
  BasicParams.prototype.css_d8n4vg$ = Layout.prototype.css_d8n4vg$;
  BasicParams.prototype.size_5la74k$ = Layout.prototype.size_5la74k$;
  BasicParams.prototype.width_5la74k$ = Layout.prototype.width_5la74k$;
  BasicParams.prototype.height_5la74k$ = Layout.prototype.height_5la74k$;
  BasicParams.prototype.minWidth_5la74k$ = Layout.prototype.minWidth_5la74k$;
  BasicParams.prototype.maxWidth_5la74k$ = Layout.prototype.maxWidth_5la74k$;
  BasicParams.prototype.minHeight_5la74k$ = Layout.prototype.minHeight_5la74k$;
  BasicParams.prototype.maxHeight_5la74k$ = Layout.prototype.maxHeight_5la74k$;
  BasicParams.prototype.display_76osno$ = Layout.prototype.display_76osno$;
  BasicParams.prototype.verticalAlign_l3swd0$ = Layout.prototype.verticalAlign_l3swd0$;
  BasicParams.prototype.overflow_fdwaog$ = Layout.prototype.overflow_fdwaog$;
  BasicParams.prototype.overflowX_kajdkc$ = Layout.prototype.overflowX_kajdkc$;
  BasicParams.prototype.overflowY_9but3o$ = Layout.prototype.overflowY_9but3o$;
  BasicParams.prototype.grid_jhf0yc$ = Layout.prototype.grid_jhf0yc$;
  BasicParams.prototype.flex_6xqo6k$ = Layout.prototype.flex_6xqo6k$;
  BasicParams.prototype.pseudoClass_3667b1$_0 = PseudoClasses.prototype.pseudoClass_3667b1$_0;
  BasicParams.prototype.pseudoElement_qsy49e$_0 = PseudoElements.prototype.pseudoElement_qsy49e$_0;
  FlexParams.prototype.margin_bcpvvc$ = BasicParams.prototype.margin_bcpvvc$;
  FlexParams.prototype.margin_bhtwo8$$default = BasicParams.prototype.margin_bhtwo8$$default;
  FlexParams.prototype.margins_ptb4s1$ = BasicParams.prototype.margins_ptb4s1$;
  FlexParams.prototype.margins_k1pnzg$$default = BasicParams.prototype.margins_k1pnzg$$default;
  FlexParams.prototype.padding_bcpvvc$ = BasicParams.prototype.padding_bcpvvc$;
  FlexParams.prototype.padding_bhtwo8$$default = BasicParams.prototype.padding_bhtwo8$$default;
  FlexParams.prototype.paddings_ptb4s1$ = BasicParams.prototype.paddings_ptb4s1$;
  FlexParams.prototype.paddings_k1pnzg$$default = BasicParams.prototype.paddings_k1pnzg$$default;
  FlexParams.prototype.color_jl9ed9$ = BasicParams.prototype.color_jl9ed9$;
  FlexParams.prototype.color_isjh78$$default = BasicParams.prototype.color_isjh78$$default;
  FlexParams.prototype.opacity_y3j6id$ = BasicParams.prototype.opacity_y3j6id$;
  FlexParams.prototype.opacity_rh8n64$$default = BasicParams.prototype.opacity_rh8n64$$default;
  FlexParams.prototype.border_4a22k0$ = BasicParams.prototype.border_4a22k0$;
  FlexParams.prototype.border_sj06fo$$default = BasicParams.prototype.border_sj06fo$$default;
  FlexParams.prototype.borders_9iuei5$ = BasicParams.prototype.borders_9iuei5$;
  FlexParams.prototype.borders_1m9jjg$$default = BasicParams.prototype.borders_1m9jjg$$default;
  FlexParams.prototype.radius_bcpvvc$ = BasicParams.prototype.radius_bcpvvc$;
  FlexParams.prototype.radius_bhtwo8$$default = BasicParams.prototype.radius_bhtwo8$$default;
  FlexParams.prototype.radii_2h0nmj$ = BasicParams.prototype.radii_2h0nmj$;
  FlexParams.prototype.radii_a257h8$$default = BasicParams.prototype.radii_a257h8$$default;
  FlexParams.prototype.fontFamily_emhhv9$ = BasicParams.prototype.fontFamily_emhhv9$;
  FlexParams.prototype.fontFamily_nw47z0$$default = BasicParams.prototype.fontFamily_nw47z0$$default;
  FlexParams.prototype.fontSize_bcpvvc$ = BasicParams.prototype.fontSize_bcpvvc$;
  FlexParams.prototype.fontSize_bhtwo8$$default = BasicParams.prototype.fontSize_bhtwo8$$default;
  FlexParams.prototype.fontWeight_wyjwgc$ = BasicParams.prototype.fontWeight_wyjwgc$;
  FlexParams.prototype.fontWeight_fwmnos$$default = BasicParams.prototype.fontWeight_fwmnos$$default;
  FlexParams.prototype.textDecoration_jcyvho$$default = BasicParams.prototype.textDecoration_jcyvho$$default;
  FlexParams.prototype.textDecoration_cogaie$ = BasicParams.prototype.textDecoration_cogaie$;
  FlexParams.prototype.lineHeight_bcpvvc$ = BasicParams.prototype.lineHeight_bcpvvc$;
  FlexParams.prototype.lineHeight_bhtwo8$$default = BasicParams.prototype.lineHeight_bhtwo8$$default;
  FlexParams.prototype.letterSpacing_bcpvvc$ = BasicParams.prototype.letterSpacing_bcpvvc$;
  FlexParams.prototype.letterSpacing_bhtwo8$$default = BasicParams.prototype.letterSpacing_bhtwo8$$default;
  FlexParams.prototype.textAlign_beucyh$ = BasicParams.prototype.textAlign_beucyh$;
  FlexParams.prototype.textAlign_xttfdg$$default = BasicParams.prototype.textAlign_xttfdg$$default;
  FlexParams.prototype.textTransform_4zs19q$ = BasicParams.prototype.textTransform_4zs19q$;
  FlexParams.prototype.textTransform_buri34$$default = BasicParams.prototype.textTransform_buri34$$default;
  FlexParams.prototype.fontStyle_d5s4tt$ = BasicParams.prototype.fontStyle_d5s4tt$;
  FlexParams.prototype.fontStyle_tz3ah0$$default = BasicParams.prototype.fontStyle_tz3ah0$$default;
  FlexParams.prototype.background_f5fcq6$ = BasicParams.prototype.background_f5fcq6$;
  FlexParams.prototype.background_1bxu5o$$default = BasicParams.prototype.background_1bxu5o$$default;
  FlexParams.prototype.zIndex_yiflju$ = BasicParams.prototype.zIndex_yiflju$;
  FlexParams.prototype.zIndex_r75jho$$default = BasicParams.prototype.zIndex_r75jho$$default;
  FlexParams.prototype.position_wp9r2r$ = BasicParams.prototype.position_wp9r2r$;
  FlexParams.prototype.position_vgpajw$$default = BasicParams.prototype.position_vgpajw$$default;
  FlexParams.prototype.textShadow_ihm9h8$ = BasicParams.prototype.textShadow_ihm9h8$;
  FlexParams.prototype.textShadow_h2dnmw$$default = BasicParams.prototype.textShadow_h2dnmw$$default;
  FlexParams.prototype.boxShadow_ihm9h8$ = BasicParams.prototype.boxShadow_ihm9h8$;
  FlexParams.prototype.boxShadow_h2dnmw$$default = BasicParams.prototype.boxShadow_h2dnmw$$default;
  FlexParams.prototype.css_61zpoe$ = BasicParams.prototype.css_61zpoe$;
  FlexParams.prototype.css_d8n4vg$$default = BasicParams.prototype.css_d8n4vg$$default;
  FlexParams.prototype.size_wpghq5$ = BasicParams.prototype.size_wpghq5$;
  FlexParams.prototype.size_5la74k$$default = BasicParams.prototype.size_5la74k$$default;
  FlexParams.prototype.width_wpghq5$ = BasicParams.prototype.width_wpghq5$;
  FlexParams.prototype.width_5la74k$$default = BasicParams.prototype.width_5la74k$$default;
  FlexParams.prototype.height_wpghq5$ = BasicParams.prototype.height_wpghq5$;
  FlexParams.prototype.height_5la74k$$default = BasicParams.prototype.height_5la74k$$default;
  FlexParams.prototype.minWidth_wpghq5$ = BasicParams.prototype.minWidth_wpghq5$;
  FlexParams.prototype.minWidth_5la74k$$default = BasicParams.prototype.minWidth_5la74k$$default;
  FlexParams.prototype.maxWidth_wpghq5$ = BasicParams.prototype.maxWidth_wpghq5$;
  FlexParams.prototype.maxWidth_5la74k$$default = BasicParams.prototype.maxWidth_5la74k$$default;
  FlexParams.prototype.minHeight_wpghq5$ = BasicParams.prototype.minHeight_wpghq5$;
  FlexParams.prototype.minHeight_5la74k$$default = BasicParams.prototype.minHeight_5la74k$$default;
  FlexParams.prototype.maxHeight_wpghq5$ = BasicParams.prototype.maxHeight_wpghq5$;
  FlexParams.prototype.maxHeight_5la74k$$default = BasicParams.prototype.maxHeight_5la74k$$default;
  FlexParams.prototype.display_1gh9wc$ = BasicParams.prototype.display_1gh9wc$;
  FlexParams.prototype.display_76osno$$default = BasicParams.prototype.display_76osno$$default;
  FlexParams.prototype.verticalAlign_qe4rxr$ = BasicParams.prototype.verticalAlign_qe4rxr$;
  FlexParams.prototype.verticalAlign_l3swd0$$default = BasicParams.prototype.verticalAlign_l3swd0$$default;
  FlexParams.prototype.overflow_c5t1z2$ = BasicParams.prototype.overflow_c5t1z2$;
  FlexParams.prototype.overflow_fdwaog$$default = BasicParams.prototype.overflow_fdwaog$$default;
  FlexParams.prototype.overflowX_1qx2a0$ = BasicParams.prototype.overflowX_1qx2a0$;
  FlexParams.prototype.overflowX_kajdkc$$default = BasicParams.prototype.overflowX_kajdkc$$default;
  FlexParams.prototype.overflowY_iu6k55$ = BasicParams.prototype.overflowY_iu6k55$;
  FlexParams.prototype.overflowY_9but3o$$default = BasicParams.prototype.overflowY_9but3o$$default;
  FlexParams.prototype.grid_5hf0eu$ = BasicParams.prototype.grid_5hf0eu$;
  FlexParams.prototype.grid_jhf0yc$$default = BasicParams.prototype.grid_jhf0yc$$default;
  FlexParams.prototype.flex_e69mls$ = BasicParams.prototype.flex_e69mls$;
  FlexParams.prototype.flex_6xqo6k$$default = BasicParams.prototype.flex_6xqo6k$$default;
  FlexParams.prototype.pseudoClass_dvv9uz$_0 = PseudoClasses.prototype.pseudoClass_dvv9uz$_0;
  FlexParams.prototype.pseudoClass_3667b1$_0 = PseudoClasses.prototype.pseudoClass_3667b1$_0;
  FlexParams.prototype.active_xighi7$ = BasicParams.prototype.active_xighi7$;
  FlexParams.prototype.anyLink_xighi7$ = BasicParams.prototype.anyLink_xighi7$;
  FlexParams.prototype.blank_xighi7$ = BasicParams.prototype.blank_xighi7$;
  FlexParams.prototype.checked_xighi7$ = BasicParams.prototype.checked_xighi7$;
  FlexParams.prototype.current_xighi7$ = BasicParams.prototype.current_xighi7$;
  FlexParams.prototype.default_xighi7$ = BasicParams.prototype.default_xighi7$;
  FlexParams.prototype.disabled_xighi7$ = BasicParams.prototype.disabled_xighi7$;
  FlexParams.prototype.empty_xighi7$ = BasicParams.prototype.empty_xighi7$;
  FlexParams.prototype.enabled_xighi7$ = BasicParams.prototype.enabled_xighi7$;
  FlexParams.prototype.first_xighi7$ = BasicParams.prototype.first_xighi7$;
  FlexParams.prototype.firstChild_xighi7$ = BasicParams.prototype.firstChild_xighi7$;
  FlexParams.prototype.firstOfType_xighi7$ = BasicParams.prototype.firstOfType_xighi7$;
  FlexParams.prototype.fullscreen_xighi7$ = BasicParams.prototype.fullscreen_xighi7$;
  FlexParams.prototype.focus_xighi7$ = BasicParams.prototype.focus_xighi7$;
  FlexParams.prototype.focusVisible_xighi7$ = BasicParams.prototype.focusVisible_xighi7$;
  FlexParams.prototype.focusWithin_xighi7$ = BasicParams.prototype.focusWithin_xighi7$;
  FlexParams.prototype.future_xighi7$ = BasicParams.prototype.future_xighi7$;
  FlexParams.prototype.hover_xighi7$ = BasicParams.prototype.hover_xighi7$;
  FlexParams.prototype.indeterminate_xighi7$ = BasicParams.prototype.indeterminate_xighi7$;
  FlexParams.prototype.inRange_xighi7$ = BasicParams.prototype.inRange_xighi7$;
  FlexParams.prototype.invalid_xighi7$ = BasicParams.prototype.invalid_xighi7$;
  FlexParams.prototype.lastChild_xighi7$ = BasicParams.prototype.lastChild_xighi7$;
  FlexParams.prototype.lastOfType_xighi7$ = BasicParams.prototype.lastOfType_xighi7$;
  FlexParams.prototype.left_xighi7$ = BasicParams.prototype.left_xighi7$;
  FlexParams.prototype.link_xighi7$ = BasicParams.prototype.link_xighi7$;
  FlexParams.prototype.localLink_xighi7$ = BasicParams.prototype.localLink_xighi7$;
  FlexParams.prototype.onlyChild_xighi7$ = BasicParams.prototype.onlyChild_xighi7$;
  FlexParams.prototype.onlyOfType_xighi7$ = BasicParams.prototype.onlyOfType_xighi7$;
  FlexParams.prototype.optional_xighi7$ = BasicParams.prototype.optional_xighi7$;
  FlexParams.prototype.outOfRange_xighi7$ = BasicParams.prototype.outOfRange_xighi7$;
  FlexParams.prototype.readOnly_xighi7$ = BasicParams.prototype.readOnly_xighi7$;
  FlexParams.prototype.readWrite_xighi7$ = BasicParams.prototype.readWrite_xighi7$;
  FlexParams.prototype.required_xighi7$ = BasicParams.prototype.required_xighi7$;
  FlexParams.prototype.right_xighi7$ = BasicParams.prototype.right_xighi7$;
  FlexParams.prototype.root_xighi7$ = BasicParams.prototype.root_xighi7$;
  FlexParams.prototype.scope_xighi7$ = BasicParams.prototype.scope_xighi7$;
  FlexParams.prototype.target_xighi7$ = BasicParams.prototype.target_xighi7$;
  FlexParams.prototype.valid_xighi7$ = BasicParams.prototype.valid_xighi7$;
  FlexParams.prototype.visited_xighi7$ = BasicParams.prototype.visited_xighi7$;
  FlexParams.prototype.dir_qlrppv$ = BasicParams.prototype.dir_qlrppv$;
  FlexParams.prototype.lang_qlrppv$ = BasicParams.prototype.lang_qlrppv$;
  FlexParams.prototype.not_qlrppv$ = BasicParams.prototype.not_qlrppv$;
  FlexParams.prototype.nthChild_qlrppv$ = BasicParams.prototype.nthChild_qlrppv$;
  FlexParams.prototype.nthLastChild_qlrppv$ = BasicParams.prototype.nthLastChild_qlrppv$;
  FlexParams.prototype.nthLastOfType_qlrppv$ = BasicParams.prototype.nthLastOfType_qlrppv$;
  FlexParams.prototype.nthOfType_qlrppv$ = BasicParams.prototype.nthOfType_qlrppv$;
  FlexParams.prototype.children_qlrppv$ = BasicParams.prototype.children_qlrppv$;
  FlexParams.prototype.pseudoElement_iaoh6o$_0 = PseudoElements.prototype.pseudoElement_iaoh6o$_0;
  FlexParams.prototype.pseudoElement_qsy49e$_0 = PseudoElements.prototype.pseudoElement_qsy49e$_0;
  FlexParams.prototype.after_xighi7$ = BasicParams.prototype.after_xighi7$;
  FlexParams.prototype.before_xighi7$ = BasicParams.prototype.before_xighi7$;
  FlexParams.prototype.firstLetter_xighi7$ = BasicParams.prototype.firstLetter_xighi7$;
  FlexParams.prototype.firstLine_xighi7$ = BasicParams.prototype.firstLine_xighi7$;
  FlexParams.prototype.grammarError_xighi7$ = BasicParams.prototype.grammarError_xighi7$;
  FlexParams.prototype.marker_xighi7$ = BasicParams.prototype.marker_xighi7$;
  FlexParams.prototype.selection_xighi7$ = BasicParams.prototype.selection_xighi7$;
  FlexParams.prototype.spellingError_xighi7$ = BasicParams.prototype.spellingError_xighi7$;
  FlexParams.prototype.direction_la6ffj$ = Flexbox.prototype.direction_la6ffj$;
  FlexParams.prototype.direction_rkqy8k$$default = Flexbox.prototype.direction_rkqy8k$$default;
  FlexParams.prototype.wrap_plz3p2$ = Flexbox.prototype.wrap_plz3p2$;
  FlexParams.prototype.wrap_jfmmz4$$default = Flexbox.prototype.wrap_jfmmz4$$default;
  FlexParams.prototype.justifyContent_vlnw1j$ = Flexbox.prototype.justifyContent_vlnw1j$;
  FlexParams.prototype.justifyContent_azy89g$$default = Flexbox.prototype.justifyContent_azy89g$$default;
  FlexParams.prototype.alignItems_tsd917$ = Flexbox.prototype.alignItems_tsd917$;
  FlexParams.prototype.alignItems_sx4pdg$$default = Flexbox.prototype.alignItems_sx4pdg$$default;
  FlexParams.prototype.alignContent_69dv8$ = Flexbox.prototype.alignContent_69dv8$;
  FlexParams.prototype.alignContent_ihjoig$$default = Flexbox.prototype.alignContent_ihjoig$$default;
  FlexParams.prototype.margin_bhtwo8$ = BasicParams.prototype.margin_bhtwo8$;
  FlexParams.prototype.margins_k1pnzg$ = BasicParams.prototype.margins_k1pnzg$;
  FlexParams.prototype.padding_bhtwo8$ = BasicParams.prototype.padding_bhtwo8$;
  FlexParams.prototype.paddings_k1pnzg$ = BasicParams.prototype.paddings_k1pnzg$;
  FlexParams.prototype.color_isjh78$ = BasicParams.prototype.color_isjh78$;
  FlexParams.prototype.opacity_rh8n64$ = BasicParams.prototype.opacity_rh8n64$;
  FlexParams.prototype.border_sj06fo$ = BasicParams.prototype.border_sj06fo$;
  FlexParams.prototype.borders_1m9jjg$ = BasicParams.prototype.borders_1m9jjg$;
  FlexParams.prototype.radius_bhtwo8$ = BasicParams.prototype.radius_bhtwo8$;
  FlexParams.prototype.radii_a257h8$ = BasicParams.prototype.radii_a257h8$;
  FlexParams.prototype.fontFamily_nw47z0$ = BasicParams.prototype.fontFamily_nw47z0$;
  FlexParams.prototype.fontSize_bhtwo8$ = BasicParams.prototype.fontSize_bhtwo8$;
  FlexParams.prototype.fontWeight_fwmnos$ = BasicParams.prototype.fontWeight_fwmnos$;
  FlexParams.prototype.textDecoration_jcyvho$ = BasicParams.prototype.textDecoration_jcyvho$;
  FlexParams.prototype.lineHeight_bhtwo8$ = BasicParams.prototype.lineHeight_bhtwo8$;
  FlexParams.prototype.letterSpacing_bhtwo8$ = BasicParams.prototype.letterSpacing_bhtwo8$;
  FlexParams.prototype.textAlign_xttfdg$ = BasicParams.prototype.textAlign_xttfdg$;
  FlexParams.prototype.textTransform_buri34$ = BasicParams.prototype.textTransform_buri34$;
  FlexParams.prototype.fontStyle_tz3ah0$ = BasicParams.prototype.fontStyle_tz3ah0$;
  FlexParams.prototype.background_1bxu5o$ = BasicParams.prototype.background_1bxu5o$;
  FlexParams.prototype.zIndex_r75jho$ = BasicParams.prototype.zIndex_r75jho$;
  FlexParams.prototype.position_vgpajw$ = BasicParams.prototype.position_vgpajw$;
  FlexParams.prototype.textShadow_h2dnmw$ = BasicParams.prototype.textShadow_h2dnmw$;
  FlexParams.prototype.boxShadow_h2dnmw$ = BasicParams.prototype.boxShadow_h2dnmw$;
  FlexParams.prototype.css_d8n4vg$ = BasicParams.prototype.css_d8n4vg$;
  FlexParams.prototype.size_5la74k$ = BasicParams.prototype.size_5la74k$;
  FlexParams.prototype.width_5la74k$ = BasicParams.prototype.width_5la74k$;
  FlexParams.prototype.height_5la74k$ = BasicParams.prototype.height_5la74k$;
  FlexParams.prototype.minWidth_5la74k$ = BasicParams.prototype.minWidth_5la74k$;
  FlexParams.prototype.maxWidth_5la74k$ = BasicParams.prototype.maxWidth_5la74k$;
  FlexParams.prototype.minHeight_5la74k$ = BasicParams.prototype.minHeight_5la74k$;
  FlexParams.prototype.maxHeight_5la74k$ = BasicParams.prototype.maxHeight_5la74k$;
  FlexParams.prototype.display_76osno$ = BasicParams.prototype.display_76osno$;
  FlexParams.prototype.verticalAlign_l3swd0$ = BasicParams.prototype.verticalAlign_l3swd0$;
  FlexParams.prototype.overflow_fdwaog$ = BasicParams.prototype.overflow_fdwaog$;
  FlexParams.prototype.overflowX_kajdkc$ = BasicParams.prototype.overflowX_kajdkc$;
  FlexParams.prototype.overflowY_9but3o$ = BasicParams.prototype.overflowY_9but3o$;
  FlexParams.prototype.grid_jhf0yc$ = BasicParams.prototype.grid_jhf0yc$;
  FlexParams.prototype.flex_6xqo6k$ = BasicParams.prototype.flex_6xqo6k$;
  FlexParams.prototype.pseudoClass_3667b1$_0 = BasicParams.prototype.pseudoClass_3667b1$_0;
  FlexParams.prototype.pseudoElement_qsy49e$_0 = BasicParams.prototype.pseudoElement_qsy49e$_0;
  FlexParams.prototype.direction_rkqy8k$ = Flexbox.prototype.direction_rkqy8k$;
  FlexParams.prototype.wrap_jfmmz4$ = Flexbox.prototype.wrap_jfmmz4$;
  FlexParams.prototype.justifyContent_azy89g$ = Flexbox.prototype.justifyContent_azy89g$;
  FlexParams.prototype.alignItems_sx4pdg$ = Flexbox.prototype.alignItems_sx4pdg$;
  FlexParams.prototype.alignContent_ihjoig$ = Flexbox.prototype.alignContent_ihjoig$;
  GridParams.prototype.margin_bcpvvc$ = BasicParams.prototype.margin_bcpvvc$;
  GridParams.prototype.margin_bhtwo8$$default = BasicParams.prototype.margin_bhtwo8$$default;
  GridParams.prototype.margins_ptb4s1$ = BasicParams.prototype.margins_ptb4s1$;
  GridParams.prototype.margins_k1pnzg$$default = BasicParams.prototype.margins_k1pnzg$$default;
  GridParams.prototype.padding_bcpvvc$ = BasicParams.prototype.padding_bcpvvc$;
  GridParams.prototype.padding_bhtwo8$$default = BasicParams.prototype.padding_bhtwo8$$default;
  GridParams.prototype.paddings_ptb4s1$ = BasicParams.prototype.paddings_ptb4s1$;
  GridParams.prototype.paddings_k1pnzg$$default = BasicParams.prototype.paddings_k1pnzg$$default;
  GridParams.prototype.color_jl9ed9$ = BasicParams.prototype.color_jl9ed9$;
  GridParams.prototype.color_isjh78$$default = BasicParams.prototype.color_isjh78$$default;
  GridParams.prototype.opacity_y3j6id$ = BasicParams.prototype.opacity_y3j6id$;
  GridParams.prototype.opacity_rh8n64$$default = BasicParams.prototype.opacity_rh8n64$$default;
  GridParams.prototype.border_4a22k0$ = BasicParams.prototype.border_4a22k0$;
  GridParams.prototype.border_sj06fo$$default = BasicParams.prototype.border_sj06fo$$default;
  GridParams.prototype.borders_9iuei5$ = BasicParams.prototype.borders_9iuei5$;
  GridParams.prototype.borders_1m9jjg$$default = BasicParams.prototype.borders_1m9jjg$$default;
  GridParams.prototype.radius_bcpvvc$ = BasicParams.prototype.radius_bcpvvc$;
  GridParams.prototype.radius_bhtwo8$$default = BasicParams.prototype.radius_bhtwo8$$default;
  GridParams.prototype.radii_2h0nmj$ = BasicParams.prototype.radii_2h0nmj$;
  GridParams.prototype.radii_a257h8$$default = BasicParams.prototype.radii_a257h8$$default;
  GridParams.prototype.fontFamily_emhhv9$ = BasicParams.prototype.fontFamily_emhhv9$;
  GridParams.prototype.fontFamily_nw47z0$$default = BasicParams.prototype.fontFamily_nw47z0$$default;
  GridParams.prototype.fontSize_bcpvvc$ = BasicParams.prototype.fontSize_bcpvvc$;
  GridParams.prototype.fontSize_bhtwo8$$default = BasicParams.prototype.fontSize_bhtwo8$$default;
  GridParams.prototype.fontWeight_wyjwgc$ = BasicParams.prototype.fontWeight_wyjwgc$;
  GridParams.prototype.fontWeight_fwmnos$$default = BasicParams.prototype.fontWeight_fwmnos$$default;
  GridParams.prototype.textDecoration_jcyvho$$default = BasicParams.prototype.textDecoration_jcyvho$$default;
  GridParams.prototype.textDecoration_cogaie$ = BasicParams.prototype.textDecoration_cogaie$;
  GridParams.prototype.lineHeight_bcpvvc$ = BasicParams.prototype.lineHeight_bcpvvc$;
  GridParams.prototype.lineHeight_bhtwo8$$default = BasicParams.prototype.lineHeight_bhtwo8$$default;
  GridParams.prototype.letterSpacing_bcpvvc$ = BasicParams.prototype.letterSpacing_bcpvvc$;
  GridParams.prototype.letterSpacing_bhtwo8$$default = BasicParams.prototype.letterSpacing_bhtwo8$$default;
  GridParams.prototype.textAlign_beucyh$ = BasicParams.prototype.textAlign_beucyh$;
  GridParams.prototype.textAlign_xttfdg$$default = BasicParams.prototype.textAlign_xttfdg$$default;
  GridParams.prototype.textTransform_4zs19q$ = BasicParams.prototype.textTransform_4zs19q$;
  GridParams.prototype.textTransform_buri34$$default = BasicParams.prototype.textTransform_buri34$$default;
  GridParams.prototype.fontStyle_d5s4tt$ = BasicParams.prototype.fontStyle_d5s4tt$;
  GridParams.prototype.fontStyle_tz3ah0$$default = BasicParams.prototype.fontStyle_tz3ah0$$default;
  GridParams.prototype.background_f5fcq6$ = BasicParams.prototype.background_f5fcq6$;
  GridParams.prototype.background_1bxu5o$$default = BasicParams.prototype.background_1bxu5o$$default;
  GridParams.prototype.zIndex_yiflju$ = BasicParams.prototype.zIndex_yiflju$;
  GridParams.prototype.zIndex_r75jho$$default = BasicParams.prototype.zIndex_r75jho$$default;
  GridParams.prototype.position_wp9r2r$ = BasicParams.prototype.position_wp9r2r$;
  GridParams.prototype.position_vgpajw$$default = BasicParams.prototype.position_vgpajw$$default;
  GridParams.prototype.textShadow_ihm9h8$ = BasicParams.prototype.textShadow_ihm9h8$;
  GridParams.prototype.textShadow_h2dnmw$$default = BasicParams.prototype.textShadow_h2dnmw$$default;
  GridParams.prototype.boxShadow_ihm9h8$ = BasicParams.prototype.boxShadow_ihm9h8$;
  GridParams.prototype.boxShadow_h2dnmw$$default = BasicParams.prototype.boxShadow_h2dnmw$$default;
  GridParams.prototype.css_61zpoe$ = BasicParams.prototype.css_61zpoe$;
  GridParams.prototype.css_d8n4vg$$default = BasicParams.prototype.css_d8n4vg$$default;
  GridParams.prototype.size_wpghq5$ = BasicParams.prototype.size_wpghq5$;
  GridParams.prototype.size_5la74k$$default = BasicParams.prototype.size_5la74k$$default;
  GridParams.prototype.width_wpghq5$ = BasicParams.prototype.width_wpghq5$;
  GridParams.prototype.width_5la74k$$default = BasicParams.prototype.width_5la74k$$default;
  GridParams.prototype.height_wpghq5$ = BasicParams.prototype.height_wpghq5$;
  GridParams.prototype.height_5la74k$$default = BasicParams.prototype.height_5la74k$$default;
  GridParams.prototype.minWidth_wpghq5$ = BasicParams.prototype.minWidth_wpghq5$;
  GridParams.prototype.minWidth_5la74k$$default = BasicParams.prototype.minWidth_5la74k$$default;
  GridParams.prototype.maxWidth_wpghq5$ = BasicParams.prototype.maxWidth_wpghq5$;
  GridParams.prototype.maxWidth_5la74k$$default = BasicParams.prototype.maxWidth_5la74k$$default;
  GridParams.prototype.minHeight_wpghq5$ = BasicParams.prototype.minHeight_wpghq5$;
  GridParams.prototype.minHeight_5la74k$$default = BasicParams.prototype.minHeight_5la74k$$default;
  GridParams.prototype.maxHeight_wpghq5$ = BasicParams.prototype.maxHeight_wpghq5$;
  GridParams.prototype.maxHeight_5la74k$$default = BasicParams.prototype.maxHeight_5la74k$$default;
  GridParams.prototype.display_1gh9wc$ = BasicParams.prototype.display_1gh9wc$;
  GridParams.prototype.display_76osno$$default = BasicParams.prototype.display_76osno$$default;
  GridParams.prototype.verticalAlign_qe4rxr$ = BasicParams.prototype.verticalAlign_qe4rxr$;
  GridParams.prototype.verticalAlign_l3swd0$$default = BasicParams.prototype.verticalAlign_l3swd0$$default;
  GridParams.prototype.overflow_c5t1z2$ = BasicParams.prototype.overflow_c5t1z2$;
  GridParams.prototype.overflow_fdwaog$$default = BasicParams.prototype.overflow_fdwaog$$default;
  GridParams.prototype.overflowX_1qx2a0$ = BasicParams.prototype.overflowX_1qx2a0$;
  GridParams.prototype.overflowX_kajdkc$$default = BasicParams.prototype.overflowX_kajdkc$$default;
  GridParams.prototype.overflowY_iu6k55$ = BasicParams.prototype.overflowY_iu6k55$;
  GridParams.prototype.overflowY_9but3o$$default = BasicParams.prototype.overflowY_9but3o$$default;
  GridParams.prototype.grid_5hf0eu$ = BasicParams.prototype.grid_5hf0eu$;
  GridParams.prototype.grid_jhf0yc$$default = BasicParams.prototype.grid_jhf0yc$$default;
  GridParams.prototype.flex_e69mls$ = BasicParams.prototype.flex_e69mls$;
  GridParams.prototype.flex_6xqo6k$$default = BasicParams.prototype.flex_6xqo6k$$default;
  GridParams.prototype.pseudoClass_dvv9uz$_0 = PseudoClasses.prototype.pseudoClass_dvv9uz$_0;
  GridParams.prototype.pseudoClass_3667b1$_0 = PseudoClasses.prototype.pseudoClass_3667b1$_0;
  GridParams.prototype.active_xighi7$ = BasicParams.prototype.active_xighi7$;
  GridParams.prototype.anyLink_xighi7$ = BasicParams.prototype.anyLink_xighi7$;
  GridParams.prototype.blank_xighi7$ = BasicParams.prototype.blank_xighi7$;
  GridParams.prototype.checked_xighi7$ = BasicParams.prototype.checked_xighi7$;
  GridParams.prototype.current_xighi7$ = BasicParams.prototype.current_xighi7$;
  GridParams.prototype.default_xighi7$ = BasicParams.prototype.default_xighi7$;
  GridParams.prototype.disabled_xighi7$ = BasicParams.prototype.disabled_xighi7$;
  GridParams.prototype.empty_xighi7$ = BasicParams.prototype.empty_xighi7$;
  GridParams.prototype.enabled_xighi7$ = BasicParams.prototype.enabled_xighi7$;
  GridParams.prototype.first_xighi7$ = BasicParams.prototype.first_xighi7$;
  GridParams.prototype.firstChild_xighi7$ = BasicParams.prototype.firstChild_xighi7$;
  GridParams.prototype.firstOfType_xighi7$ = BasicParams.prototype.firstOfType_xighi7$;
  GridParams.prototype.fullscreen_xighi7$ = BasicParams.prototype.fullscreen_xighi7$;
  GridParams.prototype.focus_xighi7$ = BasicParams.prototype.focus_xighi7$;
  GridParams.prototype.focusVisible_xighi7$ = BasicParams.prototype.focusVisible_xighi7$;
  GridParams.prototype.focusWithin_xighi7$ = BasicParams.prototype.focusWithin_xighi7$;
  GridParams.prototype.future_xighi7$ = BasicParams.prototype.future_xighi7$;
  GridParams.prototype.hover_xighi7$ = BasicParams.prototype.hover_xighi7$;
  GridParams.prototype.indeterminate_xighi7$ = BasicParams.prototype.indeterminate_xighi7$;
  GridParams.prototype.inRange_xighi7$ = BasicParams.prototype.inRange_xighi7$;
  GridParams.prototype.invalid_xighi7$ = BasicParams.prototype.invalid_xighi7$;
  GridParams.prototype.lastChild_xighi7$ = BasicParams.prototype.lastChild_xighi7$;
  GridParams.prototype.lastOfType_xighi7$ = BasicParams.prototype.lastOfType_xighi7$;
  GridParams.prototype.left_xighi7$ = BasicParams.prototype.left_xighi7$;
  GridParams.prototype.link_xighi7$ = BasicParams.prototype.link_xighi7$;
  GridParams.prototype.localLink_xighi7$ = BasicParams.prototype.localLink_xighi7$;
  GridParams.prototype.onlyChild_xighi7$ = BasicParams.prototype.onlyChild_xighi7$;
  GridParams.prototype.onlyOfType_xighi7$ = BasicParams.prototype.onlyOfType_xighi7$;
  GridParams.prototype.optional_xighi7$ = BasicParams.prototype.optional_xighi7$;
  GridParams.prototype.outOfRange_xighi7$ = BasicParams.prototype.outOfRange_xighi7$;
  GridParams.prototype.readOnly_xighi7$ = BasicParams.prototype.readOnly_xighi7$;
  GridParams.prototype.readWrite_xighi7$ = BasicParams.prototype.readWrite_xighi7$;
  GridParams.prototype.required_xighi7$ = BasicParams.prototype.required_xighi7$;
  GridParams.prototype.right_xighi7$ = BasicParams.prototype.right_xighi7$;
  GridParams.prototype.root_xighi7$ = BasicParams.prototype.root_xighi7$;
  GridParams.prototype.scope_xighi7$ = BasicParams.prototype.scope_xighi7$;
  GridParams.prototype.target_xighi7$ = BasicParams.prototype.target_xighi7$;
  GridParams.prototype.valid_xighi7$ = BasicParams.prototype.valid_xighi7$;
  GridParams.prototype.visited_xighi7$ = BasicParams.prototype.visited_xighi7$;
  GridParams.prototype.dir_qlrppv$ = BasicParams.prototype.dir_qlrppv$;
  GridParams.prototype.lang_qlrppv$ = BasicParams.prototype.lang_qlrppv$;
  GridParams.prototype.not_qlrppv$ = BasicParams.prototype.not_qlrppv$;
  GridParams.prototype.nthChild_qlrppv$ = BasicParams.prototype.nthChild_qlrppv$;
  GridParams.prototype.nthLastChild_qlrppv$ = BasicParams.prototype.nthLastChild_qlrppv$;
  GridParams.prototype.nthLastOfType_qlrppv$ = BasicParams.prototype.nthLastOfType_qlrppv$;
  GridParams.prototype.nthOfType_qlrppv$ = BasicParams.prototype.nthOfType_qlrppv$;
  GridParams.prototype.children_qlrppv$ = BasicParams.prototype.children_qlrppv$;
  GridParams.prototype.pseudoElement_iaoh6o$_0 = PseudoElements.prototype.pseudoElement_iaoh6o$_0;
  GridParams.prototype.pseudoElement_qsy49e$_0 = PseudoElements.prototype.pseudoElement_qsy49e$_0;
  GridParams.prototype.after_xighi7$ = BasicParams.prototype.after_xighi7$;
  GridParams.prototype.before_xighi7$ = BasicParams.prototype.before_xighi7$;
  GridParams.prototype.firstLetter_xighi7$ = BasicParams.prototype.firstLetter_xighi7$;
  GridParams.prototype.firstLine_xighi7$ = BasicParams.prototype.firstLine_xighi7$;
  GridParams.prototype.grammarError_xighi7$ = BasicParams.prototype.grammarError_xighi7$;
  GridParams.prototype.marker_xighi7$ = BasicParams.prototype.marker_xighi7$;
  GridParams.prototype.selection_xighi7$ = BasicParams.prototype.selection_xighi7$;
  GridParams.prototype.spellingError_xighi7$ = BasicParams.prototype.spellingError_xighi7$;
  GridParams.prototype.columns_quywoh$ = GridLayout.prototype.columns_quywoh$;
  GridParams.prototype.columns_ti9a38$$default = GridLayout.prototype.columns_ti9a38$$default;
  GridParams.prototype.rows_quywoh$ = GridLayout.prototype.rows_quywoh$;
  GridParams.prototype.rows_ti9a38$$default = GridLayout.prototype.rows_ti9a38$$default;
  GridParams.prototype.autoRows_quywoh$ = GridLayout.prototype.autoRows_quywoh$;
  GridParams.prototype.autoRows_ti9a38$$default = GridLayout.prototype.autoRows_ti9a38$$default;
  GridParams.prototype.autoColumns_quywoh$ = GridLayout.prototype.autoColumns_quywoh$;
  GridParams.prototype.autoColumns_ti9a38$$default = GridLayout.prototype.autoColumns_ti9a38$$default;
  GridParams.prototype.autoFlow_bi2803$ = GridLayout.prototype.autoFlow_bi2803$;
  GridParams.prototype.autoFlow_9l1thg$$default = GridLayout.prototype.autoFlow_9l1thg$$default;
  GridParams.prototype.areas_owx8eh$ = GridLayout.prototype.areas_owx8eh$;
  GridParams.prototype.areas_lft61g$$default = GridLayout.prototype.areas_lft61g$$default;
  GridParams.prototype.columnGap_bcpvvc$ = GridLayout.prototype.columnGap_bcpvvc$;
  GridParams.prototype.columnGap_bhtwo8$$default = GridLayout.prototype.columnGap_bhtwo8$$default;
  GridParams.prototype.rowGap_bcpvvc$ = GridLayout.prototype.rowGap_bcpvvc$;
  GridParams.prototype.rowGap_bhtwo8$$default = GridLayout.prototype.rowGap_bhtwo8$$default;
  GridParams.prototype.gap_bcpvvc$ = GridLayout.prototype.gap_bcpvvc$;
  GridParams.prototype.gap_bhtwo8$$default = GridLayout.prototype.gap_bhtwo8$$default;
  GridParams.prototype.fitContent_61zpoe$ = GridLayout.prototype.fitContent_61zpoe$;
  GridParams.prototype.justifyContent_vlnw1j$ = GridLayout.prototype.justifyContent_vlnw1j$;
  GridParams.prototype.justifyContent_azy89g$$default = GridLayout.prototype.justifyContent_azy89g$$default;
  GridParams.prototype.alignItems_tsd917$ = GridLayout.prototype.alignItems_tsd917$;
  GridParams.prototype.alignItems_sx4pdg$$default = GridLayout.prototype.alignItems_sx4pdg$$default;
  GridParams.prototype.alignContent_69dv8$ = GridLayout.prototype.alignContent_69dv8$;
  GridParams.prototype.alignContent_ihjoig$$default = GridLayout.prototype.alignContent_ihjoig$$default;
  GridParams.prototype.margin_bhtwo8$ = BasicParams.prototype.margin_bhtwo8$;
  GridParams.prototype.margins_k1pnzg$ = BasicParams.prototype.margins_k1pnzg$;
  GridParams.prototype.padding_bhtwo8$ = BasicParams.prototype.padding_bhtwo8$;
  GridParams.prototype.paddings_k1pnzg$ = BasicParams.prototype.paddings_k1pnzg$;
  GridParams.prototype.color_isjh78$ = BasicParams.prototype.color_isjh78$;
  GridParams.prototype.opacity_rh8n64$ = BasicParams.prototype.opacity_rh8n64$;
  GridParams.prototype.border_sj06fo$ = BasicParams.prototype.border_sj06fo$;
  GridParams.prototype.borders_1m9jjg$ = BasicParams.prototype.borders_1m9jjg$;
  GridParams.prototype.radius_bhtwo8$ = BasicParams.prototype.radius_bhtwo8$;
  GridParams.prototype.radii_a257h8$ = BasicParams.prototype.radii_a257h8$;
  GridParams.prototype.fontFamily_nw47z0$ = BasicParams.prototype.fontFamily_nw47z0$;
  GridParams.prototype.fontSize_bhtwo8$ = BasicParams.prototype.fontSize_bhtwo8$;
  GridParams.prototype.fontWeight_fwmnos$ = BasicParams.prototype.fontWeight_fwmnos$;
  GridParams.prototype.textDecoration_jcyvho$ = BasicParams.prototype.textDecoration_jcyvho$;
  GridParams.prototype.lineHeight_bhtwo8$ = BasicParams.prototype.lineHeight_bhtwo8$;
  GridParams.prototype.letterSpacing_bhtwo8$ = BasicParams.prototype.letterSpacing_bhtwo8$;
  GridParams.prototype.textAlign_xttfdg$ = BasicParams.prototype.textAlign_xttfdg$;
  GridParams.prototype.textTransform_buri34$ = BasicParams.prototype.textTransform_buri34$;
  GridParams.prototype.fontStyle_tz3ah0$ = BasicParams.prototype.fontStyle_tz3ah0$;
  GridParams.prototype.background_1bxu5o$ = BasicParams.prototype.background_1bxu5o$;
  GridParams.prototype.zIndex_r75jho$ = BasicParams.prototype.zIndex_r75jho$;
  GridParams.prototype.position_vgpajw$ = BasicParams.prototype.position_vgpajw$;
  GridParams.prototype.textShadow_h2dnmw$ = BasicParams.prototype.textShadow_h2dnmw$;
  GridParams.prototype.boxShadow_h2dnmw$ = BasicParams.prototype.boxShadow_h2dnmw$;
  GridParams.prototype.css_d8n4vg$ = BasicParams.prototype.css_d8n4vg$;
  GridParams.prototype.size_5la74k$ = BasicParams.prototype.size_5la74k$;
  GridParams.prototype.width_5la74k$ = BasicParams.prototype.width_5la74k$;
  GridParams.prototype.height_5la74k$ = BasicParams.prototype.height_5la74k$;
  GridParams.prototype.minWidth_5la74k$ = BasicParams.prototype.minWidth_5la74k$;
  GridParams.prototype.maxWidth_5la74k$ = BasicParams.prototype.maxWidth_5la74k$;
  GridParams.prototype.minHeight_5la74k$ = BasicParams.prototype.minHeight_5la74k$;
  GridParams.prototype.maxHeight_5la74k$ = BasicParams.prototype.maxHeight_5la74k$;
  GridParams.prototype.display_76osno$ = BasicParams.prototype.display_76osno$;
  GridParams.prototype.verticalAlign_l3swd0$ = BasicParams.prototype.verticalAlign_l3swd0$;
  GridParams.prototype.overflow_fdwaog$ = BasicParams.prototype.overflow_fdwaog$;
  GridParams.prototype.overflowX_kajdkc$ = BasicParams.prototype.overflowX_kajdkc$;
  GridParams.prototype.overflowY_9but3o$ = BasicParams.prototype.overflowY_9but3o$;
  GridParams.prototype.grid_jhf0yc$ = BasicParams.prototype.grid_jhf0yc$;
  GridParams.prototype.flex_6xqo6k$ = BasicParams.prototype.flex_6xqo6k$;
  GridParams.prototype.pseudoClass_3667b1$_0 = BasicParams.prototype.pseudoClass_3667b1$_0;
  GridParams.prototype.pseudoElement_qsy49e$_0 = BasicParams.prototype.pseudoElement_qsy49e$_0;
  GridParams.prototype.columns_ti9a38$ = GridLayout.prototype.columns_ti9a38$;
  GridParams.prototype.rows_ti9a38$ = GridLayout.prototype.rows_ti9a38$;
  GridParams.prototype.autoRows_ti9a38$ = GridLayout.prototype.autoRows_ti9a38$;
  GridParams.prototype.autoColumns_ti9a38$ = GridLayout.prototype.autoColumns_ti9a38$;
  GridParams.prototype.autoFlow_9l1thg$ = GridLayout.prototype.autoFlow_9l1thg$;
  GridParams.prototype.areas_lft61g$ = GridLayout.prototype.areas_lft61g$;
  GridParams.prototype.columnGap_bhtwo8$ = GridLayout.prototype.columnGap_bhtwo8$;
  GridParams.prototype.rowGap_bhtwo8$ = GridLayout.prototype.rowGap_bhtwo8$;
  GridParams.prototype.gap_bhtwo8$ = GridLayout.prototype.gap_bhtwo8$;
  GridParams.prototype.justifyContent_azy89g$ = GridLayout.prototype.justifyContent_azy89g$;
  GridParams.prototype.alignItems_sx4pdg$ = GridLayout.prototype.alignItems_sx4pdg$;
  GridParams.prototype.alignContent_ihjoig$ = GridLayout.prototype.alignContent_ihjoig$;
  BoxParams.prototype.invoke_5yoziz$ = FlexParams.prototype.invoke_5yoziz$;
  BoxParams.prototype.invoke_tdl3c$ = GridParams.prototype.invoke_tdl3c$;
  BoxParams.prototype.margin_bcpvvc$ = FlexParams.prototype.margin_bcpvvc$;
  BoxParams.prototype.margin_bhtwo8$$default = FlexParams.prototype.margin_bhtwo8$$default;
  BoxParams.prototype.margins_ptb4s1$ = FlexParams.prototype.margins_ptb4s1$;
  BoxParams.prototype.margins_k1pnzg$$default = FlexParams.prototype.margins_k1pnzg$$default;
  BoxParams.prototype.padding_bcpvvc$ = FlexParams.prototype.padding_bcpvvc$;
  BoxParams.prototype.padding_bhtwo8$$default = FlexParams.prototype.padding_bhtwo8$$default;
  BoxParams.prototype.paddings_ptb4s1$ = FlexParams.prototype.paddings_ptb4s1$;
  BoxParams.prototype.paddings_k1pnzg$$default = FlexParams.prototype.paddings_k1pnzg$$default;
  BoxParams.prototype.color_jl9ed9$ = FlexParams.prototype.color_jl9ed9$;
  BoxParams.prototype.color_isjh78$$default = FlexParams.prototype.color_isjh78$$default;
  BoxParams.prototype.opacity_y3j6id$ = FlexParams.prototype.opacity_y3j6id$;
  BoxParams.prototype.opacity_rh8n64$$default = FlexParams.prototype.opacity_rh8n64$$default;
  BoxParams.prototype.border_4a22k0$ = FlexParams.prototype.border_4a22k0$;
  BoxParams.prototype.border_sj06fo$$default = FlexParams.prototype.border_sj06fo$$default;
  BoxParams.prototype.borders_9iuei5$ = FlexParams.prototype.borders_9iuei5$;
  BoxParams.prototype.borders_1m9jjg$$default = FlexParams.prototype.borders_1m9jjg$$default;
  BoxParams.prototype.radius_bcpvvc$ = FlexParams.prototype.radius_bcpvvc$;
  BoxParams.prototype.radius_bhtwo8$$default = FlexParams.prototype.radius_bhtwo8$$default;
  BoxParams.prototype.radii_2h0nmj$ = FlexParams.prototype.radii_2h0nmj$;
  BoxParams.prototype.radii_a257h8$$default = FlexParams.prototype.radii_a257h8$$default;
  BoxParams.prototype.fontFamily_emhhv9$ = FlexParams.prototype.fontFamily_emhhv9$;
  BoxParams.prototype.fontFamily_nw47z0$$default = FlexParams.prototype.fontFamily_nw47z0$$default;
  BoxParams.prototype.fontSize_bcpvvc$ = FlexParams.prototype.fontSize_bcpvvc$;
  BoxParams.prototype.fontSize_bhtwo8$$default = FlexParams.prototype.fontSize_bhtwo8$$default;
  BoxParams.prototype.fontWeight_wyjwgc$ = FlexParams.prototype.fontWeight_wyjwgc$;
  BoxParams.prototype.fontWeight_fwmnos$$default = FlexParams.prototype.fontWeight_fwmnos$$default;
  BoxParams.prototype.textDecoration_jcyvho$$default = FlexParams.prototype.textDecoration_jcyvho$$default;
  BoxParams.prototype.textDecoration_cogaie$ = FlexParams.prototype.textDecoration_cogaie$;
  BoxParams.prototype.lineHeight_bcpvvc$ = FlexParams.prototype.lineHeight_bcpvvc$;
  BoxParams.prototype.lineHeight_bhtwo8$$default = FlexParams.prototype.lineHeight_bhtwo8$$default;
  BoxParams.prototype.letterSpacing_bcpvvc$ = FlexParams.prototype.letterSpacing_bcpvvc$;
  BoxParams.prototype.letterSpacing_bhtwo8$$default = FlexParams.prototype.letterSpacing_bhtwo8$$default;
  BoxParams.prototype.textAlign_beucyh$ = FlexParams.prototype.textAlign_beucyh$;
  BoxParams.prototype.textAlign_xttfdg$$default = FlexParams.prototype.textAlign_xttfdg$$default;
  BoxParams.prototype.textTransform_4zs19q$ = FlexParams.prototype.textTransform_4zs19q$;
  BoxParams.prototype.textTransform_buri34$$default = FlexParams.prototype.textTransform_buri34$$default;
  BoxParams.prototype.fontStyle_d5s4tt$ = FlexParams.prototype.fontStyle_d5s4tt$;
  BoxParams.prototype.fontStyle_tz3ah0$$default = FlexParams.prototype.fontStyle_tz3ah0$$default;
  BoxParams.prototype.background_f5fcq6$ = FlexParams.prototype.background_f5fcq6$;
  BoxParams.prototype.background_1bxu5o$$default = FlexParams.prototype.background_1bxu5o$$default;
  BoxParams.prototype.zIndex_yiflju$ = FlexParams.prototype.zIndex_yiflju$;
  BoxParams.prototype.zIndex_r75jho$$default = FlexParams.prototype.zIndex_r75jho$$default;
  BoxParams.prototype.position_wp9r2r$ = FlexParams.prototype.position_wp9r2r$;
  BoxParams.prototype.position_vgpajw$$default = FlexParams.prototype.position_vgpajw$$default;
  BoxParams.prototype.textShadow_ihm9h8$ = FlexParams.prototype.textShadow_ihm9h8$;
  BoxParams.prototype.textShadow_h2dnmw$$default = FlexParams.prototype.textShadow_h2dnmw$$default;
  BoxParams.prototype.boxShadow_ihm9h8$ = FlexParams.prototype.boxShadow_ihm9h8$;
  BoxParams.prototype.boxShadow_h2dnmw$$default = FlexParams.prototype.boxShadow_h2dnmw$$default;
  BoxParams.prototype.css_61zpoe$ = FlexParams.prototype.css_61zpoe$;
  BoxParams.prototype.css_d8n4vg$$default = FlexParams.prototype.css_d8n4vg$$default;
  BoxParams.prototype.size_wpghq5$ = FlexParams.prototype.size_wpghq5$;
  BoxParams.prototype.size_5la74k$$default = FlexParams.prototype.size_5la74k$$default;
  BoxParams.prototype.width_wpghq5$ = FlexParams.prototype.width_wpghq5$;
  BoxParams.prototype.width_5la74k$$default = FlexParams.prototype.width_5la74k$$default;
  BoxParams.prototype.height_wpghq5$ = FlexParams.prototype.height_wpghq5$;
  BoxParams.prototype.height_5la74k$$default = FlexParams.prototype.height_5la74k$$default;
  BoxParams.prototype.minWidth_wpghq5$ = FlexParams.prototype.minWidth_wpghq5$;
  BoxParams.prototype.minWidth_5la74k$$default = FlexParams.prototype.minWidth_5la74k$$default;
  BoxParams.prototype.maxWidth_wpghq5$ = FlexParams.prototype.maxWidth_wpghq5$;
  BoxParams.prototype.maxWidth_5la74k$$default = FlexParams.prototype.maxWidth_5la74k$$default;
  BoxParams.prototype.minHeight_wpghq5$ = FlexParams.prototype.minHeight_wpghq5$;
  BoxParams.prototype.minHeight_5la74k$$default = FlexParams.prototype.minHeight_5la74k$$default;
  BoxParams.prototype.maxHeight_wpghq5$ = FlexParams.prototype.maxHeight_wpghq5$;
  BoxParams.prototype.maxHeight_5la74k$$default = FlexParams.prototype.maxHeight_5la74k$$default;
  BoxParams.prototype.display_1gh9wc$ = FlexParams.prototype.display_1gh9wc$;
  BoxParams.prototype.display_76osno$$default = FlexParams.prototype.display_76osno$$default;
  BoxParams.prototype.verticalAlign_qe4rxr$ = FlexParams.prototype.verticalAlign_qe4rxr$;
  BoxParams.prototype.verticalAlign_l3swd0$$default = FlexParams.prototype.verticalAlign_l3swd0$$default;
  BoxParams.prototype.overflow_c5t1z2$ = FlexParams.prototype.overflow_c5t1z2$;
  BoxParams.prototype.overflow_fdwaog$$default = FlexParams.prototype.overflow_fdwaog$$default;
  BoxParams.prototype.overflowX_1qx2a0$ = FlexParams.prototype.overflowX_1qx2a0$;
  BoxParams.prototype.overflowX_kajdkc$$default = FlexParams.prototype.overflowX_kajdkc$$default;
  BoxParams.prototype.overflowY_iu6k55$ = FlexParams.prototype.overflowY_iu6k55$;
  BoxParams.prototype.overflowY_9but3o$$default = FlexParams.prototype.overflowY_9but3o$$default;
  BoxParams.prototype.grid_5hf0eu$ = FlexParams.prototype.grid_5hf0eu$;
  BoxParams.prototype.grid_jhf0yc$$default = FlexParams.prototype.grid_jhf0yc$$default;
  BoxParams.prototype.flex_e69mls$ = FlexParams.prototype.flex_e69mls$;
  BoxParams.prototype.flex_6xqo6k$$default = FlexParams.prototype.flex_6xqo6k$$default;
  BoxParams.prototype.pseudoClass_dvv9uz$_0 = BasicParams.prototype.pseudoClass_dvv9uz$_0;
  BoxParams.prototype.pseudoClass_dvv9uz$_0 = BasicParams.prototype.pseudoClass_dvv9uz$_0;
  BoxParams.prototype.pseudoClass_3667b1$_0 = BasicParams.prototype.pseudoClass_3667b1$_0;
  BoxParams.prototype.pseudoClass_3667b1$_0 = BasicParams.prototype.pseudoClass_3667b1$_0;
  BoxParams.prototype.active_xighi7$ = FlexParams.prototype.active_xighi7$;
  BoxParams.prototype.anyLink_xighi7$ = FlexParams.prototype.anyLink_xighi7$;
  BoxParams.prototype.blank_xighi7$ = FlexParams.prototype.blank_xighi7$;
  BoxParams.prototype.checked_xighi7$ = FlexParams.prototype.checked_xighi7$;
  BoxParams.prototype.current_xighi7$ = FlexParams.prototype.current_xighi7$;
  BoxParams.prototype.default_xighi7$ = FlexParams.prototype.default_xighi7$;
  BoxParams.prototype.disabled_xighi7$ = FlexParams.prototype.disabled_xighi7$;
  BoxParams.prototype.empty_xighi7$ = FlexParams.prototype.empty_xighi7$;
  BoxParams.prototype.enabled_xighi7$ = FlexParams.prototype.enabled_xighi7$;
  BoxParams.prototype.first_xighi7$ = FlexParams.prototype.first_xighi7$;
  BoxParams.prototype.firstChild_xighi7$ = FlexParams.prototype.firstChild_xighi7$;
  BoxParams.prototype.firstOfType_xighi7$ = FlexParams.prototype.firstOfType_xighi7$;
  BoxParams.prototype.fullscreen_xighi7$ = FlexParams.prototype.fullscreen_xighi7$;
  BoxParams.prototype.focus_xighi7$ = FlexParams.prototype.focus_xighi7$;
  BoxParams.prototype.focusVisible_xighi7$ = FlexParams.prototype.focusVisible_xighi7$;
  BoxParams.prototype.focusWithin_xighi7$ = FlexParams.prototype.focusWithin_xighi7$;
  BoxParams.prototype.future_xighi7$ = FlexParams.prototype.future_xighi7$;
  BoxParams.prototype.hover_xighi7$ = FlexParams.prototype.hover_xighi7$;
  BoxParams.prototype.indeterminate_xighi7$ = FlexParams.prototype.indeterminate_xighi7$;
  BoxParams.prototype.inRange_xighi7$ = FlexParams.prototype.inRange_xighi7$;
  BoxParams.prototype.invalid_xighi7$ = FlexParams.prototype.invalid_xighi7$;
  BoxParams.prototype.lastChild_xighi7$ = FlexParams.prototype.lastChild_xighi7$;
  BoxParams.prototype.lastOfType_xighi7$ = FlexParams.prototype.lastOfType_xighi7$;
  BoxParams.prototype.left_xighi7$ = FlexParams.prototype.left_xighi7$;
  BoxParams.prototype.link_xighi7$ = FlexParams.prototype.link_xighi7$;
  BoxParams.prototype.localLink_xighi7$ = FlexParams.prototype.localLink_xighi7$;
  BoxParams.prototype.onlyChild_xighi7$ = FlexParams.prototype.onlyChild_xighi7$;
  BoxParams.prototype.onlyOfType_xighi7$ = FlexParams.prototype.onlyOfType_xighi7$;
  BoxParams.prototype.optional_xighi7$ = FlexParams.prototype.optional_xighi7$;
  BoxParams.prototype.outOfRange_xighi7$ = FlexParams.prototype.outOfRange_xighi7$;
  BoxParams.prototype.readOnly_xighi7$ = FlexParams.prototype.readOnly_xighi7$;
  BoxParams.prototype.readWrite_xighi7$ = FlexParams.prototype.readWrite_xighi7$;
  BoxParams.prototype.required_xighi7$ = FlexParams.prototype.required_xighi7$;
  BoxParams.prototype.right_xighi7$ = FlexParams.prototype.right_xighi7$;
  BoxParams.prototype.root_xighi7$ = FlexParams.prototype.root_xighi7$;
  BoxParams.prototype.scope_xighi7$ = FlexParams.prototype.scope_xighi7$;
  BoxParams.prototype.target_xighi7$ = FlexParams.prototype.target_xighi7$;
  BoxParams.prototype.valid_xighi7$ = FlexParams.prototype.valid_xighi7$;
  BoxParams.prototype.visited_xighi7$ = FlexParams.prototype.visited_xighi7$;
  BoxParams.prototype.dir_qlrppv$ = FlexParams.prototype.dir_qlrppv$;
  BoxParams.prototype.lang_qlrppv$ = FlexParams.prototype.lang_qlrppv$;
  BoxParams.prototype.not_qlrppv$ = FlexParams.prototype.not_qlrppv$;
  BoxParams.prototype.nthChild_qlrppv$ = FlexParams.prototype.nthChild_qlrppv$;
  BoxParams.prototype.nthLastChild_qlrppv$ = FlexParams.prototype.nthLastChild_qlrppv$;
  BoxParams.prototype.nthLastOfType_qlrppv$ = FlexParams.prototype.nthLastOfType_qlrppv$;
  BoxParams.prototype.nthOfType_qlrppv$ = FlexParams.prototype.nthOfType_qlrppv$;
  BoxParams.prototype.children_qlrppv$ = FlexParams.prototype.children_qlrppv$;
  BoxParams.prototype.pseudoElement_iaoh6o$_0 = BasicParams.prototype.pseudoElement_iaoh6o$_0;
  BoxParams.prototype.pseudoElement_iaoh6o$_0 = BasicParams.prototype.pseudoElement_iaoh6o$_0;
  BoxParams.prototype.pseudoElement_qsy49e$_0 = BasicParams.prototype.pseudoElement_qsy49e$_0;
  BoxParams.prototype.pseudoElement_qsy49e$_0 = BasicParams.prototype.pseudoElement_qsy49e$_0;
  BoxParams.prototype.after_xighi7$ = FlexParams.prototype.after_xighi7$;
  BoxParams.prototype.before_xighi7$ = FlexParams.prototype.before_xighi7$;
  BoxParams.prototype.firstLetter_xighi7$ = FlexParams.prototype.firstLetter_xighi7$;
  BoxParams.prototype.firstLine_xighi7$ = FlexParams.prototype.firstLine_xighi7$;
  BoxParams.prototype.grammarError_xighi7$ = FlexParams.prototype.grammarError_xighi7$;
  BoxParams.prototype.marker_xighi7$ = FlexParams.prototype.marker_xighi7$;
  BoxParams.prototype.selection_xighi7$ = FlexParams.prototype.selection_xighi7$;
  BoxParams.prototype.spellingError_xighi7$ = FlexParams.prototype.spellingError_xighi7$;
  BoxParams.prototype.direction_la6ffj$ = FlexParams.prototype.direction_la6ffj$;
  BoxParams.prototype.direction_rkqy8k$$default = FlexParams.prototype.direction_rkqy8k$$default;
  BoxParams.prototype.wrap_plz3p2$ = FlexParams.prototype.wrap_plz3p2$;
  BoxParams.prototype.wrap_jfmmz4$$default = FlexParams.prototype.wrap_jfmmz4$$default;
  BoxParams.prototype.justifyContent_vlnw1j$ = FlexParams.prototype.justifyContent_vlnw1j$;
  BoxParams.prototype.justifyContent_azy89g$$default = FlexParams.prototype.justifyContent_azy89g$$default;
  BoxParams.prototype.alignItems_tsd917$ = FlexParams.prototype.alignItems_tsd917$;
  BoxParams.prototype.alignItems_sx4pdg$$default = FlexParams.prototype.alignItems_sx4pdg$$default;
  BoxParams.prototype.alignContent_69dv8$ = FlexParams.prototype.alignContent_69dv8$;
  BoxParams.prototype.alignContent_ihjoig$$default = FlexParams.prototype.alignContent_ihjoig$$default;
  BoxParams.prototype.columns_quywoh$ = GridParams.prototype.columns_quywoh$;
  BoxParams.prototype.columns_ti9a38$$default = GridParams.prototype.columns_ti9a38$$default;
  BoxParams.prototype.rows_quywoh$ = GridParams.prototype.rows_quywoh$;
  BoxParams.prototype.rows_ti9a38$$default = GridParams.prototype.rows_ti9a38$$default;
  BoxParams.prototype.autoRows_quywoh$ = GridParams.prototype.autoRows_quywoh$;
  BoxParams.prototype.autoRows_ti9a38$$default = GridParams.prototype.autoRows_ti9a38$$default;
  BoxParams.prototype.autoColumns_quywoh$ = GridParams.prototype.autoColumns_quywoh$;
  BoxParams.prototype.autoColumns_ti9a38$$default = GridParams.prototype.autoColumns_ti9a38$$default;
  BoxParams.prototype.autoFlow_bi2803$ = GridParams.prototype.autoFlow_bi2803$;
  BoxParams.prototype.autoFlow_9l1thg$$default = GridParams.prototype.autoFlow_9l1thg$$default;
  BoxParams.prototype.areas_owx8eh$ = GridParams.prototype.areas_owx8eh$;
  BoxParams.prototype.areas_lft61g$$default = GridParams.prototype.areas_lft61g$$default;
  BoxParams.prototype.columnGap_bcpvvc$ = GridParams.prototype.columnGap_bcpvvc$;
  BoxParams.prototype.columnGap_bhtwo8$$default = GridParams.prototype.columnGap_bhtwo8$$default;
  BoxParams.prototype.rowGap_bcpvvc$ = GridParams.prototype.rowGap_bcpvvc$;
  BoxParams.prototype.rowGap_bhtwo8$$default = GridParams.prototype.rowGap_bhtwo8$$default;
  BoxParams.prototype.gap_bcpvvc$ = GridParams.prototype.gap_bcpvvc$;
  BoxParams.prototype.gap_bhtwo8$$default = GridParams.prototype.gap_bhtwo8$$default;
  BoxParams.prototype.fitContent_61zpoe$ = GridParams.prototype.fitContent_61zpoe$;
  BoxParams.prototype.margin_bhtwo8$ = FlexParams.prototype.margin_bhtwo8$;
  BoxParams.prototype.margins_k1pnzg$ = FlexParams.prototype.margins_k1pnzg$;
  BoxParams.prototype.padding_bhtwo8$ = FlexParams.prototype.padding_bhtwo8$;
  BoxParams.prototype.paddings_k1pnzg$ = FlexParams.prototype.paddings_k1pnzg$;
  BoxParams.prototype.color_isjh78$ = FlexParams.prototype.color_isjh78$;
  BoxParams.prototype.opacity_rh8n64$ = FlexParams.prototype.opacity_rh8n64$;
  BoxParams.prototype.border_sj06fo$ = FlexParams.prototype.border_sj06fo$;
  BoxParams.prototype.borders_1m9jjg$ = FlexParams.prototype.borders_1m9jjg$;
  BoxParams.prototype.radius_bhtwo8$ = FlexParams.prototype.radius_bhtwo8$;
  BoxParams.prototype.radii_a257h8$ = FlexParams.prototype.radii_a257h8$;
  BoxParams.prototype.fontFamily_nw47z0$ = FlexParams.prototype.fontFamily_nw47z0$;
  BoxParams.prototype.fontSize_bhtwo8$ = FlexParams.prototype.fontSize_bhtwo8$;
  BoxParams.prototype.fontWeight_fwmnos$ = FlexParams.prototype.fontWeight_fwmnos$;
  BoxParams.prototype.textDecoration_jcyvho$ = FlexParams.prototype.textDecoration_jcyvho$;
  BoxParams.prototype.lineHeight_bhtwo8$ = FlexParams.prototype.lineHeight_bhtwo8$;
  BoxParams.prototype.letterSpacing_bhtwo8$ = FlexParams.prototype.letterSpacing_bhtwo8$;
  BoxParams.prototype.textAlign_xttfdg$ = FlexParams.prototype.textAlign_xttfdg$;
  BoxParams.prototype.textTransform_buri34$ = FlexParams.prototype.textTransform_buri34$;
  BoxParams.prototype.fontStyle_tz3ah0$ = FlexParams.prototype.fontStyle_tz3ah0$;
  BoxParams.prototype.background_1bxu5o$ = FlexParams.prototype.background_1bxu5o$;
  BoxParams.prototype.zIndex_r75jho$ = FlexParams.prototype.zIndex_r75jho$;
  BoxParams.prototype.position_vgpajw$ = FlexParams.prototype.position_vgpajw$;
  BoxParams.prototype.textShadow_h2dnmw$ = FlexParams.prototype.textShadow_h2dnmw$;
  BoxParams.prototype.boxShadow_h2dnmw$ = FlexParams.prototype.boxShadow_h2dnmw$;
  BoxParams.prototype.css_d8n4vg$ = FlexParams.prototype.css_d8n4vg$;
  BoxParams.prototype.size_5la74k$ = FlexParams.prototype.size_5la74k$;
  BoxParams.prototype.width_5la74k$ = FlexParams.prototype.width_5la74k$;
  BoxParams.prototype.height_5la74k$ = FlexParams.prototype.height_5la74k$;
  BoxParams.prototype.minWidth_5la74k$ = FlexParams.prototype.minWidth_5la74k$;
  BoxParams.prototype.maxWidth_5la74k$ = FlexParams.prototype.maxWidth_5la74k$;
  BoxParams.prototype.minHeight_5la74k$ = FlexParams.prototype.minHeight_5la74k$;
  BoxParams.prototype.maxHeight_5la74k$ = FlexParams.prototype.maxHeight_5la74k$;
  BoxParams.prototype.display_76osno$ = FlexParams.prototype.display_76osno$;
  BoxParams.prototype.verticalAlign_l3swd0$ = FlexParams.prototype.verticalAlign_l3swd0$;
  BoxParams.prototype.overflow_fdwaog$ = FlexParams.prototype.overflow_fdwaog$;
  BoxParams.prototype.overflowX_kajdkc$ = FlexParams.prototype.overflowX_kajdkc$;
  BoxParams.prototype.overflowY_9but3o$ = FlexParams.prototype.overflowY_9but3o$;
  BoxParams.prototype.grid_jhf0yc$ = FlexParams.prototype.grid_jhf0yc$;
  BoxParams.prototype.flex_6xqo6k$ = FlexParams.prototype.flex_6xqo6k$;
  BoxParams.prototype.pseudoClass_3667b1$_0 = FlexParams.prototype.pseudoClass_3667b1$_0;
  BoxParams.prototype.pseudoElement_qsy49e$_0 = FlexParams.prototype.pseudoElement_qsy49e$_0;
  BoxParams.prototype.direction_rkqy8k$ = FlexParams.prototype.direction_rkqy8k$;
  BoxParams.prototype.wrap_jfmmz4$ = FlexParams.prototype.wrap_jfmmz4$;
  BoxParams.prototype.justifyContent_azy89g$ = FlexParams.prototype.justifyContent_azy89g$;
  BoxParams.prototype.alignItems_sx4pdg$ = FlexParams.prototype.alignItems_sx4pdg$;
  BoxParams.prototype.alignContent_ihjoig$ = FlexParams.prototype.alignContent_ihjoig$;
  BoxParams.prototype.columns_ti9a38$ = GridParams.prototype.columns_ti9a38$;
  BoxParams.prototype.rows_ti9a38$ = GridParams.prototype.rows_ti9a38$;
  BoxParams.prototype.autoRows_ti9a38$ = GridParams.prototype.autoRows_ti9a38$;
  BoxParams.prototype.autoColumns_ti9a38$ = GridParams.prototype.autoColumns_ti9a38$;
  BoxParams.prototype.autoFlow_9l1thg$ = GridParams.prototype.autoFlow_9l1thg$;
  BoxParams.prototype.areas_lft61g$ = GridParams.prototype.areas_lft61g$;
  BoxParams.prototype.columnGap_bhtwo8$ = GridParams.prototype.columnGap_bhtwo8$;
  BoxParams.prototype.rowGap_bhtwo8$ = GridParams.prototype.rowGap_bhtwo8$;
  BoxParams.prototype.gap_bhtwo8$ = GridParams.prototype.gap_bhtwo8$;
  StyleParamsImpl.prototype.invoke_qkhqzy$ = BoxParams.prototype.invoke_qkhqzy$;
  StyleParamsImpl.prototype.invoke_4my6up$ = BoxParams.prototype.invoke_4my6up$;
  StyleParamsImpl.prototype.invoke_5yoziz$ = BoxParams.prototype.invoke_5yoziz$;
  StyleParamsImpl.prototype.invoke_tdl3c$ = BoxParams.prototype.invoke_tdl3c$;
  StyleParamsImpl.prototype.margin_bcpvvc$ = BoxParams.prototype.margin_bcpvvc$;
  StyleParamsImpl.prototype.margin_bhtwo8$$default = BoxParams.prototype.margin_bhtwo8$$default;
  StyleParamsImpl.prototype.margins_ptb4s1$ = BoxParams.prototype.margins_ptb4s1$;
  StyleParamsImpl.prototype.margins_k1pnzg$$default = BoxParams.prototype.margins_k1pnzg$$default;
  StyleParamsImpl.prototype.padding_bcpvvc$ = BoxParams.prototype.padding_bcpvvc$;
  StyleParamsImpl.prototype.padding_bhtwo8$$default = BoxParams.prototype.padding_bhtwo8$$default;
  StyleParamsImpl.prototype.paddings_ptb4s1$ = BoxParams.prototype.paddings_ptb4s1$;
  StyleParamsImpl.prototype.paddings_k1pnzg$$default = BoxParams.prototype.paddings_k1pnzg$$default;
  StyleParamsImpl.prototype.color_jl9ed9$ = BoxParams.prototype.color_jl9ed9$;
  StyleParamsImpl.prototype.color_isjh78$$default = BoxParams.prototype.color_isjh78$$default;
  StyleParamsImpl.prototype.opacity_y3j6id$ = BoxParams.prototype.opacity_y3j6id$;
  StyleParamsImpl.prototype.opacity_rh8n64$$default = BoxParams.prototype.opacity_rh8n64$$default;
  StyleParamsImpl.prototype.border_4a22k0$ = BoxParams.prototype.border_4a22k0$;
  StyleParamsImpl.prototype.border_sj06fo$$default = BoxParams.prototype.border_sj06fo$$default;
  StyleParamsImpl.prototype.borders_9iuei5$ = BoxParams.prototype.borders_9iuei5$;
  StyleParamsImpl.prototype.borders_1m9jjg$$default = BoxParams.prototype.borders_1m9jjg$$default;
  StyleParamsImpl.prototype.radius_bcpvvc$ = BoxParams.prototype.radius_bcpvvc$;
  StyleParamsImpl.prototype.radius_bhtwo8$$default = BoxParams.prototype.radius_bhtwo8$$default;
  StyleParamsImpl.prototype.radii_2h0nmj$ = BoxParams.prototype.radii_2h0nmj$;
  StyleParamsImpl.prototype.radii_a257h8$$default = BoxParams.prototype.radii_a257h8$$default;
  StyleParamsImpl.prototype.fontFamily_emhhv9$ = BoxParams.prototype.fontFamily_emhhv9$;
  StyleParamsImpl.prototype.fontFamily_nw47z0$$default = BoxParams.prototype.fontFamily_nw47z0$$default;
  StyleParamsImpl.prototype.fontSize_bcpvvc$ = BoxParams.prototype.fontSize_bcpvvc$;
  StyleParamsImpl.prototype.fontSize_bhtwo8$$default = BoxParams.prototype.fontSize_bhtwo8$$default;
  StyleParamsImpl.prototype.fontWeight_wyjwgc$ = BoxParams.prototype.fontWeight_wyjwgc$;
  StyleParamsImpl.prototype.fontWeight_fwmnos$$default = BoxParams.prototype.fontWeight_fwmnos$$default;
  StyleParamsImpl.prototype.textDecoration_jcyvho$$default = BoxParams.prototype.textDecoration_jcyvho$$default;
  StyleParamsImpl.prototype.textDecoration_cogaie$ = BoxParams.prototype.textDecoration_cogaie$;
  StyleParamsImpl.prototype.lineHeight_bcpvvc$ = BoxParams.prototype.lineHeight_bcpvvc$;
  StyleParamsImpl.prototype.lineHeight_bhtwo8$$default = BoxParams.prototype.lineHeight_bhtwo8$$default;
  StyleParamsImpl.prototype.letterSpacing_bcpvvc$ = BoxParams.prototype.letterSpacing_bcpvvc$;
  StyleParamsImpl.prototype.letterSpacing_bhtwo8$$default = BoxParams.prototype.letterSpacing_bhtwo8$$default;
  StyleParamsImpl.prototype.textAlign_beucyh$ = BoxParams.prototype.textAlign_beucyh$;
  StyleParamsImpl.prototype.textAlign_xttfdg$$default = BoxParams.prototype.textAlign_xttfdg$$default;
  StyleParamsImpl.prototype.textTransform_4zs19q$ = BoxParams.prototype.textTransform_4zs19q$;
  StyleParamsImpl.prototype.textTransform_buri34$$default = BoxParams.prototype.textTransform_buri34$$default;
  StyleParamsImpl.prototype.fontStyle_d5s4tt$ = BoxParams.prototype.fontStyle_d5s4tt$;
  StyleParamsImpl.prototype.fontStyle_tz3ah0$$default = BoxParams.prototype.fontStyle_tz3ah0$$default;
  StyleParamsImpl.prototype.background_f5fcq6$ = BoxParams.prototype.background_f5fcq6$;
  StyleParamsImpl.prototype.background_1bxu5o$$default = BoxParams.prototype.background_1bxu5o$$default;
  StyleParamsImpl.prototype.zIndex_yiflju$ = BoxParams.prototype.zIndex_yiflju$;
  StyleParamsImpl.prototype.zIndex_r75jho$$default = BoxParams.prototype.zIndex_r75jho$$default;
  StyleParamsImpl.prototype.position_wp9r2r$ = BoxParams.prototype.position_wp9r2r$;
  StyleParamsImpl.prototype.position_vgpajw$$default = BoxParams.prototype.position_vgpajw$$default;
  StyleParamsImpl.prototype.textShadow_ihm9h8$ = BoxParams.prototype.textShadow_ihm9h8$;
  StyleParamsImpl.prototype.textShadow_h2dnmw$$default = BoxParams.prototype.textShadow_h2dnmw$$default;
  StyleParamsImpl.prototype.boxShadow_ihm9h8$ = BoxParams.prototype.boxShadow_ihm9h8$;
  StyleParamsImpl.prototype.boxShadow_h2dnmw$$default = BoxParams.prototype.boxShadow_h2dnmw$$default;
  StyleParamsImpl.prototype.css_61zpoe$ = BoxParams.prototype.css_61zpoe$;
  StyleParamsImpl.prototype.css_d8n4vg$$default = BoxParams.prototype.css_d8n4vg$$default;
  StyleParamsImpl.prototype.size_wpghq5$ = BoxParams.prototype.size_wpghq5$;
  StyleParamsImpl.prototype.size_5la74k$$default = BoxParams.prototype.size_5la74k$$default;
  StyleParamsImpl.prototype.width_wpghq5$ = BoxParams.prototype.width_wpghq5$;
  StyleParamsImpl.prototype.width_5la74k$$default = BoxParams.prototype.width_5la74k$$default;
  StyleParamsImpl.prototype.height_wpghq5$ = BoxParams.prototype.height_wpghq5$;
  StyleParamsImpl.prototype.height_5la74k$$default = BoxParams.prototype.height_5la74k$$default;
  StyleParamsImpl.prototype.minWidth_wpghq5$ = BoxParams.prototype.minWidth_wpghq5$;
  StyleParamsImpl.prototype.minWidth_5la74k$$default = BoxParams.prototype.minWidth_5la74k$$default;
  StyleParamsImpl.prototype.maxWidth_wpghq5$ = BoxParams.prototype.maxWidth_wpghq5$;
  StyleParamsImpl.prototype.maxWidth_5la74k$$default = BoxParams.prototype.maxWidth_5la74k$$default;
  StyleParamsImpl.prototype.minHeight_wpghq5$ = BoxParams.prototype.minHeight_wpghq5$;
  StyleParamsImpl.prototype.minHeight_5la74k$$default = BoxParams.prototype.minHeight_5la74k$$default;
  StyleParamsImpl.prototype.maxHeight_wpghq5$ = BoxParams.prototype.maxHeight_wpghq5$;
  StyleParamsImpl.prototype.maxHeight_5la74k$$default = BoxParams.prototype.maxHeight_5la74k$$default;
  StyleParamsImpl.prototype.display_1gh9wc$ = BoxParams.prototype.display_1gh9wc$;
  StyleParamsImpl.prototype.display_76osno$$default = BoxParams.prototype.display_76osno$$default;
  StyleParamsImpl.prototype.verticalAlign_qe4rxr$ = BoxParams.prototype.verticalAlign_qe4rxr$;
  StyleParamsImpl.prototype.verticalAlign_l3swd0$$default = BoxParams.prototype.verticalAlign_l3swd0$$default;
  StyleParamsImpl.prototype.overflow_c5t1z2$ = BoxParams.prototype.overflow_c5t1z2$;
  StyleParamsImpl.prototype.overflow_fdwaog$$default = BoxParams.prototype.overflow_fdwaog$$default;
  StyleParamsImpl.prototype.overflowX_1qx2a0$ = BoxParams.prototype.overflowX_1qx2a0$;
  StyleParamsImpl.prototype.overflowX_kajdkc$$default = BoxParams.prototype.overflowX_kajdkc$$default;
  StyleParamsImpl.prototype.overflowY_iu6k55$ = BoxParams.prototype.overflowY_iu6k55$;
  StyleParamsImpl.prototype.overflowY_9but3o$$default = BoxParams.prototype.overflowY_9but3o$$default;
  StyleParamsImpl.prototype.grid_5hf0eu$ = BoxParams.prototype.grid_5hf0eu$;
  StyleParamsImpl.prototype.grid_jhf0yc$$default = BoxParams.prototype.grid_jhf0yc$$default;
  StyleParamsImpl.prototype.flex_e69mls$ = BoxParams.prototype.flex_e69mls$;
  StyleParamsImpl.prototype.flex_6xqo6k$$default = BoxParams.prototype.flex_6xqo6k$$default;
  StyleParamsImpl.prototype.pseudoClass_dvv9uz$_0 = FlexParams.prototype.pseudoClass_dvv9uz$_0;
  StyleParamsImpl.prototype.pseudoClass_3667b1$_0 = FlexParams.prototype.pseudoClass_3667b1$_0;
  StyleParamsImpl.prototype.active_xighi7$ = BoxParams.prototype.active_xighi7$;
  StyleParamsImpl.prototype.anyLink_xighi7$ = BoxParams.prototype.anyLink_xighi7$;
  StyleParamsImpl.prototype.blank_xighi7$ = BoxParams.prototype.blank_xighi7$;
  StyleParamsImpl.prototype.checked_xighi7$ = BoxParams.prototype.checked_xighi7$;
  StyleParamsImpl.prototype.current_xighi7$ = BoxParams.prototype.current_xighi7$;
  StyleParamsImpl.prototype.default_xighi7$ = BoxParams.prototype.default_xighi7$;
  StyleParamsImpl.prototype.disabled_xighi7$ = BoxParams.prototype.disabled_xighi7$;
  StyleParamsImpl.prototype.empty_xighi7$ = BoxParams.prototype.empty_xighi7$;
  StyleParamsImpl.prototype.enabled_xighi7$ = BoxParams.prototype.enabled_xighi7$;
  StyleParamsImpl.prototype.first_xighi7$ = BoxParams.prototype.first_xighi7$;
  StyleParamsImpl.prototype.firstChild_xighi7$ = BoxParams.prototype.firstChild_xighi7$;
  StyleParamsImpl.prototype.firstOfType_xighi7$ = BoxParams.prototype.firstOfType_xighi7$;
  StyleParamsImpl.prototype.fullscreen_xighi7$ = BoxParams.prototype.fullscreen_xighi7$;
  StyleParamsImpl.prototype.focus_xighi7$ = BoxParams.prototype.focus_xighi7$;
  StyleParamsImpl.prototype.focusVisible_xighi7$ = BoxParams.prototype.focusVisible_xighi7$;
  StyleParamsImpl.prototype.focusWithin_xighi7$ = BoxParams.prototype.focusWithin_xighi7$;
  StyleParamsImpl.prototype.future_xighi7$ = BoxParams.prototype.future_xighi7$;
  StyleParamsImpl.prototype.hover_xighi7$ = BoxParams.prototype.hover_xighi7$;
  StyleParamsImpl.prototype.indeterminate_xighi7$ = BoxParams.prototype.indeterminate_xighi7$;
  StyleParamsImpl.prototype.inRange_xighi7$ = BoxParams.prototype.inRange_xighi7$;
  StyleParamsImpl.prototype.invalid_xighi7$ = BoxParams.prototype.invalid_xighi7$;
  StyleParamsImpl.prototype.lastChild_xighi7$ = BoxParams.prototype.lastChild_xighi7$;
  StyleParamsImpl.prototype.lastOfType_xighi7$ = BoxParams.prototype.lastOfType_xighi7$;
  StyleParamsImpl.prototype.left_xighi7$ = BoxParams.prototype.left_xighi7$;
  StyleParamsImpl.prototype.link_xighi7$ = BoxParams.prototype.link_xighi7$;
  StyleParamsImpl.prototype.localLink_xighi7$ = BoxParams.prototype.localLink_xighi7$;
  StyleParamsImpl.prototype.onlyChild_xighi7$ = BoxParams.prototype.onlyChild_xighi7$;
  StyleParamsImpl.prototype.onlyOfType_xighi7$ = BoxParams.prototype.onlyOfType_xighi7$;
  StyleParamsImpl.prototype.optional_xighi7$ = BoxParams.prototype.optional_xighi7$;
  StyleParamsImpl.prototype.outOfRange_xighi7$ = BoxParams.prototype.outOfRange_xighi7$;
  StyleParamsImpl.prototype.readOnly_xighi7$ = BoxParams.prototype.readOnly_xighi7$;
  StyleParamsImpl.prototype.readWrite_xighi7$ = BoxParams.prototype.readWrite_xighi7$;
  StyleParamsImpl.prototype.required_xighi7$ = BoxParams.prototype.required_xighi7$;
  StyleParamsImpl.prototype.right_xighi7$ = BoxParams.prototype.right_xighi7$;
  StyleParamsImpl.prototype.root_xighi7$ = BoxParams.prototype.root_xighi7$;
  StyleParamsImpl.prototype.scope_xighi7$ = BoxParams.prototype.scope_xighi7$;
  StyleParamsImpl.prototype.target_xighi7$ = BoxParams.prototype.target_xighi7$;
  StyleParamsImpl.prototype.valid_xighi7$ = BoxParams.prototype.valid_xighi7$;
  StyleParamsImpl.prototype.visited_xighi7$ = BoxParams.prototype.visited_xighi7$;
  StyleParamsImpl.prototype.dir_qlrppv$ = BoxParams.prototype.dir_qlrppv$;
  StyleParamsImpl.prototype.lang_qlrppv$ = BoxParams.prototype.lang_qlrppv$;
  StyleParamsImpl.prototype.not_qlrppv$ = BoxParams.prototype.not_qlrppv$;
  StyleParamsImpl.prototype.nthChild_qlrppv$ = BoxParams.prototype.nthChild_qlrppv$;
  StyleParamsImpl.prototype.nthLastChild_qlrppv$ = BoxParams.prototype.nthLastChild_qlrppv$;
  StyleParamsImpl.prototype.nthLastOfType_qlrppv$ = BoxParams.prototype.nthLastOfType_qlrppv$;
  StyleParamsImpl.prototype.nthOfType_qlrppv$ = BoxParams.prototype.nthOfType_qlrppv$;
  StyleParamsImpl.prototype.children_qlrppv$ = BoxParams.prototype.children_qlrppv$;
  StyleParamsImpl.prototype.pseudoElement_iaoh6o$_0 = FlexParams.prototype.pseudoElement_iaoh6o$_0;
  StyleParamsImpl.prototype.pseudoElement_qsy49e$_0 = FlexParams.prototype.pseudoElement_qsy49e$_0;
  StyleParamsImpl.prototype.after_xighi7$ = BoxParams.prototype.after_xighi7$;
  StyleParamsImpl.prototype.before_xighi7$ = BoxParams.prototype.before_xighi7$;
  StyleParamsImpl.prototype.firstLetter_xighi7$ = BoxParams.prototype.firstLetter_xighi7$;
  StyleParamsImpl.prototype.firstLine_xighi7$ = BoxParams.prototype.firstLine_xighi7$;
  StyleParamsImpl.prototype.grammarError_xighi7$ = BoxParams.prototype.grammarError_xighi7$;
  StyleParamsImpl.prototype.marker_xighi7$ = BoxParams.prototype.marker_xighi7$;
  StyleParamsImpl.prototype.selection_xighi7$ = BoxParams.prototype.selection_xighi7$;
  StyleParamsImpl.prototype.spellingError_xighi7$ = BoxParams.prototype.spellingError_xighi7$;
  StyleParamsImpl.prototype.direction_la6ffj$ = BoxParams.prototype.direction_la6ffj$;
  StyleParamsImpl.prototype.direction_rkqy8k$$default = BoxParams.prototype.direction_rkqy8k$$default;
  StyleParamsImpl.prototype.wrap_plz3p2$ = BoxParams.prototype.wrap_plz3p2$;
  StyleParamsImpl.prototype.wrap_jfmmz4$$default = BoxParams.prototype.wrap_jfmmz4$$default;
  StyleParamsImpl.prototype.justifyContent_vlnw1j$ = BoxParams.prototype.justifyContent_vlnw1j$;
  StyleParamsImpl.prototype.justifyContent_azy89g$$default = BoxParams.prototype.justifyContent_azy89g$$default;
  StyleParamsImpl.prototype.alignItems_tsd917$ = BoxParams.prototype.alignItems_tsd917$;
  StyleParamsImpl.prototype.alignItems_sx4pdg$$default = BoxParams.prototype.alignItems_sx4pdg$$default;
  StyleParamsImpl.prototype.alignContent_69dv8$ = BoxParams.prototype.alignContent_69dv8$;
  StyleParamsImpl.prototype.alignContent_ihjoig$$default = BoxParams.prototype.alignContent_ihjoig$$default;
  StyleParamsImpl.prototype.columns_quywoh$ = BoxParams.prototype.columns_quywoh$;
  StyleParamsImpl.prototype.columns_ti9a38$$default = BoxParams.prototype.columns_ti9a38$$default;
  StyleParamsImpl.prototype.rows_quywoh$ = BoxParams.prototype.rows_quywoh$;
  StyleParamsImpl.prototype.rows_ti9a38$$default = BoxParams.prototype.rows_ti9a38$$default;
  StyleParamsImpl.prototype.autoRows_quywoh$ = BoxParams.prototype.autoRows_quywoh$;
  StyleParamsImpl.prototype.autoRows_ti9a38$$default = BoxParams.prototype.autoRows_ti9a38$$default;
  StyleParamsImpl.prototype.autoColumns_quywoh$ = BoxParams.prototype.autoColumns_quywoh$;
  StyleParamsImpl.prototype.autoColumns_ti9a38$$default = BoxParams.prototype.autoColumns_ti9a38$$default;
  StyleParamsImpl.prototype.autoFlow_bi2803$ = BoxParams.prototype.autoFlow_bi2803$;
  StyleParamsImpl.prototype.autoFlow_9l1thg$$default = BoxParams.prototype.autoFlow_9l1thg$$default;
  StyleParamsImpl.prototype.areas_owx8eh$ = BoxParams.prototype.areas_owx8eh$;
  StyleParamsImpl.prototype.areas_lft61g$$default = BoxParams.prototype.areas_lft61g$$default;
  StyleParamsImpl.prototype.columnGap_bcpvvc$ = BoxParams.prototype.columnGap_bcpvvc$;
  StyleParamsImpl.prototype.columnGap_bhtwo8$$default = BoxParams.prototype.columnGap_bhtwo8$$default;
  StyleParamsImpl.prototype.rowGap_bcpvvc$ = BoxParams.prototype.rowGap_bcpvvc$;
  StyleParamsImpl.prototype.rowGap_bhtwo8$$default = BoxParams.prototype.rowGap_bhtwo8$$default;
  StyleParamsImpl.prototype.gap_bcpvvc$ = BoxParams.prototype.gap_bcpvvc$;
  StyleParamsImpl.prototype.gap_bhtwo8$$default = BoxParams.prototype.gap_bhtwo8$$default;
  StyleParamsImpl.prototype.fitContent_61zpoe$ = BoxParams.prototype.fitContent_61zpoe$;
  StyleParamsImpl.prototype.margin_bhtwo8$ = BoxParams.prototype.margin_bhtwo8$;
  StyleParamsImpl.prototype.margins_k1pnzg$ = BoxParams.prototype.margins_k1pnzg$;
  StyleParamsImpl.prototype.padding_bhtwo8$ = BoxParams.prototype.padding_bhtwo8$;
  StyleParamsImpl.prototype.paddings_k1pnzg$ = BoxParams.prototype.paddings_k1pnzg$;
  StyleParamsImpl.prototype.color_isjh78$ = BoxParams.prototype.color_isjh78$;
  StyleParamsImpl.prototype.opacity_rh8n64$ = BoxParams.prototype.opacity_rh8n64$;
  StyleParamsImpl.prototype.border_sj06fo$ = BoxParams.prototype.border_sj06fo$;
  StyleParamsImpl.prototype.borders_1m9jjg$ = BoxParams.prototype.borders_1m9jjg$;
  StyleParamsImpl.prototype.radius_bhtwo8$ = BoxParams.prototype.radius_bhtwo8$;
  StyleParamsImpl.prototype.radii_a257h8$ = BoxParams.prototype.radii_a257h8$;
  StyleParamsImpl.prototype.fontFamily_nw47z0$ = BoxParams.prototype.fontFamily_nw47z0$;
  StyleParamsImpl.prototype.fontSize_bhtwo8$ = BoxParams.prototype.fontSize_bhtwo8$;
  StyleParamsImpl.prototype.fontWeight_fwmnos$ = BoxParams.prototype.fontWeight_fwmnos$;
  StyleParamsImpl.prototype.textDecoration_jcyvho$ = BoxParams.prototype.textDecoration_jcyvho$;
  StyleParamsImpl.prototype.lineHeight_bhtwo8$ = BoxParams.prototype.lineHeight_bhtwo8$;
  StyleParamsImpl.prototype.letterSpacing_bhtwo8$ = BoxParams.prototype.letterSpacing_bhtwo8$;
  StyleParamsImpl.prototype.textAlign_xttfdg$ = BoxParams.prototype.textAlign_xttfdg$;
  StyleParamsImpl.prototype.textTransform_buri34$ = BoxParams.prototype.textTransform_buri34$;
  StyleParamsImpl.prototype.fontStyle_tz3ah0$ = BoxParams.prototype.fontStyle_tz3ah0$;
  StyleParamsImpl.prototype.background_1bxu5o$ = BoxParams.prototype.background_1bxu5o$;
  StyleParamsImpl.prototype.zIndex_r75jho$ = BoxParams.prototype.zIndex_r75jho$;
  StyleParamsImpl.prototype.position_vgpajw$ = BoxParams.prototype.position_vgpajw$;
  StyleParamsImpl.prototype.textShadow_h2dnmw$ = BoxParams.prototype.textShadow_h2dnmw$;
  StyleParamsImpl.prototype.boxShadow_h2dnmw$ = BoxParams.prototype.boxShadow_h2dnmw$;
  StyleParamsImpl.prototype.css_d8n4vg$ = BoxParams.prototype.css_d8n4vg$;
  StyleParamsImpl.prototype.size_5la74k$ = BoxParams.prototype.size_5la74k$;
  StyleParamsImpl.prototype.width_5la74k$ = BoxParams.prototype.width_5la74k$;
  StyleParamsImpl.prototype.height_5la74k$ = BoxParams.prototype.height_5la74k$;
  StyleParamsImpl.prototype.minWidth_5la74k$ = BoxParams.prototype.minWidth_5la74k$;
  StyleParamsImpl.prototype.maxWidth_5la74k$ = BoxParams.prototype.maxWidth_5la74k$;
  StyleParamsImpl.prototype.minHeight_5la74k$ = BoxParams.prototype.minHeight_5la74k$;
  StyleParamsImpl.prototype.maxHeight_5la74k$ = BoxParams.prototype.maxHeight_5la74k$;
  StyleParamsImpl.prototype.display_76osno$ = BoxParams.prototype.display_76osno$;
  StyleParamsImpl.prototype.verticalAlign_l3swd0$ = BoxParams.prototype.verticalAlign_l3swd0$;
  StyleParamsImpl.prototype.overflow_fdwaog$ = BoxParams.prototype.overflow_fdwaog$;
  StyleParamsImpl.prototype.overflowX_kajdkc$ = BoxParams.prototype.overflowX_kajdkc$;
  StyleParamsImpl.prototype.overflowY_9but3o$ = BoxParams.prototype.overflowY_9but3o$;
  StyleParamsImpl.prototype.grid_jhf0yc$ = BoxParams.prototype.grid_jhf0yc$;
  StyleParamsImpl.prototype.flex_6xqo6k$ = BoxParams.prototype.flex_6xqo6k$;
  StyleParamsImpl.prototype.pseudoClass_3667b1$_0 = BoxParams.prototype.pseudoClass_3667b1$_0;
  StyleParamsImpl.prototype.pseudoElement_qsy49e$_0 = BoxParams.prototype.pseudoElement_qsy49e$_0;
  StyleParamsImpl.prototype.direction_rkqy8k$ = BoxParams.prototype.direction_rkqy8k$;
  StyleParamsImpl.prototype.wrap_jfmmz4$ = BoxParams.prototype.wrap_jfmmz4$;
  StyleParamsImpl.prototype.justifyContent_azy89g$ = BoxParams.prototype.justifyContent_azy89g$;
  StyleParamsImpl.prototype.alignItems_sx4pdg$ = BoxParams.prototype.alignItems_sx4pdg$;
  StyleParamsImpl.prototype.alignContent_ihjoig$ = BoxParams.prototype.alignContent_ihjoig$;
  StyleParamsImpl.prototype.columns_ti9a38$ = BoxParams.prototype.columns_ti9a38$;
  StyleParamsImpl.prototype.rows_ti9a38$ = BoxParams.prototype.rows_ti9a38$;
  StyleParamsImpl.prototype.autoRows_ti9a38$ = BoxParams.prototype.autoRows_ti9a38$;
  StyleParamsImpl.prototype.autoColumns_ti9a38$ = BoxParams.prototype.autoColumns_ti9a38$;
  StyleParamsImpl.prototype.autoFlow_9l1thg$ = BoxParams.prototype.autoFlow_9l1thg$;
  StyleParamsImpl.prototype.areas_lft61g$ = BoxParams.prototype.areas_lft61g$;
  StyleParamsImpl.prototype.columnGap_bhtwo8$ = BoxParams.prototype.columnGap_bhtwo8$;
  StyleParamsImpl.prototype.rowGap_bhtwo8$ = BoxParams.prototype.rowGap_bhtwo8$;
  StyleParamsImpl.prototype.gap_bhtwo8$ = BoxParams.prototype.gap_bhtwo8$;
  backgroundBlendModeKey = 'background-blend-mode: ';
  backgroundImageKey = 'background-image: ';
  backgroundPositionKey = 'background-position: ';
  backgroundSizeKey = 'background-size: ';
  backgroundRepeatKey = 'background-repeat: ';
  backgroundOriginKey = 'background-origin: ';
  backgroundClipKey = 'background-clip: ';
  backgroundAttachmentKey = 'background-attachment: ';
  backgroundColorKey = 'background-color: ';
  borderWidthKey = 'border-width: ';
  borderStyleKey = 'border-style: ';
  borderColorKey = 'border-color: ';
  borderTopWidthKey = 'border-top-width: ';
  borderTopStyleKey = 'border-top-style: ';
  borderTopColorKey = 'border-top-color: ';
  borderRightWidthKey = 'border-right-width: ';
  borderRightStyleKey = 'border-right-style: ';
  borderRightColorKey = 'border-right-color: ';
  borderBottomWidthKey = 'border-bottom-width: ';
  borderBottomStyleKey = 'border-bottom-style: ';
  borderBottomColorKey = 'border-bottom-color: ';
  borderLeftWidthKey = 'border-left-width: ';
  borderLeftStyleKey = 'border-left-style: ';
  borderLeftColorKey = 'border-left-color: ';
  borderRadiusKey = 'border-radius: ';
  borderTopLeftRadiusKey = 'border-top-left-radius: ';
  borderTopRightRadiusKey = 'border-top-right-radius: ';
  borderBottomRightRadiusKey = 'border-bottom-right-radius: ';
  borderBottomLeftRadiusKey = 'border-bottom-left-radius: ';
  colorKey = 'color: ';
  opacityKey = 'opacity: ';
  gridTemplateColumnsKey = 'grid-template-columns: ';
  gridTemplateRowsKey = 'grid-template-rows: ';
  gridTemplateAutoRowsKey = 'grid-auto-rows: ';
  gridTemplateAutoColumnsKey = 'grid-auto-columns: ';
  gridTemplateAreasKey = 'grid-template-areas: ';
  rowGapKey = 'row-gap: ';
  columnGapKey = 'column-gap: ';
  widthKey = 'width: ';
  heightKey = 'height: ';
  minWidthKey = 'min-width: ';
  maxWidthKey = 'max-width: ';
  minHeightKey = 'min-height: ';
  maxHeightKey = 'max-height: ';
  cssDelimiter = ';';
  positionKey = 'position: ';
  textShadowKey = 'text-shadow: ';
  boxShadowKey = 'box-shadow: ';
  marginKey = 'margin: ';
  marginTopKey = 'margin-top: ';
  marginRightKey = 'margin-right: ';
  marginBottomKey = 'margin-bottom: ';
  marginLeftKey = 'margin-left: ';
  paddingKey = 'padding: ';
  paddingTopKey = 'padding-top: ';
  paddingRightKey = 'padding-right: ';
  paddingBottomKey = 'padding-bottom: ';
  paddingLeftKey = 'padding-left: ';
  fontSizeKey = 'font-size: ';
  letterSpacingKey = 'letter-spacing: ';
  lineHeightKey = 'line-height: ';
  charsLength = 52;
  return _;
}));

//# sourceMappingURL=fritz2-styling.js.map
