/**
 * Check whether the the provided value is a number.
 *
 * @param value Value to check
 */
function _isNumberValue(value: any) {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

/**
 * Coerces a value to a number.
 *
 * @param value Value to coerce
 * @param fallbackValue Fallback whether the value provided isn't a number
 */
export function coerceNumberValue(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
