
var Node = function (val) {
    this.value = val;
    this.leftNode = null;
    this.rightNode = null;
};
Node.prototype = {
    setLeftNode : function (leftValue) {
        this.leftNode = leftValue;
    },
    setRightNode : function (rightValue) {
        this.rightNode = rightValue;
    },
    getLeftNode : function () {
        return this.leftNode;
    },
    getRightNode : function () {
        return this.rightNode;  
    },
    getValue : function () {
        return this.value;
    }
};

var LinkedList = function () {
    this.size = 0;
    this.head = null;
    this.tail = null;
};
LinkedList.prototype = {
    updateLeftRightNode: function (node, leftNode, rightNode) {
        if (!!node) {
            node.setLeftNode (leftNode);
            node.setRightNode (rightNode);
        }
    },
    push : function (value) {
        let newNode = new Node (value);
        this.updateLeftRightNode (newNode, this.tail, null);
        this.updateLeftRightNode (this.tail, !!this.tail ? this.tail.getLeftNode() : null, newNode);
        this.tail = newNode;
        this.size++;
        if (this.head === null) this.head = this.tail;
    },
    pop : function () {
        const value = this.tail.getValue();
        let leftNode = this.tail.getLeftNode();
        this.updateLeftRightNode (leftNode, !!leftNode ? leftNode.getLeftNode() : null, null);
        delete this.tail;
        this.tail = leftNode;
        this.size--;
        return value;
    },
    unshift : function (value) {
        let newNode = new Node (value);
        this.updateLeftRightNode (newNode, null, this.head);
        this.updateLeftRightNode (this.head, newNode, !!this.head ? this.head.getRightNode() : null);
        this.head = newNode;
        this.size++;
        if (this.tail === null) this.tail = this.head;
    },
    shift : function () {
        const value = this.head.getValue();
        let rightNode = this.head.getRightNode();
        this.updateLeftRightNode (rightNode, null, !!rightNode ? rightNode.getRightNode() : null);
        delete this.head;
        this.head = rightNode;
        this.size--;
        return value;
    },
    count : function () {
        return this.size;
    },
    delete : function (value) {
        let it = this.tail;
        while (it !== null) {
            if (it.getValue() === value) {
                let leftNode = it.getLeftNode();
                let rightNode = it.getRightNode();
                if (!!leftNode) {
                    if (!!rightNode) rightNode.setLeftNode(leftNode);
                }
                if (!!rightNode) {
                    if (!!leftNode) leftNode.setRightNode(rightNode);
                }
                delete it;
                this.size--;
                break;
            }
            it = it.getLeftNode();
        }
    }
};

module.exports = LinkedList;