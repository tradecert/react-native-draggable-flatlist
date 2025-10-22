var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNodeHandle = findNodeHandle;
exports.typedMemo = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var typedMemo = _react.default.memo;
exports.typedMemo = typedMemo;
function findNodeHandle(ref) {
  if (_reactNative.Platform.OS === "web") {
    return ref && typeof ref === "object" && "current" in ref
      ? ref.current
      : ref;
  }
  return (0, _reactNative.findNodeHandle)(ref);
}
//# sourceMappingURL=utils.js.map
