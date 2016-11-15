"use strict";

var nil = "patch me with nil";

var theGlobalObject = this;

function SM(n,m,s){this.name=n; this.isMutable=m; this.isSynthetic=s; };

function MM(n,sy,src){this.name=n; this.isSynthetic=sy; this.source=src; };

var mixins = new (function () {
	this.$RuntimeForV8 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for RuntimeForV8";
		this.name = "RuntimeForV8";
		this.header = "RuntimeForV8 packageUsing: manifest = (\r(* Provides the platform object for Newspeak on Dart.\r\rCopyright 2012 Google Inc.\rCopyright 2013 Ryan Macnak\r\rLicensed under the Apache License, Version 2.0 (the ''License''); you may not use this file except in compliance with the License.  You may obtain a copy of the License at  http://www.apache.org/licenses/LICENSE-2.0 *)|\r	Kernel = manifest KernelForV8.\r	Aliens = manifest AliensForV8.\r	Collections = manifest Collections.\r	Graphics = manifest GraphicsForHTML5.\r	Hopscotch = manifest HopscotchForHTML5.\r	(*Mirrors = manifest MirrorsForV8.\r	MirrorGroups = manifest MirrorGroups.*)\r	Streams = manifest Streams.\r	Time = manifest TimeForV8.\r	\r	(*CombinatorialParsing = manifest CombinatorialParsing.\r	NewspeakGrammar = manifest NewspeakGrammar.\r	NewspeakASTs = manifest NewspeakASTs.\r	NewspeakParsing = manifest NewspeakParsing.\r	\r	JavascriptGeneration = manifest JavascriptGeneration.\r	Compilation =  manifest Newspeak2V8Compilation mixinApply: manifest NewspeakCompilation.\r	*)\r	accept16px = manifest accept16px.\r	cancel16px = manifest cancel16px.\r	disclosureClosedImage = manifest disclosureClosedImage.\r	disclosureTransitionImage = manifest disclosureTransitionImage.\r	disclosureOpenImage = manifest disclosureOpenImage.\r|)";
		this.slots = [
			new SM("Kernel", false, false),
			new SM("Aliens", false, false),
			new SM("Collections", false, false),
			new SM("Graphics", false, false),
			new SM("Hopscotch", false, false),
			new SM("Streams", false, false),
			new SM("Time", false, false),
			new SM("accept16px", false, false),
			new SM("cancel16px", false, false),
			new SM("disclosureClosedImage", false, false),
			new SM("disclosureTransitionImage", false, false),
			new SM("disclosureOpenImage", false, false),
			new SM("RuntimeForV8`Platform", true, true)
		];
		this.methods = [
			new MM("superInit`RuntimeForV8", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("using:", false, "using: vmmirror = (\r	Object enclosingObject augmentPrototypes.\r	^Platform usingVmMirror: vmmirror\r)"),
			new MM("Platform", true, null),
			new MM("Kernel", true, null),
			new MM("setOnce`Kernel:", true, null),
			new MM("Aliens", true, null),
			new MM("setOnce`Aliens:", true, null),
			new MM("Collections", true, null),
			new MM("setOnce`Collections:", true, null),
			new MM("Graphics", true, null),
			new MM("setOnce`Graphics:", true, null),
			new MM("Hopscotch", true, null),
			new MM("setOnce`Hopscotch:", true, null),
			new MM("Streams", true, null),
			new MM("setOnce`Streams:", true, null),
			new MM("Time", true, null),
			new MM("setOnce`Time:", true, null),
			new MM("accept16px", true, null),
			new MM("setOnce`accept16px:", true, null),
			new MM("cancel16px", true, null),
			new MM("setOnce`cancel16px:", true, null),
			new MM("disclosureClosedImage", true, null),
			new MM("setOnce`disclosureClosedImage:", true, null),
			new MM("disclosureTransitionImage", true, null),
			new MM("setOnce`disclosureTransitionImage:", true, null),
			new MM("disclosureOpenImage", true, null),
			new MM("setOnce`disclosureOpenImage:", true, null),
			new MM("RuntimeForV8`Platform", true, null),
			new MM("RuntimeForV8`Platform:", true, null)
		];
		this.nestedClasses = ["RuntimeForV8`Platform"];
		this.applications = [];
		this.$superInit$RuntimeForV8 = (function ($manifest) {
			var self = this;
			self.$super$RuntimeForV8.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($manifest) {
			var self = this;
			self.$superInit$RuntimeForV8($manifest);
			self.$setOnce$Kernel$($manifest.$KernelForV8());
			self.$setOnce$Aliens$($manifest.$AliensForV8());
			self.$setOnce$Collections$($manifest.$Collections());
			self.$setOnce$Graphics$($manifest.$GraphicsForHTML5());
			self.$setOnce$Hopscotch$($manifest.$HopscotchForHTML5());
			self.$setOnce$Streams$($manifest.$Streams());
			self.$setOnce$Time$($manifest.$TimeForV8());
			self.$setOnce$accept16px$($manifest.$accept16px());
			self.$setOnce$cancel16px$($manifest.$cancel16px());
			self.$setOnce$disclosureClosedImage$($manifest.$disclosureClosedImage());
			self.$setOnce$disclosureTransitionImage$($manifest.$disclosureTransitionImage());
			self.$setOnce$disclosureOpenImage$($manifest.$disclosureOpenImage());
			return self;
		});
		this.$using$ = (function ($vmmirror) {
			var self = this;
			self.$Object().$enclosingObject().$augmentPrototypes();
			return self.$Platform().$usingVmMirror$($vmmirror);
		});
		this.$Platform = (function () {
			if (nil === this.$RuntimeForV8$Platform$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$RuntimeForV8);
				var mixin = this.$RuntimeForV8$Platform;
				this.$RuntimeForV8$Platform$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$RuntimeForV8$Platform$slot;
		});
		this.$Kernel = (function () {
			return this.$Kernel$slot;
		});
		this.$setOnce$Kernel$ = (function (v) {
			this.$Kernel$slot = v;
			return this;
		});
		this.$Aliens = (function () {
			return this.$Aliens$slot;
		});
		this.$setOnce$Aliens$ = (function (v) {
			this.$Aliens$slot = v;
			return this;
		});
		this.$Collections = (function () {
			return this.$Collections$slot;
		});
		this.$setOnce$Collections$ = (function (v) {
			this.$Collections$slot = v;
			return this;
		});
		this.$Graphics = (function () {
			return this.$Graphics$slot;
		});
		this.$setOnce$Graphics$ = (function (v) {
			this.$Graphics$slot = v;
			return this;
		});
		this.$Hopscotch = (function () {
			return this.$Hopscotch$slot;
		});
		this.$setOnce$Hopscotch$ = (function (v) {
			this.$Hopscotch$slot = v;
			return this;
		});
		this.$Streams = (function () {
			return this.$Streams$slot;
		});
		this.$setOnce$Streams$ = (function (v) {
			this.$Streams$slot = v;
			return this;
		});
		this.$Time = (function () {
			return this.$Time$slot;
		});
		this.$setOnce$Time$ = (function (v) {
			this.$Time$slot = v;
			return this;
		});
		this.$accept16px = (function () {
			return this.$accept16px$slot;
		});
		this.$setOnce$accept16px$ = (function (v) {
			this.$accept16px$slot = v;
			return this;
		});
		this.$cancel16px = (function () {
			return this.$cancel16px$slot;
		});
		this.$setOnce$cancel16px$ = (function (v) {
			this.$cancel16px$slot = v;
			return this;
		});
		this.$disclosureClosedImage = (function () {
			return this.$disclosureClosedImage$slot;
		});
		this.$setOnce$disclosureClosedImage$ = (function (v) {
			this.$disclosureClosedImage$slot = v;
			return this;
		});
		this.$disclosureTransitionImage = (function () {
			return this.$disclosureTransitionImage$slot;
		});
		this.$setOnce$disclosureTransitionImage$ = (function (v) {
			this.$disclosureTransitionImage$slot = v;
			return this;
		});
		this.$disclosureOpenImage = (function () {
			return this.$disclosureOpenImage$slot;
		});
		this.$setOnce$disclosureOpenImage$ = (function (v) {
			this.$disclosureOpenImage$slot = v;
			return this;
		});
		this.$RuntimeForV8$Platform = (function () {
			return this.$RuntimeForV8$Platform$slot;
		});
		this.$RuntimeForV8$Platform$ = (function (v) {
			this.$RuntimeForV8$Platform$slot = v;
			return this;
		});
		this.$RuntimeForV8$Platform = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for RuntimeForV8`Platform";
			this.name = "RuntimeForV8`Platform";
			this.header = "Platform usingVmMirror: vmmirror = (|\r	namespace = outer RuntimeForV8.\r	public kernel = Object enclosingObject. (* Instantiated specially to avoid bootstrapping issues. *)\r	public aliens = Future computing: [Aliens usingPlatform: self].\r	public collections = Future computing: [Collections usingPlatform: self].\r	public graphics = Future computing: [Graphics usingPlatform: self].\r	public hopscotch = Future computing: [Hopscotch usingPlatform: self].\r	public mirrors = Future computing: [Mirrors usingPlatform: self vmMirror: vmmirror].\r	public streams = Future computing: [Streams usingPlatform: self].\r	public time = Future computing: [Time usingPlatform: self].\r|kernel platform: self)";
			this.slots = [
				new SM("namespace", false, false),
				new SM("kernel", false, false),
				new SM("aliens", false, false),
				new SM("collections", false, false),
				new SM("graphics", false, false),
				new SM("hopscotch", false, false),
				new SM("mirrors", false, false),
				new SM("streams", false, false),
				new SM("time", false, false)
			];
			this.methods = [
				new MM("superInit`RuntimeForV8`Platform", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("namespace", true, null),
				new MM("setOnce`namespace:", true, null),
				new MM("kernel", true, null),
				new MM("setOnce`kernel:", true, null),
				new MM("aliens", true, null),
				new MM("setOnce`aliens:", true, null),
				new MM("collections", true, null),
				new MM("setOnce`collections:", true, null),
				new MM("graphics", true, null),
				new MM("setOnce`graphics:", true, null),
				new MM("hopscotch", true, null),
				new MM("setOnce`hopscotch:", true, null),
				new MM("mirrors", true, null),
				new MM("setOnce`mirrors:", true, null),
				new MM("streams", true, null),
				new MM("setOnce`streams:", true, null),
				new MM("time", true, null),
				new MM("setOnce`time:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$RuntimeForV8$Platform = (function ($vmmirror) {
				var self = this;
				self.$super$RuntimeForV8$Platform.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($vmmirror) {
				var self = this;
				self.$superInit$RuntimeForV8$Platform($vmmirror);
				self.$setOnce$namespace$(self.$enclosingObjects$RuntimeForV8$Platform[0]);
				self.$setOnce$kernel$(self.$Object().$enclosingObject());
				self.$setOnce$aliens$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Aliens().$usingPlatform$(self);
				})));
				self.$setOnce$collections$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Collections().$usingPlatform$(self);
				})));
				self.$setOnce$graphics$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Graphics().$usingPlatform$(self);
				})));
				self.$setOnce$hopscotch$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Hopscotch().$usingPlatform$(self);
				})));
				self.$setOnce$mirrors$(self.$Future().$computing$((function () {
					return self.$Mirrors().$usingPlatform$vmMirror$(self, $vmmirror);
				})));
				self.$setOnce$streams$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Streams().$usingPlatform$(self);
				})));
				self.$setOnce$time$(self.$Future().$computing$((function () {
					return self.$enclosingObjects$RuntimeForV8$Platform[0].$Time().$usingPlatform$(self);
				})));
				self.$kernel().$platform$(self);
				return self;
			});
			this.$namespace = (function () {
				return this.$namespace$slot;
			});
			this.$setOnce$namespace$ = (function (v) {
				this.$namespace$slot = v;
				return this;
			});
			this.$kernel = (function () {
				return this.$kernel$slot;
			});
			this.$setOnce$kernel$ = (function (v) {
				this.$kernel$slot = v;
				return this;
			});
			this.$aliens = (function () {
				return this.$aliens$slot;
			});
			this.$setOnce$aliens$ = (function (v) {
				this.$aliens$slot = v;
				return this;
			});
			this.$collections = (function () {
				return this.$collections$slot;
			});
			this.$setOnce$collections$ = (function (v) {
				this.$collections$slot = v;
				return this;
			});
			this.$graphics = (function () {
				return this.$graphics$slot;
			});
			this.$setOnce$graphics$ = (function (v) {
				this.$graphics$slot = v;
				return this;
			});
			this.$hopscotch = (function () {
				return this.$hopscotch$slot;
			});
			this.$setOnce$hopscotch$ = (function (v) {
				this.$hopscotch$slot = v;
				return this;
			});
			this.$mirrors = (function () {
				return this.$mirrors$slot;
			});
			this.$setOnce$mirrors$ = (function (v) {
				this.$mirrors$slot = v;
				return this;
			});
			this.$streams = (function () {
				return this.$streams$slot;
			});
			this.$setOnce$streams$ = (function (v) {
				this.$streams$slot = v;
				return this;
			});
			this.$time = (function () {
				return this.$time$slot;
			});
			this.$setOnce$time$ = (function (v) {
				this.$time$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for RuntimeForV8`Platform";
					this.$superInit$RuntimeForV8$Platform = $.$superInit$RuntimeForV8$Platform;
					this.$instance$initializer = $.$instance$initializer;
					this.$namespace = $.$namespace;
					this.$setOnce$namespace$ = $.$setOnce$namespace$;
					this.$kernel = $.$kernel;
					this.$setOnce$kernel$ = $.$setOnce$kernel$;
					this.$aliens = $.$aliens;
					this.$setOnce$aliens$ = $.$setOnce$aliens$;
					this.$collections = $.$collections;
					this.$setOnce$collections$ = $.$setOnce$collections$;
					this.$graphics = $.$graphics;
					this.$setOnce$graphics$ = $.$setOnce$graphics$;
					this.$hopscotch = $.$hopscotch;
					this.$setOnce$hopscotch$ = $.$setOnce$hopscotch$;
					this.$mirrors = $.$mirrors;
					this.$setOnce$mirrors$ = $.$setOnce$mirrors$;
					this.$streams = $.$streams;
					this.$setOnce$streams$ = $.$setOnce$streams$;
					this.$time = $.$time;
					this.$setOnce$time$ = $.$setOnce$time$;
					this.$enclosingObjects$RuntimeForV8$Platform = enclosingObjects;
					this.$super$RuntimeForV8$Platform = runtimeSuperclass;
					this["RuntimeForV8`Platform"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$namespace$slot = nil;
						this.$kernel$slot = nil;
						this.$aliens$slot = nil;
						this.$collections$slot = nil;
						this.$graphics$slot = nil;
						this.$hopscotch$slot = nil;
						this.$mirrors$slot = nil;
						this.$streams$slot = nil;
						this.$time$slot = nil;
					});
					this.basicNew = this["RuntimeForV8`Platform"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for RuntimeForV8`Platform";
				this.slots = [];
				this.methods = [new MM("usingVmMirror:", true, null)];
				this.nestedClasses = [];
				this.$usingVmMirror$ = (function ($vmmirror) {
					return (new this.nonMeta.basicNew()).$instance$initializer($vmmirror);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for RuntimeForV8`Platform";
						this.$usingVmMirror$ = $.$usingVmMirror$;
						this.$enclosingObjects$RuntimeForV8$Platform = enclosingObjects;
						this.$super$RuntimeForV8$Platform = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$RuntimeForV8$Platform.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for RuntimeForV8";
				this.$superInit$RuntimeForV8 = $.$superInit$RuntimeForV8;
				this.$instance$initializer = $.$instance$initializer;
				this.$using$ = $.$using$;
				this.$Platform = $.$Platform;
				this.$Kernel = $.$Kernel;
				this.$setOnce$Kernel$ = $.$setOnce$Kernel$;
				this.$Aliens = $.$Aliens;
				this.$setOnce$Aliens$ = $.$setOnce$Aliens$;
				this.$Collections = $.$Collections;
				this.$setOnce$Collections$ = $.$setOnce$Collections$;
				this.$Graphics = $.$Graphics;
				this.$setOnce$Graphics$ = $.$setOnce$Graphics$;
				this.$Hopscotch = $.$Hopscotch;
				this.$setOnce$Hopscotch$ = $.$setOnce$Hopscotch$;
				this.$Streams = $.$Streams;
				this.$setOnce$Streams$ = $.$setOnce$Streams$;
				this.$Time = $.$Time;
				this.$setOnce$Time$ = $.$setOnce$Time$;
				this.$accept16px = $.$accept16px;
				this.$setOnce$accept16px$ = $.$setOnce$accept16px$;
				this.$cancel16px = $.$cancel16px;
				this.$setOnce$cancel16px$ = $.$setOnce$cancel16px$;
				this.$disclosureClosedImage = $.$disclosureClosedImage;
				this.$setOnce$disclosureClosedImage$ = $.$setOnce$disclosureClosedImage$;
				this.$disclosureTransitionImage = $.$disclosureTransitionImage;
				this.$setOnce$disclosureTransitionImage$ = $.$setOnce$disclosureTransitionImage$;
				this.$disclosureOpenImage = $.$disclosureOpenImage;
				this.$setOnce$disclosureOpenImage$ = $.$setOnce$disclosureOpenImage$;
				this.$RuntimeForV8$Platform = $.$RuntimeForV8$Platform;
				this.$RuntimeForV8$Platform$ = $.$RuntimeForV8$Platform$;
				this.$enclosingObjects$RuntimeForV8 = enclosingObjects;
				this.$super$RuntimeForV8 = runtimeSuperclass;
				this.RuntimeForV8 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$Kernel$slot = nil;
					this.$Aliens$slot = nil;
					this.$Collections$slot = nil;
					this.$Graphics$slot = nil;
					this.$Hopscotch$slot = nil;
					this.$Streams$slot = nil;
					this.$Time$slot = nil;
					this.$accept16px$slot = nil;
					this.$cancel16px$slot = nil;
					this.$disclosureClosedImage$slot = nil;
					this.$disclosureTransitionImage$slot = nil;
					this.$disclosureOpenImage$slot = nil;
					this.$RuntimeForV8$Platform$slot = nil;
				});
				this.basicNew = this.RuntimeForV8;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for RuntimeForV8";
			this.slots = [];
			this.methods = [new MM("packageUsing:", true, null)];
			this.nestedClasses = [];
			this.$packageUsing$ = (function ($manifest) {
				return (new this.nonMeta.basicNew()).$instance$initializer($manifest);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for RuntimeForV8";
					this.$packageUsing$ = $.$packageUsing$;
					this.$enclosingObjects$RuntimeForV8 = enclosingObjects;
					this.$super$RuntimeForV8 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$KernelForV8 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for KernelForV8";
		this.name = "KernelForV8";
		this.header = "KernelForV8 usingVmMirror: vmm = (\r(*\r\rCopyright 2008 Cadence Design Systems, Inc.\rCopyright 2009-2010 Gilad Bracha.\rCopyright 2012 SAP AG.\rCopyright 2012 Google Inc.\rCopyright 2013 Ryan Macnak\r\rLicensed under the Apache License, Version 2.0 (the ''License''); you may not use this file except in compliance with the License.  You may obtain a copy of the License at  http://www.apache.org/licenses/LICENSE-2.0 *)|\rvmmirror = vmm.\rplatform\r|)";
		this.slots = [
			new SM("vmmirror", false, false),
			new SM("platform", true, false),
			new SM("KernelForV8`Array", true, true),
			new SM("KernelForV8`Block", true, true),
			new SM("KernelForV8`Boolean", true, true),
			new SM("KernelForV8`Class", true, true),
			new SM("KernelForV8`Error", true, true),
			new SM("KernelForV8`Future", true, true),
			new SM("KernelForV8`Message", true, true),
			new SM("KernelForV8`MessageNotUnderstood", true, true),
			new SM("KernelForV8`Metaclass", true, true),
			new SM("KernelForV8`Mixin", true, true),
			new SM("KernelForV8`Number", true, true),
			new SM("KernelForV8`Object", true, true),
			new SM("KernelForV8`String", true, true),
			new SM("KernelForV8`UndefinedObject", true, true)
		];
		this.methods = [
			new MM("superInit`KernelForV8", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("MutableString", false, "MutableString = (\r	#BOGUS.\r	^String\r)"),
			new MM("augment:withPropertiesOf:", false, "augment: prototype withPropertiesOf: runtimeClass = (\r	| keys = js call: (js propertyOf: (js ident: 'Object') at: (js literal: 'keys')) with: {runtimeClass}. |\r	js call: (js propertyOf: keys at: (js literal: 'forEach')) with: {js functionOf: {'key'} body: (js block: {\r		js assign: (js propertyOf: prototype at: (js ident: 'key'))\r			toBe: (js propertyOf: runtimeClass at: (js ident: 'key'))\r	})}.\r)"),
			new MM("augmentPrototypes", false, "augmentPrototypes = (\r	js call: (js ident: 'installDnuHandlersOn') with: {js verbatim: 'Object.prototype'}.\r	augment: (js verbatim: 'Array.prototype') withPropertiesOf: (js propertyOf: Object at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Array.prototype') withPropertiesOf: (js propertyOf: Array at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Boolean.prototype') withPropertiesOf: (js propertyOf: Object at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Boolean.prototype') withPropertiesOf: (js propertyOf: Boolean at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Function.prototype') withPropertiesOf: (js propertyOf: Object at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Function.prototype') withPropertiesOf: (js propertyOf: Block at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Number.prototype') withPropertiesOf: (js propertyOf: Object at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'Number.prototype') withPropertiesOf: (js propertyOf: Number at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'String.prototype') withPropertiesOf: (js propertyOf: Object at: (js literal: 'runtimeClass')).\r	augment: (js verbatim: 'String.prototype') withPropertiesOf: (js propertyOf: String at: (js literal: 'runtimeClass')).\r)"),
			new MM("Array", true, null),
			new MM("Block", true, null),
			new MM("Boolean", true, null),
			new MM("Class", true, null),
			new MM("Error", true, null),
			new MM("Future", true, null),
			new MM("Message", true, null),
			new MM("MessageNotUnderstood", true, null),
			new MM("Metaclass", true, null),
			new MM("Mixin", true, null),
			new MM("Number", true, null),
			new MM("Object", true, null),
			new MM("String", true, null),
			new MM("UndefinedObject", true, null),
			new MM("vmmirror", true, null),
			new MM("setOnce`vmmirror:", true, null),
			new MM("platform", true, null),
			new MM("platform:", true, null),
			new MM("KernelForV8`Array", true, null),
			new MM("KernelForV8`Array:", true, null),
			new MM("KernelForV8`Block", true, null),
			new MM("KernelForV8`Block:", true, null),
			new MM("KernelForV8`Boolean", true, null),
			new MM("KernelForV8`Boolean:", true, null),
			new MM("KernelForV8`Class", true, null),
			new MM("KernelForV8`Class:", true, null),
			new MM("KernelForV8`Error", true, null),
			new MM("KernelForV8`Error:", true, null),
			new MM("KernelForV8`Future", true, null),
			new MM("KernelForV8`Future:", true, null),
			new MM("KernelForV8`Message", true, null),
			new MM("KernelForV8`Message:", true, null),
			new MM("KernelForV8`MessageNotUnderstood", true, null),
			new MM("KernelForV8`MessageNotUnderstood:", true, null),
			new MM("KernelForV8`Metaclass", true, null),
			new MM("KernelForV8`Metaclass:", true, null),
			new MM("KernelForV8`Mixin", true, null),
			new MM("KernelForV8`Mixin:", true, null),
			new MM("KernelForV8`Number", true, null),
			new MM("KernelForV8`Number:", true, null),
			new MM("KernelForV8`Object", true, null),
			new MM("KernelForV8`Object:", true, null),
			new MM("KernelForV8`String", true, null),
			new MM("KernelForV8`String:", true, null),
			new MM("KernelForV8`UndefinedObject", true, null),
			new MM("KernelForV8`UndefinedObject:", true, null)
		];
		this.nestedClasses = [
			"KernelForV8`Array",
			"KernelForV8`Block",
			"KernelForV8`Boolean",
			"KernelForV8`Class",
			"KernelForV8`Error",
			"KernelForV8`Future",
			"KernelForV8`Message",
			"KernelForV8`MessageNotUnderstood",
			"KernelForV8`Metaclass",
			"KernelForV8`Mixin",
			"KernelForV8`Number",
			"KernelForV8`Object",
			"KernelForV8`String",
			"KernelForV8`UndefinedObject"
		];
		this.applications = [];
		this.$superInit$KernelForV8 = (function ($vmm) {
			var self = this;
			self.$super$KernelForV8.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($vmm) {
			var self = this;
			self.$superInit$KernelForV8($vmm);
			self.$setOnce$vmmirror$($vmm);
			return self;
		});
		this.$MutableString = (function () {
			var self = this;
			"BOGUS";
			return self.$String();
		});
		this.$augment$withPropertiesOf$ = (function ($prototype, $runtimeClass) {
			var self = this;
			var $keys = nil;
			$keys = Object.keys($runtimeClass);
			$keys.forEach((function (key) {
				$prototype[key] = $runtimeClass[key];
			}));
			return self;
		});
		this.$augmentPrototypes = (function () {
			var self = this;
			installDnuHandlersOn(Object.prototype);
			self.$augment$withPropertiesOf$(Array.prototype, self.$Object().runtimeClass);
			self.$augment$withPropertiesOf$(Array.prototype, self.$Array().runtimeClass);
			self.$augment$withPropertiesOf$(Boolean.prototype, self.$Object().runtimeClass);
			self.$augment$withPropertiesOf$(Boolean.prototype, self.$Boolean().runtimeClass);
			self.$augment$withPropertiesOf$(Function.prototype, self.$Object().runtimeClass);
			self.$augment$withPropertiesOf$(Function.prototype, self.$Block().runtimeClass);
			self.$augment$withPropertiesOf$(Number.prototype, self.$Object().runtimeClass);
			self.$augment$withPropertiesOf$(Number.prototype, self.$Number().runtimeClass);
			self.$augment$withPropertiesOf$(String.prototype, self.$Object().runtimeClass);
			self.$augment$withPropertiesOf$(String.prototype, self.$String().runtimeClass);
			return self;
		});
		this.$Array = (function () {
			if (nil === this.$KernelForV8$Array$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Array;
				this.$KernelForV8$Array$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Array$slot;
		});
		this.$Block = (function () {
			if (nil === this.$KernelForV8$Block$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Block;
				this.$KernelForV8$Block$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Block$slot;
		});
		this.$Boolean = (function () {
			if (nil === this.$KernelForV8$Boolean$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Boolean;
				this.$KernelForV8$Boolean$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Boolean$slot;
		});
		this.$Class = (function () {
			if (nil === this.$KernelForV8$Class$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Class;
				this.$KernelForV8$Class$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Class$slot;
		});
		this.$Error = (function () {
			if (nil === this.$KernelForV8$Error$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Error;
				this.$KernelForV8$Error$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Error$slot;
		});
		this.$Future = (function () {
			if (nil === this.$KernelForV8$Future$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Future;
				this.$KernelForV8$Future$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Future$slot;
		});
		this.$Message = (function () {
			if (nil === this.$KernelForV8$Message$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Message;
				this.$KernelForV8$Message$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Message$slot;
		});
		this.$MessageNotUnderstood = (function () {
			if (nil === this.$KernelForV8$MessageNotUnderstood$slot) {
				var self = this;
				var superclass = self.$Error();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$MessageNotUnderstood;
				this.$KernelForV8$MessageNotUnderstood$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$MessageNotUnderstood$slot;
		});
		this.$Metaclass = (function () {
			if (nil === this.$KernelForV8$Metaclass$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Metaclass;
				this.$KernelForV8$Metaclass$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Metaclass$slot;
		});
		this.$Mixin = (function () {
			if (nil === this.$KernelForV8$Mixin$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Mixin;
				this.$KernelForV8$Mixin$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Mixin$slot;
		});
		this.$Number = (function () {
			if (nil === this.$KernelForV8$Number$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Number;
				this.$KernelForV8$Number$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Number$slot;
		});
		this.$Object = (function () {
			if (nil === this.$KernelForV8$Object$slot) {
				var self = this;
				var superclass = self.$ImplementationBase();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$Object;
				this.$KernelForV8$Object$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$Object$slot;
		});
		this.$String = (function () {
			if (nil === this.$KernelForV8$String$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$String;
				this.$KernelForV8$String$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$String$slot;
		});
		this.$UndefinedObject = (function () {
			if (nil === this.$KernelForV8$UndefinedObject$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$KernelForV8);
				var mixin = this.$KernelForV8$UndefinedObject;
				this.$KernelForV8$UndefinedObject$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$KernelForV8$UndefinedObject$slot;
		});
		this.$vmmirror = (function () {
			return this.$vmmirror$slot;
		});
		this.$setOnce$vmmirror$ = (function (v) {
			this.$vmmirror$slot = v;
			return this;
		});
		this.$platform = (function () {
			return this.$platform$slot;
		});
		this.$platform$ = (function (v) {
			this.$platform$slot = v;
			return this;
		});
		this.$KernelForV8$Array = (function () {
			return this.$KernelForV8$Array$slot;
		});
		this.$KernelForV8$Array$ = (function (v) {
			this.$KernelForV8$Array$slot = v;
			return this;
		});
		this.$KernelForV8$Block = (function () {
			return this.$KernelForV8$Block$slot;
		});
		this.$KernelForV8$Block$ = (function (v) {
			this.$KernelForV8$Block$slot = v;
			return this;
		});
		this.$KernelForV8$Boolean = (function () {
			return this.$KernelForV8$Boolean$slot;
		});
		this.$KernelForV8$Boolean$ = (function (v) {
			this.$KernelForV8$Boolean$slot = v;
			return this;
		});
		this.$KernelForV8$Class = (function () {
			return this.$KernelForV8$Class$slot;
		});
		this.$KernelForV8$Class$ = (function (v) {
			this.$KernelForV8$Class$slot = v;
			return this;
		});
		this.$KernelForV8$Error = (function () {
			return this.$KernelForV8$Error$slot;
		});
		this.$KernelForV8$Error$ = (function (v) {
			this.$KernelForV8$Error$slot = v;
			return this;
		});
		this.$KernelForV8$Future = (function () {
			return this.$KernelForV8$Future$slot;
		});
		this.$KernelForV8$Future$ = (function (v) {
			this.$KernelForV8$Future$slot = v;
			return this;
		});
		this.$KernelForV8$Message = (function () {
			return this.$KernelForV8$Message$slot;
		});
		this.$KernelForV8$Message$ = (function (v) {
			this.$KernelForV8$Message$slot = v;
			return this;
		});
		this.$KernelForV8$MessageNotUnderstood = (function () {
			return this.$KernelForV8$MessageNotUnderstood$slot;
		});
		this.$KernelForV8$MessageNotUnderstood$ = (function (v) {
			this.$KernelForV8$MessageNotUnderstood$slot = v;
			return this;
		});
		this.$KernelForV8$Metaclass = (function () {
			return this.$KernelForV8$Metaclass$slot;
		});
		this.$KernelForV8$Metaclass$ = (function (v) {
			this.$KernelForV8$Metaclass$slot = v;
			return this;
		});
		this.$KernelForV8$Mixin = (function () {
			return this.$KernelForV8$Mixin$slot;
		});
		this.$KernelForV8$Mixin$ = (function (v) {
			this.$KernelForV8$Mixin$slot = v;
			return this;
		});
		this.$KernelForV8$Number = (function () {
			return this.$KernelForV8$Number$slot;
		});
		this.$KernelForV8$Number$ = (function (v) {
			this.$KernelForV8$Number$slot = v;
			return this;
		});
		this.$KernelForV8$Object = (function () {
			return this.$KernelForV8$Object$slot;
		});
		this.$KernelForV8$Object$ = (function (v) {
			this.$KernelForV8$Object$slot = v;
			return this;
		});
		this.$KernelForV8$String = (function () {
			return this.$KernelForV8$String$slot;
		});
		this.$KernelForV8$String$ = (function (v) {
			this.$KernelForV8$String$slot = v;
			return this;
		});
		this.$KernelForV8$UndefinedObject = (function () {
			return this.$KernelForV8$UndefinedObject$slot;
		});
		this.$KernelForV8$UndefinedObject$ = (function (v) {
			this.$KernelForV8$UndefinedObject$slot = v;
			return this;
		});
		this.$KernelForV8$Array = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Array";
			this.name = "KernelForV8`Array";
			this.header = "Array uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Array", true, " "),
				new MM("instance`initializer", true, " "),
				new MM(",", false, ", otherSequence = (\r	^js call: (js propertyOf: self at: (js literal: 'concat')) with: {otherSequence asArray}\r)"),
				new MM("=", false, "= other = (\r	self == other ifTrue: [^true].\r	other isArray ifFalse: [^false].\r	self size = other size ifFalse: [^false].\r	1 to: size do: [:index |\r		(self at: index) = (other at: index) ifFalse: [^false]].\r	^true\r)"),
				new MM("asArray", false, "asArray = (\r	^self\r)"),
				new MM("asOrderedCollection", false, "asOrderedCollection = (\r	^platform collections OrderedCollection withAll: self\r)"),
				new MM("at:", false, "at: index = (\r	^js propertyOf: (js ident: 'this') at: (js operator: '-' with: index and: (js literal: 1))\r)"),
				new MM("at:put:", false, "at: index put: value = (\r	^js assign: (js propertyOf: (js ident: 'this') at: (js operator: '-' with: index and: (js literal: 1)))\r	 toBe: value\r)"),
				new MM("binarySearchFor:between:and:toCompare:", false, "binarySearchFor: el between: start and: end toCompare: compare = (\r	(* This does a binary search for the index such that if el was inserted before it\r	  the receiver would remain sorted.  The receiver must be sorted relative to the\r	  comparison block.  The comparison block should return true if the first block argument\r	  cannot appear after the second block argument *)\r\r	| low high |\r	low:: start.\r	high:: end.\r	[ low <= high ]\r		whileTrue:\r				[	| mid |\r					mid:: (low + high) // 2.\r	  				(compare value: (self at: mid) value: el)\r						ifTrue: [ low:: mid + 1 ]	\r						ifFalse: [ high:: mid - 1 ].\r				].\r	^low\r)"),
				new MM("class", false, "class = (\r	^Array\r)"),
				new MM("collect:", false, "collect: block = (\r	^js call: (js propertyOf: self at: (js literal: 'map')) with: {block}.\r)"),
				new MM("copyFrom:to:", false, "copyFrom: start to: end = (\r	^js call: (js propertyOf: self at: (js literal: 'slice')) with: {start - 1. end}\r)"),
				new MM("copyWith:", false, "copyWith: extraElement = (\r	| newSize ::= self size + 1. a |\r	a:: (Array new: newSize) replaceFrom: 1 to: self size with: self.\r	a at: newSize put: extraElement.\r	^a\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s = (\r	^(Array new: s) replaceFrom: 1 to: (s min: self size) with: self\r)"),
				new MM("do:", false, "do: block = (\r	js call: (js propertyOf: self at: (js literal: 'forEach')) with: {block}.\r)"),
				new MM("do:separatedBy:", false, "do: block separatedBy: betweenBlock = (\r	| firstTime ::= true. |\r\r	self do: [:element |\r		firstTime ifTrue: [ firstTime:: false ] ifFalse: [betweenBlock value].\r		block value: element].\r)"),
				new MM("doWithIndex:", false, "doWithIndex: block = (\r	1 to: size do: [:n | block value: (self at: n) value: n].\r)"),
				new MM("first", false, "first = (\r	^self at: 1\r)"),
				new MM("includes:", false, "includes: element = (\r\r	self do: [:each | each = element ifTrue: [^true]].\r	^false\r)"),
				new MM("inject:into:", false, "inject: initialValue into: accumulator = (\r	^js call: (js propertyOf: self at: (js literal: 'reduce')) with: {accumulator. initialValue}.\r)"),
				new MM("isArray", false, "isArray = (\r	^true\r)"),
				new MM("isCollection", false, "isCollection ^<Boolean> = (\r	^true\r)"),
				new MM("isEmpty", false, "isEmpty = (\r	^0 == size\r)"),
				new MM("keysAndValuesDo:", false, "keysAndValuesDo: binaryBlock <[:Integer :E]> = (\r	1 to: self size do: [:index | binaryBlock value: index value: (self at: index)]\r)"),
				new MM("last", false, "last = (\r	^self at: self size\r)"),
				new MM("printString", false, "printString = (\r	| x ::= '{'. |\r	#FLAG. (* This is not safe for arrays that contain themselves. *)\r	self do: [:ea | x:: x , ea printString] separatedBy: [x:: x, '. '].\r	^x , '}'\r)"),
				new MM("replaceFrom:to:with:", false, "replaceFrom: start to: stop with: replacement = (\r	(* This destructively replaces elements from start to stop in the receiver. \r	Answer the receiver itself. Use copyReplaceFrom:to:with: for \r	insertion/deletion which may alter the size of the result. *)\r\r	replacement size = (stop - start + 1)\r		ifFalse: [self error: 'Size of replacement doesnt match'].\r	^self replaceFrom: start to: stop with: replacement startingAt: 1\r)"),
				new MM("replaceFrom:to:with:startingAt:", false, "replaceFrom: start to: stop with: replacement startingAt: repStart = (\r	(* This destructively replaces elements from start to stop in the receiver \r	starting at index, repStart, in the sequenceable collection, \r	replacementCollection. Answer the receiver. No range checks are \r	performed. *)\r\r	| index repOff |\r	repOff:: repStart - start.\r	index:: start - 1.\r	[(index:: index + 1) <= stop]\r		whileTrue: [self at: index put: (replacement at: repOff + index)]\r)"),
				new MM("select:", false, "select: block = (\r	^js call: (js propertyOf: self at: (js literal: 'filter')) with: {block}.\r)"),
				new MM("size", false, "size = (\r	^js verbatim: 'this.length'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Array = (function () {
				var self = this;
				self.$super$KernelForV8$Array.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Array();
				return self;
			});
			this.$$comma = (function ($otherSequence) {
				var self = this;
				return self.concat($otherSequence.$asArray());
			});
			this.$$equal = (function ($other) {
				var self = this;
				if (self === $other) {
					return true;
				} else {
					nil;
				};
				if (!$other.$isArray()) {
					return false;
				} else {
					nil;
				};
				if (!self.$size().$$equal($other.$size())) {
					return false;
				} else {
					nil;
				};
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($index); ) {
						if (!self.$at$($index).$$equal($other.$at$($index))) {
							return false;
						} else {
							nil;
						};
						$index = (1).$$plus($index);
					};
				};
				return true;
			});
			this.$asArray = (function () {
				var self = this;
				return self;
			});
			this.$asOrderedCollection = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Array[0].$platform().$collections().$OrderedCollection().$withAll$(self);
			});
			this.$at$ = (function ($index) {
				var self = this;
				return this[$index - 1];
			});
			this.$at$put$ = (function ($index, $value) {
				var self = this;
				return this[$index - 1] = $value;
			});
			this.$binarySearchFor$between$and$toCompare$ = (function ($el, $start, $end, $compare) {
				var self = this;
				var $low = nil;
				var $high = nil;
				$low = $start;
				$high = $end;
				{
					nil;
					for (; $low.$$less$equal($high); ) {
						var $mid = nil;
						$mid = ($low + $high).$$over$over(2);
						if ($compare.$value$value$(self.$at$($mid), $el)) {
							$low = $mid + 1;
						} else {
							$high = $mid - 1;
						};
					};
				};
				return $low;
			});
			this.$class = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Array[0].$Array();
			});
			this.$collect$ = (function ($block) {
				var self = this;
				return self.map($block);
			});
			this.$copyFrom$to$ = (function ($start, $end) {
				var self = this;
				return self.slice($start - 1, $end);
			});
			this.$copyWith$ = (function ($extraElement) {
				var self = this;
				var $newSize = nil;
				var $a = nil;
				$newSize = self.$size() + 1;
				$a = self.$enclosingObjects$KernelForV8$Array[0].$Array().$new$($newSize).$replaceFrom$to$with$(1, self.$size(), self);
				$a.$at$put$($newSize, $extraElement);
				return $a;
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Array[0].$Array().$new$($s).$replaceFrom$to$with$(1, $s.$min$(self.$size()), self);
			});
			this.$do$ = (function ($block) {
				var self = this;
				self.forEach($block);
				return self;
			});
			this.$do$separatedBy$ = (function ($block, $betweenBlock) {
				var self = this;
				var $firstTime = nil;
				$firstTime = true;
				self.$do$((function ($element) {
					if ($firstTime) {
						$firstTime = false;
					} else {
						$betweenBlock.$value();
					};
					return $block.$value$($element);
				}));
				return self;
			});
			this.$doWithIndex$ = (function ($block) {
				var self = this;
				{
					var $$limit = nil;
					var $n = nil;
					nil;
					$n = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($n); ) {
						$block.$value$value$(self.$at$($n), $n);
						$n = (1).$$plus($n);
					};
				};
				return self;
			});
			this.$first = (function () {
				var self = this;
				return self.$at$(1);
			});
			this.$includes$ = (function ($element) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($each) {
						return $each.$$equal($element).$ifTrue$((function () {
							{
								NLR.value = true;
								throw NLR;
							};
						}));
					}));
					return false;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$inject$into$ = (function ($initialValue, $accumulator) {
				var self = this;
				return self.reduce($accumulator, $initialValue);
			});
			this.$isArray = (function () {
				var self = this;
				return true;
			});
			this.$isCollection = (function () {
				var self = this;
				return true;
			});
			this.$isEmpty = (function () {
				var self = this;
				return 0 === self.$size();
			});
			this.$keysAndValuesDo$ = (function ($binaryBlock) {
				var self = this;
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($index); ) {
						$binaryBlock.$value$value$($index, self.$at$($index));
						$index = (1).$$plus($index);
					};
				};
				return self;
			});
			this.$last = (function () {
				var self = this;
				return self.$at$(self.$size());
			});
			this.$printString = (function () {
				var self = this;
				var $x = nil;
				$x = "{";
				"FLAG";
				self.$do$separatedBy$((function ($ea) {
					return $x = $x.$$comma($ea.$printString());
				}), (function () {
					return $x = $x.$$comma(". ");
				}));
				return $x.$$comma("}");
			});
			this.$replaceFrom$to$with$ = (function ($start, $stop, $replacement) {
				var self = this;
				if (!$replacement.$size().$$equal(($stop - $start) + 1)) {
					self.$error$("Size of replacement doesnt match");
				} else {
					nil;
				};
				return self.$replaceFrom$to$with$startingAt$($start, $stop, $replacement, 1);
			});
			this.$replaceFrom$to$with$startingAt$ = (function ($start, $stop, $replacement, $repStart) {
				var self = this;
				var $index = nil;
				var $repOff = nil;
				$repOff = $repStart - $start;
				$index = $start - 1;
				{
					nil;
					for (; ($index = $index + 1).$$less$equal($stop); ) {
						self.$at$put$($index, $replacement.$at$($repOff + $index));
					};
				};
				return self;
			});
			this.$select$ = (function ($block) {
				var self = this;
				return self.filter($block);
			});
			this.$size = (function () {
				var self = this;
				return this.length;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Array";
					this.$superInit$KernelForV8$Array = $.$superInit$KernelForV8$Array;
					this.$instance$initializer = $.$instance$initializer;
					this.$$comma = $.$$comma;
					this.$$equal = $.$$equal;
					this.$asArray = $.$asArray;
					this.$asOrderedCollection = $.$asOrderedCollection;
					this.$at$ = $.$at$;
					this.$at$put$ = $.$at$put$;
					this.$binarySearchFor$between$and$toCompare$ = $.$binarySearchFor$between$and$toCompare$;
					this.$class = $.$class;
					this.$collect$ = $.$collect$;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$copyWith$ = $.$copyWith$;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$do$ = $.$do$;
					this.$do$separatedBy$ = $.$do$separatedBy$;
					this.$doWithIndex$ = $.$doWithIndex$;
					this.$first = $.$first;
					this.$includes$ = $.$includes$;
					this.$inject$into$ = $.$inject$into$;
					this.$isArray = $.$isArray;
					this.$isCollection = $.$isCollection;
					this.$isEmpty = $.$isEmpty;
					this.$keysAndValuesDo$ = $.$keysAndValuesDo$;
					this.$last = $.$last;
					this.$printString = $.$printString;
					this.$replaceFrom$to$with$ = $.$replaceFrom$to$with$;
					this.$replaceFrom$to$with$startingAt$ = $.$replaceFrom$to$with$startingAt$;
					this.$select$ = $.$select$;
					this.$size = $.$size;
					this.$enclosingObjects$KernelForV8$Array = enclosingObjects;
					this.$super$KernelForV8$Array = runtimeSuperclass;
					this["KernelForV8`Array"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Array"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Array";
				this.slots = [];
				this.methods = [
					new MM("uninstantiable", true, null),
					new MM("new", false, "new = (\r	^js array: {}\r)"),
					new MM("new:", false, "new: size = (\r	^self new: size withAll: nil\r)"),
					new MM("new:withAll:", false, "new: size withAll: initialElement = (\r	|\r	array = js new: (js ident: 'Array') with: {size}.\r	i ::= 0.\r	|	\r	js \r		for: (js verbatim: '')\r		while: (js operator: '<' with: i and: size) \r		step: (js postfixOperator: '++' on: i)\r		do: (js block: {\r			js assign: (js propertyOf: array at: i) toBe: initialElement}).\r	^array\r)"),
					new MM("with:", false, "with: element = (\r	^{element}\r)")
				];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$new = (function () {
					var self = this;
					return [];
				});
				this.$new$ = (function ($size) {
					var self = this;
					return self.$new$withAll$($size, nil);
				});
				this.$new$withAll$ = (function ($size, $initialElement) {
					var self = this;
					var $array = nil;
					var $i = nil;
					$array = new Array($size);
					$i = 0;
					for (; $i < $size; $i++) {
						$array[$i] = $initialElement;
					};
					return $array;
				});
				this.$with$ = (function ($element) {
					var self = this;
					return [$element];
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Array";
						this.$uninstantiable = $.$uninstantiable;
						this.$new = $.$new;
						this.$new$ = $.$new$;
						this.$new$withAll$ = $.$new$withAll$;
						this.$with$ = $.$with$;
						this.$enclosingObjects$KernelForV8$Array = enclosingObjects;
						this.$super$KernelForV8$Array = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Block = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Block";
			this.name = "KernelForV8`Block";
			this.header = "Block uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Block", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("cull:", false, "cull: a1 = (\r	^js call: (js ident: 'this') with: {a1}\r)"),
				new MM("ensure:", false, "ensure: onUnwind = (\r	| result |\r	js try: (js block: {\r		result:: self value.\r	})\r	catch: (js ident: 'e')\r	with: (js block: {\r		onUnwind value.\r		js throw: (js ident: 'e').\r	}).\r	onUnwind value.\r	^result\r)"),
				new MM("isBlock", false, "isBlock = (\r	^true\r)"),
				new MM("numArgs", false, "numArgs ^<Integer> = (\r	^js propertyOf: self at: (js literal: 'length')\r)"),
				new MM("on:do:", false, "on: errorClass do: handler = (\r	(* Perhaps we should match on mixin instead of class... *)\r	| c |\r	js try: (js block: {js return: self value})\r	catch: (js ident: 'e')\r	with: (js block: {\r		js for: (c:: (js ident: 'e') class) while: c isNil not step: (js verbatim: '') do: (js block: {\r			js if: (js operator: '===' with: c and: errorClass)\r			then: (js block: {js return: (handler value: (js ident: 'e'))}).\r			c:: c superclass.\r		}) .\r		js throw: (js ident: 'e').\r	})\r)"),
				new MM("value", false, "value = (\r	^js call: (js ident: 'this') with: {}\r)"),
				new MM("value:", false, "value: a1 = (\r	^js call: (js ident: 'this') with: {a1}\r)"),
				new MM("value:value:", false, "value: a1 value: a2 = (\r	^js call: (js ident: 'this') with: {a1. a2}\r)"),
				new MM("value:value:value:", false, "value: a1 value: a2 value: a3 = (\r	^js call: (js ident: 'this') with: {a1. a2. a3}\r)"),
				new MM("valueWithArguments:", false, "valueWithArguments: args = (\r	^js call: (js propertyOf: (js ident: 'this') at: (js literal: 'apply')) with: {js ident: 'this'. args}\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Block = (function () {
				var self = this;
				self.$super$KernelForV8$Block.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Block();
				return self;
			});
			this.$cull$ = (function ($a1) {
				var self = this;
				return this($a1);
			});
			this.$ensure$ = (function ($onUnwind) {
				var self = this;
				var $result = nil;
				try {
					$result = self.$value();
				} catch (e) {
					$onUnwind.$value();
					throw e;
				};
				$onUnwind.$value();
				return $result;
			});
			this.$isBlock = (function () {
				var self = this;
				return true;
			});
			this.$numArgs = (function () {
				var self = this;
				return self.length;
			});
			this.$on$do$ = (function ($errorClass, $handler) {
				var self = this;
				var $c = nil;
				try {
					return self.$value();
				} catch (e) {
					for ($c = e.$class(); $c.$isNil().$not(); ) {
						if ($c === $errorClass) {
							return $handler.$value$(e);
						};
						$c = $c.$superclass();
					};
					throw e;
				};
				return self;
			});
			this.$value = (function () {
				var self = this;
				return this();
			});
			this.$value$ = (function ($a1) {
				var self = this;
				return this($a1);
			});
			this.$value$value$ = (function ($a1, $a2) {
				var self = this;
				return this($a1, $a2);
			});
			this.$value$value$value$ = (function ($a1, $a2, $a3) {
				var self = this;
				return this($a1, $a2, $a3);
			});
			this.$valueWithArguments$ = (function ($args) {
				var self = this;
				return this.apply(this, $args);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Block";
					this.$superInit$KernelForV8$Block = $.$superInit$KernelForV8$Block;
					this.$instance$initializer = $.$instance$initializer;
					this.$cull$ = $.$cull$;
					this.$ensure$ = $.$ensure$;
					this.$isBlock = $.$isBlock;
					this.$numArgs = $.$numArgs;
					this.$on$do$ = $.$on$do$;
					this.$value = $.$value;
					this.$value$ = $.$value$;
					this.$value$value$ = $.$value$value$;
					this.$value$value$value$ = $.$value$value$value$;
					this.$valueWithArguments$ = $.$valueWithArguments$;
					this.$enclosingObjects$KernelForV8$Block = enclosingObjects;
					this.$super$KernelForV8$Block = runtimeSuperclass;
					this["KernelForV8`Block"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Block"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Block";
				this.slots = [];
				this.methods = [new MM("uninstantiable", true, null)];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Block";
						this.$uninstantiable = $.$uninstantiable;
						this.$enclosingObjects$KernelForV8$Block = enclosingObjects;
						this.$super$KernelForV8$Block = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Boolean = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Boolean";
			this.name = "KernelForV8`Boolean";
			this.header = "Boolean uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Boolean", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("&", false, "& other = (\r	(* Evaluating conjunction. *)\r	^js operator: '&&' with: self and: other\r)"),
				new MM("ifFalse:", false, "ifFalse: else = (\r	^js ternaryIf: self then: nil else: (js call: else with: {})\r)"),
				new MM("ifFalse:ifTrue:", false, "ifFalse: else ifTrue: then = (\r	^js ternaryIf: self then: (js call: then with: {}) else: (js call: else with: {})\r)"),
				new MM("ifTrue:", false, "ifTrue: onTrue = (\r	^js ternaryIf: self then: (js call: onTrue with: {}) else: nil\r)"),
				new MM("ifTrue:ifFalse:", false, "ifTrue: then ifFalse: else = (\r	^js ternaryIf: self then: (js call: then with: {}) else: (js call: else with: {})\r)"),
				new MM("isBoolean", false, "isBoolean = (\r	^true\r)"),
				new MM("not", false, "not = (\r	^js prefixOperator: '!' on: self.\r)"),
				new MM("printString", false, "printString = (\r	^self ifTrue: ['true'] ifFalse: ['false']\r)"),
				new MM("|", false, "| other = (\r	(* Evaluating disjunction. *)\r	^js operator: '||' with: self and: other\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Boolean = (function () {
				var self = this;
				self.$super$KernelForV8$Boolean.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Boolean();
				return self;
			});
			this.$$amp = (function ($other) {
				var self = this;
				return self && $other;
			});
			this.$ifFalse$ = (function ($else) {
				var self = this;
				return (self ? nil : $else());
			});
			this.$ifFalse$ifTrue$ = (function ($else, $then) {
				var self = this;
				return (self ? $then() : $else());
			});
			this.$ifTrue$ = (function ($onTrue) {
				var self = this;
				return (self ? $onTrue() : nil);
			});
			this.$ifTrue$ifFalse$ = (function ($then, $else) {
				var self = this;
				return (self ? $then() : $else());
			});
			this.$isBoolean = (function () {
				var self = this;
				return true;
			});
			this.$not = (function () {
				var self = this;
				return !self;
			});
			this.$printString = (function () {
				var self = this;
				return self.$ifTrue$ifFalse$((function () {
					return "true";
				}), (function () {
					return "false";
				}));
			});
			this.$$pipe = (function ($other) {
				var self = this;
				return self || $other;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Boolean";
					this.$superInit$KernelForV8$Boolean = $.$superInit$KernelForV8$Boolean;
					this.$instance$initializer = $.$instance$initializer;
					this.$$amp = $.$$amp;
					this.$ifFalse$ = $.$ifFalse$;
					this.$ifFalse$ifTrue$ = $.$ifFalse$ifTrue$;
					this.$ifTrue$ = $.$ifTrue$;
					this.$ifTrue$ifFalse$ = $.$ifTrue$ifFalse$;
					this.$isBoolean = $.$isBoolean;
					this.$not = $.$not;
					this.$printString = $.$printString;
					this.$$pipe = $.$$pipe;
					this.$enclosingObjects$KernelForV8$Boolean = enclosingObjects;
					this.$super$KernelForV8$Boolean = runtimeSuperclass;
					this["KernelForV8`Boolean"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Boolean"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Boolean";
				this.slots = [];
				this.methods = [new MM("uninstantiable", true, null)];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Boolean";
						this.$uninstantiable = $.$uninstantiable;
						this.$enclosingObjects$KernelForV8$Boolean = enclosingObjects;
						this.$super$KernelForV8$Boolean = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Class = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Class";
			this.name = "KernelForV8`Class";
			this.header = "Class = (|\rsuperclass\rmixin\renclosingObject (* Remove me *)\renclosingObjects \rname\r|)";
			this.slots = [
				new SM("superclass", true, false),
				new SM("mixin", true, false),
				new SM("enclosingObject", true, false),
				new SM("enclosingObjects", true, false),
				new SM("name", true, false)
			];
			this.methods = [
				new MM("superInit`KernelForV8`Class", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("isBehavior", false, "isBehavior = (\r	^true\r)"),
				new MM("isMeta", false, "isMeta = (\r	^true\r)"),
				new MM("mixinApply:", false, "mixinApply: newSuperclass = (\r	^vmmirror \r		applyMixin: (js propertyOf: self mixin at: (js literal: 'runtimeMixin'))\r		toSuperclass: newSuperclass\r		withEnclosingObjects: self enclosingObjects\r)"),
				new MM("superclass", true, null),
				new MM("superclass:", true, null),
				new MM("mixin", true, null),
				new MM("mixin:", true, null),
				new MM("enclosingObject", true, null),
				new MM("enclosingObject:", true, null),
				new MM("enclosingObjects", true, null),
				new MM("enclosingObjects:", true, null),
				new MM("name", true, null),
				new MM("name:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Class = (function () {
				var self = this;
				self.$super$KernelForV8$Class.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Class();
				return self;
			});
			this.$isBehavior = (function () {
				var self = this;
				return true;
			});
			this.$isMeta = (function () {
				var self = this;
				return true;
			});
			this.$mixinApply$ = (function ($newSuperclass) {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Class[0].$vmmirror().$applyMixin$toSuperclass$withEnclosingObjects$(self.$mixin().runtimeMixin, $newSuperclass, self.$enclosingObjects());
			});
			this.$superclass = (function () {
				return this.$superclass$slot;
			});
			this.$superclass$ = (function (v) {
				this.$superclass$slot = v;
				return this;
			});
			this.$mixin = (function () {
				return this.$mixin$slot;
			});
			this.$mixin$ = (function (v) {
				this.$mixin$slot = v;
				return this;
			});
			this.$enclosingObject = (function () {
				return this.$enclosingObject$slot;
			});
			this.$enclosingObject$ = (function (v) {
				this.$enclosingObject$slot = v;
				return this;
			});
			this.$enclosingObjects = (function () {
				return this.$enclosingObjects$slot;
			});
			this.$enclosingObjects$ = (function (v) {
				this.$enclosingObjects$slot = v;
				return this;
			});
			this.$name = (function () {
				return this.$name$slot;
			});
			this.$name$ = (function (v) {
				this.$name$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Class";
					this.$superInit$KernelForV8$Class = $.$superInit$KernelForV8$Class;
					this.$instance$initializer = $.$instance$initializer;
					this.$isBehavior = $.$isBehavior;
					this.$isMeta = $.$isMeta;
					this.$mixinApply$ = $.$mixinApply$;
					this.$superclass = $.$superclass;
					this.$superclass$ = $.$superclass$;
					this.$mixin = $.$mixin;
					this.$mixin$ = $.$mixin$;
					this.$enclosingObject = $.$enclosingObject;
					this.$enclosingObject$ = $.$enclosingObject$;
					this.$enclosingObjects = $.$enclosingObjects;
					this.$enclosingObjects$ = $.$enclosingObjects$;
					this.$name = $.$name;
					this.$name$ = $.$name$;
					this.$enclosingObjects$KernelForV8$Class = enclosingObjects;
					this.$super$KernelForV8$Class = runtimeSuperclass;
					this["KernelForV8`Class"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$superclass$slot = nil;
						this.$mixin$slot = nil;
						this.$enclosingObject$slot = nil;
						this.$enclosingObjects$slot = nil;
						this.$name$slot = nil;
					});
					this.basicNew = this["KernelForV8`Class"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Class";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Class";
						this.$new = $.$new;
						this.$enclosingObjects$KernelForV8$Class = enclosingObjects;
						this.$super$KernelForV8$Class = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Error = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Error";
			this.name = "KernelForV8`Error";
			this.header = "Error description: d <String> = (| description = d. |)";
			this.slots = [new SM("description", false, false)];
			this.methods = [
				new MM("superInit`KernelForV8`Error", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("isError", false, "isError = (\r	^true\r)"),
				new MM("printString", false, "printString = (\r	^description\r)"),
				new MM("signal", false, "signal = (\r	js verbatim: 'this.trace = new Error().stack'.\r	js throw: self.\r)"),
				new MM("description", true, null),
				new MM("setOnce`description:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Error = (function ($d) {
				var self = this;
				self.$super$KernelForV8$Error.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($d) {
				var self = this;
				self.$superInit$KernelForV8$Error($d);
				self.$setOnce$description$($d);
				return self;
			});
			this.$isError = (function () {
				var self = this;
				return true;
			});
			this.$printString = (function () {
				var self = this;
				return self.$description();
			});
			this.$signal = (function () {
				var self = this;
				this.trace = new Error().stack;
				throw self;
				return self;
			});
			this.$description = (function () {
				return this.$description$slot;
			});
			this.$setOnce$description$ = (function (v) {
				this.$description$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Error";
					this.$superInit$KernelForV8$Error = $.$superInit$KernelForV8$Error;
					this.$instance$initializer = $.$instance$initializer;
					this.$isError = $.$isError;
					this.$printString = $.$printString;
					this.$signal = $.$signal;
					this.$description = $.$description;
					this.$setOnce$description$ = $.$setOnce$description$;
					this.$enclosingObjects$KernelForV8$Error = enclosingObjects;
					this.$super$KernelForV8$Error = runtimeSuperclass;
					this["KernelForV8`Error"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$description$slot = nil;
					});
					this.basicNew = this["KernelForV8`Error"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Error";
				this.slots = [];
				this.methods = [
					new MM("description:", true, null),
					new MM("signal:", false, "signal: description = (\r	^(self description: description) signal\r)")
				];
				this.nestedClasses = [];
				this.$description$ = (function ($d) {
					return (new this.nonMeta.basicNew()).$instance$initializer($d);
				});
				this.$signal$ = (function ($description) {
					var self = this;
					return self.$description$($description).$signal();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Error";
						this.$description$ = $.$description$;
						this.$signal$ = $.$signal$;
						this.$enclosingObjects$KernelForV8$Error = enclosingObjects;
						this.$super$KernelForV8$Error = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Future = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Future";
			this.name = "KernelForV8`Future";
			this.header = "Future computing: block <[E]> = (\r(* The simplest possible future. It evalutes its closure in response to nearly every message. *)|\r	private blockOrValue000 <[E] | E> ::= block.\r	private state000 <Symbol> ::= #unresolved.\r|)";
			this.slots = [
				new SM("blockOrValue000", true, false),
				new SM("state000", true, false)
			];
			this.methods = [
				new MM("superInit`KernelForV8`Future", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("doesNotUnderstand:", false, "protected doesNotUnderstand: message = (\r	^message sendTo: self resolve\r)"),
				new MM("isFuture", false, "public isFuture ^<Boolean> = (\r	^true\r)"),
				new MM("resolve", false, "resolve = (\r	state000 = #resolving ifTrue: [\r		Error signal: 'Divergent evalutation of ', blockOrValue000 printString].\r	state000 = #unresolved ifTrue: [\r		state000: #resolving.\r		blockOrValue000: blockOrValue000 value.\r		[blockOrValue000 isFuture] whileTrue:\r			[blockOrValue000: blockOrValue000 resolve].\r		state000: #resolved.\r	].\r	^blockOrValue000\r)"),
				new MM("yourself", false, "public yourself = (\r	(* See InstanceMixin>>apply:withName: *)\r	^self resolve\r)"),
				new MM("blockOrValue000", true, null),
				new MM("blockOrValue000:", true, null),
				new MM("state000", true, null),
				new MM("state000:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Future = (function ($block) {
				var self = this;
				self.$super$KernelForV8$Future.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($block) {
				var self = this;
				self.$superInit$KernelForV8$Future($block);
				self.$blockOrValue000$($block);
				self.$state000$("unresolved");
				return self;
			});
			this.$doesNotUnderstand$ = (function ($message) {
				var self = this;
				return $message.$sendTo$(self.$resolve());
			});
			this.$isFuture = (function () {
				var self = this;
				return true;
			});
			this.$resolve = (function () {
				var self = this;
				if (self.$state000().$$equal("resolving")) {
					self.$enclosingObjects$KernelForV8$Future[0].$Error().$signal$(("Divergent evalutation of ").$$comma(self.$blockOrValue000().$printString()));
				} else {
					nil;
				};
				if (self.$state000().$$equal("unresolved")) {
					self.$state000$("resolving");
					self.$blockOrValue000$(self.$blockOrValue000().$value());
					{
						nil;
						for (; self.$blockOrValue000().$isFuture(); ) {
							self.$blockOrValue000$(self.$blockOrValue000().$resolve());
						};
					};
					self.$state000$("resolved");
				} else {
					nil;
				};
				return self.$blockOrValue000();
			});
			this.$yourself = (function () {
				var self = this;
				return self.$resolve();
			});
			this.$blockOrValue000 = (function () {
				return this.$blockOrValue000$slot;
			});
			this.$blockOrValue000$ = (function (v) {
				this.$blockOrValue000$slot = v;
				return this;
			});
			this.$state000 = (function () {
				return this.$state000$slot;
			});
			this.$state000$ = (function (v) {
				this.$state000$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Future";
					this.$superInit$KernelForV8$Future = $.$superInit$KernelForV8$Future;
					this.$instance$initializer = $.$instance$initializer;
					this.$doesNotUnderstand$ = $.$doesNotUnderstand$;
					this.$isFuture = $.$isFuture;
					this.$resolve = $.$resolve;
					this.$yourself = $.$yourself;
					this.$blockOrValue000 = $.$blockOrValue000;
					this.$blockOrValue000$ = $.$blockOrValue000$;
					this.$state000 = $.$state000;
					this.$state000$ = $.$state000$;
					this.$enclosingObjects$KernelForV8$Future = enclosingObjects;
					this.$super$KernelForV8$Future = runtimeSuperclass;
					this["KernelForV8`Future"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$blockOrValue000$slot = nil;
						this.$state000$slot = nil;
					});
					this.basicNew = this["KernelForV8`Future"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Future";
				this.slots = [];
				this.methods = [new MM("computing:", true, null)];
				this.nestedClasses = [];
				this.$computing$ = (function ($block) {
					return (new this.nonMeta.basicNew()).$instance$initializer($block);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Future";
						this.$computing$ = $.$computing$;
						this.$enclosingObjects$KernelForV8$Future = enclosingObjects;
						this.$super$KernelForV8$Future = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Message = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Message";
			this.name = "KernelForV8`Message";
			this.header = "Message selector: s arguments: a = (|\r	public mangledSelector = s.\r	public arguments = a.\r|)";
			this.slots = [
				new SM("mangledSelector", false, false),
				new SM("arguments", false, false)
			];
			this.methods = [
				new MM("superInit`KernelForV8`Message", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("printString", false, "printString = (\r	^'#',selector\r)"),
				new MM("selector", false, "selector = (\r	^vmmirror unmangleSelector: mangledSelector\r)"),
				new MM("sendTo:", false, "sendTo: receiver = (\r	^js call: (js propertyOf: (js propertyOf: receiver at: mangledSelector) at: (js literal: 'apply')) with: {receiver. arguments}\r)"),
				new MM("mangledSelector", true, null),
				new MM("setOnce`mangledSelector:", true, null),
				new MM("arguments", true, null),
				new MM("setOnce`arguments:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Message = (function ($s, $a) {
				var self = this;
				self.$super$KernelForV8$Message.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($s, $a) {
				var self = this;
				self.$superInit$KernelForV8$Message($s, $a);
				self.$setOnce$mangledSelector$($s);
				self.$setOnce$arguments$($a);
				return self;
			});
			this.$printString = (function () {
				var self = this;
				return ("#").$$comma(self.$selector());
			});
			this.$selector = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Message[0].$vmmirror().$unmangleSelector$(self.$mangledSelector());
			});
			this.$sendTo$ = (function ($receiver) {
				var self = this;
				return $receiver[self.$mangledSelector()].apply($receiver, self.$arguments());
			});
			this.$mangledSelector = (function () {
				return this.$mangledSelector$slot;
			});
			this.$setOnce$mangledSelector$ = (function (v) {
				this.$mangledSelector$slot = v;
				return this;
			});
			this.$arguments = (function () {
				return this.$arguments$slot;
			});
			this.$setOnce$arguments$ = (function (v) {
				this.$arguments$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Message";
					this.$superInit$KernelForV8$Message = $.$superInit$KernelForV8$Message;
					this.$instance$initializer = $.$instance$initializer;
					this.$printString = $.$printString;
					this.$selector = $.$selector;
					this.$sendTo$ = $.$sendTo$;
					this.$mangledSelector = $.$mangledSelector;
					this.$setOnce$mangledSelector$ = $.$setOnce$mangledSelector$;
					this.$arguments = $.$arguments;
					this.$setOnce$arguments$ = $.$setOnce$arguments$;
					this.$enclosingObjects$KernelForV8$Message = enclosingObjects;
					this.$super$KernelForV8$Message = runtimeSuperclass;
					this["KernelForV8`Message"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$mangledSelector$slot = nil;
						this.$arguments$slot = nil;
					});
					this.basicNew = this["KernelForV8`Message"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Message";
				this.slots = [];
				this.methods = [new MM("selector:arguments:", true, null)];
				this.nestedClasses = [];
				this.$selector$arguments$ = (function ($s, $a) {
					return (new this.nonMeta.basicNew()).$instance$initializer($s, $a);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Message";
						this.$selector$arguments$ = $.$selector$arguments$;
						this.$enclosingObjects$KernelForV8$Message = enclosingObjects;
						this.$super$KernelForV8$Message = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$MessageNotUnderstood = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`MessageNotUnderstood";
			this.name = "KernelForV8`MessageNotUnderstood";
			this.header = "MessageNotUnderstood receiver: r message: m = Error description: 'MessageNotUnderstood: ', r class name, '>>', m selector (|\r	receiver = r.\r	message = m.\r|)";
			this.slots = [
				new SM("receiver", false, false),
				new SM("message", false, false)
			];
			this.methods = [
				new MM("superInit`KernelForV8`MessageNotUnderstood", true, "description: 'MessageNotUnderstood: ', r class name, '>>', m selector"),
				new MM("instance`initializer", true, "description: 'MessageNotUnderstood: ', r class name, '>>', m selector"),
				new MM("receiver", true, null),
				new MM("setOnce`receiver:", true, null),
				new MM("message", true, null),
				new MM("setOnce`message:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$MessageNotUnderstood = (function ($r, $m) {
				var self = this;
				self.$super$KernelForV8$MessageNotUnderstood.$instance$initializer.call(self, ("MessageNotUnderstood: ").$$comma($r.$class().$name()).$$comma(">>").$$comma($m.$selector()));
				return self;
			});
			this.$instance$initializer = (function ($r, $m) {
				var self = this;
				self.$superInit$KernelForV8$MessageNotUnderstood($r, $m);
				self.$setOnce$receiver$($r);
				self.$setOnce$message$($m);
				return self;
			});
			this.$receiver = (function () {
				return this.$receiver$slot;
			});
			this.$setOnce$receiver$ = (function (v) {
				this.$receiver$slot = v;
				return this;
			});
			this.$message = (function () {
				return this.$message$slot;
			});
			this.$setOnce$message$ = (function (v) {
				this.$message$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`MessageNotUnderstood";
					this.$superInit$KernelForV8$MessageNotUnderstood = $.$superInit$KernelForV8$MessageNotUnderstood;
					this.$instance$initializer = $.$instance$initializer;
					this.$receiver = $.$receiver;
					this.$setOnce$receiver$ = $.$setOnce$receiver$;
					this.$message = $.$message;
					this.$setOnce$message$ = $.$setOnce$message$;
					this.$enclosingObjects$KernelForV8$MessageNotUnderstood = enclosingObjects;
					this.$super$KernelForV8$MessageNotUnderstood = runtimeSuperclass;
					this["KernelForV8`MessageNotUnderstood"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$receiver$slot = nil;
						this.$message$slot = nil;
					});
					this.basicNew = this["KernelForV8`MessageNotUnderstood"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`MessageNotUnderstood";
				this.slots = [];
				this.methods = [new MM("receiver:message:", true, null)];
				this.nestedClasses = [];
				this.$receiver$message$ = (function ($r, $m) {
					return (new this.nonMeta.basicNew()).$instance$initializer($r, $m);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`MessageNotUnderstood";
						this.$receiver$message$ = $.$receiver$message$;
						this.$enclosingObjects$KernelForV8$MessageNotUnderstood = enclosingObjects;
						this.$super$KernelForV8$MessageNotUnderstood = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Metaclass = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Metaclass";
			this.name = "KernelForV8`Metaclass";
			this.header = "Metaclass = (\r(* Describe the class in this comment. *)|\rsuperclass\rmixin\renclosingObject\rname\rthisClass\r|)";
			this.slots = [
				new SM("superclass", true, false),
				new SM("mixin", true, false),
				new SM("enclosingObject", true, false),
				new SM("name", true, false),
				new SM("thisClass", true, false)
			];
			this.methods = [
				new MM("superInit`KernelForV8`Metaclass", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("isBehavior", false, "isBehavior = (\r	^true\r)"),
				new MM("isMeta", false, "isMeta = (\r	^true\r)"),
				new MM("superclass", true, null),
				new MM("superclass:", true, null),
				new MM("mixin", true, null),
				new MM("mixin:", true, null),
				new MM("enclosingObject", true, null),
				new MM("enclosingObject:", true, null),
				new MM("name", true, null),
				new MM("name:", true, null),
				new MM("thisClass", true, null),
				new MM("thisClass:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Metaclass = (function () {
				var self = this;
				self.$super$KernelForV8$Metaclass.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Metaclass();
				return self;
			});
			this.$isBehavior = (function () {
				var self = this;
				return true;
			});
			this.$isMeta = (function () {
				var self = this;
				return true;
			});
			this.$superclass = (function () {
				return this.$superclass$slot;
			});
			this.$superclass$ = (function (v) {
				this.$superclass$slot = v;
				return this;
			});
			this.$mixin = (function () {
				return this.$mixin$slot;
			});
			this.$mixin$ = (function (v) {
				this.$mixin$slot = v;
				return this;
			});
			this.$enclosingObject = (function () {
				return this.$enclosingObject$slot;
			});
			this.$enclosingObject$ = (function (v) {
				this.$enclosingObject$slot = v;
				return this;
			});
			this.$name = (function () {
				return this.$name$slot;
			});
			this.$name$ = (function (v) {
				this.$name$slot = v;
				return this;
			});
			this.$thisClass = (function () {
				return this.$thisClass$slot;
			});
			this.$thisClass$ = (function (v) {
				this.$thisClass$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Metaclass";
					this.$superInit$KernelForV8$Metaclass = $.$superInit$KernelForV8$Metaclass;
					this.$instance$initializer = $.$instance$initializer;
					this.$isBehavior = $.$isBehavior;
					this.$isMeta = $.$isMeta;
					this.$superclass = $.$superclass;
					this.$superclass$ = $.$superclass$;
					this.$mixin = $.$mixin;
					this.$mixin$ = $.$mixin$;
					this.$enclosingObject = $.$enclosingObject;
					this.$enclosingObject$ = $.$enclosingObject$;
					this.$name = $.$name;
					this.$name$ = $.$name$;
					this.$thisClass = $.$thisClass;
					this.$thisClass$ = $.$thisClass$;
					this.$enclosingObjects$KernelForV8$Metaclass = enclosingObjects;
					this.$super$KernelForV8$Metaclass = runtimeSuperclass;
					this["KernelForV8`Metaclass"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$superclass$slot = nil;
						this.$mixin$slot = nil;
						this.$enclosingObject$slot = nil;
						this.$name$slot = nil;
						this.$thisClass$slot = nil;
					});
					this.basicNew = this["KernelForV8`Metaclass"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Metaclass";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Metaclass";
						this.$new = $.$new;
						this.$enclosingObjects$KernelForV8$Metaclass = enclosingObjects;
						this.$super$KernelForV8$Metaclass = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Mixin = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Mixin";
			this.name = "KernelForV8`Mixin";
			this.header = "Mixin fromRuntimeMixin: rm = (js assign: (js propertyOf: self at: (js literal: 'runtimeMixin')) toBe: rm)";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Mixin", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("applyTo:", false, "public applyTo: superclass <Class> ^<Class> = (\r	(* assert: [isTopLevel] message: 'Only top-level mixins may be applied directly' *)\r	assert: [isMeta not] message: 'Only instance-side mixins may be applied directly'.\r	^self applyTo: superclass withName: (superclass name, ' <: ', name)\r)"),
				new MM("applyTo:withName:", false, "public applyTo: superclass <Class> withName: name <String> ^<Class> = (\r	^vmmirror \r		applyMixin: (js propertyOf: self at: (js literal: 'runtimeMixin'))\r		toSuperclass: superclass\r		withEnclosingObjects: {nil}\r)"),
				new MM("isMeta", false, "public isMeta ^<Boolean> = (\r	^js operator: '===' with: (js propertyOf: (js propertyOf: self at: (js literal: 'runtimeMixin')) at: (js literal: 'meta')) and: (js ident: 'undefined')\r)"),
				new MM("name", false, "public name ^<Symbol> = (\r	^isMeta \r		ifTrue: [(js propertyOf: (js propertyOf: (js propertyOf: self at: (js literal: 'runtimeMixin')) at: (js literal: 'nonMeta')) at: (js literal: 'name')), ' class']\r		ifFalse: [js propertyOf: (js propertyOf: self at: (js literal: 'runtimeMixin')) at: (js literal: 'name')].\r)"),
				new MM("printString", false, "public printString ^<String> = (\r	^name, ' mixin'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Mixin = (function ($rm) {
				var self = this;
				self.$super$KernelForV8$Mixin.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($rm) {
				var self = this;
				self.$superInit$KernelForV8$Mixin($rm);
				self.runtimeMixin = $rm;
				return self;
			});
			this.$applyTo$ = (function ($superclass) {
				var self = this;
				self.$assert$message$((function () {
					return self.$isMeta().$not();
				}), "Only instance-side mixins may be applied directly");
				return self.$applyTo$withName$($superclass, $superclass.$name().$$comma(" <: ").$$comma(self.$name()));
			});
			this.$applyTo$withName$ = (function ($superclass, $name) {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Mixin[0].$vmmirror().$applyMixin$toSuperclass$withEnclosingObjects$(self.runtimeMixin, $superclass, [nil]);
			});
			this.$isMeta = (function () {
				var self = this;
				return self.runtimeMixin.meta === undefined;
			});
			this.$name = (function () {
				var self = this;
				return self.$isMeta().$ifTrue$ifFalse$((function () {
					return self.runtimeMixin.nonMeta.name.$$comma(" class");
				}), (function () {
					return self.runtimeMixin.name;
				}));
			});
			this.$printString = (function () {
				var self = this;
				return self.$name().$$comma(" mixin");
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Mixin";
					this.$superInit$KernelForV8$Mixin = $.$superInit$KernelForV8$Mixin;
					this.$instance$initializer = $.$instance$initializer;
					this.$applyTo$ = $.$applyTo$;
					this.$applyTo$withName$ = $.$applyTo$withName$;
					this.$isMeta = $.$isMeta;
					this.$name = $.$name;
					this.$printString = $.$printString;
					this.$enclosingObjects$KernelForV8$Mixin = enclosingObjects;
					this.$super$KernelForV8$Mixin = runtimeSuperclass;
					this["KernelForV8`Mixin"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Mixin"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Mixin";
				this.slots = [];
				this.methods = [new MM("fromRuntimeMixin:", true, null)];
				this.nestedClasses = [];
				this.$fromRuntimeMixin$ = (function ($rm) {
					return (new this.nonMeta.basicNew()).$instance$initializer($rm);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Mixin";
						this.$fromRuntimeMixin$ = $.$fromRuntimeMixin$;
						this.$enclosingObjects$KernelForV8$Mixin = enclosingObjects;
						this.$super$KernelForV8$Mixin = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Number = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Number";
			this.name = "KernelForV8`Number";
			this.header = "Number uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Number", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("*", false, "* other = (\r	^js operator: '*' with: self and: other\r)"),
				new MM("**", false, "** exponent = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'pow')) with: {self. exponent}\r)"),
				new MM("+", false, "+ other = (\r	^js operator: '+' with: self and: other\r)"),
				new MM("-", false, "- other = (\r	^js operator: '-' with: self and: other\r)"),
				new MM("/", false, "/ other = (\r	^js operator: '/' with: self and: other\r)"),
				new MM("//", false, "// other = (\r	^(self / other) floor\r)"),
				new MM("<", false, "< other = (\r	^js operator: '<' with: self and: other\r)"),
				new MM("<<", false, "<< other = (\r	^js operator: '<<' with: self and: other\r)"),
				new MM("<=", false, "<= other = (\r	^js operator: '<=' with: self and: other\r)"),
				new MM("=", false, "= other = (\r	^js operator: '===' with: self and: other\r)"),
				new MM(">", false, "> other = (\r	^js operator: '>' with: self and: other\r)"),
				new MM(">=", false, ">= other = (\r	^js operator: '>=' with: self and: other\r)"),
				new MM(">>", false, ">> other = (\r	^js operator: '>>' with: self and: other\r)"),
				new MM("@", false, "@ y = (\r	^platform graphics Point x: self y: y\r)"),
				new MM("\\\\", false, "\\\\ other = (\r	^self - (self // other * other)\r)"),
				new MM("abs", false, "abs = (\r	self >= 0 ifTrue: [^self] ifFalse: [^-1.0 * self]\r)"),
				new MM("asFloat", false, "asFloat = (\r	^self * 1.0\r)"),
				new MM("asInteger", false, "asInteger = (\r	^self truncated\r)"),
				new MM("asString", false, "asString = (\r	^js call: (js propertyOf: self at: (js literal: 'toString')) with: {}\r)"),
				new MM("between:and:", false, "between: min and: max = (\r	^self <= max and: [ self >= min ]\r)"),
				new MM("bitAnd:", false, "bitAnd: other = (\r	^js operator: '&' with: self and: other\r)"),
				new MM("bitInvert", false, "bitInvert = (\r	^ -1 - self\r)"),
				new MM("bitOr:", false, "bitOr: other = (\r	^js operator: '|' with: self and: other\r)"),
				new MM("bitXor:", false, "bitXor: other = (\r	^js operator: '^' with: self and: other\r)"),
				new MM("ceiling", false, "ceiling = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'ceil')) with: {self}\r)"),
				new MM("cos", false, "cos = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'cos')) with: {self}\r)"),
				new MM("exp", false, "exp = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'exp')) with: {self}\r)"),
				new MM("floor", false, "floor = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'floor')) with: {self}\r)"),
				new MM("hash", false, "hash = (\r	^self rem: 16rFFFFFF\r)"),
				new MM("isNumber", false, "isNumber = (\r	^true\r)"),
				new MM("ln", false, "ln = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'log')) with: {self}\r)"),
				new MM("max:", false, "max: other = (\r	^self > other ifTrue: [ self ] ifFalse: [ other ]\r)"),
				new MM("min:", false, "min: other = (\r	^self < other ifTrue: [ self ] ifFalse: [ other ]\r)"),
				new MM("printString", false, "printString = (\r	^js call: (js propertyOf: self at: (js literal: 'toString')) with: {}\r)"),
				new MM("quo:", false, "quo: other = (\r	^(self / other) truncated\r)"),
				new MM("rem:", false, "rem: other = (\r	^self - ((self quo: other) * other)\r)"),
				new MM("sign", false, "sign = (\r	self > 0 ifTrue: [^1].\r	self < 0 ifTrue: [^-1].\r	^0\r)"),
				new MM("sin", false, "sin = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'sin')) with: {self}\r)"),
				new MM("sqrt", false, "sqrt = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'sqrt')) with: {self}\r)"),
				new MM("tan", false, "tan = (\r	^js call: (js propertyOf: (js ident: 'Math') at: (js literal: 'tan')) with: {self}\r)"),
				new MM("timesRepeat:", false, "timesRepeat: block = (\r	| i ::= 0. |	\r	js \r		for: (js verbatim: '')\r		while: (js operator: '<' with: i and: (js ident: 'this')) \r		step: (js postfixOperator: '++' on: i)\r		do: (js block: {js call: block with: {}})\r)"),
				new MM("to:", false, "to: stop = (\r	^platform collections Interval from: self to: stop\r)"),
				new MM("to:do:", false, "to: limit do: block = (\r	| i ::= self. |	\r	js \r		for: (js verbatim: '')\r		while: (js operator: '<=' with: i and: limit) \r		step: (js postfixOperator: '++' on: i)\r		do: (js block: {js call: block with: {i}})\r)"),
				new MM("truncated", false, "truncated = (\r	(* ^self > 0 ifTrue: [self floor] ifFalse: [self ceiling] *)\r	^js operator: '|' with: self and: (js literal: 0)\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Number = (function () {
				var self = this;
				self.$super$KernelForV8$Number.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Number();
				return self;
			});
			this.$$times = (function ($other) {
				var self = this;
				return self * $other;
			});
			this.$$times$times = (function ($exponent) {
				var self = this;
				return Math.pow(self, $exponent);
			});
			this.$$plus = (function ($other) {
				var self = this;
				return self + $other;
			});
			this.$$minus = (function ($other) {
				var self = this;
				return self - $other;
			});
			this.$$over = (function ($other) {
				var self = this;
				return self / $other;
			});
			this.$$over$over = (function ($other) {
				var self = this;
				return (self / $other).$floor();
			});
			this.$$less = (function ($other) {
				var self = this;
				return self < $other;
			});
			this.$$less$less = (function ($other) {
				var self = this;
				return self << $other;
			});
			this.$$less$equal = (function ($other) {
				var self = this;
				return self <= $other;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return self === $other;
			});
			this.$$greater = (function ($other) {
				var self = this;
				return self > $other;
			});
			this.$$greater$equal = (function ($other) {
				var self = this;
				return self >= $other;
			});
			this.$$greater$greater = (function ($other) {
				var self = this;
				return self >> $other;
			});
			this.$$at = (function ($y) {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Number[0].$platform().$graphics().$Point().$x$y$(self, $y);
			});
			this.$$back$back = (function ($other) {
				var self = this;
				return self - (self.$$over$over($other) * $other);
			});
			this.$abs = (function () {
				var self = this;
				if (self >= 0) {
					return self;
				} else {
					return -1 * self;
				};
				return self;
			});
			this.$asFloat = (function () {
				var self = this;
				return self * 1;
			});
			this.$asInteger = (function () {
				var self = this;
				return self.$truncated();
			});
			this.$asString = (function () {
				var self = this;
				return self.toString();
			});
			this.$between$and$ = (function ($min, $max) {
				var self = this;
				return self.$$less$equal($max) && self.$$greater$equal($min);
			});
			this.$bitAnd$ = (function ($other) {
				var self = this;
				return self & $other;
			});
			this.$bitInvert = (function () {
				var self = this;
				return -1 - self;
			});
			this.$bitOr$ = (function ($other) {
				var self = this;
				return self | $other;
			});
			this.$bitXor$ = (function ($other) {
				var self = this;
				return self ^ $other;
			});
			this.$ceiling = (function () {
				var self = this;
				return Math.ceil(self);
			});
			this.$cos = (function () {
				var self = this;
				return Math.cos(self);
			});
			this.$exp = (function () {
				var self = this;
				return Math.exp(self);
			});
			this.$floor = (function () {
				var self = this;
				return Math.floor(self);
			});
			this.$hash = (function () {
				var self = this;
				return self.$rem$(16777215);
			});
			this.$isNumber = (function () {
				var self = this;
				return true;
			});
			this.$ln = (function () {
				var self = this;
				return Math.log(self);
			});
			this.$max$ = (function ($other) {
				var self = this;
				return self.$$greater($other).$ifTrue$ifFalse$((function () {
					return self;
				}), (function () {
					return $other;
				}));
			});
			this.$min$ = (function ($other) {
				var self = this;
				return self.$$less($other).$ifTrue$ifFalse$((function () {
					return self;
				}), (function () {
					return $other;
				}));
			});
			this.$printString = (function () {
				var self = this;
				return self.toString();
			});
			this.$quo$ = (function ($other) {
				var self = this;
				return (self / $other).$truncated();
			});
			this.$rem$ = (function ($other) {
				var self = this;
				return self - (self.$quo$($other) * $other);
			});
			this.$sign = (function () {
				var self = this;
				if (self > 0) {
					return 1;
				} else {
					nil;
				};
				if (self < 0) {
					return -1;
				} else {
					nil;
				};
				return 0;
			});
			this.$sin = (function () {
				var self = this;
				return Math.sin(self);
			});
			this.$sqrt = (function () {
				var self = this;
				return Math.sqrt(self);
			});
			this.$tan = (function () {
				var self = this;
				return Math.tan(self);
			});
			this.$timesRepeat$ = (function ($block) {
				var self = this;
				var $i = nil;
				$i = 0;
				for (; $i < this; $i++) {
					$block();
				};
				return self;
			});
			this.$to$ = (function ($stop) {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Number[0].$platform().$collections().$Interval().$from$to$(self, $stop);
			});
			this.$to$do$ = (function ($limit, $block) {
				var self = this;
				var $i = nil;
				$i = self;
				for (; $i <= $limit; $i++) {
					$block($i);
				};
				return self;
			});
			this.$truncated = (function () {
				var self = this;
				return self | 0;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Number";
					this.$superInit$KernelForV8$Number = $.$superInit$KernelForV8$Number;
					this.$instance$initializer = $.$instance$initializer;
					this.$$times = $.$$times;
					this.$$times$times = $.$$times$times;
					this.$$plus = $.$$plus;
					this.$$minus = $.$$minus;
					this.$$over = $.$$over;
					this.$$over$over = $.$$over$over;
					this.$$less = $.$$less;
					this.$$less$less = $.$$less$less;
					this.$$less$equal = $.$$less$equal;
					this.$$equal = $.$$equal;
					this.$$greater = $.$$greater;
					this.$$greater$equal = $.$$greater$equal;
					this.$$greater$greater = $.$$greater$greater;
					this.$$at = $.$$at;
					this.$$back$back = $.$$back$back;
					this.$abs = $.$abs;
					this.$asFloat = $.$asFloat;
					this.$asInteger = $.$asInteger;
					this.$asString = $.$asString;
					this.$between$and$ = $.$between$and$;
					this.$bitAnd$ = $.$bitAnd$;
					this.$bitInvert = $.$bitInvert;
					this.$bitOr$ = $.$bitOr$;
					this.$bitXor$ = $.$bitXor$;
					this.$ceiling = $.$ceiling;
					this.$cos = $.$cos;
					this.$exp = $.$exp;
					this.$floor = $.$floor;
					this.$hash = $.$hash;
					this.$isNumber = $.$isNumber;
					this.$ln = $.$ln;
					this.$max$ = $.$max$;
					this.$min$ = $.$min$;
					this.$printString = $.$printString;
					this.$quo$ = $.$quo$;
					this.$rem$ = $.$rem$;
					this.$sign = $.$sign;
					this.$sin = $.$sin;
					this.$sqrt = $.$sqrt;
					this.$tan = $.$tan;
					this.$timesRepeat$ = $.$timesRepeat$;
					this.$to$ = $.$to$;
					this.$to$do$ = $.$to$do$;
					this.$truncated = $.$truncated;
					this.$enclosingObjects$KernelForV8$Number = enclosingObjects;
					this.$super$KernelForV8$Number = runtimeSuperclass;
					this["KernelForV8`Number"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Number"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Number";
				this.slots = [];
				this.methods = [new MM("uninstantiable", true, null)];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Number";
						this.$uninstantiable = $.$uninstantiable;
						this.$enclosingObjects$KernelForV8$Number = enclosingObjects;
						this.$super$KernelForV8$Number = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Object = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`Object";
			this.name = "KernelForV8`Object";
			this.header = "Object = ImplementationBase ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`Object", true, "ImplementationBase"),
				new MM("instance`initializer", true, "ImplementationBase"),
				new MM("=", false, "= other = (\r	^js operator: '===' with: self and: other\r)"),
				new MM("==", false, "== other = (\r	^js operator: '===' with: self and: other\r)"),
				new MM("Array", false, "Array = (\r	^outer KernelForV8 Array\r)"),
				new MM("Character", false, "Character = (\r	^outer KernelForV8 String\r)"),
				new MM("Error", false, "Error = (\r	^outer KernelForV8 Error\r)"),
				new MM("Future", false, "Future = (\r	^outer KernelForV8 Future\r)"),
				new MM("Object", false, "Object = (\r	^outer KernelForV8 Object\r)"),
				new MM("String", false, "String = (\r	^outer KernelForV8 String\r)"),
				new MM("assert:message:", false, "assert: condition <[Boolean]> message: message = (\r	(* Raises an error with the given message if and only if condition evaluates to false. *)\r	condition isBlock ifFalse: [Error signal: 'Block required'].\r	condition value ifFalse: [Error signal: 'Assertion failed: ', message]\r)"),
				new MM("class", false, "class = (\r	^js propertyOf: (js ident: 'this') at: (js literal: 'newspeakClass')\r)"),
				new MM("clone", false, "clone = (\r	| originalProto cloneConstructor newObject propNames |\r	originalProto:: js call: (js propertyOf: (js ident: 'Object') at: (js literal: 'getPrototypeOf')) with: {self}.\r	cloneConstructor:: js functionOf: {} body: (js block: {}).\r	js assign: (js propertyOf: cloneConstructor at: (js literal: 'prototype')) toBe: originalProto.\r	newObject:: js new: cloneConstructor with: {}.\r	propNames:: js call: (js propertyOf: (js ident: 'Object') at: (js literal: 'getOwnPropertyNames')) with: {self}.\r	js call: (js propertyOf: propNames at: (js literal: 'forEach')) with: {js functionOf: {'name'} body: (js block: {\r		js assign: (js propertyOf: newObject at: (js ident: 'name'))\r			toBe: (js propertyOf: self at: (js ident: 'name'))\r	})}.\r	^newObject\r)"),
				new MM("doesNotUnderstand:", false, "doesNotUnderstand: message = (\r	((message selector startsWith: 'is') and: [message arguments size = 0])\r		ifTrue: [^false].\r	^(MessageNotUnderstood receiver: self message: message) signal\r)"),
				new MM("hash", false, "hash = (\r	^self identityHash\r)"),
				new MM("identityHash", false, "identityHash = (\r	(* It might be worth giving every object the hashCode field at instantiation to avoid map transitions. *)\r	js verbatim: 'while(this.hashCode === 0) this.hashCode = Math.random() * 0x3FFFFFF | 0'.\r	^js verbatim: 'this.hashCode'\r)"),
				new MM("ifNil:", false, "ifNil: nilBlock = (\r	^self\r)"),
				new MM("ifNil:ifNotNil:", false, "ifNil: nilBlock ifNotNil: notNilBlock = (\r	^notNilBlock value: self\r)"),
				new MM("ifNotNil:", false, "ifNotNil: nonNilBlock = (\r	^nonNilBlock value: self\r)"),
				new MM("isAlien", false, "isAlien = (\r	^false\r)"),
				new MM("isBlock", false, "isBlock = (\r	^false\r)"),
				new MM("isExpat", false, "isExpat = (\r	^false\r)"),
				new MM("isFuture", false, "isFuture = (\r	^false\r)"),
				new MM("isNil", false, "isNil = (\r	^false\r)"),
				new MM("notNil", false, "notNil = (\r	^true\r)"),
				new MM("out", false, "out = (\r	print: self\r)"),
				new MM("print:", false, "print: obj = (\r	js call: (js propertyOf: (js ident: 'console') at: (js literal: 'log')) with: {obj printString}\r)"),
				new MM("printString", false, "printString = (\r	^'instance of ', self class name\r)"),
				new MM("yourself", false, "yourself = (\r	^self\r)"),
				new MM("~=", false, "~= other = (\r	^(self = other) not\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$Object = (function () {
				var self = this;
				self.$super$KernelForV8$Object.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$Object();
				return self;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return self === $other;
			});
			this.$$equal$equal = (function ($other) {
				var self = this;
				return self === $other;
			});
			this.$Array = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$Array();
			});
			this.$Character = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$String();
			});
			this.$Error = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$Error();
			});
			this.$Future = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$Future();
			});
			this.$Object = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$Object();
			});
			this.$String = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$Object[0].$String();
			});
			this.$assert$message$ = (function ($condition, $message) {
				var self = this;
				if (!$condition.$isBlock()) {
					self.$Error().$signal$("Block required");
				} else {
					nil;
				};
				if (!$condition.$value()) {
					self.$Error().$signal$(("Assertion failed: ").$$comma($message));
				} else {
					nil;
				};
				return self;
			});
			this.$class = (function () {
				var self = this;
				return this.newspeakClass;
			});
			this.$clone = (function () {
				var self = this;
				var $originalProto = nil;
				var $cloneConstructor = nil;
				var $newObject = nil;
				var $propNames = nil;
				$originalProto = Object.getPrototypeOf(self);
				$cloneConstructor = (function () {});
				$cloneConstructor.prototype = $originalProto;
				$newObject = new $cloneConstructor();
				$propNames = Object.getOwnPropertyNames(self);
				$propNames.forEach((function (name) {
					$newObject[name] = self[name];
				}));
				return $newObject;
			});
			this.$doesNotUnderstand$ = (function ($message) {
				var self = this;
				if ($message.$selector().$startsWith$("is") && $message.$arguments().$size().$$equal(0)) {
					return false;
				} else {
					nil;
				};
				return self.$enclosingObjects$KernelForV8$Object[0].$MessageNotUnderstood().$receiver$message$(self, $message).$signal();
			});
			this.$hash = (function () {
				var self = this;
				return self.$identityHash();
			});
			this.$identityHash = (function () {
				var self = this;
				while(this.hashCode === 0) this.hashCode = Math.random() * 0x3FFFFFF | 0;
				return this.hashCode;
			});
			this.$ifNil$ = (function ($nilBlock) {
				var self = this;
				return self;
			});
			this.$ifNil$ifNotNil$ = (function ($nilBlock, $notNilBlock) {
				var self = this;
				return $notNilBlock.$value$(self);
			});
			this.$ifNotNil$ = (function ($nonNilBlock) {
				var self = this;
				return $nonNilBlock.$value$(self);
			});
			this.$isAlien = (function () {
				var self = this;
				return false;
			});
			this.$isBlock = (function () {
				var self = this;
				return false;
			});
			this.$isExpat = (function () {
				var self = this;
				return false;
			});
			this.$isFuture = (function () {
				var self = this;
				return false;
			});
			this.$isNil = (function () {
				var self = this;
				return false;
			});
			this.$notNil = (function () {
				var self = this;
				return true;
			});
			this.$out = (function () {
				var self = this;
				self.$print$(self);
				return self;
			});
			this.$print$ = (function ($obj) {
				var self = this;
				console.log($obj.$printString());
				return self;
			});
			this.$printString = (function () {
				var self = this;
				return ("instance of ").$$comma(self.$class().$name());
			});
			this.$yourself = (function () {
				var self = this;
				return self;
			});
			this.$$tilde$equal = (function ($other) {
				var self = this;
				return self.$$equal($other).$not();
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`Object";
					this.$superInit$KernelForV8$Object = $.$superInit$KernelForV8$Object;
					this.$instance$initializer = $.$instance$initializer;
					this.$$equal = $.$$equal;
					this.$$equal$equal = $.$$equal$equal;
					this.$Array = $.$Array;
					this.$Character = $.$Character;
					this.$Error = $.$Error;
					this.$Future = $.$Future;
					this.$Object = $.$Object;
					this.$String = $.$String;
					this.$assert$message$ = $.$assert$message$;
					this.$class = $.$class;
					this.$clone = $.$clone;
					this.$doesNotUnderstand$ = $.$doesNotUnderstand$;
					this.$hash = $.$hash;
					this.$identityHash = $.$identityHash;
					this.$ifNil$ = $.$ifNil$;
					this.$ifNil$ifNotNil$ = $.$ifNil$ifNotNil$;
					this.$ifNotNil$ = $.$ifNotNil$;
					this.$isAlien = $.$isAlien;
					this.$isBlock = $.$isBlock;
					this.$isExpat = $.$isExpat;
					this.$isFuture = $.$isFuture;
					this.$isNil = $.$isNil;
					this.$notNil = $.$notNil;
					this.$out = $.$out;
					this.$print$ = $.$print$;
					this.$printString = $.$printString;
					this.$yourself = $.$yourself;
					this.$$tilde$equal = $.$$tilde$equal;
					this.$enclosingObjects$KernelForV8$Object = enclosingObjects;
					this.$super$KernelForV8$Object = runtimeSuperclass;
					this["KernelForV8`Object"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`Object"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`Object";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`Object";
						this.$new = $.$new;
						this.$enclosingObjects$KernelForV8$Object = enclosingObjects;
						this.$super$KernelForV8$Object = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$String = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`String";
			this.name = "KernelForV8`String";
			this.header = "String uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`String", true, " "),
				new MM("instance`initializer", true, " "),
				new MM(",", false, ", other = (\r	^js call: (js propertyOf: self at: (js literal: 'concat')) with: {other}\r)"),
				new MM("<=", false, "<= other = (\r	^js operator: '<=' with: self and: other\r)"),
				new MM("=", false, "= other = (\r	^js operator: '===' with: self and: other\r)"),
				new MM(">=", false, ">= other = (\r	^js operator: '>=' with: self and: other\r)"),
				new MM("asNumber", false, "asNumber = (\r	^js call: (js ident: 'parseInt') with: {self}\r)"),
				new MM("asString", false, "asString = (\r	^self\r)"),
				new MM("asSymbol", false, "asSymbol = (\r	^self\r)"),
				new MM("at:", false, "at: index = (\r	^js propertyOf: (js ident: 'this') at: (js operator: '-' with: index and: (js literal: 1))\r)"),
				new MM("at:put:", false, "at: index put: value = (\r	^js assign: (js propertyOf: (js ident: 'this') at: (js operator: '-' with: index and: (js literal: 1)))\r	 toBe: value\r)"),
				new MM("between:and:", false, "between: min and: max = (\r	^self <= max and: [ self >= min ]\r)"),
				new MM("charCode", false, "charCode = (\r	#BOGUS.\r	^js verbatim: 'this.charCodeAt(0)'\r)"),
				new MM("class", false, "class = (\r	^String\r)"),
				new MM("copyFrom:to:", false, "copyFrom: start to: end = (\r	^js call: (js propertyOf: self at: (js literal: 'substring')) with: {start - 1. end}\r)"),
				new MM("do:", false, "do: action = (\r	|\r	i ::= 0.\r	len ::= js verbatim: 'this.length'.\r	|\r	js\r		for: (js verbatim: '')\r		while: (js operator: '<' with: i and: len)\r		step: (js postfixOperator: '++' on: i)\r		do: (js block: {\r			js call: action with: {js propertyOf: self at: i}}).\r)"),
				new MM("first", false, "first = (\r	^self at: 1\r)"),
				new MM("hash", false, "hash = (\r	js var: 'l' value: (js propertyOf: (js ident: 'this') at: (js literal: 'length')).\r	^js ternaryIf: (js operator: '==' with: (js ident: 'l') and: (js literal: 0))\r		then: (js literal: 0)\r		else: (js verbatim: '(l * 32 ^ this.charCodeAt(0)) * 32 ^ this.charCodeAt(l - 1)')\r)"),
				new MM("identityHash", false, "identityHash = (\r	^self hash\r)"),
				new MM("includes:", false, "includes: object = (\r	self do: [:element | object = element ifTrue: [^true]].\r	^false.	\r)"),
				new MM("inject:into:", false, "public inject: initialValue <X> into: foldBlock <[:X def :E | X]> ^<X> = (\r	| runningValue <X> |\r	runningValue:: initialValue.\r	self do: [:element <X> | runningValue:: foldBlock value: runningValue value: element].\r	^runningValue\r)"),
				new MM("isString", false, "isString = (\r	^true\r)"),
				new MM("last", false, "last = (\r	^self at: self size\r)"),
				new MM("printString", false, "printString = (\r	^js verbatim: '\"''\"+this.toString()+\"''\"'\r)"),
				new MM("replaceAll:with:", false, "replaceAll: substring with: newSubstring = (\r	#BOGUS. (* Ought to be able to say this.replace(target, replacement, 'g'). *)\r	js var: 'target' value: substring.\r	js var: 'replacement' value: newSubstring.\r	^js verbatim: 'this.replace(new RegExp(target.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, \"\\\\$&\"), \"g\"), replacement)'\r)"),
				new MM("size", false, "size = (\r	^js verbatim: 'this.length'\r)"),
				new MM("splitBy:", false, "splitBy: str = (\r	^js call: (js propertyOf: self at: (js literal: 'split')) with: {str}\r)"),
				new MM("startsWith:", false, "startsWith: substring = (\r	^js operator: '==' with: (js literal: 0) and: (js call: (js propertyOf: self at: (js literal: 'indexOf')) with: {substring})\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$String = (function () {
				var self = this;
				self.$super$KernelForV8$String.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$String();
				return self;
			});
			this.$$comma = (function ($other) {
				var self = this;
				return self.concat($other);
			});
			this.$$less$equal = (function ($other) {
				var self = this;
				return self <= $other;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return self === $other;
			});
			this.$$greater$equal = (function ($other) {
				var self = this;
				return self >= $other;
			});
			this.$asNumber = (function () {
				var self = this;
				return parseInt(self);
			});
			this.$asString = (function () {
				var self = this;
				return self;
			});
			this.$asSymbol = (function () {
				var self = this;
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				return this[$index - 1];
			});
			this.$at$put$ = (function ($index, $value) {
				var self = this;
				return this[$index - 1] = $value;
			});
			this.$between$and$ = (function ($min, $max) {
				var self = this;
				return self.$$less$equal($max) && self.$$greater$equal($min);
			});
			this.$charCode = (function () {
				var self = this;
				"BOGUS";
				return this.charCodeAt(0);
			});
			this.$class = (function () {
				var self = this;
				return self.$enclosingObjects$KernelForV8$String[0].$String();
			});
			this.$copyFrom$to$ = (function ($start, $end) {
				var self = this;
				return self.substring($start - 1, $end);
			});
			this.$do$ = (function ($action) {
				var self = this;
				var $i = nil;
				var $len = nil;
				$i = 0;
				$len = this.length;
				for (; $i < $len; $i++) {
					$action(self[$i]);
				};
				return self;
			});
			this.$first = (function () {
				var self = this;
				return self.$at$(1);
			});
			this.$hash = (function () {
				var self = this;
				var l = this.length;
				return (l == 0 ? 0 : (l * 32 ^ this.charCodeAt(0)) * 32 ^ this.charCodeAt(l - 1));
			});
			this.$identityHash = (function () {
				var self = this;
				return self.$hash();
			});
			this.$includes$ = (function ($object) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($element) {
						return $object.$$equal($element).$ifTrue$((function () {
							{
								NLR.value = true;
								throw NLR;
							};
						}));
					}));
					return false;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$inject$into$ = (function ($initialValue, $foldBlock) {
				var self = this;
				var $runningValue = nil;
				$runningValue = $initialValue;
				self.$do$((function ($element) {
					return $runningValue = $foldBlock.$value$value$($runningValue, $element);
				}));
				return $runningValue;
			});
			this.$isString = (function () {
				var self = this;
				return true;
			});
			this.$last = (function () {
				var self = this;
				return self.$at$(self.$size());
			});
			this.$printString = (function () {
				var self = this;
				return "'"+this.toString()+"'";
			});
			this.$replaceAll$with$ = (function ($substring, $newSubstring) {
				var self = this;
				"BOGUS";
				var target = $substring;
				var replacement = $newSubstring;
				return this.replace(new RegExp(target.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), replacement);
			});
			this.$size = (function () {
				var self = this;
				return this.length;
			});
			this.$splitBy$ = (function ($str) {
				var self = this;
				return self.split($str);
			});
			this.$startsWith$ = (function ($substring) {
				var self = this;
				return 0 == self.indexOf($substring);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`String";
					this.$superInit$KernelForV8$String = $.$superInit$KernelForV8$String;
					this.$instance$initializer = $.$instance$initializer;
					this.$$comma = $.$$comma;
					this.$$less$equal = $.$$less$equal;
					this.$$equal = $.$$equal;
					this.$$greater$equal = $.$$greater$equal;
					this.$asNumber = $.$asNumber;
					this.$asString = $.$asString;
					this.$asSymbol = $.$asSymbol;
					this.$at$ = $.$at$;
					this.$at$put$ = $.$at$put$;
					this.$between$and$ = $.$between$and$;
					this.$charCode = $.$charCode;
					this.$class = $.$class;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$do$ = $.$do$;
					this.$first = $.$first;
					this.$hash = $.$hash;
					this.$identityHash = $.$identityHash;
					this.$includes$ = $.$includes$;
					this.$inject$into$ = $.$inject$into$;
					this.$isString = $.$isString;
					this.$last = $.$last;
					this.$printString = $.$printString;
					this.$replaceAll$with$ = $.$replaceAll$with$;
					this.$size = $.$size;
					this.$splitBy$ = $.$splitBy$;
					this.$startsWith$ = $.$startsWith$;
					this.$enclosingObjects$KernelForV8$String = enclosingObjects;
					this.$super$KernelForV8$String = runtimeSuperclass;
					this["KernelForV8`String"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`String"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`String";
				this.slots = [];
				this.methods = [
					new MM("uninstantiable", true, null),
					new MM("cr", false, "cr = (\r	^js verbatim: '\"\\r\"'\r)"),
					new MM("fromCharCode:", false, "fromCharCode: unicodeValue = (\r	^js call: (js propertyOf: (js ident: 'String') at: (js literal: 'fromCharCode')) with: {unicodeValue}\r)"),
					new MM("lf", false, "lf = (\r	^js verbatim: '\"\\n\"'\r)"),
					new MM("tab", false, "tab = (\r	^js verbatim: '\"\\t\"'\r)"),
					new MM("withAll:", false, "withAll: characters = (\r	^js call: (js propertyOf: characters asArray at: (js literal: 'join')) with: {js literal: ''}\r)")
				];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$cr = (function () {
					var self = this;
					return "\r";
				});
				this.$fromCharCode$ = (function ($unicodeValue) {
					var self = this;
					return String.fromCharCode($unicodeValue);
				});
				this.$lf = (function () {
					var self = this;
					return "\n";
				});
				this.$tab = (function () {
					var self = this;
					return "\t";
				});
				this.$withAll$ = (function ($characters) {
					var self = this;
					return $characters.$asArray().join("");
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`String";
						this.$uninstantiable = $.$uninstantiable;
						this.$cr = $.$cr;
						this.$fromCharCode$ = $.$fromCharCode$;
						this.$lf = $.$lf;
						this.$tab = $.$tab;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$KernelForV8$String = enclosingObjects;
						this.$super$KernelForV8$String = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$UndefinedObject = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for KernelForV8`UndefinedObject";
			this.name = "KernelForV8`UndefinedObject";
			this.header = "UndefinedObject uninstantiable = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`KernelForV8`UndefinedObject", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("ifNil:", false, "ifNil: nilBlock = (\r	^nilBlock value\r)"),
				new MM("ifNil:ifNotNil:", false, "ifNil: nilBlock ifNotNil: notNilBlock = (\r	^nilBlock value\r)"),
				new MM("ifNotNil:", false, "ifNotNil: notNilBlock = (\r	^self\r)"),
				new MM("isNil", false, "isNil = (\r	^true\r)"),
				new MM("notNil", false, "notNil = (\r	^false\r)"),
				new MM("printString", false, "printString = (\r	^'nil'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$KernelForV8$UndefinedObject = (function () {
				var self = this;
				self.$super$KernelForV8$UndefinedObject.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$KernelForV8$UndefinedObject();
				return self;
			});
			this.$ifNil$ = (function ($nilBlock) {
				var self = this;
				return $nilBlock.$value();
			});
			this.$ifNil$ifNotNil$ = (function ($nilBlock, $notNilBlock) {
				var self = this;
				return $nilBlock.$value();
			});
			this.$ifNotNil$ = (function ($notNilBlock) {
				var self = this;
				return self;
			});
			this.$isNil = (function () {
				var self = this;
				return true;
			});
			this.$notNil = (function () {
				var self = this;
				return false;
			});
			this.$printString = (function () {
				var self = this;
				return "nil";
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for KernelForV8`UndefinedObject";
					this.$superInit$KernelForV8$UndefinedObject = $.$superInit$KernelForV8$UndefinedObject;
					this.$instance$initializer = $.$instance$initializer;
					this.$ifNil$ = $.$ifNil$;
					this.$ifNil$ifNotNil$ = $.$ifNil$ifNotNil$;
					this.$ifNotNil$ = $.$ifNotNil$;
					this.$isNil = $.$isNil;
					this.$notNil = $.$notNil;
					this.$printString = $.$printString;
					this.$enclosingObjects$KernelForV8$UndefinedObject = enclosingObjects;
					this.$super$KernelForV8$UndefinedObject = runtimeSuperclass;
					this["KernelForV8`UndefinedObject"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["KernelForV8`UndefinedObject"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for KernelForV8`UndefinedObject";
				this.slots = [];
				this.methods = [new MM("uninstantiable", true, null)];
				this.nestedClasses = [];
				this.$uninstantiable = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for KernelForV8`UndefinedObject";
						this.$uninstantiable = $.$uninstantiable;
						this.$enclosingObjects$KernelForV8$UndefinedObject = enclosingObjects;
						this.$super$KernelForV8$UndefinedObject = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$KernelForV8$Array.enclosingMixin = this;
		this.$KernelForV8$Block.enclosingMixin = this;
		this.$KernelForV8$Boolean.enclosingMixin = this;
		this.$KernelForV8$Class.enclosingMixin = this;
		this.$KernelForV8$Error.enclosingMixin = this;
		this.$KernelForV8$Future.enclosingMixin = this;
		this.$KernelForV8$Message.enclosingMixin = this;
		this.$KernelForV8$MessageNotUnderstood.enclosingMixin = this;
		this.$KernelForV8$Metaclass.enclosingMixin = this;
		this.$KernelForV8$Mixin.enclosingMixin = this;
		this.$KernelForV8$Number.enclosingMixin = this;
		this.$KernelForV8$Object.enclosingMixin = this;
		this.$KernelForV8$String.enclosingMixin = this;
		this.$KernelForV8$UndefinedObject.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for KernelForV8";
				this.$superInit$KernelForV8 = $.$superInit$KernelForV8;
				this.$instance$initializer = $.$instance$initializer;
				this.$MutableString = $.$MutableString;
				this.$augment$withPropertiesOf$ = $.$augment$withPropertiesOf$;
				this.$augmentPrototypes = $.$augmentPrototypes;
				this.$Array = $.$Array;
				this.$Block = $.$Block;
				this.$Boolean = $.$Boolean;
				this.$Class = $.$Class;
				this.$Error = $.$Error;
				this.$Future = $.$Future;
				this.$Message = $.$Message;
				this.$MessageNotUnderstood = $.$MessageNotUnderstood;
				this.$Metaclass = $.$Metaclass;
				this.$Mixin = $.$Mixin;
				this.$Number = $.$Number;
				this.$Object = $.$Object;
				this.$String = $.$String;
				this.$UndefinedObject = $.$UndefinedObject;
				this.$vmmirror = $.$vmmirror;
				this.$setOnce$vmmirror$ = $.$setOnce$vmmirror$;
				this.$platform = $.$platform;
				this.$platform$ = $.$platform$;
				this.$KernelForV8$Array = $.$KernelForV8$Array;
				this.$KernelForV8$Array$ = $.$KernelForV8$Array$;
				this.$KernelForV8$Block = $.$KernelForV8$Block;
				this.$KernelForV8$Block$ = $.$KernelForV8$Block$;
				this.$KernelForV8$Boolean = $.$KernelForV8$Boolean;
				this.$KernelForV8$Boolean$ = $.$KernelForV8$Boolean$;
				this.$KernelForV8$Class = $.$KernelForV8$Class;
				this.$KernelForV8$Class$ = $.$KernelForV8$Class$;
				this.$KernelForV8$Error = $.$KernelForV8$Error;
				this.$KernelForV8$Error$ = $.$KernelForV8$Error$;
				this.$KernelForV8$Future = $.$KernelForV8$Future;
				this.$KernelForV8$Future$ = $.$KernelForV8$Future$;
				this.$KernelForV8$Message = $.$KernelForV8$Message;
				this.$KernelForV8$Message$ = $.$KernelForV8$Message$;
				this.$KernelForV8$MessageNotUnderstood = $.$KernelForV8$MessageNotUnderstood;
				this.$KernelForV8$MessageNotUnderstood$ = $.$KernelForV8$MessageNotUnderstood$;
				this.$KernelForV8$Metaclass = $.$KernelForV8$Metaclass;
				this.$KernelForV8$Metaclass$ = $.$KernelForV8$Metaclass$;
				this.$KernelForV8$Mixin = $.$KernelForV8$Mixin;
				this.$KernelForV8$Mixin$ = $.$KernelForV8$Mixin$;
				this.$KernelForV8$Number = $.$KernelForV8$Number;
				this.$KernelForV8$Number$ = $.$KernelForV8$Number$;
				this.$KernelForV8$Object = $.$KernelForV8$Object;
				this.$KernelForV8$Object$ = $.$KernelForV8$Object$;
				this.$KernelForV8$String = $.$KernelForV8$String;
				this.$KernelForV8$String$ = $.$KernelForV8$String$;
				this.$KernelForV8$UndefinedObject = $.$KernelForV8$UndefinedObject;
				this.$KernelForV8$UndefinedObject$ = $.$KernelForV8$UndefinedObject$;
				this.$enclosingObjects$KernelForV8 = enclosingObjects;
				this.$super$KernelForV8 = runtimeSuperclass;
				this.KernelForV8 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$vmmirror$slot = nil;
					this.$platform$slot = nil;
					this.$KernelForV8$Array$slot = nil;
					this.$KernelForV8$Block$slot = nil;
					this.$KernelForV8$Boolean$slot = nil;
					this.$KernelForV8$Class$slot = nil;
					this.$KernelForV8$Error$slot = nil;
					this.$KernelForV8$Future$slot = nil;
					this.$KernelForV8$Message$slot = nil;
					this.$KernelForV8$MessageNotUnderstood$slot = nil;
					this.$KernelForV8$Metaclass$slot = nil;
					this.$KernelForV8$Mixin$slot = nil;
					this.$KernelForV8$Number$slot = nil;
					this.$KernelForV8$Object$slot = nil;
					this.$KernelForV8$String$slot = nil;
					this.$KernelForV8$UndefinedObject$slot = nil;
				});
				this.basicNew = this.KernelForV8;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for KernelForV8";
			this.slots = [];
			this.methods = [new MM("usingVmMirror:", true, null)];
			this.nestedClasses = [];
			this.$usingVmMirror$ = (function ($vmm) {
				return (new this.nonMeta.basicNew()).$instance$initializer($vmm);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for KernelForV8";
					this.$usingVmMirror$ = $.$usingVmMirror$;
					this.$enclosingObjects$KernelForV8 = enclosingObjects;
					this.$super$KernelForV8 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$AliensForV8 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for AliensForV8";
		this.name = "AliensForV8";
		this.header = "AliensForV8 usingPlatform: p = ((* Aliens are a capability-based API for a foreign function interface (FFI). On NS2V8, they allow Newspeak code to invoke JavaScript code and vice versa.\r\rAn Alien is a Newspeak proxy for a JavaScript object. Upon receiving a message, an Alien expatriates the arguments, sends the message to the target JavaScript object, and alienates the result.\r\rAn Expat is a JavaScript proxy for a Newspeak object. Unpon receiving a message, an Expat alienates the arguments, sends the message to the target Newspeak object, and expatriates the result.\r\rA bilingual object is one whose representation is the same in both languages: unwrapped basic types such as numbers, booleans. Note that even though Newspeak and JavaScript closures have the same representation, they are not bilingual and wrapping should occur because Newspeak closures expect Newspeak/Alien arguments and JavaScript closures expect JavaScript/Expat arguments. What about strings and arrays? It would seem we have to wrap arrays because their elements should be alieniated/expatriated. It may be safe to treat strings as bilingual if they always respond to messages with other bilingual objects.\r\rAlien mappings:\ralien sort: a ignored: b ignored: c -> alien.sort(a, b, c)\ralien new: a ignored: b ignored: c  -> new alien(a, b, c)\ralien at: 'a' -> alien.a\ralien at: 'a' put: b -> alien.a = b\r\rExpat mappings:\r?\r\r*)|\rpublic global = Alien wrapping: (js ident: 'theGlobalObject').\r|)";
		this.slots = [
			new SM("global", false, false),
			new SM("AliensForV8`Alien", true, true),
			new SM("AliensForV8`Expat", true, true)
		];
		this.methods = [
			new MM("superInit`AliensForV8", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("alienate:", false, "alienate: jsObj = (\r	#TODO.\r	(js prefixOperator: 'typeof ' on: jsObj) == 'string' ifTrue: [^jsObj].\r	(js prefixOperator: 'typeof ' on: jsObj) == 'number' ifTrue: [^jsObj].\r	(js prefixOperator: 'typeof ' on: jsObj) == 'boolean' ifTrue: [^jsObj].\r	(* This does not discrimate NS vs JS closures *)\r	(js prefixOperator: 'typeof ' on: jsObj) == 'function' ifTrue: [^Alien wrapping: jsObj].\r	(js operator: 'instanceof' with: jsObj and: (js propertyOf: (js propertyOf: Object at: (js literal: 'runtimeClass')) at: (js literal: 'basicNew')))\r		ifTrue:\r			[jsObj isAlien ifTrue: [Error signal: 'Shouldnt be asked to double alienate...'].\r			jsObj isExpat ifTrue: [^jsObj _nsTarget].\r			Error signal: 'Asked to alienate a raw Newspeak object...'].\r	(js operator: 'instanceof' with: jsObj and: (js ident: 'Array'))\r		ifTrue: [Error signal: 'TODO: Support arrays'].\r	^Alien wrapping: jsObj\r)"),
			new MM("copyUntilFirstColon:", false, "copyUntilFirstColon: sel = (\r	#BOGUS. (* DNU does not yet pass unmangled selectors. *)\r	2 to: sel size do: [:i |\r		((sel at: i) = \"$\") ifTrue: [^sel copyFrom: 2 to: i-1]].\r	^sel copyFrom: 2 to: sel size\r)"),
			new MM("expatriate:", false, "expatriate: nsObj = (\r	#TODO.\r	(js prefixOperator: 'typeof ' on: nsObj) == 'string' ifTrue: [^nsObj].\r	(js prefixOperator: 'typeof ' on: nsObj) == 'number' ifTrue: [^nsObj].\r	(js prefixOperator: 'typeof ' on: nsObj) == 'boolean' ifTrue: [^nsObj].\r	(* This does not discrimate NS vs JS closures *)\r	(js prefixOperator: 'typeof ' on: nsObj) == 'function' ifTrue: [^expatriateBlock: nsObj].\r	(js operator: 'instanceof' with: nsObj and: (js propertyOf: (js propertyOf: Object at: (js literal: 'runtimeClass')) at: (js literal: 'basicNew')))\r		ifTrue:\r			[nsObj isAlien ifTrue: [^js propertyOf: nsObj at: (js literal: 'jsTarget')].\r			nsObj isExpat ifTrue: [Error signal: 'Shouldnt be asked to double expatriate...'].\r			^Expat wrapping: nsObj.].\r	(js operator: 'instanceof' with: nsObj and: (js ident: 'Array'))\r		ifTrue: [^nsObj. (*Error signal: 'TODO: Support arrays'*)].\r	Error signal: 'Asked to expatriate a raw JS object...'\r)"),
			new MM("expatriateBlock:", false, "expatriateBlock: b = (\r	^js functionOf: {} body: (\r		js return: (\r			expatriate: (\r				b valueWithArguments: (\r					(js verbatim: 'Array.prototype.slice.call(arguments, 0)') collect: [:ea | alienate: ea]))))\r)"),
			new MM("Alien", true, null),
			new MM("Expat", true, null),
			new MM("global", true, null),
			new MM("setOnce`global:", true, null),
			new MM("AliensForV8`Alien", true, null),
			new MM("AliensForV8`Alien:", true, null),
			new MM("AliensForV8`Expat", true, null),
			new MM("AliensForV8`Expat:", true, null)
		];
		this.nestedClasses = [
			"AliensForV8`Alien",
			"AliensForV8`Expat"
		];
		this.applications = [];
		this.$superInit$AliensForV8 = (function ($p) {
			var self = this;
			self.$super$AliensForV8.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($p) {
			var self = this;
			self.$superInit$AliensForV8($p);
			self.$setOnce$global$(self.$Alien().$wrapping$(theGlobalObject));
			return self;
		});
		this.$alienate$ = (function ($jsObj) {
			var self = this;
			"TODO";
			if (typeof $jsObj === "string") {
				return $jsObj;
			} else {
				nil;
			};
			if (typeof $jsObj === "number") {
				return $jsObj;
			} else {
				nil;
			};
			if (typeof $jsObj === "boolean") {
				return $jsObj;
			} else {
				nil;
			};
			if (typeof $jsObj === "function") {
				return self.$Alien().$wrapping$($jsObj);
			} else {
				nil;
			};
			if ($jsObj instanceof self.$Object().runtimeClass.basicNew) {
				if ($jsObj.$isAlien()) {
					self.$Error().$signal$("Shouldnt be asked to double alienate...");
				} else {
					nil;
				};
				if ($jsObj.$isExpat()) {
					return $jsObj.$_nsTarget();
				} else {
					nil;
				};
				self.$Error().$signal$("Asked to alienate a raw Newspeak object...");
			} else {
				nil;
			};
			if ($jsObj instanceof Array) {
				self.$Error().$signal$("TODO: Support arrays");
			} else {
				nil;
			};
			return self.$Alien().$wrapping$($jsObj);
		});
		this.$copyUntilFirstColon$ = (function ($sel) {
			var self = this;
			"BOGUS";
			{
				var $$limit = nil;
				var $i = nil;
				nil;
				$i = 2;
				$$limit = $sel.$size();
				for (; $$limit.$$greater$equal($i); ) {
					if ($sel.$at$($i).$$equal("$")) {
						return $sel.$copyFrom$to$(2, $i - 1);
					} else {
						nil;
					};
					$i = (1).$$plus($i);
				};
			};
			return $sel.$copyFrom$to$(2, $sel.$size());
		});
		this.$expatriate$ = (function ($nsObj) {
			var self = this;
			"TODO";
			if (typeof $nsObj === "string") {
				return $nsObj;
			} else {
				nil;
			};
			if (typeof $nsObj === "number") {
				return $nsObj;
			} else {
				nil;
			};
			if (typeof $nsObj === "boolean") {
				return $nsObj;
			} else {
				nil;
			};
			if (typeof $nsObj === "function") {
				return self.$expatriateBlock$($nsObj);
			} else {
				nil;
			};
			if ($nsObj instanceof self.$Object().runtimeClass.basicNew) {
				if ($nsObj.$isAlien()) {
					return $nsObj.jsTarget;
				} else {
					nil;
				};
				if ($nsObj.$isExpat()) {
					self.$Error().$signal$("Shouldnt be asked to double expatriate...");
				} else {
					nil;
				};
				return self.$Expat().$wrapping$($nsObj);
			} else {
				nil;
			};
			if ($nsObj instanceof Array) {
				return $nsObj;
			} else {
				nil;
			};
			self.$Error().$signal$("Asked to expatriate a raw JS object...");
			return self;
		});
		this.$expatriateBlock$ = (function ($b) {
			var self = this;
			return (function () {
				return self.$expatriate$($b.$valueWithArguments$((Array.prototype.slice.call(arguments, 0)).$collect$((function ($ea) {
					return self.$alienate$($ea);
				}))));
			});
		});
		this.$Alien = (function () {
			if (nil === this.$AliensForV8$Alien$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$AliensForV8);
				var mixin = this.$AliensForV8$Alien;
				this.$AliensForV8$Alien$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$AliensForV8$Alien$slot;
		});
		this.$Expat = (function () {
			if (nil === this.$AliensForV8$Expat$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$AliensForV8);
				var mixin = this.$AliensForV8$Expat;
				this.$AliensForV8$Expat$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$AliensForV8$Expat$slot;
		});
		this.$global = (function () {
			return this.$global$slot;
		});
		this.$setOnce$global$ = (function (v) {
			this.$global$slot = v;
			return this;
		});
		this.$AliensForV8$Alien = (function () {
			return this.$AliensForV8$Alien$slot;
		});
		this.$AliensForV8$Alien$ = (function (v) {
			this.$AliensForV8$Alien$slot = v;
			return this;
		});
		this.$AliensForV8$Expat = (function () {
			return this.$AliensForV8$Expat$slot;
		});
		this.$AliensForV8$Expat$ = (function (v) {
			this.$AliensForV8$Expat$slot = v;
			return this;
		});
		this.$AliensForV8$Alien = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for AliensForV8`Alien";
			this.name = "AliensForV8`Alien";
			this.header = "Alien wrapping: o = (js assign: (js propertyOf: self at: (js literal: 'jsTarget')) toBe: o)";
			this.slots = [];
			this.methods = [
				new MM("superInit`AliensForV8`Alien", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("applyConstructorUsingEval:", false, "applyConstructorUsingEval: jsArguments = (\r	(* On at least Safari, some objects used as constructors are not functions (*face palm*) and the trick with bind and apply doesn't work. Fall back to eval, sigh... *)\r	js verbatim: \r'function applyNewUsingEval(weirdConstructor, args) {\r	var a = [];\r	for (var i = 0; i < args.length; i++)\r		a[i] = \"args[\" + i + \"]\";\r	return eval(\"new weirdConstructor(\" + a.join() + \")\");\r}'.\r	^js call: (js ident: 'applyNewUsingEval') with: {(js propertyOf: self at: (js literal: 'jsTarget')). jsArguments}\r)"),
				new MM("at:", false, "at: memberName = (\r	^alienate: (js propertyOf: (js propertyOf: self at: (js literal: 'jsTarget')) at: memberName)\r)"),
				new MM("at:put:", false, "at: memberName put: value = (\r	js assign: (js propertyOf: (js propertyOf: self at: (js literal: 'jsTarget')) at: memberName) toBe: (expatriate: value).\r	^value\r)"),
				new MM("doesNotUnderstand:", false, "doesNotUnderstand: msg = (\r	| jsTarget jsArguments jsSelector |\r	jsTarget:: js propertyOf: self at: (js literal: 'jsTarget').\r	jsArguments:: msg arguments collect: [:arg | expatriate: arg].\r	jsSelector:: copyUntilFirstColon: msg mangledSelector.\r	jsSelector = 'new'\r		ifTrue:\r			[ (* var args = [null].concat(jsArguments);\r				var boundFunction = _jsTarget.bind.apply(_jsTarget, args);\r				return new boundFunction(); *)\r			| args boundFunction |\r			(js operator: '===' with: (js prefixOperator: 'typeof ' on: jsTarget) and: (js literal: 'function')) \r				ifFalse: [^alienate: (applyConstructorUsingEval: jsArguments)].\r			args:: js call: (js propertyOf: (js array: {js ident: 'null'}) at: (js literal: 'concat')) with: {jsArguments}.\r			boundFunction:: (js call: (js propertyOf: (js propertyOf: jsTarget at: (js literal: 'bind')) at: (js literal: 'apply')) with: {jsTarget. args}).\r			^alienate: (js new: boundFunction with: {}) ]\r		\r		ifFalse:\r			[ | jsFunction jsResult |\r			jsFunction:: js propertyOf: jsTarget at: jsSelector.\r			(js operator: '===' with: jsFunction and: (js ident: 'undefined'))\r				ifTrue: [^super doesNotUnderstand: msg].\r			jsResult:: js call: (js propertyOf: jsFunction at: (js literal: 'apply')) with: {jsTarget. jsArguments}.\r			^alienate: jsResult].\r)"),
				new MM("isAlien", false, "isAlien ^<Boolean> = (\r	^true\r)"),
				new MM("isExpat", false, "isExpat ^<Boolean> = (\r	^false\r)"),
				new MM("isUndefined", false, "isUndefined = (\r	^js operator: '===' with: (js propertyOf: self at: (js literal: 'jsTarget')) and: (js ident: 'undefined')\r)"),
				new MM("printString", false, "printString = (\r	^'Alien wrapping: ', (js call: (js propertyOf: (js propertyOf: self at: (js literal: 'jsTarget')) at: (js literal: 'toString')) with: {})\r)"),
				new MM("value", false, "value = (\r	| jsTarget = js propertyOf: self at: (js literal: 'jsTarget'). |\r	^alienate: (js \r		call: (js propertyOf: jsTarget at: (js literal: 'apply')) \r		with: {jsTarget})\r)"),
				new MM("value:", false, "value: a1 = (\r	| jsTarget = js propertyOf: self at: (js literal: 'jsTarget'). |\r	^alienate: (js \r		call: (js propertyOf: jsTarget at: (js literal: 'apply')) \r		with: {jsTarget. expatriate: a1})\r)"),
				new MM("value:value:", false, "value: a1 value: a2 = (\r	| jsTarget = js propertyOf: self at: (js literal: 'jsTarget'). |\r	^alienate: (js \r		call: (js propertyOf: jsTarget at: (js literal: 'apply')) \r		with: {jsTarget. expatriate: a1. expatriate: a2})\r)"),
				new MM("value:value:value:", false, "value: a1 value: a2 value: a3 = (\r	| jsTarget = js propertyOf: self at: (js literal: 'jsTarget'). |\r	^alienate: (js \r		call: (js propertyOf: jsTarget at: (js literal: 'apply')) \r		with: {jsTarget. expatriate: a1. expatriate: a2. expatriate: a3})\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$AliensForV8$Alien = (function ($o) {
				var self = this;
				self.$super$AliensForV8$Alien.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($o) {
				var self = this;
				self.$superInit$AliensForV8$Alien($o);
				self.jsTarget = $o;
				return self;
			});
			this.$applyConstructorUsingEval$ = (function ($jsArguments) {
				var self = this;
				function applyNewUsingEval(weirdConstructor, args) {
	var a = [];
	for (var i = 0; i < args.length; i++)
		a[i] = "args[" + i + "]";
	return eval("new weirdConstructor(" + a.join() + ")");
};
				return applyNewUsingEval(self.jsTarget, $jsArguments);
			});
			this.$at$ = (function ($memberName) {
				var self = this;
				return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$(self.jsTarget[$memberName]);
			});
			this.$at$put$ = (function ($memberName, $value) {
				var self = this;
				self.jsTarget[$memberName] = self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($value);
				return $value;
			});
			this.$doesNotUnderstand$ = (function ($msg) {
				var self = this;
				var $jsTarget = nil;
				var $jsArguments = nil;
				var $jsSelector = nil;
				$jsTarget = self.jsTarget;
				$jsArguments = $msg.$arguments().$collect$((function ($arg) {
					return self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($arg);
				}));
				$jsSelector = self.$enclosingObjects$AliensForV8$Alien[0].$copyUntilFirstColon$($msg.$mangledSelector());
				if ($jsSelector.$$equal("new")) {
					var $args = nil;
					var $boundFunction = nil;
					if (!(typeof $jsTarget === "function")) {
						return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$(self.$applyConstructorUsingEval$($jsArguments));
					} else {
						nil;
					};
					$args = ([null]).concat($jsArguments);
					$boundFunction = $jsTarget.bind.apply($jsTarget, $args);
					return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$(new $boundFunction());
				} else {
					var $jsFunction = nil;
					var $jsResult = nil;
					$jsFunction = $jsTarget[$jsSelector];
					if ($jsFunction === undefined) {
						return self.$super$AliensForV8$Alien.$doesNotUnderstand$.call(self, $msg);
					} else {
						nil;
					};
					$jsResult = $jsFunction.apply($jsTarget, $jsArguments);
					return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$($jsResult);
				};
				return self;
			});
			this.$isAlien = (function () {
				var self = this;
				return true;
			});
			this.$isExpat = (function () {
				var self = this;
				return false;
			});
			this.$isUndefined = (function () {
				var self = this;
				return self.jsTarget === undefined;
			});
			this.$printString = (function () {
				var self = this;
				return ("Alien wrapping: ").$$comma(self.jsTarget.toString());
			});
			this.$value = (function () {
				var self = this;
				var $jsTarget = nil;
				$jsTarget = self.jsTarget;
				return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$($jsTarget.apply($jsTarget));
			});
			this.$value$ = (function ($a1) {
				var self = this;
				var $jsTarget = nil;
				$jsTarget = self.jsTarget;
				return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$($jsTarget.apply($jsTarget, self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a1)));
			});
			this.$value$value$ = (function ($a1, $a2) {
				var self = this;
				var $jsTarget = nil;
				$jsTarget = self.jsTarget;
				return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$($jsTarget.apply($jsTarget, self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a1), self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a2)));
			});
			this.$value$value$value$ = (function ($a1, $a2, $a3) {
				var self = this;
				var $jsTarget = nil;
				$jsTarget = self.jsTarget;
				return self.$enclosingObjects$AliensForV8$Alien[0].$alienate$($jsTarget.apply($jsTarget, self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a1), self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a2), self.$enclosingObjects$AliensForV8$Alien[0].$expatriate$($a3)));
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for AliensForV8`Alien";
					this.$superInit$AliensForV8$Alien = $.$superInit$AliensForV8$Alien;
					this.$instance$initializer = $.$instance$initializer;
					this.$applyConstructorUsingEval$ = $.$applyConstructorUsingEval$;
					this.$at$ = $.$at$;
					this.$at$put$ = $.$at$put$;
					this.$doesNotUnderstand$ = $.$doesNotUnderstand$;
					this.$isAlien = $.$isAlien;
					this.$isExpat = $.$isExpat;
					this.$isUndefined = $.$isUndefined;
					this.$printString = $.$printString;
					this.$value = $.$value;
					this.$value$ = $.$value$;
					this.$value$value$ = $.$value$value$;
					this.$value$value$value$ = $.$value$value$value$;
					this.$enclosingObjects$AliensForV8$Alien = enclosingObjects;
					this.$super$AliensForV8$Alien = runtimeSuperclass;
					this["AliensForV8`Alien"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["AliensForV8`Alien"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for AliensForV8`Alien";
				this.slots = [];
				this.methods = [new MM("wrapping:", true, null)];
				this.nestedClasses = [];
				this.$wrapping$ = (function ($o) {
					return (new this.nonMeta.basicNew()).$instance$initializer($o);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for AliensForV8`Alien";
						this.$wrapping$ = $.$wrapping$;
						this.$enclosingObjects$AliensForV8$Alien = enclosingObjects;
						this.$super$AliensForV8$Alien = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$AliensForV8$Expat = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for AliensForV8`Expat";
			this.name = "AliensForV8`Expat";
			this.header = "Expat wrapping: o = (|\rprivate _nsTarget = o.\r|)";
			this.slots = [new SM("_nsTarget", false, false)];
			this.methods = [
				new MM("superInit`AliensForV8`Expat", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("doesNotUnderstand:", false, "doesNotUnderstand: msg = (\r	|\r	nsSelector = something: msg selector.\r	nsArguments = msg arguments collect: [:arg | alienate: arg].\r	nsResult = js\r		call: (js propertyOf: (js propertyOf:_nsTarget at: nsSelector) at: (js literal: 'apply')) \r		with: {_nsTarget. nsArguments}.\r	|\r	^expatriate: nsResult\r)"),
				new MM("isAlien", false, "isAlien ^<Boolean> = (\r	^false\r)"),
				new MM("isExpat", false, "isExpat ^<Boolean> = (\r	^true\r)"),
				new MM("_nsTarget", true, null),
				new MM("setOnce`_nsTarget:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$AliensForV8$Expat = (function ($o) {
				var self = this;
				self.$super$AliensForV8$Expat.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($o) {
				var self = this;
				self.$superInit$AliensForV8$Expat($o);
				self.$setOnce$_nsTarget$($o);
				return self;
			});
			this.$doesNotUnderstand$ = (function ($msg) {
				var self = this;
				var $nsSelector = nil;
				var $nsArguments = nil;
				var $nsResult = nil;
				$nsSelector = self.$something$($msg.$selector());
				$nsArguments = $msg.$arguments().$collect$((function ($arg) {
					return self.$enclosingObjects$AliensForV8$Expat[0].$alienate$($arg);
				}));
				$nsResult = self.$_nsTarget()[$nsSelector].apply(self.$_nsTarget(), $nsArguments);
				return self.$enclosingObjects$AliensForV8$Expat[0].$expatriate$($nsResult);
			});
			this.$isAlien = (function () {
				var self = this;
				return false;
			});
			this.$isExpat = (function () {
				var self = this;
				return true;
			});
			this.$_nsTarget = (function () {
				return this.$_nsTarget$slot;
			});
			this.$setOnce$_nsTarget$ = (function (v) {
				this.$_nsTarget$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for AliensForV8`Expat";
					this.$superInit$AliensForV8$Expat = $.$superInit$AliensForV8$Expat;
					this.$instance$initializer = $.$instance$initializer;
					this.$doesNotUnderstand$ = $.$doesNotUnderstand$;
					this.$isAlien = $.$isAlien;
					this.$isExpat = $.$isExpat;
					this.$_nsTarget = $.$_nsTarget;
					this.$setOnce$_nsTarget$ = $.$setOnce$_nsTarget$;
					this.$enclosingObjects$AliensForV8$Expat = enclosingObjects;
					this.$super$AliensForV8$Expat = runtimeSuperclass;
					this["AliensForV8`Expat"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$_nsTarget$slot = nil;
					});
					this.basicNew = this["AliensForV8`Expat"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for AliensForV8`Expat";
				this.slots = [];
				this.methods = [new MM("wrapping:", true, null)];
				this.nestedClasses = [];
				this.$wrapping$ = (function ($o) {
					return (new this.nonMeta.basicNew()).$instance$initializer($o);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for AliensForV8`Expat";
						this.$wrapping$ = $.$wrapping$;
						this.$enclosingObjects$AliensForV8$Expat = enclosingObjects;
						this.$super$AliensForV8$Expat = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$AliensForV8$Alien.enclosingMixin = this;
		this.$AliensForV8$Expat.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for AliensForV8";
				this.$superInit$AliensForV8 = $.$superInit$AliensForV8;
				this.$instance$initializer = $.$instance$initializer;
				this.$alienate$ = $.$alienate$;
				this.$copyUntilFirstColon$ = $.$copyUntilFirstColon$;
				this.$expatriate$ = $.$expatriate$;
				this.$expatriateBlock$ = $.$expatriateBlock$;
				this.$Alien = $.$Alien;
				this.$Expat = $.$Expat;
				this.$global = $.$global;
				this.$setOnce$global$ = $.$setOnce$global$;
				this.$AliensForV8$Alien = $.$AliensForV8$Alien;
				this.$AliensForV8$Alien$ = $.$AliensForV8$Alien$;
				this.$AliensForV8$Expat = $.$AliensForV8$Expat;
				this.$AliensForV8$Expat$ = $.$AliensForV8$Expat$;
				this.$enclosingObjects$AliensForV8 = enclosingObjects;
				this.$super$AliensForV8 = runtimeSuperclass;
				this.AliensForV8 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$global$slot = nil;
					this.$AliensForV8$Alien$slot = nil;
					this.$AliensForV8$Expat$slot = nil;
				});
				this.basicNew = this.AliensForV8;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for AliensForV8";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($p) {
				return (new this.nonMeta.basicNew()).$instance$initializer($p);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for AliensForV8";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$AliensForV8 = enclosingObjects;
					this.$super$AliensForV8 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$Collections = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for Collections";
		this.name = "Collections";
		this.header = "Collections usingPlatform: p = (\r(* This code was derived by converting the Strongtalk Collections classes to Newspeak, which is why the Sun Microsystems copyright and BSD license below applies.\r\rCopyright (c) 1995-2006 Sun Microsystems, Inc. ALL RIGHTS RESERVED.\rCopyright 2008-2009 Yardena Meymann, Gilad Bracha and other contributors.\r \rRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\r\r* Redistributions of source code must retain the above copyright notice, \r this  list of conditions and the following disclaimer.\r\r* Redistribution in binary form must reproduce the above copyright notice, \rthis list of conditions and the following disclaimer in the documentation and/o other materials provided with the distribution.\r\rNeither the name of Sun Microsystems or the names of contributors may \rbe used to endorse or promote products derived from this software without \rspecific prior written permission.\r\r>>\rTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, \rTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS \rBE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE \rGOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT \rLIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH \rDAMAGE.>> *)|\r	private MutableAddableList = MutableList mixinApply: AddableList.\r	(* -- collection aliases -- *)\r	public OrderedCollection = MutableArrayList.\r	public Dictionary = MutableHashedMap.\r	public IdentityDictionary = IdentityMutableHashedMap.\r	public SortedCollection = SortedList.\r	(* -- streams -- *)\r	private ListReadStream = p streams SeqCltnReadStream. \r	private ListReadWriteStream = p streams SeqCltnReadWriteStream. \r	private BasicInputStream = p streams BasicInputStream. \r	private BasicOutputStream = p streams BasicOutputStream. \r	\r	private IOSequence = Future computing: [MutableList mixinApply: (BasicInputStream mixinApply: BasicOutputStream).].\r	\r	(* magic collections *)\r	(* Not yet supported by NS2JS or NS2Dart *)\r	public WeakArray = Future computing: [p blackMarket Collections WeakArray].\r|)";
		this.slots = [
			new SM("MutableAddableList", false, false),
			new SM("OrderedCollection", false, false),
			new SM("Dictionary", false, false),
			new SM("IdentityDictionary", false, false),
			new SM("SortedCollection", false, false),
			new SM("ListReadStream", false, false),
			new SM("ListReadWriteStream", false, false),
			new SM("BasicInputStream", false, false),
			new SM("BasicOutputStream", false, false),
			new SM("IOSequence", false, false),
			new SM("WeakArray", false, false),
			new SM("Collections`AddableList", true, true),
			new SM("Collections`Association", true, true),
			new SM("Collections`Bag", true, true),
			new SM("Collections`Collection", true, true),
			new SM("Collections`HashedCollection", true, true),
			new SM("Collections`IdentityMutableHashedMap", true, true),
			new SM("Collections`IdentitySet", true, true),
			new SM("Collections`Interval", true, true),
			new SM("Collections`List", true, true),
			new SM("Collections`MutableArrayList", true, true),
			new SM("Collections`MutableHashedMap", true, true),
			new SM("Collections`MutableList", true, true),
			new SM("Collections`Queue", true, true),
			new SM("Collections`Set", true, true),
			new SM("Collections`SortedList", true, true)
		];
		this.methods = [
			new MM("superInit`Collections", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("error:", false, "error: msg <String> = (\r	^Error signal: msg\r)"),
			new MM("AddableList", true, null),
			new MM("Association", true, null),
			new MM("Bag", true, null),
			new MM("Collection", true, null),
			new MM("HashedCollection", true, null),
			new MM("IdentityMutableHashedMap", true, null),
			new MM("IdentitySet", true, null),
			new MM("Interval", true, null),
			new MM("List", true, null),
			new MM("MutableArrayList", true, null),
			new MM("MutableHashedMap", true, null),
			new MM("MutableList", true, null),
			new MM("Queue", true, null),
			new MM("Set", true, null),
			new MM("SortedList", true, null),
			new MM("MutableAddableList", true, null),
			new MM("setOnce`MutableAddableList:", true, null),
			new MM("OrderedCollection", true, null),
			new MM("setOnce`OrderedCollection:", true, null),
			new MM("Dictionary", true, null),
			new MM("setOnce`Dictionary:", true, null),
			new MM("IdentityDictionary", true, null),
			new MM("setOnce`IdentityDictionary:", true, null),
			new MM("SortedCollection", true, null),
			new MM("setOnce`SortedCollection:", true, null),
			new MM("ListReadStream", true, null),
			new MM("setOnce`ListReadStream:", true, null),
			new MM("ListReadWriteStream", true, null),
			new MM("setOnce`ListReadWriteStream:", true, null),
			new MM("BasicInputStream", true, null),
			new MM("setOnce`BasicInputStream:", true, null),
			new MM("BasicOutputStream", true, null),
			new MM("setOnce`BasicOutputStream:", true, null),
			new MM("IOSequence", true, null),
			new MM("setOnce`IOSequence:", true, null),
			new MM("WeakArray", true, null),
			new MM("setOnce`WeakArray:", true, null),
			new MM("Collections`AddableList", true, null),
			new MM("Collections`AddableList:", true, null),
			new MM("Collections`Association", true, null),
			new MM("Collections`Association:", true, null),
			new MM("Collections`Bag", true, null),
			new MM("Collections`Bag:", true, null),
			new MM("Collections`Collection", true, null),
			new MM("Collections`Collection:", true, null),
			new MM("Collections`HashedCollection", true, null),
			new MM("Collections`HashedCollection:", true, null),
			new MM("Collections`IdentityMutableHashedMap", true, null),
			new MM("Collections`IdentityMutableHashedMap:", true, null),
			new MM("Collections`IdentitySet", true, null),
			new MM("Collections`IdentitySet:", true, null),
			new MM("Collections`Interval", true, null),
			new MM("Collections`Interval:", true, null),
			new MM("Collections`List", true, null),
			new MM("Collections`List:", true, null),
			new MM("Collections`MutableArrayList", true, null),
			new MM("Collections`MutableArrayList:", true, null),
			new MM("Collections`MutableHashedMap", true, null),
			new MM("Collections`MutableHashedMap:", true, null),
			new MM("Collections`MutableList", true, null),
			new MM("Collections`MutableList:", true, null),
			new MM("Collections`Queue", true, null),
			new MM("Collections`Queue:", true, null),
			new MM("Collections`Set", true, null),
			new MM("Collections`Set:", true, null),
			new MM("Collections`SortedList", true, null),
			new MM("Collections`SortedList:", true, null)
		];
		this.nestedClasses = [
			"Collections`AddableList",
			"Collections`Association",
			"Collections`Bag",
			"Collections`Collection",
			"Collections`HashedCollection",
			"Collections`IdentityMutableHashedMap",
			"Collections`IdentitySet",
			"Collections`Interval",
			"Collections`List",
			"Collections`MutableArrayList",
			"Collections`MutableHashedMap",
			"Collections`MutableList",
			"Collections`Queue",
			"Collections`Set",
			"Collections`SortedList"
		];
		this.applications = [];
		this.$superInit$Collections = (function ($p) {
			var self = this;
			self.$super$Collections.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($p) {
			var self = this;
			self.$superInit$Collections($p);
			self.$setOnce$MutableAddableList$(self.$MutableList().$mixinApply$(self.$AddableList()));
			self.$setOnce$OrderedCollection$(self.$MutableArrayList());
			self.$setOnce$Dictionary$(self.$MutableHashedMap());
			self.$setOnce$IdentityDictionary$(self.$IdentityMutableHashedMap());
			self.$setOnce$SortedCollection$(self.$SortedList());
			self.$setOnce$ListReadStream$($p.$streams().$SeqCltnReadStream());
			self.$setOnce$ListReadWriteStream$($p.$streams().$SeqCltnReadWriteStream());
			self.$setOnce$BasicInputStream$($p.$streams().$BasicInputStream());
			self.$setOnce$BasicOutputStream$($p.$streams().$BasicOutputStream());
			self.$setOnce$IOSequence$(self.$Future().$computing$((function () {
				return self.$MutableList().$mixinApply$(self.$BasicInputStream().$mixinApply$(self.$BasicOutputStream()));
			})));
			self.$setOnce$WeakArray$(self.$Future().$computing$((function () {
				return $p.$blackMarket().$Collections().$WeakArray();
			})));
			return self;
		});
		this.$error$ = (function ($msg) {
			var self = this;
			return self.$Error().$signal$($msg);
		});
		this.$AddableList = (function () {
			if (nil === this.$Collections$AddableList$slot) {
				var self = this;
				var superclass = self.$List();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$AddableList;
				this.$Collections$AddableList$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$AddableList$slot;
		});
		this.$Association = (function () {
			if (nil === this.$Collections$Association$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Association;
				this.$Collections$Association$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Association$slot;
		});
		this.$Bag = (function () {
			if (nil === this.$Collections$Bag$slot) {
				var self = this;
				var superclass = self.$Collection();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Bag;
				this.$Collections$Bag$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Bag$slot;
		});
		this.$Collection = (function () {
			if (nil === this.$Collections$Collection$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Collection;
				this.$Collections$Collection$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Collection$slot;
		});
		this.$HashedCollection = (function () {
			if (nil === this.$Collections$HashedCollection$slot) {
				var self = this;
				var superclass = self.$Collection();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$HashedCollection;
				this.$Collections$HashedCollection$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$HashedCollection$slot;
		});
		this.$IdentityMutableHashedMap = (function () {
			if (nil === this.$Collections$IdentityMutableHashedMap$slot) {
				var self = this;
				var superclass = self.$MutableHashedMap();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$IdentityMutableHashedMap;
				this.$Collections$IdentityMutableHashedMap$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$IdentityMutableHashedMap$slot;
		});
		this.$IdentitySet = (function () {
			if (nil === this.$Collections$IdentitySet$slot) {
				var self = this;
				var superclass = self.$Set();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$IdentitySet;
				this.$Collections$IdentitySet$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$IdentitySet$slot;
		});
		this.$Interval = (function () {
			if (nil === this.$Collections$Interval$slot) {
				var self = this;
				var superclass = self.$List();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Interval;
				this.$Collections$Interval$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Interval$slot;
		});
		this.$List = (function () {
			if (nil === this.$Collections$List$slot) {
				var self = this;
				var superclass = self.$Collection();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$List;
				this.$Collections$List$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$List$slot;
		});
		this.$MutableArrayList = (function () {
			if (nil === this.$Collections$MutableArrayList$slot) {
				var self = this;
				var superclass = self.$MutableAddableList();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$MutableArrayList;
				this.$Collections$MutableArrayList$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$MutableArrayList$slot;
		});
		this.$MutableHashedMap = (function () {
			if (nil === this.$Collections$MutableHashedMap$slot) {
				var self = this;
				var superclass = self.$HashedCollection();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$MutableHashedMap;
				this.$Collections$MutableHashedMap$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$MutableHashedMap$slot;
		});
		this.$MutableList = (function () {
			if (nil === this.$Collections$MutableList$slot) {
				var self = this;
				var superclass = self.$List();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$MutableList;
				this.$Collections$MutableList$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$MutableList$slot;
		});
		this.$Queue = (function () {
			if (nil === this.$Collections$Queue$slot) {
				var self = this;
				var superclass = self.$IOSequence();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Queue;
				this.$Collections$Queue$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Queue$slot;
		});
		this.$Set = (function () {
			if (nil === this.$Collections$Set$slot) {
				var self = this;
				var superclass = self.$HashedCollection();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$Set;
				this.$Collections$Set$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$Set$slot;
		});
		this.$SortedList = (function () {
			if (nil === this.$Collections$SortedList$slot) {
				var self = this;
				var superclass = self.$AddableList();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections);
				var mixin = this.$Collections$SortedList;
				this.$Collections$SortedList$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Collections$SortedList$slot;
		});
		this.$MutableAddableList = (function () {
			return this.$MutableAddableList$slot;
		});
		this.$setOnce$MutableAddableList$ = (function (v) {
			this.$MutableAddableList$slot = v;
			return this;
		});
		this.$OrderedCollection = (function () {
			return this.$OrderedCollection$slot;
		});
		this.$setOnce$OrderedCollection$ = (function (v) {
			this.$OrderedCollection$slot = v;
			return this;
		});
		this.$Dictionary = (function () {
			return this.$Dictionary$slot;
		});
		this.$setOnce$Dictionary$ = (function (v) {
			this.$Dictionary$slot = v;
			return this;
		});
		this.$IdentityDictionary = (function () {
			return this.$IdentityDictionary$slot;
		});
		this.$setOnce$IdentityDictionary$ = (function (v) {
			this.$IdentityDictionary$slot = v;
			return this;
		});
		this.$SortedCollection = (function () {
			return this.$SortedCollection$slot;
		});
		this.$setOnce$SortedCollection$ = (function (v) {
			this.$SortedCollection$slot = v;
			return this;
		});
		this.$ListReadStream = (function () {
			return this.$ListReadStream$slot;
		});
		this.$setOnce$ListReadStream$ = (function (v) {
			this.$ListReadStream$slot = v;
			return this;
		});
		this.$ListReadWriteStream = (function () {
			return this.$ListReadWriteStream$slot;
		});
		this.$setOnce$ListReadWriteStream$ = (function (v) {
			this.$ListReadWriteStream$slot = v;
			return this;
		});
		this.$BasicInputStream = (function () {
			return this.$BasicInputStream$slot;
		});
		this.$setOnce$BasicInputStream$ = (function (v) {
			this.$BasicInputStream$slot = v;
			return this;
		});
		this.$BasicOutputStream = (function () {
			return this.$BasicOutputStream$slot;
		});
		this.$setOnce$BasicOutputStream$ = (function (v) {
			this.$BasicOutputStream$slot = v;
			return this;
		});
		this.$IOSequence = (function () {
			return this.$IOSequence$slot;
		});
		this.$setOnce$IOSequence$ = (function (v) {
			this.$IOSequence$slot = v;
			return this;
		});
		this.$WeakArray = (function () {
			return this.$WeakArray$slot;
		});
		this.$setOnce$WeakArray$ = (function (v) {
			this.$WeakArray$slot = v;
			return this;
		});
		this.$Collections$AddableList = (function () {
			return this.$Collections$AddableList$slot;
		});
		this.$Collections$AddableList$ = (function (v) {
			this.$Collections$AddableList$slot = v;
			return this;
		});
		this.$Collections$Association = (function () {
			return this.$Collections$Association$slot;
		});
		this.$Collections$Association$ = (function (v) {
			this.$Collections$Association$slot = v;
			return this;
		});
		this.$Collections$Bag = (function () {
			return this.$Collections$Bag$slot;
		});
		this.$Collections$Bag$ = (function (v) {
			this.$Collections$Bag$slot = v;
			return this;
		});
		this.$Collections$Collection = (function () {
			return this.$Collections$Collection$slot;
		});
		this.$Collections$Collection$ = (function (v) {
			this.$Collections$Collection$slot = v;
			return this;
		});
		this.$Collections$HashedCollection = (function () {
			return this.$Collections$HashedCollection$slot;
		});
		this.$Collections$HashedCollection$ = (function (v) {
			this.$Collections$HashedCollection$slot = v;
			return this;
		});
		this.$Collections$IdentityMutableHashedMap = (function () {
			return this.$Collections$IdentityMutableHashedMap$slot;
		});
		this.$Collections$IdentityMutableHashedMap$ = (function (v) {
			this.$Collections$IdentityMutableHashedMap$slot = v;
			return this;
		});
		this.$Collections$IdentitySet = (function () {
			return this.$Collections$IdentitySet$slot;
		});
		this.$Collections$IdentitySet$ = (function (v) {
			this.$Collections$IdentitySet$slot = v;
			return this;
		});
		this.$Collections$Interval = (function () {
			return this.$Collections$Interval$slot;
		});
		this.$Collections$Interval$ = (function (v) {
			this.$Collections$Interval$slot = v;
			return this;
		});
		this.$Collections$List = (function () {
			return this.$Collections$List$slot;
		});
		this.$Collections$List$ = (function (v) {
			this.$Collections$List$slot = v;
			return this;
		});
		this.$Collections$MutableArrayList = (function () {
			return this.$Collections$MutableArrayList$slot;
		});
		this.$Collections$MutableArrayList$ = (function (v) {
			this.$Collections$MutableArrayList$slot = v;
			return this;
		});
		this.$Collections$MutableHashedMap = (function () {
			return this.$Collections$MutableHashedMap$slot;
		});
		this.$Collections$MutableHashedMap$ = (function (v) {
			this.$Collections$MutableHashedMap$slot = v;
			return this;
		});
		this.$Collections$MutableList = (function () {
			return this.$Collections$MutableList$slot;
		});
		this.$Collections$MutableList$ = (function (v) {
			this.$Collections$MutableList$slot = v;
			return this;
		});
		this.$Collections$Queue = (function () {
			return this.$Collections$Queue$slot;
		});
		this.$Collections$Queue$ = (function (v) {
			this.$Collections$Queue$slot = v;
			return this;
		});
		this.$Collections$Set = (function () {
			return this.$Collections$Set$slot;
		});
		this.$Collections$Set$ = (function (v) {
			this.$Collections$Set$slot = v;
			return this;
		});
		this.$Collections$SortedList = (function () {
			return this.$Collections$SortedList$slot;
		});
		this.$Collections$SortedList$ = (function (v) {
			this.$Collections$SortedList$slot = v;
			return this;
		});
		this.$Collections$AddableList = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`AddableList";
			this.name = "Collections`AddableList";
			this.header = "AddableList = List (\r(* AddableLists are Lists that support the Extensible protocol, \rand which support indexing in constant time. *)| \r	private contents <Array[E]>\r	private startGap <Integer>  (* number of empty slots at the beginning of contents *)\r	private lastIndex <Integer>  (* (internal) index of last occupied table entry *)\r|initCapacity: self class defaultCapacity)";
			this.slots = [
				new SM("contents", true, false),
				new SM("startGap", true, false),
				new SM("lastIndex", true, false)
			];
			this.methods = [
				new MM("superInit`Collections`AddableList", true, "List"),
				new MM("instance`initializer", true, "List"),
				new MM("add:", false, "add: e <E> ^<E> = (\r	subclassResponsibility\r)"),
				new MM("addAll:", false, "addAll: c <Collection[E]> ^<Collection[E]> = (\r	c do: [ :el <E> |\r		add: el	].\r	^c\r)"),
				new MM("at:", false, "at: i <Integer> ^<E> = (\r	| adjusted <Int> |\r	adjusted:: i + startGap.\r	((0 < i) and: [adjusted <= self lastIndex])\r		ifFalse: [ error: 'invalid index' ].\r	^contents at: adjusted\r\r)"),
				new MM("at:ifAbsent:", false, "at: i <Integer> ifAbsent: f <[X def]>  ^<E | X> = (\r	| internal <Int> |\r	internal:: i + self startGap.\r	^(internalIndexIsValid: internal)\r		ifTrue: [ contents at: internal ]\r		ifFalse: [ f value ]\r)"),
				new MM("includeAll:", false, "includeAll: c <Collection[E]> ^<Collection[E]> = (\r	c do: [ :el <E> |\r		include: el   ].\r	^c\r)"),
				new MM("indexOf:ifAbsent:", false, "indexOf: el <Object> ifAbsent: f <[X def]> ^<Integer | X> = (\r	1 to: size do: [ :i <Integer> |\r		(at: i) = el\r			ifTrue: [ ^i ].	].\r	^f value\r)"),
				new MM("remove:at:", false, "remove: nElements <Integer> at: i <Integer>\r = (\r	| el <E> internal <Integer> |\r	el:: at: i.\r	internal:: startGap + i.\r	internalRangeCheck: internal.\r	internalRangeCheck: (internal + nElements) - 1.\r	internal  to: lastIndex - nElements\r		 do: [ :index <Integer> |\r			  contents at: index put: (contents at: index + nElements).	].\r	contents at: lastIndex put: nil.\r	lastIndex: lastIndex - nElements.\r)"),
				new MM("remove:ifAbsent:", false, "remove: el <E> ifAbsent: f <[X def]> ^<E|X> = (\r	removeAt: (indexOf: el ifAbsent: [^f value]).\r	^el\r)"),
				new MM("removeAll", false, "removeAll = (\r\r	startGap + 1 to: lastIndex do:\r		[ :i <Integer> |\r			contents at: i put: nil].\r	lastIndex: startGap\r)"),
				new MM("removeAll:", false, "removeAll: c <Collection[E]> ^<Collection[E]> = (\r\r	c do: [ :el <E> |\r		remove: el   ].\r	^c\r)"),
				new MM("removeAt:", false, "removeAt: index <Integer> ^<E> = (\r	| el <E> |\r	el:: at: index.\r	remove: 1 at: index.\r	^el\r)"),
				new MM("removeEvery:", false, "removeEvery: val <E> ^<E> = (\r	^removeEvery: val startingAt: 1\r)"),
				new MM("removeEvery:startingAt:", false, "removeEvery: val <X def> startingAt: start <Integer> ^<X> = (\r\r	| index <Integer> |\r	index:: indexOf: val ifAbsent: [ ^val ].\r	removeAt: index.\r	^removeEvery: val startingAt: index\r)"),
				new MM("removeFirst", false, "removeFirst ^<E> = (\r	^removeAt: 1\r)"),
				new MM("removeLast", false, "removeLast ^<E> = (\r	^removeAt: size\r)"),
				new MM("size", false, "size ^<Integer> = (\r	^lastIndex - startGap\r)"),
				new MM("size:", false, "size: s <Integer> = (\r	(* Change the size of the ordered collection to s (not the capacity).  This will truncate elements at the end if the current size\r	  is larger.  If the current size is smaller, the added elements will be undefined, in which case it is erroneous to access them until they have been set.\r	  This method should be used very rarely and carefully as a result. *)\r\r	| delta <Integer> newLastIndex <Integer> |\r	delta:: s - size.\r	newLastIndex:: lastIndex + delta.\r	delta < 0\r		ifTrue: [ newLastIndex + 1 to: lastIndex do:\r					[ :i <Integer> |\r						contents at: i put: nil]].\r	delta > 0\r		ifTrue: [ needSpaceAtEnd: delta ].\r	lastIndex: lastIndex + delta.\r)"),
				new MM("include:", false, "include: e <E> ^<E> = (\r	^include: e ifNew: []\r)"),
				new MM("include:ifNew:", false, "include: e <E> ifNew: blk <[]> ^<E> = (\r	(includes: e)\r		ifFalse: [	add: e.\r						blk value. ].\r	^e\r)"),
				new MM("remove:", false, "remove: el <E> ^<E> = (\r\r	^remove: el\r		ifAbsent: [ error: 'element not found' ]\r)"),
				new MM("removeAllSuchThat:", false, "removeAllSuchThat: test <[:E| Boolean]>  = (\r\r	| i <Integer> |\r	i:: 1.\r	[ i <= size ]\r		whileTrue:\r			[	(test value: (at: i))\r					ifTrue: [ removeAt: i ]\r					ifFalse: [ i:: i + 1 ]	]\r)"),
				new MM("makeSpaceAtStart:", false, "makeSpaceAtStart: nslots <Integer> ^<Integer> = (\r\r	(* Make sure that there are at least nslots of unused capacity at the low\r	 end of contents.  The # of slots added at the beginning is returned. *)\r\r	|	newGap <Integer>\r		diff <Integer>\r		newContents <AbsoluteArray[E]>\r		sz <Integer>\r		newLastIndex <Integer> |\r	(isEmpty and: [nslots <= contents size])\r		ifTrue: [startGap: nslots.\r  				lastIndex: nslots.\r				^nslots].\r\r	sz:: size.\r	newGap:: nslots max: sz.\r	diff:: newGap - startGap.\r	newLastIndex:: newGap + sz.\r	newContents:: Array(* [E] *) new:\r		contents size + diff.\r	newContents\r		replaceFrom: newGap + 1\r		to: newLastIndex\r		with: contents\r		startingAt: firstIndex.\r	startGap: newGap.\r	contents: newContents.\r	lastIndex: newLastIndex.\r	^diff	\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s <Integer> ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	| safeself <List[EX]> |\r\r	(* This guarantee is safe because the inference clause guarantees\r		that E < EX at each call site *)\r	safeself:: (* guaranteed <List[EX]> *) self.\r\r	^(Array(* [EX] *) new: s)\r		replaceFrom: 1 to: (s min: size) with: safeself	\r)"),
				new MM("initCapacity:", false, "initCapacity: c <Integer> = (\r	contents:: Array(* [E] *) new: c.\r	startGap:: 0.\r	lastIndex:: 0.\r)"),
				new MM("do:", false, "do: action <[:E]> = (\r	startGap + 1 to: lastIndex do:\r		[:index <Integer> | action value: (contents at: index) ]\r)"),
				new MM("endGap", false, "endGap ^<Integer> = (\r	^contents size - lastIndex\r)"),
				new MM("firstIndex", false, "firstIndex ^<Integer> = (\r	^1 + startGap\r)"),
				new MM("internalIndexIsValid:", false, "internalIndexIsValid: index <Integer> ^<Boolean> = (\r	^index > startGap and: [ index <= lastIndex ]\r)"),
				new MM("internalRangeCheck:", false, "internalRangeCheck: index <Integer> = (\r	(internalIndexIsValid: index )\r		ifFalse: [ error: 'invalid index' ].\r)"),
				new MM("makeSpace:beforeIndex:", false, "makeSpace: slots <Integer> beforeIndex: i <Integer> ^<Integer> = (\r\r	(* assume:  i is a valid internal index.  The index is returned, adjusted\r	 for any resizing of the internal array that may have taken place \r	 (i.e. the index of the beginning of the created gap is returned) *)\r\r	(* # before i is (i - startGap) - 1, # after is (lastIndex - i) + 1 *)\r	^((i - startGap) - 1) > ((lastIndex - i) + 1)\r		ifTrue: [ 	(* fewer elements after, so move them *)\r			      	needSpaceAtEnd: slots.\r			      	contents\r					replaceFrom: i + slots\r					to: lastIndex + slots\r					with: contents\r					startingAt: i.\r			    	lastIndex:: lastIndex + slots.\r				i	]\r		ifFalse: [	(* fewer elements before, so move them *)\r				| newI <Integer> |\r				newI:: i + (needSpaceAtStart: slots) - slots.\r				contents\r					replaceFrom: (startGap + 1) - slots\r					to:  newI - 1\r					with: contents\r					startingAt: startGap + 1.\r				startGap:: startGap - slots.\r				newI	].\r)"),
				new MM("needSpaceAtEnd:", false, "needSpaceAtEnd: slots <Integer>\r = (\r\r	slots > endGap\r		ifTrue: [	contents:\r							(contents copyWithSize:\r								contents size + (slots max: size)	)]\r)"),
				new MM("needSpaceAtStart:", false, "needSpaceAtStart: nslots <Integer> ^<Integer> = (\r\r	(* Make sure that there are at least nslots of unused capacity at the low\r	 end of contents.  The # of slots added at the beginning is returned. *)\r\r	^nslots > startGap\r		ifTrue: [makeSpaceAtStart: nslots]\r		ifFalse: [ 0 ]\r)"),
				new MM("postCopy", false, "postCopy\r = (\r\r	super postCopy.\r	(* We potentially may change the size of the contents array so that this can work for copyWithSize:\r	  as well *)\r	contents: (contents copyWithSize: (contents size max: lastIndex))\r)"),
				new MM("with:", false, "with: el <E> = (\r\r	subclassResponsibility\r)"),
				new MM("withAll:", false, "withAll: els <Collection[E]> = (\r\r	subclassResponsibility\r)"),
				new MM("contents", true, null),
				new MM("contents:", true, null),
				new MM("startGap", true, null),
				new MM("startGap:", true, null),
				new MM("lastIndex", true, null),
				new MM("lastIndex:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$AddableList = (function () {
				var self = this;
				self.$super$Collections$AddableList.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$AddableList();
				self.$initCapacity$(self.$class().$defaultCapacity());
				return self;
			});
			this.$add$ = (function ($e) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$addAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$add$($el);
				}));
				return $c;
			});
			this.$at$ = (function ($i) {
				var self = this;
				var $adjusted = nil;
				$adjusted = $i + self.$startGap();
				if (!((0 < $i) && $adjusted.$$less$equal(self.$lastIndex()))) {
					self.$enclosingObjects$Collections$AddableList[0].$error$("invalid index");
				} else {
					nil;
				};
				return self.$contents().$at$($adjusted);
			});
			this.$at$ifAbsent$ = (function ($i, $f) {
				var self = this;
				var $internal = nil;
				$internal = $i + self.$startGap();
				return self.$internalIndexIsValid$($internal).$ifTrue$ifFalse$((function () {
					return self.$contents().$at$($internal);
				}), (function () {
					return $f.$value();
				}));
			});
			this.$includeAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$include$($el);
				}));
				return $c;
			});
			this.$indexOf$ifAbsent$ = (function ($el, $f) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						if (self.$at$($i).$$equal($el)) {
							return $i;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return $f.$value();
			});
			this.$remove$at$ = (function ($nElements, $i) {
				var self = this;
				var $el = nil;
				var $internal = nil;
				$el = self.$at$($i);
				$internal = self.$startGap() + $i;
				self.$internalRangeCheck$($internal);
				self.$internalRangeCheck$(($internal + $nElements) - 1);
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = $internal;
					$$limit = self.$lastIndex() - $nElements;
					for (; $$limit.$$greater$equal($index); ) {
						self.$contents().$at$put$($index, self.$contents().$at$($index + $nElements));
						$index = (1).$$plus($index);
					};
				};
				self.$contents().$at$put$(self.$lastIndex(), nil);
				self.$lastIndex$(self.$lastIndex() - $nElements);
				return self;
			});
			this.$remove$ifAbsent$ = (function ($el, $f) {
				var self = this;
				var NLR = new Object();
				try {
					self.$removeAt$(self.$indexOf$ifAbsent$($el, (function () {
						{
							NLR.value = $f.$value();
							throw NLR;
						};
					})));
					return $el;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$removeAll = (function () {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = self.$startGap() + 1;
					$$limit = self.$lastIndex();
					for (; $$limit.$$greater$equal($i); ) {
						self.$contents().$at$put$($i, nil);
						$i = (1).$$plus($i);
					};
				};
				self.$lastIndex$(self.$startGap());
				return self;
			});
			this.$removeAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$remove$($el);
				}));
				return $c;
			});
			this.$removeAt$ = (function ($index) {
				var self = this;
				var $el = nil;
				$el = self.$at$($index);
				self.$remove$at$(1, $index);
				return $el;
			});
			this.$removeEvery$ = (function ($val) {
				var self = this;
				return self.$removeEvery$startingAt$($val, 1);
			});
			this.$removeEvery$startingAt$ = (function ($val, $start) {
				var self = this;
				var NLR = new Object();
				try {
					var $index = nil;
					$index = self.$indexOf$ifAbsent$($val, (function () {
						{
							NLR.value = $val;
							throw NLR;
						};
					}));
					self.$removeAt$($index);
					return self.$removeEvery$startingAt$($val, $index);
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$removeFirst = (function () {
				var self = this;
				return self.$removeAt$(1);
			});
			this.$removeLast = (function () {
				var self = this;
				return self.$removeAt$(self.$size());
			});
			this.$size = (function () {
				var self = this;
				return self.$lastIndex() - self.$startGap();
			});
			this.$size$ = (function ($s) {
				var self = this;
				var $delta = nil;
				var $newLastIndex = nil;
				$delta = $s - self.$size();
				$newLastIndex = self.$lastIndex() + $delta;
				if ($delta < 0) {
					{
						var $$limit = nil;
						var $i = nil;
						nil;
						$i = $newLastIndex + 1;
						$$limit = self.$lastIndex();
						for (; $$limit.$$greater$equal($i); ) {
							self.$contents().$at$put$($i, nil);
							$i = (1).$$plus($i);
						};
					};
				} else {
					nil;
				};
				if ($delta > 0) {
					self.$needSpaceAtEnd$($delta);
				} else {
					nil;
				};
				self.$lastIndex$(self.$lastIndex() + $delta);
				return self;
			});
			this.$include$ = (function ($e) {
				var self = this;
				return self.$include$ifNew$($e, (function () {
					return nil;
				}));
			});
			this.$include$ifNew$ = (function ($e, $blk) {
				var self = this;
				if (!self.$includes$($e)) {
					self.$add$($e);
					$blk.$value();
				} else {
					nil;
				};
				return $e;
			});
			this.$remove$ = (function ($el) {
				var self = this;
				return self.$remove$ifAbsent$($el, (function () {
					return self.$enclosingObjects$Collections$AddableList[0].$error$("element not found");
				}));
			});
			this.$removeAllSuchThat$ = (function ($test) {
				var self = this;
				var $i = nil;
				$i = 1;
				{
					nil;
					for (; $i.$$less$equal(self.$size()); ) {
						if ($test.$value$(self.$at$($i))) {
							self.$removeAt$($i);
						} else {
							$i = $i + 1;
						};
					};
				};
				return self;
			});
			this.$makeSpaceAtStart$ = (function ($nslots) {
				var self = this;
				var $newGap = nil;
				var $diff = nil;
				var $newContents = nil;
				var $sz = nil;
				var $newLastIndex = nil;
				if (self.$isEmpty() && $nslots.$$less$equal(self.$contents().$size())) {
					self.$startGap$($nslots);
					self.$lastIndex$($nslots);
					return $nslots;
				} else {
					nil;
				};
				$sz = self.$size();
				$newGap = $nslots.$max$($sz);
				$diff = $newGap - self.$startGap();
				$newLastIndex = $newGap + $sz;
				$newContents = self.$Array().$new$(self.$contents().$size() + $diff);
				$newContents.$replaceFrom$to$with$startingAt$($newGap + 1, $newLastIndex, self.$contents(), self.$firstIndex());
				self.$startGap$($newGap);
				self.$contents$($newContents);
				self.$lastIndex$($newLastIndex);
				return $diff;
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				var $safeself = nil;
				$safeself = self;
				return self.$Array().$new$($s).$replaceFrom$to$with$(1, $s.$min$(self.$size()), $safeself);
			});
			this.$initCapacity$ = (function ($c) {
				var self = this;
				self.$contents$(self.$Array().$new$($c));
				self.$startGap$(0);
				self.$lastIndex$(0);
				return self;
			});
			this.$do$ = (function ($action) {
				var self = this;
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = self.$startGap() + 1;
					$$limit = self.$lastIndex();
					for (; $$limit.$$greater$equal($index); ) {
						$action.$value$(self.$contents().$at$($index));
						$index = (1).$$plus($index);
					};
				};
				return self;
			});
			this.$endGap = (function () {
				var self = this;
				return self.$contents().$size() - self.$lastIndex();
			});
			this.$firstIndex = (function () {
				var self = this;
				return 1 + self.$startGap();
			});
			this.$internalIndexIsValid$ = (function ($index) {
				var self = this;
				return $index.$$greater(self.$startGap()) && $index.$$less$equal(self.$lastIndex());
			});
			this.$internalRangeCheck$ = (function ($index) {
				var self = this;
				if (!self.$internalIndexIsValid$($index)) {
					self.$enclosingObjects$Collections$AddableList[0].$error$("invalid index");
				} else {
					nil;
				};
				return self;
			});
			this.$makeSpace$beforeIndex$ = (function ($slots, $i) {
				var self = this;
				return (($i - self.$startGap()) - 1).$$greater((self.$lastIndex() - $i) + 1).$ifTrue$ifFalse$((function () {
					self.$needSpaceAtEnd$($slots);
					self.$contents().$replaceFrom$to$with$startingAt$($i + $slots, self.$lastIndex() + $slots, self.$contents(), $i);
					self.$lastIndex$(self.$lastIndex() + $slots);
					return $i;
				}), (function () {
					var $newI = nil;
					$newI = ($i + self.$needSpaceAtStart$($slots)) - $slots;
					self.$contents().$replaceFrom$to$with$startingAt$((self.$startGap() + 1) - $slots, $newI - 1, self.$contents(), self.$startGap() + 1);
					self.$startGap$(self.$startGap() - $slots);
					return $newI;
				}));
			});
			this.$needSpaceAtEnd$ = (function ($slots) {
				var self = this;
				if ($slots.$$greater(self.$endGap())) {
					self.$contents$(self.$contents().$copyWithSize$(self.$contents().$size() + $slots.$max$(self.$size())));
				} else {
					nil;
				};
				return self;
			});
			this.$needSpaceAtStart$ = (function ($nslots) {
				var self = this;
				return $nslots.$$greater(self.$startGap()).$ifTrue$ifFalse$((function () {
					return self.$makeSpaceAtStart$($nslots);
				}), (function () {
					return 0;
				}));
			});
			this.$postCopy = (function () {
				var self = this;
				self.$super$Collections$AddableList.$postCopy.call(self);
				self.$contents$(self.$contents().$copyWithSize$(self.$contents().$size().$max$(self.$lastIndex())));
				return self;
			});
			this.$with$ = (function ($el) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$withAll$ = (function ($els) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$contents = (function () {
				return this.$contents$slot;
			});
			this.$contents$ = (function (v) {
				this.$contents$slot = v;
				return this;
			});
			this.$startGap = (function () {
				return this.$startGap$slot;
			});
			this.$startGap$ = (function (v) {
				this.$startGap$slot = v;
				return this;
			});
			this.$lastIndex = (function () {
				return this.$lastIndex$slot;
			});
			this.$lastIndex$ = (function (v) {
				this.$lastIndex$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`AddableList";
					this.$superInit$Collections$AddableList = $.$superInit$Collections$AddableList;
					this.$instance$initializer = $.$instance$initializer;
					this.$add$ = $.$add$;
					this.$addAll$ = $.$addAll$;
					this.$at$ = $.$at$;
					this.$at$ifAbsent$ = $.$at$ifAbsent$;
					this.$includeAll$ = $.$includeAll$;
					this.$indexOf$ifAbsent$ = $.$indexOf$ifAbsent$;
					this.$remove$at$ = $.$remove$at$;
					this.$remove$ifAbsent$ = $.$remove$ifAbsent$;
					this.$removeAll = $.$removeAll;
					this.$removeAll$ = $.$removeAll$;
					this.$removeAt$ = $.$removeAt$;
					this.$removeEvery$ = $.$removeEvery$;
					this.$removeEvery$startingAt$ = $.$removeEvery$startingAt$;
					this.$removeFirst = $.$removeFirst;
					this.$removeLast = $.$removeLast;
					this.$size = $.$size;
					this.$size$ = $.$size$;
					this.$include$ = $.$include$;
					this.$include$ifNew$ = $.$include$ifNew$;
					this.$remove$ = $.$remove$;
					this.$removeAllSuchThat$ = $.$removeAllSuchThat$;
					this.$makeSpaceAtStart$ = $.$makeSpaceAtStart$;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$initCapacity$ = $.$initCapacity$;
					this.$do$ = $.$do$;
					this.$endGap = $.$endGap;
					this.$firstIndex = $.$firstIndex;
					this.$internalIndexIsValid$ = $.$internalIndexIsValid$;
					this.$internalRangeCheck$ = $.$internalRangeCheck$;
					this.$makeSpace$beforeIndex$ = $.$makeSpace$beforeIndex$;
					this.$needSpaceAtEnd$ = $.$needSpaceAtEnd$;
					this.$needSpaceAtStart$ = $.$needSpaceAtStart$;
					this.$postCopy = $.$postCopy;
					this.$with$ = $.$with$;
					this.$withAll$ = $.$withAll$;
					this.$contents = $.$contents;
					this.$contents$ = $.$contents$;
					this.$startGap = $.$startGap;
					this.$startGap$ = $.$startGap$;
					this.$lastIndex = $.$lastIndex;
					this.$lastIndex$ = $.$lastIndex$;
					this.$enclosingObjects$Collections$AddableList = enclosingObjects;
					this.$super$Collections$AddableList = runtimeSuperclass;
					this["Collections`AddableList"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$contents$slot = nil;
						this.$startGap$slot = nil;
						this.$lastIndex$slot = nil;
					});
					this.basicNew = this["Collections`AddableList"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`AddableList";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("defaultCapacity", false, "defaultCapacity ^<Integer> = (\r	^5\r)"),
					new MM("new:", false, "new: capacity <Integer> ^<Instance> = (\r\r	^new initCapacity: capacity\r)"),
					new MM("newWithSize:", false, "newWithSize: s <Integer> ^<Instance> = (\r\r	(* create a new instance of size s with all elements undefined (nil).\r		This must be used very carefully, since each element should\r		be set using at:put: before accessing it; failure to do this can\r		lead to hard-to-debug crashes *)\r	^new initCapacity: s; size: s\r)"),
					new MM("with:", false, "with: val1 <E> ^<Instance> = (\r	^(new: 1) add: val1; yourself\r)"),
					new MM("withAll:", false, "withAll: cltn <Collection[E]> ^<Instance> = (\r	^(new: cltn size) addAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 5;
				});
				this.$new$ = (function ($capacity) {
					var self = this;
					return self.$new().$initCapacity$($capacity);
				});
				this.$newWithSize$ = (function ($s) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$initCapacity$($s);
						return cascadeReceiver.$size$($s);
					})(self.$new());
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$addAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`AddableList";
						this.$new = $.$new;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$new$ = $.$new$;
						this.$newWithSize$ = $.$newWithSize$;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$AddableList = enclosingObjects;
						this.$super$Collections$AddableList = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Association = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Association";
			this.name = "Collections`Association";
			this.header = "Association key: k value: v = (\r(* Associates an object of type K with an object of type V. *)|\r	public key <K> ::= k.\r	public value <V> ::= v.\r|)";
			this.slots = [
				new SM("key", true, false),
				new SM("value", true, false)
			];
			this.methods = [
				new MM("superInit`Collections`Association", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("copy", false, "copy = (\r	^class key: key value: value\r)"),
				new MM("=", false, "= other <Object> ^<Boolean> = (\r	(* | othera <Assoc[Object,Object]> | *)\r	(* %todo: replace Association with Assoc when typecase is fully impl *)\r	(* othera:: Association[Object,Object] coerce: other else: [ ^false ]. *)\r	^key = other key and: [ value = other value ].\r)"),
				new MM("hash", false, "hash ^<Int> = (\r	^key hash bitXor: value hash\r)"),
				new MM("printOn:", false, "printOn: strm <CharOutputStream> = (\r	key printOn: strm.\r	strm nextPutAll: ' -> '.\r	value printOn: strm.\r)"),
				new MM("key", true, null),
				new MM("key:", true, null),
				new MM("value", true, null),
				new MM("value:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$Association = (function ($k, $v) {
				var self = this;
				self.$super$Collections$Association.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($k, $v) {
				var self = this;
				self.$superInit$Collections$Association($k, $v);
				self.$key$($k);
				self.$value$($v);
				return self;
			});
			this.$copy = (function () {
				var self = this;
				return self.$class().$key$value$(self.$key(), self.$value());
			});
			this.$$equal = (function ($other) {
				var self = this;
				return self.$key().$$equal($other.$key()) && self.$value().$$equal($other.$value());
			});
			this.$hash = (function () {
				var self = this;
				return self.$key().$hash().$bitXor$(self.$value().$hash());
			});
			this.$printOn$ = (function ($strm) {
				var self = this;
				self.$key().$printOn$($strm);
				$strm.$nextPutAll$(" -> ");
				self.$value().$printOn$($strm);
				return self;
			});
			this.$key = (function () {
				return this.$key$slot;
			});
			this.$key$ = (function (v) {
				this.$key$slot = v;
				return this;
			});
			this.$value = (function () {
				return this.$value$slot;
			});
			this.$value$ = (function (v) {
				this.$value$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Association";
					this.$superInit$Collections$Association = $.$superInit$Collections$Association;
					this.$instance$initializer = $.$instance$initializer;
					this.$copy = $.$copy;
					this.$$equal = $.$$equal;
					this.$hash = $.$hash;
					this.$printOn$ = $.$printOn$;
					this.$key = $.$key;
					this.$key$ = $.$key$;
					this.$value = $.$value;
					this.$value$ = $.$value$;
					this.$enclosingObjects$Collections$Association = enclosingObjects;
					this.$super$Collections$Association = runtimeSuperclass;
					this["Collections`Association"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$key$slot = nil;
						this.$value$slot = nil;
					});
					this.basicNew = this["Collections`Association"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Association";
				this.slots = [];
				this.methods = [
					new MM("key:value:", true, null),
					new MM("new", false, "new ^<Instance> = (\r	^self key: nil value: nil\r)")
				];
				this.nestedClasses = [];
				this.$key$value$ = (function ($k, $v) {
					return (new this.nonMeta.basicNew()).$instance$initializer($k, $v);
				});
				this.$new = (function () {
					var self = this;
					return self.$key$value$(nil, nil);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Association";
						this.$key$value$ = $.$key$value$;
						this.$new = $.$new;
						this.$enclosingObjects$Collections$Association = enclosingObjects;
						this.$super$Collections$Association = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Bag = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Bag";
			this.name = "Collections`Bag";
			this.header = "Bag new: capacity <Int> ^<Instance> = Collection (\r(* Bags are unordered collections of possibly duplicate elements.\r\rContrast this with Sets, which will hold no more than one entry\rfor a given object (as distinguished by #=). *)|\r	private contents_private <MutableMap[E,Int]> ::= MutableHashedMap new: capacity.	(* holds (element -> occurrence) *)\r|)";
			this.slots = [new SM("contents_private", true, false)];
			this.methods = [
				new MM("superInit`Collections`Bag", true, "Collection"),
				new MM("instance`initializer", true, "Collection"),
				new MM("occurrencesOf:", false, "occurrencesOf: o <Object> ^<Int> = (\r	^contents at: o ifAbsent: [ 0 ]\r)"),
				new MM("size", false, "size ^<Int> = (\r	^contents inject: 0 into:\r		[ :tot <Int> :occurrences <Int> |\r			tot + occurrences	]\r)"),
				new MM("add:", false, "add: el <E> ^<E> = (\r	^add: el withOccurrences: 1\r)"),
				new MM("add:withOccurrences:", false, "add: el <E> withOccurrences: oc <Int> ^<E>  = (\r	contents at: el put: oc + (occurrencesOf: el) .\r	^el\r)"),
				new MM("addAll:", false, "addAll: els <Collection[E]> ^<Collection[E]> = (\r	^els do: [ :el <E> | add: el ]\r)"),
				new MM("include:", false, "include: el <E> ^<E> = (\r	| ocs <Int> |\r	ocs:: occurrencesOf: el.\r	ocs > 0	\r		ifFalse: [ contents at: el put: 1 ].\r	^el\r)"),
				new MM("include:ifNew:", false, "include: el <E> ifNew: blk <[]> ^<E> = (\r	| isnew <Boolean> |\r	isnew:: includes: el.\r	include: el.\r	isnew\r		ifTrue: [ blk value ].\r	^el\r)"),
				new MM("includeAll:", false, "includeAll: els <Collection[E]> ^<Collection[E]> = (\r	^els do: [ :el <E> |	include: el ]\r)"),
				new MM("remove:", false, "remove: el <E> ^<E> = (\r	^remove: el ifAbsent: [ error: 'Element not found' ]\r)"),
				new MM("remove:ifAbsent:", false, "remove: el <E> ifAbsent: f <[X def]> ^<E | X> = (\r	^remove: el withOccurrences: 1 ifAbsent: f\r)"),
				new MM("remove:withOccurrences:ifAbsent:", false, "remove: el <E> withOccurrences: ocs <Int> ifAbsent: f <[X def]> ^<E | X> = (\r	| curOcs <Int> |\r	curOcs:: occurrencesOf: el.\r	^ocs > curOcs\r		ifTrue: [ f value ]\r		ifFalse: [  curOcs = ocs\r					ifTrue: [	contents removeKey: el ]\r					ifFalse: [	contents at: el put: curOcs - ocs ].\r				   el	]\r)"),
				new MM("contents:", false, "contents: c <MutableMap[E,Int]> = (\r	contents_private:: c.\r)"),
				new MM("isKindOfBag", false, "isKindOfBag = (\r\r	^ true\r)"),
				new MM("removeAll:", false, "removeAll: els <Collection[E]> ^<Collection[E]> = (\r	els do: [ :el <E> | remove: el ].\r	^els\r)"),
				new MM("removeAllSuchThat:", false, "removeAllSuchThat: test <[:E| Boolean]> = (\r	copy do:\r		[ :el |\r			(test value: el)\r				ifTrue: [ self remove: el ]		]\r)"),
				new MM("removeEvery:", false, "removeEvery: el <E> ^<E> = (\r	contents removeKey: el ifAbsent: [].\r	^el\r)"),
				new MM("asBag", false, "asBag ^<Bag[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r	^(* guaranteed <Bag[EX]> *)self\r)"),
				new MM("initCapacity:", false, "initCapacity: cap <Int> = (\r	contents: (MutableHashedMap(* [E,Int] *) new: cap).\r)"),
				new MM("do:", false, "do: f <[:E]> = (\r	contents keysAndValuesDo:\r		[ :el <E> :occurrences <Int> |\r			occurrences timesRepeat:\r				[ f value: el ]		].\r)"),
				new MM("equalsBag:", false, "equalsBag: other <Bag[Object]> ^<Boolean> = (\r\r\r	(* %kludge: This is ugly, but will have to do until typecase can deal with type variables.  It is safe\r	  since we know that MutableHashedMaps can actually perform an at:ifAbsent: safely with\r	  an arbitrary key type, even thought its signature doesn't reflect that currently (although it could) *)\r\r	contents size = other contents size\r		ifFalse: [ ^false ].\r	contents keysAndValuesDo:\r		[ :el <E> :occurrences <Int> |\r			(other contents at: el ifAbsent: [ 0 ]) = occurrences\r				ifFalse: [ ^false ].	].\r	^true\r)"),
				new MM("postCopy", false, "postCopy = (\r	super postCopy.\r	contents: contents copy.\r)"),
				new MM("contents", false, "contents ^<MutableMap[E,Int]> = (\r	^contents_private\r)"),
				new MM("=", false, "= other <Object> ^<Boolean> = (\r	^self == other\r		or: [ equalsBag: (Bag(* [Object] *) coerce: other else: [ ^false ]) ]\r)"),
				new MM("includes:", false, "includes: el <Object> ^<Boolean> = (\r	^contents includesKey: el\r)"),
				new MM("~=", false, "~= other = (\r	^(self = other) not.\r)"),
				new MM("contents_private", true, null),
				new MM("contents_private:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$Bag = (function ($capacity) {
				var self = this;
				self.$super$Collections$Bag.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($capacity) {
				var self = this;
				self.$superInit$Collections$Bag($capacity);
				self.$contents_private$(self.$enclosingObjects$Collections$Bag[0].$MutableHashedMap().$new$($capacity));
				return self;
			});
			this.$occurrencesOf$ = (function ($o) {
				var self = this;
				return self.$contents().$at$ifAbsent$($o, (function () {
					return 0;
				}));
			});
			this.$size = (function () {
				var self = this;
				return self.$contents().$inject$into$(0, (function ($tot, $occurrences) {
					return $tot + $occurrences;
				}));
			});
			this.$add$ = (function ($el) {
				var self = this;
				return self.$add$withOccurrences$($el, 1);
			});
			this.$add$withOccurrences$ = (function ($el, $oc) {
				var self = this;
				self.$contents().$at$put$($el, $oc + self.$occurrencesOf$($el));
				return $el;
			});
			this.$addAll$ = (function ($els) {
				var self = this;
				return $els.$do$((function ($el) {
					return self.$add$($el);
				}));
			});
			this.$include$ = (function ($el) {
				var self = this;
				var $ocs = nil;
				$ocs = self.$occurrencesOf$($el);
				if (!($ocs > 0)) {
					self.$contents().$at$put$($el, 1);
				} else {
					nil;
				};
				return $el;
			});
			this.$include$ifNew$ = (function ($el, $blk) {
				var self = this;
				var $isnew = nil;
				$isnew = self.$includes$($el);
				self.$include$($el);
				if ($isnew) {
					$blk.$value();
				} else {
					nil;
				};
				return $el;
			});
			this.$includeAll$ = (function ($els) {
				var self = this;
				return $els.$do$((function ($el) {
					return self.$include$($el);
				}));
			});
			this.$remove$ = (function ($el) {
				var self = this;
				return self.$remove$ifAbsent$($el, (function () {
					return self.$enclosingObjects$Collections$Bag[0].$error$("Element not found");
				}));
			});
			this.$remove$ifAbsent$ = (function ($el, $f) {
				var self = this;
				return self.$remove$withOccurrences$ifAbsent$($el, 1, $f);
			});
			this.$remove$withOccurrences$ifAbsent$ = (function ($el, $ocs, $f) {
				var self = this;
				var $curOcs = nil;
				$curOcs = self.$occurrencesOf$($el);
				return $ocs.$$greater($curOcs).$ifTrue$ifFalse$((function () {
					return $f.$value();
				}), (function () {
					if ($curOcs.$$equal($ocs)) {
						self.$contents().$removeKey$($el);
					} else {
						self.$contents().$at$put$($el, $curOcs - $ocs);
					};
					return $el;
				}));
			});
			this.$contents$ = (function ($c) {
				var self = this;
				self.$contents_private$($c);
				return self;
			});
			this.$isKindOfBag = (function () {
				var self = this;
				return true;
			});
			this.$removeAll$ = (function ($els) {
				var self = this;
				$els.$do$((function ($el) {
					return self.$remove$($el);
				}));
				return $els;
			});
			this.$removeAllSuchThat$ = (function ($test) {
				var self = this;
				self.$copy().$do$((function ($el) {
					return $test.$value$($el).$ifTrue$((function () {
						return self.$remove$($el);
					}));
				}));
				return self;
			});
			this.$removeEvery$ = (function ($el) {
				var self = this;
				self.$contents().$removeKey$ifAbsent$($el, (function () {
					return nil;
				}));
				return $el;
			});
			this.$asBag = (function () {
				var self = this;
				return self;
			});
			this.$initCapacity$ = (function ($cap) {
				var self = this;
				self.$contents$(self.$enclosingObjects$Collections$Bag[0].$MutableHashedMap().$new$($cap));
				return self;
			});
			this.$do$ = (function ($f) {
				var self = this;
				self.$contents().$keysAndValuesDo$((function ($el, $occurrences) {
					return $occurrences.$timesRepeat$((function () {
						return $f.$value$($el);
					}));
				}));
				return self;
			});
			this.$equalsBag$ = (function ($other) {
				var self = this;
				var NLR = new Object();
				try {
					if (!self.$contents().$size().$$equal($other.$contents().$size())) {
						return false;
					} else {
						nil;
					};
					self.$contents().$keysAndValuesDo$((function ($el, $occurrences) {
						return $other.$contents().$at$ifAbsent$($el, (function () {
							return 0;
						})).$$equal($occurrences).$ifFalse$((function () {
							{
								NLR.value = false;
								throw NLR;
							};
						}));
					}));
					return true;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$postCopy = (function () {
				var self = this;
				self.$super$Collections$Bag.$postCopy.call(self);
				self.$contents$(self.$contents().$copy());
				return self;
			});
			this.$contents = (function () {
				var self = this;
				return self.$contents_private();
			});
			this.$$equal = (function ($other) {
				var self = this;
				var NLR = new Object();
				try {
					return (self === $other) || self.$equalsBag$(self.$enclosingObjects$Collections$Bag[0].$Bag().$coerce$else$($other, (function () {
						{
							NLR.value = false;
							throw NLR;
						};
					})));
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$includes$ = (function ($el) {
				var self = this;
				return self.$contents().$includesKey$($el);
			});
			this.$$tilde$equal = (function ($other) {
				var self = this;
				return self.$$equal($other).$not();
			});
			this.$contents_private = (function () {
				return this.$contents_private$slot;
			});
			this.$contents_private$ = (function (v) {
				this.$contents_private$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Bag";
					this.$superInit$Collections$Bag = $.$superInit$Collections$Bag;
					this.$instance$initializer = $.$instance$initializer;
					this.$occurrencesOf$ = $.$occurrencesOf$;
					this.$size = $.$size;
					this.$add$ = $.$add$;
					this.$add$withOccurrences$ = $.$add$withOccurrences$;
					this.$addAll$ = $.$addAll$;
					this.$include$ = $.$include$;
					this.$include$ifNew$ = $.$include$ifNew$;
					this.$includeAll$ = $.$includeAll$;
					this.$remove$ = $.$remove$;
					this.$remove$ifAbsent$ = $.$remove$ifAbsent$;
					this.$remove$withOccurrences$ifAbsent$ = $.$remove$withOccurrences$ifAbsent$;
					this.$contents$ = $.$contents$;
					this.$isKindOfBag = $.$isKindOfBag;
					this.$removeAll$ = $.$removeAll$;
					this.$removeAllSuchThat$ = $.$removeAllSuchThat$;
					this.$removeEvery$ = $.$removeEvery$;
					this.$asBag = $.$asBag;
					this.$initCapacity$ = $.$initCapacity$;
					this.$do$ = $.$do$;
					this.$equalsBag$ = $.$equalsBag$;
					this.$postCopy = $.$postCopy;
					this.$contents = $.$contents;
					this.$$equal = $.$$equal;
					this.$includes$ = $.$includes$;
					this.$$tilde$equal = $.$$tilde$equal;
					this.$contents_private = $.$contents_private;
					this.$contents_private$ = $.$contents_private$;
					this.$enclosingObjects$Collections$Bag = enclosingObjects;
					this.$super$Collections$Bag = runtimeSuperclass;
					this["Collections`Bag"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$contents_private$slot = nil;
					});
					this.basicNew = this["Collections`Bag"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Bag";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("defaultCapacity", false, "defaultCapacity = (\r\r	^ 8\r)"),
					new MM("with:with:", false, "with: el1 with: el2 = (\r	^(with: el1) add: el2; yourself.\r)"),
					new MM("with:with:with:", false, "with: el1 with: el2 with: el3 = (\r	^(with: el1 with: el2) add: el3; yourself\r)"),
					new MM("coerce:else:", false, "coerce: o <Object> else: fail <[X def]>   ^<Instance|X> = (\r	(* %remove when typecase correctly implemented. *)\r\r	(* Explicit test for nil as long as the in-image nil is no Newspeak object *)\r	^ (o ~= nil and: [o isKindOfBag])\r		ifTrue: [ o ]\r		ifFalse: [ fail value ]\r)"),
					new MM("new", false, "new = (\r	^new: defaultCapacity\r)"),
					new MM("with:", false, "with: val1 <E> ^<Instance> = (\r	^(new: 1) add: val1; yourself\r)"),
					new MM("withAll:", false, "withAll: cltn <Collection[E]> ^<Instance> = (\r	^(new: cltn size) addAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($capacity) {
					return (new this.nonMeta.basicNew()).$instance$initializer($capacity);
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 8;
				});
				this.$with$with$ = (function ($el1, $el2) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($el2);
						return cascadeReceiver.$yourself();
					})(self.$with$($el1));
				});
				this.$with$with$with$ = (function ($el1, $el2, $el3) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($el3);
						return cascadeReceiver.$yourself();
					})(self.$with$with$($el1, $el2));
				});
				this.$coerce$else$ = (function ($o, $fail) {
					var self = this;
					return ($o.$$tilde$equal(nil) && $o.$isKindOfBag()).$ifTrue$ifFalse$((function () {
						return $o;
					}), (function () {
						return $fail.$value();
					}));
				});
				this.$new = (function () {
					var self = this;
					return self.$new$(self.$defaultCapacity());
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$addAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Bag";
						this.$new$ = $.$new$;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$with$with$ = $.$with$with$;
						this.$with$with$with$ = $.$with$with$with$;
						this.$coerce$else$ = $.$coerce$else$;
						this.$new = $.$new;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$Bag = enclosingObjects;
						this.$super$Collections$Bag = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Collection = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Collection";
			this.name = "Collections`Collection";
			this.header = "Collection = (\r(* A Collection is an object that represents a group of objects.\r\rThe only message that must be implemented by subclasses is the #do: message.\rAll other Collection messages are then defined in terms of #do:.\r\r%responsibility size\r    Subclasses usually reimplement the #size message if possible, since the\r	implementation provided in this class is very inefficient.\r%responsibility collect:\r    Subclasses may wish to consider overriding the #collect: (and #select: and #reject:)\r    messages to specialize their return\r    types to match the receiver type more closely. *)| |)";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`Collection", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("copy", false, "public copy = (\r	#BOGUS. (* Questionable. Probably should be shallowCopy if we keep it. *)\r	^self class withAll: self\r)"),
				new MM("postCopy", false, "public postCopy = (\r	#BOGUS. (* Squeakism *)\r)"),
				new MM("value", false, "public value = (\r	#BOGUS. (* Questionable *)\r	^self\r)"),
				new MM("hash", false, "public hash ^<Integer> = (\r	| count ::= 0. |\r	^self inject: 0 into:\r		[:previousHash <Integer> :element <E> |\r		| newHash |\r		newHash:: previousHash bitXor: element hash.\r		count:: count + 1.\r		count > 2 ifTrue: [^newHash].\r		newHash]\r)"),
				new MM("occurrencesOf:", false, "protected occurrencesOf: o <Object> ^<Int> = (\r	| c <Int> |\r	#BOGUS. (* Questionable *)\r	c:: 0.\r	do: [ :e <E> | e = o ifTrue:[ c:: c + 1 ]].\r	^c\r)"),
				new MM("size", false, "public size ^<Integer> = (\r	| count ::= 0. |\r	self do: [:element <E> | count:: count + 1 ].\r	^count\r)"),
				new MM("species", false, "public species ^<Collection[E] class> = (\r	^Set\r)"),
				new MM("allSatisfy:", false, "public allSatisfy: predicate <[:E | Boolean]> ^<Boolean> = (\r	self do: [:each | (predicate value: each) ifFalse: [^false]].\r	^true\r)"),
				new MM("anySatisfy:", false, "public anySatisfy: predicate <[:E | Boolean]> ^<Boolean> = (\r	self do: [:each | (predicate value: each) ifTrue: [^true]].\r	^false\r)"),
				new MM("do:separatedBy:", false, "public do: action <[:E]> separatedBy: betweenAction <[]> = (\r	(* Useful when you need to do something 'between' elements (i.e. not before the first one, and not after the last one). [action] is evaluated the same way as for #do:, but [betweenAction] is evaluated once between each pair of elements. *)\r	| firstTime <Boolean> ::= true. |\r	firstTime:: true.\r	self do: \r		[:element <E> |\r		firstTime\r			ifTrue: [firstTime:: false]\r			ifFalse: [betweenAction value].\r			action value: element].\r)"),
				new MM("isCollection", false, "public isCollection ^<Boolean> = (\r	^true\r)"),
				new MM("isKindOfCollection", false, "isKindOfCollection = (\r	(* Should be auto-generated *)\r	^ true\r)"),
				new MM("noneSatisfy:", false, "public noneSatisfy: predicate <[:E | Boolean]> ^<Boolean> = (\r	self do: [:each | (predicate value: each) ifTrue: [^false]].\r	^true\r)"),
				new MM("union:", false, "public union: other <Collection[Object]> ^ <Set[Object]> = (\r	^self asSet addAll: other; yourself\r)"),
				new MM("asArray", false, "public asArray  ^<Array[E]> = (\r	|\r	array <Array[E]> = Array new: size.\r	index <Integer> ::= 1.\r	|\r	self do: [:element <E> |\r		array at: index put: element.\r		index:: index + 1].\r	^array\r)"),
				new MM("asBag", false, "public asBag ^<Bag[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r	(* Return a new Bag holding the elements of this collection.  The element type of the bag is whatever the\r	 static type of the receiver is at the point of send. *)\r\r	^Bag withAll: self\r)"),
				new MM("asMutableArrayList", false, "public asMutableArrayList ^<MutableArrayList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r(* Return a new MutableArrayList holding the elements of this collection.  The element type of the ordered collection\r       is whatever the static type of the receiver is at the point of send. *)\r	^MutableArrayList(* [EX] *) withAll: (* (guaranteed <CollectionEX]> *)self(* ) *)\r)"),
				new MM("asSet", false, "public asSet ^<Extensible[EX]> = (\r	 (* Return a new extensible collection holding the elements of this collection. *)\r\r	^Set(* [EX] *) withAll: (* (guaranteed <Collection[EX]> *)self(* ) *)\r)"),
				new MM("asSortedList", false, "public asSortedList ^<List[Object]> = (\r	(* This message is NOT typesafe, and should only be used for compatibility reasons, since there is\r 	 no way of knowing whether the elements of this collection support #< or not.  You should use\r	 #asSortedList: instead, if possible *)\r\r	^SortedList(* [Object] *) withAll: self\r)"),
				new MM("asSortedList:", false, "public asSortedList: sortPredicate <[:E:EX | Boolean]>	^<SortedList[EX]> = (\r	(* { where EX is  arg 1 of #value:value: message of arg 1 } *)\r	(* Return a new sorted collection ordered by the given sortPredicate.  Note that Magnitude\r	 supports the defaultSort message for convenience, so that for example if you have a collection\r	 of strings strc, you can say:\r		strc asSortedList: String defaultSort\r	*)\r\r	(* This is typesafe despite the guarantee because the inference clause requires that E = EX at the\r          call site *)\r	^(SortedList(* [EX] *) new: size sortBlock: (* (guaranteed <[EX,EX,^Boolean]> *)sortPredicate(* ) *))\r		addAll: (* (guaranteed <Collection[EX]> *)self(* ) *); yourself\r)"),
				new MM("collect:", false, "public collect: map <[:E | R def]> ^<Collection[R]> = (\r	^self collectUsingAdd: map\r)"),
				new MM("detect:", false, "public detect: predicate <[:E | Boolean]> ^<E> = (\r	^self detect: predicate ifNone: [Error signal: 'No matching element detected']\r)"),
				new MM("detect:ifNone:", false, "public detect: predicate <[:E | Boolean]> ifNone: fail <[X def]> ^<E | X> = (\r	self do: [:element | (predicate value: element) ifTrue: [^element]].\r	^fail value\r)"),
				new MM("do:", false, "public do: action <[:E]> = (\r	subclassResponsibility\r)"),
				new MM("inject:into:", false, "public inject: initialValue <X> into: foldBlock <[:X def :E | X]> ^<X> = (\r	| runningValue <X> |\r	runningValue:: initialValue.\r	self do: [:element <X> | runningValue:: foldBlock value: runningValue value: element].\r	^runningValue\r)"),
				new MM("intersection:", false, "public intersection: other <Collection[Object]> ^<List[E]> = (\r	^self select: [:each | other includes: each]\r)"),
				new MM("reduce:", false, "public reduce: reduceFn <[:RE def :RE | RE]> ^<RE> = (\r	(* {where CONSTRAINER <RE> is returnType of #anElement message of receiverType} *)\r	(* Like reduce:ifEmpty: except that it is a dynamic error to send this to an empty collection *)\r	\r	^self reduce: reduceFn ifEmpty: [Error signal: 'Cannot reduce an empty collection' ] \r)"),
				new MM("reduce:ifEmpty:", false, "public reduce: reduceFn <[:RE def:RE| RE]> ifEmpty: onEmpty <[X def]>  ^<RE | X> = (\r	(* {where CONSTRAINER <RE> is returnType of #anElement message of receiverType} *)\r	(* Reduce is similar to inject except that the first element is used as the injected\r	  element for the rest of the collection.  It is often handier than inject.  For example:\r		(#(1 2 3 4) reduce: [ :a <Int> :b <Int> |   a + b ]) sums a collection of numbers. *)\r\r	(* esoteric typing %note: We need to ensure that E is a subtype of RE (the argument type for the reduction\r		function), but since that would require a\r		supertype constraint (which neither we nor anyone else support, we accomplish the same\r	    thing indirectly by introducing an unreferenced type \r		variable CONSTRAINER that is inferred to be E at the call site, and then constraining it with a bound\r		of RE.  This will prevent any call where E > RE from typechecking.  However, since the\r		typesystem doesn't 'know' that, we have to tell it that with a guarantee in the method body.\r		Because of the CONSTRAINER, we know that the guarantee is true for all calls that typecheck.\r		Of course, this is tricky, but at least we can express it, and in a way that hides the guarantee from\r		callers! *)\r\r	| current <RE> |\r	self do:\r		[:element <E> |\r		| rel <RE> |\r		rel:: element.\r		current isNil\r			ifTrue: [ current:: rel ]\r			ifFalse: [ current:: reduceFn value: current value: rel ]	].\r	^current isNil\r		ifFalse: [ current ]\r		ifTrue: [ onEmpty value ]\r)"),
				new MM("reject:", false, "public reject: predicate <[:E | Boolean]> ^<List[E]> = (\r	^self select: [ :e | (predicate value: e) not ]\r)"),
				new MM("select:", false, "public select: predicate <[:E | Boolean]> ^<List[E]> = (\r	| result <MutableArrayList[E]> |\r	result:: self newForCollectUsingAdd: size.\r	self do: [:element | (predicate value: element) ifTrue: [result add: element]].\r	^result\r)"),
				new MM("printOn:", false, "public printOn: stream <CharOutputStream> = (\r	| count <Integer> first <Boolean> |\r	stream	nextPutAll: class mixin simpleName;\r			nextPut: \"(\".\r	count:: 0.\r	first:: true.\r	self printElementsDo:\r		[:element <Object> |\r		first\r			ifTrue: [ first:: false ]\r			ifFalse: [ stream space ].\r		element printOn: stream.\r		count:: count + 1.\r		count >= maxPrintElements\r			ifTrue: [ stream nextPut: \"<\"; print: size - count; nextPutAll: ' more elements>)'.\r						^self]].\r	stream nextPut: \")\".\r)"),
				new MM("collectUsingAdd:", false, "protected collectUsingAdd: map <[:E | R def]> ^<Collection[R]> = (\r	| c |\r	(* See #newForCollect: for explanation of why the guarantee is safe *)\r	c:: (newForCollectUsingAdd: size). \r	do: [ :e | c add: (map value: e) ].\r	^c\r)"),
				new MM("maxPrintElements", false, "protected maxPrintElements ^<Int> = (\r	^100\r)"),
				new MM("newForCollectUsingAdd:", false, "protected newForCollectUsingAdd: size <Int> ^<MutableArrayList[Object]> = (\r	(* Return a new extensible collection that is as closely related to the receiver's class as possible.  The\r	 returned collection must be unaliased and empty, so it is safe for the caller to guarantee that the type\r	 variable is of a more specific type *)\r\r	^MutableArrayList new: size\r)"),
				new MM("printElementsDo:", false, "protected printElementsDo: f <[:Object]> = (\r	(* Evaluate the block with all the elements that should be shown as the contents in the printstring.  This provides a hook for things like MutableHashedMaps, which want to show their associations, not their values *)\r	self do: f\r)"),
				new MM("=", false, "public = other <Object> ^<Boolean> = (\r	^self == other\r		or: [ self class == other class\r		and: [ self hasSameElementsAs: other ]]\r)"),
				new MM("hasSameElementsAs:", false, "protected hasSameElementsAs: other <Collection[Object]>  ^<Boolean> = (\r	(* Like =, but doesn't care whether the receiver and other are the same kind of collection or not *)\r	#BOGUS. (* Questionable *)\r	^size = other size  and:\r		[ asBag = other asBag ] \r)"),
				new MM("includes:", false, "public includes: o <Object> ^<Boolean> = (\r	self do: [:element <E> | element = o ifTrue: [^true]].\r	^false\r)"),
				new MM("isEmpty", false, "public isEmpty ^<Boolean> = (\r	^0 == self size\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$Collection = (function () {
				var self = this;
				self.$super$Collections$Collection.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$Collection();
				return self;
			});
			this.$copy = (function () {
				var self = this;
				"BOGUS";
				return self.$class().$withAll$(self);
			});
			this.$postCopy = (function () {
				var self = this;
				"BOGUS";
				return self;
			});
			this.$value = (function () {
				var self = this;
				"BOGUS";
				return self;
			});
			this.$hash = (function () {
				var self = this;
				var NLR = new Object();
				try {
					var $count = nil;
					$count = 0;
					return self.$inject$into$(0, (function ($previousHash, $element) {
						var $newHash = nil;
						$newHash = $previousHash.$bitXor$($element.$hash());
						$count = $count + 1;
						if ($count > 2) {
							{
								NLR.value = $newHash;
								throw NLR;
							};
						} else {
							nil;
						};
						return $newHash;
					}));
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$occurrencesOf$ = (function ($o) {
				var self = this;
				var $c = nil;
				"BOGUS";
				$c = 0;
				self.$do$((function ($e) {
					return $e.$$equal($o).$ifTrue$((function () {
						return $c = $c + 1;
					}));
				}));
				return $c;
			});
			this.$size = (function () {
				var self = this;
				var $count = nil;
				$count = 0;
				self.$do$((function ($element) {
					return $count = $count + 1;
				}));
				return $count;
			});
			this.$species = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$Set();
			});
			this.$allSatisfy$ = (function ($predicate) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($each) {
						return $predicate.$value$($each).$ifFalse$((function () {
							{
								NLR.value = false;
								throw NLR;
							};
						}));
					}));
					return true;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$anySatisfy$ = (function ($predicate) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($each) {
						return $predicate.$value$($each).$ifTrue$((function () {
							{
								NLR.value = true;
								throw NLR;
							};
						}));
					}));
					return false;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$do$separatedBy$ = (function ($action, $betweenAction) {
				var self = this;
				var $firstTime = nil;
				$firstTime = true;
				$firstTime = true;
				self.$do$((function ($element) {
					if ($firstTime) {
						$firstTime = false;
					} else {
						$betweenAction.$value();
					};
					return $action.$value$($element);
				}));
				return self;
			});
			this.$isCollection = (function () {
				var self = this;
				return true;
			});
			this.$isKindOfCollection = (function () {
				var self = this;
				return true;
			});
			this.$noneSatisfy$ = (function ($predicate) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($each) {
						return $predicate.$value$($each).$ifTrue$((function () {
							{
								NLR.value = false;
								throw NLR;
							};
						}));
					}));
					return true;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$union$ = (function ($other) {
				var self = this;
				return (function (cascadeReceiver) {
					cascadeReceiver.$addAll$($other);
					return cascadeReceiver.$yourself();
				})(self.$asSet());
			});
			this.$asArray = (function () {
				var self = this;
				var $array = nil;
				var $index = nil;
				$array = self.$Array().$new$(self.$size());
				$index = 1;
				self.$do$((function ($element) {
					$array.$at$put$($index, $element);
					return $index = $index + 1;
				}));
				return $array;
			});
			this.$asBag = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$Bag().$withAll$(self);
			});
			this.$asMutableArrayList = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$MutableArrayList().$withAll$(self);
			});
			this.$asSet = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$Set().$withAll$(self);
			});
			this.$asSortedList = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$SortedList().$withAll$(self);
			});
			this.$asSortedList$ = (function ($sortPredicate) {
				var self = this;
				return (function (cascadeReceiver) {
					cascadeReceiver.$addAll$(self);
					return cascadeReceiver.$yourself();
				})(self.$enclosingObjects$Collections$Collection[0].$SortedList().$new$sortBlock$(self.$size(), $sortPredicate));
			});
			this.$collect$ = (function ($map) {
				var self = this;
				return self.$collectUsingAdd$($map);
			});
			this.$detect$ = (function ($predicate) {
				var self = this;
				return self.$detect$ifNone$($predicate, (function () {
					return self.$Error().$signal$("No matching element detected");
				}));
			});
			this.$detect$ifNone$ = (function ($predicate, $fail) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($element) {
						return $predicate.$value$($element).$ifTrue$((function () {
							{
								NLR.value = $element;
								throw NLR;
							};
						}));
					}));
					return $fail.$value();
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$do$ = (function ($action) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$inject$into$ = (function ($initialValue, $foldBlock) {
				var self = this;
				var $runningValue = nil;
				$runningValue = $initialValue;
				self.$do$((function ($element) {
					return $runningValue = $foldBlock.$value$value$($runningValue, $element);
				}));
				return $runningValue;
			});
			this.$intersection$ = (function ($other) {
				var self = this;
				return self.$select$((function ($each) {
					return $other.$includes$($each);
				}));
			});
			this.$reduce$ = (function ($reduceFn) {
				var self = this;
				return self.$reduce$ifEmpty$($reduceFn, (function () {
					return self.$Error().$signal$("Cannot reduce an empty collection");
				}));
			});
			this.$reduce$ifEmpty$ = (function ($reduceFn, $onEmpty) {
				var self = this;
				var $current = nil;
				self.$do$((function ($element) {
					var $rel = nil;
					$rel = $element;
					return $current.$isNil().$ifTrue$ifFalse$((function () {
						return $current = $rel;
					}), (function () {
						return $current = $reduceFn.$value$value$($current, $rel);
					}));
				}));
				return $current.$isNil().$ifFalse$ifTrue$((function () {
					return $current;
				}), (function () {
					return $onEmpty.$value();
				}));
			});
			this.$reject$ = (function ($predicate) {
				var self = this;
				return self.$select$((function ($e) {
					return $predicate.$value$($e).$not();
				}));
			});
			this.$select$ = (function ($predicate) {
				var self = this;
				var $result = nil;
				$result = self.$newForCollectUsingAdd$(self.$size());
				self.$do$((function ($element) {
					return $predicate.$value$($element).$ifTrue$((function () {
						return $result.$add$($element);
					}));
				}));
				return $result;
			});
			this.$printOn$ = (function ($stream) {
				var self = this;
				var NLR = new Object();
				try {
					var $count = nil;
					var $first = nil;
					(function (cascadeReceiver) {
						cascadeReceiver.$nextPutAll$(self.$class().$mixin().$simpleName());
						return cascadeReceiver.$nextPut$("(");
					})($stream);
					$count = 0;
					$first = true;
					self.$printElementsDo$((function ($element) {
						if ($first) {
							$first = false;
						} else {
							$stream.$space();
						};
						$element.$printOn$($stream);
						$count = $count + 1;
						return $count.$$greater$equal(self.$maxPrintElements()).$ifTrue$((function () {
							(function (cascadeReceiver) {
								cascadeReceiver.$nextPut$("<");
								cascadeReceiver.$print$(self.$size() - $count);
								return cascadeReceiver.$nextPutAll$(" more elements>)");
							})($stream);
							{
								NLR.value = self;
								throw NLR;
							};
						}));
					}));
					$stream.$nextPut$(")");
					return self;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$collectUsingAdd$ = (function ($map) {
				var self = this;
				var $c = nil;
				$c = self.$newForCollectUsingAdd$(self.$size());
				self.$do$((function ($e) {
					return $c.$add$($map.$value$($e));
				}));
				return $c;
			});
			this.$maxPrintElements = (function () {
				var self = this;
				return 100;
			});
			this.$newForCollectUsingAdd$ = (function ($size) {
				var self = this;
				return self.$enclosingObjects$Collections$Collection[0].$MutableArrayList().$new$($size);
			});
			this.$printElementsDo$ = (function ($f) {
				var self = this;
				self.$do$($f);
				return self;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return (self === $other) || ((self.$class() === $other.$class()) && self.$hasSameElementsAs$($other));
			});
			this.$hasSameElementsAs$ = (function ($other) {
				var self = this;
				"BOGUS";
				return self.$size().$$equal($other.$size()) && self.$asBag().$$equal($other.$asBag());
			});
			this.$includes$ = (function ($o) {
				var self = this;
				var NLR = new Object();
				try {
					self.$do$((function ($element) {
						return $element.$$equal($o).$ifTrue$((function () {
							{
								NLR.value = true;
								throw NLR;
							};
						}));
					}));
					return false;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$isEmpty = (function () {
				var self = this;
				return 0 === self.$size();
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Collection";
					this.$superInit$Collections$Collection = $.$superInit$Collections$Collection;
					this.$instance$initializer = $.$instance$initializer;
					this.$copy = $.$copy;
					this.$postCopy = $.$postCopy;
					this.$value = $.$value;
					this.$hash = $.$hash;
					this.$occurrencesOf$ = $.$occurrencesOf$;
					this.$size = $.$size;
					this.$species = $.$species;
					this.$allSatisfy$ = $.$allSatisfy$;
					this.$anySatisfy$ = $.$anySatisfy$;
					this.$do$separatedBy$ = $.$do$separatedBy$;
					this.$isCollection = $.$isCollection;
					this.$isKindOfCollection = $.$isKindOfCollection;
					this.$noneSatisfy$ = $.$noneSatisfy$;
					this.$union$ = $.$union$;
					this.$asArray = $.$asArray;
					this.$asBag = $.$asBag;
					this.$asMutableArrayList = $.$asMutableArrayList;
					this.$asSet = $.$asSet;
					this.$asSortedList = $.$asSortedList;
					this.$asSortedList$ = $.$asSortedList$;
					this.$collect$ = $.$collect$;
					this.$detect$ = $.$detect$;
					this.$detect$ifNone$ = $.$detect$ifNone$;
					this.$do$ = $.$do$;
					this.$inject$into$ = $.$inject$into$;
					this.$intersection$ = $.$intersection$;
					this.$reduce$ = $.$reduce$;
					this.$reduce$ifEmpty$ = $.$reduce$ifEmpty$;
					this.$reject$ = $.$reject$;
					this.$select$ = $.$select$;
					this.$printOn$ = $.$printOn$;
					this.$collectUsingAdd$ = $.$collectUsingAdd$;
					this.$maxPrintElements = $.$maxPrintElements;
					this.$newForCollectUsingAdd$ = $.$newForCollectUsingAdd$;
					this.$printElementsDo$ = $.$printElementsDo$;
					this.$$equal = $.$$equal;
					this.$hasSameElementsAs$ = $.$hasSameElementsAs$;
					this.$includes$ = $.$includes$;
					this.$isEmpty = $.$isEmpty;
					this.$enclosingObjects$Collections$Collection = enclosingObjects;
					this.$super$Collections$Collection = runtimeSuperclass;
					this["Collections`Collection"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`Collection"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Collection";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Collection";
						this.$new = $.$new;
						this.$enclosingObjects$Collections$Collection = enclosingObjects;
						this.$super$Collections$Collection = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$HashedCollection = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`HashedCollection";
			this.name = "Collections`HashedCollection";
			this.header = "HashedCollection new: cap = Collection (|\r	private table_0 <Array[A|Object]>\r			(* The table holds either included entries, or an object indicating a deleted entry,\r			which is currently the table itself.  This of course means that the table is not allowed\r			as a valid element of the collection, but this is only an issue when writing reflective\r			system code that violates encapsulation. *)\r	private size_0 <Integer> \r			(* the number of collection elements (not the size of the table) *)\r	private deleted <Integer> \r			(* the number of slots marked with the deletion placeholder *)\r\r|initCapacity: cap)";
			this.slots = [
				new SM("table_0", true, false),
				new SM("size_0", true, false),
				new SM("deleted", true, false)
			];
			this.methods = [
				new MM("superInit`Collections`HashedCollection", true, "Collection"),
				new MM("instance`initializer", true, "Collection"),
				new MM("at:", false, "at: key <K> ^<E> = (\r	^at: key ifAbsent: [ error: 'key not found' ] \r)"),
				new MM("at:ifAbsent:", false, "at: key <Object> ifAbsent: f <[X def]> ^<E|X> = (\r	^elementFor: \r			(valAt: key ifAbsent: [ ^f value ])\r)"),
				new MM("indexOf:", false, "indexOf: el <Object> ^<K> = (\r	^indexOf: el\r			ifAbsent: [ error: 'Element not found' ]\r)"),
				new MM("indexOf:ifAbsent:", false, "indexOf: el <Object> ifAbsent: blk <[X def]> ^<K | X> = (\r	contentsDo:\r		[ :v <A> |\r			(elementFor: v) = el\r				ifTrue: [ ^keyFor: v ]  ].\r	^blk value\r)"),
				new MM("keyAtValue:", false, "keyAtValue: v <Object> ^<K> = (\r	^indexOf: v\r)"),
				new MM("keyAtValue:ifAbsent:", false, "keyAtValue: v <Object> ifAbsent: blk <[X def]> ^<K | X> = (\r	^indexOf: v ifAbsent: blk \r)"),
				new MM("size", false, "size ^<Int> = (\r	^size_0\r)"),
				new MM("table", false, "table = (\r	^table_0\r)"),
				new MM("firstTableSize", false, "firstTableSize ^<Integer> = (\r	(* The size used for the table when the capacity is 0 and the first element is added *)\r	\r	^8\r)"),
				new MM("checkValidity", false, "checkValidity = (\r	(* This method performs various validity checks on the receiver *)\r\r	| c <Int> |\r	c:: 0.\r	contentsDo:\r		[ :val <A> |\r			assert: [ (at: (keyFor: val)) = (elementFor: val) ] message: ''.\r			c:: c + 1.		].\r\r	assert: [ c = size ] message: ''.\r)"),
				new MM("add:", false, "add: val <A> ^<A> = (\r	^include: val\r)"),
				new MM("addAll:", false, "addAll: c <Collection[A]> ^<Collection[A]> = (\r\r	c do: [ :e <A> |\r		add: e. ].\r	^c\r)"),
				new MM("include:", false, "include: val <A> ^<A> = (\r\r	^include: val ifNew: []\r\r)"),
				new MM("include:ifNew:", false, "include: val <A> ifNew: ifNew <[]> ^<A> = (\r\r	^tableAt: (keyFor: val) put: (elementFor: val) ifNew: ifNew\r\r)"),
				new MM("includeAll:", false, "includeAll: c <Collection[A]> ^<Collection[A]> = (\r\r	c do: [ :el <A> |\r		include: el   ].\r	^c\r)"),
				new MM("do:", false, "do: f <[:E]> = (\r\r	contentsDo:\r		[ :val <A> |\r			f value: (elementFor: val)		]\r)"),
				new MM("keysDo:", false, "keysDo: f <[:K]> = (\r\r	contentsDo:\r		[ :val <A> |\r			f value: (keyFor: val)		]\r)"),
				new MM("setTable:", false, "setTable: t <Array[A|Object]> = (\r	table_0:: t.\r)"),
				new MM("size:", false, "size: s <Int> = (\r	size_0:: s\r)"),
				new MM("table:", false, "table: t <Array[A|Object]> = (\r	setTable: t.\r	assert: [deleted = 0] message: ''.\r)"),
				new MM("advanceAmount", false, "advanceAmount ^<Int> = (\r	(* a large prime - 1 *)	\r		^99990\r)"),
				new MM("indexOf:tableMask:", false, "indexOf: key <Object> tableMask: mask <Int> ^<Int> = (\r	^((hashFor: key) bitAnd: mask) + 1\r)"),
				new MM("minTableSize", false, "minTableSize ^<Int> = (\r	^4\r)"),
				new MM("minTableSizeForCapacity:", false, "minTableSizeForCapacity: cap <Integer> ^<Integer> = (\r	(* max density is 50% full *)\r	^cap + cap\r)"),
				new MM("newTableWithSize:", false, "newTableWithSize: tableSize <Int>  ^<Array[A|Object]> = (\r	^Array new: tableSize\r)"),
				new MM("occupied", false, "occupied ^<Integer> = (\r	^size + deleted\r)"),
				new MM("tableSizeForCapacity:", false, "tableSizeForCapacity: cap <Integer> ^<Integer> = (\r        | min <Integer> tsize <Integer> |\r        min:: minTableSizeForCapacity: cap.\r        (* search for the smallest power of two that is >= min *)\r        tsize:: minTableSize.\r        [ tsize < min ]\r                whileTrue: [ tsize:: tsize + tsize ].\r        ^tsize\r)"),
				new MM("initCapacity:", false, "initCapacity: cap <Int> = (\r\r	size: 0.\r	deleted: 0.\r	cap > 0\r		ifTrue: [ table:: newTableWithSize: (tableSizeForCapacity: cap). ].\r\r)"),
				new MM("markDeleted:", false, "markDeleted: index <Int> = (\r\r	| tbl <Array[A|Object]> |\r	tbl:: table.\r	tbl at: index put: tbl.\r	deleted: deleted + 1\r)"),
				new MM("postCopy", false, "postCopy = (\r\r	| tbl <Array[A|Object]> newtbl <Array[A|Object]> |\r\r	super postCopy.\r	tbl:: table.\r	tbl == nil\r		ifTrue: [ ^self ].\r\r	newtbl:: newTableWithSize: tbl size.\r	1 to: tbl size do:\r		[ :index <Int> |\r			atIndex: index\r					inTable: tbl\r					occupiedSlotDo:\r						[ :val <A> |\r							newtbl at: index put: (elementForCopy: val)	]\r					emptySlotDo: [ ]\r					deletedSlotDo:\r						[	newtbl at: index put: newtbl		]\r		].\r	setTable: newtbl\r)"),
				new MM("printElementsDo:", false, "printElementsDo: f <[:Object]> = (\r	\r	contentsDo: f\r)"),
				new MM("buildValForKey:element:", false, "buildValForKey: k <K> element: el <E> ^<A> = (\r	(* construct an A from a K and an E *)\r	subclassResponsibility\r)"),
				new MM("elementFor:", false, "elementFor: val <A> ^<E> = (\r	(* extract an E from an A *)\r	subclassResponsibility\r)"),
				new MM("elementForCopy:", false, "elementForCopy: el <A> ^<A> = (\r\r	(* When a copy of the collection is made, this method implements what happens\r	  to each element.  For example, MutableHashedMaps copy their elements, since the\r	  associations are really part of the MutableHashedMap, whereas KeyedSets don't since the\r	  associations are really elements of the collection. *)\r\r	subclassResponsibility\r)"),
				new MM("hashFor:", false, "hashFor: key <Object> ^<Int> = (\r	(* return the appropriate hash value for a key *)\r	subclassResponsibility\r)"),
				new MM("key:matches:", false, "key: key1 <Object> matches: key2 <Object> ^<Boolean> = (\r\r	(* Test whether two keys match *)\r	self subclassResponsibility\r)"),
				new MM("keyFor:", false, "keyFor: val <A> ^<K> = (\r\r	(* extract an K from an A *)\r	subclassResponsibility\r)"),
				new MM("objToIncludeFor:withExisting:", false, "objToIncludeFor: new <A> withExisting: other <A> ^<A> = (\r\r	(* In the situation where a new value  is being 'include'ed in the collection, and there is already an existing\r	 value with a matching key, this method determines what value is actually placed in the collection *)\r\r	subclassResponsibility\r)"),
				new MM("tableAt:put:inDeletedSlot:", false, "tableAt: key <K>\rput: el <E>\rinDeletedSlot: index <Integer>\r^<A> = (\r\r	| val <A> |\r	val:: tableAt: key put: el inUnusedSlot: index.\r	deleted: deleted - 1.\r	(* we don't have to check for growth when reusing a previously used slot *)\r	^val\r)"),
				new MM("tableAt:put:inEmptySlot:", false, "tableAt: key <K>\rput: el <E>\rinEmptySlot: index <Integer>\r^<A> = (\r\r	| val <A> |\r	val:: tableAt: key put: el inUnusedSlot: index.\r	growIfNeeded.\r	^val\r)"),
				new MM("tableAt:put:inMatchingSlot:value:", false, "tableAt: key <K>\rput: el <E>\rinMatchingSlot: index <Integer>\rvalue: val <A>\r^<A> = (\r\r	| newVal <A> |\r	newVal:: objToIncludeFor: (buildValForKey: key element: el)\r								withExisting: val.\r	table at: index put: newVal.\r	^newVal\r)"),
				new MM("tableAt:put:inUnusedSlot:", false, "tableAt: key <K>\rput: el <E>\rinUnusedSlot: index <Integer>\r^<A> = (\r\r	(* This does the core work for #tableAt:put:[inDeletedSlot:|inEmptySlot:] *)\r\r	| newVal <A> |\r	newVal:: buildValForKey: key element: el.\r	table at: index put: newVal.\r	size: size + 1.\r	^newVal\r)"),
				new MM("atIndex:inTable:occupiedSlotDo:emptySlotDo:deletedSlotDo:", false, "atIndex: i <Int>\rinTable: tbl <Array[Object|A]>\roccupiedSlotDo: occupied <[:A| X def]>\remptySlotDo: empty <[Y def]>\rdeletedSlotDo: deleted <[Z def]>\r^<X|Y|Z> = (\r\r	(* This is the core method that does the case analysis for a slot to\r		determine whether it is occupied, deleted, or empty *)\r\r	| el <A|Object>  |\r	el:: tbl at: i.\r	el == nil\r		ifTrue: [ ^empty value ].\r	el == tbl\r		ifTrue: [ ^deleted value ].\r\r	(* The following guarantee is because the table uses a non-typesafe trick in \r	  which the table pointer itself is used to indicate a deleted slot; thus the table\r	  doesn't hold only values of type A.  The guarantee is safe because we know that\r	  we only put either values or the table into the table, and the previous\r	  statement already handled the case when el is the table pointer-\r	  thus at this point by elimination el has to be a value of type A *)		\r	^occupied value: (* (guaranteed <A> *)el(* ) *)\r)"),
				new MM("contentsDo:", false, "contentsDo: f <[:A]>\r = (\r\r	| tbl <Array[A|Object]> |\r	tbl:: table.\r	tbl == nil\r		ifTrue: [ ^self ].\r\r	1 to: tbl size do:\r		[ :index <Int> |\r				atIndex: index\r					inTable: tbl\r					occupiedSlotDo:\r						[ :val <A> |\r							f value: val	]\r					emptySlotDo: [ ]\r					deletedSlotDo: [ ]\r		]\r\r)"),
				new MM("createFirstTable", false, "createFirstTable = (\r	table:: newTableWithSize: firstTableSize.\r)"),
				new MM("growIfNeeded", false, "growIfNeeded = (\r\r	(minTableSizeForCapacity: occupied) > table size\r		ifTrue: [ growTable ]\r)"),
				new MM("growTable", false, "growTable\r = (\r\r	| new <Array[A|Object]> |\r	new:: newTableWithSize: table size + table size.\r	contentsDo:\r		[ :a_value <A> |\r				lookup: (keyFor: a_value)\r					inTable: new\r					matchingSlotDo:\r						[ :index <Int> :val <A> |\r							shouldNotHappen	]\r					emptySlotDo:\r						[ :index <Int> |\r							new at: index put: a_value	]\r					deletedSlotsDo:\r						[ :index <Int> |\r							shouldNotHappen ]\r					mismatchingSlotsDo:\r						[ :index <Int> | (* ignore *) ]\r		].\r	deleted: 0.\r	table: new.\r)"),
				new MM("lookup:inTable:matchingSlotDo:emptySlotDo:deletedSlotsDo:mismatchingSlotsDo:", false, "lookup: key <Object>\rinTable: tbl <Array[Object|A]>\rmatchingSlotDo: matching <[:Int:A| X def]>\remptySlotDo: empty <[:Int | Y def]>\rdeletedSlotsDo: marked <[:Int]>\rmismatchingSlotsDo: mismatch <[:Int]>\r^<X|Y> = (\r\r	(* This is the core method that looks for a slot suitable for the key,\r		and evaluates the appropriate blocks.\r	   The lookup process is iterative, terminating when a slot that is empty\r	   or has a matching key is found *)\r\r	| i <Int> mask <Int> |\r	mask:: tbl size - 1.\r	i:: indexOf: key tableMask: mask.\r	[ 			atIndex: i\r				inTable: tbl\r				occupiedSlotDo:\r					[ :val <A> |\r						(key: key matches: (keyFor: val))\r							ifTrue: [ ^matching value: i value: val	 ]\r							ifFalse: [ mismatch value: i	 ]\r					]\r				emptySlotDo:\r					[ ^empty value: i ]\r				deletedSlotDo:\r					[	marked value: i	 ].\r		i:: ((i + advanceAmount) bitAnd: mask) + 1.\r	] repeat\r)"),
				new MM("lookup:matchingSlotDo:emptySlotDo:deletedSlotsDo:", false, "lookup: key <Object>\rmatchingSlotDo: matching <[:Integer:A| X def]>\remptySlotDo: empty <[:Integer | Y def]>\rdeletedSlotsDo: marked <[:Integer]>\r^<X|Y> = (\r\r\r	^self		lookup: key\r				inTable: self table\r				matchingSlotDo: matching\r				emptySlotDo: empty\r				deletedSlotsDo: marked\r				mismatchingSlotsDo: [ :index <Integer> | (* ignore *) ]\r)"),
				new MM("tableAt:put:ifNew:", false, "tableAt: key <K> put: el <E> ifNew: onNew <[]> ^<A> = (\r\r	(* put a value for el in the right spot in the table, and return the val *)\r\r	| reusableSlot <Integer> |\r	table == nil\r		ifTrue: [	self createFirstTable.	 ].\r	^			lookup: key\r				matchingSlotDo:\r						[ :index <Integer> :val <A> |\r							self tableAt: key put: el inMatchingSlot: index value: val		]\r				emptySlotDo:\r						[ :index <Integer> |\r							| newVal <A> |\r							reusableSlot == nil\r								ifTrue: [ newVal:: self tableAt: key put: el inEmptySlot: index ]\r								ifFalse: [ newVal:: self tableAt: key put: el inDeletedSlot: reusableSlot ].\r							onNew value.\r							newVal	]\r				deletedSlotsDo:\r						[ :index <Integer> |\r							reusableSlot == nil\r								ifTrue: [ reusableSlot:: index ].\r						]\r)"),
				new MM("valAt:ifAbsent:", false, "valAt: key <Object> ifAbsent: f <[X def]> ^<A|X> = (\r\r	table == nil\r		ifTrue: [	^f value ].\r		\r	^			lookup: key\r				matchingSlotDo:\r					[ :index <Integer> :val <A> |\r						val	]\r				emptySlotDo:\r					[ :index <Integer> |\r						f value	]\r				deletedSlotsDo:\r					[ :index <Integer> |\r						(* ignore deleted slots *) ]\r)"),
				new MM("remove:", false, "remove: val <A> ^<A> = (\r	^remove: val ifAbsent: [ error: 'value not in collection' ]\r)"),
				new MM("remove:ifAbsent:", false, "remove: val <A> ifAbsent: f <[X def]> ^<A|X> = (\r	removeKey: (keyFor: val) ifAbsent: f.\r	^val\r)"),
				new MM("removeAll:", false, "removeAll: c <Collection[A]> ^<Collection[A]> = (\r\r	c do: [ :el <A> |\r		remove: el   ].\r	^c\r)"),
				new MM("removeAllSuchThat:", false, "removeAllSuchThat: test <[:A | Boolean]>  = (\r\r	copy contentsDo:\r		[ :el <A> |\r			(test value: el)\r				ifTrue: [ remove: el ]		]\r)"),
				new MM("removeAt:", false, "removeAt: k <K> ^<E> = (\r	(* A synonym for #removeKey: for consistency with AddableList *)\r\r	^removeKey: k\r)"),
				new MM("removeAt:ifAbsent:", false, "removeAt: k <K> ifAbsent: f <[X def]> ^<E|X> = (\r	(* A synonym for #removeKey:ifAbsent: for consistency with AddableList *)\r\r	^removeKey: k ifAbsent: f\r)"),
				new MM("removeEvery:", false, "removeEvery: val <A> ^<A> = (\r	remove: val ifAbsent: [].\r	^val\r)"),
				new MM("removeKey:", false, "removeKey: key <K> ^<E> = (\r	^removeKey: key ifAbsent: [ error: 'key not found' ]\r)"),
				new MM("removeKey:ifAbsent:", false, "removeKey: key <K> ifAbsent: f <[X def]> ^<E|X> = (\r	table == nil\r		ifTrue: [	^f value	 ].\r	^			lookup: key\r				matchingSlotDo:\r						[ :index <Int> :val <A> |\r							markDeleted: index.\r							size: size - 1.\r							elementFor: val		]\r				emptySlotDo:\r						[ :index <Int> |\r							f value	]\r				deletedSlotsDo:\r						[ :index <Int> |\r							(* ignore *)\r						]\r)"),
				new MM("includesElement:", false, "includesElement: val <A> ^<Boolean> = (\r\r	(* This is like includes: but it requires an A as an argument, which allows a faster\r	  search *)\r\r	^includesKey: (keyFor: val)\r)"),
				new MM("includesIndex:", false, "includesIndex: k <Object> ^<Boolean> = (\r\r	valAt: k ifAbsent: [ ^false ].\r	^true\r)"),
				new MM("includesKey:", false, "includesKey: k <Object> ^<Boolean> = (\r\r	^includesIndex: k\r)"),
				new MM("table_0", true, null),
				new MM("table_0:", true, null),
				new MM("size_0", true, null),
				new MM("size_0:", true, null),
				new MM("deleted", true, null),
				new MM("deleted:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$HashedCollection = (function ($cap) {
				var self = this;
				self.$super$Collections$HashedCollection.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($cap) {
				var self = this;
				self.$superInit$Collections$HashedCollection($cap);
				self.$initCapacity$($cap);
				return self;
			});
			this.$at$ = (function ($key) {
				var self = this;
				return self.$at$ifAbsent$($key, (function () {
					return self.$enclosingObjects$Collections$HashedCollection[0].$error$("key not found");
				}));
			});
			this.$at$ifAbsent$ = (function ($key, $f) {
				var self = this;
				var NLR = new Object();
				try {
					return self.$elementFor$(self.$valAt$ifAbsent$($key, (function () {
						{
							NLR.value = $f.$value();
							throw NLR;
						};
					})));
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$indexOf$ = (function ($el) {
				var self = this;
				return self.$indexOf$ifAbsent$($el, (function () {
					return self.$enclosingObjects$Collections$HashedCollection[0].$error$("Element not found");
				}));
			});
			this.$indexOf$ifAbsent$ = (function ($el, $blk) {
				var self = this;
				var NLR = new Object();
				try {
					self.$contentsDo$((function ($v) {
						return self.$elementFor$($v).$$equal($el).$ifTrue$((function () {
							{
								NLR.value = self.$keyFor$($v);
								throw NLR;
							};
						}));
					}));
					return $blk.$value();
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$keyAtValue$ = (function ($v) {
				var self = this;
				return self.$indexOf$($v);
			});
			this.$keyAtValue$ifAbsent$ = (function ($v, $blk) {
				var self = this;
				return self.$indexOf$ifAbsent$($v, $blk);
			});
			this.$size = (function () {
				var self = this;
				return self.$size_0();
			});
			this.$table = (function () {
				var self = this;
				return self.$table_0();
			});
			this.$firstTableSize = (function () {
				var self = this;
				return 8;
			});
			this.$checkValidity = (function () {
				var self = this;
				var $c = nil;
				$c = 0;
				self.$contentsDo$((function ($val) {
					self.$assert$message$((function () {
						return self.$at$(self.$keyFor$($val)).$$equal(self.$elementFor$($val));
					}), "");
					return $c = $c + 1;
				}));
				self.$assert$message$((function () {
					return $c.$$equal(self.$size());
				}), "");
				return self;
			});
			this.$add$ = (function ($val) {
				var self = this;
				return self.$include$($val);
			});
			this.$addAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($e) {
					return self.$add$($e);
				}));
				return $c;
			});
			this.$include$ = (function ($val) {
				var self = this;
				return self.$include$ifNew$($val, (function () {
					return nil;
				}));
			});
			this.$include$ifNew$ = (function ($val, $ifNew) {
				var self = this;
				return self.$tableAt$put$ifNew$(self.$keyFor$($val), self.$elementFor$($val), $ifNew);
			});
			this.$includeAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$include$($el);
				}));
				return $c;
			});
			this.$do$ = (function ($f) {
				var self = this;
				self.$contentsDo$((function ($val) {
					return $f.$value$(self.$elementFor$($val));
				}));
				return self;
			});
			this.$keysDo$ = (function ($f) {
				var self = this;
				self.$contentsDo$((function ($val) {
					return $f.$value$(self.$keyFor$($val));
				}));
				return self;
			});
			this.$setTable$ = (function ($t) {
				var self = this;
				self.$table_0$($t);
				return self;
			});
			this.$size$ = (function ($s) {
				var self = this;
				self.$size_0$($s);
				return self;
			});
			this.$table$ = (function ($t) {
				var self = this;
				self.$setTable$($t);
				self.$assert$message$((function () {
					return self.$deleted().$$equal(0);
				}), "");
				return self;
			});
			this.$advanceAmount = (function () {
				var self = this;
				return 99990;
			});
			this.$indexOf$tableMask$ = (function ($key, $mask) {
				var self = this;
				return self.$hashFor$($key).$bitAnd$($mask) + 1;
			});
			this.$minTableSize = (function () {
				var self = this;
				return 4;
			});
			this.$minTableSizeForCapacity$ = (function ($cap) {
				var self = this;
				return $cap + $cap;
			});
			this.$newTableWithSize$ = (function ($tableSize) {
				var self = this;
				return self.$Array().$new$($tableSize);
			});
			this.$occupied = (function () {
				var self = this;
				return self.$size() + self.$deleted();
			});
			this.$tableSizeForCapacity$ = (function ($cap) {
				var self = this;
				var $min = nil;
				var $tsize = nil;
				$min = self.$minTableSizeForCapacity$($cap);
				$tsize = self.$minTableSize();
				{
					nil;
					for (; $tsize.$$less($min); ) {
						$tsize = $tsize + $tsize;
					};
				};
				return $tsize;
			});
			this.$initCapacity$ = (function ($cap) {
				var self = this;
				self.$size$(0);
				self.$deleted$(0);
				if ($cap > 0) {
					self.$table$(self.$newTableWithSize$(self.$tableSizeForCapacity$($cap)));
				} else {
					nil;
				};
				return self;
			});
			this.$markDeleted$ = (function ($index) {
				var self = this;
				var $tbl = nil;
				$tbl = self.$table();
				$tbl.$at$put$($index, $tbl);
				self.$deleted$(self.$deleted() + 1);
				return self;
			});
			this.$postCopy = (function () {
				var self = this;
				var $tbl = nil;
				var $newtbl = nil;
				self.$super$Collections$HashedCollection.$postCopy.call(self);
				$tbl = self.$table();
				if ($tbl === nil) {
					return self;
				} else {
					nil;
				};
				$newtbl = self.$newTableWithSize$($tbl.$size());
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = $tbl.$size();
					for (; $$limit.$$greater$equal($index); ) {
						self.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$($index, $tbl, (function ($val) {
							return $newtbl.$at$put$($index, self.$elementForCopy$($val));
						}), (function () {
							return nil;
						}), (function () {
							return $newtbl.$at$put$($index, $newtbl);
						}));
						$index = (1).$$plus($index);
					};
				};
				self.$setTable$($newtbl);
				return self;
			});
			this.$printElementsDo$ = (function ($f) {
				var self = this;
				self.$contentsDo$($f);
				return self;
			});
			this.$buildValForKey$element$ = (function ($k, $el) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$elementFor$ = (function ($val) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$elementForCopy$ = (function ($el) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$hashFor$ = (function ($key) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$key$matches$ = (function ($key1, $key2) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$keyFor$ = (function ($val) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$objToIncludeFor$withExisting$ = (function ($new, $other) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$tableAt$put$inDeletedSlot$ = (function ($key, $el, $index) {
				var self = this;
				var $val = nil;
				$val = self.$tableAt$put$inUnusedSlot$($key, $el, $index);
				self.$deleted$(self.$deleted() - 1);
				return $val;
			});
			this.$tableAt$put$inEmptySlot$ = (function ($key, $el, $index) {
				var self = this;
				var $val = nil;
				$val = self.$tableAt$put$inUnusedSlot$($key, $el, $index);
				self.$growIfNeeded();
				return $val;
			});
			this.$tableAt$put$inMatchingSlot$value$ = (function ($key, $el, $index, $val) {
				var self = this;
				var $newVal = nil;
				$newVal = self.$objToIncludeFor$withExisting$(self.$buildValForKey$element$($key, $el), $val);
				self.$table().$at$put$($index, $newVal);
				return $newVal;
			});
			this.$tableAt$put$inUnusedSlot$ = (function ($key, $el, $index) {
				var self = this;
				var $newVal = nil;
				$newVal = self.$buildValForKey$element$($key, $el);
				self.$table().$at$put$($index, $newVal);
				self.$size$(self.$size() + 1);
				return $newVal;
			});
			this.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$ = (function ($i, $tbl, $occupied, $empty, $deleted) {
				var self = this;
				var $el = nil;
				$el = $tbl.$at$($i);
				if ($el === nil) {
					return $empty.$value();
				} else {
					nil;
				};
				if ($el === $tbl) {
					return $deleted.$value();
				} else {
					nil;
				};
				return $occupied.$value$($el);
			});
			this.$contentsDo$ = (function ($f) {
				var self = this;
				var $tbl = nil;
				$tbl = self.$table();
				if ($tbl === nil) {
					return self;
				} else {
					nil;
				};
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = $tbl.$size();
					for (; $$limit.$$greater$equal($index); ) {
						self.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$($index, $tbl, (function ($val) {
							return $f.$value$($val);
						}), (function () {
							return nil;
						}), (function () {
							return nil;
						}));
						$index = (1).$$plus($index);
					};
				};
				return self;
			});
			this.$createFirstTable = (function () {
				var self = this;
				self.$table$(self.$newTableWithSize$(self.$firstTableSize()));
				return self;
			});
			this.$growIfNeeded = (function () {
				var self = this;
				if (self.$minTableSizeForCapacity$(self.$occupied()).$$greater(self.$table().$size())) {
					self.$growTable();
				} else {
					nil;
				};
				return self;
			});
			this.$growTable = (function () {
				var self = this;
				var $new = nil;
				$new = self.$newTableWithSize$(self.$table().$size() + self.$table().$size());
				self.$contentsDo$((function ($a_value) {
					return self.$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$(self.$keyFor$($a_value), $new, (function ($index, $val) {
						return self.$shouldNotHappen();
					}), (function ($index) {
						return $new.$at$put$($index, $a_value);
					}), (function ($index) {
						return self.$shouldNotHappen();
					}), (function ($index) {
						return nil;
					}));
				}));
				self.$deleted$(0);
				self.$table$($new);
				return self;
			});
			this.$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$ = (function ($key, $tbl, $matching, $empty, $marked, $mismatch) {
				var self = this;
				var NLR = new Object();
				try {
					var $i = nil;
					var $mask = nil;
					$mask = $tbl.$size() - 1;
					$i = self.$indexOf$tableMask$($key, $mask);
					{
						nil;
						self.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$($i, $tbl, (function ($val) {
							return self.$key$matches$($key, self.$keyFor$($val)).$ifTrue$ifFalse$((function () {
								{
									NLR.value = $matching.$value$value$($i, $val);
									throw NLR;
								};
							}), (function () {
								return $mismatch.$value$($i);
							}));
						}), (function () {
							{
								NLR.value = $empty.$value$($i);
								throw NLR;
							};
						}), (function () {
							return $marked.$value$($i);
						}));
						$i = ($i + self.$advanceAmount()).$bitAnd$($mask) + 1;
						for (; true; ) {
							nil;
							self.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$($i, $tbl, (function ($val) {
								return self.$key$matches$($key, self.$keyFor$($val)).$ifTrue$ifFalse$((function () {
									{
										NLR.value = $matching.$value$value$($i, $val);
										throw NLR;
									};
								}), (function () {
									return $mismatch.$value$($i);
								}));
							}), (function () {
								{
									NLR.value = $empty.$value$($i);
									throw NLR;
								};
							}), (function () {
								return $marked.$value$($i);
							}));
							$i = ($i + self.$advanceAmount()).$bitAnd$($mask) + 1;
						};
					};
					return self;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$ = (function ($key, $matching, $empty, $marked) {
				var self = this;
				return self.$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$($key, self.$table(), $matching, $empty, $marked, (function ($index) {
					return nil;
				}));
			});
			this.$tableAt$put$ifNew$ = (function ($key, $el, $onNew) {
				var self = this;
				var $reusableSlot = nil;
				if (self.$table() === nil) {
					self.$createFirstTable();
				} else {
					nil;
				};
				return self.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$($key, (function ($index, $val) {
					return self.$tableAt$put$inMatchingSlot$value$($key, $el, $index, $val);
				}), (function ($index) {
					var $newVal = nil;
					if ($reusableSlot === nil) {
						$newVal = self.$tableAt$put$inEmptySlot$($key, $el, $index);
					} else {
						$newVal = self.$tableAt$put$inDeletedSlot$($key, $el, $reusableSlot);
					};
					$onNew.$value();
					return $newVal;
				}), (function ($index) {
					return ($reusableSlot === nil).$ifTrue$((function () {
						return $reusableSlot = $index;
					}));
				}));
			});
			this.$valAt$ifAbsent$ = (function ($key, $f) {
				var self = this;
				if (self.$table() === nil) {
					return $f.$value();
				} else {
					nil;
				};
				return self.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$($key, (function ($index, $val) {
					return $val;
				}), (function ($index) {
					return $f.$value();
				}), (function ($index) {
					return nil;
				}));
			});
			this.$remove$ = (function ($val) {
				var self = this;
				return self.$remove$ifAbsent$($val, (function () {
					return self.$enclosingObjects$Collections$HashedCollection[0].$error$("value not in collection");
				}));
			});
			this.$remove$ifAbsent$ = (function ($val, $f) {
				var self = this;
				self.$removeKey$ifAbsent$(self.$keyFor$($val), $f);
				return $val;
			});
			this.$removeAll$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$remove$($el);
				}));
				return $c;
			});
			this.$removeAllSuchThat$ = (function ($test) {
				var self = this;
				self.$copy().$contentsDo$((function ($el) {
					return $test.$value$($el).$ifTrue$((function () {
						return self.$remove$($el);
					}));
				}));
				return self;
			});
			this.$removeAt$ = (function ($k) {
				var self = this;
				return self.$removeKey$($k);
			});
			this.$removeAt$ifAbsent$ = (function ($k, $f) {
				var self = this;
				return self.$removeKey$ifAbsent$($k, $f);
			});
			this.$removeEvery$ = (function ($val) {
				var self = this;
				self.$remove$ifAbsent$($val, (function () {
					return nil;
				}));
				return $val;
			});
			this.$removeKey$ = (function ($key) {
				var self = this;
				return self.$removeKey$ifAbsent$($key, (function () {
					return self.$enclosingObjects$Collections$HashedCollection[0].$error$("key not found");
				}));
			});
			this.$removeKey$ifAbsent$ = (function ($key, $f) {
				var self = this;
				if (self.$table() === nil) {
					return $f.$value();
				} else {
					nil;
				};
				return self.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$($key, (function ($index, $val) {
					self.$markDeleted$($index);
					self.$size$(self.$size() - 1);
					return self.$elementFor$($val);
				}), (function ($index) {
					return $f.$value();
				}), (function ($index) {
					return nil;
				}));
			});
			this.$includesElement$ = (function ($val) {
				var self = this;
				return self.$includesKey$(self.$keyFor$($val));
			});
			this.$includesIndex$ = (function ($k) {
				var self = this;
				var NLR = new Object();
				try {
					self.$valAt$ifAbsent$($k, (function () {
						{
							NLR.value = false;
							throw NLR;
						};
					}));
					return true;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$includesKey$ = (function ($k) {
				var self = this;
				return self.$includesIndex$($k);
			});
			this.$table_0 = (function () {
				return this.$table_0$slot;
			});
			this.$table_0$ = (function (v) {
				this.$table_0$slot = v;
				return this;
			});
			this.$size_0 = (function () {
				return this.$size_0$slot;
			});
			this.$size_0$ = (function (v) {
				this.$size_0$slot = v;
				return this;
			});
			this.$deleted = (function () {
				return this.$deleted$slot;
			});
			this.$deleted$ = (function (v) {
				this.$deleted$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`HashedCollection";
					this.$superInit$Collections$HashedCollection = $.$superInit$Collections$HashedCollection;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$at$ifAbsent$ = $.$at$ifAbsent$;
					this.$indexOf$ = $.$indexOf$;
					this.$indexOf$ifAbsent$ = $.$indexOf$ifAbsent$;
					this.$keyAtValue$ = $.$keyAtValue$;
					this.$keyAtValue$ifAbsent$ = $.$keyAtValue$ifAbsent$;
					this.$size = $.$size;
					this.$table = $.$table;
					this.$firstTableSize = $.$firstTableSize;
					this.$checkValidity = $.$checkValidity;
					this.$add$ = $.$add$;
					this.$addAll$ = $.$addAll$;
					this.$include$ = $.$include$;
					this.$include$ifNew$ = $.$include$ifNew$;
					this.$includeAll$ = $.$includeAll$;
					this.$do$ = $.$do$;
					this.$keysDo$ = $.$keysDo$;
					this.$setTable$ = $.$setTable$;
					this.$size$ = $.$size$;
					this.$table$ = $.$table$;
					this.$advanceAmount = $.$advanceAmount;
					this.$indexOf$tableMask$ = $.$indexOf$tableMask$;
					this.$minTableSize = $.$minTableSize;
					this.$minTableSizeForCapacity$ = $.$minTableSizeForCapacity$;
					this.$newTableWithSize$ = $.$newTableWithSize$;
					this.$occupied = $.$occupied;
					this.$tableSizeForCapacity$ = $.$tableSizeForCapacity$;
					this.$initCapacity$ = $.$initCapacity$;
					this.$markDeleted$ = $.$markDeleted$;
					this.$postCopy = $.$postCopy;
					this.$printElementsDo$ = $.$printElementsDo$;
					this.$buildValForKey$element$ = $.$buildValForKey$element$;
					this.$elementFor$ = $.$elementFor$;
					this.$elementForCopy$ = $.$elementForCopy$;
					this.$hashFor$ = $.$hashFor$;
					this.$key$matches$ = $.$key$matches$;
					this.$keyFor$ = $.$keyFor$;
					this.$objToIncludeFor$withExisting$ = $.$objToIncludeFor$withExisting$;
					this.$tableAt$put$inDeletedSlot$ = $.$tableAt$put$inDeletedSlot$;
					this.$tableAt$put$inEmptySlot$ = $.$tableAt$put$inEmptySlot$;
					this.$tableAt$put$inMatchingSlot$value$ = $.$tableAt$put$inMatchingSlot$value$;
					this.$tableAt$put$inUnusedSlot$ = $.$tableAt$put$inUnusedSlot$;
					this.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$ = $.$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$;
					this.$contentsDo$ = $.$contentsDo$;
					this.$createFirstTable = $.$createFirstTable;
					this.$growIfNeeded = $.$growIfNeeded;
					this.$growTable = $.$growTable;
					this.$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$ = $.$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$;
					this.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$ = $.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$;
					this.$tableAt$put$ifNew$ = $.$tableAt$put$ifNew$;
					this.$valAt$ifAbsent$ = $.$valAt$ifAbsent$;
					this.$remove$ = $.$remove$;
					this.$remove$ifAbsent$ = $.$remove$ifAbsent$;
					this.$removeAll$ = $.$removeAll$;
					this.$removeAllSuchThat$ = $.$removeAllSuchThat$;
					this.$removeAt$ = $.$removeAt$;
					this.$removeAt$ifAbsent$ = $.$removeAt$ifAbsent$;
					this.$removeEvery$ = $.$removeEvery$;
					this.$removeKey$ = $.$removeKey$;
					this.$removeKey$ifAbsent$ = $.$removeKey$ifAbsent$;
					this.$includesElement$ = $.$includesElement$;
					this.$includesIndex$ = $.$includesIndex$;
					this.$includesKey$ = $.$includesKey$;
					this.$table_0 = $.$table_0;
					this.$table_0$ = $.$table_0$;
					this.$size_0 = $.$size_0;
					this.$size_0$ = $.$size_0$;
					this.$deleted = $.$deleted;
					this.$deleted$ = $.$deleted$;
					this.$enclosingObjects$Collections$HashedCollection = enclosingObjects;
					this.$super$Collections$HashedCollection = runtimeSuperclass;
					this["Collections`HashedCollection"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$table_0$slot = nil;
						this.$size_0$slot = nil;
						this.$deleted$slot = nil;
					});
					this.basicNew = this["Collections`HashedCollection"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`HashedCollection";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("defaultCapacity", false, "defaultCapacity ^<Integer> = (\r	^0\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($cap) {
					return (new this.nonMeta.basicNew()).$instance$initializer($cap);
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 0;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`HashedCollection";
						this.$new$ = $.$new$;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$enclosingObjects$Collections$HashedCollection = enclosingObjects;
						this.$super$Collections$HashedCollection = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$IdentityMutableHashedMap = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`IdentityMutableHashedMap";
			this.name = "Collections`IdentityMutableHashedMap";
			this.header = "IdentityMutableHashedMap new: cap = MutableHashedMap new: cap (\r(* IdentityMutableHashedMaps are efficient HashedCollections that let you dynamically associate key->value\rpairs,  where the keys are matched using the #== message. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`IdentityMutableHashedMap", true, "new: cap"),
				new MM("instance`initializer", true, "new: cap"),
				new MM("hashFor:", false, "hashFor: key <Object> ^<Int> = (\r	^key identityHash\r)"),
				new MM("key:matches:", false, "key: k <Object> matches: another <Object> ^<Boolean> = (\r	^k == another\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$IdentityMutableHashedMap = (function ($cap) {
				var self = this;
				self.$super$Collections$IdentityMutableHashedMap.$instance$initializer.call(self, $cap);
				return self;
			});
			this.$instance$initializer = (function ($cap) {
				var self = this;
				self.$superInit$Collections$IdentityMutableHashedMap($cap);
				return self;
			});
			this.$hashFor$ = (function ($key) {
				var self = this;
				return $key.$identityHash();
			});
			this.$key$matches$ = (function ($k, $another) {
				var self = this;
				return $k === $another;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`IdentityMutableHashedMap";
					this.$superInit$Collections$IdentityMutableHashedMap = $.$superInit$Collections$IdentityMutableHashedMap;
					this.$instance$initializer = $.$instance$initializer;
					this.$hashFor$ = $.$hashFor$;
					this.$key$matches$ = $.$key$matches$;
					this.$enclosingObjects$Collections$IdentityMutableHashedMap = enclosingObjects;
					this.$super$Collections$IdentityMutableHashedMap = runtimeSuperclass;
					this["Collections`IdentityMutableHashedMap"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`IdentityMutableHashedMap"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`IdentityMutableHashedMap";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("new", false, "new = (\r	^new: defaultCapacity\r)"),
					new MM("defaultCapacity", false, "defaultCapacity ^<Int> = (\r	^0\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($cap) {
					return (new this.nonMeta.basicNew()).$instance$initializer($cap);
				});
				this.$new = (function () {
					var self = this;
					return self.$new$(self.$defaultCapacity());
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 0;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`IdentityMutableHashedMap";
						this.$new$ = $.$new$;
						this.$new = $.$new;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$enclosingObjects$Collections$IdentityMutableHashedMap = enclosingObjects;
						this.$super$Collections$IdentityMutableHashedMap = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$IdentitySet = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`IdentitySet";
			this.name = "Collections`IdentitySet";
			this.header = "IdentitySet new: cap <Integer> = Set new: cap ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`IdentitySet", true, "new: cap"),
				new MM("instance`initializer", true, "new: cap"),
				new MM("hashFor:", false, "hashFor: key <Object> ^<Int> = (\r		^key identityHash\r)"),
				new MM("key:matches:", false, "key: k <Object> matches: another <Object> ^<Boolean> = (\r	^k == another\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$IdentitySet = (function ($cap) {
				var self = this;
				self.$super$Collections$IdentitySet.$instance$initializer.call(self, $cap);
				return self;
			});
			this.$instance$initializer = (function ($cap) {
				var self = this;
				self.$superInit$Collections$IdentitySet($cap);
				return self;
			});
			this.$hashFor$ = (function ($key) {
				var self = this;
				return $key.$identityHash();
			});
			this.$key$matches$ = (function ($k, $another) {
				var self = this;
				return $k === $another;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`IdentitySet";
					this.$superInit$Collections$IdentitySet = $.$superInit$Collections$IdentitySet;
					this.$instance$initializer = $.$instance$initializer;
					this.$hashFor$ = $.$hashFor$;
					this.$key$matches$ = $.$key$matches$;
					this.$enclosingObjects$Collections$IdentitySet = enclosingObjects;
					this.$super$Collections$IdentitySet = runtimeSuperclass;
					this["Collections`IdentitySet"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`IdentitySet"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`IdentitySet";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("defaultCapacity", false, "defaultCapacity = (\r\r	^ 0\r)"),
					new MM("new", false, "new ^ <Instance> = (\r	^self new: defaultCapacity\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($cap) {
					return (new this.nonMeta.basicNew()).$instance$initializer($cap);
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 0;
				});
				this.$new = (function () {
					var self = this;
					return self.$new$(self.$defaultCapacity());
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`IdentitySet";
						this.$new$ = $.$new$;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$new = $.$new;
						this.$enclosingObjects$Collections$IdentitySet = enclosingObjects;
						this.$super$Collections$IdentitySet = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Interval = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Interval";
			this.name = "Collections`Interval";
			this.header = "Interval from: p_start <Number> to: p_stop <Number> by: p_step <Number> = List (\r(* Intervals are Lists that generate their contents on the fly as a progression\rof numbers from a start number to a stop number, separated by a step number.  Usually, the\rto:[by:]do: messages defined in the Number subclasses are used instead of Intervals\rwhen just a control structure is needed, since they are much faster.\r\rNote on strong typing issues:\r\rThe to:[by:]do: messages in the Number hierarchy are typed restrictively, in such a way that they\rcan only be used in non-coercive situations (i.e. where the start, stop, and step are all integers,\ror all floats, etc.).  This is done to preserve the type of the iteration value passed to the iteration block\rin the pure integer form, so that bit operations etc. can be performed etc.  This would not be possible\rif Number was the type for the step.  Although this may seem restrictive, the following points should\rbe noted about this design:\r\r	1) explicit coercions handle the vast majority of these cases;\r		for example, use (j asFloat to: k asFloat by: 0.1) rather than\r		 (j to: k by: 0.1) when j and k are typed as Numbers or Integers.\r	2) this scheme is perfectly compatible with untyped code, since the typed versions will work correctly\r	    even if called with arguments of mismatched numeric types, so that things like (1 to: 10 by: 0.1) will \r	    work, even though they don't typecheck.\r	3) If full coercive generality is needed in typesafe code, the Interval class can be used, which has been\r	    designed using values of type Number, so that things like (1 to: 10 by: 0.1) are ok.  They cannot, however,\r		preserve more detailed information about the kinds of numbers in the Interval. *)|\r	public start <Number> = p_start.\r	public stop <Number> = p_stop.\r	public increment <Number> = p_step.\r|)";
			this.slots = [
				new SM("start", false, false),
				new SM("stop", false, false),
				new SM("increment", false, false)
			];
			this.methods = [
				new MM("superInit`Collections`Interval", true, "List"),
				new MM("instance`initializer", true, "List"),
				new MM("at:", false, "public at: index <Integer> ^<Number> = (\r	(start - stop) sign = increment sign\r		ifFalse: [	| value <Number> |\r						value: start + (increment * (index - 1)).\r						increment >= 0\r							ifTrue: [	( value between: start and: stop)\r												ifTrue: [ ^value ]	]\r							ifFalse: [	(value between: stop and: start)\r												ifTrue: [ ^value ]	]	].\r	Error signal: 'Index out-of-range'.\r)"),
				new MM("do:", false, "public do: action <[:Number]> = (\r	|\r	value <Number> ::= self start.\r	incr <Number> = self increment.\r	stp <Number> = self stop.\r	|\r	incr >= 0\r		ifTrue: [	[ value <= stp ]\r							whileTrue: [	action value: value.\r										value:: value + incr.	]	]\r		ifFalse: [	[ value >= stp ]\r							whileTrue: [ action value: value.\r										value:: value + incr.	]	]\r)"),
				new MM("size", false, "public size ^<Integer> = (\r	^((stop - start) // increment) + 1 max: 0\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s <Int> ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r	self unimplemented\r)"),
				new MM("start", true, null),
				new MM("setOnce`start:", true, null),
				new MM("stop", true, null),
				new MM("setOnce`stop:", true, null),
				new MM("increment", true, null),
				new MM("setOnce`increment:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$Interval = (function ($p_start, $p_stop, $p_step) {
				var self = this;
				self.$super$Collections$Interval.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($p_start, $p_stop, $p_step) {
				var self = this;
				self.$superInit$Collections$Interval($p_start, $p_stop, $p_step);
				self.$setOnce$start$($p_start);
				self.$setOnce$stop$($p_stop);
				self.$setOnce$increment$($p_step);
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				if (!(self.$start() - self.$stop()).$sign().$$equal(self.$increment().$sign())) {
					var $value = nil;
					$value = self.$start() + (self.$increment() * ($index - 1));
					if (self.$increment() >= 0) {
						if ($value.$between$and$(self.$start(), self.$stop())) {
							return $value;
						} else {
							nil;
						};
					} else {
						if ($value.$between$and$(self.$stop(), self.$start())) {
							return $value;
						} else {
							nil;
						};
					};
				} else {
					nil;
				};
				self.$Error().$signal$("Index out-of-range");
				return self;
			});
			this.$do$ = (function ($action) {
				var self = this;
				var $value = nil;
				var $incr = nil;
				var $stp = nil;
				$value = self.$start();
				$incr = self.$increment();
				$stp = self.$stop();
				if ($incr >= 0) {
					{
						nil;
						for (; $value.$$less$equal($stp); ) {
							$action.$value$($value);
							$value = $value + $incr;
						};
					};
				} else {
					{
						nil;
						for (; $value.$$greater$equal($stp); ) {
							$action.$value$($value);
							$value = $value + $incr;
						};
					};
				};
				return self;
			});
			this.$size = (function () {
				var self = this;
				return ((self.$stop() - self.$start()).$$over$over(self.$increment()) + 1).$max$(0);
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				self.$unimplemented();
				return self;
			});
			this.$start = (function () {
				return this.$start$slot;
			});
			this.$setOnce$start$ = (function (v) {
				this.$start$slot = v;
				return this;
			});
			this.$stop = (function () {
				return this.$stop$slot;
			});
			this.$setOnce$stop$ = (function (v) {
				this.$stop$slot = v;
				return this;
			});
			this.$increment = (function () {
				return this.$increment$slot;
			});
			this.$setOnce$increment$ = (function (v) {
				this.$increment$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Interval";
					this.$superInit$Collections$Interval = $.$superInit$Collections$Interval;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$do$ = $.$do$;
					this.$size = $.$size;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$start = $.$start;
					this.$setOnce$start$ = $.$setOnce$start$;
					this.$stop = $.$stop;
					this.$setOnce$stop$ = $.$setOnce$stop$;
					this.$increment = $.$increment;
					this.$setOnce$increment$ = $.$setOnce$increment$;
					this.$enclosingObjects$Collections$Interval = enclosingObjects;
					this.$super$Collections$Interval = runtimeSuperclass;
					this["Collections`Interval"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$start$slot = nil;
						this.$stop$slot = nil;
						this.$increment$slot = nil;
					});
					this.basicNew = this["Collections`Interval"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Interval";
				this.slots = [];
				this.methods = [
					new MM("from:to:by:", true, null),
					new MM("from:to:", false, "public from: start <Number> to: stop <Number> ^<Instance> = (\r	^self from: start to: stop by: 1\r)")
				];
				this.nestedClasses = [];
				this.$from$to$by$ = (function ($p_start, $p_stop, $p_step) {
					return (new this.nonMeta.basicNew()).$instance$initializer($p_start, $p_stop, $p_step);
				});
				this.$from$to$ = (function ($start, $stop) {
					var self = this;
					return self.$from$to$by$($start, $stop, 1);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Interval";
						this.$from$to$by$ = $.$from$to$by$;
						this.$from$to$ = $.$from$to$;
						this.$enclosingObjects$Collections$Interval = enclosingObjects;
						this.$super$Collections$Interval = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$List = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`List";
			this.name = "Collections`List";
			this.header = "List = Collection (\r(* This class implements the read-only protocol for indexed collections that order their elements using integer indices. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`List", true, "Collection"),
				new MM("instance`initializer", true, "Collection"),
				new MM("at:", false, "public at: index <Integer> ^<E> = (\r	subclassResponsibility\r)"),
				new MM("at:ifAbsent:", false, "public at: index <Integer> ifAbsent: fail <[X def]> ^<E|X> = (\r	^(index between: 1 and: size)\r		ifTrue: [ at: index ]\r		ifFalse: [ fail value ]\r)"),
				new MM("collection:matchesElementsAt:", false, "collection: cltn <List[Object]>\rmatchesElementsAt: index <Integer>\r^<Boolean> = (\r\r	(* Test whether we contain the given subcollection at index.  This method assumes\r	  that there are at least as many elements in this collection after index as cltn size *)\r\r	| offset <Integer> |\r	offset:: index - 1.\r	1 to: cltn size do:\r		[ :i <Integer> |\r			(cltn at: i) = (at: i+offset)\r				ifFalse: [ ^false ]		].\r	^true\r)"),
				new MM("findFirst:", false, "findFirst: predicate <[:E| Boolean]>  ^<Integer> = (\r\r	1 to: size do:\r		[ :i <Integer> |\r			(predicate value: (at: i))\r				ifTrue: [ ^i ]	].\r	^0\r)"),
				new MM("findLast:", false, "findLast: predicate <[:E| Boolean]>  ^<Integer> = (\r\r	size to: 1 by: -1 do:\r		[ :i <Integer> |\r			(predicate value: (at: i))\r				ifTrue: [ ^i ]	].\r	^0\r)"),
				new MM("first", false, "public first ^<E> = (\r	^self at: 1\r)"),
				new MM("hash", false, "public hash ^<Integer> = (\r\r	(* This function should not be changed, since it is designed to produce the\r		same results as the identityHash primitive, for strings and symbols *)\r	| sz <Integer> val <Integer> |\r	sz:: size.\r	sz < 2\r		ifTrue: [ ^sz = 1 ifTrue: [ self hashAt: 1 ] ifFalse: [ 1 ] ].\r	val:: hashAt: 1.\r	val:: (val bitShift: 3) bitXor: ((hashAt: 2) bitXor: val).\r	val:: (val bitShift: 3) bitXor: ((hashAt: sz) bitXor: val).\r	val:: (val bitShift: 3) bitXor: ((hashAt: sz - 1) bitXor: val).\r	val:: (val bitShift: 3) bitXor: ((hashAt: (sz bitShift: -1) + 1) bitXor: val).\r	val:: (val bitShift: 3) bitXor: (sz bitXor: val).\r\r	(* mask it to 20 bits to match VM *)\r	val:: val bitAnd: 16rFFFFF.\r	^val\r)"),
				new MM("indexOf:", false, "public indexOf: element <Object> ^<Integer> = (\r\r	^self indexOf: element ifAbsent: [ 0 ]\r)"),
				new MM("indexOf:ifAbsent:", false, "public indexOf: element <Object> ifAbsent: f <[X def]>  ^<Integer | X> = (\r\r	1 to: size do:\r [:index <Integer> |\r (at: index) = \relement ifTrue: [^index]].\r	^f value\r)"),
				new MM("indexOfSubCollection:startingAt:", false, "indexOfSubCollection: sub <List[Object]>\rstartingAt: index <Integer>\r^<Integer> = (\r\r	^indexOfSubCollection: sub\r		startingAt: index\r		ifAbsent: [ error: 'subcollection not found' ]\r)"),
				new MM("indexOfSubCollection:startingAt:ifAbsent:", false, "indexOfSubCollection: sub <List[Object]>\rstartingAt: index <Integer>\rifAbsent: f <[X def]>\r^<Integer | X> = (\r\r	index to: (size - sub size) + 1 do:\r		[ :i <Integer> |\r			(collection: sub matchesElementsAt: i)\r				ifTrue: [ ^i ]		].\r	^f value\r)"),
				new MM("indicesOfSubCollection:", false, "indicesOfSubCollection: sub <List[Object]>  ^<List[Int]> = (\r\r	^indicesOfSubCollection: sub startingAt: 1\r)"),
				new MM("indicesOfSubCollection:startingAt:", false, "indicesOfSubCollection: sub <List[Object]>\rstartingAt: index <Integer>\r^<List[Integer]> = (\r\r	| indices <MutableArrayList[Integer]> subSize <Integer> current <Integer> |\r	indices:: MutableArrayList(* [Int] *) new.\r	subSize:: sub size.\r	current:: index.\r	[ current:: self indexOfSubCollection: sub startingAt: current ifAbsent: [ 0 ].\r	  current = 0\r		] whileFalse: \r			[	indices addLast: current.\r				current:: current + subSize.		].\r	^indices\r)"),
				new MM("last", false, "public last ^<E> = (\r	^self at: self size\r)"),
				new MM("size", false, "public size ^<Integer> = (\r	subclassResponsibility\r)"),
				new MM("species", false, "public species ^<Collection[E] class> = (\r	^Array(* [E] *)\r)"),
				new MM(",", false, "public , other <List[X]> ^<MutableList[E | X]> = (\r	^self copyReplaceFrom: size + 1 to: size with: other\r)"),
				new MM("allButFirst", false, "allButFirst  ^ <MutableList[E]> = (\r	^copyFrom: 2 to: size\r)"),
				new MM("allButLast", false, "allButLast ^ <MutableList[E]> = (\r	^copyFrom: 1 to: size-1\r)"),
				new MM("isSequenceable", false, "isSequenceable = (\r	^true\r)"),
				new MM("copyFrom:to:", false, "copyFrom: start <Integer> to: stop <Integer>   ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* The guarantee is typesafe since the inference clause guarantees that E < EX at the call site *)\r	| cp <MutableList[EX]> safeme <List[EX]> |\r	safeme:: (* guaranteed <List[EX]> *) self.\r	cp:: (* guaranteed <MutableList[EX]> *) \r				newCopyOfSize: (stop - start) + 1 thatCanAlsoHoldElementsOf: safeme.\r	cp replaceFrom: 1 to: cp size with: safeme startingAt: start.\r	^cp\r)"),
				new MM("copyReplaceAll:with:", false, "copyReplaceAll: oldSub <List[Object]> with: newSub <List[X]>  ^<MutableList[EX | X]> = (\r	(* {where EX is returnType of #anElement message of receiverType;\r			where X is returnType of #anElement message of arg 2} *)\r\r	|	spots <List[Integer]>\r		subDelta <Integer>\r		copy <MutableList[EX | X]>\r		current <Integer>\r		offset <Integer>\r		newSubSize <Integer>\r		oldSubSize <Integer>\r		safeself <List[EX]>\r		|\r	newSubSize:: newSub size.\r	oldSubSize:: oldSub size.\r	subDelta:: newSub size - oldSubSize.\r	spots:: indicesOfSubCollection: oldSub.\r\r	(* This guarantee is typesafe since the inference clause guarantees that E < EX at the call site *)\r	safeself:: (* guaranteed <List[EX]> *) self.\r\r	spots size = 0 \r		ifTrue: [	copy::  safeself newCopyOfSize: size\r								thatCanAlsoHoldElementsOf: newSub.\r						copy replaceFrom: 1 to: size with: safeself.\r						^copy\r						].\r\r	copy:: safeself newCopyOfSize: size + (spots size * subDelta)\r				thatCanAlsoHoldElementsOf: newSub.\r	current:: 1.\r	offset:: 0.\r	spots do: \r		[ :spot <Int> |	| offspot <Int> |\r			offspot:: spot + offset.\r\r			(* copy segment of self before the next occurrence *)\r			copy	replaceFrom: current + offset\r					to: offspot - 1\r					with: safeself\r					startingAt: current.\r			(* copy the new subcollection at the next occurrence *)\r			copy	replaceFrom: offspot\r					to: (offspot + newSubSize) - 1\r					with: newSub.\r			current:: spot + oldSubSize.\r			offset:: offset + subDelta.	].\r	(* copy the final segment from self after the last occurrence *)\r	copy	replaceFrom: current + offset\r			to: copy size\r			with: safeself\r			startingAt: current.\r	^copy\r)"),
				new MM("copyReplaceFrom:to:with:", false, "copyReplaceFrom: start <Integer> to: stop <Integer> with: other <List[X]>  ^<MutableList[EX | X]> = (\r	(* {where EX is returnType of #anElement message of receiverType;\r			where X is returnType of #anElement message of arg 3} *)\r\r	|	copy <MutableList[EX | X]>\r		sizeChange <Integer>\r		sz <Integer>\r		afterNew <Integer>\r		safeself <List[EX]> |\r\r	(* The guarantee is typesafe since the inference clause guarantees that E < EX at the call site *)\r	safeself:: (* guaranteed <List[EX]> *) self.\r\r	sizeChange:: other size - ((stop - start) + 1).\r	sz:: size.\r	copy:: safeself newCopyOfSize: sz + sizeChange\r				thatCanAlsoHoldElementsOf: other.\r	afterNew:: start + other size.\r	copy replaceFrom: 1 to: start - 1 with: safeself startingAt: 1.\r	copy replaceFrom: start to: afterNew - 1 with: other.\r	copy replaceFrom: afterNew to: copy size with: ((* guaranteed <List[EX]> *) self) startingAt: stop + 1.\r	^copy	\r)"),
				new MM("copyWith:", false, "copyWith: element <X>  ^<MutableList[E | X]> = (\r	^self , {element}\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s <Integer> ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r	\r	(* return a mutable copy of the receiver of a different size, that is either truncated\r		or extended with nils as necessary.  Note this works even if the receiver itself\r		is not mutable *)\r\r	(* %note: the inference clause above is a tricky way of doing something very difficult:\r	  it allows us to effectively return a mutable copy of the receiver in a typesafe way,\r	  even though the\r	  receiver itself may not be mutable.  This would be impossible to type reasonably\r	  without the inference clause, because we would have to have a return type of\r	  <MutableList[E]>, which isn't typesafe since  E is a 'covariant' generic variable of this\r	  class, whereas E is an 'unrelated' generic variable in MutableList. - D.G. *)\r	  \r	(* %note: The inference clause above should really read ... EX <E> ..., but the type\r		system implementation for some reason can't deal with implementations\r		of such a method in subclasses that have bound E (i.e. are not generic on E).\r		For an example, see the implementation in ReadString, which would not have to\r		have a guarantee in the method body if this worked right - D.G. *)\r\r	subclassResponsibility	\r)"),
				new MM("copyWithout:", false, "copyWithout: el <Object>  ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	| safeself <List[EX]> |\r\r	(* The following guarantee is safe because the inference clause ensures that E < EX\r		at the call site *)\r	safeself:: (* guaranteed <List[EX]> *) self. \r\r	^safeself copyReplaceAll: (Array(* [Object] *) with: el) with: {} 	\r)"),
				new MM("reverse", false, "reverse   ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* The guarantees are typesafe since the inference clause guarantees that E < EX at the call site *)\r	| copy <MutableList[EX]> |\r	\r	#BOGUS. (* #reverse implies an in-place operation, should be #reversed *)\r	copy:: (* guaranteed <MutableList[EX]> *)\r		(newCopyOfSize: size thatCanAlsoHoldElementsOf: self).\r	1 to: size do: \r		[ :i <Integer> |\r			| el <EX> |\r			el:: ((* guaranteed <MutableList[EX]> *) self) at: i.\r			copy at: size + 1 - i put: el.	].\r	^copy	\r)"),
				new MM("collect:", false, "public collect: map <[:E | R def]> ^<List[R]> = (\r	^collectUsingAtPut: map\r)"),
				new MM("do:", false, "public do: f <[:E]> = (\r\r	1 to: size do:\r		[ :i <Integer> |\r			f value: (at: i)	]\r)"),
				new MM("doWithIndex:", false, "doWithIndex: f <[:E :Integer]> = (\r\r	1 to: size do:\r		[ :i <Integer> |\r			f value: (at: i) value: i]\r)"),
				new MM("keysAndValuesDo:", false, "public keysAndValuesDo: action <[:Integer :E]> = (\r\r	1 to: size do:\r		[:index <Integer> |\r action value: index value: (at: index)]\r)"),
				new MM("reverseDo:", false, "public reverseDo: action <[:E]> = (\r\r	size to: 1 by: -1 do:\r		[:index <Integer> |\r action value: (at: index)]\r)"),
				new MM("with:do:", false, "public with: other <List[X def]> do: action <[:E :X]> = (\r\r	assert: [ self size = other size ] message: 'Cannot jointly interate collections of different size'.\r	1 to: size do:\r		[:index <Integer> |\r action value: (at: index) value: (other at: index)].\r)"),
				new MM("collectUsingAtPut:", false, "protected collectUsingAtPut: map <[:E | R def]> ^<List[R]> = (\r\r\r	| c <MutableList[R]> |\r	(* See #newForCollect: for explanation of why the guarantee is safe *)\r	c:: (* guaranteed <MutableList[R]> ( *)newForCollectUsingAtPut: size(* ) *).\r	1 to: self size do:\r		[ :i <Integer> |\r			c at: i put: (map value: (at: i))  ].\r	^c\r)"),
				new MM("hashAt:", false, "protected hashAt: index <Integer> ^<Integer> = (\r	^(at: index) hash\r)"),
				new MM("newForCollectUsingAtPut:", false, "newForCollectUsingAtPut: size <Integer> ^<MutableList[Object]> = (\r	(* Return a new extensible collection that is as closely related to the receiver's class as possible.  The\r	 returned collection must be unaliased and empty, so it is safe for the caller to guarantee that the type\r	 variable is of a more specific type *)\r\r	^Array(* [Object] *) new: size\r)"),
				new MM("newCopyOfSize:thatCanAlsoHoldElementsOf:", false, "newCopyOfSize: size <Integer>\rthatCanAlsoHoldElementsOf: other <List[X]>\r^<MutableList[EX | X]> \r= (\r		(* {where X is returnType of #anElement message of arg 2;\r		     where EX is returnType of #anElement message of receiverType} *)\r\r	(* Return a fresh collection of a closely related type\r	that can hold both elements of self and elements of the other collection *)\r\r	^Array(* [EX | X] *) new: size\r	\r)"),
				new MM("readStream", false, "readStream ^<ReadStream[E]> = (\r	^ListReadStream(* [E] *) on: self\r)"),
				new MM("=", false, "public = other <Object> ^<Boolean> = (\r\r	^self == other\r		or: [ class = other class\r				and: [ (* We have the same class, so we can guarantee other is a List *)\r					  hasSameElementsAndOrderAs: ((* guaranteed <List[Object]> *) other)   ]]\r)"),
				new MM("hasSameElementsAndOrderAs:", false, "hasSameElementsAndOrderAs: other <List[Object]>  ^<Boolean> = (\r\r	(* Like #hasSameElementsAs:, but also requires the elements to be in the same order *)\r\r	size = other size\r		ifFalse: [ ^false ].  \r	1 to: size do:\r		[ :i <Integer> |\r			(at: i) = (other at: i)\r				ifFalse: [ ^false ]	].\r	^true\r)"),
				new MM("includesIndex:", false, "protected includesIndex: index <Integer> ^<Boolean> = (\r	^index between: 1 and: size\r)"),
				new MM("isSortedBy:", false, "isSortedBy: compare <[:E:E| Boolean]> ^<Boolean> = (\r\r	(* Returns true if the receiver is in sorted order, using the specified comparison *)\r\r	| last <E> |\r	size < 2\r		ifTrue: [ ^true ].\r	last:: at: 1.\r	2 to: size do:\r		[ :i <Integer> |\r			(compare value: last value: (at: i))\r				ifFalse: [ ^false ]	].\r	^true\r)"),
				new MM("binarySearchFor:between:and:toCompare:", false, "binarySearchFor: el <EL>\rbetween: start <Integer>\rand: end <Integer>\rtoCompare: compare <[:EL def:EL| Boolean]>\r^<Int>\r= (\r			(* {where CONSTRAINER <EL> is returnType of #anElement message of receiverType} *)\r	(* This does a binary search for the index such that if el was inserted before it\r	  the receiver would remain sorted.  The receiver must be sorted relative to the\r	  comparison block.  The comparison block should return true if the first block argument\r	  cannot appear after the second block argument *)\r\r	| low <Integer> high <Integer> |\r	low:: start.\r	high:: end.\r	[ low <= high ]\r		whileTrue:\r				[	| mid <Integer> |\r					mid:: (low + high)  // 2.\r	  				(* The guaranteed below is safe because of the inference clause *)\r					(compare value: ((* guaranteed <EL> *) (at: mid)) value: el)\r						ifTrue: [ low:: mid + 1 ]	\r						ifFalse: [ high:: mid - 1 ].\r				].\r	^low\r	\r)"),
				new MM("binarySearchFor:toCompare:", false, "binarySearchFor: el <EL>\rtoCompare: compare <[:EL def:EL| Boolean]>\r^ <Integer>\r= (\r	(* {where CONSTRAINER <EL> is returnType of #anElement message of receiverType} *)\r\r	(* The guarantee is safe because of the inference clause *)\r	^((* guaranteed <List[EL]> *) self)\r			binarySearchFor: el\r			between: 1\r			and: size\r			toCompare: compare	\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$List = (function () {
				var self = this;
				self.$super$Collections$List.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$List();
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$at$ifAbsent$ = (function ($index, $fail) {
				var self = this;
				return $index.$between$and$(1, self.$size()).$ifTrue$ifFalse$((function () {
					return self.$at$($index);
				}), (function () {
					return $fail.$value();
				}));
			});
			this.$collection$matchesElementsAt$ = (function ($cltn, $index) {
				var self = this;
				var $offset = nil;
				$offset = $index - 1;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $cltn.$size();
					for (; $$limit.$$greater$equal($i); ) {
						if (!$cltn.$at$($i).$$equal(self.$at$($i + $offset))) {
							return false;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return true;
			});
			this.$findFirst$ = (function ($predicate) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						if ($predicate.$value$(self.$at$($i))) {
							return $i;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return 0;
			});
			this.$findLast$ = (function ($predicate) {
				var self = this;
				{
					var $i = nil;
					nil;
					$i = self.$size();
					for (; (1).$$less$equal($i); ) {
						if ($predicate.$value$(self.$at$($i))) {
							return $i;
						} else {
							nil;
						};
						$i = (-1).$$plus($i);
					};
				};
				return 0;
			});
			this.$first = (function () {
				var self = this;
				return self.$at$(1);
			});
			this.$hash = (function () {
				var self = this;
				var $sz = nil;
				var $val = nil;
				$sz = self.$size();
				if ($sz < 2) {
					return $sz.$$equal(1).$ifTrue$ifFalse$((function () {
						return self.$hashAt$(1);
					}), (function () {
						return 1;
					}));
				} else {
					nil;
				};
				$val = self.$hashAt$(1);
				$val = $val.$bitShift$(3).$bitXor$(self.$hashAt$(2).$bitXor$($val));
				$val = $val.$bitShift$(3).$bitXor$(self.$hashAt$($sz).$bitXor$($val));
				$val = $val.$bitShift$(3).$bitXor$(self.$hashAt$($sz - 1).$bitXor$($val));
				$val = $val.$bitShift$(3).$bitXor$(self.$hashAt$($sz.$bitShift$(-1) + 1).$bitXor$($val));
				$val = $val.$bitShift$(3).$bitXor$($sz.$bitXor$($val));
				$val = $val.$bitAnd$(1048575);
				return $val;
			});
			this.$indexOf$ = (function ($element) {
				var self = this;
				return self.$indexOf$ifAbsent$($element, (function () {
					return 0;
				}));
			});
			this.$indexOf$ifAbsent$ = (function ($element, $f) {
				var self = this;
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($index); ) {
						if (self.$at$($index).$$equal($element)) {
							return $index;
						} else {
							nil;
						};
						$index = (1).$$plus($index);
					};
				};
				return $f.$value();
			});
			this.$indexOfSubCollection$startingAt$ = (function ($sub, $index) {
				var self = this;
				return self.$indexOfSubCollection$startingAt$ifAbsent$($sub, $index, (function () {
					return self.$enclosingObjects$Collections$List[0].$error$("subcollection not found");
				}));
			});
			this.$indexOfSubCollection$startingAt$ifAbsent$ = (function ($sub, $index, $f) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = $index;
					$$limit = (self.$size() - $sub.$size()) + 1;
					for (; $$limit.$$greater$equal($i); ) {
						if (self.$collection$matchesElementsAt$($sub, $i)) {
							return $i;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return $f.$value();
			});
			this.$indicesOfSubCollection$ = (function ($sub) {
				var self = this;
				return self.$indicesOfSubCollection$startingAt$($sub, 1);
			});
			this.$indicesOfSubCollection$startingAt$ = (function ($sub, $index) {
				var self = this;
				var $indices = nil;
				var $subSize = nil;
				var $current = nil;
				$indices = self.$enclosingObjects$Collections$List[0].$MutableArrayList().$new();
				$subSize = $sub.$size();
				$current = $index;
				{
					nil;
					$current = self.$indexOfSubCollection$startingAt$ifAbsent$($sub, $current, (function () {
						return 0;
					}));
					for (; !$current.$$equal(0); ) {
						$indices.$addLast$($current);
						$current = $current + $subSize;
						$current = self.$indexOfSubCollection$startingAt$ifAbsent$($sub, $current, (function () {
							return 0;
						}));
					};
				};
				return $indices;
			});
			this.$last = (function () {
				var self = this;
				return self.$at$(self.$size());
			});
			this.$size = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$species = (function () {
				var self = this;
				return self.$Array();
			});
			this.$$comma = (function ($other) {
				var self = this;
				return self.$copyReplaceFrom$to$with$(self.$size() + 1, self.$size(), $other);
			});
			this.$allButFirst = (function () {
				var self = this;
				return self.$copyFrom$to$(2, self.$size());
			});
			this.$allButLast = (function () {
				var self = this;
				return self.$copyFrom$to$(1, self.$size() - 1);
			});
			this.$isSequenceable = (function () {
				var self = this;
				return true;
			});
			this.$copyFrom$to$ = (function ($start, $stop) {
				var self = this;
				var $cp = nil;
				var $safeme = nil;
				$safeme = self;
				$cp = self.$newCopyOfSize$thatCanAlsoHoldElementsOf$(($stop - $start) + 1, $safeme);
				$cp.$replaceFrom$to$with$startingAt$(1, $cp.$size(), $safeme, $start);
				return $cp;
			});
			this.$copyReplaceAll$with$ = (function ($oldSub, $newSub) {
				var self = this;
				var $spots = nil;
				var $subDelta = nil;
				var $copy = nil;
				var $current = nil;
				var $offset = nil;
				var $newSubSize = nil;
				var $oldSubSize = nil;
				var $safeself = nil;
				$newSubSize = $newSub.$size();
				$oldSubSize = $oldSub.$size();
				$subDelta = $newSub.$size() - $oldSubSize;
				$spots = self.$indicesOfSubCollection$($oldSub);
				$safeself = self;
				if ($spots.$size().$$equal(0)) {
					$copy = $safeself.$newCopyOfSize$thatCanAlsoHoldElementsOf$(self.$size(), $newSub);
					$copy.$replaceFrom$to$with$(1, self.$size(), $safeself);
					return $copy;
				} else {
					nil;
				};
				$copy = $safeself.$newCopyOfSize$thatCanAlsoHoldElementsOf$(self.$size() + ($spots.$size() * $subDelta), $newSub);
				$current = 1;
				$offset = 0;
				$spots.$do$((function ($spot) {
					var $offspot = nil;
					$offspot = $spot + $offset;
					$copy.$replaceFrom$to$with$startingAt$($current + $offset, $offspot - 1, $safeself, $current);
					$copy.$replaceFrom$to$with$($offspot, ($offspot + $newSubSize) - 1, $newSub);
					$current = $spot + $oldSubSize;
					return $offset = $offset + $subDelta;
				}));
				$copy.$replaceFrom$to$with$startingAt$($current + $offset, $copy.$size(), $safeself, $current);
				return $copy;
			});
			this.$copyReplaceFrom$to$with$ = (function ($start, $stop, $other) {
				var self = this;
				var $copy = nil;
				var $sizeChange = nil;
				var $sz = nil;
				var $afterNew = nil;
				var $safeself = nil;
				$safeself = self;
				$sizeChange = $other.$size() - (($stop - $start) + 1);
				$sz = self.$size();
				$copy = $safeself.$newCopyOfSize$thatCanAlsoHoldElementsOf$($sz + $sizeChange, $other);
				$afterNew = $start + $other.$size();
				$copy.$replaceFrom$to$with$startingAt$(1, $start - 1, $safeself, 1);
				$copy.$replaceFrom$to$with$($start, $afterNew - 1, $other);
				$copy.$replaceFrom$to$with$startingAt$($afterNew, $copy.$size(), self, $stop + 1);
				return $copy;
			});
			this.$copyWith$ = (function ($element) {
				var self = this;
				return self.$$comma([$element]);
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$copyWithout$ = (function ($el) {
				var self = this;
				var $safeself = nil;
				$safeself = self;
				return $safeself.$copyReplaceAll$with$(self.$Array().$with$($el), []);
			});
			this.$reverse = (function () {
				var self = this;
				var $copy = nil;
				"BOGUS";
				$copy = self.$newCopyOfSize$thatCanAlsoHoldElementsOf$(self.$size(), self);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						var $el = nil;
						$el = self.$at$($i);
						$copy.$at$put$((self.$size() + 1) - $i, $el);
						$i = (1).$$plus($i);
					};
				};
				return $copy;
			});
			this.$collect$ = (function ($map) {
				var self = this;
				return self.$collectUsingAtPut$($map);
			});
			this.$do$ = (function ($f) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						$f.$value$(self.$at$($i));
						$i = (1).$$plus($i);
					};
				};
				return self;
			});
			this.$doWithIndex$ = (function ($f) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						$f.$value$value$(self.$at$($i), $i);
						$i = (1).$$plus($i);
					};
				};
				return self;
			});
			this.$keysAndValuesDo$ = (function ($action) {
				var self = this;
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($index); ) {
						$action.$value$value$($index, self.$at$($index));
						$index = (1).$$plus($index);
					};
				};
				return self;
			});
			this.$reverseDo$ = (function ($action) {
				var self = this;
				{
					var $index = nil;
					nil;
					$index = self.$size();
					for (; (1).$$less$equal($index); ) {
						$action.$value$(self.$at$($index));
						$index = (-1).$$plus($index);
					};
				};
				return self;
			});
			this.$with$do$ = (function ($other, $action) {
				var self = this;
				self.$assert$message$((function () {
					return self.$size().$$equal($other.$size());
				}), "Cannot jointly interate collections of different size");
				{
					var $$limit = nil;
					var $index = nil;
					nil;
					$index = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($index); ) {
						$action.$value$value$(self.$at$($index), $other.$at$($index));
						$index = (1).$$plus($index);
					};
				};
				return self;
			});
			this.$collectUsingAtPut$ = (function ($map) {
				var self = this;
				var $c = nil;
				$c = self.$newForCollectUsingAtPut$(self.$size());
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						$c.$at$put$($i, $map.$value$(self.$at$($i)));
						$i = (1).$$plus($i);
					};
				};
				return $c;
			});
			this.$hashAt$ = (function ($index) {
				var self = this;
				return self.$at$($index).$hash();
			});
			this.$newForCollectUsingAtPut$ = (function ($size) {
				var self = this;
				return self.$Array().$new$($size);
			});
			this.$newCopyOfSize$thatCanAlsoHoldElementsOf$ = (function ($size, $other) {
				var self = this;
				return self.$Array().$new$($size);
			});
			this.$readStream = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$List[0].$ListReadStream().$on$(self);
			});
			this.$$equal = (function ($other) {
				var self = this;
				return (self === $other) || (self.$class().$$equal($other.$class()) && self.$hasSameElementsAndOrderAs$($other));
			});
			this.$hasSameElementsAndOrderAs$ = (function ($other) {
				var self = this;
				if (!self.$size().$$equal($other.$size())) {
					return false;
				} else {
					nil;
				};
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						if (!self.$at$($i).$$equal($other.$at$($i))) {
							return false;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return true;
			});
			this.$includesIndex$ = (function ($index) {
				var self = this;
				return $index.$between$and$(1, self.$size());
			});
			this.$isSortedBy$ = (function ($compare) {
				var self = this;
				var $last = nil;
				if (self.$size() < 2) {
					return true;
				} else {
					nil;
				};
				$last = self.$at$(1);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 2;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						if (!$compare.$value$value$($last, self.$at$($i))) {
							return false;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return true;
			});
			this.$binarySearchFor$between$and$toCompare$ = (function ($el, $start, $end, $compare) {
				var self = this;
				var $low = nil;
				var $high = nil;
				$low = $start;
				$high = $end;
				{
					nil;
					for (; $low.$$less$equal($high); ) {
						var $mid = nil;
						$mid = ($low + $high).$$over$over(2);
						if ($compare.$value$value$(self.$at$($mid), $el)) {
							$low = $mid + 1;
						} else {
							$high = $mid - 1;
						};
					};
				};
				return $low;
			});
			this.$binarySearchFor$toCompare$ = (function ($el, $compare) {
				var self = this;
				return self.$binarySearchFor$between$and$toCompare$($el, 1, self.$size(), $compare);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`List";
					this.$superInit$Collections$List = $.$superInit$Collections$List;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$at$ifAbsent$ = $.$at$ifAbsent$;
					this.$collection$matchesElementsAt$ = $.$collection$matchesElementsAt$;
					this.$findFirst$ = $.$findFirst$;
					this.$findLast$ = $.$findLast$;
					this.$first = $.$first;
					this.$hash = $.$hash;
					this.$indexOf$ = $.$indexOf$;
					this.$indexOf$ifAbsent$ = $.$indexOf$ifAbsent$;
					this.$indexOfSubCollection$startingAt$ = $.$indexOfSubCollection$startingAt$;
					this.$indexOfSubCollection$startingAt$ifAbsent$ = $.$indexOfSubCollection$startingAt$ifAbsent$;
					this.$indicesOfSubCollection$ = $.$indicesOfSubCollection$;
					this.$indicesOfSubCollection$startingAt$ = $.$indicesOfSubCollection$startingAt$;
					this.$last = $.$last;
					this.$size = $.$size;
					this.$species = $.$species;
					this.$$comma = $.$$comma;
					this.$allButFirst = $.$allButFirst;
					this.$allButLast = $.$allButLast;
					this.$isSequenceable = $.$isSequenceable;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$copyReplaceAll$with$ = $.$copyReplaceAll$with$;
					this.$copyReplaceFrom$to$with$ = $.$copyReplaceFrom$to$with$;
					this.$copyWith$ = $.$copyWith$;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$copyWithout$ = $.$copyWithout$;
					this.$reverse = $.$reverse;
					this.$collect$ = $.$collect$;
					this.$do$ = $.$do$;
					this.$doWithIndex$ = $.$doWithIndex$;
					this.$keysAndValuesDo$ = $.$keysAndValuesDo$;
					this.$reverseDo$ = $.$reverseDo$;
					this.$with$do$ = $.$with$do$;
					this.$collectUsingAtPut$ = $.$collectUsingAtPut$;
					this.$hashAt$ = $.$hashAt$;
					this.$newForCollectUsingAtPut$ = $.$newForCollectUsingAtPut$;
					this.$newCopyOfSize$thatCanAlsoHoldElementsOf$ = $.$newCopyOfSize$thatCanAlsoHoldElementsOf$;
					this.$readStream = $.$readStream;
					this.$$equal = $.$$equal;
					this.$hasSameElementsAndOrderAs$ = $.$hasSameElementsAndOrderAs$;
					this.$includesIndex$ = $.$includesIndex$;
					this.$isSortedBy$ = $.$isSortedBy$;
					this.$binarySearchFor$between$and$toCompare$ = $.$binarySearchFor$between$and$toCompare$;
					this.$binarySearchFor$toCompare$ = $.$binarySearchFor$toCompare$;
					this.$enclosingObjects$Collections$List = enclosingObjects;
					this.$super$Collections$List = runtimeSuperclass;
					this["Collections`List"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`List"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`List";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`List";
						this.$new = $.$new;
						this.$enclosingObjects$Collections$List = enclosingObjects;
						this.$super$Collections$List = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$MutableArrayList = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`MutableArrayList";
			this.name = "Collections`MutableArrayList";
			this.header = "MutableArrayList = MutableAddableList (\r(* MutableArrayLists are AddableLists that also support setting\relements in place (the MutableList protocol). *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`MutableArrayList", true, "MutableAddableList"),
				new MM("instance`initializer", true, "MutableAddableList"),
				new MM("add:", false, "add: e <E> ^<E> = (\r	^addLast: e\r)"),
				new MM("add:after:", false, "add: el <E> after: existing <E> ^<E> = (\r\r	| index <Int> |\r	index:: indexOf: existing.\r	index = size\r		ifFalse: [ index:: makeSpace: 1\r							beforeIndex: index + startGap + 1 ]\r		ifTrue: [ needSpaceAtEnd: 1.\r						index:: index + startGap + 1.	].\r	^contents at: index put: el.\r)"),
				new MM("add:afterIndex:", false, "add: el <E> afterIndex: i <Int> ^<E> = (\r	^add: el beforeIndex: i + 1\r)"),
				new MM("add:before:", false, "add: el <E> before: existing <E> ^<E> = (\r\r	| index <Int> |\r	index:: indexOf: existing.\r	index:: makeSpace: 1 beforeIndex: index + startGap.\r	^contents at: index put: el.\r)"),
				new MM("add:beforeIndex:", false, "add: el <E> beforeIndex: i <Int> ^<E> = (\r\r	| index <Int> |\r	i > size\r		ifFalse: [	index:: makeSpace: 1 beforeIndex: i + startGap.	]\r		ifTrue: [	needSpaceAtEnd: 1.\r					index:: i + startGap. ].\r	^contents at: index put: el.\r)"),
				new MM("addAllFirst:", false, "addAllFirst: c <Collection[E]> ^<Collection[E]> = (\r	c do: [ :el <E> | 	addFirst: el ].\r	^c\r)"),
				new MM("addAllLast:", false, "addAllLast: c <Collection[E]> ^<Collection[E]> = (\r	c do: [ :el <E> | 	addLast: el ].\r	^c\r)"),
				new MM("addFirst:", false, "addFirst: e <E> ^<E> = (\r\r	needSpaceAtStart: 1.\r	contents at: startGap put: e.\r	startGap: startGap - 1.\r	^e\r)"),
				new MM("addLast:", false, "addLast: e <E> ^<E> = (\r\r	needSpaceAtEnd: 1.\r	lastIndex: lastIndex + 1.\r	contents at: lastIndex put: e.\r	^e\r)"),
				new MM("at:put:", false, "at: i <Int> put: el <E> ^<E> = (\r\r	| adjusted <Int> |\r	adjusted:: i + startGap.\r	((0 < i) and: [adjusted <= lastIndex])\r		ifFalse: [ error: 'invalid index' ].\r	^contents at: adjusted put: el\r\r)"),
				new MM("with:", false, "with: el <E>  = (\r	add: el\r)"),
				new MM("withAll:", false, "withAll: els <Collection[E]> ^<Self> = (\r	addAll: els\r)"),
				new MM("asMutableArrayList", false, "asMutableArrayList ^<MutableArrayList[EX]>  = (\r		(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* the guarantee is safe because of the inference clause *)\r	^(* guaranteed <MutableArrayList[EX]> *) self\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s <Int> ^<MutableArrayList[EX]> = ( \r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* Note: this method temporarily mutates the receiver, so it should not be sent to an object that\r		another process might be accessing. *)\r\r	(* We use a trick here: we temporarily fudge the lastIndex to be the value we want to use in the copy,\r	  which will cause postCopy to copy the contents with a different size, and then we restore the old\r	  lastIndex value for this instance.  This lets the normal copy mechanism handle subclass instance\r	  variable copying. *)\r	| oldLastIndex <Int> safeself <MutableArrayList[EX]> copy <MutableArrayList[EX]> |\r\r	(* This guarantee is safe because the inference clause guarantees\r		that E < EX at each call site *)\r	safeself:: (* guaranteed <MutableArrayList[EX]> *) self.\r\r	oldLastIndex:: lastIndex.\r	lastIndex: s + startGap.\r	copy:: safeself copy.\r	lastIndex: oldLastIndex.\r\r	^copy\r)"),
				new MM("collect:", false, "collect: map <[:E | R def]> ^<MutableArrayList[R]> = (\r	^(collectUsingAdd: map) asMutableArrayList\r)"),
				new MM("replaceFrom:to:with:startingAt:", false, "replaceFrom: start <Int>\rto: stop <Int>\rwith: other <List[E]>\rstartingAt: repStart <Int>\r = (\r\r	(* replace the elements of the receiver from start to stop with elements from other,\r	  starting with the element of other with index repStart. *)\r\r	| otheri <Int> |\r	(start >= 1 and: [ stop <= size ])\r		ifFalse: [ error: 'range out of bounds' ].\r\r	contents replaceFrom: start + startGap to: stop + startGap with: other startingAt: repStart\r)"),
				new MM("newCopyOfSize:thatCanAlsoHoldElementsOf:", false, "newCopyOfSize: size <Int>\rthatCanAlsoHoldElementsOf: other <List[X]>\r^<MutableArrayList[EX | X]>\r = (\r		(* {where X is returnType of #anElement message of arg 2;\r		     where EX is returnType of #anElement message of receiverType} *)\r\r	^(MutableArrayList(* [EX | X] *) new: size) size: size\r)"),
				new MM("bottomToTopDo:", false, "bottomToTopDo: blk <[:E]> = (\r	do: blk\r)"),
				new MM("pop", false, "pop ^<E> = (\r	^removeLast\r)"),
				new MM("push:", false, "push: el <E> = (\r	addLast: el\r)"),
				new MM("top", false, "top ^<E> = (\r	^last\r)"),
				new MM("topToBottomDo:", false, "topToBottomDo: blk <[:E]> = (\r	reverseDo: blk\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$MutableArrayList = (function () {
				var self = this;
				self.$super$Collections$MutableArrayList.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$MutableArrayList();
				return self;
			});
			this.$add$ = (function ($e) {
				var self = this;
				return self.$addLast$($e);
			});
			this.$add$after$ = (function ($el, $existing) {
				var self = this;
				var $index = nil;
				$index = self.$indexOf$($existing);
				if (!$index.$$equal(self.$size())) {
					$index = self.$makeSpace$beforeIndex$(1, ($index + self.$startGap()) + 1);
				} else {
					self.$needSpaceAtEnd$(1);
					$index = ($index + self.$startGap()) + 1;
				};
				return self.$contents().$at$put$($index, $el);
			});
			this.$add$afterIndex$ = (function ($el, $i) {
				var self = this;
				return self.$add$beforeIndex$($el, $i + 1);
			});
			this.$add$before$ = (function ($el, $existing) {
				var self = this;
				var $index = nil;
				$index = self.$indexOf$($existing);
				$index = self.$makeSpace$beforeIndex$(1, $index + self.$startGap());
				return self.$contents().$at$put$($index, $el);
			});
			this.$add$beforeIndex$ = (function ($el, $i) {
				var self = this;
				var $index = nil;
				if (!$i.$$greater(self.$size())) {
					$index = self.$makeSpace$beforeIndex$(1, $i + self.$startGap());
				} else {
					self.$needSpaceAtEnd$(1);
					$index = $i + self.$startGap();
				};
				return self.$contents().$at$put$($index, $el);
			});
			this.$addAllFirst$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$addFirst$($el);
				}));
				return $c;
			});
			this.$addAllLast$ = (function ($c) {
				var self = this;
				$c.$do$((function ($el) {
					return self.$addLast$($el);
				}));
				return $c;
			});
			this.$addFirst$ = (function ($e) {
				var self = this;
				self.$needSpaceAtStart$(1);
				self.$contents().$at$put$(self.$startGap(), $e);
				self.$startGap$(self.$startGap() - 1);
				return $e;
			});
			this.$addLast$ = (function ($e) {
				var self = this;
				self.$needSpaceAtEnd$(1);
				self.$lastIndex$(self.$lastIndex() + 1);
				self.$contents().$at$put$(self.$lastIndex(), $e);
				return $e;
			});
			this.$at$put$ = (function ($i, $el) {
				var self = this;
				var $adjusted = nil;
				$adjusted = $i + self.$startGap();
				if (!((0 < $i) && $adjusted.$$less$equal(self.$lastIndex()))) {
					self.$enclosingObjects$Collections$MutableArrayList[0].$error$("invalid index");
				} else {
					nil;
				};
				return self.$contents().$at$put$($adjusted, $el);
			});
			this.$with$ = (function ($el) {
				var self = this;
				self.$add$($el);
				return self;
			});
			this.$withAll$ = (function ($els) {
				var self = this;
				self.$addAll$($els);
				return self;
			});
			this.$asMutableArrayList = (function () {
				var self = this;
				return self;
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				var $oldLastIndex = nil;
				var $safeself = nil;
				var $copy = nil;
				$safeself = self;
				$oldLastIndex = self.$lastIndex();
				self.$lastIndex$($s + self.$startGap());
				$copy = $safeself.$copy();
				self.$lastIndex$($oldLastIndex);
				return $copy;
			});
			this.$collect$ = (function ($map) {
				var self = this;
				return self.$collectUsingAdd$($map).$asMutableArrayList();
			});
			this.$replaceFrom$to$with$startingAt$ = (function ($start, $stop, $other, $repStart) {
				var self = this;
				var $otheri = nil;
				if (!(($start >= 1) && $stop.$$less$equal(self.$size()))) {
					self.$enclosingObjects$Collections$MutableArrayList[0].$error$("range out of bounds");
				} else {
					nil;
				};
				self.$contents().$replaceFrom$to$with$startingAt$($start + self.$startGap(), $stop + self.$startGap(), $other, $repStart);
				return self;
			});
			this.$newCopyOfSize$thatCanAlsoHoldElementsOf$ = (function ($size, $other) {
				var self = this;
				return self.$enclosingObjects$Collections$MutableArrayList[0].$MutableArrayList().$new$($size).$size$($size);
			});
			this.$bottomToTopDo$ = (function ($blk) {
				var self = this;
				self.$do$($blk);
				return self;
			});
			this.$pop = (function () {
				var self = this;
				return self.$removeLast();
			});
			this.$push$ = (function ($el) {
				var self = this;
				self.$addLast$($el);
				return self;
			});
			this.$top = (function () {
				var self = this;
				return self.$last();
			});
			this.$topToBottomDo$ = (function ($blk) {
				var self = this;
				self.$reverseDo$($blk);
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`MutableArrayList";
					this.$superInit$Collections$MutableArrayList = $.$superInit$Collections$MutableArrayList;
					this.$instance$initializer = $.$instance$initializer;
					this.$add$ = $.$add$;
					this.$add$after$ = $.$add$after$;
					this.$add$afterIndex$ = $.$add$afterIndex$;
					this.$add$before$ = $.$add$before$;
					this.$add$beforeIndex$ = $.$add$beforeIndex$;
					this.$addAllFirst$ = $.$addAllFirst$;
					this.$addAllLast$ = $.$addAllLast$;
					this.$addFirst$ = $.$addFirst$;
					this.$addLast$ = $.$addLast$;
					this.$at$put$ = $.$at$put$;
					this.$with$ = $.$with$;
					this.$withAll$ = $.$withAll$;
					this.$asMutableArrayList = $.$asMutableArrayList;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$collect$ = $.$collect$;
					this.$replaceFrom$to$with$startingAt$ = $.$replaceFrom$to$with$startingAt$;
					this.$newCopyOfSize$thatCanAlsoHoldElementsOf$ = $.$newCopyOfSize$thatCanAlsoHoldElementsOf$;
					this.$bottomToTopDo$ = $.$bottomToTopDo$;
					this.$pop = $.$pop;
					this.$push$ = $.$push$;
					this.$top = $.$top;
					this.$topToBottomDo$ = $.$topToBottomDo$;
					this.$enclosingObjects$Collections$MutableArrayList = enclosingObjects;
					this.$super$Collections$MutableArrayList = runtimeSuperclass;
					this["Collections`MutableArrayList"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`MutableArrayList"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`MutableArrayList";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("defaultCapacity", false, "defaultCapacity ^<Int> = (\r	^5\r)"),
					new MM("new:", false, "new: capacity <Int> ^<Instance> = (\r	^new initCapacity: capacity\r)"),
					new MM("newWithSize:", false, "newWithSize: s <Int> ^<Instance> = (\r\r	(* create a new instance of size s with all elements undefined (nil).\r		This must be used very carefully, since each element should\r		be set using at:put: before accessing it; failure to do this can\r		lead to hard-to-debug crashes *)\r	^new initCapacity: s; size: s\r)"),
					new MM("with:", false, "with: val1 <E> ^<Instance> = (\r	^(new: 1) add: val1; yourself\r)"),
					new MM("withAll:", false, "withAll: cltn <Collection[E]> ^<Instance> = (\r	^(new: cltn size) addAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 5;
				});
				this.$new$ = (function ($capacity) {
					var self = this;
					return self.$new().$initCapacity$($capacity);
				});
				this.$newWithSize$ = (function ($s) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$initCapacity$($s);
						return cascadeReceiver.$size$($s);
					})(self.$new());
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$addAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`MutableArrayList";
						this.$new = $.$new;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$new$ = $.$new$;
						this.$newWithSize$ = $.$newWithSize$;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$MutableArrayList = enclosingObjects;
						this.$super$Collections$MutableArrayList = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$MutableHashedMap = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`MutableHashedMap";
			this.name = "Collections`MutableHashedMap";
			this.header = "MutableHashedMap new: cap = HashedCollection new: cap (\r(* MutableHashMaps are efficient HashedCollections that let you dynamically associate key->value\rpairs,  where the keys are matched using the #= message.  Equal keys must have equal #hash\rvalues. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`MutableHashedMap", true, "new: cap"),
				new MM("instance`initializer", true, "new: cap"),
				new MM("keys", false, "public keys ^<Set[K]> = (\r	| s <Set[K]> |\r	s:: Set new: size.\r	self keysDo: [:key <K> | s include: key ].\r	^s\r)"),
				new MM("values", false, "public values ^<MutableArrayList[V]> = (\r	^self inject: (MutableArrayList new: size) into:\r		[:oc <MutableArrayList[V]> :el <V> |\r			oc add: el; yourself  ]\r)"),
				new MM("at:put:", false, "public at: key <K> put: el <E> ^<E> = (\r	^at: key put: el ifNew: []\r)"),
				new MM("at:put:ifNew:", false, "protected at: key <K> put: el <E> ifNew: blk <[]> ^<E> = (\r	#BOGUS. (* Remove this method. *)\r	tableAt: key put: el ifNew: blk.\r	^el\r)"),
				new MM("at:ifAbsentPut:", false, "public at: key <K> ifAbsentPut: ablk <[V]> ^<V> = (\r	^self at: key ifPresent: [:e | e] ifAbsentPut: ablk\r)"),
				new MM("isDictionary", false, "public isDictionary ^<Boolean> = (\r	^true\r)"),
				new MM("associationAt:", false, "associationAt: key <K> ^<Assoc[K,E]> = (\r	^associationAt: key ifAbsent: [ error: 'key not found' ]\r)"),
				new MM("associationAt:ifAbsent:", false, "associationAt: key <K> ifAbsent: failBlock <[X def]> ^<Assoc[K,E] | X> = (\r	^valAt: key ifAbsent: failBlock\r)"),
				new MM("associations", false, "associations ^<MutableArrayList[Assoc[K,E]]> = (\r	| oc <MutableArrayList[Assoc[K,E]]> |\r\r	oc:: MutableArrayList new: size.\r	associationsDo:\r		[ :assoc <Assoc[K,E]> |\r			oc add: assoc	].\r	^oc\r)"),
				new MM("associationsDo:", false, "associationsDo: f <[:Assoc[K,E]]>\r = (\r	contentsDo:\r		[ :assoc <Assoc[K,E]> |\r			f value: assoc ]\r)"),
				new MM("includesAssociation:", false, "public includesAssociation: assoc <Assoc[K,Object]>  ^<Boolean> = (\r	^(at: assoc key ifAbsent: [ ^false ]) = assoc value\r)"),
				new MM("at:ifPresent:ifAbsentPut:", false, "public at: key <K> ifPresent: pblk <[:E]> ifAbsentPut: ablk <[E]> ^<E> = (\r\r	(* This is a method that is useful in the common case when you want\r		to find out if a key is present, and if it isn't, put an entry in for it.\r		It is much faster than a construct like (hc at: k ifAbsent: [ hc at: k put: e ])\r		for the case when a new entry must be added.\r		If the key is present, pblk is evaluated with the associated element.\r		If it is absent, then ablk is evaluated, and the value that it returns\r		is associated with k in the receiver.  In either case, the associated element\r		is returned. *)\r\r	| reusableSlot <Int> |\r	#BOGUS. (* Remove this method. *)\r	table == nil\r		ifTrue: [	createFirstTable.	 ].\r	^lookup: key\r				matchingSlotDo:\r						[ :index <Int> :assoc <VarAssoc[K,E]> |\r							| el <E> |\r							el:: assoc value.\r							pblk value: el.\r							el		]\r				emptySlotDo:\r						[ :index <Int> |\r							| newEl <E> |\r							newEl:: ablk value.\r							reusableSlot == nil\r								ifTrue: [ tableAt: key put: newEl inEmptySlot: index ]\r								ifFalse: [ tableAt: key put: newEl inDeletedSlot: reusableSlot ].\r							newEl	]\r				deletedSlotsDo:\r						[ :index <Int> |\r							reusableSlot == nil\r								ifTrue: [ reusableSlot:: index ].\r						]\r)"),
				new MM("keysAndValuesDo:", false, "public keysAndValuesDo: action <[:K :V]> = (\r	self contentsDo:\r		[:assoc <Association[K, V]> | action value: assoc key value: assoc value ]\r)"),
				new MM("tableAt:put:inMatchingSlot:value:", false, "protected tableAt: key <K>\rput: el <E>\rinMatchingSlot: index <Int>\rvalue: val <VarAssoc[K,E]>\r^<VarAssoc[K,E]> = (\r\r	val value: el.\r	^val\r)"),
				new MM("buildValForKey:element:", false, "protected buildValForKey: k <K> element: el <E> ^<VarAssoc[K,E]> = (\r	^Association key: k value: el\r)"),
				new MM("elementFor:", false, "protected elementFor: assoc <Assoc[K,E]> ^<E> = (\r	^assoc value\r)"),
				new MM("elementForCopy:", false, "protected elementForCopy: el <VarAssoc[K,E]> ^<VarAssoc[K,E]> = (\r	^el copy\r)"),
				new MM("hashFor:", false, "protected hashFor: key <Object> ^<Int> = (\r	^key hash\r)"),
				new MM("key:matches:", false, "protected key: k <Object> matches: another <Object> ^<Boolean> = (\r	^k = another\r)"),
				new MM("keyFor:", false, "protected keyFor: assoc <Association[K, V]> ^<K> = (\r	^assoc key\r)"),
				new MM("objToIncludeFor:withExisting:", false, "protected objToIncludeFor: newAssoc <VarAssoc[K,E]> withExisting: assoc <VarAssoc[K,E]> ^<VarAssoc[K,E]> = (\r	(* MutableHashMaps reuse the previous association *)\r	assoc value: newAssoc value.\r	^assoc\r)"),
				new MM("=", false, "public = other <Object> ^<Boolean> = (\r	^super = other and: [\r		self == other or: [\r			(* We already know that the other object must be a MutableHashedMap *)\r			self keys = other keys	]]\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$MutableHashedMap = (function ($cap) {
				var self = this;
				self.$super$Collections$MutableHashedMap.$instance$initializer.call(self, $cap);
				return self;
			});
			this.$instance$initializer = (function ($cap) {
				var self = this;
				self.$superInit$Collections$MutableHashedMap($cap);
				return self;
			});
			this.$keys = (function () {
				var self = this;
				var $s = nil;
				$s = self.$enclosingObjects$Collections$MutableHashedMap[0].$Set().$new$(self.$size());
				self.$keysDo$((function ($key) {
					return $s.$include$($key);
				}));
				return $s;
			});
			this.$values = (function () {
				var self = this;
				return self.$inject$into$(self.$enclosingObjects$Collections$MutableHashedMap[0].$MutableArrayList().$new$(self.$size()), (function ($oc, $el) {
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($el);
						return cascadeReceiver.$yourself();
					})($oc);
				}));
			});
			this.$at$put$ = (function ($key, $el) {
				var self = this;
				return self.$at$put$ifNew$($key, $el, (function () {
					return nil;
				}));
			});
			this.$at$put$ifNew$ = (function ($key, $el, $blk) {
				var self = this;
				"BOGUS";
				self.$tableAt$put$ifNew$($key, $el, $blk);
				return $el;
			});
			this.$at$ifAbsentPut$ = (function ($key, $ablk) {
				var self = this;
				return self.$at$ifPresent$ifAbsentPut$($key, (function ($e) {
					return $e;
				}), $ablk);
			});
			this.$isDictionary = (function () {
				var self = this;
				return true;
			});
			this.$associationAt$ = (function ($key) {
				var self = this;
				return self.$associationAt$ifAbsent$($key, (function () {
					return self.$enclosingObjects$Collections$MutableHashedMap[0].$error$("key not found");
				}));
			});
			this.$associationAt$ifAbsent$ = (function ($key, $failBlock) {
				var self = this;
				return self.$valAt$ifAbsent$($key, $failBlock);
			});
			this.$associations = (function () {
				var self = this;
				var $oc = nil;
				$oc = self.$enclosingObjects$Collections$MutableHashedMap[0].$MutableArrayList().$new$(self.$size());
				self.$associationsDo$((function ($assoc) {
					return $oc.$add$($assoc);
				}));
				return $oc;
			});
			this.$associationsDo$ = (function ($f) {
				var self = this;
				self.$contentsDo$((function ($assoc) {
					return $f.$value$($assoc);
				}));
				return self;
			});
			this.$includesAssociation$ = (function ($assoc) {
				var self = this;
				var NLR = new Object();
				try {
					return self.$at$ifAbsent$($assoc.$key(), (function () {
						{
							NLR.value = false;
							throw NLR;
						};
					})).$$equal($assoc.$value());
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$at$ifPresent$ifAbsentPut$ = (function ($key, $pblk, $ablk) {
				var self = this;
				var $reusableSlot = nil;
				"BOGUS";
				if (self.$table() === nil) {
					self.$createFirstTable();
				} else {
					nil;
				};
				return self.$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$($key, (function ($index, $assoc) {
					var $el = nil;
					$el = $assoc.$value();
					$pblk.$value$($el);
					return $el;
				}), (function ($index) {
					var $newEl = nil;
					$newEl = $ablk.$value();
					if ($reusableSlot === nil) {
						self.$tableAt$put$inEmptySlot$($key, $newEl, $index);
					} else {
						self.$tableAt$put$inDeletedSlot$($key, $newEl, $reusableSlot);
					};
					return $newEl;
				}), (function ($index) {
					return ($reusableSlot === nil).$ifTrue$((function () {
						return $reusableSlot = $index;
					}));
				}));
			});
			this.$keysAndValuesDo$ = (function ($action) {
				var self = this;
				self.$contentsDo$((function ($assoc) {
					return $action.$value$value$($assoc.$key(), $assoc.$value());
				}));
				return self;
			});
			this.$tableAt$put$inMatchingSlot$value$ = (function ($key, $el, $index, $val) {
				var self = this;
				$val.$value$($el);
				return $val;
			});
			this.$buildValForKey$element$ = (function ($k, $el) {
				var self = this;
				return self.$enclosingObjects$Collections$MutableHashedMap[0].$Association().$key$value$($k, $el);
			});
			this.$elementFor$ = (function ($assoc) {
				var self = this;
				return $assoc.$value();
			});
			this.$elementForCopy$ = (function ($el) {
				var self = this;
				return $el.$copy();
			});
			this.$hashFor$ = (function ($key) {
				var self = this;
				return $key.$hash();
			});
			this.$key$matches$ = (function ($k, $another) {
				var self = this;
				return $k.$$equal($another);
			});
			this.$keyFor$ = (function ($assoc) {
				var self = this;
				return $assoc.$key();
			});
			this.$objToIncludeFor$withExisting$ = (function ($newAssoc, $assoc) {
				var self = this;
				$assoc.$value$($newAssoc.$value());
				return $assoc;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return self.$super$Collections$MutableHashedMap.$$equal.call(self, $other) && ((self === $other) || self.$keys().$$equal($other.$keys()));
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`MutableHashedMap";
					this.$superInit$Collections$MutableHashedMap = $.$superInit$Collections$MutableHashedMap;
					this.$instance$initializer = $.$instance$initializer;
					this.$keys = $.$keys;
					this.$values = $.$values;
					this.$at$put$ = $.$at$put$;
					this.$at$put$ifNew$ = $.$at$put$ifNew$;
					this.$at$ifAbsentPut$ = $.$at$ifAbsentPut$;
					this.$isDictionary = $.$isDictionary;
					this.$associationAt$ = $.$associationAt$;
					this.$associationAt$ifAbsent$ = $.$associationAt$ifAbsent$;
					this.$associations = $.$associations;
					this.$associationsDo$ = $.$associationsDo$;
					this.$includesAssociation$ = $.$includesAssociation$;
					this.$at$ifPresent$ifAbsentPut$ = $.$at$ifPresent$ifAbsentPut$;
					this.$keysAndValuesDo$ = $.$keysAndValuesDo$;
					this.$tableAt$put$inMatchingSlot$value$ = $.$tableAt$put$inMatchingSlot$value$;
					this.$buildValForKey$element$ = $.$buildValForKey$element$;
					this.$elementFor$ = $.$elementFor$;
					this.$elementForCopy$ = $.$elementForCopy$;
					this.$hashFor$ = $.$hashFor$;
					this.$key$matches$ = $.$key$matches$;
					this.$keyFor$ = $.$keyFor$;
					this.$objToIncludeFor$withExisting$ = $.$objToIncludeFor$withExisting$;
					this.$$equal = $.$$equal;
					this.$enclosingObjects$Collections$MutableHashedMap = enclosingObjects;
					this.$super$Collections$MutableHashedMap = runtimeSuperclass;
					this["Collections`MutableHashedMap"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`MutableHashedMap"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`MutableHashedMap";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("defaultCapacity", false, "defaultCapacity ^<Integer> = (\r	^0\r)"),
					new MM("new", false, "public new = (\r	^self new: defaultCapacity\r)"),
					new MM("with:", false, "public with: val1 <A> ^<Instance> = (\r	^(self new: 1) include: val1; yourself\r)"),
					new MM("withAll:", false, "public withAll: cltn <Collection[A]> ^<Instance> = (\r	^(self new: cltn size) includeAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($cap) {
					return (new this.nonMeta.basicNew()).$instance$initializer($cap);
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 0;
				});
				this.$new = (function () {
					var self = this;
					return self.$new$(self.$defaultCapacity());
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$include$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$includeAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`MutableHashedMap";
						this.$new$ = $.$new$;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$new = $.$new;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$MutableHashedMap = enclosingObjects;
						this.$super$Collections$MutableHashedMap = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$MutableList = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`MutableList";
			this.name = "Collections`MutableList";
			this.header = "MutableList = List (\r(* This class extends List[E] with mutation operations defined in terms of #at:put:. \rThe List[E] protocol is defined from this class' interface. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`MutableList", true, "List"),
				new MM("instance`initializer", true, "List"),
				new MM("at:put:", false, "at: index <Int> put: el <E> ^<E> = (\r	self subclassResponsibility\r)"),
				new MM("atAll:put:", false, "atAll: indices <Collection[Int]> put: val <E> = (\r\r	indices do:\r		[ :i <Int> |\r			at: i put: val		].\r)"),
				new MM("atAllPut:", false, "atAllPut: val <E> = (\r\r	1 to: size do:\r		[ :i <Int> |\r			at: i put: val		].\r)"),
				new MM("defaultMedianOf:and:and:", false, "defaultMedianOf: a <Int> and: b <Int> and: c <Int> ^<Int> = (\r\r\r	(* This is an untypesafe method that only works for MutableLists of elements that\r		have Magnitude relationships with each other.  It is used by the default sorting\r		method. *)\r\r	| atA <E> atB <E> atC <E> |\r	atA:: at: a.\r	atB:: at: b.\r	atC:: at: c.\r	^ atB <= atA\r		ifFalse: [ atC <= atB\r							ifFalse:[ b ]\r							ifTrue: [	 atC <= atA\r												ifFalse: [ c ]\r												ifTrue: [ a ] 	] ]\r		ifTrue: [ atB <= atC\r							ifFalse:[ b ]\r							ifTrue: [	 atA <= atC\r												ifFalse: [ c ]\r												ifTrue: [ a ] 	] ]\r\r)"),
				new MM("medianOf:and:and:using:", false, "medianOf: a <Int> and: b <Int> and: c <Int> using: compare <[:E:E| Boolean]> ^<Int> = (\r\r\r	| atA <E> atB <E> atC <E> |\r	atA:: at: a.\r	atB:: at: b.\r	atC:: at: c.\r	^(compare value: atB value: atA)\r		ifFalse: [	(compare value: atC value: atB)\r							ifFalse:[ b ]\r							ifTrue: [	(compare value: atC value: atA)\r												ifFalse: [ c ]\r												ifTrue: [ a ] 	] ]\r		ifTrue: [	(compare value: atB value: atC)\r							ifFalse:[ b ]\r							ifTrue: [	(compare value: atA value: atC)\r												ifFalse: [ c ]\r												ifTrue: [ a ] 	] ]\r\r)"),
				new MM("swap:with:", false, "swap: i <Int> with: j <Int>\r = (\r	| t <E> |\r	t:: at: i.\r	at: i put: (at: j).\r	at: j put: t.\r)"),
				new MM("swap:with:count:", false, "swap: i1 <Int> with: i2 <Int> count: n <Int>\r = (\r\r	| c <Int> |\r	c:: 0.\r	[ c < n ]\r		whileTrue: \r			[	swap: i1 + c with: i2 + c.\r				c:: c + 1.		]\r)"),
				new MM("replaceFrom:to:with:", false, "replaceFrom: start <Int>\rto: stop <Int>\rwith: other <List[E]>\r = (\r\r	(* replace the elements of the receiver from start to stop with elements from other,\r	  starting with the first element of other. *)\r\r	^replaceFrom: start to: stop with: other startingAt: 1\r)"),
				new MM("replaceFrom:to:with:startingAt:", false, "replaceFrom: start <Int>\rto: stop <Int>\rwith: other <List[E]>\rstartingAt: repStart <Int>\r = (\r\r	(* replace the elements of the receiver from start to stop with elements from other,\r	  starting with the element of other with index repStart. *)\r\r	| otheri <Int> |\r\r	repStart < start\r		ifFalse: [ otheri:: repStart.\r				  start to: stop do:\r					[ :i <Int> |\r						at: i put: (other at: otheri).\r						otheri:: otheri + 1.	]]\r		ifTrue: [ otheri:: repStart + (stop - start).\r				stop to: start by: -1 do:\r					[ :i <Int> |\r						at: i put: (other at: otheri).\r						otheri:: otheri - 1.	]]\r)"),
				new MM("readWriteStream", false, "readWriteStream ^<ReadWriteStream[E]> = (\r    ^ListReadWriteStream(* [E] *) on: self\r)"),
				new MM("writeStream", false, "writeStream ^<WriteStream[E]> = (\r    ^readWriteStream\r)"),
				new MM("defaultSort:to:", false, "defaultSort: l <Int> to: r <Int>\r = (\r	(* This is an untypesafe method that only works for MutableLists of elements that\r		have Magnitude relationships with each other *)\r\r	| i <Int> j <Int> x <E> m <Int> n <Int> |\r	i:: l.\r	j:: r.\r	n:: ((r - l) + 1).\r	n == 0\r		ifTrue: [ ^self ].\r\r	(* Pick the partition value.  For <=7 elements, use the middle element.\r		For more than 7 but <= 40, use a median of three elements.  For > 40,\r		use a median of three medians of three *)\r	m:: (l + r) // 2.\r	n > 7\r		ifTrue: [	| pl <Int> pn <Int> s <Int> |\r						pl:: l.\r						pn:: r.\r						n > 40\r							ifTrue: [	s::  n // 8.\r											pl:: defaultMedianOf: pl and: pl+s and: pl+s+s.\r											m:: defaultMedianOf: m-s and: m and: m+s.\r											pn:: defaultMedianOf: (pn-s)-s and: pn-s and: pn.	].\r						m:: defaultMedianOf: pl and: m and: pn.		].\r	x:: at: m.\r\r	[i <= j]\r		whileTrue: \r			[	| ati <E> atj <E> |\r			 	[ x <= (ati:: at: i)]\r					whileFalse: [i:: i + 1].\r				[(atj:: at: j) <=  x]\r					whileFalse: [j:: j - 1].\r				i <= j\r					ifTrue: [	at: i put: atj.\r									at: j put: ati.\r									i:: i + 1.\r									j:: j - 1.	]\r			].\r	l < j ifTrue: [defaultSort: l to: j ].\r	i < r ifTrue: [defaultSort: i to: r ].\r)"),
				new MM("sort:to:using:", false, "sort: l <Int> to: r <Int> using: compare <[:E:E| Boolean]>\r = (\r\r	| i <Int> j <Int> x <E> m <Int> n <Int> |\r	i:: l.\r	j:: r.\r	n:: ((r - l) + 1).\r	n == 0\r		ifTrue: [ ^self ].\r\r	(* Pick the partition value.  For <=7 elements, use the middle element.\r		For more than 7 but <= 40, use a median of three elements.  For > 40,\r		use a median of three medians of three *)\r	m:: (l + r) // 2.\r	n > 7\r		ifTrue: [	| pl <Int> pn <Int> s <Int> |\r						pl:: l.\r						pn:: r.\r						n > 40\r							ifTrue: [	s::  n // 8.\r											pl:: medianOf: pl and: pl+s and: pl+s+s using: compare.\r											m:: medianOf: m-s and: m and: m+s using: compare.\r											pn:: medianOf: (pn-s)-s and: pn-s and: pn using: compare.	].\r						m:: medianOf: pl and: m and: pn using: compare.		].\r	x:: at: m.\r\r	[i <= j]\r		whileTrue: \r			[	| ati <E> atj <E> |\r			 	[compare value: x value: (ati:: at: i)]\r					whileFalse: [i:: i + 1].\r				[compare value: (atj:: at: j) value: x]\r					whileFalse: [j:: j - 1].\r				i <= j\r					ifTrue: [	at: i put: atj.\r									at: j put: ati.\r									i:: i + 1.\r									j:: j - 1.	]\r			].\r	l < j ifTrue: [self sort: l to: j using: compare].\r	i < r ifTrue: [self sort: i to: r using: compare].\r)"),
				new MM("sortUsing:", false, "sortUsing: compare <[:E:E| Boolean]>\r = (\r	(* Sort the elements of the collection using the specified comparison test, which must return true if\r	  its first argument should not appear after its second argument (e.g. <=).   This is handy when you\r	  want to sort an existing collection, rather than create a new SortedList, or if you need to\r	  perform a number of changes without sorting, and then resort explicitly.  Note that this does NOT\r	  cause the receiver to stay sorted after later changes, unlike a SortedList. *)\r\r	sort: 1 to: size using: compare\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$MutableList = (function () {
				var self = this;
				self.$super$Collections$MutableList.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$MutableList();
				return self;
			});
			this.$at$put$ = (function ($index, $el) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$atAll$put$ = (function ($indices, $val) {
				var self = this;
				$indices.$do$((function ($i) {
					return self.$at$put$($i, $val);
				}));
				return self;
			});
			this.$atAllPut$ = (function ($val) {
				var self = this;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						self.$at$put$($i, $val);
						$i = (1).$$plus($i);
					};
				};
				return self;
			});
			this.$defaultMedianOf$and$and$ = (function ($a, $b, $c) {
				var self = this;
				var $atA = nil;
				var $atB = nil;
				var $atC = nil;
				$atA = self.$at$($a);
				$atB = self.$at$($b);
				$atC = self.$at$($c);
				return $atB.$$less$equal($atA).$ifFalse$ifTrue$((function () {
					return $atC.$$less$equal($atB).$ifFalse$ifTrue$((function () {
						return $b;
					}), (function () {
						return $atC.$$less$equal($atA).$ifFalse$ifTrue$((function () {
							return $c;
						}), (function () {
							return $a;
						}));
					}));
				}), (function () {
					return $atB.$$less$equal($atC).$ifFalse$ifTrue$((function () {
						return $b;
					}), (function () {
						return $atA.$$less$equal($atC).$ifFalse$ifTrue$((function () {
							return $c;
						}), (function () {
							return $a;
						}));
					}));
				}));
			});
			this.$medianOf$and$and$using$ = (function ($a, $b, $c, $compare) {
				var self = this;
				var $atA = nil;
				var $atB = nil;
				var $atC = nil;
				$atA = self.$at$($a);
				$atB = self.$at$($b);
				$atC = self.$at$($c);
				return $compare.$value$value$($atB, $atA).$ifFalse$ifTrue$((function () {
					return $compare.$value$value$($atC, $atB).$ifFalse$ifTrue$((function () {
						return $b;
					}), (function () {
						return $compare.$value$value$($atC, $atA).$ifFalse$ifTrue$((function () {
							return $c;
						}), (function () {
							return $a;
						}));
					}));
				}), (function () {
					return $compare.$value$value$($atB, $atC).$ifFalse$ifTrue$((function () {
						return $b;
					}), (function () {
						return $compare.$value$value$($atA, $atC).$ifFalse$ifTrue$((function () {
							return $c;
						}), (function () {
							return $a;
						}));
					}));
				}));
			});
			this.$swap$with$ = (function ($i, $j) {
				var self = this;
				var $t = nil;
				$t = self.$at$($i);
				self.$at$put$($i, self.$at$($j));
				self.$at$put$($j, $t);
				return self;
			});
			this.$swap$with$count$ = (function ($i1, $i2, $n) {
				var self = this;
				var $c = nil;
				$c = 0;
				{
					nil;
					for (; $c.$$less($n); ) {
						self.$swap$with$($i1 + $c, $i2 + $c);
						$c = $c + 1;
					};
				};
				return self;
			});
			this.$replaceFrom$to$with$ = (function ($start, $stop, $other) {
				var self = this;
				return self.$replaceFrom$to$with$startingAt$($start, $stop, $other, 1);
			});
			this.$replaceFrom$to$with$startingAt$ = (function ($start, $stop, $other, $repStart) {
				var self = this;
				var $otheri = nil;
				if (!$repStart.$$less($start)) {
					$otheri = $repStart;
					{
						var $$limit = nil;
						var $i = nil;
						nil;
						$i = $start;
						$$limit = $stop;
						for (; $$limit.$$greater$equal($i); ) {
							self.$at$put$($i, $other.$at$($otheri));
							$otheri = $otheri + 1;
							$i = (1).$$plus($i);
						};
					};
				} else {
					$otheri = $repStart + ($stop - $start);
					{
						var $$limit = nil;
						var $i = nil;
						nil;
						$i = $stop;
						$$limit = $start;
						for (; $$limit.$$less$equal($i); ) {
							self.$at$put$($i, $other.$at$($otheri));
							$otheri = $otheri - 1;
							$i = (-1).$$plus($i);
						};
					};
				};
				return self;
			});
			this.$readWriteStream = (function () {
				var self = this;
				return self.$enclosingObjects$Collections$MutableList[0].$ListReadWriteStream().$on$(self);
			});
			this.$writeStream = (function () {
				var self = this;
				return self.$readWriteStream();
			});
			this.$defaultSort$to$ = (function ($l, $r) {
				var self = this;
				var $i = nil;
				var $j = nil;
				var $x = nil;
				var $m = nil;
				var $n = nil;
				$i = $l;
				$j = $r;
				$n = ($r - $l) + 1;
				if ($n === 0) {
					return self;
				} else {
					nil;
				};
				$m = ($l + $r).$$over$over(2);
				if ($n > 7) {
					var $pl = nil;
					var $pn = nil;
					var $s = nil;
					$pl = $l;
					$pn = $r;
					if ($n > 40) {
						$s = $n.$$over$over(8);
						$pl = self.$defaultMedianOf$and$and$($pl, $pl + $s, ($pl + $s) + $s);
						$m = self.$defaultMedianOf$and$and$($m - $s, $m, $m + $s);
						$pn = self.$defaultMedianOf$and$and$(($pn - $s) - $s, $pn - $s, $pn);
					} else {
						nil;
					};
					$m = self.$defaultMedianOf$and$and$($pl, $m, $pn);
				} else {
					nil;
				};
				$x = self.$at$($m);
				{
					nil;
					for (; $i.$$less$equal($j); ) {
						var $ati = nil;
						var $atj = nil;
						{
							nil;
							for (; !$x.$$less$equal($ati = self.$at$($i)); ) {
								$i = $i + 1;
							};
						};
						{
							nil;
							for (; !($atj = self.$at$($j)).$$less$equal($x); ) {
								$j = $j - 1;
							};
						};
						if ($i.$$less$equal($j)) {
							self.$at$put$($i, $atj);
							self.$at$put$($j, $ati);
							$i = $i + 1;
							$j = $j - 1;
						} else {
							nil;
						};
					};
				};
				if ($l.$$less($j)) {
					self.$defaultSort$to$($l, $j);
				} else {
					nil;
				};
				if ($i.$$less($r)) {
					self.$defaultSort$to$($i, $r);
				} else {
					nil;
				};
				return self;
			});
			this.$sort$to$using$ = (function ($l, $r, $compare) {
				var self = this;
				var $i = nil;
				var $j = nil;
				var $x = nil;
				var $m = nil;
				var $n = nil;
				$i = $l;
				$j = $r;
				$n = ($r - $l) + 1;
				if ($n === 0) {
					return self;
				} else {
					nil;
				};
				$m = ($l + $r).$$over$over(2);
				if ($n > 7) {
					var $pl = nil;
					var $pn = nil;
					var $s = nil;
					$pl = $l;
					$pn = $r;
					if ($n > 40) {
						$s = $n.$$over$over(8);
						$pl = self.$medianOf$and$and$using$($pl, $pl + $s, ($pl + $s) + $s, $compare);
						$m = self.$medianOf$and$and$using$($m - $s, $m, $m + $s, $compare);
						$pn = self.$medianOf$and$and$using$(($pn - $s) - $s, $pn - $s, $pn, $compare);
					} else {
						nil;
					};
					$m = self.$medianOf$and$and$using$($pl, $m, $pn, $compare);
				} else {
					nil;
				};
				$x = self.$at$($m);
				{
					nil;
					for (; $i.$$less$equal($j); ) {
						var $ati = nil;
						var $atj = nil;
						{
							nil;
							for (; !$compare.$value$value$($x, $ati = self.$at$($i)); ) {
								$i = $i + 1;
							};
						};
						{
							nil;
							for (; !$compare.$value$value$($atj = self.$at$($j), $x); ) {
								$j = $j - 1;
							};
						};
						if ($i.$$less$equal($j)) {
							self.$at$put$($i, $atj);
							self.$at$put$($j, $ati);
							$i = $i + 1;
							$j = $j - 1;
						} else {
							nil;
						};
					};
				};
				if ($l.$$less($j)) {
					self.$sort$to$using$($l, $j, $compare);
				} else {
					nil;
				};
				if ($i.$$less($r)) {
					self.$sort$to$using$($i, $r, $compare);
				} else {
					nil;
				};
				return self;
			});
			this.$sortUsing$ = (function ($compare) {
				var self = this;
				self.$sort$to$using$(1, self.$size(), $compare);
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`MutableList";
					this.$superInit$Collections$MutableList = $.$superInit$Collections$MutableList;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$put$ = $.$at$put$;
					this.$atAll$put$ = $.$atAll$put$;
					this.$atAllPut$ = $.$atAllPut$;
					this.$defaultMedianOf$and$and$ = $.$defaultMedianOf$and$and$;
					this.$medianOf$and$and$using$ = $.$medianOf$and$and$using$;
					this.$swap$with$ = $.$swap$with$;
					this.$swap$with$count$ = $.$swap$with$count$;
					this.$replaceFrom$to$with$ = $.$replaceFrom$to$with$;
					this.$replaceFrom$to$with$startingAt$ = $.$replaceFrom$to$with$startingAt$;
					this.$readWriteStream = $.$readWriteStream;
					this.$writeStream = $.$writeStream;
					this.$defaultSort$to$ = $.$defaultSort$to$;
					this.$sort$to$using$ = $.$sort$to$using$;
					this.$sortUsing$ = $.$sortUsing$;
					this.$enclosingObjects$Collections$MutableList = enclosingObjects;
					this.$super$Collections$MutableList = runtimeSuperclass;
					this["Collections`MutableList"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`MutableList"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`MutableList";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`MutableList";
						this.$new = $.$new;
						this.$enclosingObjects$Collections$MutableList = enclosingObjects;
						this.$super$Collections$MutableList = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Queue = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Queue";
			this.name = "Collections`Queue";
			this.header = "Queue = IOSequence (\r(* The Queue class of collections. . *)|\r	private head <DoubleLink[E]>\r	private tail <DoubleLink[E]>\r	private actualSize <Int> ::= 0.\r|)";
			this.slots = [
				new SM("head", true, false),
				new SM("tail", true, false),
				new SM("actualSize", true, false),
				new SM("Collections`Queue`DoubleLink", true, true)
			];
			this.methods = [
				new MM("superInit`Collections`Queue", true, "IOSequence"),
				new MM("instance`initializer", true, "IOSequence"),
				new MM("at:", false, "at: index <Int> ^<E> = (\r	^havePeeked\r		ifFalse: [ (linkAt: index) value ]\r		ifTrue: [ index = 1\r						ifFalse: [ (linkAt: index - 1) value ]\r						ifTrue: [ peekVal ]\r					]\r)"),
				new MM("at:put:", false, "at: index <Int> put: el <E>  ^<E> = (\r	havePeeked\r		ifFalse: [ (linkAt: index) value: el ]\r		ifTrue: [ index = 1\r						ifFalse: [ (linkAt: index - 1) value: el ]\r						ifTrue: [ peekVal: el ]\r					].\r	^el\r)"),
				new MM("nextPut:", false, "nextPut: el <E> ^<E> = (\r	| l <DoubleLink[E]> |\r	l:: DoubleLink(* [E] *) new value: el.\r	tail isNil\r		ifFalse: [	tail next: l.\r						l prev: tail.	]\r		ifTrue: [ head: l ].\r	tail: l.\r	actualSize: actualSize + 1.\r	^el\r)"),
				new MM("size", false, "size ^<Int> = (\r	^havePeeked\r		ifFalse: [ actualSize ]\r		ifTrue: [ actualSize + 1 ]\r)"),
				new MM("assert:", false, "assert: value = (\r	\r)"),
				new MM("checkValidity", false, "checkValidity\r = (\r\r	| c <Int> l <DoubleLink[E]> peekCount <Int> |\r	peekCount:: havePeeked ifTrue: [ 1 ] ifFalse: [ 0 ].\r	l:: head.\r	l isNil\r		ifTrue: [ assert: [ size = peekCount and: [ tail isNil ] ] message: ''.\r						^self ].\r	assert: [l prev isNil] message: ''.\r\r	c:: 1.\r	[ l next isNil ]\r		whileFalse: [	| next <DoubleLink[E]> |\r								next:: l next.\r								assert: [ next prev == l ] message: ''.\r								l:: next.\r								c:: c + 1 ].\r	assert: [tail == l] message: ''.\r	assert: [(c + peekCount) = size ] message: ''.\r)"),
				new MM("copyWithSize:", false, "copyWithSize: s <Int> ^<MutableList[EX]> = (\r	(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* The guarantee is safe because of the inference clause *)\r	^(Array(* [EX] *) new: s) replaceFrom: 1 to: (size min: s) with: ((* guaranteed <List[EX]> *) self)	\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^<Boolean> = (\r	^head isNil\r)"),
				new MM("actualNext", false, "actualNext ^<E> = (\r\r	| l <DoubleLink[E]> |\r	l:: head.\r	head: l next.\r	head isNil\r		ifTrue: [ tail: head ].\r	actualSize: actualSize - 1.\r	^l value\r)"),
				new MM("linkAt:", false, "linkAt: index <Int> ^<DoubleLink[E]> = (\r\r	| i <Int> next <DoubleLink[E]> |\r	i:: 1.\r	next:: head.\r	[ i < index ]\r		whileTrue: [ next:: next next.\r								i:: i + 1. ].\r	^next\r)"),
				new MM("linkHolding:", false, "linkHolding: el <E> ^<DoubleLink[E]> = (\r\r	(* return the link holding el.  Note that an element can be in the peek buffer as well as in \r		a link, so this can't be done for all queue elements *)\r\r	| next <DoubleLink[E]> |\r	next:: head.\r	[ next value = el ]\r		whileFalse: [ next:: next next ].\r	^next\r)"),
				new MM("removeLink:", false, "removeLink: l <DoubleLink[E]>\r = (\r	(* remove the link holding el.  Note that an element can be in the peek buffer as well as in \r		a link, so this can't be done for all queue elements *)\r\r	l == head\r		ifTrue: [ head: l next ]\r		ifFalse: [ l prev next: l next ].\r	l == tail\r		ifTrue: [ tail: l prev ]\r		ifFalse: [ l next prev: l prev ].\r	actualSize: actualSize - 1.\r)"),
				new MM("remove:", false, "remove: el <E> ^<E> = (\r	(havePeeked and: [ peekVal = el ])\r		ifTrue: [	next.	]\r		ifFalse: [ removeLink: (linkHolding: el) ].\r	^el\r)"),
				new MM("DoubleLink", true, null),
				new MM("head", true, null),
				new MM("head:", true, null),
				new MM("tail", true, null),
				new MM("tail:", true, null),
				new MM("actualSize", true, null),
				new MM("actualSize:", true, null),
				new MM("Collections`Queue`DoubleLink", true, null),
				new MM("Collections`Queue`DoubleLink:", true, null)
			];
			this.nestedClasses = ["Collections`Queue`DoubleLink"];
			this.applications = [];
			this.$superInit$Collections$Queue = (function () {
				var self = this;
				self.$super$Collections$Queue.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$Queue();
				self.$actualSize$(0);
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				return self.$havePeeked().$ifFalse$ifTrue$((function () {
					return self.$linkAt$($index).$value();
				}), (function () {
					return $index.$$equal(1).$ifFalse$ifTrue$((function () {
						return self.$linkAt$($index - 1).$value();
					}), (function () {
						return self.$peekVal();
					}));
				}));
			});
			this.$at$put$ = (function ($index, $el) {
				var self = this;
				if (!self.$havePeeked()) {
					self.$linkAt$($index).$value$($el);
				} else {
					if (!$index.$$equal(1)) {
						self.$linkAt$($index - 1).$value$($el);
					} else {
						self.$peekVal$($el);
					};
				};
				return $el;
			});
			this.$nextPut$ = (function ($el) {
				var self = this;
				var $l = nil;
				$l = self.$DoubleLink().$new().$value$($el);
				if (!self.$tail().$isNil()) {
					self.$tail().$next$($l);
					$l.$prev$(self.$tail());
				} else {
					self.$head$($l);
				};
				self.$tail$($l);
				self.$actualSize$(self.$actualSize() + 1);
				return $el;
			});
			this.$size = (function () {
				var self = this;
				return self.$havePeeked().$ifFalse$ifTrue$((function () {
					return self.$actualSize();
				}), (function () {
					return self.$actualSize() + 1;
				}));
			});
			this.$assert$ = (function ($value) {
				var self = this;
				return self;
			});
			this.$checkValidity = (function () {
				var self = this;
				var $c = nil;
				var $l = nil;
				var $peekCount = nil;
				$peekCount = self.$havePeeked().$ifTrue$ifFalse$((function () {
					return 1;
				}), (function () {
					return 0;
				}));
				$l = self.$head();
				if ($l.$isNil()) {
					self.$assert$message$((function () {
						return self.$size().$$equal($peekCount) && self.$tail().$isNil();
					}), "");
					return self;
				} else {
					nil;
				};
				self.$assert$message$((function () {
					return $l.$prev().$isNil();
				}), "");
				$c = 1;
				{
					nil;
					for (; !$l.$next().$isNil(); ) {
						var $next = nil;
						$next = $l.$next();
						self.$assert$message$((function () {
							return $next.$prev() === $l;
						}), "");
						$l = $next;
						$c = $c + 1;
					};
				};
				self.$assert$message$((function () {
					return self.$tail() === $l;
				}), "");
				self.$assert$message$((function () {
					return ($c + $peekCount).$$equal(self.$size());
				}), "");
				return self;
			});
			this.$copyWithSize$ = (function ($s) {
				var self = this;
				return self.$Array().$new$($s).$replaceFrom$to$with$(1, self.$size().$min$($s), self);
			});
			this.$actualAtEnd = (function () {
				var self = this;
				return self.$head().$isNil();
			});
			this.$actualNext = (function () {
				var self = this;
				var $l = nil;
				$l = self.$head();
				self.$head$($l.$next());
				if (self.$head().$isNil()) {
					self.$tail$(self.$head());
				} else {
					nil;
				};
				self.$actualSize$(self.$actualSize() - 1);
				return $l.$value();
			});
			this.$linkAt$ = (function ($index) {
				var self = this;
				var $i = nil;
				var $next = nil;
				$i = 1;
				$next = self.$head();
				{
					nil;
					for (; $i.$$less($index); ) {
						$next = $next.$next();
						$i = $i + 1;
					};
				};
				return $next;
			});
			this.$linkHolding$ = (function ($el) {
				var self = this;
				var $next = nil;
				$next = self.$head();
				{
					nil;
					for (; !$next.$value().$$equal($el); ) {
						$next = $next.$next();
					};
				};
				return $next;
			});
			this.$removeLink$ = (function ($l) {
				var self = this;
				if ($l === self.$head()) {
					self.$head$($l.$next());
				} else {
					$l.$prev().$next$($l.$next());
				};
				if ($l === self.$tail()) {
					self.$tail$($l.$prev());
				} else {
					$l.$next().$prev$($l.$prev());
				};
				self.$actualSize$(self.$actualSize() - 1);
				return self;
			});
			this.$remove$ = (function ($el) {
				var self = this;
				if (self.$havePeeked() && self.$peekVal().$$equal($el)) {
					self.$next();
				} else {
					self.$removeLink$(self.$linkHolding$($el));
				};
				return $el;
			});
			this.$DoubleLink = (function () {
				if (nil === this.$Collections$Queue$DoubleLink$slot) {
					var self = this;
					var superclass = self.$Object();
					var enclosingObjects = ([this]).concat(this.$enclosingObjects$Collections$Queue);
					var mixin = this.$Collections$Queue$DoubleLink;
					this.$Collections$Queue$DoubleLink$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
				};
				return this.$Collections$Queue$DoubleLink$slot;
			});
			this.$head = (function () {
				return this.$head$slot;
			});
			this.$head$ = (function (v) {
				this.$head$slot = v;
				return this;
			});
			this.$tail = (function () {
				return this.$tail$slot;
			});
			this.$tail$ = (function (v) {
				this.$tail$slot = v;
				return this;
			});
			this.$actualSize = (function () {
				return this.$actualSize$slot;
			});
			this.$actualSize$ = (function (v) {
				this.$actualSize$slot = v;
				return this;
			});
			this.$Collections$Queue$DoubleLink = (function () {
				return this.$Collections$Queue$DoubleLink$slot;
			});
			this.$Collections$Queue$DoubleLink$ = (function (v) {
				this.$Collections$Queue$DoubleLink$slot = v;
				return this;
			});
			this.$Collections$Queue$DoubleLink = new (function () {
				var $ = this;
				this.debug = "Runtime mixin for Collections`Queue`DoubleLink";
				this.name = "Collections`Queue`DoubleLink";
				this.header = "DoubleLink = (|\r	prev <DoubleLink[T]>\r	value <T>\r	next <DoubleLink[T]>\r|)";
				this.slots = [
					new SM("prev", true, false),
					new SM("value", true, false),
					new SM("next", true, false)
				];
				this.methods = [
					new MM("superInit`Collections`Queue`DoubleLink", true, " "),
					new MM("instance`initializer", true, " "),
					new MM("prev", true, null),
					new MM("prev:", true, null),
					new MM("value", true, null),
					new MM("value:", true, null),
					new MM("next", true, null),
					new MM("next:", true, null)
				];
				this.nestedClasses = [];
				this.applications = [];
				this.$superInit$Collections$Queue$DoubleLink = (function () {
					var self = this;
					self.$super$Collections$Queue$DoubleLink.$instance$initializer.call(self);
					return self;
				});
				this.$instance$initializer = (function () {
					var self = this;
					self.$superInit$Collections$Queue$DoubleLink();
					return self;
				});
				this.$prev = (function () {
					return this.$prev$slot;
				});
				this.$prev$ = (function (v) {
					this.$prev$slot = v;
					return this;
				});
				this.$value = (function () {
					return this.$value$slot;
				});
				this.$value$ = (function (v) {
					this.$value$slot = v;
					return this;
				});
				this.$next = (function () {
					return this.$next$slot;
				});
				this.$next$ = (function (v) {
					this.$next$slot = v;
					return this;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime class for Collections`Queue`DoubleLink";
						this.$superInit$Collections$Queue$DoubleLink = $.$superInit$Collections$Queue$DoubleLink;
						this.$instance$initializer = $.$instance$initializer;
						this.$prev = $.$prev;
						this.$prev$ = $.$prev$;
						this.$value = $.$value;
						this.$value$ = $.$value$;
						this.$next = $.$next;
						this.$next$ = $.$next$;
						this.$enclosingObjects$Collections$Queue$DoubleLink = enclosingObjects;
						this.$super$Collections$Queue$DoubleLink = runtimeSuperclass;
						this["Collections`Queue`DoubleLink"] = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
							this.$prev$slot = nil;
							this.$value$slot = nil;
							this.$next$slot = nil;
						});
						this.basicNew = this["Collections`Queue`DoubleLink"];
						this.basicNew.prototype = this;
						this.meta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
				this.meta = new (function () {
					var $ = this;
					this.debug = "Runtime meta mixin for Collections`Queue`DoubleLink";
					this.slots = [];
					this.methods = [new MM("new", true, null)];
					this.nestedClasses = [];
					this.$new = (function () {
						return (new this.nonMeta.basicNew()).$instance$initializer();
					});
					this.invoke = (function (runtimeSuperclass, enclosingObjects) {
						function constructRuntimeClass (superBasicNew) {
							this.debug = "Runtime meta class for Collections`Queue`DoubleLink";
							this.$new = $.$new;
							this.$enclosingObjects$Collections$Queue$DoubleLink = enclosingObjects;
							this.$super$Collections$Queue$DoubleLink = runtimeSuperclass;
							this.basicNew = (function () {
								superBasicNew.call(this);
								this.hashCode = 0;
							});
							this.basicNew.prototype = this;
							this.nonMeta = null;
							this.newspeakClass = null;
						};
						constructRuntimeClass.prototype = runtimeSuperclass;
						return new constructRuntimeClass(runtimeSuperclass.basicNew);
					});
				})();
				this.meta.nonMeta = this;
			})();
			this.$Collections$Queue$DoubleLink.enclosingMixin = this;
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Queue";
					this.$superInit$Collections$Queue = $.$superInit$Collections$Queue;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$at$put$ = $.$at$put$;
					this.$nextPut$ = $.$nextPut$;
					this.$size = $.$size;
					this.$assert$ = $.$assert$;
					this.$checkValidity = $.$checkValidity;
					this.$copyWithSize$ = $.$copyWithSize$;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualNext = $.$actualNext;
					this.$linkAt$ = $.$linkAt$;
					this.$linkHolding$ = $.$linkHolding$;
					this.$removeLink$ = $.$removeLink$;
					this.$remove$ = $.$remove$;
					this.$DoubleLink = $.$DoubleLink;
					this.$head = $.$head;
					this.$head$ = $.$head$;
					this.$tail = $.$tail;
					this.$tail$ = $.$tail$;
					this.$actualSize = $.$actualSize;
					this.$actualSize$ = $.$actualSize$;
					this.$Collections$Queue$DoubleLink = $.$Collections$Queue$DoubleLink;
					this.$Collections$Queue$DoubleLink$ = $.$Collections$Queue$DoubleLink$;
					this.$enclosingObjects$Collections$Queue = enclosingObjects;
					this.$super$Collections$Queue = runtimeSuperclass;
					this["Collections`Queue"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$head$slot = nil;
						this.$tail$slot = nil;
						this.$actualSize$slot = nil;
						this.$Collections$Queue$DoubleLink$slot = nil;
					});
					this.basicNew = this["Collections`Queue"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Queue";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Queue";
						this.$new = $.$new;
						this.$enclosingObjects$Collections$Queue = enclosingObjects;
						this.$super$Collections$Queue = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$Set = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`Set";
			this.name = "Collections`Set";
			this.header = "Set new: cap = HashedCollection new: cap ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`Collections`Set", true, "new: cap"),
				new MM("instance`initializer", true, "new: cap"),
				new MM("asSet", false, "asSet ^<Extensible[EX]> = (\r		(* {where EX is returnType of #anElement message of receiverType} *)\r\r	(* The guarantee is safe because of the inference clause *)\r	^(* guaranteed <Set[EX]> *) self\r)"),
				new MM("newForCollect:", false, "newForCollect: sz <Integer> ^<Extensible[Object]> = (\r	^Set(* [Object] *) new: sz\r)"),
				new MM("buildValForKey:element:", false, "buildValForKey:  key <Object> element: el <E> ^<E> = (\r	^el\r)"),
				new MM("elementFor:", false, "elementFor: el <E> ^<E> = (\r	^el\r)"),
				new MM("elementForCopy:", false, "elementForCopy: el <E> ^<E> = (\r	^el\r)"),
				new MM("hashFor:", false, "hashFor: key <Object> ^<Int> = (\r	^key hash\r)"),
				new MM("key:matches:", false, "key: k <Object> matches: another <Object> ^<Boolean> = (\r	^k = another\r)"),
				new MM("keyFor:", false, "keyFor: e <E> ^<Object> = (\r	^e\r)"),
				new MM("objToIncludeFor:withExisting:", false, "objToIncludeFor: new <E> withExisting: other <E> ^<E> = (\r	^new\r)"),
				new MM("hasSameElementsAs:", false, "hasSameElementsAs: other <Collection[Object]>  ^<Boolean> = (\r	(* A faster reimplementation of the inherited version, to speed up set comparisons *)\r\r	| otherSet <Extensible[Object]> |\r	size = other size\r		ifFalse: [ ^false ].\r	otherSet:: other asSet.\r	size = otherSet size\r		ifFalse: [ ^false ].\r	do:\r		[ :el <Object> |\r			(otherSet includes: el)\r				ifFalse: [ ^false ]  ].\r	^true\r)"),
				new MM("includes:", false, "includes: o <Object> ^<Boolean> = (\r	^includesKey: o\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$Set = (function ($cap) {
				var self = this;
				self.$super$Collections$Set.$instance$initializer.call(self, $cap);
				return self;
			});
			this.$instance$initializer = (function ($cap) {
				var self = this;
				self.$superInit$Collections$Set($cap);
				return self;
			});
			this.$asSet = (function () {
				var self = this;
				return self;
			});
			this.$newForCollect$ = (function ($sz) {
				var self = this;
				return self.$enclosingObjects$Collections$Set[0].$Set().$new$($sz);
			});
			this.$buildValForKey$element$ = (function ($key, $el) {
				var self = this;
				return $el;
			});
			this.$elementFor$ = (function ($el) {
				var self = this;
				return $el;
			});
			this.$elementForCopy$ = (function ($el) {
				var self = this;
				return $el;
			});
			this.$hashFor$ = (function ($key) {
				var self = this;
				return $key.$hash();
			});
			this.$key$matches$ = (function ($k, $another) {
				var self = this;
				return $k.$$equal($another);
			});
			this.$keyFor$ = (function ($e) {
				var self = this;
				return $e;
			});
			this.$objToIncludeFor$withExisting$ = (function ($new, $other) {
				var self = this;
				return $new;
			});
			this.$hasSameElementsAs$ = (function ($other) {
				var self = this;
				var NLR = new Object();
				try {
					var $otherSet = nil;
					if (!self.$size().$$equal($other.$size())) {
						return false;
					} else {
						nil;
					};
					$otherSet = $other.$asSet();
					if (!self.$size().$$equal($otherSet.$size())) {
						return false;
					} else {
						nil;
					};
					self.$do$((function ($el) {
						return $otherSet.$includes$($el).$ifFalse$((function () {
							{
								NLR.value = false;
								throw NLR;
							};
						}));
					}));
					return true;
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$includes$ = (function ($o) {
				var self = this;
				return self.$includesKey$($o);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`Set";
					this.$superInit$Collections$Set = $.$superInit$Collections$Set;
					this.$instance$initializer = $.$instance$initializer;
					this.$asSet = $.$asSet;
					this.$newForCollect$ = $.$newForCollect$;
					this.$buildValForKey$element$ = $.$buildValForKey$element$;
					this.$elementFor$ = $.$elementFor$;
					this.$elementForCopy$ = $.$elementForCopy$;
					this.$hashFor$ = $.$hashFor$;
					this.$key$matches$ = $.$key$matches$;
					this.$keyFor$ = $.$keyFor$;
					this.$objToIncludeFor$withExisting$ = $.$objToIncludeFor$withExisting$;
					this.$hasSameElementsAs$ = $.$hasSameElementsAs$;
					this.$includes$ = $.$includes$;
					this.$enclosingObjects$Collections$Set = enclosingObjects;
					this.$super$Collections$Set = runtimeSuperclass;
					this["Collections`Set"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Collections`Set"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`Set";
				this.slots = [];
				this.methods = [
					new MM("new:", true, null),
					new MM("defaultCapacity", false, "defaultCapacity = (\r\r	^ 0\r)"),
					new MM("new", false, "new = (\r	^new: defaultCapacity\r)"),
					new MM("with:", false, "with: val1 <A> ^<Instance> = (\r	^(new: 1) include: val1; yourself\r)"),
					new MM("withAll:", false, "withAll: cltn <Collection[A]> ^<Instance> = (\r	^(new: cltn size) includeAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new$ = (function ($cap) {
					return (new this.nonMeta.basicNew()).$instance$initializer($cap);
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 0;
				});
				this.$new = (function () {
					var self = this;
					return self.$new$(self.$defaultCapacity());
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$include$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$includeAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`Set";
						this.$new$ = $.$new$;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$new = $.$new;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$Set = enclosingObjects;
						this.$super$Collections$Set = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$SortedList = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Collections`SortedList";
			this.name = "Collections`SortedList";
			this.header = "SortedList = AddableList (\r	(* Sorted collections are addable collections that always keep their elements in sorted order.  The\r	sort order is determined by the sortPredicate, which is a function that compares 2 elements and\r	returns true if the first argument should be before the second argument in the collection.\r	The sortPredicate should be provided when the collection is created.\r\r	Unfortunately, Smalltalk defines SortedList as having a default sortPredicate that uses #<= to compare\r	elements.  This is NOT typesafe, since there are many kinds of objects that you might want to sort that don't support\r	the #<= operator; however, this feature is retained in Strongtalk for compatibility.   If you wish to write typesafe programs,\r	then SortedLists should always be given a sort block when they are created.  This involves using the creation\r	messages #new:sortBlock:, #sortBlock: and the Collection utility message #asSortedList: instead of #new:, #new,\r	and #asSortedList, respectively. *)|\r	private usesDefaultSortBlock_private <Boolean>\r	private sortBlock_private <[:E:E| Boolean]>\r|initCapacity: self class defaultCapacity. \r	sortBlock_private:: SortedList defaultSortBlock.\r	usesDefaultSortBlock_private:: true)";
			this.slots = [
				new SM("usesDefaultSortBlock_private", true, false),
				new SM("sortBlock_private", true, false)
			];
			this.methods = [
				new MM("superInit`Collections`SortedList", true, "AddableList"),
				new MM("instance`initializer", true, "AddableList"),
				new MM("add:", false, "add: el <E> ^<E> = (\r\r\r	| index <Int> |\r	index::indexFor: el.\r	index > contents size\r		ifFalse: [ index:: makeSpace: 1 beforeIndex: index. ]\r		ifTrue: [	needSpaceAtEnd: 1.\r						lastIndex: lastIndex + 1. ].\r	^contents at: index put: el.\r)"),
				new MM("addAll:", false, "addAll: els <Collection[E]> ^<Collection[E]> = (\r\r\r	els size > (size // 8) 		 (* %todo: do measurements to see if 8 is reasonable *)\r		ifTrue: [ 	needSpaceAtEnd: els size.\r				els do: [ :el <E> |\r					lastIndex: lastIndex + 1.\r					contents at: lastIndex put: el.	].\r				sort.		]\r		ifFalse: [ els do: [ :el <E> |\r					add: el	]].\r	^els\r)"),
				new MM("sortBlock", false, "sortBlock ^<[:E:E| Boolean]> = (\r\r	^sortBlock_private\r)"),
				new MM("sortBlock:", false, "sortBlock: sortBy <[:E:E| Boolean]>\r = (\r\r	sortBlock_private:: sortBy.\r	usesDefaultSortBlock_private:: false.\r	isEmpty\r		ifFalse: [ sort. ].\r)"),
				new MM("usesDefaultSortBlock", false, "usesDefaultSortBlock ^<Boolean> = (\r	^usesDefaultSortBlock_private\r)"),
				new MM("asSortedList", false, "asSortedList ^<List[Object]> = (\r	^self\r)"),
				new MM("initCapacity:", false, "initCapacity: cap <Int> = (\r	super initCapacity: cap.\r)"),
				new MM("indexFor:", false, "indexFor: el <E> ^<Integer> = (\r\r	(* This returns an internal index such that if el was inserted before it\r	  the collection would remain sorted *)\r\r	^contents\r		binarySearchFor: el\r		between: startGap + 1\r		and: lastIndex\r		toCompare: sortBlock\r)"),
				new MM("sort", false, "sort = (\r	usesDefaultSortBlock\r		ifTrue: [	contents defaultSort: startGap + 1 to: lastIndex ]\r		ifFalse: [ 	contents sort: startGap + 1 to: lastIndex using: sortBlock ]\r)"),
				new MM("isSorted", false, "isSorted ^<Boolean> = (\r\r	(* testing function used for sort routine validation *)\r\r	^isSortedBy: sortBlock\r)"),
				new MM("usesDefaultSortBlock_private", true, null),
				new MM("usesDefaultSortBlock_private:", true, null),
				new MM("sortBlock_private", true, null),
				new MM("sortBlock_private:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Collections$SortedList = (function () {
				var self = this;
				self.$super$Collections$SortedList.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Collections$SortedList();
				self.$initCapacity$(self.$class().$defaultCapacity());
				self.$sortBlock_private$(self.$enclosingObjects$Collections$SortedList[0].$SortedList().$defaultSortBlock());
				self.$usesDefaultSortBlock_private$(true);
				return self;
			});
			this.$add$ = (function ($el) {
				var self = this;
				var $index = nil;
				$index = self.$indexFor$($el);
				if (!$index.$$greater(self.$contents().$size())) {
					$index = self.$makeSpace$beforeIndex$(1, $index);
				} else {
					self.$needSpaceAtEnd$(1);
					self.$lastIndex$(self.$lastIndex() + 1);
				};
				return self.$contents().$at$put$($index, $el);
			});
			this.$addAll$ = (function ($els) {
				var self = this;
				if ($els.$size().$$greater(self.$size().$$over$over(8))) {
					self.$needSpaceAtEnd$($els.$size());
					$els.$do$((function ($el) {
						self.$lastIndex$(self.$lastIndex() + 1);
						return self.$contents().$at$put$(self.$lastIndex(), $el);
					}));
					self.$sort();
				} else {
					$els.$do$((function ($el) {
						return self.$add$($el);
					}));
				};
				return $els;
			});
			this.$sortBlock = (function () {
				var self = this;
				return self.$sortBlock_private();
			});
			this.$sortBlock$ = (function ($sortBy) {
				var self = this;
				self.$sortBlock_private$($sortBy);
				self.$usesDefaultSortBlock_private$(false);
				if (!self.$isEmpty()) {
					self.$sort();
				} else {
					nil;
				};
				return self;
			});
			this.$usesDefaultSortBlock = (function () {
				var self = this;
				return self.$usesDefaultSortBlock_private();
			});
			this.$asSortedList = (function () {
				var self = this;
				return self;
			});
			this.$initCapacity$ = (function ($cap) {
				var self = this;
				self.$super$Collections$SortedList.$initCapacity$.call(self, $cap);
				return self;
			});
			this.$indexFor$ = (function ($el) {
				var self = this;
				return self.$contents().$binarySearchFor$between$and$toCompare$($el, self.$startGap() + 1, self.$lastIndex(), self.$sortBlock());
			});
			this.$sort = (function () {
				var self = this;
				if (self.$usesDefaultSortBlock()) {
					self.$contents().$defaultSort$to$(self.$startGap() + 1, self.$lastIndex());
				} else {
					self.$contents().$sort$to$using$(self.$startGap() + 1, self.$lastIndex(), self.$sortBlock());
				};
				return self;
			});
			this.$isSorted = (function () {
				var self = this;
				return self.$isSortedBy$(self.$sortBlock());
			});
			this.$usesDefaultSortBlock_private = (function () {
				return this.$usesDefaultSortBlock_private$slot;
			});
			this.$usesDefaultSortBlock_private$ = (function (v) {
				this.$usesDefaultSortBlock_private$slot = v;
				return this;
			});
			this.$sortBlock_private = (function () {
				return this.$sortBlock_private$slot;
			});
			this.$sortBlock_private$ = (function (v) {
				this.$sortBlock_private$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Collections`SortedList";
					this.$superInit$Collections$SortedList = $.$superInit$Collections$SortedList;
					this.$instance$initializer = $.$instance$initializer;
					this.$add$ = $.$add$;
					this.$addAll$ = $.$addAll$;
					this.$sortBlock = $.$sortBlock;
					this.$sortBlock$ = $.$sortBlock$;
					this.$usesDefaultSortBlock = $.$usesDefaultSortBlock;
					this.$asSortedList = $.$asSortedList;
					this.$initCapacity$ = $.$initCapacity$;
					this.$indexFor$ = $.$indexFor$;
					this.$sort = $.$sort;
					this.$isSorted = $.$isSorted;
					this.$usesDefaultSortBlock_private = $.$usesDefaultSortBlock_private;
					this.$usesDefaultSortBlock_private$ = $.$usesDefaultSortBlock_private$;
					this.$sortBlock_private = $.$sortBlock_private;
					this.$sortBlock_private$ = $.$sortBlock_private$;
					this.$enclosingObjects$Collections$SortedList = enclosingObjects;
					this.$super$Collections$SortedList = runtimeSuperclass;
					this["Collections`SortedList"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$usesDefaultSortBlock_private$slot = nil;
						this.$sortBlock_private$slot = nil;
					});
					this.basicNew = this["Collections`SortedList"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Collections`SortedList";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("defaultCapacity", false, "defaultCapacity ^<Int> = (\r	^5\r)"),
					new MM("defaultSortBlock", false, "defaultSortBlock ^<[:E:E| Boolean]> = (\r\r\r	^[ :el1 <E> :el2 <E> |\r		(* The default sort block for SortedLists is is not typesafe, but is included for\r		 Smalltalk compatibility (that's the way Smalltalk is!). *)\r		((* guaranteed <Magnitude[E]> *) el1) <= el2	].\r)"),
					new MM("new:", false, "new: capacity <Int> ^<Instance> = (\r	^new initCapacity: capacity\r)"),
					new MM("new:sortBlock:", false, "new: capacity <Int>\rsortBlock: sort <[:E:E| Boolean]>\r^<Instance> = (\r\r	^(new: capacity) sortBlock: sort\r)"),
					new MM("sortBlock:", false, "sortBlock: sort <[:E:E| Boolean]> ^<Instance> = (\r	^new: defaultCapacity sortBlock: sort\r)"),
					new MM("with:", false, "with: val1 <E> ^<Instance> = (\r	^(new: 1) add: val1; yourself\r)"),
					new MM("withAll:", false, "withAll: cltn <Collection[E]> ^<Instance> = (\r	^(new: cltn size) addAll: cltn; yourself\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$defaultCapacity = (function () {
					var self = this;
					return 5;
				});
				this.$defaultSortBlock = (function () {
					var self = this;
					return (function ($el1, $el2) {
						return $el1.$$less$equal($el2);
					});
				});
				this.$new$ = (function ($capacity) {
					var self = this;
					return self.$new().$initCapacity$($capacity);
				});
				this.$new$sortBlock$ = (function ($capacity, $sort) {
					var self = this;
					return self.$new$($capacity).$sortBlock$($sort);
				});
				this.$sortBlock$ = (function ($sort) {
					var self = this;
					return self.$new$sortBlock$(self.$defaultCapacity(), $sort);
				});
				this.$with$ = (function ($val1) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$add$($val1);
						return cascadeReceiver.$yourself();
					})(self.$new$(1));
				});
				this.$withAll$ = (function ($cltn) {
					var self = this;
					return (function (cascadeReceiver) {
						cascadeReceiver.$addAll$($cltn);
						return cascadeReceiver.$yourself();
					})(self.$new$($cltn.$size()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Collections`SortedList";
						this.$new = $.$new;
						this.$defaultCapacity = $.$defaultCapacity;
						this.$defaultSortBlock = $.$defaultSortBlock;
						this.$new$ = $.$new$;
						this.$new$sortBlock$ = $.$new$sortBlock$;
						this.$sortBlock$ = $.$sortBlock$;
						this.$with$ = $.$with$;
						this.$withAll$ = $.$withAll$;
						this.$enclosingObjects$Collections$SortedList = enclosingObjects;
						this.$super$Collections$SortedList = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Collections$AddableList.enclosingMixin = this;
		this.$Collections$Association.enclosingMixin = this;
		this.$Collections$Bag.enclosingMixin = this;
		this.$Collections$Collection.enclosingMixin = this;
		this.$Collections$HashedCollection.enclosingMixin = this;
		this.$Collections$IdentityMutableHashedMap.enclosingMixin = this;
		this.$Collections$IdentitySet.enclosingMixin = this;
		this.$Collections$Interval.enclosingMixin = this;
		this.$Collections$List.enclosingMixin = this;
		this.$Collections$MutableArrayList.enclosingMixin = this;
		this.$Collections$MutableHashedMap.enclosingMixin = this;
		this.$Collections$MutableList.enclosingMixin = this;
		this.$Collections$Queue.enclosingMixin = this;
		this.$Collections$Set.enclosingMixin = this;
		this.$Collections$SortedList.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for Collections";
				this.$superInit$Collections = $.$superInit$Collections;
				this.$instance$initializer = $.$instance$initializer;
				this.$error$ = $.$error$;
				this.$AddableList = $.$AddableList;
				this.$Association = $.$Association;
				this.$Bag = $.$Bag;
				this.$Collection = $.$Collection;
				this.$HashedCollection = $.$HashedCollection;
				this.$IdentityMutableHashedMap = $.$IdentityMutableHashedMap;
				this.$IdentitySet = $.$IdentitySet;
				this.$Interval = $.$Interval;
				this.$List = $.$List;
				this.$MutableArrayList = $.$MutableArrayList;
				this.$MutableHashedMap = $.$MutableHashedMap;
				this.$MutableList = $.$MutableList;
				this.$Queue = $.$Queue;
				this.$Set = $.$Set;
				this.$SortedList = $.$SortedList;
				this.$MutableAddableList = $.$MutableAddableList;
				this.$setOnce$MutableAddableList$ = $.$setOnce$MutableAddableList$;
				this.$OrderedCollection = $.$OrderedCollection;
				this.$setOnce$OrderedCollection$ = $.$setOnce$OrderedCollection$;
				this.$Dictionary = $.$Dictionary;
				this.$setOnce$Dictionary$ = $.$setOnce$Dictionary$;
				this.$IdentityDictionary = $.$IdentityDictionary;
				this.$setOnce$IdentityDictionary$ = $.$setOnce$IdentityDictionary$;
				this.$SortedCollection = $.$SortedCollection;
				this.$setOnce$SortedCollection$ = $.$setOnce$SortedCollection$;
				this.$ListReadStream = $.$ListReadStream;
				this.$setOnce$ListReadStream$ = $.$setOnce$ListReadStream$;
				this.$ListReadWriteStream = $.$ListReadWriteStream;
				this.$setOnce$ListReadWriteStream$ = $.$setOnce$ListReadWriteStream$;
				this.$BasicInputStream = $.$BasicInputStream;
				this.$setOnce$BasicInputStream$ = $.$setOnce$BasicInputStream$;
				this.$BasicOutputStream = $.$BasicOutputStream;
				this.$setOnce$BasicOutputStream$ = $.$setOnce$BasicOutputStream$;
				this.$IOSequence = $.$IOSequence;
				this.$setOnce$IOSequence$ = $.$setOnce$IOSequence$;
				this.$WeakArray = $.$WeakArray;
				this.$setOnce$WeakArray$ = $.$setOnce$WeakArray$;
				this.$Collections$AddableList = $.$Collections$AddableList;
				this.$Collections$AddableList$ = $.$Collections$AddableList$;
				this.$Collections$Association = $.$Collections$Association;
				this.$Collections$Association$ = $.$Collections$Association$;
				this.$Collections$Bag = $.$Collections$Bag;
				this.$Collections$Bag$ = $.$Collections$Bag$;
				this.$Collections$Collection = $.$Collections$Collection;
				this.$Collections$Collection$ = $.$Collections$Collection$;
				this.$Collections$HashedCollection = $.$Collections$HashedCollection;
				this.$Collections$HashedCollection$ = $.$Collections$HashedCollection$;
				this.$Collections$IdentityMutableHashedMap = $.$Collections$IdentityMutableHashedMap;
				this.$Collections$IdentityMutableHashedMap$ = $.$Collections$IdentityMutableHashedMap$;
				this.$Collections$IdentitySet = $.$Collections$IdentitySet;
				this.$Collections$IdentitySet$ = $.$Collections$IdentitySet$;
				this.$Collections$Interval = $.$Collections$Interval;
				this.$Collections$Interval$ = $.$Collections$Interval$;
				this.$Collections$List = $.$Collections$List;
				this.$Collections$List$ = $.$Collections$List$;
				this.$Collections$MutableArrayList = $.$Collections$MutableArrayList;
				this.$Collections$MutableArrayList$ = $.$Collections$MutableArrayList$;
				this.$Collections$MutableHashedMap = $.$Collections$MutableHashedMap;
				this.$Collections$MutableHashedMap$ = $.$Collections$MutableHashedMap$;
				this.$Collections$MutableList = $.$Collections$MutableList;
				this.$Collections$MutableList$ = $.$Collections$MutableList$;
				this.$Collections$Queue = $.$Collections$Queue;
				this.$Collections$Queue$ = $.$Collections$Queue$;
				this.$Collections$Set = $.$Collections$Set;
				this.$Collections$Set$ = $.$Collections$Set$;
				this.$Collections$SortedList = $.$Collections$SortedList;
				this.$Collections$SortedList$ = $.$Collections$SortedList$;
				this.$enclosingObjects$Collections = enclosingObjects;
				this.$super$Collections = runtimeSuperclass;
				this.Collections = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$MutableAddableList$slot = nil;
					this.$OrderedCollection$slot = nil;
					this.$Dictionary$slot = nil;
					this.$IdentityDictionary$slot = nil;
					this.$SortedCollection$slot = nil;
					this.$ListReadStream$slot = nil;
					this.$ListReadWriteStream$slot = nil;
					this.$BasicInputStream$slot = nil;
					this.$BasicOutputStream$slot = nil;
					this.$IOSequence$slot = nil;
					this.$WeakArray$slot = nil;
					this.$Collections$AddableList$slot = nil;
					this.$Collections$Association$slot = nil;
					this.$Collections$Bag$slot = nil;
					this.$Collections$Collection$slot = nil;
					this.$Collections$HashedCollection$slot = nil;
					this.$Collections$IdentityMutableHashedMap$slot = nil;
					this.$Collections$IdentitySet$slot = nil;
					this.$Collections$Interval$slot = nil;
					this.$Collections$List$slot = nil;
					this.$Collections$MutableArrayList$slot = nil;
					this.$Collections$MutableHashedMap$slot = nil;
					this.$Collections$MutableList$slot = nil;
					this.$Collections$Queue$slot = nil;
					this.$Collections$Set$slot = nil;
					this.$Collections$SortedList$slot = nil;
				});
				this.basicNew = this.Collections;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for Collections";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($p) {
				return (new this.nonMeta.basicNew()).$instance$initializer($p);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for Collections";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$Collections = enclosingObjects;
					this.$super$Collections = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$GraphicsForHTML5 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for GraphicsForHTML5";
		this.name = "GraphicsForHTML5";
		this.header = "GraphicsForHTML5 usingPlatform: p = (|\rdocument = p aliens global at: 'document'.\rbody = document at: 'body'.\r|)";
		this.slots = [
			new SM("document", false, false),
			new SM("body", false, false),
			new SM("GraphicsForHTML5`Canvas", true, true),
			new SM("GraphicsForHTML5`Color", true, true),
			new SM("GraphicsForHTML5`Context", true, true),
			new SM("GraphicsForHTML5`Point", true, true),
			new SM("GraphicsForHTML5`Rectangle", true, true)
		];
		this.methods = [
			new MM("superInit`GraphicsForHTML5", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("openTestCanvas:", false, "openTestCanvas: extent = (\r	| div canvas |\r	canvas:: Canvas width: extent x height: extent y.\r	div:: document createElement: 'div'.\r	(div at: 'style')\r		at: 'borderStyle' put: 'solid';\r		at: 'borderWidth' put: '20px';\r		at: 'borderRadius' put: '25px';\r		at: 'borderColor' put: 'black';\r		at: 'padding' put: '10px'.\r	div appendChild: canvas alien.\r	body appendChild: div.\r	^canvas\r)"),
			new MM("Canvas", true, null),
			new MM("Color", true, null),
			new MM("Context", true, null),
			new MM("Point", true, null),
			new MM("Rectangle", true, null),
			new MM("document", true, null),
			new MM("setOnce`document:", true, null),
			new MM("body", true, null),
			new MM("setOnce`body:", true, null),
			new MM("GraphicsForHTML5`Canvas", true, null),
			new MM("GraphicsForHTML5`Canvas:", true, null),
			new MM("GraphicsForHTML5`Color", true, null),
			new MM("GraphicsForHTML5`Color:", true, null),
			new MM("GraphicsForHTML5`Context", true, null),
			new MM("GraphicsForHTML5`Context:", true, null),
			new MM("GraphicsForHTML5`Point", true, null),
			new MM("GraphicsForHTML5`Point:", true, null),
			new MM("GraphicsForHTML5`Rectangle", true, null),
			new MM("GraphicsForHTML5`Rectangle:", true, null)
		];
		this.nestedClasses = [
			"GraphicsForHTML5`Canvas",
			"GraphicsForHTML5`Color",
			"GraphicsForHTML5`Context",
			"GraphicsForHTML5`Point",
			"GraphicsForHTML5`Rectangle"
		];
		this.applications = [];
		this.$superInit$GraphicsForHTML5 = (function ($p) {
			var self = this;
			self.$super$GraphicsForHTML5.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($p) {
			var self = this;
			self.$superInit$GraphicsForHTML5($p);
			self.$setOnce$document$($p.$aliens().$global().$at$("document"));
			self.$setOnce$body$(self.$document().$at$("body"));
			return self;
		});
		this.$openTestCanvas$ = (function ($extent) {
			var self = this;
			var $div = nil;
			var $canvas = nil;
			$canvas = self.$Canvas().$width$height$($extent.$x(), $extent.$y());
			$div = self.$document().$createElement$("div");
			(function (cascadeReceiver) {
				cascadeReceiver.$at$put$("borderStyle", "solid");
				cascadeReceiver.$at$put$("borderWidth", "20px");
				cascadeReceiver.$at$put$("borderRadius", "25px");
				cascadeReceiver.$at$put$("borderColor", "black");
				return cascadeReceiver.$at$put$("padding", "10px");
			})($div.$at$("style"));
			$div.$appendChild$($canvas.$alien());
			self.$body().$appendChild$($div);
			return $canvas;
		});
		this.$Canvas = (function () {
			if (nil === this.$GraphicsForHTML5$Canvas$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$GraphicsForHTML5);
				var mixin = this.$GraphicsForHTML5$Canvas;
				this.$GraphicsForHTML5$Canvas$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$GraphicsForHTML5$Canvas$slot;
		});
		this.$Color = (function () {
			if (nil === this.$GraphicsForHTML5$Color$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$GraphicsForHTML5);
				var mixin = this.$GraphicsForHTML5$Color;
				this.$GraphicsForHTML5$Color$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$GraphicsForHTML5$Color$slot;
		});
		this.$Context = (function () {
			if (nil === this.$GraphicsForHTML5$Context$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$GraphicsForHTML5);
				var mixin = this.$GraphicsForHTML5$Context;
				this.$GraphicsForHTML5$Context$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$GraphicsForHTML5$Context$slot;
		});
		this.$Point = (function () {
			if (nil === this.$GraphicsForHTML5$Point$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$GraphicsForHTML5);
				var mixin = this.$GraphicsForHTML5$Point;
				this.$GraphicsForHTML5$Point$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$GraphicsForHTML5$Point$slot;
		});
		this.$Rectangle = (function () {
			if (nil === this.$GraphicsForHTML5$Rectangle$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$GraphicsForHTML5);
				var mixin = this.$GraphicsForHTML5$Rectangle;
				this.$GraphicsForHTML5$Rectangle$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$GraphicsForHTML5$Rectangle$slot;
		});
		this.$document = (function () {
			return this.$document$slot;
		});
		this.$setOnce$document$ = (function (v) {
			this.$document$slot = v;
			return this;
		});
		this.$body = (function () {
			return this.$body$slot;
		});
		this.$setOnce$body$ = (function (v) {
			this.$body$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Canvas = (function () {
			return this.$GraphicsForHTML5$Canvas$slot;
		});
		this.$GraphicsForHTML5$Canvas$ = (function (v) {
			this.$GraphicsForHTML5$Canvas$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Color = (function () {
			return this.$GraphicsForHTML5$Color$slot;
		});
		this.$GraphicsForHTML5$Color$ = (function (v) {
			this.$GraphicsForHTML5$Color$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Context = (function () {
			return this.$GraphicsForHTML5$Context$slot;
		});
		this.$GraphicsForHTML5$Context$ = (function (v) {
			this.$GraphicsForHTML5$Context$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Point = (function () {
			return this.$GraphicsForHTML5$Point$slot;
		});
		this.$GraphicsForHTML5$Point$ = (function (v) {
			this.$GraphicsForHTML5$Point$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Rectangle = (function () {
			return this.$GraphicsForHTML5$Rectangle$slot;
		});
		this.$GraphicsForHTML5$Rectangle$ = (function (v) {
			this.$GraphicsForHTML5$Rectangle$slot = v;
			return this;
		});
		this.$GraphicsForHTML5$Canvas = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for GraphicsForHTML5`Canvas";
			this.name = "GraphicsForHTML5`Canvas";
			this.header = "Canvas width: w height: h = (|\rprivate alien ::= document createElement: 'canvas'.\r|alien at: 'width' put: w.\ralien at: 'height' put: h.\r(alien at: 'style') at: 'position' put: 'relative')";
			this.slots = [new SM("alien", true, false)];
			this.methods = [
				new MM("superInit`GraphicsForHTML5`Canvas", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("appendToBody", false, "appendToBody = (\r	body appendChild: alien.\r)"),
				new MM("context", false, "context = (\r	^Context on: (alien getContext: '2d')\r)"),
				new MM("keyDownAction:", false, "keyDownAction: onKeyPressed <[:String]> = (\r	(* The canvas element itself doesn't seem to get key events. *)\r	body\r		addEventListener: 'keydown'\r		with: [:e | onKeyPressed value: (String fromCharCode: (e at: 'keyCode'))]\r)"),
				new MM("mouseDownAction:", false, "mouseDownAction: onMouseDown <[:Point]> = (\r	alien\r		addEventListener: 'mousedown'\r		with: [:e | onMouseDown value: (Point x: (e at: 'offsetX') y: (e at: 'offsetY'))].\r)"),
				new MM("mouseMovedAction:", false, "mouseMovedAction: onMouseMoved <[:Point]> = (\r	alien\r		addEventListener: 'mousemove'\r		with: [:e | onMouseMoved value: (Point x: (e at: 'offsetX') y: (e at: 'offsetY'))].\r)"),
				new MM("alien", true, null),
				new MM("alien:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$GraphicsForHTML5$Canvas = (function ($w, $h) {
				var self = this;
				self.$super$GraphicsForHTML5$Canvas.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($w, $h) {
				var self = this;
				self.$superInit$GraphicsForHTML5$Canvas($w, $h);
				self.$alien$(self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$document().$createElement$("canvas"));
				self.$alien().$at$put$("width", $w);
				self.$alien().$at$put$("height", $h);
				self.$alien().$at$("style").$at$put$("position", "relative");
				return self;
			});
			this.$appendToBody = (function () {
				var self = this;
				self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$body().$appendChild$(self.$alien());
				return self;
			});
			this.$context = (function () {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$Context().$on$(self.$alien().$getContext$("2d"));
			});
			this.$keyDownAction$ = (function ($onKeyPressed) {
				var self = this;
				self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$body().$addEventListener$with$("keydown", (function ($e) {
					return $onKeyPressed.$value$(self.$String().$fromCharCode$($e.$at$("keyCode")));
				}));
				return self;
			});
			this.$mouseDownAction$ = (function ($onMouseDown) {
				var self = this;
				self.$alien().$addEventListener$with$("mousedown", (function ($e) {
					return $onMouseDown.$value$(self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$Point().$x$y$($e.$at$("offsetX"), $e.$at$("offsetY")));
				}));
				return self;
			});
			this.$mouseMovedAction$ = (function ($onMouseMoved) {
				var self = this;
				self.$alien().$addEventListener$with$("mousemove", (function ($e) {
					return $onMouseMoved.$value$(self.$enclosingObjects$GraphicsForHTML5$Canvas[0].$Point().$x$y$($e.$at$("offsetX"), $e.$at$("offsetY")));
				}));
				return self;
			});
			this.$alien = (function () {
				return this.$alien$slot;
			});
			this.$alien$ = (function (v) {
				this.$alien$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for GraphicsForHTML5`Canvas";
					this.$superInit$GraphicsForHTML5$Canvas = $.$superInit$GraphicsForHTML5$Canvas;
					this.$instance$initializer = $.$instance$initializer;
					this.$appendToBody = $.$appendToBody;
					this.$context = $.$context;
					this.$keyDownAction$ = $.$keyDownAction$;
					this.$mouseDownAction$ = $.$mouseDownAction$;
					this.$mouseMovedAction$ = $.$mouseMovedAction$;
					this.$alien = $.$alien;
					this.$alien$ = $.$alien$;
					this.$enclosingObjects$GraphicsForHTML5$Canvas = enclosingObjects;
					this.$super$GraphicsForHTML5$Canvas = runtimeSuperclass;
					this["GraphicsForHTML5`Canvas"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$alien$slot = nil;
					});
					this.basicNew = this["GraphicsForHTML5`Canvas"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for GraphicsForHTML5`Canvas";
				this.slots = [];
				this.methods = [new MM("width:height:", true, null)];
				this.nestedClasses = [];
				this.$width$height$ = (function ($w, $h) {
					return (new this.nonMeta.basicNew()).$instance$initializer($w, $h);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for GraphicsForHTML5`Canvas";
						this.$width$height$ = $.$width$height$;
						this.$enclosingObjects$GraphicsForHTML5$Canvas = enclosingObjects;
						this.$super$GraphicsForHTML5$Canvas = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$GraphicsForHTML5$Color = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for GraphicsForHTML5`Color";
			this.name = "GraphicsForHTML5`Color";
			this.header = "Color scaledR: r g: g b: b a: a = (|\rred <Integer> = r.\rgreen <Integer> = g.\rblue <Integer> = b.\ralpha <Integer> = a.\r|)";
			this.slots = [
				new SM("red", false, false),
				new SM("green", false, false),
				new SM("blue", false, false),
				new SM("alpha", false, false)
			];
			this.methods = [
				new MM("superInit`GraphicsForHTML5`Color", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("applyToStyle:", false, "applyToStyle: style = (\r	style setProperty: 'background-color' to: self asCSSString\r)"),
				new MM("asCSSString", false, "asCSSString = (\r	^'rgba(', red printString, ',', green printString, ',', blue printString, ',', alpha printString, ')'\r)"),
				new MM("red", true, null),
				new MM("setOnce`red:", true, null),
				new MM("green", true, null),
				new MM("setOnce`green:", true, null),
				new MM("blue", true, null),
				new MM("setOnce`blue:", true, null),
				new MM("alpha", true, null),
				new MM("setOnce`alpha:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$GraphicsForHTML5$Color = (function ($r, $g, $b, $a) {
				var self = this;
				self.$super$GraphicsForHTML5$Color.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($r, $g, $b, $a) {
				var self = this;
				self.$superInit$GraphicsForHTML5$Color($r, $g, $b, $a);
				self.$setOnce$red$($r);
				self.$setOnce$green$($g);
				self.$setOnce$blue$($b);
				self.$setOnce$alpha$($a);
				return self;
			});
			this.$applyToStyle$ = (function ($style) {
				var self = this;
				$style.$setProperty$to$("background-color", self.$asCSSString());
				return self;
			});
			this.$asCSSString = (function () {
				var self = this;
				return ("rgba(").$$comma(self.$red().$printString()).$$comma(",").$$comma(self.$green().$printString()).$$comma(",").$$comma(self.$blue().$printString()).$$comma(",").$$comma(self.$alpha().$printString()).$$comma(")");
			});
			this.$red = (function () {
				return this.$red$slot;
			});
			this.$setOnce$red$ = (function (v) {
				this.$red$slot = v;
				return this;
			});
			this.$green = (function () {
				return this.$green$slot;
			});
			this.$setOnce$green$ = (function (v) {
				this.$green$slot = v;
				return this;
			});
			this.$blue = (function () {
				return this.$blue$slot;
			});
			this.$setOnce$blue$ = (function (v) {
				this.$blue$slot = v;
				return this;
			});
			this.$alpha = (function () {
				return this.$alpha$slot;
			});
			this.$setOnce$alpha$ = (function (v) {
				this.$alpha$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for GraphicsForHTML5`Color";
					this.$superInit$GraphicsForHTML5$Color = $.$superInit$GraphicsForHTML5$Color;
					this.$instance$initializer = $.$instance$initializer;
					this.$applyToStyle$ = $.$applyToStyle$;
					this.$asCSSString = $.$asCSSString;
					this.$red = $.$red;
					this.$setOnce$red$ = $.$setOnce$red$;
					this.$green = $.$green;
					this.$setOnce$green$ = $.$setOnce$green$;
					this.$blue = $.$blue;
					this.$setOnce$blue$ = $.$setOnce$blue$;
					this.$alpha = $.$alpha;
					this.$setOnce$alpha$ = $.$setOnce$alpha$;
					this.$enclosingObjects$GraphicsForHTML5$Color = enclosingObjects;
					this.$super$GraphicsForHTML5$Color = runtimeSuperclass;
					this["GraphicsForHTML5`Color"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$red$slot = nil;
						this.$green$slot = nil;
						this.$blue$slot = nil;
						this.$alpha$slot = nil;
					});
					this.basicNew = this["GraphicsForHTML5`Color"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for GraphicsForHTML5`Color";
				this.slots = [];
				this.methods = [
					new MM("scaledR:g:b:a:", true, null),
					new MM("black", false, "black = (\r	^self scaledR: 0 g: 0 b: 0 a: 255\r)"),
					new MM("gray:", false, "gray: brightness = (\r	^self r: brightness g: brightness b: brightness\r)"),
					new MM("h:s:v:", false, "h: hue s: saturation v: brightness = (\r	| s v hf i f p q t | \r	s:: (saturation asFloat max: 0.0) min: 1.0.\r	v:: (brightness asFloat max: 0.0) min: 1.0.\r\r	(* zero saturation yields gray with the given brightness *)\r	s = 0.0 ifTrue: [ ^ self r: v g: v b: v ].\r\r	hf:: hue asFloat.\r	(hf < 0.0 or: [hf >= 360.0])\r		ifTrue: [hf:: hf \\\\ 360].\r	hf:: hf / 60.0.\r	i:: hf asInteger.  (* integer part of hue *)\r	f:: hf - i. (* hf fractionPart. *)  (* fractional part of hue *)\r	p:: (1.0 - s) * v.\r	q:: (1.0 - (s * f)) * v.\r	t:: (1.0 - (s * (1.0 - f))) * v.\r\r	0 = i ifTrue: [ ^ self r: v g: t b: p ].\r	1 = i ifTrue: [ ^ self r: q g: v b: p ].\r	2 = i ifTrue: [ ^ self r: p g: v b: t ].\r	3 = i ifTrue: [ ^ self r: p g: q b: v ].\r	4 = i ifTrue: [ ^ self r: t g: p b: v ].\r	5 = i ifTrue: [ ^ self r: v g: p b: q ].\r\r	Error signal: 'implementation error'.\r)"),
					new MM("r:g:b:", false, "r: r g: g b: b = (\r	^self scaledR: (r * 255) floor g: (g * 255) floor b: (b * 255) floor a: 255\r)"),
					new MM("r:g:b:a:", false, "r: r g: g b: b a: a = (\r	^self scaledR: (r * 255) floor g: (g * 255) floor b: (b * 255) floor a: a\r)"),
					new MM("white", false, "white = (\r	^self scaledR: 255 g: 255 b: 255 a: 255\r)")
				];
				this.nestedClasses = [];
				this.$scaledR$g$b$a$ = (function ($r, $g, $b, $a) {
					return (new this.nonMeta.basicNew()).$instance$initializer($r, $g, $b, $a);
				});
				this.$black = (function () {
					var self = this;
					return self.$scaledR$g$b$a$(0, 0, 0, 255);
				});
				this.$gray$ = (function ($brightness) {
					var self = this;
					return self.$r$g$b$($brightness, $brightness, $brightness);
				});
				this.$h$s$v$ = (function ($hue, $saturation, $brightness) {
					var self = this;
					var $s = nil;
					var $v = nil;
					var $hf = nil;
					var $i = nil;
					var $f = nil;
					var $p = nil;
					var $q = nil;
					var $t = nil;
					$s = $saturation.$asFloat().$max$(0).$min$(1);
					$v = $brightness.$asFloat().$max$(0).$min$(1);
					if ($s.$$equal(0)) {
						return self.$r$g$b$($v, $v, $v);
					} else {
						nil;
					};
					$hf = $hue.$asFloat();
					if (($hf < 0) || ($hf >= 360)) {
						$hf = $hf.$$back$back(360);
					} else {
						nil;
					};
					$hf = $hf / 60;
					$i = $hf.$asInteger();
					$f = $hf - $i;
					$p = (1 - $s) * $v;
					$q = (1 - ($s * $f)) * $v;
					$t = (1 - ($s * (1 - $f))) * $v;
					if ((0).$$equal($i)) {
						return self.$r$g$b$($v, $t, $p);
					} else {
						nil;
					};
					if ((1).$$equal($i)) {
						return self.$r$g$b$($q, $v, $p);
					} else {
						nil;
					};
					if ((2).$$equal($i)) {
						return self.$r$g$b$($p, $v, $t);
					} else {
						nil;
					};
					if ((3).$$equal($i)) {
						return self.$r$g$b$($p, $q, $v);
					} else {
						nil;
					};
					if ((4).$$equal($i)) {
						return self.$r$g$b$($t, $p, $v);
					} else {
						nil;
					};
					if ((5).$$equal($i)) {
						return self.$r$g$b$($v, $p, $q);
					} else {
						nil;
					};
					self.$Error().$signal$("implementation error");
					return self;
				});
				this.$r$g$b$ = (function ($r, $g, $b) {
					var self = this;
					return self.$scaledR$g$b$a$(($r * 255).$floor(), ($g * 255).$floor(), ($b * 255).$floor(), 255);
				});
				this.$r$g$b$a$ = (function ($r, $g, $b, $a) {
					var self = this;
					return self.$scaledR$g$b$a$(($r * 255).$floor(), ($g * 255).$floor(), ($b * 255).$floor(), $a);
				});
				this.$white = (function () {
					var self = this;
					return self.$scaledR$g$b$a$(255, 255, 255, 255);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for GraphicsForHTML5`Color";
						this.$scaledR$g$b$a$ = $.$scaledR$g$b$a$;
						this.$black = $.$black;
						this.$gray$ = $.$gray$;
						this.$h$s$v$ = $.$h$s$v$;
						this.$r$g$b$ = $.$r$g$b$;
						this.$r$g$b$a$ = $.$r$g$b$a$;
						this.$white = $.$white;
						this.$enclosingObjects$GraphicsForHTML5$Color = enclosingObjects;
						this.$super$GraphicsForHTML5$Color = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$GraphicsForHTML5$Context = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for GraphicsForHTML5`Context";
			this.name = "GraphicsForHTML5`Context";
			this.header = "Context on: a = (|\ralien = a.\r|)";
			this.slots = [new SM("alien", false, false)];
			this.methods = [
				new MM("superInit`GraphicsForHTML5`Context", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("arcAt:radius:from:to:", false, "arcAt: center radius: radius from: startAngle to: stopAngle = (\r	alien arc: center x with: center y with: radius with: startAngle with: stopAngle\r)"),
				new MM("beginPath", false, "beginPath = (\r	alien beginPath.\r)"),
				new MM("fill", false, "fill = (\r	alien fill.\r)"),
				new MM("fillStyle:", false, "fillStyle: c <Color> = (\r	alien at: 'fillStyle' put: c asCSSString.\r)"),
				new MM("fillText:at:", false, "fillText: string at: p  = (\r	alien fillText: string with: p x with: p y\r)"),
				new MM("lineTo:", false, "lineTo: p = (\r	alien lineTo: p x with: p y\r)"),
				new MM("moveTo:", false, "moveTo: p = (\r	alien moveTo: p x with: p y\r)"),
				new MM("rectangle:", false, "rectangle: r = (\r	alien rect: r origin x with: r origin y with: r extent x with: r extent y\r)"),
				new MM("stroke", false, "stroke = (\r	alien stroke.\r)"),
				new MM("strokeStyle:", false, "strokeStyle: c <Color> = (\r	alien at: 'strokeStyle' put: c asCSSString\r)"),
				new MM("alien", true, null),
				new MM("setOnce`alien:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$GraphicsForHTML5$Context = (function ($a) {
				var self = this;
				self.$super$GraphicsForHTML5$Context.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($a) {
				var self = this;
				self.$superInit$GraphicsForHTML5$Context($a);
				self.$setOnce$alien$($a);
				return self;
			});
			this.$arcAt$radius$from$to$ = (function ($center, $radius, $startAngle, $stopAngle) {
				var self = this;
				self.$alien().$arc$with$with$with$with$($center.$x(), $center.$y(), $radius, $startAngle, $stopAngle);
				return self;
			});
			this.$beginPath = (function () {
				var self = this;
				self.$alien().$beginPath();
				return self;
			});
			this.$fill = (function () {
				var self = this;
				self.$alien().$fill();
				return self;
			});
			this.$fillStyle$ = (function ($c) {
				var self = this;
				self.$alien().$at$put$("fillStyle", $c.$asCSSString());
				return self;
			});
			this.$fillText$at$ = (function ($string, $p) {
				var self = this;
				self.$alien().$fillText$with$with$($string, $p.$x(), $p.$y());
				return self;
			});
			this.$lineTo$ = (function ($p) {
				var self = this;
				self.$alien().$lineTo$with$($p.$x(), $p.$y());
				return self;
			});
			this.$moveTo$ = (function ($p) {
				var self = this;
				self.$alien().$moveTo$with$($p.$x(), $p.$y());
				return self;
			});
			this.$rectangle$ = (function ($r) {
				var self = this;
				self.$alien().$rect$with$with$with$($r.$origin().$x(), $r.$origin().$y(), $r.$extent().$x(), $r.$extent().$y());
				return self;
			});
			this.$stroke = (function () {
				var self = this;
				self.$alien().$stroke();
				return self;
			});
			this.$strokeStyle$ = (function ($c) {
				var self = this;
				self.$alien().$at$put$("strokeStyle", $c.$asCSSString());
				return self;
			});
			this.$alien = (function () {
				return this.$alien$slot;
			});
			this.$setOnce$alien$ = (function (v) {
				this.$alien$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for GraphicsForHTML5`Context";
					this.$superInit$GraphicsForHTML5$Context = $.$superInit$GraphicsForHTML5$Context;
					this.$instance$initializer = $.$instance$initializer;
					this.$arcAt$radius$from$to$ = $.$arcAt$radius$from$to$;
					this.$beginPath = $.$beginPath;
					this.$fill = $.$fill;
					this.$fillStyle$ = $.$fillStyle$;
					this.$fillText$at$ = $.$fillText$at$;
					this.$lineTo$ = $.$lineTo$;
					this.$moveTo$ = $.$moveTo$;
					this.$rectangle$ = $.$rectangle$;
					this.$stroke = $.$stroke;
					this.$strokeStyle$ = $.$strokeStyle$;
					this.$alien = $.$alien;
					this.$setOnce$alien$ = $.$setOnce$alien$;
					this.$enclosingObjects$GraphicsForHTML5$Context = enclosingObjects;
					this.$super$GraphicsForHTML5$Context = runtimeSuperclass;
					this["GraphicsForHTML5`Context"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$alien$slot = nil;
					});
					this.basicNew = this["GraphicsForHTML5`Context"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for GraphicsForHTML5`Context";
				this.slots = [];
				this.methods = [new MM("on:", true, null)];
				this.nestedClasses = [];
				this.$on$ = (function ($a) {
					return (new this.nonMeta.basicNew()).$instance$initializer($a);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for GraphicsForHTML5`Context";
						this.$on$ = $.$on$;
						this.$enclosingObjects$GraphicsForHTML5$Context = enclosingObjects;
						this.$super$GraphicsForHTML5$Context = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$GraphicsForHTML5$Point = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for GraphicsForHTML5`Point";
			this.name = "GraphicsForHTML5`Point";
			this.header = "Point x: xCoord y: yCoord = (|\rx <Number> = xCoord.\ry <Number> = yCoord.\r|)";
			this.slots = [
				new SM("x", false, false),
				new SM("y", false, false)
			];
			this.methods = [
				new MM("superInit`GraphicsForHTML5`Point", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("=", false, "= other <Object> ^<Boolean> = (\r	^other isPoint and: [x = other x and: [y = other y]]\r)"),
				new MM("corner:", false, "corner: corner <Point> ^<Rectangle> = (\r	^Rectangle origin: self corner: corner\r)"),
				new MM("extent:", false, "extent: extent <Point> ^<Rectangle> = (\r	^Rectangle origin: self extent: extent\r)"),
				new MM("hash", false, "hash ^<Integer> = (\r	^x hash bitXor: y hash\r)"),
				new MM("isPoint", false, "isPoint ^<Boolean> = (\r	^true\r)"),
				new MM("printString", false, "printString ^<String> = (\r	^x printString, ' @ ', y printString\r)"),
				new MM("r", false, "r ^<Number> = (\r	^((x*x) + (y*y)) sqrt\r)"),
				new MM("theta", false, "theta ^<Number> = (\r	Error signal: 'Unimplemented'\r)"),
				new MM("x", true, null),
				new MM("setOnce`x:", true, null),
				new MM("y", true, null),
				new MM("setOnce`y:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$GraphicsForHTML5$Point = (function ($xCoord, $yCoord) {
				var self = this;
				self.$super$GraphicsForHTML5$Point.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($xCoord, $yCoord) {
				var self = this;
				self.$superInit$GraphicsForHTML5$Point($xCoord, $yCoord);
				self.$setOnce$x$($xCoord);
				self.$setOnce$y$($yCoord);
				return self;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return $other.$isPoint() && (self.$x().$$equal($other.$x()) && self.$y().$$equal($other.$y()));
			});
			this.$corner$ = (function ($corner) {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Point[0].$Rectangle().$origin$corner$(self, $corner);
			});
			this.$extent$ = (function ($extent) {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Point[0].$Rectangle().$origin$extent$(self, $extent);
			});
			this.$hash = (function () {
				var self = this;
				return self.$x().$hash().$bitXor$(self.$y().$hash());
			});
			this.$isPoint = (function () {
				var self = this;
				return true;
			});
			this.$printString = (function () {
				var self = this;
				return self.$x().$printString().$$comma(" @ ").$$comma(self.$y().$printString());
			});
			this.$r = (function () {
				var self = this;
				return ((self.$x() * self.$x()) + (self.$y() * self.$y())).$sqrt();
			});
			this.$theta = (function () {
				var self = this;
				self.$Error().$signal$("Unimplemented");
				return self;
			});
			this.$x = (function () {
				return this.$x$slot;
			});
			this.$setOnce$x$ = (function (v) {
				this.$x$slot = v;
				return this;
			});
			this.$y = (function () {
				return this.$y$slot;
			});
			this.$setOnce$y$ = (function (v) {
				this.$y$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for GraphicsForHTML5`Point";
					this.$superInit$GraphicsForHTML5$Point = $.$superInit$GraphicsForHTML5$Point;
					this.$instance$initializer = $.$instance$initializer;
					this.$$equal = $.$$equal;
					this.$corner$ = $.$corner$;
					this.$extent$ = $.$extent$;
					this.$hash = $.$hash;
					this.$isPoint = $.$isPoint;
					this.$printString = $.$printString;
					this.$r = $.$r;
					this.$theta = $.$theta;
					this.$x = $.$x;
					this.$setOnce$x$ = $.$setOnce$x$;
					this.$y = $.$y;
					this.$setOnce$y$ = $.$setOnce$y$;
					this.$enclosingObjects$GraphicsForHTML5$Point = enclosingObjects;
					this.$super$GraphicsForHTML5$Point = runtimeSuperclass;
					this["GraphicsForHTML5`Point"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$x$slot = nil;
						this.$y$slot = nil;
					});
					this.basicNew = this["GraphicsForHTML5`Point"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for GraphicsForHTML5`Point";
				this.slots = [];
				this.methods = [
					new MM("x:y:", true, null),
					new MM("r:theta:", false, "r: r <Number> theta: theta <Number> ^<Point> = (\r	^self x: r * theta cos y: r * theta sin\r)"),
					new MM("zero", false, "zero ^<Point> = (\r	^self x: 0 y: 0\r)")
				];
				this.nestedClasses = [];
				this.$x$y$ = (function ($xCoord, $yCoord) {
					return (new this.nonMeta.basicNew()).$instance$initializer($xCoord, $yCoord);
				});
				this.$r$theta$ = (function ($r, $theta) {
					var self = this;
					return self.$x$y$($r * $theta.$cos(), $r * $theta.$sin());
				});
				this.$zero = (function () {
					var self = this;
					return self.$x$y$(0, 0);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for GraphicsForHTML5`Point";
						this.$x$y$ = $.$x$y$;
						this.$r$theta$ = $.$r$theta$;
						this.$zero = $.$zero;
						this.$enclosingObjects$GraphicsForHTML5$Point = enclosingObjects;
						this.$super$GraphicsForHTML5$Point = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$GraphicsForHTML5$Rectangle = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for GraphicsForHTML5`Rectangle";
			this.name = "GraphicsForHTML5`Rectangle";
			this.header = "Rectangle origin: o corner: c = (|\rorigin <Point> = o.\rcorner <Point> = c.\r|)";
			this.slots = [
				new SM("origin", false, false),
				new SM("corner", false, false)
			];
			this.methods = [
				new MM("superInit`GraphicsForHTML5`Rectangle", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("=", false, "= other ^<Boolean> = (\r	^other isRectangle and: [origin = other origin and: [corner = other corner]]\r)"),
				new MM("center", false, "center = (\r	^Point x: origin x + ((corner x - origin x) / 2) y: origin y + ((corner y - origin y) / 2)\r)"),
				new MM("containsPoint:", false, "containsPoint: p = (\r	^((origin x <= p x\r		and: [origin y <= p y])\r		and: [corner x >= p x])\r		and: [corner y >= p y]\r)"),
				new MM("extent", false, "extent = (\r	^Point x: corner x - origin x y: corner y - origin y \r)"),
				new MM("hash", false, "hash ^<Integer> = (\r	^origin hash bitXor: corner hash\r)"),
				new MM("insetBy:", false, "insetBy: delta = (\r	^Rectangle\r		origin: (Point x: origin x + delta x y: origin y + delta y)\r		corner: (Point x: corner x - delta x y: corner y - delta y)\r)"),
				new MM("isRectangle", false, "isRectangle ^<Boolean> = (\r	^true\r)"),
				new MM("printString", false, "printString ^<String> = (\r	^'Rectangle origin: ', origin printString, ' corner: ', corner printString\r)"),
				new MM("origin", true, null),
				new MM("setOnce`origin:", true, null),
				new MM("corner", true, null),
				new MM("setOnce`corner:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$GraphicsForHTML5$Rectangle = (function ($o, $c) {
				var self = this;
				self.$super$GraphicsForHTML5$Rectangle.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($o, $c) {
				var self = this;
				self.$superInit$GraphicsForHTML5$Rectangle($o, $c);
				self.$setOnce$origin$($o);
				self.$setOnce$corner$($c);
				return self;
			});
			this.$$equal = (function ($other) {
				var self = this;
				return $other.$isRectangle() && (self.$origin().$$equal($other.$origin()) && self.$corner().$$equal($other.$corner()));
			});
			this.$center = (function () {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Point().$x$y$(self.$origin().$x() + ((self.$corner().$x() - self.$origin().$x()) / 2), self.$origin().$y() + ((self.$corner().$y() - self.$origin().$y()) / 2));
			});
			this.$containsPoint$ = (function ($p) {
				var self = this;
				return ((self.$origin().$x().$$less$equal($p.$x()) && self.$origin().$y().$$less$equal($p.$y())) && self.$corner().$x().$$greater$equal($p.$x())) && self.$corner().$y().$$greater$equal($p.$y());
			});
			this.$extent = (function () {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Point().$x$y$(self.$corner().$x() - self.$origin().$x(), self.$corner().$y() - self.$origin().$y());
			});
			this.$hash = (function () {
				var self = this;
				return self.$origin().$hash().$bitXor$(self.$corner().$hash());
			});
			this.$insetBy$ = (function ($delta) {
				var self = this;
				return self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Rectangle().$origin$corner$(self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Point().$x$y$(self.$origin().$x() + $delta.$x(), self.$origin().$y() + $delta.$y()), self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Point().$x$y$(self.$corner().$x() - $delta.$x(), self.$corner().$y() - $delta.$y()));
			});
			this.$isRectangle = (function () {
				var self = this;
				return true;
			});
			this.$printString = (function () {
				var self = this;
				return ("Rectangle origin: ").$$comma(self.$origin().$printString()).$$comma(" corner: ").$$comma(self.$corner().$printString());
			});
			this.$origin = (function () {
				return this.$origin$slot;
			});
			this.$setOnce$origin$ = (function (v) {
				this.$origin$slot = v;
				return this;
			});
			this.$corner = (function () {
				return this.$corner$slot;
			});
			this.$setOnce$corner$ = (function (v) {
				this.$corner$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for GraphicsForHTML5`Rectangle";
					this.$superInit$GraphicsForHTML5$Rectangle = $.$superInit$GraphicsForHTML5$Rectangle;
					this.$instance$initializer = $.$instance$initializer;
					this.$$equal = $.$$equal;
					this.$center = $.$center;
					this.$containsPoint$ = $.$containsPoint$;
					this.$extent = $.$extent;
					this.$hash = $.$hash;
					this.$insetBy$ = $.$insetBy$;
					this.$isRectangle = $.$isRectangle;
					this.$printString = $.$printString;
					this.$origin = $.$origin;
					this.$setOnce$origin$ = $.$setOnce$origin$;
					this.$corner = $.$corner;
					this.$setOnce$corner$ = $.$setOnce$corner$;
					this.$enclosingObjects$GraphicsForHTML5$Rectangle = enclosingObjects;
					this.$super$GraphicsForHTML5$Rectangle = runtimeSuperclass;
					this["GraphicsForHTML5`Rectangle"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$origin$slot = nil;
						this.$corner$slot = nil;
					});
					this.basicNew = this["GraphicsForHTML5`Rectangle"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for GraphicsForHTML5`Rectangle";
				this.slots = [];
				this.methods = [
					new MM("origin:corner:", true, null),
					new MM("origin:extent:", false, "origin: o <Point> extent: e <Point> ^<Rectangle> = (\r	^self origin: o corner: (Point x: o x + e x y: o y + e y)\r)")
				];
				this.nestedClasses = [];
				this.$origin$corner$ = (function ($o, $c) {
					return (new this.nonMeta.basicNew()).$instance$initializer($o, $c);
				});
				this.$origin$extent$ = (function ($o, $e) {
					var self = this;
					return self.$origin$corner$($o, self.$enclosingObjects$GraphicsForHTML5$Rectangle[0].$Point().$x$y$($o.$x() + $e.$x(), $o.$y() + $e.$y()));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for GraphicsForHTML5`Rectangle";
						this.$origin$corner$ = $.$origin$corner$;
						this.$origin$extent$ = $.$origin$extent$;
						this.$enclosingObjects$GraphicsForHTML5$Rectangle = enclosingObjects;
						this.$super$GraphicsForHTML5$Rectangle = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$GraphicsForHTML5$Canvas.enclosingMixin = this;
		this.$GraphicsForHTML5$Color.enclosingMixin = this;
		this.$GraphicsForHTML5$Context.enclosingMixin = this;
		this.$GraphicsForHTML5$Point.enclosingMixin = this;
		this.$GraphicsForHTML5$Rectangle.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for GraphicsForHTML5";
				this.$superInit$GraphicsForHTML5 = $.$superInit$GraphicsForHTML5;
				this.$instance$initializer = $.$instance$initializer;
				this.$openTestCanvas$ = $.$openTestCanvas$;
				this.$Canvas = $.$Canvas;
				this.$Color = $.$Color;
				this.$Context = $.$Context;
				this.$Point = $.$Point;
				this.$Rectangle = $.$Rectangle;
				this.$document = $.$document;
				this.$setOnce$document$ = $.$setOnce$document$;
				this.$body = $.$body;
				this.$setOnce$body$ = $.$setOnce$body$;
				this.$GraphicsForHTML5$Canvas = $.$GraphicsForHTML5$Canvas;
				this.$GraphicsForHTML5$Canvas$ = $.$GraphicsForHTML5$Canvas$;
				this.$GraphicsForHTML5$Color = $.$GraphicsForHTML5$Color;
				this.$GraphicsForHTML5$Color$ = $.$GraphicsForHTML5$Color$;
				this.$GraphicsForHTML5$Context = $.$GraphicsForHTML5$Context;
				this.$GraphicsForHTML5$Context$ = $.$GraphicsForHTML5$Context$;
				this.$GraphicsForHTML5$Point = $.$GraphicsForHTML5$Point;
				this.$GraphicsForHTML5$Point$ = $.$GraphicsForHTML5$Point$;
				this.$GraphicsForHTML5$Rectangle = $.$GraphicsForHTML5$Rectangle;
				this.$GraphicsForHTML5$Rectangle$ = $.$GraphicsForHTML5$Rectangle$;
				this.$enclosingObjects$GraphicsForHTML5 = enclosingObjects;
				this.$super$GraphicsForHTML5 = runtimeSuperclass;
				this.GraphicsForHTML5 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$document$slot = nil;
					this.$body$slot = nil;
					this.$GraphicsForHTML5$Canvas$slot = nil;
					this.$GraphicsForHTML5$Color$slot = nil;
					this.$GraphicsForHTML5$Context$slot = nil;
					this.$GraphicsForHTML5$Point$slot = nil;
					this.$GraphicsForHTML5$Rectangle$slot = nil;
				});
				this.basicNew = this.GraphicsForHTML5;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for GraphicsForHTML5";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($p) {
				return (new this.nonMeta.basicNew()).$instance$initializer($p);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for GraphicsForHTML5";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$GraphicsForHTML5 = enclosingObjects;
					this.$super$GraphicsForHTML5 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$HopscotchForHTML5 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for HopscotchForHTML5";
		this.name = "HopscotchForHTML5";
		this.header = "HopscotchForHTML5 usingPlatform: p = (|\r	private Color = p graphics Color.\r	private Context = p graphics Context.\r	private Timer = p time Timer.\r	private List = p collections OrderedCollection.\r	private Map = p collections Dictionary.\r\r	private window = p aliens global.\r	private document = window at: 'document'.\r	private body = document at: 'body'.\r	private history = window at: 'history'.\r	\r	private accept16px = p namespace accept16px.\r	private cancel16px = p namespace cancel16px.\r	private disclosureClosedImage = p namespace disclosureClosedImage.\r	private disclosureTransitionImage = p namespace disclosureTransitionImage.\r	private disclosureOpenImage = p namespace disclosureOpenImage.\r	\r	private deferredContentQueue = List new.\r	\r	public core = self.\r	public fragments = self.\r|)";
		this.slots = [
			new SM("Color", false, false),
			new SM("Context", false, false),
			new SM("Timer", false, false),
			new SM("List", false, false),
			new SM("Map", false, false),
			new SM("window", false, false),
			new SM("document", false, false),
			new SM("body", false, false),
			new SM("history", false, false),
			new SM("accept16px", false, false),
			new SM("cancel16px", false, false),
			new SM("disclosureClosedImage", false, false),
			new SM("disclosureTransitionImage", false, false),
			new SM("disclosureOpenImage", false, false),
			new SM("deferredContentQueue", false, false),
			new SM("core", false, false),
			new SM("fragments", false, false),
			new SM("HopscotchForHTML5`BlankFragment", true, true),
			new SM("HopscotchForHTML5`ButtonFragment", true, true),
			new SM("HopscotchForHTML5`CanvasFragment", true, true),
			new SM("HopscotchForHTML5`ColumnComposer", true, true),
			new SM("HopscotchForHTML5`Composer", true, true),
			new SM("HopscotchForHTML5`DeferredContentComposer", true, true),
			new SM("HopscotchForHTML5`Fragment", true, true),
			new SM("HopscotchForHTML5`Gradient", true, true),
			new SM("HopscotchForHTML5`HolderComposer", true, true),
			new SM("HopscotchForHTML5`HopscotchShell", true, true),
			new SM("HopscotchForHTML5`HopscotchWindow", true, true),
			new SM("HopscotchForHTML5`HyperlinkFragment", true, true),
			new SM("HopscotchForHTML5`LeafFragment", true, true),
			new SM("HopscotchForHTML5`NavigationHistory", true, true),
			new SM("HopscotchForHTML5`PaddedFrameComposer", true, true),
			new SM("HopscotchForHTML5`Presenter", true, true),
			new SM("HopscotchForHTML5`RowComposer", true, true),
			new SM("HopscotchForHTML5`SequenceComposer", true, true),
			new SM("HopscotchForHTML5`StaticImageFragment", true, true),
			new SM("HopscotchForHTML5`StaticLabelFragment", true, true),
			new SM("HopscotchForHTML5`Subject", true, true),
			new SM("HopscotchForHTML5`TextDisplayFragment", true, true),
			new SM("HopscotchForHTML5`TextEditorFragment", true, true),
			new SM("HopscotchForHTML5`ToggleComposer", true, true)
		];
		this.methods = [
			new MM("superInit`HopscotchForHTML5", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("deferAction:", false, "deferAction: action = (\r	deferredContentQueue add: action.\r	deferredContentQueue size = 1 ifTrue:\r		[nextFrameDo: [nextDeferredAction]].\r)"),
			new MM("nextDeferredAction", false, "nextDeferredAction = (\r	| action = deferredContentQueue removeFirst. |\r	deferredContentQueue size > 0 ifTrue:\r		[nextFrameDo: [nextDeferredAction]].\r	action value.\r)"),
			new MM("nextFrameDo:", false, "nextFrameDo: action = (\r	(* Our goal is to run the argument after images have been loaded and rendered. window.requestAnimationFrame runs the callback *before* the next frame. We register another callback in the callback so the first deferred action runs *after* the next frame. We register *that* callback in another RAF callback to let new images added from a deferred block load and render before the next deferred block runs. RAF is also a relative new feature, so simply schedule a timer if it is not available. *)\r	(window at: 'requestAnimationFrame') isUndefined\r		ifTrue: [Timer after: 200 do: action]\r		ifFalse: [window requestAnimationFrame: [\r					window requestAnimationFrame: [\r						window requestAnimationFrame: action]]].\r)"),
			new MM("BlankFragment", true, null),
			new MM("ButtonFragment", true, null),
			new MM("CanvasFragment", true, null),
			new MM("ColumnComposer", true, null),
			new MM("Composer", true, null),
			new MM("DeferredContentComposer", true, null),
			new MM("Fragment", true, null),
			new MM("Gradient", true, null),
			new MM("HolderComposer", true, null),
			new MM("HopscotchShell", true, null),
			new MM("HopscotchWindow", true, null),
			new MM("HyperlinkFragment", true, null),
			new MM("LeafFragment", true, null),
			new MM("NavigationHistory", true, null),
			new MM("PaddedFrameComposer", true, null),
			new MM("Presenter", true, null),
			new MM("RowComposer", true, null),
			new MM("SequenceComposer", true, null),
			new MM("StaticImageFragment", true, null),
			new MM("StaticLabelFragment", true, null),
			new MM("Subject", true, null),
			new MM("TextDisplayFragment", true, null),
			new MM("TextEditorFragment", true, null),
			new MM("ToggleComposer", true, null),
			new MM("Color", true, null),
			new MM("setOnce`Color:", true, null),
			new MM("Context", true, null),
			new MM("setOnce`Context:", true, null),
			new MM("Timer", true, null),
			new MM("setOnce`Timer:", true, null),
			new MM("List", true, null),
			new MM("setOnce`List:", true, null),
			new MM("Map", true, null),
			new MM("setOnce`Map:", true, null),
			new MM("window", true, null),
			new MM("setOnce`window:", true, null),
			new MM("document", true, null),
			new MM("setOnce`document:", true, null),
			new MM("body", true, null),
			new MM("setOnce`body:", true, null),
			new MM("history", true, null),
			new MM("setOnce`history:", true, null),
			new MM("accept16px", true, null),
			new MM("setOnce`accept16px:", true, null),
			new MM("cancel16px", true, null),
			new MM("setOnce`cancel16px:", true, null),
			new MM("disclosureClosedImage", true, null),
			new MM("setOnce`disclosureClosedImage:", true, null),
			new MM("disclosureTransitionImage", true, null),
			new MM("setOnce`disclosureTransitionImage:", true, null),
			new MM("disclosureOpenImage", true, null),
			new MM("setOnce`disclosureOpenImage:", true, null),
			new MM("deferredContentQueue", true, null),
			new MM("setOnce`deferredContentQueue:", true, null),
			new MM("core", true, null),
			new MM("setOnce`core:", true, null),
			new MM("fragments", true, null),
			new MM("setOnce`fragments:", true, null),
			new MM("HopscotchForHTML5`BlankFragment", true, null),
			new MM("HopscotchForHTML5`BlankFragment:", true, null),
			new MM("HopscotchForHTML5`ButtonFragment", true, null),
			new MM("HopscotchForHTML5`ButtonFragment:", true, null),
			new MM("HopscotchForHTML5`CanvasFragment", true, null),
			new MM("HopscotchForHTML5`CanvasFragment:", true, null),
			new MM("HopscotchForHTML5`ColumnComposer", true, null),
			new MM("HopscotchForHTML5`ColumnComposer:", true, null),
			new MM("HopscotchForHTML5`Composer", true, null),
			new MM("HopscotchForHTML5`Composer:", true, null),
			new MM("HopscotchForHTML5`DeferredContentComposer", true, null),
			new MM("HopscotchForHTML5`DeferredContentComposer:", true, null),
			new MM("HopscotchForHTML5`Fragment", true, null),
			new MM("HopscotchForHTML5`Fragment:", true, null),
			new MM("HopscotchForHTML5`Gradient", true, null),
			new MM("HopscotchForHTML5`Gradient:", true, null),
			new MM("HopscotchForHTML5`HolderComposer", true, null),
			new MM("HopscotchForHTML5`HolderComposer:", true, null),
			new MM("HopscotchForHTML5`HopscotchShell", true, null),
			new MM("HopscotchForHTML5`HopscotchShell:", true, null),
			new MM("HopscotchForHTML5`HopscotchWindow", true, null),
			new MM("HopscotchForHTML5`HopscotchWindow:", true, null),
			new MM("HopscotchForHTML5`HyperlinkFragment", true, null),
			new MM("HopscotchForHTML5`HyperlinkFragment:", true, null),
			new MM("HopscotchForHTML5`LeafFragment", true, null),
			new MM("HopscotchForHTML5`LeafFragment:", true, null),
			new MM("HopscotchForHTML5`NavigationHistory", true, null),
			new MM("HopscotchForHTML5`NavigationHistory:", true, null),
			new MM("HopscotchForHTML5`PaddedFrameComposer", true, null),
			new MM("HopscotchForHTML5`PaddedFrameComposer:", true, null),
			new MM("HopscotchForHTML5`Presenter", true, null),
			new MM("HopscotchForHTML5`Presenter:", true, null),
			new MM("HopscotchForHTML5`RowComposer", true, null),
			new MM("HopscotchForHTML5`RowComposer:", true, null),
			new MM("HopscotchForHTML5`SequenceComposer", true, null),
			new MM("HopscotchForHTML5`SequenceComposer:", true, null),
			new MM("HopscotchForHTML5`StaticImageFragment", true, null),
			new MM("HopscotchForHTML5`StaticImageFragment:", true, null),
			new MM("HopscotchForHTML5`StaticLabelFragment", true, null),
			new MM("HopscotchForHTML5`StaticLabelFragment:", true, null),
			new MM("HopscotchForHTML5`Subject", true, null),
			new MM("HopscotchForHTML5`Subject:", true, null),
			new MM("HopscotchForHTML5`TextDisplayFragment", true, null),
			new MM("HopscotchForHTML5`TextDisplayFragment:", true, null),
			new MM("HopscotchForHTML5`TextEditorFragment", true, null),
			new MM("HopscotchForHTML5`TextEditorFragment:", true, null),
			new MM("HopscotchForHTML5`ToggleComposer", true, null),
			new MM("HopscotchForHTML5`ToggleComposer:", true, null)
		];
		this.nestedClasses = [
			"HopscotchForHTML5`BlankFragment",
			"HopscotchForHTML5`ButtonFragment",
			"HopscotchForHTML5`CanvasFragment",
			"HopscotchForHTML5`ColumnComposer",
			"HopscotchForHTML5`Composer",
			"HopscotchForHTML5`DeferredContentComposer",
			"HopscotchForHTML5`Fragment",
			"HopscotchForHTML5`Gradient",
			"HopscotchForHTML5`HolderComposer",
			"HopscotchForHTML5`HopscotchShell",
			"HopscotchForHTML5`HopscotchWindow",
			"HopscotchForHTML5`HyperlinkFragment",
			"HopscotchForHTML5`LeafFragment",
			"HopscotchForHTML5`NavigationHistory",
			"HopscotchForHTML5`PaddedFrameComposer",
			"HopscotchForHTML5`Presenter",
			"HopscotchForHTML5`RowComposer",
			"HopscotchForHTML5`SequenceComposer",
			"HopscotchForHTML5`StaticImageFragment",
			"HopscotchForHTML5`StaticLabelFragment",
			"HopscotchForHTML5`Subject",
			"HopscotchForHTML5`TextDisplayFragment",
			"HopscotchForHTML5`TextEditorFragment",
			"HopscotchForHTML5`ToggleComposer"
		];
		this.applications = [];
		this.$superInit$HopscotchForHTML5 = (function ($p) {
			var self = this;
			self.$super$HopscotchForHTML5.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($p) {
			var self = this;
			self.$superInit$HopscotchForHTML5($p);
			self.$setOnce$Color$($p.$graphics().$Color());
			self.$setOnce$Context$($p.$graphics().$Context());
			self.$setOnce$Timer$($p.$time().$Timer());
			self.$setOnce$List$($p.$collections().$OrderedCollection());
			self.$setOnce$Map$($p.$collections().$Dictionary());
			self.$setOnce$window$($p.$aliens().$global());
			self.$setOnce$document$(self.$window().$at$("document"));
			self.$setOnce$body$(self.$document().$at$("body"));
			self.$setOnce$history$(self.$window().$at$("history"));
			self.$setOnce$accept16px$($p.$namespace().$accept16px());
			self.$setOnce$cancel16px$($p.$namespace().$cancel16px());
			self.$setOnce$disclosureClosedImage$($p.$namespace().$disclosureClosedImage());
			self.$setOnce$disclosureTransitionImage$($p.$namespace().$disclosureTransitionImage());
			self.$setOnce$disclosureOpenImage$($p.$namespace().$disclosureOpenImage());
			self.$setOnce$deferredContentQueue$(self.$List().$new());
			self.$setOnce$core$(self);
			self.$setOnce$fragments$(self);
			return self;
		});
		this.$deferAction$ = (function ($action) {
			var self = this;
			self.$deferredContentQueue().$add$($action);
			if (self.$deferredContentQueue().$size().$$equal(1)) {
				self.$nextFrameDo$((function () {
					return self.$nextDeferredAction();
				}));
			} else {
				nil;
			};
			return self;
		});
		this.$nextDeferredAction = (function () {
			var self = this;
			var $action = nil;
			$action = self.$deferredContentQueue().$removeFirst();
			if (self.$deferredContentQueue().$size() > 0) {
				self.$nextFrameDo$((function () {
					return self.$nextDeferredAction();
				}));
			} else {
				nil;
			};
			$action.$value();
			return self;
		});
		this.$nextFrameDo$ = (function ($action) {
			var self = this;
			if (self.$window().$at$("requestAnimationFrame").$isUndefined()) {
				self.$Timer().$after$do$(200, $action);
			} else {
				self.$window().$requestAnimationFrame$((function () {
					return self.$window().$requestAnimationFrame$((function () {
						return self.$window().$requestAnimationFrame$($action);
					}));
				}));
			};
			return self;
		});
		this.$BlankFragment = (function () {
			if (nil === this.$HopscotchForHTML5$BlankFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$BlankFragment;
				this.$HopscotchForHTML5$BlankFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$BlankFragment$slot;
		});
		this.$ButtonFragment = (function () {
			if (nil === this.$HopscotchForHTML5$ButtonFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$ButtonFragment;
				this.$HopscotchForHTML5$ButtonFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$ButtonFragment$slot;
		});
		this.$CanvasFragment = (function () {
			if (nil === this.$HopscotchForHTML5$CanvasFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$CanvasFragment;
				this.$HopscotchForHTML5$CanvasFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$CanvasFragment$slot;
		});
		this.$ColumnComposer = (function () {
			if (nil === this.$HopscotchForHTML5$ColumnComposer$slot) {
				var self = this;
				var superclass = self.$SequenceComposer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$ColumnComposer;
				this.$HopscotchForHTML5$ColumnComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$ColumnComposer$slot;
		});
		this.$Composer = (function () {
			if (nil === this.$HopscotchForHTML5$Composer$slot) {
				var self = this;
				var superclass = self.$Fragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$Composer;
				this.$HopscotchForHTML5$Composer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$Composer$slot;
		});
		this.$DeferredContentComposer = (function () {
			if (nil === this.$HopscotchForHTML5$DeferredContentComposer$slot) {
				var self = this;
				var superclass = self.$Composer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$DeferredContentComposer;
				this.$HopscotchForHTML5$DeferredContentComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$DeferredContentComposer$slot;
		});
		this.$Fragment = (function () {
			if (nil === this.$HopscotchForHTML5$Fragment$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$Fragment;
				this.$HopscotchForHTML5$Fragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$Fragment$slot;
		});
		this.$Gradient = (function () {
			if (nil === this.$HopscotchForHTML5$Gradient$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$Gradient;
				this.$HopscotchForHTML5$Gradient$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$Gradient$slot;
		});
		this.$HolderComposer = (function () {
			if (nil === this.$HopscotchForHTML5$HolderComposer$slot) {
				var self = this;
				var superclass = self.$Composer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$HolderComposer;
				this.$HopscotchForHTML5$HolderComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$HolderComposer$slot;
		});
		this.$HopscotchShell = (function () {
			if (nil === this.$HopscotchForHTML5$HopscotchShell$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$HopscotchShell;
				this.$HopscotchForHTML5$HopscotchShell$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$HopscotchShell$slot;
		});
		this.$HopscotchWindow = (function () {
			if (nil === this.$HopscotchForHTML5$HopscotchWindow$slot) {
				var self = this;
				var superclass = self.$HopscotchShell();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$HopscotchWindow;
				this.$HopscotchForHTML5$HopscotchWindow$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$HopscotchWindow$slot;
		});
		this.$HyperlinkFragment = (function () {
			if (nil === this.$HopscotchForHTML5$HyperlinkFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$HyperlinkFragment;
				this.$HopscotchForHTML5$HyperlinkFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$HyperlinkFragment$slot;
		});
		this.$LeafFragment = (function () {
			if (nil === this.$HopscotchForHTML5$LeafFragment$slot) {
				var self = this;
				var superclass = self.$Fragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$LeafFragment;
				this.$HopscotchForHTML5$LeafFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$LeafFragment$slot;
		});
		this.$NavigationHistory = (function () {
			if (nil === this.$HopscotchForHTML5$NavigationHistory$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$NavigationHistory;
				this.$HopscotchForHTML5$NavigationHistory$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$NavigationHistory$slot;
		});
		this.$PaddedFrameComposer = (function () {
			if (nil === this.$HopscotchForHTML5$PaddedFrameComposer$slot) {
				var self = this;
				var superclass = self.$Composer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$PaddedFrameComposer;
				this.$HopscotchForHTML5$PaddedFrameComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$PaddedFrameComposer$slot;
		});
		this.$Presenter = (function () {
			if (nil === this.$HopscotchForHTML5$Presenter$slot) {
				var self = this;
				var superclass = self.$Fragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$Presenter;
				this.$HopscotchForHTML5$Presenter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$Presenter$slot;
		});
		this.$RowComposer = (function () {
			if (nil === this.$HopscotchForHTML5$RowComposer$slot) {
				var self = this;
				var superclass = self.$SequenceComposer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$RowComposer;
				this.$HopscotchForHTML5$RowComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$RowComposer$slot;
		});
		this.$SequenceComposer = (function () {
			if (nil === this.$HopscotchForHTML5$SequenceComposer$slot) {
				var self = this;
				var superclass = self.$Composer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$SequenceComposer;
				this.$HopscotchForHTML5$SequenceComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$SequenceComposer$slot;
		});
		this.$StaticImageFragment = (function () {
			if (nil === this.$HopscotchForHTML5$StaticImageFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$StaticImageFragment;
				this.$HopscotchForHTML5$StaticImageFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$StaticImageFragment$slot;
		});
		this.$StaticLabelFragment = (function () {
			if (nil === this.$HopscotchForHTML5$StaticLabelFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$StaticLabelFragment;
				this.$HopscotchForHTML5$StaticLabelFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$StaticLabelFragment$slot;
		});
		this.$Subject = (function () {
			if (nil === this.$HopscotchForHTML5$Subject$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$Subject;
				this.$HopscotchForHTML5$Subject$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$Subject$slot;
		});
		this.$TextDisplayFragment = (function () {
			if (nil === this.$HopscotchForHTML5$TextDisplayFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$TextDisplayFragment;
				this.$HopscotchForHTML5$TextDisplayFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$TextDisplayFragment$slot;
		});
		this.$TextEditorFragment = (function () {
			if (nil === this.$HopscotchForHTML5$TextEditorFragment$slot) {
				var self = this;
				var superclass = self.$LeafFragment();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$TextEditorFragment;
				this.$HopscotchForHTML5$TextEditorFragment$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$TextEditorFragment$slot;
		});
		this.$ToggleComposer = (function () {
			if (nil === this.$HopscotchForHTML5$ToggleComposer$slot) {
				var self = this;
				var superclass = self.$Composer();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$HopscotchForHTML5);
				var mixin = this.$HopscotchForHTML5$ToggleComposer;
				this.$HopscotchForHTML5$ToggleComposer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$HopscotchForHTML5$ToggleComposer$slot;
		});
		this.$Color = (function () {
			return this.$Color$slot;
		});
		this.$setOnce$Color$ = (function (v) {
			this.$Color$slot = v;
			return this;
		});
		this.$Context = (function () {
			return this.$Context$slot;
		});
		this.$setOnce$Context$ = (function (v) {
			this.$Context$slot = v;
			return this;
		});
		this.$Timer = (function () {
			return this.$Timer$slot;
		});
		this.$setOnce$Timer$ = (function (v) {
			this.$Timer$slot = v;
			return this;
		});
		this.$List = (function () {
			return this.$List$slot;
		});
		this.$setOnce$List$ = (function (v) {
			this.$List$slot = v;
			return this;
		});
		this.$Map = (function () {
			return this.$Map$slot;
		});
		this.$setOnce$Map$ = (function (v) {
			this.$Map$slot = v;
			return this;
		});
		this.$window = (function () {
			return this.$window$slot;
		});
		this.$setOnce$window$ = (function (v) {
			this.$window$slot = v;
			return this;
		});
		this.$document = (function () {
			return this.$document$slot;
		});
		this.$setOnce$document$ = (function (v) {
			this.$document$slot = v;
			return this;
		});
		this.$body = (function () {
			return this.$body$slot;
		});
		this.$setOnce$body$ = (function (v) {
			this.$body$slot = v;
			return this;
		});
		this.$history = (function () {
			return this.$history$slot;
		});
		this.$setOnce$history$ = (function (v) {
			this.$history$slot = v;
			return this;
		});
		this.$accept16px = (function () {
			return this.$accept16px$slot;
		});
		this.$setOnce$accept16px$ = (function (v) {
			this.$accept16px$slot = v;
			return this;
		});
		this.$cancel16px = (function () {
			return this.$cancel16px$slot;
		});
		this.$setOnce$cancel16px$ = (function (v) {
			this.$cancel16px$slot = v;
			return this;
		});
		this.$disclosureClosedImage = (function () {
			return this.$disclosureClosedImage$slot;
		});
		this.$setOnce$disclosureClosedImage$ = (function (v) {
			this.$disclosureClosedImage$slot = v;
			return this;
		});
		this.$disclosureTransitionImage = (function () {
			return this.$disclosureTransitionImage$slot;
		});
		this.$setOnce$disclosureTransitionImage$ = (function (v) {
			this.$disclosureTransitionImage$slot = v;
			return this;
		});
		this.$disclosureOpenImage = (function () {
			return this.$disclosureOpenImage$slot;
		});
		this.$setOnce$disclosureOpenImage$ = (function (v) {
			this.$disclosureOpenImage$slot = v;
			return this;
		});
		this.$deferredContentQueue = (function () {
			return this.$deferredContentQueue$slot;
		});
		this.$setOnce$deferredContentQueue$ = (function (v) {
			this.$deferredContentQueue$slot = v;
			return this;
		});
		this.$core = (function () {
			return this.$core$slot;
		});
		this.$setOnce$core$ = (function (v) {
			this.$core$slot = v;
			return this;
		});
		this.$fragments = (function () {
			return this.$fragments$slot;
		});
		this.$setOnce$fragments$ = (function (v) {
			this.$fragments$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$BlankFragment = (function () {
			return this.$HopscotchForHTML5$BlankFragment$slot;
		});
		this.$HopscotchForHTML5$BlankFragment$ = (function (v) {
			this.$HopscotchForHTML5$BlankFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$ButtonFragment = (function () {
			return this.$HopscotchForHTML5$ButtonFragment$slot;
		});
		this.$HopscotchForHTML5$ButtonFragment$ = (function (v) {
			this.$HopscotchForHTML5$ButtonFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$CanvasFragment = (function () {
			return this.$HopscotchForHTML5$CanvasFragment$slot;
		});
		this.$HopscotchForHTML5$CanvasFragment$ = (function (v) {
			this.$HopscotchForHTML5$CanvasFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$ColumnComposer = (function () {
			return this.$HopscotchForHTML5$ColumnComposer$slot;
		});
		this.$HopscotchForHTML5$ColumnComposer$ = (function (v) {
			this.$HopscotchForHTML5$ColumnComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$Composer = (function () {
			return this.$HopscotchForHTML5$Composer$slot;
		});
		this.$HopscotchForHTML5$Composer$ = (function (v) {
			this.$HopscotchForHTML5$Composer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$DeferredContentComposer = (function () {
			return this.$HopscotchForHTML5$DeferredContentComposer$slot;
		});
		this.$HopscotchForHTML5$DeferredContentComposer$ = (function (v) {
			this.$HopscotchForHTML5$DeferredContentComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$Fragment = (function () {
			return this.$HopscotchForHTML5$Fragment$slot;
		});
		this.$HopscotchForHTML5$Fragment$ = (function (v) {
			this.$HopscotchForHTML5$Fragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$Gradient = (function () {
			return this.$HopscotchForHTML5$Gradient$slot;
		});
		this.$HopscotchForHTML5$Gradient$ = (function (v) {
			this.$HopscotchForHTML5$Gradient$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$HolderComposer = (function () {
			return this.$HopscotchForHTML5$HolderComposer$slot;
		});
		this.$HopscotchForHTML5$HolderComposer$ = (function (v) {
			this.$HopscotchForHTML5$HolderComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$HopscotchShell = (function () {
			return this.$HopscotchForHTML5$HopscotchShell$slot;
		});
		this.$HopscotchForHTML5$HopscotchShell$ = (function (v) {
			this.$HopscotchForHTML5$HopscotchShell$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$HopscotchWindow = (function () {
			return this.$HopscotchForHTML5$HopscotchWindow$slot;
		});
		this.$HopscotchForHTML5$HopscotchWindow$ = (function (v) {
			this.$HopscotchForHTML5$HopscotchWindow$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$HyperlinkFragment = (function () {
			return this.$HopscotchForHTML5$HyperlinkFragment$slot;
		});
		this.$HopscotchForHTML5$HyperlinkFragment$ = (function (v) {
			this.$HopscotchForHTML5$HyperlinkFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$LeafFragment = (function () {
			return this.$HopscotchForHTML5$LeafFragment$slot;
		});
		this.$HopscotchForHTML5$LeafFragment$ = (function (v) {
			this.$HopscotchForHTML5$LeafFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$NavigationHistory = (function () {
			return this.$HopscotchForHTML5$NavigationHistory$slot;
		});
		this.$HopscotchForHTML5$NavigationHistory$ = (function (v) {
			this.$HopscotchForHTML5$NavigationHistory$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$PaddedFrameComposer = (function () {
			return this.$HopscotchForHTML5$PaddedFrameComposer$slot;
		});
		this.$HopscotchForHTML5$PaddedFrameComposer$ = (function (v) {
			this.$HopscotchForHTML5$PaddedFrameComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$Presenter = (function () {
			return this.$HopscotchForHTML5$Presenter$slot;
		});
		this.$HopscotchForHTML5$Presenter$ = (function (v) {
			this.$HopscotchForHTML5$Presenter$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$RowComposer = (function () {
			return this.$HopscotchForHTML5$RowComposer$slot;
		});
		this.$HopscotchForHTML5$RowComposer$ = (function (v) {
			this.$HopscotchForHTML5$RowComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$SequenceComposer = (function () {
			return this.$HopscotchForHTML5$SequenceComposer$slot;
		});
		this.$HopscotchForHTML5$SequenceComposer$ = (function (v) {
			this.$HopscotchForHTML5$SequenceComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$StaticImageFragment = (function () {
			return this.$HopscotchForHTML5$StaticImageFragment$slot;
		});
		this.$HopscotchForHTML5$StaticImageFragment$ = (function (v) {
			this.$HopscotchForHTML5$StaticImageFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$StaticLabelFragment = (function () {
			return this.$HopscotchForHTML5$StaticLabelFragment$slot;
		});
		this.$HopscotchForHTML5$StaticLabelFragment$ = (function (v) {
			this.$HopscotchForHTML5$StaticLabelFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$Subject = (function () {
			return this.$HopscotchForHTML5$Subject$slot;
		});
		this.$HopscotchForHTML5$Subject$ = (function (v) {
			this.$HopscotchForHTML5$Subject$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$TextDisplayFragment = (function () {
			return this.$HopscotchForHTML5$TextDisplayFragment$slot;
		});
		this.$HopscotchForHTML5$TextDisplayFragment$ = (function (v) {
			this.$HopscotchForHTML5$TextDisplayFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$TextEditorFragment = (function () {
			return this.$HopscotchForHTML5$TextEditorFragment$slot;
		});
		this.$HopscotchForHTML5$TextEditorFragment$ = (function (v) {
			this.$HopscotchForHTML5$TextEditorFragment$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$ToggleComposer = (function () {
			return this.$HopscotchForHTML5$ToggleComposer$slot;
		});
		this.$HopscotchForHTML5$ToggleComposer$ = (function (v) {
			this.$HopscotchForHTML5$ToggleComposer$slot = v;
			return this;
		});
		this.$HopscotchForHTML5$BlankFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`BlankFragment";
			this.name = "HopscotchForHTML5`BlankFragment";
			this.header = "BlankFragment = LeafFragment (|\r|)";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`BlankFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	^document createElement: 'div'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$BlankFragment = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$BlankFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$BlankFragment();
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$BlankFragment[0].$document().$createElement$("div");
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`BlankFragment";
					this.$superInit$HopscotchForHTML5$BlankFragment = $.$superInit$HopscotchForHTML5$BlankFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$enclosingObjects$HopscotchForHTML5$BlankFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$BlankFragment = runtimeSuperclass;
					this["HopscotchForHTML5`BlankFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`BlankFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`BlankFragment";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`BlankFragment";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$BlankFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$BlankFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$ButtonFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`ButtonFragment";
			this.name = "HopscotchForHTML5`ButtonFragment";
			this.header = "ButtonFragment label: l action: a = LeafFragment (|\r	label = l.\r	action = a.\r|)";
			this.slots = [
				new SM("label", false, false),
				new SM("action", false, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`ButtonFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	^(document createElement: 'button')\r		appendChild: (document createTextNode: label);\r		at: 'onclick' put: [action value. false];\r		yourself\r)"),
				new MM("label", true, null),
				new MM("setOnce`label:", true, null),
				new MM("action", true, null),
				new MM("setOnce`action:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$ButtonFragment = (function ($l, $a) {
				var self = this;
				self.$super$HopscotchForHTML5$ButtonFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($l, $a) {
				var self = this;
				self.$superInit$HopscotchForHTML5$ButtonFragment($l, $a);
				self.$setOnce$label$($l);
				self.$setOnce$action$($a);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				return (function (cascadeReceiver) {
					cascadeReceiver.$appendChild$(self.$enclosingObjects$HopscotchForHTML5$ButtonFragment[0].$document().$createTextNode$(self.$label()));
					cascadeReceiver.$at$put$("onclick", (function () {
						self.$action().$value();
						return false;
					}));
					return cascadeReceiver.$yourself();
				})(self.$enclosingObjects$HopscotchForHTML5$ButtonFragment[0].$document().$createElement$("button"));
			});
			this.$label = (function () {
				return this.$label$slot;
			});
			this.$setOnce$label$ = (function (v) {
				this.$label$slot = v;
				return this;
			});
			this.$action = (function () {
				return this.$action$slot;
			});
			this.$setOnce$action$ = (function (v) {
				this.$action$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`ButtonFragment";
					this.$superInit$HopscotchForHTML5$ButtonFragment = $.$superInit$HopscotchForHTML5$ButtonFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$label = $.$label;
					this.$setOnce$label$ = $.$setOnce$label$;
					this.$action = $.$action;
					this.$setOnce$action$ = $.$setOnce$action$;
					this.$enclosingObjects$HopscotchForHTML5$ButtonFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$ButtonFragment = runtimeSuperclass;
					this["HopscotchForHTML5`ButtonFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$label$slot = nil;
						this.$action$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`ButtonFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`ButtonFragment";
				this.slots = [];
				this.methods = [new MM("label:action:", true, null)];
				this.nestedClasses = [];
				this.$label$action$ = (function ($l, $a) {
					return (new this.nonMeta.basicNew()).$instance$initializer($l, $a);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`ButtonFragment";
						this.$label$action$ = $.$label$action$;
						this.$enclosingObjects$HopscotchForHTML5$ButtonFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$ButtonFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$CanvasFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`CanvasFragment";
			this.name = "HopscotchForHTML5`CanvasFragment";
			this.header = "CanvasFragment withExtent: e = LeafFragment (|\rprivate alien = document createElement: 'canvas'.\r|alien at: 'width' put: e x.\ralien at: 'height' put: e y.\r(alien at: 'style') at: 'position' put: 'relative')";
			this.slots = [new SM("alien", false, false)];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`CanvasFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("context", false, "context = (\r	^Context on: (alien getContext: '2d')\r)"),
				new MM("createVisual", false, "createVisual = (\r	^alien\r)"),
				new MM("keyDownAction:", false, "keyDownAction: onKeyPressed <[:String]> = (\r	(* The canvas element itself doesn't seem to get key events. *)\r	body\r		addEventListener: 'keydown'\r		with: [:e | onKeyPressed value: (String fromCharCode: (e at: 'keyCode'))]\r)"),
				new MM("mouseDownAction:", false, "mouseDownAction: onMouseDown <[:Point]> = (\r	alien\r		addEventListener: 'mousedown'\r		with: [:e | onMouseDown value: (e at: 'offsetX') @ (e at: 'offsetY')].\r)"),
				new MM("mouseMovedAction:", false, "mouseMovedAction: onMouseMoved <[:Point]> = (\r	alien\r		addEventListener: 'mousemove'\r		with: [:e | onMouseMoved value: (e at: 'offsetX') @ (e at: 'offsetY')].\r)"),
				new MM("alien", true, null),
				new MM("setOnce`alien:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$CanvasFragment = (function ($e) {
				var self = this;
				self.$super$HopscotchForHTML5$CanvasFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($e) {
				var self = this;
				self.$superInit$HopscotchForHTML5$CanvasFragment($e);
				self.$setOnce$alien$(self.$enclosingObjects$HopscotchForHTML5$CanvasFragment[0].$document().$createElement$("canvas"));
				self.$alien().$at$put$("width", $e.$x());
				self.$alien().$at$put$("height", $e.$y());
				self.$alien().$at$("style").$at$put$("position", "relative");
				return self;
			});
			this.$context = (function () {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$CanvasFragment[0].$Context().$on$(self.$alien().$getContext$("2d"));
			});
			this.$createVisual = (function () {
				var self = this;
				return self.$alien();
			});
			this.$keyDownAction$ = (function ($onKeyPressed) {
				var self = this;
				self.$enclosingObjects$HopscotchForHTML5$CanvasFragment[0].$body().$addEventListener$with$("keydown", (function ($e) {
					return $onKeyPressed.$value$(self.$String().$fromCharCode$($e.$at$("keyCode")));
				}));
				return self;
			});
			this.$mouseDownAction$ = (function ($onMouseDown) {
				var self = this;
				self.$alien().$addEventListener$with$("mousedown", (function ($e) {
					return $onMouseDown.$value$($e.$at$("offsetX").$$at($e.$at$("offsetY")));
				}));
				return self;
			});
			this.$mouseMovedAction$ = (function ($onMouseMoved) {
				var self = this;
				self.$alien().$addEventListener$with$("mousemove", (function ($e) {
					return $onMouseMoved.$value$($e.$at$("offsetX").$$at($e.$at$("offsetY")));
				}));
				return self;
			});
			this.$alien = (function () {
				return this.$alien$slot;
			});
			this.$setOnce$alien$ = (function (v) {
				this.$alien$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`CanvasFragment";
					this.$superInit$HopscotchForHTML5$CanvasFragment = $.$superInit$HopscotchForHTML5$CanvasFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$context = $.$context;
					this.$createVisual = $.$createVisual;
					this.$keyDownAction$ = $.$keyDownAction$;
					this.$mouseDownAction$ = $.$mouseDownAction$;
					this.$mouseMovedAction$ = $.$mouseMovedAction$;
					this.$alien = $.$alien;
					this.$setOnce$alien$ = $.$setOnce$alien$;
					this.$enclosingObjects$HopscotchForHTML5$CanvasFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$CanvasFragment = runtimeSuperclass;
					this["HopscotchForHTML5`CanvasFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$alien$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`CanvasFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`CanvasFragment";
				this.slots = [];
				this.methods = [new MM("withExtent:", true, null)];
				this.nestedClasses = [];
				this.$withExtent$ = (function ($e) {
					return (new this.nonMeta.basicNew()).$instance$initializer($e);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`CanvasFragment";
						this.$withExtent$ = $.$withExtent$;
						this.$enclosingObjects$HopscotchForHTML5$CanvasFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$CanvasFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$ColumnComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`ColumnComposer";
			this.name = "HopscotchForHTML5`ColumnComposer";
			this.header = "ColumnComposer definitions: fragments = SequenceComposer definitions: fragments (|\r|)";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`ColumnComposer", true, "definitions: fragments"),
				new MM("instance`initializer", true, "definitions: fragments"),
				new MM("flexDirection", false, "flexDirection = (\r	^'column'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$ColumnComposer = (function ($fragments) {
				var self = this;
				self.$super$HopscotchForHTML5$ColumnComposer.$instance$initializer.call(self, $fragments);
				return self;
			});
			this.$instance$initializer = (function ($fragments) {
				var self = this;
				self.$superInit$HopscotchForHTML5$ColumnComposer($fragments);
				return self;
			});
			this.$flexDirection = (function () {
				var self = this;
				return "column";
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`ColumnComposer";
					this.$superInit$HopscotchForHTML5$ColumnComposer = $.$superInit$HopscotchForHTML5$ColumnComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$flexDirection = $.$flexDirection;
					this.$enclosingObjects$HopscotchForHTML5$ColumnComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$ColumnComposer = runtimeSuperclass;
					this["HopscotchForHTML5`ColumnComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`ColumnComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`ColumnComposer";
				this.slots = [];
				this.methods = [new MM("definitions:", true, null)];
				this.nestedClasses = [];
				this.$definitions$ = (function ($fragments) {
					return (new this.nonMeta.basicNew()).$instance$initializer($fragments);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`ColumnComposer";
						this.$definitions$ = $.$definitions$;
						this.$enclosingObjects$HopscotchForHTML5$ColumnComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$ColumnComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$Composer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`Composer";
			this.name = "HopscotchForHTML5`Composer";
			this.header = "Composer = Fragment ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`Composer", true, "Fragment"),
				new MM("instance`initializer", true, "Fragment")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$Composer = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$Composer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$Composer();
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`Composer";
					this.$superInit$HopscotchForHTML5$Composer = $.$superInit$HopscotchForHTML5$Composer;
					this.$instance$initializer = $.$instance$initializer;
					this.$enclosingObjects$HopscotchForHTML5$Composer = enclosingObjects;
					this.$super$HopscotchForHTML5$Composer = runtimeSuperclass;
					this["HopscotchForHTML5`Composer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`Composer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`Composer";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`Composer";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$Composer = enclosingObjects;
						this.$super$HopscotchForHTML5$Composer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$DeferredContentComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`DeferredContentComposer";
			this.name = "HopscotchForHTML5`DeferredContentComposer";
			this.header = "DeferredContentComposer initialContent: ic contentSource: cs = Composer (|\r	initialContent <Fragment> = ic.\r	contentSource <[Fragment]> = cs.\r|)";
			this.slots = [
				new SM("initialContent", false, false),
				new SM("contentSource", false, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`DeferredContentComposer", true, "Composer"),
				new MM("instance`initializer", true, "Composer"),
				new MM("createVisual", false, "createVisual = (\r	| div initialVisual |\r	div:: document createElement: 'div'.\r	initialVisual:: initialContent visual.\r	div appendChild: initialVisual.\r	deferAction: [\r		| deferredFragment = contentSource value. |\r		deferredFragment parent: self.\r		(* replace: new with: old due to stupid DOM argument ordering *)\r		div replaceChild: deferredFragment visual with: initialVisual].\r	^div\r)"),
				new MM("initialContent", true, null),
				new MM("setOnce`initialContent:", true, null),
				new MM("contentSource", true, null),
				new MM("setOnce`contentSource:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$DeferredContentComposer = (function ($ic, $cs) {
				var self = this;
				self.$super$HopscotchForHTML5$DeferredContentComposer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($ic, $cs) {
				var self = this;
				self.$superInit$HopscotchForHTML5$DeferredContentComposer($ic, $cs);
				self.$setOnce$initialContent$($ic);
				self.$setOnce$contentSource$($cs);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $div = nil;
				var $initialVisual = nil;
				$div = self.$enclosingObjects$HopscotchForHTML5$DeferredContentComposer[0].$document().$createElement$("div");
				$initialVisual = self.$initialContent().$visual();
				$div.$appendChild$($initialVisual);
				self.$enclosingObjects$HopscotchForHTML5$DeferredContentComposer[0].$deferAction$((function () {
					var $deferredFragment = nil;
					$deferredFragment = self.$contentSource().$value();
					$deferredFragment.$parent$(self);
					return $div.$replaceChild$with$($deferredFragment.$visual(), $initialVisual);
				}));
				return $div;
			});
			this.$initialContent = (function () {
				return this.$initialContent$slot;
			});
			this.$setOnce$initialContent$ = (function (v) {
				this.$initialContent$slot = v;
				return this;
			});
			this.$contentSource = (function () {
				return this.$contentSource$slot;
			});
			this.$setOnce$contentSource$ = (function (v) {
				this.$contentSource$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`DeferredContentComposer";
					this.$superInit$HopscotchForHTML5$DeferredContentComposer = $.$superInit$HopscotchForHTML5$DeferredContentComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$initialContent = $.$initialContent;
					this.$setOnce$initialContent$ = $.$setOnce$initialContent$;
					this.$contentSource = $.$contentSource;
					this.$setOnce$contentSource$ = $.$setOnce$contentSource$;
					this.$enclosingObjects$HopscotchForHTML5$DeferredContentComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$DeferredContentComposer = runtimeSuperclass;
					this["HopscotchForHTML5`DeferredContentComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$initialContent$slot = nil;
						this.$contentSource$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`DeferredContentComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`DeferredContentComposer";
				this.slots = [];
				this.methods = [new MM("initialContent:contentSource:", true, null)];
				this.nestedClasses = [];
				this.$initialContent$contentSource$ = (function ($ic, $cs) {
					return (new this.nonMeta.basicNew()).$instance$initializer($ic, $cs);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`DeferredContentComposer";
						this.$initialContent$contentSource$ = $.$initialContent$contentSource$;
						this.$enclosingObjects$HopscotchForHTML5$DeferredContentComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$DeferredContentComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$Fragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`Fragment";
			this.name = "HopscotchForHTML5`Fragment";
			this.header = "Fragment = (| visualX parent size ::= nil. expansibility ::= 0. compressibility ::= 0. |)";
			this.slots = [
				new SM("visualX", true, false),
				new SM("parent", true, false),
				new SM("size", true, false),
				new SM("expansibility", true, false),
				new SM("compressibility", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`Fragment", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("createVisual", false, "createVisual = (\r	subclassResponsibility\r)"),
				new MM("elasticity:", false, "elasticity: x = (\r	expansibility: x.\r	compressibility: x.\r)"),
				new MM("hasVisual", false, "hasVisual = (\r	^visualX isNil not\r)"),
				new MM("shell", false, "shell = (\r	^parent isNil\r		ifTrue: [Error signal: 'hierarchy not installed in a shell']\r		ifFalse: [parent shell]\r)"),
				new MM("visual", false, "visual = (\r	visualX isNil ifTrue: [visualX:: createVisual].\r	^visualX\r)"),
				new MM("width:elasticity:", false, "width: w elasticity: e= (\r	size: w.\r	expansibility: e.\r	compressibility: e.\r)"),
				new MM("visualX", true, null),
				new MM("visualX:", true, null),
				new MM("parent", true, null),
				new MM("parent:", true, null),
				new MM("size", true, null),
				new MM("size:", true, null),
				new MM("expansibility", true, null),
				new MM("expansibility:", true, null),
				new MM("compressibility", true, null),
				new MM("compressibility:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$Fragment = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$Fragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$Fragment();
				self.$size$(nil);
				self.$expansibility$(0);
				self.$compressibility$(0);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$elasticity$ = (function ($x) {
				var self = this;
				self.$expansibility$($x);
				self.$compressibility$($x);
				return self;
			});
			this.$hasVisual = (function () {
				var self = this;
				return self.$visualX().$isNil().$not();
			});
			this.$shell = (function () {
				var self = this;
				return self.$parent().$isNil().$ifTrue$ifFalse$((function () {
					return self.$Error().$signal$("hierarchy not installed in a shell");
				}), (function () {
					return self.$parent().$shell();
				}));
			});
			this.$visual = (function () {
				var self = this;
				if (self.$visualX().$isNil()) {
					self.$visualX$(self.$createVisual());
				} else {
					nil;
				};
				return self.$visualX();
			});
			this.$width$elasticity$ = (function ($w, $e) {
				var self = this;
				self.$size$($w);
				self.$expansibility$($e);
				self.$compressibility$($e);
				return self;
			});
			this.$visualX = (function () {
				return this.$visualX$slot;
			});
			this.$visualX$ = (function (v) {
				this.$visualX$slot = v;
				return this;
			});
			this.$parent = (function () {
				return this.$parent$slot;
			});
			this.$parent$ = (function (v) {
				this.$parent$slot = v;
				return this;
			});
			this.$size = (function () {
				return this.$size$slot;
			});
			this.$size$ = (function (v) {
				this.$size$slot = v;
				return this;
			});
			this.$expansibility = (function () {
				return this.$expansibility$slot;
			});
			this.$expansibility$ = (function (v) {
				this.$expansibility$slot = v;
				return this;
			});
			this.$compressibility = (function () {
				return this.$compressibility$slot;
			});
			this.$compressibility$ = (function (v) {
				this.$compressibility$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`Fragment";
					this.$superInit$HopscotchForHTML5$Fragment = $.$superInit$HopscotchForHTML5$Fragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$elasticity$ = $.$elasticity$;
					this.$hasVisual = $.$hasVisual;
					this.$shell = $.$shell;
					this.$visual = $.$visual;
					this.$width$elasticity$ = $.$width$elasticity$;
					this.$visualX = $.$visualX;
					this.$visualX$ = $.$visualX$;
					this.$parent = $.$parent;
					this.$parent$ = $.$parent$;
					this.$size = $.$size;
					this.$size$ = $.$size$;
					this.$expansibility = $.$expansibility;
					this.$expansibility$ = $.$expansibility$;
					this.$compressibility = $.$compressibility;
					this.$compressibility$ = $.$compressibility$;
					this.$enclosingObjects$HopscotchForHTML5$Fragment = enclosingObjects;
					this.$super$HopscotchForHTML5$Fragment = runtimeSuperclass;
					this["HopscotchForHTML5`Fragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$visualX$slot = nil;
						this.$parent$slot = nil;
						this.$size$slot = nil;
						this.$expansibility$slot = nil;
						this.$compressibility$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`Fragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`Fragment";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`Fragment";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$Fragment = enclosingObjects;
						this.$super$HopscotchForHTML5$Fragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$Gradient = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`Gradient";
			this.name = "HopscotchForHTML5`Gradient";
			this.header = "Gradient from: a to: b = (|\r	topColor = a.\r	bottomColor = b.\r|)";
			this.slots = [
				new SM("topColor", false, false),
				new SM("bottomColor", false, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`Gradient", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("applyToStyle:", false, "applyToStyle: style = (\r	| value |\r	value:: '(top,', topColor asCSSString, ',', bottomColor asCSSString, ')'.\r	style setProperty: 'background-image' to: '-webkit-linear-gradient', value.\r	style setProperty: 'background-image' to: '-moz-linear-gradient', value.\r)"),
				new MM("topColor", true, null),
				new MM("setOnce`topColor:", true, null),
				new MM("bottomColor", true, null),
				new MM("setOnce`bottomColor:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$Gradient = (function ($a, $b) {
				var self = this;
				self.$super$HopscotchForHTML5$Gradient.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($a, $b) {
				var self = this;
				self.$superInit$HopscotchForHTML5$Gradient($a, $b);
				self.$setOnce$topColor$($a);
				self.$setOnce$bottomColor$($b);
				return self;
			});
			this.$applyToStyle$ = (function ($style) {
				var self = this;
				var $value = nil;
				$value = ("(top,").$$comma(self.$topColor().$asCSSString()).$$comma(",").$$comma(self.$bottomColor().$asCSSString()).$$comma(")");
				$style.$setProperty$to$("background-image", ("-webkit-linear-gradient").$$comma($value));
				$style.$setProperty$to$("background-image", ("-moz-linear-gradient").$$comma($value));
				return self;
			});
			this.$topColor = (function () {
				return this.$topColor$slot;
			});
			this.$setOnce$topColor$ = (function (v) {
				this.$topColor$slot = v;
				return this;
			});
			this.$bottomColor = (function () {
				return this.$bottomColor$slot;
			});
			this.$setOnce$bottomColor$ = (function (v) {
				this.$bottomColor$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`Gradient";
					this.$superInit$HopscotchForHTML5$Gradient = $.$superInit$HopscotchForHTML5$Gradient;
					this.$instance$initializer = $.$instance$initializer;
					this.$applyToStyle$ = $.$applyToStyle$;
					this.$topColor = $.$topColor;
					this.$setOnce$topColor$ = $.$setOnce$topColor$;
					this.$bottomColor = $.$bottomColor;
					this.$setOnce$bottomColor$ = $.$setOnce$bottomColor$;
					this.$enclosingObjects$HopscotchForHTML5$Gradient = enclosingObjects;
					this.$super$HopscotchForHTML5$Gradient = runtimeSuperclass;
					this["HopscotchForHTML5`Gradient"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$topColor$slot = nil;
						this.$bottomColor$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`Gradient"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`Gradient";
				this.slots = [];
				this.methods = [new MM("from:to:", true, null)];
				this.nestedClasses = [];
				this.$from$to$ = (function ($a, $b) {
					return (new this.nonMeta.basicNew()).$instance$initializer($a, $b);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`Gradient";
						this.$from$to$ = $.$from$to$;
						this.$enclosingObjects$HopscotchForHTML5$Gradient = enclosingObjects;
						this.$super$HopscotchForHTML5$Gradient = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$HolderComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`HolderComposer";
			this.name = "HopscotchForHTML5`HolderComposer";
			this.header = "HolderComposer withContent: definition = Composer (|\r	contentSource ::= definition.\r	actualContent\r|)";
			this.slots = [
				new SM("contentSource", true, false),
				new SM("actualContent", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`HolderComposer", true, "Composer"),
				new MM("instance`initializer", true, "Composer"),
				new MM("content", false, "content ^<Fragment> = (\r	actualContent isNil ifTrue: \r		[actualContent:: contentSource value.\r		actualContent parent: self].\r	^actualContent\r)"),
				new MM("content:", false, "content: fragment = (\r	fragment parent: self.\r	hasVisual ifTrue:\r		[ | oldContent newContent |\r		oldContent:: actualContent.\r		newContent:: actualContent:: fragment.\r		(* replace: new with: old due to stupid DOM argument ordering *)\r		visual replaceChild: newContent visual with: oldContent visual]\r	ifFalse: [actualContent:: fragment]\r)"),
				new MM("createVisual", false, "createVisual = (\r	| div |\r	div:: document createElement: 'div'.\r	div appendChild: content visual.\r	^div\r)"),
				new MM("refresh", false, "refresh = (\r	(contentSource isBlock and: [hasVisual])\r		ifTrue:\r			[ | oldContent newContent |\r			oldContent:: actualContent.\r			actualContent:: nil.\r			newContent:: content.\r			(* replace: new with: old due to stupid DOM argument ordering *)\r			visual replaceChild: newContent visual with: oldContent visual]\r		ifFalse:\r			[actualContent refresh].\r)"),
				new MM("contentSource", true, null),
				new MM("contentSource:", true, null),
				new MM("actualContent", true, null),
				new MM("actualContent:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$HolderComposer = (function ($definition) {
				var self = this;
				self.$super$HopscotchForHTML5$HolderComposer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($definition) {
				var self = this;
				self.$superInit$HopscotchForHTML5$HolderComposer($definition);
				self.$contentSource$($definition);
				return self;
			});
			this.$content = (function () {
				var self = this;
				if (self.$actualContent().$isNil()) {
					self.$actualContent$(self.$contentSource().$value());
					self.$actualContent().$parent$(self);
				} else {
					nil;
				};
				return self.$actualContent();
			});
			this.$content$ = (function ($fragment) {
				var self = this;
				$fragment.$parent$(self);
				if (self.$hasVisual()) {
					var $oldContent = nil;
					var $newContent = nil;
					$oldContent = self.$actualContent();
					$newContent = ((function ($setter_arg) {
						self.$actualContent$($setter_arg);
						return $setter_arg;
					})).$value$($fragment);
					self.$visual().$replaceChild$with$($newContent.$visual(), $oldContent.$visual());
				} else {
					self.$actualContent$($fragment);
				};
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $div = nil;
				$div = self.$enclosingObjects$HopscotchForHTML5$HolderComposer[0].$document().$createElement$("div");
				$div.$appendChild$(self.$content().$visual());
				return $div;
			});
			this.$refresh = (function () {
				var self = this;
				if (self.$contentSource().$isBlock() && self.$hasVisual()) {
					var $oldContent = nil;
					var $newContent = nil;
					$oldContent = self.$actualContent();
					self.$actualContent$(nil);
					$newContent = self.$content();
					self.$visual().$replaceChild$with$($newContent.$visual(), $oldContent.$visual());
				} else {
					self.$actualContent().$refresh();
				};
				return self;
			});
			this.$contentSource = (function () {
				return this.$contentSource$slot;
			});
			this.$contentSource$ = (function (v) {
				this.$contentSource$slot = v;
				return this;
			});
			this.$actualContent = (function () {
				return this.$actualContent$slot;
			});
			this.$actualContent$ = (function (v) {
				this.$actualContent$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`HolderComposer";
					this.$superInit$HopscotchForHTML5$HolderComposer = $.$superInit$HopscotchForHTML5$HolderComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$content = $.$content;
					this.$content$ = $.$content$;
					this.$createVisual = $.$createVisual;
					this.$refresh = $.$refresh;
					this.$contentSource = $.$contentSource;
					this.$contentSource$ = $.$contentSource$;
					this.$actualContent = $.$actualContent;
					this.$actualContent$ = $.$actualContent$;
					this.$enclosingObjects$HopscotchForHTML5$HolderComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$HolderComposer = runtimeSuperclass;
					this["HopscotchForHTML5`HolderComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$contentSource$slot = nil;
						this.$actualContent$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`HolderComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`HolderComposer";
				this.slots = [];
				this.methods = [new MM("withContent:", true, null)];
				this.nestedClasses = [];
				this.$withContent$ = (function ($definition) {
					return (new this.nonMeta.basicNew()).$instance$initializer($definition);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`HolderComposer";
						this.$withContent$ = $.$withContent$;
						this.$enclosingObjects$HopscotchForHTML5$HolderComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$HolderComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$HopscotchShell = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`HopscotchShell";
			this.name = "HopscotchForHTML5`HopscotchShell";
			this.header = "HopscotchShell = (|\r	navigator = NavigationHistory new.\r	currentPresenterX\r	contentHolder = document createElement: 'div'.\r|window at: 'onpopstate' put: [:e | userBack: e])";
			this.slots = [
				new SM("navigator", false, false),
				new SM("currentPresenterX", true, false),
				new SM("contentHolder", false, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`HopscotchShell", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("displayPresenter:", false, "displayPresenter: p = (\r	(* TODO: noticeX events *)\r	p parent: self.\r	contentHolder hasChildNodes\r		ifTrue: [contentHolder replaceChild: p visual from: (contentHolder at: 'firstChild')]\r		ifFalse: [contentHolder appendChild: p visual]\r)"),
				new MM("enterPresenter:", false, "enterPresenter: p = (\r	(* TODO: History stuff *)\r	\r	history pushState: (navigator idFor: p) title: p title.\r	displayPresenter: p\r)"),
				new MM("enterSubject:", false, "enterSubject: s = (\r	self enterPresenter: s presenter\r)"),
				new MM("shell", false, "shell = (\r	^self\r)"),
				new MM("userBack:", false, "userBack: e = (\r	| p = navigator presenterFor: (e at: 'state'). |\r	displayPresenter: p\r)"),
				new MM("navigator", true, null),
				new MM("setOnce`navigator:", true, null),
				new MM("currentPresenterX", true, null),
				new MM("currentPresenterX:", true, null),
				new MM("contentHolder", true, null),
				new MM("setOnce`contentHolder:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$HopscotchShell = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$HopscotchShell.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$HopscotchShell();
				self.$setOnce$navigator$(self.$enclosingObjects$HopscotchForHTML5$HopscotchShell[0].$NavigationHistory().$new());
				self.$setOnce$contentHolder$(self.$enclosingObjects$HopscotchForHTML5$HopscotchShell[0].$document().$createElement$("div"));
				self.$enclosingObjects$HopscotchForHTML5$HopscotchShell[0].$window().$at$put$("onpopstate", (function ($e) {
					return self.$userBack$($e);
				}));
				return self;
			});
			this.$displayPresenter$ = (function ($p) {
				var self = this;
				$p.$parent$(self);
				if (self.$contentHolder().$hasChildNodes()) {
					self.$contentHolder().$replaceChild$from$($p.$visual(), self.$contentHolder().$at$("firstChild"));
				} else {
					self.$contentHolder().$appendChild$($p.$visual());
				};
				return self;
			});
			this.$enterPresenter$ = (function ($p) {
				var self = this;
				self.$enclosingObjects$HopscotchForHTML5$HopscotchShell[0].$history().$pushState$title$(self.$navigator().$idFor$($p), $p.$title());
				self.$displayPresenter$($p);
				return self;
			});
			this.$enterSubject$ = (function ($s) {
				var self = this;
				self.$enterPresenter$($s.$presenter());
				return self;
			});
			this.$shell = (function () {
				var self = this;
				return self;
			});
			this.$userBack$ = (function ($e) {
				var self = this;
				var $p = nil;
				$p = self.$navigator().$presenterFor$($e.$at$("state"));
				self.$displayPresenter$($p);
				return self;
			});
			this.$navigator = (function () {
				return this.$navigator$slot;
			});
			this.$setOnce$navigator$ = (function (v) {
				this.$navigator$slot = v;
				return this;
			});
			this.$currentPresenterX = (function () {
				return this.$currentPresenterX$slot;
			});
			this.$currentPresenterX$ = (function (v) {
				this.$currentPresenterX$slot = v;
				return this;
			});
			this.$contentHolder = (function () {
				return this.$contentHolder$slot;
			});
			this.$setOnce$contentHolder$ = (function (v) {
				this.$contentHolder$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`HopscotchShell";
					this.$superInit$HopscotchForHTML5$HopscotchShell = $.$superInit$HopscotchForHTML5$HopscotchShell;
					this.$instance$initializer = $.$instance$initializer;
					this.$displayPresenter$ = $.$displayPresenter$;
					this.$enterPresenter$ = $.$enterPresenter$;
					this.$enterSubject$ = $.$enterSubject$;
					this.$shell = $.$shell;
					this.$userBack$ = $.$userBack$;
					this.$navigator = $.$navigator;
					this.$setOnce$navigator$ = $.$setOnce$navigator$;
					this.$currentPresenterX = $.$currentPresenterX;
					this.$currentPresenterX$ = $.$currentPresenterX$;
					this.$contentHolder = $.$contentHolder;
					this.$setOnce$contentHolder$ = $.$setOnce$contentHolder$;
					this.$enclosingObjects$HopscotchForHTML5$HopscotchShell = enclosingObjects;
					this.$super$HopscotchForHTML5$HopscotchShell = runtimeSuperclass;
					this["HopscotchForHTML5`HopscotchShell"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$navigator$slot = nil;
						this.$currentPresenterX$slot = nil;
						this.$contentHolder$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`HopscotchShell"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`HopscotchShell";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`HopscotchShell";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$HopscotchShell = enclosingObjects;
						this.$super$HopscotchForHTML5$HopscotchShell = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$HopscotchWindow = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`HopscotchWindow";
			this.name = "HopscotchForHTML5`HopscotchWindow";
			this.header = "HopscotchWindow openSubject: s = HopscotchShell (body appendChild: contentHolder.\r	enterSubject: s)";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`HopscotchWindow", true, "HopscotchShell"),
				new MM("instance`initializer", true, "HopscotchShell"),
				new MM("displayPresenter:", false, "displayPresenter: p = (\r	super displayPresenter: p.\r	document at: 'title' put: p title.\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$HopscotchWindow = (function ($s) {
				var self = this;
				self.$super$HopscotchForHTML5$HopscotchWindow.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($s) {
				var self = this;
				self.$superInit$HopscotchForHTML5$HopscotchWindow($s);
				self.$enclosingObjects$HopscotchForHTML5$HopscotchWindow[0].$body().$appendChild$(self.$contentHolder());
				self.$enterSubject$($s);
				return self;
			});
			this.$displayPresenter$ = (function ($p) {
				var self = this;
				self.$super$HopscotchForHTML5$HopscotchWindow.$displayPresenter$.call(self, $p);
				self.$enclosingObjects$HopscotchForHTML5$HopscotchWindow[0].$document().$at$put$("title", $p.$title());
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`HopscotchWindow";
					this.$superInit$HopscotchForHTML5$HopscotchWindow = $.$superInit$HopscotchForHTML5$HopscotchWindow;
					this.$instance$initializer = $.$instance$initializer;
					this.$displayPresenter$ = $.$displayPresenter$;
					this.$enclosingObjects$HopscotchForHTML5$HopscotchWindow = enclosingObjects;
					this.$super$HopscotchForHTML5$HopscotchWindow = runtimeSuperclass;
					this["HopscotchForHTML5`HopscotchWindow"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`HopscotchWindow"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`HopscotchWindow";
				this.slots = [];
				this.methods = [new MM("openSubject:", true, null)];
				this.nestedClasses = [];
				this.$openSubject$ = (function ($s) {
					return (new this.nonMeta.basicNew()).$instance$initializer($s);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`HopscotchWindow";
						this.$openSubject$ = $.$openSubject$;
						this.$enclosingObjects$HopscotchForHTML5$HopscotchWindow = enclosingObjects;
						this.$super$HopscotchForHTML5$HopscotchWindow = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$HyperlinkFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`HyperlinkFragment";
			this.name = "HopscotchForHTML5`HyperlinkFragment";
			this.header = "HyperlinkFragment label: l action: a = LeafFragment (|\r	label = l.\r	action = a.\r	color ::= Color r: 0 g: 0 b: 1.\r|)";
			this.slots = [
				new SM("label", false, false),
				new SM("action", false, false),
				new SM("color", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`HyperlinkFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	| anchor |\r	anchor:: document createElement: 'a'.\r	anchor at: 'href' put: '#'.\r	anchor appendChild: (document createTextNode: label).\r	anchor at: 'onclick' put: [action value. false].\r	(anchor at: 'style')\r		at: 'textDecoration' put: 'none'; (* No underline *)\r		at: 'overflow' put: 'hidden';\r		setProperty: 'white-space' to: 'nowrap'.\r	color isNil ifFalse:\r		[(anchor at: 'style') setProperty: 'color' to: color asCSSString].\r	^anchor\r)"),
				new MM("label", true, null),
				new MM("setOnce`label:", true, null),
				new MM("action", true, null),
				new MM("setOnce`action:", true, null),
				new MM("color", true, null),
				new MM("color:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$HyperlinkFragment = (function ($l, $a) {
				var self = this;
				self.$super$HopscotchForHTML5$HyperlinkFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($l, $a) {
				var self = this;
				self.$superInit$HopscotchForHTML5$HyperlinkFragment($l, $a);
				self.$setOnce$label$($l);
				self.$setOnce$action$($a);
				self.$color$(self.$enclosingObjects$HopscotchForHTML5$HyperlinkFragment[0].$Color().$r$g$b$(0, 0, 1));
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $anchor = nil;
				$anchor = self.$enclosingObjects$HopscotchForHTML5$HyperlinkFragment[0].$document().$createElement$("a");
				$anchor.$at$put$("href", "#");
				$anchor.$appendChild$(self.$enclosingObjects$HopscotchForHTML5$HyperlinkFragment[0].$document().$createTextNode$(self.$label()));
				$anchor.$at$put$("onclick", (function () {
					self.$action().$value();
					return false;
				}));
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("textDecoration", "none");
					cascadeReceiver.$at$put$("overflow", "hidden");
					return cascadeReceiver.$setProperty$to$("white-space", "nowrap");
				})($anchor.$at$("style"));
				if (!self.$color().$isNil()) {
					$anchor.$at$("style").$setProperty$to$("color", self.$color().$asCSSString());
				} else {
					nil;
				};
				return $anchor;
			});
			this.$label = (function () {
				return this.$label$slot;
			});
			this.$setOnce$label$ = (function (v) {
				this.$label$slot = v;
				return this;
			});
			this.$action = (function () {
				return this.$action$slot;
			});
			this.$setOnce$action$ = (function (v) {
				this.$action$slot = v;
				return this;
			});
			this.$color = (function () {
				return this.$color$slot;
			});
			this.$color$ = (function (v) {
				this.$color$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`HyperlinkFragment";
					this.$superInit$HopscotchForHTML5$HyperlinkFragment = $.$superInit$HopscotchForHTML5$HyperlinkFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$label = $.$label;
					this.$setOnce$label$ = $.$setOnce$label$;
					this.$action = $.$action;
					this.$setOnce$action$ = $.$setOnce$action$;
					this.$color = $.$color;
					this.$color$ = $.$color$;
					this.$enclosingObjects$HopscotchForHTML5$HyperlinkFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$HyperlinkFragment = runtimeSuperclass;
					this["HopscotchForHTML5`HyperlinkFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$label$slot = nil;
						this.$action$slot = nil;
						this.$color$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`HyperlinkFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`HyperlinkFragment";
				this.slots = [];
				this.methods = [new MM("label:action:", true, null)];
				this.nestedClasses = [];
				this.$label$action$ = (function ($l, $a) {
					return (new this.nonMeta.basicNew()).$instance$initializer($l, $a);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`HyperlinkFragment";
						this.$label$action$ = $.$label$action$;
						this.$enclosingObjects$HopscotchForHTML5$HyperlinkFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$HyperlinkFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$LeafFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`LeafFragment";
			this.name = "HopscotchForHTML5`LeafFragment";
			this.header = "LeafFragment = Fragment ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`LeafFragment", true, "Fragment"),
				new MM("instance`initializer", true, "Fragment")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$LeafFragment = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$LeafFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$LeafFragment();
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`LeafFragment";
					this.$superInit$HopscotchForHTML5$LeafFragment = $.$superInit$HopscotchForHTML5$LeafFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$enclosingObjects$HopscotchForHTML5$LeafFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$LeafFragment = runtimeSuperclass;
					this["HopscotchForHTML5`LeafFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`LeafFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`LeafFragment";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`LeafFragment";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$LeafFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$LeafFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$NavigationHistory = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`NavigationHistory";
			this.name = "HopscotchForHTML5`NavigationHistory";
			this.header = "NavigationHistory = (| nextId ::= 1. ids = Map new. |)";
			this.slots = [
				new SM("nextId", true, false),
				new SM("ids", false, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`NavigationHistory", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("idFor:", false, "idFor: x = (\r	^ids at: x ifAbsentPut: [nextId:: nextId + 1]\r)"),
				new MM("presenterFor:", false, "presenterFor: x = (\r	^ids keyAtValue: x\r)"),
				new MM("nextId", true, null),
				new MM("nextId:", true, null),
				new MM("ids", true, null),
				new MM("setOnce`ids:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$NavigationHistory = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$NavigationHistory.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$NavigationHistory();
				self.$nextId$(1);
				self.$setOnce$ids$(self.$enclosingObjects$HopscotchForHTML5$NavigationHistory[0].$Map().$new());
				return self;
			});
			this.$idFor$ = (function ($x) {
				var self = this;
				return self.$ids().$at$ifAbsentPut$($x, (function () {
					return ((function ($setter_arg) {
						self.$nextId$($setter_arg);
						return $setter_arg;
					})).$value$(self.$nextId() + 1);
				}));
			});
			this.$presenterFor$ = (function ($x) {
				var self = this;
				return self.$ids().$keyAtValue$($x);
			});
			this.$nextId = (function () {
				return this.$nextId$slot;
			});
			this.$nextId$ = (function (v) {
				this.$nextId$slot = v;
				return this;
			});
			this.$ids = (function () {
				return this.$ids$slot;
			});
			this.$setOnce$ids$ = (function (v) {
				this.$ids$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`NavigationHistory";
					this.$superInit$HopscotchForHTML5$NavigationHistory = $.$superInit$HopscotchForHTML5$NavigationHistory;
					this.$instance$initializer = $.$instance$initializer;
					this.$idFor$ = $.$idFor$;
					this.$presenterFor$ = $.$presenterFor$;
					this.$nextId = $.$nextId;
					this.$nextId$ = $.$nextId$;
					this.$ids = $.$ids;
					this.$setOnce$ids$ = $.$setOnce$ids$;
					this.$enclosingObjects$HopscotchForHTML5$NavigationHistory = enclosingObjects;
					this.$super$HopscotchForHTML5$NavigationHistory = runtimeSuperclass;
					this["HopscotchForHTML5`NavigationHistory"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$nextId$slot = nil;
						this.$ids$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`NavigationHistory"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`NavigationHistory";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`NavigationHistory";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$NavigationHistory = enclosingObjects;
						this.$super$HopscotchForHTML5$NavigationHistory = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$PaddedFrameComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`PaddedFrameComposer";
			this.name = "HopscotchForHTML5`PaddedFrameComposer";
			this.header = "PaddedFrameComposer content: c offsets: o = Composer (|\r	content = c.\r	offsets = o.\r	color\r|)";
			this.slots = [
				new SM("content", false, false),
				new SM("offsets", false, false),
				new SM("color", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`PaddedFrameComposer", true, "Composer"),
				new MM("instance`initializer", true, "Composer"),
				new MM("createVisual", false, "createVisual = (\r	| div = document createElement: 'div'. |\r	(div at: 'style')\r		at: 'paddingLeft' put: (offsets at: 1) printString, 'px';\r		at: 'paddingTop' put: (offsets at: 2) printString, 'px';\r		at: 'paddingRight' put: (offsets at: 3) printString, 'px';\r		at: 'paddingBottom' put: (offsets at: 4) printString, 'px'.\r	color isNil ifFalse: [color applyToStyle: (div at: 'style')].\r	content parent: self.\r	div appendChild: content visual.\r	^div\r)"),
				new MM("content", true, null),
				new MM("setOnce`content:", true, null),
				new MM("offsets", true, null),
				new MM("setOnce`offsets:", true, null),
				new MM("color", true, null),
				new MM("color:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$PaddedFrameComposer = (function ($c, $o) {
				var self = this;
				self.$super$HopscotchForHTML5$PaddedFrameComposer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($c, $o) {
				var self = this;
				self.$superInit$HopscotchForHTML5$PaddedFrameComposer($c, $o);
				self.$setOnce$content$($c);
				self.$setOnce$offsets$($o);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $div = nil;
				$div = self.$enclosingObjects$HopscotchForHTML5$PaddedFrameComposer[0].$document().$createElement$("div");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("paddingLeft", self.$offsets().$at$(1).$printString().$$comma("px"));
					cascadeReceiver.$at$put$("paddingTop", self.$offsets().$at$(2).$printString().$$comma("px"));
					cascadeReceiver.$at$put$("paddingRight", self.$offsets().$at$(3).$printString().$$comma("px"));
					return cascadeReceiver.$at$put$("paddingBottom", self.$offsets().$at$(4).$printString().$$comma("px"));
				})($div.$at$("style"));
				if (!self.$color().$isNil()) {
					self.$color().$applyToStyle$($div.$at$("style"));
				} else {
					nil;
				};
				self.$content().$parent$(self);
				$div.$appendChild$(self.$content().$visual());
				return $div;
			});
			this.$content = (function () {
				return this.$content$slot;
			});
			this.$setOnce$content$ = (function (v) {
				this.$content$slot = v;
				return this;
			});
			this.$offsets = (function () {
				return this.$offsets$slot;
			});
			this.$setOnce$offsets$ = (function (v) {
				this.$offsets$slot = v;
				return this;
			});
			this.$color = (function () {
				return this.$color$slot;
			});
			this.$color$ = (function (v) {
				this.$color$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`PaddedFrameComposer";
					this.$superInit$HopscotchForHTML5$PaddedFrameComposer = $.$superInit$HopscotchForHTML5$PaddedFrameComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$content = $.$content;
					this.$setOnce$content$ = $.$setOnce$content$;
					this.$offsets = $.$offsets;
					this.$setOnce$offsets$ = $.$setOnce$offsets$;
					this.$color = $.$color;
					this.$color$ = $.$color$;
					this.$enclosingObjects$HopscotchForHTML5$PaddedFrameComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$PaddedFrameComposer = runtimeSuperclass;
					this["HopscotchForHTML5`PaddedFrameComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$content$slot = nil;
						this.$offsets$slot = nil;
						this.$color$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`PaddedFrameComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`PaddedFrameComposer";
				this.slots = [];
				this.methods = [new MM("content:offsets:", true, null)];
				this.nestedClasses = [];
				this.$content$offsets$ = (function ($c, $o) {
					return (new this.nonMeta.basicNew()).$instance$initializer($c, $o);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`PaddedFrameComposer";
						this.$content$offsets$ = $.$content$offsets$;
						this.$enclosingObjects$HopscotchForHTML5$PaddedFrameComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$PaddedFrameComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$Presenter = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`Presenter";
			this.name = "HopscotchForHTML5`Presenter";
			this.header = "Presenter onSubject: aSubject = Fragment (|\rsubject ::= aSubject.\r|)";
			this.slots = [new SM("subject", true, false)];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`Presenter", true, "Fragment"),
				new MM("instance`initializer", true, "Fragment"),
				new MM("alert:", false, "alert: text = (\r	window alert: text\r)"),
				new MM("blank:", false, "blank: size = (\r	^BlankFragment new size: size\r)"),
				new MM("button:action:", false, "button: label <String> action: block <[]>= (\r	^ButtonFragment label: label action: block\r)"),
				new MM("canvas:", false, "canvas: extent <Point> = (\r	^CanvasFragment withExtent: extent\r)"),
				new MM("collapsed:expanded:", false, "collapsed: collapsed <[Fragment]> expanded: expanded <[Fragment]> ^<Fragment> = (\r	^collapsed: collapsed expanded: expanded initiallyExpanded: false\r)"),
				new MM("collapsed:expanded:initiallyExpanded:", false, "collapsed: collapsed <[Fragment]> expanded: expanded <[Fragment]> initiallyExpanded: flag <Boolean>\r^<Fragment> = (\r	^ToggleComposer\r		collapsedDefinition: collapsed\r		expandedDefinition: expanded\r		initiallyExpanded: flag\r)"),
				new MM("column:", false, "column: definitions = (\r	^ColumnComposer definitions: definitions\r)"),
				new MM("createVisual", false, "createVisual = (\r	| substance = definition. |\r	substance parent: self.\r	^substance visual\r)"),
				new MM("deferred:", false, "deferred: contentSource <[Fragment]> ^<Fragment> = (\r	^DeferredContentComposer initialContent: nothing contentSource: contentSource\r)"),
				new MM("definition", false, "definition ^<Fragment> = (\r	subclassResponsibility\r)"),
				new MM("enterSubject:", false, "enterSubject: s = (\r	(* TODO: use sendUp and open a new window if undelivered *)\r	^shell enterSubject: s\r)"),
				new MM("expanded:collapsed:", false, "expanded: expanded <[Fragment]> collapsed: collapsed <[Fragment]> ^<Fragment> = (\r	^collapsed: collapsed expanded: expanded initiallyExpanded: true\r)"),
				new MM("filler", false, "filler = (\r	^BlankFragment new expansibility: 1; compressibility: 1\r)"),
				new MM("holder:", false, "holder: definition <[Fragment]> = (\r	^HolderComposer withContent: definition\r)"),
				new MM("image:", false, "image: image = (\r	^StaticImageFragment image: image\r)"),
				new MM("initially:deferred:", false, "initially: initialContent <Fragment> deferred: contentSource <[Fragment]> ^<Fragment> = (\r	^DeferredContentComposer initialContent: initialContent contentSource: contentSource\r)"),
				new MM("label:", false, "label: label <String> = (\r	^StaticLabelFragment text: label\r)"),
				new MM("link:action:", false, "link: label <String> action: block <[]> = (\r	^HyperlinkFragment label: label action: block\r)"),
				new MM("mediumBlank", false, "mediumBlank = (\r	^blank: 10\r)"),
				new MM("nothing", false, "nothing = (\r	^BlankFragment new\r)"),
				new MM("padded:with:", false, "padded: definition with: offsets = (\r	^PaddedFrameComposer content: definition offsets: offsets\r)"),
				new MM("row:", false, "row: definitions = (\r	^RowComposer definitions: definitions\r)"),
				new MM("textDisplay:", false, "textDisplay: string = (\r	^TextDisplayFragment text: string\r)"),
				new MM("title", false, "title ^<String> = (\r	^subject title\r)"),
				new MM("subject", true, null),
				new MM("subject:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$Presenter = (function ($aSubject) {
				var self = this;
				self.$super$HopscotchForHTML5$Presenter.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($aSubject) {
				var self = this;
				self.$superInit$HopscotchForHTML5$Presenter($aSubject);
				self.$subject$($aSubject);
				return self;
			});
			this.$alert$ = (function ($text) {
				var self = this;
				self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$window().$alert$($text);
				return self;
			});
			this.$blank$ = (function ($size) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$BlankFragment().$new().$size$($size);
			});
			this.$button$action$ = (function ($label, $block) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$ButtonFragment().$label$action$($label, $block);
			});
			this.$canvas$ = (function ($extent) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$CanvasFragment().$withExtent$($extent);
			});
			this.$collapsed$expanded$ = (function ($collapsed, $expanded) {
				var self = this;
				return self.$collapsed$expanded$initiallyExpanded$($collapsed, $expanded, false);
			});
			this.$collapsed$expanded$initiallyExpanded$ = (function ($collapsed, $expanded, $flag) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$ToggleComposer().$collapsedDefinition$expandedDefinition$initiallyExpanded$($collapsed, $expanded, $flag);
			});
			this.$column$ = (function ($definitions) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$ColumnComposer().$definitions$($definitions);
			});
			this.$createVisual = (function () {
				var self = this;
				var $substance = nil;
				$substance = self.$definition();
				$substance.$parent$(self);
				return $substance.$visual();
			});
			this.$deferred$ = (function ($contentSource) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$DeferredContentComposer().$initialContent$contentSource$(self.$nothing(), $contentSource);
			});
			this.$definition = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$enterSubject$ = (function ($s) {
				var self = this;
				return self.$shell().$enterSubject$($s);
			});
			this.$expanded$collapsed$ = (function ($expanded, $collapsed) {
				var self = this;
				return self.$collapsed$expanded$initiallyExpanded$($collapsed, $expanded, true);
			});
			this.$filler = (function () {
				var self = this;
				return (function (cascadeReceiver) {
					cascadeReceiver.$expansibility$(1);
					return cascadeReceiver.$compressibility$(1);
				})(self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$BlankFragment().$new());
			});
			this.$holder$ = (function ($definition) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$HolderComposer().$withContent$($definition);
			});
			this.$image$ = (function ($image) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$StaticImageFragment().$image$($image);
			});
			this.$initially$deferred$ = (function ($initialContent, $contentSource) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$DeferredContentComposer().$initialContent$contentSource$($initialContent, $contentSource);
			});
			this.$label$ = (function ($label) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$StaticLabelFragment().$text$($label);
			});
			this.$link$action$ = (function ($label, $block) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$HyperlinkFragment().$label$action$($label, $block);
			});
			this.$mediumBlank = (function () {
				var self = this;
				return self.$blank$(10);
			});
			this.$nothing = (function () {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$BlankFragment().$new();
			});
			this.$padded$with$ = (function ($definition, $offsets) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$PaddedFrameComposer().$content$offsets$($definition, $offsets);
			});
			this.$row$ = (function ($definitions) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$RowComposer().$definitions$($definitions);
			});
			this.$textDisplay$ = (function ($string) {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$Presenter[0].$TextDisplayFragment().$text$($string);
			});
			this.$title = (function () {
				var self = this;
				return self.$subject().$title();
			});
			this.$subject = (function () {
				return this.$subject$slot;
			});
			this.$subject$ = (function (v) {
				this.$subject$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`Presenter";
					this.$superInit$HopscotchForHTML5$Presenter = $.$superInit$HopscotchForHTML5$Presenter;
					this.$instance$initializer = $.$instance$initializer;
					this.$alert$ = $.$alert$;
					this.$blank$ = $.$blank$;
					this.$button$action$ = $.$button$action$;
					this.$canvas$ = $.$canvas$;
					this.$collapsed$expanded$ = $.$collapsed$expanded$;
					this.$collapsed$expanded$initiallyExpanded$ = $.$collapsed$expanded$initiallyExpanded$;
					this.$column$ = $.$column$;
					this.$createVisual = $.$createVisual;
					this.$deferred$ = $.$deferred$;
					this.$definition = $.$definition;
					this.$enterSubject$ = $.$enterSubject$;
					this.$expanded$collapsed$ = $.$expanded$collapsed$;
					this.$filler = $.$filler;
					this.$holder$ = $.$holder$;
					this.$image$ = $.$image$;
					this.$initially$deferred$ = $.$initially$deferred$;
					this.$label$ = $.$label$;
					this.$link$action$ = $.$link$action$;
					this.$mediumBlank = $.$mediumBlank;
					this.$nothing = $.$nothing;
					this.$padded$with$ = $.$padded$with$;
					this.$row$ = $.$row$;
					this.$textDisplay$ = $.$textDisplay$;
					this.$title = $.$title;
					this.$subject = $.$subject;
					this.$subject$ = $.$subject$;
					this.$enclosingObjects$HopscotchForHTML5$Presenter = enclosingObjects;
					this.$super$HopscotchForHTML5$Presenter = runtimeSuperclass;
					this["HopscotchForHTML5`Presenter"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$subject$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`Presenter"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`Presenter";
				this.slots = [];
				this.methods = [new MM("onSubject:", true, null)];
				this.nestedClasses = [];
				this.$onSubject$ = (function ($aSubject) {
					return (new this.nonMeta.basicNew()).$instance$initializer($aSubject);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`Presenter";
						this.$onSubject$ = $.$onSubject$;
						this.$enclosingObjects$HopscotchForHTML5$Presenter = enclosingObjects;
						this.$super$HopscotchForHTML5$Presenter = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$RowComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`RowComposer";
			this.name = "HopscotchForHTML5`RowComposer";
			this.header = "RowComposer definitions: fragments = SequenceComposer definitions: fragments (|\r|)";
			this.slots = [];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`RowComposer", true, "definitions: fragments"),
				new MM("instance`initializer", true, "definitions: fragments"),
				new MM("flexDirection", false, "flexDirection = (\r	^'row'\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$RowComposer = (function ($fragments) {
				var self = this;
				self.$super$HopscotchForHTML5$RowComposer.$instance$initializer.call(self, $fragments);
				return self;
			});
			this.$instance$initializer = (function ($fragments) {
				var self = this;
				self.$superInit$HopscotchForHTML5$RowComposer($fragments);
				return self;
			});
			this.$flexDirection = (function () {
				var self = this;
				return "row";
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`RowComposer";
					this.$superInit$HopscotchForHTML5$RowComposer = $.$superInit$HopscotchForHTML5$RowComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$flexDirection = $.$flexDirection;
					this.$enclosingObjects$HopscotchForHTML5$RowComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$RowComposer = runtimeSuperclass;
					this["HopscotchForHTML5`RowComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["HopscotchForHTML5`RowComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`RowComposer";
				this.slots = [];
				this.methods = [new MM("definitions:", true, null)];
				this.nestedClasses = [];
				this.$definitions$ = (function ($fragments) {
					return (new this.nonMeta.basicNew()).$instance$initializer($fragments);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`RowComposer";
						this.$definitions$ = $.$definitions$;
						this.$enclosingObjects$HopscotchForHTML5$RowComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$RowComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$SequenceComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`SequenceComposer";
			this.name = "HopscotchForHTML5`SequenceComposer";
			this.header = "SequenceComposer definitions: fragments = Composer (|\r	definitions = fragments.\r	color\r|)";
			this.slots = [
				new SM("definitions", false, false),
				new SM("color", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`SequenceComposer", true, "Composer"),
				new MM("instance`initializer", true, "Composer"),
				new MM("createVisual", false, "createVisual = (\r	| container |\r	container:: document createElement: 'div'.\r	(container at: 'style')\r		at: 'overflow' put: 'hidden';\r		at: 'display' put: '-webkit-flex';\r		at: 'display' put: 'flex';\r		at: '-webkit-flex-direction' put: flexDirection;\r		setProperty: 'flex-direction' to: flexDirection.\r	color isNil ifFalse: \r		[color applyToStyle: (container at: 'style')].\r	definitions do: [:fragment |\r		| cell |\r		fragment parent: self.\r		cell:: document createElement: 'div'.\r		cell appendChild: fragment visual.\r		(cell at: 'style')\r			at: '-webkit-flex-grow' put: fragment expansibility;\r			setProperty: 'flex-grow' to: fragment expansibility;\r			at: '-webkit-flex-shrink' put: fragment compressibility;\r			setProperty: 'flex-shrink' to: fragment compressibility.\r		fragment size isNil ifFalse:\r			[(cell at: 'style') \r				at: 'flexBasis' put: fragment size printString, 'px';\r				at: '-webkit-flex-basis' put: fragment size printString, 'px'].\r		container appendChild: cell].\r	^container\r)"),
				new MM("definitions", true, null),
				new MM("setOnce`definitions:", true, null),
				new MM("color", true, null),
				new MM("color:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$SequenceComposer = (function ($fragments) {
				var self = this;
				self.$super$HopscotchForHTML5$SequenceComposer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($fragments) {
				var self = this;
				self.$superInit$HopscotchForHTML5$SequenceComposer($fragments);
				self.$setOnce$definitions$($fragments);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $container = nil;
				$container = self.$enclosingObjects$HopscotchForHTML5$SequenceComposer[0].$document().$createElement$("div");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("overflow", "hidden");
					cascadeReceiver.$at$put$("display", "-webkit-flex");
					cascadeReceiver.$at$put$("display", "flex");
					cascadeReceiver.$at$put$("-webkit-flex-direction", self.$flexDirection());
					return cascadeReceiver.$setProperty$to$("flex-direction", self.$flexDirection());
				})($container.$at$("style"));
				if (!self.$color().$isNil()) {
					self.$color().$applyToStyle$($container.$at$("style"));
				} else {
					nil;
				};
				self.$definitions().$do$((function ($fragment) {
					var $cell = nil;
					$fragment.$parent$(self);
					$cell = self.$enclosingObjects$HopscotchForHTML5$SequenceComposer[0].$document().$createElement$("div");
					$cell.$appendChild$($fragment.$visual());
					(function (cascadeReceiver) {
						cascadeReceiver.$at$put$("-webkit-flex-grow", $fragment.$expansibility());
						cascadeReceiver.$setProperty$to$("flex-grow", $fragment.$expansibility());
						cascadeReceiver.$at$put$("-webkit-flex-shrink", $fragment.$compressibility());
						return cascadeReceiver.$setProperty$to$("flex-shrink", $fragment.$compressibility());
					})($cell.$at$("style"));
					if (!$fragment.$size().$isNil()) {
						(function (cascadeReceiver) {
							cascadeReceiver.$at$put$("flexBasis", $fragment.$size().$printString().$$comma("px"));
							return cascadeReceiver.$at$put$("-webkit-flex-basis", $fragment.$size().$printString().$$comma("px"));
						})($cell.$at$("style"));
					} else {
						nil;
					};
					return $container.$appendChild$($cell);
				}));
				return $container;
			});
			this.$definitions = (function () {
				return this.$definitions$slot;
			});
			this.$setOnce$definitions$ = (function (v) {
				this.$definitions$slot = v;
				return this;
			});
			this.$color = (function () {
				return this.$color$slot;
			});
			this.$color$ = (function (v) {
				this.$color$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`SequenceComposer";
					this.$superInit$HopscotchForHTML5$SequenceComposer = $.$superInit$HopscotchForHTML5$SequenceComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$definitions = $.$definitions;
					this.$setOnce$definitions$ = $.$setOnce$definitions$;
					this.$color = $.$color;
					this.$color$ = $.$color$;
					this.$enclosingObjects$HopscotchForHTML5$SequenceComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$SequenceComposer = runtimeSuperclass;
					this["HopscotchForHTML5`SequenceComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$definitions$slot = nil;
						this.$color$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`SequenceComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`SequenceComposer";
				this.slots = [];
				this.methods = [new MM("definitions:", true, null)];
				this.nestedClasses = [];
				this.$definitions$ = (function ($fragments) {
					return (new this.nonMeta.basicNew()).$instance$initializer($fragments);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`SequenceComposer";
						this.$definitions$ = $.$definitions$;
						this.$enclosingObjects$HopscotchForHTML5$SequenceComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$SequenceComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$StaticImageFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`StaticImageFragment";
			this.name = "HopscotchForHTML5`StaticImageFragment";
			this.header = "StaticImageFragment image: i = LeafFragment (|\r	image = i.\r|)";
			this.slots = [new SM("image", false, false)];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`StaticImageFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	^image cloneNode: false (* Not deep *)\r)"),
				new MM("image", true, null),
				new MM("setOnce`image:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$StaticImageFragment = (function ($i) {
				var self = this;
				self.$super$HopscotchForHTML5$StaticImageFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($i) {
				var self = this;
				self.$superInit$HopscotchForHTML5$StaticImageFragment($i);
				self.$setOnce$image$($i);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				return self.$image().$cloneNode$(false);
			});
			this.$image = (function () {
				return this.$image$slot;
			});
			this.$setOnce$image$ = (function (v) {
				this.$image$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`StaticImageFragment";
					this.$superInit$HopscotchForHTML5$StaticImageFragment = $.$superInit$HopscotchForHTML5$StaticImageFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$image = $.$image;
					this.$setOnce$image$ = $.$setOnce$image$;
					this.$enclosingObjects$HopscotchForHTML5$StaticImageFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$StaticImageFragment = runtimeSuperclass;
					this["HopscotchForHTML5`StaticImageFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$image$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`StaticImageFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`StaticImageFragment";
				this.slots = [];
				this.methods = [new MM("image:", true, null)];
				this.nestedClasses = [];
				this.$image$ = (function ($i) {
					return (new this.nonMeta.basicNew()).$instance$initializer($i);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`StaticImageFragment";
						this.$image$ = $.$image$;
						this.$enclosingObjects$HopscotchForHTML5$StaticImageFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$StaticImageFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$StaticLabelFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`StaticLabelFragment";
			this.name = "HopscotchForHTML5`StaticLabelFragment";
			this.header = "StaticLabelFragment text: t = LeafFragment (|\r	text = t.\r	color\r|)";
			this.slots = [
				new SM("text", false, false),
				new SM("color", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`StaticLabelFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	| div = document createElement: 'div'. |\r	(div at: 'style') \r		at: 'overflow' put: 'hidden';\r		setProperty: 'white-space' to: 'pre'.\r	div at: 'textContent' put: text.\r	color isNil ifFalse:\r		[(div at: 'style') setProperty: 'color' to: color asCSSString].\r	^div\r)"),
				new MM("text", true, null),
				new MM("setOnce`text:", true, null),
				new MM("color", true, null),
				new MM("color:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$StaticLabelFragment = (function ($t) {
				var self = this;
				self.$super$HopscotchForHTML5$StaticLabelFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($t) {
				var self = this;
				self.$superInit$HopscotchForHTML5$StaticLabelFragment($t);
				self.$setOnce$text$($t);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $div = nil;
				$div = self.$enclosingObjects$HopscotchForHTML5$StaticLabelFragment[0].$document().$createElement$("div");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("overflow", "hidden");
					return cascadeReceiver.$setProperty$to$("white-space", "pre");
				})($div.$at$("style"));
				$div.$at$put$("textContent", self.$text());
				if (!self.$color().$isNil()) {
					$div.$at$("style").$setProperty$to$("color", self.$color().$asCSSString());
				} else {
					nil;
				};
				return $div;
			});
			this.$text = (function () {
				return this.$text$slot;
			});
			this.$setOnce$text$ = (function (v) {
				this.$text$slot = v;
				return this;
			});
			this.$color = (function () {
				return this.$color$slot;
			});
			this.$color$ = (function (v) {
				this.$color$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`StaticLabelFragment";
					this.$superInit$HopscotchForHTML5$StaticLabelFragment = $.$superInit$HopscotchForHTML5$StaticLabelFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$text = $.$text;
					this.$setOnce$text$ = $.$setOnce$text$;
					this.$color = $.$color;
					this.$color$ = $.$color$;
					this.$enclosingObjects$HopscotchForHTML5$StaticLabelFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$StaticLabelFragment = runtimeSuperclass;
					this["HopscotchForHTML5`StaticLabelFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$text$slot = nil;
						this.$color$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`StaticLabelFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`StaticLabelFragment";
				this.slots = [];
				this.methods = [new MM("text:", true, null)];
				this.nestedClasses = [];
				this.$text$ = (function ($t) {
					return (new this.nonMeta.basicNew()).$instance$initializer($t);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`StaticLabelFragment";
						this.$text$ = $.$text$;
						this.$enclosingObjects$HopscotchForHTML5$StaticLabelFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$StaticLabelFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$Subject = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`Subject";
			this.name = "HopscotchForHTML5`Subject";
			this.header = "Subject onModel: aModel = (|\rmodel ::= aModel.\rpresenterX\r|)";
			this.slots = [
				new SM("model", true, false),
				new SM("presenterX", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`Subject", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("createPresenter", false, "createPresenter = (\r	subclassResponsibility\r)"),
				new MM("presenter", false, "presenter = (\r	presenterX isNil ifTrue: [presenterX:: createPresenter].\r	^presenterX\r)"),
				new MM("title", false, "title ^<String> = (\r	^self printString\r)"),
				new MM("model", true, null),
				new MM("model:", true, null),
				new MM("presenterX", true, null),
				new MM("presenterX:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$Subject = (function ($aModel) {
				var self = this;
				self.$super$HopscotchForHTML5$Subject.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($aModel) {
				var self = this;
				self.$superInit$HopscotchForHTML5$Subject($aModel);
				self.$model$($aModel);
				return self;
			});
			this.$createPresenter = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$presenter = (function () {
				var self = this;
				if (self.$presenterX().$isNil()) {
					self.$presenterX$(self.$createPresenter());
				} else {
					nil;
				};
				return self.$presenterX();
			});
			this.$title = (function () {
				var self = this;
				return self.$printString();
			});
			this.$model = (function () {
				return this.$model$slot;
			});
			this.$model$ = (function (v) {
				this.$model$slot = v;
				return this;
			});
			this.$presenterX = (function () {
				return this.$presenterX$slot;
			});
			this.$presenterX$ = (function (v) {
				this.$presenterX$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`Subject";
					this.$superInit$HopscotchForHTML5$Subject = $.$superInit$HopscotchForHTML5$Subject;
					this.$instance$initializer = $.$instance$initializer;
					this.$createPresenter = $.$createPresenter;
					this.$presenter = $.$presenter;
					this.$title = $.$title;
					this.$model = $.$model;
					this.$model$ = $.$model$;
					this.$presenterX = $.$presenterX;
					this.$presenterX$ = $.$presenterX$;
					this.$enclosingObjects$HopscotchForHTML5$Subject = enclosingObjects;
					this.$super$HopscotchForHTML5$Subject = runtimeSuperclass;
					this["HopscotchForHTML5`Subject"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$model$slot = nil;
						this.$presenterX$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`Subject"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`Subject";
				this.slots = [];
				this.methods = [new MM("onModel:", true, null)];
				this.nestedClasses = [];
				this.$onModel$ = (function ($aModel) {
					return (new this.nonMeta.basicNew()).$instance$initializer($aModel);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`Subject";
						this.$onModel$ = $.$onModel$;
						this.$enclosingObjects$HopscotchForHTML5$Subject = enclosingObjects;
						this.$super$HopscotchForHTML5$Subject = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$TextDisplayFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`TextDisplayFragment";
			this.name = "HopscotchForHTML5`TextDisplayFragment";
			this.header = "TextDisplayFragment text: t = LeafFragment (|\r	textX ::= t.\r|)";
			this.slots = [new SM("textX", true, false)];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`TextDisplayFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("createVisual", false, "createVisual = (\r	| div = document createElement: 'div'. |\r	(div at: 'style') setProperty: 'white-space' to: 'pre-wrap'.\r	div at: 'textContent' put: textX.\r	^div\r)"),
				new MM("text", false, "text = (\r	^textX\r)"),
				new MM("text:", false, "text: newText = (\r	textX: newText.\r	hasVisual ifTrue: [visual at: 'textContent' put: textX]\r)"),
				new MM("textX", true, null),
				new MM("textX:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$TextDisplayFragment = (function ($t) {
				var self = this;
				self.$super$HopscotchForHTML5$TextDisplayFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($t) {
				var self = this;
				self.$superInit$HopscotchForHTML5$TextDisplayFragment($t);
				self.$textX$($t);
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $div = nil;
				$div = self.$enclosingObjects$HopscotchForHTML5$TextDisplayFragment[0].$document().$createElement$("div");
				$div.$at$("style").$setProperty$to$("white-space", "pre-wrap");
				$div.$at$put$("textContent", self.$textX());
				return $div;
			});
			this.$text = (function () {
				var self = this;
				return self.$textX();
			});
			this.$text$ = (function ($newText) {
				var self = this;
				self.$textX$($newText);
				if (self.$hasVisual()) {
					self.$visual().$at$put$("textContent", self.$textX());
				} else {
					nil;
				};
				return self;
			});
			this.$textX = (function () {
				return this.$textX$slot;
			});
			this.$textX$ = (function (v) {
				this.$textX$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`TextDisplayFragment";
					this.$superInit$HopscotchForHTML5$TextDisplayFragment = $.$superInit$HopscotchForHTML5$TextDisplayFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$createVisual = $.$createVisual;
					this.$text = $.$text;
					this.$text$ = $.$text$;
					this.$textX = $.$textX;
					this.$textX$ = $.$textX$;
					this.$enclosingObjects$HopscotchForHTML5$TextDisplayFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$TextDisplayFragment = runtimeSuperclass;
					this["HopscotchForHTML5`TextDisplayFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$textX$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`TextDisplayFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`TextDisplayFragment";
				this.slots = [];
				this.methods = [new MM("text:", true, null)];
				this.nestedClasses = [];
				this.$text$ = (function ($t) {
					return (new this.nonMeta.basicNew()).$instance$initializer($t);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`TextDisplayFragment";
						this.$text$ = $.$text$;
						this.$enclosingObjects$HopscotchForHTML5$TextDisplayFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$TextDisplayFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$TextEditorFragment = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`TextEditorFragment";
			this.name = "HopscotchForHTML5`TextEditorFragment";
			this.header = "TextEditorFragment = LeafFragment (|\r	textX ::= ''.\r	counterfactualBarX\r	editorX\r	textBeingAccepted\r	isInEditState ::= false.\r	public changeResponse\r	public acceptResponse\r	public cancelResponse\r|)";
			this.slots = [
				new SM("textX", true, false),
				new SM("counterfactualBarX", true, false),
				new SM("editorX", true, false),
				new SM("textBeingAccepted", true, false),
				new SM("isInEditState", true, false),
				new SM("changeResponse", true, false),
				new SM("acceptResponse", true, false),
				new SM("cancelResponse", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`TextEditorFragment", true, "LeafFragment"),
				new MM("instance`initializer", true, "LeafFragment"),
				new MM("controlBarColor", false, "controlBarColor = (\r	^Color r: 0.95 g: 0.792 b: 0.475\r)"),
				new MM("createVisual", false, "createVisual = (\r	| frame editorWrapper accept cancel |\r	frame:: document createElement: 'div'.\r	(frame at: 'style')\r		at: 'display' put: '-webkit-flex';\r		at: 'display' put: 'flex'.\r	editorX:: document createElement: 'div'.\r	editorX at: 'contentEditable' put: 'true'.\r	(editorX at: 'style')\r		at: 'borderStyle' put: 'solid';\r		at: 'borderWidth' put: '1px';\r		at: 'borderColor' put: 'gray';\r		setProperty: 'background-color' to: 'white';\r		at: 'flex' put: 1;\r		at: '-webkit-flex' put: 1;\r		at: '-moz-flex' put: 1;\r		setProperty: 'white-space' to: 'pre-wrap';\r		at: 'display' put: 'block'.\r	editorX at: 'textContent' put: textX.\r	editorX addEventListener: 'input' with: [respondToChange].\r	counterfactualBarX:: document createElement: 'span'.\r	(counterfactualBarX at: 'style')\r		at: 'backgroundColor' put: controlBarColor asCSSString;\r		at: 'flex' put: 'none';\r		at: '-webkit-flex' put: 'none';\r		at: '-moz-flex' put: 'none'.\r	accept:: document createElement: 'img'.\r	accept at: 'src' put: (accept16px yourself at: 'src').\r	(accept at: 'style') at: 'margin' put: '3px'.\r	accept at: 'onclick' put: [respondToAccept].\r	cancel:: document createElement: 'img'.\r	cancel at: 'src' put: (cancel16px yourself at: 'src').\r	(cancel at: 'style') at: 'margin' put: '3px'.\r	cancel at: 'onclick' put: [respondToCancel].\r	counterfactualBarX appendChild: accept.\r	counterfactualBarX appendChild: cancel.\r	frame appendChild: editorX.\r	(* frame appendChild: counterfactualBarX. *)\r	^frame\r)"),
				new MM("defaultAcceptResponse", false, "defaultAcceptResponse = (\r	textX:: textBeingAccepted.\r	leaveEditState\r)"),
				new MM("defaultCancelResponse", false, "defaultCancelResponse = (\r	setVisualText: textX.\r	leaveEditState\r)"),
				new MM("defaultChangeResponse", false, "defaultChangeResponse = (\r	enterEditState\r)"),
				new MM("enterEditState", false, "enterEditState = (\r	isInEditState ifFalse:\r		[visual appendChild: counterfactualBarX.\r		isInEditState:: true].\r	visual scrollIntoView: true (* alignWithTop *).\r)"),
				new MM("leaveEditState", false, "leaveEditState = (\r	isInEditState ifTrue:\r		[visualX removeChild: counterfactualBarX.\r		isInEditState:: false.\r		(*removeMessages*)]\r)"),
				new MM("respondToAccept", false, "respondToAccept = (\r	textBeingAccepted:: editorX at: 'textContent' (*withSqueakLineEndings*).\r	acceptResponse \r		ifNil: [defaultAcceptResponse]\r		ifNotNil: [acceptResponse cull: self]\r)"),
				new MM("respondToCancel", false, "respondToCancel = (\r	(*confirm: 'Confirm Cancel' ifConfirmed:\r		[*)cancelResponse \r			ifNil: [defaultCancelResponse]\r			ifNotNil: [cancelResponse cull: self](*]*)\r)"),
				new MM("respondToChange", false, "respondToChange = (\r	textBeingAccepted:: editorX at: 'textContent'.\r	changeResponse \r		ifNil: [defaultChangeResponse]\r		ifNotNil: [changeResponse cull: self]\r)"),
				new MM("setVisualText:", false, "setVisualText: aText = (\r	hasVisual ifTrue: [editorX at: 'textContent' put: aText]\r)"),
				new MM("text", false, "text = (\r	^textX\r)"),
				new MM("text:", false, "text: t = (\r	textX: t.\r	setVisualText: textX.\r)"),
				new MM("textX", true, null),
				new MM("textX:", true, null),
				new MM("counterfactualBarX", true, null),
				new MM("counterfactualBarX:", true, null),
				new MM("editorX", true, null),
				new MM("editorX:", true, null),
				new MM("textBeingAccepted", true, null),
				new MM("textBeingAccepted:", true, null),
				new MM("isInEditState", true, null),
				new MM("isInEditState:", true, null),
				new MM("changeResponse", true, null),
				new MM("changeResponse:", true, null),
				new MM("acceptResponse", true, null),
				new MM("acceptResponse:", true, null),
				new MM("cancelResponse", true, null),
				new MM("cancelResponse:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$TextEditorFragment = (function () {
				var self = this;
				self.$super$HopscotchForHTML5$TextEditorFragment.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$HopscotchForHTML5$TextEditorFragment();
				self.$textX$("");
				self.$isInEditState$(false);
				return self;
			});
			this.$controlBarColor = (function () {
				var self = this;
				return self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$Color().$r$g$b$((19/20), (99/125), (19/40));
			});
			this.$createVisual = (function () {
				var self = this;
				var $frame = nil;
				var $editorWrapper = nil;
				var $accept = nil;
				var $cancel = nil;
				$frame = self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$document().$createElement$("div");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("display", "-webkit-flex");
					return cascadeReceiver.$at$put$("display", "flex");
				})($frame.$at$("style"));
				self.$editorX$(self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$document().$createElement$("div"));
				self.$editorX().$at$put$("contentEditable", "true");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("borderStyle", "solid");
					cascadeReceiver.$at$put$("borderWidth", "1px");
					cascadeReceiver.$at$put$("borderColor", "gray");
					cascadeReceiver.$setProperty$to$("background-color", "white");
					cascadeReceiver.$at$put$("flex", 1);
					cascadeReceiver.$at$put$("-webkit-flex", 1);
					cascadeReceiver.$at$put$("-moz-flex", 1);
					cascadeReceiver.$setProperty$to$("white-space", "pre-wrap");
					return cascadeReceiver.$at$put$("display", "block");
				})(self.$editorX().$at$("style"));
				self.$editorX().$at$put$("textContent", self.$textX());
				self.$editorX().$addEventListener$with$("input", (function () {
					return self.$respondToChange();
				}));
				self.$counterfactualBarX$(self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$document().$createElement$("span"));
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("backgroundColor", self.$controlBarColor().$asCSSString());
					cascadeReceiver.$at$put$("flex", "none");
					cascadeReceiver.$at$put$("-webkit-flex", "none");
					return cascadeReceiver.$at$put$("-moz-flex", "none");
				})(self.$counterfactualBarX().$at$("style"));
				$accept = self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$document().$createElement$("img");
				$accept.$at$put$("src", self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$accept16px().$yourself().$at$("src"));
				$accept.$at$("style").$at$put$("margin", "3px");
				$accept.$at$put$("onclick", (function () {
					return self.$respondToAccept();
				}));
				$cancel = self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$document().$createElement$("img");
				$cancel.$at$put$("src", self.$enclosingObjects$HopscotchForHTML5$TextEditorFragment[0].$cancel16px().$yourself().$at$("src"));
				$cancel.$at$("style").$at$put$("margin", "3px");
				$cancel.$at$put$("onclick", (function () {
					return self.$respondToCancel();
				}));
				self.$counterfactualBarX().$appendChild$($accept);
				self.$counterfactualBarX().$appendChild$($cancel);
				$frame.$appendChild$(self.$editorX());
				return $frame;
			});
			this.$defaultAcceptResponse = (function () {
				var self = this;
				self.$textX$(self.$textBeingAccepted());
				self.$leaveEditState();
				return self;
			});
			this.$defaultCancelResponse = (function () {
				var self = this;
				self.$setVisualText$(self.$textX());
				self.$leaveEditState();
				return self;
			});
			this.$defaultChangeResponse = (function () {
				var self = this;
				self.$enterEditState();
				return self;
			});
			this.$enterEditState = (function () {
				var self = this;
				if (!self.$isInEditState()) {
					self.$visual().$appendChild$(self.$counterfactualBarX());
					self.$isInEditState$(true);
				} else {
					nil;
				};
				self.$visual().$scrollIntoView$(true);
				return self;
			});
			this.$leaveEditState = (function () {
				var self = this;
				if (self.$isInEditState()) {
					self.$visualX().$removeChild$(self.$counterfactualBarX());
					self.$isInEditState$(false);
				} else {
					nil;
				};
				return self;
			});
			this.$respondToAccept = (function () {
				var self = this;
				self.$textBeingAccepted$(self.$editorX().$at$("textContent"));
				self.$acceptResponse().$ifNil$ifNotNil$((function () {
					return self.$defaultAcceptResponse();
				}), (function () {
					return self.$acceptResponse().$cull$(self);
				}));
				return self;
			});
			this.$respondToCancel = (function () {
				var self = this;
				self.$cancelResponse().$ifNil$ifNotNil$((function () {
					return self.$defaultCancelResponse();
				}), (function () {
					return self.$cancelResponse().$cull$(self);
				}));
				return self;
			});
			this.$respondToChange = (function () {
				var self = this;
				self.$textBeingAccepted$(self.$editorX().$at$("textContent"));
				self.$changeResponse().$ifNil$ifNotNil$((function () {
					return self.$defaultChangeResponse();
				}), (function () {
					return self.$changeResponse().$cull$(self);
				}));
				return self;
			});
			this.$setVisualText$ = (function ($aText) {
				var self = this;
				if (self.$hasVisual()) {
					self.$editorX().$at$put$("textContent", $aText);
				} else {
					nil;
				};
				return self;
			});
			this.$text = (function () {
				var self = this;
				return self.$textX();
			});
			this.$text$ = (function ($t) {
				var self = this;
				self.$textX$($t);
				self.$setVisualText$(self.$textX());
				return self;
			});
			this.$textX = (function () {
				return this.$textX$slot;
			});
			this.$textX$ = (function (v) {
				this.$textX$slot = v;
				return this;
			});
			this.$counterfactualBarX = (function () {
				return this.$counterfactualBarX$slot;
			});
			this.$counterfactualBarX$ = (function (v) {
				this.$counterfactualBarX$slot = v;
				return this;
			});
			this.$editorX = (function () {
				return this.$editorX$slot;
			});
			this.$editorX$ = (function (v) {
				this.$editorX$slot = v;
				return this;
			});
			this.$textBeingAccepted = (function () {
				return this.$textBeingAccepted$slot;
			});
			this.$textBeingAccepted$ = (function (v) {
				this.$textBeingAccepted$slot = v;
				return this;
			});
			this.$isInEditState = (function () {
				return this.$isInEditState$slot;
			});
			this.$isInEditState$ = (function (v) {
				this.$isInEditState$slot = v;
				return this;
			});
			this.$changeResponse = (function () {
				return this.$changeResponse$slot;
			});
			this.$changeResponse$ = (function (v) {
				this.$changeResponse$slot = v;
				return this;
			});
			this.$acceptResponse = (function () {
				return this.$acceptResponse$slot;
			});
			this.$acceptResponse$ = (function (v) {
				this.$acceptResponse$slot = v;
				return this;
			});
			this.$cancelResponse = (function () {
				return this.$cancelResponse$slot;
			});
			this.$cancelResponse$ = (function (v) {
				this.$cancelResponse$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`TextEditorFragment";
					this.$superInit$HopscotchForHTML5$TextEditorFragment = $.$superInit$HopscotchForHTML5$TextEditorFragment;
					this.$instance$initializer = $.$instance$initializer;
					this.$controlBarColor = $.$controlBarColor;
					this.$createVisual = $.$createVisual;
					this.$defaultAcceptResponse = $.$defaultAcceptResponse;
					this.$defaultCancelResponse = $.$defaultCancelResponse;
					this.$defaultChangeResponse = $.$defaultChangeResponse;
					this.$enterEditState = $.$enterEditState;
					this.$leaveEditState = $.$leaveEditState;
					this.$respondToAccept = $.$respondToAccept;
					this.$respondToCancel = $.$respondToCancel;
					this.$respondToChange = $.$respondToChange;
					this.$setVisualText$ = $.$setVisualText$;
					this.$text = $.$text;
					this.$text$ = $.$text$;
					this.$textX = $.$textX;
					this.$textX$ = $.$textX$;
					this.$counterfactualBarX = $.$counterfactualBarX;
					this.$counterfactualBarX$ = $.$counterfactualBarX$;
					this.$editorX = $.$editorX;
					this.$editorX$ = $.$editorX$;
					this.$textBeingAccepted = $.$textBeingAccepted;
					this.$textBeingAccepted$ = $.$textBeingAccepted$;
					this.$isInEditState = $.$isInEditState;
					this.$isInEditState$ = $.$isInEditState$;
					this.$changeResponse = $.$changeResponse;
					this.$changeResponse$ = $.$changeResponse$;
					this.$acceptResponse = $.$acceptResponse;
					this.$acceptResponse$ = $.$acceptResponse$;
					this.$cancelResponse = $.$cancelResponse;
					this.$cancelResponse$ = $.$cancelResponse$;
					this.$enclosingObjects$HopscotchForHTML5$TextEditorFragment = enclosingObjects;
					this.$super$HopscotchForHTML5$TextEditorFragment = runtimeSuperclass;
					this["HopscotchForHTML5`TextEditorFragment"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$textX$slot = nil;
						this.$counterfactualBarX$slot = nil;
						this.$editorX$slot = nil;
						this.$textBeingAccepted$slot = nil;
						this.$isInEditState$slot = nil;
						this.$changeResponse$slot = nil;
						this.$acceptResponse$slot = nil;
						this.$cancelResponse$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`TextEditorFragment"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`TextEditorFragment";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`TextEditorFragment";
						this.$new = $.$new;
						this.$enclosingObjects$HopscotchForHTML5$TextEditorFragment = enclosingObjects;
						this.$super$HopscotchForHTML5$TextEditorFragment = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$ToggleComposer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for HopscotchForHTML5`ToggleComposer";
			this.name = "HopscotchForHTML5`ToggleComposer";
			this.header = "ToggleComposer collapsedDefinition: collapsed\r expandedDefinition: expanded\r initiallyExpanded: flag = Composer (|\rexpandedDefinition = expanded.\rcollapsedDefinition = collapsed.\risExpanded ::= flag.\rexpandedPresenter\rcollapsedPresenter\rcontentHolder\rtoggleWidget\r|)";
			this.slots = [
				new SM("expandedDefinition", false, false),
				new SM("collapsedDefinition", false, false),
				new SM("isExpanded", true, false),
				new SM("expandedPresenter", true, false),
				new SM("collapsedPresenter", true, false),
				new SM("contentHolder", true, false),
				new SM("toggleWidget", true, false)
			];
			this.methods = [
				new MM("superInit`HopscotchForHTML5`ToggleComposer", true, "Composer"),
				new MM("instance`initializer", true, "Composer"),
				new MM("collapse", false, "collapse = (\r	installCollapsedPresenter\r)"),
				new MM("createVisual", false, "createVisual = (\r	| toggleDiv div |\r	contentHolder:: document createElement: 'div'.\r	\r	toggleDiv:: document createElement: 'div'.\r	toggleWidget:: document createElement: 'img'.\r	toggleWidget at: 'onclick' put: [userToggle].\r	toggleDiv appendChild: toggleWidget.\r	\r	(contentHolder at: 'style') \r		at: '-webkit-flex-grow' put: 1;\r		setProperty: 'flex-grow' to: 1;\r		at: '-webkit-flex-shrink' put: 1;\r		setProperty: 'flex-shrink' to: 1.\r	(toggleDiv at: 'style') \r		at: '-webkit-flex-grow' put: 0;\r		setProperty: 'flex-grow' to: 0;\r		at: '-webkit-flex-shrink' put: 0;\r		setProperty: 'flex-shrink' to: 0;\r		at: 'paddingTop' put: '2px';\r		at: 'paddingRight' put: '3px'.\r	toggleWidget at: 'align' put: 'top'.\r	\r	isExpanded\r		ifTrue: [installExpandedPresenter]\r		ifFalse: [installCollapsedPresenter].\r		\r	div:: document createElement: 'div'.\r	(div at: 'style')\r		at: 'display' put: '-webkit-flex';\r		at: 'display' put: 'flex';\r		at: '-webkit-flex-direction' put: 'row';\r		setProperty: 'flex-direction' to: 'row'.\r	div appendChild: toggleDiv.\r	div appendChild: contentHolder.\r	^div\r)"),
				new MM("expand", false, "expand = (\r	installExpandedPresenter\r)"),
				new MM("installCollapsedPresenter", false, "installCollapsedPresenter = (\r	collapsedPresenter isNil ifTrue: \r		[collapsedPresenter:: collapsedDefinition value.\r		collapsedPresenter parent: self].\r	installContentVisual: collapsedPresenter visual.\r	toggleWidget at: 'src' put: (disclosureClosedImage at: 'src').\r)"),
				new MM("installContentVisual:", false, "installContentVisual: newVisual = (\r	contentHolder hasChildNodes\r		ifTrue:\r			[ | oldVisual = contentHolder at: 'firstChild'. |\r			contentHolder replaceChild: newVisual with: oldVisual]\r		ifFalse: [contentHolder appendChild: newVisual].\r)"),
				new MM("installExpandedPresenter", false, "installExpandedPresenter = (\r	expandedPresenter isNil ifTrue:\r		[expandedPresenter:: expandedDefinition value.\r		expandedPresenter parent: self].\r	installContentVisual: expandedPresenter visual.\r	toggleWidget at: 'src' put: (disclosureOpenImage at: 'src').\r)"),
				new MM("userToggle", false, "userToggle = (\r	isExpanded:: isExpanded not.\r	isExpanded\r		ifTrue: [installExpandedPresenter]\r		ifFalse: [installCollapsedPresenter].\r)"),
				new MM("expandedDefinition", true, null),
				new MM("setOnce`expandedDefinition:", true, null),
				new MM("collapsedDefinition", true, null),
				new MM("setOnce`collapsedDefinition:", true, null),
				new MM("isExpanded", true, null),
				new MM("isExpanded:", true, null),
				new MM("expandedPresenter", true, null),
				new MM("expandedPresenter:", true, null),
				new MM("collapsedPresenter", true, null),
				new MM("collapsedPresenter:", true, null),
				new MM("contentHolder", true, null),
				new MM("contentHolder:", true, null),
				new MM("toggleWidget", true, null),
				new MM("toggleWidget:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$HopscotchForHTML5$ToggleComposer = (function ($collapsed, $expanded, $flag) {
				var self = this;
				self.$super$HopscotchForHTML5$ToggleComposer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($collapsed, $expanded, $flag) {
				var self = this;
				self.$superInit$HopscotchForHTML5$ToggleComposer($collapsed, $expanded, $flag);
				self.$setOnce$expandedDefinition$($expanded);
				self.$setOnce$collapsedDefinition$($collapsed);
				self.$isExpanded$($flag);
				return self;
			});
			this.$collapse = (function () {
				var self = this;
				self.$installCollapsedPresenter();
				return self;
			});
			this.$createVisual = (function () {
				var self = this;
				var $toggleDiv = nil;
				var $div = nil;
				self.$contentHolder$(self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$document().$createElement$("div"));
				$toggleDiv = self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$document().$createElement$("div");
				self.$toggleWidget$(self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$document().$createElement$("img"));
				self.$toggleWidget().$at$put$("onclick", (function () {
					return self.$userToggle();
				}));
				$toggleDiv.$appendChild$(self.$toggleWidget());
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("-webkit-flex-grow", 1);
					cascadeReceiver.$setProperty$to$("flex-grow", 1);
					cascadeReceiver.$at$put$("-webkit-flex-shrink", 1);
					return cascadeReceiver.$setProperty$to$("flex-shrink", 1);
				})(self.$contentHolder().$at$("style"));
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("-webkit-flex-grow", 0);
					cascadeReceiver.$setProperty$to$("flex-grow", 0);
					cascadeReceiver.$at$put$("-webkit-flex-shrink", 0);
					cascadeReceiver.$setProperty$to$("flex-shrink", 0);
					cascadeReceiver.$at$put$("paddingTop", "2px");
					return cascadeReceiver.$at$put$("paddingRight", "3px");
				})($toggleDiv.$at$("style"));
				self.$toggleWidget().$at$put$("align", "top");
				if (self.$isExpanded()) {
					self.$installExpandedPresenter();
				} else {
					self.$installCollapsedPresenter();
				};
				$div = self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$document().$createElement$("div");
				(function (cascadeReceiver) {
					cascadeReceiver.$at$put$("display", "-webkit-flex");
					cascadeReceiver.$at$put$("display", "flex");
					cascadeReceiver.$at$put$("-webkit-flex-direction", "row");
					return cascadeReceiver.$setProperty$to$("flex-direction", "row");
				})($div.$at$("style"));
				$div.$appendChild$($toggleDiv);
				$div.$appendChild$(self.$contentHolder());
				return $div;
			});
			this.$expand = (function () {
				var self = this;
				self.$installExpandedPresenter();
				return self;
			});
			this.$installCollapsedPresenter = (function () {
				var self = this;
				if (self.$collapsedPresenter().$isNil()) {
					self.$collapsedPresenter$(self.$collapsedDefinition().$value());
					self.$collapsedPresenter().$parent$(self);
				} else {
					nil;
				};
				self.$installContentVisual$(self.$collapsedPresenter().$visual());
				self.$toggleWidget().$at$put$("src", self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$disclosureClosedImage().$at$("src"));
				return self;
			});
			this.$installContentVisual$ = (function ($newVisual) {
				var self = this;
				if (self.$contentHolder().$hasChildNodes()) {
					var $oldVisual = nil;
					$oldVisual = self.$contentHolder().$at$("firstChild");
					self.$contentHolder().$replaceChild$with$($newVisual, $oldVisual);
				} else {
					self.$contentHolder().$appendChild$($newVisual);
				};
				return self;
			});
			this.$installExpandedPresenter = (function () {
				var self = this;
				if (self.$expandedPresenter().$isNil()) {
					self.$expandedPresenter$(self.$expandedDefinition().$value());
					self.$expandedPresenter().$parent$(self);
				} else {
					nil;
				};
				self.$installContentVisual$(self.$expandedPresenter().$visual());
				self.$toggleWidget().$at$put$("src", self.$enclosingObjects$HopscotchForHTML5$ToggleComposer[0].$disclosureOpenImage().$at$("src"));
				return self;
			});
			this.$userToggle = (function () {
				var self = this;
				self.$isExpanded$(self.$isExpanded().$not());
				if (self.$isExpanded()) {
					self.$installExpandedPresenter();
				} else {
					self.$installCollapsedPresenter();
				};
				return self;
			});
			this.$expandedDefinition = (function () {
				return this.$expandedDefinition$slot;
			});
			this.$setOnce$expandedDefinition$ = (function (v) {
				this.$expandedDefinition$slot = v;
				return this;
			});
			this.$collapsedDefinition = (function () {
				return this.$collapsedDefinition$slot;
			});
			this.$setOnce$collapsedDefinition$ = (function (v) {
				this.$collapsedDefinition$slot = v;
				return this;
			});
			this.$isExpanded = (function () {
				return this.$isExpanded$slot;
			});
			this.$isExpanded$ = (function (v) {
				this.$isExpanded$slot = v;
				return this;
			});
			this.$expandedPresenter = (function () {
				return this.$expandedPresenter$slot;
			});
			this.$expandedPresenter$ = (function (v) {
				this.$expandedPresenter$slot = v;
				return this;
			});
			this.$collapsedPresenter = (function () {
				return this.$collapsedPresenter$slot;
			});
			this.$collapsedPresenter$ = (function (v) {
				this.$collapsedPresenter$slot = v;
				return this;
			});
			this.$contentHolder = (function () {
				return this.$contentHolder$slot;
			});
			this.$contentHolder$ = (function (v) {
				this.$contentHolder$slot = v;
				return this;
			});
			this.$toggleWidget = (function () {
				return this.$toggleWidget$slot;
			});
			this.$toggleWidget$ = (function (v) {
				this.$toggleWidget$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for HopscotchForHTML5`ToggleComposer";
					this.$superInit$HopscotchForHTML5$ToggleComposer = $.$superInit$HopscotchForHTML5$ToggleComposer;
					this.$instance$initializer = $.$instance$initializer;
					this.$collapse = $.$collapse;
					this.$createVisual = $.$createVisual;
					this.$expand = $.$expand;
					this.$installCollapsedPresenter = $.$installCollapsedPresenter;
					this.$installContentVisual$ = $.$installContentVisual$;
					this.$installExpandedPresenter = $.$installExpandedPresenter;
					this.$userToggle = $.$userToggle;
					this.$expandedDefinition = $.$expandedDefinition;
					this.$setOnce$expandedDefinition$ = $.$setOnce$expandedDefinition$;
					this.$collapsedDefinition = $.$collapsedDefinition;
					this.$setOnce$collapsedDefinition$ = $.$setOnce$collapsedDefinition$;
					this.$isExpanded = $.$isExpanded;
					this.$isExpanded$ = $.$isExpanded$;
					this.$expandedPresenter = $.$expandedPresenter;
					this.$expandedPresenter$ = $.$expandedPresenter$;
					this.$collapsedPresenter = $.$collapsedPresenter;
					this.$collapsedPresenter$ = $.$collapsedPresenter$;
					this.$contentHolder = $.$contentHolder;
					this.$contentHolder$ = $.$contentHolder$;
					this.$toggleWidget = $.$toggleWidget;
					this.$toggleWidget$ = $.$toggleWidget$;
					this.$enclosingObjects$HopscotchForHTML5$ToggleComposer = enclosingObjects;
					this.$super$HopscotchForHTML5$ToggleComposer = runtimeSuperclass;
					this["HopscotchForHTML5`ToggleComposer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$expandedDefinition$slot = nil;
						this.$collapsedDefinition$slot = nil;
						this.$isExpanded$slot = nil;
						this.$expandedPresenter$slot = nil;
						this.$collapsedPresenter$slot = nil;
						this.$contentHolder$slot = nil;
						this.$toggleWidget$slot = nil;
					});
					this.basicNew = this["HopscotchForHTML5`ToggleComposer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for HopscotchForHTML5`ToggleComposer";
				this.slots = [];
				this.methods = [new MM("collapsedDefinition:expandedDefinition:initiallyExpanded:", true, null)];
				this.nestedClasses = [];
				this.$collapsedDefinition$expandedDefinition$initiallyExpanded$ = (function ($collapsed, $expanded, $flag) {
					return (new this.nonMeta.basicNew()).$instance$initializer($collapsed, $expanded, $flag);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for HopscotchForHTML5`ToggleComposer";
						this.$collapsedDefinition$expandedDefinition$initiallyExpanded$ = $.$collapsedDefinition$expandedDefinition$initiallyExpanded$;
						this.$enclosingObjects$HopscotchForHTML5$ToggleComposer = enclosingObjects;
						this.$super$HopscotchForHTML5$ToggleComposer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$HopscotchForHTML5$BlankFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$ButtonFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$CanvasFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$ColumnComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$Composer.enclosingMixin = this;
		this.$HopscotchForHTML5$DeferredContentComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$Fragment.enclosingMixin = this;
		this.$HopscotchForHTML5$Gradient.enclosingMixin = this;
		this.$HopscotchForHTML5$HolderComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$HopscotchShell.enclosingMixin = this;
		this.$HopscotchForHTML5$HopscotchWindow.enclosingMixin = this;
		this.$HopscotchForHTML5$HyperlinkFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$LeafFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$NavigationHistory.enclosingMixin = this;
		this.$HopscotchForHTML5$PaddedFrameComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$Presenter.enclosingMixin = this;
		this.$HopscotchForHTML5$RowComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$SequenceComposer.enclosingMixin = this;
		this.$HopscotchForHTML5$StaticImageFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$StaticLabelFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$Subject.enclosingMixin = this;
		this.$HopscotchForHTML5$TextDisplayFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$TextEditorFragment.enclosingMixin = this;
		this.$HopscotchForHTML5$ToggleComposer.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for HopscotchForHTML5";
				this.$superInit$HopscotchForHTML5 = $.$superInit$HopscotchForHTML5;
				this.$instance$initializer = $.$instance$initializer;
				this.$deferAction$ = $.$deferAction$;
				this.$nextDeferredAction = $.$nextDeferredAction;
				this.$nextFrameDo$ = $.$nextFrameDo$;
				this.$BlankFragment = $.$BlankFragment;
				this.$ButtonFragment = $.$ButtonFragment;
				this.$CanvasFragment = $.$CanvasFragment;
				this.$ColumnComposer = $.$ColumnComposer;
				this.$Composer = $.$Composer;
				this.$DeferredContentComposer = $.$DeferredContentComposer;
				this.$Fragment = $.$Fragment;
				this.$Gradient = $.$Gradient;
				this.$HolderComposer = $.$HolderComposer;
				this.$HopscotchShell = $.$HopscotchShell;
				this.$HopscotchWindow = $.$HopscotchWindow;
				this.$HyperlinkFragment = $.$HyperlinkFragment;
				this.$LeafFragment = $.$LeafFragment;
				this.$NavigationHistory = $.$NavigationHistory;
				this.$PaddedFrameComposer = $.$PaddedFrameComposer;
				this.$Presenter = $.$Presenter;
				this.$RowComposer = $.$RowComposer;
				this.$SequenceComposer = $.$SequenceComposer;
				this.$StaticImageFragment = $.$StaticImageFragment;
				this.$StaticLabelFragment = $.$StaticLabelFragment;
				this.$Subject = $.$Subject;
				this.$TextDisplayFragment = $.$TextDisplayFragment;
				this.$TextEditorFragment = $.$TextEditorFragment;
				this.$ToggleComposer = $.$ToggleComposer;
				this.$Color = $.$Color;
				this.$setOnce$Color$ = $.$setOnce$Color$;
				this.$Context = $.$Context;
				this.$setOnce$Context$ = $.$setOnce$Context$;
				this.$Timer = $.$Timer;
				this.$setOnce$Timer$ = $.$setOnce$Timer$;
				this.$List = $.$List;
				this.$setOnce$List$ = $.$setOnce$List$;
				this.$Map = $.$Map;
				this.$setOnce$Map$ = $.$setOnce$Map$;
				this.$window = $.$window;
				this.$setOnce$window$ = $.$setOnce$window$;
				this.$document = $.$document;
				this.$setOnce$document$ = $.$setOnce$document$;
				this.$body = $.$body;
				this.$setOnce$body$ = $.$setOnce$body$;
				this.$history = $.$history;
				this.$setOnce$history$ = $.$setOnce$history$;
				this.$accept16px = $.$accept16px;
				this.$setOnce$accept16px$ = $.$setOnce$accept16px$;
				this.$cancel16px = $.$cancel16px;
				this.$setOnce$cancel16px$ = $.$setOnce$cancel16px$;
				this.$disclosureClosedImage = $.$disclosureClosedImage;
				this.$setOnce$disclosureClosedImage$ = $.$setOnce$disclosureClosedImage$;
				this.$disclosureTransitionImage = $.$disclosureTransitionImage;
				this.$setOnce$disclosureTransitionImage$ = $.$setOnce$disclosureTransitionImage$;
				this.$disclosureOpenImage = $.$disclosureOpenImage;
				this.$setOnce$disclosureOpenImage$ = $.$setOnce$disclosureOpenImage$;
				this.$deferredContentQueue = $.$deferredContentQueue;
				this.$setOnce$deferredContentQueue$ = $.$setOnce$deferredContentQueue$;
				this.$core = $.$core;
				this.$setOnce$core$ = $.$setOnce$core$;
				this.$fragments = $.$fragments;
				this.$setOnce$fragments$ = $.$setOnce$fragments$;
				this.$HopscotchForHTML5$BlankFragment = $.$HopscotchForHTML5$BlankFragment;
				this.$HopscotchForHTML5$BlankFragment$ = $.$HopscotchForHTML5$BlankFragment$;
				this.$HopscotchForHTML5$ButtonFragment = $.$HopscotchForHTML5$ButtonFragment;
				this.$HopscotchForHTML5$ButtonFragment$ = $.$HopscotchForHTML5$ButtonFragment$;
				this.$HopscotchForHTML5$CanvasFragment = $.$HopscotchForHTML5$CanvasFragment;
				this.$HopscotchForHTML5$CanvasFragment$ = $.$HopscotchForHTML5$CanvasFragment$;
				this.$HopscotchForHTML5$ColumnComposer = $.$HopscotchForHTML5$ColumnComposer;
				this.$HopscotchForHTML5$ColumnComposer$ = $.$HopscotchForHTML5$ColumnComposer$;
				this.$HopscotchForHTML5$Composer = $.$HopscotchForHTML5$Composer;
				this.$HopscotchForHTML5$Composer$ = $.$HopscotchForHTML5$Composer$;
				this.$HopscotchForHTML5$DeferredContentComposer = $.$HopscotchForHTML5$DeferredContentComposer;
				this.$HopscotchForHTML5$DeferredContentComposer$ = $.$HopscotchForHTML5$DeferredContentComposer$;
				this.$HopscotchForHTML5$Fragment = $.$HopscotchForHTML5$Fragment;
				this.$HopscotchForHTML5$Fragment$ = $.$HopscotchForHTML5$Fragment$;
				this.$HopscotchForHTML5$Gradient = $.$HopscotchForHTML5$Gradient;
				this.$HopscotchForHTML5$Gradient$ = $.$HopscotchForHTML5$Gradient$;
				this.$HopscotchForHTML5$HolderComposer = $.$HopscotchForHTML5$HolderComposer;
				this.$HopscotchForHTML5$HolderComposer$ = $.$HopscotchForHTML5$HolderComposer$;
				this.$HopscotchForHTML5$HopscotchShell = $.$HopscotchForHTML5$HopscotchShell;
				this.$HopscotchForHTML5$HopscotchShell$ = $.$HopscotchForHTML5$HopscotchShell$;
				this.$HopscotchForHTML5$HopscotchWindow = $.$HopscotchForHTML5$HopscotchWindow;
				this.$HopscotchForHTML5$HopscotchWindow$ = $.$HopscotchForHTML5$HopscotchWindow$;
				this.$HopscotchForHTML5$HyperlinkFragment = $.$HopscotchForHTML5$HyperlinkFragment;
				this.$HopscotchForHTML5$HyperlinkFragment$ = $.$HopscotchForHTML5$HyperlinkFragment$;
				this.$HopscotchForHTML5$LeafFragment = $.$HopscotchForHTML5$LeafFragment;
				this.$HopscotchForHTML5$LeafFragment$ = $.$HopscotchForHTML5$LeafFragment$;
				this.$HopscotchForHTML5$NavigationHistory = $.$HopscotchForHTML5$NavigationHistory;
				this.$HopscotchForHTML5$NavigationHistory$ = $.$HopscotchForHTML5$NavigationHistory$;
				this.$HopscotchForHTML5$PaddedFrameComposer = $.$HopscotchForHTML5$PaddedFrameComposer;
				this.$HopscotchForHTML5$PaddedFrameComposer$ = $.$HopscotchForHTML5$PaddedFrameComposer$;
				this.$HopscotchForHTML5$Presenter = $.$HopscotchForHTML5$Presenter;
				this.$HopscotchForHTML5$Presenter$ = $.$HopscotchForHTML5$Presenter$;
				this.$HopscotchForHTML5$RowComposer = $.$HopscotchForHTML5$RowComposer;
				this.$HopscotchForHTML5$RowComposer$ = $.$HopscotchForHTML5$RowComposer$;
				this.$HopscotchForHTML5$SequenceComposer = $.$HopscotchForHTML5$SequenceComposer;
				this.$HopscotchForHTML5$SequenceComposer$ = $.$HopscotchForHTML5$SequenceComposer$;
				this.$HopscotchForHTML5$StaticImageFragment = $.$HopscotchForHTML5$StaticImageFragment;
				this.$HopscotchForHTML5$StaticImageFragment$ = $.$HopscotchForHTML5$StaticImageFragment$;
				this.$HopscotchForHTML5$StaticLabelFragment = $.$HopscotchForHTML5$StaticLabelFragment;
				this.$HopscotchForHTML5$StaticLabelFragment$ = $.$HopscotchForHTML5$StaticLabelFragment$;
				this.$HopscotchForHTML5$Subject = $.$HopscotchForHTML5$Subject;
				this.$HopscotchForHTML5$Subject$ = $.$HopscotchForHTML5$Subject$;
				this.$HopscotchForHTML5$TextDisplayFragment = $.$HopscotchForHTML5$TextDisplayFragment;
				this.$HopscotchForHTML5$TextDisplayFragment$ = $.$HopscotchForHTML5$TextDisplayFragment$;
				this.$HopscotchForHTML5$TextEditorFragment = $.$HopscotchForHTML5$TextEditorFragment;
				this.$HopscotchForHTML5$TextEditorFragment$ = $.$HopscotchForHTML5$TextEditorFragment$;
				this.$HopscotchForHTML5$ToggleComposer = $.$HopscotchForHTML5$ToggleComposer;
				this.$HopscotchForHTML5$ToggleComposer$ = $.$HopscotchForHTML5$ToggleComposer$;
				this.$enclosingObjects$HopscotchForHTML5 = enclosingObjects;
				this.$super$HopscotchForHTML5 = runtimeSuperclass;
				this.HopscotchForHTML5 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$Color$slot = nil;
					this.$Context$slot = nil;
					this.$Timer$slot = nil;
					this.$List$slot = nil;
					this.$Map$slot = nil;
					this.$window$slot = nil;
					this.$document$slot = nil;
					this.$body$slot = nil;
					this.$history$slot = nil;
					this.$accept16px$slot = nil;
					this.$cancel16px$slot = nil;
					this.$disclosureClosedImage$slot = nil;
					this.$disclosureTransitionImage$slot = nil;
					this.$disclosureOpenImage$slot = nil;
					this.$deferredContentQueue$slot = nil;
					this.$core$slot = nil;
					this.$fragments$slot = nil;
					this.$HopscotchForHTML5$BlankFragment$slot = nil;
					this.$HopscotchForHTML5$ButtonFragment$slot = nil;
					this.$HopscotchForHTML5$CanvasFragment$slot = nil;
					this.$HopscotchForHTML5$ColumnComposer$slot = nil;
					this.$HopscotchForHTML5$Composer$slot = nil;
					this.$HopscotchForHTML5$DeferredContentComposer$slot = nil;
					this.$HopscotchForHTML5$Fragment$slot = nil;
					this.$HopscotchForHTML5$Gradient$slot = nil;
					this.$HopscotchForHTML5$HolderComposer$slot = nil;
					this.$HopscotchForHTML5$HopscotchShell$slot = nil;
					this.$HopscotchForHTML5$HopscotchWindow$slot = nil;
					this.$HopscotchForHTML5$HyperlinkFragment$slot = nil;
					this.$HopscotchForHTML5$LeafFragment$slot = nil;
					this.$HopscotchForHTML5$NavigationHistory$slot = nil;
					this.$HopscotchForHTML5$PaddedFrameComposer$slot = nil;
					this.$HopscotchForHTML5$Presenter$slot = nil;
					this.$HopscotchForHTML5$RowComposer$slot = nil;
					this.$HopscotchForHTML5$SequenceComposer$slot = nil;
					this.$HopscotchForHTML5$StaticImageFragment$slot = nil;
					this.$HopscotchForHTML5$StaticLabelFragment$slot = nil;
					this.$HopscotchForHTML5$Subject$slot = nil;
					this.$HopscotchForHTML5$TextDisplayFragment$slot = nil;
					this.$HopscotchForHTML5$TextEditorFragment$slot = nil;
					this.$HopscotchForHTML5$ToggleComposer$slot = nil;
				});
				this.basicNew = this.HopscotchForHTML5;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for HopscotchForHTML5";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($p) {
				return (new this.nonMeta.basicNew()).$instance$initializer($p);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for HopscotchForHTML5";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$HopscotchForHTML5 = enclosingObjects;
					this.$super$HopscotchForHTML5 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$Streams = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for Streams";
		this.name = "Streams";
		this.header = "Streams usingPlatform: platform = (\r(*\rThis code was derived by converting the Strongtalk Stream classes to Newspeak, which is why the Sun Microsystems copyright and BSD license below applies.\r\rConverting Strongtalk code gives Newspeak a quick route to its own library, that is small, quite clean and  has a typed interface, with desirable license, and also quite close to the Smalltalk libraries we've been using. However, it may not be the final or ideal design.\r\rIt is not yet clear to me what the dividing lines between this module and the modules for files or even strings are. For example, the various character streams might really belong with strings, and the external streams may belong with files.\r\rThe naming conventions are probably too verbose as well. Finally, the fine grain breakdown into many mixins may not be ideal.\r\rCopyright (c) 1995-2006 Sun Microsystems, Inc. ALL RIGHTS RESERVED.\rCopyright 2008-2009 Gilad Bracha and other contributors.\r \rRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\r\r* Redistributions of source code must retain the above copyright notice, \r this  list of conditions and the following disclaimer.\r\r* Redistribution in binary form must reproduce the above copyright notice, \rthis list of conditions and the following disclaimer in the documentation and/o other materials provided with the distribution.\r\rNeither the name of Sun Microsystems or the names of contributors may \rbe used to endorse or promote products derived from this software without \rspecific prior written permission.\r\r>>\rTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, \rTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS \rBE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE \rGOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT \rLIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH \rDAMAGE.>> *)|\rprivate String = platform kernel MutableString.\r\rprivate BasicOutputReadStream = BasicOutputStream mixinApply: BasicReadStream.\r\rprivate CharacterSequenceReadStream = CharacterInput mixinApply: SeqCltnReadStream.\rprivate CharacterIStream = CharacterInput mixinApply: BasicInputStream.\rprivate CharacterOStream =  CharacterOutput mixinApply: BasicOutputStream.\r\rprivate CharacterSequenceReadWriteStream = CharacterInput mixinApply: SeqCltnReadWriteStream.\rprivate CharacterConverterWithOutput = BasicOutputStream mixinApply: CharacterInputConverter.\rprivate OutputInputConverter = CharacterOutput mixinApply: CharacterConverterWithOutput.\rprivate BasicIExStream = BasicInputStream mixinApply: ExternalStream.\rprivate EIStream = BasicReadStream mixinApply: ExternalInputStream.\rprivate ReadExternalOutputStream = BasicOutputStream mixinApply: ExternalReadStream.\rprivate EOStream = BasicOutputStream mixinApply: ExternalStream.\rprivate EIOStream = ExternalOutputStream mixinApply: ReadExternalOutputStream.\r|)";
		this.slots = [
			new SM("String", false, false),
			new SM("BasicOutputReadStream", false, false),
			new SM("CharacterSequenceReadStream", false, false),
			new SM("CharacterIStream", false, false),
			new SM("CharacterOStream", false, false),
			new SM("CharacterSequenceReadWriteStream", false, false),
			new SM("CharacterConverterWithOutput", false, false),
			new SM("OutputInputConverter", false, false),
			new SM("BasicIExStream", false, false),
			new SM("EIStream", false, false),
			new SM("ReadExternalOutputStream", false, false),
			new SM("EOStream", false, false),
			new SM("EIOStream", false, false),
			new SM("Streams`BasicInputStream", true, true),
			new SM("Streams`BasicOutputStream", true, true),
			new SM("Streams`BasicReadStream", true, true),
			new SM("Streams`BasicReadWriteStream", true, true),
			new SM("Streams`CharacterInput", true, true),
			new SM("Streams`CharacterInputConverter", true, true),
			new SM("Streams`CharacterInputOutputConverter", true, true),
			new SM("Streams`CharacterOutput", true, true),
			new SM("Streams`CharacterOutputConverter", true, true),
			new SM("Streams`CharacterReadConverter", true, true),
			new SM("Streams`CharacterReadStream", true, true),
			new SM("Streams`CharacterReadWriteStream", true, true),
			new SM("Streams`ExternalInputStream", true, true),
			new SM("Streams`ExternalOutputStream", true, true),
			new SM("Streams`ExternalReadStream", true, true),
			new SM("Streams`ExternalReadWriteStream", true, true),
			new SM("Streams`ExternalStream", true, true),
			new SM("Streams`SeqCltnReadStream", true, true),
			new SM("Streams`SeqCltnReadWriteStream", true, true),
			new SM("Streams`TempTranscript", true, true)
		];
		this.methods = [
			new MM("superInit`Streams", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("usingCrLfConvention", false, "usingCrLfConvention = (\r\r	(* The current code only distinguishes systems that use CR and systems use CRLF for line endings. In order to generate files that are printed correctly on systems that use LF (Linux, OS X), we default to CRLF for now. *)\r	^ true\r)"),
			new MM("BasicInputStream", true, null),
			new MM("BasicOutputStream", true, null),
			new MM("BasicReadStream", true, null),
			new MM("BasicReadWriteStream", true, null),
			new MM("CharacterInput", true, null),
			new MM("CharacterInputConverter", true, null),
			new MM("CharacterInputOutputConverter", true, null),
			new MM("CharacterOutput", true, null),
			new MM("CharacterOutputConverter", true, null),
			new MM("CharacterReadConverter", true, null),
			new MM("CharacterReadStream", true, null),
			new MM("CharacterReadWriteStream", true, null),
			new MM("ExternalInputStream", true, null),
			new MM("ExternalOutputStream", true, null),
			new MM("ExternalReadStream", true, null),
			new MM("ExternalReadWriteStream", true, null),
			new MM("ExternalStream", true, null),
			new MM("SeqCltnReadStream", true, null),
			new MM("SeqCltnReadWriteStream", true, null),
			new MM("TempTranscript", true, null),
			new MM("String", true, null),
			new MM("setOnce`String:", true, null),
			new MM("BasicOutputReadStream", true, null),
			new MM("setOnce`BasicOutputReadStream:", true, null),
			new MM("CharacterSequenceReadStream", true, null),
			new MM("setOnce`CharacterSequenceReadStream:", true, null),
			new MM("CharacterIStream", true, null),
			new MM("setOnce`CharacterIStream:", true, null),
			new MM("CharacterOStream", true, null),
			new MM("setOnce`CharacterOStream:", true, null),
			new MM("CharacterSequenceReadWriteStream", true, null),
			new MM("setOnce`CharacterSequenceReadWriteStream:", true, null),
			new MM("CharacterConverterWithOutput", true, null),
			new MM("setOnce`CharacterConverterWithOutput:", true, null),
			new MM("OutputInputConverter", true, null),
			new MM("setOnce`OutputInputConverter:", true, null),
			new MM("BasicIExStream", true, null),
			new MM("setOnce`BasicIExStream:", true, null),
			new MM("EIStream", true, null),
			new MM("setOnce`EIStream:", true, null),
			new MM("ReadExternalOutputStream", true, null),
			new MM("setOnce`ReadExternalOutputStream:", true, null),
			new MM("EOStream", true, null),
			new MM("setOnce`EOStream:", true, null),
			new MM("EIOStream", true, null),
			new MM("setOnce`EIOStream:", true, null),
			new MM("Streams`BasicInputStream", true, null),
			new MM("Streams`BasicInputStream:", true, null),
			new MM("Streams`BasicOutputStream", true, null),
			new MM("Streams`BasicOutputStream:", true, null),
			new MM("Streams`BasicReadStream", true, null),
			new MM("Streams`BasicReadStream:", true, null),
			new MM("Streams`BasicReadWriteStream", true, null),
			new MM("Streams`BasicReadWriteStream:", true, null),
			new MM("Streams`CharacterInput", true, null),
			new MM("Streams`CharacterInput:", true, null),
			new MM("Streams`CharacterInputConverter", true, null),
			new MM("Streams`CharacterInputConverter:", true, null),
			new MM("Streams`CharacterInputOutputConverter", true, null),
			new MM("Streams`CharacterInputOutputConverter:", true, null),
			new MM("Streams`CharacterOutput", true, null),
			new MM("Streams`CharacterOutput:", true, null),
			new MM("Streams`CharacterOutputConverter", true, null),
			new MM("Streams`CharacterOutputConverter:", true, null),
			new MM("Streams`CharacterReadConverter", true, null),
			new MM("Streams`CharacterReadConverter:", true, null),
			new MM("Streams`CharacterReadStream", true, null),
			new MM("Streams`CharacterReadStream:", true, null),
			new MM("Streams`CharacterReadWriteStream", true, null),
			new MM("Streams`CharacterReadWriteStream:", true, null),
			new MM("Streams`ExternalInputStream", true, null),
			new MM("Streams`ExternalInputStream:", true, null),
			new MM("Streams`ExternalOutputStream", true, null),
			new MM("Streams`ExternalOutputStream:", true, null),
			new MM("Streams`ExternalReadStream", true, null),
			new MM("Streams`ExternalReadStream:", true, null),
			new MM("Streams`ExternalReadWriteStream", true, null),
			new MM("Streams`ExternalReadWriteStream:", true, null),
			new MM("Streams`ExternalStream", true, null),
			new MM("Streams`ExternalStream:", true, null),
			new MM("Streams`SeqCltnReadStream", true, null),
			new MM("Streams`SeqCltnReadStream:", true, null),
			new MM("Streams`SeqCltnReadWriteStream", true, null),
			new MM("Streams`SeqCltnReadWriteStream:", true, null),
			new MM("Streams`TempTranscript", true, null),
			new MM("Streams`TempTranscript:", true, null)
		];
		this.nestedClasses = [
			"Streams`BasicInputStream",
			"Streams`BasicOutputStream",
			"Streams`BasicReadStream",
			"Streams`BasicReadWriteStream",
			"Streams`CharacterInput",
			"Streams`CharacterInputConverter",
			"Streams`CharacterInputOutputConverter",
			"Streams`CharacterOutput",
			"Streams`CharacterOutputConverter",
			"Streams`CharacterReadConverter",
			"Streams`CharacterReadStream",
			"Streams`CharacterReadWriteStream",
			"Streams`ExternalInputStream",
			"Streams`ExternalOutputStream",
			"Streams`ExternalReadStream",
			"Streams`ExternalReadWriteStream",
			"Streams`ExternalStream",
			"Streams`SeqCltnReadStream",
			"Streams`SeqCltnReadWriteStream",
			"Streams`TempTranscript"
		];
		this.applications = [];
		this.$superInit$Streams = (function ($platform) {
			var self = this;
			self.$super$Streams.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($platform) {
			var self = this;
			self.$superInit$Streams($platform);
			self.$setOnce$String$($platform.$kernel().$MutableString());
			self.$setOnce$BasicOutputReadStream$(self.$BasicOutputStream().$mixinApply$(self.$BasicReadStream()));
			self.$setOnce$CharacterSequenceReadStream$(self.$CharacterInput().$mixinApply$(self.$SeqCltnReadStream()));
			self.$setOnce$CharacterIStream$(self.$CharacterInput().$mixinApply$(self.$BasicInputStream()));
			self.$setOnce$CharacterOStream$(self.$CharacterOutput().$mixinApply$(self.$BasicOutputStream()));
			self.$setOnce$CharacterSequenceReadWriteStream$(self.$CharacterInput().$mixinApply$(self.$SeqCltnReadWriteStream()));
			self.$setOnce$CharacterConverterWithOutput$(self.$BasicOutputStream().$mixinApply$(self.$CharacterInputConverter()));
			self.$setOnce$OutputInputConverter$(self.$CharacterOutput().$mixinApply$(self.$CharacterConverterWithOutput()));
			self.$setOnce$BasicIExStream$(self.$BasicInputStream().$mixinApply$(self.$ExternalStream()));
			self.$setOnce$EIStream$(self.$BasicReadStream().$mixinApply$(self.$ExternalInputStream()));
			self.$setOnce$ReadExternalOutputStream$(self.$BasicOutputStream().$mixinApply$(self.$ExternalReadStream()));
			self.$setOnce$EOStream$(self.$BasicOutputStream().$mixinApply$(self.$ExternalStream()));
			self.$setOnce$EIOStream$(self.$ExternalOutputStream().$mixinApply$(self.$ReadExternalOutputStream()));
			return self;
		});
		this.$usingCrLfConvention = (function () {
			var self = this;
			return true;
		});
		this.$BasicInputStream = (function () {
			if (nil === this.$Streams$BasicInputStream$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$BasicInputStream;
				this.$Streams$BasicInputStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$BasicInputStream$slot;
		});
		this.$BasicOutputStream = (function () {
			if (nil === this.$Streams$BasicOutputStream$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$BasicOutputStream;
				this.$Streams$BasicOutputStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$BasicOutputStream$slot;
		});
		this.$BasicReadStream = (function () {
			if (nil === this.$Streams$BasicReadStream$slot) {
				var self = this;
				var superclass = self.$BasicInputStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$BasicReadStream;
				this.$Streams$BasicReadStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$BasicReadStream$slot;
		});
		this.$BasicReadWriteStream = (function () {
			if (nil === this.$Streams$BasicReadWriteStream$slot) {
				var self = this;
				var superclass = self.$BasicOutputReadStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$BasicReadWriteStream;
				this.$Streams$BasicReadWriteStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$BasicReadWriteStream$slot;
		});
		this.$CharacterInput = (function () {
			if (nil === this.$Streams$CharacterInput$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterInput;
				this.$Streams$CharacterInput$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterInput$slot;
		});
		this.$CharacterInputConverter = (function () {
			if (nil === this.$Streams$CharacterInputConverter$slot) {
				var self = this;
				var superclass = self.$CharacterIStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterInputConverter;
				this.$Streams$CharacterInputConverter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterInputConverter$slot;
		});
		this.$CharacterInputOutputConverter = (function () {
			if (nil === this.$Streams$CharacterInputOutputConverter$slot) {
				var self = this;
				var superclass = self.$OutputInputConverter();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterInputOutputConverter;
				this.$Streams$CharacterInputOutputConverter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterInputOutputConverter$slot;
		});
		this.$CharacterOutput = (function () {
			if (nil === this.$Streams$CharacterOutput$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterOutput;
				this.$Streams$CharacterOutput$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterOutput$slot;
		});
		this.$CharacterOutputConverter = (function () {
			if (nil === this.$Streams$CharacterOutputConverter$slot) {
				var self = this;
				var superclass = self.$CharacterOStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterOutputConverter;
				this.$Streams$CharacterOutputConverter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterOutputConverter$slot;
		});
		this.$CharacterReadConverter = (function () {
			if (nil === this.$Streams$CharacterReadConverter$slot) {
				var self = this;
				var superclass = self.$CharacterInputConverter();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterReadConverter;
				this.$Streams$CharacterReadConverter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterReadConverter$slot;
		});
		this.$CharacterReadStream = (function () {
			if (nil === this.$Streams$CharacterReadStream$slot) {
				var self = this;
				var superclass = self.$CharacterSequenceReadStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterReadStream;
				this.$Streams$CharacterReadStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterReadStream$slot;
		});
		this.$CharacterReadWriteStream = (function () {
			if (nil === this.$Streams$CharacterReadWriteStream$slot) {
				var self = this;
				var superclass = self.$CharacterSequenceReadWriteStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$CharacterReadWriteStream;
				this.$Streams$CharacterReadWriteStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$CharacterReadWriteStream$slot;
		});
		this.$ExternalInputStream = (function () {
			if (nil === this.$Streams$ExternalInputStream$slot) {
				var self = this;
				var superclass = self.$BasicIExStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$ExternalInputStream;
				this.$Streams$ExternalInputStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$ExternalInputStream$slot;
		});
		this.$ExternalOutputStream = (function () {
			if (nil === this.$Streams$ExternalOutputStream$slot) {
				var self = this;
				var superclass = self.$EOStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$ExternalOutputStream;
				this.$Streams$ExternalOutputStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$ExternalOutputStream$slot;
		});
		this.$ExternalReadStream = (function () {
			if (nil === this.$Streams$ExternalReadStream$slot) {
				var self = this;
				var superclass = self.$EIStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$ExternalReadStream;
				this.$Streams$ExternalReadStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$ExternalReadStream$slot;
		});
		this.$ExternalReadWriteStream = (function () {
			if (nil === this.$Streams$ExternalReadWriteStream$slot) {
				var self = this;
				var superclass = self.$EIOStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$ExternalReadWriteStream;
				this.$Streams$ExternalReadWriteStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$ExternalReadWriteStream$slot;
		});
		this.$ExternalStream = (function () {
			if (nil === this.$Streams$ExternalStream$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$ExternalStream;
				this.$Streams$ExternalStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$ExternalStream$slot;
		});
		this.$SeqCltnReadStream = (function () {
			if (nil === this.$Streams$SeqCltnReadStream$slot) {
				var self = this;
				var superclass = self.$BasicReadStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$SeqCltnReadStream;
				this.$Streams$SeqCltnReadStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$SeqCltnReadStream$slot;
		});
		this.$SeqCltnReadWriteStream = (function () {
			if (nil === this.$Streams$SeqCltnReadWriteStream$slot) {
				var self = this;
				var superclass = self.$BasicReadWriteStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$SeqCltnReadWriteStream;
				this.$Streams$SeqCltnReadWriteStream$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$SeqCltnReadWriteStream$slot;
		});
		this.$TempTranscript = (function () {
			if (nil === this.$Streams$TempTranscript$slot) {
				var self = this;
				var superclass = self.$CharacterOStream();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$Streams);
				var mixin = this.$Streams$TempTranscript;
				this.$Streams$TempTranscript$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$Streams$TempTranscript$slot;
		});
		this.$String = (function () {
			return this.$String$slot;
		});
		this.$setOnce$String$ = (function (v) {
			this.$String$slot = v;
			return this;
		});
		this.$BasicOutputReadStream = (function () {
			return this.$BasicOutputReadStream$slot;
		});
		this.$setOnce$BasicOutputReadStream$ = (function (v) {
			this.$BasicOutputReadStream$slot = v;
			return this;
		});
		this.$CharacterSequenceReadStream = (function () {
			return this.$CharacterSequenceReadStream$slot;
		});
		this.$setOnce$CharacterSequenceReadStream$ = (function (v) {
			this.$CharacterSequenceReadStream$slot = v;
			return this;
		});
		this.$CharacterIStream = (function () {
			return this.$CharacterIStream$slot;
		});
		this.$setOnce$CharacterIStream$ = (function (v) {
			this.$CharacterIStream$slot = v;
			return this;
		});
		this.$CharacterOStream = (function () {
			return this.$CharacterOStream$slot;
		});
		this.$setOnce$CharacterOStream$ = (function (v) {
			this.$CharacterOStream$slot = v;
			return this;
		});
		this.$CharacterSequenceReadWriteStream = (function () {
			return this.$CharacterSequenceReadWriteStream$slot;
		});
		this.$setOnce$CharacterSequenceReadWriteStream$ = (function (v) {
			this.$CharacterSequenceReadWriteStream$slot = v;
			return this;
		});
		this.$CharacterConverterWithOutput = (function () {
			return this.$CharacterConverterWithOutput$slot;
		});
		this.$setOnce$CharacterConverterWithOutput$ = (function (v) {
			this.$CharacterConverterWithOutput$slot = v;
			return this;
		});
		this.$OutputInputConverter = (function () {
			return this.$OutputInputConverter$slot;
		});
		this.$setOnce$OutputInputConverter$ = (function (v) {
			this.$OutputInputConverter$slot = v;
			return this;
		});
		this.$BasicIExStream = (function () {
			return this.$BasicIExStream$slot;
		});
		this.$setOnce$BasicIExStream$ = (function (v) {
			this.$BasicIExStream$slot = v;
			return this;
		});
		this.$EIStream = (function () {
			return this.$EIStream$slot;
		});
		this.$setOnce$EIStream$ = (function (v) {
			this.$EIStream$slot = v;
			return this;
		});
		this.$ReadExternalOutputStream = (function () {
			return this.$ReadExternalOutputStream$slot;
		});
		this.$setOnce$ReadExternalOutputStream$ = (function (v) {
			this.$ReadExternalOutputStream$slot = v;
			return this;
		});
		this.$EOStream = (function () {
			return this.$EOStream$slot;
		});
		this.$setOnce$EOStream$ = (function (v) {
			this.$EOStream$slot = v;
			return this;
		});
		this.$EIOStream = (function () {
			return this.$EIOStream$slot;
		});
		this.$setOnce$EIOStream$ = (function (v) {
			this.$EIOStream$slot = v;
			return this;
		});
		this.$Streams$BasicInputStream = (function () {
			return this.$Streams$BasicInputStream$slot;
		});
		this.$Streams$BasicInputStream$ = (function (v) {
			this.$Streams$BasicInputStream$slot = v;
			return this;
		});
		this.$Streams$BasicOutputStream = (function () {
			return this.$Streams$BasicOutputStream$slot;
		});
		this.$Streams$BasicOutputStream$ = (function (v) {
			this.$Streams$BasicOutputStream$slot = v;
			return this;
		});
		this.$Streams$BasicReadStream = (function () {
			return this.$Streams$BasicReadStream$slot;
		});
		this.$Streams$BasicReadStream$ = (function (v) {
			this.$Streams$BasicReadStream$slot = v;
			return this;
		});
		this.$Streams$BasicReadWriteStream = (function () {
			return this.$Streams$BasicReadWriteStream$slot;
		});
		this.$Streams$BasicReadWriteStream$ = (function (v) {
			this.$Streams$BasicReadWriteStream$slot = v;
			return this;
		});
		this.$Streams$CharacterInput = (function () {
			return this.$Streams$CharacterInput$slot;
		});
		this.$Streams$CharacterInput$ = (function (v) {
			this.$Streams$CharacterInput$slot = v;
			return this;
		});
		this.$Streams$CharacterInputConverter = (function () {
			return this.$Streams$CharacterInputConverter$slot;
		});
		this.$Streams$CharacterInputConverter$ = (function (v) {
			this.$Streams$CharacterInputConverter$slot = v;
			return this;
		});
		this.$Streams$CharacterInputOutputConverter = (function () {
			return this.$Streams$CharacterInputOutputConverter$slot;
		});
		this.$Streams$CharacterInputOutputConverter$ = (function (v) {
			this.$Streams$CharacterInputOutputConverter$slot = v;
			return this;
		});
		this.$Streams$CharacterOutput = (function () {
			return this.$Streams$CharacterOutput$slot;
		});
		this.$Streams$CharacterOutput$ = (function (v) {
			this.$Streams$CharacterOutput$slot = v;
			return this;
		});
		this.$Streams$CharacterOutputConverter = (function () {
			return this.$Streams$CharacterOutputConverter$slot;
		});
		this.$Streams$CharacterOutputConverter$ = (function (v) {
			this.$Streams$CharacterOutputConverter$slot = v;
			return this;
		});
		this.$Streams$CharacterReadConverter = (function () {
			return this.$Streams$CharacterReadConverter$slot;
		});
		this.$Streams$CharacterReadConverter$ = (function (v) {
			this.$Streams$CharacterReadConverter$slot = v;
			return this;
		});
		this.$Streams$CharacterReadStream = (function () {
			return this.$Streams$CharacterReadStream$slot;
		});
		this.$Streams$CharacterReadStream$ = (function (v) {
			this.$Streams$CharacterReadStream$slot = v;
			return this;
		});
		this.$Streams$CharacterReadWriteStream = (function () {
			return this.$Streams$CharacterReadWriteStream$slot;
		});
		this.$Streams$CharacterReadWriteStream$ = (function (v) {
			this.$Streams$CharacterReadWriteStream$slot = v;
			return this;
		});
		this.$Streams$ExternalInputStream = (function () {
			return this.$Streams$ExternalInputStream$slot;
		});
		this.$Streams$ExternalInputStream$ = (function (v) {
			this.$Streams$ExternalInputStream$slot = v;
			return this;
		});
		this.$Streams$ExternalOutputStream = (function () {
			return this.$Streams$ExternalOutputStream$slot;
		});
		this.$Streams$ExternalOutputStream$ = (function (v) {
			this.$Streams$ExternalOutputStream$slot = v;
			return this;
		});
		this.$Streams$ExternalReadStream = (function () {
			return this.$Streams$ExternalReadStream$slot;
		});
		this.$Streams$ExternalReadStream$ = (function (v) {
			this.$Streams$ExternalReadStream$slot = v;
			return this;
		});
		this.$Streams$ExternalReadWriteStream = (function () {
			return this.$Streams$ExternalReadWriteStream$slot;
		});
		this.$Streams$ExternalReadWriteStream$ = (function (v) {
			this.$Streams$ExternalReadWriteStream$slot = v;
			return this;
		});
		this.$Streams$ExternalStream = (function () {
			return this.$Streams$ExternalStream$slot;
		});
		this.$Streams$ExternalStream$ = (function (v) {
			this.$Streams$ExternalStream$slot = v;
			return this;
		});
		this.$Streams$SeqCltnReadStream = (function () {
			return this.$Streams$SeqCltnReadStream$slot;
		});
		this.$Streams$SeqCltnReadStream$ = (function (v) {
			this.$Streams$SeqCltnReadStream$slot = v;
			return this;
		});
		this.$Streams$SeqCltnReadWriteStream = (function () {
			return this.$Streams$SeqCltnReadWriteStream$slot;
		});
		this.$Streams$SeqCltnReadWriteStream$ = (function (v) {
			this.$Streams$SeqCltnReadWriteStream$slot = v;
			return this;
		});
		this.$Streams$TempTranscript = (function () {
			return this.$Streams$TempTranscript$slot;
		});
		this.$Streams$TempTranscript$ = (function (v) {
			this.$Streams$TempTranscript$slot = v;
			return this;
		});
		this.$Streams$BasicInputStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`BasicInputStream";
			this.name = "Streams`BasicInputStream";
			this.header = "BasicInputStream = (\r(* This class provides the standard implementation of the InputStream[E] protocol, where E is the type of the elements of the stream.  It implements all functionality\rin terms of the two messages #actualNext and #actualAtEnd, which subclasses must provide.\r\rNote that streams support all collection operations.  However, when using collection messages with\rstreams, the caller must be aware that iteration on a stream changes the state of the stream, so that\riterations are not repeatable.  Also, care must be taken with infinite streams, since most collection\rmessages will not terminate on their own for infinite streams.\r\r%responsibility #newCollectionOfSize:\r    Optionally override\r%responsibility #close\r    Close must be reimplemented if any work must be done when the stream is closed. *)| \rhavePeeked_0 <Boolean> ::= false.	\r(* If true, then peekVal is the next element *)\rpeekVal <E>\r|)";
			this.slots = [
				new SM("havePeeked_0", true, false),
				new SM("peekVal", true, false)
			];
			this.methods = [
				new MM("superInit`Streams`BasicInputStream", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("atEnd", false, "atEnd ^ <Boolean> = (\r\r\r	^self havePeeked\r		ifTrue: [ false ]\r		ifFalse: [ self actualAtEnd ]\r)"),
				new MM("contentsRemaining", false, "contentsRemaining ^ <List[E]> = (\r\r\r	^self accumulateUntil: [ self atEnd ]\r)"),
				new MM("do:", false, "do: f <[:E]>  = (\r\r\r	[ self atEnd ]\r		whileFalse: [ f value: self next ]\r)"),
				new MM("next", false, "next ^ <E> = (\r\r\r	^self havePeeked\r		ifTrue: [ self nextFromPeek ]\r		ifFalse: [ self actualNext ]\r)"),
				new MM("next:", false, "next: nElements <Integer>  ^ <List[E]> = (\r\r\r	| cltn <VarSeqCltn[E]> |\r\r	cltn:: self newCollectionOfSize: nElements.\r	1 to: nElements do: [ :i <Integer> |\r		self atEnd\r			ifTrue: [ self error: 'Not enough elements' ].\r		cltn at: i put: self next.	].\r	^cltn\r)"),
				new MM("nextIfAbsent:", false, "nextIfAbsent: f <[X def]> ^ <E | X> = (\r\r\r	^self havePeeked\r		ifTrue: [ self nextFromPeek ]\r		ifFalse: [ self actualAtEnd\r							ifFalse: [ self actualNext ]\r							ifTrue: [ f value ]	 ]\r)"),
				new MM("nextMatchFor:", false, "nextMatchFor: o <Object> ^ <Boolean> = (\r\r\r	^self next = o\r)"),
				new MM("peek", false, "peek ^ <E> = (\r\r\r	self havePeeked\r		ifFalse: [	self peekVal: self actualNext.\r				self havePeeked: true.	 ].\r	^self peekVal\r)"),
				new MM("peekFor:", false, "peekFor: o <Object> ^ <Boolean> = (\r\r\r	^self peek = o\r		ifTrue: [	self next.\r				true	]\r		ifFalse: [	false ]\r)"),
				new MM("peekIfAbsent:", false, "peekIfAbsent: f <[X def]>  ^ <E | X> = (\r\r\r	self havePeeked\r		ifFalse: [	self actualAtEnd\r							ifTrue: [ ^f value ].\r						self peekVal: self actualNext.\r						self havePeeked: true.	 ].\r	^self peekVal\r)"),
				new MM("skip:", false, "skip: nElements <Integer>\r = (\r\r	nElements timesRepeat: [ self next ]\r)"),
				new MM("skipTo:", false, "skipTo: o <Object> ^ <Boolean> = (\r\r\r	[ self atEnd ] whileFalse: [ \r			self next = o\r				ifTrue: [ ^true ]	].\r	^false\r)"),
				new MM("upTo:", false, "upTo: delimiter <Object> ^ <List[E]> = (\r\r\r	| s <SeqCltn[E]> |\r	s:: self accumulateUntil: [ self atEndOrPeekIs: delimiter ].\r	self nextIfAbsent: [ ].\r	^s\r)"),
				new MM("close", false, "close\r = (\r	(* by default, do nothing *)\r)"),
				new MM("printOn:", false, "printOn: strm <CharOutputStream>\r = (\r\r	strm	nextPutAll: self class name\r)"),
				new MM("accumulateUntil:", false, "accumulateUntil: predicate <[Boolean]>  ^ <List[E]> = (\r\r\r	| build <ReadWriteStream[E]> |\r\r	build:: self newBuildStream.\r	[ predicate value ]\r		whileFalse: [	build nextPut: self next   ].\r	^build contentsWritten\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^ <Boolean> = (\r\r	(* Test whether there are elements remaining in the stream, disregarding peekVal *)\r\r	self subclassResponsibility\r)"),
				new MM("actualNext", false, "actualNext ^ <E> = (\r\r	(* Return the next element of the stream, disregarding peekVal *)\r\r	self subclassResponsibility\r)"),
				new MM("atEndOrPeekIs:", false, "atEndOrPeekIs: delimiter <Object> ^ <Boolean> = (\r\r\r	^(self peekIfAbsent: [ ^true ]) = delimiter\r)"),
				new MM("havePeeked", false, "havePeeked ^ <Boolean> = (\r\r	^havePeeked_0\r)"),
				new MM("havePeeked:", false, "havePeeked: f <Boolean>\r = (\r\r	f ifFalse: [ peekVal:: nil ].\r	havePeeked_0:: f.\r)"),
				new MM("newBuildStream", false, "newBuildStream ^ <ReadWriteStream[E]> = (\r\r	(* Returns a readwrite stream to be used for accumulating elements\r	 for the various contents messages, etc. *)\r\r	^BasicReadWriteStream(* [E] *) on: (self newCollectionOfSize: self defaultExpected)\r)"),
				new MM("newCollectionOfSize:", false, "newCollectionOfSize: n <Integer> ^ <MutableList[E]> = (\r\r	(* Create and return a new collection of a class appropriate for\r	 holding elements of this stream.  By overriding this, subclasses\r	can customize the kind of collection returned by the various\r	contents messages, as well as #upTo:, etc. *)\r\r	^Array(* [E] *) new: n\r)"),
				new MM("nextFromPeek", false, "nextFromPeek ^ <E> = (\r\r\r	| v <E> |\r	v:: self peekVal.\r	self	noPeekVal.\r	^v\r)"),
				new MM("noPeekVal", false, "noPeekVal\r = (\r\r	havePeeked:: false.\r	peekVal:: nil\r)"),
				new MM("defaultExpected", false, "defaultExpected ^ <Integer> = (\r\r	^10\r)"),
				new MM("havePeeked_0", true, null),
				new MM("havePeeked_0:", true, null),
				new MM("peekVal", true, null),
				new MM("peekVal:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$BasicInputStream = (function () {
				var self = this;
				self.$super$Streams$BasicInputStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$BasicInputStream();
				self.$havePeeked_0$(false);
				return self;
			});
			this.$atEnd = (function () {
				var self = this;
				return self.$havePeeked().$ifTrue$ifFalse$((function () {
					return false;
				}), (function () {
					return self.$actualAtEnd();
				}));
			});
			this.$contentsRemaining = (function () {
				var self = this;
				return self.$accumulateUntil$((function () {
					return self.$atEnd();
				}));
			});
			this.$do$ = (function ($f) {
				var self = this;
				{
					nil;
					for (; !self.$atEnd(); ) {
						$f.$value$(self.$next());
					};
				};
				return self;
			});
			this.$next = (function () {
				var self = this;
				return self.$havePeeked().$ifTrue$ifFalse$((function () {
					return self.$nextFromPeek();
				}), (function () {
					return self.$actualNext();
				}));
			});
			this.$next$ = (function ($nElements) {
				var self = this;
				var $cltn = nil;
				$cltn = self.$newCollectionOfSize$($nElements);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $nElements;
					for (; $$limit.$$greater$equal($i); ) {
						if (self.$atEnd()) {
							self.$error$("Not enough elements");
						} else {
							nil;
						};
						$cltn.$at$put$($i, self.$next());
						$i = (1).$$plus($i);
					};
				};
				return $cltn;
			});
			this.$nextIfAbsent$ = (function ($f) {
				var self = this;
				return self.$havePeeked().$ifTrue$ifFalse$((function () {
					return self.$nextFromPeek();
				}), (function () {
					return self.$actualAtEnd().$ifFalse$ifTrue$((function () {
						return self.$actualNext();
					}), (function () {
						return $f.$value();
					}));
				}));
			});
			this.$nextMatchFor$ = (function ($o) {
				var self = this;
				return self.$next().$$equal($o);
			});
			this.$peek = (function () {
				var self = this;
				if (!self.$havePeeked()) {
					self.$peekVal$(self.$actualNext());
					self.$havePeeked$(true);
				} else {
					nil;
				};
				return self.$peekVal();
			});
			this.$peekFor$ = (function ($o) {
				var self = this;
				return self.$peek().$$equal($o).$ifTrue$ifFalse$((function () {
					self.$next();
					return true;
				}), (function () {
					return false;
				}));
			});
			this.$peekIfAbsent$ = (function ($f) {
				var self = this;
				if (!self.$havePeeked()) {
					if (self.$actualAtEnd()) {
						return $f.$value();
					} else {
						nil;
					};
					self.$peekVal$(self.$actualNext());
					self.$havePeeked$(true);
				} else {
					nil;
				};
				return self.$peekVal();
			});
			this.$skip$ = (function ($nElements) {
				var self = this;
				{
					var $$limit = nil;
					var $$i = nil;
					nil;
					$$i = 1;
					$$limit = $nElements;
					for (; $$limit.$$greater$equal($$i); ) {
						self.$next();
						$$i = (1).$$plus($$i);
					};
				};
				return self;
			});
			this.$skipTo$ = (function ($o) {
				var self = this;
				{
					nil;
					for (; !self.$atEnd(); ) {
						if (self.$next().$$equal($o)) {
							return true;
						} else {
							nil;
						};
					};
				};
				return false;
			});
			this.$upTo$ = (function ($delimiter) {
				var self = this;
				var $s = nil;
				$s = self.$accumulateUntil$((function () {
					return self.$atEndOrPeekIs$($delimiter);
				}));
				self.$nextIfAbsent$((function () {
					return nil;
				}));
				return $s;
			});
			this.$close = (function () {
				var self = this;
				return self;
			});
			this.$printOn$ = (function ($strm) {
				var self = this;
				$strm.$nextPutAll$(self.$class().$name());
				return self;
			});
			this.$accumulateUntil$ = (function ($predicate) {
				var self = this;
				var $build = nil;
				$build = self.$newBuildStream();
				{
					nil;
					for (; !$predicate.$value(); ) {
						$build.$nextPut$(self.$next());
					};
				};
				return $build.$contentsWritten();
			});
			this.$actualAtEnd = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$actualNext = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$atEndOrPeekIs$ = (function ($delimiter) {
				var self = this;
				var NLR = new Object();
				try {
					return self.$peekIfAbsent$((function () {
						{
							NLR.value = true;
							throw NLR;
						};
					})).$$equal($delimiter);
				} catch (NLR_exception) {
					if (NLR === NLR_exception) {
						return NLR_exception.value;
					} else {
						throw NLR_exception;
					};
				};
			});
			this.$havePeeked = (function () {
				var self = this;
				return self.$havePeeked_0();
			});
			this.$havePeeked$ = (function ($f) {
				var self = this;
				if (!$f) {
					self.$peekVal$(nil);
				} else {
					nil;
				};
				self.$havePeeked_0$($f);
				return self;
			});
			this.$newBuildStream = (function () {
				var self = this;
				return self.$enclosingObjects$Streams$BasicInputStream[0].$BasicReadWriteStream().$on$(self.$newCollectionOfSize$(self.$defaultExpected()));
			});
			this.$newCollectionOfSize$ = (function ($n) {
				var self = this;
				return self.$Array().$new$($n);
			});
			this.$nextFromPeek = (function () {
				var self = this;
				var $v = nil;
				$v = self.$peekVal();
				self.$noPeekVal();
				return $v;
			});
			this.$noPeekVal = (function () {
				var self = this;
				self.$havePeeked$(false);
				self.$peekVal$(nil);
				return self;
			});
			this.$defaultExpected = (function () {
				var self = this;
				return 10;
			});
			this.$havePeeked_0 = (function () {
				return this.$havePeeked_0$slot;
			});
			this.$havePeeked_0$ = (function (v) {
				this.$havePeeked_0$slot = v;
				return this;
			});
			this.$peekVal = (function () {
				return this.$peekVal$slot;
			});
			this.$peekVal$ = (function (v) {
				this.$peekVal$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`BasicInputStream";
					this.$superInit$Streams$BasicInputStream = $.$superInit$Streams$BasicInputStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$atEnd = $.$atEnd;
					this.$contentsRemaining = $.$contentsRemaining;
					this.$do$ = $.$do$;
					this.$next = $.$next;
					this.$next$ = $.$next$;
					this.$nextIfAbsent$ = $.$nextIfAbsent$;
					this.$nextMatchFor$ = $.$nextMatchFor$;
					this.$peek = $.$peek;
					this.$peekFor$ = $.$peekFor$;
					this.$peekIfAbsent$ = $.$peekIfAbsent$;
					this.$skip$ = $.$skip$;
					this.$skipTo$ = $.$skipTo$;
					this.$upTo$ = $.$upTo$;
					this.$close = $.$close;
					this.$printOn$ = $.$printOn$;
					this.$accumulateUntil$ = $.$accumulateUntil$;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualNext = $.$actualNext;
					this.$atEndOrPeekIs$ = $.$atEndOrPeekIs$;
					this.$havePeeked = $.$havePeeked;
					this.$havePeeked$ = $.$havePeeked$;
					this.$newBuildStream = $.$newBuildStream;
					this.$newCollectionOfSize$ = $.$newCollectionOfSize$;
					this.$nextFromPeek = $.$nextFromPeek;
					this.$noPeekVal = $.$noPeekVal;
					this.$defaultExpected = $.$defaultExpected;
					this.$havePeeked_0 = $.$havePeeked_0;
					this.$havePeeked_0$ = $.$havePeeked_0$;
					this.$peekVal = $.$peekVal;
					this.$peekVal$ = $.$peekVal$;
					this.$enclosingObjects$Streams$BasicInputStream = enclosingObjects;
					this.$super$Streams$BasicInputStream = runtimeSuperclass;
					this["Streams`BasicInputStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$havePeeked_0$slot = nil;
						this.$peekVal$slot = nil;
					});
					this.basicNew = this["Streams`BasicInputStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`BasicInputStream";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`BasicInputStream";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$BasicInputStream = enclosingObjects;
						this.$super$Streams$BasicInputStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$BasicOutputStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`BasicOutputStream";
			this.name = "Streams`BasicOutputStream";
			this.header = "BasicOutputStream = (\r(* This class provides the standard implementation of the OutputStream protocol.  It implements all functionality in terms of the message #nextPut:, which subclasses must provide.\r\r%responsibility #flush\r    Subclasses may have to reimplement this to flush any internal buffers.\r\r%todo: if this class doesn't end up with more methods than next:put: and nextPutAll:, then we\rshould remove it and copy those two methods into its subclasses and invocations.\r*))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`BasicOutputStream", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("externalFlush", false, "externalFlush\r = (\r	(* Flush both internal Smalltalk buffers and any buffers external to Smalltalk *)\r\r	(* By default do regular flush.  Subclasses should extend to deal with any external buffers *)\r	self flush\r)"),
				new MM("flush", false, "flush\r = (\r	(* Flush any information buffered in Smalltalk.  This does NOT\r	 flush the external medium; use #externalFlush for that. *)\r\r	(* By default do nothing *)\r)"),
				new MM("next:put:", false, "next: nElements <Integer> put: el <E> ^ <E> = (\r\r\r	nElements timesRepeat: [\r		self nextPut: el		].\r	^el\r)"),
				new MM("nextPut:", false, "nextPut: el <E> ^ <E> = (\r\r\r	self subclassResponsibility\r)"),
				new MM("nextPutAll:", false, "nextPutAll: els <Collection[E]> ^ <Collection[Object]> = (\r \r\r	els do: [ :el <E> |\r		self nextPut: el		].\r	^els\r)"),
				new MM("put:", false, "put: el <E> ^ <E> = (\r\r	(* A better name for nextPut: *)\r\r	^self nextPut: el\r)"),
				new MM("putAll:", false, "putAll: els <Collection[E]> ^ <Collection[Object]> = (\r\r	(* Better name for nextPutAll: *)\r\r	^self nextPutAll: els\r)"),
				new MM("show:", false, "show: els <Collection[E]> ^ <Collection[Object]> = (\r\r	(* basically like for #nextPutAll, except that it should flush immediately. *)\r\r	self nextPutAll: els; flush.\r	^els\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$BasicOutputStream = (function () {
				var self = this;
				self.$super$Streams$BasicOutputStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$BasicOutputStream();
				return self;
			});
			this.$externalFlush = (function () {
				var self = this;
				self.$flush();
				return self;
			});
			this.$flush = (function () {
				var self = this;
				return self;
			});
			this.$next$put$ = (function ($nElements, $el) {
				var self = this;
				{
					var $$limit = nil;
					var $$i = nil;
					nil;
					$$i = 1;
					$$limit = $nElements;
					for (; $$limit.$$greater$equal($$i); ) {
						self.$nextPut$($el);
						$$i = (1).$$plus($$i);
					};
				};
				return $el;
			});
			this.$nextPut$ = (function ($el) {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$nextPutAll$ = (function ($els) {
				var self = this;
				$els.$do$((function ($el) {
					return self.$nextPut$($el);
				}));
				return $els;
			});
			this.$put$ = (function ($el) {
				var self = this;
				return self.$nextPut$($el);
			});
			this.$putAll$ = (function ($els) {
				var self = this;
				return self.$nextPutAll$($els);
			});
			this.$show$ = (function ($els) {
				var self = this;
				(function (cascadeReceiver) {
					cascadeReceiver.$nextPutAll$($els);
					return cascadeReceiver.$flush();
				})(self);
				return $els;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`BasicOutputStream";
					this.$superInit$Streams$BasicOutputStream = $.$superInit$Streams$BasicOutputStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$externalFlush = $.$externalFlush;
					this.$flush = $.$flush;
					this.$next$put$ = $.$next$put$;
					this.$nextPut$ = $.$nextPut$;
					this.$nextPutAll$ = $.$nextPutAll$;
					this.$put$ = $.$put$;
					this.$putAll$ = $.$putAll$;
					this.$show$ = $.$show$;
					this.$enclosingObjects$Streams$BasicOutputStream = enclosingObjects;
					this.$super$Streams$BasicOutputStream = runtimeSuperclass;
					this["Streams`BasicOutputStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`BasicOutputStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`BasicOutputStream";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`BasicOutputStream";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$BasicOutputStream = enclosingObjects;
						this.$super$Streams$BasicOutputStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$BasicReadStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`BasicReadStream";
			this.name = "Streams`BasicReadStream";
			this.header = "BasicReadStream = BasicInputStream (\r(* This class provides the standard implementation of the ReadStream protocol. \r\rSubclass responsibilities:\r    %responsibility actualPosition:\r        Should be extended in subclasses to change any external position cursor, if necessary.\r    %responsibility actualNext\r        Subclasses must ensure that their implementation of next and nextFromPeek increments the position. *)| actualPosition_slot <Integer> ::= 0.  |)";
			this.slots = [new SM("actualPosition_slot", true, false)];
			this.methods = [
				new MM("superInit`Streams`BasicReadStream", true, "BasicInputStream"),
				new MM("instance`initializer", true, "BasicInputStream"),
				new MM("at:", false, "at: index <Integer> ^ <E> = (\r\r\r	| pos <Integer> result <E> |\r	pos:: self position.\r	self position: index - 1.\r	result:: self next.\r	self position: pos.\r	^result\r)"),
				new MM("collection", false, "collection  ^ <List[E]> = (\r\r\r	| cltn <MutableList[E]> origPos <Integer> |\r\r	cltn:: self newCollectionOfSize: self size.\r	origPos:: self position.\r	self position: 0.\r	1 to: self size do: [ :i <Integer> |\r		cltn at: i put: self next.	].\r	self position: origPos.\r	^cltn\r)"),
				new MM("contents", false, "contents  ^ <List[E]> = (\r\r	(* Obsolete: this method is included purely for BlueBook compatibility.  If possible, use \r	 #contentsRemaining and #contentsWritten, which will work when a ReadWriteStream\r	 is substituted for a ReadStream or a WriteStream, unlike this method *)\r\r	(* This originally referred to contentsRemaining. The result of 'contents' should not depend on how much of a stream has already been read, see Blue Book - Protocol for Streams *)\r\r	^self collection\r)"),
				new MM("contentsRemaining", false, "contentsRemaining  ^ <List[E]> = (\r\r\r	| cltn <MutableList[E]> n <Integer> |\r\r	n::  self size - self position.\r	cltn:: self newCollectionOfSize: n.\r	1 to: n do: [ :i <Integer> |\r		cltn at: i put: self next.	].\r	^cltn\r)"),
				new MM("copyFrom:to:", false, "copyFrom: start <Integer> to: stop <Integer> ^ <MutableList[EX]>\r	(* {where EX is returnType of #anElement message of receiverType} *)\r= (\r	| pos <Integer> n <Integer> result <Array[EX]> offset <Integer> |\r	pos:: self position.\r	n:: (stop - start) + 1.\r	result:: Array(* [EX] *) new: n.\r	offset:: start - 1.\r	1 to: n do:\r		[ :i <Integer> |\r			(* guarantee is safe because of inference clause *)\r			result at: i put: ((* guaranteed <EX> *) (self repositioningAt: offset + i)). ].\r	self position: pos.\r	^result\r)"),
				new MM("isEmpty", false, "isEmpty ^ <Boolean> = (\r\r\r	^self size = 0\r)"),
				new MM("position", false, "position ^ <Integer> = (\r\r\r	^self havePeeked\r		ifFalse: [ self actualPosition ]\r		ifTrue: [ self actualPosition - 1 ]\r)"),
				new MM("position:", false, "position: p <Integer>\r = (\r\r	self actualPosition: p.\r	self noPeekVal.\r)"),
				new MM("repositioningAt:", false, "repositioningAt: index <Integer> ^ <E> = (\r\r	(* Like at:, but may leave the position changed *)\r\r	^self at: index\r)"),
				new MM("reset", false, "reset\r = (\r\r	self position: 0.\r)"),
				new MM("setToEnd", false, "setToEnd\r = (\r\r	self position: self size.\r)"),
				new MM("size", false, "size ^ <Integer> = (\r\r\r	self subclassResponsibility\r)"),
				new MM("skip:", false, "skip: nElements <Integer>\r = (\r\r	self position: (self position + nElements max: self size)\r)"),
				new MM("skipTo:", false, "skipTo: o <Object> ^ <Boolean> = (\r\r\r	| pos <Integer> n <Integer> sz <Integer> |\r	sz:: self size.\r	pos:: self position.\r	pos + 1 to: sz do:\r		[ :i <Integer> |\r			(self repositioningAt: i) = o\r				ifTrue: [	self position: i.\r								^true ]\r		].\r	self position: sz.\r	^false\r)"),
				new MM("upTo:", false, "upTo: delimiter <Object> ^ <SeqCltn[E]> = (\r\r\r	| pos <Integer> n <Integer> result <List[E]> |\r	pos:: self position.\r	^(self skipTo: delimiter)\r		ifTrue: [ self copyFrom: pos + 1 to: self position - 1 ]\r		ifFalse: [ self copyFrom: pos + 1 to: self position ]\r\r(*	| pos <Integer> n <Integer> result <Array[E]> |\r	pos:: self position.\r	self skipTo: delimiter.\r	n:: (self position - pos) - 1.\r	self position: pos.\r	result:: Array[E] new: n.\r	1 to: n do:\r		[ :i <Integer> |\r			result at: i put: self next ].\r	self nextIfAbsent: [].\r	^result *)\r)"),
				new MM("actualPosition", false, "actualPosition ^ <Integer> = (\r	^actualPosition_slot	\r)"),
				new MM("actualPosition:", false, "actualPosition: p <Integer> = (\r	actualPosition_slot: p\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^ <Boolean> = (\r\r\r	^self actualPosition >= self size\r)"),
				new MM("actualPosition_slot", true, null),
				new MM("actualPosition_slot:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$BasicReadStream = (function () {
				var self = this;
				self.$super$Streams$BasicReadStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$BasicReadStream();
				self.$actualPosition_slot$(0);
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				var $pos = nil;
				var $result = nil;
				$pos = self.$position();
				self.$position$($index - 1);
				$result = self.$next();
				self.$position$($pos);
				return $result;
			});
			this.$collection = (function () {
				var self = this;
				var $cltn = nil;
				var $origPos = nil;
				$cltn = self.$newCollectionOfSize$(self.$size());
				$origPos = self.$position();
				self.$position$(0);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = self.$size();
					for (; $$limit.$$greater$equal($i); ) {
						$cltn.$at$put$($i, self.$next());
						$i = (1).$$plus($i);
					};
				};
				self.$position$($origPos);
				return $cltn;
			});
			this.$contents = (function () {
				var self = this;
				return self.$collection();
			});
			this.$contentsRemaining = (function () {
				var self = this;
				var $cltn = nil;
				var $n = nil;
				$n = self.$size() - self.$position();
				$cltn = self.$newCollectionOfSize$($n);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $n;
					for (; $$limit.$$greater$equal($i); ) {
						$cltn.$at$put$($i, self.$next());
						$i = (1).$$plus($i);
					};
				};
				return $cltn;
			});
			this.$copyFrom$to$ = (function ($start, $stop) {
				var self = this;
				var $pos = nil;
				var $n = nil;
				var $result = nil;
				var $offset = nil;
				$pos = self.$position();
				$n = ($stop - $start) + 1;
				$result = self.$Array().$new$($n);
				$offset = $start - 1;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $n;
					for (; $$limit.$$greater$equal($i); ) {
						$result.$at$put$($i, self.$repositioningAt$($offset + $i));
						$i = (1).$$plus($i);
					};
				};
				self.$position$($pos);
				return $result;
			});
			this.$isEmpty = (function () {
				var self = this;
				return self.$size().$$equal(0);
			});
			this.$position = (function () {
				var self = this;
				return self.$havePeeked().$ifFalse$ifTrue$((function () {
					return self.$actualPosition();
				}), (function () {
					return self.$actualPosition() - 1;
				}));
			});
			this.$position$ = (function ($p) {
				var self = this;
				self.$actualPosition$($p);
				self.$noPeekVal();
				return self;
			});
			this.$repositioningAt$ = (function ($index) {
				var self = this;
				return self.$at$($index);
			});
			this.$reset = (function () {
				var self = this;
				self.$position$(0);
				return self;
			});
			this.$setToEnd = (function () {
				var self = this;
				self.$position$(self.$size());
				return self;
			});
			this.$size = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$skip$ = (function ($nElements) {
				var self = this;
				self.$position$((self.$position() + $nElements).$max$(self.$size()));
				return self;
			});
			this.$skipTo$ = (function ($o) {
				var self = this;
				var $pos = nil;
				var $n = nil;
				var $sz = nil;
				$sz = self.$size();
				$pos = self.$position();
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = $pos + 1;
					$$limit = $sz;
					for (; $$limit.$$greater$equal($i); ) {
						if (self.$repositioningAt$($i).$$equal($o)) {
							self.$position$($i);
							return true;
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				self.$position$($sz);
				return false;
			});
			this.$upTo$ = (function ($delimiter) {
				var self = this;
				var $pos = nil;
				var $n = nil;
				var $result = nil;
				$pos = self.$position();
				return self.$skipTo$($delimiter).$ifTrue$ifFalse$((function () {
					return self.$copyFrom$to$($pos + 1, self.$position() - 1);
				}), (function () {
					return self.$copyFrom$to$($pos + 1, self.$position());
				}));
			});
			this.$actualPosition = (function () {
				var self = this;
				return self.$actualPosition_slot();
			});
			this.$actualPosition$ = (function ($p) {
				var self = this;
				self.$actualPosition_slot$($p);
				return self;
			});
			this.$actualAtEnd = (function () {
				var self = this;
				return self.$actualPosition().$$greater$equal(self.$size());
			});
			this.$actualPosition_slot = (function () {
				return this.$actualPosition_slot$slot;
			});
			this.$actualPosition_slot$ = (function (v) {
				this.$actualPosition_slot$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`BasicReadStream";
					this.$superInit$Streams$BasicReadStream = $.$superInit$Streams$BasicReadStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$collection = $.$collection;
					this.$contents = $.$contents;
					this.$contentsRemaining = $.$contentsRemaining;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$isEmpty = $.$isEmpty;
					this.$position = $.$position;
					this.$position$ = $.$position$;
					this.$repositioningAt$ = $.$repositioningAt$;
					this.$reset = $.$reset;
					this.$setToEnd = $.$setToEnd;
					this.$size = $.$size;
					this.$skip$ = $.$skip$;
					this.$skipTo$ = $.$skipTo$;
					this.$upTo$ = $.$upTo$;
					this.$actualPosition = $.$actualPosition;
					this.$actualPosition$ = $.$actualPosition$;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualPosition_slot = $.$actualPosition_slot;
					this.$actualPosition_slot$ = $.$actualPosition_slot$;
					this.$enclosingObjects$Streams$BasicReadStream = enclosingObjects;
					this.$super$Streams$BasicReadStream = runtimeSuperclass;
					this["Streams`BasicReadStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$actualPosition_slot$slot = nil;
					});
					this.basicNew = this["Streams`BasicReadStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`BasicReadStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <List[E]> ^ <ReadStream[E]> = (\r\r	(* Create a new read stream on sc, assuming that all of its elements are readable.\r		This message is here for BlueBook compatibility.  For good style, use (sc readStream)\r		instead. *)\r\r	^SeqCltnReadStream(* [E] *) on: sc\r)"),
					new MM("on:from:to:", false, "on: sc <List[E]> from: firstIndex <Integer> to: lastIndex <Integer>  ^ <ReadStream[E]> = (\r\r	(* Create a new read stream on a copy of the elements in sc from firstIndex to lastIndex, inclusive *)\r\r	^self on: (sc copyFrom: firstIndex to: lastIndex)\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$enclosingObjects$Streams$BasicReadStream[0].$SeqCltnReadStream().$on$($sc);
				});
				this.$on$from$to$ = (function ($sc, $firstIndex, $lastIndex) {
					var self = this;
					return self.$on$($sc.$copyFrom$to$($firstIndex, $lastIndex));
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`BasicReadStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$on$from$to$ = $.$on$from$to$;
						this.$enclosingObjects$Streams$BasicReadStream = enclosingObjects;
						this.$super$Streams$BasicReadStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$BasicReadWriteStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`BasicReadWriteStream";
			this.name = "Streams`BasicReadWriteStream";
			this.header = "BasicReadWriteStream = BasicOutputReadStream (\r(* This class provides the standard implementation of the WriteStream and ReadWriteStream protocols.\r\rThere is no BasicWriteStream class; this is because virtually all WriteStreams are on data structures with implicit readability (try thinking of a positionable collection that can be written and not read), so ReadStreams and ReadWriteStreams are used instead.\r\rBlue Book compatibility note: you can use ReadWriteStreams as you would in the Blue Book, with\rone exception: the #contents message acts like it would for a WriteStream (i.e. it returns the elements\rwritten) rather than returning the entire collection.  The messages #collection, #contentsRemaining, and #contentsWritten fulfill these kind of roles without ambiguity in our system, to make ReadWriteStreams\rfully substitutable for both ReadStreams and WriteStreams.\r\r%responsibility nextPut:\r    Subclasses must extend the nextPut: method to do the actual work of writing the element.\r%responsibility size:\r    Optional - Any subclass that wishes to start off with readable elements in the stream must send\r    the message size: to indicate how many there are.\r*)| size <Integer> ::= 0.  |)";
			this.slots = [new SM("size", true, false)];
			this.methods = [
				new MM("superInit`Streams`BasicReadWriteStream", true, "BasicOutputReadStream"),
				new MM("instance`initializer", true, "BasicOutputReadStream"),
				new MM("contents", false, "contents  ^ <List[E]> = (\r\r	(* Obsolete: this method is included purely for BlueBook compatibility.  If possible, use \r	 #contentsRemaining and #contentsWritten, which will work when a ReadWriteStream\r	 is substituted for a ReadStream or a WriteStream, unlike this method *)\r\r	^self collection\r)"),
				new MM("contentsWritten", false, "contentsWritten  ^ <List[E]> = (\r\r\r	| cltn <MutableList[E]>  origPos <Integer> |\r\r	cltn:: self newCollectionOfSize: self position.\r	origPos:: self position.\r	self position: 0.\r	1 to: origPos do: [ :i <Integer> |\r		cltn at: i put: self next.	].\r	self position: origPos.\r	^cltn\r)"),
				new MM("nextPut:", false, "nextPut: el <E> ^ <E> = (\r\r	(* Subclasses must extend this to do the actual writing of the element.  This impl just keeps track of bookkeeping. *)\r\r	| pos <Integer> |\r	self position: (pos:: self position + 1).\r	pos > self size\r		ifTrue: [ self size: pos ].\r	^el\r)"),
				new MM("size", true, null),
				new MM("size:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$BasicReadWriteStream = (function () {
				var self = this;
				self.$super$Streams$BasicReadWriteStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$BasicReadWriteStream();
				self.$size$(0);
				return self;
			});
			this.$contents = (function () {
				var self = this;
				return self.$collection();
			});
			this.$contentsWritten = (function () {
				var self = this;
				var $cltn = nil;
				var $origPos = nil;
				$cltn = self.$newCollectionOfSize$(self.$position());
				$origPos = self.$position();
				self.$position$(0);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $origPos;
					for (; $$limit.$$greater$equal($i); ) {
						$cltn.$at$put$($i, self.$next());
						$i = (1).$$plus($i);
					};
				};
				self.$position$($origPos);
				return $cltn;
			});
			this.$nextPut$ = (function ($el) {
				var self = this;
				var $pos = nil;
				self.$position$($pos = self.$position() + 1);
				if ($pos.$$greater(self.$size())) {
					self.$size$($pos);
				} else {
					nil;
				};
				return $el;
			});
			this.$size = (function () {
				return this.$size$slot;
			});
			this.$size$ = (function (v) {
				this.$size$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`BasicReadWriteStream";
					this.$superInit$Streams$BasicReadWriteStream = $.$superInit$Streams$BasicReadWriteStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$contents = $.$contents;
					this.$contentsWritten = $.$contentsWritten;
					this.$nextPut$ = $.$nextPut$;
					this.$size = $.$size;
					this.$size$ = $.$size$;
					this.$enclosingObjects$Streams$BasicReadWriteStream = enclosingObjects;
					this.$super$Streams$BasicReadWriteStream = runtimeSuperclass;
					this["Streams`BasicReadWriteStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$size$slot = nil;
					});
					this.basicNew = this["Streams`BasicReadWriteStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`BasicReadWriteStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <MutableList[E]>  ^ <ReadWriteStream[E]> = (\r\r	(* Create a new read write stream on a sequenceable collection, assuming that it contains no readable elements yet *)\r\r	^self on: sc numElements: 0\r)"),
					new MM("on:numElements:", false, "on: sc <MutableList[E]> numElements: n <Integer> ^ <ReadWriteStream[E]> = (\r\r	(* Create a new read write stream on a sequenceable collection, assuming that it contains n readable elements to start *)\r\r	^SeqCltnReadWriteStream on: sc numElements: n\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$on$numElements$($sc, 0);
				});
				this.$on$numElements$ = (function ($sc, $n) {
					var self = this;
					return self.$enclosingObjects$Streams$BasicReadWriteStream[0].$SeqCltnReadWriteStream().$on$numElements$($sc, $n);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`BasicReadWriteStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$on$numElements$ = $.$on$numElements$;
						this.$enclosingObjects$Streams$BasicReadWriteStream = enclosingObjects;
						this.$super$Streams$BasicReadWriteStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterInput = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterInput";
			this.name = "Streams`CharacterInput";
			this.header = "CharacterInput = (\r(* This mixin adds character specific messages to an InputStream class. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterInput", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("contentsRemaining", false, "contentsRemaining ^ <String> = (\r\r\r	| con <List[Character]> |\r	con:: super contentsRemaining.\r\r	(* %todo use Str below when have first class protocols *)\r	^con isString\r		ifTrue: [ (* guaranteed <Str> *) con ]\r		ifFalse: [ String withAll: con ]\r)"),
				new MM("next:", false, "next: nElements <Integer> ^ <String> = (\r\r\r	| con <List[Character]> |\r	con:: super next: nElements.\r	^con isString\r		ifTrue: [ (* guaranteed <Str> *) con ]\r		ifFalse: [ String withAll: con ]\r)"),
				new MM("upTo:", false, "upTo: o <Object> ^ <String> = (\r\r\r	| con <List[Character]> |\r	con:: super upTo: o.\r	^con isString\r		ifTrue: [ (* guaranteed <String> *) con ]\r		ifFalse: [ String withAll: con ]\r)"),
				new MM("newCollectionOfSize:", false, "newCollectionOfSize: n <Integer> ^ <String> = (\r\r\r	^String(* [E] *) new: n\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterInput = (function () {
				var self = this;
				self.$super$Streams$CharacterInput.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterInput();
				return self;
			});
			this.$contentsRemaining = (function () {
				var self = this;
				var $con = nil;
				$con = self.$super$Streams$CharacterInput.$contentsRemaining.call(self);
				return $con.$isString().$ifTrue$ifFalse$((function () {
					return $con;
				}), (function () {
					return self.$enclosingObjects$Streams$CharacterInput[0].$String().$withAll$($con);
				}));
			});
			this.$next$ = (function ($nElements) {
				var self = this;
				var $con = nil;
				$con = self.$super$Streams$CharacterInput.$next$.call(self, $nElements);
				return $con.$isString().$ifTrue$ifFalse$((function () {
					return $con;
				}), (function () {
					return self.$enclosingObjects$Streams$CharacterInput[0].$String().$withAll$($con);
				}));
			});
			this.$upTo$ = (function ($o) {
				var self = this;
				var $con = nil;
				$con = self.$super$Streams$CharacterInput.$upTo$.call(self, $o);
				return $con.$isString().$ifTrue$ifFalse$((function () {
					return $con;
				}), (function () {
					return self.$enclosingObjects$Streams$CharacterInput[0].$String().$withAll$($con);
				}));
			});
			this.$newCollectionOfSize$ = (function ($n) {
				var self = this;
				return self.$enclosingObjects$Streams$CharacterInput[0].$String().$new$($n);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterInput";
					this.$superInit$Streams$CharacterInput = $.$superInit$Streams$CharacterInput;
					this.$instance$initializer = $.$instance$initializer;
					this.$contentsRemaining = $.$contentsRemaining;
					this.$next$ = $.$next$;
					this.$upTo$ = $.$upTo$;
					this.$newCollectionOfSize$ = $.$newCollectionOfSize$;
					this.$enclosingObjects$Streams$CharacterInput = enclosingObjects;
					this.$super$Streams$CharacterInput = runtimeSuperclass;
					this["Streams`CharacterInput"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterInput"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterInput";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterInput";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$CharacterInput = enclosingObjects;
						this.$super$Streams$CharacterInput = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterInputConverter = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterInputConverter";
			this.name = "Streams`CharacterInputConverter";
			this.header = "CharacterInputConverter = CharacterIStream (\r(* Instances are used to create a CharInputStream that wraps a byte input stream\r*)| binaryStream <STRM> (* = binaryStrm. *)  |)";
			this.slots = [new SM("binaryStream", true, false)];
			this.methods = [
				new MM("superInit`Streams`CharacterInputConverter", true, "CharacterIStream"),
				new MM("instance`initializer", true, "CharacterIStream"),
				new MM("upTo:", false, "upTo: del <Object> ^ <Str> = (\r\r\r	| bytes <List[Integer]> s <String> lfs <Integer> j <Integer> delimiter <Character> |\r\r	(self havePeeked and: [ self peek == del ])\r		ifTrue: [ ^super upTo: del ].\r\r	delimiter:: Character coerce: del.\r	bytes:: self binaryStream upTo: delimiter asciiValue.\r\r	usingCrLfConvention\r		ifTrue: [	delimiter == Character cr\r							ifTrue: [	(* If cr was the delim, got to check for reading the lf, since\r											it was at the lower level *)\r											(self binaryStream atEnd not and: [ self binaryStream peek == 10 ])\r												ifTrue: [ self binaryStream next ].\r										].\r					]\r		ifFalse: [	(* self havePeeked\r							ifFalse: [	s:: String new: bytes size.\r											1 to: bytes size do:\r												[ :ind <Integer> |\r													s at: ind putUnicode: (bytes at: ind)	].\r										 ]\r							ifTrue:	[	s:: String new: bytes size + 1.\r											1 to: bytes size do:\r												[ :ind <Integer> |\r													s at: ind + 1 putUnicode: (bytes at: ind)	].\r											s at: 1 put: self next.\r										 ]\r						^s *)\r					].\r\r	(* Count the line feeds *)\r	lfs:: 0.\r	1 to: bytes size do:\r		[ :ind <Integer> |\r			(bytes at: ind) == 10\r				ifTrue: [ lfs:: lfs + 1 ]\r		].\r	self havePeeked\r		ifFalse: [	s:: String new: bytes size - lfs.\r						j:: 1.	  ]\r		ifTrue: [	s:: String new: (bytes size - lfs) + 1.\r						j:: 2.	  ].\r	bytes do:\r		[ :b <Integer> |\r			b == 10\r				ifFalse: [	s at: j putUnicode: b.\r								j:: j + 1.	 ]\r		].\r	self havePeeked\r		ifTrue: [ s at: 1 put: self next ].\r	^s\r)"),
				new MM("close", false, "close\r = (\r\r	self binaryStream close.\r)"),
				new MM("initBinaryStream:", false, "initBinaryStream: binaryStrm <STRM>\r = (\r\r	self binaryStream: binaryStrm\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^ <Boolean> = (\r\r\r	^self binaryStream atEnd\r)"),
				new MM("actualNext", false, "actualNext ^ <Character> = (\r\r    | c <Character> |\r	c:: Character value: self binaryStream next.\r	(usingCrLfConvention and: [ c = Character cr ])\r        ifTrue: [ self binaryStream atEnd\r						ifFalse: [ self binaryStream peek = Character lf asciiValue\r											ifTrue: [  self binaryStream next ]	]].\r	^c\r\r)"),
				new MM("binaryStream", true, null),
				new MM("binaryStream:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterInputConverter = (function () {
				var self = this;
				self.$super$Streams$CharacterInputConverter.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterInputConverter();
				return self;
			});
			this.$upTo$ = (function ($del) {
				var self = this;
				var $bytes = nil;
				var $s = nil;
				var $lfs = nil;
				var $j = nil;
				var $delimiter = nil;
				if (self.$havePeeked() && (self.$peek() === $del)) {
					return self.$super$Streams$CharacterInputConverter.$upTo$.call(self, $del);
				} else {
					nil;
				};
				$delimiter = self.$Character().$coerce$($del);
				$bytes = self.$binaryStream().$upTo$($delimiter.$asciiValue());
				if (self.$enclosingObjects$Streams$CharacterInputConverter[0].$usingCrLfConvention()) {
					if ($delimiter === self.$Character().$cr()) {
						if (self.$binaryStream().$atEnd().$not() && (self.$binaryStream().$peek() === 10)) {
							self.$binaryStream().$next();
						} else {
							nil;
						};
					} else {
						nil;
					};
				} else {
					nil;
				};
				$lfs = 0;
				{
					var $$limit = nil;
					var $ind = nil;
					nil;
					$ind = 1;
					$$limit = $bytes.$size();
					for (; $$limit.$$greater$equal($ind); ) {
						if ($bytes.$at$($ind) === 10) {
							$lfs = $lfs + 1;
						} else {
							nil;
						};
						$ind = (1).$$plus($ind);
					};
				};
				if (!self.$havePeeked()) {
					$s = self.$enclosingObjects$Streams$CharacterInputConverter[0].$String().$new$($bytes.$size() - $lfs);
					$j = 1;
				} else {
					$s = self.$enclosingObjects$Streams$CharacterInputConverter[0].$String().$new$(($bytes.$size() - $lfs) + 1);
					$j = 2;
				};
				$bytes.$do$((function ($b) {
					return ($b === 10).$ifFalse$((function () {
						$s.$at$putUnicode$($j, $b);
						return $j = $j + 1;
					}));
				}));
				if (self.$havePeeked()) {
					$s.$at$put$(1, self.$next());
				} else {
					nil;
				};
				return $s;
			});
			this.$close = (function () {
				var self = this;
				self.$binaryStream().$close();
				return self;
			});
			this.$initBinaryStream$ = (function ($binaryStrm) {
				var self = this;
				self.$binaryStream$($binaryStrm);
				return self;
			});
			this.$actualAtEnd = (function () {
				var self = this;
				return self.$binaryStream().$atEnd();
			});
			this.$actualNext = (function () {
				var self = this;
				var $c = nil;
				$c = self.$Character().$value$(self.$binaryStream().$next());
				if (self.$enclosingObjects$Streams$CharacterInputConverter[0].$usingCrLfConvention() && $c.$$equal(self.$Character().$cr())) {
					if (!self.$binaryStream().$atEnd()) {
						if (self.$binaryStream().$peek().$$equal(self.$Character().$lf().$asciiValue())) {
							self.$binaryStream().$next();
						} else {
							nil;
						};
					} else {
						nil;
					};
				} else {
					nil;
				};
				return $c;
			});
			this.$binaryStream = (function () {
				return this.$binaryStream$slot;
			});
			this.$binaryStream$ = (function (v) {
				this.$binaryStream$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterInputConverter";
					this.$superInit$Streams$CharacterInputConverter = $.$superInit$Streams$CharacterInputConverter;
					this.$instance$initializer = $.$instance$initializer;
					this.$upTo$ = $.$upTo$;
					this.$close = $.$close;
					this.$initBinaryStream$ = $.$initBinaryStream$;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualNext = $.$actualNext;
					this.$binaryStream = $.$binaryStream;
					this.$binaryStream$ = $.$binaryStream$;
					this.$enclosingObjects$Streams$CharacterInputConverter = enclosingObjects;
					this.$super$Streams$CharacterInputConverter = runtimeSuperclass;
					this["Streams`CharacterInputConverter"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$binaryStream$slot = nil;
					});
					this.basicNew = this["Streams`CharacterInputConverter"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterInputConverter";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: binaryStrm <STRM> ^ <Instance> = (\r\r\r	^self new initBinaryStream: binaryStrm\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($binaryStrm) {
					var self = this;
					return self.$new().$initBinaryStream$($binaryStrm);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterInputConverter";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$enclosingObjects$Streams$CharacterInputConverter = enclosingObjects;
						this.$super$Streams$CharacterInputConverter = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterInputOutputConverter = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterInputOutputConverter";
			this.name = "Streams`CharacterInputOutputConverter";
			this.header = "CharacterInputOutputConverter = OutputInputConverter (\r(*  *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterInputOutputConverter", true, "OutputInputConverter"),
				new MM("instance`initializer", true, "OutputInputConverter"),
				new MM("nextPut:", false, "nextPut: c <Character> ^ <Character> = (\r\r\r	self binaryStream nextPut: c asciiValue.\r	 (usingCrLfConvention and: [ c = Character cr ])\r		ifTrue: [ self binaryStream nextPut: Character lf asciiValue ].\r	^c\r)"),
				new MM("position", false, "position ^ <Integer> = (\r\r\r	^self binaryStream position\r)"),
				new MM("position:", false, "position: i <Integer>\r = (\r\r	self binaryStream position: i.\r	self noPeekVal.\r\r)"),
				new MM("setToEnd", false, "setToEnd\r = (\r\r	self binaryStream setToEnd\r)"),
				new MM("externalFlush", false, "externalFlush\r = (\r\r	self binaryStream externalFlush.\r)"),
				new MM("flush", false, "flush\r = (\r\r	self binaryStream flush.\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterInputOutputConverter = (function () {
				var self = this;
				self.$super$Streams$CharacterInputOutputConverter.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterInputOutputConverter();
				return self;
			});
			this.$nextPut$ = (function ($c) {
				var self = this;
				self.$binaryStream().$nextPut$($c.$asciiValue());
				if (self.$enclosingObjects$Streams$CharacterInputOutputConverter[0].$usingCrLfConvention() && $c.$$equal(self.$Character().$cr())) {
					self.$binaryStream().$nextPut$(self.$Character().$lf().$asciiValue());
				} else {
					nil;
				};
				return $c;
			});
			this.$position = (function () {
				var self = this;
				return self.$binaryStream().$position();
			});
			this.$position$ = (function ($i) {
				var self = this;
				self.$binaryStream().$position$($i);
				self.$noPeekVal();
				return self;
			});
			this.$setToEnd = (function () {
				var self = this;
				self.$binaryStream().$setToEnd();
				return self;
			});
			this.$externalFlush = (function () {
				var self = this;
				self.$binaryStream().$externalFlush();
				return self;
			});
			this.$flush = (function () {
				var self = this;
				self.$binaryStream().$flush();
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterInputOutputConverter";
					this.$superInit$Streams$CharacterInputOutputConverter = $.$superInit$Streams$CharacterInputOutputConverter;
					this.$instance$initializer = $.$instance$initializer;
					this.$nextPut$ = $.$nextPut$;
					this.$position = $.$position;
					this.$position$ = $.$position$;
					this.$setToEnd = $.$setToEnd;
					this.$externalFlush = $.$externalFlush;
					this.$flush = $.$flush;
					this.$enclosingObjects$Streams$CharacterInputOutputConverter = enclosingObjects;
					this.$super$Streams$CharacterInputOutputConverter = runtimeSuperclass;
					this["Streams`CharacterInputOutputConverter"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterInputOutputConverter"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterInputOutputConverter";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: binaryStrm <STRM> ^ <Instance> = (\r	^self new initBinaryStream: binaryStrm\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($binaryStrm) {
					var self = this;
					return self.$new().$initBinaryStream$($binaryStrm);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterInputOutputConverter";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$enclosingObjects$Streams$CharacterInputOutputConverter = enclosingObjects;
						this.$super$Streams$CharacterInputOutputConverter = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterOutput = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterOutput";
			this.name = "Streams`CharacterOutput";
			this.header = "CharacterOutput = (\r(* This mixin adds character specific messages to an OutputStream class. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterOutput", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("cr", false, "cr \r = (\r\r	self nextPut: Character cr\r)"),
				new MM("crTab", false, "crTab \r = (\r\r	self crTab: 1\r)"),
				new MM("crTab:", false, "crTab: count <Integer>\r = (\r\r	count timesRepeat:  [\r		self nextPut: Character cr; nextPut: Character tab	]\r)"),
				new MM("print:", false, "print: o <Object>\r = (\r\r	o printOn: self\r)"),
				new MM("space", false, "space\r = (\r\r	self nextPut: Character space\r)"),
				new MM("tab", false, "tab\r = (\r\r	self nextPut: Character tab\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterOutput = (function () {
				var self = this;
				self.$super$Streams$CharacterOutput.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterOutput();
				return self;
			});
			this.$cr = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$cr());
				return self;
			});
			this.$crTab = (function () {
				var self = this;
				self.$crTab$(1);
				return self;
			});
			this.$crTab$ = (function ($count) {
				var self = this;
				{
					var $$limit = nil;
					var $$i = nil;
					nil;
					$$i = 1;
					$$limit = $count;
					for (; $$limit.$$greater$equal($$i); ) {
						(function (cascadeReceiver) {
							cascadeReceiver.$nextPut$(self.$Character().$cr());
							return cascadeReceiver.$nextPut$(self.$Character().$tab());
						})(self);
						$$i = (1).$$plus($$i);
					};
				};
				return self;
			});
			this.$print$ = (function ($o) {
				var self = this;
				$o.$printOn$(self);
				return self;
			});
			this.$space = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$space());
				return self;
			});
			this.$tab = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$tab());
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterOutput";
					this.$superInit$Streams$CharacterOutput = $.$superInit$Streams$CharacterOutput;
					this.$instance$initializer = $.$instance$initializer;
					this.$cr = $.$cr;
					this.$crTab = $.$crTab;
					this.$crTab$ = $.$crTab$;
					this.$print$ = $.$print$;
					this.$space = $.$space;
					this.$tab = $.$tab;
					this.$enclosingObjects$Streams$CharacterOutput = enclosingObjects;
					this.$super$Streams$CharacterOutput = runtimeSuperclass;
					this["Streams`CharacterOutput"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterOutput"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterOutput";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterOutput";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$CharacterOutput = enclosingObjects;
						this.$super$Streams$CharacterOutput = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterOutputConverter = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterOutputConverter";
			this.name = "Streams`CharacterOutputConverter";
			this.header = "CharacterOutputConverter = CharacterOStream (\r(*  *)| binaryStream <OutputStream[Integer]> (* = bstream. *) |)";
			this.slots = [new SM("binaryStream", true, false)];
			this.methods = [
				new MM("superInit`Streams`CharacterOutputConverter", true, "CharacterOStream"),
				new MM("instance`initializer", true, "CharacterOStream"),
				new MM("nextPut:", false, "nextPut: c <Character> ^ <Character> = (\r\r\r	self binaryStream nextPut: c asciiValue.\r	 (usingCrLfConvention and: [ c = Character cr ])\r		ifTrue: [ self binaryStream nextPut: Character lf asciiValue ].\r	^c\r)"),
				new MM("close", false, "close\r = (\r\r	self binaryStream close.\r)"),
				new MM("externalFlush", false, "externalFlush\r = (\r\r	self binaryStream externalFlush.\r)"),
				new MM("flush", false, "flush\r = (\r\r	self binaryStream flush.\r)"),
				new MM("initBinaryStream:", false, "initBinaryStream: binaryStrm <InputStream[Integer]>\r = ((* delete *)\r\r	self binaryStream: binaryStrm\r)"),
				new MM("binaryStream", true, null),
				new MM("binaryStream:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterOutputConverter = (function () {
				var self = this;
				self.$super$Streams$CharacterOutputConverter.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterOutputConverter();
				return self;
			});
			this.$nextPut$ = (function ($c) {
				var self = this;
				self.$binaryStream().$nextPut$($c.$asciiValue());
				if (self.$enclosingObjects$Streams$CharacterOutputConverter[0].$usingCrLfConvention() && $c.$$equal(self.$Character().$cr())) {
					self.$binaryStream().$nextPut$(self.$Character().$lf().$asciiValue());
				} else {
					nil;
				};
				return $c;
			});
			this.$close = (function () {
				var self = this;
				self.$binaryStream().$close();
				return self;
			});
			this.$externalFlush = (function () {
				var self = this;
				self.$binaryStream().$externalFlush();
				return self;
			});
			this.$flush = (function () {
				var self = this;
				self.$binaryStream().$flush();
				return self;
			});
			this.$initBinaryStream$ = (function ($binaryStrm) {
				var self = this;
				self.$binaryStream$($binaryStrm);
				return self;
			});
			this.$binaryStream = (function () {
				return this.$binaryStream$slot;
			});
			this.$binaryStream$ = (function (v) {
				this.$binaryStream$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterOutputConverter";
					this.$superInit$Streams$CharacterOutputConverter = $.$superInit$Streams$CharacterOutputConverter;
					this.$instance$initializer = $.$instance$initializer;
					this.$nextPut$ = $.$nextPut$;
					this.$close = $.$close;
					this.$externalFlush = $.$externalFlush;
					this.$flush = $.$flush;
					this.$initBinaryStream$ = $.$initBinaryStream$;
					this.$binaryStream = $.$binaryStream;
					this.$binaryStream$ = $.$binaryStream$;
					this.$enclosingObjects$Streams$CharacterOutputConverter = enclosingObjects;
					this.$super$Streams$CharacterOutputConverter = runtimeSuperclass;
					this["Streams`CharacterOutputConverter"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$binaryStream$slot = nil;
					});
					this.basicNew = this["Streams`CharacterOutputConverter"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterOutputConverter";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: binaryStrm <OutputStream[Integer]> ^ <Instance> = (\r\r\r	^self new initBinaryStream: binaryStrm\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($binaryStrm) {
					var self = this;
					return self.$new().$initBinaryStream$($binaryStrm);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterOutputConverter";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$enclosingObjects$Streams$CharacterOutputConverter = enclosingObjects;
						this.$super$Streams$CharacterOutputConverter = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterReadConverter = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterReadConverter";
			this.name = "Streams`CharacterReadConverter";
			this.header = "CharacterReadConverter = CharacterInputConverter (\r(* Like CharacterInputConverter, but takes a ReadStream[Integer] rather than an InputStream[Integer], so that it can do some operations like\rupTo: faster.\r*))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterReadConverter", true, "CharacterInputConverter"),
				new MM("instance`initializer", true, "CharacterInputConverter"),
				new MM("upTo:", false, "upTo: del <Object> ^ <String> = (\r\r\r	| sz <Integer> s <String> lfs <Integer> offset <Integer> delimiter <Integer> pos <Integer> bsize <Integer> i <Integer> |\r\r	(self havePeeked and: [ self peek == del ])\r		ifTrue: [ ^super upTo: del ].\r\r	delimiter:: (Character coerce: del) asciiValue.\r	pos:: self binaryStream position.\r\r	(* Scan for the delimiter in the binary stream *)\r	sz:: self numCharsUpToAscii: delimiter.\r\r	self havePeeked\r		ifFalse: [	s:: String new: sz.\r						offset:: 0. ]\r		ifTrue: [	s:: String new: sz + 1.\r						s at: 1 put: self next.\r						offset:: 1. ].\r\r	pos:: pos + 1.\r	i:: 1.\r	[ i <= sz ]\r		whileTrue: [	| code <Integer> |\r							code:: self binaryStream repositioningAt: pos.\r							s at: i + offset putUnicode: code.\r							i:: i + 1.\r							(code == 13 and: [usingCrLfConvention])\r								ifTrue: [	pos:: pos + 1. ].\r							pos:: pos + 1.	].\r	(* The following fiddly code is to set the binary stream position to pos without\r		going past the end of the stream *)\r	self binaryStream position: pos - 1.\r	self binaryStream atEnd\r		ifFalse: [ self binaryStream next ].\r	^s\r)"),
				new MM("numCharsUpToAscii:", false, "numCharsUpToAscii: del <Integer> ^ <Integer> = (\r\r	(* Num chars from current pos to del, not counting lfs if they shouldn't be.  May leave the position changed. *)\r\r	| n <Integer> sz <Integer> |\r	n:: 0.\r	sz:: self binaryStream size.\r	self binaryStream position + 1 to: sz do:\r		[ :i <Integer> |\r			| asc <Integer> |\r			asc:: self binaryStream repositioningAt: i.\r			(usingCrLfConvention and: [ asc == 10 ]) (* lf *)\r				ifFalse: [	asc == del\r									ifTrue: [ ^n ]\r									ifFalse: [	n:: n + 1 ]\r							 ]\r		].\r	^n\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterReadConverter = (function () {
				var self = this;
				self.$super$Streams$CharacterReadConverter.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterReadConverter();
				return self;
			});
			this.$upTo$ = (function ($del) {
				var self = this;
				var $sz = nil;
				var $s = nil;
				var $lfs = nil;
				var $offset = nil;
				var $delimiter = nil;
				var $pos = nil;
				var $bsize = nil;
				var $i = nil;
				if (self.$havePeeked() && (self.$peek() === $del)) {
					return self.$super$Streams$CharacterReadConverter.$upTo$.call(self, $del);
				} else {
					nil;
				};
				$delimiter = self.$Character().$coerce$($del).$asciiValue();
				$pos = self.$binaryStream().$position();
				$sz = self.$numCharsUpToAscii$($delimiter);
				if (!self.$havePeeked()) {
					$s = self.$enclosingObjects$Streams$CharacterReadConverter[0].$String().$new$($sz);
					$offset = 0;
				} else {
					$s = self.$enclosingObjects$Streams$CharacterReadConverter[0].$String().$new$($sz + 1);
					$s.$at$put$(1, self.$next());
					$offset = 1;
				};
				$pos = $pos + 1;
				$i = 1;
				{
					nil;
					for (; $i.$$less$equal($sz); ) {
						var $code = nil;
						$code = self.$binaryStream().$repositioningAt$($pos);
						$s.$at$putUnicode$($i + $offset, $code);
						$i = $i + 1;
						if (($code === 13) && self.$enclosingObjects$Streams$CharacterReadConverter[0].$usingCrLfConvention()) {
							$pos = $pos + 1;
						} else {
							nil;
						};
						$pos = $pos + 1;
					};
				};
				self.$binaryStream().$position$($pos - 1);
				if (!self.$binaryStream().$atEnd()) {
					self.$binaryStream().$next();
				} else {
					nil;
				};
				return $s;
			});
			this.$numCharsUpToAscii$ = (function ($del) {
				var self = this;
				var $n = nil;
				var $sz = nil;
				$n = 0;
				$sz = self.$binaryStream().$size();
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = self.$binaryStream().$position() + 1;
					$$limit = $sz;
					for (; $$limit.$$greater$equal($i); ) {
						var $asc = nil;
						$asc = self.$binaryStream().$repositioningAt$($i);
						if (!(self.$enclosingObjects$Streams$CharacterReadConverter[0].$usingCrLfConvention() && ($asc === 10))) {
							if ($asc === $del) {
								return $n;
							} else {
								$n = $n + 1;
							};
						} else {
							nil;
						};
						$i = (1).$$plus($i);
					};
				};
				return $n;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterReadConverter";
					this.$superInit$Streams$CharacterReadConverter = $.$superInit$Streams$CharacterReadConverter;
					this.$instance$initializer = $.$instance$initializer;
					this.$upTo$ = $.$upTo$;
					this.$numCharsUpToAscii$ = $.$numCharsUpToAscii$;
					this.$enclosingObjects$Streams$CharacterReadConverter = enclosingObjects;
					this.$super$Streams$CharacterReadConverter = runtimeSuperclass;
					this["Streams`CharacterReadConverter"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterReadConverter"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterReadConverter";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: binaryStrm <STRM> ^ <Instance> = (\r	^self new initBinaryStream: binaryStrm\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($binaryStrm) {
					var self = this;
					return self.$new().$initBinaryStream$($binaryStrm);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterReadConverter";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$enclosingObjects$Streams$CharacterReadConverter = enclosingObjects;
						this.$super$Streams$CharacterReadConverter = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterReadStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterReadStream";
			this.name = "Streams`CharacterReadStream";
			this.header = "CharacterReadStream = CharacterSequenceReadStream (\r(*  *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterReadStream", true, "CharacterSequenceReadStream"),
				new MM("instance`initializer", true, "CharacterSequenceReadStream"),
				new MM("copyFrom:to:", false, "copyFrom: start <Integer> to: stop <Integer> ^ <MutableList[EX]>\r	(* {where EX is returnType of #anElement message of receiverType} *)\r= (\r\r	| pos <Integer> n <Integer> result <String> offset <Integer> |\r	pos:: self position.\r	n:: (stop - start) + 1.\r	result:: String new: n.\r	offset:: start - 1.\r	1 to: n do:\r		[ :i <Integer> |\r			(* guarantee is safe because of inference clause *)\r			result at: i put: (self repositioningAt: offset + i). ].\r	self position: pos.\r	^(* guaranteed <VarSeqCltn[EX]> *) result\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterReadStream = (function () {
				var self = this;
				self.$super$Streams$CharacterReadStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterReadStream();
				return self;
			});
			this.$copyFrom$to$ = (function ($start, $stop) {
				var self = this;
				var $pos = nil;
				var $n = nil;
				var $result = nil;
				var $offset = nil;
				$pos = self.$position();
				$n = ($stop - $start) + 1;
				$result = self.$enclosingObjects$Streams$CharacterReadStream[0].$String().$new$($n);
				$offset = $start - 1;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $n;
					for (; $$limit.$$greater$equal($i); ) {
						$result.$at$put$($i, self.$repositioningAt$($offset + $i));
						$i = (1).$$plus($i);
					};
				};
				self.$position$($pos);
				return $result;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterReadStream";
					this.$superInit$Streams$CharacterReadStream = $.$superInit$Streams$CharacterReadStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$enclosingObjects$Streams$CharacterReadStream = enclosingObjects;
					this.$super$Streams$CharacterReadStream = runtimeSuperclass;
					this["Streams`CharacterReadStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterReadStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterReadStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <List[E]> ^ <ReadStream[E]> = (\r	^self over: sc\r)"),
					new MM("over:", false, "over: sc <List[E]> ^ <Instance> = (\r	(* This is like on: except it returns type Instance.   on: for streams may return a non-instance type. *)\r\r	^self new initCollection: sc\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$over$($sc);
				});
				this.$over$ = (function ($sc) {
					var self = this;
					return self.$new().$initCollection$($sc);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterReadStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$over$ = $.$over$;
						this.$enclosingObjects$Streams$CharacterReadStream = enclosingObjects;
						this.$super$Streams$CharacterReadStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$CharacterReadWriteStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`CharacterReadWriteStream";
			this.name = "Streams`CharacterReadWriteStream";
			this.header = "CharacterReadWriteStream = CharacterSequenceReadWriteStream (\r(*  *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`CharacterReadWriteStream", true, "CharacterSequenceReadWriteStream"),
				new MM("instance`initializer", true, "CharacterSequenceReadWriteStream"),
				new MM("copyFrom:to:", false, "copyFrom: start <Integer> to: stop <Integer> ^ <MutableList[EX]>\r	(* {where EX is returnType of #anElement message of receiverType} *)\r= (\r\r	| pos <Integer> n <Integer> result <String> offset <Integer> |\r	pos:: self position.\r	n:: (stop - start) + 1.\r	result:: String new: n.\r	offset:: start - 1.\r	1 to: n do:\r		[ :i <Integer> |\r			(* guarantee is safe because of inference clause *)\r			result at: i put: (self repositioningAt: offset + i). ].\r	self position: pos.\r	^(* guaranteed <VarSeqCltn[EX]> *) result\r)"),
				new MM("cr", false, "cr \r = (\r\r	self nextPut: Character cr\r)"),
				new MM("crTab", false, "crTab \r = (\r\r	self crTab: 1\r)"),
				new MM("crTab:", false, "crTab: count <Integer>\r = (\r\r	count timesRepeat:  [\r		self nextPut: Character cr; nextPut: Character tab	]\r)"),
				new MM("print:", false, "print: o <Object>\r = (\r\r	o printOn: self\r)"),
				new MM("space", false, "space\r = (\r\r	self nextPut: Character space\r)"),
				new MM("tab", false, "tab\r = (\r\r	self nextPut: Character tab\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$CharacterReadWriteStream = (function () {
				var self = this;
				self.$super$Streams$CharacterReadWriteStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$CharacterReadWriteStream();
				return self;
			});
			this.$copyFrom$to$ = (function ($start, $stop) {
				var self = this;
				var $pos = nil;
				var $n = nil;
				var $result = nil;
				var $offset = nil;
				$pos = self.$position();
				$n = ($stop - $start) + 1;
				$result = self.$enclosingObjects$Streams$CharacterReadWriteStream[0].$String().$new$($n);
				$offset = $start - 1;
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $n;
					for (; $$limit.$$greater$equal($i); ) {
						$result.$at$put$($i, self.$repositioningAt$($offset + $i));
						$i = (1).$$plus($i);
					};
				};
				self.$position$($pos);
				return $result;
			});
			this.$cr = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$cr());
				return self;
			});
			this.$crTab = (function () {
				var self = this;
				self.$crTab$(1);
				return self;
			});
			this.$crTab$ = (function ($count) {
				var self = this;
				{
					var $$limit = nil;
					var $$i = nil;
					nil;
					$$i = 1;
					$$limit = $count;
					for (; $$limit.$$greater$equal($$i); ) {
						(function (cascadeReceiver) {
							cascadeReceiver.$nextPut$(self.$Character().$cr());
							return cascadeReceiver.$nextPut$(self.$Character().$tab());
						})(self);
						$$i = (1).$$plus($$i);
					};
				};
				return self;
			});
			this.$print$ = (function ($o) {
				var self = this;
				$o.$printOn$(self);
				return self;
			});
			this.$space = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$space());
				return self;
			});
			this.$tab = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$tab());
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`CharacterReadWriteStream";
					this.$superInit$Streams$CharacterReadWriteStream = $.$superInit$Streams$CharacterReadWriteStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$copyFrom$to$ = $.$copyFrom$to$;
					this.$cr = $.$cr;
					this.$crTab = $.$crTab;
					this.$crTab$ = $.$crTab$;
					this.$print$ = $.$print$;
					this.$space = $.$space;
					this.$tab = $.$tab;
					this.$enclosingObjects$Streams$CharacterReadWriteStream = enclosingObjects;
					this.$super$Streams$CharacterReadWriteStream = runtimeSuperclass;
					this["Streams`CharacterReadWriteStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`CharacterReadWriteStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`CharacterReadWriteStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <MutableList[E]> ^ <ReadWriteStream[E]> = (\r	^self over: sc\r)"),
					new MM("on:numElements:", false, "on: sc <MutableList[E]> numElements: n <Integer> ^ <ReadWriteStream[E]> = (\r	^(self over: sc) size: n\r)"),
					new MM("over:", false, "over: sc <MutableList[E]> ^ <Instance> = (\r\r	(* This is like on: except it returns type Instance.   on: for streams may return a non-instance type. *)\r\r	^self new initBuffer: sc\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$over$($sc);
				});
				this.$on$numElements$ = (function ($sc, $n) {
					var self = this;
					return self.$over$($sc).$size$($n);
				});
				this.$over$ = (function ($sc) {
					var self = this;
					return self.$new().$initBuffer$($sc);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`CharacterReadWriteStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$on$numElements$ = $.$on$numElements$;
						this.$over$ = $.$over$;
						this.$enclosingObjects$Streams$CharacterReadWriteStream = enclosingObjects;
						this.$super$Streams$CharacterReadWriteStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$ExternalInputStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`ExternalInputStream";
			this.name = "Streams`ExternalInputStream";
			this.header = "ExternalInputStream = BasicIExStream (\r(*  *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`ExternalInputStream", true, "BasicIExStream"),
				new MM("instance`initializer", true, "BasicIExStream"),
				new MM("atEnd", false, "atEnd ^ <Boolean> = (\r\r\r	(* Reimplemented for speed since we have ensured that atEnd and actualAtEnd mean\r	  the same thing *)\r\r	^self actualAtEnd\r)"),
				new MM("next", false, "next ^ <Integer> = (\r\r\r	(* Reimplemented for speed since we have ensured that next and actualNext mean\r	  the same thing *)\r\r	^self actualNext\r)"),
				new MM("peek", false, "peek ^ <Integer> = (\r\r\r	(* Reimplement so that we can ensure that next and actualNext are the same, for\r	 speed, since by design we always know we have another buffer byte to look at. *)\r\r	self assert: [ self atEnd not ] message: 'Can''t peak past the end of the stream'.\r	^self buffer unsignedByteAt: self nextBufferPosition + 1 (* byteAt: self nextBufferPosition *)\r)"),
				new MM("peekIfAbsent:", false, "peekIfAbsent: f <[X def]>  ^ <E | X> = (\r\r\r	(* Reimplement so that we can ensure that next and actualNext are the same, for\r	 speed, since by design we always know we have another buffer byte to look at. *)\r\r	^self atEnd\r		ifTrue: [ f value ]\r		ifFalse: [ self buffer byteAt: self nextBufferPosition ]\r)"),
				new MM("close", false, "close\r = (\r    (* We have to reimplement this because BasicInputStream mixin in an inappropriate version *)\r    self doClose.\r)"),
				new MM("initDescriptor:", false, "initDescriptor: d <DESCRIPTOR>  = (\r\r\r	super initDescriptor: d.\r	self fillBuffer.\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^ <Boolean> = (\r\r    ^self nextBufferPosition >= self bufferNumElements\r)"),
				new MM("actualNext", false, "actualNext ^ <Integer> = (\r\r\r    | pos <Integer> byte <Integer> |\r	self actualAtEnd\r		ifTrue: [ self error: 'attempt to read past the end of an external stream' ].\r    pos:: self nextBufferPosition.\r    byte:: self buffer (* byteAt: pos. *) unsignedByteAt: pos+1.\r    pos:: pos + 1.\r    pos >= self bufferSize\r        ifFalse: [ self nextBufferPosition: pos ]\r        ifTrue: [    self advanceBuffer ].\r    ^byte\r)"),
				new MM("arrangeForFinalization", false, "arrangeForFinalization\r = (\r    (* %todo: arrange for the finalize message to be sent to the stream before gc.\r    Is this right? *)\r    (* self descriptor register. *)\r)"),
				new MM("fillBuffer", false, "fillBuffer\r = (\r    self bufferNumElements:\r        (self descriptor readAt: self bufferOrigin\r            ifFail: [ :err <ExternalError> | self error: err ]).\r)"),
				new MM("newCollectionOfSize:", false, "newCollectionOfSize: n <Integer> ^ <ByteArray> = (\r\r\r	^ByteArray new: n\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$ExternalInputStream = (function () {
				var self = this;
				self.$super$Streams$ExternalInputStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$ExternalInputStream();
				return self;
			});
			this.$atEnd = (function () {
				var self = this;
				return self.$actualAtEnd();
			});
			this.$next = (function () {
				var self = this;
				return self.$actualNext();
			});
			this.$peek = (function () {
				var self = this;
				self.$assert$message$((function () {
					return self.$atEnd().$not();
				}), "Can't peak past the end of the stream");
				return self.$buffer().$unsignedByteAt$(self.$nextBufferPosition() + 1);
			});
			this.$peekIfAbsent$ = (function ($f) {
				var self = this;
				return self.$atEnd().$ifTrue$ifFalse$((function () {
					return $f.$value();
				}), (function () {
					return self.$buffer().$byteAt$(self.$nextBufferPosition());
				}));
			});
			this.$close = (function () {
				var self = this;
				self.$doClose();
				return self;
			});
			this.$initDescriptor$ = (function ($d) {
				var self = this;
				self.$super$Streams$ExternalInputStream.$initDescriptor$.call(self, $d);
				self.$fillBuffer();
				return self;
			});
			this.$actualAtEnd = (function () {
				var self = this;
				return self.$nextBufferPosition().$$greater$equal(self.$bufferNumElements());
			});
			this.$actualNext = (function () {
				var self = this;
				var $pos = nil;
				var $byte = nil;
				if (self.$actualAtEnd()) {
					self.$error$("attempt to read past the end of an external stream");
				} else {
					nil;
				};
				$pos = self.$nextBufferPosition();
				$byte = self.$buffer().$unsignedByteAt$($pos + 1);
				$pos = $pos + 1;
				if (!$pos.$$greater$equal(self.$bufferSize())) {
					self.$nextBufferPosition$($pos);
				} else {
					self.$advanceBuffer();
				};
				return $byte;
			});
			this.$arrangeForFinalization = (function () {
				var self = this;
				return self;
			});
			this.$fillBuffer = (function () {
				var self = this;
				self.$bufferNumElements$(self.$descriptor().$readAt$ifFail$(self.$bufferOrigin(), (function ($err) {
					return self.$error$($err);
				})));
				return self;
			});
			this.$newCollectionOfSize$ = (function ($n) {
				var self = this;
				return self.$ByteArray().$new$($n);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`ExternalInputStream";
					this.$superInit$Streams$ExternalInputStream = $.$superInit$Streams$ExternalInputStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$atEnd = $.$atEnd;
					this.$next = $.$next;
					this.$peek = $.$peek;
					this.$peekIfAbsent$ = $.$peekIfAbsent$;
					this.$close = $.$close;
					this.$initDescriptor$ = $.$initDescriptor$;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualNext = $.$actualNext;
					this.$arrangeForFinalization = $.$arrangeForFinalization;
					this.$fillBuffer = $.$fillBuffer;
					this.$newCollectionOfSize$ = $.$newCollectionOfSize$;
					this.$enclosingObjects$Streams$ExternalInputStream = enclosingObjects;
					this.$super$Streams$ExternalInputStream = runtimeSuperclass;
					this["Streams`ExternalInputStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`ExternalInputStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`ExternalInputStream";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`ExternalInputStream";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$ExternalInputStream = enclosingObjects;
						this.$super$Streams$ExternalInputStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$ExternalOutputStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`ExternalOutputStream";
			this.name = "Streams`ExternalOutputStream";
			this.header = "ExternalOutputStream = EOStream (\r(* %responsibility #updateBufferLocationAfterFlush\r    This method may have to be reimplemented (for example in read/write streams) depending\r    on whether the buffer contains only written elements, or a mix of read/written elements.\r\r%todo: we must make sure when %finalization is implemented that instances of this class are finalized before their descriptors, so that the buffer can be flushed.  See #finalize. *)| \rdirty <Boolean> ::= false. (* indicates whether the buffer contains unflushed modified data *)\r|)";
			this.slots = [new SM("dirty", true, false)];
			this.methods = [
				new MM("superInit`Streams`ExternalOutputStream", true, "EOStream"),
				new MM("instance`initializer", true, "EOStream"),
				new MM("close", false, "close\r = (\r    self flush.\r    super close.\r)"),
				new MM("externalFlush", false, "externalFlush\r = (\r	\r	self flush.\r	self descriptor flushIfFail: [ :err <ExternalError> | self error: err ]\r)"),
				new MM("flush", false, "flush\r = (\r	\r	self dirty\r		ifTrue: [	self bufferNumElements > 0\r					ifTrue: [	self writeBuffer; updateBufferLocationAfterFlush. 	].\r				self dirty: false.	].\r)"),
				new MM("logicalFlush", false, "logicalFlush\r = (\r    \r    self dirty\r        ifTrue: [    self bufferNumElements > 0\r                    ifTrue: [    self writeBuffer; updateBufferLocationAfterFlush.     ].\r                self dirty: false.    ].\r)"),
				new MM("advanceBufferLocation", false, "advanceBufferLocation\r = (\r\r	self bufferOrigin: self bufferOrigin + self bufferNumElements;\r		nextBufferPosition: 0;\r		bufferNumElements: 0.\r)"),
				new MM("arrangeForFinalization", false, "arrangeForFinalization\r = (\r\r	(* %todo: arrange for the finalize message to be sent to the stream before gc. *)\r)"),
				new MM("finalize", false, "finalize\r = (\r\r	self close\r)"),
				new MM("nextPut:", false, "nextPut: byte <Integer> ^ <Integer> = (\r\r    | pos <Integer> |\r    pos:: self nextBufferPosition.\r    (* self buffer byteAt: pos put: byte. *)\r	self buffer unsignedByteAt: pos+1 put: byte.	\r\r    pos:: pos + 1.\r    self nextBufferPosition: pos;\r        bufferNumElements: (pos max: self bufferNumElements).\r    pos >= self bufferSize\r        ifTrue: [    self writeBuffer; advanceBuffer; dirty: false. ]\r        ifFalse: [ self dirty: true ].\r    ^byte\r)"),
				new MM("updateBufferLocationAfterFlush", false, "updateBufferLocationAfterFlush\r = (\r\r	self advanceBufferLocation\r)"),
				new MM("writeBuffer", false, "writeBuffer\r = (\r    (* Caller is responsible for updating dirty *)\r    self descriptor\r        write: self bufferNumElements \r        at: self bufferOrigin\r        ifFail: [ :err |  self error: err ]\r)"),
				new MM("dirty", true, null),
				new MM("dirty:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$ExternalOutputStream = (function () {
				var self = this;
				self.$super$Streams$ExternalOutputStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$ExternalOutputStream();
				self.$dirty$(false);
				return self;
			});
			this.$close = (function () {
				var self = this;
				self.$flush();
				self.$super$Streams$ExternalOutputStream.$close.call(self);
				return self;
			});
			this.$externalFlush = (function () {
				var self = this;
				self.$flush();
				self.$descriptor().$flushIfFail$((function ($err) {
					return self.$error$($err);
				}));
				return self;
			});
			this.$flush = (function () {
				var self = this;
				if (self.$dirty()) {
					if (self.$bufferNumElements() > 0) {
						(function (cascadeReceiver) {
							cascadeReceiver.$writeBuffer();
							return cascadeReceiver.$updateBufferLocationAfterFlush();
						})(self);
					} else {
						nil;
					};
					self.$dirty$(false);
				} else {
					nil;
				};
				return self;
			});
			this.$logicalFlush = (function () {
				var self = this;
				if (self.$dirty()) {
					if (self.$bufferNumElements() > 0) {
						(function (cascadeReceiver) {
							cascadeReceiver.$writeBuffer();
							return cascadeReceiver.$updateBufferLocationAfterFlush();
						})(self);
					} else {
						nil;
					};
					self.$dirty$(false);
				} else {
					nil;
				};
				return self;
			});
			this.$advanceBufferLocation = (function () {
				var self = this;
				(function (cascadeReceiver) {
					cascadeReceiver.$bufferOrigin$(self.$bufferOrigin() + self.$bufferNumElements());
					cascadeReceiver.$nextBufferPosition$(0);
					return cascadeReceiver.$bufferNumElements$(0);
				})(self);
				return self;
			});
			this.$arrangeForFinalization = (function () {
				var self = this;
				return self;
			});
			this.$finalize = (function () {
				var self = this;
				self.$close();
				return self;
			});
			this.$nextPut$ = (function ($byte) {
				var self = this;
				var $pos = nil;
				$pos = self.$nextBufferPosition();
				self.$buffer().$unsignedByteAt$put$($pos + 1, $byte);
				$pos = $pos + 1;
				(function (cascadeReceiver) {
					cascadeReceiver.$nextBufferPosition$($pos);
					return cascadeReceiver.$bufferNumElements$($pos.$max$(self.$bufferNumElements()));
				})(self);
				if ($pos.$$greater$equal(self.$bufferSize())) {
					(function (cascadeReceiver) {
						cascadeReceiver.$writeBuffer();
						cascadeReceiver.$advanceBuffer();
						return cascadeReceiver.$dirty$(false);
					})(self);
				} else {
					self.$dirty$(true);
				};
				return $byte;
			});
			this.$updateBufferLocationAfterFlush = (function () {
				var self = this;
				self.$advanceBufferLocation();
				return self;
			});
			this.$writeBuffer = (function () {
				var self = this;
				self.$descriptor().$write$at$ifFail$(self.$bufferNumElements(), self.$bufferOrigin(), (function ($err) {
					return self.$error$($err);
				}));
				return self;
			});
			this.$dirty = (function () {
				return this.$dirty$slot;
			});
			this.$dirty$ = (function (v) {
				this.$dirty$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`ExternalOutputStream";
					this.$superInit$Streams$ExternalOutputStream = $.$superInit$Streams$ExternalOutputStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$close = $.$close;
					this.$externalFlush = $.$externalFlush;
					this.$flush = $.$flush;
					this.$logicalFlush = $.$logicalFlush;
					this.$advanceBufferLocation = $.$advanceBufferLocation;
					this.$arrangeForFinalization = $.$arrangeForFinalization;
					this.$finalize = $.$finalize;
					this.$nextPut$ = $.$nextPut$;
					this.$updateBufferLocationAfterFlush = $.$updateBufferLocationAfterFlush;
					this.$writeBuffer = $.$writeBuffer;
					this.$dirty = $.$dirty;
					this.$dirty$ = $.$dirty$;
					this.$enclosingObjects$Streams$ExternalOutputStream = enclosingObjects;
					this.$super$Streams$ExternalOutputStream = runtimeSuperclass;
					this["Streams`ExternalOutputStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$dirty$slot = nil;
					});
					this.basicNew = this["Streams`ExternalOutputStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`ExternalOutputStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("onDescriptor:", false, "onDescriptor: d <DESCRIPTOR> ^ <Instance> = (\r\r    ^self new initDescriptor: d\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$onDescriptor$ = (function ($d) {
					var self = this;
					return self.$new().$initDescriptor$($d);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`ExternalOutputStream";
						this.$new = $.$new;
						this.$onDescriptor$ = $.$onDescriptor$;
						this.$enclosingObjects$Streams$ExternalOutputStream = enclosingObjects;
						this.$super$Streams$ExternalOutputStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$ExternalReadStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`ExternalReadStream";
			this.name = "Streams`ExternalReadStream";
			this.header = "ExternalReadStream = EIStream (\r(* %note: the actualPosition slot inherited from BasicReadStream is\rnot used; its access methods are reimplemented to use the\rbuffer origin and buffer position. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`ExternalReadStream", true, "EIStream"),
				new MM("instance`initializer", true, "EIStream"),
				new MM("at:", false, "at: index <Integer> ^ <Integer> = (\r\r\r	| i <Integer> |\r	i:: index - self bufferOrigin.\r	^(i < 1 or: [ i > self bufferNumElements ])\r		ifFalse: [ self buffer byteAt: i - 1 ]\r		ifTrue: [	| pos <Integer> result <Integer> |\r						pos:: self position.\r						self position: index - 1.\r						(* Use a recursive call, which should now be in range *)\r						result:: self at: index.\r						self position: pos.\r						result	]\r)"),
				new MM("repositioningAt:", false, "repositioningAt: index <Integer> ^ <Integer> = (\r\r	\r	| i <Integer> |\r	i:: index - self bufferOrigin.\r	^(i < 1 or: [ i > self bufferNumElements ])\r		ifFalse: [ self buffer byteAt: i - 1 ]\r		ifTrue: [	self position: index - 1.\r						self at: index  ]\r)"),
				new MM("size", false, "size ^ <Integer> = (\r\r\r	^self descriptor size\r)"),
				new MM("initializeActualPosition", false, "initializeActualPosition\r = (\r    (* disable initialization, since we don't use the inherited actualPosition instance variable *)\r)"),
				new MM("actualAtEnd", false, "actualAtEnd ^ <Boolean> = (\r\r    (* copied-down implementation from ExternalInputStream for efficiency *)\r    ^self nextBufferPosition >= self bufferNumElements\r)"),
				new MM("actualPosition", false, "actualPosition ^ <Integer> = (\r\r\r	^self bufferOrigin + self nextBufferPosition\r)"),
				new MM("actualPosition:", false, "actualPosition: p <Integer>\r = (\r    | bufPos <Integer> |\r    bufPos:: p - self bufferOrigin.\r    (bufPos >= 0 and: [ bufPos < self bufferNumElements ])\r        ifTrue: [ self nextBufferPosition: bufPos ]\r        ifFalse: [    (* We need to reload the buffer *)\r					self assert: [ p between: 0 and: self size ] message: ''.\r                    self writeIfNeededBeforePositionChange.\r                    self bufferOrigin: (self goodBufferOriginForPosition: p).\r                    self descriptor position: self bufferOrigin.\r                    self fillBuffer.\r                    self nextBufferPosition: p - self bufferOrigin.    ].\r)"),
				new MM("goodBufferOriginForPosition:", false, "goodBufferOriginForPosition: nextPos <Integer> ^ <Integer> = (\r\r    (* Try to keep the origin on a buffer-aligned boundary *)\r    ^nextPos - (nextPos \\\\ self bufferSize)\r)"),
				new MM("writeIfNeededBeforePositionChange", false, "writeIfNeededBeforePositionChange\r = (\r\r	(* This is a hook for mutable subclasses to do any buffer flushing necessary before\r	 the buffer is repositioned.  By default, do nothing *)\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$ExternalReadStream = (function () {
				var self = this;
				self.$super$Streams$ExternalReadStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$ExternalReadStream();
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				var $i = nil;
				$i = $index - self.$bufferOrigin();
				return (($i < 1) || $i.$$greater(self.$bufferNumElements())).$ifFalse$ifTrue$((function () {
					return self.$buffer().$byteAt$($i - 1);
				}), (function () {
					var $pos = nil;
					var $result = nil;
					$pos = self.$position();
					self.$position$($index - 1);
					$result = self.$at$($index);
					self.$position$($pos);
					return $result;
				}));
			});
			this.$repositioningAt$ = (function ($index) {
				var self = this;
				var $i = nil;
				$i = $index - self.$bufferOrigin();
				return (($i < 1) || $i.$$greater(self.$bufferNumElements())).$ifFalse$ifTrue$((function () {
					return self.$buffer().$byteAt$($i - 1);
				}), (function () {
					self.$position$($index - 1);
					return self.$at$($index);
				}));
			});
			this.$size = (function () {
				var self = this;
				return self.$descriptor().$size();
			});
			this.$initializeActualPosition = (function () {
				var self = this;
				return self;
			});
			this.$actualAtEnd = (function () {
				var self = this;
				return self.$nextBufferPosition().$$greater$equal(self.$bufferNumElements());
			});
			this.$actualPosition = (function () {
				var self = this;
				return self.$bufferOrigin() + self.$nextBufferPosition();
			});
			this.$actualPosition$ = (function ($p) {
				var self = this;
				var $bufPos = nil;
				$bufPos = $p - self.$bufferOrigin();
				if (($bufPos >= 0) && $bufPos.$$less(self.$bufferNumElements())) {
					self.$nextBufferPosition$($bufPos);
				} else {
					self.$assert$message$((function () {
						return $p.$between$and$(0, self.$size());
					}), "");
					self.$writeIfNeededBeforePositionChange();
					self.$bufferOrigin$(self.$goodBufferOriginForPosition$($p));
					self.$descriptor().$position$(self.$bufferOrigin());
					self.$fillBuffer();
					self.$nextBufferPosition$($p - self.$bufferOrigin());
				};
				return self;
			});
			this.$goodBufferOriginForPosition$ = (function ($nextPos) {
				var self = this;
				return $nextPos - $nextPos.$$back$back(self.$bufferSize());
			});
			this.$writeIfNeededBeforePositionChange = (function () {
				var self = this;
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`ExternalReadStream";
					this.$superInit$Streams$ExternalReadStream = $.$superInit$Streams$ExternalReadStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$repositioningAt$ = $.$repositioningAt$;
					this.$size = $.$size;
					this.$initializeActualPosition = $.$initializeActualPosition;
					this.$actualAtEnd = $.$actualAtEnd;
					this.$actualPosition = $.$actualPosition;
					this.$actualPosition$ = $.$actualPosition$;
					this.$goodBufferOriginForPosition$ = $.$goodBufferOriginForPosition$;
					this.$writeIfNeededBeforePositionChange = $.$writeIfNeededBeforePositionChange;
					this.$enclosingObjects$Streams$ExternalReadStream = enclosingObjects;
					this.$super$Streams$ExternalReadStream = runtimeSuperclass;
					this["Streams`ExternalReadStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`ExternalReadStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`ExternalReadStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("onDescriptor:", false, "onDescriptor: d <DESCRIPTOR> ^ <Instance> = (\r\r    ^self new initDescriptor: d\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$onDescriptor$ = (function ($d) {
					var self = this;
					return self.$new().$initDescriptor$($d);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`ExternalReadStream";
						this.$new = $.$new;
						this.$onDescriptor$ = $.$onDescriptor$;
						this.$enclosingObjects$Streams$ExternalReadStream = enclosingObjects;
						this.$super$Streams$ExternalReadStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$ExternalReadWriteStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`ExternalReadWriteStream";
			this.name = "Streams`ExternalReadWriteStream";
			this.header = "ExternalReadWriteStream = EIOStream (\r(* Implements positionable streams of bytes from an external source.  Currently, this class is used both\rfor read-only streams and read-write streams, with different creation messages. *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`ExternalReadWriteStream", true, "EIOStream"),
				new MM("instance`initializer", true, "EIOStream"),
				new MM("contents", false, "contents  ^ <List[Integer]> = (\r\r\r	(* Obsolete: this method is included purely for BlueBook compatibility.  If possible, use \r	 #contentsRemaining and #contentsWritten, which will work when a ReadWriteStream\r	 is substituted for a ReadStream or a WriteStream, unlike this method *)\r\r	^self collection\r)"),
				new MM("contentsWritten", false, "contentsWritten  ^ <List[Integer]> = (\r\r    (* %copied (substituting for E) from BasicReadWriteStream *)\r    | cltn <VarSeqCltn[Integer]>  origPos <Integer> |\r    cltn:: self newCollectionOfSize: self position.\r    origPos:: self position.\r    self position: 0.\r    1 to: origPos do: [ :i <Integer> |\r        cltn at: i put: self next.    ].\r    self position: origPos.\r    ^cltn\r)"),
				new MM("size", false, "size ^ <Integer> = (\r\r\r	(* Make sure we flush our buffer if needed to ensure that\r	 the buffer contents are taken into account *)\r\r	self flush.\r	^super size\r)"),
				new MM("updateBufferLocationAfterFlush", false, "updateBufferLocationAfterFlush\r = (\r\r	(* We don't advance the buffer here because we need to preserve the read semantics *)\r)"),
				new MM("writeIfNeededBeforePositionChange", false, "writeIfNeededBeforePositionChange\r = (\r    self dirty\r        ifTrue: [ self writeBuffer; dirty: false. ].\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$ExternalReadWriteStream = (function () {
				var self = this;
				self.$super$Streams$ExternalReadWriteStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$ExternalReadWriteStream();
				return self;
			});
			this.$contents = (function () {
				var self = this;
				return self.$collection();
			});
			this.$contentsWritten = (function () {
				var self = this;
				var $cltn = nil;
				var $origPos = nil;
				$cltn = self.$newCollectionOfSize$(self.$position());
				$origPos = self.$position();
				self.$position$(0);
				{
					var $$limit = nil;
					var $i = nil;
					nil;
					$i = 1;
					$$limit = $origPos;
					for (; $$limit.$$greater$equal($i); ) {
						$cltn.$at$put$($i, self.$next());
						$i = (1).$$plus($i);
					};
				};
				self.$position$($origPos);
				return $cltn;
			});
			this.$size = (function () {
				var self = this;
				self.$flush();
				return self.$super$Streams$ExternalReadWriteStream.$size.call(self);
			});
			this.$updateBufferLocationAfterFlush = (function () {
				var self = this;
				return self;
			});
			this.$writeIfNeededBeforePositionChange = (function () {
				var self = this;
				if (self.$dirty()) {
					(function (cascadeReceiver) {
						cascadeReceiver.$writeBuffer();
						return cascadeReceiver.$dirty$(false);
					})(self);
				} else {
					nil;
				};
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`ExternalReadWriteStream";
					this.$superInit$Streams$ExternalReadWriteStream = $.$superInit$Streams$ExternalReadWriteStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$contents = $.$contents;
					this.$contentsWritten = $.$contentsWritten;
					this.$size = $.$size;
					this.$updateBufferLocationAfterFlush = $.$updateBufferLocationAfterFlush;
					this.$writeIfNeededBeforePositionChange = $.$writeIfNeededBeforePositionChange;
					this.$enclosingObjects$Streams$ExternalReadWriteStream = enclosingObjects;
					this.$super$Streams$ExternalReadWriteStream = runtimeSuperclass;
					this["Streams`ExternalReadWriteStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`ExternalReadWriteStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`ExternalReadWriteStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("onDescriptor:", false, "onDescriptor: d <DESCRIPTOR> ^ <Instance> = (\r\r    ^self new initDescriptor: d\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$onDescriptor$ = (function ($d) {
					var self = this;
					return self.$new().$initDescriptor$($d);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`ExternalReadWriteStream";
						this.$new = $.$new;
						this.$onDescriptor$ = $.$onDescriptor$;
						this.$enclosingObjects$Streams$ExternalReadWriteStream = enclosingObjects;
						this.$super$Streams$ExternalReadWriteStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$ExternalStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`ExternalStream";
			this.name = "Streams`ExternalStream";
			this.header = "ExternalStream = Object (\r(* This is the abstract superclass for all external stream classes.  It\rprovides buffer management for subclasses.   Library users don't normally directly instantiate ExternalStreams,\rsince that exposes you to genericity and raw ExternalDescriptors; instead, more appropriate entry points\rsuch as readStream/writeStream/readWriteStream are implemented for the various kinds of external objects\rthat can be streamed over, such as File.\r\rInvariant: the buffer position is always less than the index of the last buffer element.   This is accomplished by proactively filling/flushing the buffer when the end is reached.\r\r%responsibility #arrangeForFinalization\r    Subclasses should reimplement this appropriately to do any finalization registration\r      to ensure that the stream is closed when it is garbage collected. *)| \rdescriptor <DESCRIPTOR> (* = d. *)\rbuffer <ExternalProxy> (* I/O buffer, cached from descriptor for speed (0 indexed) *)\rbufferSize <Integer> (* I/O buffer size, cached from descriptor for speed *)\rbufferOrigin <Integer> (* the offset between position and buffer coordinates *)\rnextBufferPosition <Integer> (* The actual position, in buffer coordinates, of the next element (i.e. position + 1 in buffer coords) *)\rbufferNumElements <Integer> (* The number of valid data bytes in the buffer *)\r|)";
			this.slots = [
				new SM("descriptor", true, false),
				new SM("buffer", true, false),
				new SM("bufferSize", true, false),
				new SM("bufferOrigin", true, false),
				new SM("nextBufferPosition", true, false),
				new SM("bufferNumElements", true, false)
			];
			this.methods = [
				new MM("superInit`Streams`ExternalStream", true, "Object"),
				new MM("instance`initializer", true, "Object"),
				new MM("close", false, "close\r = (\r    self doClose\r)"),
				new MM("initBuffer", false, "initBuffer\r = (\r\r	buffer:: descriptor buffer.\r	bufferSize:: descriptor bufferSize.\r	self arrangeForFinalization.\r)"),
				new MM("initDescriptor:", false, "initDescriptor: d <DESCRIPTOR>  = (\r\r\r	self descriptor: d.\r	self initBuffer.\r\r	self bufferOrigin: 0.\r	self bufferNumElements: 0.\r	self nextBufferPosition: 0.\r)"),
				new MM("advanceBuffer", false, "advanceBuffer\r = (\r    (* advance the buffer, and fill it if the receiver is readable.  Assumption: the last advanceBuffer completely\r      filled the buffer *)\r    self bufferOrigin: self bufferOrigin + self bufferSize.\r    self fillBuffer.\r    self nextBufferPosition: 0.\r)"),
				new MM("arrangeForFinalization", false, "arrangeForFinalization\r = (\r	(* Subclasses should reimplement this appropriately to do any finalization registration\r	  to ensure that the stream is closed when it is garbage collected. *)\r\r	self subclassResponsibility\r)"),
				new MM("doClose", false, "doClose\r = (\r    (* This is factored out from close so that subclasses that mixin BasicInputStream can reimplement close to call this *)\r    self descriptor close.\r    buffer:: nil.\r)"),
				new MM("fillBuffer", false, "fillBuffer\r = (\r    (* fill the buffer if needed (this default implementation works for noninput streams) *)\r\r	self bufferNumElements: 0\r)"),
				new MM("postCopy", false, "postCopy\r = (\r\r	super postCopy.\r	self descriptor: self descriptor copy.\r	self initBuffer.\r)"),
				new MM("descriptor", true, null),
				new MM("descriptor:", true, null),
				new MM("buffer", true, null),
				new MM("buffer:", true, null),
				new MM("bufferSize", true, null),
				new MM("bufferSize:", true, null),
				new MM("bufferOrigin", true, null),
				new MM("bufferOrigin:", true, null),
				new MM("nextBufferPosition", true, null),
				new MM("nextBufferPosition:", true, null),
				new MM("bufferNumElements", true, null),
				new MM("bufferNumElements:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$ExternalStream = (function () {
				var self = this;
				self.$super$Streams$ExternalStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$ExternalStream();
				return self;
			});
			this.$close = (function () {
				var self = this;
				self.$doClose();
				return self;
			});
			this.$initBuffer = (function () {
				var self = this;
				self.$buffer$(self.$descriptor().$buffer());
				self.$bufferSize$(self.$descriptor().$bufferSize());
				self.$arrangeForFinalization();
				return self;
			});
			this.$initDescriptor$ = (function ($d) {
				var self = this;
				self.$descriptor$($d);
				self.$initBuffer();
				self.$bufferOrigin$(0);
				self.$bufferNumElements$(0);
				self.$nextBufferPosition$(0);
				return self;
			});
			this.$advanceBuffer = (function () {
				var self = this;
				self.$bufferOrigin$(self.$bufferOrigin() + self.$bufferSize());
				self.$fillBuffer();
				self.$nextBufferPosition$(0);
				return self;
			});
			this.$arrangeForFinalization = (function () {
				var self = this;
				self.$subclassResponsibility();
				return self;
			});
			this.$doClose = (function () {
				var self = this;
				self.$descriptor().$close();
				self.$buffer$(nil);
				return self;
			});
			this.$fillBuffer = (function () {
				var self = this;
				self.$bufferNumElements$(0);
				return self;
			});
			this.$postCopy = (function () {
				var self = this;
				self.$super$Streams$ExternalStream.$postCopy.call(self);
				self.$descriptor$(self.$descriptor().$copy());
				self.$initBuffer();
				return self;
			});
			this.$descriptor = (function () {
				return this.$descriptor$slot;
			});
			this.$descriptor$ = (function (v) {
				this.$descriptor$slot = v;
				return this;
			});
			this.$buffer = (function () {
				return this.$buffer$slot;
			});
			this.$buffer$ = (function (v) {
				this.$buffer$slot = v;
				return this;
			});
			this.$bufferSize = (function () {
				return this.$bufferSize$slot;
			});
			this.$bufferSize$ = (function (v) {
				this.$bufferSize$slot = v;
				return this;
			});
			this.$bufferOrigin = (function () {
				return this.$bufferOrigin$slot;
			});
			this.$bufferOrigin$ = (function (v) {
				this.$bufferOrigin$slot = v;
				return this;
			});
			this.$nextBufferPosition = (function () {
				return this.$nextBufferPosition$slot;
			});
			this.$nextBufferPosition$ = (function (v) {
				this.$nextBufferPosition$slot = v;
				return this;
			});
			this.$bufferNumElements = (function () {
				return this.$bufferNumElements$slot;
			});
			this.$bufferNumElements$ = (function (v) {
				this.$bufferNumElements$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`ExternalStream";
					this.$superInit$Streams$ExternalStream = $.$superInit$Streams$ExternalStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$close = $.$close;
					this.$initBuffer = $.$initBuffer;
					this.$initDescriptor$ = $.$initDescriptor$;
					this.$advanceBuffer = $.$advanceBuffer;
					this.$arrangeForFinalization = $.$arrangeForFinalization;
					this.$doClose = $.$doClose;
					this.$fillBuffer = $.$fillBuffer;
					this.$postCopy = $.$postCopy;
					this.$descriptor = $.$descriptor;
					this.$descriptor$ = $.$descriptor$;
					this.$buffer = $.$buffer;
					this.$buffer$ = $.$buffer$;
					this.$bufferSize = $.$bufferSize;
					this.$bufferSize$ = $.$bufferSize$;
					this.$bufferOrigin = $.$bufferOrigin;
					this.$bufferOrigin$ = $.$bufferOrigin$;
					this.$nextBufferPosition = $.$nextBufferPosition;
					this.$nextBufferPosition$ = $.$nextBufferPosition$;
					this.$bufferNumElements = $.$bufferNumElements;
					this.$bufferNumElements$ = $.$bufferNumElements$;
					this.$enclosingObjects$Streams$ExternalStream = enclosingObjects;
					this.$super$Streams$ExternalStream = runtimeSuperclass;
					this["Streams`ExternalStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$descriptor$slot = nil;
						this.$buffer$slot = nil;
						this.$bufferSize$slot = nil;
						this.$bufferOrigin$slot = nil;
						this.$nextBufferPosition$slot = nil;
						this.$bufferNumElements$slot = nil;
					});
					this.basicNew = this["Streams`ExternalStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`ExternalStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("onDescriptor:", false, "onDescriptor: d <DESCRIPTOR> ^ <Instance> = (\r\r    ^self new initDescriptor: d\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$onDescriptor$ = (function ($d) {
					var self = this;
					return self.$new().$initDescriptor$($d);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`ExternalStream";
						this.$new = $.$new;
						this.$onDescriptor$ = $.$onDescriptor$;
						this.$enclosingObjects$Streams$ExternalStream = enclosingObjects;
						this.$super$Streams$ExternalStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$SeqCltnReadStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`SeqCltnReadStream";
			this.name = "Streams`SeqCltnReadStream";
			this.header = "SeqCltnReadStream = BasicReadStream (\r(* This is the standard concrete class used for creating ReadStreams on lists. *)| collection <List[E]> (* = sc. *)  |)";
			this.slots = [new SM("collection", true, false)];
			this.methods = [
				new MM("superInit`Streams`SeqCltnReadStream", true, "BasicReadStream"),
				new MM("instance`initializer", true, "BasicReadStream"),
				new MM("at:", false, "at: index <Integer> ^ <E> = (\r\r\r	^self collection at: index\r)"),
				new MM("atEnd", false, "atEnd ^ <Boolean> = (\r\r\r	(* %optimization: we can ensure that atEnd and actualAtEnd are identical, since we reimplement peek to avoid the superclass\r	  peek buffer, because we can look ahead quickly in a seqcltn *)\r	^self actualAtEnd\r)"),
				new MM("next", false, "next ^ <E> = (\r\r\r	(* %optimization: we can ensure that next and actualNext are identical, since we reimplement peek to avoid the superclass\r	  peek buffer, since we can look ahead quickly in a seqcltn *)\r	^self actualNext\r)"),
				new MM("nextIfAbsent:", false, "nextIfAbsent: f <[X def]> ^ <E | X> = (\r\r\r	| pos <Integer> |\r	pos:: self actualPosition.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ ^f value ].\r	self actualPosition: pos.\r	^self collection at: pos\r)"),
				new MM("peek", false, "peek ^ <E> = (\r\r\r	| pos <Integer> |\r	pos:: self position.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ self error: 'Attempt to read past the end of a stream' ].\r	^self collection at: pos\r)"),
				new MM("peekIfAbsent:", false, "peekIfAbsent: f <[X def]>  ^ <E | X> = (\r\r\r	| pos <Integer> |\r	pos:: self position.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ ^f value ].\r	^self collection at: pos\r)"),
				new MM("position:", false, "position: p <Integer>\r = (\r\r	self actualPosition: p.\r	(* Don't have to unset the peekVal *)\r)"),
				new MM("size", false, "size ^ <Integer> = (\r\r\r	^self collection size\r)"),
				new MM("initCollection:", false, "initCollection: sc <List[E]>\r = (\r\r	collection:: sc.\r)"),
				new MM("printOn:", false, "printOn: strm <CharOutputStream>\r = (\r\r	strm nextPutAll: self class name;\r			nextPutAll: '(position='; 	print: self position;\r			nextPutAll: ' collection=';  print: self collection;\r			nextPut: \")\"\r			\r)"),
				new MM("accumulateUntil:", false, "accumulateUntil: predicate <[Boolean]>  ^ <List[E]> = (\r\r\r	| start <Integer> |\r\r	start:: self position.\r	[ predicate value ]\r		whileFalse: [ self position: self position + 1 ].\r	^self collection copyFrom: start + 1 to: self position\r)"),
				new MM("actualNext", false, "actualNext ^ <E> = (\r\r\r	| pos <Integer> |\r	pos:: self actualPosition.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ self error: 'Attempt to read past the end of a stream' ].\r	self actualPosition: pos.\r	^self collection at: pos\r)"),
				new MM("nextFromPeek", false, "nextFromPeek ^ <E> = (\r\r\r	(* If this happens, you should have overridden the calling method *)\r	self shouldNotHappen\r)"),
				new MM("peekVal", false, "peekVal ^ <E> = (\r\r\r	self shouldNotHappen\r)"),
				new MM("collection", true, null),
				new MM("collection:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$SeqCltnReadStream = (function () {
				var self = this;
				self.$super$Streams$SeqCltnReadStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$SeqCltnReadStream();
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				return self.$collection().$at$($index);
			});
			this.$atEnd = (function () {
				var self = this;
				return self.$actualAtEnd();
			});
			this.$next = (function () {
				var self = this;
				return self.$actualNext();
			});
			this.$nextIfAbsent$ = (function ($f) {
				var self = this;
				var $pos = nil;
				$pos = self.$actualPosition();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					return $f.$value();
				} else {
					nil;
				};
				self.$actualPosition$($pos);
				return self.$collection().$at$($pos);
			});
			this.$peek = (function () {
				var self = this;
				var $pos = nil;
				$pos = self.$position();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					self.$error$("Attempt to read past the end of a stream");
				} else {
					nil;
				};
				return self.$collection().$at$($pos);
			});
			this.$peekIfAbsent$ = (function ($f) {
				var self = this;
				var $pos = nil;
				$pos = self.$position();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					return $f.$value();
				} else {
					nil;
				};
				return self.$collection().$at$($pos);
			});
			this.$position$ = (function ($p) {
				var self = this;
				self.$actualPosition$($p);
				return self;
			});
			this.$size = (function () {
				var self = this;
				return self.$collection().$size();
			});
			this.$initCollection$ = (function ($sc) {
				var self = this;
				self.$collection$($sc);
				return self;
			});
			this.$printOn$ = (function ($strm) {
				var self = this;
				(function (cascadeReceiver) {
					cascadeReceiver.$nextPutAll$(self.$class().$name());
					cascadeReceiver.$nextPutAll$("(position=");
					cascadeReceiver.$print$(self.$position());
					cascadeReceiver.$nextPutAll$(" collection=");
					cascadeReceiver.$print$(self.$collection());
					return cascadeReceiver.$nextPut$(")");
				})($strm);
				return self;
			});
			this.$accumulateUntil$ = (function ($predicate) {
				var self = this;
				var $start = nil;
				$start = self.$position();
				{
					nil;
					for (; !$predicate.$value(); ) {
						self.$position$(self.$position() + 1);
					};
				};
				return self.$collection().$copyFrom$to$($start + 1, self.$position());
			});
			this.$actualNext = (function () {
				var self = this;
				var $pos = nil;
				$pos = self.$actualPosition();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					self.$error$("Attempt to read past the end of a stream");
				} else {
					nil;
				};
				self.$actualPosition$($pos);
				return self.$collection().$at$($pos);
			});
			this.$nextFromPeek = (function () {
				var self = this;
				self.$shouldNotHappen();
				return self;
			});
			this.$peekVal = (function () {
				var self = this;
				self.$shouldNotHappen();
				return self;
			});
			this.$collection = (function () {
				return this.$collection$slot;
			});
			this.$collection$ = (function (v) {
				this.$collection$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`SeqCltnReadStream";
					this.$superInit$Streams$SeqCltnReadStream = $.$superInit$Streams$SeqCltnReadStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$atEnd = $.$atEnd;
					this.$next = $.$next;
					this.$nextIfAbsent$ = $.$nextIfAbsent$;
					this.$peek = $.$peek;
					this.$peekIfAbsent$ = $.$peekIfAbsent$;
					this.$position$ = $.$position$;
					this.$size = $.$size;
					this.$initCollection$ = $.$initCollection$;
					this.$printOn$ = $.$printOn$;
					this.$accumulateUntil$ = $.$accumulateUntil$;
					this.$actualNext = $.$actualNext;
					this.$nextFromPeek = $.$nextFromPeek;
					this.$peekVal = $.$peekVal;
					this.$collection = $.$collection;
					this.$collection$ = $.$collection$;
					this.$enclosingObjects$Streams$SeqCltnReadStream = enclosingObjects;
					this.$super$Streams$SeqCltnReadStream = runtimeSuperclass;
					this["Streams`SeqCltnReadStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$collection$slot = nil;
					});
					this.basicNew = this["Streams`SeqCltnReadStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`SeqCltnReadStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <List[E]> ^ <ReadStream[E]> = (\r\r\r	^self over: sc\r)"),
					new MM("over:", false, "over: sc <List[E]> ^ <Instance> = (\r\r	(* This is like on: except it returns type Instance.   on: for streams may return a non-instance type. *)\r\r	^self new initCollection: sc\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$over$($sc);
				});
				this.$over$ = (function ($sc) {
					var self = this;
					return self.$new().$initCollection$($sc);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`SeqCltnReadStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$over$ = $.$over$;
						this.$enclosingObjects$Streams$SeqCltnReadStream = enclosingObjects;
						this.$super$Streams$SeqCltnReadStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$SeqCltnReadWriteStream = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`SeqCltnReadWriteStream";
			this.name = "Streams`SeqCltnReadWriteStream";
			this.header = "SeqCltnReadWriteStream = BasicReadWriteStream (\r(* This is the standard concrete class used for creating WriteStreams or ReadWriteStreams on lists. *)| buffer <MutableList[E]> (* = sc *) |)";
			this.slots = [new SM("buffer", true, false)];
			this.methods = [
				new MM("superInit`Streams`SeqCltnReadWriteStream", true, "BasicReadWriteStream"),
				new MM("instance`initializer", true, "BasicReadWriteStream"),
				new MM("at:", false, "at: index <Integer> ^ <E> = (\r\r\r	self assert: [ index <= self size ].\r	^self buffer at: index\r)"),
				new MM("atEnd", false, "atEnd ^ <Boolean> = (\r\r\r	(* %optimization: we can ensure that atEnd and actualAtEnd are identical, since we reimplement peek to avoid the superclass\r	  peek buffer, because we can look ahead quickly in a seqcltn *)\r	^self actualAtEnd\r)"),
				new MM("contents", false, "contents  ^ <List[E]> = (\r\r	(* Obsolete: this method is included purely for BlueBook compatibility.  If possible, use \r	 #contentsRemaining and #contentsWritten, which will work when a ReadWriteStream\r	 is substituted for a ReadStream or a WriteStream, unlike this method *)\r\r	(* This originally referred to contentsWritten. The result of 'contents' should not depend on how much of a stream has already been read, see Blue Book - Protocol for Streams *)\r		\r	^ self collection\r)"),
				new MM("next", false, "next ^ <E> = (\r\r\r	(* %optimization: we can ensure that next and actualNext are identical, since we reimplement peek to avoid the superclass\r	  peek buffer, since we can look ahead quickly in a seqcltn *)\r	^self actualNext\r)"),
				new MM("nextIfAbsent:", false, "nextIfAbsent: f <[X def]> ^ <E | X> = (\r\r\r	| pos <Integer> |\r	pos:: self actualPosition.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ ^f value ].\r	self actualPosition: pos.\r	^self buffer at: pos\r)"),
				new MM("nextPut:", false, "nextPut: el <E> ^ <E> = (\r\r\r	| pos <Integer> |\r	super nextPut: el.\r	(pos:: self position) > self buffer size\r		ifTrue: [ self initBuffer: (self buffer copyWithSize: (self buffer size * 2 max: 8)) ].\r	self buffer at: pos put: el.\r	^el\r)"),
				new MM("peek", false, "peek ^ <E> = (\r\r\r	| pos <Integer> |\r	pos:: self position.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ self error: 'Attempt to read past the end of a stream' ].\r	^self buffer at: pos\r)"),
				new MM("peekIfAbsent:", false, "peekIfAbsent: f <[X def]>  ^ <E | X> = (\r\r\r	| pos <Integer> |\r	pos:: self position.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ ^f value ].\r	^self buffer at: pos\r)"),
				new MM("position:", false, "position: p <Integer>\r = (\r\r	self actualPosition: p.\r	(* Don't have to unset the peekVal *)\r)"),
				new MM("initBuffer:", false, "initBuffer: sc <MutableList[E]>\r = (\r\r	buffer:: sc.\r)"),
				new MM("printOn:", false, "printOn: strm <CharOutputStream>\r = (\r\r	strm nextPutAll: self class name;\r			nextPutAll: '(position='; 	print: self position;\r			nextPutAll: ' buffer=';  print: self buffer;\r			nextPut: \")\"\r			\r)"),
				new MM("accumulateUntil:", false, "accumulateUntil: predicate <[Boolean]>  ^ <List[E]> = (\r\r\r	| start <Integer> |\r\r	start:: self position.\r	[ predicate value ]\r		whileFalse: [ self position: self position + 1 ].\r	^self buffer copyFrom: start + 1 to: self position\r)"),
				new MM("actualNext", false, "actualNext ^ <E> = (\r\r\r	| pos <Integer> |\r	pos:: self actualPosition.\r	pos:: pos + 1.\r	pos > self size\r		ifTrue: [ self error: 'Attempt to read past the end of a stream' ].\r	self actualPosition: pos.\r	^self buffer at: pos\r)"),
				new MM("collection", false, "collection ^ <MutableList[E]> = (\r\r\r	^self buffer copyFrom: 1 to: self size\r)"),
				new MM("nextFromPeek", false, "nextFromPeek ^ <E> = (\r\r\r	(* If this happens, you should have overridden the calling method *)\r	self shouldNotHappen\r)"),
				new MM("peekVal", false, "peekVal ^ <E> = (\r\r\r	self shouldNotHappen\r)"),
				new MM("buffer", true, null),
				new MM("buffer:", true, null)
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$SeqCltnReadWriteStream = (function () {
				var self = this;
				self.$super$Streams$SeqCltnReadWriteStream.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$SeqCltnReadWriteStream();
				return self;
			});
			this.$at$ = (function ($index) {
				var self = this;
				self.$assert$((function () {
					return $index.$$less$equal(self.$size());
				}));
				return self.$buffer().$at$($index);
			});
			this.$atEnd = (function () {
				var self = this;
				return self.$actualAtEnd();
			});
			this.$contents = (function () {
				var self = this;
				return self.$collection();
			});
			this.$next = (function () {
				var self = this;
				return self.$actualNext();
			});
			this.$nextIfAbsent$ = (function ($f) {
				var self = this;
				var $pos = nil;
				$pos = self.$actualPosition();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					return $f.$value();
				} else {
					nil;
				};
				self.$actualPosition$($pos);
				return self.$buffer().$at$($pos);
			});
			this.$nextPut$ = (function ($el) {
				var self = this;
				var $pos = nil;
				self.$super$Streams$SeqCltnReadWriteStream.$nextPut$.call(self, $el);
				if (($pos = self.$position()).$$greater(self.$buffer().$size())) {
					self.$initBuffer$(self.$buffer().$copyWithSize$((self.$buffer().$size() * 2).$max$(8)));
				} else {
					nil;
				};
				self.$buffer().$at$put$($pos, $el);
				return $el;
			});
			this.$peek = (function () {
				var self = this;
				var $pos = nil;
				$pos = self.$position();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					self.$error$("Attempt to read past the end of a stream");
				} else {
					nil;
				};
				return self.$buffer().$at$($pos);
			});
			this.$peekIfAbsent$ = (function ($f) {
				var self = this;
				var $pos = nil;
				$pos = self.$position();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					return $f.$value();
				} else {
					nil;
				};
				return self.$buffer().$at$($pos);
			});
			this.$position$ = (function ($p) {
				var self = this;
				self.$actualPosition$($p);
				return self;
			});
			this.$initBuffer$ = (function ($sc) {
				var self = this;
				self.$buffer$($sc);
				return self;
			});
			this.$printOn$ = (function ($strm) {
				var self = this;
				(function (cascadeReceiver) {
					cascadeReceiver.$nextPutAll$(self.$class().$name());
					cascadeReceiver.$nextPutAll$("(position=");
					cascadeReceiver.$print$(self.$position());
					cascadeReceiver.$nextPutAll$(" buffer=");
					cascadeReceiver.$print$(self.$buffer());
					return cascadeReceiver.$nextPut$(")");
				})($strm);
				return self;
			});
			this.$accumulateUntil$ = (function ($predicate) {
				var self = this;
				var $start = nil;
				$start = self.$position();
				{
					nil;
					for (; !$predicate.$value(); ) {
						self.$position$(self.$position() + 1);
					};
				};
				return self.$buffer().$copyFrom$to$($start + 1, self.$position());
			});
			this.$actualNext = (function () {
				var self = this;
				var $pos = nil;
				$pos = self.$actualPosition();
				$pos = $pos + 1;
				if ($pos.$$greater(self.$size())) {
					self.$error$("Attempt to read past the end of a stream");
				} else {
					nil;
				};
				self.$actualPosition$($pos);
				return self.$buffer().$at$($pos);
			});
			this.$collection = (function () {
				var self = this;
				return self.$buffer().$copyFrom$to$(1, self.$size());
			});
			this.$nextFromPeek = (function () {
				var self = this;
				self.$shouldNotHappen();
				return self;
			});
			this.$peekVal = (function () {
				var self = this;
				self.$shouldNotHappen();
				return self;
			});
			this.$buffer = (function () {
				return this.$buffer$slot;
			});
			this.$buffer$ = (function (v) {
				this.$buffer$slot = v;
				return this;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`SeqCltnReadWriteStream";
					this.$superInit$Streams$SeqCltnReadWriteStream = $.$superInit$Streams$SeqCltnReadWriteStream;
					this.$instance$initializer = $.$instance$initializer;
					this.$at$ = $.$at$;
					this.$atEnd = $.$atEnd;
					this.$contents = $.$contents;
					this.$next = $.$next;
					this.$nextIfAbsent$ = $.$nextIfAbsent$;
					this.$nextPut$ = $.$nextPut$;
					this.$peek = $.$peek;
					this.$peekIfAbsent$ = $.$peekIfAbsent$;
					this.$position$ = $.$position$;
					this.$initBuffer$ = $.$initBuffer$;
					this.$printOn$ = $.$printOn$;
					this.$accumulateUntil$ = $.$accumulateUntil$;
					this.$actualNext = $.$actualNext;
					this.$collection = $.$collection;
					this.$nextFromPeek = $.$nextFromPeek;
					this.$peekVal = $.$peekVal;
					this.$buffer = $.$buffer;
					this.$buffer$ = $.$buffer$;
					this.$enclosingObjects$Streams$SeqCltnReadWriteStream = enclosingObjects;
					this.$super$Streams$SeqCltnReadWriteStream = runtimeSuperclass;
					this["Streams`SeqCltnReadWriteStream"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$buffer$slot = nil;
					});
					this.basicNew = this["Streams`SeqCltnReadWriteStream"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`SeqCltnReadWriteStream";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("on:", false, "on: sc <MutableList[E]> ^ <ReadWriteStream[E]> = (\r\r\r	^self over: sc\r)"),
					new MM("on:numElements:", false, "on: sc <MutableList[E]> numElements: n <Integer> ^ <ReadWriteStream[E]> = (\r\r\r	^(self over: sc) size: n\r)"),
					new MM("over:", false, "over: sc <MutableList[E]> ^ <Instance> = (\r\r	(* This is like on: except it returns type Instance.   on: for streams may return a non-instance type. *)\r\r	^self new initBuffer: sc\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$on$ = (function ($sc) {
					var self = this;
					return self.$over$($sc);
				});
				this.$on$numElements$ = (function ($sc, $n) {
					var self = this;
					return self.$over$($sc).$size$($n);
				});
				this.$over$ = (function ($sc) {
					var self = this;
					return self.$new().$initBuffer$($sc);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`SeqCltnReadWriteStream";
						this.$new = $.$new;
						this.$on$ = $.$on$;
						this.$on$numElements$ = $.$on$numElements$;
						this.$over$ = $.$over$;
						this.$enclosingObjects$Streams$SeqCltnReadWriteStream = enclosingObjects;
						this.$super$Streams$SeqCltnReadWriteStream = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$TempTranscript = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for Streams`TempTranscript";
			this.name = "Streams`TempTranscript";
			this.header = "TempTranscript = CharacterOStream (\r(* This probably doesn't belong here.  *))";
			this.slots = [];
			this.methods = [
				new MM("superInit`Streams`TempTranscript", true, "CharacterOStream"),
				new MM("instance`initializer", true, "CharacterOStream"),
				new MM("cr", false, "cr\r = (\r	(* self nextPut: Character cr. *)\r	self nextPut: Character lf.\r)"),
				new MM("nextPut:", false, "nextPut: c <Character> ^ <Character> = (\r\r    c unicodeValue printCharacter.\r	c == Character cr\r		ifTrue: [ Character lf unicodeValue printCharacter. ].\r)"),
				new MM("show:", false, "show: s <Collection[Character]>  ^ <Collection[Object]> = (\r\r\r	self nextPutAll: s.\r	^s\r)")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$Streams$TempTranscript = (function () {
				var self = this;
				self.$super$Streams$TempTranscript.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$Streams$TempTranscript();
				return self;
			});
			this.$cr = (function () {
				var self = this;
				self.$nextPut$(self.$Character().$lf());
				return self;
			});
			this.$nextPut$ = (function ($c) {
				var self = this;
				$c.$unicodeValue().$printCharacter();
				if ($c === self.$Character().$cr()) {
					self.$Character().$lf().$unicodeValue().$printCharacter();
				} else {
					nil;
				};
				return self;
			});
			this.$show$ = (function ($s) {
				var self = this;
				self.$nextPutAll$($s);
				return $s;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for Streams`TempTranscript";
					this.$superInit$Streams$TempTranscript = $.$superInit$Streams$TempTranscript;
					this.$instance$initializer = $.$instance$initializer;
					this.$cr = $.$cr;
					this.$nextPut$ = $.$nextPut$;
					this.$show$ = $.$show$;
					this.$enclosingObjects$Streams$TempTranscript = enclosingObjects;
					this.$super$Streams$TempTranscript = runtimeSuperclass;
					this["Streams`TempTranscript"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["Streams`TempTranscript"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for Streams`TempTranscript";
				this.slots = [];
				this.methods = [new MM("new", true, null)];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for Streams`TempTranscript";
						this.$new = $.$new;
						this.$enclosingObjects$Streams$TempTranscript = enclosingObjects;
						this.$super$Streams$TempTranscript = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$Streams$BasicInputStream.enclosingMixin = this;
		this.$Streams$BasicOutputStream.enclosingMixin = this;
		this.$Streams$BasicReadStream.enclosingMixin = this;
		this.$Streams$BasicReadWriteStream.enclosingMixin = this;
		this.$Streams$CharacterInput.enclosingMixin = this;
		this.$Streams$CharacterInputConverter.enclosingMixin = this;
		this.$Streams$CharacterInputOutputConverter.enclosingMixin = this;
		this.$Streams$CharacterOutput.enclosingMixin = this;
		this.$Streams$CharacterOutputConverter.enclosingMixin = this;
		this.$Streams$CharacterReadConverter.enclosingMixin = this;
		this.$Streams$CharacterReadStream.enclosingMixin = this;
		this.$Streams$CharacterReadWriteStream.enclosingMixin = this;
		this.$Streams$ExternalInputStream.enclosingMixin = this;
		this.$Streams$ExternalOutputStream.enclosingMixin = this;
		this.$Streams$ExternalReadStream.enclosingMixin = this;
		this.$Streams$ExternalReadWriteStream.enclosingMixin = this;
		this.$Streams$ExternalStream.enclosingMixin = this;
		this.$Streams$SeqCltnReadStream.enclosingMixin = this;
		this.$Streams$SeqCltnReadWriteStream.enclosingMixin = this;
		this.$Streams$TempTranscript.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for Streams";
				this.$superInit$Streams = $.$superInit$Streams;
				this.$instance$initializer = $.$instance$initializer;
				this.$usingCrLfConvention = $.$usingCrLfConvention;
				this.$BasicInputStream = $.$BasicInputStream;
				this.$BasicOutputStream = $.$BasicOutputStream;
				this.$BasicReadStream = $.$BasicReadStream;
				this.$BasicReadWriteStream = $.$BasicReadWriteStream;
				this.$CharacterInput = $.$CharacterInput;
				this.$CharacterInputConverter = $.$CharacterInputConverter;
				this.$CharacterInputOutputConverter = $.$CharacterInputOutputConverter;
				this.$CharacterOutput = $.$CharacterOutput;
				this.$CharacterOutputConverter = $.$CharacterOutputConverter;
				this.$CharacterReadConverter = $.$CharacterReadConverter;
				this.$CharacterReadStream = $.$CharacterReadStream;
				this.$CharacterReadWriteStream = $.$CharacterReadWriteStream;
				this.$ExternalInputStream = $.$ExternalInputStream;
				this.$ExternalOutputStream = $.$ExternalOutputStream;
				this.$ExternalReadStream = $.$ExternalReadStream;
				this.$ExternalReadWriteStream = $.$ExternalReadWriteStream;
				this.$ExternalStream = $.$ExternalStream;
				this.$SeqCltnReadStream = $.$SeqCltnReadStream;
				this.$SeqCltnReadWriteStream = $.$SeqCltnReadWriteStream;
				this.$TempTranscript = $.$TempTranscript;
				this.$String = $.$String;
				this.$setOnce$String$ = $.$setOnce$String$;
				this.$BasicOutputReadStream = $.$BasicOutputReadStream;
				this.$setOnce$BasicOutputReadStream$ = $.$setOnce$BasicOutputReadStream$;
				this.$CharacterSequenceReadStream = $.$CharacterSequenceReadStream;
				this.$setOnce$CharacterSequenceReadStream$ = $.$setOnce$CharacterSequenceReadStream$;
				this.$CharacterIStream = $.$CharacterIStream;
				this.$setOnce$CharacterIStream$ = $.$setOnce$CharacterIStream$;
				this.$CharacterOStream = $.$CharacterOStream;
				this.$setOnce$CharacterOStream$ = $.$setOnce$CharacterOStream$;
				this.$CharacterSequenceReadWriteStream = $.$CharacterSequenceReadWriteStream;
				this.$setOnce$CharacterSequenceReadWriteStream$ = $.$setOnce$CharacterSequenceReadWriteStream$;
				this.$CharacterConverterWithOutput = $.$CharacterConverterWithOutput;
				this.$setOnce$CharacterConverterWithOutput$ = $.$setOnce$CharacterConverterWithOutput$;
				this.$OutputInputConverter = $.$OutputInputConverter;
				this.$setOnce$OutputInputConverter$ = $.$setOnce$OutputInputConverter$;
				this.$BasicIExStream = $.$BasicIExStream;
				this.$setOnce$BasicIExStream$ = $.$setOnce$BasicIExStream$;
				this.$EIStream = $.$EIStream;
				this.$setOnce$EIStream$ = $.$setOnce$EIStream$;
				this.$ReadExternalOutputStream = $.$ReadExternalOutputStream;
				this.$setOnce$ReadExternalOutputStream$ = $.$setOnce$ReadExternalOutputStream$;
				this.$EOStream = $.$EOStream;
				this.$setOnce$EOStream$ = $.$setOnce$EOStream$;
				this.$EIOStream = $.$EIOStream;
				this.$setOnce$EIOStream$ = $.$setOnce$EIOStream$;
				this.$Streams$BasicInputStream = $.$Streams$BasicInputStream;
				this.$Streams$BasicInputStream$ = $.$Streams$BasicInputStream$;
				this.$Streams$BasicOutputStream = $.$Streams$BasicOutputStream;
				this.$Streams$BasicOutputStream$ = $.$Streams$BasicOutputStream$;
				this.$Streams$BasicReadStream = $.$Streams$BasicReadStream;
				this.$Streams$BasicReadStream$ = $.$Streams$BasicReadStream$;
				this.$Streams$BasicReadWriteStream = $.$Streams$BasicReadWriteStream;
				this.$Streams$BasicReadWriteStream$ = $.$Streams$BasicReadWriteStream$;
				this.$Streams$CharacterInput = $.$Streams$CharacterInput;
				this.$Streams$CharacterInput$ = $.$Streams$CharacterInput$;
				this.$Streams$CharacterInputConverter = $.$Streams$CharacterInputConverter;
				this.$Streams$CharacterInputConverter$ = $.$Streams$CharacterInputConverter$;
				this.$Streams$CharacterInputOutputConverter = $.$Streams$CharacterInputOutputConverter;
				this.$Streams$CharacterInputOutputConverter$ = $.$Streams$CharacterInputOutputConverter$;
				this.$Streams$CharacterOutput = $.$Streams$CharacterOutput;
				this.$Streams$CharacterOutput$ = $.$Streams$CharacterOutput$;
				this.$Streams$CharacterOutputConverter = $.$Streams$CharacterOutputConverter;
				this.$Streams$CharacterOutputConverter$ = $.$Streams$CharacterOutputConverter$;
				this.$Streams$CharacterReadConverter = $.$Streams$CharacterReadConverter;
				this.$Streams$CharacterReadConverter$ = $.$Streams$CharacterReadConverter$;
				this.$Streams$CharacterReadStream = $.$Streams$CharacterReadStream;
				this.$Streams$CharacterReadStream$ = $.$Streams$CharacterReadStream$;
				this.$Streams$CharacterReadWriteStream = $.$Streams$CharacterReadWriteStream;
				this.$Streams$CharacterReadWriteStream$ = $.$Streams$CharacterReadWriteStream$;
				this.$Streams$ExternalInputStream = $.$Streams$ExternalInputStream;
				this.$Streams$ExternalInputStream$ = $.$Streams$ExternalInputStream$;
				this.$Streams$ExternalOutputStream = $.$Streams$ExternalOutputStream;
				this.$Streams$ExternalOutputStream$ = $.$Streams$ExternalOutputStream$;
				this.$Streams$ExternalReadStream = $.$Streams$ExternalReadStream;
				this.$Streams$ExternalReadStream$ = $.$Streams$ExternalReadStream$;
				this.$Streams$ExternalReadWriteStream = $.$Streams$ExternalReadWriteStream;
				this.$Streams$ExternalReadWriteStream$ = $.$Streams$ExternalReadWriteStream$;
				this.$Streams$ExternalStream = $.$Streams$ExternalStream;
				this.$Streams$ExternalStream$ = $.$Streams$ExternalStream$;
				this.$Streams$SeqCltnReadStream = $.$Streams$SeqCltnReadStream;
				this.$Streams$SeqCltnReadStream$ = $.$Streams$SeqCltnReadStream$;
				this.$Streams$SeqCltnReadWriteStream = $.$Streams$SeqCltnReadWriteStream;
				this.$Streams$SeqCltnReadWriteStream$ = $.$Streams$SeqCltnReadWriteStream$;
				this.$Streams$TempTranscript = $.$Streams$TempTranscript;
				this.$Streams$TempTranscript$ = $.$Streams$TempTranscript$;
				this.$enclosingObjects$Streams = enclosingObjects;
				this.$super$Streams = runtimeSuperclass;
				this.Streams = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$String$slot = nil;
					this.$BasicOutputReadStream$slot = nil;
					this.$CharacterSequenceReadStream$slot = nil;
					this.$CharacterIStream$slot = nil;
					this.$CharacterOStream$slot = nil;
					this.$CharacterSequenceReadWriteStream$slot = nil;
					this.$CharacterConverterWithOutput$slot = nil;
					this.$OutputInputConverter$slot = nil;
					this.$BasicIExStream$slot = nil;
					this.$EIStream$slot = nil;
					this.$ReadExternalOutputStream$slot = nil;
					this.$EOStream$slot = nil;
					this.$EIOStream$slot = nil;
					this.$Streams$BasicInputStream$slot = nil;
					this.$Streams$BasicOutputStream$slot = nil;
					this.$Streams$BasicReadStream$slot = nil;
					this.$Streams$BasicReadWriteStream$slot = nil;
					this.$Streams$CharacterInput$slot = nil;
					this.$Streams$CharacterInputConverter$slot = nil;
					this.$Streams$CharacterInputOutputConverter$slot = nil;
					this.$Streams$CharacterOutput$slot = nil;
					this.$Streams$CharacterOutputConverter$slot = nil;
					this.$Streams$CharacterReadConverter$slot = nil;
					this.$Streams$CharacterReadStream$slot = nil;
					this.$Streams$CharacterReadWriteStream$slot = nil;
					this.$Streams$ExternalInputStream$slot = nil;
					this.$Streams$ExternalOutputStream$slot = nil;
					this.$Streams$ExternalReadStream$slot = nil;
					this.$Streams$ExternalReadWriteStream$slot = nil;
					this.$Streams$ExternalStream$slot = nil;
					this.$Streams$SeqCltnReadStream$slot = nil;
					this.$Streams$SeqCltnReadWriteStream$slot = nil;
					this.$Streams$TempTranscript$slot = nil;
				});
				this.basicNew = this.Streams;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for Streams";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($platform) {
				return (new this.nonMeta.basicNew()).$instance$initializer($platform);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for Streams";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$Streams = enclosingObjects;
					this.$super$Streams = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$TimeForV8 = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for TimeForV8";
		this.name = "TimeForV8";
		this.header = "TimeForV8 usingPlatform: p = (\r(* Just enough of a time library to do benchmarking.\r\rCopyright 2012 Google Inc.\rCopyright 2013 Ryan Macnak\r\rLicensed under the Apache License, Version 2.0 (the ''License''); you may not use this file except in compliance with the License.  You may obtain a copy of the License at  http://www.apache.org/licenses/LICENSE-2.0 *)|\r|)";
		this.slots = [
			new SM("TimeForV8`Time", true, true),
			new SM("TimeForV8`Timer", true, true)
		];
		this.methods = [
			new MM("superInit`TimeForV8", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("Time", true, null),
			new MM("Timer", true, null),
			new MM("TimeForV8`Time", true, null),
			new MM("TimeForV8`Time:", true, null),
			new MM("TimeForV8`Timer", true, null),
			new MM("TimeForV8`Timer:", true, null)
		];
		this.nestedClasses = [
			"TimeForV8`Time",
			"TimeForV8`Timer"
		];
		this.applications = [];
		this.$superInit$TimeForV8 = (function ($p) {
			var self = this;
			self.$super$TimeForV8.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($p) {
			var self = this;
			self.$superInit$TimeForV8($p);
			return self;
		});
		this.$Time = (function () {
			if (nil === this.$TimeForV8$Time$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$TimeForV8);
				var mixin = this.$TimeForV8$Time;
				this.$TimeForV8$Time$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$TimeForV8$Time$slot;
		});
		this.$Timer = (function () {
			if (nil === this.$TimeForV8$Timer$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$TimeForV8);
				var mixin = this.$TimeForV8$Timer;
				this.$TimeForV8$Timer$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$TimeForV8$Timer$slot;
		});
		this.$TimeForV8$Time = (function () {
			return this.$TimeForV8$Time$slot;
		});
		this.$TimeForV8$Time$ = (function (v) {
			this.$TimeForV8$Time$slot = v;
			return this;
		});
		this.$TimeForV8$Timer = (function () {
			return this.$TimeForV8$Timer$slot;
		});
		this.$TimeForV8$Timer$ = (function (v) {
			this.$TimeForV8$Timer$slot = v;
			return this;
		});
		this.$TimeForV8$Time = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for TimeForV8`Time";
			this.name = "TimeForV8`Time";
			this.header = "Time = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`TimeForV8`Time", true, " "),
				new MM("instance`initializer", true, " ")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$TimeForV8$Time = (function () {
				var self = this;
				self.$super$TimeForV8$Time.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$TimeForV8$Time();
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for TimeForV8`Time";
					this.$superInit$TimeForV8$Time = $.$superInit$TimeForV8$Time;
					this.$instance$initializer = $.$instance$initializer;
					this.$enclosingObjects$TimeForV8$Time = enclosingObjects;
					this.$super$TimeForV8$Time = runtimeSuperclass;
					this["TimeForV8`Time"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["TimeForV8`Time"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for TimeForV8`Time";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("microsecondClockValue", false, "microsecondClockValue = (\r	^js verbatim: 'performance.now() * 1000'\r)"),
					new MM("millisecondClockValue", false, "millisecondClockValue = (\r	^js verbatim: 'new Date().getTime()'\r)"),
					new MM("millisecondsToRun:", false, "millisecondsToRun: block = (\r	| start = self millisecondClockValue. |\r	block value.\r	^self millisecondClockValue -start\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$microsecondClockValue = (function () {
					var self = this;
					return performance.now() * 1000;
				});
				this.$millisecondClockValue = (function () {
					var self = this;
					return new Date().getTime();
				});
				this.$millisecondsToRun$ = (function ($block) {
					var self = this;
					var $start = nil;
					$start = self.$millisecondClockValue();
					$block.$value();
					return self.$millisecondClockValue() - $start;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for TimeForV8`Time";
						this.$new = $.$new;
						this.$microsecondClockValue = $.$microsecondClockValue;
						this.$millisecondClockValue = $.$millisecondClockValue;
						this.$millisecondsToRun$ = $.$millisecondsToRun$;
						this.$enclosingObjects$TimeForV8$Time = enclosingObjects;
						this.$super$TimeForV8$Time = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$TimeForV8$Timer = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for TimeForV8`Timer";
			this.name = "TimeForV8`Timer";
			this.header = "Timer = ()";
			this.slots = [];
			this.methods = [
				new MM("superInit`TimeForV8`Timer", true, " "),
				new MM("instance`initializer", true, " ")
			];
			this.nestedClasses = [];
			this.applications = [];
			this.$superInit$TimeForV8$Timer = (function () {
				var self = this;
				self.$super$TimeForV8$Timer.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function () {
				var self = this;
				self.$superInit$TimeForV8$Timer();
				return self;
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for TimeForV8`Timer";
					this.$superInit$TimeForV8$Timer = $.$superInit$TimeForV8$Timer;
					this.$instance$initializer = $.$instance$initializer;
					this.$enclosingObjects$TimeForV8$Timer = enclosingObjects;
					this.$super$TimeForV8$Timer = runtimeSuperclass;
					this["TimeForV8`Timer"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew = this["TimeForV8`Timer"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for TimeForV8`Timer";
				this.slots = [];
				this.methods = [
					new MM("new", true, null),
					new MM("after:do:", false, "after: duration do: callback = (\r	js call: (js propertyOf: (js ident: 'window') at: (js literal: 'setTimeout'))\r	with: {callback. duration}\r)"),
					new MM("every:do:", false, "every: duration do: callback = (\r	js call: (js propertyOf: (js ident: 'window') at: (js literal: 'setInterval'))\r	with: {callback. duration}\r)")
				];
				this.nestedClasses = [];
				this.$new = (function () {
					return (new this.nonMeta.basicNew()).$instance$initializer();
				});
				this.$after$do$ = (function ($duration, $callback) {
					var self = this;
					window.setTimeout($callback, $duration);
					return self;
				});
				this.$every$do$ = (function ($duration, $callback) {
					var self = this;
					window.setInterval($callback, $duration);
					return self;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for TimeForV8`Timer";
						this.$new = $.$new;
						this.$after$do$ = $.$after$do$;
						this.$every$do$ = $.$every$do$;
						this.$enclosingObjects$TimeForV8$Timer = enclosingObjects;
						this.$super$TimeForV8$Timer = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$TimeForV8$Time.enclosingMixin = this;
		this.$TimeForV8$Timer.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for TimeForV8";
				this.$superInit$TimeForV8 = $.$superInit$TimeForV8;
				this.$instance$initializer = $.$instance$initializer;
				this.$Time = $.$Time;
				this.$Timer = $.$Timer;
				this.$TimeForV8$Time = $.$TimeForV8$Time;
				this.$TimeForV8$Time$ = $.$TimeForV8$Time$;
				this.$TimeForV8$Timer = $.$TimeForV8$Timer;
				this.$TimeForV8$Timer$ = $.$TimeForV8$Timer$;
				this.$enclosingObjects$TimeForV8 = enclosingObjects;
				this.$super$TimeForV8 = runtimeSuperclass;
				this.TimeForV8 = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$TimeForV8$Time$slot = nil;
					this.$TimeForV8$Timer$slot = nil;
				});
				this.basicNew = this.TimeForV8;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for TimeForV8";
			this.slots = [];
			this.methods = [new MM("usingPlatform:", true, null)];
			this.nestedClasses = [];
			this.$usingPlatform$ = (function ($p) {
				return (new this.nonMeta.basicNew()).$instance$initializer($p);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for TimeForV8";
					this.$usingPlatform$ = $.$usingPlatform$;
					this.$enclosingObjects$TimeForV8 = enclosingObjects;
					this.$super$TimeForV8 = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
	this.$ScratchPad = new (function () {
		var $ = this;
		this.debug = "Runtime mixin for ScratchPad";
		this.name = "ScratchPad";
		this.header = "ScratchPad packageUsing: manifest = (|\r|)";
		this.slots = [new SM("ScratchPad`Demo", true, true)];
		this.methods = [
			new MM("superInit`ScratchPad", true, " "),
			new MM("instance`initializer", true, " "),
			new MM("main:args:", false, "main: p args: a = (\r	| demo = Demo usingPlatform: p. |\r	p hopscotch core HopscotchWindow openSubject: demo DemoSubject new.\r)"),
			new MM("Demo", true, null),
			new MM("ScratchPad`Demo", true, null),
			new MM("ScratchPad`Demo:", true, null)
		];
		this.nestedClasses = ["ScratchPad`Demo"];
		this.applications = [];
		this.$superInit$ScratchPad = (function ($manifest) {
			var self = this;
			self.$super$ScratchPad.$instance$initializer.call(self);
			return self;
		});
		this.$instance$initializer = (function ($manifest) {
			var self = this;
			self.$superInit$ScratchPad($manifest);
			return self;
		});
		this.$main$args$ = (function ($p, $a) {
			var self = this;
			var $demo = nil;
			$demo = self.$Demo().$usingPlatform$($p);
			$p.$hopscotch().$core().$HopscotchWindow().$openSubject$($demo.$DemoSubject().$new());
			return self;
		});
		this.$Demo = (function () {
			if (nil === this.$ScratchPad$Demo$slot) {
				var self = this;
				var superclass = self.$Object();
				var enclosingObjects = ([this]).concat(this.$enclosingObjects$ScratchPad);
				var mixin = this.$ScratchPad$Demo;
				this.$ScratchPad$Demo$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
			};
			return this.$ScratchPad$Demo$slot;
		});
		this.$ScratchPad$Demo = (function () {
			return this.$ScratchPad$Demo$slot;
		});
		this.$ScratchPad$Demo$ = (function (v) {
			this.$ScratchPad$Demo$slot = v;
			return this;
		});
		this.$ScratchPad$Demo = new (function () {
			var $ = this;
			this.debug = "Runtime mixin for ScratchPad`Demo";
			this.name = "ScratchPad`Demo";
			this.header = "Demo usingPlatform: p = (|\r	localStorage = p aliens global at: 'localStorage'.\r	document = p aliens global at: 'document'.\r	window = p aliens global.\r	URL = p aliens global at: 'URL'.\r	Blob = p aliens global at: 'Blob'.\r	Subject = p hopscotch core Subject.\r	Presenter = p hopscotch core Presenter.\r	Color = p graphics Color.\r	TextEditorFragment = p hopscotch fragments TextEditorFragment.\r|)";
			this.slots = [
				new SM("localStorage", false, false),
				new SM("document", false, false),
				new SM("window", false, false),
				new SM("URL", false, false),
				new SM("Blob", false, false),
				new SM("Subject", false, false),
				new SM("Presenter", false, false),
				new SM("Color", false, false),
				new SM("TextEditorFragment", false, false),
				new SM("ScratchPad`Demo`DemoPresenter", true, true),
				new SM("ScratchPad`Demo`DemoSubject", true, true)
			];
			this.methods = [
				new MM("superInit`ScratchPad`Demo", true, " "),
				new MM("instance`initializer", true, " "),
				new MM("DemoPresenter", true, null),
				new MM("DemoSubject", true, null),
				new MM("localStorage", true, null),
				new MM("setOnce`localStorage:", true, null),
				new MM("document", true, null),
				new MM("setOnce`document:", true, null),
				new MM("window", true, null),
				new MM("setOnce`window:", true, null),
				new MM("URL", true, null),
				new MM("setOnce`URL:", true, null),
				new MM("Blob", true, null),
				new MM("setOnce`Blob:", true, null),
				new MM("Subject", true, null),
				new MM("setOnce`Subject:", true, null),
				new MM("Presenter", true, null),
				new MM("setOnce`Presenter:", true, null),
				new MM("Color", true, null),
				new MM("setOnce`Color:", true, null),
				new MM("TextEditorFragment", true, null),
				new MM("setOnce`TextEditorFragment:", true, null),
				new MM("ScratchPad`Demo`DemoPresenter", true, null),
				new MM("ScratchPad`Demo`DemoPresenter:", true, null),
				new MM("ScratchPad`Demo`DemoSubject", true, null),
				new MM("ScratchPad`Demo`DemoSubject:", true, null)
			];
			this.nestedClasses = [
				"ScratchPad`Demo`DemoPresenter",
				"ScratchPad`Demo`DemoSubject"
			];
			this.applications = [];
			this.$superInit$ScratchPad$Demo = (function ($p) {
				var self = this;
				self.$super$ScratchPad$Demo.$instance$initializer.call(self);
				return self;
			});
			this.$instance$initializer = (function ($p) {
				var self = this;
				self.$superInit$ScratchPad$Demo($p);
				self.$setOnce$localStorage$($p.$aliens().$global().$at$("localStorage"));
				self.$setOnce$document$($p.$aliens().$global().$at$("document"));
				self.$setOnce$window$($p.$aliens().$global());
				self.$setOnce$URL$($p.$aliens().$global().$at$("URL"));
				self.$setOnce$Blob$($p.$aliens().$global().$at$("Blob"));
				self.$setOnce$Subject$($p.$hopscotch().$core().$Subject());
				self.$setOnce$Presenter$($p.$hopscotch().$core().$Presenter());
				self.$setOnce$Color$($p.$graphics().$Color());
				self.$setOnce$TextEditorFragment$($p.$hopscotch().$fragments().$TextEditorFragment());
				return self;
			});
			this.$DemoPresenter = (function () {
				if (nil === this.$ScratchPad$Demo$DemoPresenter$slot) {
					var self = this;
					var superclass = self.$Presenter();
					var enclosingObjects = ([this]).concat(this.$enclosingObjects$ScratchPad$Demo);
					var mixin = this.$ScratchPad$Demo$DemoPresenter;
					this.$ScratchPad$Demo$DemoPresenter$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
				};
				return this.$ScratchPad$Demo$DemoPresenter$slot;
			});
			this.$DemoSubject = (function () {
				if (nil === this.$ScratchPad$Demo$DemoSubject$slot) {
					var self = this;
					var superclass = self.$Subject();
					var enclosingObjects = ([this]).concat(this.$enclosingObjects$ScratchPad$Demo);
					var mixin = this.$ScratchPad$Demo$DemoSubject;
					this.$ScratchPad$Demo$DemoSubject$slot = vmmirror.$applyMixin$toSuperclass$withEnclosingObjects$(mixin, superclass, enclosingObjects);
				};
				return this.$ScratchPad$Demo$DemoSubject$slot;
			});
			this.$localStorage = (function () {
				return this.$localStorage$slot;
			});
			this.$setOnce$localStorage$ = (function (v) {
				this.$localStorage$slot = v;
				return this;
			});
			this.$document = (function () {
				return this.$document$slot;
			});
			this.$setOnce$document$ = (function (v) {
				this.$document$slot = v;
				return this;
			});
			this.$window = (function () {
				return this.$window$slot;
			});
			this.$setOnce$window$ = (function (v) {
				this.$window$slot = v;
				return this;
			});
			this.$URL = (function () {
				return this.$URL$slot;
			});
			this.$setOnce$URL$ = (function (v) {
				this.$URL$slot = v;
				return this;
			});
			this.$Blob = (function () {
				return this.$Blob$slot;
			});
			this.$setOnce$Blob$ = (function (v) {
				this.$Blob$slot = v;
				return this;
			});
			this.$Subject = (function () {
				return this.$Subject$slot;
			});
			this.$setOnce$Subject$ = (function (v) {
				this.$Subject$slot = v;
				return this;
			});
			this.$Presenter = (function () {
				return this.$Presenter$slot;
			});
			this.$setOnce$Presenter$ = (function (v) {
				this.$Presenter$slot = v;
				return this;
			});
			this.$Color = (function () {
				return this.$Color$slot;
			});
			this.$setOnce$Color$ = (function (v) {
				this.$Color$slot = v;
				return this;
			});
			this.$TextEditorFragment = (function () {
				return this.$TextEditorFragment$slot;
			});
			this.$setOnce$TextEditorFragment$ = (function (v) {
				this.$TextEditorFragment$slot = v;
				return this;
			});
			this.$ScratchPad$Demo$DemoPresenter = (function () {
				return this.$ScratchPad$Demo$DemoPresenter$slot;
			});
			this.$ScratchPad$Demo$DemoPresenter$ = (function (v) {
				this.$ScratchPad$Demo$DemoPresenter$slot = v;
				return this;
			});
			this.$ScratchPad$Demo$DemoSubject = (function () {
				return this.$ScratchPad$Demo$DemoSubject$slot;
			});
			this.$ScratchPad$Demo$DemoSubject$ = (function (v) {
				this.$ScratchPad$Demo$DemoSubject$slot = v;
				return this;
			});
			this.$ScratchPad$Demo$DemoPresenter = new (function () {
				var $ = this;
				this.debug = "Runtime mixin for ScratchPad`Demo`DemoPresenter";
				this.name = "ScratchPad`Demo`DemoPresenter";
				this.header = "DemoPresenter onSubject: s = Presenter onSubject: s ()";
				this.slots = [];
				this.methods = [
					new MM("superInit`ScratchPad`Demo`DemoPresenter", true, "onSubject: s"),
					new MM("instance`initializer", true, "onSubject: s"),
					new MM("definition", false, "definition = (\r	| slowHolder echo |\r	^(column: {\r		label: 'ScratchPad'.\r		TextEditorFragment new\r			changeResponse: [:editor | subject text: editor textBeingAccepted];\r			text: subject text.\r		link: 'Download' action: [respondToDownload].\r	}) color: (Color r: 0.855 g: 0.855 b: 0.9)\r)"),
					new MM("respondToDownload", false, "respondToDownload = (\r	| b u saveLink event | \r	b:: Blob new: {subject text}.\r	u:: URL createObjectURL: b.\r	u out.\r	saveLink:: document createElement: 'a'.\r	saveLink at: 'href' put: u.\r	saveLink at: 'download' put: 'foo/ScratchPad.txt'.\r	event:: document createEvent: 'MouseEvents'.\r	event initMouseEvent:\r				'click' with: true with: false with: window with: 0  with: 0  with: 0  with: 0  with: 0\r				 with: false  with: false  with: false  with: false  with: 0  with: nil.\r	\r	saveLink dispatchEvent: event.\r)")
				];
				this.nestedClasses = [];
				this.applications = [];
				this.$superInit$ScratchPad$Demo$DemoPresenter = (function ($s) {
					var self = this;
					self.$super$ScratchPad$Demo$DemoPresenter.$instance$initializer.call(self, $s);
					return self;
				});
				this.$instance$initializer = (function ($s) {
					var self = this;
					self.$superInit$ScratchPad$Demo$DemoPresenter($s);
					return self;
				});
				this.$definition = (function () {
					var self = this;
					var $slowHolder = nil;
					var $echo = nil;
					return self.$column$([
						self.$label$("ScratchPad"),
						(function (cascadeReceiver) {
							cascadeReceiver.$changeResponse$((function ($editor) {
								return self.$subject().$text$($editor.$textBeingAccepted());
							}));
							return cascadeReceiver.$text$(self.$subject().$text());
						})(self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$TextEditorFragment().$new()),
						self.$link$action$("Download", (function () {
							return self.$respondToDownload();
						}))
					]).$color$(self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$Color().$r$g$b$((171/200), (171/200), (9/10)));
				});
				this.$respondToDownload = (function () {
					var self = this;
					var $b = nil;
					var $u = nil;
					var $saveLink = nil;
					var $event = nil;
					$b = self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$Blob().$new$([self.$subject().$text()]);
					$u = self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$URL().$createObjectURL$($b);
					$u.$out();
					$saveLink = self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$document().$createElement$("a");
					$saveLink.$at$put$("href", $u);
					$saveLink.$at$put$("download", "foo/ScratchPad.txt");
					$event = self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$document().$createEvent$("MouseEvents");
					$event.$initMouseEvent$with$with$with$with$with$with$with$with$with$with$with$with$with$with$("click", true, false, self.$enclosingObjects$ScratchPad$Demo$DemoPresenter[0].$window(), 0, 0, 0, 0, 0, false, false, false, false, 0, nil);
					$saveLink.$dispatchEvent$($event);
					return self;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime class for ScratchPad`Demo`DemoPresenter";
						this.$superInit$ScratchPad$Demo$DemoPresenter = $.$superInit$ScratchPad$Demo$DemoPresenter;
						this.$instance$initializer = $.$instance$initializer;
						this.$definition = $.$definition;
						this.$respondToDownload = $.$respondToDownload;
						this.$enclosingObjects$ScratchPad$Demo$DemoPresenter = enclosingObjects;
						this.$super$ScratchPad$Demo$DemoPresenter = runtimeSuperclass;
						this["ScratchPad`Demo`DemoPresenter"] = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew = this["ScratchPad`Demo`DemoPresenter"];
						this.basicNew.prototype = this;
						this.meta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
				this.meta = new (function () {
					var $ = this;
					this.debug = "Runtime meta mixin for ScratchPad`Demo`DemoPresenter";
					this.slots = [];
					this.methods = [new MM("onSubject:", true, null)];
					this.nestedClasses = [];
					this.$onSubject$ = (function ($s) {
						return (new this.nonMeta.basicNew()).$instance$initializer($s);
					});
					this.invoke = (function (runtimeSuperclass, enclosingObjects) {
						function constructRuntimeClass (superBasicNew) {
							this.debug = "Runtime meta class for ScratchPad`Demo`DemoPresenter";
							this.$onSubject$ = $.$onSubject$;
							this.$enclosingObjects$ScratchPad$Demo$DemoPresenter = enclosingObjects;
							this.$super$ScratchPad$Demo$DemoPresenter = runtimeSuperclass;
							this.basicNew = (function () {
								superBasicNew.call(this);
								this.hashCode = 0;
							});
							this.basicNew.prototype = this;
							this.nonMeta = null;
							this.newspeakClass = null;
						};
						constructRuntimeClass.prototype = runtimeSuperclass;
						return new constructRuntimeClass(runtimeSuperclass.basicNew);
					});
				})();
				this.meta.nonMeta = this;
			})();
			this.$ScratchPad$Demo$DemoSubject = new (function () {
				var $ = this;
				this.debug = "Runtime mixin for ScratchPad`Demo`DemoSubject";
				this.name = "ScratchPad`Demo`DemoSubject";
				this.header = "DemoSubject new = Subject onModel: nil ()";
				this.slots = [];
				this.methods = [
					new MM("superInit`ScratchPad`Demo`DemoSubject", true, "onModel: nil"),
					new MM("instance`initializer", true, "onModel: nil"),
					new MM("createPresenter", false, "createPresenter = (\r	^DemoPresenter onSubject: self\r)"),
					new MM("text", false, "text = (\r	| r |\r	r:: localStorage getItem: 'text'.\r	(r isAlien and: [r isUndefined]) ifTrue: [^''].\r	^r\r)"),
					new MM("text:", false, "text: v = (\r	localStorage setItem: 'text' with: v.\r)")
				];
				this.nestedClasses = [];
				this.applications = [];
				this.$superInit$ScratchPad$Demo$DemoSubject = (function () {
					var self = this;
					self.$super$ScratchPad$Demo$DemoSubject.$instance$initializer.call(self, nil);
					return self;
				});
				this.$instance$initializer = (function () {
					var self = this;
					self.$superInit$ScratchPad$Demo$DemoSubject();
					return self;
				});
				this.$createPresenter = (function () {
					var self = this;
					return self.$enclosingObjects$ScratchPad$Demo$DemoSubject[0].$DemoPresenter().$onSubject$(self);
				});
				this.$text = (function () {
					var self = this;
					var $r = nil;
					$r = self.$enclosingObjects$ScratchPad$Demo$DemoSubject[0].$localStorage().$getItem$("text");
					if ($r.$isAlien() && $r.$isUndefined()) {
						return "";
					} else {
						nil;
					};
					return $r;
				});
				this.$text$ = (function ($v) {
					var self = this;
					self.$enclosingObjects$ScratchPad$Demo$DemoSubject[0].$localStorage().$setItem$with$("text", $v);
					return self;
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime class for ScratchPad`Demo`DemoSubject";
						this.$superInit$ScratchPad$Demo$DemoSubject = $.$superInit$ScratchPad$Demo$DemoSubject;
						this.$instance$initializer = $.$instance$initializer;
						this.$createPresenter = $.$createPresenter;
						this.$text = $.$text;
						this.$text$ = $.$text$;
						this.$enclosingObjects$ScratchPad$Demo$DemoSubject = enclosingObjects;
						this.$super$ScratchPad$Demo$DemoSubject = runtimeSuperclass;
						this["ScratchPad`Demo`DemoSubject"] = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew = this["ScratchPad`Demo`DemoSubject"];
						this.basicNew.prototype = this;
						this.meta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
				this.meta = new (function () {
					var $ = this;
					this.debug = "Runtime meta mixin for ScratchPad`Demo`DemoSubject";
					this.slots = [];
					this.methods = [new MM("new", true, null)];
					this.nestedClasses = [];
					this.$new = (function () {
						return (new this.nonMeta.basicNew()).$instance$initializer();
					});
					this.invoke = (function (runtimeSuperclass, enclosingObjects) {
						function constructRuntimeClass (superBasicNew) {
							this.debug = "Runtime meta class for ScratchPad`Demo`DemoSubject";
							this.$new = $.$new;
							this.$enclosingObjects$ScratchPad$Demo$DemoSubject = enclosingObjects;
							this.$super$ScratchPad$Demo$DemoSubject = runtimeSuperclass;
							this.basicNew = (function () {
								superBasicNew.call(this);
								this.hashCode = 0;
							});
							this.basicNew.prototype = this;
							this.nonMeta = null;
							this.newspeakClass = null;
						};
						constructRuntimeClass.prototype = runtimeSuperclass;
						return new constructRuntimeClass(runtimeSuperclass.basicNew);
					});
				})();
				this.meta.nonMeta = this;
			})();
			this.$ScratchPad$Demo$DemoPresenter.enclosingMixin = this;
			this.$ScratchPad$Demo$DemoSubject.enclosingMixin = this;
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime class for ScratchPad`Demo";
					this.$superInit$ScratchPad$Demo = $.$superInit$ScratchPad$Demo;
					this.$instance$initializer = $.$instance$initializer;
					this.$DemoPresenter = $.$DemoPresenter;
					this.$DemoSubject = $.$DemoSubject;
					this.$localStorage = $.$localStorage;
					this.$setOnce$localStorage$ = $.$setOnce$localStorage$;
					this.$document = $.$document;
					this.$setOnce$document$ = $.$setOnce$document$;
					this.$window = $.$window;
					this.$setOnce$window$ = $.$setOnce$window$;
					this.$URL = $.$URL;
					this.$setOnce$URL$ = $.$setOnce$URL$;
					this.$Blob = $.$Blob;
					this.$setOnce$Blob$ = $.$setOnce$Blob$;
					this.$Subject = $.$Subject;
					this.$setOnce$Subject$ = $.$setOnce$Subject$;
					this.$Presenter = $.$Presenter;
					this.$setOnce$Presenter$ = $.$setOnce$Presenter$;
					this.$Color = $.$Color;
					this.$setOnce$Color$ = $.$setOnce$Color$;
					this.$TextEditorFragment = $.$TextEditorFragment;
					this.$setOnce$TextEditorFragment$ = $.$setOnce$TextEditorFragment$;
					this.$ScratchPad$Demo$DemoPresenter = $.$ScratchPad$Demo$DemoPresenter;
					this.$ScratchPad$Demo$DemoPresenter$ = $.$ScratchPad$Demo$DemoPresenter$;
					this.$ScratchPad$Demo$DemoSubject = $.$ScratchPad$Demo$DemoSubject;
					this.$ScratchPad$Demo$DemoSubject$ = $.$ScratchPad$Demo$DemoSubject$;
					this.$enclosingObjects$ScratchPad$Demo = enclosingObjects;
					this.$super$ScratchPad$Demo = runtimeSuperclass;
					this["ScratchPad`Demo"] = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
						this.$localStorage$slot = nil;
						this.$document$slot = nil;
						this.$window$slot = nil;
						this.$URL$slot = nil;
						this.$Blob$slot = nil;
						this.$Subject$slot = nil;
						this.$Presenter$slot = nil;
						this.$Color$slot = nil;
						this.$TextEditorFragment$slot = nil;
						this.$ScratchPad$Demo$DemoPresenter$slot = nil;
						this.$ScratchPad$Demo$DemoSubject$slot = nil;
					});
					this.basicNew = this["ScratchPad`Demo"];
					this.basicNew.prototype = this;
					this.meta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
			this.meta = new (function () {
				var $ = this;
				this.debug = "Runtime meta mixin for ScratchPad`Demo";
				this.slots = [];
				this.methods = [new MM("usingPlatform:", true, null)];
				this.nestedClasses = [];
				this.$usingPlatform$ = (function ($p) {
					return (new this.nonMeta.basicNew()).$instance$initializer($p);
				});
				this.invoke = (function (runtimeSuperclass, enclosingObjects) {
					function constructRuntimeClass (superBasicNew) {
						this.debug = "Runtime meta class for ScratchPad`Demo";
						this.$usingPlatform$ = $.$usingPlatform$;
						this.$enclosingObjects$ScratchPad$Demo = enclosingObjects;
						this.$super$ScratchPad$Demo = runtimeSuperclass;
						this.basicNew = (function () {
							superBasicNew.call(this);
							this.hashCode = 0;
						});
						this.basicNew.prototype = this;
						this.nonMeta = null;
						this.newspeakClass = null;
					};
					constructRuntimeClass.prototype = runtimeSuperclass;
					return new constructRuntimeClass(runtimeSuperclass.basicNew);
				});
			})();
			this.meta.nonMeta = this;
		})();
		this.$ScratchPad$Demo.enclosingMixin = this;
		this.invoke = (function (runtimeSuperclass, enclosingObjects) {
			function constructRuntimeClass (superBasicNew) {
				this.debug = "Runtime class for ScratchPad";
				this.$superInit$ScratchPad = $.$superInit$ScratchPad;
				this.$instance$initializer = $.$instance$initializer;
				this.$main$args$ = $.$main$args$;
				this.$Demo = $.$Demo;
				this.$ScratchPad$Demo = $.$ScratchPad$Demo;
				this.$ScratchPad$Demo$ = $.$ScratchPad$Demo$;
				this.$enclosingObjects$ScratchPad = enclosingObjects;
				this.$super$ScratchPad = runtimeSuperclass;
				this.ScratchPad = (function () {
					superBasicNew.call(this);
					this.hashCode = 0;
					this.$ScratchPad$Demo$slot = nil;
				});
				this.basicNew = this.ScratchPad;
				this.basicNew.prototype = this;
				this.meta = null;
				this.newspeakClass = null;
			};
			constructRuntimeClass.prototype = runtimeSuperclass;
			return new constructRuntimeClass(runtimeSuperclass.basicNew);
		});
		this.meta = new (function () {
			var $ = this;
			this.debug = "Runtime meta mixin for ScratchPad";
			this.slots = [];
			this.methods = [new MM("packageUsing:", true, null)];
			this.nestedClasses = [];
			this.$packageUsing$ = (function ($manifest) {
				return (new this.nonMeta.basicNew()).$instance$initializer($manifest);
			});
			this.invoke = (function (runtimeSuperclass, enclosingObjects) {
				function constructRuntimeClass (superBasicNew) {
					this.debug = "Runtime meta class for ScratchPad";
					this.$packageUsing$ = $.$packageUsing$;
					this.$enclosingObjects$ScratchPad = enclosingObjects;
					this.$super$ScratchPad = runtimeSuperclass;
					this.basicNew = (function () {
						superBasicNew.call(this);
						this.hashCode = 0;
					});
					this.basicNew.prototype = this;
					this.nonMeta = null;
					this.newspeakClass = null;
				};
				constructRuntimeClass.prototype = runtimeSuperclass;
				return new constructRuntimeClass(runtimeSuperclass.basicNew);
			});
		})();
		this.meta.nonMeta = this;
	})();
})();


var vmmirror = new function(){
	
	this.ImplementationBase$slot = new function(){
		this.debug = "ImplementationBase";
		this.$runtimeClass$slot = new function(){
			this.debug = "Runtime class for ImplementationBase";
			this.basicNew = function(){};
			this.$instance$initializer = function(){};
			this.toString = function(){ return this.$printString(); }
		};
	};
	this.$ImplementationBase = function(){return this.ImplementationBase$slot;};
	this.$Array = function(){return Array;};
	this.$String = function(){return String;};
	this.$printString = function(){return "VMMirrorForV8"};
	
	this.createKernel = function(){
		
		var enclosingObjects = ["patch me with kernel", "patch me with nil"];
		var enclosingObjects2 = ["patch me with nil"];
		
		var Object$runtimeClass = mixins.$KernelForV8.$KernelForV8$Object.invoke(this.$ImplementationBase().$runtimeClass$slot, enclosingObjects);
		var Class$runtimeClass = mixins.$KernelForV8.$KernelForV8$Class.invoke(Object$runtimeClass, enclosingObjects);
		var Metaclass$runtimeClass = mixins.$KernelForV8.$KernelForV8$Metaclass.invoke(Object$runtimeClass, enclosingObjects);
		var Mixin$runtimeClass = mixins.$KernelForV8.$KernelForV8$Mixin.invoke(Object$runtimeClass, enclosingObjects);
		var UndefinedObject$runtimeClass = mixins.$KernelForV8.$KernelForV8$UndefinedObject.invoke(Object$runtimeClass, enclosingObjects);
		var Kernel$runtimeClass = mixins.$KernelForV8.invoke(Object$runtimeClass, enclosingObjects2);
		
		var Object$class$runtimeClass = mixins.$KernelForV8.$KernelForV8$Object.meta.invoke(Class$runtimeClass, enclosingObjects);
		var Class$class$runtimeClass = mixins.$KernelForV8.$KernelForV8$Class.meta.invoke(Class$runtimeClass, enclosingObjects);
		var Metaclass$class$runtimeClass = mixins.$KernelForV8.$KernelForV8$Metaclass.meta.invoke(Class$runtimeClass, enclosingObjects);
		var Mixin$class$runtimeClass = mixins.$KernelForV8.$KernelForV8$Mixin.meta.invoke(Class$runtimeClass, enclosingObjects);
		var UndefinedObject$class$runtimeClass = mixins.$KernelForV8.$KernelForV8$UndefinedObject.meta.invoke(Class$runtimeClass, enclosingObjects);
		var Kernel$class$runtimeClass = mixins.$KernelForV8.meta.invoke(Class$runtimeClass, enclosingObjects2);
		
		Object$runtimeClass.meta = Object$class$runtimeClass;
		Class$runtimeClass.meta = Class$class$runtimeClass;
		Metaclass$runtimeClass.meta = Metaclass$class$runtimeClass;
		Mixin$runtimeClass.meta = Mixin$class$runtimeClass;
		UndefinedObject$runtimeClass.meta = UndefinedObject$class$runtimeClass;
		Kernel$runtimeClass.meta = Kernel$class$runtimeClass;
		
		Object$class$runtimeClass.nonMeta = Object$runtimeClass;
		Class$class$runtimeClass.nonMeta = Class$runtimeClass;
		Metaclass$class$runtimeClass.nonMeta = Metaclass$runtimeClass;
		Mixin$class$runtimeClass.nonMeta = Mixin$runtimeClass;
		UndefinedObject$class$runtimeClass.nonMeta = UndefinedObject$runtimeClass;
		Kernel$class$runtimeClass.nonMeta = Kernel$runtimeClass;
		
		nil = new UndefinedObject$runtimeClass.basicNew();
		
		var Object = new Object$class$runtimeClass.basicNew();
		var Class = new Class$class$runtimeClass.basicNew();
		var Metaclass = new Metaclass$class$runtimeClass.basicNew();
		var Mixin = new Mixin$class$runtimeClass.basicNew();
		var UndefinedObject = new UndefinedObject$class$runtimeClass.basicNew();
		var Kernel = new Kernel$class$runtimeClass.basicNew();
		
		var Object$class = new Metaclass$runtimeClass.basicNew();
		var Class$class = new Metaclass$runtimeClass.basicNew();
		var Metaclass$class = new Metaclass$runtimeClass.basicNew();
		var Mixin$class = new Metaclass$runtimeClass.basicNew();
		var UndefinedObject$class = new Metaclass$runtimeClass.basicNew();
		var Kernel$class = new Metaclass$runtimeClass.basicNew();
		
		Object$class$runtimeClass.newspeakClass = Object$class;
		Class$class$runtimeClass.newspeakClass = Class$class;
		Metaclass$class$runtimeClass.newspeakClass = Metaclass$class;
		Mixin$class$runtimeClass.newspeakClass = Mixin$class;
		UndefinedObject$class$runtimeClass.newspeakClass = UndefinedObject$class;
		Kernel$class$runtimeClass.newspeakClass = Kernel$class;
		
		Object$runtimeClass.newspeakClass = Object;
		Class$runtimeClass.newspeakClass = Class;
		Metaclass$runtimeClass.newspeakClass = Metaclass;
		Mixin$runtimeClass.newspeakClass = Mixin;
		UndefinedObject$runtimeClass.newspeakClass = UndefinedObject;
		Kernel$runtimeClass.newspeakClass = Kernel;
		
		var kernel = Kernel.$usingVmMirror$(this);
		
		//superclass$slot
		Object.$superclass$slot = nil;
		Class.$superclass$slot = Object;
		Metaclass.$superclass$slot = Object;
		Mixin.$superclass$slot = Object;
		UndefinedObject.$superclass$slot = Object;
		Kernel.$superclass$slot = Object;
		
		Object$class.$superclass$slot = Class;
		Class$class.$superclass$slot = Class;
		Metaclass$class.$superclass$slot = Class;
		Mixin$class.$superclass$slot = Class;
		UndefinedObject$class.$superclass$slot = Class;
		Kernel$class.$superclass$slot = Class;
		
		//mixin$slot
		Object.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Object);
		Class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Class);
		Metaclass.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Metaclass);
		Mixin.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Mixin);
		UndefinedObject.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$UndefinedObject);
		Kernel.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8);

		Object$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Object.meta);
		Class$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Class.meta);
		Metaclass$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Metaclass.meta);
		Mixin$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$Mixin.meta);
		UndefinedObject$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.$KernelForV8$UndefinedObject.meta);
		Kernel$class.$mixin$slot = Mixin.$fromRuntimeMixin$(mixins.$KernelForV8.meta);
		
		//enclosingObject$slot
		Object.$enclosingObject$slot = kernel;
		Class.$enclosingObject$slot = kernel;
		Metaclass.$enclosingObject$slot = kernel;
		Mixin.$enclosingObject$slot = kernel;
		UndefinedObject.$enclosingObject$slot = kernel;
		Kernel.$enclosingObject$slot = nil;
		
		Object$class.$enclosingObject$slot = kernel;
		Class$class.$enclosingObject$slot = kernel;
		Metaclass$class.$enclosingObject$slot = kernel;
		Mixin$class.$enclosingObject$slot = kernel;
		UndefinedObject$class.$enclosingObject$slot = kernel;
		Kernel$class.$enclosingObject$slot = nil;
		
		enclosingObjects[0] = kernel;
		enclosingObjects[1] = nil;
		enclosingObjects2[0] = nil;
		
		//name$slot
		Object.$name$slot = "Object";
		Class.$name$slot = "Class";
		Metaclass.$name$slot = "Metaclass";
		Mixin.$name$slot = "Mixin";
		Kernel.$name$slot = "Kernel";
		
		Object$class.$name$slot = "Object class";
		Class$class.$name$slot = "Class class";
		Metaclass$class.$name$slot = "Metaclass class";
		Mixin$class.$name$slot = "Mixin class";
		Kernel$class.$name$slot = "Kernel class";
		
		//runtimeClass
		Object.runtimeClass = Object$runtimeClass;
		Class.runtimeClass = Class$runtimeClass;
		Metaclass.runtimeClass = Metaclass$runtimeClass;
		Mixin.runtimeClass = Mixin$runtimeClass;
		Kernel.runtimeClass = Kernel$runtimeClass;
		
		Object$class.runtimeClass = Metaclass$runtimeClass;
		Class$class.runtimeClass = Metaclass$runtimeClass;
		Metaclass$class.runtimeClass = Metaclass$runtimeClass;
		Mixin$class.runtimeClass = Metaclass$runtimeClass;
		Kernel$class.runtimeClass = Metaclass$runtimeClass;
		
		//thisClass$slot
		Object$class.$thisClass$slot = Object;
		Class$class.$thisClass$slot = Class;
		Metaclass$class.$thisClass$slot = Metaclass;
		Mixin$class.$thisClass$slot = Mixin;
		Kernel$class.$thisClass$slot = Kernel;
		
		kernel.$KernelForV8$Object$slot = Object;
		kernel.$KernelForV8$Class$slot = Class;
		kernel.$KernelForV8$Metaclass$slot = Metaclass;
		kernel.$KernelForV8$Mixin$slot = Mixin;
		
		return kernel;
	};
	this.kernel = this.createKernel();
	
	this.applyTopLevelMixin = function(runtimeMixin){
		return this.$applyMixin$toSuperclass$withEnclosingObjects$(runtimeMixin, this.kernel.$Object(), [nil]);
	};
	
	this.$applyMixin$toSuperclass$withEnclosingObjects$ = function(runtimeMixin, newspeakSuperclass, enclosingObjects){
		
		var Class = this.kernel.$Class();
		var Metaclass = this.kernel.$Metaclass();
		var Mixin = this.kernel.$Mixin();
		
		var runtimeSuperclass = newspeakSuperclass.runtimeClass;
		var runtimeClass = runtimeMixin.invoke(runtimeSuperclass, enclosingObjects);
		var runtimeMetaclass = runtimeMixin.meta.invoke(Class.runtimeClass, enclosingObjects);
		runtimeClass.meta = runtimeMetaclass;
		runtimeMetaclass.nonMeta = runtimeClass;
		
		var newspeakMetaclass = Metaclass.$new();
		var newspeakClass = new runtimeMetaclass.basicNew();
		
		runtimeClass.newspeakClass = newspeakClass;
		runtimeMetaclass.newspeakClass = newspeakMetaclass;//Class;
		
		newspeakMetaclass.$superclass$slot = Class;
		newspeakMetaclass.$mixin$slot = Mixin.$fromRuntimeMixin$(runtimeMixin.meta);
		newspeakMetaclass.$enclosingObject$slot = enclosingObjects[0];
		newspeakMetaclass.$enclosingObjects$slot = enclosingObjects;
		newspeakMetaclass.$name$slot = runtimeMixin.name + " class";
		newspeakMetaclass.$thisClass$slot = newspeakClass;
		newspeakMetaclass.runtimeClass = runtimeMetaclass;
		
		newspeakClass.$superclass$slot = newspeakSuperclass;
		newspeakClass.$mixin$slot = Mixin.$fromRuntimeMixin$(runtimeMixin);
		newspeakClass.$enclosingObject$slot = enclosingObjects[0];
		newspeakClass.$enclosingObjects$slot = enclosingObjects;
		newspeakClass.$name$slot = runtimeMixin.name;
		newspeakClass.runtimeClass = runtimeClass;

		runtimeMixin.applications.push(runtimeClass);
		return newspeakClass;
	};
	
	var specialCharacters = new Object();
	specialCharacters["plus"] = "+";
	specialCharacters["minus"] = "-";
	specialCharacters["times"] = "*";
	specialCharacters["over"] = "/";
	specialCharacters["back"] = "\\";
	specialCharacters["less"] = "<";
	specialCharacters["greater"] = ">";
	specialCharacters["tilde"] = "~";
	specialCharacters["equal"] = "=";
	specialCharacters["at"] = "@";
	specialCharacters["percent"] = "%";
	specialCharacters["pipe"] = "|";
	specialCharacters["amp"] = "&";
	specialCharacters["question"] = "?";
	specialCharacters["bang"] = "!";
	specialCharacters["comma"] = ",";
	
	this.$unmangleSelector$ = function(s) {
		if(s[0] != "$") return "<jsSelector:"+s+">";
		if(s[s.length-1] == "$")
			// Keyword
			return s.substring(1).replace(/\$/g,":");
		if(s[1] == "$")
			// Binary
			return s.substring(2).split("$").map(function(x) {return specialCharacters[x];}).join("");
		// Unary / qualified
	   	return s.substring(1).replace(/\$/g,"`");
	};
	
	this.$mangleSelector$ = function(s) {
		return "$" + s.replace(/\:/g,"$").replace(/\`/g,"$");
	};
};
;

var ns = new (function () {
	this.$RuntimeForV8$slot = vmmirror.applyTopLevelMixin(mixins.$RuntimeForV8);
	this.$KernelForV8$slot = vmmirror.applyTopLevelMixin(mixins.$KernelForV8);
	this.$AliensForV8$slot = vmmirror.applyTopLevelMixin(mixins.$AliensForV8);
	this.$Collections$slot = vmmirror.applyTopLevelMixin(mixins.$Collections);
	this.$GraphicsForHTML5$slot = vmmirror.applyTopLevelMixin(mixins.$GraphicsForHTML5);
	this.$HopscotchForHTML5$slot = vmmirror.applyTopLevelMixin(mixins.$HopscotchForHTML5);
	this.$Streams$slot = vmmirror.applyTopLevelMixin(mixins.$Streams);
	this.$TimeForV8$slot = vmmirror.applyTopLevelMixin(mixins.$TimeForV8);
	this.$ScratchPad$slot = vmmirror.applyTopLevelMixin(mixins.$ScratchPad);
	this.$RuntimeForV8 = (function () {
		return this.$RuntimeForV8$slot;
	});
	this.$KernelForV8 = (function () {
		return this.$KernelForV8$slot;
	});
	this.$AliensForV8 = (function () {
		return this.$AliensForV8$slot;
	});
	this.$Collections = (function () {
		return this.$Collections$slot;
	});
	this.$GraphicsForHTML5 = (function () {
		return this.$GraphicsForHTML5$slot;
	});
	this.$HopscotchForHTML5 = (function () {
		return this.$HopscotchForHTML5$slot;
	});
	this.$Streams = (function () {
		return this.$Streams$slot;
	});
	this.$TimeForV8 = (function () {
		return this.$TimeForV8$slot;
	});
	this.$ScratchPad = (function () {
		return this.$ScratchPad$slot;
	});
	this.$accept16px = (function () {
		return vmmirror.kernel.$Future().$computing$(
		function(){return vmmirror.platform.$aliens().$alienate$(
			function(){ var i = new Image(); i.src ="accept16px.png"; return i;}() );});
	});
	this.$cancel16px = (function () {
		return vmmirror.kernel.$Future().$computing$(
		function(){return vmmirror.platform.$aliens().$alienate$(
			function(){ var i = new Image(); i.src ="cancel16px.png"; return i;}() );});
	});
	this.$disclosureClosedImage = (function () {
		return vmmirror.kernel.$Future().$computing$(
		function(){return vmmirror.platform.$aliens().$alienate$(
			function(){ var i = new Image(); i.src ="disclosureClosedImage.png"; return i;}() );});
	});
	this.$disclosureTransitionImage = (function () {
		return vmmirror.kernel.$Future().$computing$(
		function(){return vmmirror.platform.$aliens().$alienate$(
			function(){ var i = new Image(); i.src ="disclosureTransitionImage.png"; return i;}() );});
	});
	this.$disclosureOpenImage = (function () {
		return vmmirror.kernel.$Future().$computing$(
		function(){return vmmirror.platform.$aliens().$alienate$(
			function(){ var i = new Image(); i.src ="disclosureOpenImage.png"; return i;}() );});
	});
})();

function installDnuHandlersOn (p) {
	([
		"$bufferOrigin$",
		"$MutableAddableList",
		"$applyConstructorUsingEval$",
		"$expandedPresenter",
		"$new$",
		"$setOnce$expandedDefinition$",
		"$truncated",
		"$flushIfFail$",
		"$mangledSelector",
		"$setOnce$disclosureOpenImage$",
		"$alpha",
		"$something$",
		"$DemoSubject",
		"$refresh",
		"$ifFalse$ifTrue$",
		"$setOnce$CharacterSequenceReadWriteStream$",
		"$contentsDo$",
		"$collapsedDefinition",
		"$textX",
		"$superInit$GraphicsForHTML5$Rectangle",
		"$isMeta",
		"$superInit$ScratchPad$Demo",
		"$presenterFor$",
		"$setOnce$BasicOutputReadStream$",
		"$flush",
		"$setOnce$x$",
		"$keysAndValuesDo$",
		"$setOnce$stop$",
		"$EIStream",
		"$visualX",
		"$nextFrameDo$",
		"$scrollIntoView$",
		"$remove$",
		"$setOnce$red$",
		"$hasChildNodes",
		"$superInit$KernelForV8$Object",
		"$sign",
		"$setOnce$Streams$",
		"$superInit$HopscotchForHTML5$Composer",
		"$at$ifPresent$ifAbsentPut$",
		"$superInit$Streams",
		"$tail$",
		"$$over$over",
		"$hasVisual",
		"$include$ifNew$",
		"$doesNotUnderstand$",
		"$navigator",
		"$r$g$b$",
		"$usesDefaultSortBlock_private",
		"$makeSpaceAtStart$",
		"$visualX$",
		"$receiver$message$",
		"$replaceFrom$to$with$",
		"$setOnce$document$",
		"$CharacterInputConverter",
		"$superInit$Streams$CharacterReadConverter",
		"$tail",
		"$superInit$Streams$ExternalReadWriteStream",
		"$next$",
		"$presenter",
		"$expatriate$",
		"$lookup$matchingSlotDo$emptySlotDo$deletedSlotsDo$",
		"$superInit$KernelForV8$Block",
		"$defaultAcceptResponse",
		"$accumulateUntil$",
		"$ExternalInputStream",
		"$setOnce$green$",
		"$externalFlush",
		"$with$with$",
		"$upTo$",
		"$contents",
		"$superInit$Collections$IdentitySet",
		"$superInit$TimeForV8$Timer",
		"$image$",
		"$asInteger",
		"$reduce$ifEmpty$",
		"$isBlock",
		"$expatriateBlock$",
		"$BasicInputStream",
		"$actualSize$",
		"$superInit$KernelForV8$Number",
		"$CanvasFragment",
		"$CharacterSequenceReadWriteStream",
		"$do$separatedBy$",
		"$setOnce$Timer$",
		"$setOnce$IOSequence$",
		"$BasicOutputStream",
		"$superInit$Collections$Bag",
		"$needSpaceAtStart$",
		"$x",
		"$assert$",
		"$SortedList",
		"$position$",
		"$isArray",
		"$dirty",
		"$Character",
		"$superInit$Streams$CharacterReadWriteStream",
		"$setOnce$contentSource$",
		"$valueWithArguments$",
		"$superInit$HopscotchForHTML5$HopscotchShell",
		"$setOnce$kernel$",
		"$unsignedByteAt$",
		"$arguments",
		"$remove$withOccurrences$ifAbsent$",
		"$idFor$",
		"$label$action$",
		"$cancelResponse",
		"$Future",
		"$CharacterConverterWithOutput",
		"$min$",
		"$superInit$Collections$SortedList",
		"$valAt$ifAbsent$",
		"$unmangleSelector$",
		"$dirty$",
		"$internalIndexIsValid$",
		"$scaledR$g$b$a$",
		"$dispatchEvent$",
		"$superInit$HopscotchForHTML5$BlankFragment",
		"$fromCharCode$",
		"$setOnce$text$",
		"$HashedCollection",
		"$tableAt$put$inEmptySlot$",
		"$KernelForV8",
		"$new",
		"$printString",
		"$Color",
		"$superInit$Collections",
		"$setOnce$Subject$",
		"$superInit$AliensForV8",
		"$text",
		"$nextPutAll$",
		"$actualPosition_slot",
		"$superInit$KernelForV8$Class",
		"$expansibility",
		"$setOnce$image$",
		"$table_0",
		"$superInit$Streams$CharacterReadStream",
		"$DeferredContentComposer",
		"$ImplementationBase",
		"$fill",
		"$superInit$TimeForV8",
		"$Set",
		"$userToggle",
		"$setOnce$start$",
		"$setOnce$localStorage$",
		"$text$",
		"$superInit$ScratchPad$Demo$DemoPresenter",
		"$contentHolder",
		"$cull$",
		"$setOnce$CharacterOStream$",
		"$label",
		"$asMutableArrayList",
		"$superInit$Streams$ExternalInputStream",
		"$setOnce$Time$",
		"$coerce$",
		"$CharacterInput",
		"$binaryStream$",
		"$superInit$HopscotchForHTML5$NavigationHistory",
		"$replaceFrom$to$with$startingAt$",
		"$remove$ifAbsent$",
		"$error$",
		"$subject$",
		"$collections",
		"$PaddedFrameComposer",
		"$replaceChild$from$",
		"$occupied",
		"$compressibility$",
		"$ifTrue$",
		"$superInit$HopscotchForHTML5$Presenter",
		"$defaultSort$to$",
		"$between$and$",
		"$firstTableSize",
		"$setOnce$global$",
		"$goodBufferOriginForPosition$",
		"$internalRangeCheck$",
		"$numCharsUpToAscii$",
		"$platform",
		"$nextPut$",
		"$fillBuffer",
		"$changeResponse$",
		"$BlankFragment",
		"$superInit$Streams$ExternalStream",
		"$hopscotch",
		"$write$at$ifFail$",
		"$$less$equal",
		"$actualContent",
		"$changeResponse",
		"$deleted",
		"$close",
		"$hashAt$",
		"$contents_private$",
		"$objToIncludeFor$withExisting$",
		"$setOnce$blue$",
		"$setOnce$body$",
		"$at$put$",
		"$content",
		"$setOnce$disclosureClosedImage$",
		"$fillText$with$with$",
		"$superInit$Collections$Queue$DoubleLink",
		"$$greater",
		"$from$to$by$",
		"$StaticLabelFragment",
		"$enterEditState",
		"$remove$at$",
		"$shouldNotHappen",
		"$superInit$HopscotchForHTML5$CanvasFragment",
		"$setOnce$initialContent$",
		"$size_0",
		"$collapsedPresenter",
		"$createFirstTable",
		"$setOnce$CharacterIStream$",
		"$superInit$KernelForV8$Boolean",
		"$BasicReadStream",
		"$linkAt$",
		"$computing$",
		"$asBag",
		"$print$",
		"$contents$",
		"$arrangeForFinalization",
		"$parent$",
		"$advanceAmount",
		"$usesDefaultSortBlock_private$",
		"$indicesOfSubCollection$",
		"$platform$",
		"$superInit$RuntimeForV8",
		"$setOnce$Presenter$",
		"$ExternalReadStream",
		"$superInit$KernelForV8$Array",
		"$alienate$",
		"$textBeingAccepted$",
		"$nextDeferredAction",
		"$flexDirection",
		"$sin",
		"$link$action$",
		"$superInit$HopscotchForHTML5$ButtonFragment",
		"$actualSize",
		"$on$numElements$",
		"$expandedPresenter$",
		"$asciiValue",
		"$blue",
		"$needSpaceAtEnd$",
		"$applyToStyle$",
		"$noPeekVal",
		"$setOnce$_nsTarget$",
		"$growIfNeeded",
		"$subclassResponsibility",
		"$superInit$Streams$BasicReadWriteStream",
		"$isInEditState$",
		"$class",
		"$head",
		"$indicesOfSubCollection$startingAt$",
		"$rect$with$with$with$",
		"$ExternalStream",
		"$repositioningAt$",
		"$setOnce$bottomColor$",
		"$URL",
		"$Object",
		"$MessageNotUnderstood",
		"$counterfactualBarX$",
		"$presenterX",
		"$setOnce$List$",
		"$size",
		"$superInit$HopscotchForHTML5$PaddedFrameComposer",
		"$userBack$",
		"$superInit$KernelForV8$Error",
		"$makeSpace$beforeIndex$",
		"$disclosureOpenImage",
		"$cr",
		"$includesKey$",
		"$table",
		"$hasSameElementsAs$",
		"$select$",
		"$document",
		"$createPresenter",
		"$withExtent$",
		"$initBinaryStream$",
		"$BasicIExStream",
		"$setOnce$definitions$",
		"$replaceChild$with$",
		"$_nsTarget",
		"$setOnce$URL$",
		"$appendChild$",
		"$actualContent$",
		"$superInit$HopscotchForHTML5$ToggleComposer",
		"$setItem$with$",
		"$add$",
		"$TextEditorFragment",
		"$setTable$",
		"$superInit$GraphicsForHTML5$Canvas",
		"$out",
		"$sortBlock$",
		"$hash",
		"$maxPrintElements",
		"$millisecondClockValue",
		"$leaveEditState",
		"$superInit$Collections$HashedCollection",
		"$lookup$inTable$matchingSlotDo$emptySlotDo$deletedSlotsDo$mismatchingSlotsDo$",
		"$key$",
		"$newForCollectUsingAdd$",
		"$superInit$HopscotchForHTML5",
		"$Number",
		"$setOnce$TextEditorFragment$",
		"$respondToAccept",
		"$ToggleComposer",
		"$createEvent$",
		"$setOnce$EIStream$",
		"$contentsRemaining",
		"$visual",
		"$Collections",
		"$AliensForV8",
		"$quo$",
		"$value$value$",
		"$setOnce$graphics$",
		"$Interval",
		"$lf",
		"$ByteArray",
		"$max$",
		"$postCopy",
		"$Presenter",
		"$DemoPresenter",
		"$superInit$GraphicsForHTML5",
		"$removeLink$",
		"$tableAt$put$inUnusedSlot$",
		"$minTableSize",
		"$last",
		"$SeqCltnReadWriteStream",
		"$DoubleLink",
		"$createElement$",
		"$Demo",
		"$superInit$HopscotchForHTML5$HopscotchWindow",
		"$graphics",
		"$at$putUnicode$",
		"$superInit$Streams$CharacterInput",
		"$sort$to$using$",
		"$alert$",
		"$withAll$",
		"$cos",
		"$expansibility$",
		"$setOnce$deferredContentQueue$",
		"$blockOrValue000",
		"$Platform",
		"$Expat",
		"$superInit$HopscotchForHTML5$Gradient",
		"$Alien",
		"$GraphicsForHTML5",
		"$superInit$HopscotchForHTML5$HolderComposer",
		"$indexFor$",
		"$unicodeValue",
		"$actualAtEnd",
		"$superInit$Streams$CharacterOutput",
		"$nextBufferPosition",
		"$setOnce$description$",
		"$toggleWidget$",
		"$setOnce$Dictionary$",
		"$blank$",
		"$definitions",
		"$new$sortBlock$",
		"$setOnce$BasicOutputStream$",
		"$setOnce$Aliens$",
		"$printOn$",
		"$copy",
		"$size_0$",
		"$Time",
		"$respondToCancel",
		"$removeEvery$startingAt$",
		"$setOnce$OutputInputConverter$",
		"$MutableArrayList",
		"$name",
		"$initialContent$contentSource$",
		"$augmentPrototypes",
		"$actualPosition_slot$",
		"$defaultCancelResponse",
		"$selector",
		"$HopscotchForHTML5",
		"$applyTo$withName$",
		"$superInit$Streams$ExternalOutputStream",
		"$setOnce$EIOStream$",
		"$actualNext",
		"$bottomColor",
		"$setOnce$IdentityDictionary$",
		"$setOnce$content$",
		"$Composer",
		"$Mirrors",
		"$add$beforeIndex$",
		"$definition",
		"$beginPath",
		"$newBuildStream",
		"$history",
		"$core",
		"$setOnce$MutableAddableList$",
		"$keys",
		"$isSortedBy$",
		"$parent",
		"$superInit$GraphicsForHTML5$Point",
		"$setProperty$to$",
		"$actualPosition$",
		"$nextId$",
		"$next",
		"$global",
		"$superInit$KernelForV8$Metaclass",
		"$superInit$HopscotchForHTML5$Fragment",
		"$atEnd",
		"$setOnce$String$",
		"$initMouseEvent$with$with$with$with$with$with$with$with$with$with$with$with$with$with$",
		"$key$matches$",
		"$superInit$HopscotchForHTML5$TextEditorFragment",
		"$Context",
		"$body",
		"$alien$",
		"$$back$back",
		"$$equal",
		"$superInit$HopscotchForHTML5$StaticImageFragment",
		"$extent",
		"$superInit$KernelForV8$String",
		"$stroke",
		"$disclosureClosedImage",
		"$prev$",
		"$peek",
		"$bitShift$",
		"$superclass",
		"$state000",
		"$usesDefaultSortBlock",
		"$reverseDo$",
		"$isKindOfBag",
		"$sortBlock_private",
		"$bitXor$",
		"$localStorage",
		"$nextBufferPosition$",
		"$ifNil$ifNotNil$",
		"$arc$with$with$with$with$",
		"$setOnce$navigator$",
		"$advanceBuffer",
		"$superInit$Collections$Association",
		"$green",
		"$installCollapsedPresenter",
		"$setOnce$SortedCollection$",
		"$setOnce$arguments$",
		"$Bag",
		"$OutputInputConverter",
		"$IOSequence",
		"$Streams",
		"$BasicReadWriteStream",
		"$HopscotchWindow",
		"$onSubject$",
		"$textBeingAccepted",
		"$ifTrue$ifFalse$",
		"$resolve",
		"$asFloat",
		"$ColumnComposer",
		"$ifFalse$",
		"$title",
		"$assert$message$",
		"$LeafFragment",
		"$Canvas",
		"$linkHolding$",
		"$deferredContentQueue",
		"$HyperlinkFragment",
		"$setOnce$BasicIExStream$",
		"$applyMixin$toSuperclass$withEnclosingObjects$",
		"$nothing",
		"$setOnce$Collections$",
		"$toggleWidget",
		"$firstIndex",
		"$setOnce$topColor$",
		"$isExpat",
		"$blockOrValue000$",
		"$isAlien",
		"$setOnce$CharacterConverterWithOutput$",
		"$ReadExternalOutputStream",
		"$at$",
		"$setOnce$alien$",
		"$setOnce$WeakArray$",
		"$occurrencesOf$",
		"$mixin",
		"$signal",
		"$Blob",
		"$byteAt$",
		"$superInit$Streams$SeqCltnReadStream",
		"$contents_private",
		"$kernel",
		"$$greater$equal",
		"$superInit$Collections$MutableList",
		"$disclosureTransitionImage",
		"$setOnce$alpha$",
		"$setVisualText$",
		"$atEndOrPeekIs$",
		"$setOnce$streams$",
		"$getContext$",
		"$openSubject$",
		"$bufferSize",
		"$on$",
		"$increment",
		"$setToEnd",
		"$yourself",
		"$superInit$ScratchPad",
		"$description",
		"$superInit$Streams$SeqCltnReadWriteStream",
		"$newForCollectUsingAtPut$",
		"$collectUsingAtPut$",
		"$identityHash",
		"$sqrt",
		"$origin",
		"$superInit$KernelForV8$Mixin",
		"$moveTo$with$",
		"$getItem$",
		"$controlBarColor",
		"$mixinApply$",
		"$expandedDefinition",
		"$superInit$RuntimeForV8$Platform",
		"$aliens",
		"$superInit$KernelForV8$MessageNotUnderstood",
		"$color",
		"$stop",
		"$coerce$else$",
		"$copyWithSize$",
		"$blackMarket",
		"$HolderComposer",
		"$do$",
		"$superInit$Collections$AddableList",
		"$hashFor$",
		"$buffer$",
		"$includeAll$",
		"$CharacterIStream",
		"$superInit$HopscotchForHTML5$ColumnComposer",
		"$printCharacter",
		"$buildValForKey$element$",
		"$associationsDo$",
		"$simpleName",
		"$accept16px",
		"$binaryStream",
		"$EOStream",
		"$indexOf$",
		"$counterfactualBarX",
		"$contentHolder$",
		"$setOnce$y$",
		"$setOnce$action$",
		"$$comma",
		"$createVisual",
		"$unimplemented",
		"$OrderedCollection",
		"$peekIfAbsent$",
		"$superInit$HopscotchForHTML5$Subject",
		"$shell",
		"$setOnce$time$",
		"$setOnce$EOStream$",
		"$initialContent",
		"$addLast$",
		"$superInit$Collections$MutableArrayList",
		"$bufferOrigin",
		"$superInit$TimeForV8$Time",
		"$initCollection$",
		"$key$value$",
		"$setOnce$increment$",
		"$setOnce$vmmirror$",
		"$tableAt$put$inDeletedSlot$",
		"$writeIfNeededBeforePositionChange",
		"$associationAt$ifAbsent$",
		"$readAt$ifFail$",
		"$lastIndex$",
		"$superInit$HopscotchForHTML5$RowComposer",
		"$superInit$Streams$BasicReadStream",
		"$setOnce$collections$",
		"$subject",
		"$setOnce$CharacterSequenceReadStream$",
		"$setOnce$offsets$",
		"$ExternalOutputStream",
		"$startGap$",
		"$setOnce$Graphics$",
		"$signal$",
		"$initDescriptor$",
		"$$tilde$equal",
		"$MutableHashedMap",
		"$setOnce$history$",
		"$position",
		"$writeBuffer",
		"$initBuffer",
		"$addAll$",
		"$setOnce$Hopscotch$",
		"$action",
		"$bufferNumElements",
		"$installExpandedPresenter",
		"$lineTo$with$",
		"$doClose",
		"$time",
		"$key",
		"$usingVmMirror$",
		"$cancel16px",
		"$Hopscotch",
		"$Map",
		"$keyAtValue$",
		"$offsets",
		"$List",
		"$color$",
		"$Dictionary",
		"$inject$into$",
		"$createTextNode$",
		"$Point",
		"$superInit$Collections$Queue",
		"$not",
		"$setOnce$cancel16px$",
		"$head$",
		"$havePeeked_0$",
		"$copyReplaceAll$with$",
		"$removeKey$",
		"$Aliens",
		"$superInit$Streams$ExternalReadStream",
		"$setOnce$mangledSelector$",
		"$setOnce$OrderedCollection$",
		"$superInit$Streams$CharacterInputConverter",
		"$enclosingObject",
		"$sortBlock_private$",
		"$peekVal",
		"$defaultChangeResponse",
		"$wrapping$",
		"$sendTo$",
		"$setOnce$Kernel$",
		"$SeqCltnReadStream",
		"$asArray",
		"$presenterX$",
		"$setOnce$receiver$",
		"$newCollectionOfSize$",
		"$isExpanded",
		"$Subject",
		"$at$ifAbsent$",
		"$minTableSizeForCapacity$",
		"$$less",
		"$indexOf$ifAbsent$",
		"$at$put$ifNew$",
		"$removeLast",
		"$namespace",
		"$binarySearchFor$between$and$toCompare$",
		"$actualPosition",
		"$setOnce$fragments$",
		"$isUndefined",
		"$streams",
		"$Timer",
		"$medianOf$and$and$using$",
		"$setOnce$message$",
		"$usingPlatform$vmMirror$",
		"$setOnce$window$",
		"$from$to$",
		"$superInit$Streams$CharacterOutputConverter",
		"$removeFirst",
		"$havePeeked",
		"$new$withAll$",
		"$defaultCapacity",
		"$initCapacity$",
		"$TextDisplayFragment",
		"$$at",
		"$setOnce$Map$",
		"$copyReplaceFrom$to$with$",
		"$usingCrLfConvention",
		"$superInit$Collections$Set",
		"$hasSameElementsAndOrderAs$",
		"$collapsedDefinition$expandedDefinition$initiallyExpanded$",
		"$tableAt$put$ifNew$",
		"$start",
		"$acceptResponse",
		"$setOnce$contentHolder$",
		"$origin$corner$",
		"$enclosingObjects",
		"$x$y$",
		"$deferAction$",
		"$markDeleted$",
		"$descriptor",
		"$compressibility",
		"$superInit$GraphicsForHTML5$Context",
		"$BasicOutputReadStream",
		"$sortBlock",
		"$copyUntilFirstColon$",
		"$topColor",
		"$initBuffer$",
		"$withContent$",
		"$enterSubject$",
		"$bufferNumElements$",
		"$includes$",
		"$enterPresenter$",
		"$MutableString",
		"$endGap",
		"$setOnce$corner$",
		"$isString",
		"$collection$matchesElementsAt$",
		"$column$",
		"$rem$",
		"$setOnce$collapsedDefinition$",
		"$NavigationHistory",
		"$model$",
		"$state000$",
		"$detect$ifNone$",
		"$addEventListener$with$",
		"$contentsWritten",
		"$indexOfSubCollection$startingAt$ifAbsent$",
		"$Association",
		"$usingPlatform$",
		"$removeChild$",
		"$setOnce$hopscotch$",
		"$ListReadStream",
		"$superInit$Streams$TempTranscript",
		"$editorX$",
		"$origin$extent$",
		"$bufferSize$",
		"$copyFrom$to$",
		"$corner",
		"$buffer",
		"$nextId",
		"$CharacterSequenceReadStream",
		"$isExpanded$",
		"$StaticImageFragment",
		"$isInEditState",
		"$nextFromPeek",
		"$removeKey$ifAbsent$",
		"$printElementsDo$",
		"$isPoint",
		"$setOnce$origin$",
		"$keysDo$",
		"$textX$",
		"$lastIndex",
		"$deleted$",
		"$table$",
		"$superInit$HopscotchForHTML5$DeferredContentComposer",
		"$collapsedPresenter$",
		"$collect$",
		"$Boolean",
		"$alien",
		"$newTableWithSize$",
		"$width$height$",
		"$superInit$Streams$BasicInputStream",
		"$superInit$Collections$Interval",
		"$superInit$Streams$CharacterInputOutputConverter",
		"$includesIndex$",
		"$installContentVisual$",
		"$atIndex$inTable$occupiedSlotDo$emptySlotDo$deletedSlotDo$",
		"$respondToChange",
		"$y",
		"$floor",
		"$tab",
		"$superInit$KernelForV8$Future",
		"$elementForCopy$",
		"$havePeeked$",
		"$setOnce$Color$",
		"$$plus",
		"$Graphics",
		"$MutableList",
		"$Fragment",
		"$size$",
		"$superInit$HopscotchForHTML5$TextDisplayFragment",
		"$unsignedByteAt$put$",
		"$after$do$",
		"$superInit$Collections$MutableHashedMap",
		"$content$offsets$",
		"$skipTo$",
		"$superInit$HopscotchForHTML5$LeafFragment",
		"$value",
		"$add$withOccurrences$",
		"$SequenceComposer",
		"$indexOf$tableMask$",
		"$red",
		"$swap$with$",
		"$definitions$",
		"$value$",
		"$superInit$Collections$IdentityMutableHashedMap",
		"$updateBufferLocationAfterFlush",
		"$isRectangle",
		"$over$",
		"$space",
		"$collapsed$expanded$initiallyExpanded$",
		"$defaultExpected",
		"$collection$",
		"$table_0$",
		"$superInit$HopscotchForHTML5$HyperlinkFragment",
		"$keyFor$",
		"$asSet",
		"$growTable",
		"$superInit$KernelForV8$UndefinedObject",
		"$setOnce$ListReadWriteStream$",
		"$respondToDownload",
		"$bitAnd$",
		"$readWriteStream",
		"$AddableList",
		"$superInit$AliensForV8$Expat",
		"$pushState$title$",
		"$superInit$AliensForV8$Alien",
		"$superInit$GraphicsForHTML5$Color",
		"$setOnce$Blob$",
		"$String",
		"$ids",
		"$ListReadWriteStream",
		"$superInit$KernelForV8",
		"$peekVal$",
		"$WeakArray",
		"$advanceBufferLocation",
		"$displayPresenter$",
		"$descriptor$",
		"$fragments",
		"$superInit$HopscotchForHTML5$SequenceComposer",
		"$collection",
		"$sort",
		"$image",
		"$isNil",
		"$Rectangle",
		"$crTab$",
		"$EIOStream",
		"$label$",
		"$vmmirror",
		"$newCopyOfSize$thatCanAlsoHoldElementsOf$",
		"$setOnce$ReadExternalOutputStream$",
		"$havePeeked_0",
		"$Block",
		"$contentSource",
		"$superInit$Streams$BasicOutputStream",
		"$requestAnimationFrame$",
		"$equalsBag$",
		"$superInit$ScratchPad$Demo$DemoSubject",
		"$RowComposer",
		"$superInit$Collections$List",
		"$setOnce$ids$",
		"$ButtonFragment",
		"$setOnce$BasicInputStream$",
		"$include$",
		"$setOnce$ListReadStream$",
		"$asCSSString",
		"$tableSizeForCapacity$",
		"$window",
		"$startGap",
		"$IdentityMutableHashedMap",
		"$setOnce$accept16px$",
		"$HopscotchShell",
		"$createObjectURL$",
		"$Array",
		"$Collection",
		"$superInit$KernelForV8$Message",
		"$description$",
		"$contentSource$",
		"$setOnce$core$",
		"$tableAt$put$inMatchingSlot$value$",
		"$augment$withPropertiesOf$",
		"$TimeForV8",
		"$with$",
		"$elementFor$",
		"$superInit$Collections$Collection",
		"$setOnce$Context$",
		"$isEmpty",
		"$timesRepeat$",
		"$at$ifAbsentPut$",
		"$collectUsingAdd$",
		"$addFirst$",
		"$editorX",
		"$setOnce$aliens$",
		"$defaultMedianOf$and$and$",
		"$removeAt$",
		"$cloneNode$",
		"$setOnce$mirrors$",
		"$isFuture",
		"$prev",
		"$setOnce$label$",
		"$nextIfAbsent$",
		"$CharacterOStream",
		"$setOnce$disclosureTransitionImage$",
		"$Error",
		"$setOnce$namespace$",
		"$superInit$HopscotchForHTML5$StaticLabelFragment",
		"$startsWith$",
		"$defaultSortBlock",
		"$CharacterOutput"
	]).forEach((function (sel) {
		p[sel] = (function () {
			return this.$doesNotUnderstand$(vmmirror.kernel.$Message().$selector$arguments$(sel, Array.prototype.slice.call(arguments)));
		});
	}));
};

var runtime = ns.$RuntimeForV8().$packageUsing$(ns);
vmmirror.platform = runtime.$using$(vmmirror);
var app = ns.$ScratchPad().$packageUsing$(ns);
app.$main$args$(vmmirror.platform, []);