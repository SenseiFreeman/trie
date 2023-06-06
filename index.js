function* iterateCharCodesForward(s, index) {
    if (typeof s !== "string")
        throw new Error("Parameter must be string");

    index |= 0;

    if (index < 0)
        index = 0;

    for (let i = index; i < s.length; i++)
        yield s.charCodeAt(i);
}

function* iterateCharCodesBackward(s, index) {
    if (typeof s !== "string")
        throw new Error("Parameter must be string");

    if (!Number.isSafeInteger(index) || index >= s.length) {
        index = s.length;
        index--;
    }

    for (let i = index; i >= 0; i--)
        yield s.charCodeAt(i);
}

class Trie {
    constructor(iterateForward = true) {
        let iterateCharCodes = iterateForward ? iterateCharCodesForward : iterateCharCodesBackward;
        let root = new Map();

        this.add = function (s) {
            let node = root;

            for (let code of iterateCharCodes(s)) {
                if (!node.has(code))
                    node.set(code, new Map());

                node = node.get(code);
            }

            node.word = true;
        }

        this.remove = function (s) {
            let node = root;

            for (let code of iterateCharCodes(s)) {
                node = node.get(code);

                if (!node)
                    return;
            }

            node.word = false;
        }

        this.match = function (s, index) {
            let result = 0;
            let current = 0;
            let node = root;

            for (let code of iterateCharCodes(s, index)) {
                current++;
                node = node.get(code);

                if (!node)
                    return result;

                if (node.word)
                    result = current;
            }

            return result;
        }
    }
}

export {
    iterateCharCodesForward,
    iterateCharCodesBackward,
    Trie
}

export default Trie;