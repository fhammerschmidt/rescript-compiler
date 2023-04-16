
(* Copyright (C) 2019-Present Hongbo Zhang, Authors of ReScript
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)

let sorted_keywords = [|
  "AbortController";
  "AbortSignal";
  "AbstractRange";
  "ActiveXObject";
  "AggregateError";
  "AnalyserNode";
  "Animation";
  "AnimationEffect";
  "AnimationEvent";
  "AnimationPlaybackEvent";
  "AnimationTimeline";
  "Array";
  "ArrayBuffer";
  "Atomics";
  "Attr";
  "Audio";
  "AudioBuffer";
  "AudioBufferSourceNode";
  "AudioContext";
  "AudioData";
  "AudioDestinationNode";
  "AudioListener";
  "AudioNode";
  "AudioParam";
  "AudioParamMap";
  "AudioProcessingEvent";
  "AudioScheduledSourceNode";
  "AudioSinkInfo";
  "AudioWorkletNode";
  "BackgroundFetchManager";
  "BackgroundFetchRecord";
  "BackgroundFetchRegistration";
  "BarProp";
  "BaseAudioContext";
  "BeforeInstallPromptEvent";
  "BeforeUnloadEvent";
  "BigInt";
  "BigInt64Array";
  "BigUint64Array";
  "BiquadFilterNode";
  "Blob";
  "BlobEvent";
  "BluetoothUUID";
  "Boolean";
  "BroadcastChannel";
  "BrowserCaptureMediaStreamTrack";
  "Buffer";
  "ByteLengthQueuingStrategy";
  "CDATASection";
  "CSS";
  "CSSAnimation";
  "CSSConditionRule";
  "CSSContainerRule";
  "CSSCounterStyleRule";
  "CSSFontFaceRule";
  "CSSFontPaletteValuesRule";
  "CSSGroupingRule";
  "CSSImageValue";
  "CSSImportRule";
  "CSSKeyframeRule";
  "CSSKeyframesRule";
  "CSSKeywordValue";
  "CSSLayerBlockRule";
  "CSSLayerStatementRule";
  "CSSMathClamp";
  "CSSMathInvert";
  "CSSMathMax";
  "CSSMathMin";
  "CSSMathNegate";
  "CSSMathProduct";
  "CSSMathSum";
  "CSSMathValue";
  "CSSMatrixComponent";
  "CSSMediaRule";
  "CSSNamespaceRule";
  "CSSNumericArray";
  "CSSNumericValue";
  "CSSPageRule";
  "CSSPerspective";
  "CSSPositionValue";
  "CSSPropertyRule";
  "CSSRotate";
  "CSSRule";
  "CSSRuleList";
  "CSSScale";
  "CSSSkew";
  "CSSSkewX";
  "CSSSkewY";
  "CSSStyleDeclaration";
  "CSSStyleRule";
  "CSSStyleSheet";
  "CSSStyleValue";
  "CSSSupportsRule";
  "CSSTransformComponent";
  "CSSTransformValue";
  "CSSTransition";
  "CSSTranslate";
  "CSSUnitValue";
  "CSSUnparsedValue";
  "CSSVariableReferenceValue";
  "CanvasCaptureMediaStreamTrack";
  "CanvasFilter";
  "CanvasGradient";
  "CanvasPattern";
  "CanvasRenderingContext2D";
  "ChannelMergerNode";
  "ChannelSplitterNode";
  "CharacterData";
  "ClipboardEvent";
  "CloseEvent";
  "Comment";
  "CompositionEvent";
  "CompressionStream";
  "ConstantSourceNode";
  "ContentVisibilityAutoStateChangeEvent";
  "ConvolverNode";
  "CountQueuingStrategy";
  "CropTarget";
  "Crypto";
  "CustomElementRegistry";
  "CustomEvent";
  "CustomStateSet";
  "DOMError";
  "DOMException";
  "DOMImplementation";
  "DOMMatrix";
  "DOMMatrixReadOnly";
  "DOMParser";
  "DOMPoint";
  "DOMPointReadOnly";
  "DOMQuad";
  "DOMRect";
  "DOMRectList";
  "DOMRectReadOnly";
  "DOMStringList";
  "DOMStringMap";
  "DOMTokenList";
  "DataTransfer";
  "DataTransferItem";
  "DataTransferItemList";
  "DataView";
  "Date";
  "DecompressionStream";
  "DelayNode";
  "DelegatedInkTrailPresenter";
  "Document";
  "DocumentFragment";
  "DocumentTimeline";
  "DocumentType";
  "DragEvent";
  "DynamicsCompressorNode";
  "Element";
  "ElementInternals";
  "EncodedAudioChunk";
  "EncodedVideoChunk";
  "Error";
  "ErrorEvent";
  "EvalError";
  "Event";
  "EventCounts";
  "EventSource";
  "EventTarget";
  "External";
  "FeaturePolicy";
  "File";
  "FileList";
  "FileReader";
  "FinalizationRegistry";
  "Float32Array";
  "Float64Array";
  "FocusEvent";
  "FontFace";
  "FontFaceSetLoadEvent";
  "FormData";
  "FormDataEvent";
  "FragmentDirective";
  "Function";
  "GainNode";
  "Gamepad";
  "GamepadButton";
  "GamepadEvent";
  "GamepadHapticActuator";
  "Geolocation";
  "GeolocationCoordinates";
  "GeolocationPosition";
  "GeolocationPositionError";
  "HTMLAllCollection";
  "HTMLAnchorElement";
  "HTMLAreaElement";
  "HTMLAudioElement";
  "HTMLBRElement";
  "HTMLBaseElement";
  "HTMLBodyElement";
  "HTMLButtonElement";
  "HTMLCanvasElement";
  "HTMLCollection";
  "HTMLDListElement";
  "HTMLDataElement";
  "HTMLDataListElement";
  "HTMLDetailsElement";
  "HTMLDialogElement";
  "HTMLDirectoryElement";
  "HTMLDivElement";
  "HTMLDocument";
  "HTMLElement";
  "HTMLEmbedElement";
  "HTMLFieldSetElement";
  "HTMLFontElement";
  "HTMLFormControlsCollection";
  "HTMLFormElement";
  "HTMLFrameElement";
  "HTMLFrameSetElement";
  "HTMLHRElement";
  "HTMLHeadElement";
  "HTMLHeadingElement";
  "HTMLHtmlElement";
  "HTMLIFrameElement";
  "HTMLImageElement";
  "HTMLInputElement";
  "HTMLLIElement";
  "HTMLLabelElement";
  "HTMLLegendElement";
  "HTMLLinkElement";
  "HTMLMapElement";
  "HTMLMarqueeElement";
  "HTMLMediaElement";
  "HTMLMenuElement";
  "HTMLMetaElement";
  "HTMLMeterElement";
  "HTMLModElement";
  "HTMLOListElement";
  "HTMLObjectElement";
  "HTMLOptGroupElement";
  "HTMLOptionElement";
  "HTMLOptionsCollection";
  "HTMLOutputElement";
  "HTMLParagraphElement";
  "HTMLParamElement";
  "HTMLPictureElement";
  "HTMLPreElement";
  "HTMLProgressElement";
  "HTMLQuoteElement";
  "HTMLScriptElement";
  "HTMLSelectElement";
  "HTMLSlotElement";
  "HTMLSourceElement";
  "HTMLSpanElement";
  "HTMLStyleElement";
  "HTMLTableCaptionElement";
  "HTMLTableCellElement";
  "HTMLTableColElement";
  "HTMLTableElement";
  "HTMLTableRowElement";
  "HTMLTableSectionElement";
  "HTMLTemplateElement";
  "HTMLTextAreaElement";
  "HTMLTimeElement";
  "HTMLTitleElement";
  "HTMLTrackElement";
  "HTMLUListElement";
  "HTMLUnknownElement";
  "HTMLVideoElement";
  "HashChangeEvent";
  "Headers";
  "Highlight";
  "HighlightRegistry";
  "History";
  "IDBCursor";
  "IDBCursorWithValue";
  "IDBDatabase";
  "IDBFactory";
  "IDBIndex";
  "IDBKeyRange";
  "IDBObjectStore";
  "IDBOpenDBRequest";
  "IDBRequest";
  "IDBTransaction";
  "IDBVersionChangeEvent";
  "IIRFilterNode";
  "IdleDeadline";
  "Image";
  "ImageBitmap";
  "ImageBitmapRenderingContext";
  "ImageCapture";
  "ImageData";
  "ImageTrack";
  "ImageTrackList";
  "Infinity";
  "Ink";
  "InputDeviceCapabilities";
  "InputDeviceInfo";
  "InputEvent";
  "Int16Array";
  "Int32Array";
  "Int8Array";
  "IntersectionObserver";
  "IntersectionObserverEntry";
  "Intl";
  "JSON";
  "KeyboardEvent";
  "KeyframeEffect";
  "LargestContentfulPaint";
  "LaunchParams";
  "LaunchQueue";
  "LayoutShift";
  "LayoutShiftAttribution";
  "Location";
  "Map";
  "Math";
  "MathMLElement";
  "MediaCapabilities";
  "MediaElementAudioSourceNode";
  "MediaEncryptedEvent";
  "MediaError";
  "MediaList";
  "MediaMetadata";
  "MediaQueryList";
  "MediaQueryListEvent";
  "MediaRecorder";
  "MediaSession";
  "MediaSource";
  "MediaSourceHandle";
  "MediaStream";
  "MediaStreamAudioDestinationNode";
  "MediaStreamAudioSourceNode";
  "MediaStreamEvent";
  "MediaStreamTrack";
  "MediaStreamTrackEvent";
  "MediaStreamTrackGenerator";
  "MediaStreamTrackProcessor";
  "MessageChannel";
  "MessageEvent";
  "MessagePort";
  "MimeType";
  "MimeTypeArray";
  "MouseEvent";
  "MutationEvent";
  "MutationObserver";
  "MutationRecord";
  "NaN";
  "NamedNodeMap";
  "NavigateEvent";
  "Navigation";
  "NavigationCurrentEntryChangeEvent";
  "NavigationDestination";
  "NavigationHistoryEntry";
  "NavigationTransition";
  "Navigator";
  "NavigatorUAData";
  "NetworkInformation";
  "Node";
  "NodeFilter";
  "NodeIterator";
  "NodeList";
  "Notification";
  "Number";
  "Object";
  "OfflineAudioCompletionEvent";
  "OfflineAudioContext";
  "OffscreenCanvas";
  "OffscreenCanvasRenderingContext2D";
  "Option";
  "OscillatorNode";
  "OverconstrainedError";
  "PageTransitionEvent";
  "PannerNode";
  "Path2D";
  "PaymentManager";
  "PaymentRequestUpdateEvent";
  "Performance";
  "PerformanceElementTiming";
  "PerformanceEntry";
  "PerformanceEventTiming";
  "PerformanceLongTaskTiming";
  "PerformanceMark";
  "PerformanceMeasure";
  "PerformanceNavigation";
  "PerformanceNavigationTiming";
  "PerformanceObserver";
  "PerformanceObserverEntryList";
  "PerformancePaintTiming";
  "PerformanceResourceTiming";
  "PerformanceServerTiming";
  "PerformanceTiming";
  "PeriodicSyncManager";
  "PeriodicWave";
  "PermissionStatus";
  "Permissions";
  "PictureInPictureEvent";
  "PictureInPictureWindow";
  "Plugin";
  "PluginArray";
  "PointerEvent";
  "PopStateEvent";
  "ProcessingInstruction";
  "Profiler";
  "ProgressEvent";
  "Promise";
  "PromiseRejectionEvent";
  "Proxy";
  "PushManager";
  "PushSubscription";
  "PushSubscriptionOptions";
  "RTCCertificate";
  "RTCDTMFSender";
  "RTCDTMFToneChangeEvent";
  "RTCDataChannel";
  "RTCDataChannelEvent";
  "RTCDtlsTransport";
  "RTCEncodedAudioFrame";
  "RTCEncodedVideoFrame";
  "RTCError";
  "RTCErrorEvent";
  "RTCIceCandidate";
  "RTCIceTransport";
  "RTCPeerConnection";
  "RTCPeerConnectionIceErrorEvent";
  "RTCPeerConnectionIceEvent";
  "RTCRtpReceiver";
  "RTCRtpSender";
  "RTCRtpTransceiver";
  "RTCSctpTransport";
  "RTCSessionDescription";
  "RTCStatsReport";
  "RTCTrackEvent";
  "RadioNodeList";
  "Range";
  "RangeError";
  "ReadableByteStreamController";
  "ReadableStream";
  "ReadableStreamBYOBReader";
  "ReadableStreamBYOBRequest";
  "ReadableStreamDefaultController";
  "ReadableStreamDefaultReader";
  "ReferenceError";
  "Reflect";
  "RegExp";
  "RemotePlayback";
  "ReportingObserver";
  "Request";
  "ResizeObserver";
  "ResizeObserverEntry";
  "ResizeObserverSize";
  "Response";
  "SVGAElement";
  "SVGAngle";
  "SVGAnimateElement";
  "SVGAnimateMotionElement";
  "SVGAnimateTransformElement";
  "SVGAnimatedAngle";
  "SVGAnimatedBoolean";
  "SVGAnimatedEnumeration";
  "SVGAnimatedInteger";
  "SVGAnimatedLength";
  "SVGAnimatedLengthList";
  "SVGAnimatedNumber";
  "SVGAnimatedNumberList";
  "SVGAnimatedPreserveAspectRatio";
  "SVGAnimatedRect";
  "SVGAnimatedString";
  "SVGAnimatedTransformList";
  "SVGAnimationElement";
  "SVGCircleElement";
  "SVGClipPathElement";
  "SVGComponentTransferFunctionElement";
  "SVGDefsElement";
  "SVGDescElement";
  "SVGElement";
  "SVGEllipseElement";
  "SVGFEBlendElement";
  "SVGFEColorMatrixElement";
  "SVGFEComponentTransferElement";
  "SVGFECompositeElement";
  "SVGFEConvolveMatrixElement";
  "SVGFEDiffuseLightingElement";
  "SVGFEDisplacementMapElement";
  "SVGFEDistantLightElement";
  "SVGFEDropShadowElement";
  "SVGFEFloodElement";
  "SVGFEFuncAElement";
  "SVGFEFuncBElement";
  "SVGFEFuncGElement";
  "SVGFEFuncRElement";
  "SVGFEGaussianBlurElement";
  "SVGFEImageElement";
  "SVGFEMergeElement";
  "SVGFEMergeNodeElement";
  "SVGFEMorphologyElement";
  "SVGFEOffsetElement";
  "SVGFEPointLightElement";
  "SVGFESpecularLightingElement";
  "SVGFESpotLightElement";
  "SVGFETileElement";
  "SVGFETurbulenceElement";
  "SVGFilterElement";
  "SVGForeignObjectElement";
  "SVGGElement";
  "SVGGeometryElement";
  "SVGGradientElement";
  "SVGGraphicsElement";
  "SVGImageElement";
  "SVGLength";
  "SVGLengthList";
  "SVGLineElement";
  "SVGLinearGradientElement";
  "SVGMPathElement";
  "SVGMarkerElement";
  "SVGMaskElement";
  "SVGMatrix";
  "SVGMetadataElement";
  "SVGNumber";
  "SVGNumberList";
  "SVGPathElement";
  "SVGPatternElement";
  "SVGPoint";
  "SVGPointList";
  "SVGPolygonElement";
  "SVGPolylineElement";
  "SVGPreserveAspectRatio";
  "SVGRadialGradientElement";
  "SVGRect";
  "SVGRectElement";
  "SVGSVGElement";
  "SVGScriptElement";
  "SVGSetElement";
  "SVGStopElement";
  "SVGStringList";
  "SVGStyleElement";
  "SVGSwitchElement";
  "SVGSymbolElement";
  "SVGTSpanElement";
  "SVGTextContentElement";
  "SVGTextElement";
  "SVGTextPathElement";
  "SVGTextPositioningElement";
  "SVGTitleElement";
  "SVGTransform";
  "SVGTransformList";
  "SVGUnitTypes";
  "SVGUseElement";
  "SVGViewElement";
  "Scheduler";
  "Scheduling";
  "Screen";
  "ScreenOrientation";
  "ScriptProcessorNode";
  "SecurityPolicyViolationEvent";
  "Selection";
  "Set";
  "ShadowRoot";
  "SharedWorker";
  "SourceBuffer";
  "SourceBufferList";
  "SpeechSynthesisErrorEvent";
  "SpeechSynthesisEvent";
  "SpeechSynthesisUtterance";
  "StaticRange";
  "StereoPannerNode";
  "Storage";
  "StorageEvent";
  "String";
  "StylePropertyMap";
  "StylePropertyMapReadOnly";
  "StyleSheet";
  "StyleSheetList";
  "SubmitEvent";
  "Symbol";
  "SyncManager";
  "SyntaxError";
  "TaskAttributionTiming";
  "TaskController";
  "TaskPriorityChangeEvent";
  "TaskSignal";
  "Text";
  "TextDecoder";
  "TextDecoderStream";
  "TextEncoder";
  "TextEncoderStream";
  "TextEvent";
  "TextMetrics";
  "TextTrack";
  "TextTrackCue";
  "TextTrackCueList";
  "TextTrackList";
  "TimeRanges";
  "Touch";
  "TouchEvent";
  "TouchList";
  "TrackEvent";
  "TransformStream";
  "TransformStreamDefaultController";
  "TransitionEvent";
  "TreeWalker";
  "TrustedHTML";
  "TrustedScript";
  "TrustedScriptURL";
  "TrustedTypePolicy";
  "TrustedTypePolicyFactory";
  "TypeError";
  "UIEvent";
  "URIError";
  "URL";
  "URLPattern";
  "URLSearchParams";
  "Uint16Array";
  "Uint32Array";
  "Uint8Array";
  "Uint8ClampedArray";
  "UserActivation";
  "VTTCue";
  "ValidityState";
  "VideoColorSpace";
  "VideoFrame";
  "VideoPlaybackQuality";
  "ViewTransition";
  "VirtualKeyboardGeometryChangeEvent";
  "VisualViewport";
  "WaveShaperNode";
  "WeakMap";
  "WeakRef";
  "WeakSet";
  "WebAssembly";
  "WebGL2RenderingContext";
  "WebGLActiveInfo";
  "WebGLBuffer";
  "WebGLContextEvent";
  "WebGLFramebuffer";
  "WebGLProgram";
  "WebGLQuery";
  "WebGLRenderbuffer";
  "WebGLRenderingContext";
  "WebGLSampler";
  "WebGLShader";
  "WebGLShaderPrecisionFormat";
  "WebGLSync";
  "WebGLTexture";
  "WebGLTransformFeedback";
  "WebGLUniformLocation";
  "WebGLVertexArrayObject";
  "WebKitCSSMatrix";
  "WebKitMutationObserver";
  "WebSocket";
  "WheelEvent";
  "Window";
  "WindowControlsOverlay";
  "WindowControlsOverlayGeometryChangeEvent";
  "Worker";
  "WritableStream";
  "WritableStreamDefaultController";
  "WritableStreamDefaultWriter";
  "XDomainRequest";
  "XMLDocument";
  "XMLHttpRequest";
  "XMLHttpRequestEventTarget";
  "XMLHttpRequestUpload";
  "XMLSerializer";
  "XPathEvaluator";
  "XPathExpression";
  "XPathResult";
  "XSLTProcessor";
  "__dirname";
  "__esModule";
  "__filename";
  "abstract";
  "arguments";
  "await";
  "boolean";
  "break";
  "byte";
  "case";
  "catch";
  "char";
  "class";
  "clearImmediate";
  "clearInterval";
  "clearTimeout";
  "console";
  "const";
  "continue";
  "debugger";
  "decodeURI";
  "decodeURIComponent";
  "default";
  "delete";
  "do";
  "document";
  "double";
  "else";
  "encodeURI";
  "encodeURIComponent";
  "enum";
  "escape";
  "eval";
  "event";
  "export";
  "exports";
  "extends";
  "false";
  "fetch";
  "final";
  "finally";
  "float";
  "for";
  "function";
  "global";
  "goto";
  "if";
  "implements";
  "import";
  "in";
  "instanceof";
  "int";
  "interface";
  "isFinite";
  "isNaN";
  "let";
  "location";
  "long";
  "module";
  "native";
  "navigator";
  "new";
  "null";
  "package";
  "parseFloat";
  "parseInt";
  "private";
  "process";
  "protected";
  "public";
  "require";
  "return";
  "setImmediate";
  "setInterval";
  "setTimeout";
  "short";
  "static";
  "super";
  "switch";
  "synchronized";
  "this";
  "throw";
  "transient";
  "true";
  "try";
  "typeof";
  "undefined";
  "unescape";
  "var";
  "void";
  "volatile";
  "while";
  "window";
  "with";
  "yield";
  |]


type element = string 

let rec binarySearchAux (arr : element array) (lo : int) (hi : int) key : bool =   
    let mid = (lo + hi)/2 in 
    let midVal = Array.unsafe_get arr mid in 
    (* let c = cmp key midVal [@bs] in  *)
    if key = midVal then true 
    else if key < midVal then  (*  a[lo] =< key < a[mid] <= a[hi] *)
      if hi = mid then  
        (Array.unsafe_get arr lo) = key 
      else binarySearchAux arr lo mid key 
    else  (*  a[lo] =< a[mid] < key <= a[hi] *)
      if lo = mid then 
        (Array.unsafe_get arr hi) = key 
      else binarySearchAux arr mid hi key 

let binarySearch (sorted : element array) (key : element)  : bool =  
  let len = Array.length sorted in 
  if len = 0 then false
  else 
    let lo = Array.unsafe_get sorted 0 in 
    (* let c = cmp key lo [@bs] in  *)
    if key < lo then false
    else
    let hi = Array.unsafe_get sorted (len - 1) in 
    (* let c2 = cmp key hi [@bs]in  *)
    if key > hi then false
    else binarySearchAux sorted 0 (len - 1) key 

let is_reserved s = binarySearch sorted_keywords s     
