var recipes = { "pasta": "carbonara" };

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var keys = Object.assign({}, object);
  return keys;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

