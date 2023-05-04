type Node<T> = {
    value: T;
    prev?: Node<T>;
};

/**
 * A - B - C - D 
 * tail        head
 * 
 * Adding to a stack : 
 * 
 * A - B - C - D - F (new)
 * 
 * F.prev = D ( this.head )
 * head = F 
 * 
 * Popping from a stack :
 * 
 * A - B - C - D ( remove D )
 * 
 * head = D.prev ( head.prev ) - C 
 * 
 * return head.value ( D )
 */

export default class Stack<T> {
    public length: number;
    private head?: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head;
        this.head = head?.prev;

        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
