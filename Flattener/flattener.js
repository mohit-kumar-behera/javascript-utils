class Flattener {
  static SEPERATOR = '__';

  _createReturnObj(obj, key) {
    if (!(key in obj)) obj[key] = {};
    return obj[key];
  }

  flattenArr(arr, depth = 1) {
    let result = [];
    arr.forEach(el => {
      if (Array.isArray(el) && depth > 0)
        result.push(...this.flattenArr(el, depth - 1));
      else result.push(el);
    });

    return result;
  }

  flattenObj(obj, parent_key = '', seperator = Flattener.SEPERATOR) {
    let flattened = {};

    Object.keys(obj).forEach(key => {
      const val = obj[key];

      let new_key = parent_key ? parent_key + seperator + key : key;

      if (typeof val === 'object' && val !== null && !Array.isArray(val))
        Object.assign(flattened, this.flattenObj(val, new_key, seperator));
      else flattened[new_key] = val;
    });

    return flattened;
  }

  deflattenObj(obj, seperator = Flattener.SEPERATOR) {
    let deflattened = {};

    const reconstructFlatKeys = (obj, key, val) => {
      if (key.length === 1) {
        console.log('here for ', key);
        obj[key[0]] = val;
        return;
      }
      reconstructFlatKeys(
        this._createReturnObj(obj, key[0]),
        key.slice(1),
        val
      );
    };

    Object.keys(obj).forEach(key => {
      const val = obj[key];

      if (!key.includes(seperator)) {
        deflattened[key] = val;
      } else {
        let key_splitted = key.split(seperator);
        reconstructFlatKeys(
          this._createReturnObj(deflattened, key_splitted[0]),
          key_splitted.slice(1),
          val
        );
      }
    });

    return deflattened;
  }
}

module.exports = new Flattener();
