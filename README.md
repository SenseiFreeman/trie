# A simple trie structure

`trie` is a JS library that provides an implementation of the trie data structure. It is mainly used to match a substring from a given string. This library support forward and backward trie.

## Usage
### Initialize a trie
```js
let forward = new Trie();
let backward = new Trie(false);
```

### Adding a string to trie
```js
trie.add(substr);
```

### Removing a string from trie
```js
trie.remove(substr);
```

### Match longest sub string from `givenString` at `fromIndex` position (return sub string's length)
```js
let length = trie.match(givenString, fromIndex);
```