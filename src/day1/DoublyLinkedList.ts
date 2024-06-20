type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {}

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("oh no");
        } else if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        curr = curr as Node<T>;
        const node = { value: item } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            curr.prev.next = curr;
        }
    }

    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}


