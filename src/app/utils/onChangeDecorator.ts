/*
Code to be used instead on NgOnChanges for components
*/

export interface SimpleChanges<T> {
    firstChange: boolean;
    previousValue: T;
    currentValue: T;
    isFistChange: () =>  boolean;
}
export function OnChange<T>(callback: (value: Task, simpleChange?: SimpleChanges<T>) => void) {
    const cachedValueKey = Symbol();
    const isFirstChangeKey = Symbol();
    return (target: any, key: any) => {
            Object.defineProperty(target, key, {
                set: function(value: any) {
                    if (this[cachedValueKey] === value) { return;}
                    if (this[isFirstChangeKey] === undefined) {
                        this[isFirstChangeKey] = true;
                    } else {
                        this[isFirstChangeKey]  = false;
                    }
                    const simpleChange: SimpleChanges<T>  = {
                        firstChange: this[isFirstChangeKey],
                        currentValue: value,
                        previousValue: this[cachedValueKey],
                        isFistChange: () => this[isFirstChangeKey]
                    }
                    this[cachedValueKey] = value;
                    callback.call(this, value, simpleChange);
                },
                get: function() {
                    return this[cachedValueKey]
                }
            });
        }
}